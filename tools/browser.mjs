// Shared helpers for the browser-based tools: a tiny static server for the
// project and a headless Edge/Chrome driven over the DevTools protocol.
// No dependencies (Node 22+ for the built-in WebSocket).
import { createServer } from 'node:http';
import { readFile, mkdtemp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { join, extname, normalize } from 'node:path';
import { tmpdir } from 'node:os';
import { gzipSync, brotliCompressSync } from 'node:zlib';
import { root } from './load.mjs';

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };
const COMPRESSIBLE = /\.(html|js|css|json|webmanifest|svg)$/;

/* Serves the project folder. compress: true answers like a CDN (brotli/gzip).
   override(path) may return replacement text for a file (tests). */
export async function startServer({ compress = false, override } = {}) {
  const packed = new Map(); // compressed bodies are cached, like a CDN
  const server = createServer(async (req, res) => {
    const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^([/\\])+/, '');
    const file = join(root, path || 'index.html');
    if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
    try {
      const swap = override && override(path.replace(/\\/g, '/'));
      let body = swap != null ? Buffer.from(swap) : await readFile(file); const headers = { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' };
      const ae = String(req.headers['accept-encoding'] || '');
      if (compress && COMPRESSIBLE.test(file)) {
        const enc = ae.includes('br') ? 'br' : ae.includes('gzip') ? 'gzip' : '';
        if (enc) {
          const k = enc + file;
          if (!packed.has(k)) packed.set(k, enc === 'br' ? brotliCompressSync(body) : gzipSync(body));
          body = packed.get(k); headers['Content-Encoding'] = enc;
        }
      }
      res.writeHead(200, headers).end(body);
    } catch { res.writeHead(404).end('Not found'); }
  }).listen(0, '127.0.0.1');
  await new Promise((r) => server.once('listening', r));
  return { base: `http://127.0.0.1:${server.address().port}/`, close: () => server.close() };
}

export async function launchBrowser() {
  const candidates = [process.env.BROWSER, 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome', '/usr/bin/chromium', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].filter(Boolean);
  const exe = candidates.find((p) => existsSync(p));
  if (!exe) throw new Error('No Edge/Chrome found. Set BROWSER=path to a Chromium browser.');
  const profile = await mkdtemp(join(tmpdir(), 'mca-browser-'));
  const port = 9300 + Math.floor(Math.random() * 500);
  const proc = spawn(exe, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore' });
  let target;
  for (let i = 0; i < 50 && !target; i++) {
    await new Promise((r) => setTimeout(r, 200));
    try { target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page'); } catch {}
  }
  if (!target) { proc.kill(); throw new Error('Could not connect to the browser.'); }
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pending = new Map(); const listeners = [];
  const exceptions = [];
  ws.addEventListener('message', (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
    if (m.method === 'Runtime.exceptionThrown') exceptions.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
    if (m.method) listeners.forEach((fn) => fn(m));
  });
  const cdp = (method, params = {}) => new Promise((r) => { const n = ++id; pending.set(n, r); ws.send(JSON.stringify({ id: n, method, params })); });
  const evaluate = async (expression) => {
    const r = await cdp('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (r.result.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description || 'evaluation failed');
    return r.result.result.value;
  };
  const close = async () => {
    ws.close(); proc.kill();
    await new Promise((r) => setTimeout(r, 300));
    await rm(profile, { recursive: true, force: true }).catch(() => {});
  };
  return { cdp, evaluate, exceptions, on: (fn) => listeners.push(fn), close };
}
