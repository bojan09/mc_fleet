/* ===========================================================================
   SOFTWARE & PLATFORMS (continued) — more tools a Maintenance Coordinator
   meets. Same rules as 03l-software.js: facts limited to what each company
   (or an official partner) publishes, cited in `sources`; fleets, units and
   screens in examples are fictional; mockups are labeled as simplified
   educational examples, never as the vendor's interface.
   `group` sorts the hub into sections.
   =========================================================================== */
const SW_GROUPS = ['Maintenance & records', 'Telematics & diagnostics', 'Refrigeration', 'Roadside, parts & service', 'Dispatch, TMS & payments'];
Object.assign(SOFTWARE.find((s) => s.id === 'fleetio'), { group: 'Maintenance & records' });
Object.assign(SOFTWARE.find((s) => s.id === 'samsara'), { group: 'Telematics & diagnostics' });
Object.assign(SOFTWARE.find((s) => s.id === 'thermo-king'), { group: 'Refrigeration' });
Object.assign(SOFTWARE.find((s) => s.id === 'pro-transport'), { group: 'Dispatch, TMS & payments' });
const swMockLabel = (name) => `Educational mockup — simplified. Not ${name}'s actual screen.`;

SOFTWARE.push(
  /* ------------------------------------------------------------------ MOTIVE */
  {
    id: 'motive', name: 'Motive', maker: 'Motive Technologies', kind: 'Telematics, ELD & safety', icon: 'activity', tone: 'success', group: 'Telematics & diagnostics',
    url: 'https://gomotive.com', checked: 'November 2026',
    tagline: 'A telematics, ELD and AI dash cam platform (formerly KeepTruckin) that reports engine fault codes, inspections and location to a fleet dashboard.',
    card: {
      what: 'A fleet platform: the Vehicle Gateway and AI dash cams in the truck, a web dashboard for the office and the Motive Driver App.',
      use: 'ELD / Hours of Service, GPS tracking, engine fault codes, DVIRs, maintenance scheduling and AI dash cam safety.',
      who: 'Safety and compliance, dispatch, fleet managers, maintenance coordinators (faults and DVIRs) and drivers.'
    },
    sections: {
      what: [
        "Motive (called **KeepTruckin** until 2022) is a [[Telematics|telematics]] and [[ELD]] company. Like Samsara, it pairs hardware in the truck with a cloud dashboard. Many fleets run one of the two, so a coordinator who knows one can learn the other quickly.",
        { tiles: [
          { icon: 'zap', title: 'Vehicle Gateway', text: 'Connects to the truck. Motive says it reads diagnostic trouble codes from the vehicle\'s computer and pushes them to the dashboard in real time.' },
          { icon: 'image', title: 'AI Dashcam', text: 'Road-facing and dual-facing cameras for safety events. Motive\'s AI Dashcam Plus combines the camera and the gateway in one device.' },
          { icon: 'message', title: 'Driver App', text: 'Hours of Service logs and inspections (DVIRs).' },
          { icon: 'grid', title: 'Fleet dashboard', text: 'Where the office sees location, faults, inspections, safety events and maintenance.' }
        ] }
      ],
      why: [
        "Motive turns each truck into a data source the office can see. For maintenance, the value is speed: a fault code or a DVIR defect reaches you before the driver calls.",
        { ul: ['**Compliance**: electronic Hours of Service logs and digital DVIRs.', '**Maintenance**: fault codes, plus service scheduling by miles or engine hours.', '**Safety**: AI dash cam events for coaching.', '**Visibility**: where every unit is.'] }
      ],
      who: [
        { table: { head: ['Role', 'Typical use of Motive'], rows: [
          ['Maintenance coordinator', 'Fault codes, DVIR defects, meters, maintenance schedules, location for roadside help.'],
          ['Safety / compliance', 'HOS, dash cam events, driver coaching.'],
          ['Dispatch', 'Location, ETAs, driver hours available.'],
          ['Driver', 'Logs hours and completes inspections in the Driver App.']
        ] } }
      ],
      concepts: [
        { table: { head: ['Concept', 'Meaning', 'Example'], rows: [
          ['Fault code (DTC)', 'A code the truck\'s computer stores when it detects a problem. See [[DTC]].', 'T-208 reports an aftertreatment fault.'],
          ['Vehicle Gateway', 'The in-cab device that reads the truck\'s data and sends it to Motive.', 'The gateway on T-208 reports location and faults.'],
          ['DVIR', 'The driver\'s inspection report, done in the app. See [[DVIR]].', 'Post-trip DVIR: "left marker lamp out".'],
          ['Maintenance schedule', 'Service due by miles or engine hours.', 'PM-A due every 25,000 mi.'],
          ['Safety event', 'A harsh event or risky behavior caught by the dash cam.', 'Harsh braking at 14:12.']
        ] } },
        { callout: { kind: 'info', title: 'Two details from Motive\'s help center', text: 'Fault codes appear on the fleet dashboard, not in the Driver App. And fleet managers can\'t clear fault codes from the dashboard: a technician clears them after the repair.' } }
      ],
      features: [
        { ig: 'versus', icon: 'grid', title: 'Motive feature areas relevant to maintenance (as described by Motive)', items: [
          { t: 'Fault codes', sub: 'Engine and vehicle trouble codes, sent to the dashboard as they happen.' },
          { t: 'Maintenance scheduling', sub: 'Service due by engine hours or mileage.' },
          { t: 'DVIRs', sub: 'Driver inspections and reported defects.' },
          { t: 'ELD / HOS', sub: 'Electronic logs that show the hours a driver has left.' },
          { t: 'GPS tracking', sub: 'Live location of vehicles.' },
          { t: 'AI dash cams', sub: 'Safety events and coaching.' }
        ] }
      ],
      how: [
        { ig: 'process', icon: 'route', title: 'From the truck to your screen', items: [
          { icon: 'truck', t: 'Truck computer', d: 'Detects a fault' }, { icon: 'zap', t: 'Vehicle Gateway', d: 'Reads the code' },
          { icon: 'activity', t: 'Motive cloud', d: 'Over cellular' }, { icon: 'alert', t: 'Dashboard / alert', d: 'Fleet sees it' }, { icon: 'target', t: 'Coordinator', d: 'Triages it' }
        ] },
        { callout: { kind: 'warning', title: 'A code is a clue, not a diagnosis', text: 'Motive reports what the truck\'s computer detected. Call the driver for symptoms and lamp color, then get a qualified technician to diagnose.' } }
      ],
      example: [
        "**Example fleet (fictional), Wednesday 05:50.** A Motive fault alert shows T-208 with an active aftertreatment code. The driver's post-trip DVIR from last night also lists \"DEF warning came on twice\".",
        "You call the driver before the 07:00 departure: amber lamp only, no power loss. You book a diagnosis at a shop on the route for 11:00 and tell dispatch the load leaves on time with a planned stop."
      ],
      role: [
        { ig: 'table', icon: 'target', title: 'What Motive shows vs what you act on', head: ['Motive shows…', 'Owned by', 'Do you act?'], rows: [
          ['Active engine fault', 'Maintenance', '**Yes.** Triage with the driver.'],
          ['DVIR defect', 'Maintenance', '**Yes.** Repair or certify before dispatch.'],
          ['Hours left on the driver\'s clock', 'Dispatch / safety', '**Use it** to plan the repair time.'],
          ['Dash cam safety event', 'Safety', '**Usually no**, unless a mechanical cause is reported.'],
          ['Odometer / engine hours', 'Maintenance records', '**Yes.** Meters drive PM due dates.']
        ] }
      ],
      workflow: [
        { timeline: [
          { title: 'Alert or DVIR arrives', text: 'Note unit, time, code or defect, location.', owner: 'Motive → coordinator' },
          { title: 'Call the driver', text: 'Lamps, symptoms, power, whether it is safe to move.', owner: 'Coordinator' },
          { title: 'Decide urgency', text: 'Stop now, repair today, or schedule. Check hours left and the load.', owner: 'Coordinator' },
          { title: 'Arrange and record', text: 'Book service, open the work order in your maintenance system, tell dispatch.', owner: 'Coordinator' },
          { title: 'Close the loop', text: 'After repair, confirm the code is no longer active and the DVIR is certified.', owner: 'Coordinator' }
        ] }
      ],
      visual: [
        { mock: { label: swMockLabel('Motive'), title: 'Fault code · T-208', status: 'Active', tone: 'warning', rows: [
          ['Vehicle', 'T-208 · 2021 sleeper'], ['First seen', 'Wed 05:41'], ['Code', 'Aftertreatment fault — see SPN/FMI in details'], ['Location', 'Terminal, Dallas TX'], ['Related DVIR', 'Post-trip: "DEF warning came on twice"']
        ] } }
      ],
      mistakes: [
        { compare: {
          no: { title: 'Common mistakes', items: ['Waiting for the driver to call about a code you already see', 'Expecting the driver to see fault codes in the app', 'Treating the code as the repair order', 'Closing the case while the code is still active'] },
          yes: { title: 'Do this instead', items: ['Call the driver as soon as an active code appears', 'Read the code details yourself on the dashboard', 'Use the code to brief the shop; let them diagnose', 'Confirm the code is inactive after the repair'] }
        } }
      ],
      scenario: [
        { exercise: { type: 'choose', prompt: 'Motive shows an active fault on T-208 and a red STOP lamp. The driver is on the highway, 40 miles from the terminal. What do you do?', options: [
          { text: 'Tell the driver to make it to the terminal shop.', correct: false, why: 'A red stop lamp means stop safely now, not in 40 miles.' },
          { text: 'Have the driver stop safely, use the location to send roadside service, and tell dispatch.', correct: true, why: 'Safety first, then bring help to the truck.' },
          { text: 'Clear the code from the dashboard and watch whether it returns.', correct: false, why: 'Codes are not cleared from the dashboard, and clearing hides the problem.' }
        ] } }
      ],
      takeaways: [
        { ul: ['Motive (formerly KeepTruckin) is a telematics, ELD and dash cam platform.', 'Your signals: **fault codes, DVIR defects, meters**, and location when a truck needs help.', 'Fault codes show on the dashboard, not in the Driver App.', 'A code starts a conversation and a diagnosis; it is not a repair order.'] }
      ]
    },
    quiz: [
      { t: 'mc', q: 'What was Motive called before 2022?', o: ['KeepTruckin', 'TruckTrack', 'FleetNet', 'Speedco'], a: 0, e: 'Motive rebranded from KeepTruckin in 2022.' },
      { t: 'tf', q: 'According to Motive\'s help center, drivers see engine fault codes in the Motive Driver App.', a: false, e: 'Fault codes appear on the fleet dashboard, not in the Driver App. Call the driver for symptoms.' },
      { t: 'mc', q: 'Which Motive signal is most clearly a maintenance coordinator\'s job?', o: ['A dash cam event for tailgating', 'An active engine fault code', 'A late delivery', 'An idling report'], a: 1, e: 'Fault codes are maintenance triage. Driving behavior belongs to safety; deliveries to dispatch.' }
    ],
    sources: [
      ['Motive Help Center — Fault codes', 'https://helpcenter.gomotive.com/hc/en-us/articles/6161571788061'],
      ['Motive — What are DTCs (diagnostic trouble codes)?', 'https://gomotive.com/blog/what-does-dtc-mean/'],
      ['Motive — AI Dashcam Plus spec sheet', 'https://gomotive.com/wp-content/uploads/2026/08/Spec-Sheet_Dual-Facing-AI-Dashcam-Plus.pdf']
    ]
  },

  /* ------------------------------------------------------------------ GEOTAB */
  {
    id: 'geotab', name: 'Geotab', maker: 'Geotab', kind: 'Telematics platform', icon: 'activity', tone: 'success', group: 'Telematics & diagnostics',
    url: 'https://www.geotab.com', checked: 'November 2026',
    tagline: 'A telematics platform: the GO device in the vehicle and the MyGeotab web software, extended by add-ons from the Geotab Marketplace.',
    card: {
      what: 'Telematics hardware (the GO device) plus MyGeotab, a web platform for location, engine data, faults and reports.',
      use: 'Tracking, engine fault data, maintenance reminders and reports, with partner add-ons for things like engine-maker diagnostics and roadside help.',
      who: 'Fleet managers, maintenance coordinators, safety staff and data analysts. Usually bought through a Geotab reseller.'
    },
    sections: {
      what: [
        "Geotab is a [[Telematics|telematics]] company. A **GO device** plugs into the vehicle's diagnostic port and sends data to **MyGeotab**, the web software where the fleet works. Geotab sells mostly through **resellers** (partners), so your company's account may carry a partner's name.",
        { callout: { kind: 'info', title: 'An open platform', text: 'The Geotab Marketplace lists add-ons from other companies that use Geotab data, such as engine-maker diagnostics (Cummins Connected Diagnostics) and roadside networks (FleetNet America).' } }
      ],
      why: [
        "Fleets choose Geotab for its data and its partner add-ons. For maintenance, MyGeotab gathers fault codes, meters and reminders for every unit in one place."
      ],
      who: [
        { table: { head: ['Role', 'Typical use of MyGeotab'], rows: [
          ['Maintenance coordinator', 'Faults page, maintenance reminders, odometer and engine hours.'],
          ['Fleet manager', 'Utilization, fuel and cost reports.'],
          ['Safety', 'Driving behavior rules and reports.'],
          ['IT / analysts', 'Data exports and integrations through the MyGeotab API.']
        ] } }
      ],
      concepts: [
        { table: { head: ['Term', 'Meaning', 'Example'], rows: [
          ['GO device', 'The plug-in telematics unit.', 'GO device on T-311 reports location and faults.'],
          ['MyGeotab', 'The web platform where the fleet works.', 'Maintenance > Faults shows open fault codes.'],
          ['Fault source', 'Geotab notes fault data comes from the GO device itself or from the vehicle\'s engine control unit (ECU).', 'An ECU engine code vs a GO device "unplugged" fault.'],
          ['Fault status "None"', 'Geotab\'s term for a fault that is no longer active.', 'Yesterday\'s code now shows None.'],
          ['Marketplace', 'Third-party add-ons that use Geotab data.', 'An engine-maker diagnostics add-on.']
        ] } }
      ],
      features: [
        { ig: 'versus', icon: 'grid', title: 'MyGeotab areas a coordinator uses', items: [
          { t: 'Faults', sub: 'Maintenance > Faults lists fault codes by vehicle and status.' },
          { t: 'Maintenance reminders', sub: 'Service due by distance, engine hours or time.' },
          { t: 'Engine data', sub: 'Odometer, engine hours and measurements.' },
          { t: 'Map and trips', sub: 'Where a unit is and where it has been.' },
          { t: 'Rules and notifications', sub: 'Emails or alerts when a condition is met.' },
          { t: 'Marketplace add-ons', sub: 'Partner tools built on Geotab data.' }
        ] }
      ],
      how: [
        { ig: 'process', icon: 'route', title: 'How Geotab data reaches you', items: [
          { icon: 'truck', t: 'Vehicle', d: 'ECU and sensors' }, { icon: 'zap', t: 'GO device', d: 'Reads and records' },
          { icon: 'activity', t: 'MyGeotab', d: 'Stores and shows' }, { icon: 'grid', t: 'Add-ons', d: 'Partners use the data' }, { icon: 'target', t: 'Coordinator', d: 'Acts' }
        ] },
        { callout: { kind: 'warning', title: 'Guidance, not a diagnosis', text: 'Geotab itself says its proactive maintenance reports and fault notifications give guidance only. A qualified technician confirms the cause.' } }
      ],
      example: [
        "**Example fleet (fictional), Monday 08:10.** You open Maintenance > Faults in MyGeotab. T-311 shows the same coolant temperature code three times this week, each now at status None.",
        "No code is active, but three in one week is a pattern. You book a cooling-system inspection with T-311's next PM on Wednesday and note the history on the work order."
      ],
      role: [
        { ul: ['Check the faults list at the start of each shift; active codes first.', 'Look for repeats: a code that keeps clearing and returning is a real problem.', 'Keep meters accurate so maintenance reminders fire on time.', 'Know which Marketplace add-ons your fleet uses, such as engine-maker alerts.'] }
      ],
      workflow: [
        { timeline: [
          { title: 'Review faults', text: 'Sort by active status and severity.', owner: 'Coordinator' },
          { title: 'Contact the driver', text: 'For active codes: symptoms and lamps.', owner: 'Coordinator' },
          { title: 'Plan the repair', text: 'Urgent now, or with the next PM.', owner: 'Coordinator' },
          { title: 'Record it', text: 'Work order in your maintenance system.', owner: 'Coordinator' },
          { title: 'Verify', text: 'Fault status returns to None and stays there.', owner: 'Coordinator' }
        ] }
      ],
      visual: [
        { mock: { label: swMockLabel('Geotab'), title: 'Faults · T-311 · last 7 days', status: '3 occurrences', tone: 'warning', rows: [
          ['Fault', 'Engine coolant temperature — see code details'], ['Source', 'Engine (ECU)'], ['Status', 'None (not active)'], ['Occurrences', 'Mon 14:02 · Wed 16:40 · Fri 15:15'], ['Next PM', 'Wed (PM-A)']
        ] } }
      ],
      mistakes: [
        { compare: {
          no: { title: 'Common mistakes', items: ['Ignoring faults because their status is None', 'Treating a GO device fault (like "unplugged") as an engine problem', 'Relying on reminders while meters are wrong'] },
          yes: { title: 'Do this instead', items: ['Review history for repeats', 'Check the fault source before calling a shop', 'Fix meter problems first'] }
        } }
      ],
      scenario: [
        { exercise: { type: 'classify', prompt: 'How do you handle each MyGeotab fault entry?', categories: ['Act now', 'Plan with next PM', 'Not a vehicle repair'], items: [
          { text: 'Active engine oil pressure code, driver reports a red lamp', answer: 'Act now', why: 'Active, severe, with a symptom. Stop safely and send service.' },
          { text: 'Coolant code three times this week, now not active', answer: 'Plan with next PM', why: 'A repeat pattern worth a planned inspection.' },
          { text: 'GO device fault: device unplugged', answer: 'Not a vehicle repair', why: 'A telematics device issue for whoever manages the devices, not an engine repair.' }
        ] } }
      ],
      takeaways: [
        { ul: ['Geotab = GO device + MyGeotab, usually sold through a reseller.', 'Faults come from the GO device or the engine computer; check the source.', 'Status None means not active now, not "never mattered".', 'The Marketplace adds partner tools like engine-maker diagnostics.'] }
      ]
    },
    quiz: [
      { t: 'mc', q: 'Where does a coordinator find fault codes in MyGeotab?', o: ['Maintenance > Faults', 'The fuel card portal', 'The driver\'s pay stub', 'The trailer\'s VIN plate'], a: 0, e: 'Geotab documents fault codes under Maintenance > Faults.' },
      { t: 'tf', q: 'A fault with status "None" in MyGeotab is no longer active.', a: true, e: 'None means not active now. Still check the history for repeats.' },
      { t: 'scenario', q: 'MyGeotab shows the same code three times this week, all now inactive. What do you do?', o: ['Nothing: inactive codes mean the problem fixed itself', 'Plan an inspection, for example with the next PM, and note the history', 'Replace the part the code names before the next load', 'Delete the history so the faults page stays clean'], a: 1, e: 'Repeats point to a real problem. Plan a diagnosis before it becomes a road call.' }
    ],
    sources: [
      ['Geotab Support — Faults', 'https://support.geotab.com/help/mygeotab/maintenance-and-diagnostics/diagnostics/faults'],
      ['Geotab Support — Faults user guide', 'https://support.geotab.com/mygeotab/doc/faults-beta-user-guide'],
      ['Geotab — Cummins Connected Diagnostics in MyGeotab', 'https://www.geotab.com/press-release/cummins-connected-diagnostic-mygeotab'],
      ['Geotab Marketplace — FleetNet America Roadside', 'https://marketplace.geotab.com/solutions/fleetnet-america-roadside/']
    ]
  },

  /* ------------------------------------------------------------------ DECISIV */
  {
    id: 'decisiv', name: 'Decisiv', maker: 'Decisiv', kind: 'Service relationship management', icon: 'message', tone: 'info', group: 'Maintenance & records',
    url: 'https://www.decisiv.com', checked: 'November 2026',
    tagline: 'A cloud platform where fleets, dealers and service providers handle a repair together: service request, estimate, approval and status in one shared case.',
    card: {
      what: 'A cloud Service Relationship Management (SRM) platform connecting fleets with dealers and service providers.',
      use: 'Sending service requests, tracking repair status, reviewing estimates and communicating with the shop on one shared record.',
      who: 'Maintenance coordinators and fleet managers on the fleet side; service advisors and managers at dealers and shops.'
    },
    sections: {
      what: [
        "Decisiv calls its platform **Service Relationship Management (SRM)**. Instead of phone calls and emails between you and a dealer, the repair lives in one shared online record that both sides update. Decisiv describes a network of thousands of service locations and fleets using it.",
        { callout: { kind: 'info', title: 'Where it fits', text: 'Decisiv sits between your fleet and the shop. It is not your maintenance system ([[CMMS]]) and not telematics, but it can connect to both, and many dealers link it to their own dealer management systems.' } }
      ],
      why: [
        { tiles: [
          { icon: 'clock', title: 'Less waiting', text: 'Status and estimates appear in the shared record instead of in a missed voicemail.' },
          { icon: 'clipboard', title: 'One record', text: 'Complaint, estimate, approvals and notes stay together.' },
          { icon: 'users', title: 'Both sides see it', text: 'Fleet and shop look at the same case.' },
          { icon: 'dollar', title: 'Cleaner approvals', text: 'Estimates are reviewed and approved on the record.' }
        ] }
      ],
      who: [
        { table: { head: ['Side', 'Who', 'What they do'], rows: [
          ['Fleet', 'Maintenance coordinator', 'Sends the service request, reviews estimates, approves within limits, tracks status.'],
          ['Fleet', 'Fleet manager', 'Approves above the coordinator\'s limit; reviews history and costs.'],
          ['Shop / dealer', 'Service advisor', 'Accepts the request, posts diagnosis, estimate and updates.']
        ] } }
      ],
      concepts: [
        { table: { head: ['Term', 'Meaning'], rows: [
          ['SRM', 'Service Relationship Management: managing service events between fleets and providers.'],
          ['Service event / case', 'One repair visit for one unit, from request to release.'],
          ['Service request', 'What the fleet sends: unit, complaint, location, authorization.'],
          ['Estimate', 'The shop\'s proposed repair and cost, reviewed by the fleet. See [[Estimate]].'],
          ['Status', 'Where the repair is: waiting, diagnosing, waiting on approval or parts, in repair, ready.']
        ] } }
      ],
      features: [
        { ig: 'versus', icon: 'grid', title: 'What Decisiv describes for fleets', items: [
          { t: 'Service requests', sub: 'Send a repair request to a provider in the network.' },
          { t: 'Scheduling', sub: 'Plan work with outside service providers.' },
          { t: 'Estimates', sub: 'Estimates shared on the case for review.' },
          { t: 'Communication', sub: 'Messages and updates on the record.' },
          { t: 'Service calendars and inspections', sub: 'Planned work and standard repair operations.' },
          { t: 'Integrations', sub: 'Links to dealer systems, fleet maintenance software and partners.' }
        ] }
      ],
      how: [
        { ig: 'process', icon: 'route', title: 'One repair in Decisiv', items: [
          { icon: 'file', t: 'Request', d: 'Fleet sends unit + complaint' }, { icon: 'wrench', t: 'Diagnose', d: 'Shop posts findings' },
          { icon: 'dollar', t: 'Estimate', d: 'Shop posts the cost' }, { icon: 'check-circle', t: 'Approve', d: 'Fleet decides' }, { icon: 'truck', t: 'Repair + release', d: 'Status updates' }
        ] }
      ],
      example: [
        "**Example fleet (fictional).** T-114 is at a dealer for a coolant leak. At 10:20 the case shows diagnosis complete: water pump leaking. The estimate is $1,540 with an ETR of 16:00. Your approval limit is $2,000.",
        "You check the unit's history: no earlier water pump. You approve on the case, add the PO number, and tell dispatch the 16:00 ETR. You did it without a single phone call, and the record shows who approved what and when."
      ],
      role: [
        { ul: ['Write a complete service request: unit, VIN, meter, complaint in the driver\'s words, location, your authorization limit.', 'Watch cases waiting on you. An estimate sitting unapproved is downtime you caused.', 'Approve within your limit; route bigger estimates to your manager on the record.', 'Copy key facts into your own maintenance system if the two aren\'t connected.'] }
      ],
      workflow: [
        { timeline: [
          { title: 'Open the request', text: 'Unit, complaint, location, authorization.', owner: 'Coordinator' },
          { title: 'Watch for diagnosis', text: 'Check the case at the times you agreed.', owner: 'Coordinator' },
          { title: 'Review the estimate', text: 'Compare with history, warranty and your limit.', owner: 'Coordinator' },
          { title: 'Approve or escalate', text: 'On the record, with a PO.', owner: 'Coordinator / manager' },
          { title: 'Release and close', text: 'Confirm the repair, final invoice and ETR met.', owner: 'Coordinator' }
        ] }
      ],
      visual: [
        { mock: { label: swMockLabel('Decisiv'), title: 'Service event · T-114', status: 'Waiting on fleet approval', tone: 'warning', rows: [
          ['Provider', 'Dealer (fictional), Joplin MO'], ['Complaint', 'Coolant leak, front of engine'], ['Diagnosis', 'Water pump seal leaking'], ['Estimate', '$1,540 · ETR 16:00'], ['Waiting on', 'Fleet approval since 10:20']
        ] } }
      ],
      mistakes: [
        { compare: {
          no: { title: 'Common mistakes', items: ['Sending a request with just "check engine"', 'Letting estimates sit unreviewed', 'Approving by phone and never recording it'] },
          yes: { title: 'Do this instead', items: ['Give the full complaint and meter', 'Check open cases on a schedule', 'Approve on the record with a PO'] }
        } }
      ],
      scenario: [
        { exercise: { type: 'choose', prompt: 'A Decisiv case for T-101 shows an estimate of $4,820 waiting since 09:00. Your limit is $2,500. It is 11:30. What do you do?', options: [
          { text: 'Approve it to save time.', correct: false, why: 'It is over your limit. That is not your approval to give.' },
          { text: 'Route it to the fleet manager on the case now, with the history and your recommendation, and tell the shop when to expect an answer.', correct: true, why: 'Escalate within authority, quickly, and keep the shop informed.' },
          { text: 'Wait for the shop to call.', correct: false, why: 'The case has been waiting on you for 2.5 hours. That is downtime.' }
        ] } }
      ],
      takeaways: [
        { ul: ['Decisiv is a shared repair record between fleet and shop (SRM).', 'A complete service request saves hours.', 'Cases waiting on you are your downtime.', 'Approve on the record, within your limit.'] }
      ]
    },
    quiz: [
      { t: 'mc', q: 'What does SRM stand for in Decisiv\'s description?', o: ['Service Relationship Management', 'Shop Repair Manual', 'Safety Risk Monitor', 'Standard Repair Mileage'], a: 0, e: 'Decisiv describes its platform as Service Relationship Management.' },
      { t: 'mc', q: 'Who mainly uses Decisiv together?', o: ['Fleets and their service providers', 'Drivers and the brokers who book their loads', 'Shippers and receivers tracking deliveries', 'Fuel stations billing fleet accounts'], a: 0, e: 'It connects fleets with dealers and service providers around repairs.' },
      { t: 'tf', q: 'An estimate waiting for fleet approval adds to downtime.', a: true, e: 'Every hour an estimate waits is an hour the truck is not being repaired.' }
    ],
    sources: [
      ['Decisiv', 'https://www.decisiv.com'],
      ['TT News — Driving asset performance with SRM', 'https://ttnews.com/articles/driving-asset-performance-srm'],
      ['Truck Parts & Service — Decisiv partnerships (Truckmore, Wabash, Diesel Laptops)', 'https://www.truckpartsandservice.com/technology/business-operations/article/15739430/decisiv-announces-three-data-partnership-collaborations'],
      ['Karmak — Decisiv integration', 'https://www.karmak.com/integrations/decisiv']
    ]
  },

  /* -------------------------------------------------------------- TRIMBLE TMT */
  {
    id: 'trimble-tmt', name: 'TMT Fleet Maintenance', brand: 'Trimble TMT', maker: 'Trimble', kind: 'Fleet maintenance software', icon: 'wrench', tone: 'info', group: 'Maintenance & records',
    url: 'https://transportation.trimble.com', checked: 'November 2026',
    tagline: 'Maintenance management software for larger fleets (formerly TMW Systems): repair orders, PM, parts, road calls, tires, warranty and VMRS-coded reporting.',
    card: {
      what: 'A web-based fleet maintenance management system from Trimble, formerly sold by TMW Systems.',
      use: 'Repair orders, preventive maintenance, parts inventory, road calls, tire tracking, warranty recovery and cost reporting by VMRS code.',
      who: 'Maintenance coordinators, shop managers, technicians, parts staff and fleet managers in mid-size and large fleets.'
    },
    sections: {
      what: [
        "TMT Fleet Maintenance is a [[CMMS]] built for trucking fleets that run their own shops and also send work outside. Trimble describes it as covering repair orders, PM, parts and accounting, with equipment history in one place. A shop-focused version, **TMT Service Center**, serves repair businesses.",
        { callout: { kind: 'info', title: 'VMRS: the shared language', text: 'TMT reports costs by VMRS codes (Vehicle Maintenance Reporting Standards, from ATA\'s Technology & Maintenance Council). VMRS gives every system and part a standard code, so "brakes" means the same thing on every repair order and every report.' } }
      ],
      why: [
        "In a large fleet, thousands of repair orders a year only become useful if they are coded the same way. TMT turns them into cost per unit, repeat repairs and warranty claims you can actually find."
      ],
      who: [
        { table: { head: ['Role', 'Typical use'], rows: [
          ['Maintenance coordinator', 'Opens and tracks repair orders, road calls and outside repairs; keeps history accurate.'],
          ['Shop manager / technicians', 'Work repair orders, record labor and parts.'],
          ['Parts staff', 'Inventory and reorder reports.'],
          ['Fleet manager', 'Cost by system, unit and vendor; warranty recovery.']
        ] } }
      ],
      concepts: [
        { table: { head: ['Term', 'Meaning'], rows: [
          ['Repair order (RO)', 'The record of work on a unit: complaint, cause, correction, labor and parts. See [[RO]].'],
          ['VMRS code', 'Standard code for the system, assembly and part worked on, plus the reason for repair.'],
          ['Road call', 'A breakdown away from the shop, tracked as its own event.'],
          ['PM schedule', 'Planned service by miles, hours or time. See [[PM]].'],
          ['Warranty recovery', 'Finding and claiming repairs still under warranty. See [[Warranty]].']
        ] } }
      ],
      features: [
        { ig: 'versus', icon: 'grid', title: 'TMT areas a coordinator meets', items: [
          { t: 'Repair orders', sub: 'In-house and outside repairs with history.' },
          { t: 'Preventive maintenance', sub: 'PM schedules and due lists.' },
          { t: 'Parts', sub: 'Inventory with reorder reports.' },
          { t: 'Road calls', sub: 'Breakdowns away from the shop.' },
          { t: 'Tires', sub: 'Tire tracking by position.' },
          { t: 'Warranty', sub: 'Recovery on parts and repairs.' }
        ] }
      ],
      how: [
        { ig: 'process', icon: 'route', title: 'From a repair to a report', items: [
          { icon: 'file', t: 'Repair order', d: 'Complaint, cause, correction' }, { icon: 'list-check', t: 'VMRS coding', d: 'System, part, reason' },
          { icon: 'clipboard', t: 'Unit history', d: 'Builds over time' }, { icon: 'bar', t: 'Reports', d: 'Cost, repeats, warranty' }
        ] }
      ],
      example: [
        "**Example fleet (fictional).** Your manager asks why brake costs on the 2021 day cabs doubled. Because every repair order was coded with VMRS, a report filtered by the brake system and that model year shows the answer in minutes: eleven slack adjuster replacements, eight of them on units from one PM shop. That points to a root cause, not just a cost."
      ],
      role: [
        { ul: ['Code every repair order completely, outside repairs too. Bad coding makes bad reports.', 'Enter meters on every RO so PM and warranty math work.', 'Log road calls as road calls, so breakdowns can be counted.', 'Check warranty before approving a repeat repair.'] }
      ],
      workflow: [
        { timeline: [
          { title: 'Open the RO', text: 'Unit, meter, complaint.', owner: 'Coordinator' },
          { title: 'Assign the work', text: 'In-house bay or outside vendor.', owner: 'Coordinator / shop' },
          { title: 'Record cause and correction', text: 'With VMRS codes, labor and parts.', owner: 'Technician / coordinator' },
          { title: 'Check warranty', text: 'Before closing, flag any claim.', owner: 'Coordinator' },
          { title: 'Close', text: 'History complete; unit back in service.', owner: 'Coordinator' }
        ] }
      ],
      visual: [
        { mock: { label: swMockLabel('Trimble TMT'), title: 'Repair order · T-226', status: 'Closed', tone: 'info', rows: [
          ['Complaint', 'Brake pulls right'], ['Cause', 'Automatic slack adjuster not adjusting, right drive'], ['Correction', 'Replaced slack adjuster, set stroke'], ['VMRS', 'Brakes system · slack adjuster · reason: worn out'], ['Meter', '388,410 mi']
        ] } }
      ],
      mistakes: [
        { compare: {
          no: { title: 'Common mistakes', items: ['Coding everything as "miscellaneous"', 'Skipping meters on outside repairs', 'Closing ROs without cause and correction'] },
          yes: { title: 'Do this instead', items: ['Use the right VMRS system and part', 'Enter the meter on every RO', 'Write complaint, cause and correction'] }
        } }
      ],
      scenario: [
        { exercise: { type: 'choose', prompt: 'An outside shop\'s invoice for T-226 says only "brake repair, $1,180". How do you enter it in TMT?', options: [
          { text: 'One line, "brake repair", no meter.', correct: false, why: 'Nobody can find or analyze this later.' },
          { text: 'Get the cause, correction and parts from the shop, then code the RO with the brake system and part, and add the meter.', correct: true, why: 'Complete, coded history feeds cost, repeat-repair and warranty reports.' },
          { text: 'Skip it; it was an outside repair.', correct: false, why: 'Outside repairs belong in the unit\'s history too.' }
        ] } }
      ],
      takeaways: [
        { ul: ['TMT is a fleet maintenance system for larger fleets (formerly TMW).', 'VMRS coding makes repair data comparable.', 'Every RO needs a meter, cause and correction.', 'Good records find repeats and warranty money.'] }
      ]
    },
    quiz: [
      { t: 'mc', q: 'What is VMRS?', o: ['A standard coding system for vehicle maintenance', 'A tire tracking system for retreads', 'A national network of truck stop shops', 'A fuel tax reporting program for fleets'], a: 0, e: 'Vehicle Maintenance Reporting Standards, from ATA\'s Technology & Maintenance Council.' },
      { t: 'mc', q: 'Which company sold TMT before Trimble\'s branding?', o: ['TMW Systems', 'KeepTruckin', 'Speedco', 'Comdata'], a: 0, e: 'Trimble TMT Fleet Maintenance was formerly from TMW Systems.' },
      { t: 'tf', q: 'Outside repairs do not need to be entered in the fleet\'s maintenance system.', a: false, e: 'Every repair belongs in the unit\'s history, or costs, repeats and warranty get lost.' }
    ],
    sources: [
      ['Trimble — Fleet maintenance solutions', 'https://transportation.trimble.com/fleet-maintenance-solutions-page'],
      ['Trimble — What TMT Fleet Maintenance can do', 'https://transportation.trimble.com/node/469'],
      ['Trimble — Master Fleet case study (VMRS reporting)', 'https://transportation.trimble.com/en/asset-fleet-maintenance/case-studies/master-fleet'],
      ['Trimble developer docs — TMT', 'https://developer.trimble.com/docs/tmt']
    ]
  }
);

SOFTWARE.push(
  /* -------------------------------------------------------- CARRIER TRANSICOLD */
  {
    id: 'carrier-transicold', name: 'Carrier Transicold', brand: 'Carrier', maker: 'Carrier', kind: 'Transport refrigeration (equipment)', icon: 'thermo', tone: 'critical', group: 'Refrigeration',
    url: 'https://www.carrier.com/truck-trailer/en/north-america/', checked: 'November 2026',
    tagline: 'One of the two big makers of trailer and truck refrigeration units, with the Lynx Fleet telematics platform for monitoring reefers remotely.',
    card: {
      what: 'Transport refrigeration units (TRUs) for trailers and trucks, plus Lynx Fleet, Carrier Transicold\'s telematics platform.',
      use: 'Keeping temperature-controlled freight in range, and watching unit temperature, alarms, location and battery status remotely.',
      who: 'Coordinators handling reefer fleets, dispatch for temperature-sensitive loads, and refrigeration technicians at Carrier Transicold dealers.'
    },
    sections: {
      what: [
        "Carrier Transicold, part of Carrier, builds the refrigeration units ([[TRU|TRUs]]) on many reefer trailers and trucks. If your fleet's reefers are not Thermo King, they are very likely Carrier. The ideas you learned on the Thermo King page carry over: a [[Setpoint|setpoint]], [[Return air|return air]], alarm codes and a pretrip test.",
        { callout: { kind: 'info', title: 'Lynx Fleet', text: 'Carrier Transicold\'s telematics platform for refrigerated fleets. Carrier and its partners describe it showing unit temperature, location and battery status, with data that can be pulled into other systems. Some telematics providers, such as Samsara, list Carrier Transicold integrations.' } }
      ],
      why: [ "A reefer failure risks the whole load, not just the unit. Remote monitoring lets the office see a temperature drift or an alarm before the driver notices, while there is still time to fix it or swap the trailer." ],
      who: [ { table: { head: ['Role', 'What they do'], rows: [
        ['Maintenance coordinator', 'Watches reefer alarms and temperatures, books refrigeration-qualified service, tracks reefer PM by engine hours.'],
        ['Dispatch', 'Protects the load: backup trailer, receiver updates.'],
        ['Driver', 'Pretrip, setpoint per the bill of lading, reports alarms.'],
        ['Carrier Transicold dealer', 'Diagnoses and repairs units; warranty work.']
      ] } } ],
      concepts: [ { table: { head: ['Term', 'Meaning'], rows: [
        ['Setpoint', 'The temperature the unit is told to hold, from the shipper\'s instructions.'],
        ['Return air / discharge air', 'Air coming back from the load / air leaving the unit. Return air near setpoint means the box is holding.'],
        ['Alarm code', 'A code from the unit\'s controller. Its meaning is in the model\'s operator or service manual.'],
        ['Pretrip', 'A check run before loading. Carrier\'s operator manual says it is not self-diagnosing: someone must watch that the unit runs through all cycles.'],
        ['Engine hours', 'How reefer PM is usually scheduled.']
      ] } } ],
      features: [ { ig: 'versus', icon: 'grid', title: 'What a coordinator meets', items: [
        { t: 'The unit controller', sub: 'Setpoint, temperatures, mode and alarm codes on the display.' },
        { t: 'Lynx Fleet', sub: 'Remote temperature, location and battery status.' },
        { t: 'Dealer network', sub: 'Carrier Transicold dealers for diagnosis, repair and warranty.' },
        { t: 'Manuals', sub: 'Model operator and service manuals hold the alarm meanings.' }
      ] } ],
      how: [ { ig: 'process', icon: 'route', title: 'From a reefer alarm to a protected load', items: [
        { icon: 'thermo', t: 'Unit alarm', d: 'Controller flags a condition' }, { icon: 'activity', t: 'Lynx Fleet / driver', d: 'Office hears about it' },
        { icon: 'clipboard', t: 'Check the manual', d: 'What the code means' }, { icon: 'wrench', t: 'Service', d: 'Qualified tech or dealer' }, { icon: 'truck', t: 'Protect the load', d: 'Backup plan with dispatch' }
      ] } ],
      example: [ "**Example fleet (fictional), 01:30.** Lynx Fleet shows TR-551's return air climbing from 35°F to 39°F on a produce load set at 34°F, with an alarm. You call the driver, ask for the alarm code from the display and the reading, book the nearest Carrier Transicold dealer, and ask dispatch to locate a spare reefer trailer within 50 miles in case the repair runs long." ],
      role: [ { ul: ['Never tell a driver to change the setpoint. It comes from the shipper.', 'Look up alarm codes in the unit\'s own manual, not a random list online.', 'Run repair and load protection in parallel: technician plus backup trailer.', 'Track reefer PM by engine hours, separate from the trailer.'] } ],
      workflow: [ { timeline: [
        { title: 'Alarm or temperature drift', text: 'Get the code, setpoint, return air and load type.', owner: 'Coordinator' },
        { title: 'Judge the clock', text: 'How fast is it drifting, and how far is the load from its limit?', owner: 'Coordinator' },
        { title: 'Book qualified service', text: 'Carrier Transicold dealer or refrigeration tech.', owner: 'Coordinator' },
        { title: 'Plan B', text: 'Ask dispatch for a backup trailer if needed.', owner: 'Coordinator + dispatch' },
        { title: 'Record', text: 'Code, repair, temperatures, outcome.', owner: 'Coordinator' }
      ] } ],
      visual: [ { mock: { label: swMockLabel('Carrier Transicold'), title: 'Reefer status · TR-551', status: 'Alarm', tone: 'critical', rows: [
        ['Setpoint', '34°F'], ['Return air', '39°F and rising'], ['Load', 'Produce'], ['Alarm', 'Code shown on unit — check model manual'], ['Location', 'I-40 WB, mile 280']
      ] } } ],
      mistakes: [ { compare: {
        no: { title: 'Common mistakes', items: ['Lowering the setpoint "to be safe"', 'Guessing an alarm meaning from another brand\'s chart', 'Waiting for the repair before planning a backup'] },
        yes: { title: 'Do this instead', items: ['Keep the shipper\'s setpoint', 'Use the model\'s Carrier manual or dealer', 'Start the backup plan at the same time'] }
      } } ],
      scenario: [ { exercise: { type: 'choose', prompt: 'A Carrier reefer shows an alarm and return air 4°F above setpoint, rising about 1°F per hour. The load can go 6°F above setpoint before it is rejected. What do you do?', options: [
        { text: 'Wait until it reaches the limit, then call a tech.', correct: false, why: 'By then there is no time left for a repair.' },
        { text: 'Book a Carrier Transicold dealer now and have dispatch line up a backup trailer, since you have about 2 hours.', correct: true, why: 'Repair and load protection in parallel, while there is still time.' },
        { text: 'Tell the driver to lower the setpoint 5°F.', correct: false, why: 'Setpoints come from the shipper. Changing it can damage the freight.' }
      ] } } ],
      takeaways: [ { ul: ['Carrier Transicold makes many of the reefer units in the field; Lynx Fleet monitors them remotely.', 'Setpoint, return air and alarm code are the first three facts to get.', 'Alarm meanings come from the model\'s own manual or dealer.', 'Protect the load in parallel with the repair.'] } ]
    },
    quiz: [
      { t: 'mc', q: 'What is Lynx Fleet?', o: ['Carrier Transicold\'s telematics platform for refrigerated fleets', 'A Carrier Transicold tire monitoring system', 'A fuel card for refrigerated carriers', 'A roadside network for reefer breakdowns'], a: 0, e: 'Lynx Fleet monitors refrigeration units remotely.' },
      { t: 'tf', q: 'A coordinator may tell the driver to lower the setpoint to protect a load.', a: false, e: 'The setpoint comes from the shipper. Changing it can ruin the freight.' },
      { t: 'mc', q: 'Where should you look up what a Carrier reefer alarm code means?', o: ['The unit\'s own manual or a Carrier dealer', 'Another reefer brand\'s alarm code chart', 'The trailer\'s last annual inspection report', 'The tractor\'s engine fault code list'], a: 0, e: 'Codes differ by maker and model. Use the official manual or dealer.' }
    ],
    sources: [
      ['Carrier — Lynx Fleet platform enhanced monitoring (news)', 'https://www.carrier.com/carrier/en/worldwide/news/news-article/carrier-transicold-s-lynx-fleet-platform-rolls-out-enhanced-monitoring-of-refrigerated-fleets.html'],
      ['Samsara Marketplace — Carrier Transicold', 'https://samsara.com/resources/marketplace/carrier-transicold'],
      ['Carrier Transicold — Truck and trailer refrigeration', 'https://www.carrier.com/truck-trailer/en/north-america/']
    ]
  },

  /* ------------------------------------------------- CUMMINS CONNECTED DIAGNOSTICS */
  {
    id: 'cummins-connected', name: 'Cummins Connected Diagnostics', brand: 'Cummins', maker: 'Cummins', kind: 'Engine-maker diagnostics', icon: 'zap', tone: 'warning', group: 'Telematics & diagnostics',
    url: 'https://www.cummins.com', checked: 'November 2026',
    tagline: 'Fault alerts from Cummins itself: when a Cummins engine logs a fault, the fleet gets a notice with priority, likely cause and a recommended action.',
    card: {
      what: 'A Cummins service that turns engine fault codes into notifications with a priority level and recommended action.',
      use: 'Knowing, from the engine maker, how urgent a Cummins fault is and what to do next, including any coming derate.',
      who: 'Maintenance coordinators and fleet managers running trucks with Cummins engines. Activated through a telematics provider or Cummins.'
    },
    sections: {
      what: [
        "Your telematics shows that a fault happened. **Cummins Connected Diagnostics** adds what the engine maker thinks it means. When a Cummins engine logs a fault, data reaches Cummins through the truck's telematics (for example a Geotab GO device), and Cummins sends the fleet a notification.",
        { callout: { kind: 'info', title: 'Activation', text: 'Cummins says it is activated through your telematics reseller (such as a Geotab partner), your Cummins representative or Cummins Care. Ask your manager whether your fleet has it.' } }
      ],
      why: [ "A coordinator can't know every engine code. The notification tells you how urgent it is in plain terms: keep running for now, or get it into a Cummins location soon, and whether a power limit (derate) is coming." ],
      who: [ { table: { head: ['Role', 'Use'], rows: [
        ['Maintenance coordinator', 'Reads the notification, decides timing, books a Cummins-certified repair location.'],
        ['Fleet manager', 'Watches repeat faults across the fleet.'],
        ['Cummins service location', 'Diagnoses and repairs; warranty work.']
      ] } } ],
      concepts: [ { table: { head: ['Item in a notification', 'What it tells you'], rows: [
        ['Engine serial number and model', 'Which engine; needed by the repair shop and for warranty.'],
        ['Priority level', 'How urgent: whether immediate action is needed or how long the truck can keep working.'],
        ['Recommended action', 'For example, contact a Cummins certified repair location; the truck may run a short time with possible power or speed limits.'],
        ['Root cause', 'Suggested cause based on the primary fault code.'],
        ['Derate warning', 'A coming power limit, for example a torque reduction after a set number of operating hours.'],
        ['Service location', 'Links to the nearest Cummins service location.']
      ] } } ],
      features: [ { ig: 'versus', icon: 'grid', title: 'What the service adds to a plain fault code', items: [
        { t: 'Priority', sub: 'Stop now vs plan soon, from the engine maker.' },
        { t: 'Recommended action', sub: 'What to do next.' },
        { t: 'Derate timing', sub: 'When a power limit will hit.' },
        { t: 'Where to go', sub: 'Nearest Cummins service location.' }
      ] } ],
      how: [ { ig: 'process', icon: 'route', title: 'From fault to notification', items: [
        { icon: 'truck', t: 'Engine fault', d: 'Cummins ECM logs it' }, { icon: 'zap', t: 'Telematics', d: 'Data sent out' },
        { icon: 'activity', t: 'Cummins', d: 'Analyzes the fault' }, { icon: 'message', t: 'Notification', d: 'Priority + action' }, { icon: 'target', t: 'Coordinator', d: 'Books service' }
      ] } ],
      example: [ "**Example fleet (fictional), 13:05.** A notification for T-140's Cummins engine says: aftertreatment fault, priority \"service soon\", recommended action: visit a Cummins certified location; a torque derate is expected after about 8 operating hours. The driver has 5 hours of driving left today. You book a Cummins location near tonight's stop for an early-morning slot, before the derate window, and tell dispatch." ],
      role: [ { ul: ['Read priority and recommended action before calling anyone.', 'Turn derate timing into a deadline on your plan.', 'Give the shop the engine serial number and fault details.', 'Still call the driver: symptoms beat assumptions.'] } ],
      workflow: [ { timeline: [
        { title: 'Notification arrives', text: 'Engine, fault, priority, action, derate timing.', owner: 'Cummins → coordinator' },
        { title: 'Check with the driver', text: 'Lamps, power, symptoms.', owner: 'Coordinator' },
        { title: 'Set the deadline', text: 'Before the derate or as the priority says.', owner: 'Coordinator' },
        { title: 'Book Cummins service', text: 'Nearest certified location on the route.', owner: 'Coordinator' },
        { title: 'Record and close', text: 'Fault, repair, warranty status.', owner: 'Coordinator' }
      ] } ],
      visual: [ { mock: { label: swMockLabel('Cummins'), title: 'Fault notification · T-140', status: 'Service soon', tone: 'warning', rows: [
        ['Engine', 'Cummins X15 · serial ending 7731'], ['Fault', 'Aftertreatment — see code details'], ['Priority', 'Service soon'], ['Recommended action', 'Visit a Cummins certified repair location'], ['Derate', 'Torque reduction expected after ~8 operating hours']
      ] } } ],
      mistakes: [ { compare: {
        no: { title: 'Common mistakes', items: ['Ignoring the derate timing', 'Booking a shop that can\'t do Cummins warranty work', 'Skipping the driver call'] },
        yes: { title: 'Do this instead', items: ['Plan the repair before the derate', 'Check warranty and use a certified location when it applies', 'Confirm symptoms with the driver'] }
      } } ],
      scenario: [ { exercise: { type: 'choose', prompt: 'A Cummins notification for T-140 warns of a derate in about 8 operating hours. The load delivers in 4 hours. What is the best plan?', options: [
        { text: 'Ignore it until after the derate happens.', correct: false, why: 'A derated truck on the highway is slow, unsafe and late.' },
        { text: 'Let the load deliver, then book the nearest Cummins certified location right after, inside the 8-hour window.', correct: true, why: 'The timing allows delivery first, and the repair still happens before the derate.' },
        { text: 'Tow the truck now.', correct: false, why: 'Unneeded and expensive when the engine maker says it can run a short time.' }
      ] } } ],
      takeaways: [ { ul: ['Connected Diagnostics adds the engine maker\'s priority and recommended action to a fault.', 'Derate timing is your deadline.', 'It runs through your telematics provider or Cummins.', 'Use certified locations when warranty applies.'] } ]
    },
    quiz: [
      { t: 'mc', q: 'What does a Cummins Connected Diagnostics notification add to a plain fault code?', o: ['Priority and a recommended action', 'The driver\'s pay', 'Fuel prices', 'A delivery appointment'], a: 0, e: 'It states urgency, recommended action, likely cause and derate timing.' },
      { t: 'tf', q: 'A derate warning tells you a power limit may come after a set time.', a: true, e: 'Use it as a deadline for the repair.' },
      { t: 'mc', q: 'How is the service usually activated?', o: ['Through a telematics reseller, a Cummins representative or Cummins Care', 'Automatically, on every truck with a Cummins engine', 'By the shipper, for loads that need tracking', 'Through the fleet\'s fuel card provider'], a: 0, e: 'Cummins documents activation through these channels.' }
    ],
    sources: [
      ['Cummins — Mobile apps bring Cummins service anywhere', 'https://www.cummins.com/news/2016/03/17/mobile-apps-bring-cummins-service-anywhere-you-roam'],
      ['Cummins — Just how serious is that dash light?', 'https://www.cummins.com/news/2015/12/22/just-how-serious-dash-light'],
      ['Geotab — Cummins Connected Diagnostics in MyGeotab', 'https://www.geotab.com/press-release/cummins-connected-diagnostic-mygeotab'],
      ['Eaton — IntelliConnect and Cummins integration guide', 'https://eaton.com.cn/content/dam/eaton/products/transmissions/service-tools/intelliconnect/eaton-intelliconnect-cummins-fcap-integration-rrsl0200.pdf']
    ]
  },

  /* ----------------------------------------------------------- DETROIT CONNECT */
  {
    id: 'detroit-connect', name: 'Detroit Connect', maker: 'Detroit (Daimler Truck North America)', kind: 'Engine-maker diagnostics', icon: 'zap', tone: 'warning', group: 'Telematics & diagnostics',
    url: 'https://www.demanddetroit.com', checked: 'November 2026',
    tagline: 'Remote diagnostics for Detroit engines and powertrains: Virtual Technician sends fault details with severity, and experts follow up on serious events.',
    card: {
      what: 'Detroit\'s connected-vehicle service for trucks with Detroit engines (common on Freightliner and Western Star). Virtual Technician is its remote diagnostics tool.',
      use: 'Fault notifications with severity, expert follow-up on severe events with likely cause and parts, and fault history per VIN in the Detroit Connect portal.',
      who: 'Maintenance coordinators and fleet managers with Detroit-powered trucks; Detroit\'s Customer Support Center.'
    },
    sections: {
      what: [
        "Many Freightliner and Western Star trucks run Detroit engines and DT12 transmissions. **Detroit Connect Virtual Technician** watches for fault events and tells the fleet what happened and how serious it is. Detroit describes severe events being reviewed by experts at the **Detroit Customer Support Center (CSC)**.",
        { callout: { kind: 'info', title: 'What Detroit describes', text: 'Fault details reach the fleet by email or the Detroit Connect portal shortly after the event, stating severity and whether the driver can resolve it or it needs service. For severe events, CSC experts follow up with the likely cause, the parts needed and nearby service locations with those parts in stock.' } }
      ],
      why: [ "The hardest part of a breakdown is often the wait for diagnosis. When the engine maker sends a likely cause and the shops that have the part, you can book the right shop the first time." ],
      who: [ { table: { head: ['Role', 'Use'], rows: [
        ['Maintenance coordinator', 'Reads severity, books service where parts are in stock, tracks history per VIN.'],
        ['Detroit Customer Support Center', 'Reviews severe events and follows up.'],
        ['Fleet manager', 'Fault trends across the fleet.']
      ] } } ],
      concepts: [ { table: { head: ['Term', 'Meaning'], rows: [
        ['Virtual Technician', 'Detroit\'s remote diagnostics for engine, aftertreatment and DT12 transmission faults; Detroit has extended coverage to some safety systems.'],
        ['Severity', 'How much the fault affects driving, and whether it needs immediate service.'],
        ['Customer Support Center (CSC)', 'Detroit experts who analyze severe events.'],
        ['Detroit Connect portal', 'Fault notifications, history per VIN and trends.'],
        ['Remote updates', 'Detroit Connect also offers remote software updates for some components.']
      ] } } ],
      features: [ { ig: 'versus', icon: 'grid', title: 'What a coordinator gets', items: [
        { t: 'Fault notification', sub: 'Severity and whether the driver can resolve it.' },
        { t: 'Expert follow-up', sub: 'Likely cause, parts and stocked locations for severe events.' },
        { t: 'Portal history', sub: 'Fault events and trends per VIN.' },
        { t: 'Coverage', sub: 'Engine, aftertreatment, DT12 transmission and some safety systems.' }
      ] } ],
      how: [ { ig: 'process', icon: 'route', title: 'A severe fault event', items: [
        { icon: 'truck', t: 'Fault event', d: 'Detroit powertrain' }, { icon: 'message', t: 'Notification', d: 'Severity + guidance' },
        { icon: 'users', t: 'CSC review', d: 'Severe events' }, { icon: 'wrench', t: 'Follow-up', d: 'Cause, parts, locations' }, { icon: 'target', t: 'Coordinator', d: 'Books the right shop' }
      ] } ],
      example: [ "**Example fleet (fictional), 22:15.** T-133 (Freightliner, Detroit engine) reports a severe aftertreatment event. The follow-up names a likely failed sensor, the part number, and two dealers on I-30: one has the part in stock. You send the truck to the stocked dealer, 20 miles farther, instead of the closer one that would order the part tomorrow." ],
      role: [ { ul: ['Use severity to decide stop-now vs schedule, then confirm with the driver.', 'Pick the shop that has the part, not just the closest one.', 'Give the shop the event details; it saves diagnosis time.', 'Watch the portal history for repeats by VIN.'] } ],
      workflow: [ { timeline: [
        { title: 'Notification', text: 'Severity and guidance.', owner: 'Detroit → coordinator' },
        { title: 'Driver check', text: 'Symptoms, lamps, safe to move?', owner: 'Coordinator' },
        { title: 'Expert follow-up', text: 'For severe events: cause, parts, locations.', owner: 'Detroit CSC' },
        { title: 'Book the stocked shop', text: 'Confirm the part and ETR.', owner: 'Coordinator' },
        { title: 'Record', text: 'Event, repair, warranty.', owner: 'Coordinator' }
      ] } ],
      visual: [ { mock: { label: swMockLabel('Detroit Connect'), title: 'Fault event · T-133', status: 'Severe', tone: 'critical', rows: [
        ['Engine', 'Detroit · VIN ending 4471'], ['Event', 'Aftertreatment — see event details'], ['Severity', 'Service required soon'], ['Likely cause', 'Sensor fault (per follow-up)'], ['Part in stock', 'Dealer B, I-30 exit 98']
      ] } } ],
      mistakes: [ { compare: {
        no: { title: 'Common mistakes', items: ['Sending the truck to the closest shop by habit', 'Not passing the event details to the shop', 'Ignoring repeat events on one VIN'] },
        yes: { title: 'Do this instead', items: ['Choose the shop with the part', 'Forward the diagnosis details', 'Review history per VIN'] }
      } } ],
      scenario: [ { exercise: { type: 'choose', prompt: 'A Detroit follow-up says the part is in stock at a dealer 25 miles ahead, not at the dealer 5 miles ahead. The truck can be driven per the severity guidance. Which do you choose?', options: [
        { text: 'The closer dealer; parts can be ordered.', correct: false, why: 'Ordering adds a day of downtime.' },
        { text: 'The dealer with the part, after confirming stock and an ETR by phone.', correct: true, why: 'Twenty extra miles beats a day waiting for parts.' },
        { text: 'Wait for the next PM.', correct: false, why: 'A severe event needs service soon.' }
      ] } } ],
      takeaways: [ { ul: ['Virtual Technician sends fault severity for Detroit powertrains.', 'Severe events get expert follow-up with cause, parts and stocked locations.', 'Choose the shop with the part.', 'Use the portal for history per VIN.'] } ]
    },
    quiz: [
      { t: 'mc', q: 'Who reviews severe Detroit Connect fault events, according to Detroit?', o: ['Experts at the Detroit Customer Support Center', 'The driver, using the Detroit Connect app', 'The fleet\'s own telematics provider', 'The nearest Freightliner dealer\'s parts desk'], a: 0, e: 'Detroit describes CSC experts analyzing severe events and following up.' },
      { t: 'tf', q: 'For severe events, the follow-up can include nearby service locations with the needed parts in stock.', a: true, e: 'That helps you pick the shop that can fix it today.' },
      { t: 'mc', q: 'Which trucks commonly use Detroit engines?', o: ['Freightliner and Western Star', 'Only trailers and converter dollies', 'Reefer units and APUs', 'Forklifts and yard tractors'], a: 0, e: 'Detroit is part of Daimler Truck North America, maker of Freightliner and Western Star.' }
    ],
    sources: [
      ['Freightliner (AU) — Detroit Connect Virtual Technician', 'https://freightliner.com.au/siteassets/documents/detroit-connect-virtual-technician.pdf'],
      ['Western Star — Detroit Connect', 'https://westernstar-truck-locator.azurewebsites.net/Engines/DetroitConnect'],
      ['TT News — Detroit extends fault code coverage to safety systems', 'https://www.ttnews.com/articles/detroit-extends-fault-code-coverage-safety-systems'],
      ['Fleet Equipment — Virtual Technician adds DT12 diagnostics', 'https://www.fleetequipmentmag.com/detroit-connect-virtual-technician-adds-diagnostics-dt12-transmission-fault-events/']
    ]
  },

  /* ----------------------------------------------------------- FLEETNET AMERICA */
  {
    id: 'fleetnet', name: 'FleetNet America', maker: 'Cox Automotive', kind: 'Roadside & repair network', icon: 'phone', tone: 'warning', group: 'Roadside, parts & service',
    url: 'https://fleetnetamerica.com', checked: 'November 2026',
    tagline: 'A 24/7 call center and network of tens of thousands of towing, mobile repair and shop providers that handles breakdowns for medium and heavy fleets.',
    card: {
      what: 'A roadside assistance and repair management service with a 24/7/365 call center and a large network of service providers.',
      use: 'Getting a tow, mobile repair or shop to a broken-down truck anywhere in the U.S., Canada and Puerto Rico, without finding the vendor yourself.',
      who: 'Fleets that outsource breakdown handling (fully or after hours); coordinators who hand off or follow events.'
    },
    sections: {
      what: [
        "FleetNet America, a Cox Automotive company, is a **roadside and repair network**. A fleet reports a breakdown; a FleetNet expert triages it and dispatches a provider from its network of tens of thousands of towing companies, mobile repair trucks and shops (Cox cites 65,000+).",
        { callout: { kind: 'info', title: 'Outsourcing the search, not the responsibility', text: 'FleetNet finds and manages the vendor. You still decide what the fleet authorizes, keep dispatch informed and own the record.' } }
      ],
      why: [ "At 02:00 in an unfamiliar state, finding a reliable heavy-duty vendor yourself can take an hour of calls. A network with a 24/7 call center and vetted providers can do it faster, and many fleets use one after hours." ],
      who: [ { table: { head: ['Role', 'Use'], rows: [
        ['Maintenance coordinator', 'Reports events or hands off after hours; approves costs within limits; follows status.'],
        ['Night / weekend coverage', 'Network handles events with fleet-set rules.'],
        ['Fleet manager', 'Sets authorization rules and reviews spend.']
      ] } } ],
      concepts: [ { table: { head: ['Term', 'Meaning'], rows: [
        ['Service event', 'One breakdown handled by the network.'],
        ['Triage', 'FleetNet\'s expert works out what is needed: tow, mobile repair or shop.'],
        ['Provider', 'The tow company, mobile tech or shop that does the work.'],
        ['Authorization', 'The spending limits and rules your fleet sets.']
      ] } } ],
      features: [ { ig: 'versus', icon: 'grid', title: 'As FleetNet and Cox describe it', items: [
        { t: '24/7/365 call center', sub: 'Report by phone, web, in-cab or mobile app.' },
        { t: 'Large provider network', sub: 'Towing, mobile repair and shops across the U.S., Canada and Puerto Rico.' },
        { t: 'Triage and dispatch', sub: 'Experts decide what\'s needed and send it.' },
        { t: 'Medium and heavy duty focus', sub: 'Built for commercial equipment.' }
      ] } ],
      how: [ { ig: 'process', icon: 'route', title: 'A breakdown through the network', items: [
        { icon: 'phone', t: 'Report', d: 'Phone, web, in-cab, app' }, { icon: 'users', t: 'Triage', d: 'FleetNet expert' },
        { icon: 'wrench', t: 'Dispatch', d: 'Provider sent' }, { icon: 'clock', t: 'Updates', d: 'Status to the fleet' }, { icon: 'check-circle', t: 'Close', d: 'Invoice and record' }
      ] } ],
      example: [ "**Example fleet (fictional), Saturday 01:40.** T-122's driver calls the after-hours line with a trailer tire blowout on I-70 in Kansas. Your fleet uses FleetNet after hours. You open the event with the unit, exact location, tire position and your authorization limit. By 02:05 a mobile tire provider is confirmed with a 45-minute ETA, and you text dispatch." ],
      role: [ { ul: ['Give complete facts: unit, exact location, problem, position, loaded or not.', 'Know your authorization limits before you call.', 'Follow the event; don\'t assume it\'s handled.', 'Bring the invoice and details into your maintenance records.'] } ],
      workflow: [ { timeline: [
        { title: 'Driver reports', text: 'Safety first, then facts.', owner: 'Driver → coordinator' },
        { title: 'Open the event', text: 'With FleetNet: unit, location, problem, limits.', owner: 'Coordinator' },
        { title: 'Provider dispatched', text: 'Get ETA; tell dispatch.', owner: 'FleetNet → coordinator' },
        { title: 'Follow up', text: 'Arrival, repair, release.', owner: 'Coordinator' },
        { title: 'Close and record', text: 'Invoice, notes, history.', owner: 'Coordinator' }
      ] } ],
      visual: [ { mock: { label: swMockLabel('FleetNet America'), title: 'Service event · T-122', status: 'Provider en route', tone: 'warning', rows: [
        ['Problem', 'Trailer tire blowout, axle 2 right outer'], ['Location', 'I-70 EB, mile 183, KS'], ['Provider', 'Mobile tire service (fictional)'], ['ETA', '02:50'], ['Authorized up to', '$900']
      ] } } ],
      mistakes: [ { compare: {
        no: { title: 'Common mistakes', items: ['Vague locations like "near Salina"', 'No authorization limit given', 'Forgetting to enter the event in your own records'] },
        yes: { title: 'Do this instead', items: ['Mile marker, direction, GPS pin', 'State your limit and who approves above it', 'Record every network event like any repair'] }
      } } ],
      scenario: [ { exercise: { type: 'multi', prompt: 'You open a FleetNet event for a breakdown. What must you give them?', options: [
        { text: 'Unit number and whether it is loaded', correct: true, why: 'Decides the equipment and the urgency.' },
        { text: 'Exact location with direction and mile marker', correct: true, why: 'The provider has to find the truck.' },
        { text: 'The problem and, for tires, the exact position', correct: true, why: 'So the right provider brings the right part.' },
        { text: 'Your authorization limit', correct: true, why: 'Prevents delays and surprise invoices.' },
        { text: 'The driver\'s home address', correct: false, why: 'Not needed for the repair.' }
      ] } } ],
      takeaways: [ { ul: ['FleetNet America is a 24/7 roadside and repair network for medium and heavy fleets.', 'It finds the provider; you still own the case.', 'Complete facts and clear limits make it fast.', 'Every network event belongs in your records.'] } ]
    },
    quiz: [
      { t: 'mc', q: 'What does FleetNet America mainly provide?', o: ['A 24/7 roadside and repair network', 'Engine fault codes from the truck', 'Fuel cards for over-the-road fleets', 'Refrigeration units for trailers'], a: 0, e: 'It triages breakdowns and dispatches providers from its network.' },
      { t: 'tf', q: 'Once FleetNet takes an event, the coordinator has nothing more to do.', a: false, e: 'You still authorize, follow up, inform dispatch and record it.' },
      { t: 'mc', q: 'Which company owns FleetNet America?', o: ['Cox Automotive', 'Cummins Inc.', 'Trimble Inc.', 'Carrier Global'], a: 0, e: 'FleetNet is a Cox Automotive brand.' }
    ],
    sources: [
      ['FleetNet America — Emergency roadside assistance', 'https://fleetnetamerica.com/?p=32'],
      ['FleetNet America — Fleet services', 'https://fleetnetamerica.com/?p=31'],
      ['Cox Automotive — FleetNet America TMC 2024 release', 'https://www.coxautoinc.com/wp-content/uploads/2024/02/FleetNet-America_TMC-2024_Press-Release_FINAL.pdf'],
      ['Geotab Marketplace — FleetNet America Roadside', 'https://marketplace.geotab.com/solutions/fleetnet-america-roadside/']
    ]
  },

  /* ---------------------------------------------------------- LOVE'S TRUCK CARE */
  {
    id: 'loves-truck-care', name: "Love's Truck Care & Speedco", brand: "Love's", maker: "Love's Travel Stops", kind: 'Truck stop service network', icon: 'wrench', tone: 'warning', group: 'Roadside, parts & service',
    url: 'https://www.loves.com', checked: 'November 2026',
    real: [["Love's Truck Care & Speedco — truck services", 'https://loves.com/truck-services']],
    tagline: "A national network of truck service bays and roadside trucks at Love's locations: tires, lube, light mechanical, roadside help and DOT inspections.",
    card: {
      what: "Love's Truck Care and Speedco service locations, many at Love's travel stops, plus roadside service trucks.",
      use: 'Tire repair and replacement, lube and PM, light mechanical repairs, roadside service and DOT inspections along major highways.',
      who: 'Coordinators booking on-route service, drivers, and fleets with national accounts.'
    },
    sections: {
      what: [
        "Love's runs a large network of truck service at its travel stops: **Love's Truck Care** (called Love's Truck Tire Care until 2020) and **Speedco** (which Love's bought from Bridgestone in 2017). Love's truck-services page describes 400+ locations and about 1,400 maintenance bays; a 2024 release also counted 900 roadside service trucks.",
        { callout: { kind: 'info', title: 'Why it matters to you', text: 'Because the shops sit on the highways your trucks already use, a tire or a PM can often be done at a fuel stop instead of a detour.' } }
      ],
      why: [ "On-route service cuts downtime: the truck is already there for fuel and the driver's break. For tires, lube and light repairs, a highway network is often the fastest option." ],
      who: [ { table: { head: ['Role', 'Use'], rows: [
        ['Maintenance coordinator', 'Books tire, PM and light repairs on route; sends roadside trucks.'],
        ['Driver', 'Stops for service, often during fuel or a break.'],
        ['Fleet manager', 'National account pricing and rules.']
      ] } } ],
      concepts: [ { table: { head: ['Term', 'Meaning'], rows: [
        ['Love\'s Truck Care', 'Service locations offering tire, lube, light mechanical, roadside and DOT inspections.'],
        ['Speedco', 'Love\'s quick lube and preventive maintenance brand.'],
        ['Roadside service truck', 'A service truck sent to a disabled unit.'],
        ['DOT inspection', 'A periodic (annual) inspection, which many locations offer.']
      ] } } ],
      features: [ { ig: 'versus', icon: 'grid', title: "Services Love's lists", items: [
        { t: 'Tires', sub: 'Repair and replacement.' }, { t: 'Lube / PM', sub: 'Oil changes and preventive maintenance.' },
        { t: 'Light mechanical', sub: 'Smaller repairs.' }, { t: 'Roadside', sub: 'Service trucks to disabled units.' },
        { t: 'DOT inspections', sub: 'Annual inspections.' }, { t: 'Warranty and recalls', sub: "Love's states it does warranty and recall work for Freightliner and International trucks." }
      ] } ],
      how: [ { ig: 'process', icon: 'route', title: 'Planning service on route', items: [
        { icon: 'route', t: 'Check the route', d: 'Where the truck will be' }, { icon: 'pin', t: 'Pick a location', d: 'With the right service' },
        { icon: 'clock', t: 'Book a time', d: 'Fits HOS and the load' }, { icon: 'wrench', t: 'Service', d: 'During fuel or break' }, { icon: 'clipboard', t: 'Record', d: 'Invoice into history' }
      ] } ],
      example: [ "**Example fleet (fictional).** T-118 is 2,000 miles past its PM, on a run from Dallas to Atlanta. Instead of pulling it off the road, you book a PM at a Speedco on I-20 where the driver will take the 10-hour break. The PM is done before the driver's next shift." ],
      role: [ { ul: ['Match the service to the location: not every site does every repair.', 'Time it with the driver\'s fuel stops and breaks.', 'Use roadside trucks for tire calls near a location.', 'Bring the invoice into your maintenance records.'] } ],
      workflow: [ { timeline: [
        { title: 'Need identified', text: 'PM due, tire wear, small defect.', owner: 'Coordinator' },
        { title: 'Route check', text: 'Which location fits the trip and HOS.', owner: 'Coordinator + dispatch' },
        { title: 'Book', text: 'Service, time, authorization.', owner: 'Coordinator' },
        { title: 'Service done', text: 'Driver continues.', owner: "Love's" },
        { title: 'Record', text: 'Work and meter into history.', owner: 'Coordinator' }
      ] } ],
      visual: [ { mock: { label: swMockLabel("Love's"), title: 'Service booking · T-118', status: 'Scheduled', tone: 'info', rows: [
        ['Location', 'Speedco, I-20 (fictional exit)'], ['Service', 'PM-A with oil and filters'], ['Time', 'Thu 21:00, during 10-hour break'], ['Meter', '377,950 mi'], ['Authorized', 'PM per national account']
      ] } } ],
      mistakes: [ { compare: {
        no: { title: 'Common mistakes', items: ['Sending a major engine repair to a light-service site', 'Booking a time that breaks the driver\'s HOS plan', 'Losing the invoice from on-route work'] },
        yes: { title: 'Do this instead', items: ['Check which services the site offers', 'Plan around fuel and rest stops', 'Record every on-route service'] }
      } } ],
      scenario: [ { exercise: { type: 'choose', prompt: 'T-118 is overdue for PM and will stop at a Love\'s with a Speedco tonight for a 10-hour break. What do you do?', options: [
        { text: 'Pull the truck off its load to go to the home terminal.', correct: false, why: 'Costly and unnecessary when service is on the route.' },
        { text: 'Book the PM at that Speedco during the break and record it after.', correct: true, why: 'PM done with no extra downtime.' },
        { text: 'Skip the PM until next month.', correct: false, why: 'Overdue PM raises breakdown risk.' }
      ] } } ],
      takeaways: [ { ul: ["Love's Truck Care and Speedco are an on-route service network.", 'Tires, lube/PM, light mechanical, roadside and DOT inspections.', 'Time service with fuel stops and breaks.', 'Check which services each site offers.'] } ]
    },
    quiz: [
      { t: 'mc', q: "What is Speedco?", o: ["Love's quick lube and preventive maintenance brand", 'A fuel card for Love\'s customers', 'A telematics device for Love\'s fleets', 'A brand of reefer units'], a: 0, e: "Love's bought Speedco from Bridgestone in 2017." },
      { t: 'tf', q: 'Booking a PM during the driver\'s break at an on-route location can avoid extra downtime.', a: true, e: 'The truck is already stopped; the work fits the break.' },
      { t: 'mc', q: "Which service does Love's Truck Care NOT list in its standard menu?", o: ['Tire work', 'Lube and PM', 'DOT inspections', 'Freight brokerage'], a: 3, e: 'It is a truck service network, not a freight broker.' }
    ],
    sources: [
      ["Love's — Truck services", 'https://loves.com/truck-services'],
      ["Love's — Love's opens five new Speedco locations (2024)", 'https://www.loves.com/news/2024/april/loves-opens-five-new-speedco-locations'],
      ["Love's — New Love's Truck Care and Speedco locations open (2020)", 'https://www.loves.com/news/2020/october/new-loves-truck-care-and-speedco-locations-open'],
      ['Business Wire — Love\'s acquires Speedco (2017)', 'https://www.businesswire.com/news/home/20171101006122/en']
    ]
  },

  /* ----------------------------------------------------------------- FLEETPRIDE */
  {
    id: 'fleetpride', name: 'FleetPride', maker: 'FleetPride', kind: 'Heavy-duty parts distributor', icon: 'layers', tone: 'info', group: 'Roadside, parts & service',
    url: 'https://www.fleetpride.com', checked: 'November 2026',
    tagline: 'A national distributor of heavy-duty truck and trailer parts with branches across the U.S., an online catalog and service at some locations.',
    card: {
      what: 'A heavy-duty truck and trailer parts distributor with 300+ locations in 46 states, according to FleetPride.',
      use: 'Sourcing parts for Class 6–8 trucks and trailers: brakes, wheel-end, driveline, filters, lighting and more, in person or online.',
      who: 'Parts staff, maintenance coordinators, shops and technicians.'
    },
    sections: {
      what: [
        "FleetPride sells parts for heavy-duty trucks and trailers, mainly Class 6–8. It describes 300+ branches in 46 states and an online catalog of more than a million parts. Some locations also do repairs under the **FleetCare** name.",
        { callout: { kind: 'info', title: 'Where parts come from', text: 'Your fleet may buy from a dealer (OEM parts), a distributor like FleetPride (aftermarket and OEM-equivalent brands) or both. See the Parts Sourcing lesson for [[OEM]], aftermarket and [[Remanufactured|reman]] trade-offs.' } }
      ],
      why: [ "When a part is the only thing holding a truck in the shop, a branch nearby with it on the shelf decides the downtime." ],
      who: [ { table: { head: ['Role', 'Use'], rows: [
        ['Parts staff', 'Ordering and stocking.'],
        ['Maintenance coordinator', 'Finds parts that hold up a repair; checks branch stock.'],
        ['Technicians / shops', 'Pick up or receive parts.']
      ] } } ],
      concepts: [ { table: { head: ['Term', 'Meaning'], rows: [
        ['Branch', 'A local FleetPride store with stock and counter staff.'],
        ['Part fit', 'Matching a part to the exact unit, by make, model and VIN.'],
        ['Core', 'A deposit on reman parts, refunded when the old part comes back. See [[Core]].'],
        ['FleetCare', 'FleetPride\'s repair service at some locations.']
      ] } } ],
      features: [ { ig: 'versus', icon: 'grid', title: 'What FleetPride describes', items: [
        { t: 'Branch network', sub: '300+ locations in 46 states.' }, { t: 'Online catalog', sub: '1M+ truck and trailer parts.' },
        { t: 'Quick order', sub: 'Online ordering for known part numbers.' }, { t: 'Branch services', sub: 'Some branches list brake, wheel-end, driveline and diagnostics services.' }
      ] } ],
      how: [ { ig: 'process', icon: 'route', title: 'Getting a part to a down truck', items: [
        { icon: 'file', t: 'Part number', d: 'From the shop' }, { icon: 'search', t: 'Find stock', d: 'Nearest branch' },
        { icon: 'dollar', t: 'Order', d: 'PO and core' }, { icon: 'truck', t: 'Deliver / pick up', d: 'To the shop' }, { icon: 'clipboard', t: 'Record', d: 'Part, cost, core' }
      ] } ],
      example: [ "**Example fleet (fictional).** An independent shop has T-226 apart for brakes but its supplier is out of slack adjusters until Thursday. You search FleetPride branches: one 12 miles away has two in stock. You place the order on the fleet account with a PO and send a runner. The truck is back by 15:00 instead of Thursday." ],
      role: [ { ul: ['Get the exact part number or the VIN for fit before you search.', 'Check stock at nearby branches when a part holds up a repair.', 'Use a PO and record the cost and any core.', 'Return cores on time for the credit.'] } ],
      workflow: [ { timeline: [
        { title: 'Part needed', text: 'Exact number or VIN.', owner: 'Shop → coordinator' },
        { title: 'Stock check', text: 'Nearest branches or online.', owner: 'Coordinator / parts' },
        { title: 'Order', text: 'Fleet account, PO, core noted.', owner: 'Coordinator / parts' },
        { title: 'Delivery', text: 'To the shop.', owner: 'Branch / runner' },
        { title: 'Record and core', text: 'Cost on the RO, core return tracked.', owner: 'Coordinator' }
      ] } ],
      visual: [ { mock: { label: swMockLabel('FleetPride'), title: 'Parts order · T-226', status: 'Ready for pickup', tone: 'success', rows: [
        ['Part', 'Automatic slack adjuster × 2'], ['Branch', '12 mi from the shop (fictional)'], ['PO', 'PO 48877'], ['Core', 'None on this part'], ['Ready', '11:30']
      ] } } ],
      mistakes: [ { compare: {
        no: { title: 'Common mistakes', items: ['Ordering by description only', 'Accepting "Thursday" without checking other branches', 'Forgetting the core return'] },
        yes: { title: 'Do this instead', items: ['Use part number or VIN fit', 'Check nearby branch stock', 'Track the core credit'] }
      } } ],
      scenario: [ { exercise: { type: 'choose', prompt: 'A shop says a part for T-226 is 3 days out from its usual supplier. What is your first move?', options: [
        { text: 'Accept 3 days of downtime.', correct: false, why: 'Parts delays are often solvable.' },
        { text: 'Get the part number and check nearby distributor branches and dealers for stock today.', correct: true, why: 'Another source can turn days into hours.' },
        { text: 'Tow the truck to another state.', correct: false, why: 'Check stock first; the tow costs more than a courier.' }
      ] } } ],
      takeaways: [ { ul: ['FleetPride is a heavy-duty parts distributor with a national branch network.', 'Exact part numbers or VIN fit prevent wrong parts.', 'Check other branches before accepting a parts delay.', 'Record the cost and track cores.'] } ]
    },
    quiz: [
      { t: 'mc', q: 'What is FleetPride?', o: ['A heavy-duty parts distributor', 'A telematics and ELD platform', 'A fuel card for heavy trucks', 'A maker of heavy-duty engines'], a: 0, e: 'It sells parts through branches and online.' },
      { t: 'mc', q: 'What should you have before searching for a part?', o: ['The exact part number or the unit\'s VIN', 'The driver\'s phone number and location', 'The load number and delivery time', 'The fuel price at the nearest stop'], a: 0, e: 'Part number or VIN fit avoids ordering the wrong part.' },
      { t: 'tf', q: 'If the usual supplier is out of a part, checking other branches can cut downtime.', a: true, e: 'Another branch or dealer may have it today.' }
    ],
    sources: [
      ['FleetPride — About', 'https://www.fleetpride.com/About'],
      ['FleetPride — Branch page example (Fargo, ND)', 'https://branches.fleetpride.com/nd/fargo/truckparts-far.html']
    ]
  },

  /* ---------------------------------------------------------------- MCLEOD */
  {
    id: 'mcleod', name: 'McLeod LoadMaster', maker: 'McLeod Software', kind: 'Trucking software (TMS)', icon: 'route', tone: 'warning', group: 'Dispatch, TMS & payments',
    url: 'https://www.mcleodsoftware.com', checked: 'November 2026',
    tagline: 'A transportation management system (TMS) used by many carriers for orders, dispatch, drivers and billing, often linked to the fleet\'s maintenance system.',
    card: {
      what: 'LoadMaster Enterprise, McLeod\'s TMS for trucking companies (PowerBroker is its product for brokers).',
      use: 'Orders, dispatch, driver and equipment assignment, and billing. Linked maintenance systems can mark units unavailable or flag PM due.',
      who: 'Dispatchers and planners mainly; maintenance coordinators see unit availability and status.'
    },
    sections: {
      what: [
        "LoadMaster is a **[[TMS]]**: the system where loads are entered, planned and dispatched. Like ProTransport, it is dispatch's tool, not maintenance's. You meet it because a down truck is a unit dispatch can't plan.",
        { callout: { kind: 'info', title: 'Linked to maintenance', text: 'Maintenance software vendors describe LoadMaster integrations where PM due notices pass to dispatch, and a unit with an open repair order is flagged unavailable for dispatch.' } }
      ],
      why: [ "When maintenance and dispatch use different systems that don't talk, dispatch books loads on trucks that are in the shop. Linking them, or at least updating status promptly, prevents that." ],
      who: [ { table: { head: ['Role', 'Use'], rows: [
        ['Dispatch / planners', 'Plan and dispatch loads.'],
        ['Maintenance coordinator', 'Updates unit status and ETR; sees upcoming loads before booking PM.'],
        ['Billing', 'Invoices loads.']
      ] } } ],
      concepts: [ { table: { head: ['Term', 'Meaning'], rows: [
        ['Order / load', 'A customer shipment to be moved.'],
        ['Unit availability', 'Whether a tractor or trailer can be dispatched.'],
        ['PM due notice', 'A flag from maintenance that service is due.'],
        ['ETR', 'When a down unit will be ready again. See [[ETR]].']
      ] } } ],
      features: [ { ig: 'versus', icon: 'grid', title: 'Where maintenance meets the TMS', items: [
        { t: 'Unit status', sub: 'Available, in shop, out of service.' }, { t: 'PM due flags', sub: 'From a linked maintenance system.' },
        { t: 'Load plan', sub: 'Which load each unit is on, and when it is free.' }, { t: 'Integrations', sub: 'Telematics and maintenance systems can connect.' }
      ] } ],
      how: [ { ig: 'process', icon: 'route', title: 'A repair seen from dispatch', items: [
        { icon: 'wrench', t: 'RO opened', d: 'In maintenance system' }, { icon: 'alert', t: 'Unit flagged', d: 'Unavailable in the TMS' },
        { icon: 'route', t: 'Dispatch replans', d: 'Other unit or relay' }, { icon: 'clock', t: 'ETR updates', d: 'From the coordinator' }, { icon: 'check-circle', t: 'Unit released', d: 'Available again' }
      ] } ],
      example: [ "**Example fleet (fictional).** T-305 goes into the shop at 09:00 with an air leak. Because the open repair order flags it unavailable in LoadMaster, the planner doesn't assign it tomorrow's 05:00 load. You post an ETR of 15:00; at 14:40 you release it and the planner gives it the load." ],
      role: [ { ul: ['Keep unit status and ETR current; dispatch plans from them.', 'Check the load plan before booking a PM.', 'Release units promptly when repairs finish.', 'Know whether your systems are linked or need manual updates.'] } ],
      workflow: [ { timeline: [
        { title: 'Unit goes down', text: 'RO opened; status set.', owner: 'Coordinator' },
        { title: 'Dispatch sees it', text: 'Unit unavailable; loads replanned.', owner: 'Dispatch' },
        { title: 'ETR shared', text: 'And updated as it changes.', owner: 'Coordinator' },
        { title: 'Released', text: 'Status back to available.', owner: 'Coordinator' }
      ] } ],
      visual: [ { mock: { label: swMockLabel('McLeod'), title: 'Unit status · T-305', status: 'Unavailable — in shop', tone: 'warning', rows: [
        ['Reason', 'Open repair order: air leak'], ['ETR', 'Today 15:00'], ['Next planned load', 'Tomorrow 05:00 (on hold)'], ['PM due', 'In 1,100 mi']
      ] } } ],
      mistakes: [ { compare: {
        no: { title: 'Common mistakes', items: ['Leaving a repaired unit marked "in shop"', 'Booking PM over a planned load', 'Assuming systems sync when they don\'t'] },
        yes: { title: 'Do this instead', items: ['Release units the moment they\'re ready', 'Check the load plan first', 'Know your integration and update manually if needed'] }
      } } ],
      scenario: [ { exercise: { type: 'choose', prompt: 'T-305\'s repair finished at 14:40, but LoadMaster still shows it "in shop". What is the risk?', options: [
        { text: 'None; dispatch will figure it out.', correct: false, why: 'Dispatch plans from status. A ready truck sits idle.' },
        { text: 'A ready truck sits unused while dispatch looks for another; update the status now.', correct: true, why: 'Lost capacity until someone fixes the status.' },
        { text: 'The truck breaks again.', correct: false, why: 'The risk is lost use, not a new failure.' }
      ] } } ],
      takeaways: [ { ul: ['LoadMaster is a TMS: dispatch\'s system.', 'Maintenance status and ETR drive dispatch planning.', 'Linked systems can flag units unavailable automatically.', 'Release units promptly.'] } ]
    },
    quiz: [
      { t: 'mc', q: 'What kind of software is McLeod LoadMaster?', o: ['A transportation management system (TMS)', 'An engine diagnostic tool for shops', 'A reefer temperature controller', 'A heavy-duty parts catalog'], a: 0, e: 'It manages loads, dispatch and billing.' },
      { t: 'tf', q: 'A unit with an open repair order can be flagged unavailable for dispatch when maintenance and LoadMaster are linked.', a: true, e: 'Maintenance vendors describe this integration.' },
      { t: 'mc', q: 'What is the coordinator\'s main job in the TMS?', o: ['Keep unit status and ETR accurate', 'Book loads for idle trucks', 'Price freight for customers', 'Approve driver pay each week'], a: 0, e: 'Dispatch plans from your status and ETR.' }
    ],
    sources: [
      ['McLeod Software', 'https://www.mcleodsoftware.com'],
      ['Cetaris — McLeod integration', 'https://cetaris.com/integrations/mcleod-software'],
      ['FleetOwner — Dossier integrated with LoadMaster Enterprise', 'https://www.fleetowner.com/technology/article/21684901/dossier-integrated-with-loadmaster-enterprise'],
      ['Samsara Help — Integrate with McLeod LoadMaster', 'https://kb.samsara.com/hc/articles/360017463232']
    ]
  },

  /* ---------------------------------------------------------------- COMDATA */
  {
    id: 'comdata', name: 'Comdata', maker: 'Comdata', kind: 'Fleet fuel cards & payments', icon: 'dollar', tone: 'warning', group: 'Dispatch, TMS & payments',
    url: 'https://www.comdata.com', checked: 'November 2026',
    tagline: 'Fleet fuel cards and on-the-road payments, including Comchek Express Codes and one-time virtual cards that can pay for repairs, towing and roadside help.',
    card: {
      what: 'A fleet payments company: diesel fuel cards and Comchek products for moving funds on the road.',
      use: 'Fuel purchases, and paying roadside vendors, tows and repair shops when a driver is far from home.',
      who: 'Fleet finance, dispatch and maintenance coordinators who pay roadside vendors; drivers.'
    },
    sections: {
      what: [
        "Comdata makes **fleet fuel cards** and **Comchek** payment products. For maintenance, the important part is paying a roadside vendor who won't wait for an invoice: Comdata describes moving funds electronically with **Express Codes**, and a **Virtual Comchek**, a one-time digital card for repairs and roadside help.",
        { callout: { kind: 'warning', title: 'Treat payment codes like cash', text: 'An Express Code or virtual card number is money. Send it only to the verified vendor, for the approved amount, and record it against the case and PO.' } }
      ],
      why: [ "A tow company at 03:00 often wants payment before it hooks up. A fast, controlled way to pay keeps the repair moving without a driver's personal card." ],
      who: [ { table: { head: ['Role', 'Use'], rows: [
        ['Maintenance coordinator', 'Pays approved roadside vendors and records the payment.'],
        ['Finance', 'Sets controls and reconciles payments.'],
        ['Driver', 'Fuel purchases with the fuel card.']
      ] } } ],
      concepts: [ { table: { head: ['Term', 'Meaning'], rows: [
        ['Fuel card', 'A card for diesel and approved purchases, with fleet controls.'],
        ['Comchek / Express Code', 'A code that moves funds electronically to a registered payee, such as a repair shop.'],
        ['Virtual Comchek', 'A one-time digital card that Comdata says merchants can accept for repairs and roadside help.'],
        ['Approval amount', 'The amount you authorized; pay no more.']
      ] } } ],
      features: [ { ig: 'versus', icon: 'grid', title: 'What Comdata describes', items: [
        { t: 'Fleet fuel card', sub: 'Diesel at a large network of locations.' },
        { t: 'Express Codes', sub: 'Electronic funds to registered payees, including repair shops.' },
        { t: 'Virtual Comchek', sub: 'One-time card for repairs and roadside.' },
        { t: 'Controls', sub: 'Fleet-set limits and reporting.' }
      ] } ],
      how: [ { ig: 'process', icon: 'route', title: 'Paying a roadside vendor', items: [
        { icon: 'file', t: 'Approved quote', d: 'Amount and PO' }, { icon: 'shield', t: 'Verify vendor', d: 'Name, phone, job' },
        { icon: 'dollar', t: 'Issue payment', d: 'Code or virtual card' }, { icon: 'clipboard', t: 'Record', d: 'On the case' }, { icon: 'check-circle', t: 'Reconcile', d: 'Against the invoice' }
      ] } ],
      example: [ "**Example fleet (fictional), 03:10.** A tow company quotes $1,450 to tow T-133 and asks for payment before hooking up. You confirm the company name and call-back number from the dispatch record, get your manager's approval (over your limit), issue a one-time payment for exactly $1,450, and note the reference on the case and PO." ],
      role: [ { ul: ['Pay only after the amount is approved.', 'Verify the vendor through a number you found, not one given in a text.', 'Pay the exact approved amount.', 'Record every payment against the case and PO.'] } ],
      workflow: [ { timeline: [
        { title: 'Quote', text: 'Amount and scope from the vendor.', owner: 'Vendor → coordinator' },
        { title: 'Approve', text: 'Within limit, or escalate.', owner: 'Coordinator / manager' },
        { title: 'Verify', text: 'Vendor identity and job.', owner: 'Coordinator' },
        { title: 'Pay', text: 'Code or virtual card for the approved amount.', owner: 'Coordinator' },
        { title: 'Record and reconcile', text: 'Reference on the case; match the invoice.', owner: 'Coordinator / finance' }
      ] } ],
      visual: [ { mock: { label: swMockLabel('Comdata'), title: 'Roadside payment · T-133', status: 'Issued', tone: 'info', rows: [
        ['Payee', 'Tow company (verified by phone)'], ['Amount', '$1,450.00'], ['Approved by', 'Fleet manager, 03:05'], ['Case / PO', 'Case 2291 · PO 48890'], ['Type', 'One-time payment']
      ] } } ],
      mistakes: [ { compare: {
        no: { title: 'Common mistakes', items: ['Paying before approval', 'Sending a code to an unverified number', 'Not recording the payment'] },
        yes: { title: 'Do this instead', items: ['Approve first', 'Verify through a known number', 'Record on the case and PO'] }
      } } ],
      scenario: [ { exercise: { type: 'choose', prompt: 'You get a text from an unknown number: "Tow driver here, send the payment code to this number to release T-133." What do you do?', options: [
        { text: 'Send the code; the truck is waiting.', correct: false, why: 'This is how payment fraud works.' },
        { text: 'Call the tow company on the number from your dispatch record to verify, then pay only the approved amount.', correct: true, why: 'Verify through a channel you trust before sending money.' },
        { text: 'Ask the driver to pay with a personal card.', correct: false, why: 'Bypasses company controls and records.' }
      ] } } ],
      takeaways: [ { ul: ['Comdata provides fuel cards and on-road payments.', 'Express Codes and virtual cards can pay roadside vendors.', 'Approve, verify, pay exactly, record.', 'Payment codes are money: guard them.'] } ]
    },
    quiz: [
      { t: 'mc', q: 'What can a Comdata Express Code be used for, according to Comdata?', o: ['Sending funds to registered payees, like repair shops', 'Reading engine fault codes from the truck', 'Booking loads on a freight load board', 'Setting the reefer unit\'s temperature'], a: 0, e: 'It transfers funds to registered cardholders, including repair shops.' },
      { t: 'tf', q: 'You should verify a vendor through a number you already trust before sending a payment code.', a: true, e: 'Never send money to an unverified contact.' },
      { t: 'mc', q: 'How much should you pay a roadside vendor?', o: ['Exactly the approved amount', 'Whatever they ask', 'Double to be safe', 'Nothing until next month'], a: 0, e: 'Pay the approved amount and record it.' }
    ],
    sources: [
      ['Comdata — Comchek', 'https://www.comdata.com/products-services/comchek'],
      ['Comdata — Fleet payment solutions', 'https://comdata.com/products-services/fleet-payments'],
      ['Business Wire — Comdata launches Virtual Comchek', 'https://www.businesswire.com/news/home/20200910005224/en/Comdata-Launches-Virtual-Comchek-a-One-Time-Use-Digital-Payment-Card-for-Fleets-and-Drivers']
    ]
  }
);

SOFTWARE.push(
  /* --------------------------------------------------------- TA TRUCK SERVICE */
  {
    id: 'ta-truck-service', name: 'TA Truck Service', maker: 'TravelCenters of America', kind: 'Truck stop service network', icon: 'wrench', tone: 'warning', group: 'Roadside, parts & service',
    url: 'https://www.ta-petro.com', checked: 'November 2026',
    real: [['TA Truck Service — TA & Petro website', 'https://www.ta-petro.com']],
    tagline: 'Truck service bays at TA and Petro travel centers, plus TA\'s RoadSquad roadside brand: maintenance, tires and repairs along the interstates.',
    card: {
      what: 'The truck service and repair network of TravelCenters of America, with service bays at many TA and Petro travel centers.',
      use: 'Preventive maintenance, tires and mechanical repairs on route; roadside help under the RoadSquad name where it is offered.',
      who: 'Coordinators booking on-route service, drivers, and fleets with national accounts.'
    },
    sections: {
      what: [
        "TravelCenters of America runs the **TA** and **Petro** travel center brands (bp bought the company in 2023). Many of its centers have a **TA Truck Service** shop: service bays, some open 24/7, doing maintenance, tires and repairs. TA's roadside service brand is **RoadSquad**.",
        { callout: { kind: 'warning', title: 'Check current roadside coverage', text: 'Trade press has reported TA pausing its on-highway emergency roadside service. Before you rely on RoadSquad for a breakdown, confirm with TA what is offered today in that area.' } }
      ],
      why: [ "Like Love's, TA's value is location: the shop is where the truck already stops for fuel and the driver's break. A PM or a tire done there costs no detour." ],
      who: [ { table: { head: ['Role', 'Use'], rows: [
        ['Maintenance coordinator', 'Books PM, tires and repairs at centers on the route; follows the work.'],
        ['Driver', 'Brings the truck in during fuel or rest stops.'],
        ['Fleet manager', 'National account terms.']
      ] } } ],
      concepts: [ { table: { head: ['Term', 'Meaning'], rows: [
        ['TA / Petro', 'TravelCenters of America\'s two main travel center brands. Both can have TA Truck Service shops.'],
        ['TA Truck Service', 'The service shop network inside the travel centers.'],
        ['RoadSquad', 'TA\'s roadside service brand. Confirm current availability.'],
        ['Service bay count and hours', 'Each location lists its own; not every shop is 24/7.']
      ] } } ],
      features: [ { ig: 'versus', icon: 'grid', title: 'What a coordinator uses it for', items: [
        { t: 'Preventive maintenance', sub: 'PM on route, timed with a stop.' }, { t: 'Tires', sub: 'Repair and replacement.' },
        { t: 'Mechanical repairs', sub: 'At shops with the right bays and staff.' }, { t: 'Roadside', sub: 'RoadSquad, where offered today.' }
      ] } ],
      how: [ { ig: 'process', icon: 'route', title: 'Booking on route', items: [
        { icon: 'route', t: 'Check the route', d: 'Which TA or Petro the truck passes' }, { icon: 'phone', t: 'Call the shop', d: 'Bays, hours, the service you need' },
        { icon: 'clock', t: 'Set the time', d: 'With HOS and the load' }, { icon: 'wrench', t: 'Service', d: 'While the driver rests' }, { icon: 'clipboard', t: 'Invoice', d: 'Into your records' }
      ] } ],
      example: [ "**Example fleet (fictional).** TR-532 needs two trailer tires before its next load. The driver will take a 10-hour break at a Petro on I-20 tonight. You call the TA Truck Service shop there, confirm they have the size in stock and an open bay at 22:00, and send the PO. The tires are on before the driver's next shift." ],
      role: [ { ul: ['Call ahead: confirm bays, hours, parts and the exact service.', 'Time the work with fuel and rest stops.', 'Confirm current roadside coverage before relying on it.', 'Read the invoice like any other: unit, PO, lines, total.'] } ],
      workflow: [ { timeline: [
        { title: 'Need', text: 'PM, tires, or a repair.', owner: 'Coordinator' },
        { title: 'Pick the center', text: 'On the route, with the right service.', owner: 'Coordinator + dispatch' },
        { title: 'Book and authorize', text: 'Time, PO, limit.', owner: 'Coordinator' },
        { title: 'Work done', text: 'Driver continues.', owner: 'TA Truck Service' },
        { title: 'Record', text: 'Invoice checked and entered.', owner: 'Coordinator' }
      ] } ],
      visual: [ { mock: { label: swMockLabel('TA'), title: 'Service booking · TR-532', status: 'Scheduled', tone: 'info', rows: [
        ['Location', 'Petro, I-20 (fictional exit)'], ['Service', 'Replace 2 trailer tires, axle 1 left'], ['Time', 'Wed 22:00, during 10-hour break'], ['PO', 'PO 48902'], ['Stock', 'Size confirmed by phone']
      ] } } ],
      mistakes: [ { compare: {
        no: { title: 'Common mistakes', items: ['Sending a truck without calling ahead', 'Assuming every center is 24/7', 'Counting on roadside service without checking'] },
        yes: { title: 'Do this instead', items: ['Confirm bays, stock and time', 'Check that location\'s hours', 'Confirm current roadside coverage'] }
      } } ],
      scenario: [ { exercise: { type: 'choose', prompt: 'A driver will stop at a TA tonight. T-118 needs a PM. What do you do first?', options: [
        { text: 'Tell the driver to ask when he gets there.', correct: false, why: 'The shop may be full or closed at that hour.' },
        { text: 'Call that location\'s TA Truck Service shop to confirm a bay, the hours and the PM, then send the PO.', correct: true, why: 'Booked work fits the driver\'s break.' },
        { text: 'Skip it; PM can wait.', correct: false, why: 'On-route PM avoids pulling the truck off a load later.' }
      ] } } ],
      takeaways: [ { ul: ['TA Truck Service is the shop network at TA and Petro travel centers.', 'Call ahead: bays, hours and parts differ by location.', 'RoadSquad is TA\'s roadside brand; confirm current coverage.', 'Treat its invoices like any other: check every line.'] } ]
    },
    quiz: [
      { t: 'mc', q: 'Which travel center brands belong to TravelCenters of America?', o: ['TA and Petro', 'Love\'s and Speedco', 'Two fuel card brands', 'Two parts distributors'], a: 0, e: 'TA and Petro are TravelCenters of America brands.' },
      { t: 'mc', q: 'What is RoadSquad?', o: ['TA\'s roadside service brand', 'A tire size', 'A fuel card', 'A telematics device'], a: 0, e: 'Confirm its current coverage before relying on it.' },
      { t: 'tf', q: 'Every TA Truck Service location is open 24/7.', a: false, e: 'Hours and bay counts differ by location. Call ahead.' }
    ],
    sources: [
      ['TA Petro — New TA Truck Service center in Lake City, FL', 'https://www.ta-petro.com/blog/new-ta-truck-service-center-now-open-in-lake-city-florida/'],
      ['Truck Parts & Service — TA opens new 24/7/365 service facility', 'https://www.truckpartsandservice.com/home/article/14978797/ta-opens-new-247365-service-facility'],
      ['Fleet Maintenance — Truck and travel stops in the roadside breakdown business', 'https://www.fleetmaintenance.com/in-the-bay/article/21280220/truck-and-travel-stops-loom-large-in-roadside-breakdown-business'],
      ['Truckers News — TA Petro pauses on-highway emergency roadside service', 'https://www.truckersnews.com/news/article/15770898/ta-petro-pauses-onhighway-emergency-roadside-assistance-service']
    ]
  }
);

/* Register the added platforms in the lookup built by 03l-software.js. */
SOFTWARE.forEach((s) => SOFTWARE_MAP.set(s.id, s));
