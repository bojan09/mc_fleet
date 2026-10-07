
/* ---------------------------------------------------------------------------
   3. ASSESSMENTS
   Step-based exams reuse the exercise engine (choose / multi / extract /
   order / classify). `reveal` adds fields to the case-file side panel once a
   step is submitted. `blocks` render context above the exercise.
   --------------------------------------------------------------------------- */
const EXAMS = {
  beginner: {
    passing: 0.75,
    intro: 'Tuesday, 06:47. Your phone rings. Work the call exactly as you would on the desk: ask, assess, gather, contact, document and communicate. Each step is scored; 75% is required to pass and earn your Fundamentals certificate.',
    caseFile: [['Case', '#MC-24061'], ['Received', '06:47'], ['Channel', 'Driver phone call']],
    steps: [
      { label: 'Ask', title: 'Ask the right questions',
        blocks: [{ dialog: [['Driver', 'Hey, it\'s Dana in one-thirty-three. There\'s a grinding noise when I brake and a light came on the dash. What do I do?']] }],
        exercise: { type: 'multi', prompt: 'Which questions should you ask first? Select all that apply.', options: [
          { text: 'Are you in a safe location right now?', correct: true, why: 'Safety always comes first.' },
          { text: 'Is it the tractor or trailer, and exactly where are you?', correct: true, why: 'Unit and location are the first facts every case needs.' },
          { text: 'What color is the light, and what does it say?', correct: true, why: 'Lamp color/message indicates urgency and system.' },
          { text: 'When did the grinding start, and is it getting worse?', correct: true, why: 'Onset and trend help assess urgency.' },
          { text: 'Is the truck stopping normally? Any pulling?', correct: true, why: 'Braking performance is critical for a brake complaint.' },
          { text: 'Can you finish the delivery first and we\'ll look after?', correct: false, why: 'Suggests continued operation before understanding a possible brake issue.' },
          { text: 'What part do you think is broken?', correct: false, why: 'Diagnosis belongs to technicians; not a first-priority question.' }
        ] },
        reveal: [['Unit', 'T-133 (tractor) + TR-518'], ['Location', 'Flying J, I-40 exit 150'], ['Light', 'Amber ABS (tractor)'], ['Symptom', 'Grinding, front right, braking']] },
      { label: 'Assess', title: 'Determine urgency',
        blocks: [{ dialog: [['Driver', 'I\'m parked at the Flying J, I-40 exit 150 near Amarillo. It\'s the tractor. Grinding is front right when I brake, started about 30 minutes ago and it\'s louder now. The light\'s yellow — ABS. Truck stops but pulls a little to the right. Odometer\'s 356,912. I\'m loaded for Oklahoma City, delivery at 14:00.']] }],
        exercise: { type: 'choose', prompt: 'How urgent is this case?', options: [
          { text: 'Routine — schedule at next PM', correct: false, why: 'Grinding + pulling while braking is a braking performance issue — not routine.' },
          { text: 'Monitor — let the driver continue to the delivery and inspect there', correct: false, why: 'Continuing 260 miles with a worsening brake grind and pulling risks brake failure.' },
          { text: 'Safety-critical — the truck should not continue until a qualified technician inspects the brakes', correct: true, why: 'Worsening metal-on-metal grinding and pulling indicate a brake defect affecting control.' }
        ] },
        reveal: [['Urgency', 'Safety-critical'], ['Load', 'OKC delivery 14:00']] },
      { label: 'Gather', title: 'Open the case with accurate information',
        exercise: { type: 'extract', sourceLabel: 'From the call', source: 'Unit: tractor one-thirty-three with trailer TR-518\nLocation: Flying J, I-40 exit 150, Amarillo TX\nOdometer: 356,912\nComplaint: Grinding front right when braking, started ~30 min ago, getting louder, amber ABS lamp, pulls slightly right',
          fields: [
            { label: 'Unit number', accept: ['t-133', 't133', '133'] },
            { label: 'Location', accept: ['exit 150', 'flying j', 'amarillo'] },
            { label: 'Odometer', accept: ['356912', '356,912'] },
            { label: 'Complaint (factual)', accept: ['grind', 'brak', 'pull'], full: true, placeholder: 'e.g., Grinding front right when braking…' }
          ] },
        reveal: [['Odometer', '356,912'], ['Case status', 'Open']] },
      { label: 'Contact', title: 'Contact the correct party',
        exercise: { type: 'choose', prompt: 'Who do you contact to resolve the problem?', options: [
          { text: 'The parts department to order brake pads', correct: false, why: 'No diagnosis yet — ordering parts first is guessing.' },
          { text: 'A qualified brake repair vendor nearby — mobile brake service to the truck stop, or the nearest capable shop — then notify dispatch', correct: true, why: 'Gets a qualified technician to the unit quickly and keeps operations informed.' },
          { text: 'Tell the driver to drive 260 miles back to the terminal shop', correct: false, why: 'Moves an unsafe truck a long distance.' },
          { text: 'Nobody yet — wait to see if the noise stops', correct: false, why: 'A worsening brake issue must be addressed promptly.' }
        ] },
        reveal: [['Vendor', 'Mobile brake service'], ['Vendor ETA', '07:55']] },
      { label: 'Document', title: 'Document the case',
        exercise: { type: 'choose', prompt: 'Which case note is best?', options: [
          { text: '"133 brake problem, sent mechanic."', correct: false, why: 'Missing time, location, symptom detail, vendor, ETA and load impact.' },
          { text: '"06:52 — T-133 (w/ TR-518) at Flying J I-40 exit 150, Amarillo. Odo 356,912. Driver D. reports grinding front right when braking, ~30 min, worsening; amber ABS lamp; slight pull right. Safety-critical — unit held. Mobile brake service dispatched, ETA 07:55. Load to OKC due 14:00 — dispatch notified. Next check 07:55."', correct: true, why: 'Complete, time-stamped, factual, with decisions, vendor, ETA, impact and next action.' },
          { text: '"Driver thinks the brakes are shot. Probably needs pads and rotors. Sent someone."', correct: false, why: 'Records guesses as facts and lacks key data.' }
        ] },
        reveal: [['Documented', 'Yes']] },
      { label: 'Communicate', title: 'Communicate the status',
        exercise: { type: 'choose', prompt: 'What do you send to dispatch?', options: [
          { text: '"T-133 has a brake issue."', correct: false, why: 'No location, ETA, or impact.' },
          { text: '"T-133 held at Flying J Amarillo (I-40 x150) — brake grinding + pull, safety-critical. Mobile brake tech ETA 07:55; diagnosis ~08:30. OKC 14:00 delivery is at risk (260 mi ≈ 4.5 h) — if repair exceeds ~09:00, recommend recovery options. Next update 08:30."', correct: true, why: 'Unit, location, cause, ETA, impact with math, recommendation and next update.' },
          { text: '"Truck should be fine, don\'t worry."', correct: false, why: 'Misleading and gives no planning information.' }
        ] },
        reveal: [['Dispatch', 'Updated 06:58'], ['Next update', '08:30']] }
    ]
  },
  advanced: {
    passing: 0.75,
    intro: '08:00 — four cases land on your board at once. Prioritize, identify safety issues, coordinate vendors, communicate, review costs and track downtime. 75% required to pass.',
    caseFile: [['A · T-127', 'Air leak, low air, loaded (DEL 13:00)'], ['B · T-122', 'Amber CEL, empty, PM B in 1,800 mi'], ['C · TR-551', 'Reefer alarm, frozen food, +2°F/h'], ['D · T-101', 'In shop — estimate $6,770 > your $2,500 limit']],
    steps: [
      { label: 'Prioritize', title: 'Prioritize the board',
        exercise: { type: 'order', prompt: 'Order the cases from highest to lowest priority.', items: ['A · T-127 — air leak, low-air warning, loaded', 'C · TR-551 — reefer alarm, frozen food warming', 'D · T-101 — estimate waiting on approval (unit down)', 'B · T-122 — amber CEL, driving normally, empty'] } },
      { label: 'Safety', title: 'Identify safety-critical issues',
        exercise: { type: 'multi', prompt: 'Which cases involve a safety-critical vehicle defect?', options: [
          { text: 'A · T-127 air leak with low-air warning', correct: true, why: 'Brake-system air loss is safety-critical.' },
          { text: 'B · T-122 amber CEL, normal operation', correct: false, why: 'Needs diagnosis but no immediate safety risk reported.' },
          { text: 'C · TR-551 reefer alarm', correct: false, why: 'Cargo risk and time-critical — but not a vehicle safety defect.' },
          { text: 'D · T-101 clutch estimate', correct: false, why: 'Unit is already in the shop; a cost/approval issue.' }
        ] } },
      { label: 'Coordinate', title: 'Coordinate the right resources',
        exercise: { type: 'classify', prompt: 'Assign the correct action to each case.', categories: ['Mobile brake service now', 'Reefer technician + backup trailer', 'Combine with PM at terminal', 'Route estimate for approval'],
          items: [
            { text: 'A · T-127', answer: 'Mobile brake service now', why: 'Safety-critical, unit must not move.' },
            { text: 'B · T-122', answer: 'Combine with PM at terminal', why: 'Driving normally and PM due soon — combine diagnosis with PM B to save downtime.' },
            { text: 'C · TR-551', answer: 'Reefer technician + backup trailer', why: 'Repair and cargo protection in parallel.' },
            { text: 'D · T-101', answer: 'Route estimate for approval', why: 'Over your limit — route per procedure after questioning extras.' }
          ] } },
      { label: 'Driver', title: 'Communicate with the driver (Case A)',
        exercise: { type: 'choose', prompt: 'Message to the T-127 driver:', options: [
          { text: '"Stay parked, don\'t move the truck. Mobile brake tech from Panhandle Fleet Service is on the way, ETA 08:35 — he\'ll call when close. I\'ve told dispatch. I\'ll check in at 08:35."', correct: true, why: 'Clear safety instruction, vendor, ETA, and follow-up.' },
          { text: '"Someone\'s coming at some point."', correct: false, why: 'No vendor, no time, no safety instruction.' },
          { text: '"If the air builds back up, you can head to the delivery."', correct: false, why: 'Encourages operating with a brake defect.' }
        ] } },
      { label: 'Dispatch', title: 'Update dispatch',
        exercise: { type: 'choose', prompt: 'Consolidated update to dispatch:', options: [
          { text: '"Busy morning, will update later."', correct: false, why: 'Gives dispatch nothing to plan with.' },
          { text: '"08:15 board: A T-127 held (air leak), tech ETA 08:35, repair est. 1–2 h — 13:00 DEL at risk; T-140 available for power swap if needed by 10:00. C TR-551 reefer tech ETA 09:00; backup reefer staged. B T-122 OK to run; diagnosis with PM B at terminal Thursday. D T-101 ETR 06/14 16:00 pending approval. Next update 09:00."', correct: true, why: 'Every case: status, ETA, impact, options and next update.' },
          { text: 'Four separate calls with partial information over the next hour', correct: false, why: 'Fragmented updates create confusion and interruptions.' }
        ] } },
      { label: 'Costs', title: 'Review the T-101 estimate',
        blocks: [{ table: { head: ['Line', 'Amount'], rows: [
          ['Clutch replacement — parts & labor (driver complaint: slipping)', '$4,320'],
          ['Clutch core charge (refundable)', '$250'],
          ['Diagnostics 2.0 h — clutch slip already confirmed on road test', '$370'],
          ['Replace all wheel seals — "recommended", no leaks noted', '$1,100'],
          ['Cab air filter', '$45'],
          ['Shop supplies — 15% of labor, uncapped', '$410'],
          ['Tax', '$275'],
          ['<strong>Total</strong>', '<strong>$6,770</strong>']
        ] } }],
        exercise: { type: 'multi', prompt: 'Which lines should you question before approving?', options: [
          { text: 'Clutch replacement — $4,320', correct: false, why: 'Addresses the complaint.' },
          { text: 'Core charge — $250', correct: false, why: 'Normal and refundable — make sure the core is returned.' },
          { text: 'Diagnostics 2.0 h — $370', correct: true, why: 'Excessive when the fault is already confirmed — ask to reduce.' },
          { text: 'All wheel seals — $1,100', correct: true, why: 'No leaks noted — ask for evidence or defer.' },
          { text: 'Cab air filter — $45', correct: false, why: 'Minor, reasonable maintenance item.' },
          { text: 'Shop supplies 15% uncapped — $410', correct: true, why: 'Unusually high; ask about the cap/policy.' }
        ] } },
      { label: 'Track', title: 'Track downtime',
        exercise: { type: 'extract', sourceLabel: 'T-101 timeline', source: 'Down: 06/12 22:00 (towed, clutch slipping)\nNow: 06/14 08:00\nETR (if approved by 09:00): 06/14 16:00',
          fields: [
            { label: 'Downtime so far (hours)', accept: ['34', '34h', '34 h'] },
            { label: 'Projected total downtime at ETR (hours)', accept: ['42', '42h', '42 h'] }
          ] } }
    ]
  }
};

/* Expert simulation: each stage offers options with metric effects.
   pts: 0–3 decision quality. safety < 70 at the end = automatic fail. */
const SIM = {
  passing: 0.75,
  intro: 'You are the lead Maintenance Coordinator for a 40-unit fleet. Today will test everything: safety, prioritization, cost, dispatch pressure, communication and documentation. Your decisions change the fleet\'s metrics — and have consequences.',
  start: { safety: 100, service: 100, trust: 70, cost: 0, downtime: 0 },
  fleetHours: 960, baseDown: 58,
  stages: [
    { clock: '06:30', title: 'Morning triage',
      events: [
        ['critical', 'T-114 (loaded, DEL 11:00, 90 mi): driver reports air leak, low-air warning. On shoulder of I-20.'],
        ['warning', 'T-120: derate, amber DPF lamp — 3rd time in 60 days. At a truck stop, load due 15:00.'],
        ['warning', 'TR-551 reefer (pharma load, 36–46°F): alarm, 41°F and rising.'],
        ['info', 'T-131: PM A due today.']
      ],
      prompt: 'Where do you put your attention first?',
      options: [
        { text: 'T-114: confirm driver safety, dispatch a mobile brake tech; in parallel request a reefer tech for TR-551. Queue T-120 and T-131 next.', pts: 3, fx: { trust: 5 }, result: 'Driver secured in minutes; brake tech ETA 45 min; reefer tech ETA 60 min. Good triage — safety first, time-critical cargo in parallel.' },
        { text: 'T-120 first — a third repeat failure needs attention.', pts: 1, fx: { safety: -15, trust: -5, downtime: 1 }, result: 'While you dig into T-120\'s history, T-114\'s driver waits on a highway shoulder for 40 minutes without instructions. The repeat failure matters — but not before a safety-critical event.' },
        { text: 'Tell T-114 to continue slowly to delivery — only 90 miles.', pts: 0, fx: { safety: -45, trust: -20, cost: 2400, downtime: 6 }, result: 'Twelve miles later the driver is stopped at a roadside inspection: the brake defect puts the unit out of service. Violation recorded, tow required, delivery missed.' }
      ] },
    { clock: '07:40', title: 'Parts on the roadside',
      events: [
        ['info', 'Brake tech at T-114: ruptured brake chamber. Not on his truck — parts store 25 mi away has it. Tech can fetch it: +$180, ~1 h.'],
        ['info', 'T-140 is empty in Shreveport, 35 mi from T-114.']
      ],
      prompt: 'How do you handle T-114 and its 11:00 delivery?',
      options: [
        { text: 'Approve the tech to fetch the part AND ask dispatch to send T-140 for a power swap so the load makes 11:00.', pts: 3, fx: { cost: 960, downtime: 3, trust: 5 }, result: 'T-140 hooks the trailer at 08:50 and delivers on time. T-114 is repaired by 09:30 and back in service. Deadhead: 35 mi.' },
        { text: 'Approve the tech to fetch the part; wait for the repair.', pts: 2, fx: { cost: 800, downtime: 3, service: -8 }, result: 'T-114 repaired 09:30; delivery arrives ~11:50 — late, customer notified by ops.' },
        { text: 'Order a heavy tow to the dealer instead.', pts: 1, fx: { cost: 2100, downtime: 8, service: -20 }, result: 'Tow arrives 09:40; dealer can\'t start until 13:00. Delivery missed; costs doubled.' }
      ] },
    { clock: '09:15', title: 'Cold chain at risk',
      events: [
        ['critical', 'Reefer tech at TR-551: compressor failure. Part available tomorrow. Box temp 43°F, rising ~1°F / 30 min.'],
        ['info', 'An empty reefer trailer is at the terminal, 55 mi away.']
      ],
      prompt: 'What do you do about the pharmaceutical load?',
      options: [
        { text: 'Coordinate with ops: send the empty reefer with a terminal driver, pre-cool it, and transload at the customer dock. Repair TR-551 tomorrow.', pts: 3, fx: { cost: 520, downtime: 2, trust: 5 }, result: 'Backup reefer arrives 10:40 at 36°F; transload complete 11:30 with product at 44°F — within range. Load saved.' },
        { text: 'Wait for the part tomorrow.', pts: 0, fx: { cost: 18000, service: -35, trust: -15, downtime: 24 }, result: 'By 11:00 the product exceeds 46°F. The load is rejected — an $18,000 cargo claim.' },
        { text: 'Tell the driver to keep the doors closed and head to the receiver 4 hours away.', pts: 1, fx: { cost: 9000, service: -25, trust: -10, downtime: 4 }, result: 'Temperature exceeds range 2 hours into the trip. Partial rejection at receiver — $9,000 claim.' }
      ] },
    { clock: '11:00', title: 'Dispatch pressure',
      events: [
        ['warning', 'Dispatcher: "T-120 has a 15:00 load. Mobile A says they can do a parked regen and clear codes in an hour. Just do that."'],
        ['info', 'T-120 history: regen 04/02, DPF cleaned 04/28, sensor replaced 05/30. Heavy idle time noted.']
      ],
      prompt: 'How do you handle T-120?',
      options: [
        { text: 'Approve the regen to protect today\'s load, but book a dealer diagnosis with full history tonight after delivery, and open a warranty check on the 05/30 repair.', pts: 3, fx: { cost: 250, downtime: 1, trust: 5 }, result: 'Load delivers on time. Dealer finds an exhaust leak upstream of the sensor affecting readings — fixed under the 05/30 repair warranty.' },
        { text: 'Clear codes, regen, and move on.', pts: 1, fx: { cost: 2150, downtime: 19, service: -15, trust: -10 }, result: 'Two days later T-120 derates again on I-40 with a load: tow, 18 h downtime, late delivery.' },
        { text: 'Pull T-120 from service now for full diagnosis; tell dispatch to find another truck.', pts: 2, fx: { cost: 450, downtime: 8, service: -12, trust: -5 }, result: 'Correct long-term instinct, but no spare truck — the 15:00 load is missed. A controlled regen would have protected the load while diagnosis was scheduled.' }
      ] },
    { clock: '13:30', title: 'The estimate',
      events: [
        ['info', 'Shop B: T-101 clutch — $4,820. Also "recommended": wheel seals, shocks, belts — $1,950. Total $6,770. Your approval limit: $2,500.']
      ],
      prompt: 'How do you handle the estimate?',
      options: [
        { text: 'Ask for evidence on the recommended items; send the fleet manager an SBAR request for the clutch; defer unverified extras to PM.', pts: 3, fx: { cost: 4820, trust: 5 }, result: 'Approved in 25 minutes. Seals had no leaks — deferred. ETR holds at 16:00.' },
        { text: 'Approve everything to save time.', pts: 0, fx: { cost: 6770, trust: -15 }, result: 'You exceeded your authority by $4,270. The fleet manager is not pleased, and $1,950 of work had no supporting evidence.' },
        { text: 'Hold everything until next week to save money.', pts: 1, fx: { downtime: 72, service: -10, trust: -10 }, result: 'T-101 sits for three extra days — about 72 hours of downtime while a needed repair waits.' }
      ] },
    { clock: '16:00', title: 'Management update',
      events: [['info', 'Operations Director: "Give me the picture for today."']],
      prompt: 'Which update do you send?',
      options: [
        { text: 'SBAR summary: units affected, safety status, loads saved/late, costs, open risks (T-120 RCA, TR-551 repair), and one ask: approve 24/7 approval backup.', pts: 3, fx: { trust: 10 }, result: 'The director forwards it to leadership as a model update and approves the after-hours approval backup.' },
        { text: 'Forward all 60 messages from today.', pts: 1, fx: { trust: -5 }, result: 'The director asks you to summarize it — twice.' },
        { text: '"All good today."', pts: 0, fx: { trust: -20 }, result: 'The director hears about the reefer issue from the customer. Credibility damaged.' }
      ] },
    { clock: '17:30', title: 'Close the day',
      events: [['info', 'Six cases touched today. T-131 PM A still due.']],
      prompt: 'How do you close out the day?',
      options: [
        { text: 'Complete case notes with times and costs, open an RCA ticket for T-120, submit warranty claims, and book T-131\'s PM tonight at the terminal.', pts: 3, fx: { trust: 5 }, result: 'All records complete. T-120 RCA scheduled. Warranty recovery expected. T-131 PM done overnight with zero lost load time.' },
        { text: 'Leave the documentation for tomorrow.', pts: 0, fx: { trust: -10, cost: 1200 }, result: 'Tomorrow brings new fires. Details are lost; a $1,200 warranty claim is never filed. T-131 goes overdue.' },
        { text: 'Record the costs only.', pts: 1, fx: { trust: -5 }, result: 'Accounting is happy, but decisions and times are missing — downtime reporting and RCA suffer.' }
      ] }
  ]
};
