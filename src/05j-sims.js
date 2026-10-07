
/* ===========================================================================
   SOFTWARE SIMULATIONS — hands-on practice with simplified, clearly labeled
   mock screens (never presented as the vendors' real interfaces). Each is a
   widget: { widget: 'sim:<id>' } in content, mounted by mountWidgets().
   Units, people and numbers are fictional.
   =========================================================================== */
const simLabel = (t) => `<p class="sim__label">${icon('info', 'icon--sm')}<span>Educational simulation — simplified. ${t}</span></p>`;
const simFb = (ok, title, text) => `<li class="sim-fb ${ok ? 'is-ok' : 'is-bad'}">${icon(ok ? 'check-circle' : 'x-circle', 'icon--sm')}<div><strong>${title}</strong>${text ? `<p>${text}</p>` : ''}</div></li>`;

const SIMS = {
  /* ---- Work order (Fleetio concepts) ---- */
  'sim:workorder': (el) => {
    const LAST = 411430; const READ = 412880; const PM_EVERY = 25000;
    const lines = [
      ['head', 'Replace left low-beam headlamp — resolves issue #1182', true],
      ['pm', 'PM A service — due in 1,400 mi', true],
      ['tires', 'Replace all steer tires', false],
      ['paint', 'Repaint front bumper', false]
    ];
    el.innerHTML = `<div class="sim">
      <div class="sim__head"><span class="sim__tag">${icon('wrench', 'icon--sm')} Practice</span><h3>Build the work order</h3></div>
      <div class="sim__brief"><p><strong>Monday 06:10.</strong> Luis's pre-trip inspection on <strong>T-214</strong> failed one item: <em>"Lights — left low beam out"</em>. Issue <strong>#1182</strong> was opened. He reads <strong>412,880</strong> on the odometer.</p>
        <p>T-214's record shows a last meter reading of <strong>411,430 mi</strong> (Friday) and <strong>PM A</strong> due at 414,280 mi. The in-house shop can take it at 07:00.</p></div>
      ${simLabel('Not Fleetio\'s actual screen.')}
      <form class="sim-form" novalidate>
        <div class="sim-form__bar"><strong>New work order</strong><span class="badge badge--outline">Draft</span></div>
        <div class="sim-form__grid">
          <label class="field"><span>Vehicle</span><select class="select" name="unit"><option value="">Choose…</option><option value="T-214">T-214 · tractor</option><option value="V-5502">V-5502 · dry van trailer</option><option value="T-218">T-218 · tractor</option></select></label>
          <label class="field"><span>Meter reading (mi)</span><input class="input" name="meter" inputmode="numeric" autocomplete="off" placeholder="e.g. 400,000"></label>
          <label class="field"><span>Assigned to</span><select class="select" name="who"><option value="">Choose…</option><option value="shop">In-house shop</option><option value="road">Roadside vendor</option><option value="driver">Driver</option></select></label>
        </div>
        <fieldset class="sim-form__lines"><legend>Line items</legend>${lines.map(([k, t]) => `<label class="sim-check"><input type="checkbox" name="line" value="${k}"><span>${esc(t)}</span></label>`).join('')}</fieldset>
        <label class="sim-check"><input type="checkbox" name="resolve"><span>When completed, resolve issue #1182 on this work order</span></label>
        <label class="field field--full"><span>Notes</span><textarea class="input" name="notes" rows="2" placeholder="Complaint, what will be done, who approved…"></textarea></label>
        <div class="q__actions"><button type="submit" class="btn btn--primary">${icon('check')} Complete work order</button><button type="button" class="btn btn--ghost" data-sim-reset hidden>${icon('rotate')} Try again</button></div>
      </form>
      <div class="sim__out" aria-live="polite"></div></div>`;
    const form = $('form', el); const out = $('.sim__out', el);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const f = new FormData(form);
      const meter = Number(String(f.get('meter') || '').replace(/[^\d]/g, ''));
      const chosen = new Set(f.getAll('line'));
      const notes = String(f.get('notes') || '').toLowerCase();
      const checks = [
        [f.get('unit') === 'T-214', 'Vehicle', f.get('unit') === 'T-214' ? 'The defect is on the tractor, so the work goes on T-214.' : 'The failed item is on T-214, so the work order belongs on that tractor.'],
        [meter === READ, 'Meter reading', meter === READ ? 'Matches the odometer and is higher than Friday\'s reading.' : !meter ? 'Enter the odometer reading the driver gave you.' : meter < LAST ? `${fmtNum(meter)} is lower than the last reading (${fmtNum(LAST)}). Meters only go up, so check for a typo.` : meter - LAST > 5000 ? `${fmtNum(meter)} is ${fmtNum(meter - LAST)} mi more than Friday. That's not realistic over a weekend, so check for an extra digit.` : `Use the exact reading the driver gave: ${fmtNum(READ)}.`],
        [chosen.has('head') && chosen.has('pm') && !chosen.has('tires') && !chosen.has('paint'), 'Line items', chosen.has('head') && chosen.has('pm') && chosen.size === 2 ? 'The defect plus the PM that is due soon, so the truck stops once.' : !chosen.has('head') ? 'The headlamp is the reason for the work order. Include it.' : !chosen.has('pm') ? 'PM A is due in 1,400 mi. Adding it now saves a second shop visit.' : 'Only add work that\'s needed. Nothing reported points to the tires or the bumper.'],
        [f.get('who') === 'shop', 'Assigned to', f.get('who') === 'shop' ? 'The in-house shop can take it at 07:00.' : 'The shop has a slot at 07:00, and the truck is at the terminal, so there\'s no need for roadside service.'],
        [f.get('resolve') === 'on', 'Issue #1182', f.get('resolve') === 'on' ? 'Resolving it on the work order links the repair to the defect.' : 'Resolve the issue on the work order that fixes it, or it stays open forever.'],
        [/(low.?beam|headlamp|headlight|light)/.test(notes), 'Notes', /(low.?beam|headlamp|headlight|light)/.test(notes) ? 'The complaint is recorded.' : 'Write down the complaint, for example "Pre-trip: left low beam out", so the record makes sense later.']
      ];
      const ok = checks.filter((c) => c[0]).length;
      const all = ok === checks.length;
      out.innerHTML = `<div class="sim-result ${all ? 'is-ok' : ''}"><strong>${ok}/${checks.length} correct</strong><ul class="sim-fbs">${checks.map(([g, t, d]) => simFb(g, t, d)).join('')}</ul>
        ${all ? `<div class="sw-mock"><p class="sw-mock__label">${icon('file', 'icon--sm')}<span>Result — service history entry (educational mockup)</span></p><div class="sw-mock__card"><div class="sw-mock__head"><strong>T-214 · Service history</strong><span class="badge badge--success">Completed</span></div><dl>
          <div class="sw-mock__row"><dt>Work done</dt><dd>PM A service; left low-beam headlamp replaced</dd></div>
          <div class="sw-mock__row"><dt>Meter</dt><dd>${fmtNum(READ)} mi</dd></div>
          <div class="sw-mock__row"><dt>Issue</dt><dd>#1182 resolved</dd></div>
          <div class="sw-mock__row"><dt>Next PM A</dt><dd>${fmtNum(READ + PM_EVERY)} mi (example interval: every ${fmtNum(PM_EVERY)} mi)</dd></div></dl></div></div>` : ''}</div>`;
      if (all) { state.exercises['sim:workorder'] = 1; save(); }
      $('[data-sim-reset]', el).hidden = false;
    });
    $('[data-sim-reset]', el).addEventListener('click', () => { form.reset(); out.innerHTML = ''; $('[data-sim-reset]', el).hidden = true; });
  },

  /* ---- Alert queue (telematics concepts) ---- */
  'sim:alerts': (el) => {
    const ACTIONS = ['Maintenance: handle now', 'Maintenance: plan a repair', 'Safety team', 'Dispatch', 'No action needed'];
    const ROWS = [
      ['06:12', 'T-402', 'Engine fault', 'critical', 'Driver reports a red STOP ENGINE lamp and power dropping.', 0, 'A red stop lamp with power loss means the truck has to stop safely now. Arrange roadside help.'],
      ['06:40', 'T-311', 'Engine fault', 'warning', 'Check-engine lamp. Driver says power is normal; first time this code has appeared.', 1, 'Call the driver first, as you did. With no stop symptoms, plan a diagnosis that fits the load.'],
      ['06:55', 'T-208', 'Harsh braking', 'info', 'Car cut in front; driver says the brakes felt normal.', 2, 'A driving event with no mechanical symptom is for safety and coaching.'],
      ['07:05', 'T-119', 'DVIR defect', 'critical', 'Post-trip: "air leak at trailer glad hand". Unit parked at the terminal.', 0, 'An air leak is a brake-system defect. Repair it before the unit is dispatched again.'],
      ['07:20', 'T-122', 'Late arrival', 'warning', 'Running 45 min behind its delivery appointment.', 3, 'Appointments and customer updates belong to dispatch.'],
      ['07:31', 'T-230', 'Idling', 'info', 'Idled 25 minutes at a customer dock.', 4, 'Idle time is reviewed in fleet reports. There\'s nothing for maintenance to do.'],
      ['07:45', 'T-311', 'Odometer sync', 'info', 'Meter updated to 412,880 mi automatically.', 4, 'An automatic meter update needs no action. It keeps PM reminders accurate.']
    ];
    el.innerHTML = `<div class="sim">
      <div class="sim__head"><span class="sim__tag">${icon('alert', 'icon--sm')} Practice</span><h3>Work the morning alert queue</h3></div>
      <div class="sim__brief"><p>Seven alerts arrived between 06:00 and 08:00. Decide who should act on each one.</p></div>
      ${simLabel('Not Samsara\'s actual screen.')}
      <form class="sim-queue" novalidate>
        ${ROWS.map(([time, unit, type, tone, detail], i) => `<div class="sim-queue__row tone-${tone}"><div class="sim-queue__meta"><span class="num">${time}</span><strong>${unit}</strong><span class="badge badge--outline">${esc(type)}</span></div><p>${esc(detail)}</p>
          <label class="sr-only" for="sq-${i}">Action for ${unit} ${esc(type)}</label><select class="select" id="sq-${i}" name="a${i}"><option value="">Choose who acts…</option>${ACTIONS.map((a, k) => `<option value="${k}">${esc(a)}</option>`).join('')}</select><div class="sim-queue__fb" aria-live="polite"></div></div>`).join('')}
        <div class="q__actions"><button type="submit" class="btn btn--primary">${icon('check')} Check my decisions</button><span class="small muted" data-sim-status role="status"></span></div>
      </form></div>`;
    const form = $('form', el);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const rows = $$('.sim-queue__row', form);
      if (rows.some((r) => !$('select', r).value)) { $('[data-sim-status]', el).textContent = 'Choose an action for every alert first.'; return; }
      let ok = 0;
      rows.forEach((r, i) => {
        const v = +$('select', r).value; const good = v === ROWS[i][5]; if (good) ok++;
        r.classList.toggle('is-ok', good); r.classList.toggle('is-bad', !good);
        $('.sim-queue__fb', r).innerHTML = `${icon(good ? 'check-circle' : 'x-circle', 'icon--sm')}<span>${good ? '' : `<strong>${esc(ACTIONS[ROWS[i][5]])}.</strong> `}${esc(ROWS[i][6])}</span>`;
      });
      $('[data-sim-status]', el).textContent = `${ok}/${ROWS.length} correct${ok === ROWS.length ? ' — clean queue.' : ''}`;
      if (ok === ROWS.length) { state.exercises['sim:alerts'] = 1; save(); }
    });
  },

  /* ---- Dispatch board (TMS concepts) ---- */
  'sim:board': (el) => {
    const ROWS = [
      ['T-122', 'Ana P.', '77120', 'In transit', 'Delivery Tue 07:00 · Columbus', false, 'It\'s on a load delivering tomorrow morning. Pulling it now would blow the appointment.'],
      ['T-118', 'Marcus L.', '—', 'Available', 'Next load Wed 05:00', true, 'No load until Wednesday morning, so a 4-hour PM today won\'t affect any freight.'],
      ['T-305', 'Dee R.', '77131', 'Loading', 'Pickup window ends 14:00', false, 'It\'s loading right now. Taking it would strand the freight at the shipper.'],
      ['T-221', 'Sam K.', '77126', 'Dispatched', 'Pickup today 16:00 · 3 h away', false, 'It must leave within the hour to make its 16:00 pickup.']
    ];
    el.innerHTML = `<div class="sim">
      <div class="sim__head"><span class="sim__tag">${icon('route', 'icon--sm')} Practice</span><h3>Find a window for the PM</h3></div>
      <div class="sim__brief"><p>It's <strong>Monday 11:00</strong>. One tractor needs a <strong>4-hour PM</strong> in the shop today, and it isn't safety-critical. Which unit can go without hurting a load?</p></div>
      ${simLabel('Not ProTransport\'s actual screen.')}
      <div class="table-wrap"><table class="table sim-board"><thead><tr><th scope="col">Unit</th><th scope="col">Driver</th><th scope="col">Load</th><th scope="col">Status</th><th scope="col">Next commitment</th><th scope="col"><span class="sr-only">Choose</span></th></tr></thead>
        <tbody>${ROWS.map(([u, d, l, s, n], i) => `<tr><td><strong>${u}</strong></td><td>${esc(d)}</td><td class="num">${l}</td><td><span class="badge badge--outline">${s}</span></td><td>${esc(n)}</td><td><button type="button" class="btn btn--sm" data-pick="${i}">Send to shop</button></td></tr>`).join('')}</tbody></table></div>
      <div class="sim__out" aria-live="polite"></div></div>`;
    $$('[data-pick]', el).forEach((b) => b.addEventListener('click', () => {
      const r = ROWS[+b.dataset.pick];
      $('.sim__out', el).innerHTML = `<ul class="sim-fbs">${simFb(r[5], r[5] ? `${r[0]} is the right call` : `Not ${r[0]}`, r[6] + (r[5] ? ' Agree the time with dispatch and record the planned work.' : ''))}</ul>`;
      if (r[5]) { state.exercises['sim:board'] = 1; save(); }
    }));
  },

  /* ---- Reefer display (transport refrigeration concepts) ---- */
  'sim:reefer': (el) => {
    const QS = [
      { t: 'mc', q: 'What temperature is the unit told to hold?', o: ['30°F', '34°F', '35°F', 'It depends on the driver'], a: 1, e: 'SP is the setpoint, 34°F, which comes from the shipper\'s instructions.' },
      { t: 'mc', q: 'Is the cargo area holding temperature right now?', o: ['Yes. Return air (35°F) is close to the 34°F setpoint', 'No. Discharge air should equal the setpoint', 'No. The alarm means the unit has stopped', 'Can\'t tell without opening the doors'], a: 0, e: 'Return air is the air coming back from the load. Close to setpoint means the box is holding. Discharge air colder than setpoint is normal while cooling.' },
      { t: 'mc', q: 'Alarm 03 on Thermo King\'s alarm code chart is…', o: ['Low fuel', 'Check return air sensor', 'Door open', 'Defrost terminated by time'], a: 1, e: 'Code 03 is "Check (Control) Return Air Sensor", a check alarm. The chart\'s guidance is to monitor the temperature manually and report it.' },
      { t: 'wwyd', q: 'What should the coordinator do?', o: ['Tell the driver to lower the setpoint to 30°F to be safe', 'Ask for regular temperature readings and book a refrigeration-qualified service after delivery; tell dispatch', 'Ignore it; the unit is still running', 'Send the trailer to the nearest tire shop'], a: 1, e: 'Watch the cargo, plan qualified service, keep dispatch informed, and never change the setpoint against the shipper\'s instructions.' }
    ];
    el.innerHTML = `<div class="sim">
      <div class="sim__head"><span class="sim__tag">${icon('thermo', 'icon--sm')} Practice</span><h3>Read the reefer display</h3></div>
      <div class="sim__brief"><p>A driver sends you this photo of the reefer display at 02:15. The load is produce.</p></div>
      ${simLabel('Generic display for learning. Not a Thermo King controller screen.')}
      <div class="reefer-lcd" role="img" aria-label="Reefer display: setpoint 34 degrees, return air 35, discharge air 30, mode cycle-sentry cooling, alarm 03">
        <div class="reefer-lcd__main"><span class="reefer-lcd__k">SP</span><span class="reefer-lcd__v">34<small>°F</small></span></div>
        <div class="reefer-lcd__row"><span><b>RA</b> 35°F</span><span><b>DA</b> 30°F</span></div>
        <div class="reefer-lcd__row"><span>CYCLE-SENTRY</span><span>COOL</span><span class="reefer-lcd__alarm">${icon('alert', 'icon--sm')} 03</span></div>
      </div>
      <div class="sim-qs">${QS.map((q, i) => `<div class="q" data-qi="${i}">${questionHTML(q, nextId('rq'))}<div class="q__actions"><button type="button" class="btn btn--primary btn--sm" data-q-check>Check answer</button></div><div data-q-fb aria-live="polite"></div></div>`).join('')}</div>
      <p class="small muted mt-3">SP = setpoint · RA = return air · DA = discharge air.</p></div>`;
    let right = 0;
    $$('.q', el).forEach((qel) => $('[data-q-check]', qel).addEventListener('click', (e) => {
      const r = gradeQuestion(qel, QS[+qel.dataset.qi]);
      if (!r) { $('[data-q-fb]', qel).innerHTML = '<p class="small muted mt-2">Select an answer first.</p>'; return; }
      e.currentTarget.remove(); $('[data-q-fb]', qel).innerHTML = r.html;
      if (r.ok && ++right === QS.length) { state.exercises['sim:reefer'] = 1; save(); }
    }));
  }
};
const SIM_LIST = [
  ['sim:workorder', 'Build the work order', 'Maintenance software', 'fleetio'],
  ['sim:alerts', 'Work the alert queue', 'Telematics', 'samsara'],
  ['sim:board', 'Find a window for the PM', 'Dispatch board (TMS)', 'pro-transport'],
  ['sim:reefer', 'Read the reefer display', 'Transport refrigeration', 'thermo-king']
];

function viewSimulations() {
  const html = `<div class="page page--narrow">
    ${pageHead({ eyebrow: `${icon('flask', 'icon--sm')} Practice Lab`, title: 'Software simulations', text: 'Practice the tasks a Maintenance Coordinator does in real systems: build a work order, triage alerts, read a dispatch board and a reefer display. These are simplified training screens, not the vendors\' real interfaces.' })}
    <div class="sim-index">${SIM_LIST.map(([id, t, k, sw], i) => `<a class="sim-index__item" href="#sim-${i}"><span class="num">${i + 1}</span><span><strong>${esc(t)}</strong><small>${esc(k)}</small></span>${state.exercises[id] ? icon('check-circle', 'icon--sm') : ''}</a>`).join('')}</div>
    ${SIM_LIST.map(([id, t, k, sw], i) => `<section class="sim-sec" id="sim-${i}"><div class="widget" data-widget="${id}"></div><p class="small muted">Learn the concepts first: <a href="${swHref(SOFTWARE_MAP.get(sw))}">${esc(SOFTWARE_MAP.get(sw).name)}</a>.</p></section>`).join('')}
  </div>`;
  return {
    html, title: 'Software simulations', nav: 'simulations', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Software simulations']],
    // Standalone, each simulation is a top-level section: promote its title to h2.
    after: (v) => $$('.sim__head h3', v).forEach((h) => { const h2 = document.createElement('h2'); h2.innerHTML = h.innerHTML; h.replaceWith(h2); })
  };
}
