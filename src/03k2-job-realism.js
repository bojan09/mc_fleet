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
