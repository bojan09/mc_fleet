
/* ===========================================================================
   SOFTWARE & PLATFORMS — hub (#/software) and one page per platform
   (#/software/<id>; #/academy/software/<id> also works). Platform pages share
   one 14-part structure, an "on this page" progress rail, a knowledge check
   saved like a lesson check (state.checks['sw.<id>']) and Previous/Next links.
   =========================================================================== */
const swCheckKey = (s) => `sw.${s.id}`;
const swHref = (s) => `#/software/${s.id}`;
function swBrand(s, cls = '') {
  return `<span class="sw-brand tone-${s.tone} ${cls}" aria-hidden="true"><span class="sw-brand__icon">${icon(s.icon)}</span><span class="sw-brand__name">${esc(s.name)}</span></span>`;
}
function swStatus(s) {
  const c = state.checks[swCheckKey(s)];
  return c ? { done: true, text: `Check ${c.score}/${c.total}`, ok: c.score === c.total } : { done: false, text: `${s.quiz.length}-question check` };
}

/* Educational record/alert mockup — always labeled, never styled as the vendor's UI. */
function swMockHTML(m) {
  return `<figure class="sw-mock ${m.tone ? `tone-${m.tone}` : ''}"><figcaption class="sw-mock__label">${icon('info', 'icon--sm')}<span>${esc(m.label)}</span></figcaption>
    <div class="sw-mock__card"><div class="sw-mock__head"><strong>${esc(m.title)}</strong>${m.status ? `<span class="badge badge--outline">${esc(m.status)}</span>` : ''}</div>
    <dl>${m.rows.map(([k, v], i) => `<div class="sw-mock__row" style="--i:${i}"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div></figure>`;
}
function swPhotoHTML(id, caption) {
  const x = LIB_MAP.get(id); if (!x || !x.photo) return '';
  return `<figure class="lib-figure sw-photo">${libPhotoImg(x, 960, 'lib-photo')}<figcaption><span class="sw-photo__cap">${esc(caption || x.name)}</span> ${libCredit(x)}</figcaption></figure>`;
}

/* ---------- Hub ---------- */
function viewSoftware(id) {
  if (id) return viewSoftwarePage(id);
  const card = (s, i) => {
    const st = swStatus(s);
    return `<article class="card card--hover sw-card tone-${s.tone}">
      <div class="sw-card__top">${swBrand(s)}<span class="badge badge--outline">${esc(s.kind)}</span></div>
      <div class="sw-card__body">
        <h2>${esc(s.name)} <span class="sw-card__maker">by ${esc(s.maker)}</span></h2>
        <dl class="sw-card__facts">
          <div><dt>${icon('info', 'icon--sm')} What it is</dt><dd>${esc(s.card.what)}</dd></div>
          <div><dt>${icon('target', 'icon--sm')} Used for</dt><dd>${esc(s.card.use)}</dd></div>
          <div><dt>${icon('users', 'icon--sm')} Who uses it</dt><dd>${esc(s.card.who)}</dd></div>
        </dl>
      </div>
      <div class="sw-card__foot"><span class="small ${st.done ? '' : 'muted'}">${st.done ? icon('check-circle', 'icon--sm') : ''} ${esc(st.text)}</span><a class="btn btn--primary" href="${swHref(s)}">Learn More <span class="sr-only">about ${esc(s.name)}</span>${icon('arrow-r', 'icon--nudge')}</a></div>
    </article>`;
  };
  const html = `<div class="page sw-hub">
    ${pageHead({ eyebrow: `${icon('activity', 'icon--sm')} Software & Platforms`, title: 'Software & Platforms', text: 'Real-world tools that trucking companies use for fleet records, maintenance, telematics, compliance, dispatch and temperature-controlled freight. Learn what each one does, who uses it and how a Maintenance Coordinator works with it.' })}
    <div class="sw-grid stagger">${SOFTWARE.map(card).join('')}</div>

    <section class="sw-hub__sec"><div class="section-head"><div><span class="eyebrow">How they fit together</span><h2>One truck, four systems</h2></div></div>
      <div class="sw-map" role="list">
        <div class="sw-map__truck" role="listitem">${artSVG('rig', 'Tractor-trailer')}<strong>The truck, trailer and driver</strong></div>
        ${[['samsara', 'Reports what the truck is doing', 'Location, engine faults, safety events, HOS, DVIRs'], ['fleetio', 'Holds what the truck needs and has had', 'Records, PM reminders, issues, work orders, costs'], ['pro-transport', 'Knows which load it\'s on', 'Loads, dispatch, driver app, documents, billing'], ['thermo-king', 'Keeps the reefer cargo at temperature', 'Refrigeration unit, controller, alarms, TracKing']].map(([sid, a, b]) => { const s = SOFTWARE_MAP.get(sid); return `<a class="sw-map__node tone-${s.tone}" role="listitem" href="${swHref(s)}">${swBrand(s, 'sw-brand--sm')}<strong>${esc(a)}</strong><span>${esc(b)}</span></a>`; }).join('')}
      </div>
      <p class="small muted mt-3">${icon('info', 'icon--sm')} Some of these systems can share data. Fleetio, for example, documents an integration that imports Samsara odometer readings, engine faults and DVIR defects. What is connected differs at every company.</p>
    </section>

    <section class="sw-hub__sec"><div class="section-head"><div><span class="eyebrow">Quick reference</span><h2>Which system answers the question?</h2></div></div>
      ${infographicHTML({ ig: 'table', icon: 'search', title: 'Where a coordinator looks first', head: ['Question', 'Look in', 'Why'], rows: [
        ['Where is T-311 right now?', 'Samsara (telematics)', 'GPS location from the Vehicle Gateway.'],
        ['What fault code just came on?', 'Samsara, or Fleetio if faults are imported', 'Engine fault codes read from the truck.'],
        ['When is T-214\'s next PM due?', 'Fleetio', 'Service reminders based on meters and time.'],
        ['What did we spend on T-214 this year?', 'Fleetio', 'Work orders and service entries with parts and labor.'],
        ['Which load is T-122 on, and when does it deliver?', 'ProTransport (TMS)', 'Dispatch board and load details.'],
        ['Is the signed BOL in?', 'ProTransport (TMS)', 'Documents uploaded from the driver app attach to the load.'],
        ['What does reefer alarm 03 mean?', 'Thermo King unit and alarm code chart', 'The controller shows the code; the official chart explains it.']
      ] })}
    </section>

    <section class="sw-hub__sec"><div class="section-head"><div><span class="eyebrow">Try it</span><h2>Sort the signals</h2></div></div>
      ${exerciseHTML({ type: 'classify', prompt: 'Which platform would you open first for each situation?', categories: ['Fleetio', 'Samsara', 'ProTransport', 'Thermo King'], items: [
        { text: 'A PM reminder shows "overdue" on T-118', answer: 'Fleetio', why: 'Service reminders live in the maintenance system.' },
        { text: 'Dispatch asks where a stopped truck is', answer: 'Samsara', why: 'Live GPS location comes from telematics.' },
        { text: 'You need the delivery appointment for the load on T-122', answer: 'ProTransport', why: 'Load and appointment details live in the TMS.' },
        { text: 'A driver reads you an alarm code from the reefer display', answer: 'Thermo King', why: 'Reefer alarms come from the unit\'s controller. Use the official alarm chart.' },
        { text: 'You need T-214\'s repair history for a warranty claim', answer: 'Fleetio', why: 'Service history and work orders hold the repair record.' }
      ] }, { title: 'Which system?' })}
    </section>
    <p class="scope-note">${icon('info', 'icon--sm')}<span>Fleetio, Samsara, ProTransport (RTS) and Thermo King (Trane Technologies) are trademarks of their owners. MC Academy is not affiliated with or endorsed by them. Descriptions are based on each company's official website, help center or literature, linked on every page. Features and plans change, so always check your company's own setup. Examples use fictional fleets.</span></p>
  </div>`;
  return { html, title: 'Software & Platforms', nav: 'software', crumbs: [['Software & Platforms']] };
}

/* ---------- Platform page ---------- */
function viewSoftwarePage(id) {
  const s = SOFTWARE_MAP.get(id); if (!s) return viewNotFound();
  const i = SOFTWARE.indexOf(s);
  const prev = SOFTWARE[i - 1]; const next = SOFTWARE[i + 1];
  const x = { key: swCheckKey(s), l: { check: s.quiz } };
  const body = (k) => {
    if (k === 'check') return lessonCheckHTML(x);
    return renderBlocks(s.sections[k] || []);
  };
  const toc = SW_SECTIONS.map(([k, t, ic], n) => `<li><button type="button" class="sw-toc__link" data-sec="${k}"><span class="sw-toc__n">${n + 1}</span><span>${esc(t)}</span></button></li>`).join('');
  const html = `<div class="page sw-page tone-${s.tone}">
    <header class="page-head sw-head">
      <div><span class="eyebrow">${icon('activity', 'icon--sm')} Software & Platforms · ${i + 1} of ${SOFTWARE.length}</span>
        <h1>${esc(s.name)}</h1><p>${esc(s.tagline)}</p>
        <div class="sw-head__meta"><span class="badge badge--outline">${esc(s.kind)}</span><span class="small muted">Made by ${esc(s.maker)}</span><span class="small muted">${icon('check-circle', 'icon--sm')} Facts checked ${esc(s.checked)}</span>
          <a class="industry__link" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">Official website ${icon('external', 'icon--sm')}<span class="sr-only"> (opens in a new tab)</span></a></div>
      </div>
      ${swBrand(s, 'sw-brand--lg')}
    </header>
    <div class="sw-steps" aria-label="Platforms">${SOFTWARE.map((p, k) => `<a class="sw-steps__item ${k === i ? 'is-current' : ''} ${swStatus(p).done ? 'is-done' : ''}" href="${swHref(p)}" ${k === i ? 'aria-current="page"' : ''}><span class="sw-steps__n">${swStatus(p).done ? icon('check', 'icon--sm') : k + 1}</span><span>${esc(p.name)}</span></a>`).join('')}</div>
    <div class="sw-layout">
      <nav class="sw-toc" aria-label="On this page">
        <div class="sw-toc__head"><strong>On this page</strong><span class="small muted num" id="swPct">0%</span></div>
        <div class="progress progress--sm" aria-hidden="true"><span class="progress__bar" id="swBar" style="--p:0"></span></div>
        <ol>${toc}</ol>
      </nav>
      <article class="sw-body">
        ${SW_SECTIONS.map(([k, t, ic], n) => `<section class="sw-sec prose" id="sw-${k}" data-sec="${k}" aria-labelledby="sw-h-${k}"><h2 id="sw-h-${k}"><span class="sw-sec__n" aria-hidden="true">${n + 1}</span>${icon(ic)} ${esc(t)}</h2>${body(k)}</section>`).join('')}
        <section class="sw-sources"><h2>${icon('file')} Sources</h2><p class="small muted">Facts on this page come from these official pages and were last checked in ${esc(s.checked)}. Features and plans change, so check your company's setup.</p>
          <ul>${s.sources.map(([t, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(t)} ${icon('external', 'icon--sm')}<span class="sr-only"> (opens in a new tab)</span></a></li>`).join('')}</ul>
          <p class="small muted">${esc(s.name)} is a trademark of its owner. MC Academy is not affiliated with or endorsed by ${esc(s.maker)}. Fleets, units and people in the examples are fictional.</p></section>
      </article>
    </div>
    <nav class="sw-nav" aria-label="Platform pages">
      ${prev ? `<a class="sw-nav__link" href="${swHref(prev)}"><span class="small muted">${icon('arrow-l', 'icon--sm')} Previous</span><strong>${esc(prev.name)}</strong></a>` : `<a class="sw-nav__link" href="#/software"><span class="small muted">${icon('arrow-l', 'icon--sm')} Back to</span><strong>All platforms</strong></a>`}
      ${next ? `<a class="sw-nav__link sw-nav__link--next" href="${swHref(next)}"><span class="small muted">Next ${icon('arrow-r', 'icon--sm')}</span><strong>${esc(next.name)}</strong></a>` : `<a class="sw-nav__link sw-nav__link--next" href="#/curriculum"><span class="small muted">Next ${icon('arrow-r', 'icon--sm')}</span><strong>Back to your learning path</strong></a>`}
    </nav>
  </div>`;
  return {
    html, title: s.name, nav: 'software', crumbs: [['Software & Platforms', '#/software'], [s.name]],
    after: (v) => {
      mountLessonCheck(v, x);
      const secs = $$('.sw-sec', v); const links = $$('.sw-toc__link', v);
      const seen = new Set();
      $$('.sw-toc__link', v).forEach((b) => b.addEventListener('click', () => {
        const t = $(`#sw-${b.dataset.sec}`, v); if (!t) return;
        t.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
        const h = $('h2', t); h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true });
      }));
      const mark = () => {
        const p = seen.size / secs.length;
        $('#swPct', v).textContent = `${pct(p)}%`; $('#swBar', v).style.setProperty('--p', p);
        links.forEach((l) => l.classList.toggle('is-seen', seen.has(l.dataset.sec)));
      };
      if (!('IntersectionObserver' in window)) return;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          seen.add(e.target.dataset.sec);
          links.forEach((l) => l.classList.toggle('is-active', l.dataset.sec === e.target.dataset.sec));
        });
        mark();
      }, { rootMargin: '0px 0px -55% 0px', threshold: 0 });
      secs.forEach((el) => io.observe(el));
      viewCleanup = () => io.disconnect();
    }
  };
}
