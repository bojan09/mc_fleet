
/* ===========================================================================
   LEARNING PATH — guidance layered on top of the existing curriculum. It does
   not move or rename any track, module or lesson: it tells a beginner what to
   learn first, what to learn together, what comes next and what can wait.
   Items: { m: 'track.module' } | { sw: 'platform-id' } | { page: [title, href, icon] }
   =========================================================================== */
const PATH_TAGS = {
  start: ['Start Here', 'flag'], together: ['Learn Together', 'layers'], next: ['Learn Next', 'arrow-r'],
  adv: ['Advanced', 'trend'], exp: ['Expert', 'award'], opt: ['Optional', 'route']
};
const LEARN_PATH = [
  { id: 'fund', tag: 'start', title: 'Trucking Fundamentals', items: [{ m: 'beginner.m1' }, { m: 'beginner.m2' }],
    why: 'How a trucking company works, who does what, and what a Maintenance Coordinator is responsible for. Everything else assumes you know who you\'re talking to and what your job is.' },
  { id: 'vehicles', tag: 'start', title: 'Vehicles & Parts', items: [{ m: 'beginner.m3' }, { page: ['Visual Library', '#/library', 'image'] }],
    needs: 'Trucking Fundamentals',
    why: 'You can\'t coordinate a repair on a part you can\'t picture. Learn the tractor, trailer and their systems, and use the Visual Library alongside the lessons.' },
  { id: 'maint', tag: 'next', title: 'Maintenance, Inspections & Safety', items: [{ m: 'beginner.m9' }, { m: 'beginner.m5' }],
    needs: 'Vehicles & Parts — inspections and roadside calls name the parts you just learned',
    why: 'How defects are found (inspections and DVIRs), and which problems mean a truck must stop. Safety decisions come before any paperwork.' },
  { id: 'docs', tag: 'next', title: 'Work Orders & Documentation', items: [{ m: 'beginner.m6' }, { m: 'beginner.m8' }],
    needs: 'Maintenance, Inspections & Safety — a work order starts from a defect',
    why: 'The repair workflow from first call to closed case, and the records that prove what was done, when, and what it cost.' },
  { id: 'software', tag: 'next', title: 'Fleet & Transportation Software', items: [{ sw: 'fleetio' }, { sw: 'samsara' }, { sw: 'thermo-king' }, { sw: 'pro-transport' }, { sw: 'decisiv' }, { sw: 'fleetnet' }],
    needs: 'Work Orders & Documentation — software records a process you should already understand',
    why: 'The real tools where that work is recorded and monitored: maintenance records, telematics, reefer units and dispatch.' },
  { id: 'real', tag: 'next', title: 'Real-World Maintenance Coordination', items: [{ m: 'beginner.m4' }, { m: 'beginner.m7' }, { page: ['Scenario Simulator', '#/scenarios', 'message', 'Practice Lab'] }, { page: ['Beginner final assessment', '#/final/beginner', 'award', 'Final assessment'] }],
    needs: 'All of the stages above',
    why: 'Turning a vague driver complaint into useful facts, talking to drivers, dispatch and shops, and then proving it all in a realistic maintenance call.' },
  { id: 'adv', tag: 'adv', title: 'Advanced — Fleet Maintenance Operations', track: 'advanced',
    needs: 'The Beginner track, ideally with the Beginner final passed',
    why: 'Preventive maintenance programs, diagnostics, estimates, vendors, downtime, cost control and parts. This is the day-to-day operations level.' },
  { id: 'exp', tag: 'exp', title: 'Expert — Maintenance Coordination & Fleet Management', track: 'expert',
    needs: 'The Advanced track',
    why: 'Strategy, analytics, root cause analysis, warranty, leadership and emergency operations, for when you run or improve the maintenance program itself.' }
];
const LEARN_TOGETHER = [
  { t: 'Truck & Trailer Basics + Parts', d: 'Read a systems lesson, then open the same parts in the Visual Library.', items: [{ m: 'beginner.m3' }, { page: ['Visual Library', '#/library', 'image'] }] },
  { t: 'Preventive Maintenance + Inspections', d: 'Inspections find defects; PM prevents them. Start with inspections, and add PM schedules once you reach Advanced.', items: [{ m: 'beginner.m9' }, { m: 'advanced.m1', later: true }] },
  { t: 'Work Orders + Service Records', d: 'The workflow creates the work order, and documentation turns it into a service record.', items: [{ m: 'beginner.m6' }, { m: 'beginner.m8' }] },
  { t: 'Drivers + Vehicles + Compliance', d: 'Driver complaints, DVIRs and stop-or-go safety decisions all meet in the same phone call.', items: [{ m: 'beginner.m4' }, { m: 'beginner.m9' }, { m: 'beginner.m5' }] },
  { t: 'Fleetio + Maintenance Workflows', d: 'See how inspections, issues and work orders map to the workflow you learned.', items: [{ sw: 'fleetio' }, { m: 'beginner.m6' }] },
  { t: 'Samsara + Telematics + Fleet Monitoring', d: 'Fault codes, location and DVIRs, then how fleets track them across every unit.', items: [{ sw: 'samsara' }, { m: 'advanced.m7', later: true }, { m: 'expert.m9', later: true }] },
  { t: 'Thermo King + Refrigeration + Reefer Maintenance', d: 'Know the reefer trailer first, then the unit, its alarms and its maintenance.', items: [{ m: 'beginner.m3' }, { sw: 'thermo-king' }, { page: ['Reefer unit in the Visual Library', '#/library/reeferunit', 'image'] }] },
  { t: 'Engine-maker alerts + Fault codes', d: 'Read a fault list first, then see how Cummins and Detroit add priority and next steps.', items: [{ m: 'advanced.m2', later: true }, { sw: 'cummins-connected' }, { sw: 'detroit-connect' }] },
  { t: 'Roadside networks + Breakdowns', d: 'Run the first ten minutes of a breakdown, then hand it to a network, a truck stop shop or a parts branch.', items: [{ m: 'beginner.m5' }, { sw: 'fleetnet' }, { sw: 'loves-truck-care' }, { sw: 'fleetpride' }] },
  { t: 'Dispatch + Loads + Transportation Operations', d: 'How loads, drivers and dispatch work, and how a breakdown affects them.', items: [{ sw: 'pro-transport' }, { m: 'operations.m1' }, { m: 'advanced.m6', later: true }] }
];
const NOT_YET = [
  ['adv', 'Cost per mile, repair-cost control and vendor pricing', 'advanced.m8'],
  ['adv', 'Parts sourcing and inventory (reorder points, cores)', 'advanced.m9'],
  ['adv', 'Aftertreatment deep dive (DPF, DEF, regeneration)', 'advanced.m2'],
  ['exp', 'Fleet analytics: MTBF, MTTR, availability and PM compliance KPIs', 'expert.m2'],
  ['exp', 'Root cause analysis and repeat-failure investigations', 'expert.m3'],
  ['exp', 'Maintenance budgeting, lifecycle and replacement planning', 'expert.m1'],
  ['exp', 'Warranty recovery and vendor scorecards', 'expert.m6'],
  ['opt', 'Invoicing, accessorials and factoring (unless your role includes billing)', 'operations.m2']
];
/* Module → guidance tag shown on the track pages. */
const MODULE_TAGS = (() => {
  const map = {};
  LEARN_PATH.forEach((st, n) => (st.items || []).forEach((it) => { if (it.m) map[it.m] = { tag: st.tag, stage: st.title, step: n + 1 }; }));
  return map;
})();
const MODULE_WITH = (() => {
  const map = {};
  LEARN_TOGETHER.forEach((g) => g.items.forEach((it) => { if (it.m) (map[it.m] = map[it.m] || []).push(g.t); }));
  return map;
})();

function pathModule(key) {
  const [tid, mid] = key.split('.');
  const t = TRACK_BY_ID[tid]; const m = t && t.modules.find((x) => x.id === mid);
  return m ? { t, m } : null;
}
function pathItemDone(it) {
  if (it.m) { const r = pathModule(it.m); return r ? moduleStats(r.t, r.m).complete : false; }
  if (it.sw) return !!state.checks[`sw.${it.sw}`];
  if (it.page && it.page[1] === '#/final/beginner') return finalPassed(TRACK_BY_ID.beginner);
  return null; // reference pages have no completion state
}
function pathItemHTML(it) {
  const done = pathItemDone(it);
  let href; let label; let sub; let ic;
  if (it.m) {
    const r = pathModule(it.m); if (!r) return '';
    const s = moduleStats(r.t, r.m);
    href = `#/track/${r.t.id}`; label = r.m.title; sub = `${r.t.level} · Module ${r.m.id.slice(1)} · ${s.done}/${s.total}`; ic = 'book';
  } else if (it.sw) {
    const s = SOFTWARE_MAP.get(it.sw); href = swHref(s); label = s.name; sub = `Software & Platforms · ${s.kind}`; ic = s.icon;
  } else { [label, href, ic, sub = 'Reference'] = it.page; }
  return `<a class="path-item ${done ? 'is-done' : ''}" href="${href}"><span class="path-item__ic">${icon(done ? 'check' : ic, 'icon--sm')}</span><span class="grow"><strong>${esc(label)}</strong><small>${esc(sub)}</small>${it.later ? '<span class="path-later-tag">Later</span>' : ''}</span>${icon('chev-r', 'icon--sm')}</a>`;
}
function pathTag(tag, extra = '') {
  const [t, ic] = PATH_TAGS[tag];
  return `<span class="path-tag path-tag--${tag} ${extra}">${icon(ic, 'icon--sm')}${t}</span>`;
}
function pathStageProgress(st) {
  if (st.track) return trackStats(TRACK_BY_ID[st.track]).p;
  const vals = st.items.map(pathItemDone).filter((v) => v !== null);
  return vals.length ? vals.filter(Boolean).length / vals.length : 0;
}

function learningGuideHTML() {
  const cur = LEARN_PATH.findIndex((st) => pathStageProgress(st) < 1);
  const first = LEARN_PATH[0];
  const startHref = (() => { const r = recommended(); return r && r.t.id === 'beginner' ? r.href : '#/track/beginner'; })();
  // On phones only the current stage starts open, so the page isn't a dozen
  // screens long; wider screens open everything.
  const wide = matchMedia('(min-width: 761px)').matches;
  const openAttr = (on) => (on || wide ? ' open' : '');
  const chev = icon('chev-r', 'icon--sm fold__chev');
  const stage = (st, n) => {
    const p = pathStageProgress(st); const here = n === cur;
    const t = st.track && TRACK_BY_ID[st.track];
    return `<li class="path-stage path-stage--${st.tag} ${p >= 1 ? 'is-done' : ''} ${here ? 'is-current' : ''}" style="--i:${n}">
      <span class="path-stage__dot" aria-hidden="true">${p >= 1 ? icon('check', 'icon--sm') : n + 1}</span>
      <details class="path-stage__card"${openAttr(here)}>
        <summary class="path-stage__sum"><span class="path-stage__top">${pathTag(st.tag)}${here ? '<span class="path-here">You are here</span>' : ''}<span class="small muted num path-stage__pct">${pct(p)}%</span>${chev}</span>
        <h3>${esc(st.title)}</h3></summary>
        <p class="small">${esc(st.why)}</p>
        ${st.needs ? `<p class="path-needs">${icon('branch', 'icon--sm')}<span><strong>Builds on:</strong> ${esc(st.needs)}</span></p>` : ''}
        ${t ? `<a class="path-item" href="#/track/${t.id}"><span class="path-item__ic">${icon(t.icon, 'icon--sm')}</span><span class="grow"><strong>${esc(t.title)}</strong><small>${t.modules.length} modules · ${trackStats(t).done}/${trackStats(t).lessons} lessons</small></span>${icon('chev-r', 'icon--sm')}</a>` : `<div class="path-items">${st.items.map(pathItemHTML).join('')}</div>`}
      </details></li>`;
  };
  return `<section class="path" aria-labelledby="pathTitle">
    <div class="path-start card">
      <div class="path-start__text">${pathTag('start')}<h2 id="pathTitle">New here? Start with the fundamentals</h2>
        <p>Begin with <strong>Trucking Fundamentals</strong> and <strong>Vehicles & Parts</strong>, the first three Beginner modules. They give you the vocabulary every later lesson uses: who does what in a trucking company, what your job is, and what the parts of a truck and trailer are called.</p>
        <div class="row row--wrap mt-4"><a class="btn btn--primary" href="${startHref}">${state.last ? 'Continue learning' : 'Start lesson 1'} ${icon('arrow-r', 'icon--nudge')}</a><a class="btn btn--ghost" href="#sec-path">See the full path</a></div></div>
      <ol class="path-mini" aria-label="Path overview">${['Beginner', ...LEARN_PATH.slice(0, 6).map((s) => s.title), 'Advanced', 'Expert'].map((t, n) => `<li class="${n === 0 || n > 6 ? 'is-level' : ''} ${n - 1 === cur ? 'is-current' : ''}">${esc(t)}</li>`).join('')}</ol>
    </div>

    <div class="section-head" id="sec-path"><div><span class="eyebrow">Recommended learning path</span><h2>What to learn, in order</h2></div></div>
    <p class="muted mb-4">The curriculum lists modules by track. This path suggests the best <em>order</em> for a beginner. Some modules are best studied side by side, so the path doesn't always follow module numbers. Your progress carries over either way.</p>
    <ol class="path-stages">${LEARN_PATH.map(stage).join('')}</ol>

    <details class="fold"${openAttr(false)}><summary class="section-head fold__sum"><div><span class="eyebrow">${pathTag('together', 'path-tag--inline')}</span><h2>Topics that make more sense side by side</h2></div>${chev}</summary>
    <div class="path-together stagger">${LEARN_TOGETHER.map((g) => `<article class="card path-group"><h3>${icon('layers', 'icon--sm')} ${esc(g.t)}</h3><p class="small muted">${esc(g.d)}</p><div class="path-items">${g.items.map(pathItemHTML).join('')}</div></article>`).join('')}</div>
    </details>

    <details class="fold"${openAttr(false)}><summary class="section-head fold__sum"><div><span class="eyebrow">Not yet</span><h2>What you don't need to learn yet</h2></div>${chev}</summary>
    <div class="card card--pad path-later">
      <p class="small mb-4">These topics build on the fundamentals. A beginner will get much more out of them after finishing the Beginner track. Feel free to look, but don't let them slow you down.</p>
      <ul>${NOT_YET.map(([tag, t, key]) => { const r = pathModule(key); return `<li>${pathTag(tag)}<span class="grow">${esc(t)}</span>${r ? `<a class="small" href="#/track/${r.t.id}">${esc(r.t.level)} · Module ${r.m.id.slice(1)}</a>` : ''}</li>`; }).join('')}</ul>
      <p class="block-note mt-4">${icon('route', 'icon--sm')}<span>The <strong>Operations</strong> track is optional. Take it alongside or after Beginner if your role touches dispatch, loads or billing.</span></p>
    </div>
    </details>
  </section>`;
}

/* Small guidance line shown in each module on the track page. */
function moduleGuideHTML(t, m) {
  const key = `${t.id}.${m.id}`;
  const g = MODULE_TAGS[key];
  const tag = g ? g.tag : t.id === 'advanced' ? 'adv' : t.id === 'expert' ? 'exp' : t.id === 'operations' ? 'opt' : null;
  if (!tag) return '';
  const text = g ? `Path step ${g.step}: ${g.stage}` : tag === 'adv' ? 'After the Beginner track' : tag === 'exp' ? 'After the Advanced track' : 'Optional · alongside or after Beginner';
  return `<span class="module__guide">${pathTag(tag)}<span>${esc(text)}</span>${MODULE_WITH[key] ? `<span class="module__with">${icon('layers', 'icon--sm')} Learn together: ${esc(MODULE_WITH[key].join(' · '))}</span>` : ''}</span>`;
}
