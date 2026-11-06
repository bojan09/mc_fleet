
/* ===========================================================================
   SOFTWARE & PLATFORMS — real-world tools a Maintenance Coordinator meets.
   Content is limited to what each company publishes on its official website,
   help center or technical literature (see `sources` on every platform).
   Fleet names, unit numbers and screens in examples are fictional; record
   mockups are labeled as simplified educational examples, never as the
   vendor's real interface. Every page follows the same 14-part structure.
   =========================================================================== */
const SW_SECTIONS = [
  ['what', 'What is it?', 'info'], ['why', 'Why is it used?', 'target'], ['who', 'Who uses it?', 'users'],
  ['concepts', 'Key concepts', 'book'], ['features', 'Main features', 'grid'], ['how', 'How it works', 'activity'],
  ['example', 'Real-world trucking example', 'truck'], ['role', "The Maintenance Coordinator's role", 'clipboard'],
  ['workflow', 'Step-by-step workflow', 'route'], ['visual', 'Visual explanation', 'image'],
  ['mistakes', 'Common mistakes', 'alert'], ['check', 'Quick knowledge check', 'list-check'],
  ['scenario', 'Practical scenario', 'message'], ['takeaways', 'Key takeaways', 'check-circle']
];

const SOFTWARE = [
  /* ------------------------------------------------------------------ FLEETIO */
  {
    id: 'fleetio', name: 'Fleetio', maker: 'Fleetio', kind: 'Fleet maintenance software', icon: 'wrench', tone: 'info',
    url: 'https://www.fleetio.com', checked: 'October 2026',
    tagline: 'Fleet management software for vehicle records and maintenance: inspections, issues, work orders, service reminders, parts and fuel.',
    card: {
      what: 'Fleet management software, used in a web browser and through the Fleetio Go mobile app.',
      use: 'Keeping every vehicle\'s record in one place and running maintenance: inspections, issues, work orders, preventive maintenance reminders, parts and fuel.',
      who: 'Maintenance coordinators, fleet managers, technicians, parts staff and drivers (inspections).'
    },
    sections: {
      what: [
        "Fleetio is **fleet management software**. A fleet keeps a record for every vehicle and piece of equipment in it, and uses that record to plan and document maintenance. Fleetio calls these records **vehicles** (or assets) and lets teams work in a web browser or on phones and tablets through its mobile app, **Fleetio Go**.",
        "Think of it as the fleet's maintenance memory. It answers questions like *What's wrong with unit 214? When was its last PM? What did we spend on it this year? Which trucks are overdue?*",
        { callout: { kind: 'info', title: 'Where Fleetio fits', text: "Fleetio is a maintenance-and-records system — a kind of [[CMMS]]. It is not a dispatch system ([[TMS]]) and it is not a GPS tracker. It can, however, pull data such as odometer readings and engine fault codes in from telematics providers like Samsara through integrations." } }
      ],
      why: [
        "Without a system, maintenance lives in paper folders, spreadsheets and people's memory. Things get missed: a PM goes overdue, a defect from last week's inspection never gets fixed, nobody can say what a truck has cost.",
        { tiles: [
          { icon: 'clock', title: 'Nothing slips', text: 'Service reminders flag work that is due soon or overdue, by miles, engine hours or time.' },
          { icon: 'clipboard', title: 'One history per unit', text: 'Every completed repair becomes part of the vehicle\'s service history.' },
          { icon: 'dollar', title: 'Real costs', text: 'Work orders break costs into parts and labor lines, so cost per unit can be reported.' },
          { icon: 'shield', title: 'Defects get closed', text: 'Failed inspection items become issues that stay open until someone resolves them.' }
        ] }
      ],
      who: [
        { table: { head: ['Role', 'What they typically do in Fleetio'], rows: [
          ['Maintenance coordinator', 'Watches open issues and due/overdue reminders, opens and follows work orders, records vendor repairs, keeps meters and records accurate.'],
          ['Fleet / maintenance manager', 'Reviews costs, overdue PMs and reports; sets up service programs and approval rules.'],
          ['Technician / shop', 'Works assigned issues and work orders, records labor and parts used.'],
          ['Parts staff', 'Manages parts inventory and stock levels.'],
          ['Driver', 'Submits inspections and reports problems from the mobile app; may log fuel.']
        ] } },
        { callout: { kind: 'tip', text: 'Exactly who does what depends on how each company sets Fleetio up. Learn your company\'s rules: who may open work orders, who approves costs, who closes issues.' } }
      ],
      concepts: [
        "Fleetio uses specific words. Learn them — they appear in every screen and in conversations about the system.",
        { table: { head: ['Term', 'What it means', 'Trucking example'], rows: [
          ['Vehicle / asset', 'The record for one unit: identity (VIN, plate, make, model), status, meters, assignments, documents and history.', 'Tractor T-214, 2021 sleeper, VIN ending 4471.'],
          ['Meter', 'The odometer (miles or km) and/or engine-hour reading kept on the record. Reminders and cost per mile depend on it.', 'T-214 at 412,880 mi. A reefer unit is usually tracked by hours.'],
          ['Inspection', 'A checklist submitted from the mobile app or web, with photos and comments. Items can pass or fail.', 'Driver\'s pre-trip inspection with a photo of a cracked mirror.'],
          ['Issue', 'An unplanned problem on a vehicle. It stays Open until it is Resolved or Closed.', '"Left low-beam headlamp out."'],
          ['Service task', 'A defined job — recurring preventive work or a one-time repair.', '"PM A service", "Replace headlamp".'],
          ['Service reminder', 'A schedule for a recurring service task, with "due soon" and "overdue" thresholds.', 'PM A every 25,000 mi — due soon at 23,000.'],
          ['Work order', 'A detailed repair job with line items, each with its own parts and labor.', 'WO for PM A + headlamp, assigned to the in-house shop.'],
          ['Service entry', 'A simpler log of completed service with summary data — handy for outside vendor work. A completed work order creates one automatically.', 'Logging a roadside tire repair from an outside vendor\'s invoice.'],
          ['Service history', 'All service entries and completed work orders for a vehicle.', 'Everything done to T-214 since it joined the fleet.'],
          ['Fault', 'An engine fault code imported from a connected telematics device.', 'A fault code imported from the truck\'s Samsara gateway.']
        ] } },
        { note: 'The PM interval in these examples is fictional. Use your fleet\'s own intervals, set from the manufacturer\'s recommendations and company policy.' }
      ],
      features: [
        { ig: 'versus', icon: 'grid', title: 'Main Fleetio feature areas (as described on fleetio.com)', items: [
          { t: 'Vehicles & equipment', sub: 'Records for each unit: details, meters, assignments, documents, service history.' },
          { t: 'Inspections', sub: 'Digital inspections with photos and comments. A failed item can be turned into a work order in a few clicks.' },
          { t: 'Issues', sub: 'Unplanned problems that can be prioritized and assigned to technicians until resolved.' },
          { t: 'Service reminders', sub: 'Preventive maintenance schedules with due-soon and overdue reminders, also visible in Fleetio Go.' },
          { t: 'Work orders', sub: 'Repairs with parts and labor line items. They can be created from failed inspection items or engine fault (DTC) alerts.' },
          { t: 'Parts & inventory', sub: 'On-hand stock goes down automatically when a part is used on a maintenance task.' },
          { t: 'Fuel', sub: 'Fuel entries from the mobile app, and fuel card integrations that bring in fuel data and flag anomalies.' },
          { t: 'Integrations', sub: 'Telematics integrations (Samsara among them) can bring in meters, engine faults and DVIR defects automatically.' }
        ] }
      ],
      how: [
        "Fleetio connects four kinds of information around every vehicle: **what's planned** (service reminders), **what's wrong** (issues and faults), **the work done** (work orders and service entries) and **what it cost** (parts, labor and fuel).",
        { ig: 'hub', icon: 'activity', title: 'Everything in Fleetio hangs off the vehicle record', center: { icon: 'truck', t: 'Vehicle record' }, items: [
          { icon: 'gauge', t: 'Meters', d: 'Miles / engine hours' },
          { icon: 'clock', t: 'Service reminders', d: 'Due soon / overdue' },
          { icon: 'list-check', t: 'Inspections', d: 'Pass / fail items' },
          { icon: 'alert', t: 'Issues & faults', d: 'Open → resolved' },
          { icon: 'wrench', t: 'Work orders', d: 'Parts + labor' },
          { icon: 'file', t: 'Service history', d: 'Everything completed' }
        ] },
        "When a work order is completed, Fleetio creates a service entry from it. Both kinds of record add to the vehicle's service history and update its service reminders, so the next PM due date moves forward on its own — as long as the meter reading on the record is right."
      ],
      example: [
        "**Example fleet (fictional): 60 tractors, 140 dry vans, one in-house shop.** It is Monday morning.",
        { dialog: [
          ['note', '06:10 — Driver Luis submits his pre-trip inspection for T-214 in Fleetio Go.'],
          ['note', 'Item failed: "Lights — left low beam out", with a photo. An issue is opened on T-214.'],
          ['You', 'I see the failed item on T-214. Is it only the low beam, or the high beam too?'],
          ['Luis', 'Only the low beam. Everything else passed.'],
          ['note', 'You open T-214\'s record. Its PM A reminder is "due soon": 1,400 miles left.'],
          ['You', 'Bring it to the shop at 07:00. They\'ll do the headlamp and the PM A together, so you\'re only stopped once.']
        ] },
        "You create **one work order** for T-214 with two line items, the PM A service and the headlamp issue, and assign it to the shop. When the technician finishes, they record parts and labor and the work order is completed. The headlamp issue is resolved, PM A's next due point moves forward, and both jobs appear in the service history."
      ],
      role: [
        "A coordinator usually works in Fleetio every day. Those tasks fall into three groups:",
        { tabs: [
          { label: "What you'd see", body: [
            { ul: [
              'Open issues on each vehicle, including failed inspection items and imported faults',
              'Service reminders that are **due soon** or **overdue**',
              'Open work orders, their status and who they are assigned to',
              'Each vehicle\'s meters, assignment, service history and costs',
              'Low-stock parts (if your fleet uses the parts module)'
            ] }
          ] },
          { label: 'What you enter', body: [
            { ul: [
              'Work orders, with a line item for each job, plus vendor, parts and labor',
              'Service entries for outside vendor repairs, matched to the invoice',
              'Meter readings, whenever they aren\'t imported automatically',
              'Clear notes: complaint, cause, correction, and who approved it',
              'Invoice or estimate attachments and photos'
            ] }
          ] },
          { label: 'What you should check', body: [
            { ul: [
              'Is the meter reading realistic? A typo like 41,288 instead of 412,880 breaks reminders and cost per mile.',
              'Is the work on the **right unit**: tractor or trailer?',
              'Were the related issues resolved when the work was done?',
              'Did the next PM due point move forward after the PM was completed?',
              'Do parts and labor totals match the vendor invoice?'
            ] }
          ] }
        ] }
      ],
      workflow: [
        { timeline: [
          { title: 'Vehicle', text: 'Every unit has a record: identity, meters, assignment and service schedule.', owner: 'Set up by fleet admin' },
          { title: 'Inspection', text: 'The driver submits a pre-trip or post-trip inspection, with photos for failed items.', owner: 'Driver' },
          { title: 'Issue found', text: 'A failed item becomes an issue on the vehicle. Imported fault codes can also open issues. Decide how urgent it is: is it safety-critical?', owner: 'Coordinator reviews' },
          { title: 'Work order', text: 'Create a work order from the issue. Add any service tasks that are due soon so the unit stops only once.', owner: 'Coordinator' },
          { title: 'Maintenance', text: 'The shop or vendor does the work, and you track progress and the return-to-service time.', owner: 'Technician / vendor' },
          { title: 'Parts & labor', text: 'Parts used and labor time are recorded on each line item. Inventory adjusts for in-house parts.', owner: 'Technician / parts' },
          { title: 'Completed', text: 'Check the work, resolve the issues and complete the work order. Attach the invoice if it\'s an outside vendor.', owner: 'Coordinator' },
          { title: 'Service history', text: 'A service entry is created. History, costs and the next reminder are updated.', owner: 'Automatic' }
        ] }
      ],
      visual: [
        { ig: 'process', icon: 'route', title: 'From inspection to service history', items: [
          { icon: 'truck', t: 'Vehicle', d: 'T-214' }, { icon: 'list-check', t: 'Inspection', d: 'Pre-trip' },
          { icon: 'alert', t: 'Issue found', d: 'Low beam out' }, { icon: 'clipboard', t: 'Work order', d: '+ PM A due soon' },
          { icon: 'wrench', t: 'Maintenance', d: 'In-house shop' }, { icon: 'dollar', t: 'Parts / labor', d: 'Line items' },
          { icon: 'check-circle', t: 'Completed', d: 'Issue resolved' }, { icon: 'file', t: 'Service history', d: 'Reminder reset' }
        ] },
        { mock: { label: 'Educational mockup — simplified. Not Fleetio\'s actual screen.', title: 'Work order · T-214', status: 'In progress', rows: [
          ['Vehicle', 'T-214 · 2021 sleeper tractor'], ['Meter', '412,880 mi'], ['Line 1', 'PM A service — parts $186.40 · labor 2.0 h'],
          ['Line 2', 'Replace left low-beam headlamp — resolves issue #1182'], ['Assigned to', 'In-house shop'], ['Notes', 'Found at pre-trip 06:10. Combined with PM A due in 1,400 mi.']
        ] } },
        { ig: 'versus', icon: 'layers', title: 'Two pairs of terms people mix up', items: [
          { t: 'Issue vs service task', sub: '**Issue** = unplanned problem (a leak, a lamp out). **Service task** = a defined job, often planned and recurring (oil change, PM).', tone: 'info' },
          { t: 'Work order vs service entry', sub: '**Work order** = detailed job with parts/labor lines, good for planning shop work. **Service entry** = quick summary log, good for outside vendor work. A completed work order creates a service entry.', tone: 'success' }
        ] }
      ],
      mistakes: [
        { compare: {
          no: { title: 'Common mistakes', items: [
            'Typing a wrong meter reading, which throws off every reminder and cost-per-mile figure',
            'Logging trailer work on the tractor that was pulling it',
            'Leaving the issue open after the repair is done, so it looks unresolved forever',
            'Opening a second work order for a unit that already has one open',
            'Fixing the defect but ignoring the PM due next week, so the truck stops twice',
            'Writing notes like "fixed truck" with no complaint, cause or correction'
          ] },
          yes: { title: 'Do this instead', items: [
            'Sanity-check every meter reading against the last one',
            'Open work on the unit that has the problem',
            'Resolve issues on the work order that fixed them',
            'Check open work orders before creating a new one',
            'Look at due-soon reminders whenever a unit comes in',
            'Write notes someone else can understand a year from now'
          ] }
        } }
      ],
      scenario: [
        { widget: 'sim:workorder' },
        { exercise: { type: 'choose', prompt: "Trailer V-5502's driver fails the inspection item \"Tires: right rear outer, sidewall bulge\". The trailer is loaded and due out in 40 minutes. What do you do first in Fleetio and with the team?", options: [
          { text: 'Log a service entry saying the tire was replaced, so the record is complete before the trailer leaves', correct: false, why: 'Never record work that hasn\'t happened. Records must reflect reality.' },
          { text: 'Treat it as safety-critical: hold the trailer and tell dispatch. Turn the failed item into a work order on V-5502 (the trailer, not the tractor) and arrange a tire replacement', correct: true, why: 'A sidewall bulge can mean the tire is about to fail. Hold the unit, record the work on the correct unit, and arrange the repair.' },
          { text: 'Wait until the trailer\'s next PM and fix it then, because the issue is already recorded', correct: false, why: 'Recording a problem is not fixing it. Safety-critical defects are handled before the unit moves.' }
        ] } },
        { exercise: { type: 'order', prompt: 'Put the Fleetio steps for this repair in order.', items: ['Driver submits the inspection with a failed item', 'An issue is opened on the trailer', 'Work order created from the failed item', 'Tire replaced; parts and labor recorded', 'Issue resolved and work order completed', 'Service entry appears in the trailer\'s service history'] } }
      ],
      takeaways: [
        { ul: [
          'Fleetio is a **maintenance and fleet-records system**, not a dispatch system or a GPS tracker.',
          'Issues are unplanned problems. Service tasks and service reminders are the planned, preventive side.',
          'Work orders hold the detail (parts and labor lines). Completed work flows into the **service history** and updates reminders.',
          'Records are only as good as the data: correct unit, correct meter, issues resolved, clear notes.',
          'Combine due-soon PMs with repairs so a unit stops once instead of twice.'
        ] }
      ]
    },
    quiz: [
      { t: 'mc', q: 'In Fleetio, what is an **issue**?', o: ['A planned, recurring service such as an oil change', 'An unplanned problem on a vehicle that stays open until resolved', 'An invoice from an outside vendor', 'A driver\'s assignment to a truck'], a: 1, e: 'Issues are unplanned problems such as a leak or a lamp out. Planned work is set up as service tasks and service reminders.' },
      { t: 'mc', q: 'What happens when a work order is completed?', o: ['It is archived, and the vehicle\'s history stays as it was', 'Fleetio creates a service entry, and the vehicle\'s service history and reminders update', 'The vendor is paid automatically from the work order total', 'Nothing changes until the invoice is mailed and entered by hand'], a: 1, e: 'A completed work order generates a service entry. That adds to the service history and updates service reminders.' },
      { t: 'wwyd', q: 'T-118 comes in for a broken mirror. Its PM A reminder shows "due soon". What would you do?', o: ['Fix the mirror only; PMs are someone else\'s problem', 'Add the PM to the same work order so the unit stops once', 'Delete the reminder', 'Wait until the PM is overdue'], a: 1, e: 'Combining due-soon preventive work with a repair avoids a second trip to the shop and extra downtime.' },
      { t: 'mc', q: 'Which piece of information most affects whether PM reminders are accurate?', o: ['The vendor\'s labor rate on the last invoice', 'The meter reading (odometer or engine hours)', 'The truck\'s model year and engine type', 'The driver\'s home terminal and route'], a: 1, e: 'Mileage- and hour-based reminders count from the meter. A wrong reading moves every due date.' },
      { t: 'tf', q: 'A failed item in a Fleetio inspection can be turned into a work order.', a: true, e: 'True. Fleetio describes converting failed inspection items into work orders in a few clicks.' }
    ],
    sources: [
      ['Fleetio — Digital work orders', 'https://www.fleetio.com/features/digital-work-orders'],
      ['Fleetio — Preventive maintenance scheduling', 'https://www.fleetio.com/features/preventive-maintenance-scheduling'],
      ['Fleetio — Inspections', 'https://fleetio.com/manage/features/inspections'],
      ['Fleetio Go mobile app', 'https://www.fleetio.com/go'],
      ['Fleetio Help — Service tasks vs issues, service entries vs work orders', 'https://help.fleetio.com/maintenance/service-tasks-vs-issues-service-entries-vs-work-orders'],
      ['Fleetio Help — Samsara integration', 'https://help.fleetio.com/en_US/telematicsgps/samsara-integration-5']
    ]
  },

  /* ------------------------------------------------------------------ SAMSARA */
  {
    id: 'samsara', name: 'Samsara', maker: 'Samsara', kind: 'Telematics & connected operations', icon: 'activity', tone: 'success',
    url: 'https://www.samsara.com', checked: 'October 2026',
    tagline: 'A telematics platform: in-vehicle devices send location, engine and safety data to a cloud dashboard that raises alerts and reports.',
    card: {
      what: 'A telematics platform: hardware in the truck (the Vehicle Gateway and AI dash cams) plus a cloud dashboard and driver app.',
      use: 'GPS tracking, engine fault codes, driver safety events and dash-cam video, ELD/Hours of Service, DVIRs, fuel and idle data, and alerts.',
      who: 'Fleet managers, safety, dispatch and compliance staff, maintenance coordinators (faults and DVIRs) and drivers.'
    },
    sections: {
      what: [
        "Samsara is a **[[Telematics|telematics]]** company. It calls its platform **connected operations**. Hardware installed in the vehicle collects data and sends it over the cellular network to Samsara's cloud, where the fleet sees it in a web dashboard and the drivers use the **Samsara Driver App**.",
        { tiles: [
          { icon: 'zap', title: 'Vehicle Gateway', text: 'Samsara describes it as a cellular gateway with GPS and a CAN bus interface. It reads location and engine data.' },
          { icon: 'image', title: 'AI Dash Cams', text: 'Road-facing and multi-camera options that record safety events and detect risky behaviors.' },
          { icon: 'message', title: 'Driver App', text: 'Used by drivers for Hours of Service (ELD), DVIR inspections and other workflows.' },
          { icon: 'grid', title: 'Cloud dashboard', text: 'Where the office sees maps, alerts, reports, safety events, faults and maintenance.' }
        ] }
      ],
      why: [
        "Before telematics, the office knew where a truck was or what was wrong with it only when the driver called. Telematics turns every truck into a live data source.",
        { ul: [
          '**Visibility**: where every vehicle, trailer and asset is, right now.',
          '**Safety**: harsh driving events and AI-detected behaviors feed driver coaching.',
          '**Compliance**: electronic logging of Hours of Service and digital DVIRs.',
          '**Maintenance**: engine fault codes and driver-reported defects reach the maintenance team quickly.',
          '**Cost**: fuel use and idle time show where money is wasted.'
        ] }
      ],
      who: [
        { table: { head: ['Role', 'What they use Samsara for'], rows: [
          ['Dispatch / operations', 'Location, ETAs and routing. Seeing which truck is closest.'],
          ['Safety / compliance', 'Safety events, dash-cam video, coaching, HOS violations, DVIR compliance.'],
          ['Maintenance coordinator', 'Engine fault alerts, DVIR defects, vehicle location for roadside service, meters, maintenance status.'],
          ['Fleet manager', 'Fuel, idle, utilization and reports across the fleet.'],
          ['Driver', 'Logs Hours of Service and completes DVIRs in the Driver App.']
        ] } }
      ],
      concepts: [
        { table: { head: ['Concept', 'Meaning', 'Example'], rows: [
          ['Telematics', 'Collecting vehicle data with an on-board device and sending it remotely.', 'The gateway reports T-311\'s position and engine data.'],
          ['GPS location', 'Where the vehicle is, shown on a live map.', 'T-311 is stopped on I-80 eastbound near mile 142.'],
          ['Engine fault code (DTC)', 'A code stored by the truck\'s computers when they detect a problem; the gateway reads and reports it. See [[DTC]] and [[SPN / FMI]].', 'An aftertreatment fault appears on T-311.'],
          ['Safety event', 'A detected harsh-driving event, such as harsh braking, acceleration or turning, or a crash, often with video.', 'A harsh-braking event with a 10-second clip.'],
          ['AI-detected behavior', 'Behaviors the dash cam detects, such as tailgating, mobile phone use or a rolling stop.', 'A mobile-usage alert on driver 52.'],
          ['ELD / HOS', 'Electronic logging device records that track drivers\' Hours of Service. See [[ELD]] and [[HOS]].', 'The driver has 2 h 15 min of driving time left.'],
          ['DVIR', 'Driver vehicle inspection report, completed in the Driver App. See [[DVIR]].', 'A post-trip DVIR notes a cracked windshield.'],
          ['Alert', 'A rule-based notification sent when something happens.', 'Text and email to maintenance when a fault code appears.']
        ] } }
      ],
      features: [
        { ig: 'versus', icon: 'grid', title: 'Main Samsara feature areas (as described on samsara.com)', items: [
          { t: 'GPS & tracking', sub: 'Live map of vehicles, trailers and equipment, plus routing.' },
          { t: 'Vehicle diagnostics', sub: 'Engine diagnostics, fault codes and idle time from the gateway.' },
          { t: 'Safety & dash cams', sub: 'Event-based recording of harsh events and AI-detected behaviors, plus coaching workflows.' },
          { t: 'ELD compliance', sub: 'Hours of Service logs with automated ruleset updates and a compliance dashboard.' },
          { t: 'DVIR', sub: 'Digital inspections. Driver-reported defects can flow into maintenance and work orders.' },
          { t: 'Maintenance', sub: 'Fault code alerts with suggested action steps, DVIR defects and work orders in one place.' },
          { t: 'Fuel', sub: 'Fuel use and idle waste, with fuel-price information for coaching drivers.' },
          { t: 'Alerts & reports', sub: 'Real-time alerts (for example speeding, harsh braking, idling, unauthorized use) and reports.' }
        ] }
      ],
      how: [
        { ig: 'process', icon: 'route', title: 'From the truck to a fleet decision', items: [
          { icon: 'truck', t: 'Truck', d: 'Engine, GPS, driver' },
          { icon: 'zap', t: 'Sensors / devices', d: 'Gateway + dash cam' },
          { icon: 'activity', t: 'Samsara platform', d: 'Cellular → cloud' },
          { icon: 'bar', t: 'Data', d: 'Location, faults, events, HOS' },
          { icon: 'alert', t: 'Alerts / reports', d: 'Rules notify people' },
          { icon: 'target', t: 'Fleet decision', d: 'Someone acts' }
        ] },
        "The gateway connects to the truck's diagnostic network (Samsara mentions a CAN bus interface), so it can read what the truck's own computers report, such as fault codes and engine data. It adds its own GPS position. Dash cams add video and AI detection. The Driver App adds HOS logs and inspections. All of this lands in one dashboard, where **alert rules** decide who gets notified.",
        { callout: { kind: 'warning', title: 'Telematics reports, people decide', text: 'Samsara can show that a fault code is active. It cannot inspect the truck. A code tells you what the truck\'s computer detected, not always what the repair is. Talk to the driver and get a qualified technician to diagnose it.' } }
      ],
      example: [
        "**Example fleet (fictional), Tuesday 06:40.** You receive a Samsara alert email.",
        { dialog: [
          ['note', 'Alert: T-311 — engine fault code active. Location: I-80 EB, near mile 142. Moving at 61 mph.'],
          ['You', 'Morning Ray, this is maintenance. Your truck reported an engine fault. Do you have any warning lamps, and does it feel any different?'],
          ['Ray', 'The check engine light came on about ten minutes ago. Power feels normal, no other lights.'],
          ['note', 'You check the fault details and suggested action steps in Samsara. Ray has 6 h 10 min of driving time left on his HOS clock.'],
          ['You', 'Okay. Keep going carefully and call me right away if a red stop lamp comes on or you lose power. I\'m finding a shop near your delivery so we can get it checked this afternoon.']
        ] },
        "Samsara gave you the fault, the location and the driver's available hours **before** the driver called. You still talked to the driver, judged urgency from their symptoms, and planned a diagnosis that fits the load."
      ],
      role: [
        "Samsara monitors far more than a maintenance coordinator needs to act on. Know which signals are yours and which belong to someone else.",
        { ig: 'table', icon: 'target', title: 'What Samsara monitors vs what you act on', head: ['Samsara shows…', 'Usually owned by', 'Does the coordinator act?'], rows: [
          ['Engine fault code / check-engine alert', 'Maintenance', '**Yes.** Triage it: call the driver, read the details, decide urgency, arrange diagnosis.'],
          ['DVIR with a defect', 'Maintenance', '**Yes.** A reported defect must be reviewed and repaired (or certified as not needing repair) per procedure.'],
          ['Vehicle location', 'Dispatch', '**Uses it.** Find the nearest qualified shop or mobile service for a breakdown.'],
          ['Hours of Service remaining', 'Driver / safety / dispatch', '**Uses it.** Plan repair timing around the driver\'s legal hours.'],
          ['Harsh braking / AI behavior event', 'Safety (coaching)', '**Usually no.** If the driver reports a mechanical cause (such as brakes pulling), that becomes a maintenance issue.'],
          ['Dash-cam video of a collision', 'Safety / claims', '**Partly.** Safety owns the event. You coordinate the damage repair.'],
          ['Fuel use and idle time', 'Fleet manager', '**Rarely.** Sudden fuel-economy changes on one unit may be worth a maintenance look.'],
          ['Odometer / engine hours', 'Maintenance records', '**Yes.** Meters drive PM schedules, and can sync to systems such as Fleetio.']
        ] },
        { callout: { kind: 'tip', title: 'Avoid alert fatigue', text: 'If every alert pings you, you\'ll start ignoring all of them. Work with your manager on which alert rules go to maintenance, such as active engine faults and DVIR defects, and which go to safety or dispatch.' } }
      ],
      workflow: [
        { timeline: [
          { title: 'Alert arrives', text: 'For example "Engine fault — T-311". Note the time, unit, code and location.', owner: 'Samsara → coordinator' },
          { title: 'Read the details', text: 'Look at the fault description, any suggested action steps, whether it\'s still active, and the history: has this happened before?', owner: 'Coordinator' },
          { title: 'Contact the driver', text: 'Ask about warning lamps, symptoms and power. A red stop lamp, low air or overheating means stop safely.', owner: 'Coordinator + driver' },
          { title: 'Decide urgency', text: 'Stop now, repair today, or schedule. Check HOS remaining and the load.', owner: 'Coordinator (per procedure)' },
          { title: 'Arrange service', text: 'Use the location to pick a nearby qualified shop or mobile tech, and tell dispatch.', owner: 'Coordinator' },
          { title: 'Record it', text: 'Open or update the work order or case in your maintenance system. It may be Samsara\'s own maintenance tools or a connected system like Fleetio.', owner: 'Coordinator' },
          { title: 'Confirm and close', text: 'After the repair, confirm the fault is no longer active and close the loop with the driver and dispatch.', owner: 'Coordinator' }
        ] }
      ],
      visual: [
        { mock: { label: 'Educational mockup — simplified. Not Samsara\'s actual screen.', title: 'Alert · Engine fault', status: 'Active', tone: 'warning', rows: [
          ['Vehicle', 'T-311 · 2020 day cab'], ['Time', 'Tue 06:40'], ['Location', 'I-80 EB near mile 142 · moving 61 mph'], ['Fault', 'Engine fault code — see details for SPN/FMI and description'],
          ['Driver', 'Ray M. · 6 h 10 min drive time left'], ['Suggested next step', 'Contact driver; check symptoms; schedule diagnosis']
        ] } },
        { ig: 'versus', icon: 'alert', title: 'Six alerts and who acts', items: [
          { t: 'Engine warning', sub: 'Check-engine fault active.', use: 'Maintenance triages: call the driver, assess urgency.', tone: 'warning' },
          { t: 'Vehicle location', sub: 'Truck stopped on the shoulder.', use: 'Maintenance uses it to find roadside service. Dispatch replans.', tone: 'info' },
          { t: 'Driver safety event', sub: 'Mobile usage detected by the dash cam.', use: 'Safety coaches the driver. Not a maintenance item.', tone: 'critical' },
          { t: 'Harsh braking', sub: 'Sudden deceleration event with video.', use: 'Safety reviews it. Maintenance only if a mechanical cause is reported.', tone: 'critical' },
          { t: 'Diagnostic information', sub: 'Fault history shows the same code three times this month.', use: 'Maintenance: a repeat-failure pattern worth a root-cause check.', tone: 'warning' },
          { t: 'Maintenance alert', sub: 'DVIR defect: "air leak at glad hand".', use: 'Maintenance reviews and repairs before the unit moves, per procedure.', tone: 'success' }
        ] }
      ],
      mistakes: [
        { compare: {
          no: { title: 'Common mistakes', items: [
            'Treating every fault code as an emergency, or ignoring them all',
            'Deciding the repair from the code alone without talking to the driver',
            'Using a safety event (harsh braking) to blame equipment without evidence',
            'Forgetting HOS: planning a shop visit the driver has no legal hours to reach',
            'Closing the case without confirming the fault is no longer active'
          ] },
          yes: { title: 'Do this instead', items: [
            'Check severity, whether it\'s active, and the symptoms',
            'Use the code as a starting point for a qualified diagnosis',
            'Leave driving behavior to safety; act on reported mechanical symptoms',
            'Check HOS remaining before you book the repair',
            'Confirm the fix and document it'
          ] }
        } }
      ],
      scenario: [
        { widget: 'sim:alerts' },
        { exercise: { type: 'classify', prompt: 'Who should act first on each Samsara signal?', categories: ['Maintenance coordinator', 'Safety', 'Dispatch'], items: [
          { text: 'Engine fault code active on T-311 with a check-engine lamp', answer: 'Maintenance coordinator', why: 'Faults are maintenance triage.' },
          { text: 'AI dash cam detected tailgating', answer: 'Safety', why: 'Driver behavior is coached by safety.' },
          { text: 'Truck will arrive 45 minutes late to a delivery appointment', answer: 'Dispatch', why: 'Appointments and customer updates belong to dispatch.' },
          { text: 'Post-trip DVIR: "brake chamber leaking air"', answer: 'Maintenance coordinator', why: 'A reported safety defect needs maintenance review and repair before the unit is used.' }
        ] } },
        { exercise: { type: 'choose', prompt: 'A fault alert for T-402 says "active". The driver says a red STOP ENGINE lamp is on and power is dropping. What next?', options: [
          { text: 'Tell the driver to keep going to the terminal, 90 miles away', correct: false, why: 'A red stop lamp with power loss means stop safely. Pushing on can cause major damage or a safety risk.' },
          { text: 'Have the driver stop safely, then use the Samsara location to arrange roadside service or a tow, and tell dispatch', correct: true, why: 'Safety first, then use the location data to bring help to the truck.' },
          { text: 'Clear the code remotely and see whether it returns', correct: false, why: 'A coordinator does not "clear" a red-lamp fault away. The truck needs a qualified diagnosis.' }
        ] } }
      ],
      takeaways: [
        { ul: [
          'Samsara is a **telematics platform**: in-vehicle devices plus a cloud dashboard and driver app.',
          'It shows location, engine faults, safety events, HOS, DVIRs, fuel and alerts. Much of that belongs to safety and dispatch.',
          'Your signals: **engine faults, DVIR defects, meters**, and location when a truck needs help.',
          'A fault code starts a conversation and a diagnosis. It is not a repair order.',
          'Samsara data can feed maintenance systems, for example meters, faults and DVIRs into Fleetio.'
        ] }
      ]
    },
    quiz: [
      { t: 'mc', q: 'Which Samsara device reads location and engine data from the truck?', o: ['The Vehicle Gateway', 'The fuel card', 'The trailer kingpin', 'The driver\'s pay statement'], a: 0, e: 'Samsara describes the Vehicle Gateway as a cellular gateway with GPS and a CAN bus interface.' },
      { t: 'scenario', q: 'Samsara reports a harsh-braking event on T-208. The driver says a car cut in front of them; the brakes felt normal. Who owns the follow-up?', o: ['Maintenance — replace the brakes', 'Safety — review and coach as needed', 'Billing', 'Nobody'], a: 1, e: 'Harsh-braking events are a safety and coaching topic. With no mechanical symptom, there is no maintenance action.' },
      { t: 'mc', q: 'Which system would most likely tell you where a broken-down truck is right now?', o: ['The parts catalog, which lists the nearest shops', 'The telematics platform (Samsara)', 'The maintenance system\'s last service entry', 'The vendor\'s most recent invoice'], a: 1, e: 'GPS location from telematics helps you send roadside service to the right place.' },
      { t: 'wwyd', q: 'You get an engine fault alert. What would you check first?', o: ['The fuel price at the nearest truck stop', 'The driver\'s symptoms and lamps, then the code', 'Last month\'s invoices for the same unit', 'The vendor\'s labor rate for diagnostics'], a: 1, e: 'Safety and urgency come first. Symptoms and lamp color tell you whether the truck must stop.' },
      { t: 'tf', q: 'A fault code always tells you exactly which part to replace.', a: false, e: 'False. A code shows what the truck\'s computer detected. A qualified technician diagnoses the cause.' }
    ],
    sources: [
      ['Samsara — Fleet telematics', 'https://www.samsara.com/products/telematics'],
      ['Samsara — Connected maintenance', 'https://www.samsara.com/products/telematics/fleet-maintenance'],
      ['Samsara — ELD compliance', 'https://www.samsara.com/products/apps-and-workflows/eld-compliance'],
      ['Samsara Help — Event-based recording', 'https://kb.samsara.com/hc/en-us/articles/36409226230541-Event-Based-Recording'],
      ['Samsara Help — Driver coaching workflow', 'https://kb.samsara.com/hc/en-us/articles/360056588511-Driver-Coaching-Workflow'],
      ['Samsara Help — Work orders for maintenance management', 'https://kb.samsara.com/hc/en-us/articles/32504504318989-Work-Orders-for-Maintenance-Management']
    ]
  },

  /* ------------------------------------------------------------ PROTRANSPORT */
  {
    id: 'pro-transport', name: 'ProTransport', maker: 'RTS', kind: 'Trucking software (TMS)', icon: 'route', tone: 'warning',
    url: 'https://www.rtsinc.com/product/pro-transport', checked: 'October 2026',
    tagline: 'Trucking management software from RTS for loads, dispatch, drivers, documents, accounting and reporting.',
    card: {
      what: 'A transportation management system (TMS) made by RTS, a trucking services company.',
      use: 'Entering loads, dispatching them to drivers, driver trip updates and document uploads, invoicing, driver pay statements, IFTA and safety and maintenance reminders.',
      who: 'Dispatchers, operations, billing and accounting, drivers through the mobile app, and fleet owners.'
    },
    sections: {
      what: [
        "**ProTransport** (often written \"Pro Transport\") is trucking software made by **RTS**, a company that also offers factoring and other services to trucking companies. RTS describes it as a [[TMS]] for fleets \"from one to 500 trucks\", with an Enterprise version for high-volume fleets and freight brokerages.",
        { callout: { kind: 'info', title: 'Which "Pro Transport"?', text: 'Several unrelated businesses use similar names. This page covers **ProTransport by RTS** (rtsinc.com) and only the features RTS lists on its official pages. Companies buy different plans and integrations, so check what your employer actually uses.' } },
        "Where Fleetio is the *maintenance* system and Samsara is the *telematics* system, a TMS is the **operations and money** system: which load goes on which truck with which driver, and how it gets billed and paid."
      ],
      why: [
        { tiles: [
          { icon: 'route', title: 'Run dispatch', text: 'Loads are planned and assigned from a dispatch board or scheduler.' },
          { icon: 'message', title: 'Stay connected to drivers', text: 'Drivers get trip assignments and send status updates from a mobile app.' },
          { icon: 'file', title: 'Keep documents with the load', text: 'Load paperwork photographed by drivers is attached to the right load.' },
          { icon: 'dollar', title: 'Get paid and pay drivers', text: 'Invoices, payments, statements, driver pay statements and QuickBooks export.' }
        ] }
      ],
      who: [
        { table: { head: ['Role', 'What they use ProTransport for'], rows: [
          ['Dispatcher', 'Builds and assigns loads, watches trip status on the dispatch board, updates brokers.'],
          ['Driver', 'Sees active trips, upcoming loads and instructions, updates trip status, uploads documents.'],
          ['Billing / accounting', 'Invoices, payments, statements, driver pay, IFTA and reports.'],
          ['Owner / manager', 'Reports across loads, trucks and drivers.'],
          ['Maintenance coordinator', 'Usually a **reader**, not the owner: sees which load and driver a truck is on, and uses safety and maintenance reminders if the company uses them.']
        ] } }
      ],
      concepts: [
        { table: { head: ['Concept', 'Meaning'], rows: [
          ['Load', 'A shipment the carrier hauls: pickup, delivery, rate, customer or broker, and its documents.'],
          ['[[Rate confirmation]]', 'The broker\'s or shipper\'s agreement for the load. ProTransport lists **rate confirmation scanning** to capture load details without retyping.'],
          ['Dispatch board / scheduler', 'Where dispatch assigns loads to drivers and trucks and follows trip status.'],
          ['Trip status', 'Updates the driver sends from the app, which appear on the dispatch board right away.'],
          ['Load documents', 'Paperwork such as the [[BOL]] and [[POD]], photographed in the app and attached to the load automatically.'],
          ['Load status alerts', 'Updates that keep brokers informed from the dispatch board.'],
          ['IFTA reporting', 'Fuel-tax reporting across jurisdictions. ProTransport lists IFTA reporting and automatic fuel import.'],
          ['Safety & maintenance reminders', 'Reminders for safety and maintenance items that are due across the fleet.']
        ] } }
      ],
      features: [
        { ig: 'versus', icon: 'grid', title: 'ProTransport features listed by RTS', items: [
          { t: 'Fleet & load management', sub: 'Loads, drivers and trucks in one system (unlimited users, drivers and trucks, per RTS).' },
          { t: 'Dispatch board / scheduler', sub: 'Plan and assign loads; see trip status update in real time.' },
          { t: 'Driver Mobile App', sub: 'Trip assignment alerts and push notifications, load details and instructions, status updates, document photo upload.' },
          { t: 'Rate confirmation scanning', sub: 'Capture load details from the rate con instead of typing them.' },
          { t: 'Accounting & reports', sub: 'Invoices, payments, statements, driver pay statements, QuickBooks export, CSV reports.' },
          { t: 'IFTA & fuel import', sub: 'IFTA reporting and automatic fuel import.' },
          { t: 'Safety & maintenance reminders', sub: 'Alerts to track and manage maintenance and safety across the fleet.' },
          { t: 'Integrations & documents', sub: 'ELD providers, toll services, QuickBooks, and unlimited digital document storage.' }
        ] },
        { note: 'Feature names are taken from RTS\'s official ProTransport pages. Plans differ, so confirm which modules your company has.' }
      ],
      how: [
        "Everything in a TMS revolves around the **load**. A load is created, given a driver and truck, tracked through status updates, delivered, documented and billed.",
        { flow: ['Rate con', 'Load created', 'Dispatched', 'Driver app', 'Status updates', 'Delivered', 'Documents uploaded', 'Invoice & driver pay'], hl: [2, 6] },
        "When the driver updates the trip status in the Driver Mobile App, RTS says the update appears on the dispatcher's **dispatch board** right away, without manual entry. Documents the driver photographs are attached to the correct load, so billing can invoice without waiting for paper.",
        { callout: { kind: 'info', title: 'About tracking', text: 'In ProTransport, "tracking" means **trip status updates** from the driver app and **load status alerts** to brokers. RTS also lists integrations with ELD providers. What location data comes in depends on the provider your company connects, so ask before you assume.' } }
      ],
      example: [
        "**Example fleet (fictional): 35 trucks, dry van, mostly brokered freight.**",
        { dialog: [
          ['note', '08:00 — Dispatch scans a rate confirmation for load 77120 (Chicago → Columbus). The details fill in.'],
          ['note', '08:15 — The load is assigned to driver Ana on truck T-122. Ana gets a trip assignment notification in the app.'],
          ['note', '13:40 — Ana updates the status to "Loaded". The dispatch board updates and the broker gets a load status alert.'],
          ['Dispatcher', 'Maintenance, heads up: T-122 is on 77120, delivering in Columbus tomorrow 07:00. Its safety & maintenance reminder shows the annual inspection is due next week.'],
          ['You', 'Thanks. I\'ll book the inspection near our Columbus shop after delivery, so it doesn\'t touch the load.'],
          ['note', 'Next day 07:30 — Ana photographs the signed BOL in the app. It\'s attached to load 77120 and billing invoices it.']
        ] }
      ],
      role: [
        "The coordinator rarely *runs* the TMS, but the TMS answers questions maintenance always has:",
        { tiles: [
          { icon: 'route', title: 'Is the unit on a load?', text: 'Before pulling a truck for service, check whether it\'s dispatched, and where the load is due.' },
          { icon: 'users', title: 'Which driver has it?', text: 'Get the driver assigned to the unit and their trip details.' },
          { icon: 'clock', title: 'When is it free?', text: 'Plan PMs and repairs around upcoming loads with dispatch.' },
          { icon: 'alert', title: 'What\'s due?', text: 'If your company uses ProTransport\'s safety & maintenance reminders, include them in your planning.' }
        ] },
        { callout: { kind: 'warning', text: 'When a truck goes down, **tell dispatch right away**, with the unit, location, load affected and ETR, so they can replan, recover the load or update the broker. The TMS shows the load; it doesn\'t know the truck is broken until a person tells it.' } }
      ],
      workflow: [
        { timeline: [
          { title: 'Load', text: 'The rate confirmation is received, and the load is entered or scanned with pickup, delivery, rate and reference numbers.', owner: 'Dispatch' },
          { title: 'Dispatch', text: 'The load is assigned on the dispatch board or scheduler.', owner: 'Dispatch' },
          { title: 'Driver', text: 'The driver gets a trip assignment alert with load details and instructions in the app.', owner: 'Driver' },
          { title: 'Vehicle', text: 'The truck (and trailer) assigned to the trip. Maintenance confirms it\'s fit for the trip and no service is due mid-trip.', owner: 'Dispatch + maintenance' },
          { title: 'Trip & status updates', text: 'The driver updates trip status, the dispatch board updates, and brokers get load status alerts.', owner: 'Driver → dispatch' },
          { title: 'Delivery', text: 'The load is delivered and its status updated.', owner: 'Driver' },
          { title: 'Documentation', text: 'The driver photographs the BOL/POD in the app, and it attaches to the load.', owner: 'Driver' },
          { title: 'Billing & pay', text: 'Invoices, payments and driver pay statements are produced, and IFTA and reports run from the same data.', owner: 'Accounting' }
        ] }
      ],
      visual: [
        { ig: 'process', icon: 'route', title: 'A load\'s life in a TMS', items: [
          { icon: 'file', t: 'Load', d: 'Rate con scanned' }, { icon: 'route', t: 'Dispatch', d: 'Dispatch board' },
          { icon: 'users', t: 'Driver', d: 'App alert' }, { icon: 'truck', t: 'Vehicle', d: 'Fit for trip?' },
          { icon: 'activity', t: 'Trip', d: 'Status updates' }, { icon: 'pin', t: 'Delivery', d: 'Broker alerted' },
          { icon: 'clipboard', t: 'Documents', d: 'BOL/POD photo' }, { icon: 'dollar', t: 'Billing', d: 'Invoice & pay' }
        ] },
        { ig: 'versus', icon: 'layers', title: 'Three systems, three jobs', items: [
          { t: 'TMS (ProTransport)', sub: 'Loads, dispatch, drivers, documents, billing.', use: 'Answers "which load is this truck on?"', tone: 'warning' },
          { t: 'Maintenance system (Fleetio)', sub: 'Vehicle records, PMs, issues, work orders, costs.', use: 'Answers "what does this truck need?"', tone: 'info' },
          { t: 'Telematics (Samsara)', sub: 'Location, engine faults, safety, HOS, DVIR.', use: 'Answers "what is the truck reporting right now?"', tone: 'success' }
        ], key: 'A coordinator moves between all three. The truck is the same, but each system holds a different part of its story.' }
      ],
      mistakes: [
        { compare: {
          no: { title: 'Common mistakes', items: [
            'Pulling a truck into the shop without checking whether it is on a load',
            'Assuming the TMS "knows" about a breakdown that nobody has told dispatch about',
            'Assuming every ProTransport customer has the same modules or integrations',
            'Treating "trip status" as live GPS without confirming the data source',
            'Booking PMs that clash with scheduled loads'
          ] },
          yes: { title: 'Do this instead', items: [
            'Check the unit\'s dispatch status before scheduling work',
            'Report down units to dispatch right away with location, load and ETR',
            'Learn your company\'s plan and connected integrations',
            'Confirm location with telematics or the driver',
            'Plan service windows with dispatch'
          ] }
        } }
      ],
      scenario: [
        { widget: 'sim:board' },
        { exercise: { type: 'choose', prompt: 'T-122 needs a 4-hour repair that isn\'t safety-critical. In the TMS you see it\'s dispatched on a load delivering tomorrow at 07:00, 300 miles away. What do you do?', options: [
          { text: 'Pull it into the shop now; maintenance comes first', correct: false, why: 'If it\'s not safety-critical, don\'t blow up a load. Plan the repair with dispatch.' },
          { text: 'Agree a service window with dispatch after delivery, near the delivery point if possible, and record the planned work', correct: true, why: 'This protects the load and still gets the repair done promptly.' },
          { text: 'Do nothing until the driver complains', correct: false, why: 'Known repairs should be scheduled, not forgotten.' }
        ] } },
        { exercise: { type: 'order', prompt: 'Put the TMS steps in order.', items: ['Rate confirmation scanned and load created', 'Load assigned to a driver and truck on the dispatch board', 'Driver receives the trip assignment in the app', 'Driver updates trip status; broker gets a load status alert', 'Driver uploads the signed BOL photo after delivery', 'Invoice created for the load'] } }
      ],
      takeaways: [
        { ul: [
          '**ProTransport is RTS\'s trucking software (TMS)**: loads, dispatch, drivers, documents, accounting and reporting.',
          'The driver app connects the truck to the office: assignments out, status updates and documents in.',
          'For maintenance, the TMS answers **"which load and driver is this unit on, and when is it free?"**',
          'It also lists safety & maintenance reminders, but most fleets keep detailed repair records in a maintenance system.',
          'Only rely on features your company has actually bought and connected.'
        ] }
      ]
    },
    quiz: [
      { t: 'mc', q: 'What kind of system is ProTransport?', o: ['A transport refrigeration unit for trailers', 'A trucking management system (TMS) made by RTS', 'A tire tracking system made by a tire maker', 'An engine diagnostic tool for technicians'], a: 1, e: 'ProTransport is RTS\'s trucking software for loads, dispatch, accounting and more.' },
      { t: 'mc', q: 'A driver photographs the signed BOL in the ProTransport Driver Mobile App. What happens, according to RTS?', o: ['It is emailed to the shop', 'It is attached to the correct load automatically', 'It is deleted after 24 hours', 'It updates the truck\'s PM schedule'], a: 1, e: 'RTS says uploaded documents are attached to the correct load, so office staff can see them right away.' },
      { t: 'scenario', q: 'You need to know whether T-509 is currently on a load before scheduling a PM. Which system answers that?', o: ['The TMS', 'The tire sidewall', 'The reefer controller', 'The parts catalog'], a: 0, e: 'Load and dispatch assignments live in the TMS.' },
      { t: 'wwyd', q: 'A dispatched truck breaks down. What should the Maintenance Coordinator do about the TMS side?', o: ['Nothing; the TMS updates itself', 'Tell dispatch immediately: unit, location, load affected and ETR', 'Cancel the load in the TMS yourself', 'Email the broker directly without telling dispatch'], a: 1, e: 'Dispatch owns the load. Give them what they need to replan and update the customer.' },
      { t: 'tf', q: 'Every company using ProTransport has exactly the same modules and integrations.', a: false, e: 'False. RTS offers different plans and integrations. Learn what your company uses.' }
    ],
    sources: [
      ['RTS — ProTransport trucking software', 'https://www.rtsinc.com/product/pro-transport'],
      ['RTS — ProTransport Enterprise TMS', 'https://rtsinc.com/trucking-services/trucking-software/enterprise'],
      ['RTS — ProTransport Driver Mobile App', 'https://rtsinc.com/resources/blogs/protransport-driver-mobile-app']
    ]
  },

  /* ------------------------------------------------------------- THERMO KING */
  {
    id: 'thermo-king', name: 'Thermo King', maker: 'Trane Technologies', kind: 'Transport refrigeration (equipment)', icon: 'thermo', tone: 'critical',
    url: 'https://www.thermoking.com', checked: 'October 2026',
    tagline: 'Transport temperature control: refrigeration units (TRUs) that keep reefer trailers and trucks at the right temperature, plus their controllers and telematics.',
    card: {
      what: 'A transport temperature-control brand of Trane Technologies. It makes refrigeration units (TRUs) for trailers, trucks, rail and containers.',
      use: 'Keeping temperature-sensitive cargo at its setpoint: cooling, heating, defrost, alarms, pretrip tests and temperature records.',
      who: 'Drivers (pretrip, setpoint checks), dispatch, maintenance coordinators, refrigeration technicians and dealers.'
    },
    sections: {
      what: [
        "**Thermo King** is not mainly a software company. It makes **equipment**: transport refrigeration and temperature-control systems. It is a brand of **Trane Technologies**, and dates its start to **1938**, when co-founder **Frederick McKinley Jones** designed a mechanical refrigeration unit for trucks. Thermo King's products today cover vans, trucks, trailers, rail and containers.",
        { libPhoto: 'reeferunit', caption: 'A Thermo King refrigeration unit on the front wall of a semi-trailer' },
        "For a coordinator, Thermo King means the **refrigeration unit** on the front of a reefer trailer, its **controller** (in North America, Precedent trailer units use the **SR-4 (Smart Reefer 4)** control system), and its connected data (Thermo King's **TracKing** telematics).",
        { callout: { kind: 'info', title: 'What is a TRU?', text: 'A **transport refrigeration unit (TRU)** is a self-contained cooling and heating system mounted on a trailer, usually on the front wall, or on a truck body. Many trailer TRUs have their own small diesel engine and fuel tank. Hybrid-electric models, such as Thermo King\'s Precedent S-750i, can also plug into shore power.' } }
      ],
      why: [
        "Food, medicine, flowers and some chemicals must stay within a temperature range from pickup to delivery. A [[Reefer]] trailer is an insulated box, but insulation only slows heat down. The TRU actively **removes heat** (or adds it in cold weather) to hold the **setpoint**.",
        { ig: 'versus', icon: 'thermo', title: 'Dry van vs reefer: same box shape, different risk', items: [
          { art: 'dryvan', t: 'Dry van', sub: 'No temperature control. A breakdown delays the freight.' },
          { art: 'reefer', t: 'Reefer + TRU', sub: 'The unit holds the setpoint. A failure can **ruin the load**, and the claim can exceed the repair bill many times over.', tone: 'critical' }
        ] }
      ],
      who: [
        { table: { head: ['Role', 'Interaction with the unit'], rows: [
          ['Driver', 'Checks setpoint and mode against the load paperwork, runs or watches the pretrip test, reports alarms.'],
          ['Dispatch', 'Gives setpoint and mode instructions from the shipper. Reacts to temperature problems with the customer.'],
          ['Maintenance coordinator', 'Tracks unit PM by engine hours, responds to alarms, books refrigeration-qualified service, keeps records.'],
          ['Refrigeration technician / dealer', 'Diagnoses and repairs the unit, including refrigerant work, which only qualified technicians should do.'],
          ['Fleet / safety', 'Reviews temperature records and claims.']
        ] } }
      ],
      concepts: [
        { table: { head: ['Term', 'Meaning', 'Why it matters'], rows: [
          ['Setpoint', 'The temperature the unit is told to hold, taken from the shipper\'s instructions.', 'A wrong setpoint can ruin a perfectly working load.'],
          ['Return air temperature', 'Air coming **back** from the cargo area into the unit.', 'Closest reading to what the cargo space is experiencing.'],
          ['Discharge (supply) air temperature', 'Air **leaving** the unit after passing the evaporator coil.', 'Shows what the unit is producing. A big gap from return air can point to icing or airflow problems.'],
          ['Operating modes', 'The SR-4 lists Cool, Modulated Cool, Null, Heat and Defrost modes (diesel and electric).', 'Units heat as well as cool to hold the setpoint.'],
          ['CYCLE-SENTRY vs Continuous', 'CYCLE-SENTRY starts and stops the unit as needed. Continuous keeps it running.', 'The shipper\'s instructions may specify one. Check the paperwork.'],
          ['Defrost', 'Melting ice off the evaporator coil. Started automatically (timed or on demand) or manually.', 'Ice blocks airflow and cooling.'],
          ['Pretrip', 'A self-test the controller runs before loading.', 'Catches problems before cargo is on board.'],
          ['Alarm codes', 'Numbered codes the controller shows. Thermo King groups them as log, check, prevent and shutdown alarms.', 'The code and its type tell you how urgent it is.'],
          ['Hourmeters', 'Engine and unit run hours.', 'Reefer PMs are usually scheduled by hours, not miles.']
        ] } }
      ],
      features: [
        "Thermo King trailer units in North America include the **Precedent** family (for example S-600, S-700, C-600 and S-750i). In Europe there is the **Advancer** range. You don't need to memorize models. You do need to know what every unit has in common:",
        { ig: 'versus', icon: 'grid', title: 'What a trailer TRU system includes', items: [
          { t: 'Refrigeration system', sub: 'Compressor, condenser coil, evaporator coil and refrigerant, which move heat out of the box.' },
          { t: 'Power source', sub: 'A diesel engine on diesel units. Hybrid-electric units can also run on shore power.' },
          { t: 'Controller (SR-4)', sub: 'Changes setpoint and mode, shows sensor and hourmeter readings, starts defrost, and shows and clears alarms.' },
          { t: 'Sensors', sub: 'Return air, discharge air and coil temperature sensors referenced by the SR-4.' },
          { t: 'Pretrip & diagnostics', sub: 'Pretrip and running diagnostics in the SR-4 system.' },
          { t: 'Telematics (TracKing)', sub: 'Thermo King says new Precedent units come connected from the factory with a TracKing subscription for remote monitoring.' }
        ] }
      ],
      how: [
        "Every TRU uses the same basic physics as a household refrigerator: refrigerant **absorbs heat inside** the box and **releases it outside**.",
        { ig: 'process', icon: 'thermo', title: 'The refrigeration workflow', items: [
          { icon: 'zap', t: 'Refrigeration unit', d: 'Engine or electric power' },
          { icon: 'rotate', t: 'Cooling system', d: 'Refrigerant cycle' },
          { icon: 'thermo', t: 'Cold air', d: 'Discharge air' },
          { icon: 'layers', t: 'Cargo area', d: 'Air flows around the load' },
          { icon: 'gauge', t: 'Temperature monitoring', d: 'Return / discharge sensors' },
          { icon: 'target', t: 'Temperature control', d: 'Controller vs setpoint' }
        ] },
        { ig: 'anatomy', icon: 'rotate', title: 'The refrigeration cycle (simplified)', art: 'refcycle', w: 560, pins: [
          { x: 75, y: 79, t: 'Compressor', d: 'Squeezes low-pressure refrigerant gas into hot, high-pressure gas.' },
          { x: 75, y: 21, t: 'Condenser coil (outside)', d: 'Fans blow outside air across it. The refrigerant gives off heat and condenses to a liquid.' },
          { x: 25, y: 21, t: 'Expansion device', d: 'Drops the pressure so the liquid becomes very cold.' },
          { x: 25, y: 79, t: 'Evaporator coil (inside the box)', d: 'Cargo air is blown across it. The refrigerant absorbs that heat and boils back to gas, then returns to the compressor.' }
        ], note: 'Generic vapor-compression cycle — not a specific Thermo King model. Real units add valves, heat and defrost circuits and controls.' },
        "The **controller** compares the sensor readings to the setpoint and switches between cooling, null and heating to hold it. **Defrost** periodically warms the evaporator coil to melt ice. The SR-4 starts it on a timer (programmable intervals of 2, 4, 6, 8 or 12 hours) or *on demand* when the return air, discharge air and coil temperatures show icing. A driver can also start it manually."
      ],
      example: [
        "**Example fleet (fictional): reefer division hauling produce.** It's 02:15.",
        { dialog: [
          ['Driver', 'My reefer display is showing an alarm. The unit is still running.'],
          ['You', 'Thanks for calling. What\'s the alarm code number, and what are the setpoint, return air and discharge air temperatures on the display?'],
          ['Driver', 'Alarm 03. Setpoint 34, return 35, discharge 31.'],
          ['note', 'Thermo King\'s alarm chart lists code 03 as "Check Return Air Sensor", a check alarm. The chart\'s guidance is to monitor the temperature manually and report the alarm.'],
          ['You', 'The unit is holding temperature, but the return air sensor needs checking. Please watch the temperatures at every stop and send me a photo of the display. I\'m booking a Thermo King dealer near your delivery for after unload.'],
          ['note', 'You tell dispatch, open a case on the trailer\'s reefer unit (not the tractor), and note the times and readings.']
        ] },
        { callout: { kind: 'safety', text: 'If temperatures move out of range, or a shutdown alarm stops the unit, it becomes a **cargo emergency**. Escalate to dispatch right away so the customer can be told and decisions made about the load, such as a nearby dealer, a trailer swap or a transload, under company procedure.' } }
      ],
      role: [
        { tabs: [
          { label: 'Before the trip', body: [ { ul: [
            'Unit PM is current, scheduled by **engine hours** from the hourmeter',
            'Unit passed its pretrip test; any alarms were cleared by fixing the cause, not just reset',
            'Unit fuel level is sufficient; reefer fuel is separate from tractor fuel on most trailers',
            'Door seals and the trailer box are in good condition'
          ] } ] },
          { label: 'When an alarm comes in', body: [ { ul: [
            'Get the **alarm code**, setpoint, return and discharge air temperatures, unit fuel and the trailer number',
            'Look the code up in Thermo King\'s alarm code chart: is it a log, check, prevent or shutdown alarm?',
            'Never tell the driver to change the setpoint or mode against the shipper\'s instructions',
            'Book a **refrigeration-qualified** vendor such as a Thermo King dealer, not just any truck shop',
            'Tell dispatch whenever the cargo could be at risk'
          ] } ] },
          { label: 'After the repair', body: [ { ul: [
            'Record the work on the **reefer unit or trailer**: hours, alarm, cause, correction, parts',
            'Keep temperature records or download data when the customer or a claim may need it',
            'Watch for repeat alarms on the same unit; that points to a root cause, not bad luck'
          ] } ] }
        ] }
      ],
      workflow: [
        { timeline: [
          { title: 'Pretrip', text: 'Before loading, the unit runs its pretrip self-test and the box is pre-cooled per instructions.', owner: 'Driver / yard' },
          { title: 'Set and verify', text: 'Setpoint and mode (CYCLE-SENTRY or Continuous) are set to match the load paperwork.', owner: 'Driver' },
          { title: 'Monitor', text: 'The controller holds the setpoint. Drivers check the display, and telematics such as TracKing can report remotely.', owner: 'Driver / office' },
          { title: 'Alarm', text: 'Collect the code, readings and fuel. Look up the alarm type and decide urgency.', owner: 'Coordinator' },
          { title: 'Service', text: 'Book a refrigeration-qualified technician. Plan around the cargo with dispatch.', owner: 'Coordinator + dispatch' },
          { title: 'Repair and verify', text: 'The technician repairs the unit. Confirm it holds the setpoint and the alarm doesn\'t return.', owner: 'Technician' },
          { title: 'Document', text: 'Record on the unit: hours, alarm, cause, fix, cost. Reset the PM if service was done.', owner: 'Coordinator' }
        ] }
      ],
      visual: [
        { h: 'Know the parts' },
        { ig: 'anatomy', icon: 'search', title: 'Parts of a trailer refrigeration unit (simplified side view)', art: 'tru', w: 620, pins: [
          { x: 80, y: 20, t: 'Condenser coil & fan', d: 'Outside part of the unit. Releases heat taken from the box. Dirt and debris on the coil reduce cooling.' },
          { x: 74.5, y: 48.4, t: 'Diesel engine', d: 'Powers the unit on diesel models. Has its own oil, filters and coolant, and is maintained by engine hours.' },
          { x: 87, y: 49.2, t: 'Compressor', d: 'Pumps refrigerant around the circuit.' },
          { x: 80.5, y: 36.5, t: 'Belts', d: 'Engine-driven belts turn components such as fans and the alternator. Checked for wear and tension at PM.' },
          { x: 56.5, y: 17.5, t: 'Evaporator coil', d: 'Inside the box. Cargo air passes through it and gives up heat. Ice here triggers defrost.' },
          { x: 56.5, y: 33.3, t: 'Evaporator fan', d: 'Moves air through the evaporator coil and out over the load.' },
          { x: 49.5, y: 10.3, t: 'Discharge air sensor', d: 'Measures air leaving the unit.' },
          { x: 49.5, y: 38.9, t: 'Return air sensor', d: 'Measures air coming back from the cargo. Alarm 03 on Thermo King\'s chart is "Check Return Air Sensor".' },
          { x: 87.5, y: 62.7, t: 'Controller / display', d: 'Where the setpoint, mode, readings and alarms are shown, such as the SR-4 HMI on Precedent units. Its location varies by model.' },
          { x: 71.5, y: 62.7, t: 'Filters', d: 'Fuel, oil and air filters on diesel units. Thermo King cites dual-stage fuel filtration on its Precedent S-Series engine.' },
          { x: 37.5, y: 92, t: 'Unit fuel tank', d: 'Usually under the trailer and separate from the tractor\'s tanks.' }
        ], note: 'Simplified, generic layout for learning. It is not a specific Thermo King model, and component positions differ by unit.' },
        { ig: 'anatomy', icon: 'thermo', title: 'How air moves through a loaded reefer', art: 'reeferflow', w: 640, pins: [
          { x: 85, y: 22, t: 'Discharge (supply) air', d: 'Cold air leaves the unit near the ceiling and travels toward the rear doors.' },
          { x: 10, y: 50, t: 'Rear of the load', d: 'Air drops at the back and starts its return trip.' },
          { x: 50, y: 57, t: 'Return path', d: 'Air comes back toward the front along the floor and through the load, picking up heat.' },
          { x: 86, y: 47, t: 'Return air', d: 'Warmer air enters the unit and is measured by the return air sensor.' }
        ], note: 'Loading matters: pallets pushed tight against the front bulkhead or stacked to the ceiling can block this airflow and cause warm spots, even with a healthy unit.' }
      ],
      mistakes: [
        { compare: {
          no: { title: 'Common mistakes', items: [
            'Opening the case on the tractor when the problem is the reefer unit',
            'Scheduling reefer PM by trailer miles instead of unit engine hours',
            'Clearing an alarm without finding the cause',
            'Telling a driver to change the setpoint to "help" the unit',
            'Sending a refrigeration problem to a shop without refrigeration technicians',
            'Waiting to tell dispatch until the cargo is already out of temperature'
          ] },
          yes: { title: 'Do this instead', items: [
            'Track the unit as its own asset, linked to the trailer',
            'Use the hourmeter for unit PM',
            'Record the code and readings, then get it diagnosed',
            'Follow the shipper\'s setpoint and mode exactly',
            'Use a refrigeration-qualified vendor or dealer',
            'Escalate early when the cargo is at risk'
          ] }
        } },
        { callout: { kind: 'safety', text: 'Refrigerant circuits are under pressure and refrigerants are regulated. Only qualified, certified technicians should open the refrigerant system.' } }
      ],
      scenario: [
        { widget: 'sim:reefer' },
        { exercise: { type: 'extract', prompt: 'Read the driver\'s message and pull out what you need for the case.', sourceLabel: 'Driver text · 03:05', source: 'Trailer R-8841, reefer showing alarm 03. Setpoint 34F, return air 35, discharge 30. Unit fuel about half. Load is produce for Columbus, delivery 09:00.', fields: [
          { label: 'Trailer / unit', accept: ['R-8841', 'r8841'] },
          { label: 'Alarm code', accept: ['03', '3'] },
          { label: 'Setpoint (°F)', accept: ['34', '34f'] },
          { label: 'Return air (°F)', accept: ['35'] },
          { label: 'Discharge air (°F)', accept: ['30'] }
        ] } },
        { exercise: { type: 'choose', prompt: 'Same load, 05:30: the unit shuts down with a shutdown alarm. The return air is rising and delivery is 3.5 hours away. Best next step?', options: [
          { text: 'Tell the driver to keep driving; the box is insulated and will hold', correct: false, why: 'Insulation only slows warming. Produce at risk needs action now.' },
          { text: 'Tell dispatch right away, locate the nearest Thermo King dealer or mobile refrigeration tech on the route, and record times and temperatures', correct: true, why: 'The cargo is at risk. Escalate, get qualified help fast and document everything for the customer and any claim.' },
          { text: 'Have the driver lower the setpoint to 20°F so it cools faster once restarted', correct: false, why: 'Never change the setpoint against the shipper\'s instructions. It can freeze-damage the produce.' }
        ] } }
      ],
      takeaways: [
        { ul: [
          '**Thermo King makes transport refrigeration equipment**: TRUs, their controllers and their telematics. It is a brand of Trane Technologies.',
          'A TRU moves heat out of the box: compressor → condenser (outside) → expansion → evaporator (inside).',
          '**Setpoint** is the target. **Return air** is what comes back from the cargo. **Discharge air** is what the unit puts out.',
          'Defrost keeps the evaporator coil free of ice. Alarms are typed as log, check, prevent or shutdown.',
          'Coordinator essentials: hours-based PM, alarm code plus readings, qualified refrigeration vendors, early escalation when cargo is at risk.'
        ] }
      ]
    },
    quiz: [
      { t: 'mc', q: 'What does Thermo King primarily make?', o: ['Dispatch and load planning software', 'Transport refrigeration and temperature-control units', 'Truck and trailer tires for long haul', 'Fuel cards and payment systems for fleets'], a: 1, e: 'Thermo King is a transport temperature-control brand of Trane Technologies.' },
      { t: 'mc', q: 'Which reading shows the air coming back from the cargo area into the unit?', o: ['Discharge air', 'Return air', 'Setpoint', 'Hourmeter'], a: 1, e: 'Return air is the air returning from the load. Discharge (supply) air is what leaves the unit.' },
      { t: 'mc', q: 'Why does a reefer unit go into defrost?', o: ['To save fuel by shutting the unit off for a while', 'To melt ice from the evaporator coil so air and heat can move through it', 'To warm the driver\'s cab during cold nights', 'To recharge the unit\'s battery from the alternator'], a: 1, e: 'Ice on the evaporator coil blocks airflow and cooling. Defrost removes it.' },
      { t: 'wwyd', q: 'A driver reports a reefer alarm. Which information is most important to collect first?', o: ['The tractor\'s odometer and the date of its last PM', 'The alarm code plus setpoint, return and discharge air temperatures', 'The trailer\'s last annual inspection date and VIN', 'The driver\'s delivery appointment and route'], a: 1, e: 'The alarm code and temperatures tell you how urgent it is and whether the cargo is at risk.' },
      { t: 'mc', q: 'Reefer unit PM is usually scheduled by…', o: ['Trailer miles', 'Unit engine hours', 'Driver age', 'Fuel price'], a: 1, e: 'The unit runs whether the trailer moves or not. Its hourmeter drives PM.' }
    ],
    sources: [
      ['Thermo King — Single-temperature trailer units (North America)', 'https://www.thermoking.com/na/en/road/trailers/single-temperature-controlled-units.html'],
      ['Thermo King — Smart Reefer 4 (SR-4) operator literature', 'https://www.emea-user-manuals.thermoking.com/etech-emea-public/thermoking-emea/Minneapolis%20-%20Trailer/Literature/Operation%20or%20Owners/0005641713.xml/$/0005340771'],
      ['Thermo King — Alarm codes', 'https://thermoking.com/na/en/alarm-codes.html'],
      ['Thermo King — Frederick Jones inducted into Truck Hall of Fame', 'https://www.thermoking.com/na/en/newsroom/frederick-jones-inducted-into-the-aths-hall-of-fame.html'],
      ['Thermo King Europe — About', 'https://europe.thermoking.com/about'],
      ['Thermo King Europe — Advancer', 'https://europe.thermoking.com/advancer']
    ]
  }
];
const SOFTWARE_MAP = new Map(SOFTWARE.map((s) => [s.id, s]));

