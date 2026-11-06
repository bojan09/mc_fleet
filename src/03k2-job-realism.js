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
  { t: 'mc', q: 'What does the next shift most need from your handover note?', o: ['A copy of every message from today', 'Open cases with status and ETR, items waiting on someone, things due soon, and when to call you', 'Only the cases that are closed', 'Nothing; they can read the case system'], a: 1, e: 'A short note with open cases, waiting items, upcoming due dates and escalation triggers keeps cases from falling through the gap between shifts.' }
);
