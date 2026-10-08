// Builds script.js from the source modules in src/ (concatenated in file-name
// order; the IIFE opens in 01-beginner.js and closes in 06-engine.js), then
// syntax-checks the result and stamps content hashes:
//   index.html  script.js?v=<hash>, styles.css?v=<hash>  (HTML and code always match)
//   sw.js       VERSION (hash of every precached file) and the versioned URLs
// Usage: node tools/build.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'src');
const files = readdirSync(src).filter((f) => /^\d.*\.js$/.test(f)).sort();
const out = join(root, 'script.js');
writeFileSync(out, files.map((f) => readFileSync(join(src, f), 'utf8')).join(''));
execFileSync(process.execPath, ['--check', out], { stdio: 'inherit' });
console.log(`Built script.js from ${files.length} modules (${Math.round(readFileSync(out).length / 1024)} KB).`);

const hash = (...names) => { const h = createHash('sha256'); names.forEach((n) => h.update(readFileSync(join(root, n)))); return h.digest('hex').slice(0, 10); };
const stamp = (name, pairs) => {
  const file = join(root, name); let text = readFileSync(file, 'utf8');
  for (const [re, to] of pairs) { if (!re.test(text)) throw new Error(`${name}: ${re} not found`); text = text.replace(re, to); }
  writeFileSync(file, text);
};
const v = { js: hash('script.js'), css: hash('styles.css') };
stamp('index.html', [[/script\.js(\?v=\w+)?"/g, `script.js?v=${v.js}"`], [/styles\.css(\?v=\w+)?"/g, `styles.css?v=${v.css}"`]]);
// The release covers every precached file listed in sw.js (fonts, icons, thumbnails too).
const precached = [...readFileSync(join(root, 'sw.js'), 'utf8').matchAll(/^\s+'([\w./-]+?)(?:\?v=\w+)?',?$/gm)].map((m) => m[1]).filter((f) => f !== './');
const release = hash(...new Set(['index.html', ...precached]));
stamp('sw.js', [
  [/const VERSION = '[^']*';/, `const VERSION = 'mca-${release}';`],
  [/'script\.js(\?v=\w+)?'/, `'script.js?v=${v.js}'`],
  [/'styles\.css(\?v=\w+)?'/, `'styles.css?v=${v.css}'`]
]);
console.log(`Stamped release ${release} (script ${v.js}, styles ${v.css}).`);
