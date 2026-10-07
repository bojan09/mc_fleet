
/* ---------------------------------------------------------------------------
   CONTENT — Process visuals for the workflow, communication and management
   lessons. Example numbers are illustrative and labeled as such.
   --------------------------------------------------------------------------- */

// Beginner M6 L2 — one case, start to finish
enrich('beginner.m6.l2', { add: [
  { ig: 'process', icon: 'branch', title: 'The decision points in one case', items: [
    { icon: 'shield', t: 'Is everyone safe?', d: 'Location, hazards, warning devices' }, { icon: 'truck', t: 'Which unit?', d: 'Tractor or trailer — opens the right case' },
    { icon: 'alert', t: 'Can it move?', d: 'Safety-critical → it stays put' }, { icon: 'wrench', t: 'Who fixes it?', d: 'Mobile, shop or tow' },
    { icon: 'dollar', t: 'Approve the work?', d: 'Within your limit or escalate' }, { icon: 'check-circle', t: 'Is it really fixed?', d: 'Driver confirms before closing' }
  ], note: 'Each decision is also a documentation point: write down what you decided, when, and why.' }
] });

// Beginner M7 L2 — shops, vendors and management
enrich('beginner.m7.l2', { add: [
  { ig: 'hub', icon: 'users', title: 'Everyone you talk to on one repair', center: { icon: 'clipboard', t: 'You (the case)' }, items: [
    { icon: 'wrench', t: 'Shop', d: 'Complaint, unit, authorization' }, { icon: 'layers', t: 'Parts vendor', d: 'Part number, VIN, urgency' },
    { icon: 'route', t: 'Dispatch', d: 'Status and ETR' }, { icon: 'users', t: 'Driver', d: 'Plan and next update' },
    { icon: 'bar', t: 'Fleet manager', d: 'Cost, approvals, repeats' }, { icon: 'award', t: 'Leadership', d: 'Impact in one line' }
  ] },
  { ig: 'card', icon: 'message', title: 'A complete hand-off to a shop', form: 'Shop hand-off · example', rows: [
    ['Unit / VIN', 'T-114 · last 8 of VIN'], ['Complaint', 'Grinding front left when braking, started this morning'], ['Driver notes', 'Pulls slightly left; no warning lamps'],
    ['Odometer', '412,880 mi'], ['Authorization', 'Diagnose only — call before any repair'], ['PO / reference', 'PO 48213'],
    ['Warranty?', 'Check — brake job here 3 months ago'], ['Contact', 'Your name, direct line, update by 11:00']
  ], note: 'A shop that gets this up front doesn\'t need to call you back with questions — and doesn\'t start unapproved work.' }
] });

// Beginner M9 L1 — inspections and the DVIR loop
enrich('beginner.m9.l1', { add: [
  { ig: 'versus', icon: 'clipboard', title: 'Pre-trip vs post-trip inspection', items: [
    { t: 'Pre-trip inspection', sub: 'Before the vehicle is driven.', facts: [['Who', 'The driver'], ['Rule of thumb', 'Driver must be satisfied the vehicle is in safe condition and review the last DVIR (49 CFR 396.13)']], watch: 'Defects found here can stop a dispatch — the earlier you hear, the more options you have.' },
    { t: 'Post-trip inspection', sub: 'At the end of the day\'s work.', facts: [['Who', 'The driver'], ['Report', 'A written DVIR is required when a defect is found or reported (49 CFR 396.11, property carriers)']], watch: 'Post-trip defects are your overnight work list — schedule them before the unit\'s next dispatch.' }
  ], key: 'Pre-trip protects today\'s trip; post-trip feeds tonight\'s repairs. Both land on the coordinator\'s desk.' },
  { ig: 'scale', icon: 'alert', title: 'How a reported defect is handled', stops: [
    { t: 'Not safety-related', d: 'Record it and schedule the repair.', tone: 'success' },
    { t: 'Affects safe operation', d: 'Repair (and certify) before the vehicle operates again.', tone: 'warning' },
    { t: 'Out-of-service condition', d: 'The vehicle may not move until repaired.', tone: 'critical' }
  ], note: 'Your safety department decides how defects are classified. The coordinator\'s job is to get each one repaired and certified on time.' }
] });

// Advanced M5 L1 — components of downtime
enrich('advanced.m5.l1', { add: [
  { ig: 'pipeline', icon: 'clock', title: 'The timestamps that measure downtime', items: [
    { t: 'Unit down', tone: 'critical' }, { t: 'Vendor contacted', tone: 'warning' }, { t: 'Vendor arrives / unit at shop', tone: 'warning' },
    { t: 'Diagnosed', tone: 'info' }, { t: 'Work approved', tone: 'info' }, { t: 'Parts in hand', tone: 'info' },
    { t: 'Repair complete', tone: 'success' }, { t: 'Back in service', tone: 'success' }
  ], note: 'Record every timestamp on every case. The gap between any two of them is a stage you can measure — and compare across vendors, terminals and months.' }
] });

// Advanced M5 L2 — return-to-service ETAs
enrich('advanced.m5.l2', { add: [
  { ig: 'scale', icon: 'clock', title: 'How confident is this ETR?', stops: [
    { t: 'Rough', d: 'Before diagnosis — a range, not a time.', tone: 'critical' },
    { t: 'Likely', d: 'Diagnosed; parts identified but not in hand.', tone: 'warning' },
    { t: 'Firm', d: 'Parts on site, repair underway.', tone: 'info' },
    { t: 'Confirmed', d: 'Repair done, unit released.', tone: 'success' }
  ], note: 'Say the confidence level with every ETR: "Likely 16:00 — parts arrive at 13:00." Dispatch plans differently for each level.' }
] });

// Advanced M6 L1 — maintenance and loads
enrich('advanced.m6.l1', { add: [
  { ig: 'table', icon: 'route', title: 'Recovery options when a loaded unit goes down', head: ['Option', 'When it fits', 'Trade-off'], rows: [
    ['Wait for the repair', 'Short, reliable ETR; delivery window still reachable', 'All risk sits on one ETR'],
    ['Power swap', 'Tractor is down, trailer is fine, another tractor is nearby', 'Deadhead miles and a second driver\'s time'],
    ['Relay driver', 'Truck will be fixed, but the driver is out of hours', 'Needs a rested driver near the shop'],
    ['Reschedule the appointment', 'Customer can accept a later time', 'Customer impact; may cost fees'],
    ['Transload to another trailer', 'Trailer itself can\'t move (or a straight truck is down)', 'Labor, equipment and handling risk']
  ], note: 'Dispatch chooses — your job is to give a realistic ETR early enough that every option is still open.' }
] });

// Advanced M7 L1 — fleet tracking
enrich('advanced.m7.l1', { add: [
  { ig: 'cycle', icon: 'rotate', title: 'Turning tracking data into decisions', center: 'Weekly review', items: [
    { icon: 'list-check', t: 'Collect', d: 'Every case, coded' }, { icon: 'search', t: 'Review', d: 'Same time each week' },
    { icon: 'trend', t: 'Spot patterns', d: 'Repeats, slow vendors' }, { icon: 'wrench', t: 'Act', d: 'PM change, vendor talk' },
    { icon: 'bar', t: 'Measure', d: 'Did it improve?' }
  ] },
  { ig: 'table', icon: 'alert', title: 'Early warning signs in fleet data', head: ['What you see', 'What it can mean'], rows: [
    ['Same unit, same system, twice in 90 days', 'Repeat failure — the root cause wasn\'t fixed'],
    ['PMs slipping past due on one terminal', 'Capacity or scheduling problem at that location'],
    ['One vendor\'s repairs keep coming back', 'Quality issue — review comebacks with the vendor'],
    ['Fuel economy dropping on one unit', 'Tires, brakes or engine issue worth inspecting'],
    ['Downtime rising while repair costs stay flat', 'Time is lost waiting — approvals, parts or pickup']
  ] }
] });

// Expert M3 L1 — symptom, failure, root cause
enrich('expert.m3.l1', { add: [
  { ig: 'pipeline', icon: 'search', title: 'Symptom → failure → root cause (example)', items: [
    { t: 'Symptom: battery lamp, no-start', tone: 'warning' }, { t: 'Failure: alternator not charging', tone: 'critical' },
    { t: 'Cause: belt slipping', tone: 'info' }, { t: 'Root cause: worn tensioner never checked at PM', tone: 'success' }
  ], note: 'Replacing the alternator fixes the failure. Adding the tensioner to the PM checklist fixes the root cause — and stops the repeat.' },
  { ig: 'process', icon: 'search', title: 'The 5 Whys on the same case', items: [
    { icon: 'alert', t: 'Why no start?', d: 'Batteries were dead' }, { icon: 'zap', t: 'Why dead?', d: 'Alternator wasn\'t charging' },
    { icon: 'rotate', t: 'Why not charging?', d: 'Belt was slipping' }, { icon: 'wrench', t: 'Why slipping?', d: 'Tensioner was worn' },
    { icon: 'clipboard', t: 'Why not caught?', d: 'Not on the PM checklist' }
  ], note: 'Illustrative chain. Stop asking "why" when you reach something you can change in a process — not when you reach a part.' }
] });

// Expert M4 L1 — parallel workstreams
enrich('expert.m4.l1', { add: [
  { ig: 'gantt', icon: 'clock', title: 'Workstreams run at the same time (first 3 hours)', from: 0, to: 180, ticks: [[0, '0'], [30, '30 min'], [60, '1 h'], [90, '1.5 h'], [120, '2 h'], [150, '2.5 h'], [180, '3 h']], rows: [
    { l: 'Safety & driver', s: 0, e: 20, tone: 'critical', note: 'First' }, { l: 'Vendor & diagnosis', s: 10, e: 150, tone: 'info' },
    { l: 'Parts search', s: 70, e: 160, tone: 'warning' }, { l: 'Dispatch & customer', s: 15, e: 180, tone: 'info', note: 'Updates every 30–60 min' },
    { l: 'Recovery plan B', s: 40, e: 120, tone: 'warning' }, { l: 'Documentation', s: 0, e: 180, tone: 'success', note: 'Continuous' }
  ], note: 'Illustrative timing. Safety comes first; after that, nothing waits for anything else unless it has to.' }
] });

// Expert M4 L2 — simulation
enrich('expert.m4.l2', { add: [
  { ig: 'process', icon: 'activity', title: 'How a complex breakdown unfolds', items: [
    { icon: 'phone', t: 'The call', d: 'Safety, unit, location, load' }, { icon: 'search', t: 'Diagnosis', d: 'Mobile tech or tow to a shop' },
    { icon: 'layers', t: 'Parts problem', d: 'Not in stock nearby' }, { icon: 'route', t: 'Plan B', d: 'Swap, relay or reschedule' },
    { icon: 'message', t: 'Pressure', d: 'Dispatch and customer push' }, { icon: 'check-circle', t: 'Resolution', d: 'Safe repair, documented' }
  ], note: 'Expect each stage to change your plan. Re-check safety and the ETR every time it does.' }
] });

// Expert M5 L1 — vendor scorecard
enrich('expert.m5.l1', { add: [
  { ig: 'formulas', icon: 'calc', title: 'Scorecard math', items: [
    { t: 'Weighted score', f: 'Σ (rating × weight)', d: 'Weights add up to 100%' },
    { t: 'Comeback rate', f: 'repeat repairs ÷ repairs × 100', d: 'Lower is better' },
    { t: 'Avg response', f: 'total response hours ÷ calls', d: 'Lower is better' }
  ] }
] });

// Expert M5 L2 — managing vendor relationships
enrich('expert.m5.l2', { add: [
  { ig: 'ladder', icon: 'trend', title: 'Addressing vendor performance, step by step', levels: [
    { t: 'Direct feedback', d: 'Specific case, specific issue, same week.' },
    { t: 'Documented review', d: 'Share the data: comebacks, response time, cost.' },
    { t: 'Improvement plan', d: 'Agreed actions and a review date.' },
    { t: 'Reduced volume', d: 'Fewer referrals until results improve.' },
    { t: 'Removal', d: 'Last step — with management approval.' }
  ], note: 'Climb only as far as you need. Most issues are fixed at the first or second step when the data is clear.' },
  { ig: 'cycle', icon: 'rotate', title: 'The quarterly vendor review', center: 'Every quarter', items: [
    { icon: 'bar', t: 'Pull data', d: 'Scorecard by vendor' }, { icon: 'message', t: 'Meet', d: 'Share results' },
    { icon: 'list-check', t: 'Agree actions', d: 'Both sides' }, { icon: 'clock', t: 'Follow up', d: 'Check progress' }
  ] }
] });

// Expert M6 L1 — warranty opportunities
enrich('expert.m6.l1', { add: [
  { ig: 'process', icon: 'shield', title: 'Is this repair a warranty claim?', items: [
    { icon: 'alert', t: 'Failure reported', d: 'Before approving work' }, { icon: 'clock', t: 'Age & miles', d: 'Unit and component' },
    { icon: 'file', t: 'Repair history', d: 'Was this part replaced recently?' }, { icon: 'shield', t: 'Coverage', d: 'Base, extended, parts or repair warranty' },
    { icon: 'phone', t: 'Pre-authorize', d: 'With the dealer or warranty provider' }, { icon: 'wrench', t: 'Repair', d: 'At a facility that can file the claim' }
  ], note: 'Checking before work starts is the step that matters — many claims can\'t be recovered after a non-authorized shop does the repair.' },
  { ig: 'table', icon: 'file', title: 'Common types of coverage', head: ['Type', 'What it usually covers', 'Where to check'], rows: [
    ['Base vehicle warranty', 'Components of a new vehicle for a set time or mileage', 'Purchase documents, dealer'],
    ['Extended / engine coverage', 'Specific systems beyond the base warranty', 'Coverage contract'],
    ['Parts warranty', 'A replacement part that fails early', 'Repair invoice, parts supplier'],
    ['Repair (workmanship) warranty', 'The labor on a previous repair', 'Shop\'s invoice terms']
  ], note: 'Terms vary by manufacturer and contract — always read the actual coverage documents.' }
] });

// Expert M6 L2 — warranty communication
enrich('expert.m6.l2', { add: [
  { ig: 'card', icon: 'file', title: 'What a warranty claim packet contains', form: 'Warranty claim · checklist', rows: [
    ['Unit & VIN', 'Full VIN, in-service date'], ['Odometer / hours', 'At failure'], ['Failure description', 'Factual complaint and when it started'],
    ['Diagnosis', 'Technician findings, fault codes'], ['Prior repair', 'Invoice for the earlier part or repair, if any'], ['Authorization', 'Who approved, reference number'],
    ['Photos / parts', 'Failed part retained if requested'], ['Costs', 'Parts, labor, towing — itemized']
  ], note: 'Missing items are the most common reason claims stall. Build the packet as the repair happens, not after.' }
] });

// Expert M7 L1 — escalation
enrich('expert.m7.l1', { add: [
  { ig: 'process', icon: 'message', title: 'SBAR — escalate in four parts', items: [
    { icon: 'alert', t: 'Situation', d: 'What is happening now' }, { icon: 'file', t: 'Background', d: 'Context they need' },
    { icon: 'search', t: 'Assessment', d: 'What you think it means' }, { icon: 'check-circle', t: 'Recommendation', d: 'What you need from them' }
  ], note: 'Example: "T-127 is down loaded in Amarillo (S). Brake repair needs a part arriving tomorrow (B). We\'ll miss the 13:00 delivery (A). I recommend a power swap from T-140 — approve the deadhead? (R)"' }
] });

// Expert M8 L1 — operating under disruption
enrich('expert.m8.l1', { add: [
  { ig: 'table', icon: 'activity', title: 'Disruption board at 07:00 (illustrative)', head: ['Unit', 'Situation', 'Priority', 'Next action'], rows: [
    ['T-118', 'Shoulder of I-40, no-start, driver in cab', '1 — life safety', 'Driver safety check; warning devices; mobile tech'],
    ['TR-551', 'Reefer alarm, pharma load, temp rising slowly', '2 — time-critical cargo', 'Reefer technician; backup trailer on standby'],
    ['T-140', 'Amber lamp, loaded, driving normally', '3 — revenue impact', 'Diagnose at next planned stop'],
    ['Yard (4 units)', 'Won\'t start after cold night', '4 — capacity', 'Yard service in order of next dispatch']
  ], note: 'Order follows the triage pyramid: people, safety defects, time-critical cargo, revenue, then routine work.' },
  { ig: 'process', icon: 'message', title: 'Communication rhythm during a disruption', items: [
    { icon: 'phone', t: 'First 15 min', d: 'Safety confirmed for every driver' }, { icon: 'users', t: 'Within 30 min', d: 'Board shared with dispatch and leadership' },
    { icon: 'clock', t: 'Every hour', d: 'Short status update, same format' }, { icon: 'file', t: 'End of day', d: 'Summary and open items handed over' }
  ], note: 'A predictable rhythm cuts interruptions — people stop calling when they know when the next update comes.' }
] });
