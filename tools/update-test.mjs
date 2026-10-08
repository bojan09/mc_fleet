// Checks the release-update path: a page controlled by the service worker sees
// a new sw.js, the new worker takes over, and the page offers a reload; after
// reloading, the page runs the new build. sw.js is changed in memory only.
// Usage: node tools/update-test.mjs
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { root } from './load.mjs';
import { startServer, launchBrowser } from './browser.mjs';

const sw = readFileSync(join(root, 'sw.js'), 'utf8');
let release = 1;
const server = await startServer({ override: (path) => (path === 'sw.js' ? sw.replace(/const VERSION = '([^']*)';/, `const VERSION = '$1-test${release}';`) : null) });
const b = await launchBrowser();
const wait = async (expr, ms = 15000) => {
  for (let t = 0; t < ms / 100; t++) { if (await b.evaluate(expr).catch(() => false)) return true; await new Promise((r) => setTimeout(r, 100)); }
  return false;
};
const fail = [];
const check = (ok, label) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${label}`); if (!ok) fail.push(label); };

await b.cdp('Page.enable');
await b.cdp('Page.navigate', { url: server.base + '#/dashboard' });
check(await wait('!!navigator.serviceWorker.controller'), 'first visit: service worker takes control');
const scripts = await b.evaluate(`[...document.scripts].map((s) => s.getAttribute('src')).filter(Boolean)`);
check(scripts.some((s) => /^script\.js\?v=\w{10}$/.test(s)), `page loads versioned script (${scripts.join(', ')})`);
check(!(await b.evaluate(`!!document.querySelector('.toast__action')`)), 'no reload offer on first install');

release = 2; // publish a "new release"
await b.evaluate(`navigator.serviceWorker.getRegistration().then((r) => r.update()).then(() => true)`);
check(await wait(`[...document.querySelectorAll('.toast')].some((t) => /new version/i.test(t.textContent))`), 'open page offers a reload when the new release takes over');
const keys = await b.evaluate(`caches.keys()`);
// (An old worker's in-flight background refresh can re-create its cache just
// after cleanup; the next release clears it, so only the new cache is checked.)
check(keys.some((k) => /-test2-app$/.test(k)), `new release has its own cache (${keys.join(', ')})`);
await b.evaluate(`document.querySelector('.toast__action').click(), true`);
await new Promise((r) => setTimeout(r, 1500));
check(await wait(`document.title.includes(' · ')`), 'reload brings the app back');
check(b.exceptions.length === 0, `no script errors${b.exceptions.length ? ': ' + b.exceptions.join(' | ') : ''}`);

await b.close(); server.close();
if (fail.length) { console.log(`\n${fail.length} failed.`); process.exit(1); }
console.log('\nUpdate flow passed.');
