// Item analysis and before/after logic, tested on synthetic learners.
// Usage: node tools/items-test.mjs   (exit code 1 on failure)
import { loadAcademy } from './load.mjs';

const A = loadAcademy(['itemStats', 'itemFlag', 'prePostSummary', 'mergeProgress', 'DEFAULT_STATE']);
let fails = 0; let checks = 0;
const ok = (cond, msg) => { checks++; if (!cond) { fails++; console.error('FAIL:', msg); } };
const near = (a, b) => Math.abs(a - b) < 1e-9;

// Ten learners, k = 0..9 (stronger as k grows). Filler items set their strength.
const rows = []; let t = 0;
const at = () => new Date(Date.UTC(2026, 0, 1, 0, 0, t++)).toISOString();
const add = (k, item, correct, chosen, context = 'lesson') => rows.push({ user_id: `u${k}`, item_id: item, correct, chosen: chosen ?? (correct ? 1 : 0), context, answered_at: at() });
for (let k = 0; k < 10; k++) {
  for (let j = 0; j < 6; j++) add(k, `f.x#${j}`, k > j);
  add(k, 'a.x#0', k >= 5, k >= 5 ? 1 : (k % 2 ? 2 : 0)); // separates well; wrong answers split 0/2
  add(k, 'b.x#0', true);                                 // everyone right
  add(k, 'c.x#0', k < 5);                                // reversed: check the key
  add(k, 'a.x#0', false, 3, 'review');                   // review attempts are ignored
}
for (let k = 0; k < 10; k++) add(k, 'a.x#0', true, 1);   // later retries: only the first counts

const s = Object.fromEntries(A.itemStats(rows).map((x) => [x.id, x]));
ok(s['a.x#0'].n === 10, `A counts first attempts only (n=${s['a.x#0'].n})`);
ok(near(s['a.x#0'].p, 0.5), `A difficulty 0.5 (got ${s['a.x#0'].p})`);
ok(near(s['a.x#0'].d, 1), `A discrimination 1 (got ${s['a.x#0'].d})`);
ok(s['a.x#0'].picks[1] === 5 && s['a.x#0'].picks[0] + s['a.x#0'].picks[2] === 5 && !s['a.x#0'].picks[3], 'A option picks exclude review and retries');
ok(near(s['b.x#0'].p, 1) && A.itemFlag(s['b.x#0'], 4).level === 1, 'B flagged as too easy');
ok(near(s['c.x#0'].d, -1) && A.itemFlag(s['c.x#0'], 4).level === 3, 'C flagged: check the answer key');
ok(A.itemFlag({ n: 3, p: 0.5, d: null, picks: {} }, 4).level === 0, 'few answers: no flag');
ok(A.itemFlag({ n: 20, p: 0.6, d: 0.4, picks: { 0: 8, 1: 12 } }, 4).text.includes('2 options'), 'unused options flagged');
ok(A.itemFlag({ n: 20, p: 0.6, d: 0.4, picks: { 0: 4, 1: 12, 2: 2, 3: 2 } }, 4).text === 'Working', 'healthy item');

// Before/after: first "pre" answer per question, latest "post" answer.
const pp = [
  { user_id: 'u1', item_id: 'pp.beginner#0', correct: true, chosen: 1, context: 'pre', answered_at: '2026-01-01T10:00:00Z' },
  { user_id: 'u1', item_id: 'pp.beginner#1', correct: false, chosen: 0, context: 'pre', answered_at: '2026-01-01T10:00:30Z' },
  { user_id: 'u1', item_id: 'pp.beginner#1', correct: true, chosen: 1, context: 'pre', answered_at: '2026-01-05T10:00:00Z' },
  { user_id: 'u1', item_id: 'pp.beginner#0', correct: false, chosen: 0, context: 'post', answered_at: '2026-02-01T10:00:00Z' },
  { user_id: 'u1', item_id: 'pp.beginner#0', correct: true, chosen: 1, context: 'post', answered_at: '2026-02-03T10:00:00Z' },
  { user_id: 'u1', item_id: 'pp.beginner#1', correct: true, chosen: 1, context: 'post', answered_at: '2026-02-03T10:00:10Z' }
];
const sum = A.prePostSummary(pp);
ok(sum.beginner && near(sum.beginner.pre[0], 0.5), `pre uses first answers (got ${sum.beginner && sum.beginner.pre})`);
ok(sum.beginner && near(sum.beginner.post[0], 1), `post uses latest answers (got ${sum.beginner && sum.beginner.post})`);

// Syncing two devices keeps the earliest "before" and the latest "after".
const base = () => JSON.parse(JSON.stringify(A.DEFAULT_STATE));
const a = Object.assign(base(), { prepost: { beginner: { pre: { score: 1, total: 8, at: 100 }, post: { score: 7, total: 8, at: 300 } } } });
const b = Object.assign(base(), { prepost: { beginner: { pre: { score: 3, total: 8, at: 50 }, post: { score: 5, total: 8, at: 200 } }, advanced: { pre: { score: 2, total: 8, at: 60 } } } });
const m = A.mergeProgress(a, b);
ok(m.prepost.beginner.pre.score === 3, 'merge keeps the earliest before score');
ok(m.prepost.beginner.post.score === 7, 'merge keeps the latest after score');
ok(m.prepost.advanced.pre.score === 2, 'merge keeps a track only one device has');

if (fails) { console.error(`Item analysis FAILED: ${fails} of ${checks} checks.`); process.exit(1); }
console.log(`Item analysis passed: ${checks} checks.`);
