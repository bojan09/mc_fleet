// First-visit performance on a phone: slow 4G (150 ms RTT, 1.6 Mbps down),
// 4x CPU slowdown, empty cache, compressed responses (as Vercel serves them).
// Reports the median of several runs. Usage: node tools/perf.mjs [runs=3]
import { startServer, launchBrowser } from './browser.mjs';

const RUNS = Number(process.argv[2]) || 3;
const server = await startServer({ compress: true });
// Warm the compression cache so timings reflect transfer, not server CPU.
for (const f of ['index.html', 'script.js', 'styles.css', 'sw.js', 'manifest.webmanifest']) await fetch(server.base + f, { headers: { 'Accept-Encoding': 'br' } }).then((r) => r.arrayBuffer());
const b = await launchBrowser();
await b.cdp('Network.enable');
await b.cdp('Page.enable');
await b.cdp('Performance.enable');
await b.cdp('Network.setCacheDisabled', { cacheDisabled: true });
await b.cdp('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: (1.6 * 1024 * 1024) / 8, uploadThroughput: (750 * 1024) / 8 });
await b.cdp('Emulation.setCPUThrottlingRate', { rate: 4 });
await b.cdp('Emulation.setDeviceMetricsOverride', { width: 375, height: 812, deviceScaleFactor: 2, mobile: true });
// Record when the router has rendered the first view (it sets the page title).
await b.cdp('Page.addScriptToEvaluateOnNewDocument', { source: `
  (function poll() { if (document.title.indexOf(' · ') > 0) window.__viewAt = performance.now(); else setTimeout(poll, 10); })();` });

const results = [];
for (let i = 0; i < RUNS; i++) {
  // Fresh profile state between runs: no service worker, no storage.
  await b.cdp('Storage.clearDataForOrigin', { origin: server.base.slice(0, -1), storageTypes: 'all' });
  await b.cdp('Page.navigate', { url: server.base + '#/dashboard' });
  let r;
  for (let t = 0; t < 120 && !(r && r.load); t++) {
    await new Promise((res) => setTimeout(res, 250));
    try { r = await b.evaluate(`(() => { const n = performance.getEntriesByType('navigation')[0]; return n && n.loadEventEnd ? { load: n.loadEventEnd } : null; })()`); } catch {}
  }
  await new Promise((res) => setTimeout(res, 1000));
  const pm = Object.fromEntries((await b.cdp('Performance.getMetrics')).result.metrics.map((m) => [m.name, m.value]));
  results.push(await b.evaluate(`(() => {
    const n = performance.getEntriesByType('navigation')[0];
    const fcp = (performance.getEntriesByName('first-contentful-paint')[0] || {}).startTime;
    const res = performance.getEntriesByType('resource').filter((e) => e.startTime < n.loadEventEnd + 50);
    const size = (re) => res.filter((e) => re.test(e.name)).reduce((a, e) => a + (e.transferSize || e.encodedBodySize || 0), 0);
    return { fcp, view: window.__viewAt, dcl: n.domContentLoadedEventEnd, load: n.loadEventEnd,
      files: res.map((e) => [e.name.split('/').pop().slice(0, 40), Math.round(e.startTime), Math.round(e.responseEnd)]),
      kb: { html: (n.transferSize || 0) / 1024, js: size(/\\.js(\\?|$)/) / 1024, css: size(/\\.css(\\?|$)|fonts\\.googleapis/) / 1024, fonts: size(/\\.woff2|gstatic/) / 1024, total: (res.reduce((a, e) => a + (e.transferSize || 0), 0) + (n.transferSize || 0)) / 1024 } };
  })()`));
  results[results.length - 1].script = pm.ScriptDuration * 1000; results[results.length - 1].task = pm.TaskDuration * 1000;
}
await b.close(); server.close();

const med = (f) => { const v = results.map(f).filter((x) => typeof x === 'number').sort((a, b) => a - b); return v[Math.floor(v.length / 2)]; };
const ms = (x) => (x == null ? 'n/a' : `${Math.round(x)} ms`);
console.log(`Phone, slow 4G, 4x CPU, empty cache — median of ${RUNS} runs`);
console.log(`  First contentful paint  ${ms(med((r) => r.fcp))}`);
console.log(`  App view rendered       ${ms(med((r) => r.view))}`);
console.log(`  DOMContentLoaded        ${ms(med((r) => r.dcl))}`);
console.log(`  Load event              ${ms(med((r) => r.load))}`);
console.log(`  Script execution time   ${ms(med((r) => r.script))}  (main-thread busy ${ms(med((r) => r.task))})`);
if (process.env.FILES) results[0].files.forEach(([n, a, z]) => console.log(`    ${String(a).padStart(5)}–${String(z).padEnd(5)} ms  ${n}`));
const kb = (k) => `${Math.round(med((r) => r.kb[k]))} KB`;
console.log(`  Transferred: HTML ${kb('html')} · JS ${kb('js')} · CSS ${kb('css')} · fonts ${kb('fonts')} · total ${kb('total')}`);
