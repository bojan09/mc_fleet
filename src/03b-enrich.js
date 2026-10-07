
/* ---------------------------------------------------------------------------
   CONTENT — Infographics, new lessons and field notes
   Infographic blocks use { ig: '<type>', title, ... } and are rendered by
   infographicHTML(). REF holds reusable reference graphics shared by lessons
   and the Quick Reference page. enrich() appends blocks / field notes to an
   existing lesson; addLesson() inserts a new lesson into a module.
   --------------------------------------------------------------------------- */
function lessonAt(key) {
  const [t, m, l] = key.split('.');
  return TRACKS.find((x) => x.id === t).modules.find((x) => x.id === m).lessons.find((x) => x.id === l);
}
function enrich(key, { add = [], at, tips, mistakes } = {}) {
  const l = lessonAt(key);
  if (at == null) l.body.push(...add); else l.body.splice(at, 0, ...add);
  if (tips) l.tips = tips;
  if (mistakes) l.mistakes = mistakes;
}
function addLesson(trackId, moduleId, lesson) {
  TRACKS.find((x) => x.id === trackId).modules.find((x) => x.id === moduleId).lessons.push(lesson);
}

const REF = {
  urgency: { ig: 'matrix', icon: 'target', title: 'The urgency matrix', y: 'Safety risk', x: 'Operational impact', q: [
    { t: 'Hold — repair before it moves', tone: 'critical', items: ['Trailer lights out at the yard', 'Brake defect found on an empty unit', 'Expired annual inspection'] },
    { t: 'Stop & fix now', tone: 'critical', items: ['Brake air leak, loaded, deadline today', 'Damaged steer tire', 'Red STOP ENGINE lamp'] },
    { t: 'Schedule', tone: 'success', items: ['Amber lamp, running normally, empty', 'Cab comfort items', 'PM due in 2,000 miles'] },
    { t: 'Fast-track the repair', tone: 'warning', items: ['Derate on a loaded truck (safe location)', 'Reefer alarm with cargo', 'Parts delay on a loaded unit'] }
  ], note: 'Safety risk always overrides operational impact: anything in the top row does not move until a qualified technician clears it.' },
  lamps: { ig: 'scale', icon: 'alert', title: 'Warning lamp color guide', stops: [
    { t: 'Green / blue', d: 'Information — a system is on or active.', tone: 'success' },
    { t: 'Amber', d: 'Attention — diagnose soon; watch for any change.', tone: 'warning' },
    { t: 'Amber + power loss', d: 'Likely derate — get to a safe place; arrange prompt diagnosis.', tone: 'warning' },
    { t: 'Red', d: 'Serious — stop safely as soon as possible.', tone: 'critical' }
  ], note: 'Symbols vary by manufacturer; color is the most reliable first clue. Always ask the driver to read the exact message.' },
  update: { ig: 'process', icon: 'message', title: 'The dispatch update formula', items: [
    { icon: 'truck', t: 'Unit', d: 'Tractor + trailer' }, { icon: 'activity', t: 'Status', d: 'Down, at shop, rolling' }, { icon: 'wrench', t: 'Cause', d: 'Short and factual' },
    { icon: 'clock', t: 'ETR', d: 'With confidence level' }, { icon: 'route', t: 'Impact', d: 'Load and appointment' }, { icon: 'phone', t: 'Next update', d: 'A specific time' }
  ] },
  intake: { ig: 'card', icon: 'clipboard', title: 'The complaint intake card', form: 'Case intake · T-127', rows: [
    ['Safe location?', 'Yes — truck stop, off the roadway'], ['Unit / trailer', 'T-127 / TR-532'], ['Location', 'Love\'s, I-40 exit 76, Amarillo TX'], ['Odometer / hours', '412,880 mi'],
    ['What happened', 'Hissing, low-air warning cycling on/off'], ['When / trend', '~20 min ago · getting worse'], ['Where on vehicle', 'Rear of tractor, drive-axle area'], ['Lamps / codes', 'Low-air warning'],
    ['Performance', 'Air gauge drops fast when braking'], ['Load / deadline', 'Loaded · delivery 13:00']
  ], note: 'Ten fields, about two minutes on the phone. Every field answers a question the vendor, dispatch or the case log will ask later.' },
  ladder: { ig: 'ladder', icon: 'trend', title: 'The escalation ladder', levels: [
    { t: 'Coordinator', d: 'Within your approval limit and written procedure.' },
    { t: 'Lead / supervisor', d: 'Capacity conflicts, unclear procedure, disputes with dispatch.' },
    { t: 'Fleet manager', d: 'Costs above your limit, repeat failures, vendor disputes.' },
    { t: 'Leadership', d: 'Major customer impact, policy or budget decisions.' }
  ], note: 'Safety or compliance concerns go to the safety department immediately — at any level, without climbing the ladder first.' },
  triage: { ig: 'pyramid', icon: 'layers', title: 'Disruption triage pyramid', levels: [
    { t: 'Life safety', d: 'People in danger, vehicles in unsafe locations.', tone: 'critical' },
    { t: 'Safety-critical defects', d: 'Brakes, steering, tires, lighting, fire risk.', tone: 'critical' },
    { t: 'Time-critical cargo', d: 'Reefer loads, hard deadlines, high-value freight.', tone: 'warning' },
    { t: 'Revenue impact', d: 'Loaded units first, then empty units.', tone: 'info' },
    { t: 'Routine', d: 'Defer and schedule.', tone: 'success' }
  ] },
  kpis: { ig: 'formulas', icon: 'bar', title: 'Core KPI formulas', items: [
    { t: 'Cost per mile', f: 'maintenance cost ÷ miles', d: 'Lower is better' },
    { t: 'Downtime %', f: 'downtime h ÷ available h × 100', d: 'Lower is better' },
    { t: 'Fleet availability', f: '(available h − downtime h) ÷ available h', d: 'Higher is better' },
    { t: 'PM compliance', f: 'PMs on time ÷ PMs due × 100', d: 'Higher is better' },
    { t: 'Repeat repair rate', f: 'repeat repairs ÷ total repairs', d: 'Lower is better' },
    { t: 'Breakdown frequency', f: 'road calls ÷ miles × 100,000', d: 'Lower is better' },
    { t: 'MTBF', f: 'operating h ÷ failures', d: 'Higher is better' },
    { t: 'MTTR', f: 'repair h ÷ repairs', d: 'Lower is better' }
  ] },
  tireRules: { ig: 'stats', icon: 'target', title: 'Tire and roadside numbers to know (U.S.)', items: [
    { v: '18', l: 'tires on a standard five-axle tractor-trailer', tone: 'info' },
    { v: '4/32', u: 'in', l: 'minimum steer-tire tread depth', tone: 'critical' },
    { v: '2/32', u: 'in', l: 'minimum tread depth on other positions', tone: 'warning' },
    { v: '10', u: 'min', l: 'to place warning devices after a stop on the road', tone: 'info' }
  ], note: 'Based on FMCSA rules (49 CFR 393.75 and 392.22). Your safety department is the authority on how they apply.' },
  workorder: { ig: 'annotated', icon: 'file', title: 'Anatomy of a repair order', lines: [
    ['RO# 88213 · Lone Star Truck Center — Dallas, TX', 1], ['Unit T-114 · VIN …48213 · Odo 512,340 · Eng hrs 18,902', 2], ['Complaint: Coolant leak, front of engine', 3],
    ['Cause: Water pump seal failure', 4], ['Correction: Replaced water pump, pressure tested system', 5], ['Parts $620 · Labor 4.5 h @ $190 · Supplies $45', 6], ['In 06/12 08:40 · Out 06/12 15:55 · PO 22019', 7]
  ], notes: [
    { n: 1, t: 'Reference numbers', d: 'Tie the invoice to your case and PO.' }, { n: 2, t: 'Identity & meters', d: 'Needed for warranty and PM intervals.' },
    { n: 3, t: 'Complaint', d: 'What the driver reported.' }, { n: 4, t: 'Cause', d: 'What the technician found.' }, { n: 5, t: 'Correction', d: 'What was actually done.' },
    { n: 6, t: 'Cost detail', d: 'Compare line by line to the approved estimate.' }, { n: 7, t: 'Times & approval', d: 'Downtime math and the approval trail.' }
  ] },
  roadside: { ig: 'process', icon: 'route', title: 'The roadside pattern', items: [
    { icon: 'shield', t: 'Make it safe', d: 'Off the road, hazards, warning devices' }, { icon: 'clipboard', t: 'Gather facts', d: 'Unit, location, symptom, lamps' },
    { icon: 'wrench', t: 'Right help', d: 'Tire, mobile tech or tow' }, { icon: 'message', t: 'Communicate', d: 'Driver, dispatch, safety' }, { icon: 'clock', t: 'Track to release', d: 'Follow-ups until rolling' }
  ] }
};

/* ---------------- Beginner enrichments ---------------- */
enrich('beginner.m1.l1', {
  add: [
    { ig: 'process', icon: 'route', title: 'How one load moves through a trucking company', items: [
      { icon: 'file', t: 'Load booked', d: 'Customer tenders freight' }, { icon: 'route', t: 'Dispatched', d: 'Truck + driver assigned' }, { icon: 'layers', t: 'Pickup', d: 'Trailer loaded' },
      { icon: 'truck', t: 'In transit', d: 'Maintenance risk lives here' }, { icon: 'pin', t: 'Delivery', d: 'Appointment met or missed' }, { icon: 'dollar', t: 'Invoice', d: 'Revenue earned' }
    ] },
    { ig: 'stats', icon: 'truck', title: 'A tractor-trailer by the numbers', items: [
      { v: '2', l: 'separate units per combination — tractor + trailer', tone: 'info' }, { v: '18', l: 'tires on a standard five-axle combination', tone: 'info' },
      { v: '17', l: 'characters in every VIN', tone: 'info' }, { v: '53', u: 'ft', l: 'a common length for U.S. dry-van trailers', tone: 'info' }
    ] }
  ],
  tips: ['Keep the dispatch board open — it tells you who, what unit, what load and what deadline in one line.', 'Learn your fleet\'s unit-number pattern (e.g., T- for tractors, TR- for trailers) so you catch typos instantly.'],
  mistakes: ['Opening a case on the tractor when the problem is on the trailer.', 'Forgetting that a stuck trailer means a stuck load — even if another tractor is available.']
});
enrich('beginner.m1.l2', {
  add: [{ ig: 'hub', icon: 'users', title: 'The coordinator at the center', center: { icon: 'clipboard', t: 'Maintenance Coordinator' }, items: [
    { icon: 'users', t: 'Driver', d: 'Reports symptoms' }, { icon: 'route', t: 'Dispatch', d: 'Needs your ETRs' }, { icon: 'wrench', t: 'Shop / technician', d: 'Diagnoses & repairs' },
    { icon: 'layers', t: 'Parts', d: 'Lead times & options' }, { icon: 'bar', t: 'Fleet manager', d: 'Approvals & policy' }, { icon: 'shield', t: 'Safety', d: 'Compliance & incidents' },
    { icon: 'activity', t: 'Operations', d: 'Customer commitments' }, { icon: 'dollar', t: 'Accounting', d: 'Invoices & POs' }
  ] }],
  tips: ['Save direct lines for your most-used shops and dispatchers — minutes matter on roadside calls.', 'When two departments want different things, write down both needs before you decide.'],
  mistakes: ['Letting dispatch learn about a delay from the driver instead of from you.', 'Giving a shop only "check engine light" when the driver told you much more.']
});
enrich('beginner.m2.l1', {
  add: [{ ig: 'gantt', icon: 'clock', title: 'A coordinator\'s morning — work runs in parallel', from: '07:00', to: '12:00', ticks: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00'], rows: [
    { l: 'Fleet review', s: '07:00', e: '07:30', tone: 'info', note: 'Down units, PMs' }, { l: 'T-131 coolant alert', s: '07:10', e: '07:45', tone: 'warning', note: 'Telematics' },
    { l: 'Door latch call', s: '07:25', e: '07:55', tone: 'info' }, { l: 'T-108 follow-up', s: '07:40', e: '08:10', tone: 'info' },
    { l: 'TR-532 roadside tire', s: '08:30', e: '10:15', tone: 'critical', note: 'Safety first' }, { l: 'PM scheduling', s: '10:30', e: '11:15', tone: 'success' },
    { l: 'Invoice review', s: '11:15', e: '12:00', tone: 'neutral' }
  ], note: 'Illustrative schedule. The skill is keeping several open cases moving at once without losing any of them.' }],
  tips: ['Start every shift with a fleet review: units down, ETRs due today, PMs due this week.', 'Write the next follow-up time on every open case before you move on.'],
  mistakes: ['Working cases strictly in the order they arrived instead of by urgency.', 'Relying on memory for open cases instead of a written list.']
});
enrich('beginner.m2.l2', {
  add: [{ ig: 'pipeline', icon: 'list-check', title: 'The life of a maintenance case', items: [
    { t: 'Open', tone: 'info' }, { t: 'Vendor assigned', tone: 'info' }, { t: 'At shop / on site', tone: 'info' }, { t: 'Diagnosed', tone: 'warning' },
    { t: 'Approved', tone: 'warning' }, { t: 'In repair', tone: 'warning' }, { t: 'Released', tone: 'success' }, { t: 'Closed', tone: 'success' }
  ], note: 'Every status change is a moment to update dispatch and write a time-stamped note.' }],
  tips: ['Update dispatch at each status change — not only at the end.', 'Before closing, ask the driver directly: "Is the problem gone?"'],
  mistakes: ['Closing a case when the shop says "done" but before the driver confirms.', 'Leaving a case in "diagnosed" for hours while an approval waits in your inbox.']
});
enrich('beginner.m3.l2', {
  add: [{ ig: 'process', icon: 'zap', title: 'Air brakes at a glance — how air reaches the wheels', items: [
    { icon: 'activity', t: 'Compressor', d: 'Engine-driven, builds pressure' }, { icon: 'thermo', t: 'Air dryer', d: 'Removes moisture' }, { icon: 'layers', t: 'Reservoirs', d: 'Store the air' },
    { icon: 'target', t: 'Brake valve', d: 'Driver\'s pedal' }, { icon: 'zap', t: 'Brake chambers', d: 'Air becomes force' }, { icon: 'wrench', t: 'Slack adjusters', d: 'Keep brakes adjusted' }
  ], note: 'A leak anywhere in this chain can cause a low-air warning — which is why air leaks are always treated as brake-system defects.' }],
  tips: ['Ask "tractor or trailer?" first on every tire, brake and light complaint.', 'For tire calls, ask which axle, which side, and inside or outside dual.'],
  mistakes: ['Treating a "small air leak" as minor — any air loss affects the braking system.', 'Assuming the trailer has the same maintenance history as the tractor pulling it.']
});
enrich('beginner.m4.l1', { add: [REF.intake],
  tips: ['Read your summary back to the driver: "So — grinding, front left, when braking, since this morning. Right?"', 'Put a number on vague words: how many drops, how many miles, how many minutes.'],
  mistakes: ['Skipping the safety question because the driver sounds calm.', 'Writing the driver\'s guess ("bad turbo") as the complaint.']
});
enrich('beginner.m4.l2', {
  add: [{ ig: 'scale', icon: 'alert', title: 'Listen for escalation words', stops: [
    { t: 'Noise · vibration · amber lamp', d: 'Gather details, assess, schedule or send help.', tone: 'info' },
    { t: 'Leak · smell · derate', d: 'Get to a safe place; arrange prompt service.', tone: 'warning' },
    { t: 'Smoke · steam · red lamp · air loss', d: 'Stop safely now. Do not continue.', tone: 'critical' },
    { t: 'Fire · can\'t stop · crash', d: 'Emergency services first if anyone is at risk; then follow company emergency procedure.', tone: 'critical' }
  ] }],
  tips: ['Keep a printed intake card by your phone until the questions become automatic.', 'If the driver is stressed, slow down your own voice — it calms the call.'],
  mistakes: ['Asking for the odometer before confirming the driver is off the road.', 'Hanging up without telling the driver when you will call back.']
});
enrich('beginner.m5.l1', { add: [REF.urgency],
  tips: ['When in doubt about safety, hold the unit and get a qualified technician\'s opinion.', 'Bring dispatch a recovery option at the same time you give them bad news.'],
  mistakes: ['Letting schedule pressure decide a safety question.', 'Treating a short distance as a reason to drive with a safety defect.']
});
enrich('beginner.m5.l2', { add: [REF.roadside],
  tips: ['Ask for the nearest mile marker and direction of travel — it saves vendors real time.', 'For reefer loads, ask for the current box temperature and set point on the first call.'],
  mistakes: ['Asking drivers to attempt repairs they are not trained or equipped for.', 'Sending a tow before knowing whether a mobile repair could fix it.']
});
enrich('beginner.m6.l2', {
  add: [{ ig: 'gantt', icon: 'clock', title: 'Case TR-518: where the two hours went', from: '10:00', to: '12:15', ticks: ['10:00', '10:30', '11:00', '11:30', '12:00'], rows: [
    { l: 'Intake & urgency', s: '10:02', e: '10:08', tone: 'info' }, { l: 'Find vendor', s: '10:08', e: '10:15', tone: 'info' },
    { l: 'Vendor travel', s: '10:15', e: '10:55', tone: 'neutral', note: 'Waiting' }, { l: 'Diagnosis', s: '10:55', e: '11:20', tone: 'warning' },
    { l: 'Approval', s: '11:20', e: '11:25', tone: 'success', note: '5 min' }, { l: 'Repair', s: '11:30', e: '12:00', tone: 'warning' },
    { l: 'Confirm & close', s: '12:00', e: '12:10', tone: 'success' }
  ], note: 'The 5-minute approval is what good looks like — the estimate was within the coordinator\'s limit and approved immediately.' }],
  tips: ['Log a time stamp at every step — the timeline builds itself.', 'Ask the vendor to call you the moment diagnosis is done, not when the repair is.'],
  mistakes: ['Letting approval become the longest bar on the timeline.', 'Recording "morning" instead of an actual time.']
});
enrich('beginner.m7.l1', { add: [REF.update],
  tips: ['Use the same structure every time — dispatchers learn to read your updates in seconds.', 'If nothing changed, still send the update at the promised time: "No change, next update 15:00."'],
  mistakes: ['"Soon" and "should be fine" instead of times.', 'Waiting until the ETR is missed to tell anyone it will be missed.']
});
enrich('beginner.m7.l2', {
  add: [{ ig: 'stats', icon: 'message', title: 'What each audience wants first', items: [
    { v: 'Next step', l: 'Driver — what happens now and when you\'ll call', tone: 'info' }, { v: 'Time', l: 'Dispatch — ETR and load impact', tone: 'warning' },
    { v: 'Detail', l: 'Technician — complaint, codes, history, authorization', tone: 'neutral' }, { v: 'Decision', l: 'Manager — the ask, cost and risk', tone: 'success' }
  ] }],
  tips: ['Lead with the one thing the reader needs, then add detail.', 'Put authorization rules in writing on every shop request.'],
  mistakes: ['Sending a technical paragraph to a manager who needs one decision.', 'Forwarding a whole message thread instead of summarizing it.']
});
enrich('beginner.m8.l1', { add: [REF.workorder],
  tips: ['Ask every shop for complaint, cause and correction on the RO — make it a standing request.', 'Record odometer and engine hours on every case, even small ones.'],
  mistakes: ['Accepting an RO that lists parts but not the cause.', 'Leaving mileage blank — it makes warranty claims much harder.']
});
enrich('beginner.m8.l2', {
  add: [{ ig: 'donut', icon: 'dollar', title: 'Where the T-114 invoice went', fmt: '$', center: '$1,520', centerSub: 'invoice total', items: [['Labor · 4.5 h', 855], ['Parts · water pump', 620], ['Shop supplies', 45]] }],
  tips: ['Compare every invoice to the approved estimate before it goes to accounting.', 'Note who approved, when, and how much — in the case, not only in email.'],
  mistakes: ['Approving by phone and never writing it down.', 'Forgetting the core return, so the core credit never arrives.']
});

/* ---------------- Advanced enrichments ---------------- */
enrich('advanced.m1.l1', {
  add: [{ ig: 'stackcompare', icon: 'dollar', title: 'The same belt: found at a PM vs. failed on the road', fmt: '$', cols: [
    { t: 'Found at PM', items: [['Parts', 90], ['Labor', 150]] },
    { t: 'Failed on the road', items: [['Parts', 90], ['Labor', 150], ['Service call / after-hours', 250], ['Tow', 900], ['Downtime (1 day)', 900], ['Late delivery fee', 250]] }
  ], note: 'Illustrative figures. The part costs the same either way — the difference is everything around the failure.' }],
  tips: ['Plan PMs around home time and loads that end near a shop.', 'Book the PM appointment when you tell dispatch — not after.'],
  mistakes: ['Waiting until a PM is overdue to start planning it.', 'Using mileage-only intervals for units that idle for hours every day.']
});
enrich('advanced.m1.l2', {
  add: [{ ig: 'pipeline', icon: 'list-check', title: 'This week\'s PM board (example 50-unit fleet)', items: [
    { t: 'OK', n: 38, tone: 'success' }, { t: 'Due soon', n: 6, tone: 'info' }, { t: 'Due', n: 4, tone: 'warning' }, { t: 'Overdue', n: 2, tone: 'critical' }
  ], note: 'Work the board right to left: overdue first, then due, then plan the due-soon units into next week\'s loads.' }],
  tips: ['Ask why each overdue unit is overdue — the answer tells you what to fix.', 'Check annual inspection dates separately from PM intervals.'],
  mistakes: ['Treating an expired annual inspection like a late oil change.', 'Letting the same unit slip three weeks in a row without escalating.']
});
enrich('advanced.m2.l1', {
  add: [REF.lamps, { ig: 'annotated', icon: 'zap', title: 'Reading a J1939 fault code', lines: [['SPN 3251', 1], ['FMI 0', 2], ['Status: Active · Occurrences: 3', 3], ['Lamp: Amber (DPF)', 4]], notes: [
    { n: 1, t: 'SPN — what', d: 'The parameter involved. SPN 3251 relates to DPF differential pressure.' },
    { n: 2, t: 'FMI — how', d: 'The failure mode. FMI 0 means the data is valid but above the normal operating range.' },
    { n: 3, t: 'Active + count', d: 'Present now, and it has occurred more than once.' },
    { n: 4, t: 'Lamp', d: 'Tells you the urgency the engine computer assigned.' }
  ] }],
  tips: ['Ask for the full code (SPN + FMI), not just "a DPF code".', 'Note whether a code is active or inactive — shops care about the difference.'],
  mistakes: ['Ordering parts based on a code alone.', 'Asking a driver to clear codes before a technician has read them.']
});
enrich('advanced.m2.l2', {
  add: [{ ig: 'process', icon: 'wrench', title: 'How a diagnosis unfolds', items: [
    { icon: 'message', t: 'Complaint', d: 'Driver\'s description' }, { icon: 'zap', t: 'Codes & data', d: 'Active, inactive, snapshots' }, { icon: 'flask', t: 'Tests', d: 'Pressures, temps, resistance' },
    { icon: 'target', t: 'Findings', d: 'Confirmed cause' }, { icon: 'clipboard', t: 'Plan', d: 'Repair + plan B' }, { icon: 'clock', t: 'Estimate & ETR', d: 'Cost and time' }
  ] }],
  tips: ['Ask "what\'s confirmed and what\'s still being tested?" on every diagnosis call.', 'Ask for plan B and its ETR up front.'],
  mistakes: ['Passing a best-case ETR to dispatch as if it were certain.', 'Arguing with a technician about the diagnosis instead of asking about the plan.']
});
enrich('advanced.m3.l1', {
  add: [{ ig: 'donut', icon: 'dollar', title: 'Breaking down the water-pump estimate', fmt: '$', center: '$1,688', centerSub: 'estimate', items: [['Parts (pump + coolant)', 720], ['Labor 3.5 h', 647.5], ['Diagnostics', 185], ['Core (refundable)', 75], ['Supplies & fees', 60]] }],
  tips: ['Check labor hours against book time for common jobs.', 'Track core returns until the credit shows up.'],
  mistakes: ['Paying diagnostics twice when a unit moves between shops.', 'Treating the core charge as a cost instead of a deposit.']
});
enrich('advanced.m3.l2', {
  add: [{ ig: 'ladder', icon: 'dollar', title: 'Example approval path by amount', levels: [
    { t: 'Up to your limit', d: 'Coordinator approves and documents.' }, { t: 'Above your limit', d: 'Fleet manager approves.' },
    { t: 'Major component', d: 'Engine, transmission — manager + leadership.' }, { t: 'Repair vs replace', d: 'Leadership and finance decide.' }
  ], note: 'Limits differ in every company. Never split an invoice to fit under a limit.' }],
  tips: ['Ask for photos or measurements on any "recommended" item.', 'Check warranty before anyone picks up a wrench.'],
  mistakes: ['Approving "while we\'re in there" work with no evidence.', 'Letting a non-authorized shop do warranty-eligible work.']
});
enrich('advanced.m4.l1', {
  add: [{ ig: 'bars', icon: 'clock', title: 'Closest isn\'t fastest: hours until work starts', fmt: 'h', items: [
    ['Shop A · 10 mi · 3-day backlog', 72, 'critical'], ['Dealer · 60 mi · starts tomorrow', 20, 'warning'], ['Independent · 45 mi · starts today', 6, 'success'], ['Mobile tech · on site', 1.5, 'success']
  ], note: 'Example comparison. Add tow cost and parts availability before deciding.' }],
  tips: ['Ask "when can you actually start?" — not "are you open?"', 'Confirm the shop has the diagnostic software for that engine make.'],
  mistakes: ['Choosing a shop only because it\'s closest.', 'Not asking about parts availability until after diagnosis.']
});
enrich('advanced.m4.l2', {
  add: [{ ig: 'card', icon: 'route', title: 'Tow order checklist', form: 'Tow request', rows: [
    ['Exact location', 'I-30 WB, mile marker 118, right shoulder'], ['Unit type', 'Tractor + loaded 53\' dry van'], ['Approx. weight', '~72,000 lb gross'], ['Problem', 'Brakes won\'t release after air loss'],
    ['Destination', 'Lone Star Truck Center, Texarkana'], ['Contact on site', 'Driver: J. Patel'], ['Billing / PO', 'PO 22044 · approval on file']
  ] }],
  tips: ['Keep a lane-by-lane vendor list with after-hours numbers.', 'Ask tow companies for hookup, mileage and hourly rates before dispatching.'],
  mistakes: ['Ordering a light-duty wrecker for a tractor.', 'Towing 150 miles to a preferred shop when a capable one is 30 miles away.']
});
enrich('advanced.m5.l2', {
  add: [{ ig: 'gantt', icon: 'clock', title: 'Building an ETR from its stages', from: '08:00', to: '17:00', ticks: ['08:00', '10:00', '12:00', '14:00', '16:00'], rows: [
    { l: 'Diagnosis', s: '08:00', e: '10:00', tone: 'info' }, { l: 'Approval', s: '10:00', e: '10:30', tone: 'success' },
    { l: 'Part in transit', s: '10:00', e: '13:00', tone: 'warning', note: 'Critical path' }, { l: 'Repair', s: '13:00', e: '16:00', tone: 'info' },
    { l: 'Road test', s: '16:00', e: '16:30', tone: 'success' }, { l: 'ETR', s: '16:30', e: '16:30', tone: 'critical', note: '16:30' }
  ], note: 'Approval runs in parallel with shipping, so the part — not the approval — sets the ETR.' }],
  tips: ['Find the critical path — the longest chain of steps that can\'t overlap.', 'Ask shops to order likely parts during diagnosis.'],
  mistakes: ['Adding every stage end-to-end when some run in parallel.', 'Giving an ETR without saying how confident you are.']
});
enrich('advanced.m6.l1', {
  add: [{ ig: 'gantt', icon: 'clock', title: 'The 14-hour trap', from: '06:00', to: '22:00', ticks: ['06:00', '10:00', '14:00', '18:00', '22:00'], rows: [
    { l: '14-hour window', s: '06:00', e: '20:00', tone: 'info', note: 'Ends 20:00' }, { l: 'Driving', s: '06:00', e: '11:00', tone: 'success' },
    { l: 'Breakdown & repair', s: '11:00', e: '16:30', tone: 'critical', note: 'Window keeps running' }, { l: 'Legal time left', s: '16:30', e: '20:00', tone: 'warning', note: '3.5 h' },
    { l: 'Drive still needed', s: '16:30', e: '21:30', tone: 'neutral', note: '5 h' }
  ], note: 'Simplified example of the U.S. 14-hour on-duty window. Dispatch and safety own hours-of-service decisions — your accurate ETR is what they plan with.' }],
  tips: ['Tell dispatch early when a repair will eat into the driver\'s day.', 'Ask whether a relay driver is possible before the repair finishes.'],
  mistakes: ['Assuming a fixed truck means an on-time load.', 'Pressuring a driver to "push through" after a long repair.']
});
enrich('advanced.m6.l2', {
  add: [{ ig: 'process', icon: 'route', title: 'Recovery decision in four questions', items: [
    { icon: 'clock', t: 'ETR confidence?', d: 'High, medium or low' }, { icon: 'target', t: 'Load deadline?', d: 'Flexible or firm' },
    { icon: 'truck', t: 'Spare equipment?', d: 'Tractor, trailer, driver' }, { icon: 'check-circle', t: 'Choose', d: 'Wait · swap · rent · reschedule' }
  ] }],
  tips: ['Raise the recovery conversation when ETR confidence drops — not when the ETR is missed.', 'Coordinate keys, paperwork and swap location yourself.'],
  mistakes: ['Transloading cargo when the trailer is fine.', 'Waiting on a low-confidence ETR with a firm delivery.']
});
enrich('advanced.m7.l1', {
  add: [{ ig: 'bars', icon: 'bar', title: 'Downtime hours by system — one month', fmt: 'h', items: [
    ['Aftertreatment', 190, 'critical'], ['Engine', 70], ['Brakes', 52], ['Tires', 44], ['Electrical', 38], ['Other', 36]
  ], note: 'When one bar dominates, look for a small number of units driving it — here, one tractor logged 64 h.' }],
  tips: ['Sort by downtime and by repeats every week.', 'Look at patterns across units, vendors and routes — not only single cases.'],
  mistakes: ['Reviewing cases one by one and missing the pattern.', 'Tracking repairs but not downtime.']
});
enrich('advanced.m8.l1', {
  add: [{ ig: 'stackcompare', icon: 'dollar', title: 'One year per tractor: PM-driven vs. reactive', fmt: '$', cols: [
    { t: 'PM-driven', items: [['PM services', 3200], ['Planned repairs', 4100], ['Tires', 2400]] },
    { t: 'Reactive', items: [['PM services', 1200], ['Road calls & tows', 3800], ['Unplanned repairs', 7900], ['Tires', 3100], ['Downtime cost', 6300]] }
  ], note: 'Illustrative figures to show the pattern, not a benchmark.' }],
  tips: ['Compare CPM between similar units — outliers deserve a look.', 'Include tows and downtime when you talk about the cost of a failure.'],
  mistakes: ['Cutting PM to save money this month.', 'Comparing CPM across very different duty cycles.']
});
enrich('advanced.m8.l2', {
  add: [{ ig: 'stackcompare', icon: 'dollar', title: 'Vendor A vs. B once downtime is counted', fmt: '$', cols: [
    { t: 'Vendor A · 1 day', items: [['Invoice', 2000], ['Downtime', 900]] }, { t: 'Vendor B · 3 days', items: [['Invoice', 1500], ['Downtime', 2700]] }
  ] }],
  tips: ['Use a downtime cost per day your fleet agrees on.', 'Track comebacks per vendor — a cheap repair that fails twice isn\'t cheap.'],
  mistakes: ['Choosing on invoice alone.', 'Ignoring tow distance in vendor comparisons.']
});

/* ---------------- Expert enrichments ---------------- */
enrich('expert.m1.l1', {
  add: [{ ig: 'matrix', icon: 'target', title: 'Choosing a strategy by consequence and predictability', y: 'Failure consequence', x: 'Failure predictability', q: [
    { t: 'Inspect often + measure', tone: 'critical', items: ['Brakes', 'Tires', 'Steering components'] },
    { t: 'Predict & replace on plan', tone: 'warning', items: ['Aftertreatment trends', 'Batteries before winter', 'Known model-year failures'] },
    { t: 'Run to failure (non-safety only)', tone: 'neutral', items: ['Interior lights', 'Cab accessories'] },
    { t: 'Interval-based', tone: 'success', items: ['Oil & filters', 'Fluids', 'Lubrication'] }
  ] }],
  tips: ['Write down which strategy applies to each major system — then check the PM program matches.', 'Use failure data to move items from "unpredictable" to "predictable".'],
  mistakes: ['Applying one interval to everything.', 'Letting a safety item drift into run-to-failure by neglect.']
});
enrich('expert.m1.l2', {
  add: [{ ig: 'process', icon: 'trend', title: 'From data to a replacement decision', items: [
    { icon: 'file', t: 'Clean history', d: 'Costs, downtime, repairs' }, { icon: 'trend', t: 'Trend', d: 'CPM & downtime by age' }, { icon: 'bar', t: 'Forecast', d: 'Upcoming major repairs' },
    { icon: 'clipboard', t: 'Business case', d: 'Keep vs. replace' }, { icon: 'check-circle', t: 'Decision', d: 'Leadership & finance' }
  ] }],
  tips: ['Flag units whose CPM is rising faster than the fleet average.', 'List known upcoming major repairs — they change the replacement math.'],
  mistakes: ['Arguing replacement with opinions instead of cost and downtime data.', 'Ignoring downtime when comparing old and new units.']
});
enrich('expert.m2.l1', { add: [REF.kpis],
  tips: ['Publish your KPI definitions so everyone measures the same way.', 'Show trends over at least 3–6 periods.'],
  mistakes: ['Changing a definition mid-year and comparing the numbers anyway.', 'Reporting a KPI without the action it suggests.']
});
enrich('expert.m3.l1', {
  add: [{ ig: 'fishbone', icon: 'branch', title: 'Cause-and-effect (fishbone): why does T-120 keep derating?', effect: 'Repeat DPF derates', bones: [
    { t: 'People', causes: ['Long idle periods', 'No regen guidance for drivers'] }, { t: 'Process', causes: ['Codes cleared without diagnosis', 'No RCA trigger'] },
    { t: 'Parts', causes: ['Failing outlet temp sensor', 'DPF loading'] }, { t: 'Equipment', causes: ['Different diagnostic tools at each vendor'] },
    { t: 'Environment', causes: ['Short hauls, low exhaust temps', 'Cold weather'] }, { t: 'Information', causes: ['History not shared', 'Three vendors, three partial views'] }
  ], note: 'A fishbone diagram organizes possible causes by category before you test them. Evidence decides which ones are real.' }],
  tips: ['Collect evidence for each "why" — photos, data, returned parts.', 'Involve the technician and driver in the analysis.'],
  mistakes: ['Stopping at the failed part.', 'Blaming a person when the process allowed the failure.']
});
enrich('expert.m3.l2', {
  add: [{ ig: 'gantt', icon: 'activity', title: 'T-120 failures by mileage', from: 400000, to: 418000, ticks: [[400000, '400k'], [404000, '404k'], [408000, '408k'], [412000, '412k'], [416000, '416k']], rows: [
    { l: 'Regen, codes cleared', s: 401220, e: 401220, tone: 'warning', note: 'Mobile A' }, { l: 'DPF cleaned', s: 407900, e: 407900, tone: 'warning', note: 'Shop B' },
    { l: 'Sensor replaced', s: 415300, e: 415300, tone: 'warning', note: 'Dealer C' }, { l: 'Heavy idle noted', s: 416800, e: 416800, tone: 'critical', note: 'Driver' },
    { l: 'Interval between', s: 401220, e: 415300, tone: 'neutral', note: '~7,000 mi apart' }
  ] }],
  tips: ['Plot repeat failures on a mileage line — the spacing tells a story.', 'Send the full history with the unit to the next shop.'],
  mistakes: ['Switching vendors each time and losing the history.', 'Treating each repeat as a new, unrelated case.']
});
enrich('expert.m4.l1', {
  add: [{ ig: 'hub', icon: 'layers', title: 'Six workstreams, one breakdown', center: { icon: 'alert', t: 'Breakdown' }, items: [
    { icon: 'shield', t: 'Safety', d: 'Always first' }, { icon: 'wrench', t: 'Repair', d: 'Vendor, parts, ETR' }, { icon: 'layers', t: 'Load', d: 'Recovery plan' },
    { icon: 'users', t: 'People', d: 'Driver care, HOS' }, { icon: 'dollar', t: 'Cost', d: 'Approvals, warranty' }, { icon: 'file', t: 'Record', d: 'Time-stamped log' }
  ] }],
  tips: ['Say the workstreams out loud at the start: it stops you from tunnel vision.', 'Set the update cadence in your first message to stakeholders.'],
  mistakes: ['Solving the repair perfectly while the load misses its window.', 'Taking status calls instead of working the next decision.']
});
enrich('expert.m6.l1', {
  add: [{ ig: 'gantt', icon: 'shield', title: 'Overlapping warranty windows (example terms)', from: 0, to: 48, ticks: [[0, 'In service'], [12, '12 mo'], [24, '24 mo'], [36, '36 mo'], [48, '48 mo']], rows: [
    { l: 'Base vehicle', s: 0, e: 24, tone: 'info' }, { l: 'Engine (extended)', s: 0, e: 48, tone: 'info' },
    { l: 'Shop repair · 12 mo', s: 20, e: 32, tone: 'success', note: 'From repair date' }, { l: 'Failure event', s: 30, e: 30, tone: 'critical', note: 'Month 30' }
  ], note: 'Illustrative terms only — real coverage depends on the manufacturer, contract, mileage and conditions. At month 30 the base warranty has expired, but the shop\'s repair warranty may still apply.' }],
  tips: ['Keep in-service dates and component serials on file for every unit.', 'Make warranty a checkbox on every repair over a set amount.'],
  mistakes: ['Checking only the base vehicle warranty.', 'Letting a shop discard a failed part that a claim needs.']
});
enrich('expert.m7.l1', { add: [REF.ladder],
  tips: ['Escalate with SBAR and a deadline for the decision.', 'Bring options, not only the problem.'],
  mistakes: ['Escalating late to avoid looking weak.', 'Escalating without a recommendation.']
});
enrich('expert.m8.l1', { add: [REF.triage],
  tips: ['Build one status list and share it — don\'t run a disruption from memory.', 'Pre-arrange overflow vendors before storm season.'],
  mistakes: ['Triaging by who called first.', 'Sending leadership raw message threads.']
});

/* ---------------- New lessons ---------------- */
addLesson('beginner', 'm3', {
  id: 'l3', title: 'Reading the Dashboard: Gauges and Warning Lamps', minutes: 15,
  objectives: ['Name the key gauges a driver may report', 'Explain what an abnormal reading means for urgency', 'Translate warning lamps into coordinator actions'],
  body: [
    `Drivers often describe problems by what they see on the dash. If you understand the main gauges and lamps, you can judge urgency within seconds — and ask better follow-up questions.`,
    { widget: 'gauges' },
    REF.lamps,
    { callout: { kind: 'safety', title: 'Oil pressure, temperature and air come first', text: 'A low oil pressure reading, a climbing temperature with steam, or a low-air warning each mean "stop safely" — they protect the engine and, in the case of air, the brakes.' } },
    { h: 'Questions to ask about any gauge or lamp' },
    { ul: ['What exactly does the message or lamp say — and what color is it?', 'Is the reading steady, climbing, or falling?', 'Did anything else change at the same time — power, noise, smoke?', 'Is it the first time, or has it happened before?'] }
  ],
  example: { title: '"The needle is low"', text: `A driver says "one of the needles is low." The coordinator asks which gauge. It\'s the voltmeter, and the battery lamp is on. The coordinator asks the driver <em>not</em> to shut the engine off yet (the truck may not restart), finds a shop 12 miles away that can test the charging system, and arranges for the driver to go straight there.` },
  practical: { title: 'Rate the reading', exercise: {
    type: 'classify', prompt: 'How urgent is each dashboard report?', categories: ['Stop safely now', 'Arrange service soon', 'Plan / monitor'],
    items: [
      { text: 'Oil pressure warning with the gauge near zero', answer: 'Stop safely now', why: 'Low oil pressure can destroy an engine quickly.' },
      { text: 'Low DEF warning, driving normally', answer: 'Plan / monitor', why: 'Refill at the next stop; if ignored, power limits follow.' },
      { text: 'Voltmeter reading low while driving, battery lamp on', answer: 'Arrange service soon', why: 'Charging problem — the truck may not restart. Get it tested before shutting down if possible.' },
      { text: 'Air pressure dropping with a low-air warning', answer: 'Stop safely now', why: 'Brake-system air loss is safety-critical.' },
      { text: 'Fuel gauge at a quarter tank', answer: 'Plan / monitor', why: 'A planning item for dispatch and the driver.' }
    ]
  } },
  check: [
    { t: 'mc', q: 'Why do tractors usually have two air pressure gauges?', o: ['One for each tire', 'They show the primary and secondary brake air circuits', 'One is for the trailer landing gear', 'For backup in case of a flat'], a: 1, e: 'The air brake system has primary and secondary circuits, each with its own gauge.' },
    { t: 'tf', q: 'A HEST (high exhaust system temperature) lamp during a regeneration is, by itself, a sign of a failure.', a: false, e: 'It indicates hot exhaust during regeneration at low speed — a caution to keep clear of flammable material, not a fault by itself.' }
  ],
  takeaways: ['Oil pressure, coolant temperature and air pressure are the "stop now" gauges when abnormal.', 'Lamp color is the first clue; the exact message is the second.', 'Ask whether readings are steady, climbing or falling.', 'Some problems (charging) change what the driver should do before shutting down.'],
  tips: ['Keep a photo reference of your fleet\'s dash layouts — makes and models differ.', 'Ask drivers to send a photo of the dash when safe.'],
  mistakes: ['Treating every lamp the same.', 'Telling a driver to shut down with a charging fault before a plan is in place.']
});

addLesson('beginner', 'm5', {
  id: 'l3', title: 'The First 10 Minutes of a Roadside Event', minutes: 13,
  objectives: ['Sequence the first actions of a roadside breakdown', 'Know the warning-device requirement', 'Keep the driver safe while you gather information'],
  body: [
    `The first ten minutes decide whether a breakdown stays a maintenance problem or becomes a safety incident. Drivers are trained on these steps — your job is to support them calmly and in the right order.`,
    { ig: 'gantt', icon: 'clock', title: 'The first 10 minutes', from: 0, to: 12, ticks: [[0, '0'], [2, '2 min'], [4, '4'], [6, '6'], [8, '8'], [10, '10 min']], rows: [
      { l: 'Pull off safely', s: 0, e: 1.5, tone: 'critical', note: 'As far from traffic as possible' }, { l: 'Hazard flashers', s: 0.5, e: 1.5, tone: 'critical' },
      { l: 'Warning devices out', s: 1.5, e: 10, tone: 'warning', note: 'Required within 10 min' }, { l: 'Call coordinator', s: 3, e: 6, tone: 'info' },
      { l: 'Location & facts', s: 4, e: 8, tone: 'info' }, { l: 'Help requested', s: 7, e: 10, tone: 'success' }
    ], note: 'Illustrative sequence. U.S. rules (49 CFR 392.22) require hazard flashers immediately and warning devices within 10 minutes when a truck stops on the traveled portion or shoulder of a highway.' },
    REF.tireRules,
    { h: 'Where the triangles go' },
    `On a divided or one-way highway, warning devices are commonly placed about 10 feet, 100 feet and 200 feet behind the truck toward approaching traffic. On a two-lane road, placement changes so traffic in both directions is warned. Drivers are trained on the exact placement — you can remind them, not direct them.`,
    { callout: { kind: 'safety', title: 'People before paperwork', text: 'If anyone is hurt, the vehicle is on fire, or it is blocking live traffic, emergency services come first. Your questions can wait.' } }
  ],
  example: { title: 'Shoulder at night', text: `At 23:40 a driver calls from the shoulder of I-35 with a blown drive tire. The coordinator\'s first question is "Are your flashers on and triangles out?" The driver says he hasn\'t placed them yet. The coordinator says "Do that first and call me back — I\'ll start looking for a tire service now." Four minutes later the driver is back on the line with the mile marker.` },
  practical: { title: 'Order the first actions', exercise: {
    type: 'order', prompt: 'Put the driver\'s first actions in order.',
    items: ['Pull as far off the roadway as possible', 'Turn on hazard flashers', 'Place warning devices', 'Call the coordinator with location and facts', 'Wait for help in a safe position']
  } },
  check: [
    { t: 'mc', q: 'Under U.S. rules, how soon must warning devices be placed after a truck stops on the shoulder?', o: ['Within 1 hour', 'Within 10 minutes', 'Only at night', 'Only if the truck is loaded'], a: 1, e: '49 CFR 392.22 requires placement as soon as possible but within 10 minutes.' },
    { t: 'wwyd', q: 'A driver calls from the shoulder but hasn\'t turned on flashers yet. You:', o: ['Start with the odometer reading', 'Ask them to turn on flashers and place warning devices first, then call back', 'Tell them to keep driving to an exit', 'Hang up and call dispatch'], a: 1, e: 'Safety steps first; information second.' }
  ],
  takeaways: ['Flashers immediately; warning devices within 10 minutes (U.S.).', 'Help the driver in the right order: safe, visible, then informed.', 'Emergency services come first when anyone is at risk.', 'Remind — don\'t direct — trained safety procedures.'],
  tips: ['Ask "Are you somewhere safe and visible?" as your very first sentence.', 'Offer to call back so the driver can finish safety steps.'],
  mistakes: ['Taking down case details while the driver is still in a live lane.', 'Asking the driver to walk around a truck on a busy shoulder to read a part number.']
});

addLesson('advanced', 'm2', {
  id: 'l3', title: 'Aftertreatment Deep Dive: DPF, DEF and Regeneration', minutes: 17,
  objectives: ['Trace the exhaust path through the aftertreatment system', 'Distinguish passive, active and parked regeneration', 'Coordinate aftertreatment calls intelligently'],
  body: [
    `Aftertreatment problems are among the most frequent causes of derates on modern diesel trucks. You don\'t need to repair them — but knowing the path the exhaust takes lets you ask sharper questions and choose the right vendor.`,
    { widget: 'exhaust' },
    { h: 'Three kinds of regeneration' },
    { table: { head: ['Type', 'What happens', 'Coordinator angle'], rows: [
      ['Passive', 'Soot burns off naturally when exhaust is hot — steady highway driving', 'Long highway runs help; heavy idling and short hauls work against it'],
      ['Active', 'The system raises exhaust temperature while driving', 'The driver may see a regen or HEST lamp — usually normal'],
      ['Parked (stationary)', 'The driver or a technician starts a regen while the truck is parked, per manufacturer procedure', 'Takes time; if requested and ignored, a derate can follow']
    ] } },
    { ig: 'stats', icon: 'activity', title: 'DEF facts that matter on the desk', items: [
      { v: '32.5', u: '%', l: 'urea in diesel exhaust fluid (the rest is deionized water)', tone: 'info' },
      { v: '12', u: '°F', l: 'about where DEF freezes (−11 °C) — tanks and lines are heated', tone: 'warning' },
      { v: '0', l: 'times DEF should go in the fuel tank — contamination is a costly repair', tone: 'critical' }
    ] },
    { callout: { kind: 'warning', title: 'Clearing codes isn\'t a repair', text: 'A regen or a cleared code can get a truck moving, but if the DPF keeps loading, something upstream is still wrong — a sensor, an injector, an EGR problem, or the duty cycle.' } }
  ],
  example: { title: 'Winter morning derate', text: `On a 5 °F morning a driver reports a DEF warning and reduced power right after startup. The coordinator asks whether the DEF gauge shows fluid (yes, half tank) and how long the truck has been running (ten minutes). Knowing DEF systems are heated and may need time to thaw, the coordinator checks the manufacturer guidance with the shop, which advises letting the system warm up while monitoring. The lamp clears after 25 minutes — no tow needed.` },
  practical: { title: 'Which component?', exercise: {
    type: 'classify', prompt: 'Match each description to the component.', categories: ['DPF', 'SCR / DEF', 'DOC'],
    items: [
      { text: 'Traps soot; needs regeneration and periodic ash cleaning', answer: 'DPF', why: 'The particulate filter collects soot.' },
      { text: 'Uses a urea solution to convert NOx into nitrogen and water', answer: 'SCR / DEF', why: 'SCR relies on DEF.' },
      { text: 'Oxidizes CO and hydrocarbons, and creates heat that helps regeneration', answer: 'DOC', why: 'The oxidation catalyst sits upstream of the DPF.' },
      { text: 'A differential pressure sensor measures how loaded it is', answer: 'DPF', why: 'Pressure difference across the filter indicates loading.' }
    ]
  } },
  check: [
    { t: 'mc', q: 'Which duty cycle makes DPF loading problems more likely?', o: ['Long steady highway runs', 'Heavy idling and short, stop-and-go trips', 'Running empty', 'Night driving'], a: 1, e: 'Low exhaust temperatures limit passive regeneration.' },
    { t: 'tf', q: 'DEF can freeze in cold weather, which is why DEF tanks and lines are heated.', a: true, e: 'DEF freezes around 12 °F (−11 °C). Systems are designed to thaw it.' }
  ],
  takeaways: ['Exhaust path: engine → DOC → DPF → DEF dosing → SCR → stack.', 'Regeneration can be passive, active or parked.', 'DEF is 32.5% urea and freezes around 12 °F.', 'Repeat DPF loading means an upstream cause still exists.'],
  tips: ['Ask "When did the truck last complete a regen?" on DPF calls.', 'Ask for idle percentage from telematics on repeat offenders.'],
  mistakes: ['Sending an aftertreatment derate to a shop without the right diagnostic software.', 'Assuming every HEST lamp is a fault.']
});

addLesson('advanced', 'm4', {
  id: 'l3', title: 'Tires: Positions, Wear Patterns and Tire Calls', minutes: 16,
  objectives: ['Identify tire positions on a tractor-trailer', 'Recognize common wear patterns and what they suggest', 'Give a tire vendor everything they need'],
  body: [
    `Tires are one of the largest maintenance costs in a fleet and one of the most common roadside calls. Precise position information gets the right tire to the right place the first time.`,
    { widget: 'tires' },
    REF.tireRules,
    { h: 'Wear patterns and what they suggest' },
    { tiles: [
      { icon: 'target', title: 'Center wear', text: 'Often linked to over-inflation.' },
      { icon: 'target', title: 'Both shoulders worn', text: 'Often linked to under-inflation.' },
      { icon: 'route', title: 'One-side / feathered wear', text: 'Often points to alignment (toe or camber) problems.' },
      { icon: 'activity', title: 'Cupping / scalloping', text: 'Can suggest suspension, balance or bearing issues.' },
      { icon: 'alert', title: 'Flat spot', text: 'Often from a brake lock-up or skid.' },
      { icon: 'x-circle', title: 'Bulge or exposed cords', text: 'Internal damage — replace; a blowout risk.' }
    ] },
    `Wear patterns are clues for a technician, not a diagnosis. Their value to you: a tire that wore out early usually means another cost (alignment, suspension, inflation) is still waiting to be fixed.`,
    { h: 'What the tire vendor needs' },
    { ul: ['Unit and exact location', 'Position: axle, side, inside or outside dual', 'Tire size (on the sidewall, e.g. 295/75R22.5 or 11R22.5)', 'Wheel damage? (steel or aluminum wheel)', 'Is the vehicle loaded?', 'Billing / PO and any fleet tire program'] }
  ],
  example: { title: 'The hidden inner dual', text: `A driver reported "a tire looks low" on the right side of drive axle 2. The coordinator asked which dual. The outer looked fine — the inner was nearly flat and had been overloading its partner for miles. The tire service replaced both after inspection found the outer had been damaged by overheating.` },
  practical: { title: 'Build the tire call', exercise: {
    type: 'extract', sourceLabel: 'Driver message — 01:50',
    source: 'Unit T-133 with TR-518. I-20 EB near mile marker 42.\nTrailer, rear axle, left side, outside tire — tread came off, wheel looks OK.\nTire says 295/75R22.5. Loaded.',
    fields: [
      { label: 'Axle / position', accept: ['rear', 'trailer'], placeholder: 'e.g., Trailer rear axle' },
      { label: 'Side & dual position', accept: ['left outside', 'left, outside', 'outside left'] },
      { label: 'Tire size', accept: ['295/75r22.5', '295/75'] },
      { label: 'Mile marker', accept: ['42'] }
    ]
  } },
  check: [
    { t: 'mc', q: 'Wear on both shoulders of a tire most often suggests:', o: ['Over-inflation', 'Under-inflation', 'A new tire', 'Too much tread'], a: 1, e: 'Under-inflated tires carry load on the shoulders.' },
    { t: 'mc', q: 'Why ask "inside or outside dual?"', o: ['It changes the price', 'The vendor needs exact position, and an inside flat can overload the outside tire', 'It doesn\'t matter', 'Only steer tires have duals'], a: 1, e: 'Position precision saves time and prevents a second failure.' }
  ],
  takeaways: ['A standard tractor-trailer has 18 tires: 2 steer, 8 drive, 8 trailer.', 'Steer tires need at least 4/32″ tread; other positions 2/32″ (U.S.).', 'Wear patterns point to other problems to fix.', 'Give vendors axle, side, dual position, size and location.'],
  tips: ['Ask drivers to photograph the sidewall size when safe.', 'Track tire failures by position — patterns point to alignment or inflation issues.'],
  mistakes: ['"Left rear tire" on an 18-wheeler — there are eight rear tires on the left.', 'Replacing a worn tire without asking why it wore early.']
});

addLesson('expert', 'm1', {
  id: 'l3', title: 'Maintenance Budgeting and Forecasting', minutes: 16,
  objectives: ['Break a maintenance budget into its main categories', 'Build a simple forecast from miles and cost per mile', 'Explain budget variance and what drives it'],
  body: [
    `At the expert level you are expected to explain where maintenance money goes and what next quarter will cost. A budget is a plan; a forecast updates the plan with what is actually happening.`,
    { ig: 'donut', icon: 'dollar', title: 'Where an annual maintenance budget goes (example fleet)', fmt: '$', center: '$680k', centerSub: '40 units · year', items: [['Parts', 250000], ['Labor', 190000], ['Tires', 110000], ['PM services', 70000], ['Tows & road calls', 35000], ['Other', 25000]], note: 'Illustrative split. Actual budgets vary with fleet age, duty cycle and whether shops are in-house.' },
    { h: 'A simple forecast' },
    { ig: 'formulas', icon: 'calc', title: 'Forecast building blocks', items: [
      { t: 'Cost forecast', f: 'planned miles × cost per mile', d: 'Baseline' }, { t: 'Adjusted forecast', f: 'baseline + known major repairs', d: 'Add what you already know' },
      { t: 'Variance', f: 'actual − budget', d: 'Positive = over budget' }, { t: 'Variance %', f: 'variance ÷ budget × 100', d: 'Compare across months' }
    ] },
    { ig: 'bars', icon: 'bar', title: 'Budget vs. actual by month (example)', fmt: '$', items: [['Jan budget', 56000], ['Jan actual', 54200, 'success'], ['Feb budget', 56000], ['Feb actual', 63900, 'critical'], ['Mar budget', 58000], ['Mar actual', 57100, 'success']], note: 'February\'s overrun came from two unplanned engine repairs — exactly the kind of item that belongs in an explanation, not just a number.' }
  ],
  example: { title: 'Explaining a variance', text: `Maintenance ran 14% over budget in February. Instead of just reporting the number, the coordinator showed that two engine repairs ($11,800) caused the overrun, that one was a warranty claim in progress, and that CPM without those two events was 3% under plan. Leadership approved the variance in one meeting.` },
  practical: { title: 'Build the forecast', exercise: {
    type: 'extract', sourceLabel: 'Next quarter — plan',
    source: 'Planned miles: 1,500,000\nFleet cost per mile (trailing 12 months): $0.12\nKnown major repairs: 2 clutches at $4,800 each\nQuarter budget: $190,000',
    fields: [
      { label: 'Baseline forecast ($)', accept: ['180000', '180,000', '$180,000'] },
      { label: 'Adjusted forecast ($)', accept: ['189600', '189,600', '$189,600'] },
      { label: 'Variance vs budget ($, negative = under)', accept: ['-400', '−400', '-$400'] }
    ]
  } },
  check: [
    { t: 'mc', q: 'A forecast differs from a budget because it:', o: ['Never changes', 'Updates the plan with actual results and known upcoming events', 'Ignores miles', 'Only covers tires'], a: 1, e: 'Forecasts are living estimates; budgets are the plan.' },
    { t: 'mc', q: 'Budget $56,000, actual $63,900. Variance %?', o: ['7.9%', '14.1%', '12.4%', '-14.1%'], a: 1, e: '(63,900 − 56,000) ÷ 56,000 = 14.1% over.' }
  ],
  takeaways: ['Know your budget categories and their shares.', 'Forecast = planned miles × CPM + known major repairs.', 'Always explain variances with causes, not just numbers.', 'Separate one-off events from trend changes.'],
  tips: ['Keep a running list of known upcoming major repairs.', 'Report variance with a one-line cause for each large item.'],
  mistakes: ['Reporting variance numbers without explanations.', 'Forecasting from last year\'s total when miles changed.']
});

addLesson('expert', 'm8', {
  id: 'l3', title: 'After-Action Reviews: Learning From Disruptions', minutes: 14,
  objectives: ['Run a structured after-action review', 'Separate what happened from why it happened', 'Turn lessons into specific process changes'],
  body: [
    `When a disruption ends, the pressure drops — and so does attention. Expert coordinators use that moment to capture lessons before they are forgotten. An after-action review (AAR) is a short, blame-free debrief focused on improving the process.`,
    { ig: 'process', icon: 'rotate', title: 'The four AAR questions', items: [
      { icon: 'target', t: 'What was planned?', d: 'Expectations, procedures' }, { icon: 'activity', t: 'What happened?', d: 'Facts and timeline' },
      { icon: 'branch', t: 'Why the difference?', d: 'Causes, not blame' }, { icon: 'check-circle', t: 'What changes?', d: 'Owner + date' }
    ] },
    { ig: 'card', icon: 'file', title: 'AAR summary template', form: 'After-action review · Cold snap 01/14', rows: [
      ['Event', '9 units down, −12 °F, 06:00–13:00'], ['Planned', 'Winter PM with fuel additive and battery tests completed by 12/01'],
      ['Happened', '4 units missed winter PM; 6 gelled-fuel no-starts'], ['Why', 'PM slots lost to a shop closure in November; no escalation'],
      ['Worked well', 'Triage by life safety; hourly leadership updates'], ['Change', 'Winter-prep tracker with weekly review — Owner: J. Taylor · Due 10/15']
    ] },
    { callout: { kind: 'tip', title: 'Blame-free, not accountability-free', text: 'AARs look at process and decisions, not personalities. Each action item still gets a named owner and a due date.' } }
  ],
  example: { title: 'One change, fewer road calls', text: `After a cold-snap AAR, a fleet created a winter-prep tracker and moved battery testing into the fall PM. The next winter, fuel- and battery-related road calls fell by more than half.` },
  practical: { title: 'Pick the useful action item', exercise: {
    type: 'choose', prompt: 'Which AAR action item is best written?',
    options: [
      { text: '"Be more careful next winter."', correct: false, why: 'Not specific, no owner, no date — it won\'t change anything.' },
      { text: '"Create a winter-prep tracker covering battery tests and fuel treatment for all units, reviewed weekly from 10/01. Owner: J. Taylor. Due: 10/15."', correct: true, why: 'Specific, measurable, owned and dated.' },
      { text: '"The shop should have told us."', correct: false, why: 'Blame, not an action.' }
    ]
  } },
  check: [
    { t: 'mc', q: 'The main goal of an after-action review is to:', o: ['Find who to blame', 'Improve the process for next time', 'Write a long report', 'Close all cases faster'], a: 1, e: 'AARs turn experience into better processes.' },
    { t: 'tf', q: 'Every AAR action item should have an owner and a due date.', a: true, e: 'Without ownership, lessons stay on paper.' }
  ],
  takeaways: ['Run AARs soon after the event, while memory is fresh.', 'Four questions: planned, happened, why, what changes.', 'Keep it blame-free but give every action an owner and date.', 'Capture what worked well, too.'],
  tips: ['Build the timeline from your case log before the meeting.', 'Keep AARs to 30 minutes with a written one-page summary.'],
  mistakes: ['Skipping the AAR because "things are back to normal".', 'Action items with no owner.']
});
