/* ===========================================================================
   OPERATIONS SIMULATIONS — DVIR defects, a reman part with a core charge and
   a warranty claim. Same rules as the software simulations: simplified,
   clearly labeled, fictional units, prices and terms. Facts follow the
   lessons they practice (Beginner M9 L1, Advanced M9 L1, Expert M6).
   =========================================================================== */
const simNum = (v) => Number(String(v || '').replace(/[^\d.]/g, ''));
const simRadios = (name, legend, opts) => `<fieldset class="sim-form__lines"><legend>${legend}</legend>${opts.map((o, i) => `<label class="sim-check"><input type="radio" name="${name}" value="${i}"><span>${o}</span></label>`).join('')}</fieldset>`;
const simChecks = (name, legend, opts) => `<fieldset class="sim-form__lines"><legend>${legend}</legend>${opts.map((o, i) => `<label class="sim-check"><input type="checkbox" name="${name}" value="${i}"><span>${o}</span></label>`).join('')}</fieldset>`;

/* Shared shell: brief, label, form; grade(FormData) returns [ok, title, text]
   rows; done() is extra HTML shown when everything is right. */
function opsSim(el, { id, ic, title, brief, label, bar, form, grade, done = () => '' }) {
  el.innerHTML = `<div class="sim">
    <div class="sim__head"><span class="sim__tag">${icon(ic, 'icon--sm')} Practice</span><h3>${title}</h3></div>
    <div class="sim__brief">${brief}</div>
    ${simLabel(label)}
    <form class="sim-form" novalidate>
      <div class="sim-form__bar"><strong>${bar}</strong><span class="badge badge--outline">Practice</span></div>
      ${form}
      <div class="q__actions"><button type="submit" class="btn btn--primary">${icon('check')} Check my answers</button><button type="button" class="btn btn--ghost" data-sim-reset hidden>${icon('rotate')} Try again</button></div>
    </form>
    <div class="sim__out" aria-live="polite"></div></div>`;
  const f = $('form', el); const out = $('.sim__out', el); const again = $('[data-sim-reset]', el);
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    const checks = grade(new FormData(f));
    const ok = checks.filter((c) => c[0]).length; const all = ok === checks.length;
    out.innerHTML = `<div class="sim-result ${all ? 'is-ok' : ''}"><strong>${ok}/${checks.length} correct</strong><ul class="sim-fbs">${checks.map(([g, t, d]) => simFb(g, t, d)).join('')}</ul>${all ? done() : ''}</div>`;
    if (all) { state.exercises[id] = 1; save(); }
    again.hidden = false;
  });
  again.addEventListener('click', () => { f.reset(); out.innerHTML = ''; again.hidden = true; });
}

Object.assign(SIMS, {
  /* ---- DVIR defects (49 CFR 396.11 / 396.13) ---- */
  'sim:dvir': (el) => {
    const DEFECTS = [
      ['T-305', 'Left front turn signal out', 0, 'Lighting is on the post-trip report list and affects safe operation.'],
      ['T-305', 'Driver seat armrest loose', 1, 'A comfort item. It doesn\'t affect safe operation.'],
      ['TR-760', 'Bulge on the outer sidewall of a tire', 0, 'Tires are on the list, and a sidewall bulge can fail on the road.'],
      ['T-311', 'Horn does not sound', 0, 'The horn is on the post-trip report list and has to work.'],
      ['T-311', 'Dash clock shows the wrong time', 1, 'Nothing to do with safe operation. Schedule it.']
    ];
    opsSim(el, {
      id: 'sim:dvir', ic: 'clipboard', title: 'Close the DVIR loop', bar: 'Overnight DVIR review',
      label: 'Fictional units. Your safety department decides how defects are classified.',
      brief: `<p><strong>Tuesday 05:30.</strong> Three post-trip DVIRs came in overnight. All three units are booked for loads leaving at 07:00. Sort the defects, then close the loop for <strong>T-305</strong>.</p>`,
      form: `<div class="sim-dvir">${DEFECTS.map(([u, d], i) => `<label class="field sim-dvir__row"><span><strong>${u}</strong> · ${esc(d)}</span><select class="select" name="d${i}"><option value="">Choose…</option><option value="0">Repair before dispatch</option><option value="1">Schedule repair</option></select></label>`).join('')}</div>
        ${simRadios('cert', 'The yard technician replaced T-305\'s turn-signal bulb at 05:50. What has to happen before T-305 leaves?', ['Nothing more: the bulb works now', 'The repair is certified on the DVIR, and the 07:00 driver reviews the report and signs it', 'Dispatch signs the DVIR for the driver', 'The driver deletes the defect from the report'])}
        ${simRadios('keep', 'How long does the carrier keep the original DVIR and its certification?', ['24 hours', '3 months', 'Until the next PM', 'It can be thrown away once signed'])}`,
      grade: (f) => [
        ...DEFECTS.map(([u, d, a, why], i) => { const v = f.get('d' + i); return [v === String(a), `${u}: ${d}`, v === '' || v == null ? 'Choose how to handle it.' : (v === String(a) ? '' : (a === 0 ? 'Repair before dispatch. ' : 'Schedule it. ')) + why]; }),
        [f.get('cert') === '1', 'Closing the loop', f.get('cert') === '1' ? 'The repair is certified on the report, and the next driver reviews and signs it before driving (49 CFR 396.11 and 396.13).' : 'A fixed defect still has to be certified on the DVIR, and the next driver must review the report and sign before driving (49 CFR 396.11 and 396.13).'],
        [f.get('keep') === '1', 'Record keeping', f.get('keep') === '1' ? 'The carrier keeps the original report and certification for three months (49 CFR 396.11).' : 'The carrier keeps the original DVIR and its certification for three months from the date it was prepared (49 CFR 396.11).']
      ],
      done: () => '<p class="small mt-3">T-305 and T-311 can leave once their repairs are certified and the drivers sign. TR-760 needs the tire replaced first. The armrest and the clock go on the schedule.</p>'
    });
  },

  /* ---- Reman part with a core charge ---- */
  'sim:core': (el) => {
    const PART = 285, CORE = 90;
    opsSim(el, {
      id: 'sim:core', ic: 'dollar', title: 'Order a part with a core charge', bar: 'Parts order · T-118',
      label: 'Fictional supplier, prices and return terms.',
      brief: `<p><strong>T-118</strong>'s alternator failed. The unit is out of warranty. Your parts supplier quotes:</p>
        <ul><li>New OEM alternator: <strong>$610</strong>, arrives in 2 days</li><li>Remanufactured alternator: <strong>$${PART}</strong> plus a <strong>$${CORE} core charge</strong>, in stock today. The core charge is refunded when the old alternator is returned complete and undamaged within 30 days.</li></ul>
        <p>Your manager approves the reman part.</p>`,
      form: `<div class="sim-form__grid">
          <label class="field"><span>Paid at pickup ($)</span><input class="input" name="paid" inputmode="decimal" autocomplete="off"></label>
          <label class="field"><span>Credit when the core is accepted ($)</span><input class="input" name="credit" inputmode="decimal" autocomplete="off"></label>
          <label class="field"><span>Final parts cost ($)</span><input class="input" name="net" inputmode="decimal" autocomplete="off"></label>
        </div>
        ${simRadios('old', 'The shop removed the failed alternator. What happens to it?', ['Scrap it: it\'s broken', 'Keep it on the shelf as a spare', 'Return it to the supplier within 30 days, complete, in the reman part\'s box, tagged with the invoice number', 'Send it home with the driver'])}
        ${simRadios('track', 'What goes on the work order?', ['Only the $' + PART + ' part price', 'The part and the core charge, marked "core return pending", until the credit shows up', 'Nothing until the supplier invoice arrives'])}`,
      grade: (f) => {
        const paid = simNum(f.get('paid')), credit = simNum(f.get('credit')), net = simNum(f.get('net'));
        return [
          [paid === PART + CORE, 'Paid at pickup', paid === PART + CORE ? `$${PART} part + $${CORE} core charge = $${PART + CORE}.` : `You pay the part and the core charge up front: $${PART} + $${CORE} = $${PART + CORE}.`],
          [credit === CORE, 'Core credit', credit === CORE ? 'The full core charge comes back when the core is accepted.' : `The credit is the core charge: $${CORE}, if the core is accepted.`],
          [net === PART, 'Final cost', net === PART ? `$${PART + CORE} − $${CORE} = $${PART}, but only if the core goes back.` : `After the credit: $${PART + CORE} − $${CORE} = $${PART}. Without the return, the alternator really cost $${PART + CORE}.`],
          [f.get('old') === '2', 'The old alternator', f.get('old') === '2' ? 'Returned on time and complete, it earns the credit. Damaged or incomplete cores can lose some or all of it.' : 'The failed alternator is the core: it is worth $' + CORE + ' back. Return it complete, on time and labeled so the supplier can match it to your invoice.'],
          [f.get('track') === '1', 'Work order', f.get('track') === '1' ? 'Marking the return as pending keeps the credit from being forgotten.' : 'Record the core charge and mark the return as pending. Forgotten cores are money the fleet never gets back.']
        ];
      },
      done: () => `<p class="small mt-3">Done right, the reman part saved $${610 - PART} against the new one and got the truck back today.</p>`
    });
  },

  /* ---- Warranty claim ---- */
  'sim:warranty': (el) => {
    const RO_MI = 402300, NOW_MI = 431900;
    opsSim(el, {
      id: 'sim:warranty', ic: 'shield', title: 'Start a warranty claim', bar: 'Repair request · T-126',
      label: 'Fictional shop, repair order and warranty terms.',
      brief: `<p><strong>Monday, September 28.</strong> The driver of <strong>T-126</strong> reports coolant dripping from the front of the engine. The odometer reads <strong>${fmtNum(NOW_MI)} mi</strong>.</p>
        <p>History: on <strong>March 2</strong>, Delta Diesel replaced the water pump on <strong>RO 5120</strong> at <strong>${fmtNum(RO_MI)} mi</strong>. Their invoice states a <strong>12-month, unlimited-mile parts and labor warranty</strong>.</p>`,
      form: `<div class="sim-form__grid">
          <label class="field"><span>Miles since the earlier repair</span><input class="input" name="miles" inputmode="numeric" autocomplete="off"></label>
          <label class="field"><span>Inside the shop's warranty?</span><select class="select" name="inside"><option value="">Choose…</option><option value="yes">Yes</option><option value="no">No</option></select></label>
        </div>
        ${simRadios('first', 'What do you do first?', ['Send T-126 to the closest shop and approve a new pump', 'Call Delta Diesel, give them RO 5120, and ask them to diagnose under their warranty and confirm coverage before any repair', 'Have the driver top up coolant and keep running until the next PM', 'Wait for the invoice, then ask for a refund'])}
        ${simChecks('pack', 'What goes in the claim? Pick everything that belongs.', ['Unit number and full VIN', 'Odometer reading at the failure', 'Original repair order RO 5120 and its date', 'A factual description: coolant leak at the water pump, when it started', 'Ask the shop to keep the failed pump', 'The driver\'s home address', 'Last month\'s fuel receipts'])}`,
      grade: (f) => {
        const miles = simNum(f.get('miles')); const pack = new Set(f.getAll('pack'));
        const want = ['0', '1', '2', '3', '4']; const extra = ['5', '6'].filter((x) => pack.has(x));
        const missing = want.filter((x) => !pack.has(x));
        return [
          [miles === NOW_MI - RO_MI, 'Miles since the repair', miles === NOW_MI - RO_MI ? `${fmtNum(NOW_MI)} − ${fmtNum(RO_MI)} = ${fmtNum(NOW_MI - RO_MI)} mi.` : `${fmtNum(NOW_MI)} − ${fmtNum(RO_MI)} = ${fmtNum(NOW_MI - RO_MI)} mi.`],
          [f.get('inside') === 'yes', 'Coverage', f.get('inside') === 'yes' ? 'About 7 months after the repair, and the warranty has no mileage limit.' : 'March 2 to September 28 is about 7 months, inside 12 months, and the miles are unlimited. It is worth claiming.'],
          [f.get('first') === '1', 'First step', f.get('first') === '1' ? 'Checking coverage before work starts keeps the claim possible. Another shop\'s repair usually can\'t be claimed afterwards.' : 'Contact the shop that did the repair first, with the RO number, and confirm coverage before anyone replaces the pump. Claims are hard to recover once someone else does the work.'],
          [!missing.length && !extra.length, 'Claim packet', !missing.length && !extra.length ? 'Unit, meter, the original RO, a factual failure description and the failed part.' : [missing.length ? 'Missing: ' + missing.map((x) => ['the unit and VIN', 'the odometer at failure', 'the original RO', 'the failure description', 'keeping the failed part'][+x]).join(', ') + '.' : '', extra.length ? 'Leave out personal details and unrelated records.' : ''].filter(Boolean).join(' ')]
        ];
      },
      done: () => '<p class="small mt-3">Log the claim and its outcome. Warranty recovered is a number worth tracking.</p>'
    });
  }
});

SIM_LIST.push(
  ['sim:dvir', 'Close the DVIR loop', 'Driver inspections', { href: '#/lesson/beginner/m9/l1', name: 'Driver Inspections and the DVIR Loop' }],
  ['sim:core', 'Order a part with a core charge', 'Parts', { href: '#/lesson/advanced/m9/l1', name: 'Parts Sourcing: OEM, Aftermarket and Remanufactured' }],
  ['sim:warranty', 'Start a warranty claim', 'Warranty', { href: '#/lesson/expert/m6/l2', name: 'Warranty Communication and Documentation' }]
);
