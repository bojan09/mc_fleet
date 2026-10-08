// Signed-in screens with a fake Supabase client (tools/fake-supabase.js):
// trainer groups, assignments, CSV export and the dashboard "Assigned to you"
// card, at phone and desktop widths. Usage: node tools/trainer-test.mjs
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { root } from './load.mjs';
import { startServer, launchBrowser } from './browser.mjs';

const day = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
const done = (track, mod, lessons) => Object.fromEntries(lessons.map((l) => [`${track}.${mod}.${l}`, Date.now()]));
const seed = {
  user: { id: 'me', email: 'me@example.test', user_metadata: { full_name: 'Test Trainer' } },
  tables: {
    groups: [
      { id: 'g1', owner: 'me', name: 'Night shift', join_code: 'NIGHT234', created_at: '2026-01-01' },
      { id: 'g2', owner: 'boss', name: 'Dallas terminal', join_code: 'DALLAS23', created_at: '2026-01-02' }
    ],
    group_members: [
      { group_id: 'g1', user_id: 'ana', display_name: '=Ana', joined_at: '2026-02-01T10:00:00Z' },
      { group_id: 'g1', user_id: 'ben', display_name: 'Ben "B" Ortiz', joined_at: '2026-02-03T10:00:00Z' },
      { group_id: 'g2', user_id: 'me', display_name: 'Test Trainer', joined_at: '2026-02-05T10:00:00Z' }
    ],
    progress: [
      { user_id: 'ana', state: { completed: done('beginner', 'm1', ['l1', 'l2', 'l3']), quizzes: { 'beginner.m1': { best: 0.8 }, 'beginner.m4': { best: 0.5 } }, missed: { 'beginner.m3.l1#0': { n: 1 } }, days: ['2026-10-01'] } },
      { user_id: 'ben', state: { name: 'Benjamin "Ben" Ortiz', completed: {}, missed: { 'beginner.m3.l2#1': { n: 2 }, 'beginner.m3.l1#0': { n: 1 } }, quizzes: { 'beginner.m3': { best: 0.6 } }, days: [] } }
    ],
    assignments: [
      { id: 'a1', group_id: 'g1', module: 'beginner.m1', due: day(-2) },
      { id: 'a2', group_id: 'g2', module: 'beginner.m2', due: day(-1) },
      { id: 'a3', group_id: 'g2', module: 'advanced.m1', due: null }
    ]
  }
};

const server = await startServer();
const b = await launchBrowser();
const fake = readFileSync(join(root, 'tools/fake-supabase.js'), 'utf8');
await b.cdp('Page.enable');
await b.cdp('Page.addScriptToEvaluateOnNewDocument', { source: `window.__FAKE_DB = ${JSON.stringify(seed)};\n${fake}
  URL.createObjectURL = (blob) => { blob.text().then((t) => { window.__lastDownload = t; }); return 'blob:fake'; };` });
const wait = async (expr, ms = 8000) => {
  for (let i = 0; i < ms / 100; i++) { if (await b.evaluate(expr).catch(() => false)) return true; await new Promise((r) => setTimeout(r, 100)); }
  return false;
};
const fail = [];
const check = (ok, label) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${label}`); if (!ok) fail.push(label); };
const text = (sel) => b.evaluate(`(document.querySelector(${JSON.stringify(sel)}) || {}).textContent || ''`);
const overflow = () => b.evaluate(`(() => { const v = document.querySelector('#view'); const w = v.getBoundingClientRect().right; return [...v.querySelectorAll('*')].filter((e) => { const r = e.getBoundingClientRect(); return r.width && r.right > w + 1 && !e.closest('.table-wrap'); }).map((e) => e.className || e.tagName).slice(0, 5); })()`);

for (const width of [375, 1366]) {
  console.log(`\n— ${width}px`);
  await b.cdp('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 });
  await b.cdp('Page.navigate', { url: server.base + '?t=' + width + '#/trainer' });
  check(await wait(`!!document.querySelector('.tr-group')`), 'trainer page renders the group');
  const card = await text('.tr-group');
  check(/Night shift/.test(card) && /NIGHT234/.test(card), 'group name and join code shown');
  check(/Beginner · M1/.test(card) && /1\/2 done/.test(card), 'assigned module with "1/2 done"');
  check(/1 overdue/.test(card), 'overdue count for the learner who has not finished');
  check(/Benjamin "Ben" Ortiz/.test(card) && !/Ben "B" Ortiz/.test(card), 'table shows the name the learner set, not the one saved at joining');
  check(await b.evaluate(`[...document.querySelectorAll('.tr-table th')].some((th) => th.textContent === 'Assigned')`), 'table has an Assigned column');
  const mem = await text('.tr-memberships');
  check(/Dallas terminal/.test(mem) && /Beginner · M2/.test(mem) && /overdue/.test(mem) && /no due date/.test(mem), 'learner side lists assignments from their trainer');
  const weak = await text('.tr-weak');
  check(/Beginner · M3/.test(weak) && /2 of 2 learners with questions to review \(3\)/.test(weak) && /quiz average 60%/.test(weak), 'weak spots: module, learners, questions and quiz average');
  check(/Beginner · M4/.test(weak) && /quiz average 50%/.test(weak) && !/Beginner · M1/.test(weak), 'low quiz average counts; a module with a good score and no misses does not');
  check(weak.indexOf('M3') < weak.indexOf('M4'), 'most learners struggling listed first');
  check((await overflow()).length === 0, `nothing cut off (${(await overflow()).join(', ')})`);

  if (width === 1366) {
    await b.evaluate(`document.querySelector('[data-assign-pick="beginner.m3"]').click(), true`);
    check(await b.evaluate(`document.querySelector('.tr-assign__form').module.value === 'beginner.m3' && document.activeElement.name === 'due'`), 'Assign on a weak spot picks the module and focuses the due date');
    // assign a module
    await b.evaluate(`(() => { const f = document.querySelector('.tr-assign__form'); f.module.value = 'beginner.m3'; f.due.value = '${day(7)}'; f.requestSubmit(); return true; })()`);
    check(await wait(`/Beginner · M3/.test(document.querySelector('.tr-assign').textContent)`), 'new assignment appears after Assign');
    check(await b.evaluate(`!document.querySelector('.tr-assign__form option[value="beginner.m3"]')`), 'assigned module leaves the picker');
    // remove it
    await b.evaluate(`[...document.querySelectorAll('[data-unassign]')].find((x) => /M3/.test(x.getAttribute('aria-label'))).click(), true`);
    check(await wait(`!/Beginner · M3/.test(document.querySelector('.tr-assign').textContent)`), 'removing an assignment works');
    // CSV
    await b.evaluate(`document.querySelector('[data-csv]').click(), true`);
    check(await wait('!!window.__lastDownload'), 'CSV download produced');
    const csv = await b.evaluate('window.__lastDownload');
    const lines = csv.replace(/^﻿/, '').trim().split('\r\n');
    check(lines.length === 3, `CSV has header + 2 learners (${lines.length} lines)`);
    check(/"Assigned: Beginner · M1 .*\(due \d{4}-\d\d-\d\d\)"/.test(lines[0]), 'CSV header names the assigned module and due date');
    check(lines.some((l) => l.startsWith(`"'=Ana"`)), 'CSV defuses a name that starts with = (no spreadsheet formula)');
    check(lines.some((l) => l.startsWith('"Benjamin ""Ben"" Ortiz"')), 'CSV uses the name the learner set, quotes escaped');
    check(/"done"/.test(lines.find((l) => l.includes('Ana'))) && /"not done"/.test(lines.find((l) => l.includes('Ben'))), 'CSV marks assigned module done / not done');
  }

  await b.evaluate(`location.hash = '#/dashboard', true`);
  check(await wait(`!!document.querySelector('.dash-assigned')`), 'dashboard shows "Assigned to you"');
  const dash = await text('.dash-assigned');
  check(/Beginner · M2/.test(dash) && /Advanced · M1/.test(dash) && !/Beginner · M1/.test(dash), 'only modules assigned by other trainers');
  check(/2 to do/.test(dash) && /overdue/.test(dash), 'to-do count and overdue label');
  check((await overflow()).length === 0, `dashboard nothing cut off (${(await overflow()).join(', ')})`);
}
check(b.exceptions.length === 0, `no script errors${b.exceptions.length ? ': ' + b.exceptions.join(' | ') : ''}`);

await b.close(); server.close();
if (fail.length) { console.log(`\n${fail.length} failed.`); process.exit(1); }
console.log('\nTrainer screens passed.');
