// Builds the app from the source modules in src/ (file-name order; the IIFE
// opens in the first module and closes in 06-engine.js):
//
//   script.js            everything except lesson text: a generated outline
//                        of the tracks (ids, titles, minutes) + engine + views
//   content/<track>.json lesson text per track (objectives, body, checks,
//                        examples, takeaways…), loaded when a page needs it
//
// The lesson modules (CONTENT below) build the tracks procedurally, so the
// build runs them in Node, then splits the result. It checks that outline +
// content put back together equal what the modules produce, syntax-checks
// script.js, and stamps content hashes:
//   index.html  script.js?v=<hash>, styles.css?v=<hash>
//   sw.js       VERSION (hash of every precached file), versioned URLs and
//               the content files to precache
// Usage: node tools/build.mjs
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'src');
const read = (f) => readFileSync(join(src, f), 'utf8');
const files = readdirSync(src).filter((f) => /^\d.*\.js$/.test(f)).sort();

// Modules that build TRACKS (and REF, RATECON, LESSON_MOVES used by the views).
const CONTENT = ['01-beginner.js', '02-advanced.js', '03-expert.js', '03b-enrich.js', '03c-deep.js', '03d-industry.js', '03e-invoicing.js', '03f-equipment.js', '03g-operations.js', '03h-operations-track.js', '03k-process-visuals.js'];
const LIGHT = ['id', 'title', 'minutes']; // lesson fields kept in script.js
const missing = CONTENT.filter((f) => !files.includes(f));
if (missing.length) throw new Error(`content modules not found: ${missing.join(', ')}`);

// 1. Run the lesson modules on their own.
const body = CONTENT.map(read).join('').replace(/^[\s\S]*?\(function\s*\(\)\s*\{\s*'use strict';/, '');
const data = new Function(`${body}\nreturn { TRACKS, REF, RATECON, LESSON_MOVES };`)();

// 2. Split: outline (light lesson fields) and per-track lesson content.
const outline = JSON.parse(JSON.stringify(data.TRACKS));
const content = {};
outline.forEach((t) => {
  content[t.id] = {};
  t.modules.forEach((m) => m.lessons.forEach((l) => {
    const heavy = {};
    Object.keys(l).filter((k) => !LIGHT.includes(k)).forEach((k) => { heavy[k] = l[k]; delete l[k]; });
    content[t.id][`${m.id}.${l.id}`] = heavy;
  }));
});
const sha = (buf) => createHash('sha256').update(buf).digest('hex').slice(0, 10);
const dir = join(root, 'content');
if (existsSync(dir)) rmSync(dir, { recursive: true });
mkdirSync(dir);
const contentFiles = {};
for (const [id, c] of Object.entries(content)) {
  const text = JSON.stringify(c);
  writeFileSync(join(dir, `${id}.json`), text);
  contentFiles[id] = `content/${id}.json?v=${sha(text)}`;
}

// 3. script.js = generated outline module + every other module.
const generated = `/* =========================================================================
   MAINTENANCE COORDINATOR ACADEMY — script.js (built by tools/build.mjs)
   GENERATED: the track outline below comes from src/${CONTENT[0]}…${CONTENT[CONTENT.length - 1]}.
   Lesson text is in content/<track>.json and loaded on demand (05l-content).
   Edit the src/ modules, not this file.
   ========================================================================= */
(function () {
'use strict';
const TRACKS = ${JSON.stringify(outline)};
const [BEGINNER, ADVANCED, EXPERT, OPERATIONS] = ['beginner', 'advanced', 'expert', 'operations'].map((id) => TRACKS.find((t) => t.id === id));
const REF = ${JSON.stringify(data.REF)};
const RATECON = ${JSON.stringify(data.RATECON)};
const LESSON_MOVES = ${JSON.stringify(data.LESSON_MOVES)};
const CONTENT_FILES = ${JSON.stringify(contentFiles)};
`;
const core = generated + files.filter((f) => !CONTENT.includes(f)).map(read).join('');
const out = join(root, 'script.js');
writeFileSync(out, core);
execFileSync(process.execPath, ['--check', out], { stdio: 'inherit' });

// 4. Outline + content must rebuild exactly what the lesson modules produce.
const rebuilt = JSON.parse(JSON.stringify(outline));
rebuilt.forEach((t) => t.modules.forEach((m) => m.lessons.forEach((l, i) => { m.lessons[i] = Object.assign(l, content[t.id][`${m.id}.${l.id}`]); })));
const canon = (v) => JSON.stringify(v, (k, x) => (x && typeof x === 'object' && !Array.isArray(x) ? Object.fromEntries(Object.keys(x).sort().map((key) => [key, x[key]])) : x));
if (canon(rebuilt) !== canon(data.TRACKS)) throw new Error('outline + content do not match the lesson modules');
const kb = (n) => `${Math.round(n / 1024)} KB`;
console.log(`Built script.js (${kb(core.length)}) and ${Object.keys(content).length} content files (${kb(Object.values(content).reduce((a, c) => a + JSON.stringify(c).length, 0))}) from ${files.length} modules.`);

// 5. Stamp hashes.
// Text files are hashed with LF line endings, so a Windows checkout (CRLF) and
// CI (LF) stamp the same versions.
const TEXT = /\.(html|js|css|json|webmanifest|svg|txt)$/;
const hash = (...names) => {
  const h = createHash('sha256');
  names.forEach((n) => { const buf = readFileSync(join(root, n)); h.update(TEXT.test(n) ? buf.toString('utf8').replace(/\r\n/g, '\n') : buf); });
  return h.digest('hex').slice(0, 10);
};
const stamp = (name, pairs) => {
  const file = join(root, name); let text = readFileSync(file, 'utf8');
  for (const [re, to] of pairs) { if (!re.test(text)) throw new Error(`${name}: ${re} not found`); text = text.replace(re, to); }
  writeFileSync(file, text);
};
const v = { js: hash('script.js'), css: hash('styles.css') };
stamp('index.html', [[/script\.js(\?v=\w+)?"/g, `script.js?v=${v.js}"`], [/styles\.css(\?v=\w+)?"/g, `styles.css?v=${v.css}"`]]);
stamp('sw.js', [
  [/'script\.js(\?v=\w+)?'/, `'script.js?v=${v.js}'`],
  [/'styles\.css(\?v=\w+)?'/, `'styles.css?v=${v.css}'`],
  [/(\/\/ content:start(\r?\n))[\s\S]*?([ \t]*\/\/ content:end)/, (_, start, nl, end) => `${start}${Object.values(contentFiles).map((f) => `  '${f}',${nl}`).join('')}${end}`]
]);
// The release covers every precached file listed in sw.js (fonts, icons, content, thumbnails).
const precached = [...readFileSync(join(root, 'sw.js'), 'utf8').matchAll(/^\s+'([\w./-]+?)(?:\?v=\w+)?',?$/gm)].map((m) => m[1]).filter((f) => f !== './');
const release = hash(...new Set(['index.html', ...precached]));
stamp('sw.js', [[/const VERSION = '[^']*';/, `const VERSION = 'mca-${release}';`]]);
console.log(`Stamped release ${release} (script ${v.js}, styles ${v.css}).`);
