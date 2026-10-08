// Two-device sync: mergeProgress(thisDevice, cloud) keeps the newest change
// for things that can be removed or changed, still unions everything else,
// and lets a reset win over older copies. Usage: node tools/merge-test.mjs
import { loadAcademy } from './load.mjs';

const A = loadAcademy(['mergeProgress', 'DEFAULT_STATE']);
const base = () => JSON.parse(JSON.stringify(A.DEFAULT_STATE));
const st = (o) => Object.assign(base(), o);
const fail = [];
const check = (ok, label) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${label}`); if (!ok) fail.push(label); };
const merge = (local, cloud) => A.mergeProgress(local, cloud);

// Name
check(merge(st({ name: 'Old', edits: { name: 100 } }), st({ name: 'New', edits: { name: 200 } })).name === 'New', 'rename on the other device wins (newer)');
check(merge(st({ name: 'Mine', edits: { name: 300 } }), st({ name: 'Theirs', edits: { name: 200 } })).name === 'Mine', 'rename here wins when it is newer');
check(merge(st({ name: 'From Google' }), st({ name: 'Custom', edits: { name: 50 } })).name === 'Custom', 'a chosen name beats the automatic Google name');
check(merge(st({ name: 'Local' }), st({ name: 'Cloud' })).name === 'Local', 'no edit history (older data): this device\'s name, as before');

// Bookmarks
check(!merge(st({ bookmarks: [], edits: { 'bm:x': 200 } }), st({ bookmarks: ['x'], edits: { 'bm:x': 100 } })).bookmarks.includes('x'), 'bookmark removed here stays removed');
check(!merge(st({ bookmarks: ['x'], edits: { 'bm:x': 100 } }), st({ bookmarks: [], edits: { 'bm:x': 200 } })).bookmarks.includes('x'), 'bookmark removed on the other device is removed here');
check(merge(st({ bookmarks: [], edits: { 'bm:x': 100 } }), st({ bookmarks: ['x'], edits: { 'bm:x': 200 } })).bookmarks.includes('x'), 'bookmark re-added later comes back');
check(merge(st({ bookmarks: ['a', 'b'] }), st({ bookmarks: ['c'] })).bookmarks.join() === 'a,b,c', 'bookmarks without history: union, order kept');

// Completed lessons (value = completion time)
check(!('l1' in merge(st({ completed: {}, edits: { 'done:l1': 300 } }), st({ completed: { l1: 100 } })).completed), 'lesson unmarked here after it was completed elsewhere: stays unmarked');
check('l1' in merge(st({ completed: {}, edits: { 'done:l1': 100 } }), st({ completed: { l1: 300 } })).completed, 'lesson completed elsewhere after it was unmarked here: completed');
const c = merge(st({ completed: { l1: 1 } }), st({ completed: { l2: 2 } })).completed;
check('l1' in c && 'l2' in c, 'different lessons on each device: both kept');

// Missed questions
check(!('q' in merge(st({ missed: { q: { n: 1, at: 50 } }, edits: { 'mq:q': 50 } }), st({ missed: {}, edits: { 'mq:q': 200 } })).missed), 'question cleared on the other device stays cleared');
check('q' in merge(st({ missed: { q: { n: 2, at: 300 } }, edits: { 'mq:q': 300 } }), st({ missed: {}, edits: { 'mq:q': 200 } })).missed, 'missed again here after it was cleared elsewhere: back on the list');
check(merge(st({ missed: { q: { n: 1, box: 1 } }, edits: { 'mq:q': 100 } }), st({ missed: { q: { n: 1, box: 3 } }, edits: { 'mq:q': 200 } })).missed.q.box === 3, 'both have it: the newer review step wins');

// Flashcards
check(!('f' in merge(st({ flash: { known: { f: 1 } }, edits: { 'fk:f': 10 } }), st({ flash: { known: {} }, edits: { 'fk:f': 20 } })).flash.known), 'flashcard un-marked on the other device');

// Edit history merges
const e = merge(st({ edits: { a: 5, b: 9 } }), st({ edits: { a: 7, c: 1 } })).edits;
check(e.a === 7 && e.b === 9 && e.c === 1, 'edit history keeps the newest time per item');

// Scores still keep the best
check(merge(st({ quizzes: { m1: { best: 0.6 } } }), st({ quizzes: { m1: { best: 0.9 } } })).quizzes.m1.best === 0.9, 'quiz scores keep the best (unchanged behaviour)');

// Reset
const afterReset = merge(st({ completed: { l1: 1, l2: 2 }, name: 'Stale', theme: 'dark' }), st({ completed: {}, resetAt: 500, name: '' }));
check(Object.keys(afterReset.completed).length === 0 && afterReset.resetAt === 500 && afterReset.theme === 'dark', 'reset on the other device clears this older copy (theme kept)');
const resetHere = merge(st({ completed: {}, resetAt: 500 }), st({ completed: { l1: 1 } }));
check(Object.keys(resetHere.completed).length === 0, 'reset here is not undone by the older cloud copy');
const both = merge(st({ completed: { l3: 3 }, resetAt: 500 }), st({ completed: { l4: 4 }, resetAt: 500 }));
check('l3' in both.completed && 'l4' in both.completed, 'same reset seen on both: normal merge afterwards');

if (fail.length) { console.log(`\n${fail.length} failed.`); process.exit(1); }
console.log('\nTwo-device merge passed.');
