// Browser sweep: serves the site locally, opens it in headless Edge/Chrome and
// visits every route at phone, tablet and desktop widths, reporting script
// errors, horizontal overflow, skipped heading levels, missing pages, broken
// images and accessibility problems (controls and fields without names,
// images without alt, duplicate ids, positive tabindex, and text contrast in
// light and dark themes). No dependencies (Node 22+ for the built-in WebSocket).
// Usage: node tools/sweep.mjs            (BROWSER=path\to\chrome.exe to override)
import { startServer, launchBrowser } from './browser.mjs';

const WIDTHS = [[375, 812], [768, 1024], [1366, 900]];
const server = await startServer();
const base = server.base;
const { cdp, evaluate, exceptions, close } = await launchBrowser();

/* Accessibility checks that run inside the page on the current view. */
const A11Y = `(() => {
  const out = [];
  const visible = (el) => { const r = el.getBoundingClientRect(); return (r.width || r.height) && !el.closest('[hidden], [aria-hidden="true"], .sr-only') && getComputedStyle(el).visibility !== 'hidden'; };
  const text = (el) => (el.textContent || '').replace(/\\s+/g, ' ').trim();
  const labelled = (el) => {
    if (el.getAttribute('aria-label') || el.getAttribute('title')) return true;
    const by = el.getAttribute('aria-labelledby'); if (by && by.split(' ').some((id) => { const t = document.getElementById(id); return t && text(t); })) return true;
    return false;
  };
  const tag = (el) => el.tagName.toLowerCase() + (el.id ? '#' + el.id : el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/)[0] : '');
  const scope = document.querySelector('#view');
  for (const el of scope.querySelectorAll('a[href], button, [role="button"], summary')) {
    if (!visible(el)) continue;
    const img = [...el.querySelectorAll('img[alt]')].some((i) => i.alt.trim());
    if (!text(el) && !img && !labelled(el)) out.push('control without a name: ' + tag(el));
  }
  for (const el of scope.querySelectorAll('input:not([type="hidden"]), select, textarea')) {
    if (!visible(el) && el.type !== 'radio' && el.type !== 'checkbox') continue;
    const ok = labelled(el) || el.closest('label') || (el.id && document.querySelector('label[for="' + CSS.escape(el.id) + '"]'));
    if (!ok) out.push('form field without a label: ' + tag(el) + (el.name ? '[name=' + el.name + ']' : ''));
  }
  for (const el of scope.querySelectorAll('img')) if (!el.hasAttribute('alt')) out.push('image without alt: ' + (el.getAttribute('src') || '').slice(-40));
  for (const el of document.querySelectorAll('[tabindex]')) if (+el.getAttribute('tabindex') > 0) out.push('positive tabindex: ' + tag(el));
  const ids = new Map(); document.querySelectorAll('[id]').forEach((el) => ids.set(el.id, (ids.get(el.id) || 0) + 1));
  for (const [id, n] of ids) if (n > 1) out.push('duplicate id "' + id + '" x' + n);
  if (!document.documentElement.lang) out.push('page has no lang');
  return [...new Set(out)];
})()`;

/* Text contrast (WCAG AA: 4.5:1, or 3:1 for large text) for text in the
   current view. Text over images or gradients is skipped (can't be judged
   from styles), as is text inside disabled controls. */
const CONTRAST = `(() => {
  const parse = (c) => {
    let m = c.match(/^rgba?\\(([\\d.]+),\\s*([\\d.]+),\\s*([\\d.]+)(?:,\\s*([\\d.]+))?\\)/);
    if (m) return [+m[1], +m[2], +m[3], m[4] == null ? 1 : +m[4]];
    m = c.match(/^color\\(srgb ([\\d.e-]+) ([\\d.e-]+) ([\\d.e-]+)(?: \\/ ([\\d.]+))?\\)/);
    if (m) return [m[1] * 255, m[2] * 255, m[3] * 255, m[4] == null ? 1 : +m[4]];
    return null;
  };
  const over = (top, bot) => { const a = top[3] + bot[3] * (1 - top[3]); return a ? [0, 1, 2].map((i) => (top[i] * top[3] + bot[i] * bot[3] * (1 - top[3])) / a).concat(a) : [0, 0, 0, 0]; };
  const lum = (c) => { const [r, g, b] = c.slice(0, 3).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const out = [];
  const els = [...document.querySelectorAll('#view *')].filter((el) => [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim()));
  for (const el of els) {
    const r = el.getBoundingClientRect(); if (!r.width || !r.height) continue;
    if (el.closest('[hidden], .sr-only, [aria-hidden="true"], :disabled, svg')) continue;
    const cs = getComputedStyle(el); if (cs.visibility === 'hidden') continue;
    let fg = parse(cs.color); if (!fg) continue;
    // background: composite every ancestor layer from the root down
    const layers = []; let p = el, skip = false, opacity = 1;
    while (p && p.nodeType === 1) {
      const s = getComputedStyle(p);
      opacity *= +s.opacity;
      if (s.backgroundImage !== 'none') { skip = true; break; }
      const bg = parse(s.backgroundColor); if (bg && bg[3] > 0) layers.push(bg);
      p = p.parentElement;
    }
    if (skip || opacity < 0.99) continue;
    let bg = [255, 255, 255, 1]; for (const l of layers.reverse()) bg = over(l, bg);
    fg = over(fg, bg);
    const [L1, L2] = [lum(fg), lum(bg)].sort((a, b) => b - a); const ratio = (L1 + 0.05) / (L2 + 0.05);
    const size = parseFloat(cs.fontSize); const bold = +cs.fontWeight >= 700;
    const need = size >= 24 || (bold && size >= 18.66) ? 3 : 4.5;
    if (ratio + 0.005 < need) {
      const name = el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).join('.') : '');
      out.push(name + ' ' + ratio.toFixed(2) + ':1 (needs ' + need + ') "' + el.textContent.trim().slice(0, 30) + '"');
    }
  }
  return [...new Set(out)];
})()`;

/* Runs inside the page: collects routes from the live app and checks each. */
const SWEEP = `(async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const routes = ['#/dashboard', '#/curriculum', '#/practice', '#/scenarios', '#/trees', '#/exercises', '#/flashcards', '#/calculators', '#/fleet', '#/glossary', '#/library', '#/reference', '#/bookmarks', '#/achievements', '#/profile', '#/software', '#/privacy', '#/review', '#/simulations', '#/trainer', '#/verify', '#/verify/ABCDEFGH23'];
  ${'$'}{EXTRA}
  for (const t of TRACKS_IDS) { location.hash = '#/track/' + t; await wait(40); routes.push('#/track/' + t, '#/final/' + t); document.querySelectorAll('#view a[href^="#/lesson"], #view a[href^="#/quiz"], #view a[href^="#/cheatsheet"], #view a[href^="#/pretest"], #view a[href^="#/posttest"]').forEach((a) => routes.push(a.getAttribute('href'))); }
  for (const r of ['#/software', '#/library']) { location.hash = r; await wait(40); document.querySelectorAll('#view a[href^="#/software/"], #view a[href^="#/library/"]').forEach((a) => routes.push(a.getAttribute('href'))); }
  const out = [];
  for (const r of [...new Set(routes)]) {
    location.hash = r; await wait(60);
    const problems = [];
    const ow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
    if (ow > 0) problems.push('page scrolls sideways by ' + ow + 'px');
    // #main clips overflow, so also look for content that pokes past the viewport
    // (ignoring anything inside a container that scrolls or hides on purpose).
    const vw = document.documentElement.clientWidth; let cut = null;
    for (const el of document.querySelectorAll('#view *')) {
      const r = el.getBoundingClientRect();
      if (r.right <= vw + 1 || r.width === 0 || el.closest('.sr-only')) continue;
      let p = el.parentElement, scrolls = false;
      while (p && p.id !== 'view') { const ox = getComputedStyle(p).overflowX; if (ox === 'auto' || ox === 'scroll' || ox === 'hidden') { scrolls = true; break; } p = p.parentElement; }
      if (!scrolls) { cut = (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ')[0] : el.tagName.toLowerCase()) + ' +' + Math.round(r.right - vw) + 'px'; break; }
    }
    if (cut) problems.push('content cut off: ' + cut);
    let last = 1;
    document.querySelectorAll('#view h1, #view h2, #view h3, #view h4, #view h5').forEach((h) => { if (h.closest('[hidden]')) return; const n = +h.tagName[1]; if (n > last + 1) problems.push('heading skip to ' + h.tagName + ' "' + h.textContent.trim().slice(0, 40) + '"'); last = n; });
    if (/not found/i.test(document.title)) problems.push('page not found');
    problems.push(...${'$'}{A11Y_CHECK});
    if (problems.length) out.push(r + ': ' + problems.join('; '));
  }
  window.__routes = [...new Set(routes)];
  return { count: new Set(routes).size, problems: out, vw: innerWidth };
})()`;

await cdp('Runtime.enable');
await cdp('Page.enable');
let failed = false;
/* Self-test: plant one problem of each kind and make sure the checks see it. */
await cdp('Page.navigate', { url: base + '#/dashboard' });
await new Promise((r) => setTimeout(r, 1500));
const planted = await evaluate(`(() => {
  const box = document.createElement('div'); box.id = 'selftest';
  box.innerHTML = '<p style="color:#bbb;background:#fff">faint text</p><button type="button" style="width:20px;height:20px"></button><input name="x"><img src="x.png"><span id="selftest"></span>';
  document.querySelector('#view').appendChild(box);
  const r = { a11y: ${A11Y}, contrast: ${CONTRAST} }; box.remove(); return r;
})()`);
const expect = [[planted.a11y, /control without a name/], [planted.a11y, /form field without a label/], [planted.a11y, /image without alt/], [planted.a11y, /duplicate id "selftest"/], [planted.contrast, /faint text/]];
const missed = expect.filter(([list, re]) => !list.some((p) => re.test(p)));
if (missed.length) { console.log('Self-test FAILED: checks did not catch ' + missed.map(([, re]) => re).join(', ')); process.exit(1); }
console.log('Self-test: accessibility and contrast checks catch planted problems.');
for (const [w, h] of WIDTHS) {
  await cdp('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: w < 768 });
  await cdp('Page.navigate', { url: base + '#/dashboard' });
  await new Promise((r) => setTimeout(r, 1500));
  const tracks = await evaluate(`[...document.querySelectorAll('#navTracks a')].map((a) => a.getAttribute('href').split('/').pop())`);
  const res = await evaluate(SWEEP.replace('${EXTRA}', `const TRACKS_IDS = ${JSON.stringify(tracks)};`).replace('${A11Y_CHECK}', A11Y));
  console.log(`${w}px (viewport ${res.vw}): ${res.count} routes, ${res.problems.length} problem(s)`);
  res.problems.forEach((p) => console.log('  ' + p));
  if (res.problems.length) failed = true;
}
/* Contrast, every route, light and dark themes (desktop width) */
// One call per route, each with a time limit, so a page that never settles
// (or reloads the document) is reported by name instead of stalling the run.
const contrastRoutes = await evaluate('window.__routes');
const withLimit = (p, ms, what) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error(what)), ms))]);
for (const theme of ['light', 'dark']) {
  const out = new Map();
  for (const r of contrastRoutes) {
    try {
      const found = await withLimit(evaluate(`(async () => {
        document.documentElement.setAttribute('data-theme', '${theme}');
        location.hash = ${JSON.stringify(r)}; await new Promise((res) => setTimeout(res, 60));
        // jump entry animations (fades) to their end so text is measured at full opacity
        document.getAnimations().forEach((an) => { try { an.finish(); } catch {} });
        return ${CONTRAST};
      })()`), 15000, 'timed out');
      for (const p of found) if (!out.has(p)) out.set(p, r);
    } catch (err) { out.set(`page check failed (${err.message})`, r); }
  }
  const bad = [...out].map(([p, r]) => p + '  (first on ' + r + ')');
  console.log(`Contrast, ${theme} theme: ${bad.length} problem(s)`);
  bad.forEach((p) => console.log('  ' + p));
  if (bad.length) failed = true;
}
/* Images on the library pages */
await cdp('Page.navigate', { url: base + '#/library' });
await new Promise((r) => setTimeout(r, 1500));
const broken = await evaluate(`(async () => { const imgs = [...document.querySelectorAll('img')]; imgs.forEach((i) => { i.loading = 'eager'; }); await new Promise((r) => setTimeout(r, 2500)); return { total: imgs.length, broken: imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.getAttribute('src')) }; })()`);
console.log(`Library images: ${broken.total} checked, ${broken.broken.length} broken`);
broken.broken.forEach((s) => console.log('  ' + s));
if (broken.broken.length) failed = true;
if (exceptions.length) { failed = true; console.log(`Script errors (${exceptions.length}):`); [...new Set(exceptions)].forEach((e) => console.log('  ' + e.split('\n')[0])); }
else console.log('Script errors: 0');

await close(); server.close();
console.log(failed ? '\nSweep found problems.' : '\nSweep passed.');
process.exit(failed ? 1 : 0);
