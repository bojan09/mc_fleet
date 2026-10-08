
/* ===========================================================================
   REVIEW MY MISTAKES + MODULE CHEAT SHEETS
   Every graded question (lesson checks, module quizzes, platform checks) is
   recorded. A wrong answer puts it in state.missed, due now. Each right
   answer while it is due schedules it again after 1, 3 and then 7 days;
   right on the 7-day review, it leaves the list (spaced repetition). A wrong
   answer starts it over. #/review retries due questions; #/cheatsheet/<track>/<module> is a
   printable one-page summary built from each lesson's takeaways and terms.
   =========================================================================== */
let Q_BANK = null; // question object → { id, label, href, t, m }
function qBank() {
  if (Q_BANK) return Q_BANK;
  Q_BANK = new Map();
  LESSONS.forEach((x) => (x.l.check || []).forEach((q, i) => Q_BANK.set(q, { id: `${x.key}#${i}`, q, label: x.l.title, sub: `${x.t.level} · Module ${x.m.id.slice(1)}: ${x.m.title}`, href: lessonHref(x), t: x.t, m: x.m })));
  SOFTWARE.forEach((s) => s.quiz.forEach((q, i) => Q_BANK.set(q, { id: `sw.${s.id}#${i}`, q, label: s.name, sub: 'Software & Platforms', href: swHref(s) })));
  return Q_BANK;
}
let Q_BY_ID = null;
function qById(id) {
  if (!Q_BY_ID) { Q_BY_ID = new Map(); qBank().forEach((v) => Q_BY_ID.set(v.id, v)); }
  return Q_BY_ID.get(id);
}
const REVIEW_DAYS = [1, 3, 7]; // wait after each right answer; then the question is cleared
const DAY_MS = 864e5;
const dayStart = (t) => { const d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); };
/* Called by gradeQuestion() for every answered question. Entries saved
   before spaced review existed have no box/due: they count as due now. */
function noteAnswer(q, ok) {
  const b = qBank().get(q); if (!b) return;
  const cur = state.missed[b.id];
  if (ok) {
    if (!cur || (cur.due || 0) > Date.now()) return; // not on the list, or not due yet
    const box = (cur.box || 0) + 1;
    if (box > REVIEW_DAYS.length) delete state.missed[b.id];
    else state.missed[b.id] = Object.assign({}, cur, { box, due: dayStart(Date.now()) + REVIEW_DAYS[box - 1] * DAY_MS });
  } else state.missed[b.id] = { n: ((cur || {}).n || 0) + 1, at: Date.now(), box: 0, due: 0 };
  save();
  updateMissedBadge();
}
function updateMissedBadge() { const n = missedCount(); const el = $('#navMissed'); if (el) { el.textContent = n || ''; el.hidden = !n; } }
const missedList = () => Object.keys(state.missed).map((id) => ({ id, ...state.missed[id], b: qById(id) })).filter((x) => x.b);
const isDue = (x) => (x.due || 0) <= Date.now();
const missedCount = () => missedList().filter(isDue).length; // due now (badge, practice card)
function whenText(due) {
  const days = Math.round((dayStart(due) - dayStart(Date.now())) / DAY_MS);
  return days <= 0 ? 'today' : days === 1 ? 'tomorrow' : `in ${days} days`;
}
const stepsHTML = (x) => `<span class="rv-steps" title="Review ${Math.min((x.box || 0) + 1, REVIEW_DAYS.length + 1)} of ${REVIEW_DAYS.length + 1}">${[0, ...REVIEW_DAYS].map((_, k) => `<span class="${k < (x.box || 0) ? 'is-done' : ''}"></span>`).join('')}<span class="sr-only">${x.box || 0} of ${REVIEW_DAYS.length + 1} reviews passed</span></span>`;

function viewReview() {
  const all = missedList();
  const list = all.filter(isDue).sort((a, b) => b.n - a.n || b.at - a.at);
  const later = all.filter((x) => !isDue(x)).sort((a, b) => a.due - b.due);
  const soon = new Map(); later.forEach((x) => { const w = whenText(x.due); soon.set(w, (soon.get(w) || 0) + 1); });
  const byModule = new Map();
  all.forEach((x) => { const k = x.b.m ? `${x.b.t.id}.${x.b.m.id}` : x.b.href; const g = byModule.get(k) || { label: x.b.m ? `${x.b.t.level} · ${x.b.m.title}` : x.b.label, href: x.b.m ? `#/track/${x.b.t.id}` : x.b.href, n: 0, sheet: x.b.m ? `#/cheatsheet/${x.b.t.id}/${x.b.m.id}` : '' }; g.n++; byModule.set(k, g); });
  const weak = [...byModule.values()].sort((a, b) => b.n - a.n).slice(0, 6);
  const html = `<div class="page page--narrow rv">
    ${pageHead({ eyebrow: `${icon('rotate', 'icon--sm')} Practice Lab`, title: 'Review my mistakes', text: 'Every question you answer wrong in a knowledge check, module quiz or platform check lands here. Get it right and it comes back after 1 day, then 3 days, then 7 days. Right every time, and it leaves the list. Spacing reviews out like this helps answers stick.' })}
    ${all.length ? `
      <div class="card card--pad rv-start">
        <div><strong class="rv-start__n num">${list.length}</strong><span>question${list.length === 1 ? '' : 's'} due now</span>${soon.size ? `<div class="small muted rv-start__later">Coming up: ${[...soon].map(([w, n]) => `${n} ${w}`).join(' · ')}</div>` : ''}</div>
        ${list.length ? `<button type="button" class="btn btn--primary btn--lg" data-review-start>${icon('play')} Start review</button>` : `<span class="small muted">Nothing due today. Come back ${whenText(later[0].due)}.</span>`}
      </div>
      <div id="reviewRoot"></div>
      <div class="section-head"><div><span class="eyebrow">Where to focus</span><h2>Your weakest areas</h2></div></div>
      <div class="rv-weak">${weak.map((g) => `<div class="rv-weak__row"><span class="rv-weak__n num">${g.n}</span><a href="${g.href}" class="grow"><strong>${esc(g.label)}</strong></a>${g.sheet ? `<a class="btn btn--sm btn--ghost" href="${g.sheet}">${icon('file', 'icon--sm')} Cheat sheet</a>` : ''}</div>`).join('')}</div>
      <div class="section-head"><div><span class="eyebrow">All questions</span><h2>What you missed</h2></div></div>
      <ul class="rv-list">${[...list, ...later].map((x) => `<li><span class="rv-list__q">${inline(x.b.q.q)}</span><span class="small muted">${esc(x.b.label)} · ${esc(x.b.sub)}${x.n > 1 ? ` · missed ${x.n}×` : ''}</span><span class="rv-list__when small">${stepsHTML(x)}${isDue(x) ? '<strong>Due now</strong>' : `Next review ${whenText(x.due)}`}</span><a class="small" href="${x.b.href}">Open the lesson</a></li>`).join('')}</ul>`
      : stateBlock({ ic: 'check-circle', title: 'Nothing to review', text: 'Questions you answer incorrectly in knowledge checks and quizzes will collect here so you can retry them.', action: '<a class="btn btn--primary" href="#/curriculum">Go to the curriculum</a>' })}
  </div>`;
  return {
    html, title: 'Review my mistakes', nav: 'review', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Review my mistakes']],
    after: (v) => { const b = $('[data-review-start]', v); if (b) b.addEventListener('click', () => { b.closest('.rv-start').hidden = true; runReview($('#reviewRoot', v), shuffle(list).slice(0, 15)); }); }
  };
}
function runReview(root, items) {
  let i = 0; const res = [];
  const draw = () => {
    if (i >= items.length) {
      const ok = res.filter(Boolean).length; const left = missedCount(); const total = missedList().length;
      root.innerHTML = `<div class="card result anim-scale-in">${ring(ok / items.length, { size: 140, stroke: 12, color: 'var(--success)', sub: `${ok}/${items.length}`, fs: 28 })}
        <h2>${ok === items.length ? 'All correct' : 'Review complete'}</h2><p>${ok} right: ${ok === 1 ? 'it moves' : 'they move'} to a later review. ${left ? `${left} still due now.` : total ? `Nothing else is due today. ${total} question${total === 1 ? '' : 's'} scheduled for later.` : 'Your list is empty.'}</p>
        <div class="result__actions">${left ? `<button class="btn btn--primary" data-again>${icon('rotate')} Review again</button>` : ''}<a class="btn" href="#/curriculum">${icon('layers')} Curriculum</a></div></div>`;
      const a = $('[data-again]', root); if (a) a.addEventListener('click', () => router());
      return;
    }
    const x = items[i]; const q = x.b.q;
    root.innerHTML = `<div class="check anim-slide-up">
      <div class="check__head"><div><strong>Question ${i + 1} of ${items.length}</strong><div class="small muted">From: ${esc(x.b.label)}</div></div>
      <div class="check__progress" aria-hidden="true">${items.map((_, k) => `<span class="${k < i ? (res[k] ? 'is-correct' : 'is-wrong') : k === i ? 'is-current' : ''}"></span>`).join('')}</div></div>
      <div class="q">${questionHTML(q, `rv-${i}`, shuffle(qOptions(q).map((_, n) => n)))}
        <div class="q__actions"><button class="btn btn--primary" data-q-check>Check answer</button></div><div data-q-fb aria-live="polite"></div></div></div>`;
    const qel = $('.q', root); const btn = $('[data-q-check]', qel);
    btn.addEventListener('click', () => {
      const r = gradeQuestion(qel, q);
      if (!r) { $('[data-q-fb]', qel).innerHTML = '<p class="small muted mt-2">Select an answer first.</p>'; return; }
      res[i] = r.ok;
      const st = state.missed[x.id];
      $('[data-q-fb]', qel).innerHTML = r.html + (r.ok ? `<p class="small mt-2">${st ? `Next review ${whenText(st.due)}.` : 'Cleared from your list.'}</p>` : `<p class="small mt-2"><a href="${x.b.href}">Re-read the lesson</a>. It's due again now and starts over.</p>`);
      btn.outerHTML = `<button class="btn btn--primary" data-q-next>${i + 1 < items.length ? 'Next question' : 'See results'} ${icon('arrow-r', 'icon--nudge')}</button>`;
      const nb = $('[data-q-next]', qel); nb.focus(); nb.addEventListener('click', () => { i++; draw(); });
    });
  };
  draw();
}

/* ---------- Cheat sheets ---------- */
function moduleTerms(m) {
  const found = new Map();
  const scan = (v) => {
    if (typeof v === 'string') { for (const r of v.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) { const g = findTerm(r[1]); if (g) found.set(g.term, g); } return; }
    if (v && typeof v === 'object') Object.values(v).forEach(scan);
  };
  m.lessons.forEach(scan);
  return [...found.values()].sort((a, b) => a.term.localeCompare(b.term));
}
function cheatSheetHTML(t, m) {
  const terms = moduleTerms(m);
  return `<article class="cs">
    <header class="cs__head"><span class="cs__brand">MC Academy · ${esc(t.level)} · Module ${m.id.slice(1)}</span><h1>${esc(m.title)}</h1><p>${esc(m.summary)}</p></header>
    <div class="cs__lessons">${m.lessons.map((l) => `<section class="cs__lesson"><h2>${esc(l.title)}</h2>
      <ul class="cs__keys">${(l.takeaways || []).map((k) => `<li>${inline(k)}</li>`).join('')}</ul>
      ${(l.mistakes || []).length ? `<p class="cs__watch"><strong>Avoid:</strong> ${l.mistakes.slice(0, 2).map((x) => inline(x)).join(' ')}</p>` : ''}</section>`).join('')}</div>
    ${terms.length ? `<section class="cs__terms"><h2>Key terms</h2><dl>${terms.map((g) => `<div><dt>${esc(g.term)}</dt><dd>${esc(g.simple)}</dd></div>`).join('')}</dl></section>` : ''}
    <footer class="cs__foot">Summary for study. Always follow your company's procedures and the manufacturer's instructions.</footer>
  </article>`;
}
function viewCheatSheet(tid, mid) {
  const t = TRACK_BY_ID[tid]; const m = t && t.modules.find((x) => x.id === mid);
  if (!m) return viewNotFound();
  const i = t.modules.indexOf(m); const prev = t.modules[i - 1]; const next = t.modules[i + 1];
  const html = `<div class="page page--narrow">
    <div class="row row--between row--wrap mb-4"><span class="eyebrow">${icon('file', 'icon--sm')} Cheat sheet</span><button type="button" class="btn btn--primary" data-cs-print>${icon('print')} Print / Save PDF</button></div>
    <div class="cs-wrap">${cheatSheetHTML(t, m)}</div>
    <nav class="sw-nav" aria-label="Cheat sheets">
      ${prev ? `<a class="sw-nav__link" href="#/cheatsheet/${t.id}/${prev.id}"><span class="small muted">${icon('arrow-l', 'icon--sm')} Previous module</span><strong>${esc(prev.title)}</strong></a>` : `<a class="sw-nav__link" href="#/track/${t.id}"><span class="small muted">${icon('arrow-l', 'icon--sm')} Back to</span><strong>${esc(t.level)} track</strong></a>`}
      ${next ? `<a class="sw-nav__link sw-nav__link--next" href="#/cheatsheet/${t.id}/${next.id}"><span class="small muted">Next module ${icon('arrow-r', 'icon--sm')}</span><strong>${esc(next.title)}</strong></a>` : ''}
    </nav>
  </div>`;
  return {
    html, title: `Cheat sheet · ${m.title}`, nav: `track-${t.id}`, bottom: 'curriculum', crumbs: [['Curriculum', '#/curriculum'], [t.level, `#/track/${t.id}`], ['Cheat sheet']],
    after: (v) => $('[data-cs-print]', v).addEventListener('click', () => { $('#printRoot').innerHTML = cheatSheetHTML(t, m); window.print(); })
  };
}
