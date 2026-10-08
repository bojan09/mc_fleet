// Simulations: each one marks wrong answers wrong and accepts the right ones
// (then records completion). Usage: node tools/sims-test.mjs
import { startServer, launchBrowser } from './browser.mjs';

// Right answers per simulation: [field name, value] pairs; checkboxes list every value to tick.
const RIGHT = {
  'sim:dvir': [['d0', '0'], ['d1', '1'], ['d2', '0'], ['d3', '0'], ['d4', '1'], ['cert', '1'], ['keep', '1']],
  'sim:core': [['paid', '375'], ['credit', '90'], ['net', '285'], ['old', '2'], ['track', '1']],
  'sim:warranty': [['miles', '29,600'], ['inside', 'yes'], ['first', '1'], ['pack', ['0', '1', '2', '3', '4']]]
};
const server = await startServer();
const b = await launchBrowser();
await b.cdp('Page.enable');
await b.cdp('Page.navigate', { url: server.base + '#/simulations' });
await new Promise((r) => setTimeout(r, 1500));
const fail = [];
const check = (ok, label) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${label}`); if (!ok) fail.push(label); };
for (const [id, answers] of Object.entries(RIGHT)) {
  const run = (fill) => b.evaluate(`(async () => {
    const w = document.querySelector('[data-widget="${id}"]'); const f = w.querySelector('form'); f.reset();
    for (const [name, v] of ${JSON.stringify(fill)}) {
      const els = [...f.elements].filter((e) => e.name === name);
      if (els[0].type === 'radio' || els[0].type === 'checkbox') els.forEach((e) => { e.checked = [].concat(v).includes(e.value); });
      else els[0].value = v;
    }
    f.requestSubmit(); await new Promise((r) => setTimeout(r, 50));
    return w.querySelector('.sim-result strong').textContent;
  })()`);
  const blank = await run([]);
  check(/^0\//.test(blank), `${id}: empty form scores 0 (${blank})`);
  const wrongOne = answers.slice(0, -1);
  const partial = await run(wrongOne);
  const n = answers.length;
  check(!new RegExp(`^${n}/`).test(partial) || n === 1, `${id}: leaving one answer out isn't full marks (${partial})`);
  const right = await run(answers);
  const total = right.split('/')[1];
  check(right.startsWith(total.split(' ')[0] + '/'), `${id}: right answers score full marks (${right})`);
  check(await b.evaluate(`JSON.parse(localStorage.getItem('mca.v1')).exercises['${id}'] === 1`), `${id}: completion recorded`);
}
check(b.exceptions.length === 0, `no script errors${b.exceptions.length ? ': ' + b.exceptions.join(' | ') : ''}`);
await b.close(); server.close();
if (fail.length) { console.log(`\n${fail.length} failed.`); process.exit(1); }
console.log('\nSimulations passed.');
