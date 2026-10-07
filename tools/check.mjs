// Content integrity checks: question answers, exercises, illustrations,
// library/lesson/path references, glossary links and platform pages.
// Usage: node tools/check.mjs   (exit code 1 when an error is found)
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { loadAcademy, root } from './load.mjs';

const A = loadAcademy();
const errors = []; const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

/* Walk every data structure and validate anything that looks like a
   question, exercise, illustrated infographic or term link. */
const seen = new WeakSet();
const count = { questions: 0, exercises: 0, links: 0 };
function walk(v, where) {
  if (typeof v === 'string') {
    count.links += (v.match(/\[\[/g) || []).length;
    for (const m of v.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) if (!A.findTerm(m[1])) warn(where, `glossary link [[${m[1]}]] has no entry (shown as bold text)`);
    for (const m of v.matchAll(/#\/lesson\/(\w+)\/(\w+)\/(\w+)/g)) if (!A.LESSON_MAP.has(`${m[1]}.${m[2]}.${m[3]}`)) err(where, `link to missing lesson ${m[0]}`);
    return;
  }
  if (!v || typeof v !== 'object' || seen.has(v)) return;
  seen.add(v);
  if (typeof v.q === 'string' && 't' in v) {
    count.questions++;
    if (v.t === 'tf') { if (typeof v.a !== 'boolean') err(where, `true/false answer must be boolean: "${v.q.slice(0, 50)}"`); }
    else if (!Array.isArray(v.o) || !Number.isInteger(v.a) || v.a < 0 || v.a >= v.o.length) err(where, `answer index out of range: "${v.q.slice(0, 50)}"`);
    if (!v.e) warn(where, `question has no explanation: "${v.q.slice(0, 50)}"`);
  }
  if (typeof v.type === 'string' && (v.options || v.items || v.fields)) {
    const t = v.type; count.exercises++;
    if (t === 'choose' && v.options.filter((o) => o.correct).length !== 1) err(where, `choose exercise needs exactly one correct option: "${String(v.prompt).slice(0, 50)}"`);
    if (t === 'multi' && !v.options.some((o) => o.correct)) err(where, 'multi exercise has no correct option');
    if (t === 'classify') v.items.forEach((it) => { if (!v.categories.includes(it.answer)) err(where, `classify answer "${it.answer}" is not a category`); });
    if (t === 'order' && v.items.length < 2) err(where, 'order exercise needs 2+ items');
    if (t === 'extract') v.fields.forEach((f) => { if (!f.accept || !f.accept.length) err(where, `extract field "${f.label}" has no accepted answers`); });
  }
  if (v.ig && v.art && !A.ART[v.art]) err(where, `illustration "${v.art}" missing from ART`);
  if (v.ig === 'versus') (v.items || []).forEach((it) => { if (it.art && !A.ART[it.art]) err(where, `illustration "${it.art}" missing from ART`); });
  if (v.ig === 'anatomy') (v.pins || []).forEach((p) => { if (p.x < 0 || p.x > 100 || p.y < 0 || p.y > 100) err(where, `pin "${p.t}" outside the figure`); });
  if (v.libPhoto && !(A.LIB_MAP.get(v.libPhoto) || {}).photo) err(where, `libPhoto "${v.libPhoto}" has no photo`);
  for (const [k, x] of Object.entries(v)) walk(x, where);
}

A.TRACKS.forEach((t) => t.modules.forEach((m) => m.lessons.forEach((l) => {
  const key = `${t.id}.${m.id}.${l.id}`;
  if (!l.title || !l.minutes) err(key, 'lesson needs a title and minutes');
  walk(l, key);
})));
['SCENARIOS', 'TREES', 'EXERCISES', 'FLASHCARDS', 'EXAMS', 'REF', 'GLOSSARY'].forEach((n) => A[n] && walk(A[n], n));

/* Glossary */
const terms = new Map();
A.GLOSSARY.forEach((g) => {
  const k = g.term.toLowerCase();
  if (terms.has(k)) err('GLOSSARY', `duplicate term "${g.term}"`);
  terms.set(k, g);
  if (!g.def || !g.simple) err('GLOSSARY', `"${g.term}" needs def and simple`);
  (g.related || []).forEach((r) => { if (!A.findTerm(r)) warn('GLOSSARY', `"${g.term}" relates to missing term "${r}"`); });
});

/* Visual Library */
A.LIBRARY.forEach((x) => {
  const w = `library/${x.id}`;
  if (!x.photo && !x.art) err(w, 'needs a photo or an illustration');
  if (x.art && !A.ART[x.art]) err(w, `illustration "${x.art}" missing`);
  if (x.photo) {
    const p = A.LIB_PHOTOS[x.photo];
    if (!p) err(w, `photo "${x.photo}" missing from LIB_PHOTOS`);
    else [p.local, p.localSm].forEach((f) => { if (!existsSync(join(root, f))) err(w, `image file ${f} not found`); });
  }
  x.lessons.forEach((k) => { if (!A.LESSON_MAP.has(k)) err(w, `lesson ${k} not found`); });
  (x.related || []).forEach((r) => { if (!A.LIB_MAP.has(r)) err(w, `related item ${r} not found`); });
});

/* Software & Platforms */
const swIds = new Set(A.SOFTWARE.map((s) => s.id));
A.SOFTWARE.forEach((s) => {
  const w = `software/${s.id}`;
  A.SW_SECTIONS.forEach(([k]) => { if (k !== 'check' && !(s.sections[k] || []).length) err(w, `section "${k}" is empty`); });
  if (s.quiz.length < 3) err(w, 'needs at least 3 quiz questions');
  if (!s.sources.length) err(w, 'needs official sources');
  if (!s.checked) err(w, 'needs a "facts checked" date');
  walk(s, w);
});

/* Learning path references */
const pathItem = (it, w) => {
  if (it.m) { const [t, m] = it.m.split('.'); if (!(A.TRACK_BY_ID[t] && A.TRACK_BY_ID[t].modules.some((x) => x.id === m))) err(w, `module ${it.m} not found`); }
  if (it.sw && !swIds.has(it.sw)) err(w, `platform ${it.sw} not found`);
};
A.LEARN_PATH.forEach((st) => (st.items || []).forEach((it) => pathItem(it, `path/${st.id}`)));
A.LEARN_TOGETHER.forEach((g) => g.items.forEach((it) => pathItem(it, `together/${g.t}`)));
A.NOT_YET.forEach(([, t, key]) => pathItem({ m: key }, `not-yet/${t}`));

const lessons = A.TRACKS.reduce((n, t) => n + t.modules.reduce((a, m) => a + m.lessons.length, 0), 0);
console.log(`Checked ${A.TRACKS.length} tracks, ${lessons} lessons, ${A.GLOSSARY.length} glossary terms, ${A.LIBRARY.length} library items, ${A.SOFTWARE.length} platforms.`);
console.log(`Validated ${count.questions} questions, ${count.exercises} exercises, ${count.links} glossary links.`);
if (warnings.length) console.log(`\n${warnings.length} warning(s):\n  ` + [...new Set(warnings)].join('\n  '));
if (errors.length) { console.log(`\n${errors.length} error(s):\n  ` + errors.join('\n  ')); process.exit(1); }
console.log('\nNo errors.');
