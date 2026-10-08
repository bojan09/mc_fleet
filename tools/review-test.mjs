// Spaced review logic: wrong -> due now; right while due -> back after 1, 3,
// 7 days; right on the last review -> cleared; wrong -> starts over; right
// before it is due -> no change; old entries (no box/due) count as due.
// Usage: node tools/review-test.mjs
import { loadAcademy } from './load.mjs';

const realNow = Date.now;
let now = new Date(2026, 9, 8, 15, 0).getTime(); // 8 Oct 2026, 15:00 local
Date.now = () => now;
const A = loadAcademy(['noteAnswer', 'qBank', 'missedCount', 'missedList']);
const day = 864e5;
const [q, other] = [...A.qBank().keys()];
const id = A.qBank().get(q).id;
const entry = () => A.getState().missed[id];
const fail = [];
const check = (ok, label) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${label}`); if (!ok) fail.push(label); };
const midnight = (t) => { const d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); };

A.noteAnswer(q, false);
check(entry() && entry().box === 0 && A.missedCount() === 1, 'wrong answer: on the list, due now');
A.noteAnswer(q, true);
check(entry().box === 1 && entry().due === midnight(now) + day, 'right: back tomorrow (from midnight)');
check(A.missedCount() === 0 && A.missedList().length === 1, 'not counted as due today, still on the list');
A.noteAnswer(q, true);
check(entry().box === 1, 'right again before it is due: no change');
now += day; // tomorrow
check(A.missedCount() === 1, 'due the next day');
A.noteAnswer(q, true);
check(entry().box === 2 && entry().due === midnight(now) + 3 * day, 'right: back in 3 days');
now += 3 * day; A.noteAnswer(q, true);
check(entry().box === 3 && entry().due === midnight(now) + 7 * day, 'right: back in 7 days');
now += 6 * day;
check(A.missedCount() === 0, 'not due after 6 days');
now += day; A.noteAnswer(q, true);
check(!entry(), 'right on the 7-day review: cleared');

A.noteAnswer(q, false); A.noteAnswer(q, true); now += day; A.noteAnswer(q, false);
check(entry().box === 0 && entry().due === 0 && entry().n === 2, 'wrong later: starts over, miss count kept (2 misses since it was cleared)');

A.getState().missed[A.qBank().get(other).id] = { n: 1, at: now - day }; // saved before spaced review
check(A.missedCount() === 2, 'old entry without a schedule counts as due');
A.noteAnswer(other, true);
check(A.getState().missed[A.qBank().get(other).id].box === 1, 'old entry moves to the 1-day step');

Date.now = realNow;
if (fail.length) { console.log(`\n${fail.length} failed.`); process.exit(1); }
console.log('\nSpaced review passed.');
