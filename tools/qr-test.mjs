// QR encoder: every code is decoded back by independent decoders (OpenCV's
// two QR detectors, via Python) and must come back exactly. A code passes
// when a detector reads it correctly and no detector reads anything else
// (OpenCV's classic detector sometimes finds nothing in small codes).
// Needs Python with opencv-python. Usage: node tools/qr-test.mjs
import { writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { loadAcademy } from './load.mjs';

const A = loadAcademy(['qrMatrix', 'VERIFY_BASE']);
const cases = [
  [A.VERIFY_BASE + 'K7MPQ2XAB3'], // what certificates use
  ['A'], ['HELLO WORLD'], ['https://example.com'], ['Ünïcödé · 25 °F'],
  ...[14, 26, 42, 62, 84, 106].map((n) => ['x'.repeat(n)]), // each version's limit
  ...[0, 1, 2, 3, 4, 5, 6, 7].flatMap((m) => [['HELLO WORLD', m], [A.VERIFY_BASE + 'ABCDEFGH23', m]]) // every mask
];
const dir = mkdtempSync(join(tmpdir(), 'qr-'));
const items = cases.map(([t, mask], i) => {
  const g = A.qrMatrix(t, mask); const q = 4, s = 8; const n = (g.length + 2 * q) * s;
  const px = Buffer.alloc(n * n, 255);
  g.forEach((row, y) => row.forEach((on, x) => { if (on) for (let dy = 0; dy < s; dy++) px.fill(0, ((y + q) * s + dy) * n + (x + q) * s, ((y + q) * s + dy) * n + (x + q + 1) * s); }));
  const f = join(dir, `q${i}.pgm`); writeFileSync(f, Buffer.concat([Buffer.from(`P5 ${n} ${n} 255\n`), px]));
  return { f, t, mask, size: g.length };
});
const py = `import cv2, sys, json
a = cv2.QRCodeDetector(); b = cv2.QRCodeDetectorAruco()
print(json.dumps([[a.detectAndDecode(cv2.imread(f, 0))[0], b.detectAndDecode(cv2.imread(f, 0))[0]] for f in sys.argv[1:]]))`;
const out = JSON.parse(execFileSync('python', ['-c', py, ...items.map((x) => x.f)], { encoding: 'utf8' }));
rmSync(dir, { recursive: true, force: true });
let fail = 0;
items.forEach((x, i) => {
  const got = out[i].filter(Boolean); const ok = got.length > 0 && got.every((g) => g === x.t);
  if (!ok) fail++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${x.size}×${x.size}${x.mask != null ? ` mask ${x.mask}` : ''}  ${JSON.stringify(x.t.length > 50 ? x.t.slice(0, 47) + '…' : x.t)}${ok ? '' : ` decoded as ${JSON.stringify(out[i])}`}`);
});
let threw = false; try { A.qrMatrix('x'.repeat(107)); } catch (e) { threw = true; }
console.log(`${threw ? 'ok  ' : 'FAIL'} text over 106 bytes is refused`); if (!threw) fail++;
if (fail) { console.log(`\n${fail} failed.`); process.exit(1); }
console.log('\nQR codes passed.');
