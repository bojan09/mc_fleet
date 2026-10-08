
/* ===========================================================================
   4. ENGINE
   =========================================================================== */

/* ---------- Utilities ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ESC_MAP[c]);
const stripTags = (s) => String(s).replace(/<[^>]*>/g, '').replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, a, b) => b || a).replace(/\*\*?/g, '');
const icon = (id, cls = '') => `<svg class="icon ${cls}" aria-hidden="true" focusable="false"><use href="#i-${id}"/></svg>`;
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const pct = (n) => Math.round(n * 100);
const fmtMoney = (n, d = 0) => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const fmtNum = (n, d = 0) => Number(n).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const reduceMotion = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
/* Calendar day in the learner's own time zone (toISOString would give the UTC day,
   so study just after midnight in Skopje landed on the previous day). */
const dayKey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const todayStr = () => dayKey(new Date());
let UID = 0;
const nextId = (p) => `${p}-${++UID}`;
function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function staggerChildren(el) { if (!el) return; Array.from(el.children).forEach((c, i) => c.style.setProperty('--i', Math.min(i, 12))); }

/* ---------- Indexes ---------- */
const TRACK_BY_ID = Object.fromEntries(TRACKS.map((t) => [t.id, t]));
const LESSONS = [];
TRACKS.forEach((t) => t.modules.forEach((m, mi) => m.lessons.forEach((l, li) => {
  LESSONS.push({ t, m, l, mi, li, key: `${t.id}.${m.id}.${l.id}` });
})));
const LESSON_MAP = new Map(LESSONS.map((x) => [x.key, x]));
const GLOSS_MAP = new Map(GLOSSARY.map((g) => [g.term.toLowerCase(), g]));
function findTerm(name) {
  const k = String(name).toLowerCase();
  return GLOSS_MAP.get(k) || GLOSSARY.find((g) => g.full.toLowerCase() === k) || null;
}
const lessonHref = (x) => `#/lesson/${x.t.id}/${x.m.id}/${x.l.id}`;

/* ---------- State (localStorage) ---------- */
const STORE_KEY = 'mca.v1';
const DEFAULT_STATE = { completed: {}, checks: {}, quizzes: {}, finals: {}, bookmarks: [], last: null, flash: { known: {} }, scen: {}, trees: {}, glossaryViewed: {}, exercises: {}, calcUsed: {}, achievements: {}, theme: null, name: '', days: [], missed: {}, certIds: {}, edits: {}, resetAt: 0 };
let storageOk = true;
let state = migrateState(loadState());
/* Lessons that moved between tracks keep their saved progress (LESSON_MOVES). */
function migrateState(st) {
  const reEsc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const rules = Object.entries(LESSON_MOVES).map(([from, to]) => [new RegExp(`(^|[^\\w.])${reEsc(from)}(?=$|[^\\w])`), to]);
  const move = (k) => rules.reduce((acc, [re, to]) => acc.replace(re, `$1${to}`), k);
  let changed = false;
  const remap = (obj) => Object.fromEntries(Object.entries(obj || {}).map(([k, v]) => { const n = move(k); if (n !== k) changed = true; return [n, v]; }));
  ['completed', 'checks', 'quizzes', 'exercises'].forEach((f) => { st[f] = remap(st[f]); });
  st.bookmarks = (st.bookmarks || []).map((k) => { const n = move(k); if (n !== k) changed = true; return n; });
  if (st.last) { const n = move(st.last); if (n !== st.last) { changed = true; st.last = n; } }
  if (changed) { try { localStorage.setItem(STORE_KEY, JSON.stringify(st)); } catch (e) {} }
  return st;
}
function loadState() {
  const base = JSON.parse(JSON.stringify(DEFAULT_STATE));
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return base;
    const parsed = JSON.parse(raw);
    Object.keys(base).forEach((k) => { if (parsed[k] !== undefined) base[k] = parsed[k]; });
    return base;
  } catch (e) { storageOk = false; return base; }
}
let saveWarned = false;
/* Records when a removable item last changed (bookmark, completion,
   flashcard, missed question, name), so syncing devices keeps the newest
   change instead of bringing removed items back. See mergeProgress(). */
function touch(key) { state.edits[key] = Date.now(); }
function save() {
  cloudQueue();
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
  catch (e) {
    storageOk = false;
    if (!saveWarned) { saveWarned = true; toast({ kind: 'warning', title: 'Progress not saved', text: 'Your browser is blocking local storage, so progress will reset when you leave.' }); }
  }
}
function markActiveDay() {
  const d = todayStr();
  if (!state.days.includes(d)) { state.days.push(d); state.days = state.days.slice(-120); save(); }
}

/* ---------- Progress helpers ---------- */
const isDone = (key) => !!state.completed[key];
const quizKey = (t, m) => `${t.id}.${m.id}`;
const quizPassed = (t, m) => (state.quizzes[quizKey(t, m)] || {}).best >= 0.8;
const finalPassed = (t) => !!(state.finals[t.id] && state.finals[t.id].passed);
function moduleStats(t, m) {
  const done = m.lessons.filter((l) => isDone(`${t.id}.${m.id}.${l.id}`)).length;
  return { done, total: m.lessons.length, complete: done === m.lessons.length };
}
function trackStats(t) {
  let lessons = 0, done = 0, quizzes = 0;
  t.modules.forEach((m) => { const s = moduleStats(t, m); lessons += s.total; done += s.done; if (quizPassed(t, m)) quizzes++; });
  const units = lessons + t.modules.length + 1;
  const got = done + quizzes + (finalPassed(t) ? 1 : 0);
  return { lessons, done, quizzes, modules: t.modules.length, p: got / units, final: finalPassed(t) };
}
function overallProgress() {
  let units = 0, got = 0;
  TRACKS.forEach((t) => { const s = trackStats(t); const u = s.lessons + s.modules + 1; units += u; got += s.p * u; });
  return units ? got / units : 0;
}
const completedCount = () => LESSONS.filter((x) => isDone(x.key)).length;
function avgQuiz() {
  const vals = Object.values(state.quizzes).map((q) => q.best);
  if (!vals.length) {
    const c = Object.values(state.checks).filter((c) => c.total);
    if (!c.length) return null;
    return c.reduce((a, b) => a + b.score / b.total, 0) / c.length;
  }
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}
function streak() {
  const set = new Set(state.days);
  let n = 0; const d = new Date();
  if (!set.has(todayStr())) d.setDate(d.getDate() - 1);
  while (set.has(dayKey(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function recommended() {
  for (const t of TRACKS) {
    for (const m of t.modules) {
      for (const l of m.lessons) {
        const x = LESSON_MAP.get(`${t.id}.${m.id}.${l.id}`);
        if (!isDone(x.key)) return { kind: 'lesson', x, t, m, title: l.title, sub: `${t.level} · Module ${m.id.slice(1)}: ${m.title}`, href: lessonHref(x), icon: 'book' };
      }
      if (!quizPassed(t, m)) return { kind: 'quiz', t, m, title: `Module ${m.id.slice(1)} Quiz: ${m.title}`, sub: `${t.level} · Knowledge review`, href: `#/quiz/${t.id}/${m.id}`, icon: 'target' };
    }
    if (!finalPassed(t)) return { kind: 'final', t, title: t.final.title, sub: `${t.level} · Final assessment`, href: `#/final/${t.id}`, icon: 'award' };
  }
  return null;
}
function currentContext() {
  const last = state.last && LESSON_MAP.get(state.last);
  if (last) return last;
  const r = recommended();
  return r && r.x ? r.x : LESSONS[0];
}

/* ---------- Achievements ---------- */
const ACHIEVEMENTS = [
  { id: 'first-lesson', title: 'First Shift', desc: 'Complete your first lesson.', icon: 'play', test: () => completedCount() >= 1 },
  { id: 'module', title: 'Module Complete', desc: 'Finish every lesson in a module.', icon: 'layers', test: () => TRACKS.some((t) => t.modules.some((m) => moduleStats(t, m).complete)) },
  { id: 'ten', title: 'Steady Progress', desc: 'Complete 10 lessons.', icon: 'trend', test: () => completedCount() >= 10 },
  { id: 'safety', title: 'Safety First', desc: 'Complete the Safety & Roadside module.', icon: 'shield', test: () => moduleStats(BEGINNER, BEGINNER.modules[4]).complete },
  { id: 'quiz-ace', title: 'Quiz Ace', desc: 'Score 100% on a module quiz.', icon: 'target', test: () => Object.values(state.quizzes).some((q) => q.best === 1) },
  { id: 'scenario', title: 'Cool Under Pressure', desc: 'Choose the best response in 5 scenarios.', icon: 'message', test: () => Object.values(state.scen).filter((g) => g === 'best').length >= 5 },
  { id: 'trees', title: 'Decision Maker', desc: 'Reach a strong outcome in 3 decision trees.', icon: 'branch', test: () => Object.values(state.trees).filter((g) => g === 'good').length >= 3 },
  { id: 'flash', title: 'Vocabulary Builder', desc: 'Mark 20 flashcards as known.', icon: 'cards', test: () => Object.keys(state.flash.known).length >= 20 },
  { id: 'glossary', title: 'Reference Reader', desc: 'Open 10 glossary terms.', icon: 'book', test: () => Object.keys(state.glossaryViewed).length >= 10 },
  { id: 'calc', title: 'By the Numbers', desc: 'Use 3 different calculators.', icon: 'calc', test: () => Object.keys(state.calcUsed).length >= 3 },
  { id: 'cert-beginner', title: 'Fundamentals Certified', desc: 'Pass the Beginner final exam.', icon: 'grad', test: () => finalPassed(BEGINNER) },
  { id: 'cert-advanced', title: 'Fleet Operations Certified', desc: 'Pass the Advanced final project.', icon: 'wrench', test: () => finalPassed(ADVANCED) },
  { id: 'cert-expert', title: 'Fleet Management Certified', desc: 'Pass the Expert final simulation.', icon: 'award', test: () => finalPassed(EXPERT) },
  { id: 'cert-operations', title: 'Transportation Operations Certified', desc: 'Pass the Operations final exam.', icon: 'route', test: () => finalPassed(OPERATIONS) },
  { id: 'master', title: 'Master Coordinator', desc: 'Earn the Beginner, Advanced and Expert certificates.', icon: 'star', test: () => [BEGINNER, ADVANCED, EXPERT].every(finalPassed) }
];
function checkAchievements() {
  let changed = false;
  ACHIEVEMENTS.forEach((a) => {
    if (!state.achievements[a.id] && a.test()) {
      state.achievements[a.id] = Date.now(); changed = true;
      toast({ kind: 'award', title: `Achievement: ${a.title}`, text: a.desc, icon: a.icon });
    }
  });
  if (changed) save();
}

/* ---------- Toasts ---------- */
function toast({ title, text = '', kind = 'info', icon: ic, timeout = 4500, action }) {
  const region = $('#toasts');
  const ico = ic || { success: 'check-circle', warning: 'alert', award: 'award', info: 'info' }[kind] || 'info';
  const el = document.createElement('div');
  el.className = `toast toast--${kind}`;
  el.innerHTML = `<span class="toast__icon">${icon(ico)}</span><div class="grow"><strong>${esc(title)}</strong>${text ? `<p>${esc(text)}</p>` : ''}${action ? `<button type="button" class="btn btn--sm btn--primary toast__action">${esc(action.label)}</button>` : ''}</div><button class="btn-icon" aria-label="Dismiss notification">${icon('x', 'icon--sm')}</button>`;
  region.appendChild(el);
  while (region.children.length > 4) region.firstElementChild.remove();
  const close = () => {
    if (el.classList.contains('is-leaving')) return;
    el.classList.add('is-leaving');
    const done = () => el.remove();
    if (reduceMotion()) done(); else { el.addEventListener('animationend', done, { once: true }); setTimeout(done, 400); }
  };
  el.querySelector('.btn-icon').addEventListener('click', close);
  if (action) el.querySelector('.toast__action').addEventListener('click', () => { close(); action.onClick(); });
  if (timeout) setTimeout(close, timeout);
}

/* ---------- Modal ---------- */
let modalStack = [];
function openModal({ title, body, foot = '', size = '', onOpen, label, bare = false }) {
  const root = $('#modalRoot');
  const id = nextId('modal');
  const back = document.createElement('div');
  back.className = 'modal-backdrop';
  back.innerHTML = `<div class="modal ${size}" role="dialog" aria-modal="true" ${title ? `aria-labelledby="${id}-t"` : `aria-label="${esc(label || 'Dialog')}"`}>
    ${bare ? body : `<div class="modal__head"><h2 id="${id}-t">${title}</h2><button class="btn-icon" data-close aria-label="Close dialog">${icon('x')}</button></div>
    <div class="modal__body">${body}</div>${foot ? `<div class="modal__foot">${foot}</div>` : ''}`}
  </div>`;
  const prevFocus = document.activeElement;
  root.appendChild(back);
  document.body.style.overflow = 'hidden';
  const modal = back.querySelector('.modal');
  const close = () => {
    if (back.classList.contains('is-closing')) return;
    back.classList.add('is-closing');
    const done = () => {
      back.remove();
      modalStack = modalStack.filter((m) => m.back !== back);
      if (!modalStack.length) document.body.style.overflow = '';
      if (prevFocus && prevFocus.focus) prevFocus.focus({ preventScroll: true });
    };
    if (reduceMotion()) done(); else { back.addEventListener('animationend', (e) => { if (e.target === back) done(); }); setTimeout(done, 300); }
  };
  back.addEventListener('mousedown', (e) => { if (e.target === back) close(); });
  $$('[data-close]', back).forEach((b) => b.addEventListener('click', close));
  back.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.stopPropagation(); close(); }
    if (e.key === 'Tab') {
      const f = $$('a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])', modal).filter((x) => x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  modalStack.push({ back, close });
  const focusTarget = $('[autofocus]', modal) || $('input, button:not([data-close])', modal) || $('[data-close]', modal);
  requestAnimationFrame(() => focusTarget && focusTarget.focus());
  if (onOpen) onOpen(modal, close);
  return close;
}

/* ---------- Small components ---------- */
function progressBar(p, { cls = '', color = '', label = 'Progress' } = {}) {
  const v = clamp(p, 0, 1);
  return `<div class="progress ${cls}" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct(v)}"><div class="progress__bar" style="--p:${v};${color ? `--c:${color}` : ''}"></div></div>`;
}
function ring(p, { size = 120, stroke = 10, label = '', sub = '', color = '', cls = '', fs = 22 } = {}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const v = clamp(p, 0, 1);
  return `<div class="ring ${cls}" style="width:${size}px;height:${size}px" role="img" aria-label="${esc(label || pct(v) + '%')}${sub ? ' ' + esc(sub) : ''}">
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
      <circle class="ring__track" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}"/>
      <circle class="ring__value" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" style="--circ:${c.toFixed(2)};--off:${(c * (1 - v)).toFixed(2)};${color ? `--c:${color}` : ''}"/>
    </svg>
    <div class="ring__label" style="font-size:${fs}px"><div>${label || pct(v) + '%'}${sub ? `<small>${esc(sub)}</small>` : ''}</div></div>
  </div>`;
}
const scorePill = (s) => `<span class="score-pill score-pill--${s >= 0.8 ? 'good' : s >= 0.6 ? 'mid' : 'low'}">${pct(s)}%</span>`;
function stateBlock({ ic = 'info', title, text, action = '', error = false }) {
  return `<div class="state-block ${error ? 'state-block--error' : ''} anim-scale-in"><div class="state-block__icon">${icon(ic)}</div><h2>${esc(title)}</h2><p>${esc(text)}</p>${action}</div>`;
}
function pageHead({ eyebrow, title, text, right = '' }) {
  return `<header class="page-head"><div>${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}<h1>${title}</h1>${text ? `<p>${text}</p>` : ''}</div>${right}</header>`;
}

/* ---------- Inline markup: [[Term]] → glossary tooltip button ---------- */
function inline(s) {
  return String(s).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, term, label) => {
    const g = findTerm(term);
    const text = label || term;
    if (!g) return `<strong>${text}</strong>`;
    const vis = LIB_TERM.has(g.term.toLowerCase());
    return `<button type="button" class="term${vis ? ' term--visual' : ''}" data-term="${esc(g.term)}" data-tip="${esc(g.full + ' — ' + g.simple)}${vis ? ' (tap to see it)' : ''}">${text}${vis ? icon('image', 'term__ico') : ''}</button>`;
  }).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/(^|[\s(“"])\*([^*\s][^*]*?)\*(?=[\s.,;:!?)”"]|$)/g, '$1<em>$2</em>');
}

/* ---------- Content block renderer ---------- */
const EX_REG = new Map();
/* Component headings (callouts, tiles, cards…) sit one level below the nearest
   heading: h3 directly under a section h2, h4 once a block list has its own {h}. */
let BLOCK_HL = 3;
const hx = () => `h${BLOCK_HL}`;
function renderBlocks(blocks) {
  const prev = BLOCK_HL; BLOCK_HL = 3;
  const html = (blocks || []).map((b) => { const out = renderBlock(b); if (b && b.h) BLOCK_HL = 4; return out; }).join('');
  BLOCK_HL = prev;
  return html;
}
function renderBlock(b) {
  if (typeof b === 'string') return `<p>${inline(b)}</p>`;
  if (b.h) return `<h3>${inline(b.h)}</h3>`;
  if (b.ul) return `<ul>${b.ul.map((i) => `<li>${inline(i)}</li>`).join('')}</ul>`;
  if (b.ol) return `<ol>${b.ol.map((i) => `<li>${inline(i)}</li>`).join('')}</ol>`;
  if (b.callout) {
    const c = b.callout; const ic = { info: 'info', tip: 'bulb', warning: 'alert', safety: 'shield' }[c.kind] || 'info';
    return `<div class="callout callout--${c.kind}" role="note"><span class="callout__icon">${icon(ic)}</span><div>${c.title ? `<${hx()}>${esc(c.title)}</${hx()}>` : ''}<p>${inline(c.text)}</p></div></div>`;
  }
  if (b.tiles) return `<div class="info-grid">${b.tiles.map((t) => `<div class="info-tile"><div class="info-tile__icon">${icon(t.icon)}</div><${hx()}>${esc(t.title)}</${hx()}><p>${inline(t.text)}</p></div>`).join('')}</div>`;
  if (b.compare) {
    const col = (c, k) => `<div class="compare__col compare__col--${k}"><${hx()}>${icon(k === 'yes' ? 'check-circle' : 'x-circle')} ${esc(c.title)}</${hx()}><ul>${c.items.map((i) => `<li>${icon(k === 'yes' ? 'check' : 'x')}<span>${inline(i)}</span></li>`).join('')}</ul></div>`;
    return `<div class="compare">${col(b.compare.yes, 'yes')}${col(b.compare.no, 'no')}</div>`;
  }
  if (b.table) {
    return `<div class="table-wrap"><table class="table"><thead><tr>${b.table.head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map((r) => `<tr>${r.map((c, i) => i === 0 ? `<td><strong>${inline(c)}</strong></td>` : `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  if (b.timeline) {
    return `<ol class="timeline">${b.timeline.map((s, i) => {
      const pid = nextId('tl');
      return `<li class="tl-step ${i === 0 ? 'is-open is-seen' : ''}"><span class="tl-step__num" aria-hidden="true">${i + 1}</span>
        <button type="button" class="tl-step__btn" aria-expanded="${i === 0}" aria-controls="${pid}"><span class="tl-step__title">${inline(s.title)}</span>${icon('chev-d')}</button>
        <div class="acc-panel" id="${pid}"><div><div class="acc-panel__inner"><p>${inline(s.text)}</p>${s.owner ? `<span class="badge badge--outline tl-step__owner">${esc(s.owner)}</span>` : ''}</div></div></div></li>`;
    }).join('')}</ol>`;
  }
  if (b.flow) return `<div class="flow" role="list">${b.flow.map((f, i) => `${i ? icon('chev-r') : ''}<span role="listitem" class="flow__item ${b.hl && b.hl.includes(i) ? 'flow__item--hl' : ''}">${esc(f)}</span>`).join('')}</div>`;
  if (b.dialog) {
    return `<div class="dialog" role="log" aria-label="Conversation">${b.dialog.map(([who, text], i) => {
      const k = who === 'note' ? 'note' : (who === 'You' || who === 'Coordinator') ? 'me' : 'them';
      return `<div class="bubble bubble--${k}" style="animation-delay:${Math.min(i, 10) * 60}ms">${k !== 'note' ? `<span class="bubble__who">${esc(who)}</span>` : ''}${inline(text)}</div>`;
    }).join('')}</div>`;
  }
  if (b.msg) {
    const m = b.msg; const ic = { message: 'message', note: 'file', good: 'check-circle', bad: 'x-circle' }[m.kind] || 'message';
    const cls = m.kind === 'note' ? 'msg--note' : m.kind === 'good' ? 'msg--good msg--note' : m.kind === 'bad' ? 'msg--bad msg--note' : '';
    return `<div class="msg ${cls}"><div class="msg__head">${icon(ic)}<strong>${esc(m.title)}</strong><button type="button" class="btn-icon" data-copy aria-label="Copy text" data-tip="Copy" data-tip-pos="left">${icon('copy', 'icon--sm')}</button></div><div class="msg__body">${esc(m.text)}</div></div>`;
  }
  if (b.accordion) {
    return `<div class="accordion">${b.accordion.map((a) => {
      const pid = nextId('acc');
      return `<div class="acc-item"><${hx()}><button type="button" class="acc-trigger" aria-expanded="false" aria-controls="${pid}">${esc(a.title)}${icon('chev-d')}</button></${hx()}><div class="acc-panel" id="${pid}" role="region"><div><div class="acc-panel__inner"><p>${inline(a.text)}</p></div></div></div></div>`;
    }).join('')}</div>`;
  }
  if (b.tabs) {
    const id = nextId('tabs');
    return `<div class="tabs"><div class="tablist" role="tablist">${b.tabs.map((t, i) => `<button type="button" class="tab" role="tab" id="${id}-t${i}" aria-controls="${id}-p${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(t.label)}</button>`).join('')}</div>
      ${b.tabs.map((t, i) => `<div class="tabpanel prose" role="tabpanel" id="${id}-p${i}" aria-labelledby="${id}-t${i}" ${i ? 'hidden' : ''}>${renderBlocks(t.body)}</div>`).join('')}</div>`;
  }
  if (b.ig) return infographicHTML(b);
  if (b.industry) {
    const x = b.industry;
    return `<aside class="industry" aria-label="Industry example: ${esc(x.name)}"><div class="industry__head"><span class="industry__tag">${icon('pin', 'icon--sm')} Industry example</span><span class="badge badge--outline">${esc(x.cat)}</span></div>`
      + `<${hx()} class="industry__name">${esc(x.name)}</${hx()}><p>${inline(x.text)}</p>${x.relevance ? `<p class="industry__why"><strong>Why it matters here:</strong> ${inline(x.relevance)}</p>` : ''}`
      + `<div class="industry__foot"><a class="industry__link" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">Official website ${icon('external', 'icon--sm')}<span class="sr-only"> (opens in a new tab)</span></a><span class="industry__note">Referenced as an example — not an endorsement or affiliation.</span></div></aside>`;
  }
  if (b.widget) return `<div class="widget" data-widget="${esc(b.widget)}"></div>`;
  if (b.note) return `<p class="block-note">${icon('info', 'icon--sm')}<span>${inline(b.note)}</span></p>`;
  if (b.mock) return swMockHTML(b.mock);
  if (b.libPhoto) return swPhotoHTML(b.libPhoto, b.caption);
  if (b.exercise) return exerciseHTML(b.exercise, { key: b.key });
  return '';
}

/* ---------- Question engine (knowledge checks + module quizzes) ---------- */
const Q_LABEL = { mc: 'Multiple choice', tf: 'True or false', scenario: 'Scenario', wwyd: 'What would you do?' };
const qOptions = (q) => (q.t === 'tf' ? ['True', 'False'] : q.o);
const qCorrect = (q) => (q.t === 'tf' ? (q.a ? 0 : 1) : q.a);
function questionHTML(q, name, order) {
  const opts = qOptions(q);
  const idxs = order || opts.map((_, i) => i);
  return `<fieldset class="q__fs"><legend class="q__text">${inline(q.q)}</legend>
    <div class="opts ${q.t === 'tf' ? 'opts--tf' : ''}">${idxs.map((oi, k) => `<label class="opt" data-oi="${oi}"><input type="radio" name="${name}" value="${oi}"><span class="opt__box"><span class="opt__key" aria-hidden="true">${String.fromCharCode(65 + k)}</span><span>${inline(opts[oi])}</span></span></label>`).join('')}</div></fieldset>`;
}
function gradeQuestion(el, q) {
  const sel = $('input:checked', el);
  if (!sel) return null;
  const chosen = +sel.value; const correct = qCorrect(q); const ok = chosen === correct;
  $$('.opt', el).forEach((o) => {
    const oi = +o.dataset.oi; $('input', o).disabled = true;
    if (oi === correct) o.classList.add('is-correct');
    else if (oi === chosen) o.classList.add('is-wrong');
  });
  $('.opts', el).classList.add('is-locked');
  noteAnswer(q, ok);
  return { ok, html: `<div class="feedback feedback--${ok ? 'correct' : 'wrong'}" role="status">${icon(ok ? 'check-circle' : 'x-circle')}<div><strong>${ok ? 'Correct' : 'Not quite'}</strong><p>${inline(q.e)}</p></div></div>` };
}

function lessonCheckHTML(x) {
  const qs = x.l.check || [];
  const prev = state.checks[x.key];
  return `<div class="check" data-check="${x.key}">
    <div class="check__head"><div><strong>Knowledge check</strong><div class="small muted" data-check-sum>${prev ? `Last score: ${prev.score}/${prev.total}` : `${qs.length} questions · instant feedback`}</div></div>
      <div class="check__progress" aria-hidden="true">${qs.map(() => '<span></span>').join('')}</div></div>
    ${qs.map((q, i) => `<div class="q" data-qi="${i}"><div class="q__type"><span class="badge badge--outline">${Q_LABEL[q.t] || 'Question'}</span></div>${questionHTML(q, `${x.key}-q${i}`)}
      <div class="q__actions"><button type="button" class="btn btn--primary btn--sm" data-q-check>Check answer</button></div><div data-q-fb aria-live="polite"></div></div>`).join('')}
  </div>`;
}
function mountLessonCheck(root, x) {
  const box = $('[data-check]', root); if (!box) return;
  const qs = x.l.check || []; const results = [];
  $$('.q', box).forEach((qel) => {
    const i = +qel.dataset.qi; const btn = $('[data-q-check]', qel);
    btn.addEventListener('click', () => {
      const r = gradeQuestion(qel, qs[i]);
      if (!r) { $('[data-q-fb]', qel).innerHTML = `<p class="small muted mt-2">Select an answer first.</p>`; return; }
      results[i] = r.ok; btn.remove();
      $('[data-q-fb]', qel).innerHTML = r.html;
      const seg = $$('.check__progress span', box)[i]; seg.classList.add(r.ok ? 'is-correct' : 'is-wrong');
      if (results.filter((v) => v !== undefined).length === qs.length) {
        const score = results.filter(Boolean).length;
        state.checks[x.key] = { score, total: qs.length }; save();
        $('[data-check-sum]', box).textContent = `Score: ${score}/${qs.length}${score === qs.length ? ' — perfect' : ''}`;
        if (score === qs.length) toast({ kind: 'success', title: 'Knowledge check passed', text: `${score}/${qs.length} correct.` });
        checkAchievements();
      }
    });
  });
}

/* ---------- Exercise engine ---------- */
const EX_META = { classify: ['list-check', 'Classify'], order: ['list-check', 'Put in order'], extract: ['clipboard', 'Extract the information'], choose: ['target', 'Choose the best option'], multi: ['list-check', 'Select all that apply'] };
function exerciseHTML(ex, opts = {}, fixedId) {
  const id = fixedId || nextId('ex');
  EX_REG.set(id, { ex, opts });
  const [ic, defTitle] = EX_META[ex.type];
  let body = '';
  if (ex.type === 'classify') {
    body = `<div class="classify">${ex.items.map((it, i) => `<div class="classify-row" data-i="${i}"><div class="classify-row__text" id="${id}-l${i}">${inline(it.text)}</div>
      <select class="select" aria-labelledby="${id}-l${i}"><option value="">Choose…</option>${ex.categories.map((c) => `<option>${esc(c)}</option>`).join('')}</select></div>`).join('')}</div>`;
  } else if (ex.type === 'order') {
    let perm = shuffle(ex.items.map((_, i) => i)); let tries = 0;
    while (perm.every((v, i) => v === i) && tries++ < 10) perm = shuffle(perm);
    body = `<ol class="order-list" aria-label="Items to order">${perm.map((oi, k) => `<li class="order-item" data-orig="${oi}"><span class="order-item__n">${k + 1}</span><span class="order-item__text">${inline(ex.items[oi])}</span>
      <span class="order-item__ctl"><button type="button" class="btn-icon" data-mv="-1" aria-label="Move up: ${esc(stripTags(ex.items[oi]))}">${icon('chev-u')}</button><button type="button" class="btn-icon" data-mv="1" aria-label="Move down: ${esc(stripTags(ex.items[oi]))}">${icon('chev-d')}</button></span></li>`).join('')}</ol>`;
  } else if (ex.type === 'extract') {
    body = `<div class="source-doc"><span class="source-doc__label">${esc(ex.sourceLabel || 'Source')}</span>${esc(ex.source)}</div>
      <div class="fields">${ex.fields.map((f, i) => `<div class="field ${f.full ? 'field--full' : ''}"><label for="${id}-f${i}">${esc(f.label)}</label><input class="input" id="${id}-f${i}" autocomplete="off" placeholder="${esc(f.placeholder || '')}"><span class="field__result" data-fr aria-live="polite"></span></div>`).join('')}</div>`;
  } else if (ex.type === 'choose' || ex.type === 'multi') {
    const type = ex.type === 'choose' ? 'radio' : 'checkbox';
    body = `<fieldset><legend class="sr-only">${esc(stripTags(ex.prompt))}</legend><div class="opts">${ex.options.map((o, i) => `<label class="opt" data-oi="${i}"><input type="${type}" name="${id}-o" value="${i}"><span class="opt__box"><span class="opt__key" aria-hidden="true">${String.fromCharCode(65 + i)}</span><span>${inline(o.text)}<span class="opt__why" hidden></span></span></span></label>`).join('')}</div></fieldset>`;
  }
  return `<div class="exercise" data-ex="${id}">
    <div class="exercise__head"><h3>${icon(ic)} ${esc(opts.title || defTitle)}</h3>${ex.prompt ? `<p class="small mt-2">${inline(ex.prompt)}</p>` : ''}</div>
    <div class="exercise__body">${body}
      <div class="q__actions"><button type="button" class="btn btn--primary btn--sm" data-ex-check>${icon('check')} Check</button><button type="button" class="btn btn--ghost btn--sm" data-ex-reset hidden>${icon('rotate')} Try again</button><span class="small muted" data-ex-status role="status"></span></div>
      <div data-ex-fb aria-live="polite"></div></div></div>`;
}
const normTxt = (s) => String(s).toLowerCase().replace(/[\s,$%]/g, '').replace(/[’']/g, "'");
const isNumTok = (t) => /^[\d.:]+$/.test(normTxt(t).replace(/h$/, ''));
function fieldMatch(value, accept) {
  const v = normTxt(value); if (!v) return false;
  return accept.some((tok) => {
    if (isNumTok(tok)) {
      const vn = v.replace(/[^\d.:]/g, ''); const tn = normTxt(tok).replace(/[^\d.:]/g, '');
      return vn === tn || parseFloat(vn) === parseFloat(tn) && !tn.includes(':');
    }
    return v.includes(normTxt(tok));
  });
}
function mountExercises(root) { $$('[data-ex]', root).forEach((el) => { if (!el.dataset.mounted) mountExercise(el); }); }
function mountExercise(el) {
  el.dataset.mounted = '1';
  const id = el.dataset.ex; const reg = EX_REG.get(id); if (!reg) return;
  const { ex, opts } = reg;
  const status = $('[data-ex-status]', el); const fb = $('[data-ex-fb]', el);
  const btnCheck = $('[data-ex-check]', el); const btnReset = $('[data-ex-reset]', el);
  if (ex.type === 'order') {
    const list = $('.order-list', el);
    list.addEventListener('click', (e) => {
      const b = e.target.closest('[data-mv]'); if (!b || b.disabled) return;
      const li = b.closest('.order-item'); const dir = +b.dataset.mv;
      const sib = dir < 0 ? li.previousElementSibling : li.nextElementSibling; if (!sib) return;
      if (dir < 0) list.insertBefore(li, sib); else list.insertBefore(sib, li);
      $$('.order-item', list).forEach((x, k) => { $('.order-item__n', x).textContent = k + 1; });
      li.classList.remove('is-moved'); void li.offsetWidth; li.classList.add('is-moved');
      b.focus();
    });
  }
  btnCheck.addEventListener('click', () => {
    const r = gradeExercise(el, ex);
    if (r === null) { status.textContent = ex.type === 'extract' ? 'Fill in every field first.' : 'Complete the exercise first.'; el.classList.remove('anim-shake'); void el.offsetWidth; el.classList.add('anim-shake'); return; }
    status.textContent = '';
    btnCheck.hidden = true;
    if (!opts.noRetry) btnReset.hidden = false;
    const kind = r.score >= 0.999 ? 'correct' : r.score >= 0.5 ? 'partial' : 'wrong';
    const head = kind === 'correct' ? 'Excellent — all correct' : kind === 'partial' ? `Partially correct — ${pct(r.score)}%` : `Needs work — ${pct(r.score)}%`;
    fb.innerHTML = `<div class="feedback feedback--${kind}">${icon(kind === 'correct' ? 'check-circle' : kind === 'partial' ? 'info' : 'x-circle')}<div><strong>${head}</strong>${r.note ? `<p>${r.note}</p>` : ''}</div></div>`;
    if (opts.key) { state.exercises[opts.key] = Math.max(state.exercises[opts.key] || 0, r.score); save(); }
    if (opts.onDone) opts.onDone(r.score);
  });
  btnReset.addEventListener('click', () => {
    const wrap = document.createElement('div');
    wrap.innerHTML = exerciseHTML(ex, opts, id);
    const fresh = wrap.firstElementChild; el.replaceWith(fresh); mountExercise(fresh);
    $('input, select, button', fresh).focus();
  });
}
function gradeExercise(el, ex) {
  if (ex.type === 'classify') {
    const sels = $$('select', el); if (sels.some((s) => !s.value)) return null;
    let ok = 0;
    sels.forEach((s, i) => {
      const it = ex.items[i]; const good = s.value === it.answer; if (good) ok++;
      s.classList.add(good ? 'is-valid' : 'is-invalid'); s.disabled = true;
      const row = s.closest('.classify-row');
      row.insertAdjacentHTML('beforeend', `<div class="classify-row__fb">${good ? '<strong style="color:var(--success)">Correct.</strong>' : `<strong style="color:var(--critical)">Answer: ${esc(it.answer)}.</strong>`} ${inline(it.why || '')}</div>`);
    });
    return { score: ok / sels.length };
  }
  if (ex.type === 'order') {
    const items = $$('.order-item', el); let ok = 0;
    items.forEach((li, k) => { const good = +li.dataset.orig === k; if (good) ok++; li.classList.add(good ? 'is-correct' : 'is-wrong'); $$('button', li).forEach((b) => { b.disabled = true; }); });
    const note = ok === items.length ? 'Every item is in the right position.' : `Correct order: ${ex.items.map((t, i) => `<br><span class="mono">${i + 1}.</span> ${inline(t)}`).join('')}`;
    return { score: ok / items.length, note };
  }
  if (ex.type === 'extract') {
    const inputs = $$('input', el); if (inputs.some((i) => !i.value.trim())) return null;
    let ok = 0;
    inputs.forEach((inp, i) => {
      const f = ex.fields[i]; const good = fieldMatch(inp.value, f.accept); if (good) ok++;
      inp.classList.add(good ? 'is-valid' : 'is-invalid'); inp.readOnly = true;
      const r = inp.parentElement.querySelector('[data-fr]');
      r.className = `field__result ${good ? 'ok' : 'no'}`;
      r.innerHTML = good ? `${icon('check')} Correct` : `${icon('x')} Expected: ${esc(f.accept[0])}`;
    });
    return { score: ok / inputs.length };
  }
  if (ex.type === 'choose') {
    const sel = $('input:checked', el); if (!sel) return null;
    const chosen = +sel.value; const correctIdx = ex.options.findIndex((o) => o.correct);
    $$('.opt', el).forEach((o) => {
      const i = +o.dataset.oi; $('input', o).disabled = true;
      if (i === correctIdx) o.classList.add('is-correct'); else if (i === chosen) o.classList.add('is-wrong');
      if (i === chosen || i === correctIdx) { const w = $('.opt__why', o); w.hidden = false; w.innerHTML = inline(ex.options[i].why); }
    });
    $('.opts', el).classList.add('is-locked');
    return { score: chosen === correctIdx ? 1 : 0 };
  }
  if (ex.type === 'multi') {
    const boxes = $$('input', el); if (!boxes.some((b) => b.checked)) return null;
    let tp = 0, fp = 0; const nCorrect = ex.options.filter((o) => o.correct).length;
    $$('.opt', el).forEach((o) => {
      const i = +o.dataset.oi; const inp = $('input', o); const opt = ex.options[i]; inp.disabled = true;
      if (inp.checked && opt.correct) { tp++; o.classList.add('is-correct'); }
      else if (inp.checked && !opt.correct) { fp++; o.classList.add('is-wrong'); }
      else if (!inp.checked && opt.correct) o.classList.add('is-missed');
      const w = $('.opt__why', o); w.hidden = false; w.innerHTML = inline(opt.why);
    });
    $('.opts', el).classList.add('is-locked');
    return { score: Math.max(0, (tp - fp) / nCorrect), note: fp ? 'Selecting incorrect options reduces your score.' : '' };
  }
  return { score: 0 };
}

/* ---------- Router ---------- */
let viewCleanup = null;
const ROUTES = [
  [/^\/(?:dashboard)?$/, viewDashboard],
  [/^\/curriculum$/, viewCurriculum],
  [/^\/track\/(\w+)$/, viewTrack],
  [/^\/lesson\/(\w+)\/(\w+)\/(\w+)$/, viewLesson],
  [/^\/quiz\/(\w+)\/(\w+)$/, viewQuiz],
  [/^\/final\/(\w+)$/, viewFinal],
  [/^\/practice$/, viewPractice],
  [/^\/scenarios(?:\/([\w-]+))?$/, viewScenarios],
  [/^\/trees(?:\/(\w+))?$/, viewTrees],
  [/^\/exercises$/, viewExercises],
  [/^\/flashcards$/, viewFlashcards],
  [/^\/calculators(?:\/(\w+))?$/, viewCalculators],
  [/^\/fleet$/, viewFleetPage],
  [/^\/glossary(?:\/(.+))?$/, viewGlossary],
  [/^\/bookmarks$/, viewBookmarks],
  [/^\/reference$/, viewReference],
  [/^\/library(?:\/([\w-]+))?$/, viewLibrary],
  [/^\/(?:academy\/)?software(?:\/([\w-]+))?$/, viewSoftware],
  [/^\/privacy$/, viewPrivacy],
  [/^\/review$/, viewReview],
  [/^\/simulations$/, viewSimulations],
  [/^\/trainer$/, viewTrainer],
  [/^\/verify(?:\/([\w-]+))?$/, viewVerify],
  [/^\/cheatsheet\/(\w+)\/(\w+)$/, viewCheatSheet],
  [/^\/achievements$/, viewAchievements]
];
function router() {
  // In-page anchors (#sec-…, #main) are not routes — let the browser handle them.
  if (location.hash && !location.hash.startsWith('#/')) return;
  if (viewCleanup) { try { viewCleanup(); } catch (e) { console.warn('View cleanup failed:', e); } viewCleanup = null; }
  const path = decodeURIComponent((location.hash || '#/dashboard').slice(1).split('?')[0]);
  // Lesson text loads on demand: fetch it first, then render this route again.
  const need = contentFor(path);
  if (need && !hasContent(need === 'all' ? undefined : need)) {
    const hash = location.hash; const view = $('#view');
    view.innerHTML = '<div class="page"><div class="skeleton" style="height:28px;width:40%;border-radius:8px"></div><div class="skeleton mt-4" style="height:220px;border-radius:12px"></div><span class="sr-only">Loading…</span></div>';
    view.setAttribute('aria-busy', 'true');
    loadContent(need === 'all' ? undefined : need)
      .then(() => { view.removeAttribute('aria-busy'); if (location.hash === hash) router(); })
      .catch((e) => {
        console.warn('Lesson content failed to load:', e && e.message); view.removeAttribute('aria-busy');
        if (location.hash !== hash) return;
        view.innerHTML = `<div class="page">${stateBlock({ ic: 'alert', title: 'This lesson couldn’t load', text: navigator.onLine ? 'Please try again in a moment.' : 'You’re offline and this lesson hasn’t been saved on this device yet. Connect to the internet to open it.', error: true, action: '<button type="button" class="btn btn--primary" data-retry-content>Try again</button>' })}</div>`;
        const b = $('[data-retry-content]', view); if (b) b.addEventListener('click', () => router());
        document.title = 'Couldn’t load · MC Academy';
      });
    return;
  }
  let out = null;
  for (const [re, fn] of ROUTES) { const m = path.match(re); if (m) { out = fn(...m.slice(1)); break; } }
  if (!out) out = viewNotFound();
  const view = $('#view');
  view.innerHTML = out.html;
  view.classList.remove('is-entering'); void view.offsetWidth; view.classList.add('is-entering');
  $$('.stagger', view).forEach(staggerChildren);
  setCrumbs(out.crumbs || []);
  setNav(out.nav, out.bottom);
  document.title = `${out.title ? out.title + ' · ' : ''}MC Academy`;
  $('#announcer').textContent = out.title || 'Dashboard';
  mountWidgets(view);
  mountExercises(view);
  if (out.after) out.after(view);
  closeSidebar();
  if (!out.keepScroll) window.scrollTo({ top: 0, behavior: 'auto' });
  $('#main').focus({ preventScroll: true });
  refreshChrome();
}
function go(hash) { if (location.hash === hash) router(); else location.hash = hash; }

function setCrumbs(list) {
  const el = $('#crumbs');
  const items = [['Academy', '#/dashboard'], ...list];
  el.innerHTML = items.map(([label, href], i) => i === items.length - 1
    ? `<span aria-current="page">${esc(label)}</span>`
    : `<a href="${href}">${esc(label)}</a>${icon('chev-r')}`).join('');
}
function setNav(navId, bottomId) {
  document.body.dataset.nav = navId || '';
  $$('#sideNav [data-nav]').forEach((a) => { if (a.dataset.nav === navId) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  // Keep the collapsed Practice tools group open while one of its pages is showing.
  const group = $('#navPractice'); if (group && $('[aria-current]', group)) group.open = true;
  $$('.bottom-nav [data-nav]').forEach((a) => { if (a.dataset.nav === (bottomId || navId)) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
}
function refreshChrome() {
  $('#navTracks').innerHTML = TRACKS.map((t) => {
    const s = trackStats(t);
    return `<a class="nav-item nav-track" href="#/track/${t.id}" data-nav="track-${t.id}"><span class="nav-dot" style="--c:${t.color}" aria-hidden="true"></span><span>${t.level}</span><span class="nav-track__meta">${s.done}/${s.lessons}</span><span class="nav-track__bar" aria-hidden="true"><span style="--p:${s.p};--c:${t.color}"></span></span></a>`;
  }).join('');
  const navId = document.body.dataset.nav;
  if (navId) $$('#navTracks [data-nav]').forEach((a) => { if (a.dataset.nav === navId) a.setAttribute('aria-current', 'page'); });
  updateMissedBadge();
  const p = overallProgress();
  $('#topProgress').innerHTML = `${ring(p, { size: 30, stroke: 4, label: ' ', fs: 1 })}<span>${pct(p)}%</span>`;
  $('#topProgress').setAttribute('aria-label', `Overall progress ${pct(p)}% — open dashboard`);
  const name = state.name || 'Coordinator';
  const initials = name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  const ctx = currentContext();
  $('#sidebarFoot').innerHTML = `<button type="button" class="side-profile" id="profileBtn" style="width:100%;text-align:left" aria-label="Edit your name"><span class="side-avatar">${esc(initials)}</span><span class="grow"><strong>${esc(name)}</strong><small>${ctx.t.level} track · ${pct(p)}% overall</small></span>${icon('chev-r', 'icon--sm')}</button>`;
  $('#sidebarFoot').insertAdjacentHTML('beforeend', cloudAccountHTML());
  $('#profileBtn').addEventListener('click', editName);
}

/* ---------- Sidebar (mobile drawer) ---------- */
function openSidebar() {
  const sb = $('#sidebar'); sb.classList.add('is-open'); $('#scrim').hidden = false;
  $('#menuBtn').setAttribute('aria-expanded', 'true');
  setTimeout(() => { const a = $('#sidebarClose'); a && a.focus(); }, 50);
}
function closeSidebar() {
  const sb = $('#sidebar'); if (!sb.classList.contains('is-open')) return;
  sb.classList.remove('is-open'); $('#scrim').hidden = true; $('#menuBtn').setAttribute('aria-expanded', 'false');
}

/* ---------- Theme ---------- */
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  $('#themeBtn').innerHTML = icon(t === 'dark' ? 'sun' : 'moon');
  $('#themeBtn').setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  const meta = $('meta[name="theme-color"]'); if (meta) meta.setAttribute('content', t === 'dark' ? '#060e19' : '#0b1a2e');
}

/* ---------- Name editor ---------- */
function editName() {
  openModal({
    title: 'Your profile',
    body: `<div class="field"><label for="nameInput">Name shown on your dashboard and certificates</label><input class="input" id="nameInput" maxlength="60" value="${esc(state.name)}" placeholder="e.g., Jordan Taylor" autofocus><span class="hint">${CLOUD.user ? 'Synced with your account.' : 'Stored in this browser.'}</span></div>`,
    foot: `<button class="btn btn--ghost" data-close>Cancel</button><button class="btn btn--primary" id="nameSave">Save</button>`,
    onOpen: (m, close) => {
      const saveName = () => { state.name = $('#nameInput', m).value.trim().slice(0, 60); touch('name'); save(); refreshChrome(); close(); toast({ kind: 'success', title: 'Profile updated' }); if ((location.hash || '').match(/dashboard|^$|^#\/?$/)) router(); };
      $('#nameSave', m).addEventListener('click', saveName);
      $('#nameInput', m).addEventListener('keydown', (e) => { if (e.key === 'Enter') saveName(); });
    }
  });
}

/* ===========================================================================
   VIEWS
   =========================================================================== */

/* ---------- Dashboard ---------- */
function viewDashboard() {
  const p = overallProgress();
  const ctx = currentContext();
  const rec = recommended();
  const done = completedCount();
  const avg = avgQuiz();
  const certs = TRACKS.filter(finalPassed).length;
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const lastX = state.last && LESSON_MAP.get(state.last);
  const quizRows = [];
  TRACKS.forEach((t) => t.modules.forEach((m) => { const q = state.quizzes[quizKey(t, m)]; if (q) quizRows.push({ label: `${t.level} · M${m.id.slice(1)} ${m.title}`, s: q.best, href: `#/quiz/${t.id}/${m.id}`, at: q.at || 0 }); }));
  TRACKS.forEach((t) => { const f = state.finals[t.id]; if (f) quizRows.push({ label: t.final.title, s: f.score, href: `#/final/${t.id}`, at: f.at || 0, final: true }); });
  quizRows.sort((a, b) => b.at - a.at);
  const earned = ACHIEVEMENTS.filter((a) => state.achievements[a.id]);
  const nextAch = ACHIEVEMENTS.filter((a) => !state.achievements[a.id]).slice(0, 4 - Math.min(earned.length, 2));
  const achShow = [...earned.slice(-2), ...nextAch].slice(0, 4);

  const html = `<div class="page">
    <section class="hero" aria-labelledby="dashTitle">
      <div class="dash-hero">
        <div>
          <span class="eyebrow">${icon('grad', 'icon--sm')} ${greet}${state.name ? ', ' + esc(state.name.split(' ')[0]) : ''}</span>
          <h1 id="dashTitle">${done ? 'Keep your fleet — and your skills — moving.' : 'Welcome to the Maintenance Coordinator Academy.'}</h1>
          <p>${done ? `You've completed ${done} of ${LESSONS.length} lessons. Every lesson brings you closer to operating like a professional coordinator.` : 'A structured path from zero knowledge to expert fleet maintenance coordination — built around real calls, real decisions and real consequences.'}</p>
          ${rec ? `<div class="dash-hero__now"><small>${lastX && !isDone(lastX.key) ? 'Continue where you left off' : 'Up next'}</small><strong>${esc(lastX && !isDone(lastX.key) ? lastX.l.title : rec.title)}</strong><span>${esc(lastX && !isDone(lastX.key) ? `${lastX.t.level} · Module ${lastX.m.id.slice(1)}: ${lastX.m.title}` : rec.sub)}</span></div>` : ''}
          <div class="dash-hero__mbar"><div class="row row--between small"><span>Overall progress</span><strong class="num" style="color:#fff">${pct(p)}%</strong></div>${progressBar(p, { label: 'Overall progress' })}</div>
          <div class="dash-hero__cta">
            ${rec ? `<a class="btn btn--primary btn--lg" href="${lastX && !isDone(lastX.key) ? lessonHref(lastX) : rec.href}">${icon('play')} ${done ? 'Continue learning' : 'Start the Beginner track'}</a>` : `<a class="btn btn--primary btn--lg" href="#/achievements">${icon('award')} View certificates</a>`}
            <a class="btn btn--ghost btn--lg" href="#/curriculum">Browse curriculum ${icon('arrow-r', 'icon--nudge')}</a>
          </div>
        </div>
        <div class="dash-hero__ring">${ring(p, { size: 168, stroke: 12, cls: 'ring--dark', label: pct(p) + '%', sub: 'Overall', color: '#4f8cc9', fs: 34 })}</div>
      </div>
    </section>

    <div class="grid grid--4 mt-6 stagger">
      ${statCard('book', done, `/ ${LESSONS.length}`, 'Lessons completed')}
      ${statCard('target', avg == null ? '—' : pct(avg), avg == null ? '' : '%', 'Average quiz score')}
      ${statCard('award', certs, `/ ${TRACKS.length}`, 'Certificates earned')}
      ${statCard('activity', streak(), streak() === 1 ? 'day' : 'days', 'Study streak')}
    </div>

    <div class="dash-cols mt-6">
      <div class="stack">
        <div id="dashAssigned" class="dash-assigned-slot"></div>
        <section class="card" aria-labelledby="tpTitle">
          <div class="card__head"><h2 id="tpTitle">Curriculum progress</h2><a class="btn btn--ghost btn--sm" href="#/curriculum">All tracks ${icon('chev-r', 'icon--sm')}</a></div>
          <div class="card__body track-progress">
            ${TRACKS.map((t) => { const s = trackStats(t); return `<a class="tp-row" href="#/track/${t.id}" style="color:inherit;text-decoration:none">
              <span class="track-icon" style="--c:${t.color}">${icon(t.icon)}</span>
              <span><span class="tp-row__name"><strong>${t.level}</strong><span class="muted">${s.done}/${s.lessons} lessons${s.final ? ' · Certified' : ''}</span></span>${progressBar(s.p, { color: t.color, label: `${t.level} progress` })}</span>
              <span class="tp-row__pct">${pct(s.p)}%</span></a>`; }).join('')}
          </div>
        </section>
        ${rec ? `<a class="card card--hover rec-card" href="${rec.href}">
          <span class="rec-card__icon">${icon(rec.icon, 'icon--lg')}</span>
          <span class="grow"><span class="eyebrow">Recommended next</span><strong style="display:block;font-size:var(--fs-md);margin-top:2px">${esc(rec.title)}</strong><span class="small muted">${esc(rec.sub)}</span></span>
          ${icon('arrow-r', 'icon--go')}</a>` : ''}
        <section class="card" aria-labelledby="nowTitle">
          <div class="card__head"><h2 id="nowTitle">Where you are</h2></div>
          <div class="card__body">
            <dl class="grid grid--3" style="gap:var(--sp-4)">
              <div><dt class="eyebrow">Curriculum</dt><dd class="mt-2"><strong>${esc(ctx.t.title)}</strong></dd></div>
              <div><dt class="eyebrow">Module</dt><dd class="mt-2"><strong>${ctx.m.id.slice(1)}. ${esc(ctx.m.title)}</strong></dd></div>
              <div><dt class="eyebrow">Lesson</dt><dd class="mt-2"><a href="${lessonHref(ctx)}"><strong>${esc(ctx.l.title)}</strong></a></dd></div>
            </dl>
          </div>
        </section>
      </div>
      <div class="stack">
        <section class="card" aria-labelledby="qsTitle">
          <div class="card__head"><h2 id="qsTitle">Quiz &amp; assessment scores</h2></div>
          <div class="card__body">${quizRows.length ? `<div class="score-list">${quizRows.slice(0, 6).map((r) => `<a class="score-list__row" href="${r.href}" style="text-decoration:none">${icon(r.final ? 'award' : 'target', 'icon--sm')}<span class="grow">${esc(r.label)}</span>${scorePill(r.s)}</a>`).join('')}</div>`
            : `<div class="center" style="padding:var(--sp-4) 0"><p class="small muted">No quiz scores yet. Complete a module and take its quiz to see results here.</p></div>`}</div>
        </section>
        <section class="card" aria-labelledby="achTitle">
          <div class="card__head"><h2 id="achTitle">Achievements</h2><a class="btn btn--ghost btn--sm" href="#/achievements">${earned.length}/${ACHIEVEMENTS.length} ${icon('chev-r', 'icon--sm')}</a></div>
          <div class="card__body" style="display:grid;gap:var(--sp-3)">${achShow.map(achHTML).join('')}</div>
        </section>
      </div>
    </div>
    <p class="scope-note">${icon('info', 'icon--sm')}<span>Educational training focused on U.S. trucking practice. Not legal or regulatory advice — company procedures and current official rules come first. <a href="#/reference">Sources &amp; scope</a></span></p>
  </div>`;
  return { html, title: 'Dashboard', nav: 'dashboard', after: (v) => dashAssigned($('#dashAssigned', v)) };
}
function statCard(ic, v, unit, label) {
  return `<div class="card stat"><div class="stat__top"><span class="stat__icon">${icon(ic)}</span></div><div class="stat__value">${v}${unit ? ` <small>${unit}</small>` : ''}</div><div class="stat__label">${label}</div></div>`;
}
function achHTML(a) {
  const got = state.achievements[a.id];
  return `<div class="ach ${got ? 'is-earned' : ''}"><span class="ach__icon">${icon(got ? a.icon : 'lock')}</span><div><h3>${esc(a.title)}</h3><p>${esc(a.desc)}${got ? ` · ${new Date(got).toLocaleDateString()}` : ''}</p></div></div>`;
}

/* ---------- Curriculum ---------- */
function viewCurriculum() {
  const html = `<div class="page">
    ${pageHead({ eyebrow: `${icon('layers', 'icon--sm')} Curriculum`, title: 'Your learning path', text: 'Three progressive maintenance tracks take you from zero knowledge to expert fleet maintenance coordination, and an optional Operations track covers the freight side: brokers, dispatch, Hours of Service and invoicing. Start with the guided path below. It shows what to learn first, what to learn together, and what can wait.' })}
    ${learningGuideHTML()}
    <div class="section-head"><div><span class="eyebrow">All tracks</span><h2>Beginner, Advanced, Expert and Operations</h2></div></div>
    <div class="grid grid--3 stagger">${TRACKS.map(trackCard).join('')}</div>
    <div class="section-head"><div><span class="eyebrow">How it works</span><h2>Built around the real job</h2></div></div>
    <div class="info-grid stagger">
      ${[['book', 'Structured lessons', 'Objectives, explanation, real-world examples, visuals, practical examples and key takeaways.'], ['target', 'Knowledge checks', 'Multiple choice, true/false, scenario and what-would-you-do questions with explanations.'], ['message', 'Scenario practice', 'Respond to realistic driver, dispatch, shop and management messages.'], ['clipboard', 'Practical exercises', 'Extract case data, prioritize, classify urgency and review estimates.'], ['award', 'Final assessments', 'A realistic call, a multi-case operations board and a full-day fleet simulation.']].map(([i, t, d]) => `<div class="info-tile"><div class="info-tile__icon">${icon(i)}</div><h3>${t}</h3><p>${d}</p></div>`).join('')}
    </div>
  </div>`;
  return { html, title: 'Curriculum', nav: 'curriculum', crumbs: [['Curriculum']] };
}
function trackCard(t) {
  const s = trackStats(t);
  const mins = t.modules.reduce((a, m) => a + m.lessons.reduce((b, l) => b + l.minutes, 0), 0) + t.final.minutes;
  const started = s.done > 0;
  return `<article class="card card--hover track-card" style="--c:${t.color}">
    <div class="track-card__top">
      <div class="track-card__level"><span class="track-icon">${icon(t.icon)}</span><span class="badge badge--track" style="--c:${t.color}">${t.level}</span></div>
      <h2>${esc(t.title)}</h2><p>${esc(t.summary)}</p>
      <div class="track-card__meta"><span>${icon('layers')} ${t.modules.length} modules</span><span>${icon('book')} ${s.lessons} lessons</span><span>${icon('clock')} ~${Math.round(mins / 60)} h</span></div>
    </div>
    <div class="track-card__bottom">
      <div class="track-card__progress"><span class="muted">${s.final ? 'Certified' : started ? 'In progress' : 'Not started'}</span><strong class="num">${pct(s.p)}%</strong></div>
      ${progressBar(s.p, { color: t.color, label: `${t.level} progress` })}
      <a class="btn ${started && !s.final ? 'btn--primary' : ''} btn--block mt-4" href="#/track/${t.id}">${s.final ? 'Review track' : started ? 'Continue track' : 'View track'} ${icon('arrow-r', 'icon--nudge')}</a>
    </div>
  </article>`;
}

/* ---------- Track ---------- */
function viewTrack(tid) {
  const t = TRACK_BY_ID[tid]; if (!t) return viewNotFound();
  const s = trackStats(t);
  const rec = recommended();
  const openMod = (rec && rec.t === t && rec.m) ? rec.m.id : t.modules[0].id;
  const fin = state.finals[t.id];
  const html = `<div class="page page--narrow">
    <header class="page-head">
      <div>
        <span class="badge badge--track" style="--c:${t.color}">${icon(t.icon)} ${t.level} track</span>
        <h1>${esc(t.title)}</h1>
        <p>${esc(t.summary)}</p>
      </div>
      ${ring(s.p, { size: 112, stroke: 9, color: t.color, sub: 'Complete', fs: 24 })}
    </header>
    <section class="card card--pad mb-6"><span class="eyebrow">What you'll be able to do</span>
      <ul class="grid grid--2 mt-3" style="list-style:none;padding:0;gap:10px">${t.outcomes.map((o) => `<li class="row" style="align-items:flex-start;gap:10px">${icon('check-circle', 'icon--sm')}<span class="small" style="color:var(--text-2)">${esc(o)}</span></li>`).join('')}</ul>
    </section>
    <div class="module-list stagger">${t.modules.map((m, i) => moduleHTML(t, m, i, m.id === openMod)).join('')}</div>
    <div class="final-card mt-6 ${fin && fin.passed ? 'is-passed' : ''}">
      <span class="final-card__icon">${icon('award')}</span>
      <div class="grow"><span class="eyebrow">Final ${t.final.kind === 'sim' ? 'simulation' : 'assessment'} · ~${t.final.minutes} min</span><h2 style="margin-top:4px;font-size:var(--fs-lg)">${esc(t.final.title)}</h2>
        <p class="small mt-2">${fin ? `Best score ${pct(fin.score)}% — ${fin.passed ? 'passed. Certificate earned.' : 'not yet passed (75% required).'}` : `Complete the modules, then prove it. ${s.done < s.lessons ? `${s.lessons - s.done} lessons remaining — you can attempt it anytime.` : 'You are ready.'}`}</p></div>
      <a class="btn ${fin && fin.passed ? '' : 'btn--primary'}" href="#/final/${t.id}">${fin ? (fin.passed ? 'Retake' : 'Try again') : 'Start'} ${icon('arrow-r', 'icon--nudge')}</a>
    </div>
  </div>`;
  return {
    html, title: `${t.level} track`, nav: `track-${t.id}`, bottom: 'curriculum', crumbs: [['Curriculum', '#/curriculum'], [t.level]],
    after: (v) => {
      $$('.module__head', v).forEach((b) => b.addEventListener('click', () => {
        const mod = b.closest('.module'); const open = !mod.classList.contains('is-open');
        mod.classList.toggle('is-open', open); b.setAttribute('aria-expanded', open);
      }));
    }
  };
}
function moduleHTML(t, m, i, open) {
  const s = moduleStats(t, m);
  const q = state.quizzes[quizKey(t, m)];
  const cur = state.last;
  const pid = nextId('mod');
  return `<div class="module ${open ? 'is-open' : ''} ${s.complete ? 'is-done' : ''}">
    <button type="button" class="module__head" aria-expanded="${open}" aria-controls="${pid}">
      <span class="module__num">${s.complete ? icon('check') : String(i + 1).padStart(2, '0')}</span>
      <span class="grow"><span class="module__title">${esc(m.title)}</span><br><span class="module__sub">${esc(m.summary)}</span>${moduleGuideHTML(t, m)}</span>
      <span class="module__right"><span class="module__mini">${progressBar(s.done / s.total, { cls: 'progress--sm', color: t.color, label: `${m.title} progress` })}</span><span class="small muted num">${s.done}/${s.total}</span>${icon('chev-d')}</span>
    </button>
    <div class="module__body" id="${pid}"><div><div class="module__lessons">
      ${m.lessons.map((l) => { const key = `${t.id}.${m.id}.${l.id}`; const x = LESSON_MAP.get(key); return `<a class="lesson-row ${isDone(key) ? 'is-done' : ''} ${cur === key && !isDone(key) ? 'is-current' : ''}" href="${lessonHref(x)}">
        <span class="lesson-row__state">${icon('check')}</span><span class="lesson-row__title">${esc(l.title)}</span>
        <span class="lesson-row__meta">${state.bookmarks.includes(key) ? icon('bookmark', 'icon--sm') : ''}<span class="hide-sm">${icon('clock', 'icon--sm')}</span> ${l.minutes} min</span></a>`; }).join('')}
      <a class="lesson-row lesson-row--quiz ${q && q.best >= 0.8 ? 'is-done' : ''}" href="#/quiz/${t.id}/${m.id}"><span class="lesson-row__state">${icon(q && q.best >= 0.8 ? 'check' : 'target')}</span><span class="lesson-row__title">Module quiz</span><span class="lesson-row__meta">${q ? scorePill(q.best) : `${m.lessons.reduce((a, l) => a + (l.check || []).length, 0)} questions`}</span></a>
      <a class="lesson-row lesson-row--sheet" href="#/cheatsheet/${t.id}/${m.id}"><span class="lesson-row__state">${icon('file')}</span><span class="lesson-row__title">Cheat sheet</span><span class="lesson-row__meta">Printable summary</span></a>
    </div></div></div>
  </div>`;
}

/* ---------- Lesson ---------- */
function viewLesson(tid, mid, lid) {
  const key = `${tid}.${mid}.${lid}`;
  const x = LESSON_MAP.get(key); if (!x) return viewNotFound();
  const { t, m, l } = x;
  const idx = LESSONS.indexOf(x);
  const prev = LESSONS[idx - 1]; const next = LESSONS[idx + 1];
  const nextIsQuiz = !next || next.m !== m;
  const done = isDone(key);
  const bm = state.bookmarks.includes(key);
  state.last = key; markActiveDay(); save();
  const pr = l.practical || {};
  const exBlock = pr.exercise ? exerciseHTML(pr.exercise, { key: 'ex:' + key, title: pr.title }) : '';
  const hasNotes = !!(l.tips || l.mistakes);
  const deepHTML = l.deep ? `<section class="lesson-section" id="sec-deep"><h2><span class="sec-ico">${icon('layers')}</span>Deep dive</h2><p class="muted mb-4">Go further — optional in-depth material for this lesson.</p>${renderBlock({ tabs: l.deep.map((d) => ({ label: d.title, body: d.blocks })) })}</section>` : '';
  const sections = [
    ['objectives', 'Objectives'], ['explanation', 'Explanation'], ...(l.deep ? [['deep', 'Deep dive']] : []), ['example', 'Real-world example'], ['practical', 'Practical example'], ...(hasNotes ? [['notes', 'Field notes']] : []), ['check', 'Knowledge check'], ['takeaways', 'Key takeaways']
  ];
  const notesHTML = hasNotes ? `<section class="lesson-section" id="sec-notes"><h2><span class="sec-ico">${icon('bulb')}</span>Field notes</h2><div class="compare">${l.tips ? `<div class="compare__col compare__col--yes"><h3>${icon('bulb')} Pro tips</h3><ul>${l.tips.map((i) => `<li>${icon('check')}<span>${inline(i)}</span></li>`).join('')}</ul></div>` : ''}${l.mistakes ? `<div class="compare__col compare__col--no"><h3>${icon('alert')} Common mistakes</h3><ul>${l.mistakes.map((i) => `<li>${icon('x')}<span>${inline(i)}</span></li>`).join('')}</ul></div>` : ''}</div></section>` : '';
  const nextHref = nextIsQuiz ? `#/quiz/${t.id}/${m.id}` : lessonHref(next);
  const nextLabel = nextIsQuiz ? 'Module quiz' : 'Next lesson';
  const html = `<div class="lesson-layout">
    <article class="lesson-main" aria-labelledby="lessonTitle">
      <header class="lesson-head">
        <div class="lesson-head__top">
          <span class="badge badge--track" style="--c:${t.color}">${t.level}</span>
          <span class="badge badge--outline">Module ${m.id.slice(1)} · ${esc(m.title)}</span>
          ${done ? `<span class="badge badge--success">${icon('check')} Completed</span>` : ''}
        </div>
        <h1 id="lessonTitle">${esc(l.title)}</h1>
        <div class="lesson-head__meta">
          <span>${icon('clock')} ${l.minutes} min</span><span>${icon('book')} Lesson ${x.li + 1} of ${m.lessons.length}</span>
          <div class="lesson-head__actions">
            <button type="button" class="btn-icon" data-bookmark aria-pressed="${bm}" aria-label="${bm ? 'Remove bookmark' : 'Bookmark this lesson'}" data-tip="${bm ? 'Bookmarked' : 'Bookmark'}" data-tip-pos="bottom">${icon('bookmark')}</button>
            <button type="button" class="btn btn--sm ${done ? 'is-active' : ''}" data-complete>${icon(done ? 'check-circle' : 'check')} ${done ? 'Completed' : 'Mark complete'}</button>
          </div>
        </div>
      </header>

      <section class="lesson-section" id="sec-objectives" style="margin-top:0"><div class="objectives"><span class="eyebrow">${icon('target', 'icon--sm')} Learning objectives</span>
        <ul>${l.objectives.map((o) => `<li>${icon('check-circle')}<span>${esc(o)}</span></li>`).join('')}</ul></div></section>

      <section class="lesson-section" id="sec-explanation"><h2><span class="sec-ico">${icon('book')}</span>Explanation</h2><div class="prose">${renderBlocks(l.body)}</div>${libLessonStrip(key)}</section>

      ${deepHTML}
      <section class="lesson-section" id="sec-example"><h2><span class="sec-ico">${icon('truck')}</span>Real-world example</h2>
        <div class="example-card"><span class="example-card__tag">${icon('pin')} In the field</span><h3>${esc(l.example.title)}</h3><p>${inline(l.example.text)}</p></div></section>

      <section class="lesson-section" id="sec-practical"><h2><span class="sec-ico">${icon('clipboard')}</span>Practical example${pr.title && !pr.exercise ? `: ${esc(pr.title)}` : ''}</h2>
        <div class="prose">${pr.blocks ? renderBlocks(pr.blocks) : ''}</div>${exBlock}</section>

      ${notesHTML}
      <section class="lesson-section" id="sec-check"><h2><span class="sec-ico">${icon('target')}</span>Knowledge check</h2>${lessonCheckHTML(x)}</section>

      <section class="lesson-section" id="sec-takeaways"><div class="takeaways"><h2>Key takeaways</h2><ul>${l.takeaways.map((k, i) => `<li><span class="num-badge">${i + 1}</span><span>${inline(k)}</span></li>`).join('')}</ul></div></section>

      <div id="completeSlot" class="mt-6"></div>
      <nav class="lesson-foot" aria-label="Lesson navigation">
        ${prev ? `<a class="btn" href="${lessonHref(prev)}">${icon('arrow-l', 'icon--nudge-l')} Previous</a>` : ''}
        <a class="btn btn--ghost" href="#/track/${t.id}">${icon('layers')} Curriculum</a>
        <span class="spacer"></span>
        <button type="button" class="btn btn--primary btn--lg" data-continue>${done ? nextLabel : 'Complete & continue'} ${icon('arrow-r', 'icon--nudge')}</button>
      </nav>
      ${reportHTML(`${t.level} · M${m.id.slice(1)} · ${l.title}`)}
    </article>

    <aside class="lesson-rail" aria-label="Lesson navigation">
      <div class="rail-card"><h2>On this page</h2><nav class="toc">${sections.map(([id, label]) => `<a href="#sec-${id}" data-toc="${id}">${label}</a>`).join('')}</nav></div>
      <div class="rail-card"><h2>Module ${m.id.slice(1)} · ${esc(m.title)}</h2><div class="rail-lessons">
        ${m.lessons.map((ll) => { const k = `${t.id}.${m.id}.${ll.id}`; const xx = LESSON_MAP.get(k); return `<a href="${lessonHref(xx)}" class="${isDone(k) ? 'is-done' : ''}" ${k === key ? 'aria-current="page"' : ''}><span class="dot">${isDone(k) ? icon('check') : ''}</span><span>${esc(ll.title)}</span></a>`; }).join('')}
        <a href="#/quiz/${t.id}/${m.id}" class="${quizPassed(t, m) ? 'is-done' : ''}"><span class="dot">${quizPassed(t, m) ? icon('check') : ''}</span><span>Module quiz</span></a>
      </div></div>
      <div class="rail-card">${progressBar(trackStats(t).p, { color: t.color, label: 'Track progress' })}<p class="small muted mt-2">${t.level} track · ${pct(trackStats(t).p)}% complete</p></div>
    </aside>

    <div class="mobile-lesson-bar" role="toolbar" aria-label="Lesson actions">
      ${prev ? `<a class="btn" href="${lessonHref(prev)}" aria-label="Previous lesson">${icon('arrow-l')}</a>` : `<a class="btn" href="#/track/${t.id}" aria-label="Back to curriculum">${icon('layers')}</a>`}
      <button type="button" class="btn-icon" data-bookmark aria-pressed="${bm}" aria-label="Bookmark">${icon('bookmark')}</button>
      <button type="button" class="btn btn--primary" data-continue>${done ? nextLabel : 'Complete & continue'} ${icon('arrow-r')}</button>
    </div>
  </div>`;

  return {
    html, title: l.title, nav: `track-${t.id}`, bottom: 'curriculum',
    crumbs: [['Curriculum', '#/curriculum'], [t.level, `#/track/${t.id}`], [`M${m.id.slice(1)}`, `#/track/${t.id}`], [l.title]],
    after: (v) => {
      mountLessonCheck(v, x);
      $$('[data-toc]', v).forEach((a) => a.addEventListener('click', (e) => {
        e.preventDefault();
        const sec = document.getElementById('sec-' + a.dataset.toc);
        sec.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
      }));
      $$('[data-bookmark]', v).forEach((b) => b.addEventListener('click', () => {
        const on = !state.bookmarks.includes(key);
        state.bookmarks = on ? [...state.bookmarks, key] : state.bookmarks.filter((k) => k !== key); touch('bm:' + key); save();
        $$('[data-bookmark]', v).forEach((bb) => { bb.setAttribute('aria-pressed', on); bb.setAttribute('aria-label', on ? 'Remove bookmark' : 'Bookmark this lesson'); if (bb.dataset.tip) bb.dataset.tip = on ? 'Bookmarked' : 'Bookmark'; });
        toast({ kind: on ? 'success' : 'info', title: on ? 'Lesson bookmarked' : 'Bookmark removed', icon: 'bookmark', timeout: 2500 });
      }));
      const setComplete = (on) => {
        if (on) state.completed[key] = Date.now(); else delete state.completed[key];
        touch('done:' + key); save();
        const b = $('[data-complete]', v); b.classList.toggle('is-active', on); b.innerHTML = `${icon(on ? 'check-circle' : 'check')} ${on ? 'Completed' : 'Mark complete'}`;
        $$('[data-continue]', v).forEach((c) => { c.innerHTML = `${on ? nextLabel : 'Complete & continue'} ${icon('arrow-r', 'icon--nudge')}`; });
        if (on) {
          $('#completeSlot', v).innerHTML = `<div class="complete-banner" role="status">${icon('check-circle')} Lesson complete${moduleStats(t, m).complete ? ` — Module ${m.id.slice(1)} finished! Take the module quiz to lock it in.` : '.'}</div>`;
          if (moduleStats(t, m).complete) toast({ kind: 'success', title: `Module ${m.id.slice(1)} complete`, text: m.title });
        } else $('#completeSlot', v).innerHTML = '';
        checkAchievements(); refreshChrome();
      };
      $('[data-complete]', v).addEventListener('click', () => setComplete(!isDone(key)));
      $$('[data-continue]', v).forEach((c) => c.addEventListener('click', () => {
        if (!isDone(key)) { state.completed[key] = Date.now(); touch('done:' + key); save(); checkAchievements(); toast({ kind: 'success', title: 'Lesson complete', text: l.title, timeout: 2500 }); }
        go(nextHref);
      }));
      // Scroll spy for "On this page"
      if ('IntersectionObserver' in window) {
        const links = $$('[data-toc]', v);
        const io = new IntersectionObserver((entries) => {
          entries.forEach((en) => { if (en.isIntersecting) { const id = en.target.id.replace('sec-', ''); links.forEach((a) => a.classList.toggle('is-active', a.dataset.toc === id)); } });
        }, { rootMargin: '-30% 0px -60% 0px' });
        $$('.lesson-section', v).forEach((s) => io.observe(s));
        viewCleanup = () => io.disconnect();
      }
    }
  };
}

/* ---------- Module quiz ---------- */
function viewQuiz(tid, mid) {
  const t = TRACK_BY_ID[tid]; const m = t && t.modules.find((mm) => mm.id === mid);
  if (!m) return viewNotFound();
  const pool = [];
  m.lessons.forEach((l) => (l.check || []).forEach((q) => pool.push(q)));
  const html = `<div class="page page--narrow">
    ${pageHead({ eyebrow: `<span class="badge badge--track" style="--c:${t.color}">${t.level}</span> Module ${m.id.slice(1)} quiz`, title: esc(m.title), text: `${pool.length} questions drawn from this module's lessons, in random order. Score 80% or higher to pass the module.` })}
    <div id="quizRoot"></div>
  </div>`;
  return {
    html, title: `Quiz · ${m.title}`, nav: `track-${t.id}`, bottom: 'curriculum', crumbs: [['Curriculum', '#/curriculum'], [t.level, `#/track/${t.id}`], ['Module quiz']],
    after: (v) => runQuiz($('#quizRoot', v), t, m, pool)
  };
}
function runQuiz(root, t, m, pool) {
  const qs = shuffle(pool).map((q) => ({ q, order: shuffle(qOptions(q).map((_, i) => i)) }));
  let i = 0; const res = [];
  const draw = () => {
    if (i >= qs.length) return result();
    const { q, order } = qs[i];
    root.innerHTML = `<div class="check anim-slide-up">
      <div class="check__head"><div><strong>Question ${i + 1} of ${qs.length}</strong><div class="small muted">${Q_LABEL[q.t]}</div></div>
      <div class="check__progress" aria-hidden="true">${qs.map((_, k) => `<span class="${k < i ? (res[k] ? 'is-correct' : 'is-wrong') : k === i ? 'is-current' : ''}"></span>`).join('')}</div></div>
      <div class="q">${questionHTML(q, `quiz-${i}`, order)}
        <div class="q__actions"><button class="btn btn--primary" data-q-check>Check answer</button></div><div data-q-fb aria-live="polite"></div></div></div>`;
    const qel = $('.q', root); const btn = $('[data-q-check]', qel);
    $('input', qel).focus({ preventScroll: true });
    btn.addEventListener('click', () => {
      const r = gradeQuestion(qel, q);
      if (!r) { $('[data-q-fb]', qel).innerHTML = '<p class="small muted mt-2">Select an answer first.</p>'; return; }
      res[i] = r.ok; $('[data-q-fb]', qel).innerHTML = r.html;
      btn.outerHTML = `<button class="btn btn--primary" data-q-next>${i + 1 < qs.length ? 'Next question' : 'See results'} ${icon('arrow-r', 'icon--nudge')}</button>`;
      const nb = $('[data-q-next]', qel); nb.focus(); nb.addEventListener('click', () => { i++; draw(); });
    });
  };
  const result = () => {
    const score = res.filter(Boolean).length / qs.length;
    const k = quizKey(t, m); const prev = state.quizzes[k] || { best: 0, attempts: 0 };
    state.quizzes[k] = { best: Math.max(prev.best, score), last: score, attempts: prev.attempts + 1, at: Date.now() };
    markActiveDay(); save(); checkAchievements(); refreshChrome();
    const passed = score >= 0.8;
    const nextMod = t.modules[t.modules.indexOf(m) + 1];
    root.innerHTML = `<div class="card result anim-scale-in">
      ${ring(score, { size: 150, stroke: 12, color: passed ? 'var(--success)' : 'var(--warning-strong)', sub: `${res.filter(Boolean).length}/${qs.length}`, fs: 30 })}
      <h2>${passed ? (score === 1 ? 'Perfect score' : 'Module passed') : 'Not quite there'}</h2>
      <p>${passed ? 'You\'ve demonstrated a solid grasp of this module.' : 'Review the lessons and try again — you need 80% to pass.'} Best score: ${pct(state.quizzes[k].best)}%.</p>
      <div class="result__actions">
        <button class="btn" data-retake>${icon('rotate')} Retake quiz</button>
        <a class="btn" href="#/track/${t.id}">${icon('layers')} Back to track</a>
        ${passed ? (nextMod ? `<a class="btn btn--primary" href="${lessonHref(LESSON_MAP.get(`${t.id}.${nextMod.id}.${nextMod.lessons[0].id}`))}">Next module ${icon('arrow-r', 'icon--nudge')}</a>` : `<a class="btn btn--primary" href="#/final/${t.id}">Final assessment ${icon('arrow-r', 'icon--nudge')}</a>`) : `<a class="btn btn--primary" href="${lessonHref(LESSON_MAP.get(`${t.id}.${m.id}.${m.lessons[0].id}`))}">Review lessons</a>`}
      </div></div>`;
    $('[data-retake]', root).addEventListener('click', () => runQuiz(root, t, m, pool));
    if (passed) toast({ kind: 'success', title: 'Module quiz passed', text: `${m.title} — ${pct(score)}%` });
  };
  draw();
}

/* ---------- Final assessments ---------- */
function viewFinal(tid) {
  const t = TRACK_BY_ID[tid]; if (!t) return viewNotFound();
  const html = `<div class="page"><div id="finalRoot"></div></div>`;
  return {
    html, title: t.final.title, nav: `track-${t.id}`, bottom: 'curriculum', crumbs: [['Curriculum', '#/curriculum'], [t.level, `#/track/${t.id}`], ['Final']],
    after: (v) => (t.final.kind === 'sim' ? runSim : runExam)($('#finalRoot', v), t)
  };
}
function finalIntro(root, t, intro, steps, onStart) {
  const prev = state.finals[t.id];
  root.innerHTML = `<div class="page--narrow" style="margin:0 auto">
    ${pageHead({ eyebrow: `<span class="badge badge--track" style="--c:${t.color}">${t.level}</span> Final ${t.final.kind === 'sim' ? 'simulation' : 'assessment'}`, title: esc(t.final.title), text: esc(intro) })}
    <div class="card card--pad">
      <div class="row row--between row--wrap"><h2 style="font-size:var(--fs-lg)">What you'll do</h2><span class="badge badge--outline">${icon('clock')} ~${t.final.minutes} min · Pass 75%</span></div>
      <ol class="timeline mt-4">${steps.map((s, i) => `<li class="tl-step is-seen" style="padding-bottom:6px"><span class="tl-step__num">${i + 1}</span><div style="padding:14px 0 0"><span class="tl-step__title">${esc(s)}</span></div></li>`).join('')}</ol>
      ${prev ? `<div class="feedback feedback--${prev.passed ? 'correct' : 'partial'}">${icon(prev.passed ? 'award' : 'info')}<div><strong>Previous best: ${pct(prev.score)}%</strong><p>${prev.passed ? 'Passed — your certificate is available.' : 'Not yet passed. Try again!'}</p></div></div>` : ''}
      <div class="row row--wrap mt-6"><button class="btn btn--primary btn--lg" data-start>${icon('play')} ${prev ? 'Start again' : 'Begin'}</button>${prev && prev.passed ? `<button class="btn btn--lg" data-cert>${icon('award')} View certificate</button>` : ''}</div>
    </div></div>`;
  $('[data-start]', root).addEventListener('click', onStart);
  const c = $('[data-cert]', root); if (c) c.addEventListener('click', () => showCertificate(t));
}
function saveFinal(t, score, passed, extra = {}) {
  const prev = state.finals[t.id];
  const best = prev && prev.score > score ? prev : { score, passed, at: Date.now(), ...extra };
  if (prev && prev.passed && !passed) best.passed = true;
  state.finals[t.id] = best; markActiveDay(); save(); checkAchievements(); refreshChrome();
}

/* Beginner + Advanced step exams */
function runExam(root, t) {
  const E = EXAMS[t.id];
  finalIntro(root, t, E.intro, E.steps.map((s) => s.title), () => {
    const st = { i: 0, scores: [], file: E.caseFile.map((r) => r.slice()), fresh: [] };
    const fileHTML = () => st.file.map(([k, v]) => `<dt>${esc(k)}</dt><dd class="${st.fresh.includes(k) ? 'is-new' : ''}">${esc(v)}</dd>`).join('');
    const drawStep = () => {
      const s = E.steps[st.i];
      root.innerHTML = `<div class="exam-shell">
        <div>
          <div class="stepper" aria-label="Assessment progress">${E.steps.map((x, k) => `<div class="stepper__item ${k < st.i ? 'is-done' : k === st.i ? 'is-current' : ''}"><div class="stepper__bar"><span></span></div><div class="stepper__label">${k + 1}. ${esc(x.label)}</div></div>`).join('')}</div>
          <div class="card card--pad anim-slide-up">
            <span class="eyebrow">Step ${st.i + 1} of ${E.steps.length}</span>
            <h2 style="margin:6px 0 var(--sp-4)">${esc(s.title)}</h2>
            <div class="prose mb-4">${renderBlocks(s.blocks || [])}</div>
            <div id="stepEx"></div>
            <div class="row mt-4" id="stepNext"></div>
          </div>
        </div>
        <aside class="exam-side" aria-label="Case file"><div class="case-file"><div class="case-file__head">${icon('file')} Case file</div>
          <dl aria-live="polite">${fileHTML()}</dl></div>
          <p class="small muted mt-3">${icon('info', 'icon--sm')} Each step can be answered once. Read carefully.</p></aside>
      </div>`;
      const exWrap = $('#stepEx', root);
      exWrap.innerHTML = exerciseHTML(s.exercise, { noRetry: true, onDone: (score) => {
        st.scores[st.i] = score;
        (s.reveal || []).forEach(([k, v]) => { const f = st.file.find((r) => r[0] === k); if (f) f[1] = v; else st.file.push([k, v]); st.fresh.push(k); });
        $('.case-file dl', root).innerHTML = fileHTML();
        st.fresh = [];
        const last = st.i === E.steps.length - 1;
        $('#stepNext', root).innerHTML = `<button class="btn btn--primary" data-next>${last ? 'Finish assessment' : 'Continue'} ${icon('arrow-r', 'icon--nudge')}</button>`;
        const nb = $('[data-next]', root); nb.focus();
        nb.addEventListener('click', () => { st.i++; if (st.i < E.steps.length) { drawStep(); window.scrollTo({ top: 0 }); } else finish(); });
      } });
      mountExercises(exWrap);
    };
    const finish = () => {
      const score = st.scores.reduce((a, b) => a + b, 0) / E.steps.length;
      const passed = score >= E.passing;
      saveFinal(t, score, passed);
      root.innerHTML = `<div class="page--narrow" style="margin:0 auto"><div class="card result anim-scale-in">
        ${ring(score, { size: 160, stroke: 12, color: passed ? 'var(--success)' : 'var(--warning-strong)', sub: passed ? 'Passed' : 'Not passed', fs: 32 })}
        <h2>${passed ? 'Assessment passed' : 'Keep practicing'}</h2>
        <p>${passed ? `You've demonstrated the skills of the ${t.level} track. Your certificate is ready.` : `You need ${pct(E.passing)}% to pass. Review the weaker steps below and try again.`}</p>
        <div class="score-bars">${E.steps.map((s, k) => `<div class="score-bars__row"><span>${k + 1}. ${esc(s.label)}</span>${progressBar(st.scores[k], { color: st.scores[k] >= 0.8 ? 'var(--success)' : st.scores[k] >= 0.5 ? 'var(--warning-strong)' : 'var(--critical)', label: s.label })}<span class="num">${pct(st.scores[k])}%</span></div>`).join('')}</div>
        <div class="result__actions"><button class="btn" data-again>${icon('rotate')} Retake</button><a class="btn" href="#/track/${t.id}">Back to track</a>${passed ? `<button class="btn btn--primary" data-cert>${icon('award')} View certificate</button>` : ''}</div>
      </div></div>`;
      window.scrollTo({ top: 0 });
      $('[data-again]', root).addEventListener('click', () => runExam(root, t));
      const c = $('[data-cert]', root); if (c) c.addEventListener('click', () => showCertificate(t));
      if (passed) toast({ kind: 'award', title: 'Certificate earned', text: t.title });
    };
    drawStep();
  });
}

/* Expert simulation with metrics + consequences */
function runSim(root, t) {
  finalIntro(root, t, SIM.intro, SIM.stages.map((s) => `${s.clock} — ${s.title}`), () => {
    const st = { i: 0, m: { ...SIM.start }, pts: 0, log: [] };
    const avail = (m) => ((SIM.fleetHours - SIM.baseDown - m.downtime) / SIM.fleetHours) * 100;
    // fx = the effects of the last decision, shown as deltas (green = better, red = worse)
    const metricsHTML = (m, fx = {}) => {
      const score = (n) => (n ? [(n > 0 ? '+' : '') + n, n > 0] : null);
      const cards = [
        { label: 'Safety', val: m.safety, unit: '/100', d: score(fx.safety), bar: m.safety / 100, col: m.safety >= 85 ? 'var(--success)' : m.safety >= 70 ? 'var(--warning-strong)' : 'var(--critical)' },
        { label: 'Customer service', val: m.service, unit: '/100', d: score(fx.service), bar: m.service / 100, col: 'var(--primary)' },
        { label: 'Stakeholder trust', val: m.trust, unit: '/100', d: score(fx.trust), bar: m.trust / 100, col: 'var(--primary)' },
        { label: 'Fleet availability', val: avail(m).toFixed(1), unit: '%', d: fx.downtime ? ['−' + (fx.downtime / SIM.fleetHours * 100).toFixed(1), false] : null, bar: avail(m) / 100, col: 'var(--primary)' },
        { label: 'Cost today', val: fmtMoney(m.cost), unit: '', d: fx.cost ? ['+' + fmtMoney(fx.cost), false] : null },
        { label: 'Downtime added', val: m.downtime, unit: 'h', d: fx.downtime ? ['+' + fx.downtime + 'h', false] : null }
      ];
      return `<div class="sim-metrics">${cards.map((c) => `<div class="sim-metric"><div class="sim-metric__label">${c.label}</div><div class="sim-metric__value">${c.val}<small class="muted" style="font-size:12px"> ${c.unit}</small>${c.d ? `<span class="sim-metric__delta ${c.d[1] ? 'pos' : 'neg'}">${c.d[0]}</span>` : ''}</div>${c.bar != null ? progressBar(c.bar, { color: c.col, label: c.label }) : ''}</div>`).join('')}</div>`;
    };
    const draw = (picked) => {
      const s = SIM.stages[st.i];
      root.innerHTML = `<div class="row row--between row--wrap mb-4"><div><span class="eyebrow">Stage ${st.i + 1} of ${SIM.stages.length}</span><h2 style="margin-top:4px">${esc(s.title)}</h2></div><span class="sim-clock">${icon('clock')} ${s.clock}</span></div>
        <div id="metrics">${metricsHTML(st.m)}</div>
        <div class="grid grid--2" style="align-items:start;gap:var(--sp-6)">
          <section aria-labelledby="evTitle"><h3 id="evTitle" class="mb-4">Incoming</h3><ul class="event-feed">${s.events.map(([k, txt], n) => `<li class="event event--${k}" style="animation-delay:${n * 90}ms"><span class="event__icon">${icon(k === 'critical' ? 'alert' : k === 'warning' ? 'zap' : 'info')}</span><div><time>${s.clock}</time><p>${esc(txt)}</p></div></li>`).join('')}</ul></section>
          <section aria-labelledby="decTitle"><h3 id="decTitle" class="mb-4">${esc(s.prompt)}</h3><div class="resp" id="simResp">${s.options.map((o, k) => `<button type="button" data-k="${k}"><span class="opt__key" aria-hidden="true">${String.fromCharCode(65 + k)}</span><span>${esc(o.text)}</span></button>`).join('')}</div><div id="simOut" aria-live="polite"></div></section>
        </div>`;
      $$('#simResp button', root).forEach((b) => b.addEventListener('click', () => choose(+b.dataset.k)));
    };
    const choose = (k) => {
      const s = SIM.stages[st.i]; const o = s.options[k];
      Object.entries(o.fx || {}).forEach(([key, val]) => { st.m[key] = key === 'cost' || key === 'downtime' ? st.m[key] + val : clamp(st.m[key] + val, 0, 100); });
      st.pts += o.pts; st.log.push({ stage: s, o });
      $('#metrics', root).innerHTML = metricsHTML(st.m, o.fx || {});
      const grade = o.pts === 3 ? 'best' : o.pts >= 1 ? 'ok' : 'poor';
      $$('#simResp button', root).forEach((b) => { b.disabled = true; if (+b.dataset.k === k) b.classList.add('is-picked', grade); });
      $('#simResp', root).classList.add('is-answered');
      const last = st.i === SIM.stages.length - 1;
      $('#simOut', root).innerHTML = `<div class="consequence mt-4"><h4>${icon(grade === 'best' ? 'check-circle' : grade === 'ok' ? 'info' : 'alert')} Consequence</h4><p>${esc(o.result)}</p>
        <button class="btn btn--primary mt-4" data-next>${last ? 'See debrief' : 'Next stage'} ${icon('arrow-r', 'icon--nudge')}</button></div>`;
      const nb = $('[data-next]', root); nb.focus();
      nb.addEventListener('click', () => { st.i++; window.scrollTo({ top: 0 }); if (st.i < SIM.stages.length) draw(); else debrief(); });
    };
    const debrief = () => {
      const score = st.pts / (SIM.stages.length * 3);
      const safe = st.m.safety >= 70;
      const passed = score >= SIM.passing && safe;
      saveFinal(t, score, passed, { safety: st.m.safety });
      root.innerHTML = `<div class="page--narrow" style="margin:0 auto">
        <div class="card result anim-scale-in">
          ${ring(score, { size: 160, stroke: 12, color: passed ? 'var(--success)' : 'var(--warning-strong)', sub: passed ? 'Passed' : 'Not passed', fs: 32 })}
          <h2>${passed ? 'Expert-level coordination' : !safe ? 'Safety standard not met' : 'Not yet at expert level'}</h2>
          <p>${passed ? 'You protected safety, customers and cost while keeping stakeholders informed. Your certificate is ready.' : !safe ? 'Your safety score fell below 70. At the expert level, safety failures are disqualifying regardless of other results.' : 'Review the decisions below — look for where parallel planning, evidence-based approvals or clear communication would have changed the outcome.'}</p>
        </div>
        <h3 class="mt-8 mb-4">End-of-day metrics</h3>${metricsHTML(st.m)}
        <h3 class="mt-8 mb-4">Decision log</h3>
        <div class="table-wrap"><table class="table"><thead><tr><th>Time</th><th>Stage</th><th>Your decision</th><th>Quality</th></tr></thead><tbody>
          ${st.log.map(({ stage, o }) => `<tr><td class="mono">${stage.clock}</td><td><strong>${esc(stage.title)}</strong></td><td>${esc(o.text)}</td><td>${o.pts === 3 ? '<span class="badge badge--success">Strong</span>' : o.pts >= 1 ? '<span class="badge badge--warning">Partial</span>' : '<span class="badge badge--critical">Poor</span>'}</td></tr>`).join('')}
        </tbody></table></div>
        <div class="result__actions"><button class="btn" data-again>${icon('rotate')} Run the day again</button><a class="btn" href="#/track/${t.id}">Back to track</a>${passed ? `<button class="btn btn--primary" data-cert>${icon('award')} View certificate</button>` : ''}</div>
      </div>`;
      $('[data-again]', root).addEventListener('click', () => runSim(root, t));
      const c = $('[data-cert]', root); if (c) c.addEventListener('click', () => showCertificate(t));
      if (passed) toast({ kind: 'award', title: 'Certificate earned', text: t.title });
    };
    draw();
  });
}

/* ---------- Certificate ---------- */
function certificateHTML(t) {
  const f = state.finals[t.id];
  const date = f && f.at ? new Date(f.at).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
  return `<div class="certificate">
    <div class="cert-seal">${icon('award', 'icon--lg')}</div>
    <p class="cert-eyebrow mt-4">Maintenance Coordinator Academy · Certificate of Completion</p>
    <h2>${esc(t.title)}</h2>
    <p>This certifies that</p>
    <div class="cert-name">${esc(state.name || 'Your Name')}</div>
    <p>has completed the ${t.level} curriculum and passed the final ${t.final.kind === 'sim' ? 'simulation' : 'assessment'}<br>with a score of <strong style="color:#0b1a2e">${f ? pct(f.score) : 0}%</strong>.</p>
    <div class="cert-meta"><div><strong>${date}</strong>Date awarded</div><div><strong>${t.modules.length} modules · ${t.modules.reduce((a, m) => a + m.lessons.length, 0)} lessons</strong>Curriculum</div>${(state.certIds || {})[t.id] ? `<div><strong>${esc(state.certIds[t.id])}</strong>Verification code</div>` : `<div><strong>MCA-${t.id.slice(0, 3).toUpperCase()}-${(f && f.at ? f.at : 0).toString(36).toUpperCase().slice(-6)}</strong>Record ID</div>`}</div>
    ${(state.certIds || {})[t.id] ? `<div class="cert-check">${qrSVG(VERIFY_BASE + state.certIds[t.id], 'QR code: check this certificate online')}<p class="cert-verify">Scan or visit<br>${esc(VERIFY_BASE.replace(/^https:\/\//, ''))}${esc(state.certIds[t.id])}</p></div>` : ''}
    <p class="cert-note">A self-paced training record from MC Academy; the final assessment is unsupervised. It is not a CDL, government license or third-party industry certification.</p>
  </div>`;
}
function showCertificate(t) {
  openModal({
    title: `${t.level} certificate`, size: 'modal--lg',
    body: `${!state.name ? `<div class="callout callout--info mb-4">${icon('info')}<div><p>Add your name so it appears on the certificate.</p></div></div>` : ''}${(state.certIds || {})[t.id] ? '' : `<div class="callout callout--tip mb-4">${icon('bulb')}<div><p>${CLOUD.user ? 'Get a verification code so an employer can confirm this certificate online.' : '<button type="button" class="link-btn" data-cloud="in">Sign in</button> to get a verification code an employer can check online.'}</p></div></div>`}<div id="certWrap">${certificateHTML(t)}</div>`,
    foot: `<button class="btn" id="certName">${icon('users')} ${state.name ? 'Edit name' : 'Add name'}</button>${CLOUD.user && !(state.certIds || {})[t.id] ? `<button class="btn" id="certIssue">${icon('award')} Get verification code</button>` : ''}<button class="btn btn--primary" id="certPrint">${icon('print')} Print / Save PDF</button>`,
    onOpen: (m, close) => {
      const issue = $('#certIssue', m);
      if (issue) issue.addEventListener('click', async () => {
        if (!state.name && !(CLOUD.user.user_metadata || {}).full_name) { toast({ kind: 'warning', title: 'Add your name first' }); return; }
        issue.disabled = true;
        try { const code = await issueCertificate(t); $('#certWrap', m).innerHTML = certificateHTML(t); issue.remove(); toast({ kind: 'success', title: 'Verification code issued', text: code }); }
        catch (e) { issue.disabled = false; console.warn(e && e.message); toast({ kind: 'warning', title: 'Couldn\'t issue the code', text: /not passed/.test((e && e.message) || '') ? 'Your synced progress doesn\'t show this final as passed yet.' : 'Please try again in a moment.' }); }
      });
      $('#certPrint', m).addEventListener('click', () => { $('#printRoot').innerHTML = certificateHTML(t); window.print(); });
      $('#certName', m).addEventListener('click', () => { close(); setTimeout(editName, 250); });
    }
  });
}

/* ---------- Practice hub ---------- */
function viewPractice() {
  const tools = [
    ['review', 'rotate', 'Review my mistakes', 'Retry questions you answered wrong, spaced out over 1, 3 and 7 days until they stick.', `${missedCount()} due now`],
    ['simulations', 'activity', 'Simulations', 'Build a work order, triage alerts, close out DVIRs, order a part with a core charge and start a warranty claim on simplified training screens.', `${SIM_LIST.filter(([id]) => state.exercises[id]).length}/${SIM_LIST.length} completed`],
    ['scenarios', 'message', 'Scenario Simulator', 'Respond to realistic messages from drivers, dispatch, shops and management — and see the reasoning.', `${Object.keys(state.scen).length}/${SCENARIOS.length} attempted`],
    ['trees', 'branch', 'Decision Trees', 'Work step by step through maintenance situations where each choice changes the outcome.', `${Object.keys(state.trees).length}/${Object.keys(TREES).length} explored`],
    ['exercises', 'clipboard', 'Practical Exercises', 'Extract case data, classify urgency, order workflows and review estimates.', `${Object.keys(state.exercises).length} completed`],
    ['flashcards', 'cards', 'Flashcards', 'Components, terminology, abbreviations, processes and diagnostics.', `${Object.keys(state.flash.known).length}/${FLASHCARDS.length} known`],
    ['calculators', 'calc', 'Calculators', 'Cost per mile, downtime cost, repair comparison, PM compliance, availability, MTBF/MTTR.', `${Object.keys(state.calcUsed).length}/6 used`],
    ['fleet', 'truck', 'Fleet Board', 'An interactive fleet status dashboard with PM status, open repairs, downtime and repeat failures.', `${FLEET.length} units`]
  ];
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('flask', 'icon--sm')} Practice Lab`, title: 'Practice like it\'s a real shift', text: 'Hands-on tools to build judgment and speed. Everything here also appears inside the relevant lessons.' })}
    <div class="grid grid--3 stagger">${tools.map(([id, ic, t, d, meta]) => `<a class="card card--hover" href="#/${id}"><div class="lab-card"><span class="lab-card__icon">${icon(ic)}</span><h2>${t}</h2><p>${d}</p><div class="row row--between"><span class="lab-card__go">Open ${icon('arrow-r')}</span><span class="small muted">${meta}</span></div></div></a>`).join('')}</div></div>`;
  return { html, title: 'Practice Lab', nav: 'practice', bottom: 'practice', crumbs: [['Practice Lab']] };
}

/* ---------- Scenario simulator ---------- */
const GRADE_ORDER = { poor: 0, ok: 1, best: 2 };
function scenarioHTML(s) {
  return `<div class="scenario" data-scen="${s.id}">
    <div class="scenario__head"><span class="badge badge--outline">${esc(s.cat)}</span><span class="badge badge--info">${esc(s.level)}</span>${state.scen[s.id] ? `<span class="badge badge--${state.scen[s.id] === 'best' ? 'success' : state.scen[s.id] === 'ok' ? 'warning' : 'critical'}">Last: ${state.scen[s.id] === 'best' ? 'Best response' : state.scen[s.id] === 'ok' ? 'Acceptable' : 'Poor'}</span>` : ''}<h2>${esc(s.title)}</h2></div>
    <div class="scenario__call"><div class="incoming"><span class="incoming__avatar">${icon(s.from.startsWith('Driver') ? 'phone' : 'message')}</span><div><div class="incoming__who">${esc(s.from)}</div><p class="incoming__msg">“${esc(s.message)}”</p></div></div>
      <div class="scenario__ctx">${s.ctx.map((c) => `<span class="badge badge--outline">${esc(c)}</span>`).join('')}</div></div>
    <div class="scenario__body"><h3 class="mb-4" style="font-size:var(--fs-md)">How do you respond?</h3>
      <div class="resp">${s.options.map((o, k) => `<button type="button" data-k="${k}"><span class="opt__key" aria-hidden="true">${String.fromCharCode(65 + k)}</span><span class="grow">${esc(o.text)}</span></button>`).join('')}</div>
      <div data-scen-out aria-live="polite"></div></div></div>`;
}
function mountScenario(el, s, onAnswer) {
  $$('.resp button', el).forEach((b) => b.addEventListener('click', () => {
    const k = +b.dataset.k; const o = s.options[k];
    const bestIdx = s.options.findIndex((x) => x.grade === 'best');
    $$('.resp button', el).forEach((x) => { x.disabled = true; });
    b.classList.add('is-picked', o.grade);
    b.insertAdjacentHTML('beforeend', `<span class="resp__grade badge badge--${o.grade === 'best' ? 'success' : o.grade === 'ok' ? 'warning' : 'critical'}">${o.grade === 'best' ? 'Best' : o.grade === 'ok' ? 'Acceptable' : 'Poor'}</span>`);
    if (k !== bestIdx) $$('.resp button', el)[bestIdx].classList.add('is-best-reveal');
    $('.resp', el).classList.add('is-answered');
    const kind = o.grade === 'best' ? 'correct' : o.grade === 'ok' ? 'partial' : 'wrong';
    $('[data-scen-out]', el).innerHTML = `<div class="feedback feedback--${kind}">${icon(kind === 'correct' ? 'check-circle' : kind === 'partial' ? 'info' : 'x-circle')}<div><strong>${o.grade === 'best' ? 'Best response' : o.grade === 'ok' ? 'Acceptable — but there\'s a better option' : 'Poor response'}</strong><p>${esc(o.fb)}</p>${k !== bestIdx ? `<p class="mt-2"><strong style="color:var(--success);display:inline">Best:</strong> ${esc(s.options[bestIdx].fb)}</p>` : ''}</div></div>
      <div class="row mt-4"><button type="button" class="btn btn--sm" data-scen-retry>${icon('rotate')} Try again</button></div>`;
    const prev = state.scen[s.id];
    if (!prev || GRADE_ORDER[o.grade] > GRADE_ORDER[prev]) { state.scen[s.id] = o.grade; save(); checkAchievements(); }
    $('[data-scen-retry]', el).addEventListener('click', () => { const w = document.createElement('div'); w.innerHTML = scenarioHTML(s); const f = w.firstElementChild; el.replaceWith(f); mountScenario(f, s, onAnswer); $('.resp button', f).focus(); });
    if (onAnswer) onAnswer(o.grade);
  }));
}
function viewScenarios(sid) {
  const filter = sessionStorageGet('scenFilter') || 'All';
  const list = SCENARIOS.filter((s) => filter === 'All' || s.level === filter);
  const cur = SCENARIOS.find((s) => s.id === sid) || list[0] || SCENARIOS[0];
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('message', 'icon--sm')} Practice Lab`, title: 'Scenario Simulator', text: 'Real messages, real pressure. Choose your response and read the reasoning. There\'s often more than one reasonable answer — but one is best.' })}
    <div class="row row--wrap mb-6" role="group" aria-label="Filter by level">${['All', 'Beginner', 'Advanced', 'Expert'].map((f) => `<button type="button" class="chip" data-filter="${f}" aria-pressed="${f === filter}">${f}<span class="count">${f === 'All' ? SCENARIOS.length : SCENARIOS.filter((s) => s.level === f).length}</span></button>`).join('')}</div>
    <div class="scen-layout">
      <nav class="scen-list" aria-label="Scenarios">${list.map((s) => `<button type="button" data-sid="${s.id}" aria-current="${s.id === cur.id}"><span class="scen-list__state ${state.scen[s.id] || ''}">${state.scen[s.id] ? icon(state.scen[s.id] === 'poor' ? 'x' : 'check') : ''}</span><span><span class="scen-list__title">${esc(s.title)}</span><span class="scen-list__meta"><span class="badge badge--outline">${esc(s.cat)}</span></span></span></button>`).join('')}</nav>
      <div id="scenStage">${scenarioHTML(cur)}</div>
    </div></div>`;
  return {
    html, title: 'Scenario Simulator', nav: 'scenarios', bottom: 'practice', keepScroll: !!sid, crumbs: [['Practice Lab', '#/practice'], ['Scenarios']],
    after: (v) => {
      mountScenario($('[data-scen]', v), cur, () => refreshScenList(v));
      $$('[data-sid]', v).forEach((b) => b.addEventListener('click', () => {
        const s = SCENARIOS.find((x) => x.id === b.dataset.sid);
        $$('[data-sid]', v).forEach((x) => x.setAttribute('aria-current', x === b));
        const stage = $('#scenStage', v); stage.innerHTML = scenarioHTML(s); stage.firstElementChild.classList.add('anim-slide-up');
        mountScenario($('[data-scen]', stage), s, () => refreshScenList(v));
        history.replaceState(null, '', `#/scenarios/${s.id}`);
        if (window.innerWidth < 1024) stage.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
      }));
      $$('[data-filter]', v).forEach((b) => b.addEventListener('click', () => { sessionStorageSet('scenFilter', b.dataset.filter); router(); }));
    }
  };
}
function refreshScenList(v) {
  $$('[data-sid]', v).forEach((b) => { const g = state.scen[b.dataset.sid]; const st = $('.scen-list__state', b); st.className = `scen-list__state ${g || ''}`; st.innerHTML = g ? icon(g === 'poor' ? 'x' : 'check') : ''; });
}
function sessionStorageGet(k) { try { return sessionStorage.getItem('mca.' + k); } catch (e) { return null; } }
function sessionStorageSet(k, v) { try { sessionStorage.setItem('mca.' + k, v); } catch (e) {} }

/* ---------- Decision trees ---------- */
function treeHTML(tree) {
  return `<div class="tree" data-tree="${tree.id}"><div data-tree-stage></div>
    <aside class="card card--pad-sm" aria-label="Your path"><div class="row row--between"><h2 style="font-size:var(--fs-md)">Your path</h2><button type="button" class="btn btn--ghost btn--sm" data-tree-restart>${icon('rotate')} Restart</button></div><ol class="tree-path mt-4" data-tree-path><li><strong>Start</strong><small>${esc(tree.intro)}</small></li></ol></aside></div>`;
}
function mountTree(el, tree) {
  let path = [];
  const stage = $('[data-tree-stage]', el); const pathEl = $('[data-tree-path]', el);
  const show = (id) => {
    const n = tree.nodes[id];
    if (n.end) {
      stage.innerHTML = `<div class="tree-outcome tree-outcome--${n.outcome}" role="status"><span class="badge badge--${n.outcome === 'good' ? 'success' : n.outcome === 'warn' ? 'warning' : 'critical'}">${n.outcome === 'good' ? 'Strong outcome' : n.outcome === 'warn' ? 'Mixed outcome' : 'Poor outcome'}</span><h3>${esc(n.title)}</h3><p>${esc(n.text)}</p><div class="row mt-4 row--wrap"><button type="button" class="btn btn--primary btn--sm" data-tree-restart2>${icon('rotate')} Try another path</button></div></div>`;
      $('[data-tree-restart2]', stage).addEventListener('click', restart);
      const prev = state.trees[tree.id]; const rank = { bad: 0, warn: 1, good: 2 };
      if (!prev || rank[n.outcome] > rank[prev]) { state.trees[tree.id] = n.outcome; save(); checkAchievements(); }
      return;
    }
    stage.innerHTML = `<div class="tree-node"><span class="eyebrow">Decision ${path.length + 1}</span><p class="tree-node__q">${esc(n.text)}</p><div class="tree-node__choices">${n.choices.map((c, k) => `<button type="button" data-c="${k}"><span>${esc(c.label)}</span>${icon('arrow-r')}</button>`).join('')}</div></div>`;
    $$('[data-c]', stage).forEach((b) => b.addEventListener('click', () => {
      const c = n.choices[+b.dataset.c]; path.push(c.label);
      pathEl.insertAdjacentHTML('beforeend', `<li>${esc(c.label)}</li>`);
      show(c.next);
      const first = $('button', stage); if (first) first.focus({ preventScroll: true });
    }));
  };
  const restart = () => { path = []; pathEl.innerHTML = `<li><strong>Start</strong><small>${esc(tree.intro)}</small></li>`; show(tree.start); };
  $('[data-tree-restart]', el).addEventListener('click', restart);
  show(tree.start);
}
function viewTrees(tid) {
  const list = Object.values(TREES);
  const cur = TREES[tid] || list[0];
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('branch', 'icon--sm')} Practice Lab`, title: 'Decision Trees', text: 'Work through a situation one decision at a time. Each path leads to a different outcome — explore them all.' })}
    <div class="tablist mb-6" role="tablist" aria-label="Decision trees">${list.map((tr) => `<a class="tab" role="tab" href="#/trees/${tr.id}" aria-selected="${tr.id === cur.id}">${esc(tr.title)} ${state.trees[tr.id] === 'good' ? icon('check', 'icon--sm') : ''}</a>`).join('')}</div>
    <p class="mb-4"><span class="badge badge--info">${esc(cur.level)}</span> <span class="muted small">${esc(cur.intro)}</span></p>
    ${treeHTML(cur)}</div>`;
  return { html, title: 'Decision Trees', nav: 'trees', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Decision Trees']], after: (v) => mountTree($('[data-tree]', v), cur) };
}

/* ---------- Practical exercises (collected from lessons) ---------- */
function viewExercises() {
  const filter = sessionStorageGet('exFilter') || 'all';
  const items = LESSONS.filter((x) => x.l.practical && x.l.practical.exercise && (filter === 'all' || x.t.id === filter));
  const html = `<div class="page page--narrow">${pageHead({ eyebrow: `${icon('clipboard', 'icon--sm')} Practice Lab`, title: 'Practical Exercises', text: 'Realistic maintenance information — you perform the coordinator task. These are the same exercises embedded in each lesson, collected in one place.' })}
    <div class="row row--wrap mb-6" role="group" aria-label="Filter by track">${[['all', 'All tracks'], ...TRACKS.map((t) => [t.id, t.level])].map(([id, l]) => `<button type="button" class="chip" data-f="${id}" aria-pressed="${id === filter}">${l}</button>`).join('')}</div>
    <div class="accordion">${items.map((x) => { const pid = nextId('exacc'); const sc = state.exercises['ex:' + x.key]; return `<div class="acc-item" data-exkey="${x.key}"><h2 class="acc-heading"><button type="button" class="acc-trigger" aria-expanded="false" aria-controls="${pid}"><span class="badge badge--track" style="--c:${x.t.color}">${x.t.level.slice(0, 3)}</span><span class="grow">${esc(x.l.practical.title || EX_META[x.l.practical.exercise.type][1])}<br><span class="small muted" style="font-weight:400">M${x.m.id.slice(1)} · ${esc(x.l.title)}</span></span>${sc != null ? scorePill(sc) : ''}${icon('chev-d')}</button></h2><div class="acc-panel" id="${pid}" role="region"><div><div class="acc-panel__inner" data-exslot></div></div></div></div>`; }).join('')}</div></div>`;
  return {
    html, title: 'Practical Exercises', nav: 'exercises', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Exercises']],
    after: (v) => {
      $$('[data-f]', v).forEach((b) => b.addEventListener('click', () => { sessionStorageSet('exFilter', b.dataset.f); router(); }));
      $$('[data-exkey]', v).forEach((item) => {
        $('.acc-trigger', item).addEventListener('click', () => {
          const slot = $('[data-exslot]', item);
          if (!slot.dataset.filled) {
            const x = LESSON_MAP.get(item.dataset.exkey);
            slot.innerHTML = exerciseHTML(x.l.practical.exercise, { key: 'ex:' + x.key, title: x.l.practical.title }) + `<p class="small mt-3"><a href="${lessonHref(x)}">Open the lesson ${icon('arrow-r', 'icon--sm')}</a></p>`;
            slot.dataset.filled = '1'; mountExercises(slot);
          }
        }, { capture: true });
      });
    }
  };
}

/* ---------- Flashcards ---------- */
function viewFlashcards() {
  const decks = ['All', ...new Set(FLASHCARDS.map((c) => c.deck))];
  const deck = sessionStorageGet('fcDeck') || 'All';
  let cards = FLASHCARDS.filter((c) => deck === 'All' || c.deck === deck);
  let i = 0; let flipped = false;
  const cid = (c) => `${c.deck}:${c.front}`;
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('cards', 'icon--sm')} Practice Lab`, title: 'Flashcards', text: 'Flip to reveal. Mark cards you know — they\'ll be tracked. Keyboard: Space/Enter to flip, ← → to navigate.' })}
    <div class="row row--wrap mb-6 row--between"><div class="row row--wrap" role="group" aria-label="Choose deck">${decks.map((d) => `<button type="button" class="chip" data-deck="${d}" aria-pressed="${d === deck}">${d}<span class="count">${d === 'All' ? FLASHCARDS.length : FLASHCARDS.filter((c) => c.deck === d).length}</span></button>`).join('')}</div>
    <div class="row"><button type="button" class="btn btn--sm" data-shuffle>${icon('rotate')} Shuffle</button><button type="button" class="btn btn--sm btn--ghost" data-unknown>Review unknown only</button></div></div>
    <div class="fc-stage"><div class="flashcard" tabindex="0" role="button" aria-label="Flashcard — press to flip" id="fc"><div class="flashcard__inner"><div class="flashcard__face flashcard__front" aria-hidden="false"></div><div class="flashcard__face flashcard__back" aria-hidden="true"></div></div></div>
    <div class="fc-controls"><button type="button" class="btn-icon" data-prev aria-label="Previous card">${icon('chev-l')}</button><span class="fc-counter" aria-live="polite"></span><button type="button" class="btn-icon" data-next aria-label="Next card">${icon('chev-r')}</button></div>
    <div class="fc-controls" style="margin-top:var(--sp-3)"><button type="button" class="btn" data-review>${icon('rotate')} Review again</button><button type="button" class="btn btn--success" data-know>${icon('check')} I know this</button></div>
    <div class="fc-stats"><span>Known: <strong data-known></strong> / ${FLASHCARDS.length}</span><span>This deck: <strong data-deckknown></strong></span></div>
    ${progressBar(0, { cls: 'mt-4', label: 'Flashcards known' }).replace('class="progress mt-4"', 'class="progress mt-4" id="fcBar"')}</div></div>`;
  return {
    html, title: 'Flashcards', nav: 'flashcards', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Flashcards']],
    after: (v) => {
      const fc = $('#fc', v);
      const draw = () => {
        if (!cards.length) { $('.fc-stage', v).innerHTML = stateBlock({ ic: 'check-circle', title: 'Nothing left to review', text: 'You know every card in this deck. Choose another deck or reset the filter.', action: `<button class="btn btn--primary" data-reload>Show all cards</button>` }); return; }
        const c = cards[i];
        fc.classList.remove('is-flipped'); flipped = false;
        $('.flashcard__front', fc).innerHTML = `<span class="badge badge--outline flashcard__deck">${esc(c.deck)}</span><div class="flashcard__term">${esc(c.front)}</div><div class="flashcard__hint">${icon('rotate', 'icon--sm')} Tap or press Space to flip</div>`;
        $('.flashcard__back', fc).innerHTML = `<span class="badge flashcard__deck" style="background:rgba(255,255,255,.08);color:#8fb6de">${esc(c.front)}</span><p class="flashcard__def">${esc(c.back)}</p><div class="flashcard__hint">${state.flash.known[cid(c)] ? icon('check-circle', 'icon--sm') + ' Marked as known' : 'Do you know it?'}</div>`;
        $('.fc-counter', v).textContent = `${i + 1} / ${cards.length}`;
        const known = Object.keys(state.flash.known).length;
        $('[data-known]', v).textContent = known;
        $('[data-deckknown]', v).textContent = `${cards.filter((x) => state.flash.known[cid(x)]).length} / ${cards.length}`;
        const bar = $('#fcBar .progress__bar', v); if (bar) bar.style.setProperty('--p', known / FLASHCARDS.length);
        $('.flashcard__front', fc).setAttribute('aria-hidden', 'false'); $('.flashcard__back', fc).setAttribute('aria-hidden', 'true');
      };
      const flip = () => { flipped = !flipped; fc.classList.toggle('is-flipped', flipped); $('.flashcard__front', fc).setAttribute('aria-hidden', flipped); $('.flashcard__back', fc).setAttribute('aria-hidden', !flipped); };
      const move = (d) => { i = (i + d + cards.length) % cards.length; draw(); };
      fc.addEventListener('click', flip);
      $('[data-prev]', v).addEventListener('click', () => move(-1));
      $('[data-next]', v).addEventListener('click', () => move(1));
      $('[data-know]', v).addEventListener('click', () => { state.flash.known[cid(cards[i])] = 1; touch('fk:' + cid(cards[i])); save(); checkAchievements(); move(1); });
      $('[data-review]', v).addEventListener('click', () => { delete state.flash.known[cid(cards[i])]; touch('fk:' + cid(cards[i])); save(); move(1); });
      $('[data-shuffle]', v).addEventListener('click', () => { cards = shuffle(cards); i = 0; draw(); toast({ title: 'Deck shuffled', timeout: 1800 }); });
      $('[data-unknown]', v).addEventListener('click', () => { cards = cards.filter((c) => !state.flash.known[cid(c)]); i = 0; draw(); });
      $$('[data-deck]', v).forEach((b) => b.addEventListener('click', () => { sessionStorageSet('fcDeck', b.dataset.deck); router(); }));
      const onKey = (e) => {
        if (e.target.matches('input, textarea, select') || modalStack.length) return;
        if (e.key === 'ArrowRight') move(1);
        else if (e.key === 'ArrowLeft') move(-1);
        else if ((e.key === ' ' || e.key === 'Enter') && (document.activeElement === fc || document.activeElement === document.body || document.activeElement === $('#main'))) { e.preventDefault(); flip(); }
      };
      document.addEventListener('keydown', onKey);
      viewCleanup = () => document.removeEventListener('keydown', onKey);
      draw();
    }
  };
}

/* ---------- Calculators ---------- */
const CALCS = {
  cpm: { title: 'Cost per mile', icon: 'dollar', desc: 'Maintenance cost divided by miles driven for the same period.', formula: 'CPM = (parts + labor + tires + other) ÷ miles',
    inputs: [['parts', 'Parts', 6200, '$'], ['labor', 'Labor', 4900, '$'], ['tires', 'Tires', 2400, '$'], ['other', 'Other (tows, fees)', 500, '$'], ['miles', 'Miles driven', 125000, '', 'mi'], ['target', 'Your CPM target', 0.12, '$', '/mi', 0.01]],
    calc: (v) => {
      const total = v.parts + v.labor + v.tires + v.other; const cpm = v.miles > 0 ? total / v.miles : 0;
      const segs = [['Parts', v.parts, 'var(--ig-1)'], ['Labor', v.labor, 'var(--ig-2)'], ['Tires', v.tires, 'var(--ig-3)'], ['Other', v.other, 'var(--slate-400)']];
      const good = cpm <= v.target;
      return { big: `$${cpm.toFixed(3)}<small>/mile</small>`, rows: [...segs.map(([l, n]) => [l, v.miles ? `$${(n / v.miles).toFixed(3)}/mi` : '—']), ['Total cost', fmtMoney(total), true]], bar: segs.map(([l, n, c]) => [l, n / (total || 1), c]),
        verdict: v.miles ? [good ? 'good' : 'warn', good ? `At or below your $${v.target.toFixed(2)} target.` : `$${(cpm - v.target).toFixed(3)}/mi above target — review the largest cost category and units with outlier CPM.`] : null };
    } },
  downtime: { title: 'Downtime cost', icon: 'clock', desc: 'Estimate what a unit being down really costs — beyond the repair invoice.', formula: 'Cost = hours ÷ 24 × (revenue + driver + rental per day) + other',
    inputs: [['hours', 'Hours down', 30, '', 'h'], ['revenue', 'Revenue per truck per day', 1200, '$', '/day'], ['driver', 'Driver pay / layover per day', 150, '$', '/day'], ['rental', 'Rental / replacement per day', 0, '$', '/day'], ['other', 'Other (tow, late fees, recovery)', 450, '$']],
    calc: (v) => {
      const days = v.hours / 24; const rev = days * v.revenue; const drv = days * v.driver; const ren = days * v.rental; const total = rev + drv + ren + v.other;
      return { big: `${fmtMoney(total)}`, rows: [['Lost revenue', fmtMoney(rev)], ['Driver pay / layover', fmtMoney(drv)], ['Rental / replacement', fmtMoney(ren)], ['Other costs', fmtMoney(v.other)], ['Cost per hour down', fmtMoney(v.hours ? total / v.hours : 0, 2), true]],
        bar: [['Revenue', rev / (total || 1), 'var(--ig-1)'], ['Driver', drv / (total || 1), 'var(--ig-2)'], ['Rental', ren / (total || 1), 'var(--ig-3)'], ['Other', v.other / (total || 1), 'var(--warning-strong)']],
        verdict: ['warn', `Every hour you remove from this event saves about ${fmtMoney(v.hours ? total / v.hours : 0)}. Approval waits and pickup delays are often the easiest hours to cut.`] };
    } },
  compare: { title: 'Repair comparison', icon: 'bar', desc: 'Compare two vendors on total cost — including tow and downtime.', formula: 'Total = rate × hours + parts + fees + tow + days down × downtime cost/day',
    inputs: [['aRate', 'A · Labor rate', 185, '$', '/h'], ['aHours', 'A · Labor hours', 4, '', 'h', 0.5], ['aParts', 'A · Parts', 900, '$'], ['aTow', 'A · Tow + fees', 60, '$'], ['aDays', 'A · Days down', 1, '', 'days', 0.5],
      ['bRate', 'B · Labor rate', 150, '$', '/h'], ['bHours', 'B · Labor hours', 5, '', 'h', 0.5], ['bParts', 'B · Parts', 850, '$'], ['bTow', 'B · Tow + fees', 690, '$'], ['bDays', 'B · Days down', 3, '', 'days', 0.5], ['dt', 'Downtime cost per day', 900, '$', '/day']],
    calc: (v) => {
      const a = { inv: v.aRate * v.aHours + v.aParts + v.aTow, dt: v.aDays * v.dt }; a.total = a.inv + a.dt;
      const b = { inv: v.bRate * v.bHours + v.bParts + v.bTow, dt: v.bDays * v.dt }; b.total = b.inv + b.dt;
      const win = a.total <= b.total ? 'A' : 'B'; const diff = Math.abs(a.total - b.total);
      const col = (n, x) => `<div class="vcol ${win === n ? 'is-winner' : ''}"><h3>Vendor ${n} ${win === n ? '<span class="badge badge--success">Lower total</span>' : ''}</h3><div class="calc__rows"><div><span>Invoice</span><strong>${fmtMoney(x.inv)}</strong></div><div><span>Downtime</span><strong>${fmtMoney(x.dt)}</strong></div><div class="total"><span>Total</span><strong>${fmtMoney(x.total)}</strong></div></div></div>`;
      return { big: `${fmtMoney(diff)}<small>saved with ${win}</small>`, custom: `<div class="compare-cols">${col('A', a)}${col('B', b)}</div>`,
        verdict: [a.inv < b.inv !== (win === 'A') ? 'warn' : 'good', a.inv < b.inv !== (win === 'A') ? `The lower invoice is not the lower total — Vendor ${win} wins once downtime is included.` : `Vendor ${win} is cheaper on both invoice and total cost.`] };
    } },
  pm: { title: 'PM compliance', icon: 'list-check', desc: 'Share of preventive maintenance completed on time.', formula: 'Compliance = PMs completed on time ÷ PMs due × 100',
    inputs: [['due', 'PMs due in period', 36, ''], ['ontime', 'Completed on time', 33, ''], ['late', 'Completed late', 2, ''], ['target', 'Target', 95, '', '%']],
    calc: (v) => {
      const c = v.due ? (v.ontime / v.due) * 100 : 0; const missed = Math.max(0, v.due - v.ontime - v.late);
      const inconsistent = v.ontime + v.late > v.due;
      return { big: `${c.toFixed(1)}<small>%</small>`, rows: [['On time', `${v.ontime}`], ['Late', `${v.late}`], ['Not completed', `${missed}`], ['Gap to target', `${Math.max(0, v.target - c).toFixed(1)} pts`, true]],
        bar: [['On time', v.ontime / (v.due || 1), 'var(--success)'], ['Late', v.late / (v.due || 1), 'var(--warning-strong)'], ['Missed', missed / (v.due || 1), 'var(--critical)']],
        verdict: inconsistent ? ['bad', 'On-time + late exceeds PMs due — check your inputs.'] : [c >= v.target ? 'good' : 'warn', c >= v.target ? 'Meeting target. Keep scheduling PMs around home time and planned stops.' : `Below target. Find why PMs slip: dispatch release, shop capacity, or scheduling.`] };
    } },
  avail: { title: 'Fleet availability', icon: 'activity', desc: 'Share of available time units were ready to work.', formula: 'Availability = (units × days × 24 − downtime h) ÷ (units × days × 24) × 100',
    inputs: [['units', 'Units in fleet', 50, ''], ['days', 'Days in period', 30, '', 'days'], ['down', 'Total downtime hours', 1440, '', 'h']],
    calc: (v) => {
      const avail = v.units * v.days * 24; const a = avail ? ((avail - v.down) / avail) * 100 : 0; const eq = v.days ? v.down / (v.days * 24) : 0;
      return { big: `${a.toFixed(1)}<small>%</small>`, rows: [['Available hours', fmtNum(avail)], ['Downtime %', `${(100 - a).toFixed(1)}%`], ['Avg. units down at any time', eq.toFixed(1), true]],
        bar: [['Available', a / 100, 'var(--success)'], ['Down', (100 - a) / 100, 'var(--critical)']],
        verdict: [a >= 95 ? 'good' : 'warn', `On average, about ${eq.toFixed(1)} unit(s) were unavailable at any moment.`] };
    } },
  mtbf: { title: 'MTBF & MTTR', icon: 'shield', desc: 'Reliability (time between failures) and repair speed (time to repair).', formula: 'MTBF = operating h ÷ failures · MTTR = repair h ÷ repairs',
    inputs: [['op', 'Operating hours', 60000, '', 'h'], ['fail', 'Number of failures', 20, ''], ['rep', 'Total repair / downtime hours', 400, '', 'h'], ['n', 'Number of repairs', 20, '']],
    calc: (v) => {
      const mtbf = v.fail ? v.op / v.fail : 0; const mttr = v.n ? v.rep / v.n : 0; const ai = mtbf + mttr ? (mtbf / (mtbf + mttr)) * 100 : 0;
      return { big: `${fmtNum(mtbf)}<small>h MTBF</small>`, rows: [['MTTR', `${mttr.toFixed(1)} h`], ['Inherent availability', `${ai.toFixed(2)}%`, true]],
        verdict: ['good', 'Raise MTBF by eliminating root causes and improving PM; lower MTTR through faster approvals, parts sourcing and vendor choice.'] };
    } }
};
function calcHTML(id) {
  const c = CALCS[id];
  return `<div class="calc" data-calc="${id}"><div class="calc__head"><h2 style="font-size:var(--fs-xl)">${esc(c.title)}</h2><p>${esc(c.desc)}</p></div>
    <div class="calc__grid"><form class="calc__inputs" onsubmit="return false" aria-label="${esc(c.title)} inputs">${c.inputs.map(([k, label, val, pre, suf, step]) => `<div class="field"><label for="c-${id}-${k}">${esc(label)}</label><div class="input-affix">${pre ? `<span class="pre">${pre}</span>` : ''}<input class="input ${pre ? 'has-pre' : ''} ${suf ? 'has-suf' : ''} num" type="number" inputmode="decimal" min="0" step="${step || 'any'}" id="c-${id}-${k}" data-k="${k}" value="${val}">${suf ? `<span class="suf">${suf}</span>` : ''}</div></div>`).join('')}</form>
    <div class="calc__out" aria-live="polite"></div></div></div>`;
}
function mountCalc(el) {
  const id = el.dataset.calc; const c = CALCS[id]; const out = $('.calc__out', el);
  const run = (user) => {
    const v = {}; $$('input', el).forEach((i) => { v[i.dataset.k] = Math.max(0, parseFloat(i.value) || 0); });
    const r = c.calc(v);
    out.innerHTML = `<span class="eyebrow">Result</span><div class="calc__big ${user ? 'is-updated' : ''}">${r.big}</div>
      ${r.bar ? `<div class="stackbar" aria-hidden="true">${r.bar.map(([l, f, col]) => `<span style="flex-grow:${Math.max(f, 0)};background:${col}"></span>`).join('')}</div><div class="legend">${r.bar.map(([l, f, col]) => `<span><i style="background:${col}"></i>${l} ${pct(f)}%</span>`).join('')}</div>` : ''}
      ${r.custom || ''}${r.rows ? `<div class="calc__rows">${r.rows.map(([l, val, tot]) => `<div class="${tot ? 'total' : ''}"><span>${l}</span><strong>${val}</strong></div>`).join('')}</div>` : ''}
      ${r.verdict ? `<div class="verdict verdict--${r.verdict[0]}">${icon(r.verdict[0] === 'good' ? 'check-circle' : r.verdict[0] === 'warn' ? 'info' : 'alert')}<span>${r.verdict[1]}</span></div>` : ''}
      <div class="calc__formula">${esc(c.formula)}</div>`;
    if (user && !state.calcUsed[id]) { state.calcUsed[id] = 1; save(); checkAchievements(); }
  };
  el.addEventListener('input', () => run(true));
  run(false);
}
function viewCalculators(cid) {
  const cur = CALCS[cid] ? cid : 'cpm';
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('calc', 'icon--sm')} Practice Lab`, title: 'Calculators', text: 'Numbers drive fleet decisions. Change any input — results update instantly.' })}
    <div class="calc-layout"><nav class="calc-nav" aria-label="Calculators">${Object.entries(CALCS).map(([k, c]) => `<button type="button" data-cid="${k}" aria-current="${k === cur}">${icon(c.icon)} ${esc(c.title)}</button>`).join('')}</nav><div id="calcStage">${calcHTML(cur)}</div></div></div>`;
  return {
    html, title: 'Calculators', nav: 'calculators', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Calculators']],
    after: (v) => {
      mountCalc($('[data-calc]', v));
      $$('[data-cid]', v).forEach((b) => b.addEventListener('click', () => {
        $$('[data-cid]', v).forEach((x) => x.setAttribute('aria-current', x === b));
        const st = $('#calcStage', v); st.innerHTML = calcHTML(b.dataset.cid); st.firstElementChild.classList.add('anim-fade-in'); mountCalc($('[data-calc]', st));
        history.replaceState(null, '', `#/calculators/${b.dataset.cid}`);
      }));
    }
  };
}

/* ---------- Fleet board ---------- */
const STATUS_COLOR = { 'Active': 'var(--success)', 'In Shop': 'var(--primary)', 'Waiting Parts': 'var(--warning-strong)', 'Roadside': 'var(--critical)', 'Out of Service': 'var(--critical)' };
function pmStatus(u) {
  if (u.pmLeft < 0) return ['Overdue', 'critical'];
  if (u.pmLeft <= u.pmInt * 0.05) return ['Due', 'warning'];
  if (u.pmLeft <= u.pmInt * 0.15) return ['Due soon', 'info'];
  return ['OK', 'success'];
}
const pmText = (u) => (u.pmLeft < 0 ? `${fmtNum(-u.pmLeft)} ${u.pmUnit} over` : `${fmtNum(u.pmLeft)} ${u.pmUnit} left`);
function fleetBoardHTML() {
  const down = FLEET.filter((u) => u.status !== 'Active');
  const overdue = FLEET.filter((u) => pmStatus(u)[0] === 'Overdue').length;
  const dueSoon = FLEET.filter((u) => ['Due', 'Due soon'].includes(pmStatus(u)[0])).length;
  const dt = FLEET.reduce((a, u) => a + u.down, 0);
  const rep = FLEET.filter((u) => u.repeats >= 2).length;
  const avail = ((FLEET.length - down.length) / FLEET.length) * 100;
  return `<div class="fleet-board">
    <div class="kpis stagger">
      <div class="kpi"><div class="kpi__label">${icon('truck')} Units available</div><div class="kpi__value">${FLEET.length - down.length}<small> / ${FLEET.length}</small></div><div class="kpi__delta">${avail.toFixed(0)}% of board</div></div>
      <div class="kpi kpi--critical"><div class="kpi__label">${icon('alert')} Down now</div><div class="kpi__value">${down.length}</div><div class="kpi__delta down">${down.filter((u) => u.status === 'Roadside').length} roadside</div></div>
      <div class="kpi"><div class="kpi__label">${icon('list-check')} PM overdue / due</div><div class="kpi__value">${overdue}<small> / ${dueSoon}</small></div><div class="kpi__delta ${overdue ? 'down' : ''}">${overdue ? 'Action needed' : 'On track'}</div></div>
      <div class="kpi"><div class="kpi__label">${icon('clock')} Downtime MTD</div><div class="kpi__value">${dt}<small> h</small></div><div class="kpi__delta">across ${FLEET.filter((u) => u.down).length} units</div></div>
      <div class="kpi"><div class="kpi__label">${icon('rotate')} Repeat flags</div><div class="kpi__value">${rep}</div><div class="kpi__delta ${rep ? 'down' : ''}">≥2 repeats in 90 days</div></div>
    </div>
    <div class="toolbar" role="search">
      <div class="input-group"><label class="sr-only" for="fleetQ">Search units</label>${icon('search')}<input class="input" id="fleetQ" type="search" placeholder="Search unit, location, issue…" autocomplete="off"></div>
      <label class="sr-only" for="fleetStatus">Status</label><select class="select" id="fleetStatus"><option value="all">All statuses</option>${Object.keys(STATUS_COLOR).map((s) => `<option>${s}</option>`).join('')}<option value="down">Not active</option></select>
      <label class="sr-only" for="fleetType">Type</label><select class="select" id="fleetType"><option value="all">Tractors &amp; trailers</option><option>Tractor</option><option>Trailer</option></select>
      <label class="sr-only" for="fleetPm">PM status</label><select class="select" id="fleetPm"><option value="all">Any PM status</option><option>Overdue</option><option>Due</option><option>Due soon</option><option>OK</option></select>
      <button type="button" class="btn" data-refresh>${icon('rotate')} Refresh</button>
    </div>
    <p class="small muted mb-2" data-count aria-live="polite"></p>
    <div class="table-wrap fleet-table-wrap"><table class="table fleet-table"><caption class="sr-only">Fleet units — select a row for details</caption><thead><tr>
      ${[['unit', 'Unit'], ['status', 'Status'], ['loc', 'Location'], ['issue', 'Open issue'], ['pmLeft', 'PM'], ['down', 'Downtime'], ['repeats', 'Repeats'], ['etr', 'ETR']].map(([k, l]) => `<th class="sortable" data-sort="${k}" aria-sort="none"><button type="button">${l}${icon('chev-d')}</button></th>`).join('')}
    </tr></thead><tbody></tbody></table></div>
    <div class="fleet-cards"></div>
  </div>`;
}
function mountFleet(el) {
  const fs = { q: '', status: 'all', type: 'all', pm: 'all', sort: 'unit', dir: 1 };
  const tbody = $('tbody', el); const cards = $('.fleet-cards', el);
  const rowHTML = (u) => {
    const [pmS, pmK] = pmStatus(u); const used = clamp(1 - u.pmLeft / u.pmInt, 0, 1);
    return `<tr tabindex="0" data-unit="${u.unit}">
      <td><span class="unit">${u.unit}</span><br><span class="xs muted">${u.spec}</span></td>
      <td><span class="status ${u.status === 'Roadside' ? 'status--live' : ''}" style="--c:${STATUS_COLOR[u.status]}"><span class="status__dot"></span>${u.status}</span></td>
      <td>${esc(u.loc)}</td><td style="min-width:200px">${esc(u.issue)}</td>
      <td><div class="pm-meter">${progressBar(used, { cls: 'progress--sm', color: `var(--${pmK === 'success' ? 'success' : pmK === 'info' ? 'primary' : pmK === 'warning' ? 'warning-strong' : 'critical'})`, label: 'PM interval used' })}<span class="badge badge--${pmK}">${pmS}</span></div><span class="xs muted">${pmText(u)}</span></td>
      <td class="num">${u.down} h</td><td class="num">${u.repeats >= 2 ? `<span class="badge badge--critical">${u.repeats}</span>` : u.repeats}</td><td class="mono xs">${esc(u.etr)}</td></tr>`;
  };
  const cardHTML = (u) => {
    const [pmS, pmK] = pmStatus(u);
    return `<button type="button" class="unit-card card--hover" data-unit="${u.unit}"><div class="unit-card__top"><span class="mono" style="font-weight:600;color:var(--text)">${u.unit}</span><span class="status ${u.status === 'Roadside' ? 'status--live' : ''}" style="--c:${STATUS_COLOR[u.status]}"><span class="status__dot"></span>${u.status}</span></div>
      <p class="small mt-2" style="color:var(--text-2)">${esc(u.issue)}</p>
      <dl><div><dt>Location</dt><dd>${esc(u.loc)}</dd></div><div><dt>PM</dt><dd><span class="badge badge--${pmK}">${pmS}</span></dd></div><div><dt>Downtime</dt><dd>${u.down} h</dd></div><div><dt>Repeats</dt><dd>${u.repeats}</dd></div></dl></button>`;
  };
  const filtered = () => {
    const q = fs.q.toLowerCase();
    return FLEET.filter((u) => (!q || `${u.unit} ${u.loc} ${u.issue} ${u.spec} ${u.vendor}`.toLowerCase().includes(q))
      && (fs.status === 'all' || (fs.status === 'down' ? u.status !== 'Active' : u.status === fs.status))
      && (fs.type === 'all' || u.type === fs.type)
      && (fs.pm === 'all' || pmStatus(u)[0] === fs.pm))
      .sort((a, b) => { const x = a[fs.sort], y = b[fs.sort]; return (typeof x === 'number' ? x - y : String(x).localeCompare(String(y))) * fs.dir; });
  };
  const draw = () => {
    const list = filtered();
    $('[data-count]', el).textContent = `Showing ${list.length} of ${FLEET.length} units`;
    if (!list.length) {
      tbody.innerHTML = `<tr><td colspan="8">${stateBlock({ ic: 'filter', title: 'No units match', text: 'Try clearing a filter or searching for a different unit.', action: '<button type="button" class="btn btn--sm" data-clear>Clear filters</button>' })}</td></tr>`;
      cards.innerHTML = stateBlock({ ic: 'filter', title: 'No units match', text: 'Try clearing a filter.', action: '<button type="button" class="btn btn--sm" data-clear>Clear filters</button>' });
      $$('[data-clear]', el).forEach((b) => b.addEventListener('click', clear));
      return;
    }
    tbody.innerHTML = list.map(rowHTML).join('');
    cards.innerHTML = list.map(cardHTML).join('');
    $$('th[data-sort]', el).forEach((th) => th.setAttribute('aria-sort', th.dataset.sort === fs.sort ? (fs.dir > 0 ? 'ascending' : 'descending') : 'none'));
  };
  const clear = () => { fs.q = ''; fs.status = fs.type = fs.pm = 'all'; $('#fleetQ', el).value = ''; $('#fleetStatus', el).value = 'all'; $('#fleetType', el).value = 'all'; $('#fleetPm', el).value = 'all'; draw(); };
  $('#fleetQ', el).addEventListener('input', (e) => { fs.q = e.target.value; draw(); });
  $('#fleetStatus', el).addEventListener('change', (e) => { fs.status = e.target.value; draw(); });
  $('#fleetType', el).addEventListener('change', (e) => { fs.type = e.target.value; draw(); });
  $('#fleetPm', el).addEventListener('change', (e) => { fs.pm = e.target.value; draw(); });
  $$('th[data-sort] button', el).forEach((b) => b.addEventListener('click', () => { const k = b.parentElement.dataset.sort; fs.dir = fs.sort === k ? -fs.dir : (typeof FLEET[0][k] === 'number' ? -1 : 1); fs.sort = k; draw(); }));
  const openUnit = (id) => {
    const u = FLEET.find((x) => x.unit === id); if (!u) return;
    const [pmS, pmK] = pmStatus(u);
    const actions = [];
    if (u.status === 'Roadside') actions.push(['critical', 'Confirm driver safety and vendor ETA; update dispatch.']);
    if (u.status === 'In Shop' || u.status === 'Waiting Parts') actions.push(['info', `Follow up with ${u.vendor} on ETR ${u.etr}.`]);
    if (u.status === 'Out of Service') actions.push(['critical', 'Do not dispatch. Complete required inspection/repair first.']);
    if (pmS === 'Overdue') actions.push(['critical', 'PM overdue — schedule with dispatch this week; escalate if blocked.']);
    else if (pmS === 'Due' || pmS === 'Due soon') actions.push(['warning', 'Plan PM around upcoming loads or home time.']);
    if (u.repeats >= 2) actions.push(['critical', 'Repeat failures — open a root-cause review and check warranty on recent repairs.']);
    if (!actions.length) actions.push(['success', 'No action needed. Keep monitoring.']);
    openModal({
      title: `<span class="mono">${u.unit}</span> <span class="muted" style="font-weight:400;font-size:var(--fs-md)">${u.spec}</span>`, size: 'modal--lg',
      body: `<div class="grid grid--2" style="gap:var(--sp-6)"><div>
        <dl class="case-file" style="border:0"><div class="case-file__head">${icon('truck')} Unit details</div><dl>
        <dt>Status</dt><dd><span class="status" style="--c:${STATUS_COLOR[u.status]}"><span class="status__dot"></span>${u.status}</span></dd>
        <dt>Location</dt><dd>${esc(u.loc)}</dd>
        ${u.type === 'Tractor' ? `<dt>Odometer</dt><dd class="mono">${fmtNum(u.miles)} mi</dd>` : ''}${u.hours ? `<dt>${u.type === 'Trailer' ? 'Reefer hours' : 'Engine hours'}</dt><dd class="mono">${fmtNum(u.hours)}</dd>` : ''}
        <dt>PM status</dt><dd><span class="badge badge--${pmK}">${pmS}</span> <span class="xs muted">${pmText(u)}</span></dd>
        <dt>Open issue</dt><dd>${esc(u.issue)}</dd><dt>Vendor</dt><dd>${esc(u.vendor)}</dd><dt>ETR</dt><dd class="mono">${esc(u.etr)}</dd>
        <dt>Downtime MTD</dt><dd class="mono">${u.down} h</dd><dt>Maint. cost MTD</dt><dd class="mono">${fmtMoney(u.cost)}</dd><dt>Repeats (90 d)</dt><dd>${u.repeats}</dd></dl></dl></div>
        <div><h3 class="mb-4" style="font-size:var(--fs-md)">Recommended actions</h3><div class="stack-sm">${actions.map(([k, t]) => `<div class="verdict verdict--${k === 'critical' ? 'bad' : k === 'success' ? 'good' : 'warn'}">${icon(k === 'critical' ? 'alert' : k === 'success' ? 'check-circle' : 'info')}<span>${esc(t)}</span></div>`).join('')}</div>
        <h3 class="mt-6 mb-4" style="font-size:var(--fs-md)">Repair history</h3><ul class="history">${u.history.map(([d, t]) => `<li><time>${d}</time><p>${esc(t)}</p></li>`).join('')}</ul></div></div>`,
      foot: `<button class="btn btn--primary" data-close>Done</button>`
    });
  };
  el.addEventListener('click', (e) => { const r = e.target.closest('[data-unit]'); if (r) openUnit(r.dataset.unit); });
  el.addEventListener('keydown', (e) => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('tr[data-unit]')) { e.preventDefault(); openUnit(e.target.dataset.unit); } });
  $('[data-refresh]', el).addEventListener('click', (e) => {
    const btn = e.currentTarget; btn.disabled = true; btn.setAttribute('aria-busy', 'true');
    tbody.innerHTML = Array.from({ length: 6 }, () => `<tr><td colspan="8"><div class="skeleton skeleton--row" style="margin:0"></div></td></tr>`).join('');
    cards.innerHTML = Array.from({ length: 3 }, () => '<div class="skeleton skeleton--card"></div>').join('');
    $('[data-count]', el).textContent = 'Syncing telematics…';
    setTimeout(() => { draw(); btn.disabled = false; btn.removeAttribute('aria-busy'); toast({ kind: 'success', title: 'Fleet data synced', text: `${FLEET.length} units updated.`, timeout: 2200 }); }, 650);
  });
  draw();
}
function viewFleetPage() {
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('truck', 'icon--sm')} Practice Lab`, title: 'Fleet Board', text: 'A live-style view of a fictional fleet. Filter, sort and open units to decide what needs attention first.', right: `<span class="badge badge--success badge--dot badge--live">Live demo data</span>` })}<div data-widget="fleet"></div></div>`;
  return { html, title: 'Fleet Board', nav: 'fleet', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Fleet Board']] };
}

/* ---------- Widgets (embeddable in lessons) ---------- */
const TRUCK_PARTS = [
  { n: 1, x: 70, y: 168, name: 'Engine', sys: 'Powertrain', text: 'The diesel engine produces power. Watch for warning lamps, power loss, smoke, abnormal noise, leaks and oil pressure warnings.', ask: 'Any lamps or messages? Loss of power? Smoke or noise?' },
  { n: 2, x: 34, y: 150, name: 'Cooling system', sys: 'Powertrain', text: 'Radiator, coolant, water pump, thermostat, fan and hoses. Overheating can destroy an engine quickly.', ask: 'Temperature gauge? Steam? Sweet smell? Coolant leaks?' },
  { n: 3, x: 128, y: 206, name: 'Transmission', sys: 'Powertrain', text: 'Transfers engine power through gears. Many trucks use automated manual transmissions (AMTs).', ask: 'Won\'t shift? Grinding? Stuck in gear? Messages on display?' },
  { n: 4, x: 176, y: 200, name: 'Fuel tank & system', sys: 'Powertrain', text: 'Tanks, lines, filters, pumps and injectors deliver diesel to the engine.', ask: 'Fuel leak? Hard starting? Loss of power after fueling?' },
  { n: 5, x: 214, y: 176, name: 'Aftertreatment (DOC/DPF/SCR)', sys: 'Emissions', text: 'Cleans the exhaust. The DPF traps soot; SCR uses DEF to reduce NOx. Faults often cause derates.', ask: 'DPF or DEF lamp? Speed limited? Regen messages?' },
  { n: 6, x: 252, y: 34, name: 'Exhaust stack', sys: 'Emissions', text: 'Carries treated exhaust away from the cab.', ask: 'Unusual smoke color? Exhaust leak smell in the cab?' },
  { n: 7, x: 282, y: 218, name: 'Driveshaft & differential', sys: 'Powertrain', text: 'Carry power to the drive axles and allow wheels to turn at different speeds in turns.', ask: 'Vibration? Clunk when accelerating? Whining? Leaks?' },
  { n: 8, x: 94, y: 262, name: 'Steering & steer tires', sys: 'Chassis', text: 'Steering gear, linkage and front (steer) tires. Always safety-critical.', ask: 'Pulling? Loose or hard steering? Vibration in steering wheel?' },
  { n: 9, x: 238, y: 262, name: 'Air brakes', sys: 'Chassis', text: 'Compressed air applies brakes at every wheel through brake chambers. Spring brakes apply if air pressure is lost.', ask: 'Low-air warning? Hissing? Brakes dragging or smoking? Pulling when braking?' },
  { n: 10, x: 196, y: 128, name: 'Electrical & batteries', sys: 'Electrical', text: 'Batteries, alternator, starter and wiring. Powers lighting, electronics and the trailer via the 7-way cord.', ask: 'No-start? Dim lights? Battery or charging warnings?' },
  { n: 11, x: 300, y: 196, name: 'Fifth wheel', sys: 'Coupling', text: 'Couples the tractor to the trailer\'s kingpin. Coupling problems are safety-critical.', ask: 'Won\'t lock? Unusual movement between tractor and trailer?' },
  { n: 12, x: 346, y: 176, name: 'Glad hands & kingpin', sys: 'Trailer', text: 'Air couplers connect trailer brakes; the kingpin locks into the fifth wheel.', ask: 'Air leak at connections? Coupling concerns?' },
  { n: 13, x: 420, y: 248, name: 'Landing gear', sys: 'Trailer', text: 'Legs that support the trailer\'s front when uncoupled.', ask: 'Won\'t crank? Bent legs?' },
  { n: 14, x: 792, y: 200, name: 'Trailer suspension & tires', sys: 'Trailer', text: 'Air-ride or spring suspension and trailer tandem tires.', ask: 'Leaning? Air leak? Flat, bulge or exposed cords?' },
  { n: 15, x: 874, y: 150, name: 'Trailer lights', sys: 'Trailer', text: 'Brake, turn, marker and clearance lights powered from the tractor.', ask: 'Which lights are out? Both sides? Connector damage?' }
];
function truckWidgetHTML() {
  return `<div class="diagram"><div class="diagram__stage">
    <svg class="truck" viewBox="0 0 900 300" role="group" aria-label="Interactive tractor-trailer diagram. Select a numbered hotspot to learn about each system.">
      <line class="ground" x1="0" y1="288" x2="900" y2="288"/>
      <rect class="body" x="330" y="40" width="552" height="170" rx="4"/>
      <line class="line" x1="330" y1="80" x2="882" y2="80" opacity=".25"/>
      <rect class="body-dark" x="330" y="210" width="552" height="10"/>
      <rect class="body-dark" x="416" y="220" width="8" height="52"/><rect class="body-dark" x="406" y="270" width="28" height="6" rx="2"/>
      <rect class="body-dark" x="738" y="214" width="100" height="16" rx="3"/>
      <rect x="872" y="140" width="10" height="20" rx="2" fill="var(--critical)"/>
      <rect class="body" x="20" y="130" width="112" height="92" rx="14"/>
      <path class="body" d="M118 222 V84 Q118 50 150 50 H238 Q248 50 248 60 V222 Z"/>
      <path class="glass" d="M126 118 L138 66 Q140 60 148 60 H178 V118 Z"/>
      <rect class="glass" x="192" y="66" width="40" height="36" rx="4"/>
      <rect class="body-dark" x="246" y="22" width="12" height="130" rx="4"/>
      <rect class="body-dark" x="18" y="218" width="320" height="14" rx="3"/>
      <rect class="body-dark" x="146" y="186" width="58" height="30" rx="12"/>
      <rect class="body-dark" x="206" y="160" width="36" height="52" rx="6"/>
      <rect class="body-dark" x="276" y="202" width="58" height="10" rx="3"/>
      <rect class="body-dark" x="20" y="146" width="10" height="60" rx="3"/>
      ${[[94, 262], [238, 262], [300, 262], [764, 262], [822, 262]].map(([cx, cy]) => `<circle class="tire" cx="${cx}" cy="${cy}" r="25"/><circle class="hub" cx="${cx}" cy="${cy}" r="9"/>`).join('')}
      ${TRUCK_PARTS.map((p) => `<g class="hotspot" tabindex="0" role="button" data-part="${p.n}" aria-label="${p.n}. ${esc(p.name)}"><circle class="hs-pulse" cx="${p.x}" cy="${p.y}" r="13"/><circle class="hs-core" cx="${p.x}" cy="${p.y}" r="13"/><text x="${p.x}" y="${p.y + 4}" text-anchor="middle">${p.n}</text></g>`).join('')}
    </svg></div>
    <div class="diagram__panel" aria-live="polite"><div class="row" style="gap:12px"><span class="state-block__icon" style="width:40px;height:40px;margin:0">${icon('truck')}</span><div><strong>Select a numbered point</strong><p class="small">Explore the ${TRUCK_PARTS.length} major systems. <span data-seen>0</span> of ${TRUCK_PARTS.length} explored.</p></div></div></div>
    <div class="diagram__chips" role="group" aria-label="Systems list">${TRUCK_PARTS.map((p) => `<button type="button" class="chip" data-part="${p.n}" aria-pressed="false">${p.n}. ${esc(p.name)}</button>`).join('')}</div></div>`;
}
function mountTruck(el) {
  const seen = new Set(); const panel = $('.diagram__panel', el);
  const pick = (n) => {
    const p = TRUCK_PARTS.find((x) => x.n === n); seen.add(n);
    $$('.hotspot', el).forEach((h) => { const k = +h.dataset.part; h.classList.toggle('is-active', k === n); h.classList.toggle('is-seen', seen.has(k)); });
    $$('.chip[data-part]', el).forEach((c) => c.setAttribute('aria-pressed', +c.dataset.part === n));
    panel.innerHTML = `<div><div class="row row--between row--wrap"><h4 style="font-size:var(--fs-lg)">${p.n}. ${esc(p.name)}</h4><span class="badge badge--info">${esc(p.sys)}</span></div>
      <p class="mt-2">${esc(p.text)}</p><div class="callout callout--tip mt-4"><span class="callout__icon">${icon('message')}</span><div><h4>What to ask the driver</h4><p>${esc(p.ask)}</p></div></div>
      <p class="xs muted mt-3">${seen.size} of ${TRUCK_PARTS.length} explored${seen.size === TRUCK_PARTS.length ? ' — all systems covered.' : ''}</p></div>`;
  };
  el.addEventListener('click', (e) => { const t = e.target.closest('[data-part]'); if (t) pick(+t.dataset.part); });
  el.addEventListener('keydown', (e) => { const t = e.target.closest('.hotspot'); if (t && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); pick(+t.dataset.part); } });
}

const WORKFLOW = [
  ['Driver reports issue', 'The issue arrives by phone, message, DVIR, telematics alert or from dispatch. Open a case immediately and note the time received.', 'Driver → Coordinator', 'Waiting to "see if it goes away" before opening a case.'],
  ['Gather information', 'Use the seven questions: what, when, where, trend, safety, lights, performance. Capture unit, location, mileage and load status.', 'Coordinator', 'Recording guesses as facts.'],
  ['Determine urgency', 'Is it safety-critical? Can the unit move safely? What is the load and deadline impact?', 'Coordinator', 'Treating a brake complaint like a routine repair.'],
  ['Find appropriate vendor', 'Match the problem to capability: mobile service, tire service, shop, dealer or tow. Consider availability, parts and distance.', 'Coordinator', 'Choosing the closest shop without checking availability.'],
  ['Coordinate arrival', 'Confirm vendor ETA, exact location, driver contact and payment/PO details.', 'Coordinator · Vendor · Driver', 'Vendor arrives at the wrong exit.'],
  ['Obtain diagnosis', 'Send complete complaint details and relevant history. Ask for cause, plan, estimate and ETR.', 'Technician → Coordinator', 'Shop starts from scratch because history wasn\'t shared.'],
  ['Coordinate repair per procedure', 'Approve within your limits, route larger estimates, check warranty, issue PO.', 'Coordinator · Fleet manager', 'Approval sits overnight.'],
  ['Track progress', 'Scheduled follow-ups at every stage. No case sits without a next step.', 'Coordinator', 'Silent cases that nobody chases.'],
  ['Communicate ETA', 'Update dispatch and driver with ETR, confidence and impact — before being asked.', 'Coordinator → Dispatch · Driver', 'Optimistic ETRs that slip without warning.'],
  ['Confirm repair', 'Technician and driver confirm the complaint is resolved (road test where appropriate).', 'Technician · Driver', 'Truck leaves, problem returns 50 miles later.'],
  ['Document', 'Times, complaint/cause/correction, parts, labor, costs, RO/invoice/PO, approvals, downtime.', 'Coordinator', '"Truck fixed" as the only note.'],
  ['Close case', 'Close only after confirmation and documentation. Flag repeats for review.', 'Coordinator', 'Closing before the driver has the unit.']
];
function workflowHTML() {
  return `<div class="wf card"><div class="card__head"><h3>${icon('route')} The maintenance workflow</h3><span class="small muted" data-wf-count>1 of 12 explored</span></div>
    <div class="card__body"><div class="wf__steps" role="tablist" aria-label="Workflow steps">${WORKFLOW.map((w, i) => `<button type="button" class="wf__step ${i === 0 ? 'is-seen' : ''}" role="tab" aria-selected="${i === 0}" data-wf="${i}" aria-label="Step ${i + 1}: ${esc(w[0])}"><span>${i + 1}</span></button>`).join('')}</div>
    <div class="progress progress--sm mt-4"><div class="progress__bar" data-wf-bar style="--p:${1 / 12}"></div></div>
    <div class="wf__detail" data-wf-detail role="tabpanel"></div>
    <div class="row row--between mt-4"><button type="button" class="btn btn--sm" data-wf-prev>${icon('arrow-l')} Previous</button><button type="button" class="btn btn--sm btn--primary" data-wf-next>Next ${icon('arrow-r')}</button></div></div></div>`;
}
function mountWorkflow(el) {
  let cur = 0; const seen = new Set([0]);
  const draw = () => {
    const [title, text, who, pit] = WORKFLOW[cur];
    $$('[data-wf]', el).forEach((b) => { const k = +b.dataset.wf; b.setAttribute('aria-selected', k === cur); b.classList.toggle('is-seen', seen.has(k)); });
    $('[data-wf-detail]', el).innerHTML = `<div class="anim-fade-in"><span class="eyebrow">Step ${cur + 1} of 12</span><h4 style="font-size:var(--fs-lg);margin:4px 0 8px">${esc(title)}</h4><p>${esc(text)}</p>
      <div class="row row--wrap mt-3"><span class="badge badge--info">${icon('users')} ${esc(who)}</span></div>
      <div class="callout callout--warning mt-4"><span class="callout__icon">${icon('alert')}</span><div><h4>Common pitfall</h4><p>${esc(pit)}</p></div></div></div>`;
    $('[data-wf-bar]', el).style.setProperty('--p', seen.size / 12);
    $('[data-wf-count]', el).textContent = `${seen.size} of 12 explored`;
    $('[data-wf-prev]', el).disabled = cur === 0; $('[data-wf-next]', el).disabled = cur === 11;
  };
  el.addEventListener('click', (e) => {
    const s = e.target.closest('[data-wf]'); if (s) { cur = +s.dataset.wf; seen.add(cur); draw(); }
    if (e.target.closest('[data-wf-prev]') && cur > 0) { cur--; seen.add(cur); draw(); }
    if (e.target.closest('[data-wf-next]') && cur < 11) { cur++; seen.add(cur); draw(); }
  });
  draw();
}

function downtimeStackHTML() {
  return `<div class="card card--pad" data-dts><div class="row row--between row--wrap"><div><span class="eyebrow">Case study · T-108</span><h3 style="font-size:var(--fs-lg);margin-top:4px">Where did <span data-dt-total class="num">31</span> hours go?</h3></div>
    <label class="row small" style="cursor:pointer"><input type="checkbox" data-dt-fix style="width:18px;height:18px;accent-color:var(--primary)"> Apply coordinator fixes</label></div>
    <div class="stackbar mt-4" style="height:28px;border-radius:8px" data-dt-bar></div><div class="legend mt-3" data-dt-legend></div>
    <p class="small mt-4" data-dt-note></p></div>`;
}
function mountDowntimeStack(el) {
  const segs = [['Tow / vendor arrival', 2, 2, 'var(--ig-1)'], ['Waiting for shop', 9, 2, 'var(--warning-strong)'], ['Diagnosis', 2, 2, 'var(--steel-500)'], ['Approval wait', 11, 1, 'var(--critical)'], ['Parts', 1, 1, 'var(--ig-3)'], ['Repair', 4, 4, 'var(--success)'], ['Waiting for driver', 2, 0, 'var(--slate-400)']];
  const box = $('[data-dts]', el) || el;
  const draw = (fix) => {
    const vals = segs.map((s) => (fix ? s[2] : s[1])); const total = vals.reduce((a, b) => a + b, 0);
    const bar = $('[data-dt-bar]', box);
    if (!bar.children.length) bar.innerHTML = segs.map((s) => `<span style="background:${s[3]}" title="${s[0]}"></span>`).join('');
    Array.from(bar.children).forEach((c, i) => { c.style.flexGrow = vals[i]; });
    $('[data-dt-legend]', box).innerHTML = segs.map((s, i) => `<span><i style="background:${s[3]}"></i>${s[0]} · <strong class="num">${vals[i]}h</strong></span>`).join('');
    $('[data-dt-total]', box).textContent = total;
    $('[data-dt-note]', box).innerHTML = fix ? `<strong style="color:var(--success)">${31 - total} hours saved</strong> by choosing a shop with capacity, routing approval immediately (with after-hours coverage), and scheduling driver pickup before release.` : 'Only 7 of 31 hours were actual diagnosis and repair work. Toggle the fixes to see what the coordinator can control.';
  };
  $('[data-dt-fix]', box).addEventListener('change', (e) => draw(e.target.checked));
  draw(false);
}

function lifecycleHTML() {
  return `<div class="card card--pad" data-life><div class="row row--between row--wrap"><div><span class="eyebrow">Illustrative lifecycle</span><h3 style="font-size:var(--fs-lg);margin-top:4px">Annual maintenance cost vs. vehicle value</h3></div>
    <div class="legend"><span><i style="background:var(--critical)"></i>Maintenance cost / yr</span><span><i style="background:var(--primary)"></i>Estimated value</span></div></div>
    <svg viewBox="0 0 600 240" style="width:100%;height:auto;margin-top:12px" role="img" aria-label="Line chart: maintenance cost rises each year while vehicle value falls." data-life-svg></svg>
    <div class="field mt-4"><label for="lifeYear">Vehicle age: <strong data-life-year class="num">5</strong> years</label><input type="range" id="lifeYear" min="1" max="10" value="5" style="accent-color:var(--primary)"></div>
    <div class="grid grid--3 mt-4" data-life-out></div><p class="xs muted mt-3">Figures are illustrative only — actual costs depend on equipment, duty cycle and maintenance history.</p></div>`;
}
function mountLifecycle(el) {
  const cost = [4, 5, 6.5, 8, 10, 12.5, 15.5, 19, 23, 28]; const value = [120, 98, 82, 68, 56, 46, 38, 31, 25, 20];
  const W = 600, H = 240, pl = 44, pr = 16, pt = 12, pb = 28; const maxV = 130;
  const xs = (i) => pl + (i * (W - pl - pr)) / 9; const ys = (v) => pt + (1 - v / maxV) * (H - pt - pb);
  const line = (arr) => arr.map((v, i) => `${xs(i).toFixed(1)},${ys(v).toFixed(1)}`).join(' ');
  const svg = $('[data-life-svg]', el);
  svg.innerHTML = `${[0, 30, 60, 90, 120].map((v) => `<line x1="${pl}" x2="${W - pr}" y1="${ys(v)}" y2="${ys(v)}" stroke="var(--border)" stroke-width="1"/><text x="${pl - 8}" y="${ys(v) + 4}" text-anchor="end" font-size="11" fill="var(--muted)" font-family="var(--font-mono)">$${v}k</text>`).join('')}
    ${cost.map((_, i) => `<text x="${xs(i)}" y="${H - 8}" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="var(--font-mono)">${i + 1}</text>`).join('')}
    <polyline points="${line(value)}" fill="none" stroke="var(--primary)" stroke-width="2.5" pathLength="100" stroke-dasharray="100" style="--dash:100;animation:draw 1s var(--ease-out) both"/>
    <polyline points="${line(cost)}" fill="none" stroke="var(--critical)" stroke-width="2.5" pathLength="100" stroke-dasharray="100" style="--dash:100;animation:draw 1s .15s var(--ease-out) both"/>
    <g data-life-marker style="transition:transform var(--dur-4) var(--ease-out)"><line x1="0" x2="0" y1="${pt}" y2="${H - pb}" stroke="var(--text)" stroke-dasharray="3 4" opacity=".5"/><circle data-mc r="5" fill="var(--critical)" stroke="var(--surface)" stroke-width="2"/><circle data-mv r="5" fill="var(--primary)" stroke="var(--surface)" stroke-width="2"/></g>`;
  const draw = (yr) => {
    const i = yr - 1; const m = $('[data-life-marker]', el);
    m.style.transform = `translateX(${xs(i)}px)`;
    $('[data-mc]', el).setAttribute('cy', ys(cost[i])); $('[data-mv]', el).setAttribute('cy', ys(value[i]));
    $('[data-life-year]', el).textContent = yr;
    const ratio = cost[i] / value[i];
    $('[data-life-out]', el).innerHTML = `<div class="kpi"><div class="kpi__label">Maint. cost / yr</div><div class="kpi__value" style="font-size:1.35rem">$${cost[i]}k</div></div><div class="kpi"><div class="kpi__label">Est. value</div><div class="kpi__value" style="font-size:1.35rem">$${value[i]}k</div></div><div class="kpi ${ratio > 0.4 ? 'kpi--critical' : ''}"><div class="kpi__label">Cost ÷ value</div><div class="kpi__value" style="font-size:1.35rem">${pct(ratio)}%</div><div class="kpi__delta ${ratio > 0.4 ? 'down' : ''}">${ratio > 0.4 ? 'Replacement review zone' : 'Keep & maintain'}</div></div>`;
  };
  $('#lifeYear', el).addEventListener('input', (e) => draw(+e.target.value));
  draw(5);
}

const KPI_DATA = {
  May: { avail: 95.1, cpm: 0.118, pm: 93, repeat: 6.2, mtbf: 3420, mttr: 19.5, causes: { Aftertreatment: 120, Engine: 88, Brakes: 64, Tires: 48, Electrical: 40, Other: 30 } },
  June: { avail: 93.4, cpm: 0.131, pm: 86, repeat: 9.8, mtbf: 3050, mttr: 24.1, causes: { Aftertreatment: 190, Engine: 70, Brakes: 52, Tires: 44, Electrical: 38, Other: 36 } }
};
const KPI_VENDORS = [['Dealer C', 14, 22.5, 4, '+3%'], ['Shop B (Independent)', 21, 18.0, 14, '+11%'], ['Mobile A', 32, 3.1, 9, '+2%'], ['Fleet Center East', 11, 16.4, 5, '0%']];
function kpiHTML() {
  return `<div class="card" data-kpi><div class="card__head"><h3>${icon('bar')} Fleet KPI dashboard</h3><div class="tablist" role="tablist" aria-label="Period">${Object.keys(KPI_DATA).map((p, i) => `<button type="button" class="tab" role="tab" data-period="${p}" aria-selected="${i === 1}">${p}</button>`).join('')}</div></div><div class="card__body" data-kpi-body></div></div>`;
}
function mountKpi(el) {
  const body = $('[data-kpi-body]', el);
  const draw = (p) => {
    const d = KPI_DATA[p]; const prev = p === 'June' ? KPI_DATA.May : null;
    const delta = (k, better) => { if (!prev) return ''; const diff = d[k] - prev[k]; const good = better === 'up' ? diff >= 0 : diff <= 0; return `<div class="kpi__delta ${good ? 'up' : 'down'}">${diff > 0 ? '▲' : '▼'} ${Math.abs(diff).toFixed(k === 'cpm' ? 3 : 1)} vs May</div>`; };
    const maxC = Math.max(...Object.values(d.causes));
    $$('[data-period]', el).forEach((b) => b.setAttribute('aria-selected', b.dataset.period === p));
    body.innerHTML = `<div class="kpis">
      <div class="kpi"><div class="kpi__label">Availability</div><div class="kpi__value">${d.avail}<small>%</small></div>${delta('avail', 'up')}</div>
      <div class="kpi"><div class="kpi__label">Cost / mile</div><div class="kpi__value">$${d.cpm.toFixed(3)}</div>${delta('cpm', 'down')}</div>
      <div class="kpi"><div class="kpi__label">PM compliance</div><div class="kpi__value">${d.pm}<small>%</small></div>${delta('pm', 'up')}</div>
      <div class="kpi"><div class="kpi__label">Repeat rate</div><div class="kpi__value">${d.repeat}<small>%</small></div>${delta('repeat', 'down')}</div>
      <div class="kpi"><div class="kpi__label">MTBF</div><div class="kpi__value">${fmtNum(d.mtbf)}<small> h</small></div>${delta('mtbf', 'up')}</div>
      <div class="kpi"><div class="kpi__label">MTTR</div><div class="kpi__value">${d.mttr}<small> h</small></div>${delta('mttr', 'down')}</div></div>
      <div class="grid grid--2 mt-6" style="gap:var(--sp-6)">
        <div><h4 class="mb-4">Downtime hours by system</h4><div class="stack-sm">${Object.entries(d.causes).sort((a, b) => b[1] - a[1]).map(([k, v], i) => `<div class="score-bars__row" style="grid-template-columns:110px 1fr 48px"><span class="small">${k}</span>${progressBar(v / maxC, { color: i === 0 ? 'var(--critical)' : 'var(--steel-500)', label: k })}<span class="num small">${v}h</span></div>`).join('')}</div></div>
        <div><h4 class="mb-4">Vendor performance (${p})</h4><div class="table-wrap"><table class="table"><thead><tr><th>Vendor</th><th class="num">Jobs</th><th class="num">Avg TAT</th><th class="num">Comeback</th><th class="num">vs Est.</th></tr></thead><tbody>${KPI_VENDORS.map(([n, j, tat, cb, ve]) => `<tr><td><strong>${n}</strong></td><td class="num">${j}</td><td class="num">${tat}h</td><td class="num">${cb >= 10 ? `<span class="badge badge--critical">${cb}%</span>` : cb + '%'}</td><td class="num">${ve}</td></tr>`).join('')}</tbody></table></div></div>
      </div>
      ${prev ? `<div class="callout callout--warning mt-6"><span class="callout__icon">${icon('bulb')}</span><div><h4>Insights</h4><p>Aftertreatment downtime rose 58% (120 → 190 h) — T-120 alone logged 64 h. PM compliance fell 7 points and MTTR rose 4.6 h, consistent with approval delays. Shop B's 14% comeback rate is the highest on the board. Priorities: RCA on T-120, approval backup, vendor review with Shop B.</p></div></div>` : `<p class="small muted mt-6">Select June to compare against this baseline.</p>`}`;
  };
  $$('[data-period]', el).forEach((b) => b.addEventListener('click', () => draw(b.dataset.period)));
  draw('June');
}

const VENDORS = [['Dealer C', { time: 6, cost: 4, quality: 9, comm: 8, coverage: 7 }], ['Shop B (Independent)', { time: 8, cost: 8, quality: 5, comm: 5, coverage: 4 }], ['Mobile A', { time: 9, cost: 6, quality: 6, comm: 7, coverage: 9 }], ['Fleet Center East', { time: 7, cost: 7, quality: 8, comm: 8, coverage: 5 }]];
const CRIT = [['time', 'Repair time'], ['cost', 'Cost'], ['quality', 'Quality (comebacks)'], ['comm', 'Communication'], ['coverage', 'Coverage']];
function vendorScoreHTML() {
  return `<div class="card" data-vs><div class="card__head"><h3>${icon('star')} Vendor scorecard</h3><span class="small muted">Scores 0–10 · weights 0–5</span></div>
    <div class="card__body grid grid--2" style="gap:var(--sp-6)"><div class="stack">${CRIT.map(([k, l]) => `<div class="field"><label for="w-${k}" class="row row--between"><span>${l}</span><strong class="num" data-wv="${k}"></strong></label><input type="range" id="w-${k}" data-w="${k}" min="0" max="5" value="${{ time: 3, cost: 3, quality: 4, comm: 2, coverage: 2 }[k]}" style="accent-color:var(--primary)"></div>`).join('')}</div>
    <div><h4 class="mb-4">Weighted ranking</h4><ol class="stack-sm" style="list-style:none;padding:0" data-vs-out></ol></div></div>
    <div class="table-wrap" style="border-radius:0 0 var(--r-lg) var(--r-lg);border-width:1px 0 0"><table class="table"><thead><tr><th>Vendor</th>${CRIT.map(([, l]) => `<th class="num">${l}</th>`).join('')}</tr></thead><tbody>${VENDORS.map(([n, s]) => `<tr><td><strong>${n}</strong></td>${CRIT.map(([k]) => `<td class="num">${s[k]}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
}
function mountVendorScore(el) {
  const draw = () => {
    const w = {}; $$('[data-w]', el).forEach((i) => { w[i.dataset.w] = +i.value; $(`[data-wv="${i.dataset.w}"]`, el).textContent = i.value; });
    const sw = Object.values(w).reduce((a, b) => a + b, 0) || 1;
    const ranked = VENDORS.map(([n, s]) => [n, CRIT.reduce((a, [k]) => a + s[k] * w[k], 0) / sw]).sort((a, b) => b[1] - a[1]);
    $('[data-vs-out]', el).innerHTML = ranked.map(([n, sc], i) => `<li class="card card--pad-sm" style="${i === 0 ? 'border-color:var(--success)' : ''}"><div class="row row--between"><span><span class="mono muted">#${i + 1}</span> <strong>${n}</strong></span><span class="num" style="font-weight:600">${sc.toFixed(1)}</span></div>${progressBar(sc / 10, { cls: 'progress--sm mt-2', color: i === 0 ? 'var(--success)' : 'var(--steel-500)', label: n })}</li>`).join('');
  };
  el.addEventListener('input', draw); draw();
}

function mountWidgets(root) {
  $$('[data-widget]', root).forEach((el) => {
    if (el.dataset.mounted) return; el.dataset.mounted = '1';
    const w = el.dataset.widget;
    try {
      if (w === 'truck') { el.innerHTML = truckWidgetHTML(); mountTruck(el); }
      else if (w === 'workflow') { el.innerHTML = workflowHTML(); mountWorkflow(el); }
      else if (w === 'fleet') { el.innerHTML = fleetBoardHTML(); staggerChildren($('.stagger', el)); mountFleet(el); }
      else if (w === 'downtimeStack') { el.innerHTML = downtimeStackHTML(); mountDowntimeStack(el); }
      else if (w === 'lifecycle') { el.innerHTML = lifecycleHTML(); mountLifecycle(el); }
      else if (w === 'kpi') { el.innerHTML = kpiHTML(); mountKpi(el); }
      else if (w === 'invoice') { el.innerHTML = invoiceWidgetHTML(); mountInvoiceWidget(el); }
      else if (w === 'gauges') { el.innerHTML = gaugesHTML(); mountGauges(el); }
      else if (w === 'tires') { el.innerHTML = tiresHTML(); mountTires(el); }
      else if (w === 'exhaust') { el.innerHTML = exhaustHTML(); mountExhaust(el); }
      else if (w === 'vendorScore') { el.innerHTML = vendorScoreHTML(); mountVendorScore(el); }
      else if (SIMS[w]) SIMS[w](el);
      else if (w.startsWith('calc:')) { const id = w.slice(5); el.innerHTML = calcHTML(id); mountCalc($('[data-calc]', el)); }
      else if (w.startsWith('tree:')) { const tr = TREES[w.slice(5)]; el.innerHTML = treeHTML(tr); mountTree($('[data-tree]', el), tr); }
      else if (w.startsWith('scenario:')) { const s = SCENARIOS.find((x) => x.id === w.slice(9)); el.innerHTML = scenarioHTML(s); mountScenario($('[data-scen]', el), s); }
    } catch (err) {
      console.error('Widget failed:', w, err);
      el.innerHTML = stateBlock({ ic: 'alert', title: 'This interactive element could not load', text: 'Try reloading the page. The rest of the lesson is still available.', error: true });
    }
  });
}

/* ---------- Glossary ---------- */
const GL_CAT_ICON = { Components: 'wrench', Emissions: 'activity', Maintenance: 'list-check', Diagnostics: 'zap', Regulatory: 'shield', Operations: 'route', Finance: 'dollar', Documentation: 'file' };
function viewGlossary(termParam) {
  const cats = ['All', ...new Set(GLOSSARY.map((g) => g.cat))].sort((a, b) => (a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b)));
  const sorted = GLOSSARY.slice().sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }));
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const has = new Set(sorted.map((g) => g.term[0].toUpperCase()));
  const html = `<div class="page page--narrow">${pageHead({ eyebrow: `${icon('book', 'icon--sm')} Reference`, title: 'Maintenance Glossary', text: `${GLOSSARY.length} essential terms with definitions, plain-language explanations, real-world examples and related terms.` })}
    <div class="gl-toolbar">
      <div class="input-group gl-search"><label class="sr-only" for="glQ">Search glossary</label>${icon('search')}<input class="input" id="glQ" type="search" placeholder="Search terms, abbreviations or definitions…" autocomplete="off"></div>
      <div class="row row--wrap" role="group" aria-label="Filter by category">${cats.map((c) => `<button type="button" class="chip" data-cat="${c}" aria-pressed="${c === 'All'}">${c}</button>`).join('')}</div>
      <div class="gl-letters" role="group" aria-label="Jump to letter">${letters.map((l) => `<button type="button" data-letter="${l}" ${has.has(l) ? '' : 'disabled'} aria-pressed="false">${l}</button>`).join('')}</div>
    </div>
    <p class="small muted mb-4" data-gl-count aria-live="polite"></p>
    <div class="gl-list" data-gl-list></div></div>`;
  return {
    html, title: 'Glossary', nav: 'glossary', crumbs: [['Glossary']],
    after: (v) => {
      const gs = { q: '', cat: 'All', letter: '' };
      const list = $('[data-gl-list]', v);
      const hl = (s) => { const q = gs.q.trim(); if (!q) return esc(s); const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig'); return esc(s).replace(re, '<mark>$1</mark>'); };
      const itemHTML = (g) => {
        const pid = 'gl-' + g.term.replace(/[^a-z0-9]/gi, '');
        const acronym = /^[A-Z][A-Z /]+$/.test(g.term);
        return `<div class="gl-item" id="${pid}-item" data-term="${esc(g.term)}"><h2 class="acc-heading"><button type="button" class="gl-item__head" aria-expanded="false" aria-controls="${pid}"><span class="gl-item__abbr" aria-hidden="true">${acronym ? esc(g.term) : icon(GL_CAT_ICON[g.cat] || 'book', 'icon--sm')}</span><span class="grow"><span class="gl-item__term">${hl(g.term)}</span><br><span class="gl-item__full">${hl(g.full)}</span></span><span class="badge badge--outline">${g.cat}</span>${icon('chev-d')}</button></h2>
          <div class="acc-panel" id="${pid}" role="region"><div><div class="acc-panel__inner">
            ${LIB_TERM.has(g.term.toLowerCase()) ? (() => { const vx = LIB_TERM.get(g.term.toLowerCase()); return `<a class="gl-visual" href="#/library/${vx.id}"><span class="gl-visual__img">${libThumb(vx)}</span><span><strong>See what it looks like</strong><span class="small muted">${esc(vx.name)} in the Visual Library</span></span>${icon('chev-r', 'icon--sm')}</a>`; })() : ''}
            <div class="gl-detail"><div><h3>${icon('book')} Definition</h3><p>${hl(g.def)}</p></div><div><h3>${icon('bulb')} In plain terms</h3><p>${hl(g.simple)}</p></div><div><h3>${icon('truck')} Real-world example</h3><p>${hl(g.example)}</p></div></div>
            <div class="gl-related"><span class="xs muted" style="font-weight:600;text-transform:uppercase;letter-spacing:.08em">Related</span>${g.related.map((r) => { const rg = findTerm(r); return rg ? `<button type="button" class="chip" data-goto="${esc(rg.term)}">${esc(rg.term)}</button>` : `<span class="chip" style="opacity:.6">${esc(r)}</span>`; }).join('')}</div>
          </div></div></div></div>`;
      };
      const draw = () => {
        const q = gs.q.trim().toLowerCase();
        const res = sorted.filter((g) => (gs.cat === 'All' || g.cat === gs.cat) && (!gs.letter || g.term[0].toUpperCase() === gs.letter) && (!q || `${g.term} ${g.full} ${g.def} ${g.simple}`.toLowerCase().includes(q)));
        $('[data-gl-count]', v).textContent = `${res.length} term${res.length === 1 ? '' : 's'}`;
        list.innerHTML = res.length ? res.map(itemHTML).join('') : stateBlock({ ic: 'search', title: 'No matching terms', text: `Nothing matches "${gs.q}". Try an abbreviation like DPF or a word like "brake".`, action: '<button type="button" class="btn btn--sm" data-gl-clear>Clear search</button>' });
        const c = $('[data-gl-clear]', list); if (c) c.addEventListener('click', () => { gs.q = ''; gs.letter = ''; gs.cat = 'All'; $('#glQ', v).value = ''; syncChips(); draw(); });
      };
      const syncChips = () => { $$('[data-cat]', v).forEach((b) => b.setAttribute('aria-pressed', b.dataset.cat === gs.cat)); $$('[data-letter]', v).forEach((b) => b.setAttribute('aria-pressed', b.dataset.letter === gs.letter)); };
      const openTerm = (term, scroll) => {
        let item = $$('.gl-item', list).find((x) => x.dataset.term === term);
        if (!item) { gs.q = ''; gs.cat = 'All'; gs.letter = ''; $('#glQ', v).value = ''; syncChips(); draw(); item = $$('.gl-item', list).find((x) => x.dataset.term === term); }
        if (!item) return;
        setOpen(item, true);
        if (scroll) { item.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' }); item.classList.remove('is-flash'); void item.offsetWidth; item.classList.add('is-flash'); }
      };
      const setOpen = (item, open) => {
        item.classList.toggle('is-open', open); $('.gl-item__head', item).setAttribute('aria-expanded', open);
        if (open && !state.glossaryViewed[item.dataset.term]) { state.glossaryViewed[item.dataset.term] = 1; save(); checkAchievements(); }
      };
      $('#glQ', v).addEventListener('input', (e) => { gs.q = e.target.value; gs.letter = ''; syncChips(); draw(); });
      $$('[data-cat]', v).forEach((b) => b.addEventListener('click', () => { gs.cat = b.dataset.cat; syncChips(); draw(); }));
      $$('[data-letter]', v).forEach((b) => b.addEventListener('click', () => { gs.letter = gs.letter === b.dataset.letter ? '' : b.dataset.letter; syncChips(); draw(); }));
      list.addEventListener('click', (e) => {
        const g = e.target.closest('[data-goto]'); if (g) { openTerm(g.dataset.goto, true); history.replaceState(null, '', `#/glossary/${encodeURIComponent(g.dataset.goto)}`); return; }
        const h = e.target.closest('.gl-item__head'); if (h) { const it = h.closest('.gl-item'); setOpen(it, !it.classList.contains('is-open')); }
      });
      draw();
      if (termParam) { const t = findTerm(termParam); if (t) setTimeout(() => openTerm(t.term, true), 60); }
    }
  };
}

/* ---------- Bookmarks ---------- */
function viewBookmarks() {
  const items = state.bookmarks.map((k) => LESSON_MAP.get(k)).filter(Boolean);
  const html = `<div class="page page--narrow">${pageHead({ eyebrow: `${icon('bookmark', 'icon--sm')} Reference`, title: 'Bookmarks', text: 'Lessons you saved for quick reference.' })}
    ${items.length ? `<div class="stack-sm stagger">${items.map((x) => `<div class="card card--hover rec-card" style="padding:var(--sp-4) var(--sp-5)"><span class="rec-card__icon" style="width:40px;height:40px">${icon('book')}</span><a class="grow" href="${lessonHref(x)}" style="color:inherit;text-decoration:none"><strong>${esc(x.l.title)}</strong><br><span class="small muted">${x.t.level} · Module ${x.m.id.slice(1)}: ${esc(x.m.title)}</span></a><button type="button" class="btn-icon" data-unbm="${x.key}" aria-label="Remove bookmark: ${esc(x.l.title)}">${icon('x')}</button></div>`).join('')}</div>`
      : stateBlock({ ic: 'bookmark', title: 'No bookmarks yet', text: 'Use the bookmark button on any lesson to save it here for quick reference.', action: `<a class="btn btn--primary" href="#/curriculum">Browse curriculum</a>` })}</div>`;
  return {
    html, title: 'Bookmarks', nav: 'bookmarks', crumbs: [['Bookmarks']],
    after: (v) => $$('[data-unbm]', v).forEach((b) => b.addEventListener('click', () => { state.bookmarks = state.bookmarks.filter((k) => k !== b.dataset.unbm); touch('bm:' + b.dataset.unbm); save(); toast({ title: 'Bookmark removed', icon: 'bookmark', timeout: 2000 }); router(); }))
  };
}

/* ---------- Achievements ---------- */
function viewAchievements() {
  const earned = ACHIEVEMENTS.filter((a) => state.achievements[a.id]).length;
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('award', 'icon--sm')} Progress`, title: 'Certificates & achievements', text: 'Certificates are awarded for passing each track\'s final assessment (75%+). Achievements mark milestones along the way.', right: ring(earned / ACHIEVEMENTS.length, { size: 96, stroke: 8, label: `${earned}/${ACHIEVEMENTS.length}`, fs: 18 }) })}
    <div class="grid grid--3 stagger">${TRACKS.map((t) => { const f = state.finals[t.id]; const ok = f && f.passed; return `<div class="card cert-card ${ok ? 'is-earned' : ''}"><span class="cert-card__seal">${icon(ok ? 'award' : 'lock', 'icon--lg')}</span><div class="grow"><span class="eyebrow">${t.level} certificate</span><h2 style="font-size:var(--fs-md);margin:2px 0 4px">${esc(t.title)}</h2><p class="small">${ok ? `Earned · ${pct(f.score)}%` : f ? `Best ${pct(f.score)}% — 75% needed` : 'Not yet attempted'}</p></div>${ok ? `<button type="button" class="btn btn--sm" data-cert="${t.id}">View</button>` : `<a class="btn btn--sm" href="#/final/${t.id}">${f ? 'Retry' : 'Start'}</a>`}</div>`; }).join('')}</div>
    <div class="section-head"><h2>Achievements</h2><span class="small muted">${earned} of ${ACHIEVEMENTS.length} earned</span></div>
    <div class="ach-grid stagger">${ACHIEVEMENTS.map(achHTML).join('')}</div>
    <div class="section-head"><h2>Data</h2></div>
    <div class="card card--pad row row--between row--wrap"><div>${CLOUD.user ? `<strong>Your progress syncs to ${esc(CLOUD.user.email || 'your account')}.</strong><p class="small">It's saved on this device and in your account, so you can continue on any device where you sign in. <a href="#/privacy">How your data is handled</a>.</p>` : `<strong>Your progress is stored in this browser.</strong><p class="small">Clearing browser data or switching devices will reset it. <button type="button" class="link-btn" data-cloud="in">Sign in with Google</button> to keep it in sync across devices. <a href="#/privacy">Privacy</a>.${storageOk ? '' : ' Storage is currently unavailable — progress will not persist.'}</p>`}</div><div class="row row--wrap">${CLOUD.user ? `<button type="button" class="btn btn--ghost" data-delete-account>${icon('x-circle')} Delete my account</button>` : ''}<button type="button" class="btn btn--danger" data-reset>${icon('rotate')} Reset all progress</button></div></div>
  </div>`;
  return {
    html, title: 'Achievements', nav: 'achievements', crumbs: [['Achievements']],
    after: (v) => {
      $$('[data-cert]', v).forEach((b) => b.addEventListener('click', () => showCertificate(TRACK_BY_ID[b.dataset.cert])));
      $$('[data-delete-account]', v).forEach((b) => b.addEventListener('click', confirmDeleteAccount));
      $('[data-reset]', v).addEventListener('click', () => openModal({
        title: 'Reset all progress?', body: `<p>This permanently clears completed lessons, quiz scores, certificates, bookmarks and achievements ${CLOUD.user ? 'on all your devices: in this browser and in your account' : 'stored in this browser'}. This cannot be undone.</p>`,
        foot: '<button class="btn btn--ghost" data-close>Cancel</button><button class="btn btn--danger" id="doReset">Reset everything</button>',
        onOpen: (m, close) => $('#doReset', m).addEventListener('click', () => { const theme = state.theme; state = JSON.parse(JSON.stringify(DEFAULT_STATE)); state.theme = theme; state.resetAt = Date.now(); save(); close(); toast({ title: 'Progress reset', text: 'Starting fresh.' }); go('#/dashboard'); })
      }));
    }
  };
}

/* ---------- 404 ---------- */
function viewNotFound() {
  return { html: `<div class="page">${stateBlock({ ic: 'alert', title: 'Page not found', text: 'That page doesn\'t exist or may have moved. Let\'s get you back on route.', action: '<a class="btn btn--primary" href="#/dashboard">Go to dashboard</a>', error: true })}</div>`, title: 'Not found', nav: '', crumbs: [['Not found']] };
}

/* ---------- Command palette search ---------- */
const SEARCH_PAGES = [['Dashboard', '#/dashboard', 'grid'], ['Software & Platforms', '#/software', 'monitor'], ...SOFTWARE.map((s) => [`${s.name} (${s.kind})`, swHref(s), s.icon]), ['Visual Library', '#/library', 'image'], ['Curriculum', '#/curriculum', 'layers'], ['Scenario Simulator', '#/scenarios', 'message'], ['Decision Trees', '#/trees', 'branch'], ['Practical Exercises', '#/exercises', 'clipboard'], ['Flashcards', '#/flashcards', 'cards'], ['Calculators', '#/calculators', 'calc'], ['Fleet Board', '#/fleet', 'truck'], ['Glossary', '#/glossary', 'book'], ['Quick Reference', '#/reference', 'file'], ['Bookmarks', '#/bookmarks', 'bookmark'], ['Achievements', '#/achievements', 'award'], ['Privacy', '#/privacy', 'shield'], ['Review my mistakes', '#/review', 'rotate'], ['Simulations: DVIR, parts, warranty and software practice', '#/simulations', 'activity'], ['Trainer groups', '#/trainer', 'users'], ['Check a certificate', '#/verify', 'award']];
function openSearch() {
  if (modalStack.length) return;
  openModal({
    bare: true, size: 'modal--palette', label: 'Search the academy',
    body: `<div class="palette-input">${icon('search')}<label class="sr-only" for="palQ">Search lessons, glossary and tools</label><input id="palQ" type="text" role="combobox" aria-expanded="true" aria-controls="palRes" aria-autocomplete="list" placeholder="Search lessons, terms, tools…" autocomplete="off" autofocus><kbd>Esc</kbd></div>
      <div class="palette-results" id="palRes" role="listbox" aria-label="Results"></div>
      <div class="palette-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> navigate</span><span><kbd>Enter</kbd> open</span><span><kbd>Esc</kbd> close</span></div>`,
    onOpen: (m, close) => {
      const inp = $('#palQ', m); const res = $('#palRes', m); let active = 0; let flat = [];
      const draw = () => {
        const q = inp.value.trim().toLowerCase();
        const lessons = LESSONS.map((x) => ({ x, s: !q ? 0 : x.l.title.toLowerCase().includes(q) ? 3 : x.m.title.toLowerCase().includes(q) ? 2 : ((x.l.objectives || []).join(' ') + ' ' + (x.l.takeaways || []).join(' ')).toLowerCase().includes(q) ? 1 : -1 })).filter((r) => r.s >= 0);
        const L = (q ? lessons.sort((a, b) => b.s - a.s) : lessons.filter((r) => !isDone(r.x.key))).slice(0, q ? 7 : 4).map((r) => ({ href: lessonHref(r.x), ic: 'book', t: r.x.l.title, s: `${r.x.t.level} · M${r.x.m.id.slice(1)} ${r.x.m.title}`, b: isDone(r.x.key) ? 'Done' : '' }));
        const G = GLOSSARY.filter((g) => q && (`${g.term} ${g.full}`.toLowerCase().includes(q) || g.def.toLowerCase().includes(q))).sort((a, b) => (b.term.toLowerCase().startsWith(q) ? 1 : 0) - (a.term.toLowerCase().startsWith(q) ? 1 : 0)).slice(0, 6).map((g) => ({ href: `#/glossary/${encodeURIComponent(g.term)}`, ic: 'book', t: g.term, s: g.full, b: 'Term' }));
        const P = SEARCH_PAGES.filter(([t]) => !q || t.toLowerCase().includes(q)).slice(0, q ? 5 : 6).map(([t, href, ic]) => ({ href, ic, t, s: 'Go to page' }));
        const V = LIBRARY.filter((x) => q && `${x.name} ${(x.terms || []).join(' ')}`.toLowerCase().includes(q)).slice(0, 5).map((x) => ({ href: `#/library/${x.id}`, ic: 'image', t: x.name, s: x.short, b: 'Visual' }));
        const groups = [['Lessons', L], ['Visual Library', V], ['Glossary', G], ['Pages & tools', P]].filter(([, a]) => a.length);
        flat = groups.flatMap(([, a]) => a); active = clamp(active, 0, Math.max(0, flat.length - 1));
        let n = -1;
        res.innerHTML = flat.length ? groups.map(([label, a]) => `<div class="palette-group" role="presentation">${label}</div>${a.map((r) => { n++; return `<a class="palette-item ${n === active ? 'is-active' : ''}" role="option" id="pal-${n}" aria-selected="${n === active}" href="${r.href}" data-n="${n}">${icon(r.ic)}<span class="grow"><span class="palette-item__title">${esc(r.t)}</span><br><span class="palette-item__sub">${esc(r.s)}</span></span>${r.b ? `<span class="badge badge--outline">${r.b}</span>` : ''}</a>`; }).join('')}`).join('')
          : `<div class="center" style="padding:var(--sp-8)"><p class="muted">No results for "${esc(inp.value)}"</p></div>`;
        inp.setAttribute('aria-activedescendant', flat.length ? `pal-${active}` : '');
      };
      inp.addEventListener('input', () => { active = 0; draw(); });
      // Lesson objectives and takeaways are searched too: load them, then refresh.
      if (!hasContent()) loadContent().then(() => { if (inp.isConnected) draw(); }).catch((e) => console.warn('Search: lesson text failed to load:', e && e.message));
      inp.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(flat.length - 1, active + 1); draw(); $('.palette-item.is-active', res)?.scrollIntoView({ block: 'nearest' }); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(0, active - 1); draw(); $('.palette-item.is-active', res)?.scrollIntoView({ block: 'nearest' }); }
        else if (e.key === 'Enter' && flat[active]) { e.preventDefault(); close(); go(flat[active].href); }
      });
      res.addEventListener('mousemove', (e) => { const it = e.target.closest('[data-n]'); if (it && +it.dataset.n !== active) { active = +it.dataset.n; $$('.palette-item', res).forEach((x) => { const on = +x.dataset.n === active; x.classList.toggle('is-active', on); x.setAttribute('aria-selected', on); }); } });
      res.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
      draw();
    }
  });
}

/* ---------- Global delegated interactions ---------- */
function onDocClick(e) {
  // "Try again" style buttons (no inline onclick: the Content-Security-Policy blocks it).
  if (e.target.closest('[data-reload]')) { location.reload(); return; }
  const acc = e.target.closest('.acc-trigger');
  if (acc) {
    const item = acc.closest('.acc-item'); const open = !item.classList.contains('is-open');
    item.classList.toggle('is-open', open); acc.setAttribute('aria-expanded', open);
  }
  const tl = e.target.closest('.tl-step__btn');
  if (tl) { const st = tl.closest('.tl-step'); const open = !st.classList.contains('is-open'); st.classList.toggle('is-open', open); st.classList.add('is-seen'); tl.setAttribute('aria-expanded', open); }
  const tab = e.target.closest('.tabs .tab');
  if (tab) selectTab(tab);
  const term = e.target.closest('.term[data-term]');
  if (term) { const vx = LIB_TERM.get(term.dataset.term.toLowerCase()); if (vx) openTermVisual(findTerm(term.dataset.term), vx); else go(`#/glossary/${encodeURIComponent(term.dataset.term)}`); }
  const cp = e.target.closest('[data-copy]');
  if (cp) {
    const text = cp.closest('.msg').querySelector('.msg__body').textContent;
    const ok = () => toast({ kind: 'success', title: 'Copied to clipboard', timeout: 1800, icon: 'copy' });
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(ok, () => toast({ kind: 'warning', title: 'Copy not available' })); else toast({ kind: 'warning', title: 'Copy not available' });
  }
}
function selectTab(tab) {
  const list = tab.closest('[role="tablist"]'); const tabs = $$('[role="tab"]', list);
  tabs.forEach((t) => { const on = t === tab; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; const p = document.getElementById(t.getAttribute('aria-controls')); if (p) p.hidden = !on; });
}
function onDocKey(e) {
  const typing = e.target.matches('input, textarea, select, [contenteditable]');
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); return; }
  if (e.key === '/' && !typing && !modalStack.length) { e.preventDefault(); openSearch(); return; }
  if (e.key === 'Escape' && $('#sidebar').classList.contains('is-open')) { closeSidebar(); $('#menuBtn').focus(); }
  const tab = e.target.closest && e.target.closest('.tabs [role="tab"]');
  if (tab && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
    const tabs = $$('[role="tab"]', tab.closest('[role="tablist"]')); const i = tabs.indexOf(tab);
    const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length]; selectTab(n); n.focus(); e.preventDefault();
  }
}

/* ---------- PWA: service worker, install prompt, connectivity ---------- */
let deferredInstall = null;
function setupPWA() {
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch((err) => console.warn('Service worker registration failed:', err)); });
    // A new release took over this page (sw.js skips waiting): offer a reload
    // so the open page isn't left running the previous version.
    // (The very first install also fires controllerchange; there was no
    // previous worker then, so nothing is offered.)
    let previous = navigator.serviceWorker.controller, offered = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      const replaced = previous; previous = navigator.serviceWorker.controller;
      if (!replaced || offered) return;
      offered = true;
      toast({ kind: 'info', icon: 'rotate', title: 'A new version is ready', text: 'Reload to get the latest lessons and fixes. Your progress is kept.', timeout: 0, action: { label: 'Reload', onClick: () => location.reload() } });
    });
    // Look for a new release when the student comes back to the tab.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') navigator.serviceWorker.getRegistration().then((r) => r && r.update()).catch(() => {});
    });
  }
  const btn = $('#installBtn');
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredInstall = e; btn.hidden = false; });
  btn.addEventListener('click', async () => {
    if (!deferredInstall) return;
    deferredInstall.prompt();
    const { outcome } = await deferredInstall.userChoice;
    deferredInstall = null; btn.hidden = true;
    if (outcome === 'accepted') toast({ kind: 'success', title: 'Installing MC Academy', text: 'Open it from your home screen or app list.', icon: 'download' });
  });
  window.addEventListener('appinstalled', () => { btn.hidden = true; deferredInstall = null; });
  window.addEventListener('offline', () => toast({ kind: 'warning', title: 'You\'re offline', text: 'Lessons you\'ve opened keep working. Progress still saves on this device.' }));
  window.addEventListener('online', () => toast({ kind: 'success', title: 'Back online', timeout: 2500 }));
}

/* ---------- Boot ---------- */
function boot() {
  applyTheme(document.documentElement.getAttribute('data-theme') || 'light');
  $('#themeBtn').addEventListener('click', () => {
    const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    state.theme = t; save(); applyTheme(t);
  });
  $('#menuBtn').addEventListener('click', openSidebar);
  $('#bottomMenu').addEventListener('click', openSidebar);
  $('#sidebarClose').addEventListener('click', closeSidebar);
  $('#scrim').addEventListener('click', closeSidebar);
  $('#searchBtn').addEventListener('click', openSearch);
  $('.skip-link').addEventListener('click', (e) => { e.preventDefault(); $('#main').focus(); });
  $('#sideNav').addEventListener('click', (e) => { if (e.target.closest('a')) closeSidebar(); });
  document.addEventListener('click', onDocClick);
  document.addEventListener('keydown', onDocKey);
  window.addEventListener('hashchange', router);
  setupPWA();
  setupCloud();
  markActiveDay();
  if (!storageOk) setTimeout(() => toast({ kind: 'warning', title: 'Progress won\'t be saved', text: 'Local storage is unavailable in this browser session.' }), 600);
  router();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();

})();
