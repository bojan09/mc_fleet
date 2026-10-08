// Dashboard and profile page, signed in with a fake Supabase client
// (tools/fake-supabase.js): details, picture upload and removal, email and
// password changes (including the emailed-code step), preferences, export
// and reset, at phone and desktop widths. Usage: node tools/profile-test.mjs
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { root } from './load.mjs';
import { startServer, launchBrowser } from './browser.mjs';

const seed = {
  user: { id: 'me', email: 'me@example.test', created_at: '2026-03-01T10:00:00Z', identities: [{ provider: 'google' }], user_metadata: { full_name: 'Ana Petrovska' }, needsNonce: true },
  tables: {}
};
const server = await startServer();
const b = await launchBrowser();
const fake = readFileSync(join(root, 'tools/fake-supabase.js'), 'utf8');
await b.cdp('Page.enable');
await b.cdp('Page.addScriptToEvaluateOnNewDocument', { source: `window.__FAKE_DB = ${JSON.stringify(seed)};\n${fake}
  URL.createObjectURL = ((orig) => (blob) => { if (blob.type === 'application/json') { blob.text().then((t) => { window.__lastDownload = t; }); return 'blob:fake'; } return orig(blob); })(URL.createObjectURL);` });
const wait = async (expr, ms = 8000) => {
  for (let i = 0; i < ms / 100; i++) { if (await b.evaluate(expr).catch(() => false)) return true; await new Promise((r) => setTimeout(r, 100)); }
  return false;
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fail = [];
const check = (ok, label) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${label}`); if (!ok) fail.push(label); };
const text = (sel) => b.evaluate(`(document.querySelector(${JSON.stringify(sel)}) || {}).textContent || ''`);
const stored = (expr) => b.evaluate(`(() => { const s = JSON.parse(localStorage.getItem('mca.v1') || '{}'); return ${expr}; })()`);
const overflow = () => b.evaluate(`(() => { const v = document.querySelector('#view'); const w = v.getBoundingClientRect().right; return [...v.querySelectorAll('*')].filter((e) => { const r = e.getBoundingClientRect(); return r.width && r.right > w + 1 && !e.closest('.table-wrap'); }).map((e) => e.className || e.tagName).slice(0, 5); })()`);
const fill = (sel, val) => b.evaluate(`(() => { const e = document.querySelector(${JSON.stringify(sel)}); e.value = ${JSON.stringify(val)}; return true; })()`);
const submit = (sel) => b.evaluate(`document.querySelector(${JSON.stringify(sel)}).requestSubmit(), true`);
const click = (sel) => b.evaluate(`document.querySelector(${JSON.stringify(sel)}).click(), true`);

for (const width of [375, 1366]) {
  console.log(`\n— ${width}px`);
  await b.cdp('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 });
  await b.cdp('Page.navigate', { url: server.base + '?t=' + width + '#/dashboard' });
  check(await wait(`!!document.querySelector('.dash-top') && /Ana/.test(document.querySelector('#dashTitle').textContent)`), 'dashboard greets by first name (from the Google name)');
  check(await wait(`/Synced|syncing|synced/i.test(document.querySelector('#sidebarFoot').textContent)`), 'sidebar shows the account');
  check(/Add your role and company/.test(await text('.dash-top__role')), 'dashboard asks for role and company');
  check(/1 lesson to go/.test(await text('.dash-today')), 'today\'s goal starts at 1 lesson');
  check(await b.evaluate(`document.querySelectorAll('.week li').length === 7`), 'week strip has 7 days');
  check((await overflow()).length === 0, `dashboard nothing cut off (${(await overflow()).join(', ')})`);

  await b.evaluate(`location.hash = '#/profile', true`);
  check(await wait(`!!document.querySelector('.prof-head')`), 'profile page renders');
  check(/me@example\.test/.test(await text('.prof-head')), 'email shown');
  check(/Member since/.test(await text('.prof-stats')) && /Mar 2026/.test(await text('.prof-stats')), 'member since from the account');
  check(/Google/.test(await text('.prof-methods')) && /Email & password \(not set\)/.test(await text('.prof-methods')), 'sign-in methods: Google linked, no password yet');
  check((await overflow()).length === 0, `profile nothing cut off (${(await overflow()).join(', ')})`);

  if (width === 375) continue;

  // Details
  await fill('#pdName', 'Ana Petrovska'); await fill('#pdRole', 'Maintenance Coordinator'); await fill('#pdCompany', 'Vardar Fleet'); await fill('#pdCity', 'Bitola');
  await submit('#pdForm');
  check(await wait(`/Vardar Fleet · Bitola/.test(document.querySelector('.prof-head').textContent)`), 'details saved and shown in the header');
  check(await stored(`s.profile.company === 'Vardar Fleet' && s.edits.profile > 0`), 'details stored with an edit time (for sync)');

  // Picture upload: a generated 600×400 PNG is cropped and resized to 256×256.
  await click('#profAvatar');
  check(await wait(`!!document.querySelector('#avpFile')`), 'picture dialog offers upload when signed in');
  await b.evaluate(`(async () => {
    const c = document.createElement('canvas'); c.width = 600; c.height = 400; const x = c.getContext('2d'); x.fillStyle = '#c33'; x.fillRect(0, 0, 600, 400);
    const blob = await new Promise((r) => c.toBlob(r, 'image/png'));
    const dt = new DataTransfer(); dt.items.add(new File([blob], 'me.png', { type: 'image/png' }));
    const inp = document.querySelector('#avpFile'); inp.files = dt.files; inp.dispatchEvent(new Event('change', { bubbles: true })); return true; })()`);
  check(await wait(`/Picture updated/.test(document.querySelector('#avpMsg').textContent)`), 'upload reports success');
  const files = await b.evaluate('JSON.stringify(window.__FAKE_FILES)');
  check(/"me\/avatar\.(webp|jpg)"/.test(files) && /image\/(webp|jpeg)/.test(files), `stored in the user's folder as WebP/JPEG (${files})`);
  check(await stored(`s.avatar.src === 'upload' && /\\?v=\\d+/.test(s.avatar.url)`), 'picture URL stored with a cache-busting version');
  check(await wait(`!!document.querySelector('#sidebarFoot .avatar__img')`), 'sidebar shows the picture');
  await click('[data-avp="remove"]');
  check(await wait(`JSON.stringify(window.__FAKE_FILES) === '{}'`), 'remove deletes the stored file');
  check(await stored(`s.avatar.src === '' && !s.avatar.url`), 'picture cleared');
  await b.evaluate(`document.querySelector('.modal [data-close]').click(), true`); await sleep(400);

  // Email change
  await click('[data-toggle="emForm"]');
  await fill('#emNew', 'not-an-email'); await submit('#emForm');
  check(/valid email/.test(await text('#emMsg')), 'email change validates the address');
  await fill('#emNew', 'ana@example.test'); await submit('#emForm');
  check(await wait(`/confirmation link/.test(document.querySelector('#emMsg') ? document.querySelector('#emMsg').textContent : '') || /waiting for confirmation/.test(document.querySelector('#view').textContent)`), 'email change asks to confirm by email');
  check(await b.evaluate(`window.__FAKE_LOG.some((l) => l.auth === 'updateUser' && l.attrs.email === 'ana@example.test')`), 'email change sent to Supabase');

  // Password: mismatch, then the emailed-code step, then success.
  await wait(`!!document.querySelector('[data-toggle="pwForm"]')`);
  await click('[data-toggle="pwForm"]');
  await fill('#pwNew', 'longenough1'); await fill('#pwNew2', 'different11'); await submit('#pwForm');
  check(/don't match/.test(await text('#pwMsg')), 'password mismatch caught');
  await fill('#pwNew2', 'longenough1'); await submit('#pwForm');
  check(await wait(`!document.querySelector('#pwCodeField').hidden`), 'asks for the emailed code when Supabase needs it');
  check(await b.evaluate(`window.__FAKE_LOG.some((l) => l.auth === 'reauthenticate')`), 'code requested from Supabase');
  await fill('#pwCode', '123456'); await submit('#pwForm');
  check(await wait(`window.__FAKE_LOG.some((l) => l.auth === 'updateUser' && l.attrs.nonce === '123456' && l.attrs.password === 'longenough1')`), 'password saved with the code');
  check(await wait(`/Email & password/.test(document.querySelector('.prof-methods').textContent) && !/not set/.test(document.querySelector('.prof-methods').textContent)`), 'password now listed as a sign-in method');

  // Preferences
  await b.evaluate(`(() => { const s = document.querySelector('#prGoal'); s.value = '3'; s.dispatchEvent(new Event('change')); return true; })()`);
  await b.evaluate(`(() => { const s = document.querySelector('#prMotion'); s.checked = true; s.dispatchEvent(new Event('change')); return true; })()`);
  await b.evaluate(`(() => { const r = document.querySelector('input[name="prTheme"][value="dark"]'); r.checked = true; r.dispatchEvent(new Event('change')); return true; })()`);
  check(await b.evaluate(`document.documentElement.dataset.motion === 'reduce' && document.documentElement.dataset.theme === 'dark'`), 'reduce motion and theme apply at once');
  check(await stored(`s.goal === 3 && s.motion === 'reduce' && s.theme === 'dark'`), 'preferences stored');

  // Export
  await click('#dtExport');
  check(await wait('!!window.__lastDownload'), 'export produced a file');
  check(await b.evaluate(`(() => { const d = JSON.parse(window.__lastDownload); return d.progress && d.progress.profile.city === 'Bitola' && !('theme' in d.progress); })()`), 'export holds progress and profile, not device preferences');

  // Reset keeps the profile
  await b.evaluate(`(() => { const s = JSON.parse(localStorage.getItem('mca.v1')); s.completed = { 'beginner.m1.l1': Date.now() }; localStorage.setItem('mca.v1', JSON.stringify(s)); return true; })()`);
  await b.cdp('Page.reload'); await wait(`!!document.querySelector('.prof-head')`);
  await click('[data-reset]'); await wait(`!!document.querySelector('#doReset')`); await click('#doReset');
  check(await wait(`location.hash === '#/dashboard'`), 'reset returns to the dashboard');
  check(await stored(`Object.keys(s.completed).length === 0 && s.profile.city === 'Bitola' && s.goal === 3 && s.resetAt > 0`), 'reset clears progress but keeps profile and goal');
  check(/3 lessons to go/.test(await text('.dash-today')), 'dashboard uses the new daily goal');
  check(/Vardar Fleet/.test(await text('.dash-top__role')), 'dashboard shows role and company');
}
check(b.exceptions.length === 0, `no script errors${b.exceptions.length ? ': ' + b.exceptions.join(' | ') : ''}`);

await b.close(); server.close();
if (fail.length) { console.log(`\n${fail.length} failed.`); process.exit(1); }
console.log('\nProfile screens passed.');
