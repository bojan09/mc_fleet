// Browser sweep: serves the site locally, opens it in headless Edge/Chrome and
// visits every route at phone, tablet and desktop widths, reporting script
// errors, horizontal overflow, skipped heading levels, missing pages and
// broken images. No dependencies (Node 22+ for the built-in WebSocket).
// Usage: node tools/sweep.mjs            (BROWSER=path\to\chrome.exe to override)
import { startServer, launchBrowser } from './browser.mjs';

const WIDTHS = [[375, 812], [768, 1024], [1366, 900]];
const server = await startServer();
const base = server.base;
const { cdp, evaluate, exceptions, close } = await launchBrowser();

/* Runs inside the page: collects routes from the live app and checks each. */
const SWEEP = `(async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const routes = ['#/dashboard', '#/curriculum', '#/practice', '#/scenarios', '#/trees', '#/exercises', '#/flashcards', '#/calculators', '#/fleet', '#/glossary', '#/library', '#/reference', '#/bookmarks', '#/achievements', '#/software', '#/privacy', '#/review', '#/simulations', '#/trainer', '#/verify', '#/verify/ABCDEFGH23'];
  ${'$'}{EXTRA}
  for (const t of TRACKS_IDS) { location.hash = '#/track/' + t; await wait(40); routes.push('#/track/' + t, '#/final/' + t); document.querySelectorAll('#view a[href^="#/lesson"], #view a[href^="#/quiz"], #view a[href^="#/cheatsheet"]').forEach((a) => routes.push(a.getAttribute('href'))); }
  for (const r of ['#/software', '#/library']) { location.hash = r; await wait(40); document.querySelectorAll('#view a[href^="#/software/"], #view a[href^="#/library/"]').forEach((a) => routes.push(a.getAttribute('href'))); }
  const out = [];
  for (const r of [...new Set(routes)]) {
    location.hash = r; await wait(60);
    const problems = [];
    const ow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
    if (ow > 0) problems.push('page scrolls sideways by ' + ow + 'px');
    // #main clips overflow, so also look for content that pokes past the viewport
    // (ignoring anything inside a container that scrolls or hides on purpose).
    const vw = document.documentElement.clientWidth; let cut = null;
    for (const el of document.querySelectorAll('#view *')) {
      const r = el.getBoundingClientRect();
      if (r.right <= vw + 1 || r.width === 0 || el.closest('.sr-only')) continue;
      let p = el.parentElement, scrolls = false;
      while (p && p.id !== 'view') { const ox = getComputedStyle(p).overflowX; if (ox === 'auto' || ox === 'scroll' || ox === 'hidden') { scrolls = true; break; } p = p.parentElement; }
      if (!scrolls) { cut = (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ')[0] : el.tagName.toLowerCase()) + ' +' + Math.round(r.right - vw) + 'px'; break; }
    }
    if (cut) problems.push('content cut off: ' + cut);
    let last = 1;
    document.querySelectorAll('#view h1, #view h2, #view h3, #view h4, #view h5').forEach((h) => { if (h.closest('[hidden]')) return; const n = +h.tagName[1]; if (n > last + 1) problems.push('heading skip to ' + h.tagName + ' "' + h.textContent.trim().slice(0, 40) + '"'); last = n; });
    if (/not found/i.test(document.title)) problems.push('page not found');
    if (problems.length) out.push(r + ': ' + problems.join('; '));
  }
  return { count: new Set(routes).size, problems: out, vw: innerWidth };
})()`;

await cdp('Runtime.enable');
await cdp('Page.enable');
let failed = false;
for (const [w, h] of WIDTHS) {
  await cdp('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: w < 768 });
  await cdp('Page.navigate', { url: base + '#/dashboard' });
  await new Promise((r) => setTimeout(r, 1500));
  const tracks = await evaluate(`[...document.querySelectorAll('#navTracks a')].map((a) => a.getAttribute('href').split('/').pop())`);
  const res = await evaluate(SWEEP.replace('${EXTRA}', `const TRACKS_IDS = ${JSON.stringify(tracks)};`));
  console.log(`${w}px (viewport ${res.vw}): ${res.count} routes, ${res.problems.length} problem(s)`);
  res.problems.forEach((p) => console.log('  ' + p));
  if (res.problems.length) failed = true;
}
/* Images on the library pages */
await cdp('Page.navigate', { url: base + '#/library' });
await new Promise((r) => setTimeout(r, 1500));
const broken = await evaluate(`(async () => { const imgs = [...document.querySelectorAll('img')]; imgs.forEach((i) => { i.loading = 'eager'; }); await new Promise((r) => setTimeout(r, 2500)); return { total: imgs.length, broken: imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.getAttribute('src')) }; })()`);
console.log(`Library images: ${broken.total} checked, ${broken.broken.length} broken`);
broken.broken.forEach((s) => console.log('  ' + s));
if (broken.broken.length) failed = true;
if (exceptions.length) { failed = true; console.log(`Script errors (${exceptions.length}):`); [...new Set(exceptions)].forEach((e) => console.log('  ' + e.split('\n')[0])); }
else console.log('Script errors: 0');

await close(); server.close();
console.log(failed ? '\nSweep found problems.' : '\nSweep passed.');
process.exit(failed ? 1 : 0);
