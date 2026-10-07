// Browser sweep: serves the site locally, opens it in headless Edge/Chrome and
// visits every route at phone, tablet and desktop widths, reporting script
// errors, horizontal overflow, skipped heading levels, missing pages and
// broken images. No dependencies (Node 22+ for the built-in WebSocket).
// Usage: node tools/sweep.mjs            (BROWSER=path\to\chrome.exe to override)
import { createServer } from 'node:http';
import { readFile, mkdtemp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { join, extname, normalize } from 'node:path';
import { tmpdir } from 'node:os';
import { root } from './load.mjs';

const WIDTHS = [[375, 812], [768, 1024], [1366, 900]];
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };

const server = createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^([/\\])+/, '');
  const file = join(root, path || 'index.html');
  if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
  try { const body = await readFile(file); res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' }).end(body); }
  catch { res.writeHead(404).end('Not found'); }
}).listen(0, '127.0.0.1');
await new Promise((r) => server.once('listening', r));
const base = `http://127.0.0.1:${server.address().port}/`;

const candidates = [process.env.BROWSER, 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome', '/usr/bin/chromium', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].filter(Boolean);
const exe = candidates.find((p) => existsSync(p));
if (!exe) { console.error('No Edge/Chrome found. Set BROWSER=path to a Chromium browser.'); process.exit(2); }
const profile = await mkdtemp(join(tmpdir(), 'mca-sweep-'));
const port = 9300 + Math.floor(Math.random() * 500);
const browser = spawn(exe, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore' });

let target;
for (let i = 0; i < 50 && !target; i++) {
  await new Promise((r) => setTimeout(r, 200));
  try { target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page'); } catch {}
}
if (!target) { console.error('Could not connect to the browser.'); browser.kill(); process.exit(2); }

const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener('open', r, { once: true }));
let id = 0; const pending = new Map(); const exceptions = [];
ws.addEventListener('message', (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  if (m.method === 'Runtime.exceptionThrown') exceptions.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
});
const cdp = (method, params = {}) => new Promise((r) => { const n = ++id; pending.set(n, r); ws.send(JSON.stringify({ id: n, method, params })); });
const evaluate = async (expression) => {
  const r = await cdp('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (r.result.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description || 'evaluation failed');
  return r.result.result.value;
};

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

ws.close(); browser.kill(); server.close();
await new Promise((r) => setTimeout(r, 300));
await rm(profile, { recursive: true, force: true }).catch(() => {});
console.log(failed ? '\nSweep found problems.' : '\nSweep passed.');
process.exit(failed ? 1 : 0);
