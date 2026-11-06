/* ---------------------------------------------------------------------------
   JOB REALISM — core coordinator tasks the lessons were missing
   The most-cited U.S. vehicle violations are tire leaks and under-inflation,
   defective brakes, lighting and missing periodic inspections. This module
   adds what a coordinator does about each: closing a roadside inspection
   report (49 CFR 396.9), running the annual inspection program (396.17,
   396.19, 396.21, 396.25), air-brake pressure numbers drivers report, and
   tire leak / inflation calls (393.75). Sources are cited in each block.
   --------------------------------------------------------------------------- */

/* ---- Beginner 9.2: after a roadside inspection ---- */
enrich('beginner.m9.l2', { add: [
  { h: 'After a roadside inspection: closing the report' },
  `Every roadside inspection ends with a report, even a clean one. When the inspector lists violations, the report starts a paper trail the company must close. The driver hands it in at the next terminal or as company procedure says. Most fleets ask for a photo the same day.`,
  { ig: 'process', icon: 'clipboard', title: 'Closing a roadside inspection report', items: [
    { icon: 'file', t: 'Get the report', d: 'Photo from the driver, same day' },
    { icon: 'alert', t: 'Read every line', d: 'Out-of-service items first' },
    { icon: 'wrench', t: 'Repair', d: 'Out-of-service items before the unit moves' },
    { icon: 'check-circle', t: 'Certify', d: 'Carrier official signs within 15 days' },
    { icon: 'clipboard', t: 'Keep a copy', d: '12 months' }
  ], note: 'Based on 49 CFR 396.9. The form says where to send it. Your safety department signs it or tells you who does.' },
  { table: { head: ['When', 'What the coordinator does'], rows: [
    ['Same day', 'Get a clear photo of the whole report. Open a case for every vehicle violation, including ones that are not out of service.'],
    ['Before the unit moves', 'Repair every out-of-service item. Send a mobile repair to the unit, or a tow. Keep the work order.'],
    ['Within 15 days', 'A carrier official signs the report to certify that every violation was fixed, then returns it as the form directs. Attach or file the repair orders.'],
    ['For 12 months', 'Keep a copy of the certified report.'],
    ['If a violation looks wrong', 'The safety team can ask FMCSA to review inspection data through its free DataQs system. Give them the repair records, photos and times.']
  ] } },
  { callout: { kind: 'safety', title: 'Out of service means parked', text: 'A vehicle placed out of service may not be driven until the listed repairs are done (49 CFR 396.9(c)). That includes "just to the next exit." Bring the repair to the unit, or tow it.' } },
  { exercise: { type: 'order', prompt: 'A driver sends a photo of a roadside report: trailer brake out of adjustment, marked out of service. Put your steps in order.', items: [
    'Confirm the unit is parked safely and stays parked',
    'Send a brake-qualified mobile technician to the unit',
    'Get the repair order showing the brake was fixed and adjusted',
    'Have a carrier official sign the report within 15 days and return it as the form directs',
    'File a copy of the certified report for 12 months'
  ] } }
], tips: ['Review roadside inspection reports weekly and open cases for every vehicle violation.', 'Track violations by unit and by category.', 'Ask drivers for a photo of every inspection report, clean ones too. A clean inspection is good news to share.'] });
lessonAt('beginner.m9.l2').check.push(
  { t: 'mc', q: 'A roadside inspection lists two vehicle violations. How long does the carrier have to certify they were fixed?', o: ['24 hours', '15 days', '30 days', 'Until the next annual inspection'], a: 1, e: 'Under 49 CFR 396.9(d), a carrier official certifies that the violations were corrected within 15 days of the inspection, and the carrier keeps a copy for 12 months.' },
  { t: 'tf', q: 'A truck placed out of service at a roadside inspection may drive slowly to the nearest shop.', a: false, e: 'An out-of-service vehicle may not be driven until the repairs are done (49 CFR 396.9(c)). Send a mobile repair, or tow it.' }
);

/* ---- Beginner 3.2: air-brake numbers drivers report ---- */
lessonAt('beginner.m3.l2').deep.push({ title: 'Air-brake numbers to know', blocks: [
  `Drivers describe air problems in numbers. Knowing the normal range tells you how serious a call is before a technician arrives.`,
  { ig: 'stats', icon: 'gauge', title: 'Air-brake pressures (typical U.S. tractor)', items: [
    { v: '100–125', u: 'psi', l: 'normal working range: the governor stops the compressor near the top and restarts it near the bottom', tone: 'info' },
    { v: '60', u: 'psi', l: 'the low-air warning must come on before pressure drops below this', tone: 'warning' },
    { v: '20–45', u: 'psi', l: 'spring brakes start to apply on their own, which can stop the truck in a lane', tone: 'critical' },
    { v: '20%', l: 'of service brakes defective puts the vehicle out of service at a roadside inspection', tone: 'critical' }
  ], note: 'Governor settings vary by manufacturer; the 60 psi warning comes from the federal brake standard (FMVSS 121), and some state CDL manuals teach 55 psi. The 20% rule is how FMCSA records the brake out-of-service violation (49 CFR 396.3(a)(1)). Adjustment limits depend on chamber type and size: see the table in 49 CFR 393.47(e).' },
  { callout: { kind: 'warning', title: 'What the numbers mean on a call', text: 'A low-air warning, a gauge that drops fast when the driver brakes, or a hiss that does not stop all mean the same thing: the truck stays parked and a brake-qualified technician comes to it. Do not ask the driver to "build air and try to make it."' } }
] });

/* ---- Advanced 1.1: the annual inspection program ---- */
lessonAt('advanced.m1.l1').deep.push({ title: 'The annual inspection program', blocks: [
  `Every tractor and every trailer needs a periodic inspection at least once every 12 months (49 CFR 396.17). It is separate from PM: a unit can be current on oil changes and still be illegal to dispatch. Missing proof of a periodic inspection is one of the most-cited vehicle violations at roadside, and it is entirely a scheduling problem.`,
  { table: { head: ['Question', 'Answer', 'Rule'], rows: [
    ['How often?', 'At least once every 12 months, for each power unit and each trailer', '396.17'],
    ['What is checked?', 'Every item on FMCSA\'s minimum periodic inspection standards: brakes, steering, lights, tires, wheels, coupling devices, frame, suspension, exhaust and more', '396.17'],
    ['Who can do it?', 'A qualified inspector: someone who understands the standards and can find defects, by training or experience. The carrier keeps proof of that person\'s qualifications', '396.19'],
    ['Who can work on brakes?', 'Only a qualified brake inspector, for brake inspection, repair, adjustment and service', '396.25'],
    ['What proves it on the road?', 'A copy of the report, or a decal or sticker that links to it, carried on the vehicle', '396.17'],
    ['How long is the report kept?', '14 months from the inspection date', '396.21']
  ] } },
  { callout: { kind: 'tip', title: 'How coordinators keep it clean', text: 'Track the annual due date by unit, trailers included, as its own schedule. Pair each annual with a PM so the unit visits the shop once. Flag units due in the next 30 days every week, and never let a trailer leave the yard on an expired inspection.' } },
  { exercise: { type: 'choose', prompt: 'Trailer TR-540\'s annual inspection expired yesterday. It is loaded and due out at 15:00. The yard shop has a qualified inspector free at 13:00. What do you do?', options: [
    { text: 'Let it go and book the inspection for next week.', correct: false, why: 'An expired periodic inspection is a violation the moment the trailer is on the road, and it shows up on the company record.' },
    { text: 'Book the 13:00 inspection, tell dispatch the 15:00 departure depends on it passing, and line up a spare trailer in case defects need repair.', correct: true, why: 'It fixes the compliance gap before dispatch and protects the load in parallel.' },
    { text: 'Put a new decal on it and inspect it later.', correct: false, why: 'A decal without an inspection is a false record. Never do it.' }
  ] } }
] });
lessonAt('advanced.m1.l1').check.push(
  { t: 'mc', q: 'How often must each trailer get a periodic (annual) inspection under U.S. rules?', o: ['Every 6 months', 'At least once every 12 months', 'Every 25,000 miles', 'Only when it changes owners'], a: 1, e: '49 CFR 396.17 requires a periodic inspection of every commercial motor vehicle, trailers included, at least once every 12 months.' }
);

/* ---- Advanced 4.3: tire leaks and under-inflation ---- */
enrich('advanced.m4.l3', { add: [
  { h: 'Leaks and low pressure: the most common out-of-service tire call' },
  `Tread depth gets the attention, but a leaking or under-inflated tire is the single most common vehicle out-of-service violation in recent FMCSA data. A tire run low builds heat, damages its casing and can fail at speed, often taking its dual partner with it.`,
  { table: { head: ['What the driver reports', 'What it means', 'What you do'], rows: [
    ['Flat, or a hiss you can hear', 'Out of service (49 CFR 393.75(a)(3))', 'Unit stays parked. Send mobile tire service with axle, side and position.'],
    ['Gauge reading under half of the pressure on the sidewall', 'Recorded as out of service at roadside', 'Same as a flat: send service to the unit.'],
    ['A few psi low, no hiss', 'Too low for the load is still a violation (49 CFR 393.75(h))', 'Have it aired up and checked for a slow leak at the next safe stop or shop.'],
    ['TPMS alert, one position', 'A real leak until proven otherwise', 'Ask for a gauge reading on that tire and its dual partner.']
  ] } },
  { callout: { kind: 'tip', title: 'Ask for the number', text: 'Ask the driver for the pressure reading and the pressure molded on the sidewall. "It looks a little low" is not enough to decide whether the truck can move.' } }
] });
lessonAt('advanced.m4.l3').check.push(
  { t: 'mc', q: 'A driver hears a steady hiss from a trailer tire at a fuel stop. What is the right call?', o: ['Drive to the shop 15 miles away before it gets worse', 'Keep the unit parked and send mobile tire service with the exact position', 'Air it up and keep going to the delivery', 'Wait until the next PM'], a: 1, e: 'A tire with an audible leak is out of service (49 CFR 393.75(a)(3)). Send service to the unit with axle, side and inside/outside position.' }
);

/* ---- Advanced 2.1: triage a list of fault codes, not one code ---- */
lessonAt('advanced.m2.l1').deep.push({ title: 'Triage a fault list', blocks: [
  `Telematics rarely sends one tidy code. You get a list: some active, some old, some repeating. The skill is putting them in order before you call anyone. Here is T-412's fault snapshot at 06:40.`,
  { table: { head: ['Status', 'SPN', 'FMI', 'Description', 'Lamp', 'Count'], rows: [
    ['Active', '100', '1', 'Engine oil pressure low', 'Red STOP', '1'],
    ['Active', '3251', '0', 'DPF differential pressure high', 'Amber', '4'],
    ['Active', '1761', '18', 'DEF tank level low', 'Amber', '1'],
    ['Inactive', '168', '18', 'Battery voltage low', 'None', '1 (12 days ago)']
  ] } },
  { ul: [
    '<strong>Lamp and status first.</strong> An active code with a red lamp outranks everything else on the list.',
    '<strong>Count the repeats.</strong> A code that has come back four times is a real problem, not a glitch.',
    '<strong>Look for one cause behind many codes.</strong> Several unrelated sensor codes at once often point to low voltage or one bad connector.',
    '<strong>Inactive means history.</strong> Note it for the next PM; it is not a road call on its own.',
    '<strong>Never ask a driver to clear codes.</strong> The technician needs them.'
  ] },
  { exercise: { type: 'classify', prompt: 'Sort each line of T-412\'s snapshot.', categories: ['Stop safely now', 'Plan service soon', 'Driver action or monitor'], items: [
    { text: 'SPN 100 / FMI 1 · oil pressure low · red STOP lamp · active', answer: 'Stop safely now', why: 'Low oil pressure with a red lamp can destroy an engine in minutes. Stop safely, shut down, arrange service.' },
    { text: 'SPN 3251 / FMI 0 · DPF pressure high · amber · active, 4 times', answer: 'Plan service soon', why: 'A clogging DPF leads to a derate. Repeats mean a regen or a cleaning is due: book it before it strands the truck.' },
    { text: 'SPN 1761 / FMI 18 · DEF level low · amber · active', answer: 'Driver action or monitor', why: 'Refill DEF at the next stop. Left alone, the engine will limit power.' },
    { text: 'SPN 168 / FMI 18 · battery voltage low · inactive, 12 days ago', answer: 'Driver action or monitor', why: 'One old occurrence. Ask for a battery and charging test at the next PM.' }
  ] } },
  { note: 'Descriptions are shown in plain words. Exact SPN and FMI definitions come from the SAE J1939 standard and each engine maker\'s fault guide; the technician confirms.' }
] });

/* ---- Advanced 3.1: check the final invoice against the approval ---- */
lessonAt('advanced.m3.l1').deep.push({ title: 'Checking the final invoice', blocks: [
  `The estimate is what you approved. The invoice is what the shop wants paid. Compare them line by line before anyone pays, while the details are still fresh.`,
  { table: { head: ['Line · T-118 brake job', 'Approved estimate', 'Invoice', 'Check'], rows: [
    ['Labor, 4.0 h book at $165/h', '$660.00', '5.5 h · $907.50', 'Ask why 1.5 h over. Was extra time approved?'],
    ['Brake shoes and drums, drive axles', '$1,240.00', '$1,240.00', 'Matches'],
    ['Slack adjusters (2)', 'Not on estimate', '$310.00', 'Who approved it, and when? Ask for the measurement that failed.'],
    ['Shop supplies', '$66.00 (10% of labor)', '$136.13 (15%)', 'Rate changed. Ask for the shop\'s policy.'],
    ['Brake shoe core charge', '$120.00', '$120.00', 'Fine, if the old shoes went back. Make sure the credit posts.']
  ] } },
  { ul: [
    'Same unit, VIN and odometer as the case.',
    'Every line is on the approved estimate or has a recorded approval.',
    'Labor hours match the estimate or book time, or there is a reason.',
    'Parts prices match the quote; warranty items are not billed to you.',
    'Shop supplies and fees follow the agreed policy.',
    'Cores are returned and their credits tracked.'
  ] },
  { exercise: { type: 'multi', prompt: 'Which T-118 invoice lines do you question before approving payment?', options: [
    { text: 'Labor billed at 5.5 hours', correct: true, why: '1.5 hours over the approved estimate with no recorded approval.' },
    { text: 'Brake shoes and drums', correct: false, why: 'Matches the estimate exactly.' },
    { text: 'Two slack adjusters', correct: true, why: 'Not on the estimate. Unapproved work needs an explanation before payment.' },
    { text: 'Shop supplies at 15%', correct: true, why: 'The rate is higher than the estimate used. Ask for the policy.' },
    { text: 'Brake shoe core charge', correct: false, why: 'It was on the estimate and is refunded when the cores are accepted.' }
  ] } }
] });

/* ---- Advanced 4.2: what the tow company needs ---- */
lessonAt('advanced.m4.l2').deep.push({ title: 'Ordering a heavy tow', blocks: [
  `A tow ordered with missing details arrives with the wrong truck, or not at all. Give the tow company everything in one call.`,
  { table: { head: ['Tell them', 'Why it matters'], rows: [
    ['Unit and combination: tractor only, or tractor and trailer; loaded or empty; rough weight', 'Decides the wrecker class and whether the trailer goes too'],
    ['Exact location: road, direction, exit or mile marker, shoulder or lane, a GPS pin', 'The wrecker finds the truck the first time'],
    ['What is wrong: no-start, brakes locked, air leak, crash damage', 'Locked spring brakes need air supplied or the brakes caged before the truck can roll'],
    ['Destination: shop name, address, hours, and that they will accept it', 'Avoids a tow to a closed gate'],
    ['Payment: quoted rate (hook-up plus per mile, or hourly), PO number, who signs', 'Prevents billing disputes later']
  ] } },
  { callout: { kind: 'info', title: 'The driveline question', text: 'Towing a tractor with its drive wheels on the ground usually means disconnecting the driveshaft or pulling the axle shafts, so the transmission is not damaged. The operator knows this; make sure it is in the quote and on the invoice.' } },
  { callout: { kind: 'tip', title: 'Get it in writing', text: 'Get the ETA and the quote by text or email before you confirm. Then give the driver the tow company\'s name and ETA.' } }
] });

/* ---- Advanced 4.3: wheel torque after tire work ---- */
lessonAt('advanced.m4.l3').tips.push('After any wheel comes off, ask the vendor to re-check lug-nut torque after the first 50–100 miles, as most wheel makers recommend. Loose wheels can come off.');

/* ---- Expert 6.1: recalls are free repairs ---- */
enrich('expert.m6.l1', { add: [
  { h: 'Recalls: repairs the manufacturer pays for' },
  `A safety recall is a defect the manufacturer must fix at no charge. Recalls cover trucks, trailers, tires and equipment. Check every unit's VIN on NHTSA's free recall search (nhtsa.gov/recalls) or the truck maker's recall page when a unit joins the fleet, and before each PM or annual inspection. Tires are checked by the DOT code on the sidewall.`,
  { callout: { kind: 'tip', title: 'Pair recalls with planned visits', text: 'Book open recalls with an authorized dealer during a planned PM, so the unit visits the shop once. Record the recall number and the completion date in the unit\'s history.' } }
] });
lessonAt('expert.m6.l1').check.push(
  { t: 'tf', q: 'An open safety recall on a truck is repaired by an authorized dealer at no charge to the fleet.', a: true, e: 'Safety recall repairs are paid by the manufacturer. Check VINs regularly and book recalls alongside planned shop visits.' }
);

/* ---- Beginner 8.1: the end-of-shift handover ---- */
enrich('beginner.m8.l1', { add: [
  { h: 'The end-of-shift handover' },
  `Breakdowns do not stop at shift change. The next coordinator needs one short note that says what is open, what is waiting, and when to call you. Write it before you leave, every shift.`,
  { msg: { kind: 'note', title: 'Handover · Tue 18:00 → night (R. Diaz)', text: 'OPEN\n• T-133: trailer brake out of service at the I-20 scale. Mobile tech on site, ETR 19:30. Roadside report to certify by 11/20.\n• T-126: water pump leak. Delta Diesel warranty diagnosis tomorrow 08:00.\n\nWAITING\n• T-101: clutch $4,820. Fleet manager approval asked 16:10.\n• T-118: reman alternator core return pending ($90 credit).\n\nDUE SOON\n• TR-540: annual inspection 11/09.\n• T-122: PM-B in 1,200 mi.\n\nCALL ME IF\n• T-133 ETR slips past 21:00 (load due 07:00).' } },
  { callout: { kind: 'tip', title: 'Four headings', text: 'Open, waiting, due soon, call me if. If a case is not in the note, the next shift does not know it exists.' } }
] });
lessonAt('beginner.m8.l1').check.push(
  { t: 'mc', q: 'What does the next shift most need from your handover note?', o: ['A copy of every message and call log from today, in time order', 'Open cases with status and ETR, what\'s waiting, what\'s due soon, and when to call you', 'Only the cases closed today, so the next shift knows what is done', 'A short note saying everything is in the case system, with no details'], a: 1, e: 'A short note with open cases, waiting items, upcoming due dates and escalation triggers keeps cases from falling through the gap between shifts.' }
);

/* ===========================================================================
   SAMPLE DOCUMENTS — realistic, generic layouts with numbered hotspots
   (rendered by docHTML in 05o-sample-docs.js). All vendors, fleets, people
   and numbers are fictional; every total below is arithmetically correct.
   =========================================================================== */

/* ---- Beginner 8.2: reading an on-route service invoice ---- */
lessonAt('beginner.m8.l2').deep.push({ title: 'Reading a truck-stop service invoice', blocks: [
  `On-route shops at truck stops send invoices that look much alike: who and what at the top, the story of the repair in the middle, money at the bottom. Learn the parts once and every invoice reads faster. Each number below matches a note under the document.`,
  { doc: {
    kind: 'Service invoice', vendor: 'Interstate Truck Service · Center 417', vendorSub: 'I-40 exit 76 · Amarillo, TX · open 24/7', no: 'INV 417-20931',
    meta: [
      ['Customer', 'Northline Freight · fleet acct 20417'], ['Unit', 'T-127 (tractor)', 1], ['VIN', '…3HK74471', 1], ['Odometer', '412,880 mi', 1],
      ['PO', 'PO 48810', 2], ['Authorized by', 'J. Patel, maintenance · 09:12', 2], ['Time in', 'Tue 08:55', 3], ['Time out', 'Tue 10:40', 3], ['Driver', 'R. Diaz']
    ],
    blocks: [
      { t: 'Complaint', n: 4, text: 'Driver reports air leak at the glad hands. PM-A due.' },
      { t: 'Cause', text: 'Both glad hand seals cracked. PM-A due at 412,500 mi.' },
      { t: 'Correction', text: 'Replaced both seals; leak test OK. PM-A per fleet checklist: oil and filters, fuel filters, chassis lube, DEF top-off.' }
    ],
    table: { head: ['Line', 'Qty', 'Unit price', 'Amount'], rows: [
      { n: 5, cells: ['Labor · replace glad hand seals', '0.5 h', '$165.00', '$82.50'] },
      { n: 5, cells: ['Labor · PM-A service (flat rate)', '1', '$135.00', '$135.00'] },
      { n: 6, cells: ['Glad hand seal', '2', '$4.25', '$8.50'] },
      { n: 6, cells: ['Engine oil 15W-40', '44 qt', '$5.10', '$224.40'] },
      { n: 6, cells: ['Oil filter', '2', '$28.75', '$57.50'] },
      { n: 6, cells: ['Fuel filter set', '1', '$64.90', '$64.90'] },
      { n: 6, cells: ['DEF', '2.5 gal', '$4.80', '$12.00'] }
    ] },
    totals: [['Labor', '$217.50'], ['Parts', '$367.30'], ['Shop supplies (8% of labor, max $45)', '$17.40', 7], ['Environmental fee (used oil, filters)', '$12.00', 7], ['Tax 8.25% (parts and supplies)', '$31.74', 8], ['Total due', '$645.94', 8]],
    foot: [['Payment', 'Fleet account · net 30', 9], ['Warranty', 'Parts and labor 90 days (shop policy)', 9], ['Driver signature', 'R. Diaz', 10], ['Technician', 'Tech #22', 10]],
    notes: [
      { n: 1, t: 'Unit, VIN and odometer', d: 'Match them to your case. The odometer feeds PM schedules and warranty.' },
      { n: 2, t: 'PO and authorization', d: 'Who approved the work, and when. No approval on record means questions before payment.' },
      { n: 3, t: 'Time in and out', d: 'This is your downtime: 1 h 45 min here.' },
      { n: 4, t: 'Complaint, cause, correction', d: 'The story of the repair. All three should be there.' },
      { n: 5, t: 'Labor', d: 'Hours × rate, or a flat rate for standard jobs like PM. Many shops bill a 0.5 h minimum.' },
      { n: 6, t: 'Parts', d: 'Quantity × unit price. The oil quantity should match the engine on your PM sheet.' },
      { n: 7, t: 'Supplies and fees', d: 'Shop supplies are usually a percent of labor with a cap. Disposal fees cover used oil and filters.' },
      { n: 8, t: 'Tax and total', d: 'Which lines are taxed depends on the state. Check the math.' },
      { n: 9, t: 'Payment and warranty', d: 'How it is billed, and how long the work is guaranteed. Note the warranty in the unit\'s history.' },
      { n: 10, t: 'Signatures', d: 'The driver signs for the work; the technician is named. Useful if the repair comes back.' }
    ]
  } },
  { h: 'Practice: find the problems' },
  `The same truck came back a month later. This invoice has six problems. Find them before you look at the answers.`,
  { doc: {
    kind: 'Service invoice', vendor: 'Interstate Truck Service · Center 417', vendorSub: 'I-40 exit 76 · Amarillo, TX', no: 'INV 417-21877',
    meta: [['Customer', 'Northline Freight · fleet acct 20417'], ['Unit', 'T-127 (tractor)'], ['Odometer', '401,220 mi'], ['PO', '—'], ['Authorized by', '—'], ['Time in / out', 'Thu 13:10 / 16:30']],
    blocks: [{ t: 'Complaint / correction', text: 'Air leak at glad hands. Replaced seals. PM-A performed.' }],
    table: { head: ['Line', 'Qty', 'Unit price', 'Amount'], rows: [
      { cells: ['Labor · replace glad hand seals', '2.0 h', '$165.00', '$330.00'] },
      { cells: ['Labor · PM-A service (flat rate)', '1', '$135.00', '$135.00'] },
      { cells: ['Glad hand seal', '2', '$4.25', '$8.50'] },
      { cells: ['Engine oil 15W-40', '44 qt', '$5.10', '$224.40'] },
      { cells: ['Oil filter', '2', '$28.75', '$57.50'] },
      { cells: ['Oil filter', '2', '$28.75', '$57.50'] },
      { cells: ['Mud flap · TR-540', '1', '$38.00', '$38.00'] },
      { cells: ['Fuel filter set', '1', '$64.90', '$64.90'] }
    ] },
    totals: [['Labor', '$465.00'], ['Parts', '$450.80'], ['Shop supplies (15% of labor)', '$69.75'], ['Environmental fee', '$12.00'], ['Tax 8.25%', '$42.95'], ['Total due', '$1,040.50']]
  } },
  { exercise: { type: 'multi', prompt: 'Which lines or fields on invoice 417-21877 do you question before approving payment? Pick all six.', options: [
    { text: 'Odometer 401,220 mi', correct: true, why: 'Lower than last month\'s 412,880. Odometers do not go backwards: a typo or the wrong unit.' },
    { text: 'No PO and no authorization', correct: true, why: 'Nobody approved this work on record.' },
    { text: '2.0 h to replace two glad hand seals', correct: true, why: 'The same job took 0.5 h last month. Ask why.' },
    { text: 'Oil filter billed twice', correct: true, why: 'A duplicate line: the PM uses two filters, not four.' },
    { text: 'Mud flap for TR-540', correct: true, why: 'A part for a different unit, which was not here.' },
    { text: 'Shop supplies 15% with no cap', correct: true, why: 'Last month it was 8% capped at $45.' },
    { text: 'Fuel filter set $64.90', correct: false, why: 'Same price as last month, and part of PM-A.' },
    { text: 'Engine oil 44 qt', correct: false, why: 'Matches the engine and last month\'s PM.' }
  ] } }
] });

/* ---- Advanced 4.3: reading a tire service work order ---- */
(lessonAt('advanced.m4.l3').deep ||= []).push({ title: 'Reading a tire service work order', blocks: [
  `A tire shop's work order records every position it touched, with tread depth, pressure and the tire's age. Read it to confirm the right tires were changed, the law was met and nothing was missed.`,
  { doc: {
    kind: 'Tire work order', vendor: 'Highway Tire & Road Service', vendorSub: 'I-20 exit 498 · Terrell, TX', no: 'WO 7731-0442',
    meta: [['Units', 'T-133 tractor · TR-532 trailer'], ['Odometer', '388,410 mi'], ['PO', 'PO 48851'], ['Authorized by', 'J. Patel · 07:20'], ['Time in / out', 'Wed 06:50 / 08:35'], ['Load', 'Loaded, dry van']],
    table: { head: ['Position', 'Tread', 'Pressure', 'DOT date', 'Action'], rows: [
      { n: 1, cells: ['Steer · left', '9/32', '110 psi', 'wk 24 · 2023', 'OK'] },
      { n: 2, cells: ['Steer · right', '3/32', '108 psi', 'wk 19 · 2021', 'Replaced: below 4/32 steer minimum'] },
      { n: 4, cells: ['Drive 1 · left outer', '8/32', '100 psi', 'wk 31 · 2022', 'OK'] },
      { cells: ['Drive 1 · left inner', '7/32', '98 psi', 'wk 31 · 2022', 'OK'] },
      { n: 3, cells: ['Drive 2 · right outer', '6/32', '72 psi', 'wk 05 · 2022', 'Slow leak at valve: core replaced, aired to 100 psi'] },
      { n: 5, cells: ['Trailer 2 · right outer', '—', '0 psi', 'wk 40 · 2020', 'Flat, casing damaged: replaced with retread'] },
      { n: 6, cells: ['Trailer 2 · right inner', '5/32', '95 psi', 'wk 40 · 2020', 'Checked after partner flat: OK'] }
    ] },
    totals: [['New steer tire 295/75R22.5', '$485.00'], ['Retread trailer tire 295/75R22.5', '$245.00', 5], ['Casing credit (old trailer tire)', '−$35.00', 5], ['Mount and demount × 2', '$70.00'], ['Steer tire balance', '$25.00'], ['Valve core and cap', '$6.00'], ['Tire disposal', '$10.00'], ['Tax 8.25% (tires and parts)', '$60.72'], ['Total due', '$866.72', 8]],
    foot: [['Wheel torque', '475 ft-lb · re-check after 50–100 mi', 7], ['Driver signature', 'M. Reyes'], ['Technician', 'Tech #9']],
    notes: [
      { n: 1, t: 'Position', d: 'Axle, side, and inner or outer on duals. It must match what the driver reported.' },
      { n: 2, t: 'Legal minimum', d: 'Steer tires need at least 4/32 in of tread, other positions 2/32 in (49 CFR 393.75). 3/32 on a steer is replaced, not watched.' },
      { n: 3, t: 'Pressure', d: '72 psi against 100 on its partner means a leak. Low pressure ruins casings and causes blowouts.' },
      { n: 4, t: 'DOT date', d: 'The last four digits of the DOT code on the sidewall are the week and year the tire was made: 3122 means week 31 of 2022. The shop copies it to this column. Old tires are worth flagging.' },
      { n: 5, t: 'Retread and casing credit', d: 'Retreads are common on trailers and drives. A damaged old tire may earn a smaller credit, or none.' },
      { n: 6, t: 'The dual partner', d: 'When one dual goes flat, its partner carried double load. Check it.' },
      { n: 7, t: 'Torque and re-check', d: 'Record the torque and plan a re-check after the first 50–100 miles.' },
      { n: 8, t: 'Total', d: 'Tires, mounting, balancing, small parts, disposal, minus credits, plus tax.' }
    ]
  } }
] });
lessonAt('advanced.m4.l3').check.push(
  { t: 'mc', q: 'On work order 7731-0442, why was the right steer tire replaced?', o: ['It was made in 2021, and tires over two years old must be replaced', 'Its tread was 3/32 in, below the 4/32 in steer minimum', 'Its pressure was 108 psi, below the 110 psi of the left steer', 'The driver asked for a new pair of steer tires'], a: 1, e: 'Steer tires need at least 4/32 in of tread under 49 CFR 393.75.' },
  { t: 'mc', q: 'A tire\'s DOT code ends in 1921. When was it made?', o: ['January 2019', 'Week 19 of 2021', 'Year 1921', 'It is the tire size'], a: 1, e: 'The last four digits are the week and year of manufacture.' }
);

/* ---- Advanced 4.2: reading a roadside service ticket ---- */
lessonAt('advanced.m4.l2').deep.push({ title: 'Reading a roadside service ticket', blocks: [
  `Roadside work is billed differently from shop work: a call-out fee, mileage to reach the truck, roadside labor rates and sometimes a parts run. Check each one against what you authorized.`,
  { doc: {
    kind: 'Roadside service ticket', vendor: 'Rapid Road Service', vendorSub: 'Mobile heavy-duty repair · Texarkana, TX', no: 'RS-55120',
    meta: [['Unit', 'T-114 · loaded'], ['Location', 'I-30 EB, mile 142, TX', 2], ['Call received', '14:35', 1], ['Dispatched', '14:42', 1], ['On site', '16:05', 1], ['Completed', '17:40', 1], ['PO', 'PO 48890'], ['Authorized up to', '$1,200 · J. Patel', 8]],
    blocks: [
      { t: 'Complaint', text: 'Loud air leak and low-air warning, right rear drive axle.' },
      { t: 'Correction', text: 'Replaced right rear drive spring brake chamber (type 30/30). Adjusted; brakes tested and released.' }
    ],
    table: { head: ['Line', 'Qty', 'Rate', 'Amount'], rows: [
      { n: 3, cells: ['Service call (call-out fee)', '1', '$195.00', '$195.00'] },
      { n: 4, cells: ['Mileage, round trip', '64 mi', '$4.50', '$288.00'] },
      { n: 5, cells: ['Roadside labor', '1.5 h', '$175.00', '$262.50'] },
      { n: 6, cells: ['Parts run to local supplier', '1', '$75.00', '$75.00'] },
      { n: 7, cells: ['Spring brake chamber 30/30', '1', '$189.00', '$189.00'] },
      { n: 7, cells: ['Clamp and hardware', '1', '$14.00', '$14.00'] }
    ] },
    totals: [['Subtotal', '$1,023.50'], ['Tax 8.25% (parts)', '$16.75'], ['Total due', '$1,040.25', 8]],
    foot: [['Payment', 'PO 48890 · fleet account'], ['Warranty', 'Parts 90 days'], ['Technician', 'D. Owens', 9], ['Driver signature', 'K. Lee', 9]],
    notes: [
      { n: 1, t: 'The clock', d: 'Response time is call to on-site: 90 minutes here. Repair time on site: 1 h 35 min.' },
      { n: 2, t: 'Location', d: 'Should match where the truck was. It also explains the mileage.' },
      { n: 3, t: 'Call-out fee', d: 'A flat fee for coming out. Often higher at night and on weekends.' },
      { n: 4, t: 'Mileage', d: 'Usually round trip from the vendor\'s base. Check that the distance makes sense.' },
      { n: 5, t: 'Roadside labor', d: 'Higher than shop rates, often with a one-hour minimum.' },
      { n: 6, t: 'Parts run', d: 'A charge for fetching a part the truck did not carry. It should match what you approved.' },
      { n: 7, t: 'Parts', d: 'The exact part fitted. Note it for warranty.' },
      { n: 8, t: 'Within the limit?', d: '$1,040.25 against a $1,200 authorization: OK. Anything over needs approval first.' },
      { n: 9, t: 'Signatures', d: 'Technician and driver. Keep the ticket with the case.' }
    ]
  } },
  { exercise: { type: 'extract', prompt: 'Pull the key numbers from ticket RS-55120.', sourceLabel: 'Ticket RS-55120 (above)', source: 'Call received 14:35 · On site 16:05 · Mileage 64 mi round trip · Total due $1,040.25 · Authorized up to $1,200', fields: [
    { label: 'Response time (minutes)', accept: ['90', '90 min', '90 minutes'] },
    { label: 'Billed mileage (miles)', accept: ['64', '64 mi'] },
    { label: 'Amount left under the authorization ($)', accept: ['159.75', '$159.75'] }
  ] } }
] });
