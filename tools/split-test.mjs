// Lesson text loads on demand: this renders every route twice — once with
// all modules in one script (as before the split) and once with the shipped
// script.js + content/*.json — and checks each page comes out identical
// (generated element ids are numbered by render order, so they're ignored).
// Also checks a lesson works offline once the service worker has cached it.
// Usage: node tools/split-test.mjs
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { root } from './load.mjs';
import { startServer, launchBrowser } from './browser.mjs';

const src = join(root, 'src');
const full = readdirSync(src).filter((f) => /^\d.*\.js$/.test(f) && f !== '05l-content.js').sort().map((f) => readFileSync(join(src, f), 'utf8')).join('')
  // the one-bundle app has everything already: no loading step
  .replace(/function router\(\) \{/, 'const contentFor = () => null; const hasContent = () => true; const loadContent = () => Promise.resolve();\nfunction router() {');
const seeded = `(() => { let s = 42; Math.random = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; })();`;

async function render(serveFull, routes) {
  const server = await startServer({ override: (p) => (serveFull && p === 'script.js' ? full : null) });
  const b = await launchBrowser();
  await b.cdp('Page.enable');
  await b.cdp('Page.addScriptToEvaluateOnNewDocument', { source: seeded });
  await b.cdp('Emulation.setDeviceMetricsOverride', { width: 1366, height: 900, deviceScaleFactor: 1, mobile: false });
  await b.cdp('Page.navigate', { url: server.base + '#/dashboard' });
  await new Promise((r) => setTimeout(r, 1500));
  if (!routes) {
    routes = await b.evaluate(`(async () => {
      const wait = (ms) => new Promise((r) => setTimeout(r, ms));
      const out = ['#/dashboard', '#/curriculum', '#/practice', '#/exercises', '#/review', '#/flashcards', '#/glossary', '#/reference', '#/library', '#/software', '#/simulations', '#/achievements', '#/bookmarks', '#/scenarios', '#/trees', '#/calculators', '#/fleet'];
      for (const a of document.querySelectorAll('#navTracks a')) { const t = a.getAttribute('href'); out.push(t, t.replace('track', 'final')); location.hash = t; await wait(60); document.querySelectorAll('#view a[href^="#/lesson"], #view a[href^="#/quiz"], #view a[href^="#/cheatsheet"]').forEach((x) => out.push(x.getAttribute('href'))); }
      return [...new Set(out)];
    })()`);
  }
  const pages = {};
  for (const r of routes) {
    await b.evaluate(`location.hash = ${JSON.stringify(r)}, true`);
    for (let i = 0; i < 50; i++) { await new Promise((res) => setTimeout(res, 40)); if (await b.evaluate(`!document.querySelector('#view[aria-busy]') && document.title.includes(' · ')`)) break; }
    await new Promise((res) => setTimeout(res, 40));
    const html = await b.evaluate(`document.title + '\\n' + document.querySelector('#view').innerHTML`);
    pages[r] = html.replace(/ class="[^"]*is-entering[^"]*"/g, '')
      // each pass runs on its own local port (it appears in Report a problem links)
      .replace(/127\.0\.0\.1(%3A|:)\d+/g, 'HOST')
      // ids from nextId() (prefix-<counter>) depend on render order
      .replace(/\b(acc|arr|exacc|ex|flc|flh|modal|mod|ply|rq|tabs|tl)-\d+/g, '$1-N');
  }
  // offline: once the service worker has everything, a lesson opens without the network
  let offline = null;
  if (!serveFull) {
    await b.evaluate(`navigator.serviceWorker.ready.then(() => true)`);
    for (let i = 0; i < 50 && !(await b.evaluate(`caches.keys().then(async (k) => k.length && (await (await caches.open(k[0])).keys()).some((q) => q.url.includes('content/expert.json')))`)); i++) await new Promise((res) => setTimeout(res, 200));
    await b.cdp('Network.enable');
    await b.cdp('Network.emulateNetworkConditions', { offline: true, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
    await b.cdp('Page.navigate', { url: server.base + '#/lesson/expert/m6/l2' });
    await new Promise((res) => setTimeout(res, 2500));
    offline = await b.evaluate(`document.title`);
  }
  const errors = b.exceptions.slice();
  await b.close(); server.close();
  return { routes, pages, offline, errors };
}

/* Search and the review badge before any lesson text has loaded. */
async function coldStart() {
  const server = await startServer(); const b = await launchBrowser();
  await b.cdp('Page.enable');
  await b.cdp('Page.addScriptToEvaluateOnNewDocument', { source: `localStorage.setItem('mca.v1', JSON.stringify({ missed: { 'beginner.m9.l1#0': { n: 1, at: 1, box: 0, due: 0 }, 'advanced.m1.l1#0': { n: 1, at: 1, box: 1, due: 9e15 } } }));` });
  await b.cdp('Page.navigate', { url: server.base + '#/dashboard' });
  await new Promise((r) => setTimeout(r, 1500));
  const r = await b.evaluate(`(async () => {
    const loadedEarly = performance.getEntriesByType('resource').some((e) => e.name.includes('/content/'));
    const badge = document.querySelector('#navMissed').textContent;
    document.querySelector('#searchBtn').click(); await new Promise((r) => setTimeout(r, 100));
    const inp = document.querySelector('#palQ'); inp.value = 'safety-affecting'; inp.dispatchEvent(new Event('input'));
    for (let i = 0; i < 50 && !/DVIR Loop/.test(document.querySelector('#palRes').textContent); i++) await new Promise((r) => setTimeout(r, 100));
    return { loadedEarly, badge, found: /DVIR Loop/.test(document.querySelector('#palRes').textContent) };
  })()`);
  const errors = b.exceptions.slice(); await b.close(); server.close();
  return Object.assign(r, { errors });
}
const cold = await coldStart();

const before = await render(true);
const after = await render(false, before.routes);
const fail = [];
const check = (ok, label) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${label}`); if (!ok) fail.push(label); };
const diff = before.routes.filter((r) => before.pages[r] !== after.pages[r]);
check(diff.length === 0, `${before.routes.length} routes render identically with on-demand lesson text${diff.length ? ' — differ: ' + diff.slice(0, 8).join(', ') : ''}`);
if (diff.length) {
  const r = diff[0]; const a = before.pages[r], b = after.pages[r]; let i = 0; while (i < a.length && a[i] === b[i]) i++;
  console.log(`  first difference on ${r}:\n    one bundle: …${a.slice(Math.max(0, i - 80), i + 120)}\n    split:      …${b.slice(Math.max(0, i - 80), i + 120)}`);
}
check(/Warranty Communication/.test(after.offline || ''), `a lesson opens offline after the first visit (${after.offline})`);
check(!cold.loadedEarly, 'the dashboard loads no lesson text');
check(cold.badge === '1', `review badge counts questions due now before lesson text loads (${cold.badge})`);
check(cold.found, 'search finds words that are only in lesson takeaways (loads them on demand)');
check(!cold.errors.length && !before.errors.length && !after.errors.length, `no script errors${[...cold.errors, ...before.errors, ...after.errors].length ? ': ' + [...cold.errors, ...before.errors, ...after.errors].join(' | ') : ''}`);
if (fail.length) { console.log(`\n${fail.length} failed.`); process.exit(1); }
console.log('\nOn-demand lesson text passed.');
