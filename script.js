/* =========================================================================
   MAINTENANCE COORDINATOR ACADEMY — script.js
   Structure:
     1. Content data   (tracks → modules → lessons → blocks/questions)
     2. Practice data  (glossary, flashcards, scenarios, trees, exercises, fleet)
     3. Assessments    (beginner exam, advanced project, expert simulation)
     4. Engine         (state, router, renderers, quiz/exercise/sim engines, UI)
   Content blocks are plain objects rendered by renderBlocks(); add lessons by
   appending objects — no HTML changes needed.
   ========================================================================= */
(function () {
'use strict';

/* ---------------------------------------------------------------------------
   1. CONTENT — BEGINNER: Maintenance Coordinator Fundamentals
   --------------------------------------------------------------------------- */
const BEGINNER = {
  id: 'beginner',
  level: 'Beginner',
  title: 'Maintenance Coordinator Fundamentals',
  short: 'Fundamentals',
  icon: 'grad',
  color: 'var(--track-beginner)',
  summary: 'Start from zero. Learn how a trucking company runs, what the Maintenance Coordinator does, the basic parts of a truck, and how to handle a maintenance call from first report to closed case.',
  outcomes: ['Understand fleet structure and every department you work with', 'Turn vague driver complaints into actionable maintenance information', 'Recognize safety-critical situations', 'Run the complete maintenance workflow and document it properly'],
  modules: [
    /* ---------------- M1 ---------------- */
    {
      id: 'm1', title: 'Introduction to Trucking', summary: 'How a trucking company makes money, how a fleet is organized, and who does what.',
      lessons: [
        {
          id: 'l1', title: 'How a Trucking Company Works', minutes: 12,
          objectives: ['Explain how a trucking company generates revenue', 'Describe how a fleet is structured and identified', 'Tell the difference between a tractor and a trailer'],
          body: [
            `A trucking company moves freight for customers. A shipper needs goods moved from point A to point B; the carrier supplies a truck, a trailer and a driver, and gets paid for the load — usually by the mile or by the load. <strong>Every hour a truck cannot run is an hour it cannot earn.</strong> That single fact is why maintenance coordination exists.`,
            { h: 'The fleet' },
            `The collection of vehicles a company operates is its <strong>fleet</strong>. Each vehicle is an asset tracked by a <strong>unit number</strong> (for example <span class="mono">T-114</span> for a tractor or <span class="mono">TR-532</span> for a trailer). Unit numbers are how everyone — drivers, dispatch, shops and you — refer to equipment. Each unit also has a 17-character [[VIN]] that uniquely identifies the vehicle.`,
            { tiles: [
              { icon: 'truck', title: 'Tractors (power units)', text: 'The truck that has the engine, cab and drive axles. Sleeper tractors have a bed for long-haul drivers; day cabs are used for local work.' },
              { icon: 'layers', title: 'Trailers', text: 'Carry the freight. Common types: dry van (enclosed box), reefer (refrigerated), flatbed, tanker.' },
              { icon: 'users', title: 'Drivers', text: 'Assigned to a tractor, hauling different trailers load to load. They are your eyes and ears on the road.' },
              { icon: 'pin', title: 'Terminals & yards', text: 'Company locations where equipment is parked, dispatched and sometimes repaired in an in-house shop.' }
            ] },
            { h: 'Tractor vs trailer' },
            `A tractor and trailer are separate vehicles with separate unit numbers, separate maintenance schedules and separate repair histories. They connect through the [[Fifth wheel]] on the tractor, which locks onto the trailer's [[Kingpin]]. Air lines (connected with [[Glad hands]]) and an electrical cord carry brake air and lighting power from tractor to trailer.`,
            { table: { head: ['', 'Tractor', 'Trailer'], rows: [
              ['Purpose', 'Provides power, steering, braking control', 'Carries the cargo'],
              ['Has an engine?', 'Yes', 'No (except a reefer unit\'s small engine for cooling)'],
              ['Typical issues', 'Engine, aftertreatment, electrical, tires, brakes', 'Tires, brakes, lights, doors, landing gear, reefer unit'],
              ['Tracked by', 'Mileage and engine hours', 'Mileage/time; reefer units also by hours']
            ] } },
            { callout: { kind: 'info', title: 'Why it matters to you', text: 'When a driver says "the truck has a problem," your first job is to confirm which unit — tractor or trailer — and its unit number. Opening a case on the wrong unit corrupts repair history.' } }
          ],
          example: { title: 'One load, many moving parts', text: `A driver in tractor <span class="mono">T-114</span> picks up trailer <span class="mono">TR-532</span> loaded with retail goods in Dallas, delivering to Atlanta tomorrow at 08:00. If T-114 develops a problem, the load can sometimes be saved by sending another tractor to pull TR-532. If TR-532 has a problem, the load itself may be stuck. Knowing which unit is affected changes your entire plan.` },
          practical: { title: 'Read a unit assignment', blocks: [
            { msg: { kind: 'note', title: 'Dispatch board entry', text: 'Driver: M. Reyes   Tractor: T-114   Trailer: TR-532 (Dry van)\nLoad #48213   PU: Dallas, TX 06/12 14:00   DEL: Atlanta, GA 06/13 08:00' } },
            `Before any maintenance call, a coordinator glances at this line and knows: who is driving, which two units are involved, what the load is, and when it is due. If the driver reports "a trailer tire is low," you immediately know the case belongs to <strong>TR-532</strong>, not T-114, and that there is a delivery deadline at 08:00.`
          ] },
          check: [
            { t: 'mc', q: 'Why does downtime matter so much to a trucking company?', o: ['Trucks lose value faster when parked', 'A truck that cannot run cannot earn revenue', 'Drivers are paid more when trucks are down', 'Parked trucks require more insurance'], a: 1, e: 'Trucks earn money by moving freight. Every hour of downtime is lost earning capacity — this is the core reason maintenance coordination exists.' },
            { t: 'tf', q: 'A tractor and the trailer it is pulling share the same unit number and repair history.', a: false, e: 'They are separate assets with separate unit numbers, maintenance schedules and repair histories. Always confirm which unit has the issue.' }
          ],
          takeaways: ['Trucking revenue depends on equipment moving — downtime is lost revenue.', 'Every vehicle is tracked by a unit number and a 17-character VIN.', 'Tractors provide power; trailers carry freight. They are separate units with separate histories.', 'Always identify the exact unit before opening a maintenance case.']
        },
        {
          id: 'l2', title: 'Who\'s Who: Roles and Departments', minutes: 14,
          objectives: ['Identify the key roles in a trucking company', 'Explain what each department needs from maintenance', 'Describe how departments interact during a breakdown'],
          body: [
            `A Maintenance Coordinator sits at the center of several departments. You rarely turn a wrench, but you connect the people who do — and the people who depend on the truck being ready.`,
            { tiles: [
              { icon: 'users', title: 'Driver', text: 'Operates the vehicle, performs pre-trip and post-trip inspections, reports defects. Primary source of information about a problem.' },
              { icon: 'route', title: 'Dispatcher', text: 'Assigns loads to drivers and tracks them to delivery. Needs to know if and when a truck can move.' },
              { icon: 'clipboard', title: 'Maintenance Coordinator', text: 'Receives maintenance issues, arranges repairs with the right vendor, tracks progress and communicates status. Owns the case.' },
              { icon: 'bar', title: 'Fleet Manager', text: 'Responsible for the fleet as a whole: budgets, policies, vendor relationships, equipment decisions. Approves larger repairs.' },
              { icon: 'wrench', title: 'Technician', text: 'Diagnoses and repairs the vehicle — in-house or at an outside shop. The person qualified to make mechanical decisions.' },
              { icon: 'layers', title: 'Parts Department', text: 'Sources, stocks and tracks parts. Knows lead times and alternatives.' },
              { icon: 'shield', title: 'Safety Department', text: 'Ensures compliance with regulations (inspections, driver qualifications, hours of service) and investigates incidents.' },
              { icon: 'activity', title: 'Operations', text: 'The broader team that plans capacity, customer commitments and daily execution. Maintenance decisions affect their plan.' }
            ] },
            { h: 'How departments interact' },
            `During a typical breakdown, information flows in a loop. The driver reports to you (or to dispatch, who routes it to you). You gather facts, decide urgency and arrange a vendor. Dispatch needs your ETA so they can protect the load. The technician needs your complaint details. The fleet manager needs to approve anything outside your authority. Safety needs to know if the event involves a safety-critical defect or regulatory issue.`,
            { flow: ['Driver', 'Coordinator', 'Vendor / Technician', 'Coordinator', 'Dispatch & Ops'], hl: [1, 3] },
            { callout: { kind: 'tip', title: 'You are the hub', text: 'Most delays in maintenance come from information not reaching the right person. Your value is making sure each party knows what they need, when they need it.' } }
          ],
          example: { title: 'Who needs to know?', text: `Driver R. Chen calls: the trailer ABS warning light is on. You open a case on the trailer, arrange an inspection at a shop near the route, and then: tell <strong>dispatch</strong> the expected delay, tell the <strong>shop</strong> the complaint and unit details, and — because ABS is a brake-system issue — follow your company procedure, which may include notifying the <strong>safety department</strong>.` },
          practical: { title: 'Map the conversation', blocks: [
            { dialog: [['Driver', 'Hey, my check engine light just came on. Truck seems fine though.'], ['You', 'Thanks for calling it in. Which unit are you in, and where are you right now?'], ['Driver', 'T-120, I\'m on I-40 eastbound near mile marker 212.'], ['note', 'You open a case on T-120, then contact a shop and notify dispatch of a possible delay.']] },
            `Notice how the coordinator starts with identification (unit, location) before troubleshooting. Every department downstream depends on those two facts.`
          ] },
          check: [
            { t: 'mc', q: 'Who is qualified to make the final mechanical diagnosis of a problem?', o: ['The Maintenance Coordinator', 'The Dispatcher', 'The Technician', 'The Driver'], a: 2, e: 'Technicians diagnose and repair. The coordinator gathers information and coordinates — but does not make mechanical diagnoses.' },
            { t: 'scenario', q: 'A tractor will be in the shop for 6 hours. Which department most urgently needs your ETA?', o: ['Parts', 'Dispatch', 'Safety', 'Accounting'], a: 1, e: 'Dispatch must decide whether the load can still make its appointment, needs a recovery truck, or requires the customer to be notified.' }
          ],
          takeaways: ['The coordinator connects drivers, dispatch, vendors, parts, safety and management.', 'Technicians make mechanical decisions; coordinators make coordination decisions.', 'Dispatch depends on your ETAs to protect loads and customer commitments.', 'Unit number and location are always the first two facts you collect.']
        }
      ]
    },
    /* ---------------- M2 ---------------- */
    {
      id: 'm2', title: 'What Does a Maintenance Coordinator Do?', summary: 'The core responsibilities — and the boundaries — of the role.',
      lessons: [
        {
          id: 'l1', title: 'Core Responsibilities', minutes: 13,
          objectives: ['List the daily responsibilities of a Maintenance Coordinator', 'Explain what "owning a case" means', 'Describe how a coordinator monitors the fleet'],
          body: [
            `A Maintenance Coordinator keeps equipment safe and moving by managing maintenance events from start to finish. You are measured on how quickly and correctly equipment returns to service — and on how well everyone stays informed along the way.`,
            { timeline: [
              { title: 'Monitoring vehicles', text: 'Watch fleet status: open repairs, upcoming PMs, fault code alerts from telematics, and units that are down.', owner: 'Ongoing' },
              { title: 'Receiving maintenance requests', text: 'Requests arrive by phone, message, driver inspection reports (DVIRs), telematics alerts or from dispatch.', owner: 'Intake' },
              { title: 'Understanding driver complaints', text: 'Ask structured questions to turn a vague report into a clear description of the problem.', owner: 'Intake' },
              { title: 'Opening a maintenance case', text: 'Create a record (case or work order) with the unit, complaint, location, mileage, time and urgency.', owner: 'Documentation' },
              { title: 'Finding repair facilities', text: 'Identify a qualified vendor near the unit: in-house shop, dealer, independent shop, mobile service or tow.', owner: 'Coordination' },
              { title: 'Coordinating repairs', text: 'Send complaint details to the shop, confirm arrival, obtain diagnosis and estimate, and route approvals per company procedure.', owner: 'Coordination' }
            ] },
            { callout: { kind: 'info', title: 'Owning the case', text: 'Once you open a case, you are responsible for it until it is closed. That means following up without being asked, updating every stakeholder, and never letting a unit "sit" without a next step.' } }
          ],
          example: { title: 'A morning on the desk', text: `At 07:10 a telematics alert shows <span class="mono">T-131</span> logged a low coolant level fault. At 07:25 a driver reports a trailer door that will not latch. At 07:40 dispatch asks when <span class="mono">T-108</span> will be out of the shop. A coordinator handles all three — opening cases, prioritizing by safety and load impact, and chasing updates — while keeping notes on each.` },
          practical: { title: 'Sort the morning inbox', exercise: {
            type: 'classify', prompt: 'Which responsibility does each item fall under?', categories: ['Monitoring', 'Intake', 'Coordination'],
            items: [
              { text: 'Telematics shows T-131 logged a low coolant fault overnight', answer: 'Monitoring', why: 'Watching alerts and fleet status is monitoring.' },
              { text: 'Driver calls: trailer door won\'t latch', answer: 'Intake', why: 'A new request coming in from a driver is intake.' },
              { text: 'Calling the shop for T-108\'s diagnosis and estimate', answer: 'Coordination', why: 'Working with a vendor on an existing repair is coordination.' },
              { text: 'Reviewing which units are due for PM next week', answer: 'Monitoring', why: 'Tracking upcoming maintenance is fleet monitoring.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'What does "owning a case" mean?', o: ['You pay for the repair', 'You are responsible for the case until it is closed, including follow-up and communication', 'You must personally inspect the vehicle', 'You decide which parts the technician uses'], a: 1, e: 'Ownership means accountability for the case\'s progress and communication until it is closed.' },
            { t: 'tf', q: 'Maintenance requests only come from drivers calling in.', a: false, e: 'Requests also come from inspection reports, telematics alerts, dispatch, PM schedules and shops.' }
          ],
          takeaways: ['Coordinators monitor the fleet, take in requests, and coordinate repairs.', 'Every issue becomes a documented case with a clear owner.', 'Requests come from many channels — drivers, DVIRs, telematics, dispatch.', 'A case never sits without a next step.']
        },
        {
          id: 'l2', title: 'Tracking, Follow-Up and Closing the Loop', minutes: 12,
          objectives: ['Explain why downtime must be tracked', 'Describe effective follow-up habits', 'Distinguish what a coordinator does and does not do'],
          body: [
            `Opening the case is the easy part. The work that separates a strong coordinator from an average one happens after the truck reaches the shop.`,
            { timeline: [
              { title: 'Tracking downtime', text: 'Record when the unit went down, arrived at the shop, was diagnosed, repaired, and released. Downtime is one of the most watched numbers in a fleet.' },
              { title: 'Following up', text: 'Set a follow-up time on every open case. Shops are busy; a polite, timely check-in keeps your unit moving.' },
              { title: 'Updating operations', text: 'Push status changes to dispatch without waiting to be asked: diagnosis received, parts ordered, ETA changed, unit released.' },
              { title: 'Closing cases', text: 'Confirm the repair is complete, the driver has the unit, and the complaint is resolved — then close.' },
              { title: 'Documentation', text: 'Every step is written down: who you talked to, what was decided, times, costs and results.' }
            ] },
            { h: 'What a coordinator does — and does not do' },
            { compare: {
              yes: { title: 'Does', items: ['Gathers clear information from drivers', 'Chooses and schedules appropriate vendors', 'Routes estimates for approval per company procedure', 'Tracks progress and downtime', 'Communicates status and ETAs', 'Documents everything'] },
              no: { title: 'Does not', items: ['Diagnose mechanical problems or tell a technician how to repair', 'Tell a driver to keep operating a vehicle with a safety defect', 'Approve spending beyond their authority', 'Guess at information that should be confirmed', 'Leave a case without a next action'] }
            } },
            { callout: { kind: 'safety', title: 'Never override safety', text: 'Pressure to "just get the load delivered" is common. A coordinator never instructs a driver to operate a vehicle that the driver, a technician or regulations consider unsafe.' } }
          ],
          example: { title: 'Silent cases cost money', text: `A shop received <span class="mono">T-108</span> Monday morning. Nobody followed up. Wednesday, dispatch asked for an ETA — the shop had been waiting since Monday afternoon for approval on the estimate. Two days of downtime came from a missing phone call, not a mechanical problem.` },
          practical: { title: 'Set a follow-up rhythm', blocks: [
            { table: { head: ['Case stage', 'Typical follow-up'], rows: [
              ['Vendor dispatched to roadside', 'Confirm ETA of technician; check again at ETA'],
              ['Unit arrived at shop', 'Confirm check-in and expected diagnosis time'],
              ['Waiting on diagnosis', 'Check at the promised time; escalate if missed'],
              ['Parts on order', 'Confirm part ETA and tracking; check daily'],
              ['Repair in progress', 'Confirm ETR; update dispatch on any change']
            ] } },
            `Company procedures differ — but the principle is the same: every open case has a scheduled next touchpoint.`
          ] },
          check: [
            { t: 'wwyd', q: 'A shop promised a diagnosis by 14:00. It is 14:45 and you have heard nothing. What do you do?', o: ['Wait — they will call when ready', 'Call the shop, get a status, and update dispatch with any change', 'Tell dispatch the truck will be ready at 17:00', 'Send the truck to a different shop immediately'], a: 1, e: 'Follow up proactively, get facts, then communicate. Never invent an ETA, and don\'t move a unit without reason.' },
            { t: 'tf', q: 'A coordinator should tell the technician which part to replace based on the driver\'s description.', a: false, e: 'Diagnosis belongs to the technician. The coordinator passes along the complaint details clearly and accurately.' }
          ],
          takeaways: ['Downtime tracking starts the moment a unit goes down.', 'Every open case has a scheduled follow-up.', 'Update dispatch proactively — don\'t wait to be asked.', 'Coordinators coordinate; technicians diagnose; safety is never negotiable.']
        }
      ]
    },
    /* ---------------- M3 ---------------- */
    {
      id: 'm3', title: 'Basic Truck Knowledge', summary: 'The major systems of a tractor and trailer — enough to understand, not to repair.',
      lessons: [
        {
          id: 'l1', title: 'Powertrain and Engine Systems', minutes: 16,
          objectives: ['Identify the main powertrain components', 'Understand what the cooling, fuel and exhaust systems do', 'Recognize aftertreatment components and why they matter'],
          body: [
            `You do not need to be a mechanic — but you do need to understand what a technician is talking about. Explore the interactive diagram, then read the system summaries below.`,
            { widget: 'truck' },
            { accordion: [
              { title: 'Engine', text: 'Most heavy trucks use a diesel engine. It turns fuel into power. Engine issues show up as warning lights, loss of power, smoke, unusual noise, or leaks.' },
              { title: 'Transmission', text: 'Transfers engine power to the drivetrain through gears. Many modern trucks use automated manual transmissions (AMTs). Issues: failure to shift, grinding, warning messages, stuck in gear.' },
              { title: 'Driveshaft & differential', text: 'The driveshaft carries power to the rear axles. The differential lets the wheels on each side turn at different speeds in turns. Issues: vibration, clunking, whining, leaks.' },
              { title: 'Cooling system', text: 'Radiator, coolant, water pump, thermostat, fan and hoses keep the engine at operating temperature. Overheating can severely damage an engine.' },
              { title: 'Fuel system', text: 'Tanks, lines, filters, pumps and injectors deliver diesel to the engine. Issues: hard starting, loss of power, fuel leaks, contaminated fuel.' },
              { title: 'Exhaust & aftertreatment', text: 'Modern diesels clean exhaust with a Diesel Particulate Filter (DPF), Selective Catalytic Reduction (SCR) using Diesel Exhaust Fluid (DEF), and often Exhaust Gas Recirculation (EGR). Faults here commonly cause engine derates (reduced power).' }
            ] },
            { callout: { kind: 'info', title: 'Aftertreatment in one sentence', text: 'The [[DPF]] traps soot and periodically burns it off ("regeneration"); the [[SCR]] system injects [[DEF]] to convert NOx into nitrogen and water; [[EGR]] recirculates some exhaust to lower combustion temperature. Problems in any of these can trigger a derate.' } }
          ],
          example: { title: 'The derate call', text: `A driver reports the truck "won\'t go over 5 mph" and there is a message about DEF. You don\'t need to fix it — but because you know DEF feeds the SCR system and that aftertreatment faults commonly trigger derates, you ask the right follow-ups: Is the DEF level low? Any other warning lights? Is the truck in a safe place? That information gets the right vendor there faster.` },
          practical: { title: 'Translate the technician', blocks: [
            { dialog: [['Technician', 'We found the DPF differential pressure sensor reading high. Truck couldn\'t complete a regen. We\'re going to do a parked regen and replace the sensor.'], ['You', 'Understood — so the filter wasn\'t cleaning itself because of a bad sensor reading. What\'s the ETR, and do you have the sensor in stock?']] },
            `Knowing the vocabulary lets you ask the two questions that matter to operations: <strong>when</strong> will it be done, and <strong>is anything holding it up</strong>.`
          ] },
          check: [
            { t: 'mc', q: 'What does the DPF do?', o: ['Injects fluid to reduce NOx', 'Traps soot from exhaust and burns it off during regeneration', 'Cools the engine', 'Controls transmission shifting'], a: 1, e: 'The Diesel Particulate Filter traps soot; regeneration burns the soot off.' },
            { t: 'mc', q: 'A driver reports low power and a DEF warning. Which system is most likely involved?', o: ['Cooling', 'Aftertreatment', 'Steering', 'Suspension'], a: 1, e: 'DEF is part of the aftertreatment (SCR) system. Aftertreatment faults commonly cause derates.' }
          ],
          takeaways: ['Engine, transmission, driveshaft and differential form the powertrain.', 'Cooling and fuel systems keep the engine running safely.', 'DPF, SCR/DEF and EGR make up aftertreatment — a frequent cause of derates.', 'Know enough vocabulary to ask about ETR and parts — leave diagnosis to technicians.']
        },
        {
          id: 'l2', title: 'Chassis, Brakes, Tires and Trailer', minutes: 16,
          objectives: ['Understand how air brakes work at a basic level', 'Identify tire, suspension, steering and electrical components', 'Name the main trailer components'],
          body: [
            { h: 'Brakes' },
            `Heavy trucks use <strong>air brakes</strong>. A compressor builds air pressure stored in tanks; pressing the pedal sends air to brake chambers at each wheel. Parking/emergency brakes are held off by air pressure — if pressure drops too low, spring brakes apply. Trucks also have [[ABS]], which prevents wheel lock-up during hard braking.`,
            { callout: { kind: 'safety', title: 'Brake issues are safety-critical', text: 'Air leaks, low-air warnings, brakes that pull, grind or don\'t release, and brake warning lights all require immediate attention. Brake defects are a common reason vehicles are placed out of service during inspections.' } },
            { h: 'Tires, suspension and steering' },
            { tiles: [
              { icon: 'target', title: 'Tires', text: 'Steer tires (front), drive tires (under the tractor\'s rear) and trailer tires. Watch for flats, blowouts, low pressure, uneven wear and damaged sidewalls.' },
              { icon: 'activity', title: 'Suspension', text: 'Air bags (air springs) or leaf springs support the load. Issues: leaning, air leaks, rough ride, broken springs.' },
              { icon: 'route', title: 'Steering', text: 'Steering gear, linkage and tie rods. Issues: loose steering, pulling, vibration, hard steering. Always safety-critical.' },
              { icon: 'zap', title: 'Electrical & battery', text: 'Batteries, alternator, starter, wiring and lighting. Issues: no-start, dim lights, warning messages, trailer lights out.' }
            ] },
            { h: 'Trailer components' },
            { table: { head: ['Component', 'What it does', 'Common issues'], rows: [
              ['Kingpin', 'Steel pin that locks into the tractor\'s fifth wheel', 'Wear, damage'],
              ['Glad hands & air lines', 'Connect tractor air supply to trailer brakes', 'Leaking seals, damaged lines'],
              ['Landing gear', 'Legs that support the front of a parked trailer', 'Won\'t crank, bent legs'],
              ['Lights & 7-way cord', 'Brake, turn and marker lights powered from the tractor', 'Lights out, corroded plugs'],
              ['Doors, floor & roof', 'Protect the cargo', 'Door won\'t latch, holes, damaged floor'],
              ['Reefer unit', 'Refrigeration unit on refrigerated trailers', 'Not cooling, alarms, fuel']
            ] } }
          ],
          example: { title: '"My trailer is leaning"', text: `A driver says the trailer looks like it\'s leaning to one side. With basic knowledge you recognize this could be a suspension air leak or a failed air bag — potentially affecting handling. You ask: Is there an audible air leak? Did any warning appear? Is the trailer loaded? Then you arrange an inspection rather than letting the unit continue on a guess.` },
          practical: { title: 'Match the symptom to the system', exercise: {
            type: 'classify', prompt: 'Which system is most likely involved?', categories: ['Brakes', 'Tires', 'Electrical', 'Suspension'],
            items: [
              { text: 'Low air warning buzzer keeps going off', answer: 'Brakes', why: 'Air pressure supplies the brake system; a low-air warning is a brake-system issue.' },
              { text: 'Trailer marker lights are out on the left side', answer: 'Electrical', why: 'Lighting is electrical — often a wiring or connector issue.' },
              { text: 'Visible bulge on the sidewall of a drive tire', answer: 'Tires', why: 'A sidewall bulge indicates internal tire damage — a blowout risk.' },
              { text: 'Trailer sits noticeably lower on one side', answer: 'Suspension', why: 'Uneven ride height points toward suspension (air bag/leak).' }
            ]
          } },
          check: [
            { t: 'mc', q: 'On a truck with air brakes, what happens if air pressure drops too low?', o: ['Nothing — brakes are hydraulic', 'Spring brakes can apply automatically', 'The engine shuts off', 'The ABS light turns off'], a: 1, e: 'Spring (parking/emergency) brakes are held off by air pressure. If pressure drops too low they can apply.' },
            { t: 'tf', q: 'Brake and steering issues should always be treated as safety-critical.', a: true, e: 'Both directly affect the driver\'s ability to control and stop the vehicle.' }
          ],
          takeaways: ['Heavy trucks use air brakes; low-air situations are safety-critical.', 'Know tire positions: steer, drive and trailer.', 'Suspension, steering and electrical problems each have distinct symptoms.', 'Trailers have their own components — kingpin, glad hands, landing gear, lights, reefer.']
        }
      ]
    },
    /* ---------------- M4 ---------------- */
    {
      id: 'm4', title: 'Understanding Driver Complaints', summary: 'Turn vague reports into clear, useful maintenance information.',
      lessons: [
        {
          id: 'l1', title: 'From "Weird Noise" to Useful Information', minutes: 14,
          objectives: ['Use a structured set of questions to clarify a complaint', 'Separate facts from guesses', 'Write a clear complaint description'],
          body: [
            `Drivers are experts at driving — not always at describing mechanical problems. A report like <em>"the truck is making a weird noise"</em> is a starting point. Your job is to turn it into something a technician can act on.`,
            { h: 'The seven questions' },
            { timeline: [
              { title: 'What happened?', text: 'Ask the driver to describe it in their own words. What did they see, hear, smell or feel?' },
              { title: 'When did it start?', text: 'Suddenly or gradually? Today or days ago? After a specific event (hitting a pothole, fueling, a repair)?' },
              { title: 'Where is it?', text: 'Front/rear, left/right, tractor or trailer, engine area, under the cab, at the wheels?' },
              { title: 'Is it getting worse?', text: 'Constant, intermittent, or worsening? Does it happen only when braking, turning, accelerating, at speed?' },
              { title: 'Is the vehicle safe?', text: 'Can the driver control, steer and stop the vehicle normally? Is the driver in a safe location?' },
              { title: 'Are warning lights present?', text: 'Which lights or messages are on the dash? Any codes shown? Did any alarm sound?' },
              { title: 'Is performance affected?', text: 'Loss of power, speed limited, poor shifting, overheating, pulling?' }
            ] },
            { callout: { kind: 'tip', title: 'Facts, not guesses', text: 'Drivers may say "I think it\'s the turbo." Record it as the driver\'s opinion, but describe the symptom factually: "Loud whistling from engine area under acceleration, started 30 min ago, no warning lights."' } }
          ],
          example: { title: 'Before and after', text: `Before: <em>"Truck making weird noise."</em><br>After: <em>"T-114 — grinding noise from front left wheel area when braking, started this morning, getting louder. No warning lights. Driver reports truck stops normally but noise is constant under braking. Currently parked at Pilot, exit 118, I-20 EB."</em> The second version tells a vendor what to bring and tells you how urgent it is.` },
          practical: { title: 'Watch the interview', blocks: [
            { dialog: [
              ['Driver', 'Truck\'s making a weird noise.'],
              ['You', 'Okay — first, are you in a safe spot right now?'],
              ['Driver', 'Yeah, I\'m parked at a truck stop.'],
              ['You', 'Good. Can you describe the noise — grinding, squealing, knocking, hissing?'],
              ['Driver', 'Grinding. Kind of metal on metal.'],
              ['You', 'When do you hear it — all the time, or when you brake, turn or accelerate?'],
              ['Driver', 'Mostly when I brake. Front left, I think.'],
              ['You', 'When did it start, and is it getting worse?'],
              ['Driver', 'This morning. It\'s louder now.'],
              ['You', 'Any warning lights on the dash? And is the truck stopping normally?'],
              ['Driver', 'No lights. It stops okay, just loud.']
            ] },
            `In under two minutes the coordinator established: safe location, type of noise, when it occurs, location on the vehicle, onset and trend, warning lights, and braking performance. Grinding during braking is a brake concern — this will be treated as urgent.`
          ] },
          check: [
            { t: 'mc', q: 'Which question should come first when a driver reports a problem?', o: ['What part do you think is broken?', 'Are you and the vehicle in a safe location?', 'How much will the repair cost?', 'Who was the last driver?'], a: 1, e: 'Safety first. Confirm the driver is safe before gathering technical details.' },
            { t: 'scenario', q: 'A driver says, "I think it\'s the alternator." How should you record this?', o: ['Complaint: bad alternator', 'Record the symptoms factually and note the driver\'s opinion separately', 'Ignore the driver\'s opinion', 'Order an alternator right away'], a: 1, e: 'Document observed symptoms as facts. Diagnosis is confirmed by a technician.' }
          ],
          takeaways: ['Use the seven questions every time: what, when, where, trend, safety, lights, performance.', 'Confirm safety before technical detail.', 'Record symptoms as facts; label opinions as opinions.', 'A good complaint description tells a vendor what to bring and you how urgent it is.']
        },
        {
          id: 'l2', title: 'Complaint Interviews in Practice', minutes: 14,
          objectives: ['Apply the seven questions to realistic calls', 'Extract key case data from a conversation', 'Recognize when an answer changes urgency'],
          body: [
            `Real calls are messy. Drivers are stressed, tired, or on a tight schedule. Stay calm, keep questions short, and write while you listen.`,
            { tabs: [
              { label: 'Call 1 · Vibration', body: [
                { dialog: [['Driver', 'Getting a bad vibration at highway speed.'], ['You', 'Where do you feel it — steering wheel, seat, whole truck?'], ['Driver', 'Steering wheel mostly, above 55.'], ['You', 'Did it start suddenly? Did you hit anything?'], ['Driver', 'Started after I hit a pothole an hour ago.']] },
                `<strong>Why it matters:</strong> steering-wheel vibration after an impact points to the steer tires/wheels or front end — a steering/tire concern that should be inspected before continuing at speed.`
              ] },
              { label: 'Call 2 · Warning light', body: [
                { dialog: [['Driver', 'Got a yellow light on the dash.'], ['You', 'Can you describe or read the symbol or message?'], ['Driver', 'Says "Check Engine". No other lights.'], ['You', 'Any change in power, noise, smoke or temperature?'], ['Driver', 'Nope, driving normal.']] },
                `<strong>Why it matters:</strong> an amber check engine light with normal operation is usually not an immediate stop — but it needs a scheduled diagnosis. A red light or a stop-engine warning would change urgency completely.`
              ] },
              { label: 'Call 3 · Smell', body: [
                { dialog: [['Driver', 'I smell something hot, kind of sweet.'], ['You', 'Is the temperature gauge normal? Any steam?'], ['Driver', 'Gauge is creeping up, a little steam from the hood.'], ['You', 'Please pull over safely as soon as possible and shut down per your training. Tell me when you\'re stopped.']] },
                `<strong>Why it matters:</strong> a sweet smell plus rising temperature and steam suggests a coolant leak and overheating. Continuing could destroy the engine. This becomes an immediate roadside case.`
              ] }
            ] },
            { callout: { kind: 'warning', title: 'Answers change urgency', text: 'Listen for words that escalate a case: "smoke," "steam," "can\'t stop," "pulling hard," "red light," "stop engine," "air leak," "blowout," "fire," "fluid pouring." When you hear them, prioritize safety instructions first.' } }
          ],
          example: { title: 'The overlooked detail', text: `A driver reported a "small" oil leak. The coordinator asked how small — the driver said "a few drops." The coordinator then asked whether the oil pressure gauge and warning lights were normal (yes) and scheduled an inspection at the next planned stop. A different coordinator on another call skipped the question and later learned the "small" leak was a steady stream that had already triggered a low oil pressure warning.` },
          practical: { title: 'Extract the case details', exercise: {
            type: 'extract', sourceLabel: 'Call transcript — 09:42',
            source: 'Driver (J. Patel): Hi, this is Jay in truck 127. I\'m at the Love\'s in Amarillo, exit 76 off I-40.\nMy low air warning has been coming on and off and I can hear a hissing near the back of the tractor.\nIt started maybe 20 minutes ago. Brakes still work but the gauge drops fast when I press the pedal.\nOdometer says 412,880.',
            fields: [
              { label: 'Unit number', accept: ['127', 't-127', 't127'] },
              { label: 'Location', accept: ['amarillo', 'exit 76', "love's", 'loves'] },
              { label: 'Odometer (miles)', accept: ['412880', '412,880'] },
              { label: 'Primary symptom', accept: ['air', 'leak', 'hiss', 'low air'], full: true, placeholder: 'Describe the complaint factually' }
            ]
          } },
          check: [
            { t: 'wwyd', q: 'During a call the driver says, "There\'s smoke coming from the wheel." What is your first action?', o: ['Ask when the truck last had a PM', 'Instruct the driver to stop safely as soon as possible and follow their emergency training', 'Look up the nearest shop', 'Ask whether it is a tractor or trailer wheel'], a: 1, e: 'Smoke from a wheel end can indicate a dragging brake or failed bearing and potential fire. Safety first; details second.' },
            { t: 'tf', q: 'An amber check engine light with no change in performance is always an immediate stop.', a: false, e: 'Usually not an immediate stop, but it needs diagnosis. Red lights, stop-engine warnings and performance changes raise urgency. Follow company procedure.' }
          ],
          takeaways: ['Keep questions short and write while listening.', 'Escalation words — smoke, steam, can\'t stop, red light — change priorities instantly.', 'Always capture unit, location, mileage, symptom and time.', 'Quantify vague words like "small" or "a little".']
        }
      ]
    },
    /* ---------------- M5 ---------------- */
    {
      id: 'm5', title: 'Safety and Roadside Situations', summary: 'Recognize safety-critical problems and when a vehicle should not continue.',
      lessons: [
        {
          id: 'l1', title: 'Breakdowns, Safety-Critical Issues and Stop Decisions', minutes: 14,
          objectives: ['Distinguish a breakdown from a maintenance issue', 'Identify safety-critical defects', 'Know when a vehicle should not continue operating'],
          body: [
            { compare: {
              yes: { title: 'Maintenance issue', items: ['Vehicle can continue safely', 'Repair can be scheduled at a convenient time/location', 'Examples: amber light with normal operation, minor interior issue, upcoming PM'] },
              no: { title: 'Breakdown', items: ['Vehicle cannot continue — or should not', 'Requires roadside service or tow', 'Examples: won\'t start, loss of brakes, blowout, severe overheating, engine shutdown'] }
            } },
            { h: 'Safety-critical categories' },
            `Some defects directly affect the ability to steer, stop, or be seen, or create fire or cargo-securement risk. These are treated as safety-critical regardless of schedule pressure.`,
            { tiles: [
              { icon: 'alert', title: 'Brakes', text: 'Air leaks, low air, brakes not releasing or dragging, brake warning lights.' },
              { icon: 'route', title: 'Steering', text: 'Loose, hard or erratic steering; pulling; damaged steering components.' },
              { icon: 'target', title: 'Tires & wheels', text: 'Flats, blowouts, bulges, exposed cords, loose or missing lug nuts.' },
              { icon: 'zap', title: 'Lighting', text: 'Headlights, brake lights or turn signals not working.' },
              { icon: 'thermo', title: 'Overheating & fire risk', text: 'Rising temperature, steam, smoke, fuel leaks.' },
              { icon: 'layers', title: 'Coupling', text: 'Fifth wheel or kingpin problems, trailer separation risk.' }
            ] },
            { callout: { kind: 'safety', title: 'Stop criteria', text: 'A vehicle should not continue when the driver cannot safely control, steer or stop it; when there is smoke, fire or fluid pouring; when a red stop-engine warning appears; when a tire has failed; or when a defect would place it out of service under inspection standards. When in doubt, stop safely and get a qualified technician.' } },
            `In the United States, the Federal Motor Carrier Safety Administration ([[FMCSA]]) sets rules for commercial vehicles, and the Commercial Vehicle Safety Alliance publishes [[OOS]] (out-of-service) criteria used during roadside inspections. Your company\'s safety department is the authority on how these apply.`
          ],
          example: { title: 'Pressure vs. safety', text: `Dispatch calls: the load in <span class="mono">T-120</span> is due in 3 hours and the driver says the brakes "feel soft." Dispatch asks if the driver can "just finish the run." A professional coordinator says no — brake performance complaints require inspection first — and immediately works on the fastest safe option: a mobile brake technician or the nearest capable shop, plus a recovery plan for the load.` },
          practical: { title: 'Continue or stop?', exercise: {
            type: 'classify', prompt: 'Should the vehicle continue, or stop for service first?', categories: ['Stop — get service', 'Continue — schedule repair'],
            items: [
              { text: 'Amber check engine light, truck driving normally', answer: 'Continue — schedule repair', why: 'Needs diagnosis soon, but performance is normal. Follow company procedure.' },
              { text: 'Steer tire bulge on the sidewall', answer: 'Stop — get service', why: 'Sidewall damage on a steer tire is a blowout risk affecting steering.' },
              { text: 'Red STOP ENGINE warning with rising temperature', answer: 'Stop — get service', why: 'Red stop-engine warnings mean stop safely now to prevent damage and hazards.' },
              { text: 'Driver seat adjustment lever is loose', answer: 'Continue — schedule repair', why: 'A comfort item that does not affect vehicle control can be scheduled.' },
              { text: 'Brake lights not working on the trailer', answer: 'Stop — get service', why: 'Following traffic cannot see the truck braking — a serious safety defect.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'Which of these is a breakdown rather than a maintenance issue?', o: ['PM due in 2,000 miles', 'Tractor won\'t start', 'Sleeper light flickering', 'Worn floor mat'], a: 1, e: 'A no-start means the unit cannot operate — it requires service before it can move.' },
            { t: 'wwyd', q: 'Dispatch asks you to let a driver continue with a brake issue to make an appointment. You:', o: ['Agree — the customer matters most', 'Decline, arrange the fastest safe repair, and help dispatch plan recovery', 'Tell the driver to drive slowly', 'Let the driver decide alone without support'], a: 1, e: 'Safety is non-negotiable. Your job is to find the fastest safe path and help protect the load another way.' }
          ],
          takeaways: ['A breakdown means the unit cannot or should not continue.', 'Brakes, steering, tires, lighting, overheating/fire and coupling are safety-critical.', 'Never pressure a driver to operate an unsafe vehicle.', 'Your safety department is the authority on regulatory questions.']
        },
        {
          id: 'l2', title: 'Common Roadside Situations', minutes: 15,
          objectives: ['Handle common roadside events', 'Give appropriate safety guidance without making mechanical decisions', 'Choose the right type of roadside help'],
          body: [
            `Roadside events follow a pattern: <strong>make it safe → gather facts → get the right help → communicate</strong>. The details differ by problem.`,
            { accordion: [
              { title: 'Tire failure', text: 'Driver should pull off safely, activate hazards and place warning devices as required. Gather: position (steer/drive/trailer, left/right, inside/outside), tire size if known, wheel damage, location. Usually a mobile tire service can respond.' },
              { title: 'Brake problems', text: 'Air leaks, low air warnings, dragging or smoking brakes, poor stopping. The vehicle should stop safely and not continue until inspected by a qualified technician. Arrange mobile brake service or a tow to a capable shop.' },
              { title: 'Engine problems', text: 'Unusual noise, smoke, oil pressure warnings, stop-engine lights. Red warnings: stop safely. Gather warning messages and any fault codes displayed.' },
              { title: 'Overheating', text: 'Rising gauge, high-temperature warning, steam, sweet coolant smell. Stop safely as soon as possible — continuing can destroy the engine. Do not have drivers open a hot radiator cap.' },
              { title: 'Warning lights', text: 'Identify color and message. Amber usually means "attention needed"; red usually means "stop / serious." Note any displayed codes. Follow manufacturer and company guidance.' },
              { title: 'Loss of power', text: 'Could be a derate (engine protection) from aftertreatment, sensor or fuel issues, or a more serious failure. Is the truck safe to move to a safe location? Any messages or codes?' },
              { title: 'Trailer problems', text: 'Lights out, air leaks at glad hands, door damage, landing gear, reefer alarms. For reefer loads, temperature control is time-critical — the cargo may be at risk.' }
            ] },
            { callout: { kind: 'safety', title: 'Your role in roadside safety', text: 'Remind drivers of safe-stop steps they are trained on (safe location, hazards, warning devices, stay clear of traffic). Do not instruct drivers to perform repairs they are not qualified or equipped for.' } },
            { table: { head: ['Situation', 'Typical help'], rows: [
              ['Flat / failed tire', 'Mobile tire service'],
              ['Minor air leak, light out, sensor', 'Mobile mechanic'],
              ['Engine won\'t run, major failure, unsafe to drive', 'Tow to a qualified shop / dealer'],
              ['Complex diagnostics (aftertreatment, electronics)', 'Dealer or shop with proper diagnostic tools'],
              ['Reefer failure with load', 'Reefer service + dispatch plan for cargo']
            ] } }
          ],
          example: { title: 'Blowout on I-10', text: `At 02:15 a driver reports a trailer tire blew out on I-10. The coordinator confirms the driver is safely on the shoulder with hazards on and triangles out, asks for position (trailer, rear axle, right side, outside tire) and exact location, then dispatches a 24-hour mobile tire service and updates dispatch with an ETA. The case note records every time stamp.` },
          practical: { title: 'Pick the right help', exercise: {
            type: 'classify', prompt: 'Choose the most appropriate first response for each event.', categories: ['Mobile tire service', 'Mobile mechanic', 'Tow to shop'],
            items: [
              { text: 'Trailer tire flat, truck otherwise fine, parked safely', answer: 'Mobile tire service', why: 'A tire vendor can replace it on site.' },
              { text: 'Engine shut down, will not restart, knocking noise before shutdown', answer: 'Tow to shop', why: 'A serious engine failure needs a shop — do not keep trying to restart.' },
              { text: 'Trailer marker light out at a rest area', answer: 'Mobile mechanic', why: 'A minor lighting repair can usually be done on site.' },
              { text: 'Steering suddenly very hard and pulling after impact', answer: 'Tow to shop', why: 'A steering failure makes the vehicle unsafe to drive.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'A driver reports steam from the hood and the temperature gauge rising. Best first instruction?', o: ['Keep driving to the next shop', 'Stop safely as soon as possible and follow shutdown training', 'Open the radiator cap to check coolant', 'Turn on the A/C'], a: 1, e: 'Overheating can destroy an engine. Stop safely. Never open a hot cooling system.' },
            { t: 'tf', q: 'For a reefer trailer with a failed refrigeration unit, the cargo may be at risk, making the situation time-critical.', a: true, e: 'Temperature-controlled cargo can spoil — coordinate reefer service and a dispatch plan quickly.' }
          ],
          takeaways: ['Roadside pattern: make it safe → gather facts → get the right help → communicate.', 'Match the vendor to the problem: tire service, mobile mechanic or tow.', 'Red warnings, overheating and brake problems mean stop safely.', 'Reefer failures put cargo at risk — treat as time-critical.']
        }
      ]
    },
    /* ---------------- M6 ---------------- */
    {
      id: 'm6', title: 'Maintenance Workflow', summary: 'The complete maintenance process from driver report to closed case.',
      lessons: [
        {
          id: 'l1', title: 'The Maintenance Workflow, Step by Step', minutes: 15,
          objectives: ['Recite the 12 steps of the maintenance workflow', 'Explain the purpose of each step', 'Identify who is involved at each step'],
          body: [
            `Every maintenance event — from a burned-out bulb to an engine failure — follows the same workflow. Click each step to see what happens and why it matters.`,
            { widget: 'workflow' },
            { callout: { kind: 'tip', title: 'Company procedure rules', text: 'Approval limits, preferred vendors and documentation systems differ between companies. The workflow stays the same — the details inside each step follow your company\'s procedure.' } }
          ],
          example: { title: 'Where cases go wrong', text: `Most problems come from skipping steps: not determining urgency (a brake issue gets treated like a light bulb), not confirming the repair (the driver leaves and the problem returns in 50 miles), or not documenting (next month nobody knows the same part was replaced before).` },
          practical: { title: 'Put the workflow in order', exercise: {
            type: 'order', prompt: 'Arrange the steps in the correct order.',
            items: ['Driver reports issue', 'Gather information', 'Determine urgency', 'Find appropriate vendor', 'Obtain diagnosis', 'Coordinate repair per procedure', 'Confirm repair', 'Close case']
          } },
          check: [
            { t: 'mc', q: 'What comes immediately after gathering information from the driver?', o: ['Find a vendor', 'Determine urgency', 'Close the case', 'Communicate ETA'], a: 1, e: 'Urgency decides everything that follows — how fast, which vendor, whether the unit can move.' },
            { t: 'tf', q: 'A case can be closed as soon as the shop says the repair is done.', a: false, e: 'Confirm the repair — that the complaint is resolved and the driver has the unit — and document before closing.' }
          ],
          takeaways: ['Twelve steps: report → gather → urgency → vendor → arrival → diagnosis → repair → track → ETA → confirm → document → close.', 'Urgency drives vendor choice and speed.', 'Confirm the repair before closing.', 'Procedure details vary; the workflow does not.']
        },
        {
          id: 'l2', title: 'Workflow in Action: One Case, Start to Finish', minutes: 14,
          objectives: ['Follow a real case through the full workflow', 'See how communication and documentation happen at each step', 'Identify decision points'],
          body: [
            `Here is a complete case, time-stamped as it would appear in a case log.`,
            { timeline: [
              { title: '10:02 · Driver reports issue', text: 'Driver in T-133 reports ABS warning light on the trailer (TR-518) after coupling. Parked at customer in Memphis, TN.', owner: 'Driver → Coordinator' },
              { title: '10:05 · Gather information', text: 'Light stays on after restart; no braking issues felt; trailer loaded; odometer noted; case opened on TR-518.', owner: 'Coordinator' },
              { title: '10:08 · Determine urgency', text: 'ABS is a brake-system warning. Per procedure: urgent — inspect before long-distance travel.', owner: 'Coordinator' },
              { title: '10:15 · Find vendor', text: 'Mobile mechanic with trailer ABS diagnostic capability, 35-minute ETA.', owner: 'Coordinator → Vendor' },
              { title: '10:55 · Coordinate arrival', text: 'Tech on site. Driver confirmed contact.', owner: 'Vendor / Driver' },
              { title: '11:20 · Obtain diagnosis', text: 'Damaged ABS sensor connector at right rear wheel. Estimate provided.', owner: 'Technician → Coordinator' },
              { title: '11:25 · Coordinate repair', text: 'Estimate within coordinator approval limit per procedure. Approved; PO issued.', owner: 'Coordinator' },
              { title: '11:30 · Track & communicate ETA', text: 'ETR 12:00. Dispatch updated: departure delayed ~90 minutes.', owner: 'Coordinator → Dispatch' },
              { title: '12:05 · Confirm repair', text: 'Tech confirms light off after test. Driver confirms light off.', owner: 'Driver / Vendor' },
              { title: '12:10 · Document & close', text: 'Notes, invoice, parts, labor, times and downtime recorded. Case closed.', owner: 'Coordinator' }
            ] },
            { callout: { kind: 'info', title: 'Notice the time stamps', text: 'Downtime for this case = 10:02 to 12:05 ≈ 2 hours. Accurate time stamps make downtime reporting possible.' } }
          ],
          example: { title: 'Decision point: approval', text: `At 11:25 the estimate was within the coordinator\'s limit. Had the shop recommended replacing all trailer brake chambers for a much higher amount, the coordinator would route it for approval per procedure — and ask whether the additional work was required now for safety or could be scheduled.` },
          practical: { title: 'Choose the right update', exercise: {
            type: 'choose', prompt: 'At 11:30, which message to dispatch is best?',
            options: [
              { text: '"Trailer is getting fixed."', correct: false, why: 'No unit, no cause, no ETA — dispatch can\'t plan with this.' },
              { text: '"TR-518 (with T-133) — ABS sensor connector being repaired on site. ETR 12:00. Expect departure ~12:15, about 90 min behind plan. Will confirm when released."', correct: true, why: 'Unit, cause, ETR, impact and next update — everything dispatch needs.' },
              { text: '"Should be done soon, I\'ll let you know."', correct: false, why: 'Vague and gives no time for planning.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'In the example, why was the case opened on TR-518 instead of T-133?', o: ['The driver requested it', 'The ABS warning was for the trailer', 'T-133 was not in the system', 'Tractors don\'t have ABS'], a: 1, e: 'The fault belonged to the trailer. Cases are opened on the unit that has the problem.' },
            { t: 'mc', q: 'Which step produces the data needed to calculate downtime?', o: ['Accurate time stamps throughout the case', 'The vendor invoice only', 'The dispatcher\'s notes', 'The final approval'], a: 0, e: 'Downtime is calculated from time stamps — when the unit went down and when it was released.' }
          ],
          takeaways: ['A strong case log is time-stamped at every step.', 'Communicate cause, ETR and impact — not just "it\'s getting fixed."', 'Approval decisions follow company limits and procedures.', 'Confirm with both the technician and the driver before closing.']
        }
      ]
    },
    /* ---------------- M7 ---------------- */
    {
      id: 'm7', title: 'Communication', summary: 'Clear, professional communication with every party you work with.',
      lessons: [
        {
          id: 'l1', title: 'Communicating with Drivers and Dispatch', minutes: 14,
          objectives: ['Apply the principles of clear maintenance communication', 'Communicate calmly and helpfully with drivers', 'Give dispatch the information they need to plan'],
          body: [
            { h: 'Four principles' },
            { tiles: [
              { icon: 'target', title: 'Specific', text: 'Unit numbers, locations, times, names. Not "soon" or "the truck."' },
              { icon: 'clock', title: 'Timely', text: 'Update when something changes — before someone has to ask.' },
              { icon: 'check-circle', title: 'Honest', text: 'If you don\'t know, say so, and say when you will know.' },
              { icon: 'users', title: 'Respectful', text: 'Drivers are stranded, dispatchers are under pressure. Calm and courteous wins.' }
            ] },
            { h: 'Drivers' },
            `A broken-down driver is often stressed, losing pay time, and worried about safety. Acknowledge the situation, give clear next steps, and tell them when they will hear from you.`,
            { msg: { kind: 'good', title: 'Good — message to driver', text: 'Hi Marcus — a mobile tire tech from Southwest Tire is on the way, ETA 45 min (around 3:30). Tech\'s name is Luis, he\'ll call when close. Stay safe off the roadway. I\'ll check back at 3:30 if I haven\'t heard from you.' } },
            { msg: { kind: 'bad', title: 'Poor — message to driver', text: 'Someone is coming.' } },
            { h: 'Dispatch' },
            `Dispatch plans loads around your information. Always include: <strong>unit</strong>, <strong>status</strong>, <strong>cause (short)</strong>, <strong>ETR</strong>, <strong>impact</strong>, and <strong>when you will update next</strong>.`,
            { msg: { kind: 'good', title: 'Good — update to dispatch', text: 'T-114 update: at Lone Star Truck Center Dallas for a coolant leak. Diagnosis: water pump. Part in stock. ETR today 16:00. Load 48213 will miss the 14:00 pickup — recommend reschedule or recovery truck. Next update 13:00.' } }
          ],
          example: { title: 'Handling a frustrated driver', text: `A driver says, "This is the third time this truck has broken down this month. I\'m losing money!" A professional response acknowledges and acts: "I understand, that\'s frustrating — I see the two earlier cases in the history. I\'m getting you help now, and I\'m also flagging this as a repeat issue so we look for the root cause." Then follow through.` },
          practical: { title: 'Pick the best reply', exercise: {
            type: 'choose', prompt: 'Dispatch messages: "Is 127 going to make its 18:00 delivery?" The shop said the repair should finish at 17:30 and the delivery is 40 minutes away. Best reply?',
            options: [
              { text: '"Yes."', correct: false, why: 'Overconfident — it hides the risk and gives dispatch no chance to prepare.' },
              { text: '"Shop ETR is 17:30; delivery is ~40 min away, so arrival ~18:10 at best. It will likely be late — recommend calling the receiver now. I\'ll confirm as soon as it\'s released."', correct: true, why: 'Shares facts, the math, the risk and a recommendation.' },
              { text: '"Ask the shop."', correct: false, why: 'Pushes your job to dispatch.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'Which set of details should every dispatch update include?', o: ['Unit, status, cause, ETR, impact, next update', 'Driver\'s mood and weather', 'Invoice total only', 'The shop\'s address only'], a: 0, e: 'These six elements let dispatch plan without calling you back.' },
            { t: 'tf', q: 'If you don\'t know an ETR, it is best to give an optimistic estimate so dispatch isn\'t worried.', a: false, e: 'Be honest: say you don\'t know yet and when you expect to know.' }
          ],
          takeaways: ['Be specific, timely, honest and respectful.', 'Drivers need clear next steps and a check-back time.', 'Dispatch updates: unit, status, cause, ETR, impact, next update.', 'Never guess an ETR to make someone feel better.']
        },
        {
          id: 'l2', title: 'Shops, Technicians, Vendors and Management', minutes: 14,
          objectives: ['Communicate complaint details to shops effectively', 'Work professionally with parts vendors', 'Report to fleet managers and management concisely'],
          body: [
            { tabs: [
              { label: 'Shops & technicians', body: [
                `Give the shop everything it needs to start working immediately: unit and VIN, mileage, complaint in factual terms, any codes, what was already done, authorization rules and billing information.`,
                { msg: { kind: 'message', title: 'Repair request to shop', text: 'Unit: T-114 (VIN ending 48213) · Odometer 512,340\nComplaint: Coolant leak, front of engine. Temp rose to warning level before driver stopped. No codes reported.\nHistory: Water pump replaced 14 months ago (warranty may apply).\nPlease call with diagnosis and estimate before repairs beyond diagnosis.\nPO to follow upon approval. Contact: [Coordinator] ext. 204' } }
              ] },
              { label: 'Parts vendors', body: [
                `When sourcing parts, be precise: part number (if known), VIN, engine or component serial, quantity, needed-by time, delivery location. Ask about availability, price, core charges and lead time.`,
                { msg: { kind: 'message', title: 'Parts inquiry', text: 'Looking for a water pump for a 2021 tractor, VIN attached. Need delivery to Lone Star Dallas by 13:00 if possible. Please confirm price, core charge (if any), and availability.' } }
              ] },
              { label: 'Fleet managers', body: [
                `Fleet managers want the decision, the cost and the risk — not every detail. Lead with the ask.`,
                { msg: { kind: 'message', title: 'Approval request', text: 'Approval needed: T-114 water pump replacement — $1,475 (parts $620, labor 4.5 h @ $190). Unit down since 08:10. Pump replaced 14 months ago — checking warranty with the dealer. ETR 16:00 if approved by 11:00.' } }
              ] },
              { label: 'Management', body: [
                `Senior management typically wants summaries: how many units are down, why, the impact on customers, and what you need from them. Use bullets and numbers.`,
                { msg: { kind: 'message', title: 'End-of-day summary', text: 'Fleet status — 5 units down (4.0% of fleet)\n• 2 waiting on parts (ETAs tomorrow)\n• 2 in repair (ETR tonight)\n• 1 roadside tire (resolved, rolling)\nCustomer impact: 1 late delivery (recovered by T-140).\nRisk: T-120 third aftertreatment failure in 60 days — recommending root-cause review.' } }
              ] }
            ] },
            { callout: { kind: 'tip', title: 'Match the audience', text: 'Technicians want detail. Managers want decisions. Drivers want next steps. Dispatch wants time. Same case — different message.' } }
          ],
          example: { title: 'The missing detail', text: `A coordinator sent a truck to a shop with the note "check engine light." The shop spent an hour on diagnosis before discovering the driver had also reported intermittent power loss and a failed regeneration — details that were in the coordinator\'s notes but not in the request. Including them would have pointed diagnosis toward aftertreatment immediately.` },
          practical: { title: 'Which message fits the audience?', exercise: {
            type: 'classify', prompt: 'Who is each message written for?', categories: ['Technician / Shop', 'Fleet manager', 'Driver'],
            items: [
              { text: '"Codes SPN 3251 / FMI 0 reported, regen attempted twice, failed. Please call before exceeding diagnosis."', answer: 'Technician / Shop', why: 'Technical detail and authorization rules are for the shop.' },
              { text: '"Need approval: $2,300 DPF cleaning + sensor. Down 2 days if we wait for dealer. Recommend approve."', answer: 'Fleet manager', why: 'Decision, cost, trade-off and recommendation — manager format.' },
              { text: '"Tow is 40 min out. Stay in the cab, hazards on. I\'ll call you at 4:15."', answer: 'Driver', why: 'Clear next steps, safety and check-back time.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'What should a request to a shop always include regarding authorization?', o: ['Nothing — shops decide', 'Instructions to call with diagnosis and estimate before additional repairs', 'Permission to do any repair needed', 'The driver\'s phone number only'], a: 1, e: 'Clear authorization rules prevent surprise charges and follow company approval procedures.' },
            { t: 'mc', q: 'A fleet manager asks about a repair. What should you lead with?', o: ['Full transcript of the driver call', 'The decision needed, cost, and impact', 'The shop\'s history', 'Your opinion of the dispatcher'], a: 1, e: 'Managers need decision-ready information first; details on request.' }
          ],
          takeaways: ['Shops need complete, factual complaint details and authorization rules.', 'Parts inquiries need VIN/part numbers, quantity, location and timing.', 'Managers want the decision, cost and risk first.', 'Tailor every message to its audience.']
        }
      ]
    },
    /* ---------------- M8 ---------------- */
    {
      id: 'm8', title: 'Documentation', summary: 'What to record, how to record it, and why it matters.',
      lessons: [
        {
          id: 'l1', title: 'What to Document', minutes: 13,
          objectives: ['Identify the key elements of maintenance documentation', 'Understand work orders and repair history', 'Record mileage, engine hours and times correctly'],
          body: [
            `If it isn\'t documented, it didn\'t happen. Documentation is how the company knows what was done to each unit, what it cost, and whether problems are repeating.`,
            { table: { head: ['Record', 'What it contains'], rows: [
              ['Maintenance notes', 'Your case log: every call, decision and update with time stamps and names'],
              ['Work order / Repair order (RO)', 'The shop\'s document listing complaint, cause, correction, parts and labor'],
              ['Repair history', 'All past repairs on a unit — used to spot repeats and warranty'],
              ['Vendor information', 'Shop name, location, contact, phone, PO/reference numbers'],
              ['Mileage (odometer)', 'Distance at time of repair — for PM intervals and warranty'],
              ['Engine hours', 'Engine run time — important for units that idle a lot'],
              ['Dates & times', 'When reported, arrived at shop, diagnosed, repaired, released']
            ] } },
            { callout: { kind: 'info', title: 'The three Cs', text: 'Good work orders document the Complaint (what the driver reported), the Cause (what the technician found) and the Correction (what was done). Ask shops to include all three.' } }
          ],
          example: { title: 'Why mileage matters', text: `A turbocharger was replaced at 480,120 miles. At 492,400 the same symptom returns. Because both mileages were documented, the coordinator sees the part failed after only about 12,000 miles and checks whether it is still under parts warranty — a potential large saving.` },
          practical: { title: 'Build the record', exercise: {
            type: 'extract', sourceLabel: 'Shop work order excerpt',
            source: 'RO# 88213 · Lone Star Truck Center — Dallas, TX\nUnit T-114 · Odometer 512,340 · Engine hrs 18,902\nComplaint: Coolant leak front of engine\nCause: Water pump seal failure\nCorrection: Replaced water pump, pressure tested cooling system\nIn: 06/12 08:40   Out: 06/12 15:55',
            fields: [
              { label: 'RO number', accept: ['88213'] },
              { label: 'Engine hours', accept: ['18902', '18,902'] },
              { label: 'Cause', accept: ['water pump', 'seal'] },
              { label: 'Time out (release)', accept: ['15:55', '1555', '3:55'] }
            ]
          } },
          check: [
            { t: 'mc', q: 'What are the "three Cs" of a work order?', o: ['Cost, Crew, Clock', 'Complaint, Cause, Correction', 'Call, Check, Close', 'Customer, Cargo, Carrier'], a: 1, e: 'Complaint, Cause and Correction describe what was reported, found, and done.' },
            { t: 'tf', q: 'Engine hours can be more meaningful than mileage for trucks that idle a lot.', a: true, e: 'Idling adds engine wear without adding miles, so engine hours capture that usage.' }
          ],
          takeaways: ['If it isn\'t documented, it didn\'t happen.', 'Work orders should state Complaint, Cause and Correction.', 'Always record mileage, engine hours and time stamps.', 'Repair history reveals repeats and warranty opportunities.']
        },
        {
          id: 'l2', title: 'Parts, Labor, Downtime and Invoices', minutes: 14,
          objectives: ['Record parts, labor and invoice information correctly', 'Calculate downtime from time stamps', 'Explain why accurate documentation matters'],
          body: [
            `Financial and time details turn case notes into data the company can manage.`,
            { tiles: [
              { icon: 'layers', title: 'Parts', text: 'Part names/numbers, quantity, price, warranty status, and any core charges.' },
              { icon: 'clock', title: 'Labor', text: 'Hours billed and rate. Compare to the estimate.' },
              { icon: 'activity', title: 'Downtime', text: 'Time from unit down to returned to service.' },
              { icon: 'file', title: 'Invoice', text: 'Invoice number, date, total, taxes/fees, PO number, and whether it matches the approved estimate.' }
            ] },
            { h: 'Good note vs poor note' },
            { msg: { kind: 'bad', title: 'Poor note', text: 'truck fixed, sent back out' } },
            { msg: { kind: 'good', title: 'Good note', text: '06/12 15:58 — T-114 released from Lone Star Dallas (RO 88213). Cause: water pump seal failure. Correction: water pump replaced, cooling system pressure tested. Parts $620 + labor 4.5h @ $190 = $1,475 + $45 shop supplies = $1,520 (PO 22019, approved by D. Hall 10:52). Warranty claim submitted — prior pump 14 mo. Downtime: 06/12 08:10 – 15:55 = 7h 45m. Driver confirmed no leak, temp normal. Case closed.' } },
            { callout: { kind: 'info', title: 'Why accuracy matters', text: 'Accurate records support warranty claims, cost control, repeat-failure detection, regulatory inspections and audits, vehicle resale value, and fair vendor evaluation.' } }
          ],
          example: { title: 'The invoice that didn\'t match', text: `An estimate was approved for $1,475. The invoice arrived at $2,210. Because the coordinator had documented the approved amount and who approved it, accounting questioned the difference — the shop had added an unapproved belt and hoses. The dispute was resolved using the case notes.` },
          practical: { title: 'Choose the best case note', exercise: {
            type: 'choose', prompt: 'Which closing note is best?',
            options: [
              { text: '"TR-532 tire fixed."', correct: false, why: 'Missing position, vendor, cost, times and confirmation.' },
              { text: '"06/14 03:40 — TR-532 RR outside tire replaced roadside by Southwest Tire (inv 5521). New 295/75R22.5 $412 + service call $185 = $597, PO 22031. Down 02:15–03:35 (1h 20m). Driver confirmed pressures OK, rolling. Closed."', correct: true, why: 'Time, unit, position, vendor, invoice, cost, downtime and confirmation — complete.' },
              { text: '"Tire guy came and fixed it, cost about 600."', correct: false, why: 'Approximate, missing unit, vendor, times and reference numbers.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'A unit went down at 08:10 and was released at 15:55. What is the downtime?', o: ['6h 45m', '7h 45m', '8h 10m', '7h 15m'], a: 1, e: '08:10 to 15:55 is 7 hours 45 minutes.' },
            { t: 'mc', q: 'Why document who approved an estimate and the approved amount?', o: ['It is not necessary', 'To resolve invoice discrepancies and follow approval procedures', 'To tell the driver', 'For fuel tax reporting'], a: 1, e: 'Approval records protect the company when invoices don\'t match estimates.' }
          ],
          takeaways: ['Record parts, labor, fees, invoice and PO numbers.', 'Compare invoices to approved estimates.', 'Downtime = unit down to returned to service.', 'Accurate records support warranty, cost control, compliance and audits.']
        }
      ]
    }
  ],
  final: { id: 'beginner-final', kind: 'exam', title: 'Beginner Final Exam: The Maintenance Call', minutes: 25 }
};

/* ---------------------------------------------------------------------------
   CONTENT — ADVANCED: Fleet Maintenance Operations
   --------------------------------------------------------------------------- */
const ADVANCED = {
  id: 'advanced',
  level: 'Advanced',
  title: 'Fleet Maintenance Operations',
  short: 'Operations',
  icon: 'wrench',
  color: 'var(--track-advanced)',
  summary: 'Run day-to-day fleet maintenance operations: preventive maintenance, diagnostics, estimates, vendors, downtime, dispatch coordination, fleet tracking and cost control.',
  outcomes: ['Plan and manage preventive maintenance', 'Read diagnostic information and coordinate intelligently', 'Review estimates and control repair costs', 'Coordinate maintenance with dispatch to protect loads'],
  modules: [
    /* ---------------- M1 ---------------- */
    {
      id: 'm1', title: 'Preventive Maintenance', summary: 'PM schedules, intervals, service history and overdue maintenance.',
      lessons: [
        {
          id: 'l1', title: 'PM Schedules and Intervals', minutes: 15,
          objectives: ['Explain why preventive maintenance reduces cost and downtime', 'Compare mileage-, time- and engine-hour-based intervals', 'Describe common inspection requirements'],
          body: [
            `[[PM]] (preventive maintenance) is planned service performed before something fails: oil and filters, lubrication, inspections, adjustments. Reactive (corrective) maintenance happens after a failure — usually at a worse time, a worse place and a higher cost.`,
            { h: 'Three ways to trigger a PM' },
            { table: { head: ['Trigger', 'How it works', 'Best for'], rows: [
              ['Mileage-based', 'Service every X miles', 'Over-the-road tractors running steady miles'],
              ['Time-based', 'Service every X days/months', 'Low-mileage units, trailers, annual inspections'],
              ['Engine hours', 'Service every X engine hours', 'Units that idle heavily or run PTO equipment; reefer units']
            ] } },
            `Most fleets use <strong>whichever comes first</strong> — for example, a PM at a mileage limit or a set number of months, whichever occurs first. Intervals are set by the fleet based on manufacturer recommendations, duty cycle and oil analysis; they vary widely between fleets.`,
            { h: 'PM levels' },
            `Many fleets use tiered PMs. Names differ, but a common pattern is:`,
            { tiles: [
              { icon: 'check', title: 'PM A', text: 'Basic service: oil and filter, lube, safety inspection of brakes, tires, lights.' },
              { icon: 'list-check', title: 'PM B', text: 'PM A plus additional filters (fuel, air), more detailed inspections.' },
              { icon: 'layers', title: 'PM C', text: 'Comprehensive service: may include fluids like coolant or transmission, valve adjustment — per manufacturer schedule.' }
            ] },
            { h: 'Inspection requirements' },
            `In the U.S., commercial vehicles require a periodic (annual) inspection, often called the <strong>DOT annual inspection</strong>, and drivers complete inspection reports ([[DVIR]]) as required by regulations. Trailers need their own inspections. Your safety department tracks compliance; you coordinate getting units inspected on time.`,
            { callout: { kind: 'info', title: 'PMs are scheduled around freight', text: 'A PM that pulls a truck off a paying load is expensive. Good coordinators plan PMs when units are already near a shop, at a terminal, or on a home-time break.' } }
          ],
          example: { title: 'Planning around home time', text: `<span class="mono">T-122</span> is 1,800 miles from its PM B. The driver goes home Friday for 34 hours, near a terminal shop. Instead of waiting until the PM is overdue mid-week, the coordinator schedules the PM for Saturday morning — zero lost load time.` },
          practical: { title: 'Which trigger fits?', exercise: {
            type: 'classify', prompt: 'Choose the best primary PM trigger for each unit.', categories: ['Mileage', 'Time', 'Engine hours'],
            items: [
              { text: 'Long-haul sleeper tractor running 2,500 miles/week', answer: 'Mileage', why: 'Steady high mileage makes miles the best wear indicator.' },
              { text: 'Dry van trailer parked often at a customer yard', answer: 'Time', why: 'Low, irregular use — time-based ensures it still gets inspected.' },
              { text: 'Reefer unit on a refrigerated trailer', answer: 'Engine hours', why: 'Reefer units run on their own hours regardless of trailer miles.' },
              { text: 'Local day cab that idles for hours at ports', answer: 'Engine hours', why: 'Heavy idling adds engine wear that mileage doesn\'t capture.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'What does "whichever comes first" mean in a PM schedule?', o: ['The PM is done at the mileage limit only', 'The PM is due at the first of the mileage, time or hours limits reached', 'The driver chooses', 'PMs are only done after failures'], a: 1, e: 'Multiple triggers protect units that run few miles but still age or idle.' },
            { t: 'tf', q: 'PM intervals are identical for every fleet.', a: false, e: 'Intervals depend on manufacturer guidance, duty cycle, and fleet policy.' }
          ],
          takeaways: ['PM prevents failures; reactive repairs cost more and happen at bad times.', 'Triggers: mileage, time, engine hours — often whichever comes first.', 'PM levels (A/B/C) vary by fleet.', 'Schedule PMs around freight and home time.']
        },
        {
          id: 'l2', title: 'Service History and Overdue Maintenance', minutes: 13,
          objectives: ['Use service history to plan maintenance', 'Prioritize overdue units', 'Communicate PM needs to dispatch'],
          body: [
            `Service history shows what was done, when and at what mileage. It tells you what is coming due, what keeps failing, and what might be covered by warranty.`,
            { h: 'Managing the PM list' },
            { table: { head: ['Status', 'Meaning', 'Action'], rows: [
              ['<span class="badge badge--success">OK</span>', 'Not due soon', 'Monitor'],
              ['<span class="badge badge--info">Due soon</span>', 'Within planning window (e.g., next 2,000 mi / 2 weeks)', 'Plan with dispatch around loads and home time'],
              ['<span class="badge badge--warning">Due</span>', 'At interval', 'Schedule this week'],
              ['<span class="badge badge--critical">Overdue</span>', 'Past interval', 'Prioritize; escalate if blocked']
            ] } },
            { callout: { kind: 'warning', title: 'Overdue inspections are different', text: 'A late oil change is a cost risk. An expired annual inspection is a compliance issue — a unit may not be permitted to operate until inspected. Check with your safety department.' } },
            `When a unit is overdue, find out <em>why</em>: dispatch couldn\'t release it, the shop had no capacity, the driver never came in. The fix is different each time.`
          ],
          example: { title: 'The PM that kept slipping', text: `<span class="mono">T-109</span> was overdue by 6,000 miles because dispatch kept giving it long runs. The coordinator reviewed the next week\'s loads with dispatch, found a delivery near a partner shop Thursday afternoon, and booked the PM for Thursday evening with a promised release by 06:00 Friday.` },
          practical: { title: 'Prioritize the PM list', exercise: {
            type: 'order', prompt: 'Order these units from highest to lowest PM priority.',
            items: ['TR-540: annual inspection expired yesterday', 'T-109: PM A overdue by 6,000 miles', 'T-126: PM B due this week', 'T-131: PM A due in 1,800 miles']
          } },
          check: [
            { t: 'mc', q: 'Why is an expired annual inspection more serious than a late oil change?', o: ['It costs more', 'It is a compliance issue that may prevent the unit from operating', 'Oil changes don\'t matter', 'Inspections are optional'], a: 1, e: 'Periodic inspection is a regulatory requirement. Consult the safety department.' },
            { t: 'wwyd', q: 'A tractor is 4,000 miles overdue for PM because dispatch keeps assigning it loads. You:', o: ['Ignore it', 'Ground it immediately without telling dispatch', 'Work with dispatch to find a load that routes near a shop or align with home time, and escalate if needed', 'Let the driver decide'], a: 2, e: 'Coordinate first; escalate per procedure if it keeps slipping.' }
          ],
          takeaways: ['Service history reveals what is due, repeats and warranty.', 'Track statuses: OK, due soon, due, overdue.', 'Overdue inspections are compliance issues.', 'Solve the reason a PM is overdue, not just the symptom.']
        }
      ]
    },
    /* ---------------- M2 ---------------- */
    {
      id: 'm2', title: 'Diagnostics', summary: 'Warning lights, DTCs and diagnostic reports — enough to coordinate intelligently.',
      lessons: [
        {
          id: 'l1', title: 'Warning Lights, Messages and DTCs', minutes: 15,
          objectives: ['Interpret the urgency of common warning lights', 'Explain what a DTC is and what it isn\'t', 'Collect useful code information from drivers and telematics'],
          body: [
            { h: 'Warning lamp color' },
            `Exact symbols vary by manufacturer, but color is a reliable first clue:`,
            { tiles: [
              { icon: 'alert', title: 'Red', text: 'Serious — e.g., STOP ENGINE. Driver should stop safely as soon as possible.' },
              { icon: 'info', title: 'Amber / yellow', text: 'Attention needed — e.g., CHECK ENGINE, DPF, DEF. Diagnose soon; monitor for change.' },
              { icon: 'check-circle', title: 'Green / blue', text: 'Informational — a system is on or active.' }
            ] },
            { h: 'Diagnostic Trouble Codes' },
            `A [[DTC]] is a code stored by an electronic control module (like the engine [[ECM]]) when it detects a condition outside normal limits. On heavy trucks, codes are often reported using the J1939 standard as an <strong>SPN</strong> (Suspect Parameter Number — <em>what</em> is affected) and an <strong>FMI</strong> (Failure Mode Identifier — <em>how</em> it is out of range).`,
            { callout: { kind: 'warning', title: 'A code is a clue, not a diagnosis', text: 'A DTC tells a technician where to start looking. A code for a sensor reading might be caused by the sensor, wiring, a connector, or the actual system the sensor measures. Never order parts based on a code alone.' } },
            { h: 'What to collect' },
            { ul: ['Exact code(s) — SPN and FMI, or the full code text', 'Whether the code is active or inactive (historical)', 'Lamp status and messages on the dash', 'Any derate or speed limitation', 'When it started and what the driver was doing', 'Telematics snapshot data, if available'] }
          ],
          example: { title: 'Telematics alert at 03:00', text: `Telematics shows <span class="mono">T-120</span> with an active aftertreatment code and an amber lamp. The truck is still at normal speed. Rather than wake the driver, the coordinator checks the code description, sees that it commonly precedes a derate if not addressed, and books a dealer appointment on the route for the morning — then messages the driver the plan.` },
          practical: { title: 'Rate the urgency', exercise: {
            type: 'classify', prompt: 'Classify each report by urgency.', categories: ['Stop safely now', 'Diagnose soon', 'Informational'],
            items: [
              { text: 'Red STOP ENGINE lamp with low oil pressure message', answer: 'Stop safely now', why: 'Red lamp + oil pressure = potential engine damage.' },
              { text: 'Amber check engine lamp, no performance change', answer: 'Diagnose soon', why: 'Needs attention, no immediate danger reported.' },
              { text: 'Green cruise-control indicator on', answer: 'Informational', why: 'A system status indicator.' },
              { text: 'Amber DPF lamp, regen requested by the system', answer: 'Diagnose soon', why: 'Follow manufacturer/company procedure for regen; escalate if it fails or a derate begins.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'In a J1939 code, what does the FMI describe?', o: ['The component\'s part number', 'How the parameter is failing (e.g., too high, too low, erratic)', 'The mileage at failure', 'The technician\'s name'], a: 1, e: 'SPN identifies what; FMI identifies the failure mode.' },
            { t: 'tf', q: 'If a DTC points to a sensor, the sensor is always the failed part.', a: false, e: 'Wiring, connectors or the actual system may be the cause. Technicians confirm with testing.' }
          ],
          takeaways: ['Lamp color gives the first read on urgency.', 'DTCs = SPN (what) + FMI (how), on J1939 systems.', 'A code is a clue, not a diagnosis.', 'Collect active/inactive status, lamps, derates and timing.']
        },
        {
          id: 'l2', title: 'Symptoms, Root Causes and Diagnostic Reports', minutes: 14,
          objectives: ['Separate symptoms from causes', 'Read a technician\'s diagnostic report', 'Ask the right questions without pretending to be a technician'],
          body: [
            `A <strong>symptom</strong> is what someone observes: low power, noise, a lamp. A <strong>cause</strong> is what produced it: a clogged filter, a cracked hose, a failed sensor. The same symptom can have many causes.`,
            { flow: ['Symptom: low power', 'Code: high DPF pressure', 'Finding: DPF heavily loaded', 'Cause: failed regens due to faulty sensor'], hl: [3] },
            { h: 'Reading a diagnostic report' },
            { msg: { kind: 'note', title: 'Diagnostic report — T-120', text: 'Complaint: Derate, amber DPF lamp\nCodes: SPN 3251 FMI 0 (active)\nTests: DPF differential pressure high at idle and under load. Forced regen attempted — aborted, outlet temp sensor reading implausible.\nFindings: DPF outlet temperature sensor failed. DPF loaded.\nRecommendation: Replace sensor, perform parked regen. If pressure remains high, remove DPF for cleaning.\nEst.: 3.2 h labor + sensor. ETR: today 17:00 (if regen successful).' } },
            { h: 'Smart coordinator questions' },
            { ul: ['What is the confirmed cause versus what is still being tested?', 'What is the repair plan, and what is plan B if it doesn\'t work (e.g., "if pressure remains high")?', 'Are parts in stock? What is the ETR for each scenario?', 'Is any of this related to prior repairs (possible warranty or repeat failure)?', 'Is the unit safe to operate after the repair, or are there other findings?'] },
            { callout: { kind: 'tip', title: 'Stay in your lane — confidently', text: 'You don\'t need to tell a technician how to test a sensor. You do need to understand the plan well enough to spot risks to time, cost and safety.' } }
          ],
          example: { title: 'The conditional ETR', text: `The report above gives an ETR of 17:00 <em>if</em> the regen is successful. The coordinator tells dispatch: "ETR 17:00 best case; if the DPF needs cleaning, likely tomorrow afternoon. I\'ll confirm by 16:00." Dispatch can now plan for both outcomes.` },
          practical: { title: 'Symptom or cause?', exercise: {
            type: 'classify', prompt: 'Classify each statement.', categories: ['Symptom', 'Cause'],
            items: [
              { text: 'Truck limited to 5 mph', answer: 'Symptom', why: 'An observed effect (derate).' },
              { text: 'Cracked charge air cooler hose', answer: 'Cause', why: 'A physical finding that produces symptoms.' },
              { text: 'Amber check engine lamp on', answer: 'Symptom', why: 'The lamp is an indicator of some condition.' },
              { text: 'Failed DPF outlet temperature sensor', answer: 'Cause', why: 'The confirmed faulty component.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'The shop gives an ETR that depends on a test result. The best update to dispatch is:', o: ['Give only the best-case time', 'Give the best case, the likely alternative, and when you\'ll confirm', 'Wait until everything is certain before saying anything', 'Give the worst case only'], a: 1, e: 'Conditional ETRs let dispatch plan for both outcomes.' },
            { t: 'mc', q: 'Which question is appropriate for a coordinator to ask a technician?', o: ['"Why don\'t you just replace the turbo?"', '"What\'s confirmed versus still being tested, and what\'s plan B?"', '"Can you skip the diagnosis?"', '"Can you guess the cost?"'], a: 1, e: 'Understanding the plan and contingencies is the coordinator\'s job.' }
          ],
          takeaways: ['Symptoms are observed; causes are found.', 'Diagnostic reports: complaint, codes, tests, findings, recommendation, estimate/ETR.', 'Ask what\'s confirmed, what\'s plan B, and what drives the ETR.', 'Communicate conditional ETRs honestly.']
        }
      ]
    },
    /* ---------------- M3 ---------------- */
    {
      id: 'm3', title: 'Repairs and Estimates', summary: 'Labor, parts, shop rates, fees, approvals, warranty and core charges.',
      lessons: [
        {
          id: 'l1', title: 'Anatomy of an Estimate', minutes: 15,
          objectives: ['Break down an estimate into its components', 'Understand labor hours, rates and diagnostic fees', 'Recognize common fees and core charges'],
          body: [
            `An estimate is the shop\'s projected cost for a repair. Reading it well is one of the most valuable skills a coordinator can have.`,
            { table: { head: ['Line', 'Description', 'Amount'], rows: [
              ['Diagnostics', '1.0 h diagnostic time', '$185.00'],
              ['Labor', 'Replace water pump — 3.5 h @ $185/h', '$647.50'],
              ['Parts', 'Water pump assembly', '$540.00'],
              ['Parts', 'Coolant (10 gal)', '$180.00'],
              ['Core charge', 'Refundable when old pump is returned', '$75.00'],
              ['Shop supplies', 'Percentage of labor, capped', '$45.00'],
              ['Environmental fee', 'Fluid disposal', '$15.00'],
              ['<strong>Total</strong>', '', '<strong>$1,687.50</strong>']
            ] } },
            { accordion: [
              { title: 'Labor and shop rates', text: 'Labor = hours × shop rate. Many shops use published "book" times for standard jobs. Rates vary by region and shop type — dealers often charge more than independents; roadside and after-hours work often carries premiums.' },
              { title: 'Diagnostics', text: 'Diagnostic time is billed separately from the repair. It is legitimate — finding the cause takes time and equipment — but it should be reasonable and not duplicated.' },
              { title: 'Parts', text: 'Check part prices against typical pricing. Ask whether parts are new, remanufactured or used, and about warranty.' },
              { title: 'Core charges', text: 'A [[Core]] charge is a deposit on a rebuildable part (starters, alternators, turbochargers, etc.). It is refunded when the old part is returned in acceptable condition. Make sure cores are returned — unreturned cores are lost money.' },
              { title: 'Fees', text: 'Shop supplies, environmental/disposal fees, service call or mileage charges for mobile work, and taxes. Know which your vendors charge and whether they are reasonable.' }
            ] }
          ],
          example: { title: 'The duplicate diagnosis', text: `A truck towed from Shop A to Shop B arrived with a diagnosis already completed. Shop B\'s estimate included 2.0 h of diagnostics. The coordinator asked why; Shop B agreed to verify the prior diagnosis in 0.5 h instead — saving 1.5 h of labor.` },
          practical: { title: 'Check the math', exercise: {
            type: 'extract', sourceLabel: 'Estimate — T-126 alternator',
            source: 'Labor: 2.0 h @ $170/h\nAlternator (reman): $410.00\nCore charge: $120.00 (refundable)\nShop supplies: $25.00\nMobile service call: $150.00',
            fields: [
              { label: 'Labor total ($)', accept: ['340', '340.00', '$340'] },
              { label: 'Grand total ($)', accept: ['1045', '1,045', '1045.00', '$1,045', '$1045'] },
              { label: 'Amount refundable if core returned ($)', accept: ['120', '120.00', '$120'] }
            ]
          } },
          check: [
            { t: 'mc', q: 'What is a core charge?', o: ['A non-refundable fee', 'A deposit refunded when the old rebuildable part is returned', 'A charge for engine work only', 'A fee for after-hours service'], a: 1, e: 'Core charges encourage return of rebuildable parts; return the core to get the refund.' },
            { t: 'mc', q: 'Labor of 3.5 hours at $185/hour equals:', o: ['$555.00', '$647.50', '$685.00', '$740.00'], a: 1, e: '3.5 × 185 = 647.50.' }
          ],
          takeaways: ['Estimates: diagnostics, labor, parts, cores, supplies, fees, taxes.', 'Labor = hours × rate; book times are common references.', 'Return cores to recover deposits.', 'Question duplicated or unusual charges politely.']
        },
        {
          id: 'l2', title: 'Additional Repairs, Approvals and Warranty', minutes: 15,
          objectives: ['Handle additional repair recommendations', 'Follow approval procedures', 'Identify potential warranty coverage'],
          body: [
            `Shops often find more than the original complaint. Some findings are safety-critical; some are recommendations that can wait. Your job is to sort them — with the technician\'s input — and route approvals correctly.`,
            { table: { head: ['Finding type', 'Example', 'Typical handling'], rows: [
              ['Safety-critical', 'Brake lining below minimum, leaking air chamber', 'Must be fixed before release; route approval quickly'],
              ['Related / required', 'Hose damaged while replacing water pump', 'Usually approve with the main repair'],
              ['Recommended', 'Wiper blades worn, minor oil seep', 'Defer to next PM if safe; document'],
              ['Questionable', 'Replace all belts "while we\'re in there" at low mileage', 'Ask for evidence (photos, measurements)']
            ] } },
            { h: 'Approvals' },
            `Most companies set approval limits: coordinators may approve up to a certain amount; above that, a fleet manager must approve. Document every approval — who, when, how much — and issue a PO if your company uses them.`,
            { h: 'Warranty' },
            `[[Warranty]] may apply to new vehicles (base warranty), extended warranties on specific components, and parts/labor warranties on previous repairs. Before approving a repair, check: vehicle age and mileage, component warranty terms, and whether this part was replaced recently.`,
            { callout: { kind: 'tip', title: 'Ask before work starts', text: 'Warranty claims are much easier when identified before the repair. Some warranty repairs must be done at authorized dealers; a non-authorized shop could void the claim.' } }
          ],
          example: { title: 'The upsell', text: `An estimate for a starter replacement came back with batteries, cables, alternator and belts added — tripling the cost. The coordinator asked for test results. Batteries tested weak (legitimate), cables were fine, the alternator tested within spec. Approved: starter + batteries. Deferred: the rest, documented for the next PM.` },
          practical: { title: 'Review the estimate', exercise: {
            type: 'multi', prompt: 'Original complaint: trailer brake light out. Which items should you question or verify before approving? (Select all that apply)',
            options: [
              { text: 'Replace brake light lamp — $38', correct: false, why: 'This addresses the complaint.' },
              { text: 'Replace all trailer tires — $2,480 (no measurements provided)', correct: true, why: 'Unrelated and no evidence provided — ask for tread depths/photos.' },
              { text: 'Diagnostic fee 2.0 h for a light bulb', correct: true, why: 'Excessive diagnostic time for a simple lighting issue — question it.' },
              { text: 'Repair corroded pigtail connector found at the light — $65', correct: false, why: 'Related to the complaint and likely the cause.' },
              { text: 'Service call fee — $150 (mobile)', correct: false, why: 'Normal for mobile service.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'An estimate exceeds your approval limit. You should:', o: ['Approve anyway to save time', 'Route to the fleet manager per procedure with a clear summary', 'Ask the shop to split the invoice', 'Delay until the shop lowers it'], a: 1, e: 'Follow approval procedure. Never split invoices to avoid limits.' },
            { t: 'tf', q: 'Warranty should be checked before the repair starts whenever possible.', a: true, e: 'Identifying warranty early avoids voiding claims and paying for covered work.' }
          ],
          takeaways: ['Sort additional findings: safety-critical, related, recommended, questionable.', 'Ask for evidence on large or unrelated additions.', 'Follow approval limits and document approvals.', 'Check warranty before work begins.']
        }
      ]
    },
    /* ---------------- M4 ---------------- */
    {
      id: 'm4', title: 'Vendor and Shop Management', summary: 'Finding, choosing and working with repair facilities, mobile service and towing.',
      lessons: [
        {
          id: 'l1', title: 'Finding and Choosing Repair Facilities', minutes: 14,
          objectives: ['Compare vendor types', 'Evaluate shop capabilities and availability', 'Weigh price, speed and quality'],
          body: [
            { tiles: [
              { icon: 'home', title: 'In-house shop', text: 'Company-owned. Lowest cost and full control — but only where you have terminals.' },
              { icon: 'award', title: 'Dealer', text: 'Brand-specific expertise, factory tools, warranty authority. Often higher rates and longer waits.' },
              { icon: 'wrench', title: 'Independent shop', text: 'Often faster and cheaper for general repairs. Capabilities vary widely.' },
              { icon: 'truck', title: 'Mobile service', text: 'Comes to the unit — tires, minor repairs, some diagnostics. No lift or heavy equipment.' },
              { icon: 'route', title: 'Towing', text: 'Moves disabled units. Heavy-duty wreckers are needed for loaded tractor-trailers.' },
              { icon: 'target', title: 'Tire networks', text: '24/7 roadside tire service across wide areas.' }
            ] },
            { h: 'Five questions for every shop' },
            { ol: ['<strong>Capability</strong> — Can you work on this make, system and problem? Do you have the diagnostic software?', '<strong>Availability</strong> — When can you look at it? How many units are ahead?', '<strong>Parts</strong> — Do you stock or can you get the likely parts quickly?', '<strong>Pricing</strong> — Labor rate, diagnostic fee, after-hours premiums?', '<strong>Communication</strong> — Who is my contact and when will I hear the diagnosis?'] },
            { callout: { kind: 'info', title: 'Closest is not always fastest', text: 'A shop 10 miles away with a 3-day backlog is slower than one 45 miles away that can start today. Factor in tow cost, but compare total downtime.' } }
          ],
          example: { title: 'Dealer vs independent', text: `<span class="mono">T-118</span> needs a warranty-eligible emissions repair. The independent shop can start today; the dealer can start tomorrow. Because warranty work generally requires an authorized dealer, the coordinator chooses the dealer — saving the company the full repair cost for one extra day of downtime, and informs dispatch.` },
          practical: { title: 'Choose the vendor', exercise: {
            type: 'choose', prompt: 'Loaded tractor-trailer, engine failure, cannot move, on I-40. Tractor is out of warranty. Which option?',
            options: [
              { text: 'Mobile mechanic to attempt engine repair on the shoulder', correct: false, why: 'Major engine failures need a shop; the shoulder is unsafe for long repairs.' },
              { text: 'Heavy-duty tow to an independent shop 30 miles away that can diagnose today, plus a recovery tractor for the loaded trailer', correct: true, why: 'Gets the unit to a capable shop quickly and protects the load separately.' },
              { text: 'Tell the driver to wait until the dealer 200 miles away has an opening next week', correct: false, why: 'Unacceptable downtime and the driver is stranded.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'Which vendor type typically has warranty authority for a manufacturer?', o: ['Independent shop', 'Authorized dealer', 'Mobile tire service', 'Tow company'], a: 1, e: 'Authorized dealers typically perform warranty repairs.' },
            { t: 'tf', q: 'The nearest shop is always the best choice.', a: false, e: 'Availability, capability and parts often matter more than distance.' }
          ],
          takeaways: ['Know the strengths of each vendor type.', 'Ask about capability, availability, parts, pricing and communication.', 'Compare total downtime, not just distance.', 'Warranty work generally requires an authorized facility.']
        },
        {
          id: 'l2', title: 'Mobile Service, Towing and Geographic Coverage', minutes: 13,
          objectives: ['Know when mobile service is appropriate', 'Order the right type of tow', 'Build a vendor network across your routes'],
          body: [
            { compare: {
              yes: { title: 'Mobile service works for', items: ['Tire replacement', 'Lights, connectors, minor air leaks', 'Batteries and jump starts', 'Some diagnostics with a laptop', 'Minor fluid leaks and hoses'] },
              no: { title: 'Usually needs a shop', items: ['Major engine or transmission work', 'Work requiring a lift or heavy tools', 'Complex electrical/aftertreatment repairs', 'Anything unsafe to perform on a roadside'] }
            } },
            { h: 'Ordering a tow' },
            `Give the tow company: exact location and direction of travel, unit type (tractor only, or tractor + loaded trailer), approximate weight, what\'s wrong (won\'t start, no brakes release, collision), destination shop, and billing information. Heavy-duty wreckers are required for tractors; loaded combinations may need special equipment.`,
            { callout: { kind: 'warning', title: 'Tow costs add up', text: 'Towing is often billed by hookup, mileage, and hourly time. A long tow to a preferred shop can cost more than the repair difference. Compare total cost.' } },
            { h: 'Geographic coverage' },
            `Map your fleet\'s common lanes and build a list of trusted vendors along each: shops, tire services, mobile mechanics and towers — with hours, capabilities and contacts. When a call comes in at 02:00, a prepared list saves precious time.`
          ],
          example: { title: 'The prepared lane', text: `A fleet running Dallas–Atlanta keeps a vendor list for each 150-mile segment of I-20. When <span class="mono">T-133</span> blew a steer tire near Meridian, MS at 01:30, the coordinator had a 24-hour tire service on the phone in two minutes.` },
          practical: { title: 'What does the tow company need?', exercise: {
            type: 'multi', prompt: 'Select all the information you should give when ordering a tow.',
            options: [
              { text: 'Exact location and direction of travel', correct: true, why: 'The wrecker must find the unit safely.' },
              { text: 'Tractor only or tractor with loaded trailer', correct: true, why: 'Determines wrecker type and equipment.' },
              { text: 'The driver\'s home address', correct: false, why: 'Not relevant — and personal information should not be shared unnecessarily.' },
              { text: 'Destination shop', correct: true, why: 'Needed to quote and plan.' },
              { text: 'Nature of the problem (e.g., brakes won\'t release)', correct: true, why: 'Affects how the unit can be towed.' },
              { text: 'Billing / PO information', correct: true, why: 'Prevents delays and payment disputes.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'Which job is best suited to mobile service?', o: ['Transmission replacement', 'Replacing a flat trailer tire', 'Engine overhaul', 'Rebuilding a differential'], a: 1, e: 'Tire replacement is routine for mobile tire services.' },
            { t: 'tf', q: 'Tow costs can exceed the savings of using a preferred shop far away.', a: true, e: 'Compare total cost including tow and downtime.' }
          ],
          takeaways: ['Mobile service fits light, on-site repairs.', 'Give tow companies complete, precise information.', 'Compare total cost including tow and downtime.', 'Build vendor lists along your lanes before you need them.']
        }
      ]
    },
    /* ---------------- M5 ---------------- */
    {
      id: 'm5', title: 'Downtime Management', summary: 'Break downtime into its parts and shorten each one.',
      lessons: [
        {
          id: 'l1', title: 'The Components of Downtime', minutes: 14,
          objectives: ['Break total downtime into stages', 'Identify which stages the coordinator controls', 'Measure downtime consistently'],
          body: [
            `[[Downtime]] is the time a unit is unavailable for work because of maintenance. Total downtime is made of stages — and each stage has different levers.`,
            { widget: 'downtimeStack' },
            { table: { head: ['Stage', 'Typical driver of delay', 'Coordinator lever'], rows: [
              ['Breakdown → vendor arrival', 'Vendor availability, distance', 'Prepared vendor lists; fast decisions'],
              ['Waiting for shop to start', 'Shop backlog', 'Choose shops by availability'],
              ['Diagnostic time', 'Complexity, missing info', 'Send complete complaint details and history'],
              ['Approval wait', 'Slow approvals', 'Route immediately; know limits; escalate'],
              ['Parts delay', 'Stock, shipping', 'Source alternatives; expedite; check other suppliers'],
              ['Repair time', 'Job size', 'Limited — but prioritize and confirm ETR'],
              ['Waiting for pickup', 'No driver ready', 'Coordinate with dispatch before release']
            ] } },
            { callout: { kind: 'tip', title: 'Invisible downtime', text: 'Approval waits and pickup waits are often the easiest hours to eliminate — and they are 100% within the coordinator\'s control.' } }
          ],
          example: { title: 'Where did 31 hours go?', text: `<span class="mono">T-108</span> was down 31 hours. Breakdown: 2 h tow, 9 h waiting for the shop to start, 2 h diagnosis, 11 h waiting for approval overnight, 1 h parts, 4 h repair, 2 h waiting for a driver. Only 7 hours were actual work. The coordinator\'s review led to after-hours approval coverage.` },
          practical: { title: 'Find the controllable time', exercise: {
            type: 'multi', prompt: 'In the T-108 example, which stages were most within the coordinator\'s control? (Select all that apply)',
            options: [
              { text: '11 h waiting for approval', correct: true, why: 'Routing approvals and after-hours coverage are process issues.' },
              { text: '4 h repair time', correct: false, why: 'Actual repair time depends on the job.' },
              { text: '2 h waiting for a driver after release', correct: true, why: 'Coordinating pickup with dispatch before release eliminates this.' },
              { text: '9 h waiting for shop to start', correct: true, why: 'Choosing a shop with capacity is a coordinator decision.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'Which downtime stage is usually most within the coordinator\'s control?', o: ['Repair labor time', 'Approval wait', 'Part manufacturing', 'Weather'], a: 1, e: 'Approvals are a process the coordinator drives directly.' },
            { t: 'tf', q: 'Downtime only counts the hours a technician is working on the unit.', a: false, e: 'Downtime covers the full period the unit is unavailable.' }
          ],
          takeaways: ['Downtime = all time the unit is unavailable.', 'Break it into stages to find delays.', 'Approval and pickup waits are controllable.', 'Measure consistently from down to returned to service.']
        },
        {
          id: 'l2', title: 'Return-to-Service ETAs', minutes: 13,
          objectives: ['Build realistic ETRs', 'Communicate confidence levels', 'Apply tactics that shorten downtime'],
          body: [
            `An [[ETR]] is only useful if people can plan around it. Build it from the stages, not from hope.`,
            { flow: ['Diagnosis time', '+ Approval', '+ Parts ETA', '+ Repair hours', '+ Road test', '= ETR'], hl: [5] },
            { h: 'Communicate confidence' },
            { table: { head: ['Confidence', 'When', 'How to say it'], rows: [
              ['High', 'Parts on hand, repair underway', '"ETR 15:00, confirmed with the tech."'],
              ['Medium', 'Parts in transit, tracking available', '"ETR tomorrow 10:00 if the part arrives on the 07:00 delivery."'],
              ['Low', 'Diagnosis not complete', '"No ETR until diagnosis — expected by 13:00. Plan for at least tomorrow."']
            ] } },
            { h: 'Shortening downtime' },
            { ul: ['Approve quickly when within limits; escalate fast when not', 'Ask the shop to order parts during diagnosis if likely', 'Source parts from alternate suppliers or dealers', 'Pre-arrange the driver pickup for release time', 'Ask whether safe, non-critical repairs can be deferred to the next PM'] }
          ],
          example: { title: 'Parts from 60 miles away', text: `The shop\'s parts supplier quoted two days for a turbo actuator. The coordinator called three other suppliers; one had it 60 miles away. A courier delivered it the same afternoon for $140 — cheaper than one more day of downtime.` },
          practical: { title: 'Build the ETR', exercise: {
            type: 'choose', prompt: 'Diagnosis done 10:00. Approval takes 30 min. Part arrives 13:00. Repair is 3 h, road test 30 min. Best ETR?',
            options: [
              { text: '13:30', correct: false, why: 'Ignores repair and road test time.' },
              { text: '16:30', correct: true, why: 'Work starts when the part arrives at 13:00 (approval is done by then): 13:00 + 3 h + 0.5 h = 16:30.' },
              { text: '14:00', correct: false, why: 'Too optimistic.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'Diagnosis isn\'t complete. What\'s the best way to communicate the ETR?', o: ['Guess a time', 'Say there is no ETR yet, when diagnosis is expected, and a planning assumption', 'Say "soon"', 'Say nothing until it\'s done'], a: 1, e: 'Honest, with a time for the next update and a planning assumption.' },
            { t: 'tf', q: 'A courier fee can be justified if it saves a day of downtime.', a: true, e: 'Compare the fee to the cost of downtime.' }
          ],
          takeaways: ['Build ETRs from stages.', 'State confidence: high, medium, low.', 'Parallelize: order likely parts during diagnosis.', 'Spending a little can save a lot of downtime.']
        }
      ]
    },
    /* ---------------- M6 ---------------- */
    {
      id: 'm6', title: 'Dispatch and Operations Coordination', summary: 'How maintenance affects loads, appointments, drivers and equipment plans.',
      lessons: [
        {
          id: 'l1', title: 'How Maintenance Affects Loads and Drivers', minutes: 14,
          objectives: ['Explain the impact of maintenance on pickups and deliveries', 'Account for driver hours of service', 'Understand deadhead costs'],
          body: [
            `Every maintenance decision is also an operations decision. When a truck is down, a load, a driver, and a customer are affected.`,
            { tiles: [
              { icon: 'layers', title: 'Loads', text: 'A loaded trailer may be stuck with a broken tractor, or a load may need to be reassigned.' },
              { icon: 'clock', title: 'Appointments', text: 'Pickup and delivery windows can be tight. Missing them may cost fees, rescheduling, or customer trust.' },
              { icon: 'users', title: 'Driver schedules', text: 'Drivers have home-time plans and limited hours; a long repair may cost them a day.' },
              { icon: 'route', title: 'Deadhead', text: 'Miles driven empty (no revenue) — e.g., sending a truck to recover a load or to a shop.' }
            ] },
            { h: 'Hours of service' },
            `U.S. property-carrying drivers must follow [[HOS]] rules — for example, a limit of 11 hours driving within a 14-hour on-duty window after 10 consecutive hours off, among other limits. Time spent waiting at a shop can count against the driver\'s on-duty window depending on how it is logged. A 6-hour repair might leave the driver unable to finish the trip legally. Dispatch and safety manage HOS; your ETRs are what they plan with.`,
            { callout: { kind: 'info', title: 'Always ask dispatch', text: 'Before choosing between a fast-but-far shop and a slow-but-near shop, ask dispatch what matters most for this load: time, location, or the driver\'s hours.' } }
          ],
          example: { title: 'The 14-hour trap', text: `A driver started at 06:00. At 11:00 the truck broke down. The repair finished at 16:30. With the 14-hour window ending at 20:00, the driver had 3.5 hours left — not enough to reach a delivery 5 hours away. Knowing this, dispatch arranged a relay with a fresh driver.` },
          practical: { title: 'What does dispatch need?', exercise: {
            type: 'multi', prompt: 'A loaded truck will be down 8 hours. Which pieces of information help dispatch plan? (Select all that apply)',
            options: [
              { text: 'ETR and confidence level', correct: true, why: 'Timing is the core planning input.' },
              { text: 'Unit location and whether the trailer can be picked up by another tractor', correct: true, why: 'Enables recovery options.' },
              { text: 'The shop\'s labor rate', correct: false, why: 'Cost matters to maintenance, not dispatch\'s load plan.' },
              { text: 'Whether the driver can wait in the shop lounge or needs a hotel', correct: true, why: 'Affects driver care and HOS planning.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'What is deadhead?', o: ['Miles driven with no revenue load', 'A dead battery', 'A driver out of hours', 'A cancelled load'], a: 0, e: 'Deadhead miles are empty, non-revenue miles.' },
            { t: 'tf', q: 'A long repair can prevent a driver from legally finishing a trip even after the truck is fixed.', a: true, e: 'Hours-of-service limits may run out during downtime.' }
          ],
          takeaways: ['Maintenance decisions affect loads, appointments, drivers and customers.', 'HOS limits can turn a repair delay into a missed delivery.', 'Deadhead adds cost without revenue.', 'Ask dispatch what matters most for each load.']
        },
        {
          id: 'l2', title: 'Replacement Equipment and Recovery Plans', minutes: 13,
          objectives: ['Evaluate recovery options for a stranded load', 'Decide when to swap equipment', 'Coordinate replacement equipment'],
          body: [
            { table: { head: ['Option', 'When it makes sense', 'Trade-offs'], rows: [
              ['Wait for repair', 'Short ETR, flexible delivery', 'Lowest cost, but risk if ETR slips'],
              ['Power swap', 'Tractor down, trailer fine', 'Another tractor picks up the trailer — deadhead miles, needs available driver'],
              ['Trailer swap', 'Trailer down, cargo can be transloaded', 'Labor and time to transfer cargo'],
              ['Rental / loaner', 'Long repair, no spare units', 'Rental cost; may require setup'],
              ['Reschedule', 'Customer allows', 'Customer relationship impact']
            ] } },
            `Your role: give dispatch accurate facts (ETR, confidence, location, whether trailer is mobile) so they can choose. Often you also coordinate the logistics — where the swap happens, keys, paperwork, and the broken unit\'s path to repair.`,
            { callout: { kind: 'tip', title: 'Decide early', text: 'The later a recovery decision is made, the fewer options remain. If the ETR confidence is low, raise the recovery conversation early.' } }
          ],
          example: { title: 'Power swap in Little Rock', text: `<span class="mono">T-118</span> broke down with a time-sensitive load. The ETR was tomorrow afternoon. <span class="mono">T-140</span> was empty 50 miles away. Dispatch sent T-140 to pick up the trailer; the coordinator arranged the shop to release the trailer, and T-118 stayed for repair. The load arrived on time.` },
          practical: { title: 'Choose the recovery', exercise: {
            type: 'choose', prompt: 'Tractor down, ETR 30+ hours (parts). Loaded trailer is fine. Delivery tomorrow 08:00, 300 miles away. An empty tractor is 40 miles away. Best plan?',
            options: [
              { text: 'Wait for the repair', correct: false, why: 'Guarantees a missed delivery.' },
              { text: 'Power swap: send the empty tractor to take the trailer; keep the broken tractor at the shop', correct: true, why: 'Protects the delivery with minimal deadhead.' },
              { text: 'Transload the cargo to another trailer', correct: false, why: 'The trailer is fine — transloading adds labor and time for no reason.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'A trailer is damaged and cannot move, but the cargo is intact. Best option is usually:', o: ['Power swap', 'Trailer swap / transload', 'Reschedule only', 'Wait'], a: 1, e: 'The cargo must move to a working trailer.' },
            { t: 'tf', q: 'Recovery decisions are best made as late as possible.', a: false, e: 'Early decisions preserve more options.' }
          ],
          takeaways: ['Options: wait, power swap, trailer swap, rental, reschedule.', 'Give dispatch facts early so they can choose.', 'Coordinate swap logistics and the broken unit\'s repair path.', 'Low ETR confidence = raise recovery early.']
        }
      ]
    },
    /* ---------------- M7 ---------------- */
    {
      id: 'm7', title: 'Fleet Tracking', summary: 'Track units, PM status, open repairs, downtime, repeat failures and vendor activity.',
      lessons: [
        {
          id: 'l1', title: 'What to Track and Why', minutes: 12,
          objectives: ['List the key fleet tracking data points', 'Explain how each supports decisions', 'Recognize early warning signs in fleet data'],
          body: [
            { table: { head: ['Track', 'Why it matters'], rows: [
              ['Trucks and trailers (status, location)', 'Know what\'s available and what\'s down'],
              ['Mileage / engine hours', 'Drive PM scheduling and warranty checks'],
              ['PM status', 'Prevent failures and compliance problems'],
              ['Open repairs', 'Manage follow-ups and ETRs'],
              ['Downtime', 'Measure availability and find delays'],
              ['Repeat failures', 'Detect root-cause problems and warranty claims'],
              ['Vendor activity', 'Compare cost, speed and quality']
            ] } },
            { callout: { kind: 'warning', title: 'Early warning signs', text: 'Same unit with the same complaint twice in 30 days. A vendor whose repairs keep coming back. PM compliance dropping. Downtime rising while repair counts are flat (a process problem). These patterns deserve attention before they become crises.' } },
            `The next lesson puts this into practice with an interactive fleet board.`
          ],
          example: { title: 'Spotting the repeat', text: `During weekly review the coordinator notices <span class="mono">T-120</span> has three aftertreatment cases in 60 days at two different shops. Individually each looked routine. Together they point to an unresolved root cause — and possibly warranty coverage on the first repair.` },
          practical: { title: 'Spot the warning sign', exercise: {
            type: 'multi', prompt: 'Which of these deserve follow-up? (Select all that apply)',
            options: [
              { text: 'T-120: DPF-related repairs on 04/02, 04/28, 05/30', correct: true, why: 'Repeat failure pattern.' },
              { text: 'T-131: One tire replaced after road debris', correct: false, why: 'A one-off event with a clear external cause.' },
              { text: 'Vendor X: 4 of last 10 repairs returned within 30 days', correct: true, why: 'Quality concern with the vendor.' },
              { text: 'PM compliance fell from 94% to 81% this month', correct: true, why: 'Significant decline — find the cause.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'Downtime is rising while the number of repairs is flat. This most likely indicates:', o: ['More breakdowns', 'A process problem such as slow approvals, parts or shop backlog', 'Better maintenance', 'Fewer trucks'], a: 1, e: 'Same work, more time = a process bottleneck.' },
            { t: 'tf', q: 'A single tire replaced after road debris is a repeat-failure pattern.', a: false, e: 'Repeat patterns are the same problem recurring on a unit or with a vendor.' }
          ],
          takeaways: ['Track status, mileage, PM, open repairs, downtime, repeats and vendors.', 'Each data point supports a specific decision.', 'Look for patterns, not just individual cases.', 'Rising downtime with flat repairs = process issue.']
        },
        {
          id: 'l2', title: 'Using the Fleet Dashboard', minutes: 18,
          objectives: ['Navigate a fleet status dashboard', 'Filter and sort to find priorities', 'Turn dashboard data into actions'],
          body: [
            `Use the interactive fleet board below. Filter by status, search units, sort columns, and open a unit to see its history. Then answer the knowledge check using what you find.`,
            { widget: 'fleet' },
            { callout: { kind: 'tip', title: 'Morning routine', text: '1) Check units down and their ETRs. 2) Check overdue/due PMs. 3) Review repeat-failure flags. 4) Plan today\'s follow-ups.' } }
          ],
          example: { title: 'From data to action', text: `Filtering the board to "Overdue" PM status shows two units. Sorting by downtime shows which in-shop units are hurting availability most. Opening a unit\'s history shows whether a repeat failure deserves a root-cause review. Each view becomes a to-do list.` },
          practical: { title: 'Your first review', blocks: [
            { ol: ['Filter to units that are not Active — note each unit\'s status and ETR.', 'Filter PM status to Overdue — which units need scheduling?', 'Sort by repeat failures — which unit needs a root-cause review?', 'Open that unit and read its history.'] }
          ] },
          check: [
            { t: 'mc', q: 'On the fleet board, which unit shows the highest number of repeat failures?', o: ['T-114', 'T-120', 'TR-532', 'T-131'], a: 1, e: 'T-120 has repeated aftertreatment failures — a candidate for root-cause analysis.' },
            { t: 'mc', q: 'What is the first thing to review each morning?', o: ['Vendor invoices', 'Units down and their ETRs', 'Next year\'s budget', 'Tire brands'], a: 1, e: 'Down units affect today\'s operations the most.' }
          ],
          takeaways: ['Filter and sort to find priorities fast.', 'Status, PM, repeats and downtime each produce a to-do list.', 'Open unit histories to understand patterns.', 'Build a consistent daily review routine.']
        }
      ]
    },
    /* ---------------- M8 ---------------- */
    {
      id: 'm8', title: 'Cost Control', summary: 'Repair costs, preventive vs reactive, cost per mile, vendor pricing and downtime cost.',
      lessons: [
        {
          id: 'l1', title: 'Repair Costs and Cost per Mile', minutes: 15,
          objectives: ['Calculate maintenance cost per mile', 'Compare preventive and reactive maintenance costs', 'Identify the main cost drivers'],
          body: [
            `[[CPM]] (cost per mile) normalizes spending so units and fleets can be compared: <strong>maintenance cost ÷ miles driven</strong>.`,
            { widget: 'calc:cpm' },
            { h: 'Preventive vs reactive' },
            { compare: {
              yes: { title: 'Preventive', items: ['Planned timing and location', 'Negotiated or in-house rates', 'No tow, no roadside premium', 'No missed loads'] },
              no: { title: 'Reactive', items: ['Happens at the worst time and place', 'Roadside and after-hours premiums', 'Tow costs', 'Missed loads, driver pay, customer impact', 'Secondary damage (e.g., overheating damages engine)'] }
            } },
            { callout: { kind: 'info', title: 'The hidden multiplier', text: 'A reactive repair usually costs more than the repair itself: tow, premiums, downtime, recovery and customer impact. That is why PM compliance is one of the strongest cost-control tools.' } }
          ],
          example: { title: 'Two tractors, same model', text: `<span class="mono">T-114</span>: $9,800 over 120,000 miles = $0.082/mi. <span class="mono">T-120</span>: $18,600 over 110,000 miles = $0.169/mi. T-120 costs roughly twice as much per mile — and its history shows repeated aftertreatment repairs. CPM points you to where to look.` },
          practical: { title: 'Calculate', exercise: {
            type: 'extract', sourceLabel: 'Unit T-126 — last 12 months',
            source: 'Parts: $6,200\nLabor: $4,900\nTires: $2,400\nOther (tows, fees): $500\nMiles driven: 125,000',
            fields: [
              { label: 'Total maintenance cost ($)', accept: ['14000', '14,000', '$14,000', '$14000'] },
              { label: 'Cost per mile ($)', accept: ['0.112', '.112', '0.11', '$0.112', '0.1120'] }
            ]
          } },
          check: [
            { t: 'mc', q: 'Cost per mile is calculated as:', o: ['Miles ÷ cost', 'Maintenance cost ÷ miles driven', 'Cost × miles', 'Revenue ÷ miles'], a: 1, e: 'CPM = cost ÷ miles.' },
            { t: 'tf', q: 'Reactive repairs often cost more than the repair invoice alone.', a: true, e: 'Tows, premiums, downtime and recovery add hidden costs.' }
          ],
          takeaways: ['CPM = maintenance cost ÷ miles.', 'Use CPM to compare units and spot outliers.', 'Reactive maintenance carries hidden costs.', 'PM compliance is a primary cost-control lever.']
        },
        {
          id: 'l2', title: 'Repeat Repairs, Vendor Pricing and Downtime Cost', minutes: 15,
          objectives: ['Quantify the cost of downtime', 'Compare vendor options by total cost', 'Recognize the cost of repeat repairs'],
          body: [
            `The cheapest invoice is not always the cheapest repair. Include downtime and the risk of the repair coming back.`,
            { widget: 'calc:downtime' },
            { h: 'Repeat repairs' },
            `A repair that fails again costs the second repair, a second round of downtime, possibly another tow, and lost confidence. Ask for parts and labor warranties on repairs, and track comebacks by vendor.`,
            { h: 'Vendor pricing' },
            `Compare vendors on <strong>total cost</strong>: labor rate × realistic hours, parts pricing, fees, tow distance, and expected downtime. A higher rate with faster turnaround and fewer comebacks is often the better deal.`,
            { widget: 'calc:compare' }
          ],
          example: { title: 'The cheap shop that wasn\'t', text: `Shop A quoted $1,200 with a 3-day wait. Shop B quoted $1,550 and could finish today. With downtime valued at $800/day, Shop A\'s real cost was roughly $1,200 + $2,400 = $3,600 versus Shop B\'s $1,550 + $0 = $1,550.` },
          practical: { title: 'Total cost thinking', exercise: {
            type: 'choose', prompt: 'Downtime costs $900/day. Vendor A: $2,000, done in 1 day. Vendor B: $1,500, done in 3 days. Which is cheaper in total?',
            options: [
              { text: 'Vendor A: $2,900 total', correct: true, why: '$2,000 + 1 × $900 = $2,900 vs B: $1,500 + 3 × $900 = $4,200.' },
              { text: 'Vendor B: $1,500 total', correct: false, why: 'Ignores three days of downtime ($2,700).' },
              { text: 'They are equal', correct: false, why: 'A is $1,300 cheaper in total.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'Which is part of the true cost of a repeat repair?', o: ['Only the second invoice', 'Second invoice, additional downtime, possible tow and lost confidence', 'Nothing — warranty always covers it', 'Only driver pay'], a: 1, e: 'Repeats multiply cost beyond the invoice.' },
            { t: 'tf', q: 'The vendor with the lowest labor rate always produces the lowest total cost.', a: false, e: 'Hours, speed, comebacks, tow distance and downtime matter.' }
          ],
          takeaways: ['Downtime has a real daily cost — use it in decisions.', 'Compare vendors on total cost, not rate alone.', 'Repeat repairs multiply costs.', 'Ask for and track repair warranties and comebacks.']
        }
      ]
    }
  ],
  final: { id: 'advanced-final', kind: 'exam', title: 'Advanced Final Project: Operations Board', minutes: 35 }
};

/* ---------------------------------------------------------------------------
   CONTENT — EXPERT: Maintenance Coordination & Fleet Management
   --------------------------------------------------------------------------- */
const EXPERT = {
  id: 'expert',
  level: 'Expert',
  title: 'Maintenance Coordination & Fleet Management',
  short: 'Management',
  icon: 'award',
  color: 'var(--track-expert)',
  summary: 'Think like a fleet maintenance leader: strategy, analytics, root cause analysis, complex coordination, vendor performance, warranty, leadership and emergency operations.',
  outcomes: ['Measure fleet performance with the right KPIs', 'Find and eliminate root causes of repeat failures', 'Coordinate complex, multi-party breakdowns under pressure', 'Lead communication and escalation across the organization'],
  modules: [
    /* ---------------- M1 ---------------- */
    {
      id: 'm1', title: 'Fleet Maintenance Strategy', summary: 'Planning, reliability, PM strategy, lifecycle and replacement.',
      lessons: [
        {
          id: 'l1', title: 'Maintenance Planning and Fleet Reliability', minutes: 15,
          objectives: ['Define reliability and availability', 'Compare PM strategies', 'Build a maintenance plan around fleet goals'],
          body: [
            `At the expert level, the question shifts from "how do I fix this truck?" to "how do I keep the fleet available at the right cost?"`,
            { tiles: [
              { icon: 'shield', title: 'Reliability', text: 'How rarely equipment fails in service. Measured with metrics like breakdown frequency and MTBF.' },
              { icon: 'activity', title: 'Availability', text: 'Share of time equipment is ready to work. Reduced by every hour of downtime — planned or not.' },
              { icon: 'dollar', title: 'Cost', text: 'Total maintenance spend and cost per mile, including the hidden costs of failures.' }
            ] },
            { h: 'PM strategies' },
            { table: { head: ['Strategy', 'Approach', 'Strength', 'Limitation'], rows: [
              ['Interval-based', 'Fixed mileage/time/hours', 'Simple and predictable', 'May service too early or too late'],
              ['Condition-based', 'Service when inspections or data show need (e.g., oil analysis, brake measurements)', 'Targets actual wear', 'Needs good data and discipline'],
              ['Predictive', 'Use telematics/fault trends to anticipate failures', 'Prevents roadside events', 'Requires data systems and analysis'],
              ['Run-to-failure', 'Deliberately allow failure on low-impact items', 'Avoids unnecessary work', 'Only acceptable for non-critical, low-cost items']
            ] } },
            { callout: { kind: 'info', title: 'A plan is a set of choices', text: 'Strong fleets mix strategies: intervals for fluids and inspections, condition-based for brakes and tires, predictive for aftertreatment and engines using fault data. Safety-critical systems are never run-to-failure.' } }
          ],
          example: { title: 'Brake measurements instead of fixed intervals', text: `A fleet replaced brake linings every set interval regardless of wear. By measuring lining thickness and pushrod stroke at each PM (condition-based), they replaced only worn components and caught fast-wearing units earlier — lowering cost and reducing brake-related out-of-service events.` },
          practical: { title: 'Match the strategy', exercise: {
            type: 'classify', prompt: 'Choose the most suitable strategy for each item.', categories: ['Interval-based', 'Condition-based', 'Predictive'],
            items: [
              { text: 'Engine oil and filters', answer: 'Interval-based', why: 'Classic interval item (sometimes extended with oil analysis).' },
              { text: 'Brake linings on a mixed-duty fleet', answer: 'Condition-based', why: 'Wear varies by duty — measure and replace when needed.' },
              { text: 'Aftertreatment faults trending across the fleet', answer: 'Predictive', why: 'Fault-code trends can predict failures before derates.' },
              { text: 'Annual inspection', answer: 'Interval-based', why: 'Regulatory interval.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'Which is never acceptable for safety-critical systems?', o: ['Interval-based', 'Condition-based', 'Run-to-failure', 'Predictive'], a: 2, e: 'Safety-critical components must not be allowed to fail in service.' },
            { t: 'tf', q: 'Availability is reduced by planned maintenance as well as breakdowns.', a: true, e: 'Any time a unit can\'t work reduces availability — which is why PM timing matters.' }
          ],
          takeaways: ['Balance reliability, availability and cost.', 'Mix interval, condition-based and predictive strategies.', 'Never run safety-critical items to failure.', 'Plan PMs to minimize availability impact.']
        },
        {
          id: 'l2', title: 'Failure Trends, Lifecycle and Replacement Planning', minutes: 14,
          objectives: ['Identify failure trends across the fleet', 'Understand vehicle lifecycle cost', 'Support replacement planning decisions'],
          body: [
            `Failure trends reveal systemic issues: a component that fails across a model year, a vendor whose repairs don\'t hold, a route that destroys tires.`,
            { h: 'Lifecycle cost' },
            `Maintenance cost per mile generally rises as equipment ages, while the value of the vehicle falls. At some point, keeping an aging unit costs more — in repairs, downtime and reliability — than replacing it.`,
            { widget: 'lifecycle' },
            { h: 'What the coordinator contributes' },
            { ul: ['Accurate cost and downtime history per unit', 'Repeat-failure and major-component failure records', 'Early warning on units with rising CPM', 'Input on which specs/configurations perform best'] },
            { callout: { kind: 'tip', title: 'Data wins replacement debates', text: 'Replacement decisions are made by fleet leadership and finance. The coordinator\'s clean data — CPM trends, downtime, major repairs — is what makes those decisions sound.' } }
          ],
          example: { title: 'The expensive old unit', text: `<span class="mono">T-101</span> (8 years, 890,000 miles) had $31,000 in maintenance last year and 41 days of downtime. Newer units averaged $11,000 and 6 days. The coordinator\'s report — with costs, downtime and upcoming major repairs — helped leadership move T-101 up the replacement schedule.` },
          practical: { title: 'Read the trend', exercise: {
            type: 'choose', prompt: 'Five units of the same model year all had EGR cooler failures between 380,000 and 420,000 miles. Eight other units of that model are at 330,000–370,000 miles. What should you recommend?',
            options: [
              { text: 'Wait for each to fail and repair on the roadside', correct: false, why: 'Predictable failures handled reactively cost more and risk engine damage.' },
              { text: 'Share the trend with the fleet manager, check warranty/manufacturer bulletins, and plan inspections on the at-risk units at their next PMs', correct: true, why: 'Uses the trend to prevent failures and recover costs.' },
              { text: 'Replace the EGR coolers on all eight immediately without review', correct: false, why: 'Premature — inspect and verify, check warranty and bulletins first.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'As a vehicle ages, maintenance cost per mile typically:', o: ['Falls', 'Stays flat', 'Rises', 'Becomes zero'], a: 2, e: 'Older equipment generally costs more to maintain.' },
            { t: 'tf', q: 'Coordinators typically make the final vehicle replacement decision alone.', a: false, e: 'Leadership and finance decide; coordinators supply the data.' }
          ],
          takeaways: ['Look for failure trends by model, component, vendor and route.', 'Lifecycle: rising maintenance cost vs falling value.', 'Clean cost and downtime data drive replacement decisions.', 'Use trends to act before predictable failures.']
        }
      ]
    },
    /* ---------------- M2 ---------------- */
    {
      id: 'm2', title: 'Advanced Fleet Analytics', summary: 'The KPIs that measure a maintenance operation — with interactive calculators.',
      lessons: [
        {
          id: 'l1', title: 'Cost, Downtime and Compliance KPIs', minutes: 18,
          objectives: ['Calculate core maintenance KPIs', 'Interpret what each KPI tells you', 'Avoid common measurement mistakes'],
          body: [
            { table: { head: ['KPI', 'Formula', 'What it tells you'], rows: [
              ['Cost per mile', 'Maintenance cost ÷ miles', 'Efficiency of spend, comparable across units'],
              ['Cost per vehicle', 'Maintenance cost ÷ number of vehicles', 'Average spend per unit over a period'],
              ['Downtime %', 'Downtime hours ÷ total available hours × 100', 'Share of time units are unavailable'],
              ['PM compliance', 'PMs completed on time ÷ PMs due × 100', 'Discipline of the PM program'],
              ['Repeat repair rate', 'Repeat repairs ÷ total repairs × 100', 'Quality of diagnosis and repair'],
              ['Breakdown frequency', 'Road calls ÷ miles (e.g., per 100,000 mi)', 'In-service reliability']
            ] } },
            { widget: 'calc:pm' },
            { callout: { kind: 'warning', title: 'Define before you measure', text: 'Decide exactly what counts: Does downtime include PMs? What window defines a "repeat" (e.g., same system within 30 days)? What counts as "on time" for a PM? Inconsistent definitions make KPIs meaningless.' } }
          ],
          example: { title: 'Downtime percentage', text: `A 50-unit fleet over 30 days has 50 × 720 = 36,000 available hours. Units were down a combined 1,440 hours. Downtime % = 1,440 ÷ 36,000 = 4.0%. Availability = 96.0%.` },
          practical: { title: 'Calculate the KPIs', exercise: {
            type: 'extract', sourceLabel: 'Monthly data — 40-unit fleet',
            source: 'Maintenance cost: $62,000\nMiles driven: 480,000\nPMs due: 36   PMs done on time: 33\nTotal repairs: 90   Repeat repairs (same system ≤30 days): 9\nRoad calls: 12',
            fields: [
              { label: 'Cost per mile ($, 3 decimals)', accept: ['0.129', '.129', '0.13'] },
              { label: 'Cost per vehicle ($)', accept: ['1550', '1,550', '$1,550', '$1550'] },
              { label: 'PM compliance (%)', accept: ['91.7', '91.67', '92', '91.7%', '92%', '91.67%'] },
              { label: 'Repeat repair rate (%)', accept: ['10', '10%', '10.0'] },
              { label: 'Road calls per 100,000 miles', accept: ['2.5', '2.50'], full: true }
            ]
          } },
          check: [
            { t: 'mc', q: 'PM compliance is calculated as:', o: ['PMs due ÷ PMs done', 'PMs completed on time ÷ PMs due × 100', 'PM cost ÷ total cost', 'Units ÷ PMs'], a: 1, e: 'On-time PMs as a share of PMs due.' },
            { t: 'mc', q: 'Why must a "repeat repair" be clearly defined?', o: ['It doesn\'t matter', 'Without a consistent definition, the KPI can\'t be compared over time', 'To increase the number', 'Because shops require it'], a: 1, e: 'Consistent definitions make KPIs trustworthy.' }
          ],
          takeaways: ['Know the formulas: CPM, cost per vehicle, downtime %, PM compliance, repeat rate, breakdown frequency.', 'Each KPI answers a different question.', 'Define terms before measuring.', 'Compare trends over time, not single points.']
        },
        {
          id: 'l2', title: 'Reliability Metrics, Vendor Performance and Availability', minutes: 18,
          objectives: ['Calculate MTBF and MTTR', 'Calculate fleet availability', 'Use a KPI dashboard to find problems'],
          body: [
            { tiles: [
              { icon: 'shield', title: 'MTBF', text: 'Mean Time Between Failures = operating time ÷ number of failures. Higher is better.' },
              { icon: 'clock', title: 'MTTR', text: 'Mean Time To Repair = total repair (downtime) hours ÷ number of repairs. Lower is better.' },
              { icon: 'activity', title: 'Fleet availability', text: '(Available hours − downtime hours) ÷ available hours × 100.' },
              { icon: 'star', title: 'Vendor performance', text: 'Turnaround time, cost vs estimate, comeback rate, communication — per vendor.' }
            ] },
            { widget: 'calc:mtbf' },
            { widget: 'calc:avail' },
            { h: 'Reading a KPI dashboard' },
            { widget: 'kpi' }
          ],
          example: { title: 'MTBF vs MTTR', text: `A fleet improved MTBF from 3,100 to 3,900 operating hours by fixing a recurring aftertreatment issue — fewer failures. Separately, MTTR fell from 26 to 18 hours after approvals were moved to a 24/7 on-call process — faster repairs. Two different problems, two different fixes.` },
          practical: { title: 'Which metric moved?', exercise: {
            type: 'classify', prompt: 'Which KPI does each improvement most directly affect?', categories: ['MTBF', 'MTTR', 'PM compliance'],
            items: [
              { text: 'Pre-approving common repairs up to a limit', answer: 'MTTR', why: 'Faster approval shortens repair duration.' },
              { text: 'Eliminating a recurring sensor failure', answer: 'MTBF', why: 'Fewer failures = longer time between them.' },
              { text: 'Scheduling PMs during driver home time', answer: 'PM compliance', why: 'More PMs completed on time.' },
              { text: 'Stocking common parts at terminal shops', answer: 'MTTR', why: 'Fewer parts delays shorten repairs.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'A fleet logged 60,000 operating hours with 20 failures. MTBF is:', o: ['300 h', '3,000 h', '1,200 h', '20 h'], a: 1, e: '60,000 ÷ 20 = 3,000 hours.' },
            { t: 'mc', q: '20 repairs took a total of 400 downtime hours. MTTR is:', o: ['20 h', '8,000 h', '40 h', '2 h'], a: 0, e: '400 ÷ 20 = 20 hours.' }
          ],
          takeaways: ['MTBF measures reliability; MTTR measures repair speed.', 'Availability combines them into "ready to work" time.', 'Vendor performance needs multiple measures.', 'Different problems need different fixes — the metrics tell you which.']
        }
      ]
    },
    /* ---------------- M3 ---------------- */
    {
      id: 'm3', title: 'Root Cause Analysis', summary: 'From symptom to failure to root cause — and stopping repeat failures.',
      lessons: [
        {
          id: 'l1', title: 'Symptom → Failure → Root Cause', minutes: 15,
          objectives: ['Distinguish symptom, failure and root cause', 'Apply the "5 Whys" technique', 'Gather the right data for analysis'],
          body: [
            { flow: ['Symptom', 'Failure', 'Root cause'], hl: [2] },
            { table: { head: ['Level', 'Definition', 'Example'], rows: [
              ['Symptom', 'What was observed', 'Truck overheating'],
              ['Failure', 'The component that failed', 'Water pump leaking'],
              ['Root cause', 'Why it failed — the underlying reason that, if fixed, prevents recurrence', 'Wrong coolant mix causing seal degradation']
            ] } },
            `Fixing the failure returns the truck to service. Fixing the root cause keeps it — and the rest of the fleet — from failing again.`,
            { h: 'The 5 Whys' },
            `Ask "why?" repeatedly until you reach a cause you can act on. It\'s simple, but powerful when grounded in evidence — not assumptions.`,
            { timeline: [
              { title: 'Why did T-114 overheat?', text: 'The water pump leaked coolant.' },
              { title: 'Why did the water pump leak?', text: 'The seal failed prematurely.' },
              { title: 'Why did the seal fail early?', text: 'Coolant tests showed contamination and incorrect mixture.' },
              { title: 'Why was the coolant incorrect?', text: 'Top-offs used whatever coolant was available on the road.' },
              { title: 'Why were mixed coolants used?', text: 'Drivers had no approved coolant or guidance. → Root cause: no top-off standard. Fix: approved coolant in trucks + driver guidance + coolant testing at PM.' }
            ] },
            { h: 'Data sources' },
            { ul: ['Repair history (dates, mileage, parts, vendors)', 'Driver reports and DVIRs', 'Parts failure records and returned parts', 'Maintenance trends across similar units', 'Fault code history from telematics'] }
          ],
          example: { title: 'Three turbos in a year', text: `A unit went through three turbochargers. Each shop replaced the turbo — fixing the failure. RCA found an oil supply restriction starving the turbo. Fixing the oil line stopped the failures.` },
          practical: { title: 'Order the 5 Whys', exercise: {
            type: 'order', prompt: 'Arrange this chain from symptom to root cause.',
            items: ['Trailer tires wearing out rapidly', 'Irregular wear on inside edges of one axle', 'Axle misaligned', 'Alignment not checked after suspension repair', 'No post-repair alignment check in procedure']
          } },
          check: [
            { t: 'mc', q: 'Which statement is a root cause rather than a failure?', o: ['Alternator failed', 'Belt tensioner broke', 'Belt tensioner not included in PM inspection checklist', 'Battery light on'], a: 2, e: 'A missing inspection step explains why failures occur — fixing it prevents recurrence.' },
            { t: 'tf', q: 'Replacing the failed part always eliminates the root cause.', a: false, e: 'Replacing the part fixes the failure; the underlying reason may remain.' }
          ],
          takeaways: ['Symptom → failure → root cause.', 'Fixing the root cause prevents recurrence.', 'Use 5 Whys grounded in evidence.', 'Combine repair history, driver reports, parts data and trends.']
        },
        {
          id: 'l2', title: 'RCA in Practice: The Repeat Failure', minutes: 16,
          objectives: ['Conduct an RCA using repair history', 'Identify contributing factors', 'Propose corrective actions'],
          body: [
            `<span class="mono">T-120</span> has had repeated aftertreatment problems. Review the history.`,
            { table: { head: ['Date', 'Miles', 'Complaint', 'Repair', 'Vendor'], rows: [
              ['04/02', '401,220', 'Derate, DPF lamp', 'Parked regen, cleared codes', 'Mobile A'],
              ['04/28', '407,900', 'Derate, DPF lamp', 'DPF cleaned', 'Shop B'],
              ['05/30', '415,300', 'Derate, DPF lamp', 'DPF outlet temp sensor replaced', 'Dealer C'],
              ['06/05', '416,800', 'Excess idling noted', 'Driver report', '—']
            ] } },
            { h: 'Analysis' },
            { accordion: [
              { title: 'Pattern', text: 'Three derates in about 60 days, ~7,000 miles apart. Each repair addressed the immediate failure (a loaded DPF) but not why the DPF kept loading.' },
              { title: 'Contributing factors', text: 'High idle time reduces exhaust temperatures, limiting passive regeneration. Clearing codes without finding the cause. A failing sensor may have been present since April. Three different vendors meant no one saw the whole history.' },
              { title: 'Probable root cause', text: 'A combination: a failing sensor preventing successful regens, aggravated by heavy idling. Confirmed by the dealer\'s sensor finding and the idle data.' },
              { title: 'Corrective actions', text: 'Verify repair holds (monitor regen data). Address idling with operations/driver guidance. Share full history with vendors. Check warranty on the April/May work. Review other units with similar idle profiles.' }
            ] },
            { callout: { kind: 'tip', title: 'Send the history with the truck', text: 'Many repeat failures persist because each shop sees only today\'s complaint. Include relevant history in every repair request.' } }
          ],
          example: { title: 'Result', text: `After the sensor replacement and an idle-reduction plan, T-120 ran four months without an aftertreatment event. The fleet also added a rule: any unit with two derates in 60 days triggers an RCA review.` },
          practical: { title: 'Pick the corrective actions', exercise: {
            type: 'multi', prompt: 'Which corrective actions address root causes for T-120? (Select all that apply)',
            options: [
              { text: 'Clear the codes whenever the lamp comes on', correct: false, why: 'Clearing codes hides the problem.' },
              { text: 'Work with operations to reduce excessive idling', correct: true, why: 'Addresses a contributing factor.' },
              { text: 'Include full repair history with every repair request', correct: true, why: 'Prevents shops from repeating incomplete repairs.' },
              { text: 'Create an RCA trigger: 2 derates in 60 days', correct: true, why: 'A systemic control for future repeats.' },
              { text: 'Switch to a new vendor each time', correct: false, why: 'Fragmenting history makes repeats more likely.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'Why did T-120\'s repairs keep failing?', o: ['Bad luck', 'Each repair treated the immediate failure, not the underlying causes', 'The driver damaged it', 'DPFs cannot be repaired'], a: 1, e: 'Without addressing why the DPF loaded, it kept loading.' },
            { t: 'wwyd', q: 'A shop wants to clear codes and release the truck for a third derate in 60 days. You:', o: ['Approve — fastest option', 'Ask for root-cause diagnosis, share the full history, and check warranty on recent repairs', 'Send it to a different shop without history', 'Ground the truck permanently'], a: 1, e: 'Break the cycle with diagnosis and history.' }
          ],
          takeaways: ['Repair history reveals patterns individual repairs miss.', 'Look for contributing factors, not just a single part.', 'Share history with every vendor.', 'Create triggers that start RCA automatically.']
        }
      ]
    },
    /* ---------------- M4 ---------------- */
    {
      id: 'm4', title: 'Complex Breakdown Coordination', summary: 'Coordinate multi-party breakdowns under time pressure.',
      lessons: [
        {
          id: 'l1', title: 'Running Parallel Workstreams', minutes: 15,
          objectives: ['Break a complex breakdown into workstreams', 'Sequence decisions under pressure', 'Maintain control and communication'],
          body: [
            `Complex breakdowns — loaded truck, deadline, parts shortage, dispatch pressure — overwhelm people who handle them one call at a time. Experts run parallel workstreams.`,
            { tiles: [
              { icon: 'shield', title: '1. Safety', text: 'Driver and vehicle secure. Safety-critical defects identified. Non-negotiable first step.' },
              { icon: 'wrench', title: '2. Repair', text: 'Vendor, diagnosis, parts, ETR. The "fix the truck" track.' },
              { icon: 'layers', title: '3. Load', text: 'Protect the freight: recovery, swap, reschedule — with dispatch.' },
              { icon: 'users', title: '4. People', text: 'Driver care (food, hotel, HOS), customer communication via ops.' },
              { icon: 'dollar', title: '5. Cost', text: 'Approvals, warranty checks, cost-versus-downtime trade-offs.' },
              { icon: 'file', title: '6. Record', text: 'A running time-stamped log of everything.' }
            ] },
            { callout: { kind: 'tip', title: 'Decide the next decision', text: 'At any moment, ask: What is the next decision, who makes it, and what information do they need? Then get that information.' } },
            { h: 'Communication cadence' },
            `During complex events, set a predictable update rhythm (e.g., every 60 minutes or at each milestone) so stakeholders stop calling you for status and you can work.`
          ],
          example: { title: 'The 5-minute plan', text: `On a brake failure with a loaded reefer and a 10:00 delivery: Safety — driver off roadway, triangles out. Repair — mobile brake tech ETA 50 min. Load — dispatch checking for a recovery tractor as backup. People — driver has food; HOS checked. Cost — estimate will be routed immediately. Record — case log started. Update cadence set: every 45 minutes.` },
          practical: { title: 'Assign the workstream', exercise: {
            type: 'classify', prompt: 'Which workstream does each action belong to?', categories: ['Safety', 'Repair', 'Load', 'People'],
            items: [
              { text: 'Confirm warning triangles are placed', answer: 'Safety', why: 'Securing the scene.' },
              { text: 'Ask the dealer for parts availability', answer: 'Repair', why: 'Fixing the truck.' },
              { text: 'Ask dispatch for a recovery tractor option', answer: 'Load', why: 'Protecting the freight.' },
              { text: 'Book a hotel for the driver near the shop', answer: 'People', why: 'Driver care.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'Which workstream always comes first?', o: ['Cost', 'Load', 'Safety', 'Record'], a: 2, e: 'Safety first, always.' },
            { t: 'tf', q: 'Setting an update cadence reduces interruptions during complex events.', a: true, e: 'Predictable updates reduce status calls.' }
          ],
          takeaways: ['Run six workstreams: safety, repair, load, people, cost, record.', 'Always ask: what is the next decision?', 'Set an update cadence.', 'Log everything as it happens.']
        },
        {
          id: 'l2', title: 'Simulation: Breakdown Under Pressure', minutes: 20,
          objectives: ['Coordinate a tractor breakdown during a load', 'Handle a parts shortage and shop availability problem', 'Balance dispatch pressure with safety'],
          body: [
            `Work through the decision tree below. Your choices determine the outcome. Replay it to explore different paths.`,
            { widget: 'tree:complex' },
            { callout: { kind: 'info', title: 'What experts optimize', text: 'Not "the fastest repair" — the best overall outcome: safe, load protected, cost reasonable, stakeholders informed, and nothing lost in documentation.' } }
          ],
          example: { title: 'Why paths diverge', text: `Two coordinators faced the same breakdown. One focused only on the repair and waited on a part for 2 days — the load missed its deadline. The other started a recovery plan in parallel; when the part delay was confirmed, a swap was ready within the hour.` },
          practical: { title: 'Reflect', blocks: [
            { ul: ['Which decision had the largest impact on the outcome?', 'At what point should the recovery plan have started?', 'What information did dispatch need, and when?'] }
          ] },
          check: [
            { t: 'wwyd', q: 'The only nearby shop can\'t start for 2 days; the part is also 2 days out. The load is due tomorrow. What first?', o: ['Wait for the shop', 'Start the recovery plan with dispatch now while sourcing faster repair options', 'Tell the driver to keep driving', 'Cancel the load'], a: 1, e: 'Parallel workstreams: protect the load while pursuing the repair.' },
            { t: 'mc', q: 'Dispatch pushes to run a truck with a brake defect "just 40 miles." Correct response?', o: ['Allow — it\'s short', 'Decline, explain it\'s a safety-critical defect, and offer the fastest safe alternatives', 'Let the driver decide alone', 'Ignore the call'], a: 1, e: 'Short distance doesn\'t change a safety-critical defect.' }
          ],
          takeaways: ['Start recovery planning early when ETR confidence is low.', 'Safety-critical defects are never negotiable.', 'Parallel workstreams create options.', 'Optimize the overall outcome, not one variable.']
        }
      ]
    },
    /* ---------------- M5 ---------------- */
    {
      id: 'm5', title: 'Vendor Performance', summary: 'Evaluate and manage vendors with data.',
      lessons: [
        {
          id: 'l1', title: 'Building a Vendor Scorecard', minutes: 15,
          objectives: ['Choose meaningful vendor criteria', 'Weight criteria by fleet priorities', 'Compare vendors fairly'],
          body: [
            { table: { head: ['Criterion', 'How to measure'], rows: [
              ['Repair time', 'Average hours from arrival to release'],
              ['Cost', 'Average invoice vs estimate; labor rate; fees'],
              ['Quality', 'Comeback rate (same issue within 30 days)'],
              ['Repeat failures', 'Repeat repairs attributable to the vendor'],
              ['Communication', 'Diagnosis on time, proactive updates, clear estimates'],
              ['Availability', 'How quickly they can start; after-hours support'],
              ['Coverage', 'Locations along fleet lanes']
            ] } },
            `Weights reflect priorities. A time-sensitive fleet might weight repair time heavily; a cost-focused fleet might weight cost. Adjust the weights below and watch the ranking change.`,
            { widget: 'vendorScore' }
          ],
          example: { title: 'Fast but costly', text: `Vendor A is the fastest but 15% more expensive. Vendor B is cheapest but has a 12% comeback rate. With quality weighted properly, Vendor A often wins overall — because comebacks create second downtime events.` },
          practical: { title: 'Interpret the scorecard', blocks: [
            { ul: ['Set Quality to the highest weight — which vendor leads?', 'Set Cost to the highest weight — does the leader change?', 'Which vendor is consistently strong regardless of weights?'] }
          ] },
          check: [
            { t: 'mc', q: 'Comeback rate primarily measures:', o: ['Cost', 'Quality of repairs', 'Location coverage', 'Labor rate'], a: 1, e: 'Comebacks mean the repair didn\'t fix the problem.' },
            { t: 'tf', q: 'Scorecard weights should reflect the fleet\'s priorities.', a: true, e: 'Weights encode what matters most to the operation.' }
          ],
          takeaways: ['Measure time, cost, quality, repeats, communication, availability, coverage.', 'Weight criteria by fleet priorities.', 'Cheapest is rarely best when quality is weak.', 'Use data, not impressions.']
        },
        {
          id: 'l2', title: 'Managing Vendor Relationships', minutes: 13,
          objectives: ['Hold vendors accountable professionally', 'Address performance issues', 'Develop preferred vendor networks'],
          body: [
            `Vendors are partners. The best relationships combine clear expectations, prompt payment and honest feedback.`,
            { timeline: [
              { title: 'Set expectations', text: 'Communication times, approval rules, documentation (complaint/cause/correction), invoice format.' },
              { title: 'Measure', text: 'Track the scorecard continuously.' },
              { title: 'Review', text: 'Share results periodically — good and bad.' },
              { title: 'Address issues', text: 'Specific examples, requested corrective action, follow-up date.' },
              { title: 'Decide', text: 'Preferred, standard, or not used — per company policy.' }
            ] },
            { msg: { kind: 'message', title: 'Performance conversation — to shop manager', text: 'Hi Dana — appreciate the quick turnarounds this quarter. One concern: 3 of our last 9 repairs at your shop came back within 30 days (T-120, T-126, TR-540). Can we review those together this week and agree on steps to prevent repeats? I\'ll send the case details beforehand.' } }
          ],
          example: { title: 'Turning a vendor around', text: `A shop with poor communication was asked to send diagnoses by a set time and use a standard estimate format. Within two months its communication score rose from the bottom to the top third.` },
          practical: { title: 'Choose the message', exercise: {
            type: 'choose', prompt: 'A vendor has overbilled twice this month. Best first message?',
            options: [
              { text: '"We\'re done working with you."', correct: false, why: 'Premature and unprofessional without discussion.' },
              { text: '"Two invoices this month exceeded the approved estimates without authorization (RO 8812: +$640; RO 8840: +$310). Please review and issue corrections, and let\'s confirm the approval process going forward."', correct: true, why: 'Specific, factual and focused on correction.' },
              { text: 'Pay them and say nothing', correct: false, why: 'Rewards the behavior and loses money.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'The most effective performance feedback is:', o: ['General and emotional', 'Specific, factual and with a requested action', 'Given only annually', 'Given only to the technician'], a: 1, e: 'Specifics and actions lead to change.' },
            { t: 'tf', q: 'Sharing positive feedback with vendors is part of good vendor management.', a: true, e: 'Recognition reinforces what you want more of.' }
          ],
          takeaways: ['Set expectations, measure, review, address, decide.', 'Feedback: specific, factual, action-oriented.', 'Recognize good performance too.', 'Preferred networks are built on data and trust.']
        }
      ]
    },
    /* ---------------- M6 ---------------- */
    {
      id: 'm6', title: 'Warranty and Maintenance History', summary: 'Identify warranty, use history, and communicate claims.',
      lessons: [
        {
          id: 'l1', title: 'Identifying Warranty Opportunities', minutes: 14,
          objectives: ['Recognize types of warranty coverage', 'Use history to identify claims', 'Know what information a claim needs'],
          body: [
            { table: { head: ['Type', 'Covers', 'Check'], rows: [
              ['Base vehicle warranty', 'New vehicle defects for a set time/mileage', 'In-service date, mileage'],
              ['Component warranty', 'Engines, transmissions, aftertreatment, etc. — may differ from base', 'Component terms, serial numbers'],
              ['Extended warranty', 'Purchased coverage beyond base', 'Contract terms, deductibles'],
              ['Parts & labor warranty', 'Repairs done by a shop — often months/miles', 'Previous RO date, mileage, vendor']
            ] } },
            { callout: { kind: 'warning', title: 'Missed warranty is lost money', text: 'Repeat repairs within a shop\'s parts/labor warranty, or component failures within manufacturer coverage, are commonly paid by the fleet simply because nobody checked.' } },
            { h: 'Information a claim needs' },
            { ul: ['VIN and relevant component serial numbers', 'In-service date and current mileage/hours', 'Failure description (complaint, cause, correction)', 'Prior repair ROs if it\'s a repeat', 'Photos or failed parts if required', 'Maintenance records if the warrantor asks (e.g., PM compliance)'] }
          ],
          example: { title: 'The 11-month turbo', text: `A turbo failed 11 months after an independent shop replaced it. The shop\'s parts warranty was 12 months. Because the coordinator checked history before approving, the shop replaced it at no parts cost.` },
          practical: { title: 'Is warranty possible?', exercise: {
            type: 'classify', prompt: 'Should you investigate warranty before approving?', categories: ['Check warranty', 'Unlikely'],
            items: [
              { text: 'Starter failed 4 months after replacement at Shop B', answer: 'Check warranty', why: 'Recent repair — likely within parts/labor warranty.' },
              { text: 'New tractor, 30,000 miles, transmission fault', answer: 'Check warranty', why: 'Likely within base/component warranty.' },
              { text: 'Tire destroyed by road debris', answer: 'Unlikely', why: 'Road hazard damage — not a defect (unless a road hazard policy exists).' },
              { text: 'Water pump replaced 14 months ago by a dealer', answer: 'Check warranty', why: 'Some parts carry longer warranties — worth checking.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'When is the best time to identify warranty?', o: ['After paying the invoice', 'Before the repair begins', 'At year-end', 'Never — shops handle it'], a: 1, e: 'Early identification preserves the claim and may require specific facilities.' },
            { t: 'tf', q: 'Maintenance records can be requested as part of a warranty claim.', a: true, e: 'Warrantors may request proof of proper maintenance.' }
          ],
          takeaways: ['Know base, component, extended and repair warranties.', 'Check history before approving repairs.', 'Claims need VIN, serials, mileage, ROs and failure details.', 'Unchecked warranty is lost money.']
        },
        {
          id: 'l2', title: 'Warranty Communication and Documentation', minutes: 13,
          objectives: ['Communicate a warranty claim to a vendor', 'Document warranty outcomes', 'Track warranty recovery'],
          body: [
            { msg: { kind: 'message', title: 'Warranty request to shop', text: 'Hi Mike — T-126 is back with a no-start. Your RO 7731 (02/14, 388,400 mi) replaced the starter. Current mileage 402,100 — about 4 months and 13,700 miles later. Please diagnose under your parts/labor warranty and confirm coverage before additional repairs. RO copy attached.' } },
            `Document: the claim, the reference (original RO), what was covered (parts, labor, both), what the fleet paid, and the final outcome. Track warranty recovery as a KPI — it shows the value of disciplined history checks.`,
            { callout: { kind: 'tip', title: 'Keep failed parts when asked', text: 'Warranty claims may require the failed part. Tell shops up front not to discard parts when a claim is possible.' } }
          ],
          example: { title: 'Recovery adds up', text: `A 60-unit fleet started logging warranty checks on every repair over $500. In six months, recovered claims totaled $18,400 — money that previously went unclaimed.` },
          practical: { title: 'Build the claim', exercise: {
            type: 'extract', sourceLabel: 'History and current event',
            source: 'Prior RO 7731 — Shop: Mike\'s Diesel — 02/14 — 388,400 mi — Starter replaced (new) — 12 mo / unlimited mi parts & labor\nCurrent — 06/18 — 402,100 mi — No-start, starter suspected',
            fields: [
              { label: 'Original RO number', accept: ['7731'] },
              { label: 'Miles since prior repair', accept: ['13700', '13,700'] },
              { label: 'Within warranty? (yes/no)', accept: ['yes', 'y'] }
            ]
          } },
          check: [
            { t: 'mc', q: 'A warranty request to a shop should reference:', o: ['Only the current complaint', 'The original RO, dates, mileage and current complaint', 'The driver\'s personal info', 'Nothing — shops track it'], a: 1, e: 'Specific references make claims easy to verify.' },
            { t: 'tf', q: 'Tracking warranty recovery as a KPI demonstrates the value of history checks.', a: true, e: 'Recovered dollars are a measurable outcome.' }
          ],
          takeaways: ['Reference original RO, dates and mileage.', 'Confirm coverage before extra work.', 'Keep failed parts when required.', 'Track warranty recovery as a KPI.']
        }
      ]
    },
    /* ---------------- M7 ---------------- */
    {
      id: 'm7', title: 'Leadership and Communication', summary: 'Escalation, difficult conversations, and communicating up and out.',
      lessons: [
        {
          id: 'l1', title: 'Escalation and Difficult Conversations', minutes: 15,
          objectives: ['Know when and how to escalate', 'Structure difficult conversations', 'Communicate with management and customers'],
          body: [
            { h: 'When to escalate' },
            { ul: ['Safety concerns not being resolved', 'Costs above your approval authority', 'Downtime threatening customer commitments', 'Vendor disputes you can\'t resolve', 'Repeat failures needing policy or budget decisions', 'Conflicts between departments'] },
            { h: 'How to escalate — SBAR' },
            { table: { head: ['Part', 'Content'], rows: [
              ['Situation', 'What is happening now, in one sentence'],
              ['Background', 'Relevant facts and history'],
              ['Assessment', 'Your analysis of the risk and options'],
              ['Recommendation', 'What you propose and what you need from them']
            ] } },
            { msg: { kind: 'message', title: 'Escalation to fleet manager', text: 'S: T-120 down again — third aftertreatment derate in 60 days.\nB: Prior repairs 04/02, 04/28, 05/30 at three vendors. Dealer found failed sensor 05/30.\nA: Likely unresolved root cause plus heavy idling. Warranty may cover the 05/30 work.\nR: Approve dealer diagnosis today ($450) with full history; I\'ll open a warranty claim and propose an idle-reduction plan with ops. Need approval by 11:00 to hold the dealer slot.' } },
            { h: 'Difficult conversations' },
            `Stay factual, acknowledge the other person\'s pressure, state what you can and cannot do, and offer options. Customers are normally handled by operations or customer service — coordinate through them unless your company assigns you that role.`
          ],
          example: { title: 'Saying no to a VP', text: `A senior manager asked to release a truck with an unrepaired brake defect for a key customer. The coordinator acknowledged the customer importance, explained the defect was safety-critical, and presented two alternatives: a recovery tractor in 90 minutes or a mobile brake repair in 2 hours. The manager chose the recovery tractor.` },
          practical: { title: 'Structure it', exercise: {
            type: 'classify', prompt: 'Place each sentence in the SBAR structure.', categories: ['Situation', 'Background', 'Assessment', 'Recommendation'],
            items: [
              { text: 'Five units are down this morning, two with loads due today.', answer: 'Situation', why: 'What is happening now.' },
              { text: 'Our main shop lost two technicians last week.', answer: 'Background', why: 'Relevant context.' },
              { text: 'Without added capacity, we\'ll miss both deliveries.', answer: 'Assessment', why: 'Analysis of risk.' },
              { text: 'Approve overflow to Dealer C today at a higher rate.', answer: 'Recommendation', why: 'The ask.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'What does the "R" in SBAR ask for?', o: ['Repair history', 'Your recommendation and what you need', 'Road conditions', 'Rates'], a: 1, e: 'End with a clear recommendation and request.' },
            { t: 'tf', q: 'A senior manager\'s request overrides a safety-critical defect.', a: false, e: 'Safety is non-negotiable regardless of seniority — offer safe alternatives.' }
          ],
          takeaways: ['Escalate safety, authority, customer, vendor and policy issues.', 'Use SBAR for clear escalation.', 'In difficult conversations: facts, empathy, limits, options.', 'Safety is never negotiable — at any level.']
        },
        {
          id: 'l2', title: 'Leadership Scenarios', minutes: 16,
          objectives: ['Practice difficult conversations', 'Apply escalation judgment', 'Communicate with impact'],
          body: [
            `Work through these scenarios. Each response has consequences — read the reasoning after you choose.`,
            { widget: 'scenario:lead-1' },
            { widget: 'scenario:lead-2' },
            { widget: 'scenario:lead-3' }
          ],
          example: { title: 'Leading without authority', text: `Coordinators rarely manage the people they depend on. Influence comes from reliability: accurate ETRs, clear messages, follow-through. Over time, dispatch and shops trust your information — and your recommendations carry weight.` },
          practical: { title: 'Self-check', blocks: [
            { ul: ['Do I lead escalations with the ask?', 'Do I present options, not just problems?', 'Do I follow up on commitments I make?'] }
          ] },
          check: [
            { t: 'mc', q: 'Where does a coordinator\'s influence mainly come from?', o: ['Job title', 'Reliability, accuracy and follow-through', 'Being the loudest', 'Avoiding escalation'], a: 1, e: 'Trust is built by consistent, accurate communication.' },
            { t: 'mc', q: 'When bringing a problem to management, you should also bring:', o: ['Blame', 'Options and a recommendation', 'Only the problem', 'Nothing else'], a: 1, e: 'Options and recommendations make decisions faster.' }
          ],
          takeaways: ['Bring options and a recommendation.', 'Stay calm and factual under pressure.', 'Follow through builds influence.', 'Choose the right audience and channel.']
        }
      ]
    },
    /* ---------------- M8 ---------------- */
    {
      id: 'm8', title: 'Emergency Fleet Operations', summary: 'Operate through major disruptions with multiple units down.',
      lessons: [
        {
          id: 'l1', title: 'Operating Under Disruption', minutes: 15,
          objectives: ['Triage multiple simultaneous breakdowns', 'Allocate limited shop capacity', 'Maintain communication during a disruption'],
          body: [
            `Disruptions — storms, a cold snap, a bad fuel batch, a shop closure — can put many units down at once. The principles scale: safety, triage, capacity, communication.`,
            { h: 'Triage order' },
            { ol: ['<strong>Life safety</strong> — drivers in danger, vehicles in unsafe locations', '<strong>Safety-critical defects</strong> — brakes, steering, tires, lighting, fire risk', '<strong>Time-critical cargo</strong> — reefer loads, hard deadlines', '<strong>Revenue impact</strong> — loaded units, then empty units', '<strong>Routine</strong> — defer and schedule'] },
            { h: 'Capacity allocation' },
            `When shop capacity is limited, allocate slots to units with the highest combined safety and operational impact. Use mobile service for jobs that don\'t need a bay. Consider overflow vendors at a higher rate when downtime cost justifies it.`,
            { callout: { kind: 'warning', title: 'Driver constraints', text: 'In a disruption, drivers may run out of hours, need lodging, or be stuck in dangerous weather. Driver safety and welfare remain priorities — coordinate with dispatch and safety.' } },
            { h: 'Communication' },
            `Set up a single status list, update leadership on a fixed cadence, and give dispatch one consolidated picture instead of dozens of individual calls.`
          ],
          example: { title: 'Cold snap morning', text: `At −15°F, nine units reported no-starts and gelled fuel. The coordinator triaged: two units with drivers in unsafe roadside locations first, then a reefer load, then loaded units at customers. Mobile services handled fuel-related starts; three units were towed. Leadership got a consolidated update every hour.` },
          practical: { title: 'Triage the board', exercise: {
            type: 'order', prompt: 'Order these events by priority.',
            items: ['Driver stranded on a highway shoulder in a storm, truck won\'t start', 'Loaded unit with brake air leak at a truck stop', 'Reefer with failing unit and temperature-sensitive cargo', 'Loaded dry van with amber check engine light, driving normally', 'Empty trailer at the yard with a door latch issue']
          } },
          check: [
            { t: 'mc', q: 'With limited shop capacity, which unit should get the first bay?', o: ['The newest unit', 'The unit with the highest combined safety and operational impact', 'The unit that called first', 'The cheapest repair'], a: 1, e: 'Allocate scarce capacity by impact.' },
            { t: 'tf', q: 'During disruptions, a single consolidated status list helps dispatch and leadership.', a: true, e: 'One source of truth reduces confusion.' }
          ],
          takeaways: ['Triage: life safety, safety-critical, time-critical, revenue, routine.', 'Allocate scarce capacity by impact.', 'Use mobile and overflow vendors strategically.', 'One status list, fixed update cadence.']
        },
        {
          id: 'l2', title: 'Disruption Drill', minutes: 18,
          objectives: ['Apply triage to a live board', 'Make capacity decisions', 'Practice consolidated communication'],
          body: [
            `Classify each unit and then choose the consolidated update for leadership.`,
            { widget: 'tree:emergency' }
          ],
          example: { title: 'What leadership needs', text: `Leadership doesn\'t need every detail. They need: how many units are down, how many loads are at risk, what you\'re doing, what you need from them, and when the next update comes.` },
          practical: { title: 'Consolidated update', exercise: {
            type: 'choose', prompt: 'Which leadership update is best during a disruption?',
            options: [
              { text: 'A forwarded thread of 40 messages', correct: false, why: 'Leadership can\'t extract decisions from raw threads.' },
              { text: '"07:00 update — 9 units down (7% of fleet). 2 drivers in unsafe locations: tows en route, ETA 30 min. 1 reefer at risk: mobile reefer tech ETA 45 min. 4 loaded units: 2 recovered by swaps, 2 late (ops notifying customers). Need: approval for overflow shop at +$25/h. Next update 08:00."', correct: true, why: 'Numbers, safety, risks, actions, ask, cadence.' },
              { text: '"It\'s bad out there, we\'re handling it."', correct: false, why: 'No information to act on.' }
            ]
          } },
          check: [
            { t: 'mc', q: 'A leadership update during a disruption should include:', o: ['Only good news', 'Units down, safety issues, loads at risk, actions, asks, next update', 'Each driver\'s full call log', 'Vendor phone numbers'], a: 1, e: 'Decision-ready summaries.' },
            { t: 'tf', q: 'Empty trailers with minor issues should be prioritized over drivers in unsafe locations.', a: false, e: 'Life safety always comes first.' }
          ],
          takeaways: ['Life safety first, always.', 'Consolidate information for leadership.', 'Use numbers, actions and asks.', 'Keep a fixed update cadence.']
        }
      ]
    }
  ],
  final: { id: 'expert-final', kind: 'sim', title: 'Expert Final Simulation: Fleet Operations Day', minutes: 40 }
};

const TRACKS = [BEGINNER, ADVANCED, EXPERT];

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

/* ---------------------------------------------------------------------------
   CONTENT — Module 9 per track + "Deep dive" material
   deep(key, tabs) attaches a tabbed Deep dive section to a lesson:
   tabs = [{ title, blocks: [...] }]. addModule() appends a whole module.
   --------------------------------------------------------------------------- */
function deep(key, tabs) { lessonAt(key).deep = tabs; }
function addModule(trackId, mod) { TRACKS.find((x) => x.id === trackId).modules.push(mod); }

/* Extra reference graphics (also shown on the Quick Reference page) */
Object.assign(REF, {
  pinout: { ig: 'table', icon: 'zap', title: 'The 7-way trailer connector (SAE J560 color code)', head: ['Wire color', 'Typical circuit', 'If it fails'], rows: [
    ['<span class="swatch" style="background:#f4f4f4"></span> White', 'Ground', 'Several or all trailer lights act up at once'],
    ['<span class="swatch" style="background:#222"></span> Black', 'Clearance, marker & ID lamps', 'Marker lights out'],
    ['<span class="swatch" style="background:#e0b400"></span> Yellow', 'Left turn signal', 'Left turn signal out'],
    ['<span class="swatch" style="background:#c62828"></span> Red', 'Stop (brake) lamps', 'No brake lights — safety-critical'],
    ['<span class="swatch" style="background:#2e7d32"></span> Green', 'Right turn signal', 'Right turn signal out'],
    ['<span class="swatch" style="background:#6d4c41"></span> Brown', 'Tail, license & clearance lamps', 'Tail lights out — safety-critical at night'],
    ['<span class="swatch" style="background:#1565c0"></span> Blue', 'Auxiliary — commonly trailer ABS power', 'Trailer ABS lamp may come on']
  ], note: 'Common industry convention. Individual trailers can differ — technicians confirm with a tester.' },
  fmi: { ig: 'table', icon: 'zap', title: 'Common J1939 FMI codes', head: ['FMI', 'Meaning', 'What it often points to'], rows: [
    ['0', 'Data valid but above normal range — most severe', 'A real condition: pressure/temperature too high'], ['1', 'Data valid but below normal range — most severe', 'A real condition: pressure/level too low'],
    ['2', 'Data erratic, intermittent or incorrect', 'Intermittent sensor, wiring or connector'], ['3', 'Voltage above normal, or shorted to high source', 'Wiring/sensor circuit problem'],
    ['4', 'Voltage below normal, or shorted to low source', 'Wiring/sensor circuit problem'], ['5', 'Current below normal, or open circuit', 'Broken wire, unplugged connector'],
    ['7', 'Mechanical system not responding or out of adjustment', 'A component isn\'t doing what it\'s told'], ['31', 'Condition exists', 'A reported state — read the SPN description']
  ], note: 'SAE J1939 failure mode identifiers. FMIs 3–6 usually suggest an electrical circuit issue; 0 and 1 usually suggest the measured condition itself is out of range. A technician confirms either way.' },
  cvsa: { ig: 'table', icon: 'shield', title: 'CVSA roadside inspection levels', head: ['Level', 'Name', 'What\'s checked'], rows: [
    ['I', 'North American Standard Inspection', 'Driver documents and a full vehicle inspection, including under the vehicle'],
    ['II', 'Walk-Around', 'Driver documents and vehicle items checkable without going under it'],
    ['III', 'Driver-Only', 'Driver credentials, hours of service, documents'],
    ['IV', 'Special Inspection', 'A one-time examination of a particular item'],
    ['V', 'Vehicle-Only', 'Full vehicle inspection without the driver present'],
    ['VI', 'Enhanced (radioactive shipments)', 'Select radiological shipments']
  ], note: 'A vehicle that passes a Level I or V inspection with no critical violations may receive a CVSA decal, generally valid for up to three months.' },
  dvir: { ig: 'process', icon: 'clipboard', title: 'The DVIR repair loop', items: [
    { icon: 'clipboard', t: 'Driver inspects', d: 'Pre-trip / post-trip' }, { icon: 'file', t: 'Defect reported', d: 'On the DVIR' }, { icon: 'wrench', t: 'Repair', d: 'Before operating, if safety-related' },
    { icon: 'check-circle', t: 'Certify', d: 'Repair (or no repair needed) certified' }, { icon: 'users', t: 'Next driver reviews', d: 'Signs off before driving' }
  ], note: 'Based on FMCSA 49 CFR 396.11 and 396.13. Your safety department defines exactly how your company completes each step.' },
  reorder: { ig: 'formulas', icon: 'layers', title: 'Parts stocking formulas', items: [
    { t: 'Reorder point', f: 'daily usage × lead time days + safety stock', d: 'Order when stock hits this' },
    { t: 'Safety stock', f: 'extra units for demand/lead-time swings', d: 'Buffer against stockouts' },
    { t: 'Inventory turns', f: 'annual parts cost used ÷ avg inventory value', d: 'Higher = leaner' },
    { t: 'Fill rate', f: 'requests filled from stock ÷ total requests', d: 'Higher = fewer delays' }
  ] }
});

/* ===================== NEW MODULES (m9) ===================== */
addModule('beginner', {
  id: 'm9', title: 'Inspections, DVIRs and Compliance Records', summary: 'How inspections and maintenance records keep equipment legal — and what the coordinator\'s part is.',
  lessons: [
    {
      id: 'l1', title: 'Driver Inspections and the DVIR Loop', minutes: 15,
      objectives: ['Explain pre-trip and post-trip inspections', 'Follow a DVIR defect from report to certified repair', 'Know where the coordinator fits in the loop'],
      body: [
        `Every day, drivers inspect their equipment. When they find a defect, it goes on a Driver Vehicle Inspection Report ([[DVIR]]). Many of your cases start on that piece of paper — or its electronic version.`,
        REF.dvir,
        { h: 'What drivers check' },
        { tiles: [
          { icon: 'zap', title: 'Brakes & air system', text: 'Service and parking brakes, air lines, audible leaks.' },
          { icon: 'route', title: 'Steering', text: 'Steering mechanism and play.' },
          { icon: 'sun', title: 'Lighting & reflectors', text: 'Headlights, brake lights, turn signals, markers.' },
          { icon: 'target', title: 'Tires, wheels & rims', text: 'Inflation, damage, lug nuts.' },
          { icon: 'layers', title: 'Coupling devices', text: 'Fifth wheel, kingpin, safety devices.' },
          { icon: 'alert', title: 'Emergency equipment', text: 'Warning devices, fire extinguisher, and wipers/mirrors among others.' }
        ] },
        { callout: { kind: 'info', title: 'The coordinator\'s part', text: 'Turn each DVIR defect into a case, get it repaired before the unit is dispatched when it affects safety, and make sure the repair is documented so the next driver can review and sign off.' } },
        `U.S. rules require a written post-trip report of defects that would affect safe operation or cause a breakdown. Before driving, the next driver must review the last report and confirm that listed defects were repaired or that repair wasn\'t needed. Exact forms and electronic systems differ — your safety department owns the procedure.`
      ],
      example: { title: 'The marker light that stopped a dispatch', text: `A post-trip DVIR listed "left marker light out" on <span class="mono">TR-532</span>. The coordinator opened a case, a yard technician replaced the bulb that evening, and the repair was certified on the DVIR. The morning driver reviewed and signed it — the trailer left on time instead of being held at the gate.` },
      practical: { title: 'Sort the DVIR defects', exercise: {
        type: 'classify', prompt: 'How should each DVIR item be handled?', categories: ['Repair before dispatch', 'Schedule repair'],
        items: [
          { text: 'Right trailer brake light out', answer: 'Repair before dispatch', why: 'Lighting required for safe operation.' },
          { text: 'Audible air leak at a glad hand', answer: 'Repair before dispatch', why: 'Brake-system air loss is safety-critical.' },
          { text: 'Sleeper reading light flickers', answer: 'Schedule repair', why: 'Comfort item — doesn\'t affect safe operation.' },
          { text: 'Cracked windshield in the driver\'s view', answer: 'Repair before dispatch', why: 'Driver visibility is safety-related; have safety confirm the rule.' },
          { text: 'Cup holder broken', answer: 'Schedule repair', why: 'No effect on safe operation.' }
        ] } },
      check: [
        { t: 'mc', q: 'What must the next driver do with the previous DVIR?', o: ['Nothing', 'Review it and confirm defects were repaired or not needing repair', 'Throw it away', 'Send it to the customer'], a: 1, e: 'Drivers review the last report before driving (49 CFR 396.13).' },
        { t: 'tf', q: 'A DVIR defect that affects safe operation should be repaired before the vehicle is dispatched.', a: true, e: 'Safety-affecting defects are repaired (and certified) before the vehicle operates again.' }
      ],
      takeaways: ['DVIRs are a major source of maintenance cases.', 'Safety-affecting defects are fixed before dispatch.', 'Repairs are certified so the next driver can sign off.', 'Your safety department owns the exact procedure.'],
      tips: ['Review new DVIRs at the start and end of each shift.', 'Close the loop with the yard so certified repairs are visible to the next driver.'],
      mistakes: ['Treating DVIR comments as "just notes".', 'Fixing the defect but never documenting the repair on the DVIR.']
    },
    {
      id: 'l2', title: 'Maintenance Records and Roadside Inspections', minutes: 16,
      objectives: ['Describe what maintenance records must show', 'Understand roadside inspection levels and out-of-service outcomes', 'Explain how inspections affect the company\'s safety record'],
      body: [
        `Maintenance records prove equipment is maintained. Roadside inspections test that claim in the real world — and the results follow the company.`,
        { ig: 'table', icon: 'file', title: 'Key U.S. record requirements (summary)', head: ['Record', 'What it shows', 'Kept for'], rows: [
          ['Vehicle maintenance file', 'Unit ID, inspection & maintenance schedule, record of inspections, repairs and maintenance', 'Where the vehicle is housed for 1 year, and 6 months after it leaves the carrier\'s control'],
          ['Annual (periodic) inspection report', 'That the unit passed its periodic inspection', '14 months'],
          ['DVIR', 'Defects reported and repair certification', '3 months']
        ], note: 'Summarized from 49 CFR 396.3, 396.11 and 396.21. Rules change and have exceptions — your safety department is the authority.' },
        REF.cvsa,
        { h: 'How inspections affect the company' },
        `Roadside inspection results feed the FMCSA\'s Compliance, Safety, Accountability program ([[CSA]]). Vehicle violations count toward the <strong>Vehicle Maintenance</strong> category (one of seven "BASICs"). Poor scores can lead to more inspections and interventions. Every defect you fix before it reaches the road helps the company\'s record.`,
        { ig: 'bars', icon: 'shield', title: 'Where vehicle violations commonly come from (example fleet, one year)', fmt: '', items: [['Lighting', 41, 'critical'], ['Brakes / adjustment', 33, 'critical'], ['Tires', 19, 'warning'], ['Air leaks', 11, 'warning'], ['Other', 9]], note: 'Illustrative distribution. Lighting and brakes are consistently among the most-cited vehicle violations — and among the easiest to prevent with good DVIR follow-up.' }
      ],
      example: { title: 'Cheap bulb, expensive violation', text: `A $4 bulb out on a trailer led to a Level II inspection and a violation on the company\'s record. After reviewing a quarter\'s inspections, the coordinator started a "lights and air" check at every trailer drop — lighting violations fell sharply the next quarter.` },
      practical: { title: 'Match the inspection level', exercise: {
        type: 'classify', prompt: 'Which CVSA level is described?', categories: ['Level I', 'Level II', 'Level III'],
        items: [
          { text: 'Inspector checks the driver\'s documents and walks around the truck without going underneath', answer: 'Level II', why: 'Walk-Around inspection.' },
          { text: 'Full vehicle inspection including under the vehicle, plus driver documents', answer: 'Level I', why: 'North American Standard Inspection.' },
          { text: 'Only the driver\'s license, medical card and hours of service are checked', answer: 'Level III', why: 'Driver-Only inspection.' }
        ] } },
      check: [
        { t: 'mc', q: 'Which CSA category do vehicle defect violations mainly affect?', o: ['Unsafe Driving', 'Vehicle Maintenance', 'Driver Fitness', 'Crash Indicator'], a: 1, e: 'Vehicle defects count toward the Vehicle Maintenance BASIC.' },
        { t: 'tf', q: 'Periodic (annual) inspection reports must be kept for 14 months under U.S. rules.', a: true, e: '49 CFR 396.21 requires retention for 14 months.' }
      ],
      takeaways: ['Maintenance records must show inspections, repairs and schedules.', 'CVSA levels range from full inspections to driver-only.', 'Violations affect the company\'s CSA record.', 'Lighting and brakes are common — and preventable — violations.'],
      tips: ['Review roadside inspection reports weekly and open cases for every vehicle violation.', 'Track violations by unit and by category.'],
      mistakes: ['Assuming a clean inspection means the unit is fine for months.', 'Losing inspection paperwork that proves repairs were made.']
    }
  ]
});

addModule('advanced', {
  id: 'm9', title: 'Parts and Inventory Management', summary: 'Sourcing the right parts fast — and stocking the right ones before you need them.',
  lessons: [
    {
      id: 'l1', title: 'Parts Sourcing: OEM, Aftermarket and Remanufactured', minutes: 16,
      objectives: ['Compare OEM, aftermarket and remanufactured parts', 'Ask the right sourcing questions', 'Balance price, availability, quality and warranty'],
      body: [
        `Parts delays are one of the biggest sources of downtime. Knowing your options — and the trade-offs — lets you find a part today instead of next week.`,
        { ig: 'ratings', icon: 'layers', title: 'Part types compared', cols: ['OEM', 'Aftermarket', 'Reman', 'Used'], rows: [
          { l: 'Fit & spec certainty', v: [5, 3, 4, 3] }, { l: 'Price advantage', v: [1, 4, 3, 5] }, { l: 'Availability', v: [3, 4, 4, 2] },
          { l: 'Warranty strength', v: [5, 3, 4, 1] }, { l: 'Warranty-claim friendly', v: [5, 2, 3, 1] }
        ], hint: 'More dots = better for the fleet. General tendencies — quality varies by brand and supplier.' },
        { accordion: [
          { title: 'OEM (original equipment manufacturer)', text: 'Made by or for the vehicle/component manufacturer. Best fit certainty and often required for warranty repairs. Usually the highest price.' },
          { title: 'Aftermarket', text: 'Made by other manufacturers to fit. Quality ranges from excellent to poor — stick with suppliers your fleet trusts.' },
          { title: 'Remanufactured (reman)', text: 'Used cores rebuilt to specification, often with a warranty. Common for starters, alternators, turbos, injectors and ECMs. Usually involves a core charge.' },
          { title: 'Used / salvage', text: 'Occasionally useful for hard-to-find items or older units. Limited or no warranty — confirm condition and get approval.' }
        ] },
        { h: 'Sourcing questions' },
        { ig: 'card', icon: 'clipboard', title: 'Parts request checklist', form: 'Parts request', rows: [['VIN / unit', 'T-120 · VIN …31207'], ['Part / number', 'Turbo actuator · OEM # from dealer'], ['Engine serial', 'Needed for many engine parts'], ['Qty · needed by', '1 · today 16:00'], ['Deliver to', 'Lone Star Truck Center, Amarillo'], ['Ask about', 'Price · core charge · warranty · ETA · alternatives']] }
      ],
      example: { title: 'Reman saves a day', text: `The dealer quoted a new OEM turbo actuator in 3 days. A reman supplier had one in stock 40 miles away with a 12-month warranty and a core charge. With approval and a warranty check (the unit was out of engine warranty), the coordinator sourced the reman part — the truck was back the same evening.` },
      practical: { title: 'Choose the part', exercise: {
        type: 'choose', prompt: 'Tractor under engine warranty needs an EGR valve. OEM part: 2 days. Aftermarket: in stock today, 30% cheaper. What do you do?',
        options: [
          { text: 'Install the aftermarket part today to save time and money', correct: false, why: 'Non-OEM parts or non-authorized repairs can jeopardize a warranty claim — the fleet could pay for a covered repair.' },
          { text: 'Check the warranty terms with an authorized dealer first; if covered, go OEM under warranty and plan around the 2-day wait (e.g., power swap)', correct: true, why: 'Protects the warranty and manages downtime separately.' },
          { text: 'Buy a used part from salvage', correct: false, why: 'Worst option for a warranty unit.' }
        ] } },
      check: [
        { t: 'mc', q: 'Which part type typically involves a core charge?', o: ['Used', 'Remanufactured', 'Aftermarket filters', 'Fluids'], a: 1, e: 'Reman parts are rebuilt from returned cores — hence the deposit.' },
        { t: 'tf', q: 'Aftermarket parts are always lower quality than OEM.', a: false, e: 'Quality varies by supplier; many are excellent. Trust and warranty matter.' }
      ],
      takeaways: ['OEM: best fit and warranty-friendly, usually costliest.', 'Aftermarket: price and availability; quality varies.', 'Reman: rebuilt, warrantied, core charge.', 'Check vehicle warranty before choosing a non-OEM part.'],
      tips: ['Keep 3–4 trusted parts suppliers per region with after-hours contacts.', 'Always ask "Is there an alternative in stock?"'],
      mistakes: ['Choosing the cheapest part on a warranty unit.', 'Forgetting to return the core.']
    },
    {
      id: 'l2', title: 'Inventory Basics: Stocking, Reorder Points and Cores', minutes: 16,
      objectives: ['Decide which parts to stock', 'Calculate a reorder point', 'Track cores and prevent obsolete stock'],
      body: [
        `Fleets with their own shops or yards often keep parts on hand. The goal: the right parts available when needed, without tying up cash in shelves full of parts nobody uses.`,
        { ig: 'bars', icon: 'bar', title: 'ABC analysis: a few parts drive most of the usage (example)', fmt: '', unit: '%', items: [['A items · 15% of part numbers', 72, 'info'], ['B items · 30% of part numbers', 20, 'neutral-strong'], ['C items · 55% of part numbers', 8, 'neutral']], note: 'Share of annual usage value. Stock A items carefully and review them often; C items may be ordered as needed.' },
        REF.reorder,
        { ig: 'waterfall', icon: 'layers', title: 'Reorder point: brake chambers at a terminal', fmt: '', items: [
          { l: 'Daily usage 0.5 × lead time 4 days', v: 2, type: 'start' }, { l: 'Safety stock', v: 2, tone: 'info' }, { l: 'Reorder point', v: 4, type: 'total' }
        ], note: 'When stock on the shelf drops to 4, reorder. Safety stock covers busy weeks and late deliveries.' },
        { h: 'Common stocking candidates' },
        { ul: ['PM kits: filters, belts, common fluids', 'High-failure safety items: brake chambers, slack adjusters, lamps, air fittings, glad-hand seals', 'Fast-moving tires for your common sizes', 'Batteries before winter'] },
        { callout: { kind: 'warning', title: 'Cores are money on the shelf', text: 'Track every core from removal to return. An unreturned core means paying full price for a reman part.' } }
      ],
      example: { title: 'The out-of-stock chamber', text: `A terminal shop ran out of brake chambers during a busy week and a tractor waited a day for a delivery. After setting a reorder point of 4 with 2 units of safety stock, the shop didn\'t run out again that year.` },
      practical: { title: 'Calculate', exercise: {
        type: 'extract', sourceLabel: 'Air dryer cartridges — terminal shop',
        source: 'Average usage: 3 per week (≈ 0.43 per day)\nSupplier lead time: 7 days\nSafety stock policy: 2 units',
        fields: [
          { label: 'Usage during lead time (round to whole units)', accept: ['3'] },
          { label: 'Reorder point (units)', accept: ['5'] }
        ] } },
      check: [
        { t: 'mc', q: 'Reorder point is:', o: ['Maximum shelf quantity', 'Daily usage × lead time + safety stock', 'Price × quantity', 'Lead time ÷ usage'], a: 1, e: 'Order when stock falls to the expected lead-time usage plus a buffer.' },
        { t: 'tf', q: 'In ABC analysis, "A" items are a small share of part numbers that drive most usage value.', a: true, e: 'Focus attention where the value is.' }
      ],
      takeaways: ['Stock what fails often and what stops trucks.', 'Reorder point = usage × lead time + safety stock.', 'ABC analysis focuses attention on high-value items.', 'Track cores to recover deposits.'],
      tips: ['Build PM kits per unit type — faster PMs, fewer missing parts.', 'Review slow-moving stock twice a year.'],
      mistakes: ['Stocking parts for units the fleet no longer runs.', 'No safety stock on safety-critical items.']
    }
  ]
});

addModule('expert', {
  id: 'm9', title: 'Telematics and Data-Driven Maintenance', summary: 'Use connected-vehicle data and maintenance systems to prevent failures, not just record them.',
  lessons: [
    {
      id: 'l1', title: 'Telematics and Remote Diagnostics', minutes: 17,
      objectives: ['Explain what telematics data a coordinator can use', 'Triage fault alerts without alert fatigue', 'Use remote diagnostics to route units to the right shop'],
      body: [
        `[[Telematics]] turns every truck into a data source: location, fault codes, fuel, idle time, and more. Used well, it lets you act before the driver calls. Used badly, it buries you in alerts.`,
        { ig: 'process', icon: 'activity', title: 'From fault code to action', items: [
          { icon: 'zap', t: 'Fault occurs', d: 'ECM logs SPN/FMI' }, { icon: 'activity', t: 'Telematics alert', d: 'Code + snapshot' }, { icon: 'filter', t: 'Tier it', d: 'Critical · soon · watch' },
          { icon: 'phone', t: 'Contact driver', d: 'Confirm symptoms' }, { icon: 'wrench', t: 'Route to shop', d: 'With codes & history' }
        ] },
        { ig: 'pyramid', icon: 'filter', title: 'Alert tiering to prevent alert fatigue', levels: [
          { t: 'Act now', d: 'Stop-engine, low oil pressure, high coolant temp, air/brake faults.', tone: 'critical' },
          { t: 'Act today', d: 'Derate risk: aftertreatment, DEF, repeated active codes.', tone: 'warning' },
          { t: 'Plan it', d: 'Codes that can be combined with the next PM or shop visit.', tone: 'info' },
          { t: 'Watch', d: 'Inactive or one-time codes; trend them.', tone: 'success' }
        ] },
        { ig: 'heatmap', icon: 'activity', title: 'Active fault alerts by unit and week (example)', cols: ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5', 'Wk 6'], rows: [
          { l: 'T-108', v: [0, 1, 0, 0, 1, 0] }, { l: 'T-114', v: [1, 0, 0, 1, 0, 0] }, { l: 'T-120', v: [2, 3, 4, 3, 5, 6] }, { l: 'T-126', v: [0, 0, 2, 1, 0, 0] }, { l: 'T-131', v: [1, 1, 0, 0, 0, 1] }
        ], tone: 'critical', note: 'A rising row is a unit heading for a roadside failure. T-120\'s pattern justified a proactive dealer visit.' }
      ],
      example: { title: 'Fixed before the call', text: `At 04:10 telematics showed <span class="mono">T-131</span> with an active coolant-level code and a slowly rising temperature. The coordinator messaged the driver at the next stop, confirmed a small leak, and booked a shop 20 miles ahead. The hose was replaced at 07:30 — no roadside event, no tow.` },
      practical: { title: 'Tier the alerts', exercise: {
        type: 'classify', prompt: 'Assign each alert to a tier.', categories: ['Act now', 'Act today', 'Plan it'],
        items: [
          { text: 'Low oil pressure warning, active, truck at highway speed', answer: 'Act now', why: 'Engine damage risk — contact driver immediately.' },
          { text: 'DPF soot load high, regen requested, no derate yet', answer: 'Act today', why: 'Derate risk if not addressed.' },
          { text: 'Inactive cab HVAC code, occurred once', answer: 'Plan it', why: 'Combine with next shop visit.' },
          { text: 'Air pressure dropping with low-air warning', answer: 'Act now', why: 'Brake-system — safety-critical.' }
        ] } },
      check: [
        { t: 'mc', q: 'What is "alert fatigue"?', o: ['Drivers being tired', 'So many low-value alerts that important ones get missed', 'A battery fault', 'A telematics outage'], a: 1, e: 'Tiering prevents critical alerts from drowning in noise.' },
        { t: 'tf', q: 'A telematics fault code alone is enough to order parts.', a: false, e: 'Codes guide diagnosis; technicians confirm.' }
      ],
      takeaways: ['Telematics lets you act before the driver calls.', 'Tier alerts: act now, act today, plan, watch.', 'Trends by unit reveal failures in progress.', 'Codes guide — technicians confirm.'],
      tips: ['Agree on alert tiers with safety and dispatch.', 'Send the telematics snapshot to the shop with the unit.'],
      mistakes: ['Turning on every alert and then ignoring them all.', 'Calling a driver while they\'re driving instead of at a safe stop.']
    },
    {
      id: 'l2', title: 'Building a Data-Driven Maintenance Program', minutes: 17,
      objectives: ['Describe the role of a maintenance management system (CMMS)', 'Protect data quality', 'Use leading indicators to drive decisions'],
      body: [
        `Data only helps if it\'s complete, consistent and used. A maintenance management system ([[CMMS]]) — or fleet maintenance software — is where cases, work orders, PM schedules, parts and costs come together.`,
        { ig: 'hub', icon: 'grid', title: 'What feeds a maintenance system', center: { icon: 'grid', t: 'CMMS / fleet software' }, items: [
          { icon: 'activity', t: 'Telematics', d: 'Codes, meters, idle' }, { icon: 'clipboard', t: 'DVIRs', d: 'Driver defects' }, { icon: 'file', t: 'Work orders', d: 'Complaint · cause · correction' },
          { icon: 'layers', t: 'Parts', d: 'Usage, cores, stock' }, { icon: 'dollar', t: 'Invoices', d: 'Costs, POs' }, { icon: 'shield', t: 'Inspections', d: 'Annual & roadside' }
        ] },
        { ig: 'cycle', icon: 'rotate', title: 'The data-to-decision cycle', center: 'Better decisions', items: [{ icon: 'file', t: 'Capture', d: 'Complete records' }, { icon: 'check-circle', t: 'Clean', d: 'Consistent codes' }, { icon: 'bar', t: 'Analyze', d: 'Trends & KPIs' }, { icon: 'target', t: 'Act', d: 'Change the plan' }, { icon: 'activity', t: 'Measure', d: 'Did it work?' }] },
        { ig: 'table', icon: 'check-circle', title: 'Data quality rules that pay off', head: ['Rule', 'Why'], rows: [
          ['Standard repair/system codes on every work order', 'Makes trends by system possible'], ['Meter reading on every event', 'PM, warranty and MTBF depend on it'],
          ['Complaint · cause · correction required', 'Enables RCA and repeat detection'], ['Vendor and invoice linked to the case', 'Cost per vendor and dispute resolution'], ['Time stamps for down and released', 'Downtime and availability KPIs']
        ] },
        { h: 'Leading vs lagging indicators' },
        { compare: {
          yes: { title: 'Leading (predict)', items: ['PM compliance', 'Open DVIR defects', 'Active fault-code trends', 'Overdue inspections'] },
          no: { title: 'Lagging (report)', items: ['Road calls', 'Downtime', 'Cost per mile', 'Roadside violations'] }
        } }
      ],
      example: { title: 'Codes made the trend visible', text: `A fleet had years of work orders with free-text notes like "fixed truck". After adding required system codes, one quarter of data showed that 38% of road calls were electrical — mostly corroded trailer connectors. A connector-sealing step at PM cut those road calls by more than half.` },
      practical: { title: 'Leading or lagging?', exercise: {
        type: 'classify', prompt: 'Classify each metric.', categories: ['Leading', 'Lagging'],
        items: [
          { text: 'Units with PM overdue this week', answer: 'Leading', why: 'Predicts future failures.' },
          { text: 'Last month\'s road calls', answer: 'Lagging', why: 'Reports what already happened.' },
          { text: 'Open safety defects from DVIRs', answer: 'Leading', why: 'Unresolved risks.' },
          { text: 'Quarterly maintenance cost per mile', answer: 'Lagging', why: 'Outcome measure.' }
        ] } },
      check: [
        { t: 'mc', q: 'Why require standard system codes on work orders?', o: ['To slow technicians down', 'To make trend analysis by system possible', 'For taxes', 'Because drivers ask'], a: 1, e: 'Consistent codes turn records into usable data.' },
        { t: 'mc', q: 'Which is a leading indicator?', o: ['Road calls last month', 'PM compliance', 'Cost per mile last quarter', 'Roadside violations last year'], a: 1, e: 'PM compliance predicts future reliability.' }
      ],
      takeaways: ['A CMMS brings cases, work orders, parts and costs together.', 'Data quality rules make analysis possible.', 'Use leading indicators to act early.', 'Close the loop: capture, clean, analyze, act, measure.'],
      tips: ['Start with 5 data rules and enforce them — not 50.', 'Review one leading indicator in every weekly meeting.'],
      mistakes: ['Free-text-only work orders.', 'Reporting lagging metrics without acting on leading ones.']
    }
  ]
});

/* ===================== DEEP DIVES ===================== */
deep('beginner.m1.l1', [
  { title: 'Trailer types', blocks: [
    { ig: 'ratings', icon: 'layers', title: 'Trailer types and their maintenance footprint', cols: ['Dry van', 'Reefer', 'Flatbed', 'Tanker'], rows: [
      { l: 'Extra systems to maintain', v: [1, 5, 2, 4] }, { l: 'Time-critical when broken', v: [2, 5, 2, 3] }, { l: 'Special inspections / rules', v: [1, 2, 2, 5] }
    ], hint: 'More dots = more. Reefers add a refrigeration unit with its own engine; tankers can require specific tests depending on cargo.' },
    `Different trailer types bring different maintenance needs. A reefer failure can spoil a load; a tanker may carry products with special handling and inspection requirements; flatbeds depend on securement equipment the driver uses every day.`
  ] },
  { title: 'Where the money goes', blocks: [
    { ig: 'donut', icon: 'dollar', title: 'Operating cost of a long-haul truck (illustrative)', fmt: '', pctOnly: true, center: '100%', centerSub: 'cost per mile', items: [['Driver wages & benefits', 43], ['Fuel', 28], ['Truck & trailer payments', 16], ['Repair & maintenance', 9], ['Insurance', 4]], note: 'Illustrative shares to show scale. Maintenance is a meaningful slice — and downtime affects every other slice because the costs continue while revenue stops.' }
  ] }
]);
deep('beginner.m1.l2', [
  { title: 'The information loop', blocks: [
    { ig: 'cycle', icon: 'rotate', title: 'How information moves during a repair', center: 'Case', items: [{ icon: 'users', t: 'Driver', d: 'Reports' }, { icon: 'clipboard', t: 'Coordinator', d: 'Opens & decides' }, { icon: 'wrench', t: 'Vendor', d: 'Diagnoses' }, { icon: 'route', t: 'Dispatch', d: 'Plans the load' }, { icon: 'phone', t: 'Driver', d: 'Gets next steps' }] }
  ] },
  { title: 'Who does what (RACI)', blocks: [
    { ig: 'table', icon: 'users', title: 'Responsibility on a typical roadside repair', head: ['Task', 'Driver', 'Coordinator', 'Dispatch', 'Fleet manager'], rows: [
      ['Make the scene safe', '<b>R</b>', 'C', 'I', 'I'], ['Open & own the case', 'I', '<b>R / A</b>', 'I', 'I'], ['Choose vendor', 'C', '<b>R</b>', 'C', 'A (policy)'],
      ['Approve above limit', '—', 'R (request)', 'I', '<b>A</b>'], ['Protect the load', 'C', 'C', '<b>R / A</b>', 'I'], ['Document & close', 'C', '<b>R / A</b>', 'I', 'I']
    ], note: 'R = responsible (does it) · A = accountable (owns the outcome) · C = consulted · I = informed. Your company\'s version may differ.' }
  ] }
]);
deep('beginner.m2.l1', [
  { title: 'Tools of the trade', blocks: [
    { tiles: [
      { icon: 'grid', title: 'Maintenance software (CMMS)', text: 'Cases, work orders, PM schedules, unit history.' }, { icon: 'activity', title: 'Telematics portal', text: 'Location, fault codes, meters.' },
      { icon: 'phone', title: 'Phone & messaging', text: 'Drivers, vendors, dispatch.' }, { icon: 'pin', title: 'Vendor directory', text: 'Shops, tire, tow and mobile services by lane.' },
      { icon: 'dollar', title: 'PO / approval system', text: 'Approvals and spending records.' }, { icon: 'file', title: 'Document storage', text: 'ROs, invoices, inspection reports.' }
    ] }
  ] },
  { title: '30-second triage', blocks: [
    { ig: 'process', icon: 'filter', title: 'Four questions to place any new request', items: [{ icon: 'shield', t: 'Safe?', d: 'Driver & vehicle' }, { icon: 'truck', t: 'Can it move?', d: 'Safely' }, { icon: 'layers', t: 'Loaded?', d: 'Cargo at risk' }, { icon: 'clock', t: 'Deadline?', d: 'Appointment' }] },
    `Answer these four before anything else. They decide whether the case jumps the queue, gets same-day service, or goes on the schedule.`
  ] }
]);
deep('beginner.m2.l2', [
  { title: 'Follow-up rhythm', blocks: [
    { ig: 'gantt', icon: 'clock', title: 'Touchpoints on a same-day shop repair', from: '08:00', to: '17:00', ticks: ['08:00', '10:00', '12:00', '14:00', '16:00'], rows: [
      { l: 'Unit at shop', s: '08:00', e: '08:00', tone: 'info', note: 'Confirm check-in' }, { l: 'Diagnosis promised', s: '10:00', e: '10:00', tone: 'warning', note: 'Call at 10:00' },
      { l: 'Approval sent', s: '10:20', e: '10:20', tone: 'success', note: 'Same call' }, { l: 'Parts check', s: '12:00', e: '12:00', tone: 'info', note: 'Arrived?' },
      { l: 'ETR check', s: '14:30', e: '14:30', tone: 'info', note: 'On track?' }, { l: 'Release & confirm', s: '16:30', e: '16:30', tone: 'success', note: 'Driver confirms' }
    ] }
  ] },
  { title: 'Closing checklist', blocks: [
    { ig: 'card', icon: 'check-circle', title: 'Before you close a case', form: 'Close-out checklist', rows: [['Driver confirms', 'Complaint resolved'], ['Repair order', 'Complaint · cause · correction'], ['Costs', 'Match approved estimate / PO'], ['Times', 'Down → released recorded'], ['Warranty / cores', 'Claim filed · core returned'], ['Follow-ups', 'Deferred items scheduled']] }
  ] }
]);
deep('beginner.m3.l1', [
  { title: 'How a diesel makes power', blocks: [
    { ig: 'cycle', icon: 'rotate', title: 'The four-stroke diesel cycle', center: 'One cycle = two crank turns', items: [{ icon: 'arrow-r', t: 'Intake', d: 'Air drawn in' }, { icon: 'layers', t: 'Compression', d: 'Air heated by squeezing' }, { icon: 'zap', t: 'Power', d: 'Fuel injected, ignites' }, { icon: 'arrow-l', t: 'Exhaust', d: 'Gases pushed out' }] },
    `Diesels ignite fuel with the heat of compressed air — no spark plugs. That is why injectors, turbochargers (which pack in more air) and fuel quality matter so much to performance and emissions.`
  ] },
  { title: 'Symptom → system', blocks: [
    { ig: 'table', icon: 'search', title: 'Quick symptom guide', head: ['Driver says…', 'Likely system(s)', 'Typical urgency'], rows: [
      ['"Losing power, DPF light"', 'Aftertreatment', 'Soon — derate risk'], ['"White smoke, sweet smell"', 'Cooling (coolant entering combustion)', 'Stop — engine risk'],
      ['"Black smoke under load"', 'Fuel / air intake / turbo', 'Soon'], ['"Won\'t shift out of neutral"', 'Transmission / electrical', 'Can\'t move'],
      ['"Whine from the rear, gets louder"', 'Differential / driveline', 'Soon — inspect'], ['"Temp gauge climbing"', 'Cooling', 'Stop if rising / steam']
    ], note: 'Starting points for questions, not diagnoses.' }
  ] }
]);
deep('beginner.m3.l2', [
  { title: 'Trailer electrical', blocks: [REF.pinout] },
  { title: 'Brake adjustment', blocks: [
    `S-cam air brakes need to stay in adjustment: as linings wear, the brake chamber pushrod travels farther before the brakes apply. Automatic slack adjusters compensate, but they can fail — and brakes out of adjustment are among the most common roadside inspection findings.`,
    { ig: 'stats', icon: 'zap', title: 'Why adjustment matters', items: [{ v: '#1', l: 'category of vehicle out-of-service violations is often brake-related in CVSA roadside data', tone: 'critical' }, { v: '0', l: 'times a coordinator should suggest "manually adjusting" automatic slack adjusters instead of diagnosing why they drifted', tone: 'warning' }] },
    { callout: { kind: 'info', title: 'What to ask the shop', text: 'If brakes are found out of adjustment, ask why — worn components, a failing automatic slack adjuster, or an installation issue. Repeated adjustment on the same wheel is a repeat failure.' } }
  ] }
]);
deep('beginner.m4.l1', [
  { title: 'Question techniques', blocks: [
    { compare: { yes: { title: 'Open questions — to explore', items: ['"Describe what you\'re hearing."', '"What happened right before it started?"', '"What does the message on the dash say?"'] }, no: { title: 'Closed questions — to confirm', items: ['"Is it the front left?"', '"Is the temperature gauge normal?"', '"Are you off the road?"'] } } },
    `Start open to let the driver describe it; switch to closed questions to pin down facts. Avoid leading questions like "It\'s probably the brakes, right?" — they plant answers.`
  ] },
  { title: 'Active listening', blocks: [
    { ig: 'process', icon: 'message', title: 'LISTEN on a driver call', items: [{ icon: 'users', t: 'Let them talk', d: 'Don\'t interrupt the first description' }, { icon: 'clipboard', t: 'Note key words', d: 'Location, timing, sounds' }, { icon: 'search', t: 'Probe', d: 'Fill the gaps' }, { icon: 'message', t: 'Summarize', d: 'Read it back' }, { icon: 'arrow-r', t: 'Next steps', d: 'And a call-back time' }] }
  ] }
]);
deep('beginner.m4.l2', [
  { title: 'Sensory clues', blocks: [
    { ig: 'table', icon: 'search', title: 'Using the senses to narrow the problem', head: ['Sense', 'Clue', 'Often related to'], rows: [
      ['Hear', 'Hissing', 'Air leak (brakes, suspension)'], ['Hear', 'Grinding when braking', 'Worn brake linings'], ['Hear', 'Knocking from engine', 'Serious engine issue — stop'],
      ['Smell', 'Sweet', 'Coolant'], ['Smell', 'Burning rubber / hot metal', 'Dragging brake, tire rub, bearing'], ['See', 'Blue smoke', 'Oil burning'],
      ['See', 'Puddle under engine', 'Oil, coolant or fuel leak'], ['Feel', 'Vibration at speed', 'Tires, wheels, driveline'], ['Feel', 'Pull when braking', 'Brake imbalance — safety-critical']
    ] }
  ] }
]);
deep('beginner.m5.l1', [
  { title: 'The stop decision', blocks: [
    { ig: 'process', icon: 'shield', title: 'Can this vehicle continue?', items: [{ icon: 'route', t: 'Control?', d: 'Steer & stop normally' }, { icon: 'alert', t: 'Hazard?', d: 'Smoke, fire, leak' }, { icon: 'zap', t: 'Red warning?', d: 'Stop-engine, low air' }, { icon: 'target', t: 'Tire failure?', d: 'Any position' }, { icon: 'check-circle', t: 'All clear', d: 'Continue & schedule' }], note: 'Any "yes" in the first four = stop safely and get a qualified technician.' }
  ] },
  { title: 'Out-of-service basics', blocks: [
    `Roadside inspectors use the CVSA North American Standard Out-of-Service Criteria. An out-of-service ([[OOS]]) vehicle defect means the vehicle cannot be operated until it is repaired. Common OOS categories include brakes, tires, lighting, coupling devices and cargo securement.`,
    { callout: { kind: 'tip', title: 'Think like an inspector', text: 'If a defect would put the truck out of service at a roadside inspection, it should never leave your yard with that defect.' } }
  ] }
]);
deep('beginner.m5.l2', [
  { title: 'Weather & night', blocks: [
    { tiles: [
      { icon: 'moon', title: 'Night', text: 'Lighting defects become critical; driver visibility on the shoulder is lower — safety instructions first.' },
      { icon: 'thermo', title: 'Extreme cold', text: 'Fuel gelling, batteries, air dryer freeze-ups, DEF thawing. Driver welfare matters.' },
      { icon: 'sun', title: 'Extreme heat', text: 'Overheating, tire failures, A/C for driver health, reefer strain.' },
      { icon: 'alert', title: 'Storms', text: 'Vendors slower, tows delayed. Plan buffers and consider holding units.' }
    ] }
  ] },
  { title: 'Reefer basics', blocks: [
    { ig: 'stats', icon: 'thermo', title: 'Reefer calls — what to ask', items: [{ v: 'Set', l: 'point temperature', tone: 'info' }, { v: 'Box', l: 'current temperature', tone: 'warning' }, { v: 'Code', l: 'alarm code on the unit display', tone: 'info' }, { v: 'Fuel', l: 'reefer fuel level', tone: 'neutral' }] }
  ] }
]);
deep('beginner.m6.l1', [
  { title: 'Service targets', blocks: [
    { ig: 'bars', icon: 'clock', title: 'Example internal response targets (minutes)', fmt: '', unit: ' min', items: [['Safety roadside: vendor dispatched', 15, 'critical'], ['Driver call-back after update promised', 30, 'warning'], ['Dispatch notified of new down unit', 15, 'warning'], ['Approval decision within limit', 30, 'info'], ['Routine DVIR case opened', 240, 'neutral']], note: 'Example targets — many fleets set internal service levels like these to keep cases moving.' }
  ] }
]);
deep('beginner.m7.l1', [
  { title: 'Choosing a channel', blocks: [
    { ig: 'ratings', icon: 'message', title: 'Phone vs text vs email', cols: ['Phone', 'Text / chat', 'Email'], rows: [
      { l: 'Speed', v: [5, 4, 2] }, { l: 'Urgent / safety', v: [5, 3, 1] }, { l: 'Written record', v: [1, 4, 5] }, { l: 'Detail / attachments', v: [2, 2, 5] }
    ], hint: 'Rule of thumb: call for anything urgent or safety-related, then confirm in writing.' }
  ] },
  { title: 'Tone', blocks: [
    { compare: { yes: { title: 'Sounds professional', items: ['"Here\'s what I know, and when I\'ll know more."', '"I understand — let\'s fix it."', '"Thanks for flagging that."'] }, no: { title: 'Sounds unprofessional', items: ['"Not my problem."', '"It\'ll be fine."', '"Why didn\'t you check that?" (in the moment)'] } } }
  ] }
]);
deep('beginner.m8.l1', [
  { title: 'Documentation gaps', blocks: [
    { ig: 'stats', icon: 'file', title: 'The four gaps that cause the most trouble', items: [{ v: 'Meter', l: 'missing odometer or hours — breaks PM and warranty math', tone: 'critical' }, { v: 'Cause', l: 'no cause on the RO — blocks root-cause analysis', tone: 'warning' }, { v: 'Times', l: 'no down/release times — no downtime KPI', tone: 'warning' }, { v: 'Approval', l: 'no approver recorded — invoice disputes', tone: 'info' }] }
  ] }
]);
deep('beginner.m8.l2', [
  { title: 'Estimate → invoice bridge', blocks: [
    { ig: 'waterfall', icon: 'dollar', title: 'How an approved $1,475 became a $2,210 invoice', fmt: '$', items: [
      { l: 'Approved estimate', v: 1475, type: 'start' }, { l: 'Unapproved belt', v: 310 }, { l: 'Unapproved hoses', v: 380 }, { l: 'Shop supplies', v: 45 }, { l: 'Invoice', v: 2210, type: 'total' }
    ], note: 'A waterfall shows exactly where the difference comes from. The $690 in unapproved items was disputed using the case notes.' }
  ] }
]);

deep('advanced.m1.l1', [
  { title: 'Seasonal PM', blocks: [
    { ig: 'heatmap', icon: 'clock', title: 'Seasonal maintenance focus (example calendar)', cols: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], rows: [
      { l: 'Batteries & charging', v: [3, 3, 1, 0, 0, 0, 0, 0, 1, 3, 3, 3] }, { l: 'Fuel / winter treatment', v: [3, 3, 1, 0, 0, 0, 0, 0, 0, 2, 3, 3] },
      { l: 'Cooling & A/C', v: [0, 0, 0, 1, 3, 3, 3, 3, 1, 0, 0, 0] }, { l: 'Tires (heat)', v: [0, 0, 0, 1, 2, 3, 3, 3, 1, 0, 0, 0] }, { l: 'Air dryers', v: [2, 2, 1, 0, 0, 0, 0, 0, 1, 3, 3, 2] }
    ], tone: 'info', legend: ['Low', 'Focus'], note: 'Illustrative for a fleet with cold winters and hot summers. Prepare before the season, not during it.' }
  ] },
  { title: 'What a PM covers', blocks: [
    { ig: 'card', icon: 'list-check', title: 'Typical PM A checklist (example)', form: 'PM A · tractor', rows: [['Engine oil & filter', 'Replace per interval'], ['Chassis lube', 'All grease points'], ['Brakes', 'Lining, adjustment, air leaks'], ['Tires', 'Pressure, tread depth, damage'], ['Lights', 'All exterior lamps'], ['Fluids', 'Coolant, DEF, washer'], ['Belts & hoses', 'Cracks, leaks'], ['Codes', 'Read active/inactive faults']] }
  ] }
]);
deep('advanced.m1.l2', [
  { title: 'Planning the week', blocks: [
    { ig: 'gantt', icon: 'clock', title: 'Fitting five PMs into one week of loads', from: 0, to: 7, ticks: [[0, 'Mon'], [1, 'Tue'], [2, 'Wed'], [3, 'Thu'], [4, 'Fri'], [5, 'Sat'], [6, 'Sun']], rows: [
      { l: 'T-109 (overdue)', s: 0.6, e: 1, tone: 'critical', note: 'Mon eve' }, { l: 'T-131 (due)', s: 2.6, e: 3, tone: 'warning', note: 'Wed eve' },
      { l: 'T-122 (due soon)', s: 5, e: 5.5, tone: 'info', note: 'Home time' }, { l: 'TR-532', s: 1.3, e: 1.6, tone: 'info', note: 'At drop' }, { l: 'TR-540 annual', s: 0, e: 0.4, tone: 'critical', note: 'First thing' }
    ], note: 'Overdue and compliance items first; due-soon units matched to home time and planned stops.' }
  ] }
]);
deep('advanced.m2.l1', [{ title: 'FMI cheat sheet', blocks: [REF.fmi] }]);
deep('advanced.m2.l2', [
  { title: 'Diagnostic tools', blocks: [
    { ig: 'ratings', icon: 'wrench', title: 'Diagnostic tools compared', cols: ['Basic code reader', 'OEM software', 'Telematics (remote)'], rows: [
      { l: 'Depth of data', v: [2, 5, 3] }, { l: 'Can run tests / regens', v: [1, 5, 1] }, { l: 'Available anywhere', v: [4, 2, 5] }, { l: 'Speed to first info', v: [4, 3, 5] }
    ], hint: 'Ask shops which software they have for the engine make — it often decides who can diagnose an aftertreatment problem.' }
  ] }
]);
deep('advanced.m2.l3', [
  { title: 'Regen call script', blocks: [
    { ig: 'card', icon: 'message', title: 'Questions for any DPF / DEF call', form: 'Aftertreatment call', rows: [['Lamps / messages', 'DPF, DEF, HEST, check engine?'], ['Speed limited?', 'How much?'], ['Last regen', 'Completed? Interrupted?'], ['Regen requested?', 'Parked regen prompt?'], ['DEF level', 'Gauge reading'], ['Duty cycle', 'Idling? Short hauls?']] }
  ] }
]);
deep('advanced.m3.l1', [
  { title: 'Labor rates', blocks: [
    { ig: 'bars', icon: 'dollar', title: 'Example hourly labor rates by vendor type', fmt: '$', items: [['After-hours mobile / roadside', 225, 'warning'], ['Dealer', 195], ['Independent shop', 165], ['In-house (loaded cost)', 110, 'success']], note: 'Illustrative only — rates vary widely by region. Always compare total cost, not rate alone.' }
  ] },
  { title: 'Book vs actual', blocks: [
    `Book time is the published standard. Actual time can be higher (seized bolts, extra damage) or the shop may bill book regardless. Ask shops how they bill — and ask for an explanation when actual hours exceed book by a wide margin.`,
    { ig: 'stats', icon: 'clock', title: 'Reading a labor line', items: [{ v: '3.5', u: 'h', l: 'book time for the job', tone: 'info' }, { v: '6.0', u: 'h', l: 'billed — ask why', tone: 'warning' }, { v: '+71', u: '%', l: 'over book — needs an explanation', tone: 'critical' }] }
  ] }
]);
deep('advanced.m3.l2', [
  { title: 'Trimming an estimate', blocks: [
    { ig: 'waterfall', icon: 'dollar', title: 'From $6,800 requested to $2,040 approved', fmt: '$', items: [
      { l: 'Shop request', v: 6800, type: 'start' }, { l: 'Shocks (no evidence)', v: -1900 }, { l: 'Belts (within life)', v: -620 }, { l: 'Alternator (tested OK)', v: -1450 }, { l: 'Cables (tested OK)', v: -790 }, { l: 'Approved', v: 2040, type: 'total' }
    ], downGood: true, note: 'Starter + batteries (which tested weak) approved. Deferred items documented for the next PM.' }
  ] }
]);
deep('advanced.m4.l1', [
  { title: 'Vendor types compared', blocks: [
    { ig: 'ratings', icon: 'wrench', title: 'Choosing a vendor type', cols: ['Dealer', 'Independent', 'Mobile', 'In-house'], rows: [
      { l: 'Cost advantage', v: [1, 3, 2, 5] }, { l: 'Speed to start', v: [2, 4, 5, 4] }, { l: 'Complex diagnostics', v: [5, 3, 2, 3] }, { l: 'Warranty work', v: [5, 1, 1, 2] }, { l: 'Coverage on the road', v: [3, 4, 4, 1] }
    ], hint: 'General tendencies. Your best vendors may break the pattern — measure them.' }
  ] }
]);
deep('advanced.m4.l2', [
  { title: 'Tow types', blocks: [
    { ig: 'table', icon: 'route', title: 'Match the wrecker to the job', head: ['Type', 'Typical use'], rows: [
      ['Light-duty', 'Cars and light pickups — not for tractors'], ['Medium-duty', 'Box trucks and smaller commercial vehicles'], ['Heavy-duty wrecker', 'Tractors, buses, loaded combinations'],
      ['Rotator', 'Recovery after rollovers or off-road incidents'], ['Landoll / lowboy', 'Hauling equipment that can\'t be towed on its wheels']
    ] }
  ] }
]);
deep('advanced.m6.l1', [
  { title: 'Appointment types', blocks: [
    { compare: { yes: { title: 'Drop & hook', items: ['Driver drops a trailer and picks up another', 'Less waiting at the dock', 'A down tractor can often be replaced easily'] }, no: { title: 'Live load / unload', items: ['Driver waits while freight moves', 'Tight appointment windows', 'Delays ripple into the driver\'s hours'] } } }
  ] }
]);
deep('advanced.m6.l2', [
  { title: 'Recovery options compared', blocks: [
    { ig: 'ratings', icon: 'route', title: 'Recovery options', cols: ['Wait', 'Power swap', 'Trailer swap', 'Rental', 'Reschedule'], rows: [
      { l: 'Low cost', v: [5, 3, 2, 1, 4] }, { l: 'Protects deadline', v: [1, 5, 4, 3, 1] }, { l: 'Simple to arrange', v: [5, 3, 2, 2, 4] }, { l: 'Customer impact (less = more dots)', v: [2, 5, 4, 4, 2] }
    ] }
  ] }
]);
deep('advanced.m7.l2', [
  { title: 'Spotting repeats', blocks: [
    { ig: 'heatmap', icon: 'activity', title: 'Road calls by unit and month', cols: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], rows: [
      { l: 'T-101', v: [1, 0, 1, 1, 0, 1] }, { l: 'T-108', v: [0, 0, 0, 1, 0, 1] }, { l: 'T-114', v: [0, 1, 0, 0, 0, 0] }, { l: 'T-120', v: [0, 0, 0, 2, 1, 1] }, { l: 'T-126', v: [0, 0, 1, 0, 0, 1] }
    ], tone: 'critical', note: 'Heatmaps make repeat offenders obvious at a glance. T-101 and T-120 deserve reviews.' }
  ] }
]);
deep('advanced.m8.l1', [
  { title: 'CPM bridge', blocks: [
    { ig: 'waterfall', icon: 'dollar', title: 'Why CPM rose from $0.118 to $0.131 (cents per mile)', fmt: '', unit: '¢', items: [
      { l: 'Q1 CPM', v: 11.8, type: 'start' }, { l: 'Aftertreatment repairs', v: 1.1 }, { l: 'Tires (price increase)', v: 0.4 }, { l: 'Better PM → fewer tows', v: -0.3 }, { l: 'Q2 CPM', v: 13.0, type: 'total' }
    ], note: 'Rounded example. A CPM bridge turns "costs went up" into specific causes you can act on.' }
  ] }
]);

deep('expert.m1.l1', [
  { title: 'Continuous improvement', blocks: [
    { ig: 'cycle', icon: 'rotate', title: 'Plan–Do–Check–Act for maintenance', center: 'PDCA', items: [{ icon: 'clipboard', t: 'Plan', d: 'Change a PM task or interval' }, { icon: 'wrench', t: 'Do', d: 'Pilot on a few units' }, { icon: 'bar', t: 'Check', d: 'Compare failures & cost' }, { icon: 'check-circle', t: 'Act', d: 'Roll out or adjust' }] },
    `PDCA keeps a maintenance program honest: every change is a small experiment that's measured before it becomes the standard.`
  ] }
]);
deep('expert.m1.l2', [
  { title: 'Lifecycle phases', blocks: [
    { ig: 'process', icon: 'trend', title: 'A vehicle\'s life in the fleet', items: [{ icon: 'check-circle', t: 'Acquire', d: 'Spec & warranty setup' }, { icon: 'truck', t: 'Early life', d: 'Warranty window' }, { icon: 'activity', t: 'Mid life', d: 'Peak productivity' }, { icon: 'wrench', t: 'Late life', d: 'Major repairs rise' }, { icon: 'dollar', t: 'Remarket', d: 'Resale value' }] }
  ] }
]);
deep('expert.m2.l1', [
  { title: 'PM compliance by terminal', blocks: [
    { ig: 'heatmap', icon: 'list-check', title: 'PM compliance % by terminal and month', fmt: '%', cols: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], rows: [
      { l: 'Dallas', v: [96, 95, 97, 94, 96, 95] }, { l: 'Memphis', v: [92, 90, 91, 88, 85, 82] }, { l: 'Atlanta', v: [94, 96, 95, 97, 96, 98] }, { l: 'Phoenix', v: [89, 91, 93, 94, 95, 96] }
    ], tone: 'success', min: 80, max: 100, legend: ['80%', '100%'], note: 'Memphis is sliding while Phoenix improves — ask what changed at each terminal.' }
  ] }
]);
deep('expert.m2.l2', [
  { title: 'Leading vs lagging', blocks: [
    { compare: { yes: { title: 'Leading — act on these', items: ['PM compliance', 'Open safety defects', 'Fault-code trends', 'Parts fill rate'] }, no: { title: 'Lagging — learn from these', items: ['MTBF', 'MTTR', 'Cost per mile', 'Road calls'] } } }
  ] }
]);
deep('expert.m3.l2', [
  { title: 'Pareto: focus on the vital few', blocks: [
    { ig: 'bars', icon: 'bar', title: 'Road calls by cause — last 12 months', fmt: '', items: [['Aftertreatment', 46, 'critical'], ['Tires', 31, 'critical'], ['Electrical / lighting', 22, 'warning'], ['Cooling', 11], ['Brakes', 8], ['Other', 7]], note: 'The top three causes account for about 80% of road calls (99 of 125) — the classic Pareto (80/20) pattern. Start RCA there.' }
  ] }
]);
deep('expert.m5.l2', [
  { title: 'Vendor management cycle', blocks: [
    { ig: 'cycle', icon: 'rotate', title: 'Managing vendor performance', center: 'Vendor partnership', items: [{ icon: 'file', t: 'Expect', d: 'Standards & SLAs' }, { icon: 'bar', t: 'Measure', d: 'Scorecard' }, { icon: 'message', t: 'Review', d: 'Share results' }, { icon: 'wrench', t: 'Improve', d: 'Corrective actions' }, { icon: 'check-circle', t: 'Decide', d: 'Tier the vendor' }] }
  ] }
]);
deep('expert.m6.l2', [
  { title: 'Claim workflow', blocks: [
    { ig: 'process', icon: 'shield', title: 'Warranty claim from failure to recovery', items: [{ icon: 'search', t: 'Identify', d: 'Check coverage first' }, { icon: 'wrench', t: 'Authorized repair', d: 'Right facility' }, { icon: 'file', t: 'Document', d: 'RO, meters, photos' }, { icon: 'layers', t: 'Keep part', d: 'If required' }, { icon: 'dollar', t: 'Recover', d: 'Credit or no charge' }] }
  ] }
]);
deep('expert.m7.l2', [
  { title: 'The DESC script', blocks: [
    { ig: 'process', icon: 'message', title: 'Structure for a difficult conversation', items: [{ icon: 'file', t: 'Describe', d: 'Facts, not labels' }, { icon: 'message', t: 'Express', d: 'Impact on the operation' }, { icon: 'target', t: 'Specify', d: 'What you need' }, { icon: 'check-circle', t: 'Consequences', d: 'Positive outcome' }] },
    { msg: { kind: 'message', title: 'DESC example — to a dispatcher', text: 'D: Twice this week units were released from the shop and sat 3+ hours waiting for a driver.\nE: That adds downtime and our availability KPI suffers for work that\'s already done.\nS: Can we agree that I send you the ETR 2 hours ahead and you assign pickup then?\nC: Trucks roll sooner — and you get more capacity back each day.' } }
  ] }
]);
deep('expert.m8.l2', [
  { title: 'Disruption curve', blocks: [
    { ig: 'heatmap', icon: 'activity', title: 'Units down by hour — cold snap morning', cols: ['05', '06', '07', '08', '09', '10', '11', '12', '13'], rows: [
      { l: 'Roadside', v: [0, 2, 2, 1, 1, 0, 0, 0, 0] }, { l: 'Yard no-starts', v: [1, 4, 4, 3, 2, 1, 0, 0, 0] }, { l: 'In shop', v: [1, 1, 2, 3, 3, 3, 2, 2, 1] }
    ], tone: 'critical', note: 'The peak was 07:00. Knowing the curve helps plan overflow vendors and leadership updates.' }
  ] }
]);

/* ---------------------------------------------------------------------------
   CONTENT — Industry examples
   Real companies referenced in context. Descriptions only restate what each
   company's official website says; they are examples, not endorsements.
   Rendered by the { industry: {...} } block.
   --------------------------------------------------------------------------- */
const COMPANIES = {
  fleetio: { name: 'Fleetio', cat: 'Fleet maintenance software', url: 'https://www.fleetio.com/',
    text: 'Fleetio is fleet management software. Its website describes it as "one place to run fleet maintenance," aimed at reducing downtime and controlling costs, for fleets in industries including trucking and freight.' },
  samsara: { name: 'Samsara', cat: 'Telematics & fleet technology', url: 'https://www.samsara.com/',
    text: 'Samsara offers a connected operations platform. Its website lists fleet capabilities including live GPS tracking, vehicle diagnostics, fuel analytics and compliance reporting, plus AI-powered dash cams and in-cab alerts for driver safety.' },
  protransport: { name: 'Pro Transport USA', cat: 'Trucking & transportation carrier', url: 'https://protransportusa.com/',
    text: 'Pro Transport, Inc. describes itself as a trucking and transportation provider founded in 1998, with its corporate office in Medley, Florida and terminals in Florida, Georgia and South Carolina. It serves local, regional and national customers with employees and owner-operators.' },
  thermoking: { name: 'Thermo King', cat: 'Transport refrigeration', url: 'https://www.thermoking.com/',
    text: 'Thermo King makes transport temperature-control systems, including refrigeration units for trailers and trucks. Its website also describes telematics temperature monitoring for reefers and a dealer network providing service across North America.' }
};
function industry(key, relevance) { return { industry: Object.assign({}, COMPANIES[key], { relevance }) }; }
function addToDeepTab(lessonKey, tabTitle, block) {
  const tab = (lessonAt(lessonKey).deep || []).find((t) => t.title === tabTitle);
  if (tab) tab.blocks.push(block);
}

// Pro Transport USA — what a trucking company looks like in practice
enrich('beginner.m1.l1', { add: [industry('protransport', 'A carrier like this is the structure this lesson describes: terminals, tractors, trailers and drivers moving freight for customers. Every unit in a fleet like this needs the maintenance coordination you\'re learning here.')] });

// Fleetio — fleet maintenance software
addToDeepTab('beginner.m2.l1', 'Tools of the trade', industry('fleetio', 'Much of a coordinator\'s day happens inside fleet maintenance software: opening cases, logging work orders, tracking PM schedules and reviewing unit history.'));
enrich('advanced.m7.l2', { add: [industry('fleetio', 'Fleet maintenance software is where a fleet board like the one above usually lives in real operations — unit status, PM due dates and repair history in one place.')] });
enrich('expert.m9.l2', { add: [industry('fleetio', 'This is the category of system this lesson calls a CMMS. The data-quality rules above apply no matter which product a fleet uses.')] });

// Samsara — telematics, tracking, driver safety
enrich('advanced.m7.l1', { add: [industry('samsara', 'Telematics platforms supply several data points on this list — location, diagnostics and fault codes — so coordinators can track units without waiting for a phone call.')] });
enrich('expert.m9.l1', { add: [industry('samsara', 'Fault alerts, location and diagnostic data from a telematics platform are the inputs to the alert-tiering process in this lesson. Dash cams and in-cab alerts are part of the driver-safety side of the same technology.')] });

// Thermo King — refrigerated transport
enrich('beginner.m3.l2', { add: [industry('thermoking', 'The "reefer unit" in the trailer components table is a transport refrigeration unit like these. It has its own maintenance needs, separate from the trailer it\'s mounted on.')] });
addToDeepTab('beginner.m5.l2', 'Reefer basics', industry('thermoking', 'When a reefer alarms, the unit\'s manufacturer dealer network is often the fastest route to a qualified technician — and the alarm code tells them where to start.'));

/* ---------------------------------------------------------------------------
   CONTENT — Trucking Invoicing module (Beginner m10)
   All companies in these scenarios are fictional. Practices described are
   common industry conventions; each carrier/broker sets its own terms.
   --------------------------------------------------------------------------- */
const RATECON = {
  source: 'RATE CONFIRMATION — Northgate Freight Brokerage (fictional)\n'
    + 'Carrier: Crestline Freight Lines LLC · MC# 000000 (fictional)\n'
    + 'Load #: NFB-448213\n'
    + 'Pickup: Dallas, TX · 06/12 08:00  |  Delivery: Atlanta, GA · 06/13 07:00\n'
    + 'Equipment: 53\' dry van · Miles: 781\n'
    + 'Linehaul rate: $1,900.00   Fuel surcharge: $250.00 flat\n'
    + 'Detention: $50/hr after 2 hours free · in/out times required on BOL\n'
    + 'Lumper: reimbursed with receipt   Layover: $250/day   TONU: $150\n'
    + 'Payment terms: Net 30 from receipt of invoice with signed POD',
  delivery: 'DELIVERY — Atlanta, GA · 06/13\nArrived 06:40 · Departed 11:10 (in/out times written and signed on BOL)\nLumper service paid by driver: $185.00 (receipt #L-7731)\nPOD: BOL signed by receiver, no exceptions noted',
  answer: { broker: 'northgate', load: 'NFB-448213', linehaul: 1900, fsc: 250, detention: 125, lumper: 185, total: 2460 }
};

const INV_PARTIES = { ig: 'hub', icon: 'users', title: 'Who\'s who on a brokered load', center: { icon: 'file', t: 'The invoice' }, items: [
  { icon: 'layers', t: 'Shipper', d: 'Owns & sends the freight' }, { icon: 'users', t: 'Broker', d: 'Arranges the carrier; often pays it' },
  { icon: 'truck', t: 'Carrier', d: 'Hauls it; issues the invoice' }, { icon: 'route', t: 'Driver', d: 'Collects the documents' },
  { icon: 'pin', t: 'Receiver', d: 'Signs for delivery (POD)' }, { icon: 'dollar', t: 'Factoring co.', d: 'May buy the invoice' }
] };

addModule('beginner', {
  id: 'm10', title: 'Trucking Invoicing: From Load to Payment', summary: 'What goes on a trucking invoice, the documents behind it, and how carriers get paid.',
  lessons: [
    /* ---------- L1 ---------- */
    {
      id: 'l1', title: 'What Is a Trucking Invoice?', minutes: 16,
      objectives: ['Explain what a trucking invoice is and why carriers issue one', 'Tell the shipper, broker, carrier, driver, receiver, factoring company and customer apart', 'Read the fields on a trucking invoice'],
      body: [
        `An <strong>invoice</strong> is a bill: a document asking to be paid for work done. In trucking, the <strong>carrier</strong> — the company whose truck hauled the freight — sends an invoice after a load is delivered. No invoice, no payment. Even a perfect delivery earns nothing until it\'s invoiced correctly.`,
        INV_PARTIES,
        { table: { head: ['Party', 'What they do', 'Role in the invoice'], rows: [
          ['Shipper', 'The business sending the freight (e.g., a manufacturer)', 'Pays for transportation — directly to the carrier, or to a broker'],
          ['Broker', 'A licensed intermediary that arranges transportation between shippers and carriers. Brokers don\'t haul freight themselves.', 'On brokered loads, the broker is usually who the carrier invoices'],
          ['Carrier', 'The trucking company that hauls the freight', '<strong>Creates and sends the invoice</strong>'],
          ['Driver', 'Operates the truck', 'Collects signed paperwork that proves the work was done'],
          ['Receiver (consignee)', 'Where the freight is delivered', 'Signs the delivery paperwork — the proof of delivery'],
          ['Factoring company', 'A finance company that buys carrier invoices', 'Pays the carrier early, then collects from the customer'],
          ['Customer', 'Whoever the carrier bills', 'The broker on a brokered load, or the shipper on a direct load']
        ] } },
        { callout: { kind: 'info', title: 'Customer = whoever you bill', text: 'On a brokered load the carrier\'s customer is the broker, not the shipper. On a direct load (no broker) the shipper is the customer.' } },
        { h: 'What goes on the invoice' },
        { ig: 'annotated', icon: 'file', title: 'Anatomy of a trucking invoice', lines: [
          ['Crestline Freight Lines LLC · 100 Main St, Dallas TX · MC# 000000', 1], ['Bill to: Northgate Freight Brokerage, Accounts Payable', 2], ['Invoice # CFL-1045 · Date 06/14 · Terms: Net 30', 3],
          ['Load # NFB-448213 · Dallas TX 06/12 → Atlanta GA 06/13 · 781 mi', 4], ['Linehaul $1,900.00 · Fuel surcharge $250.00', 5], ['Detention 2.5 h × $50 = $125.00 · Lumper $185.00', 6], ['TOTAL DUE $2,460.00', 7]
        ], notes: [
          { n: 1, t: 'Carrier information', d: 'Legal name, address and authority number (MC or USDOT number) of the company being paid.' },
          { n: 2, t: 'Customer / broker information', d: 'Exactly who is being billed — use their billing name and address.' },
          { n: 3, t: 'Invoice number, date & terms', d: 'A unique number, the invoice date and the payment terms (e.g., Net 30).' },
          { n: 4, t: 'Load details', d: 'The customer\'s load/shipment number, pickup and delivery points and dates, and miles.' },
          { n: 5, t: 'Rate & fuel', d: 'The agreed linehaul rate and any fuel surcharge.' },
          { n: 6, t: 'Accessorial charges', d: 'Approved extras such as detention, layover, lumper and tolls — each with support.' },
          { n: 7, t: 'Total amount due', d: 'The sum of all lines.' }
        ] },
        { tiles: [
          { icon: 'dollar', title: 'Linehaul rate', text: 'The base price agreed for moving the load from pickup to delivery.' },
          { icon: 'activity', title: 'Fuel surcharge (FSC)', text: 'An amount that adjusts for diesel prices — a flat amount, per-mile, or included in an "all-in" rate, depending on the agreement.' },
          { icon: 'plus', title: 'Accessorial charges', text: 'Extra services beyond the basic move: detention, layover, lumper, tolls, extra stops and more.' },
          { icon: 'route', title: 'Miles', text: 'Distance of the move — used to check rate per mile and some charges.' }
        ] }
      ],
      example: { title: 'A simple invoice, start to finish', text: `Crestline hauled load NFB-448213 for Northgate Freight Brokerage. The rate confirmation said $1,900 linehaul plus $250 fuel surcharge. At delivery, the truck waited past the free time and the driver paid a lumper. Crestline\'s invoice to Northgate listed all four amounts with the supporting paperwork: <strong>$2,460.00</strong> due under Net 30 terms.` },
      practical: { title: 'Read the rate confirmation', exercise: {
        type: 'extract', sourceLabel: 'Rate confirmation', source: RATECON.source,
        fields: [
          { label: 'Who is the carrier\'s customer (bill-to)?', accept: ['northgate'] },
          { label: 'Load number', accept: ['nfb-448213', 'nfb448213'] },
          { label: 'Agreed linehaul rate ($)', accept: ['1900', '1,900', '1900.00'] },
          { label: 'Payment terms', accept: ['net 30', 'net30', '30'] }
        ] } },
      check: [
        { t: 'mc', q: 'Who creates and sends the invoice for a brokered load?', o: ['The shipper', 'The broker', 'The carrier', 'The receiver'], a: 2, e: 'The carrier that hauled the freight invoices its customer — usually the broker on a brokered load.' },
        { t: 'tf', q: 'A freight broker hauls freight with its own trucks.', a: false, e: 'Brokers arrange transportation; carriers haul it.' },
        { t: 'mc', q: 'On a direct load with no broker, who is the carrier\'s customer?', o: ['The factoring company', 'The shipper', 'The driver', 'The receiver'], a: 1, e: 'Without a broker, the carrier bills the shipper directly.' }
      ],
      takeaways: ['An invoice is the carrier\'s bill for a completed load.', 'Customer = whoever the carrier bills (broker or shipper).', 'Key fields: carrier & customer info, invoice #, date, terms, load #, route, rate, fuel, accessorials, total.', 'Every line must match what was agreed and what can be proven.'],
      tips: ['Copy the customer\'s load number exactly from the rate confirmation.', 'Use one invoice-number sequence and never reuse a number.'],
      mistakes: ['Billing the shipper when the broker is the customer.', 'Leaving off the load/reference number the customer uses to match payment.']
    },
    /* ---------- L2 ---------- */
    {
      id: 'l2', title: 'The Documents Behind Every Invoice', minutes: 16,
      objectives: ['Explain the purpose of the rate confirmation, BOL and POD', 'Match supporting documents to each charge', 'Spot missing paperwork before it delays payment'],
      body: [
        `An invoice is a claim; documents are the evidence. Customers compare your invoice to the paperwork line by line. If a charge isn\'t supported, it\'s usually delayed or refused.`,
        { ig: 'table', icon: 'file', title: 'Documents and why they matter', head: ['Document', 'What it is', 'What it proves for payment'], rows: [
          ['Rate confirmation ("rate con")', 'The broker\'s written agreement with the carrier for this load: rate, stops, dates, accessorial terms', 'What the customer agreed to pay — every amount on the invoice should trace back to it'],
          ['Bill of Lading (BOL)', 'The shipping document issued at pickup describing the freight; a receipt for the goods and a contract for their transport', 'What was picked up, from whom, and where it was going'],
          ['Proof of Delivery (POD)', 'Delivery paperwork — often the BOL — signed by the receiver, with any shortages or damage noted', 'That the load was delivered. Most customers won\'t pay without it'],
          ['Delivery receipt', 'A receiver\'s own receipt, when used', 'Delivery date/time and condition'],
          ['Lumper receipt', 'Receipt from a third-party unloading service', 'The lumper amount the carrier paid and wants reimbursed'],
          ['Detention documentation', 'In/out times at the facility — on the BOL, a signed time sheet, or electronic records', 'How long the truck waited beyond free time'],
          ['Other support', 'Toll receipts, scale tickets, TONU confirmation, layover approval', 'Any other charge being billed']
        ] },
        { ig: 'process', icon: 'file', title: 'The paper trail of one load', items: [
          { icon: 'file', t: 'Rate con', d: 'Before pickup' }, { icon: 'layers', t: 'BOL', d: 'At pickup' }, { icon: 'clock', t: 'Times recorded', d: 'In/out at each stop' },
          { icon: 'check-circle', t: 'POD signed', d: 'At delivery' }, { icon: 'dollar', t: 'Receipts', d: 'Lumper, tolls' }, { icon: 'clipboard', t: 'Invoice packet', d: 'All of it together' }
        ] },
        { callout: { kind: 'warning', title: 'Read the POD before you bill', text: 'If the receiver wrote "2 cartons short" or "damaged" on the POD, the customer may reduce payment or open a claim. Know about exceptions before you submit — don\'t be surprised later.' } },
        { h: 'Common exception notes' },
        `Receivers often note <strong>OS&D</strong> — overage, shortage and damage — on the POD. A clean POD ("no exceptions") is the simplest to get paid on.`,
        { exercise: { type: 'multi', prompt: 'You\'re preparing the invoice for load NFB-448213 (linehaul, fuel, 2.5 h detention, $185 lumper). You have the rate confirmation and the signed POD. Which documents are still needed? (Select all that apply)', options: [
          { text: 'Lumper receipt', correct: true, why: 'Supports the $185 lumper reimbursement.' },
          { text: 'Detention support showing in/out times', correct: true, why: 'Supports the 2.5 billable hours — the rate con requires in/out times.' },
          { text: 'The driver\'s fuel receipts', correct: false, why: 'Fuel surcharge is set by the rate con, not by the driver\'s fuel purchases.' },
          { text: 'A second copy of the rate confirmation', correct: false, why: 'You already have it.' }
        ] }, key: 'inv-docs' }
      ],
      example: { title: 'The missing lumper receipt', text: `A carrier billed $210 for a lumper but the driver lost the receipt. The broker paid the linehaul and held the lumper line. The carrier eventually got a copy from the receiving facility — two weeks later. Now its drivers photograph every receipt before leaving the dock.` },
      practical: { title: 'Match each charge to its support', exercise: {
        type: 'classify', prompt: 'Which document mainly supports each item?', categories: ['Rate confirmation', 'Signed POD', 'Lumper receipt', 'In/out times'],
        items: [
          { text: 'Linehaul $1,900', answer: 'Rate confirmation', why: 'The agreed rate comes from the rate con.' },
          { text: 'Load was delivered complete', answer: 'Signed POD', why: 'The receiver\'s signature proves delivery.' },
          { text: 'Lumper $185', answer: 'Lumper receipt', why: 'Shows the amount paid.' },
          { text: 'Detention 2.5 hours', answer: 'In/out times', why: 'Proves how long the truck waited.' }
        ] } },
      check: [
        { t: 'mc', q: 'What is a POD?', o: ['Proof of Delivery — signed delivery paperwork', 'Payment on Demand', 'Point of Dispatch', 'Price of Diesel'], a: 0, e: 'Proof of Delivery, usually the BOL signed by the receiver.' },
        { t: 'tf', q: 'A charge on the invoice that isn\'t on the rate confirmation or otherwise approved will often be disputed.', a: true, e: 'Customers pay what they agreed to and what\'s supported.' }
      ],
      takeaways: ['Rate con = what was agreed. BOL = what was shipped. POD = that it was delivered.', 'Every accessorial needs its own support.', 'Read the POD for exceptions before billing.', 'Missing paperwork is the #1 cause of slow payment.'],
      tips: ['Ask drivers to photograph BOLs, PODs and receipts at the dock.', 'Build the invoice packet in the same order every time.'],
      mistakes: ['Submitting an unsigned BOL as the POD.', 'Billing detention without in/out times.']
    },
    /* ---------- L3 ---------- */
    {
      id: 'l3', title: 'The Invoicing Workflow and How to Submit', minutes: 17,
      objectives: ['Follow the invoicing workflow from load assignment to payment', 'Know what can go wrong at each step', 'Choose a submission method and run a pre-submission check'],
      body: [
        { ig: 'pipeline', icon: 'route', title: 'From load to payment', items: [
          { t: 'Load assigned', tone: 'info' }, { t: 'Rate con received', tone: 'info' }, { t: 'Picked up', tone: 'info' }, { t: 'BOL collected', tone: 'info' }, { t: 'Delivered', tone: 'warning' },
          { t: 'POD signed', tone: 'warning' }, { t: 'Docs collected', tone: 'warning' }, { t: 'Invoice prepared', tone: 'warning' }, { t: 'Docs attached', tone: 'warning' },
          { t: 'Submitted', tone: 'success' }, { t: 'Reviewed', tone: 'success' }, { t: 'Approved', tone: 'success' }, { t: 'Paid', tone: 'success' }
        ] },
        { timeline: [
          { title: 'Load assigned', text: 'Dispatch books the load. Can go wrong: details agreed by phone never get confirmed in writing.' },
          { title: 'Rate confirmation received', text: 'Check rate, stops, dates and accessorial terms, then sign/return it per the broker\'s process. Can go wrong: wrong rate or missing detention terms nobody catches.' },
          { title: 'Load picked up', text: 'Driver checks the freight against the paperwork. Can go wrong: piece count differs from the BOL.' },
          { title: 'BOL collected', text: 'Driver keeps a clear copy. Can go wrong: illegible or lost BOL.' },
          { title: 'Delivery completed', text: 'In/out times recorded. Can go wrong: no times written — detention can\'t be proven.' },
          { title: 'POD signed', text: 'Receiver signs, prints name, notes exceptions. Can go wrong: no signature, or damage notes the office doesn\'t know about.' },
          { title: 'Supporting documents collected', text: 'Lumper and toll receipts, detention support. Can go wrong: receipts left in the truck for a week.' },
          { title: 'Invoice prepared', text: 'Every line traced to the rate con or approved extras. Can go wrong: typos in the load number or rate.' },
          { title: 'Documents attached', text: 'Rate con, POD and all supports in one packet. Can go wrong: one document missing = invoice on hold.' },
          { title: 'Invoice submitted', text: 'By the customer\'s required method. Can go wrong: sent to the wrong email or portal.' },
          { title: 'Broker/customer reviews', text: 'They match invoice to rate con and POD. Can go wrong: questions nobody answers.' },
          { title: 'Invoice approved', text: 'Scheduled for payment per terms. Can go wrong: short-paid with no explanation.' },
          { title: 'Payment processed', text: 'Payment received and applied. Can go wrong: payment can\'t be matched because the invoice number or load number was wrong.' }
        ] },
        { h: 'How invoices are submitted' },
        { ig: 'ratings', icon: 'message', title: 'Common submission methods', cols: ['Email', 'Customer portal', 'TMS', 'Factoring co.'], rows: [
          { l: 'Tracks status', v: [1, 5, 4, 4] }, { l: 'Easy to attach documents', v: [4, 4, 4, 4] }, { l: 'Fewest data-entry steps', v: [3, 2, 5, 3] }, { l: 'Customer-controlled format', v: [2, 5, 2, 3] }
        ], hint: 'A TMS (transportation management system) is software carriers use to manage loads, dispatch and billing. Which method you use is set by the customer or your factoring agreement.' },
        { ig: 'card', icon: 'check-circle', title: 'Pre-submission checklist', form: 'Before you hit submit', rows: [
          ['Bill-to', 'Matches the customer on the rate con'], ['Load / reference #', 'Exactly as on the rate con'], ['Invoice #', 'Unique — never used before'], ['Rate', 'Matches the rate con'],
          ['Accessorials', 'Each one allowed + supported'], ['POD', 'Signed, legible, exceptions noted'], ['Attachments', 'Rate con, POD, receipts, time support'], ['Total', 'Adds up; terms stated']
        ] }
      ],
      example: { title: 'Portal vs email', text: `A broker asked all carriers to use its online portal. One carrier kept emailing invoices to a general inbox — they sat unprocessed for three weeks. Once the carrier used the portal with the required fields, the next invoice was approved in four days.` },
      practical: { title: 'Is it ready to submit?', exercise: {
        type: 'choose', prompt: 'Invoice CFL-1045 for NFB-448213: rate and load number match the rate con, total is $2,460, lumper receipt and detention times attached — but the POD photo is blurry and the receiver\'s signature can\'t be read. What do you do?',
        options: [
          { text: 'Submit now; they can ask if they need more', correct: false, why: 'An unreadable POD is a common reason invoices are held or rejected.' },
          { text: 'Hold it, get a clear POD copy (from the driver or the receiver), then submit the complete packet', correct: true, why: 'A complete, legible packet gets processed fastest.' },
          { text: 'Remove the detention and lumper to make it simpler', correct: false, why: 'Those charges are valid and supported — don\'t give up earned money.' }
        ] } },
      check: [
        { t: 'mc', q: 'What is a TMS?', o: ['Truck Maintenance Schedule', 'Transportation Management System — software for loads, dispatch and billing', 'Total Miles Summary', 'Toll Management Service'], a: 1, e: 'TMS stands for transportation management system.' },
        { t: 'wwyd', q: 'The broker requires invoices through its portal. You:', o: ['Email them anyway', 'Submit through the portal with required fields and attachments', 'Mail a paper copy', 'Wait for the broker to ask'], a: 1, e: 'Use the method the customer requires.' }
      ],
      takeaways: ['Thirteen steps from load assignment to payment — each can fail.', 'Most problems start with missing or unclear paperwork.', 'Submit the way the customer requires.', 'Run the pre-submission checklist every time.'],
      tips: ['Invoice the same day the POD arrives.', 'Keep a log of submission dates to track payment due dates.'],
      mistakes: ['Waiting to batch invoices at month-end.', 'Submitting before all documents are in.']
    },
    /* ---------- L4 ---------- */
    {
      id: 'l4', title: 'Accessorials, Payment Terms and Factoring', minutes: 18,
      objectives: ['Identify common accessorial charges and their required support', 'Calculate payment due dates under Net terms', 'Explain freight factoring in neutral terms'],
      body: [
        { h: 'Accessorial charges' },
        `An <strong>accessorial</strong> is a charge for a service beyond the basic pickup-to-delivery move. Whether and how much you can bill depends on the rate confirmation or a later written approval.`,
        { ig: 'table', icon: 'plus', title: 'Common accessorials and their support', head: ['Charge', 'When it appears', 'Support usually needed'], rows: [
          ['Detention', 'Truck held at pickup or delivery beyond the free time (often 2 hours) in the agreement', 'In/out times on BOL or signed time sheet; timely notice to the broker if required'],
          ['Layover', 'Driver held overnight or for a day because a load can\'t be loaded or delivered as scheduled', 'Broker/customer approval; dates and reason'],
          ['TONU (Truck Ordered Not Used)', 'Load cancelled after the truck was dispatched or arrived', 'Cancellation confirmation; proof of dispatch/arrival'],
          ['Lumper', 'A third-party crew unloads (or loads) the freight; carrier pays and is reimbursed', 'Lumper receipt'],
          ['Tolls', 'Toll roads on the route, if the agreement allows billing them', 'Toll receipts or statement'],
          ['Extra stop', 'An additional pickup or delivery location', 'Rate con or amendment listing the stop; signed paperwork at the stop'],
          ['Driver assist', 'Driver helps load or unload', 'Approval and signed confirmation from the facility'],
          ['Re-delivery', 'Delivery attempt failed (e.g., receiver closed or refused) and the load is delivered again', 'Documentation of the failed attempt and approval']
        ], note: 'Terms vary by customer. If it isn\'t in the rate con, get written approval before (or when) the event happens.' },
        { h: 'Payment terms' },
        { ig: 'gantt', icon: 'clock', title: 'When payment is due (invoice dated day 0)', from: 0, to: 62, ticks: [[0, 'Day 0'], [15, '15'], [30, '30'], [45, '45'], [60, '60']], rows: [
          { l: 'Net 15', s: 0, e: 15, tone: 'success', note: 'Due day 15' }, { l: 'Net 30', s: 0, e: 30, tone: 'info', note: 'Due day 30' },
          { l: 'Net 45', s: 0, e: 45, tone: 'warning', note: 'Due day 45' }, { l: 'Net 60', s: 0, e: 60, tone: 'critical', note: 'Due day 60' }
        ], note: '"Net 30" means the full amount is due 30 days after the date the terms are measured from — often the invoice date or the date the complete invoice was received. Check the agreement.' },
        `Why terms matter: a carrier pays fuel, drivers and repairs every week. Waiting 30–60 days to be paid ties up cash. Late payments make it worse — so track due dates and follow up politely when an invoice passes its due date.`,
        { h: 'Freight factoring' },
        `<strong>Factoring</strong> is when a carrier sells its invoices to a factoring company. The factoring company pays the carrier an advance quickly — often within a day or two — and then collects the full amount from the broker or shipper. In return it charges a fee, usually a percentage of the invoice. Terms such as advance rate, fees and "recourse" (whether the carrier must buy back an invoice the customer never pays) differ by agreement.`,
        { ig: 'waterfall', icon: 'dollar', title: 'Example: factoring a $2,460 invoice (3% fee, 90% advance)', fmt: '$', items: [
          { l: 'Invoice', v: 2460, type: 'start' }, { l: 'Held as reserve (10%)', v: -246, tone: 'warning' }, { l: 'Advance paid now', v: 2214, type: 'total', tone: 'success' }
        ], note: 'Later, after the customer pays the factoring company, the reserve ($246) minus the fee ($73.80) — $172.20 — is released. The carrier receives $2,386.20 in total. Numbers are illustrative; every agreement differs.' },
        { compare: {
          yes: { title: 'Waiting for the customer', items: ['Receive 100% of the invoice', 'Paid on the customer\'s terms (e.g., Net 30)', 'Carrier handles collections'] },
          no: { title: 'Factoring', items: ['Receive an advance within days', 'Pay a fee (a percentage of the invoice)', 'Factoring company handles collection; customer is told to pay the factor'] }
        } }
      ],
      example: { title: 'The detention that almost wasn\'t', text: `A driver waited 4 hours at a receiver. The rate con allowed detention after 2 free hours, but required notice to the broker when detention started. The dispatcher emailed the broker at the 2-hour mark with the arrival time — so the 2 billable hours were approved without argument.` },
      practical: { title: 'Payment due dates', exercise: {
        type: 'extract', sourceLabel: 'Invoice details', source: 'Invoice CFL-1045 dated 06/14 (terms measured from invoice date)\nCustomer A terms: Net 30\nCustomer B terms: Net 45\nFactoring: 3% fee on a $2,460 invoice',
        fields: [
          { label: 'Net 30 due date (MM/DD)', accept: ['07/14', '7/14'] },
          { label: 'Net 45 due date (MM/DD)', accept: ['07/29', '7/29'] },
          { label: 'Factoring fee ($)', accept: ['73.80', '73.8', '$73.80'] }
        ] } },
      check: [
        { t: 'mc', q: 'What does TONU stand for?', o: ['Truck Ordered Not Used', 'Total Order Net Units', 'Transport Of Non-Urgent freight', 'Time Off Not Used'], a: 0, e: 'Truck Ordered Not Used — a charge when a load is cancelled after the truck was dispatched.' },
        { t: 'mc', q: 'Arrived 06:40, departed 11:10, 2 hours free, $50/hour. Detention due?', o: ['$225', '$125', '$100', '$50'], a: 1, e: '4.5 hours on site − 2 free hours = 2.5 billable × $50 = $125.' },
        { t: 'tf', q: 'With factoring, the carrier usually receives payment sooner but pays a fee.', a: true, e: 'That\'s the core trade-off.' }
      ],
      takeaways: ['Accessorials must be agreed (rate con or written approval) and supported.', 'Detention = time on site − free time, at the agreed rate.', 'Net 30/45/60 = days until payment is due.', 'Factoring trades a fee for faster cash.'],
      tips: ['Notify the broker as soon as detention or layover begins, if the agreement requires it.', 'Keep a due-date list and follow up the day an invoice goes past due.'],
      mistakes: ['Counting free time as billable detention.', 'Billing accessorials that were never approved.']
    },
    /* ---------- L5 ---------- */
    {
      id: 'l5', title: 'Invoice Errors, Rejections and Building an Invoice', minutes: 20,
      objectives: ['Recognize the most common invoice errors', 'Correct and resubmit a rejected invoice', 'Build and check a complete trucking invoice'],
      body: [
        { ig: 'table', icon: 'alert', title: 'Common errors and how to fix them', head: ['Error', 'Example', 'How to correct & resubmit'], rows: [
          ['Wrong rate', 'Billed $2,100; rate con says $1,900', 'Correct to the rate con amount (or attach an approved rate change); resubmit with a note'],
          ['Missing POD', 'Packet has rate con and BOL, no signed POD', 'Get the signed POD from the driver or receiver; resubmit the full packet'],
          ['Incorrect invoice number', 'Invoice # skips or repeats your sequence', 'Void/correct per your accounting process; issue a proper unique number'],
          ['Missing supporting documents', 'Lumper billed, no receipt', 'Attach the receipt, or remove the line until it can be supported'],
          ['Incorrect accessorial', 'Detention billed 4.5 h (free time not deducted)', 'Recalculate (2.5 h × $50 = $125); resubmit'],
          ['Wrong customer/broker info', 'Billed to the shipper instead of the broker', 'Re-issue to the correct bill-to name and address'],
          ['Duplicate invoice', 'Same load invoiced twice', 'Withdraw the duplicate; confirm only one is open'],
          ['Mismatched load number', 'NFB-448231 instead of NFB-448213', 'Correct the reference exactly as on the rate con'],
          ['Missing signatures', 'Receiver didn\'t sign the BOL', 'Obtain a signed POD or the receiver\'s delivery confirmation']
        ], note: 'When resubmitting, say what changed ("Corrected load # per rate con") and follow the customer\'s process for revised invoices.' },
        { ig: 'bars', icon: 'bar', title: 'Why invoices were held (example carrier, one quarter)', fmt: '', items: [['Missing / unreadable POD', 34, 'critical'], ['Accessorial not supported', 21, 'warning'], ['Load # mismatch', 14, 'warning'], ['Rate mismatch', 9], ['Wrong bill-to', 6], ['Duplicate', 3]], note: 'Illustrative numbers. Paperwork problems — not disputes — cause most payment delays.' },
        { h: 'Check an invoice for errors' },
        { msg: { kind: 'note', title: 'Draft invoice — CFL-1046', text: 'Bill to: Northgate Freight Brokerage\nLoad #: NFB-448231\nLinehaul: $2,100.00\nFuel surcharge: $250.00\nDetention: 4.5 h × $50 = $225.00\nLumper: $185.00 (receipt not attached)\nTOTAL: $2,760.00' } },
        { exercise: { type: 'multi', prompt: 'Compare the draft to the rate confirmation and delivery details (load NFB-448213, $1,900 linehaul, $250 FSC, 2 h free time, arrived 06:40 / departed 11:10). Which errors are present? (Select all that apply)', options: [
          { text: 'Load number is transposed (…231 instead of …213)', correct: true, why: 'The reference must match the rate con exactly.' },
          { text: 'Linehaul should be $1,900, not $2,100', correct: true, why: 'Rate con says $1,900.' },
          { text: 'Detention should be 2.5 billable hours ($125)', correct: true, why: 'Free time wasn\'t deducted.' },
          { text: 'Lumper receipt is missing', correct: true, why: 'Supporting document required.' },
          { text: 'Fuel surcharge is wrong', correct: false, why: '$250 flat matches the rate con.' },
          { text: 'Bill-to is wrong', correct: false, why: 'Northgate is the broker/customer — correct.' }
        ] }, key: 'inv-errors' },
        { h: 'Build the invoice' },
        `Now build the correct invoice for load NFB-448213 from the rate confirmation and delivery details. The preview updates as you type.`,
        { widget: 'invoice' }
      ],
      example: { title: 'Rejected, fixed, paid', text: `A broker rejected an invoice with the note "POD missing receiver signature." The carrier asked the receiving facility for its signed copy, attached it, added "Resubmitted with signed POD" to the note field, and resubmitted through the portal the same day. It was approved on the next review cycle.` },
      practical: { title: 'Why was it rejected?', exercise: {
        type: 'classify', prompt: 'Match each rejection message to its reason.', categories: ['Missing / unsupported documents', 'Amount does not match', 'Reference / identity error', 'Duplicate'],
        items: [
          { text: '"No signed POD attached."', answer: 'Missing / unsupported documents', why: 'Proof of delivery is required.' },
          { text: '"Linehaul exceeds the rate confirmation."', answer: 'Amount does not match', why: 'Rate mismatch.' },
          { text: '"Load # not found in our system."', answer: 'Reference / identity error', why: 'Load number is wrong or mistyped.' },
          { text: '"This load has already been invoiced under #CFL-1045."', answer: 'Duplicate', why: 'Same load billed twice.' },
          { text: '"Lumper charge — no receipt."', answer: 'Missing / unsupported documents', why: 'Accessorial without support.' }
        ] } },
      check: [
        { t: 'mc', q: 'An invoice is rejected for a mismatched load number. Best fix?', o: ['Resubmit unchanged', 'Correct the load number exactly as on the rate con and resubmit with a note', 'Create a new load', 'Call the shipper'], a: 1, e: 'Fix the reference and explain the correction.' },
        { t: 'tf', q: 'Sending the same invoice twice "just in case" helps you get paid faster.', a: false, e: 'Duplicates cause confusion and holds.' }
      ],
      takeaways: ['Most rejections are paperwork and reference errors.', 'Correct the specific problem and say what changed.', 'Build every invoice from the rate con and delivery documents.', 'Check before you submit — it\'s faster than fixing after.'],
      tips: ['Keep a rejection log — patterns show what to fix in your process.', 'Double-check digits in load numbers; transpositions are common.'],
      mistakes: ['Resubmitting without fixing the root problem.', 'Issuing a new invoice number for a correction without voiding the old one.']
    }
  ]
});

// Contextual industry example: a carrier is the party that issues invoices.
enrich('beginner.m10.l1', { add: [industry('protransport', 'This is an example of a carrier — the party that hauls freight and issues invoices for it. Each carrier sets its own billing process; this lesson teaches the common fundamentals.')] });

/* ---------------------------------------------------------------------------
   2. PRACTICE DATA — Glossary
   --------------------------------------------------------------------------- */
const GLOSSARY = [
  { term: 'ABS', full: 'Anti-lock Braking System', cat: 'Components', def: 'An electronic system that monitors wheel speed and modulates brake pressure to prevent wheels from locking during hard braking.', simple: 'Keeps the wheels from locking up so the driver can keep steering while braking hard.', example: 'A driver reports the trailer ABS warning lamp stays on after coupling — the coordinator opens a case on the trailer and arranges an inspection.', related: ['Air brakes', 'DTC', 'Glad hands'] },
  { term: 'CMMS', full: 'Computerized Maintenance Management System', cat: 'Documentation', def: 'Software used to manage maintenance activities — work orders, PM schedules, asset histories, parts and costs. Fleets often call it fleet maintenance software.', simple: 'The system where all maintenance records live.', example: 'Requiring system codes on every CMMS work order made repeat electrical failures visible.', related: ['Work order', 'PM', 'Telematics'] },
  { term: 'CSA', full: 'Compliance, Safety, Accountability', cat: 'Regulatory', def: 'The FMCSA program that uses inspection, crash and investigation data to identify carriers for intervention. Data is organized into seven BASICs, including Vehicle Maintenance.', simple: 'The government’s safety scorecard for carriers.', example: 'Lighting violations from roadside inspections count toward the Vehicle Maintenance BASIC.', related: ['CVSA', 'FMCSA', 'OOS'] },
  { term: 'CVSA', full: 'Commercial Vehicle Safety Alliance', cat: 'Regulatory', def: 'A nonprofit association of enforcement officials and industry that publishes the North American Standard inspection procedures, inspection levels and Out-of-Service Criteria.', simple: 'The group that defines how roadside inspections are done.', example: 'A Level II Walk-Around inspection follows the CVSA procedure.', related: ['OOS', 'CSA', 'DOT'] },
  { term: 'OEM', full: 'Original Equipment Manufacturer', cat: 'Finance', def: 'The manufacturer of a vehicle or component, or parts made by or for them to original specification.', simple: 'Factory parts.', example: 'Warranty repairs usually require OEM parts installed at an authorized facility.', related: ['Remanufactured', 'Warranty', 'Parts'] },
  { term: 'Remanufactured', full: 'Remanufactured (reman) parts', cat: 'Finance', def: 'Used components (cores) disassembled, cleaned, rebuilt and tested to specification, typically sold with a warranty and a core charge.', simple: 'Rebuilt parts with a warranty.', example: 'A reman turbo actuator in stock locally saved a day of downtime.', related: ['Core', 'OEM', 'Parts'] },
  { term: 'Reorder point', full: 'Reorder point', cat: 'Finance', def: 'The stock level at which a part should be reordered: expected usage during the supplier lead time plus safety stock.', simple: 'When the shelf gets down to this number, order more.', example: 'Usage 0.5/day × 4 days lead time + 2 safety stock = reorder at 4.', related: ['Parts', 'Remanufactured'] },
  { term: 'Pareto analysis', full: 'Pareto (80/20) analysis', cat: 'Diagnostics', def: 'Ranking causes by frequency or cost to find the "vital few" that account for most of the effect — often roughly 80% from 20% of causes.', simple: 'Find the few problems causing most of the pain.', example: 'Three causes produced about 80% of road calls, so RCA started there.', related: ['Root cause', 'MTBF'] },
  { term: 'Accessorial', full: 'Accessorial charge', cat: 'Finance', def: 'A charge for a service beyond the basic pickup-to-delivery move, such as detention, layover, lumper, extra stops or tolls, billed under the terms of the rate confirmation or a written approval.', simple: 'An extra charge for extra work or waiting.', example: 'Detention of 2.5 hours at $50/hour was billed as a $125 accessorial.', related: ['Detention', 'Lumper', 'Rate confirmation'] },
  { term: 'BOL', full: 'Bill of Lading', cat: 'Documentation', def: 'The shipping document issued at pickup that describes the freight, the shipper and consignee. It serves as a receipt for the goods and as a contract for their transportation.', simple: 'The paperwork that travels with the freight.', example: 'The driver checks the piece count against the BOL before leaving the shipper.', related: ['POD', 'Rate confirmation'] },
  { term: 'Consignee', full: 'Consignee (receiver)', cat: 'Operations', def: 'The party to whom freight is delivered.', simple: 'Whoever receives the load.', example: 'The consignee signs the BOL at delivery, creating the proof of delivery.', related: ['Shipper', 'POD'] },
  { term: 'Detention', full: 'Detention', cat: 'Finance', def: 'An accessorial charge for time a truck is held at a pickup or delivery beyond the agreed free time, billed at an agreed rate and supported by in/out times.', simple: 'Getting paid for waiting too long at a dock.', example: 'On site 4.5 h with 2 h free = 2.5 h billable.', related: ['Accessorial', 'Layover'] },
  { term: 'Freight broker', full: 'Freight broker', cat: 'Operations', def: 'A licensed intermediary that arranges transportation of freight between shippers and motor carriers. Brokers do not haul the freight themselves.', simple: 'The middleman who matches loads with trucks.', example: 'On a brokered load, the carrier invoices the broker, not the shipper.', related: ['Shipper', 'Rate confirmation'] },
  { term: 'Freight factoring', full: 'Freight factoring', cat: 'Finance', def: 'A financing arrangement in which a carrier sells its invoices to a factoring company for an advance, and the factoring company collects payment from the customer, charging a fee.', simple: 'Getting paid early on an invoice, for a fee.', example: 'A 3% fee on a $2,460 invoice is $73.80.', related: ['Net terms', 'Accessorial'] },
  { term: 'Fuel surcharge', full: 'Fuel surcharge (FSC)', cat: 'Finance', def: 'A charge that adjusts freight rates for the cost of diesel fuel, expressed as a flat amount, a per-mile amount, or included in an all-in rate, as agreed.', simple: 'Extra pay to cover fuel prices.', example: 'The rate con listed a $250 flat fuel surcharge.', related: ['Rate confirmation', 'Accessorial'] },
  { term: 'Layover', full: 'Layover', cat: 'Finance', def: 'An accessorial charge when a driver is held overnight or for a day because a load cannot be loaded or delivered as scheduled.', simple: 'Paid for a lost day waiting.', example: 'The receiver pushed the appointment a day; layover of $250 was approved.', related: ['Detention', 'Accessorial'] },
  { term: 'Lumper', full: 'Lumper service', cat: 'Operations', def: 'A third-party crew that loads or unloads freight at a facility. Carriers often pay the lumper and bill the amount back with the receipt.', simple: 'Paid help to unload the truck.', example: 'The driver paid a $185 lumper and kept receipt #L-7731.', related: ['Accessorial', 'POD'] },
  { term: 'Net terms', full: 'Net 15 / 30 / 45 / 60', cat: 'Finance', def: 'Payment terms stating the number of days until the full invoice amount is due, measured from the date specified in the agreement (often the invoice date or receipt of a complete invoice).', simple: 'How many days the customer has to pay.', example: 'An invoice dated 06/14 on Net 30 is due 07/14.', related: ['Freight factoring'] },
  { term: 'OS&D', full: 'Overage, Shortage and Damage', cat: 'Documentation', def: 'Exceptions noted on delivery paperwork when freight received differs from the BOL or arrives damaged.', simple: 'Notes about missing, extra or damaged freight.', example: 'A POD noting "2 cartons short" may reduce payment or lead to a claim.', related: ['POD', 'BOL'] },
  { term: 'POD', full: 'Proof of Delivery', cat: 'Documentation', def: 'Delivery documentation — typically the BOL signed by the receiver — showing that freight was delivered, with any exceptions noted.', simple: 'The signed paper that proves you delivered.', example: 'Most brokers will not pay an invoice without a signed POD.', related: ['BOL', 'OS&D'] },
  { term: 'Rate confirmation', full: 'Rate confirmation (rate con)', cat: 'Documentation', def: 'A written agreement, usually from a broker to a carrier, confirming the rate, load details, stops, dates and accessorial terms for a specific load.', simple: 'The written deal for one load.', example: 'Every amount on the invoice should trace back to the rate con.', related: ['BOL', 'Accessorial', 'Freight broker'] },
  { term: 'Shipper', full: 'Shipper', cat: 'Operations', def: 'The party that tenders freight for transportation — typically the owner or seller of the goods.', simple: 'The business sending the freight.', example: 'On a direct load, the carrier invoices the shipper.', related: ['Consignee', 'Freight broker'] },
  { term: 'TMS', full: 'Transportation Management System', cat: 'Operations', def: 'Software used to plan, dispatch, track and bill freight shipments.', simple: 'The software that runs loads and billing.', example: 'The invoice was generated from the load record in the TMS.', related: ['CMMS', 'Rate confirmation'] },
  { term: 'TONU', full: 'Truck Ordered Not Used', cat: 'Finance', def: 'An accessorial charge billed when a load is cancelled after the carrier has dispatched a truck for it.', simple: 'Paid something when a load is cancelled last-minute.', example: 'The shipper cancelled after the truck arrived; a $150 TONU per the rate con was billed.', related: ['Accessorial'] },
  { term: 'After-action review', full: 'After-action review (AAR)', cat: 'Operations', def: 'A structured, blame-free debrief held after an event to compare what was planned with what happened, understand why, and assign specific improvements.', simple: 'A short meeting to learn from what just happened.', example: 'After a cold-snap disruption, the AAR produced a winter-prep tracker with an owner and due date.', related: ['Root cause', 'Downtime'] },
  { term: 'ASC', full: 'Ammonia Slip Catalyst', cat: 'Emissions', def: 'A catalyst downstream of (or combined with) the SCR catalyst that oxidizes excess ammonia so it is not released from the exhaust.', simple: 'Cleans up leftover ammonia after the SCR.', example: 'A technician mentions the SCR/ASC module when discussing a NOx efficiency code.', related: ['SCR', 'DEF', 'Aftertreatment'] },
  { term: 'Budget variance', full: 'Budget variance', cat: 'Finance', def: 'The difference between actual spending and budgeted spending for a period, often also expressed as a percentage of budget.', simple: 'How far over or under budget you are — and why.', example: 'February ran 14% over budget due to two unplanned engine repairs.', related: ['CPM', 'Estimate'] },
  { term: 'Duals', full: 'Dual tires', cat: 'Components', def: 'Two tires mounted side by side on each end of an axle, sharing the load; common on drive and trailer axles.', simple: 'Pairs of tires side by side.', example: 'An inner dual went flat unnoticed and overloaded the outer tire until it failed too.', related: ['Tread depth'] },
  { term: 'Tread depth', full: 'Tire tread depth', cat: 'Components', def: 'The depth of the grooves in a tire’s tread, measured in 32nds of an inch in the U.S. FMCSA rules set minimums of 4/32 inch for steer tires and 2/32 inch for other positions.', simple: 'How much grip is left on a tire.', example: 'A steer tire measured at 3/32 inch at a PM is replaced before the unit is dispatched.', related: ['Duals', 'PM'] },
  { term: 'Warning devices', full: 'Emergency warning devices', cat: 'Regulatory', def: 'Reflective triangles (or other approved devices) that drivers must place when a commercial vehicle stops on a highway or shoulder; U.S. rules require placement within 10 minutes.', simple: 'The triangles that warn traffic about a stopped truck.', example: 'The coordinator asks, "Are your flashers on and triangles out?" before any other question.', related: ['Roadside', 'FMCSA'] },
  { term: 'Aftertreatment', full: 'Exhaust aftertreatment system', cat: 'Emissions', def: 'The group of components downstream of the engine that reduce exhaust emissions, typically including a diesel oxidation catalyst (DOC), diesel particulate filter (DPF) and selective catalytic reduction (SCR) system.', simple: 'The truck\'s exhaust-cleaning equipment.', example: 'A derate with an amber DPF lamp is an aftertreatment issue — the coordinator looks for a shop with the right diagnostic software.', related: ['DPF', 'SCR', 'DEF', 'DOC', 'Derate'] },
  { term: 'Air brakes', full: 'Air brake system', cat: 'Components', def: 'A braking system that uses compressed air, supplied by an engine-driven compressor and stored in reservoirs, to apply the brakes. Spring brakes are held released by air pressure and apply if pressure is lost.', simple: 'Heavy trucks stop using compressed air instead of brake fluid.', example: 'A low-air warning means pressure is dropping — a safety-critical situation.', related: ['ABS', 'Slack adjuster', 'Glad hands'] },
  { term: 'Book time', full: 'Standard labor time', cat: 'Finance', def: 'A published standard number of labor hours for a specific repair job, used by many shops to estimate and bill labor.', simple: 'The "standard" time a job should take.', example: 'A shop bills 6.0 hours for a job with a book time of 3.5 — the coordinator asks why.', related: ['Labor', 'Estimate'] },
  { term: 'Comeback', full: 'Repeat repair / comeback', cat: 'Maintenance', def: 'A repair that fails or must be redone within a short period after the original repair, often defined as the same system within 30 days.', simple: 'The truck came back for the same problem.', example: 'Vendor scorecards track comeback rate as a quality measure.', related: ['Warranty', 'Root cause'] },
  { term: 'Core', full: 'Core / core charge', cat: 'Finance', def: 'The used, rebuildable part (such as a starter, alternator or turbocharger) returned to the supplier. A core charge is a deposit added to the price of a remanufactured part and refunded when the old part is returned in acceptable condition.', simple: 'A refundable deposit — return the old part and get your money back.', example: 'An alternator invoice includes a $120 core charge; the coordinator confirms the shop returned the old unit so the credit is applied.', related: ['Parts', 'Estimate'] },
  { term: 'Corrective maintenance', full: 'Corrective (reactive) maintenance', cat: 'Maintenance', def: 'Maintenance performed to restore equipment to working condition after a failure or defect has been identified.', simple: 'Fixing something after it breaks or is found defective.', example: 'Replacing a blown tire on the roadside is corrective maintenance.', related: ['Preventive maintenance', 'Roadside', 'Downtime'] },
  { term: 'CPM', full: 'Cost Per Mile', cat: 'Finance', def: 'Maintenance cost divided by miles driven over the same period.', simple: 'How much maintenance costs for every mile the truck runs.', example: '$14,000 in maintenance over 125,000 miles = $0.112 per mile.', related: ['Downtime', 'MTBF'] },
  { term: 'Deadhead', full: 'Deadhead miles', cat: 'Operations', def: 'Miles driven without a revenue-producing load, such as driving empty to a pickup or to recover equipment.', simple: 'Driving empty — miles that don\'t earn money.', example: 'Sending an empty tractor 50 miles to pick up a stranded trailer adds 50 deadhead miles.', related: ['Power swap', 'Dispatch'] },
  { term: 'DEF', full: 'Diesel Exhaust Fluid', cat: 'Emissions', def: 'A solution of high-purity urea and deionized water (32.5% urea) injected into the exhaust stream for use by the SCR system to reduce nitrogen oxides (NOx).', simple: 'A fluid the truck needs (like fuel) to clean its exhaust. Running low can limit engine power.', example: 'A driver reports a DEF warning and reduced power — the coordinator asks about DEF level before sending a mechanic.', related: ['SCR', 'Aftertreatment', 'Derate'] },
  { term: 'Derate', full: 'Engine derate', cat: 'Diagnostics', def: 'An engine protection mode in which the engine control module limits power or vehicle speed in response to a detected fault, often related to emissions or engine protection.', simple: 'The truck deliberately limits its power because something is wrong.', example: '"My truck won\'t go over 5 mph" with an amber DPF lamp is a classic derate call.', related: ['DPF', 'DEF', 'ECM', 'DTC'] },
  { term: 'Diagnostic', full: 'Diagnostics / diagnosis', cat: 'Diagnostics', def: 'The process a technician uses to identify the cause of a problem, using inspection, testing and diagnostic tools. Diagnostic time is typically billed separately from repair time.', simple: 'Figuring out what\'s actually wrong.', example: 'The shop bills 1.0 hour of diagnostics before providing an estimate for the repair.', related: ['DTC', 'Labor', 'Estimate'] },
  { term: 'DOC', full: 'Diesel Oxidation Catalyst', cat: 'Emissions', def: 'An aftertreatment component that oxidizes carbon monoxide, hydrocarbons and some particulate matter, and generates heat that supports DPF regeneration.', simple: 'The first exhaust-cleaning step before the DPF.', example: 'A technician mentions the DOC is face-plugged during a DPF service.', related: ['DPF', 'Aftertreatment'] },
  { term: 'DOT', full: 'U.S. Department of Transportation', cat: 'Regulatory', def: 'The federal department responsible for transportation. The Federal Motor Carrier Safety Administration (FMCSA), an agency within DOT, regulates commercial motor carriers. Motor carriers are identified by a USDOT number. "DOT inspection" commonly refers to the required periodic (annual) vehicle inspection or to roadside inspections.', simple: 'The government department whose rules apply to trucks and truck companies.', example: 'A trailer with an expired annual DOT inspection should not be dispatched until inspected.', related: ['FMCSA', 'OOS', 'DVIR'] },
  { term: 'Downtime', full: 'Downtime', cat: 'Operations', def: 'The period a vehicle is unavailable for service due to maintenance or repair, measured from the time it becomes unavailable until it is returned to service.', simple: 'Time the truck can\'t work.', example: 'Down 08:10, released 15:55 = 7 h 45 min downtime.', related: ['ETR', 'MTTR', 'Fleet availability'] },
  { term: 'DPF', full: 'Diesel Particulate Filter', cat: 'Emissions', def: 'An aftertreatment filter that traps soot (particulate matter) from diesel exhaust. Accumulated soot is burned off through regeneration; ash that cannot be burned is removed by periodic cleaning.', simple: 'A filter that catches soot. It cleans itself by burning the soot off.', example: 'A DPF that can\'t complete regeneration fills up, raising back-pressure and triggering a derate.', related: ['Regeneration', 'Aftertreatment', 'Derate'] },
  { term: 'DTC', full: 'Diagnostic Trouble Code', cat: 'Diagnostics', def: 'A code stored by an electronic control module when it detects a condition outside normal parameters. On heavy-duty vehicles using SAE J1939, codes are commonly expressed as an SPN (what is affected) and FMI (how it is failing).', simple: 'A code the truck\'s computer saves when it notices a problem — a clue, not a diagnosis.', example: 'Telematics reports SPN 3251 FMI 0 — the coordinator forwards it to the shop along with the driver\'s description.', related: ['SPN / FMI', 'ECM', 'Telematics'] },
  { term: 'DVIR', full: 'Driver Vehicle Inspection Report', cat: 'Regulatory', def: 'A written report by the driver identifying defects or deficiencies found during vehicle inspection, required by FMCSA regulations. Defects affecting safe operation must be repaired, and the repair certified, before the vehicle is operated again.', simple: 'The driver\'s inspection report — where drivers write down defects.', example: 'A post-trip DVIR lists "trailer marker light out" — the coordinator schedules the repair before the next dispatch.', related: ['DOT', 'FMCSA', 'PM'] },
  { term: 'ECM', full: 'Engine Control Module', cat: 'Components', def: 'The electronic computer that controls engine functions, monitors sensors, stores fault codes and records data such as engine hours.', simple: 'The engine\'s computer.', example: 'The technician connects to the ECM to read active and inactive fault codes.', related: ['DTC', 'Engine hours', 'Derate'] },
  { term: 'EGR', full: 'Exhaust Gas Recirculation', cat: 'Emissions', def: 'A system that routes a portion of exhaust gas back into the engine intake, usually through a cooler, to lower combustion temperatures and reduce NOx formation.', simple: 'Sends some exhaust back into the engine to make it burn cooler and cleaner.', example: 'Unexplained coolant loss can sometimes be traced to a leaking EGR cooler — a technician confirms with testing.', related: ['Aftertreatment', 'SCR'] },
  { term: 'ELD', full: 'Electronic Logging Device', cat: 'Regulatory', def: 'A device that automatically records a driver\'s driving time and other hours-of-service data, required for most drivers who must keep records of duty status.', simple: 'The device that records a driver\'s hours.', example: 'Dispatch checks the ELD to see how many driving hours a driver has left after a long repair.', related: ['HOS'] },
  { term: 'Engine hours', full: 'Engine hours', cat: 'Maintenance', def: 'The cumulative time an engine has run, recorded by the ECM or an hour meter. Used for maintenance intervals, especially on units that idle heavily.', simple: 'How long the engine has been running in total — including idling.', example: 'A port day cab with 9,000 engine hours but low mileage is serviced by hours, not miles.', related: ['Odometer', 'PM', 'ECM'] },
  { term: 'Estimate', full: 'Repair estimate', cat: 'Finance', def: 'A shop\'s projected cost for a repair, listing labor, parts, fees and taxes, provided for approval before work proceeds.', simple: 'The expected price before the work is done.', example: 'An estimate over the coordinator\'s approval limit is routed to the fleet manager.', related: ['Labor', 'Parts', 'Core', 'PO'] },
  { term: 'ETA', full: 'Estimated Time of Arrival', cat: 'Operations', def: 'The expected time a person, vehicle, part or vendor will arrive.', simple: 'When someone or something will get there.', example: 'Mobile tire service ETA 45 minutes.', related: ['ETR'] },
  { term: 'ETR', full: 'Estimated Time of Repair / Release', cat: 'Operations', def: 'The expected time a repair will be completed and the unit released back to service.', simple: 'When the truck should be fixed and ready.', example: '"ETR 16:30 if the part arrives on the 13:00 delivery."', related: ['ETA', 'Downtime', 'MTTR'] },
  { term: 'Fifth wheel', full: 'Fifth wheel coupling', cat: 'Components', def: 'The coupling device mounted on the tractor frame that locks onto the trailer\'s kingpin and supports the front of the trailer.', simple: 'The horseshoe-shaped plate on the tractor that the trailer hooks onto.', example: 'A driver reports the fifth wheel won\'t lock — the unit must not pull a trailer until inspected.', related: ['Kingpin', 'Glad hands'] },
  { term: 'Fleet availability', full: 'Fleet availability', cat: 'Finance', def: 'The percentage of total available time that units are ready for service: (available hours − downtime hours) ÷ available hours × 100.', simple: 'How much of the time the fleet is ready to work.', example: '50 units × 720 hours = 36,000 h; 1,440 h down → 96.0% availability.', related: ['Downtime', 'MTTR', 'MTBF'] },
  { term: 'FMCSA', full: 'Federal Motor Carrier Safety Administration', cat: 'Regulatory', def: 'The agency within the U.S. Department of Transportation that regulates commercial motor vehicle safety, including vehicle maintenance, inspection and driver hours-of-service rules.', simple: 'The U.S. agency that makes and enforces trucking safety rules.', example: 'Periodic inspection and DVIR requirements come from FMCSA regulations.', related: ['DOT', 'HOS', 'DVIR'] },
  { term: 'Glad hands', full: 'Glad hands (air couplers)', cat: 'Components', def: 'Couplers that connect the tractor\'s air supply and service (control) lines to the trailer\'s air brake system.', simple: 'The connectors that carry brake air from the tractor to the trailer.', example: 'An audible leak at the glad hands often means a worn rubber seal — a quick fix for a mobile mechanic.', related: ['Air brakes', 'Fifth wheel'] },
  { term: 'HOS', full: 'Hours of Service', cat: 'Regulatory', def: 'Federal rules limiting how long commercial drivers may drive and be on duty. For U.S. property-carrying drivers these include an 11-hour driving limit within a 14-hour on-duty window after 10 consecutive hours off duty, plus break and weekly limits.', simple: 'Rules for how long drivers can legally drive and work.', example: 'A long repair uses up the driver\'s 14-hour window, so dispatch plans a relay.', related: ['ELD', 'FMCSA'] },
  { term: 'Kingpin', full: 'Kingpin', cat: 'Components', def: 'A steel pin on the underside of the front of a trailer that locks into the tractor\'s fifth wheel.', simple: 'The pin on the trailer that hooks into the tractor.', example: 'Kingpin wear is checked during trailer inspections.', related: ['Fifth wheel'] },
  { term: 'Labor', full: 'Labor', cat: 'Finance', def: 'Technician time billed for diagnosis or repair, typically calculated as hours multiplied by the shop\'s labor rate.', simple: 'What you pay for the technician\'s time.', example: '3.5 hours × $185/hour = $647.50 labor.', related: ['Book time', 'Estimate', 'Parts'] },
  { term: 'MTBF', full: 'Mean Time Between Failures', cat: 'Finance', def: 'A reliability measure: total operating time divided by the number of failures in that period. Higher is better.', simple: 'On average, how long equipment runs before something fails.', example: '60,000 operating hours ÷ 20 failures = 3,000 hours MTBF.', related: ['MTTR', 'Fleet availability'] },
  { term: 'MTTR', full: 'Mean Time To Repair', cat: 'Finance', def: 'Total repair (downtime) hours divided by the number of repairs. Lower is better.', simple: 'On average, how long a repair takes to get the truck back.', example: '400 downtime hours ÷ 20 repairs = 20 hours MTTR.', related: ['MTBF', 'Downtime', 'ETR'] },
  { term: 'Odometer', full: 'Odometer', cat: 'Maintenance', def: 'The instrument that records the total distance a vehicle has traveled.', simple: 'The truck\'s total miles.', example: 'Record odometer at every repair — it\'s needed for PM intervals and warranty.', related: ['Engine hours', 'PM', 'Warranty'] },
  { term: 'OOS', full: 'Out of Service', cat: 'Regulatory', def: 'A status in which a vehicle (or driver) is prohibited from operating until specified conditions are corrected. Roadside inspectors use the CVSA North American Standard Out-of-Service Criteria to determine vehicle OOS conditions.', simple: 'The vehicle is not allowed to move until it\'s fixed.', example: 'A vehicle placed out of service at a roadside inspection needs repair before it can continue.', related: ['DOT', 'FMCSA', 'DVIR'] },
  { term: 'Parts', full: 'Parts', cat: 'Finance', def: 'Components installed during repair, which may be new, remanufactured or used, and may carry warranty and core charges.', simple: 'The pieces that get replaced.', example: 'Ask whether the part is new or reman, whether it has a core charge, and its warranty.', related: ['Core', 'Warranty', 'Labor'] },
  { term: 'PM', full: 'Preventive Maintenance', cat: 'Maintenance', def: 'Scheduled service and inspection performed at set intervals (mileage, time or engine hours) to prevent failures — for example oil and filter changes, lubrication and inspections.', simple: 'Planned service to stop things from breaking.', example: 'T-122 is due for PM B in 1,800 miles; the coordinator schedules it during home time.', related: ['Preventive maintenance', 'Engine hours', 'Odometer'] },
  { term: 'PO', full: 'Purchase Order', cat: 'Finance', def: 'A document or number issued by the buyer authorizing a purchase or repair at an agreed amount.', simple: 'Your official "yes, you may bill us this amount."', example: 'The coordinator issues PO 22019 after the estimate is approved.', related: ['Estimate', 'Work order'] },
  { term: 'Power swap', full: 'Power swap / tractor swap', cat: 'Operations', def: 'Replacing a disabled tractor with another tractor to pull the loaded trailer to its destination.', simple: 'Another truck picks up the trailer so the load keeps moving.', example: 'T-140 picks up T-118\'s trailer while T-118 waits for parts.', related: ['Deadhead', 'Downtime'] },
  { term: 'Preventive maintenance', full: 'Preventive maintenance', cat: 'Maintenance', def: 'The practice of servicing equipment on a planned schedule to reduce the likelihood of failure, as opposed to repairing it after failure.', simple: 'Take care of it before it breaks.', example: 'Fleets with high PM compliance typically see fewer roadside breakdowns.', related: ['PM', 'Corrective maintenance'] },
  { term: 'Reefer', full: 'Refrigerated trailer / reefer unit', cat: 'Components', def: 'A trailer with a refrigeration unit (typically diesel-powered and tracked by its own engine hours) that maintains cargo temperature.', simple: 'A refrigerated trailer.', example: 'A reefer alarm on a temperature-sensitive load is time-critical.', related: ['Engine hours'] },
  { term: 'Regeneration', full: 'DPF regeneration', cat: 'Emissions', def: 'The process of burning accumulated soot from the DPF. It can be passive (during normal operation), active (the system raises exhaust temperature while driving) or parked (initiated while stationary, per manufacturer procedure).', simple: 'The DPF cleaning itself by burning off soot.', example: 'A shop performs a parked regen after replacing a faulty sensor.', related: ['DPF', 'Aftertreatment', 'Derate'] },
  { term: 'Roadside', full: 'Roadside service', cat: 'Operations', def: 'Service performed at the vehicle\'s location — highway shoulder, truck stop or customer site — rather than in a shop.', simple: 'Help that comes to the truck.', example: 'A 24/7 roadside tire service replaces a trailer tire at 02:00.', related: ['Towing', 'Corrective maintenance'] },
  { term: 'RO', full: 'Repair Order', cat: 'Documentation', def: 'The shop\'s document for a repair, typically recording the complaint, cause, correction, parts, labor and charges. Often used interchangeably with work order.', simple: 'The shop\'s paperwork for the job.', example: 'Referencing RO 7731 makes a warranty claim easy to verify.', related: ['Work order', 'PO', 'Warranty'] },
  { term: 'Root cause', full: 'Root cause', cat: 'Diagnostics', def: 'The underlying reason a failure occurred, which if corrected prevents recurrence.', simple: 'The real reason it broke.', example: 'Three turbos failed; root cause was a restricted oil supply line.', related: ['Comeback', 'Diagnostic'] },
  { term: 'SCR', full: 'Selective Catalytic Reduction', cat: 'Emissions', def: 'An aftertreatment system that injects DEF into the exhaust; over a catalyst, the resulting ammonia converts nitrogen oxides (NOx) into nitrogen and water.', simple: 'The part of the exhaust system that uses DEF to clean NOx.', example: 'An SCR efficiency fault can trigger a derate if not repaired.', related: ['DEF', 'Aftertreatment', 'EGR'] },
  { term: 'Slack adjuster', full: 'Slack adjuster', cat: 'Components', def: 'A lever arm connecting the brake chamber pushrod to the brake camshaft on S-cam air brakes; it maintains proper brake adjustment. Most are automatic.', simple: 'A part that keeps air brakes properly adjusted.', example: 'Out-of-adjustment brakes found at inspection may indicate a faulty slack adjuster.', related: ['Air brakes'] },
  { term: 'SPN / FMI', full: 'Suspect Parameter Number / Failure Mode Identifier', cat: 'Diagnostics', def: 'Parts of a J1939 diagnostic trouble code: the SPN identifies the parameter or component involved; the FMI identifies the type of failure (e.g., above normal, below normal, erratic).', simple: 'SPN = what\'s wrong. FMI = how it\'s wrong.', example: 'SPN 3251 FMI 0 — the technician looks at DPF differential pressure data.', related: ['DTC', 'ECM'] },
  { term: 'Telematics', full: 'Telematics', cat: 'Diagnostics', def: 'Systems that transmit vehicle data — location, fault codes, fuel, idle time, engine data — from the truck to fleet software.', simple: 'The truck reporting its data remotely.', example: 'A telematics alert shows an active fault code before the driver even calls.', related: ['DTC', 'ECM'] },
  { term: 'Towing', full: 'Towing / wrecker service', cat: 'Operations', def: 'Moving a disabled vehicle with a tow truck (wrecker). Heavy-duty wreckers are required for tractors and loaded combinations; charges often include hookup, mileage and hourly time.', simple: 'Hauling a truck that can\'t drive.', example: 'Order a heavy-duty tow for a loaded tractor-trailer with an engine failure.', related: ['Roadside', 'Downtime'] },
  { term: 'VIN', full: 'Vehicle Identification Number', cat: 'Documentation', def: 'A unique 17-character code assigned to each vehicle, identifying manufacturer, specifications and serial number.', simple: 'The vehicle\'s unique serial number.', example: 'Parts vendors ask for the VIN to confirm the correct part.', related: ['Work order', 'Warranty'] },
  { term: 'Warranty', full: 'Warranty', cat: 'Finance', def: 'A manufacturer\'s or repairer\'s commitment to repair or replace defective components within stated time/mileage limits and conditions. Includes base vehicle, component, extended and parts/labor repair warranties.', simple: 'If it fails too soon, someone else may pay to fix it.', example: 'A starter failing 4 months after replacement may be covered by the shop\'s parts and labor warranty.', related: ['RO', 'Core', 'Comeback'] },
  { term: 'Work order', full: 'Work order', cat: 'Documentation', def: 'A document authorizing and describing maintenance or repair work to be performed on a specific unit, later completed with findings, parts and labor.', simple: 'The "to-do" document for a repair.', example: 'A PM work order lists the tasks to perform and records what was found.', related: ['RO', 'PO'] }
];

/* ---------------------------------------------------------------------------
   Flashcards
   --------------------------------------------------------------------------- */
const FLASHCARDS = [
  // Components
  { deck: 'Components', front: 'Fifth wheel', back: 'Coupling on the tractor that locks onto the trailer\'s kingpin and supports the front of the trailer.' },
  { deck: 'Components', front: 'Kingpin', back: 'Steel pin under the front of the trailer that locks into the fifth wheel.' },
  { deck: 'Components', front: 'Glad hands', back: 'Couplers connecting tractor air lines to the trailer\'s air brake system.' },
  { deck: 'Components', front: 'Landing gear', back: 'Crank-down legs that support the front of a trailer when it\'s not coupled.' },
  { deck: 'Components', front: 'Differential', back: 'Drivetrain component that lets wheels on the same axle turn at different speeds in turns.' },
  { deck: 'Components', front: 'Slack adjuster', back: 'Lever connecting the brake chamber pushrod to the brake camshaft; keeps S-cam air brakes adjusted.' },
  { deck: 'Components', front: 'Brake chamber', back: 'Air-operated device at each wheel that converts air pressure into mechanical force to apply the brakes.' },
  { deck: 'Components', front: 'Steer / drive / trailer tires', back: 'Steer = front tractor axle. Drive = powered rear tractor axles. Trailer = trailer axles.' },
  { deck: 'Components', front: 'Reefer unit', back: 'Refrigeration unit on a temperature-controlled trailer; usually tracked by its own engine hours.' },
  { deck: 'Components', front: 'Air springs (air bags)', back: 'Suspension components filled with air that support the load and cushion the ride.' },
  { deck: 'Components', front: 'Tire count on a 5-axle tractor-trailer', back: '18 — 2 steer, 8 drive (duals), 8 trailer (duals).' },
  { deck: 'Components', front: 'Minimum tread depth (U.S.)', back: 'Steer tires 4/32″; all other positions 2/32″.' },
  { deck: 'Diagnostics', front: 'Exhaust aftertreatment order', back: 'Engine → DOC → DPF → DEF dosing → SCR (+ ASC) → stack.' },
  { deck: 'Diagnostics', front: 'Passive vs active vs parked regen', back: 'Passive: hot exhaust burns soot naturally. Active: system raises exhaust temp while driving. Parked: started while stationary per procedure.' },
  { deck: 'Terminology', front: 'Around what temperature does DEF freeze?', back: 'About 12 °F (−11 °C). DEF tanks and lines are heated.' },
  { deck: 'Processes', front: 'The four AAR questions', back: 'What was planned? What happened? Why the difference? What will we change (owner + date)?' },
  { deck: 'Processes', front: 'Warning devices after a highway stop (U.S.)', back: 'Hazard flashers immediately; warning devices within 10 minutes.' },
  { deck: 'Terminology', front: 'Budget vs forecast', back: 'Budget = the plan. Forecast = the plan updated with actuals and known upcoming events.' },
  { deck: 'Processes', front: 'DVIR repair loop', back: 'Driver reports defect → repaired before operating (if safety-related) → repair certified → next driver reviews and signs.' },
  { deck: 'Terminology', front: 'CVSA Level I vs II vs III', back: 'I: full inspection incl. under vehicle + driver. II: walk-around. III: driver-only.' },
  { deck: 'Diagnostics', front: 'FMI 3–6 usually suggest…', back: 'An electrical circuit issue (voltage/current out of range, open or shorted circuit).' },
  { deck: 'Components', front: '7-way connector: red wire', back: 'Stop (brake) lamps — a failure means no trailer brake lights.' },
  { deck: 'Terminology', front: 'OEM vs aftermarket vs reman', back: 'OEM: factory spec. Aftermarket: third-party. Reman: rebuilt core with warranty + core charge.' },
  { deck: 'Processes', front: 'Reorder point formula', back: 'Daily usage × lead time (days) + safety stock.' },
  { deck: 'Processes', front: 'Alert tiers', back: 'Act now · act today · plan it · watch.' },
  { deck: 'Terminology', front: 'Leading vs lagging indicator', back: 'Leading predicts (PM compliance, open defects). Lagging reports (road calls, CPM).' },
  { deck: 'Terminology', front: 'Shipper vs broker vs carrier', back: 'Shipper sends the freight. Broker arranges transport (doesn’t haul). Carrier hauls it and issues the invoice.' },
  { deck: 'Abbreviations', front: 'BOL / POD', back: 'Bill of Lading / Proof of Delivery.' },
  { deck: 'Abbreviations', front: 'TONU', back: 'Truck Ordered Not Used — charge when a load is cancelled after dispatch.' },
  { deck: 'Abbreviations', front: 'FSC', back: 'Fuel surcharge.' },
  { deck: 'Processes', front: 'Detention calculation', back: '(Time on site − free time) × hourly rate. E.g., 4.5 h − 2 h = 2.5 h × $50 = $125.' },
  { deck: 'Processes', front: 'Invoice packet', back: 'Invoice + rate confirmation + signed POD + support for every accessorial (receipts, in/out times).' },
  { deck: 'Terminology', front: 'Net 30', back: 'Full payment due 30 days after the date the terms are measured from (often the invoice date).' },
  { deck: 'Terminology', front: 'Freight factoring', back: 'Selling an invoice to a factoring company for a fast advance, minus a fee.' },
  // Terminology
  { deck: 'Terminology', front: 'Downtime', back: 'Time a unit is unavailable for work — from going down to returning to service.' },
  { deck: 'Terminology', front: 'Deadhead', back: 'Miles driven without a revenue load.' },
  { deck: 'Terminology', front: 'Power swap', back: 'Another tractor picks up the loaded trailer from a disabled tractor.' },
  { deck: 'Terminology', front: 'Derate', back: 'Engine protection mode that limits power or speed due to a detected fault.' },
  { deck: 'Terminology', front: 'Core charge', back: 'Refundable deposit on a rebuildable part, returned when the old part is sent back.' },
  { deck: 'Terminology', front: 'Comeback', back: 'A repair that fails and returns within a short period (commonly the same system within 30 days).' },
  { deck: 'Terminology', front: 'Book time', back: 'Standard published labor hours for a specific repair.' },
  { deck: 'Terminology', front: 'Preventive vs corrective', back: 'Preventive = planned service before failure. Corrective = repair after a failure or defect.' },
  { deck: 'Terminology', front: 'Regeneration (regen)', back: 'Burning accumulated soot out of the DPF — passive, active or parked.' },
  // Abbreviations
  { deck: 'Abbreviations', front: 'PM', back: 'Preventive Maintenance' },
  { deck: 'Abbreviations', front: 'DTC', back: 'Diagnostic Trouble Code' },
  { deck: 'Abbreviations', front: 'VIN', back: 'Vehicle Identification Number — 17 characters.' },
  { deck: 'Abbreviations', front: 'RO', back: 'Repair Order' },
  { deck: 'Abbreviations', front: 'ETR', back: 'Estimated Time of Repair / Release' },
  { deck: 'Abbreviations', front: 'DPF', back: 'Diesel Particulate Filter' },
  { deck: 'Abbreviations', front: 'DEF', back: 'Diesel Exhaust Fluid (32.5% urea solution)' },
  { deck: 'Abbreviations', front: 'SCR', back: 'Selective Catalytic Reduction' },
  { deck: 'Abbreviations', front: 'EGR', back: 'Exhaust Gas Recirculation' },
  { deck: 'Abbreviations', front: 'ABS', back: 'Anti-lock Braking System' },
  { deck: 'Abbreviations', front: 'DVIR', back: 'Driver Vehicle Inspection Report' },
  { deck: 'Abbreviations', front: 'HOS', back: 'Hours of Service' },
  { deck: 'Abbreviations', front: 'OOS', back: 'Out of Service' },
  { deck: 'Abbreviations', front: 'ECM', back: 'Engine Control Module' },
  { deck: 'Abbreviations', front: 'MTBF / MTTR', back: 'Mean Time Between Failures / Mean Time To Repair' },
  // Processes
  { deck: 'Processes', front: 'The 12-step maintenance workflow', back: 'Report → gather info → urgency → vendor → arrival → diagnosis → repair per procedure → track → ETA → confirm → document → close.' },
  { deck: 'Processes', front: 'The 7 complaint questions', back: 'What happened? When did it start? Where? Getting worse? Is it safe? Warning lights? Performance affected?' },
  { deck: 'Processes', front: 'Roadside pattern', back: 'Make it safe → gather facts → get the right help → communicate.' },
  { deck: 'Processes', front: 'Dispatch update checklist', back: 'Unit, status, cause, ETR (with confidence), impact, next update time.' },
  { deck: 'Processes', front: 'Three Cs of a work order', back: 'Complaint, Cause, Correction.' },
  { deck: 'Processes', front: 'SBAR escalation', back: 'Situation, Background, Assessment, Recommendation.' },
  { deck: 'Processes', front: 'Disruption triage order', back: 'Life safety → safety-critical defects → time-critical cargo → revenue impact → routine.' },
  // Diagnostics
  { deck: 'Diagnostics', front: 'SPN', back: 'Suspect Parameter Number — identifies WHAT parameter/component a J1939 code is about.' },
  { deck: 'Diagnostics', front: 'FMI', back: 'Failure Mode Identifier — identifies HOW the parameter is failing (high, low, erratic…).' },
  { deck: 'Diagnostics', front: 'Active vs inactive code', back: 'Active = condition present now. Inactive (historical) = occurred before, not currently present.' },
  { deck: 'Diagnostics', front: 'Red vs amber lamp', back: 'Red = serious, stop safely (e.g., STOP ENGINE). Amber = attention needed, diagnose soon.' },
  { deck: 'Diagnostics', front: 'Symptom vs root cause', back: 'Symptom = what is observed. Root cause = the underlying reason that, if fixed, prevents recurrence.' },
  { deck: 'Diagnostics', front: 'Is a DTC a diagnosis?', back: 'No — it is a clue that tells a technician where to start testing.' }
];

/* ---------------------------------------------------------------------------
   Scenario simulator
   grade: best | ok | poor
   --------------------------------------------------------------------------- */
const SCENARIOS = [
  { id: 'power-cel', title: 'Lost power + check engine light', cat: 'Roadside', level: 'Beginner', from: 'Driver · T-120', message: 'My truck just lost power and the check engine light came on.', ctx: ['Loaded', 'I-40 EB', '14:05'],
    options: [
      { text: 'First — are you somewhere safe, or can you safely get off the road? Once you\'re stopped, tell me what lights or messages you see and whether you can still hold speed.', grade: 'best', fb: 'Safety first, then the key facts: warning messages and how much power is lost. A power loss with an amber lamp is often a derate — the messages tell you which vendor to send.' },
      { text: 'Keep going to your delivery and we\'ll look at it after.', grade: 'poor', fb: 'A truck losing power on a highway can be a hazard, and the cause is unknown. Never encourage continued operation without information.' },
      { text: 'I\'ll send a tow truck right away.', grade: 'ok', fb: 'Decisive, but premature. It may be a derate that a mobile tech or a nearby shop can address — a tow may be unnecessary and expensive. Gather information first.' },
      { text: 'Try shutting the truck off and clearing the codes yourself.', grade: 'poor', fb: 'Clearing codes hides information technicians need and doesn\'t fix the cause. Drivers shouldn\'t be asked to perform diagnostics.' }
    ] },
  { id: 'brake-soft', title: 'Brakes feel soft', cat: 'Safety', level: 'Beginner', from: 'Driver · T-127', message: 'Brakes are feeling soft and I keep hearing a hiss from the back of the tractor. Air gauge drops fast when I brake.', ctx: ['Truck stop', 'Loaded', 'Delivery 13:00'],
    options: [
      { text: 'Please stay parked — don\'t move the truck. I\'m getting a mobile brake technician to you now and I\'ll update dispatch. Can you tell me your exact location?', grade: 'best', fb: 'A falling air gauge and hissing are signs of an air leak in the brake system — safety-critical. Stopping and getting a qualified tech is the correct call.' },
      { text: 'Can you make it the 60 miles to the delivery? We\'ll fix it there.', grade: 'poor', fb: 'Never ask a driver to operate with a brake defect. Safety is not negotiable, regardless of delivery time.' },
      { text: 'Try pumping the brakes a few times and see if it improves.', grade: 'poor', fb: 'That\'s diagnosing over the phone, and pumping air brakes with a leak can deplete pressure further. Get a qualified technician.' },
      { text: 'Let me call dispatch first to see what they want to do.', grade: 'ok', fb: 'Dispatch needs to know — but safety instructions come first. Tell the driver to stay parked, then coordinate.' }
    ] },
  { id: 'tire-blow', title: 'Trailer tire blowout at night', cat: 'Roadside', level: 'Beginner', from: 'Driver · T-133 / TR-532', message: 'Blew a trailer tire. I\'m on the shoulder of I-10.', ctx: ['02:15', 'Shoulder', 'Loaded'],
    options: [
      { text: 'Are you safely off the travel lane with hazards on and triangles out? Which tire position — axle, side, inside or outside? And your nearest mile marker?', grade: 'best', fb: 'Confirms safety, then gathers exactly what a tire service needs: position, location.' },
      { text: 'Drive slowly to the next exit and call me from there.', grade: 'poor', fb: 'Running on a failed tire can damage wheels, cause fire or another failure. Send tire service.' },
      { text: 'I\'ll find a tire service near I-10.', grade: 'ok', fb: 'Right direction, but you skipped safety confirmation and the details the vendor needs (position, exact location).' }
    ] },
  { id: 'overheat', title: 'Temperature climbing', cat: 'Safety', level: 'Beginner', from: 'Driver · T-114', message: 'Temp gauge is climbing and I smell something sweet. There\'s a little steam coming from the hood.', ctx: ['Highway', 'Hot day'],
    options: [
      { text: 'Please pull over safely as soon as you can and shut down per your training. Don\'t open the radiator cap. Call me when you\'re stopped.', grade: 'best', fb: 'Sweet smell + steam + rising temp = likely coolant leak and overheating. Stopping prevents engine damage; opening a hot cooling system can cause burns.' },
      { text: 'Turn the heater on full and keep going to the shop 30 miles away.', grade: 'poor', fb: 'Continuing with steam and a sweet smell risks severe engine damage and a roadside hazard.' },
      { text: 'Pull over, open the radiator cap, and add water.', grade: 'poor', fb: 'Opening a hot pressurized cooling system can cause serious burns. Don\'t instruct unsafe actions.' }
    ] },
  { id: 'reefer', title: 'Reefer alarm on a pharma load', cat: 'Cargo', level: 'Advanced', from: 'Driver · TR-551', message: 'Reefer is alarming and the box temp is rising. It\'s at 42°F. Load is pharmaceuticals, range 36–46.', ctx: ['Customer yard', 'Time-critical'],
    options: [
      { text: 'Send a reefer technician now and, in parallel, alert dispatch/ops to prepare a backup reefer trailer in case it can\'t be fixed quickly. Ask the driver for the alarm code and keep doors closed.', grade: 'best', fb: 'Parallel workstreams: repair and cargo protection at the same time. Temperature-sensitive loads can\'t wait for sequential decisions.' },
      { text: 'Tell the driver to continue to the receiver — it\'s still in range.', grade: 'poor', fb: 'The temp is rising; by arrival it may be out of range, risking the entire load.' },
      { text: 'Book the reefer dealer for tomorrow morning.', grade: 'poor', fb: 'The cargo will likely go out of range long before then.' },
      { text: 'Send a reefer technician and check back in a couple of hours.', grade: 'ok', fb: 'Good first step, but without a backup plan and frequent check-ins, the cargo is at risk if the repair takes longer.' }
    ] },
  { id: 'dispatch-press', title: 'Dispatch wants to "just run it"', cat: 'Communication', level: 'Advanced', from: 'Dispatcher', message: 'T-127 is only 40 miles from the delivery. Can\'t we just run it with the air leak and fix it after? The customer is going to kill us.', ctx: ['Air leak', 'Brake system'],
    options: [
      { text: 'I get the pressure. It\'s a brake-system air leak, so it can\'t move until it\'s repaired. Mobile brake tech is 35 minutes out; repair estimate 1–2 hours. If that\'s too late, T-140 is empty 30 miles away for a power swap — want me to set that up?', grade: 'best', fb: 'Acknowledges pressure, holds the safety line, and offers real options with times.' },
      { text: 'Fine, but tell the driver to go slow.', grade: 'poor', fb: 'A brake defect is safety-critical at any speed and distance.' },
      { text: 'No. Not my problem.', grade: 'ok', fb: 'Correct safety decision, poor partnership. Offer alternatives to help dispatch protect the load.' }
    ] },
  { id: 'upsell', title: 'The $6,800 estimate', cat: 'Cost', level: 'Advanced', from: 'Shop service writer', message: 'Starter\'s replaced. While we had it, we recommend batteries, cables, alternator, belts and all four shocks. Total with the starter is $6,800. Want us to go ahead?', ctx: ['Your limit: $2,500', 'Complaint: no-start'],
    options: [
      { text: 'Thanks — please send test results for batteries and alternator, and measurements/photos for shocks and belts. I\'ll approve what\'s needed for safe operation and route anything over my limit to the fleet manager.', grade: 'best', fb: 'Evidence-based approval within authority. Defer non-critical items to PM if appropriate.' },
      { text: 'Go ahead with everything.', grade: 'poor', fb: 'Exceeds your authority and approves unverified work.' },
      { text: 'Just the starter. Decline everything else.', grade: 'ok', fb: 'Controls cost but might skip legitimately failed components (e.g., weak batteries). Ask for evidence.' }
    ] },
  { id: 'frustrated', title: 'Third breakdown this month', cat: 'Communication', level: 'Beginner', from: 'Driver · T-120', message: 'This is the third time this truck broke down this month. I\'m losing money every time. Nobody fixes anything!', ctx: ['Derate', 'Repeat failure'],
    options: [
      { text: 'I hear you — that\'s frustrating and I can see the two earlier cases. I\'m getting help to you now, and I\'m flagging this as a repeat failure so the shop gets the full history and we look for the root cause. I\'ll call you back in 30 minutes.', grade: 'best', fb: 'Acknowledges, acts, addresses the underlying issue and sets a follow-up.' },
      { text: 'That\'s not my fault, I just book the shops.', grade: 'poor', fb: 'Defensive and unhelpful. Owning the case includes the driver experience.' },
      { text: 'Okay, where are you?', grade: 'ok', fb: 'Gets to action but ignores the driver\'s concern and misses the repeat-failure signal.' }
    ] },
  { id: 'parts-delay', title: 'Part is 3 days out', cat: 'Downtime', level: 'Advanced', from: 'Shop', message: 'Diagnosis done — turbo actuator. Our supplier says 3 days for the part.', ctx: ['Loaded trailer attached', 'Downtime cost ~$900/day'],
    options: [
      { text: 'Thanks. Can I source the part elsewhere if I find it sooner? I\'ll check dealers and other suppliers now, and I\'m alerting dispatch so they can plan a power swap for the load.', grade: 'best', fb: 'Attacks the parts delay and protects the load in parallel.' },
      { text: 'Okay, call me when it\'s done.', grade: 'poor', fb: 'Accepts 3 days of downtime without exploring options, and leaves the load stranded.' },
      { text: 'Tow it to another shop.', grade: 'ok', fb: 'Might help if that shop has the part — but confirm availability first; the tow itself costs time and money.' }
    ] },
  { id: 'lead-1', title: 'Why is downtime up 30%?', cat: 'Leadership', level: 'Expert', from: 'Operations Director', message: 'Downtime is up 30% this month. What\'s going on and what are you doing about it?', ctx: ['Management', 'Monthly review'],
    options: [
      { text: 'Repair counts are flat, but average approval wait rose from 3 to 9 hours after our fleet manager\'s on-call changed — that explains most of the increase. I recommend pre-approval up to $1,500 for common repairs and a backup approver after hours. I can have a draft process to you tomorrow.', grade: 'best', fb: 'Data-backed diagnosis of the process issue, with a specific recommendation and a deliverable.' },
      { text: 'Shops have been really slow lately.', grade: 'poor', fb: 'Vague blame without data or a plan.' },
      { text: 'I\'ll look into it and get back to you.', grade: 'ok', fb: 'Honest, but a leader should come prepared with data or at least a timeline and approach.' }
    ] },
  { id: 'lead-2', title: 'Customer wants the truck released', cat: 'Leadership', level: 'Expert', from: 'Account Manager', message: 'The customer is furious. They want their load moving in the next hour. Can you get the shop to release the truck as-is? It\'s just a brake light issue.', ctx: ['Trailer brake lights out', 'Night run'],
    options: [
      { text: 'I understand the pressure. Brake lights are a safety-critical defect, especially at night, so it can\'t move until fixed. A mobile tech can be there in 40 minutes — usually a short repair. I\'ll send you an update the moment it\'s rolling so you can give the customer a firm time.', grade: 'best', fb: 'Holds safety, gives a realistic path and supports the account manager\'s communication.' },
      { text: 'Sure, I\'ll have them release it.', grade: 'poor', fb: 'Brake lights out is a serious safety defect. Never release an unsafe unit under customer pressure.' },
      { text: 'Tell the customer it\'s not possible.', grade: 'ok', fb: 'Correct on safety, but offers no timeline or solution.' }
    ] },
  { id: 'lead-3', title: 'Invoice $1,900 over estimate', cat: 'Leadership', level: 'Expert', from: 'Accounting', message: 'We received an invoice from Shop B for $5,420. The approved estimate in the case notes is $3,520. Should we pay it?', ctx: ['Vendor dispute', 'Documentation'],
    options: [
      { text: 'Hold payment on the difference. I\'ll contact Shop B with the approved estimate, PO and approval record and ask them to justify or correct the additional $1,900. I\'ll update you by Friday.', grade: 'best', fb: 'Uses documentation to resolve the dispute professionally with a clear timeline.' },
      { text: 'Just pay it — they did the work.', grade: 'poor', fb: 'Pays for unauthorized work and teaches vendors that estimates don\'t matter.' },
      { text: 'Refuse to pay anything until they fix it.', grade: 'ok', fb: 'Protects money but may damage the relationship and ignores the approved portion.' }
    ] }
];

/* ---------------------------------------------------------------------------
   Decision trees
   --------------------------------------------------------------------------- */
const TREES = {
  lights: { id: 'lights', title: 'Warning light on the dash', level: 'Beginner', intro: 'A driver calls about a warning light. Work through the decision.', start: 'n1', nodes: {
    n1: { text: 'Driver: "I\'ve got a light on the dash." What do you ask first?', choices: [
      { label: 'Are you able to drive safely, and what color is the light?', next: 'n2' },
      { label: 'Which shop do you want to go to?', next: 'x1' }
    ] },
    x1: { end: true, outcome: 'bad', title: 'Too early', text: 'Choosing a shop before understanding urgency can send a truck with a serious problem down the road — or send a truck with a minor issue to an unnecessary shop visit. Start with safety and lamp color.' },
    n2: { text: 'Driver: "It\'s…"', choices: [
      { label: 'Red — says STOP ENGINE', next: 'r1' },
      { label: 'Amber — CHECK ENGINE', next: 'a1' }
    ] },
    r1: { text: 'A red STOP ENGINE lamp is on. The driver says the next exit is 25 miles away. What do you instruct?', choices: [
      { label: 'Stop safely as soon as possible, shut down per training, then read me any messages or codes', next: 'r_good' },
      { label: 'Try to make the next exit — 25 miles isn\'t far', next: 'r_bad' }
    ] },
    r_good: { end: true, outcome: 'good', title: 'Correct — stop safely', text: 'Red lamps signal serious conditions that can damage the engine or create hazards. Once stopped, gather messages/codes and arrange service (mobile or tow depending on findings).' },
    r_bad: { end: true, outcome: 'bad', title: 'High risk', text: 'Driving 25 miles with a red STOP ENGINE lamp risks catastrophic engine damage or a breakdown in an unsafe location.' },
    a1: { text: 'Amber CHECK ENGINE. Any change in power, temperature, noise or smoke?', choices: [
      { label: 'No — driving normally', next: 'a2' },
      { label: 'Yes — losing power', next: 'a3' },
      { label: 'Yes — temperature rising and some steam', next: 'a4' }
    ] },
    a2: { text: 'Driving normally. Any DEF or DPF messages?', choices: [
      { label: 'None. Schedule diagnosis at the next practical opportunity, document, and ask the driver to report any change', next: 'a_good' },
      { label: 'Ignore it — it\'s only amber', next: 'a_bad' }
    ] },
    a_good: { end: true, outcome: 'good', title: 'Correct — monitor and schedule', text: 'Amber means attention needed. Scheduling diagnosis prevents a small issue from becoming a roadside failure. Document the call and codes if available.' },
    a_bad: { end: true, outcome: 'warn', title: 'Missed opportunity', text: 'Amber lamps often precede derates or bigger failures. Ignoring them leads to reactive, expensive repairs.' },
    a3: { text: 'Losing power with an amber lamp — likely a derate. What next?', choices: [
      { label: 'Get to a safe location, gather messages/codes, arrange prompt diagnosis with a capable shop or mobile tech', next: 'p_good' },
      { label: 'Tell the driver to keep going at reduced speed on the highway', next: 'p_bad' }
    ] },
    p_good: { end: true, outcome: 'good', title: 'Correct — safe location, prompt diagnosis', text: 'A derated truck on a highway can be a hazard. Safe location first, then messages/codes to choose the right vendor.' },
    p_bad: { end: true, outcome: 'bad', title: 'Unsafe', text: 'A significantly slower truck on a highway creates collision risk, and the fault may worsen.' },
    a4: { text: 'Rising temperature and steam.', choices: [
      { label: 'Stop safely now; don\'t open the radiator cap; arrange service', next: 'o_good' },
      { label: 'Keep going to the shop 20 miles away', next: 'o_bad' }
    ] },
    o_good: { end: true, outcome: 'good', title: 'Correct — overheating means stop', text: 'Overheating can destroy an engine. Stop safely and get service to the unit.' },
    o_bad: { end: true, outcome: 'bad', title: 'Engine damage risk', text: 'Driving an overheating engine 20 miles can turn a hose repair into an engine replacement.' }
  } },
  tire: { id: 'tire', title: 'Tire problem reported', level: 'Beginner', intro: 'A driver reports a tire problem.', start: 'n1', nodes: {
    n1: { text: 'Driver: "I think I\'ve got a tire problem." First question?', choices: [
      { label: 'Are you safely stopped and off the travel lanes?', next: 'n2' },
      { label: 'What brand of tire is it?', next: 'x' }
    ] },
    x: { end: true, outcome: 'warn', title: 'Wrong priority', text: 'Brand is rarely urgent. Safety and position come first.' },
    n2: { text: 'Driver is safely stopped. Which position?', choices: [
      { label: 'Steer tire (front)', next: 'steer' },
      { label: 'Drive or trailer tire', next: 'n3' }
    ] },
    steer: { end: true, outcome: 'good', title: 'Steer tire — don\'t drive on it', text: 'A damaged steer tire directly affects steering control. Arrange mobile tire service; the vehicle should not continue until replaced.' },
    n3: { text: 'Is the tire flat/blown, or losing air slowly?', choices: [
      { label: 'Flat or blown', next: 'flat' },
      { label: 'Slow leak', next: 'slow' }
    ] },
    flat: { end: true, outcome: 'good', title: 'Mobile tire service', text: 'Running on a failed tire can damage the wheel or cause a fire. Send tire service with the exact position and location.' },
    slow: { text: 'Slow leak. A tire shop is 3 miles away. What do you do?', choices: [
      { label: 'Follow company procedure — typically send mobile service or, if procedure and conditions allow, have the driver proceed carefully to the nearby shop while monitoring', next: 'slow_ok' },
      { label: 'Tell the driver to finish the 300-mile trip and check it at home', next: 'slow_bad' }
    ] },
    slow_ok: { end: true, outcome: 'good', title: 'Procedure-based decision', text: 'Company procedures differ on short moves with a slow leak. When in doubt, send service to the truck.' },
    slow_bad: { end: true, outcome: 'bad', title: 'Blowout risk', text: 'An under-inflated tire overheats and can fail at highway speed.' }
  } },
  complex: { id: 'complex', title: 'Breakdown Under Pressure', level: 'Expert', intro: 'T-133 is loaded, delivery tomorrow 10:00, 280 miles away. It\'s 14:20.', start: 'n1', nodes: {
    n1: { text: '14:20 — Driver: "Loud air leak from the rear of the tractor, low-air warning just came on. I\'m on the shoulder of I-30." What do you do first?', choices: [
      { label: 'Confirm driver safety: off the travel lane, hazards, warning triangles; stay clear of traffic', next: 'n2' },
      { label: 'Call dispatch to ask if the load can be rescheduled', next: 'n1b' },
      { label: 'Tell the driver to limp to the next exit 8 miles ahead', next: 'bad1' }
    ] },
    bad1: { end: true, outcome: 'bad', title: 'Unsafe instruction', text: 'A low-air warning with an audible leak is a brake-system failure. Moving the truck risks spring brakes applying in traffic or loss of braking. This decision would be a serious safety violation.' },
    n1b: { text: 'Dispatch says "hurry up." Meanwhile the driver is still on the shoulder without instructions.', choices: [
      { label: 'Go back to the driver: confirm safety steps first', next: 'n2' }
    ] },
    n2: { text: '14:30 — Driver is safe. Leak is near a drive-axle brake chamber. Options: (1) Mobile brake tech, ETA 90 min, may not stock the chamber. (2) Independent shop 25 mi, can start tomorrow 07:00. (3) Dealer 60 mi, can start today 18:00 but needs a heavy tow.', choices: [
      { label: 'Mobile tech — and alert dispatch now that delivery is at risk so they can prepare a backup', next: 'n3' },
      { label: 'Heavy tow to the dealer', next: 'tow' },
      { label: 'Wait for the independent shop tomorrow', next: 'wait' }
    ] },
    wait: { end: true, outcome: 'bad', title: 'Driver stranded, delivery missed', text: 'The driver spends the night on a highway shoulder (unsafe), the unit is down 17+ hours, and the delivery is missed. Choose options that start work today and protect the load in parallel.' },
    tow: { text: '15:10 — Heavy tow quoted $1,450, ETA 2 h. Dealer start 18:00, ETR ~21:00. Driver will then have limited hours.', choices: [
      { label: 'Proceed with tow; ask dispatch to plan a relay driver for the morning', next: 'towend' }
    ] },
    towend: { end: true, outcome: 'warn', title: 'Works — at a high cost', text: 'The truck is repaired tonight and a relay makes the delivery ~2 hours late. It worked, but a mobile repair would likely have been faster and $1,000+ cheaper.' },
    n3: { text: '16:00 — Mobile tech confirms a ruptured brake chamber. Not on his truck. A parts store 20 mi away has one and closes at 17:00.', choices: [
      { label: 'Approve the tech (or a courier) to get the part now; document the added cost', next: 'n4' },
      { label: 'Decline — too expensive — and switch to a tow', next: 'tow' }
    ] },
    n4: { text: '17:45 — Chamber replaced, brakes tested and released. Driver started duty at 06:00, so the 14-hour window ends at 20:00. Delivery is ~5 hours away.', choices: [
      { label: 'Work with dispatch: driver runs what\'s legal and rests; dispatch confirms the early-morning run or a relay; customer informed of any risk', next: 'good' },
      { label: 'Ask the driver to push through tonight to make it', next: 'hos' }
    ] },
    hos: { end: true, outcome: 'bad', title: 'Hours-of-service violation', text: 'Pressuring a driver to exceed hours-of-service limits is illegal and unsafe. Coordinate with dispatch on a legal plan.' },
    good: { end: true, outcome: 'good', title: 'Strong outcome', text: 'Safe scene, fast mobile repair, cost approved and documented, legal driver plan and informed customer. The load delivers on time or with a pre-communicated adjustment. This is expert coordination.' }
  } },
  emergency: { id: 'emergency', title: 'Cold Snap Disruption Drill', level: 'Expert', intro: '06:00, −12°F. Multiple units are reporting problems. One mobile service truck is available now; a second in 2 hours.', start: 'n1', nodes: {
    n1: { text: 'Reports: (A) Driver stranded on a highway shoulder, no-start. (B) Reefer alarm, pharma load, temp rising slowly. (C) T-140 amber CEL, loaded, driving normally. (D) Four units at the yard won\'t start. Where does the first mobile truck go?', choices: [
      { label: 'A — stranded driver on the shoulder', next: 'n2' },
      { label: 'B — the pharma reefer', next: 'n1x' },
      { label: 'D — four units at once', next: 'd' }
    ] },
    n1x: { end: true, outcome: 'warn', title: 'Cargo before people', text: 'The reefer matters, but a driver stranded on a highway shoulder in extreme cold is a life-safety issue. Send help to A first and handle B through a parallel option (reefer dealer, trailer swap).' },
    d: { end: true, outcome: 'bad', title: 'Volume over risk', text: 'Four units at a secure yard are the lowest risk. A stranded driver is in danger. Triage by risk, not by count.' },
    n2: { text: 'Mobile truck heading to A. Reefer B is at 41°F (range 36–46), rising ~1°F every 30 min. What for B?', choices: [
      { label: 'Call a reefer service (ETA 60 min) AND ask ops to prepare a backup reefer trailer', next: 'n3' },
      { label: 'Wait for the second mobile truck in 2 hours', next: 'b_bad' }
    ] },
    b_bad: { end: true, outcome: 'bad', title: 'Cargo out of range', text: 'At ~1°F per 30 min, the load exceeds 46°F in about 2.5 hours — right as help would arrive. Use parallel options for time-critical cargo.' },
    n3: { text: 'C (amber CEL, driving normally) and D (yard no-starts) remain. Leadership asks for a status update now. Which update?', choices: [
      { label: '"06:40 — 6 units affected. A: driver safe in cab, mobile ETA 20 min. B: reefer tech ETA 60 min + backup trailer staged. C: monitoring, diagnosis at destination. D: yard units queued for 2nd mobile truck 08:00. Need: approval for overflow mobile vendor. Next update 07:30."', next: 'good' },
      { label: 'Forward all messages from this morning', next: 'u_bad' }
    ] },
    u_bad: { end: true, outcome: 'warn', title: 'Noise, not information', text: 'Leadership needs a decision-ready summary: numbers, safety status, risks, actions, asks, next update.' },
    good: { end: true, outcome: 'good', title: 'Disruption handled well', text: 'Life safety first, time-critical cargo protected with parallel plans, low-risk items queued, and leadership has a clear picture with a specific ask.' }
  } },
  overheat: { id: 'overheat', title: 'Driver reports overheating', level: 'Beginner', intro: 'Temperature gauge is climbing.', start: 'n1', nodes: {
    n1: { text: 'Driver: "Temp gauge is climbing." Any steam, smoke, or red warning?', choices: [
      { label: 'Yes — steam and a warning', next: 's' },
      { label: 'No — just above normal', next: 'n2' }
    ] },
    s: { text: 'Steam and a high temperature warning. Instruction?', choices: [
      { label: 'Stop safely as soon as possible, shut down per training, don\'t open the cap', next: 'good' },
      { label: 'Keep going to the shop 20 miles away', next: 'bad' }
    ] },
    n2: { text: 'Above normal, no warnings. Heavy load on a long grade in hot weather.', choices: [
      { label: 'Ask the driver to reduce demand if safe, find a safe place to stop and check for visible leaks (without opening the hot system), and arrange an inspection', next: 'ok' },
      { label: 'Tell the driver to ignore it', next: 'bad2' }
    ] },
    good: { end: true, outcome: 'good', title: 'Correct', text: 'Stopping early prevents engine damage. Arrange service to the unit.' },
    bad: { end: true, outcome: 'bad', title: 'Engine at risk', text: 'Continuing with steam and a warning can destroy the engine.' },
    ok: { end: true, outcome: 'good', title: 'Measured response', text: 'You reduced risk, gathered information, and started an inspection before a failure.' },
    bad2: { end: true, outcome: 'warn', title: 'Warning signs ignored', text: 'Rising temperature is an early warning; ignoring it can lead to a roadside failure.' }
  } }
};

/* ---------------------------------------------------------------------------
   Fleet board data (fictional fleet)
   --------------------------------------------------------------------------- */
const FLEET = [
  { unit: 'T-101', type: 'Tractor', spec: '2017 Sleeper', miles: 891240, hours: 31410, pmLeft: 4200, pmInt: 25000, pmUnit: 'mi', status: 'In Shop', loc: 'Dallas, TX', issue: 'Clutch replacement — estimate pending approval', vendor: 'Shop B (Independent)', etr: '06/14 16:00', down: 38, repeats: 1, cost: 4820,
    history: [['06/12', 'Clutch slipping reported; towed to Shop B'], ['03/02', 'PM C completed'], ['11/18', 'Clutch adjustment — Shop B']] },
  { unit: 'T-108', type: 'Tractor', spec: '2020 Sleeper', miles: 402880, hours: 14022, pmLeft: 11300, pmInt: 25000, pmUnit: 'mi', status: 'Active', loc: 'Memphis, TN', issue: '—', vendor: '—', etr: '—', down: 31, repeats: 0, cost: 1960,
    history: [['06/03', 'Radiator hose replaced — 31 h downtime (approval delay)'], ['04/11', 'PM A completed']] },
  { unit: 'T-109', type: 'Tractor', spec: '2019 Sleeper', miles: 488410, hours: 17880, pmLeft: -6020, pmInt: 25000, pmUnit: 'mi', status: 'Active', loc: 'Phoenix, AZ', issue: 'PM A overdue', vendor: '—', etr: '—', down: 0, repeats: 0, cost: 620,
    history: [['05/20', 'Headlight replaced (DVIR)'], ['01/09', 'PM B completed']] },
  { unit: 'T-114', type: 'Tractor', spec: '2021 Sleeper', miles: 512340, hours: 18902, pmLeft: 8900, pmInt: 25000, pmUnit: 'mi', status: 'Active', loc: 'Atlanta, GA', issue: '—', vendor: '—', etr: '—', down: 8, repeats: 0, cost: 1520,
    history: [['06/12', 'Water pump replaced — RO 88213, warranty claim submitted'], ['04/28', 'PM A completed']] },
  { unit: 'T-118', type: 'Tractor', spec: '2022 Sleeper', miles: 298560, hours: 9870, pmLeft: 14100, pmInt: 25000, pmUnit: 'mi', status: 'In Shop', loc: 'Little Rock, AR', issue: 'Emissions repair (warranty)', vendor: 'Dealer C', etr: '06/15 12:00', down: 22, repeats: 0, cost: 0,
    history: [['06/13', 'Warranty emissions repair at Dealer C; load recovered by T-140 power swap'], ['05/01', 'PM A completed']] },
  { unit: 'T-120', type: 'Tractor', spec: '2020 Sleeper', miles: 416800, hours: 16240, pmLeft: 2100, pmInt: 25000, pmUnit: 'mi', status: 'Roadside', loc: 'I-40 EB, Amarillo, TX', issue: 'Derate — amber DPF lamp (3rd in 60 days)', vendor: 'Mobile A', etr: 'Tech ETA 45 min', down: 64, repeats: 3, cost: 5340,
    history: [['06/14', 'Derate, DPF lamp — roadside'], ['05/30', 'DPF outlet temp sensor replaced — Dealer C'], ['04/28', 'DPF cleaned — Shop B'], ['04/02', 'Parked regen, codes cleared — Mobile A']] },
  { unit: 'T-122', type: 'Tractor', spec: '2021 Sleeper', miles: 441700, hours: 15510, pmLeft: 1800, pmInt: 25000, pmUnit: 'mi', status: 'Active', loc: 'Oklahoma City, OK', issue: 'PM B due soon — schedule during home time', vendor: '—', etr: '—', down: 0, repeats: 0, cost: 410,
    history: [['05/15', 'Wiper motor replaced'], ['02/20', 'PM A completed']] },
  { unit: 'T-126', type: 'Tractor', spec: '2019 Sleeper', miles: 402100, hours: 15002, pmLeft: 9800, pmInt: 25000, pmUnit: 'mi', status: 'Waiting Parts', loc: 'Tulsa, OK', issue: 'No-start — starter (warranty claim with shop)', vendor: 'Mike\'s Diesel', etr: '06/19 10:00', down: 26, repeats: 1, cost: 0,
    history: [['06/18', 'No-start; starter suspected — warranty claim (RO 7731)'], ['02/14', 'Starter replaced — RO 7731']] },
  { unit: 'T-127', type: 'Tractor', spec: '2020 Day cab', miles: 412880, hours: 19840, pmLeft: 6600, pmInt: 20000, pmUnit: 'mi', status: 'Roadside', loc: 'Love\'s, Amarillo, TX (exit 76)', issue: 'Air leak — low air warning', vendor: 'Mobile brake service', etr: 'Tech ETA 30 min', down: 2, repeats: 0, cost: 0,
    history: [['06/14', 'Air leak reported — mobile brake service dispatched'], ['05/05', 'PM A completed']] },
  { unit: 'T-131', type: 'Tractor', spec: '2022 Sleeper', miles: 188300, hours: 6410, pmLeft: 450, pmInt: 25000, pmUnit: 'mi', status: 'Active', loc: 'Houston, TX', issue: 'PM A due — book this week', vendor: '—', etr: '—', down: 0, repeats: 0, cost: 290,
    history: [['06/10', 'Low coolant level fault (telematics) — topped with approved coolant'], ['03/22', 'PM A completed']] },
  { unit: 'T-133', type: 'Tractor', spec: '2021 Sleeper', miles: 356912, hours: 12300, pmLeft: 12400, pmInt: 25000, pmUnit: 'mi', status: 'Active', loc: 'Oklahoma City, OK', issue: '—', vendor: '—', etr: '—', down: 5, repeats: 0, cost: 880,
    history: [['06/11', 'Front brake inspection — pads replaced'], ['04/02', 'PM B completed']] },
  { unit: 'T-140', type: 'Tractor', spec: '2023 Sleeper', miles: 96400, hours: 3120, pmLeft: 18500, pmInt: 25000, pmUnit: 'mi', status: 'Active', loc: 'Little Rock, AR', issue: '—', vendor: '—', etr: '—', down: 0, repeats: 0, cost: 120,
    history: [['05/28', 'PM A completed']] },
  { unit: 'TR-518', type: 'Trailer', spec: '2019 Dry van', miles: 0, hours: 0, pmLeft: 40, pmInt: 90, pmUnit: 'days', status: 'Active', loc: 'Memphis, TN', issue: '—', vendor: '—', etr: '—', down: 2, repeats: 0, cost: 180,
    history: [['06/10', 'ABS sensor connector repaired — mobile']] },
  { unit: 'TR-532', type: 'Trailer', spec: '2018 Dry van', miles: 0, hours: 0, pmLeft: 12, pmInt: 90, pmUnit: 'days', status: 'Active', loc: 'Houston, TX', issue: 'PM due soon', vendor: '—', etr: '—', down: 1, repeats: 0, cost: 597,
    history: [['06/14', 'RR outside tire replaced roadside — inv 5521']] },
  { unit: 'TR-540', type: 'Trailer', spec: '2017 Dry van', miles: 0, hours: 0, pmLeft: -1, pmInt: 365, pmUnit: 'days', status: 'Out of Service', loc: 'Dallas yard', issue: 'Annual inspection expired — do not dispatch', vendor: 'Terminal shop', etr: '06/15 10:00', down: 18, repeats: 0, cost: 0,
    history: [['06/14', 'Flagged: annual inspection expired'], ['06/13', 'Annual inspection expired']] },
  { unit: 'TR-551', type: 'Trailer', spec: '2021 Reefer', miles: 0, hours: 5210, pmLeft: 25, pmInt: 90, pmUnit: 'days', status: 'In Shop', loc: 'Nashville, TN', issue: 'Reefer not holding temperature', vendor: 'Reefer dealer', etr: 'Today 15:00', down: 6, repeats: 1, cost: 850,
    history: [['06/14', 'Reefer alarm — load transferred to backup trailer'], ['04/20', 'Reefer PM completed']] }
];

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

/* ===========================================================================
   INFOGRAPHICS — { ig: '<type>', title, ... } blocks.
   Types: stats, bars, donut, process, hub, matrix, scale, gantt, pipeline,
   card, annotated, stackcompare, fishbone, pyramid, ladder, formulas.
   Motion is CSS-only (staggered entrance via --i, bar/segment fills).
   =========================================================================== */
const toneCls = (t) => `tone-${t || 'info'}`;
function igFmt(v, fmt, unit) {
  if (fmt === '$') return fmtMoney(v, v % 1 ? 2 : 0);
  if (fmt === 'h') return `${fmtNum(v, v % 1 ? 1 : 0)} h`;
  return fmtNum(v, v % 1 ? 1 : 0) + (unit || '');
}
function igTime(v) {
  if (typeof v === 'number') return v;
  const [h, m] = String(v).split(':').map(Number);
  return h * 60 + (m || 0);
}
function infographicHTML(b) {
  let inner = '';
  const cls = `ig--${b.ig}`;
  switch (b.ig) {
    case 'stats':
      inner = `<div class="ig-stats">${b.items.map((s, i) => `<div class="ig-stat ${toneCls(s.tone)}" style="--i:${i}"><div class="ig-stat__v">${esc(s.v)}${s.u ? `<small>${esc(s.u)}</small>` : ''}</div><div class="ig-stat__l">${inline(s.l)}</div></div>`).join('')}</div>`;
      break;
    case 'bars': {
      const max = b.max || Math.max(...b.items.map((r) => r[1]));
      inner = `<div class="ig-bars">${b.items.map((r, i) => `<div class="ig-bar"><span class="ig-bar__l">${esc(r[0])}</span><span class="ig-bar__track"><span class="ig-bar__fill ${toneCls(r[2] || b.tone || 'neutral-strong')}" style="--p:${(r[1] / max).toFixed(4)};--i:${i}"></span></span><span class="ig-bar__v num">${igFmt(r[1], b.fmt, b.unit)}</span></div>`).join('')}</div>`;
      break;
    }
    case 'donut': {
      const total = b.items.reduce((a, r) => a + r[1], 0); const R = 60; const C = 2 * Math.PI * R; let acc = 0;
      const segs = b.items.map((r, i) => { const len = (r[1] / total) * C; const s = `<circle class="ig-donut__seg" cx="80" cy="80" r="${R}" style="--len:${len.toFixed(2)};--c:${C.toFixed(2)};--i:${i};stroke:var(--ig-${(i % 6) + 1});stroke-dashoffset:${(-acc).toFixed(2)}"/>`; acc += len; return s; }).join('');
      inner = `<div class="ig-donut"><div class="ig-donut__chart"><svg viewBox="0 0 160 160" aria-hidden="true"><circle cx="80" cy="80" r="${R}" class="ig-donut__track"/>${segs}</svg><div class="ig-donut__center"><strong class="num">${esc(b.center || igFmt(total, b.fmt))}</strong><span>${esc(b.centerSub || 'total')}</span></div></div>
        <ul class="ig-legend">${b.items.map((r, i) => `<li><i style="background:var(--ig-${(i % 6) + 1})"></i><span class="grow">${esc(r[0])}</span>${b.pctOnly ? '' : `<strong class="num">${igFmt(r[1], b.fmt, b.unit)}</strong>`}<span class="muted num">${Math.round((r[1] / total) * 100)}%</span></li>`).join('')}</ul></div>`;
      break;
    }
    case 'process':
      inner = `<ol class="ig-process" style="--n:${b.items.length}">${b.items.map((s, i) => `<li class="ig-step" style="--i:${i}"><span class="ig-step__icon">${icon(s.icon || 'check')}</span><span class="ig-step__n">${String(i + 1).padStart(2, '0')}</span><strong>${esc(s.t)}</strong>${s.d ? `<span>${inline(s.d)}</span>` : ''}</li>`).join('')}</ol>`;
      break;
    case 'hub': {
      const n = b.items.length;
      const pos = b.items.map((_, i) => { const a = (-90 + (i * 360) / n) * (Math.PI / 180); return [50 + 38 * Math.cos(a), 50 + 38 * Math.sin(a)]; });
      inner = `<div class="ig-hub"><svg class="ig-hub__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${pos.map(([x, y]) => `<line x1="50" y1="50" x2="${x.toFixed(2)}" y2="${y.toFixed(2)}"/>`).join('')}<circle cx="50" cy="50" r="38"/></svg>
        <div class="ig-hub__center"><span class="ig-hub__icon">${icon(b.center.icon)}</span><strong>${esc(b.center.t)}</strong></div>
        ${b.items.map((s, i) => `<div class="ig-hub__node" style="left:${pos[i][0].toFixed(2)}%;top:${pos[i][1].toFixed(2)}%;--i:${i}"><span class="ig-hub__icon">${icon(s.icon)}</span><strong>${esc(s.t)}</strong><span>${esc(s.d)}</span></div>`).join('')}</div>`;
      break;
    }
    case 'matrix':
      inner = `<div class="ig-matrix"><div class="ig-matrix__y"><span>Low</span><strong>${esc(b.y)} →</strong><span>High</span></div>
        ${b.q.map((q, i) => `<div class="ig-quad ${toneCls(q.tone)}" style="--i:${i}"><strong>${esc(q.t)}</strong><ul>${q.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}
        <div class="ig-matrix__x"><span>Low</span><strong>${esc(b.x)} →</strong><span>High</span></div></div>`;
      break;
    case 'scale':
      inner = `<div class="ig-scale"><div class="ig-scale__bar" aria-hidden="true"></div><div class="ig-scale__stops" style="--n:${b.stops.length}">${b.stops.map((s, i) => `<div class="ig-scale__stop ${toneCls(s.tone)}" style="--i:${i}"><span class="ig-scale__dot"></span><strong>${esc(s.t)}</strong><span>${inline(s.d)}</span></div>`).join('')}</div></div>`;
      break;
    case 'gantt': {
      const a = igTime(b.from), z = igTime(b.to); const pct2 = (v) => ((igTime(v) - a) / (z - a)) * 100;
      const ticks = (b.ticks || []).map((t) => (Array.isArray(t) ? t : [t, t]));
      const grid = ticks.map(([v]) => `<i class="ig-gantt__grid" style="left:${pct2(v).toFixed(2)}%"></i>`).join('');
      inner = `<div class="ig-gantt"><div class="ig-gantt__row ig-gantt__axis"><span></span><div class="ig-gantt__ticks">${ticks.map(([v, l]) => `<span style="left:${pct2(v).toFixed(2)}%">${esc(l)}</span>`).join('')}</div></div>
        ${b.rows.map((r, i) => { const s = pct2(r.s); const w = Math.max(0, pct2(r.e) - s); const point = w === 0; const noteOut = r.note && (point || w < 24); const left = s + w > 72;
          return `<div class="ig-gantt__row"><span class="ig-gantt__l">${esc(r.l)}</span><div class="ig-gantt__track">${grid}<span class="ig-gantt__bar ${toneCls(r.tone)} ${point ? 'is-point' : ''}" style="left:${s.toFixed(2)}%;width:${point ? 0 : w.toFixed(2)}%;--i:${i}">${r.note && !noteOut ? `<em>${esc(r.note)}</em>` : ''}</span>${noteOut ? `<em class="ig-gantt__note ${left ? 'is-left' : ''}" style="${left ? `right:${(100 - s).toFixed(2)}%` : `left:${(s + w).toFixed(2)}%`}">${esc(r.note)}</em>` : ''}</div></div>`; }).join('')}</div>`;
      break;
    }
    case 'pipeline':
      inner = `<ol class="ig-pipe">${b.items.map((s, i) => `<li class="ig-pipe__item ${toneCls(s.tone)}" style="--i:${i}">${s.n != null ? `<span class="ig-pipe__n num">${s.n}</span>` : `<span class="ig-pipe__n num">${i + 1}</span>`}<strong>${esc(s.t)}</strong></li>`).join('')}</ol>`;
      break;
    case 'card':
      inner = `<div class="ig-card"><div class="ig-card__head">${icon('clipboard')}<span class="grow">${esc(b.form || 'Form')}</span><span class="badge badge--outline">Example</span></div><dl>${b.rows.map(([k, v], i) => `<div class="ig-card__row" style="--i:${i}"><dt>${icon('check', 'icon--sm')}${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div>`;
      break;
    case 'annotated':
      inner = `<div class="ig-anno"><div class="ig-anno__doc">${b.lines.map(([t, n]) => `<div class="ig-anno__line">${n ? `<span class="ig-anno__mk">${n}</span>` : '<span class="ig-anno__mk is-empty"></span>'}<span>${esc(t)}</span></div>`).join('')}</div>
        <ol class="ig-anno__notes">${b.notes.map((x, i) => `<li style="--i:${i}"><span class="ig-anno__mk">${x.n}</span><div><strong>${esc(x.t)}</strong><p>${inline(x.d)}</p></div></li>`).join('')}</ol></div>`;
      break;
    case 'stackcompare': {
      const labels = [...new Set(b.cols.flatMap((c) => c.items.map((r) => r[0])))];
      const col = (l) => `var(--ig-${(labels.indexOf(l) % 6) + 1})`;
      const totals = b.cols.map((c) => c.items.reduce((s, r) => s + r[1], 0)); const max = Math.max(...totals);
      inner = `<div class="ig-stack" style="--n:${b.cols.length}">${b.cols.map((c, ci) => `<div class="ig-stack__col"><div class="ig-stack__total num">${igFmt(totals[ci], b.fmt)}</div><div class="ig-stack__area"><div class="ig-stack__bar" style="--h:${(totals[ci] / max).toFixed(4)};--i:${ci}">${c.items.map((r) => `<span style="flex-grow:${r[1]};background:${col(r[0])}" title="${esc(r[0])}: ${igFmt(r[1], b.fmt)}"></span>`).join('')}</div></div><strong class="ig-stack__label">${esc(c.t)}</strong></div>`).join('')}</div>
        <ul class="legend ig-stack__legend">${labels.map((l) => `<li><i style="background:${col(l)}"></i>${esc(l)}</li>`).join('')}</ul>`;
      break;
    }
    case 'fishbone': {
      const bone = (x, i) => `<div class="ig-fish__bone" style="--i:${i}"><strong>${esc(x.t)}</strong><ul>${x.causes.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div>`;
      inner = `<div class="ig-fish"><div class="ig-fish__row">${b.bones.slice(0, 3).map(bone).join('')}</div><div class="ig-fish__spine"><span class="ig-fish__line"></span><span class="ig-fish__head">${icon('alert', 'icon--sm')} ${esc(b.effect)}</span></div><div class="ig-fish__row ig-fish__row--bot">${b.bones.slice(3).map((x, i) => bone(x, i + 3)).join('')}</div></div>`;
      break;
    }
    case 'pyramid': {
      const n = b.levels.length;
      inner = `<div class="ig-pyr">${b.levels.map((l, i) => `<div class="ig-pyr__row" style="--i:${i}"><div class="ig-pyr__cell"><div class="ig-pyr__band ${toneCls(l.tone)}" style="--w:${(34 + (i * 66) / Math.max(1, n - 1)).toFixed(1)}%"><span class="num">${i + 1}</span>${esc(l.t)}</div></div><p>${inline(l.d)}</p></div>`).join('')}</div>`;
      break;
    }
    case 'ladder': {
      const n = b.levels.length;
      inner = `<ol class="ig-ladder" style="--n:${n}">${b.levels.map((l, i) => `<li class="ig-ladder__step" style="--h:${((i + 1) / n).toFixed(3)};--i:${i}"><span class="ig-ladder__n num">L${i + 1}</span><strong>${esc(l.t)}</strong><span>${inline(l.d)}</span></li>`).join('')}</ol>`;
      break;
    }
    case 'formulas':
      inner = `<div class="ig-formulas">${b.items.map((f, i) => `<div class="ig-formula" style="--i:${i}"><span class="ig-formula__t">${esc(f.t)}</span><code class="ig-formula__f">${esc(f.f)}</code><span class="ig-formula__d">${esc(f.d)}</span></div>`).join('')}</div>`;
      break;
    case 'cycle': {
      const n = b.items.length; const R = 36; const step = 360 / n; const gap = step * 0.3; const mid = nextId('arr');
      const pt = (deg) => { const a = (deg * Math.PI) / 180; return [50 + R * Math.cos(a), 50 + R * Math.sin(a)]; };
      const arcs = b.items.map((_, i) => { const [x1, y1] = pt(-90 + i * step + gap); const [x2, y2] = pt(-90 + (i + 1) * step - gap); return `<path d="M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${R} ${R} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)}" marker-end="url(#${mid})"/>`; }).join('');
      inner = `<div class="ig-hub ig-cycle"><svg class="ig-cycle__ring" viewBox="0 0 100 100" aria-hidden="true"><defs><marker id="${mid}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z"/></marker></defs>${arcs}</svg>
        <div class="ig-hub__center"><span class="ig-hub__icon">${icon('rotate')}</span><strong>${esc(b.center || '')}</strong></div>
        ${b.items.map((s, i) => { const [x, y] = pt(-90 + i * step); return `<div class="ig-hub__node" style="left:${x.toFixed(2)}%;top:${y.toFixed(2)}%;--i:${i}"><span class="ig-hub__icon">${icon(s.icon || 'check')}</span><strong>${esc(s.t)}</strong>${s.d ? `<span>${esc(s.d)}</span>` : ''}</div>`; }).join('')}</div>`;
      break;
    }
    case 'waterfall': {
      let run = 0;
      const bars = b.items.map((it) => {
        let lo, hi, tone, label;
        if (it.type === 'start' || it.type === 'total') { lo = 0; hi = it.v; run = it.v; tone = it.tone || 'neutral-strong'; label = igFmt(it.v, b.fmt, b.unit); }
        else { lo = Math.min(run, run + it.v); hi = Math.max(run, run + it.v); run += it.v; tone = it.tone || (it.v >= 0 ? 'critical' : 'success'); label = (it.v >= 0 ? '+' : '−') + igFmt(Math.abs(it.v), b.fmt, b.unit); }
        return { lo, hi, tone, label, l: it.l, total: it.type === 'total' };
      });
      const max = Math.max(...bars.map((x) => x.hi)) * 1.12;
      inner = `<div class="ig-wf" style="--n:${bars.length}">${bars.map((x, i) => `<div class="ig-wf__col ${x.total ? 'is-total' : ''}"><div class="ig-wf__area"><span class="ig-wf__bar ${toneCls(x.tone)}" style="bottom:${((x.lo / max) * 100).toFixed(2)}%;height:${Math.max(0.8, ((x.hi - x.lo) / max) * 100).toFixed(2)}%;--i:${i}"><em class="num">${esc(x.label)}</em></span></div><span class="ig-wf__l">${esc(x.l)}</span></div>`).join('')}</div>`;
      break;
    }
    case 'heatmap': {
      const vals = b.rows.flatMap((r) => r.v); const lo = b.min != null ? b.min : 0; const hi = b.max != null ? b.max : Math.max(...vals);
      const cell = (v) => { const t = clamp((v - lo) / (hi - lo || 1), 0, 1); return `<td class="${t > 0.55 ? 'is-hot' : ''}" style="--t:${(t * 88).toFixed(0)}%">${esc(v)}</td>`; };
      const lg = b.legend || ['Low', 'High'];
      inner = `<div class="ig-heat-wrap"><table class="ig-heat ${toneCls(b.tone || 'info')}"><thead><tr><th></th>${b.cols.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r, i) => `<tr style="--i:${i}"><th scope="row">${esc(r.l)}</th>${r.v.map(cell).join('')}</tr>`).join('')}</tbody></table></div>
        <div class="ig-heat__legend ${toneCls(b.tone || 'info')}"><span>${esc(lg[0])}</span><i></i><span>${esc(lg[1])}</span></div>`;
      break;
    }
    case 'ratings': {
      const scale = b.scale || 5;
      inner = `<div class="table-wrap ig-ratings"><table class="table"><thead><tr><th scope="col"><span class="sr-only">Criterion</span></th>${b.cols.map((c) => `<th scope="col" class="center">${esc(c)}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r) => `<tr><th scope="row">${esc(r.l)}</th>${r.v.map((v) => `<td class="center"><span class="ig-dots" role="img" aria-label="${v} of ${scale}">${Array.from({ length: scale }, (_, k) => `<i class="${k < v ? 'on' : ''}"></i>`).join('')}</span></td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      if (!b.note && b.hint) b = Object.assign({}, b, { note: b.hint });
      break;
    }
    case 'table':
      inner = `<div class="table-wrap ig-table"><table class="table"><thead><tr>${b.head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<td><strong>${inline(c)}</strong></td>` : `<td>${inline(c)}</td>`)).join('')}</tr>`).join('')}</tbody></table></div>`;
      break;

    default: return '';
  }
  return `<figure class="ig ${cls}"><figcaption class="ig__head"><span class="ig__tag">${icon(b.icon || 'bar', 'icon--sm')} Infographic</span><span class="ig__title">${esc(b.title)}</span></figcaption>${inner}${b.note ? `<p class="ig__note">${icon('info', 'icon--sm')}<span>${inline(b.note)}</span></p>` : ''}</figure>`;
}

/* ---------- Widget: gauge cluster ---------- */
const GAUGES = [
  { name: 'Oil pressure', normal: -5, bad: -72, badLabel: 'Low', zone: 'low', why: 'Oil pressure keeps the engine lubricated. A low reading — especially with a warning — can destroy an engine in minutes.', act: 'Low reading or warning: stop safely and shut down per training, then arrange service. Never "run it to the next exit".' },
  { name: 'Coolant temp', normal: -8, bad: 70, badLabel: 'Hot', zone: 'high', why: 'Shows engine operating temperature. Climbing above normal signals a cooling problem or excessive load.', act: 'Above normal: reduce load if safe and find a place to stop. With steam or a warning: stop now and don\'t open the cap.' },
  { name: 'Air (primary)', normal: 20, bad: -68, badLabel: 'Low', zone: 'low', why: 'Tractors show the primary and secondary brake air circuits on separate gauges. A low-air warning activates before pressure falls far enough for spring brakes to apply.', act: 'Falling pressure, a warning or hissing = brake-system defect. Stop safely, do not continue, send a qualified technician.' },
  { name: 'Fuel', normal: 30, bad: -76, badLabel: 'Empty', zone: 'low', why: 'Running a diesel out of fuel may require the fuel system to be primed before it restarts.', act: 'Low fuel is a planning item with dispatch. If it ran out: roadside fuel delivery and possibly a mobile tech.' },
  { name: 'DEF level', normal: 18, bad: -70, badLabel: 'Low', zone: 'low', why: 'DEF is consumed by the SCR system. Emissions rules require engines to progressively limit power when DEF runs low or out.', act: 'Low DEF warning: refill at the next stop. A DEF-related derate usually clears after refilling — confirm with the driver.' },
  { name: 'Voltmeter', normal: 8, bad: -62, badLabel: 'Low', zone: 'low', why: 'Shows charging-system voltage. A low reading while running suggests the alternator isn\'t charging.', act: 'Low voltage while running: the truck may not restart. Get it tested before the driver shuts down, if possible.' }
];
const LAMPS = [
  ['critical', 'STOP ENGINE', 'Stop safely as soon as possible.'], ['warning', 'CHECK ENGINE', 'Diagnose soon; watch for changes.'], ['warning', 'DPF / regen', 'Soot load high — follow regen procedure; derate may follow.'],
  ['warning', 'DEF low', 'Refill DEF; power limits follow if ignored.'], ['warning', 'HEST', 'Hot exhaust during regen — keep clear of flammables. Not a fault by itself.'],
  ['warning', 'ABS', 'Anti-lock fault — normal braking usually remains; schedule inspection promptly per procedure.'], ['critical', 'Low air', 'Brake air pressure low — stop safely, do not continue.'], ['warning', 'Battery / charging', 'Charging fault — the truck may not restart.']
];
function gaugeSVG(g, deg) {
  const p = (a) => { const r = (a * Math.PI) / 180; return `${(60 + 44 * Math.sin(r)).toFixed(1)} ${(64 - 44 * Math.cos(r)).toFixed(1)}`; };
  const arc = (a1, a2) => `M ${p(a1)} A 44 44 0 0 1 ${p(a2)}`;
  const bad = g.zone === 'low' ? arc(-90, -50) : arc(50, 90);
  return `<svg viewBox="0 0 120 74" aria-hidden="true"><path d="${arc(-90, 90)}" class="gauge__track"/><path d="${arc(-45, 45)}" class="gauge__ok"/><path d="${bad}" class="gauge__bad"/>
    <line x1="60" y1="64" x2="60" y2="28" class="gauge__needle" style="transform:rotate(${deg}deg)"/><circle cx="60" cy="64" r="5" class="gauge__hub"/></svg>`;
}
function gaugesHTML() {
  return `<div class="card gauges"><div class="card__head"><h3>${icon('gauge')} Instrument cluster</h3><span class="small muted">Select a gauge</span></div>
    <div class="card__body"><div class="gauges__grid" role="group" aria-label="Gauges">${GAUGES.map((g, i) => `<button type="button" class="gauge" data-g="${i}" aria-pressed="${i === 0}">${gaugeSVG(g, g.normal)}<span class="gauge__name">${esc(g.name)}</span></button>`).join('')}</div>
    <div class="gauges__detail" aria-live="polite"></div>
    <h4 class="mt-6 mb-4" style="font-size:var(--fs-sm);text-transform:uppercase;letter-spacing:.08em;color:var(--muted)">Common warning lamps</h4>
    <div class="lamps">${LAMPS.map(([tone, n, d]) => `<div class="lamp ${toneCls(tone)}"><span class="lamp__light" aria-hidden="true"></span><div><strong>${esc(n)}</strong><p>${esc(d)}</p></div></div>`).join('')}</div></div></div>`;
}
function mountGauges(el) {
  let cur = 0; const state2 = GAUGES.map(() => false);
  const draw = () => {
    $$('.gauge', el).forEach((b, i) => { b.setAttribute('aria-pressed', i === cur); $('.gauge__needle', b).style.transform = `rotate(${state2[i] ? GAUGES[i].bad : GAUGES[i].normal}deg)`; b.classList.toggle('is-bad', state2[i]); });
    const g = GAUGES[cur]; const bad = state2[cur];
    $('.gauges__detail', el).innerHTML = `<div class="anim-fade-in"><div class="row row--between row--wrap"><h4 style="font-size:var(--fs-lg)">${esc(g.name)}</h4><span class="badge badge--${bad ? 'critical' : 'success'}">${bad ? `Abnormal · ${g.badLabel}` : 'Normal range'}</span></div>
      <p class="mt-2">${esc(g.why)}</p>${bad ? `<div class="callout callout--safety mt-4"><span class="callout__icon">${icon('shield')}</span><div><h4>Coordinator action</h4><p>${esc(g.act)}</p></div></div>` : ''}
      <button type="button" class="btn btn--sm mt-4" data-toggle>${icon('activity')} ${bad ? 'Show normal reading' : 'Show abnormal reading'}</button></div>`;
    $('[data-toggle]', el).addEventListener('click', () => { state2[cur] = !state2[cur]; draw(); });
  };
  $$('.gauge', el).forEach((b) => b.addEventListener('click', () => { cur = +b.dataset.g; draw(); }));
  draw();
}

/* ---------- Widget: tire positions (top view) ---------- */
const AXLES = [['Steer', 95, false], ['Drive axle 1', 245, true], ['Drive axle 2', 300, true], ['Trailer axle 1', 735, true], ['Trailer axle 2', 790, true]];
function tireInfo(axle, side, pos) {
  const steer = axle === 'Steer'; const trailer = axle.startsWith('Trailer');
  return {
    name: `${axle} — ${side}${pos ? ' ' + pos : ''}`,
    rule: steer ? 'Minimum tread 4/32″ (U.S.). Directly affects steering — a damaged steer tire means the truck should not continue.' : 'Minimum tread 2/32″ (U.S.).',
    tip: steer ? 'Steer tires are single. Ask about vibration in the steering wheel and any recent impact.' : pos === 'inside'
      ? 'Inner duals are hard to see. A flat inner tire overloads its outer partner — ask the vendor to inspect both.'
      : `Duals share the load. When one fails, have the partner inspected too.${trailer ? ' Trailer tires are the trailer\'s unit, not the tractor\'s.' : ''}`
  };
}
function tiresHTML() {
  const tire = (x, y, axle, side, pos, i) => `<rect class="tire-pos" tabindex="0" role="button" data-t="${i}" data-axle="${axle}" data-side="${side}" data-pos="${pos}" aria-label="${esc(axle)}, ${side}${pos ? ', ' + pos : ''}" x="${x - 17}" y="${y}" width="34" height="18" rx="4"/>`;
  let i = 0; const tires = [];
  AXLES.forEach(([axle, x, dual]) => {
    if (dual) { tires.push(tire(x, 22, axle, 'left', 'outside', i++), tire(x, 44, axle, 'left', 'inside', i++), tire(x, 158, axle, 'right', 'inside', i++), tire(x, 180, axle, 'right', 'outside', i++)); }
    else { tires.push(tire(x, 36, axle, 'left', '', i++), tire(x, 166, axle, 'right', '', i++)); }
  });
  return `<div class="diagram tires"><div class="diagram__stage">
    <svg class="truck" viewBox="0 0 900 220" role="group" aria-label="Top view of a tractor-trailer. Select a tire position.">
      <text x="30" y="16" class="tires__lbl">LEFT (driver side)</text><text x="30" y="214" class="tires__lbl">RIGHT</text>
      <path class="line" d="M860 110 h28 m-10 -8 l10 8 l-10 8" /><text x="780" y="105" class="tires__lbl">direction</text>
      <rect class="body" x="50" y="66" width="120" height="88" rx="16"/><rect class="body-dark" x="60" y="98" width="290" height="24" rx="4"/>
      <rect class="body" x="330" y="60" width="520" height="100" rx="4" style="opacity:.75"/><circle cx="330" cy="110" r="7" class="hub"/>
      ${AXLES.map(([, x]) => `<line class="line" x1="${x}" y1="40" x2="${x}" y2="180" opacity=".5"/>`).join('')}
      ${tires.join('')}
    </svg></div>
    <div class="diagram__panel" aria-live="polite"><div class="row" style="gap:12px"><span class="state-block__icon" style="width:40px;height:40px;margin:0">${icon('target')}</span><div><strong>Select any of the 18 tire positions</strong><p class="small">2 steer · 8 drive · 8 trailer. Use Tab and Enter to navigate by keyboard.</p></div></div></div></div>`;
}
function mountTires(el) {
  const pick = (r) => {
    $$('.tire-pos', el).forEach((x) => x.classList.toggle('is-active', x === r)); r.classList.add('is-seen');
    const info = tireInfo(r.dataset.axle, r.dataset.side, r.dataset.pos);
    $('.diagram__panel', el).innerHTML = `<div class="anim-fade-in"><h4 style="font-size:var(--fs-lg)">${esc(info.name)}</h4><p class="mt-2">${esc(info.rule)}</p><div class="callout callout--tip mt-4"><span class="callout__icon">${icon('bulb')}</span><div><h4>On the call</h4><p>${esc(info.tip)}</p></div></div><p class="xs muted mt-3">Tell the vendor: <strong>${esc(info.name)}</strong>, plus tire size and exact location.</p></div>`;
  };
  el.addEventListener('click', (e) => { const r = e.target.closest('.tire-pos'); if (r) pick(r); });
  el.addEventListener('keydown', (e) => { const r = e.target.closest('.tire-pos'); if (r && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); pick(r); } });
}

/* ---------- Widget: exhaust aftertreatment flow ---------- */
const EXHAUST = [
  { id: 'eng', x: 20, w: 110, t: 'Engine', d: 'Produces exhaust containing soot (particulate matter) and nitrogen oxides (NOx). Engine problems such as injector faults can overload the aftertreatment downstream.' },
  { id: 'doc', x: 170, w: 90, t: 'DOC', d: 'Diesel Oxidation Catalyst: oxidizes carbon monoxide and hydrocarbons and generates heat that helps the DPF regenerate.' },
  { id: 'dpf', x: 290, w: 110, t: 'DPF', d: 'Diesel Particulate Filter: traps soot. A differential pressure sensor tracks how loaded it is. Regeneration burns soot; ash is removed by periodic cleaning.' },
  { id: 'dos', x: 430, w: 80, t: 'DEF doser', d: 'Injects DEF (32.5% urea) into the exhaust. The DEF tank and lines are heated because DEF freezes around 12 °F (−11 °C).' },
  { id: 'scr', x: 540, w: 110, t: 'SCR', d: 'Selective Catalytic Reduction: ammonia from DEF converts NOx into nitrogen and water over the catalyst. NOx sensors check how well it works.' },
  { id: 'asc', x: 680, w: 80, t: 'ASC', d: 'Ammonia Slip Catalyst: cleans up leftover ammonia. On many systems it is packaged together with the SCR.' },
  { id: 'out', x: 790, w: 90, t: 'Stack', d: 'Treated exhaust exits. Visible black smoke from a modern truck usually means something upstream needs attention.' }
];
function exhaustHTML() {
  return `<div class="diagram exhaust"><div class="diagram__stage">
    <svg viewBox="0 0 900 190" role="group" aria-label="Exhaust aftertreatment flow. Select a component.">
      <path class="exhaust__pipe" d="M130 80 H790"/><path class="exhaust__flow" d="M130 80 H790"/>
      <rect class="body-dark" x="438" y="140" width="64" height="36" rx="6"/><text x="470" y="163" text-anchor="middle" class="tires__lbl">DEF tank</text>
      <path class="exhaust__def" d="M470 140 V100"/>
      ${EXHAUST.map((c) => `<g class="ex-part" tabindex="0" role="button" data-ex-part="${c.id}" aria-label="${esc(c.t)}"><rect x="${c.x}" y="52" width="${c.w}" height="56" rx="10"/><text x="${c.x + c.w / 2}" y="85" text-anchor="middle">${esc(c.t)}</text></g>`).join('')}
    </svg></div>
    <div class="diagram__panel" aria-live="polite"><div class="row" style="gap:12px"><span class="state-block__icon" style="width:40px;height:40px;margin:0">${icon('activity')}</span><div><strong>Follow the exhaust from left to right</strong><p class="small">Select each component to see what it does and why it matters on a call.</p></div></div></div></div>`;
}
function mountExhaust(el) {
  const pick = (g) => {
    $$('.ex-part', el).forEach((x) => x.classList.toggle('is-active', x === g));
    const c = EXHAUST.find((x) => x.id === g.dataset.exPart);
    $('.diagram__panel', el).innerHTML = `<div class="anim-fade-in"><h4 style="font-size:var(--fs-lg)">${esc(c.t)}</h4><p class="mt-2">${esc(c.d)}</p></div>`;
  };
  el.addEventListener('click', (e) => { const g = e.target.closest('.ex-part'); if (g) pick(g); });
  el.addEventListener('keydown', (e) => { const g = e.target.closest('.ex-part'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); pick(g); } });
}

/* ---------- Quick Reference page ---------- */
function viewReference() {
  const sections = [
    ['Triage & urgency', [REF.urgency, REF.lamps, REF.triage]],
    ['Calls & communication', [REF.intake, REF.update, REF.roadside, REF.ladder]],
    ['Documentation & numbers', [REF.workorder, REF.kpis, REF.tireRules]],
    ['Compliance, parts & diagnostics', [REF.dvir, REF.cvsa, REF.fmi, REF.pinout, REF.reorder]]
  ];
  const html = `<div class="page page--narrow ref-page">${pageHead({ eyebrow: `${icon('file', 'icon--sm')} Reference`, title: 'Quick Reference', text: 'The academy\'s most-used frameworks on one page — keep it open on your second screen or print it for your desk.', right: `<button type="button" class="btn" data-print>${icon('print')} Print cheat sheet</button>` })}
    <nav class="row row--wrap mb-6" aria-label="Jump to section">${sections.map(([t], i) => `<a class="chip" href="#ref-${i}" data-jump="ref-${i}">${esc(t)}</a>`).join('')}</nav>
    ${sections.map(([t, blocks], i) => `<section class="ref-section" id="ref-${i}"><div class="section-head"><h2>${esc(t)}</h2></div><div class="stack">${blocks.map(renderBlock).join('')}</div></section>`).join('')}</div>`;
  return {
    html, title: 'Quick Reference', nav: 'reference', crumbs: [['Quick Reference']],
    after: (v) => {
      $$('[data-jump]', v).forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); document.getElementById(a.dataset.jump).scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' }); }));
      $('[data-print]', v).addEventListener('click', () => { $('#printRoot').innerHTML = `<div class="print-sheet"><h1>Maintenance Coordinator — Quick Reference</h1>${sections.map(([t, b]) => `<h2>${esc(t)}</h2>${b.map(renderBlock).join('')}`).join('')}</div>`; window.print(); });
    }
  };
}

/* ---------- Widget: trucking invoice builder ---------- */
const INV_DOCS = [['ratecon', 'Rate confirmation', true], ['pod', 'Signed POD (BOL signed by receiver)', true], ['lumper', 'Lumper receipt #L-7731', true], ['times', 'Detention in/out times (on BOL)', true], ['fuel', 'Driver fuel receipts', false]];
const INV_FIELDS = [['num', 'Invoice number', 'e.g., CFL-1047', 'text'], ['billto', 'Bill to (customer)', 'Who pays this invoice?', 'text'], ['load', 'Load / reference #', 'As shown on the rate con', 'text'],
  ['linehaul', 'Linehaul ($)', '', 'number'], ['fsc', 'Fuel surcharge ($)', '', 'number'], ['detention', 'Detention ($)', 'Billable hours × rate', 'number'], ['lumper', 'Lumper ($)', '', 'number']];
function invoiceWidgetHTML() {
  return `<div class="card invb"><div class="card__head"><h3>${icon('file')} Invoice builder</h3><span class="small muted">Load NFB-448213</span></div>
    <div class="card__body">
      <div class="grid grid--2" style="gap:var(--sp-4)">
        <div class="source-doc"><span class="source-doc__label">Rate confirmation</span>${esc(RATECON.source)}</div>
        <div class="source-doc"><span class="source-doc__label">Delivery details</span>${esc(RATECON.delivery)}</div>
      </div>
      <div class="invb__grid mt-6">
        <form class="invb__form" onsubmit="return false" aria-label="Invoice fields">
          <div class="fields" style="margin-top:0">${INV_FIELDS.map(([k, l, ph, t]) => `<div class="field ${k === 'billto' ? 'field--full' : ''}"><label for="invb-${k}">${esc(l)}</label><div class="input-affix">${t === 'number' ? '<span class="pre">$</span>' : ''}<input class="input ${t === 'number' ? 'has-pre num' : ''}" id="invb-${k}" data-f="${k}" type="${t === 'number' ? 'number' : 'text'}" ${t === 'number' ? 'min="0" step="0.01" inputmode="decimal"' : ''} placeholder="${esc(ph)}" autocomplete="off"></div><span class="field__result" data-r="${k}" aria-live="polite"></span></div>`).join('')}</div>
          <fieldset class="mt-4"><legend class="label mb-2">Attach supporting documents</legend><div class="opts">${INV_DOCS.map(([k, l]) => `<label class="opt" data-doc="${k}"><input type="checkbox" value="${k}"><span class="opt__box"><span class="opt__key" aria-hidden="true">${icon('check', 'icon--sm')}</span><span>${esc(l)}<span class="opt__why" hidden></span></span></span></label>`).join('')}</div></fieldset>
          <div class="q__actions"><button type="button" class="btn btn--primary" data-invb-check>${icon('check')} Check invoice</button><button type="button" class="btn btn--ghost" data-invb-reset>${icon('rotate')} Start over</button></div>
          <div data-invb-fb aria-live="polite"></div>
        </form>
        <div class="invb__preview" aria-label="Invoice preview" data-invb-preview></div>
      </div>
    </div></div>`;
}
function mountInvoiceWidget(el) {
  const val = (k) => ($(`[data-f="${k}"]`, el).value || '').trim();
  const num = (k) => Math.max(0, parseFloat(val(k)) || 0);
  const preview = () => {
    const lines = [['Linehaul', num('linehaul')], ['Fuel surcharge', num('fsc')], ['Detention', num('detention')], ['Lumper', num('lumper')]];
    const total = lines.reduce((a, r) => a + r[1], 0);
    const docs = $$('[data-doc] input:checked', el).map((i) => INV_DOCS.find((d) => d[0] === i.value)[1]);
    $('[data-invb-preview]', el).innerHTML = `<div class="invb__doc">
      <div class="invb__top"><div><strong>Crestline Freight Lines LLC</strong><span>100 Main St · Dallas, TX</span></div><div class="invb__title">INVOICE</div></div>
      <dl class="invb__meta"><div><dt>Invoice #</dt><dd>${esc(val('num') || '—')}</dd></div><div><dt>Date</dt><dd>06/14</dd></div><div><dt>Terms</dt><dd>Net 30</dd></div><div><dt>Load #</dt><dd>${esc(val('load') || '—')}</dd></div></dl>
      <p class="invb__bill"><span>Bill to</span>${esc(val('billto') || '—')}</p>
      <p class="invb__route">Dallas, TX 06/12 → Atlanta, GA 06/13 · 781 mi</p>
      <table class="invb__lines"><tbody>${lines.map(([l, v]) => `<tr><td>${l}</td><td class="num">${fmtMoney(v, 2)}</td></tr>`).join('')}</tbody><tfoot><tr><td>Total due</td><td class="num">${fmtMoney(total, 2)}</td></tr></tfoot></table>
      <p class="invb__att"><span>Attachments</span>${docs.length ? docs.map(esc).join(' · ') : 'None yet'}</p></div>`;
    return total;
  };
  el.addEventListener('input', preview);
  el.addEventListener('change', preview);
  $('[data-invb-check]', el).addEventListener('click', () => {
    const a = RATECON.answer; const total = preview(); const issues = [];
    const checks = {
      num: [!!val('num'), 'Give the invoice a unique number.'],
      billto: [val('billto').toLowerCase().includes(a.broker), 'Bill the broker (Northgate Freight Brokerage) — it\'s the customer on this load.'],
      load: [val('load').toUpperCase().replace(/\s/g, '') === a.load, `Load # must match the rate con exactly: ${a.load}.`],
      linehaul: [num('linehaul') === a.linehaul, 'Linehaul must match the rate con: $1,900.00.'],
      fsc: [num('fsc') === a.fsc, 'Fuel surcharge per rate con: $250.00 flat.'],
      detention: [num('detention') === a.detention, 'Detention: 06:40–11:10 = 4.5 h on site − 2 h free = 2.5 h × $50 = $125.00.'],
      lumper: [num('lumper') === a.lumper, 'Lumper: $185.00 per the receipt.']
    };
    let ok = 0;
    Object.entries(checks).forEach(([k, [pass, msg]]) => {
      const inp = $(`[data-f="${k}"]`, el); const r = $(`[data-r="${k}"]`, el);
      inp.classList.toggle('is-valid', pass); inp.classList.toggle('is-invalid', !pass);
      r.className = `field__result ${pass ? 'ok' : 'no'}`; r.innerHTML = pass ? `${icon('check')} Correct` : `${icon('x')} ${esc(msg)}`;
      if (pass) ok++; else issues.push(msg);
    });
    let docOk = 0;
    $$('[data-doc]', el).forEach((lab) => {
      const [, , need] = INV_DOCS.find((d) => d[0] === lab.dataset.doc); const on = $('input', lab).checked; const good = on === need;
      lab.classList.remove('is-correct', 'is-wrong', 'is-missed');
      if (on && need) lab.classList.add('is-correct'); else if (on && !need) lab.classList.add('is-wrong'); else if (!on && need) lab.classList.add('is-missed');
      const w = $('.opt__why', lab); w.hidden = good; w.textContent = need ? 'Required to support this invoice.' : 'Not needed — fuel surcharge comes from the rate con.';
      if (good) docOk++; else issues.push(need ? `Attach: ${lab.textContent.trim()}` : 'Remove the fuel receipts — not needed.');
    });
    const score = (ok + docOk) / (Object.keys(checks).length + INV_DOCS.length);
    const ready = issues.length === 0 && Math.abs(total - a.total) < 0.005;
    if (ready) { state.exercises['inv-builder'] = 1; save(); }
    $('[data-invb-fb]', el).innerHTML = ready
      ? `<div class="feedback feedback--correct">${icon('check-circle')}<div><strong>Ready to submit — $2,460.00</strong><p>Every line traces to the rate con or a supporting document, the reference numbers match, and the packet is complete.</p></div></div>`
      : `<div class="feedback feedback--${score >= 0.5 ? 'partial' : 'wrong'}">${icon('info')}<div><strong>Not ready yet — ${issues.length} issue${issues.length === 1 ? '' : 's'} to fix</strong><p>Correct the highlighted items and check again. Expected total: $2,460.00; yours: ${fmtMoney(total, 2)}.</p></div></div>`;
  });
  $('[data-invb-reset]', el).addEventListener('click', () => { el.innerHTML = invoiceWidgetHTML(); mountInvoiceWidget(el); });
  preview();
}

/* ===========================================================================
   4. ENGINE
   =========================================================================== */

/* ---------- Utilities ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ESC_MAP[c]);
const stripTags = (s) => String(s).replace(/<[^>]*>/g, '').replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, a, b) => b || a);
const icon = (id, cls = '') => `<svg class="icon ${cls}" aria-hidden="true" focusable="false"><use href="#i-${id}"/></svg>`;
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const pct = (n) => Math.round(n * 100);
const fmtMoney = (n, d = 0) => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const fmtNum = (n, d = 0) => Number(n).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const reduceMotion = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const todayStr = () => new Date().toISOString().slice(0, 10);
let UID = 0;
const nextId = (p) => `${p}-${++UID}`;
function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function staggerChildren(el) { if (!el) return; Array.from(el.children).forEach((c, i) => c.style.setProperty('--i', Math.min(i, 12))); }

/* ---------- Indexes ---------- */
const TRACK_BY_ID = Object.fromEntries(TRACKS.map((t) => [t.id, t]));
const LESSONS = [];
TRACKS.forEach((t) => t.modules.forEach((m, mi) => m.lessons.forEach((l, li) => {
  LESSONS.push({ t, m, l, mi, li, key: `${t.id}.${m.id}.${l.id}` });
})));
const LESSON_MAP = new Map(LESSONS.map((x) => [x.key, x]));
const GLOSS_MAP = new Map(GLOSSARY.map((g) => [g.term.toLowerCase(), g]));
function findTerm(name) {
  const k = String(name).toLowerCase();
  return GLOSS_MAP.get(k) || GLOSSARY.find((g) => g.full.toLowerCase() === k) || null;
}
const lessonHref = (x) => `#/lesson/${x.t.id}/${x.m.id}/${x.l.id}`;

/* ---------- State (localStorage) ---------- */
const STORE_KEY = 'mca.v1';
const DEFAULT_STATE = { completed: {}, checks: {}, quizzes: {}, finals: {}, bookmarks: [], last: null, flash: { known: {} }, scen: {}, trees: {}, glossaryViewed: {}, exercises: {}, calcUsed: {}, achievements: {}, theme: null, name: '', days: [] };
let storageOk = true;
let state = loadState();
function loadState() {
  const base = JSON.parse(JSON.stringify(DEFAULT_STATE));
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return base;
    const parsed = JSON.parse(raw);
    Object.keys(base).forEach((k) => { if (parsed[k] !== undefined) base[k] = parsed[k]; });
    return base;
  } catch (e) { storageOk = false; return base; }
}
let saveWarned = false;
function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
  catch (e) {
    storageOk = false;
    if (!saveWarned) { saveWarned = true; toast({ kind: 'warning', title: 'Progress not saved', text: 'Your browser is blocking local storage, so progress will reset when you leave.' }); }
  }
}
function markActiveDay() {
  const d = todayStr();
  if (!state.days.includes(d)) { state.days.push(d); state.days = state.days.slice(-120); save(); }
}

/* ---------- Progress helpers ---------- */
const isDone = (key) => !!state.completed[key];
const quizKey = (t, m) => `${t.id}.${m.id}`;
const quizPassed = (t, m) => (state.quizzes[quizKey(t, m)] || {}).best >= 0.8;
const finalPassed = (t) => !!(state.finals[t.id] && state.finals[t.id].passed);
function moduleStats(t, m) {
  const done = m.lessons.filter((l) => isDone(`${t.id}.${m.id}.${l.id}`)).length;
  return { done, total: m.lessons.length, complete: done === m.lessons.length };
}
function trackStats(t) {
  let lessons = 0, done = 0, quizzes = 0;
  t.modules.forEach((m) => { const s = moduleStats(t, m); lessons += s.total; done += s.done; if (quizPassed(t, m)) quizzes++; });
  const units = lessons + t.modules.length + 1;
  const got = done + quizzes + (finalPassed(t) ? 1 : 0);
  return { lessons, done, quizzes, modules: t.modules.length, p: got / units, final: finalPassed(t) };
}
function overallProgress() {
  let units = 0, got = 0;
  TRACKS.forEach((t) => { const s = trackStats(t); const u = s.lessons + s.modules + 1; units += u; got += s.p * u; });
  return units ? got / units : 0;
}
const completedCount = () => LESSONS.filter((x) => isDone(x.key)).length;
function avgQuiz() {
  const vals = Object.values(state.quizzes).map((q) => q.best);
  if (!vals.length) {
    const c = Object.values(state.checks).filter((c) => c.total);
    if (!c.length) return null;
    return c.reduce((a, b) => a + b.score / b.total, 0) / c.length;
  }
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}
function streak() {
  const set = new Set(state.days);
  let n = 0; const d = new Date();
  if (!set.has(todayStr())) d.setDate(d.getDate() - 1);
  while (set.has(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function recommended() {
  for (const t of TRACKS) {
    for (const m of t.modules) {
      for (const l of m.lessons) {
        const x = LESSON_MAP.get(`${t.id}.${m.id}.${l.id}`);
        if (!isDone(x.key)) return { kind: 'lesson', x, t, m, title: l.title, sub: `${t.level} · Module ${m.id.slice(1)}: ${m.title}`, href: lessonHref(x), icon: 'book' };
      }
      if (!quizPassed(t, m)) return { kind: 'quiz', t, m, title: `Module ${m.id.slice(1)} Quiz: ${m.title}`, sub: `${t.level} · Knowledge review`, href: `#/quiz/${t.id}/${m.id}`, icon: 'target' };
    }
    if (!finalPassed(t)) return { kind: 'final', t, title: t.final.title, sub: `${t.level} · Final assessment`, href: `#/final/${t.id}`, icon: 'award' };
  }
  return null;
}
function currentContext() {
  const last = state.last && LESSON_MAP.get(state.last);
  if (last) return last;
  const r = recommended();
  return r && r.x ? r.x : LESSONS[0];
}

/* ---------- Achievements ---------- */
const ACHIEVEMENTS = [
  { id: 'first-lesson', title: 'First Shift', desc: 'Complete your first lesson.', icon: 'play', test: () => completedCount() >= 1 },
  { id: 'module', title: 'Module Complete', desc: 'Finish every lesson in a module.', icon: 'layers', test: () => TRACKS.some((t) => t.modules.some((m) => moduleStats(t, m).complete)) },
  { id: 'ten', title: 'Steady Progress', desc: 'Complete 10 lessons.', icon: 'trend', test: () => completedCount() >= 10 },
  { id: 'safety', title: 'Safety First', desc: 'Complete the Safety & Roadside module.', icon: 'shield', test: () => moduleStats(BEGINNER, BEGINNER.modules[4]).complete },
  { id: 'quiz-ace', title: 'Quiz Ace', desc: 'Score 100% on a module quiz.', icon: 'target', test: () => Object.values(state.quizzes).some((q) => q.best === 1) },
  { id: 'scenario', title: 'Cool Under Pressure', desc: 'Choose the best response in 5 scenarios.', icon: 'message', test: () => Object.values(state.scen).filter((g) => g === 'best').length >= 5 },
  { id: 'trees', title: 'Decision Maker', desc: 'Reach a strong outcome in 3 decision trees.', icon: 'branch', test: () => Object.values(state.trees).filter((g) => g === 'good').length >= 3 },
  { id: 'flash', title: 'Vocabulary Builder', desc: 'Mark 20 flashcards as known.', icon: 'cards', test: () => Object.keys(state.flash.known).length >= 20 },
  { id: 'glossary', title: 'Reference Reader', desc: 'Open 10 glossary terms.', icon: 'book', test: () => Object.keys(state.glossaryViewed).length >= 10 },
  { id: 'calc', title: 'By the Numbers', desc: 'Use 3 different calculators.', icon: 'calc', test: () => Object.keys(state.calcUsed).length >= 3 },
  { id: 'cert-beginner', title: 'Fundamentals Certified', desc: 'Pass the Beginner final exam.', icon: 'grad', test: () => finalPassed(BEGINNER) },
  { id: 'cert-advanced', title: 'Operations Certified', desc: 'Pass the Advanced final project.', icon: 'wrench', test: () => finalPassed(ADVANCED) },
  { id: 'cert-expert', title: 'Fleet Management Certified', desc: 'Pass the Expert final simulation.', icon: 'award', test: () => finalPassed(EXPERT) },
  { id: 'master', title: 'Master Coordinator', desc: 'Earn all three certificates.', icon: 'star', test: () => TRACKS.every(finalPassed) }
];
function checkAchievements() {
  let changed = false;
  ACHIEVEMENTS.forEach((a) => {
    if (!state.achievements[a.id] && a.test()) {
      state.achievements[a.id] = Date.now(); changed = true;
      toast({ kind: 'award', title: `Achievement: ${a.title}`, text: a.desc, icon: a.icon });
    }
  });
  if (changed) save();
}

/* ---------- Toasts ---------- */
function toast({ title, text = '', kind = 'info', icon: ic, timeout = 4500 }) {
  const region = $('#toasts');
  const ico = ic || { success: 'check-circle', warning: 'alert', award: 'award', info: 'info' }[kind] || 'info';
  const el = document.createElement('div');
  el.className = `toast toast--${kind}`;
  el.innerHTML = `<span class="toast__icon">${icon(ico)}</span><div class="grow"><strong>${esc(title)}</strong>${text ? `<p>${esc(text)}</p>` : ''}</div><button class="btn-icon" aria-label="Dismiss notification">${icon('x', 'icon--sm')}</button>`;
  region.appendChild(el);
  while (region.children.length > 4) region.firstElementChild.remove();
  const close = () => {
    if (el.classList.contains('is-leaving')) return;
    el.classList.add('is-leaving');
    const done = () => el.remove();
    if (reduceMotion()) done(); else { el.addEventListener('animationend', done, { once: true }); setTimeout(done, 400); }
  };
  el.querySelector('button').addEventListener('click', close);
  setTimeout(close, timeout);
}

/* ---------- Modal ---------- */
let modalStack = [];
function openModal({ title, body, foot = '', size = '', onOpen, label, bare = false }) {
  const root = $('#modalRoot');
  const id = nextId('modal');
  const back = document.createElement('div');
  back.className = 'modal-backdrop';
  back.innerHTML = `<div class="modal ${size}" role="dialog" aria-modal="true" ${title ? `aria-labelledby="${id}-t"` : `aria-label="${esc(label || 'Dialog')}"`}>
    ${bare ? body : `<div class="modal__head"><h2 id="${id}-t">${title}</h2><button class="btn-icon" data-close aria-label="Close dialog">${icon('x')}</button></div>
    <div class="modal__body">${body}</div>${foot ? `<div class="modal__foot">${foot}</div>` : ''}`}
  </div>`;
  const prevFocus = document.activeElement;
  root.appendChild(back);
  document.body.style.overflow = 'hidden';
  const modal = back.querySelector('.modal');
  const close = () => {
    if (back.classList.contains('is-closing')) return;
    back.classList.add('is-closing');
    const done = () => {
      back.remove();
      modalStack = modalStack.filter((m) => m.back !== back);
      if (!modalStack.length) document.body.style.overflow = '';
      if (prevFocus && prevFocus.focus) prevFocus.focus({ preventScroll: true });
    };
    if (reduceMotion()) done(); else { back.addEventListener('animationend', (e) => { if (e.target === back) done(); }); setTimeout(done, 300); }
  };
  back.addEventListener('mousedown', (e) => { if (e.target === back) close(); });
  $$('[data-close]', back).forEach((b) => b.addEventListener('click', close));
  back.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.stopPropagation(); close(); }
    if (e.key === 'Tab') {
      const f = $$('a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])', modal).filter((x) => x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  modalStack.push({ back, close });
  const focusTarget = $('[autofocus]', modal) || $('input, button:not([data-close])', modal) || $('[data-close]', modal);
  requestAnimationFrame(() => focusTarget && focusTarget.focus());
  if (onOpen) onOpen(modal, close);
  return close;
}

/* ---------- Small components ---------- */
function progressBar(p, { cls = '', color = '', label = 'Progress' } = {}) {
  const v = clamp(p, 0, 1);
  return `<div class="progress ${cls}" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct(v)}"><div class="progress__bar" style="--p:${v};${color ? `--c:${color}` : ''}"></div></div>`;
}
function ring(p, { size = 120, stroke = 10, label = '', sub = '', color = '', cls = '', fs = 22 } = {}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const v = clamp(p, 0, 1);
  return `<div class="ring ${cls}" style="width:${size}px;height:${size}px" role="img" aria-label="${esc(label || pct(v) + '%')}${sub ? ' ' + esc(sub) : ''}">
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
      <circle class="ring__track" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}"/>
      <circle class="ring__value" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" style="--circ:${c.toFixed(2)};--off:${(c * (1 - v)).toFixed(2)};${color ? `--c:${color}` : ''}"/>
    </svg>
    <div class="ring__label" style="font-size:${fs}px"><div>${label || pct(v) + '%'}${sub ? `<small>${esc(sub)}</small>` : ''}</div></div>
  </div>`;
}
const scorePill = (s) => `<span class="score-pill score-pill--${s >= 0.8 ? 'good' : s >= 0.6 ? 'mid' : 'low'}">${pct(s)}%</span>`;
function stateBlock({ ic = 'info', title, text, action = '', error = false }) {
  return `<div class="state-block ${error ? 'state-block--error' : ''} anim-scale-in"><div class="state-block__icon">${icon(ic)}</div><h2>${esc(title)}</h2><p>${esc(text)}</p>${action}</div>`;
}
function pageHead({ eyebrow, title, text, right = '' }) {
  return `<header class="page-head"><div>${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}<h1>${title}</h1>${text ? `<p>${text}</p>` : ''}</div>${right}</header>`;
}

/* ---------- Inline markup: [[Term]] → glossary tooltip button ---------- */
function inline(s) {
  return String(s).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, term, label) => {
    const g = findTerm(term);
    const text = label || term;
    if (!g) return `<strong>${text}</strong>`;
    return `<button type="button" class="term" data-term="${esc(g.term)}" data-tip="${esc(g.full + ' — ' + g.simple)}">${text}</button>`;
  });
}

/* ---------- Content block renderer ---------- */
const EX_REG = new Map();
function renderBlocks(blocks) { return (blocks || []).map(renderBlock).join(''); }
function renderBlock(b) {
  if (typeof b === 'string') return `<p>${inline(b)}</p>`;
  if (b.h) return `<h3>${inline(b.h)}</h3>`;
  if (b.ul) return `<ul>${b.ul.map((i) => `<li>${inline(i)}</li>`).join('')}</ul>`;
  if (b.ol) return `<ol>${b.ol.map((i) => `<li>${inline(i)}</li>`).join('')}</ol>`;
  if (b.callout) {
    const c = b.callout; const ic = { info: 'info', tip: 'bulb', warning: 'alert', safety: 'shield' }[c.kind] || 'info';
    return `<div class="callout callout--${c.kind}" role="note"><span class="callout__icon">${icon(ic)}</span><div>${c.title ? `<h4>${esc(c.title)}</h4>` : ''}<p>${inline(c.text)}</p></div></div>`;
  }
  if (b.tiles) return `<div class="info-grid">${b.tiles.map((t) => `<div class="info-tile"><div class="info-tile__icon">${icon(t.icon)}</div><h4>${esc(t.title)}</h4><p>${inline(t.text)}</p></div>`).join('')}</div>`;
  if (b.compare) {
    const col = (c, k) => `<div class="compare__col compare__col--${k}"><h4>${icon(k === 'yes' ? 'check-circle' : 'x-circle')} ${esc(c.title)}</h4><ul>${c.items.map((i) => `<li>${icon(k === 'yes' ? 'check' : 'x')}<span>${inline(i)}</span></li>`).join('')}</ul></div>`;
    return `<div class="compare">${col(b.compare.yes, 'yes')}${col(b.compare.no, 'no')}</div>`;
  }
  if (b.table) {
    return `<div class="table-wrap"><table class="table"><thead><tr>${b.table.head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map((r) => `<tr>${r.map((c, i) => i === 0 ? `<td><strong>${inline(c)}</strong></td>` : `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  if (b.timeline) {
    return `<ol class="timeline">${b.timeline.map((s, i) => {
      const pid = nextId('tl');
      return `<li class="tl-step ${i === 0 ? 'is-open is-seen' : ''}"><span class="tl-step__num" aria-hidden="true">${i + 1}</span>
        <button type="button" class="tl-step__btn" aria-expanded="${i === 0}" aria-controls="${pid}"><span class="tl-step__title">${inline(s.title)}</span>${icon('chev-d')}</button>
        <div class="acc-panel" id="${pid}"><div><div class="acc-panel__inner"><p>${inline(s.text)}</p>${s.owner ? `<span class="badge badge--outline tl-step__owner">${esc(s.owner)}</span>` : ''}</div></div></div></li>`;
    }).join('')}</ol>`;
  }
  if (b.flow) return `<div class="flow" role="list">${b.flow.map((f, i) => `${i ? icon('chev-r') : ''}<span role="listitem" class="flow__item ${b.hl && b.hl.includes(i) ? 'flow__item--hl' : ''}">${esc(f)}</span>`).join('')}</div>`;
  if (b.dialog) {
    return `<div class="dialog" role="log" aria-label="Conversation">${b.dialog.map(([who, text], i) => {
      const k = who === 'note' ? 'note' : (who === 'You' || who === 'Coordinator') ? 'me' : 'them';
      return `<div class="bubble bubble--${k}" style="animation-delay:${Math.min(i, 10) * 60}ms">${k !== 'note' ? `<span class="bubble__who">${esc(who)}</span>` : ''}${inline(text)}</div>`;
    }).join('')}</div>`;
  }
  if (b.msg) {
    const m = b.msg; const ic = { message: 'message', note: 'file', good: 'check-circle', bad: 'x-circle' }[m.kind] || 'message';
    const cls = m.kind === 'note' ? 'msg--note' : m.kind === 'good' ? 'msg--good msg--note' : m.kind === 'bad' ? 'msg--bad msg--note' : '';
    return `<div class="msg ${cls}"><div class="msg__head">${icon(ic)}<strong>${esc(m.title)}</strong><button type="button" class="btn-icon" data-copy aria-label="Copy text" data-tip="Copy" data-tip-pos="left">${icon('copy', 'icon--sm')}</button></div><div class="msg__body">${esc(m.text)}</div></div>`;
  }
  if (b.accordion) {
    return `<div class="accordion">${b.accordion.map((a) => {
      const pid = nextId('acc');
      return `<div class="acc-item"><h4><button type="button" class="acc-trigger" aria-expanded="false" aria-controls="${pid}">${esc(a.title)}${icon('chev-d')}</button></h4><div class="acc-panel" id="${pid}" role="region"><div><div class="acc-panel__inner"><p>${inline(a.text)}</p></div></div></div></div>`;
    }).join('')}</div>`;
  }
  if (b.tabs) {
    const id = nextId('tabs');
    return `<div class="tabs"><div class="tablist" role="tablist">${b.tabs.map((t, i) => `<button type="button" class="tab" role="tab" id="${id}-t${i}" aria-controls="${id}-p${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(t.label)}</button>`).join('')}</div>
      ${b.tabs.map((t, i) => `<div class="tabpanel prose" role="tabpanel" id="${id}-p${i}" aria-labelledby="${id}-t${i}" ${i ? 'hidden' : ''}>${renderBlocks(t.body)}</div>`).join('')}</div>`;
  }
  if (b.ig) return infographicHTML(b);
  if (b.industry) {
    const x = b.industry;
    return `<aside class="industry" aria-label="Industry example: ${esc(x.name)}"><div class="industry__head"><span class="industry__tag">${icon('pin', 'icon--sm')} Industry example</span><span class="badge badge--outline">${esc(x.cat)}</span></div>`
      + `<h4>${esc(x.name)}</h4><p>${inline(x.text)}</p>${x.relevance ? `<p class="industry__why"><strong>Why it matters here:</strong> ${inline(x.relevance)}</p>` : ''}`
      + `<div class="industry__foot"><a class="industry__link" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">Official website ${icon('external', 'icon--sm')}<span class="sr-only"> (opens in a new tab)</span></a><span class="industry__note">Referenced as an example — not an endorsement or affiliation.</span></div></aside>`;
  }
  if (b.widget) return `<div class="widget" data-widget="${esc(b.widget)}"></div>`;
  if (b.exercise) return exerciseHTML(b.exercise, { key: b.key });
  return '';
}

/* ---------- Question engine (knowledge checks + module quizzes) ---------- */
const Q_LABEL = { mc: 'Multiple choice', tf: 'True or false', scenario: 'Scenario', wwyd: 'What would you do?' };
const qOptions = (q) => (q.t === 'tf' ? ['True', 'False'] : q.o);
const qCorrect = (q) => (q.t === 'tf' ? (q.a ? 0 : 1) : q.a);
function questionHTML(q, name, order) {
  const opts = qOptions(q);
  const idxs = order || opts.map((_, i) => i);
  return `<fieldset class="q__fs"><legend class="q__text">${inline(q.q)}</legend>
    <div class="opts ${q.t === 'tf' ? 'opts--tf' : ''}">${idxs.map((oi, k) => `<label class="opt" data-oi="${oi}"><input type="radio" name="${name}" value="${oi}"><span class="opt__box"><span class="opt__key" aria-hidden="true">${String.fromCharCode(65 + k)}</span><span>${inline(opts[oi])}</span></span></label>`).join('')}</div></fieldset>`;
}
function gradeQuestion(el, q) {
  const sel = $('input:checked', el);
  if (!sel) return null;
  const chosen = +sel.value; const correct = qCorrect(q); const ok = chosen === correct;
  $$('.opt', el).forEach((o) => {
    const oi = +o.dataset.oi; $('input', o).disabled = true;
    if (oi === correct) o.classList.add('is-correct');
    else if (oi === chosen) o.classList.add('is-wrong');
  });
  $('.opts', el).classList.add('is-locked');
  return { ok, html: `<div class="feedback feedback--${ok ? 'correct' : 'wrong'}" role="status">${icon(ok ? 'check-circle' : 'x-circle')}<div><strong>${ok ? 'Correct' : 'Not quite'}</strong><p>${inline(q.e)}</p></div></div>` };
}

function lessonCheckHTML(x) {
  const qs = x.l.check || [];
  const prev = state.checks[x.key];
  return `<div class="check" data-check="${x.key}">
    <div class="check__head"><div><strong>Knowledge check</strong><div class="small muted" data-check-sum>${prev ? `Last score: ${prev.score}/${prev.total}` : `${qs.length} questions · instant feedback`}</div></div>
      <div class="check__progress" aria-hidden="true">${qs.map(() => '<span></span>').join('')}</div></div>
    ${qs.map((q, i) => `<div class="q" data-qi="${i}"><div class="q__type"><span class="badge badge--outline">${Q_LABEL[q.t] || 'Question'}</span></div>${questionHTML(q, `${x.key}-q${i}`)}
      <div class="q__actions"><button type="button" class="btn btn--primary btn--sm" data-q-check>Check answer</button></div><div data-q-fb aria-live="polite"></div></div>`).join('')}
  </div>`;
}
function mountLessonCheck(root, x) {
  const box = $('[data-check]', root); if (!box) return;
  const qs = x.l.check || []; const results = [];
  $$('.q', box).forEach((qel) => {
    const i = +qel.dataset.qi; const btn = $('[data-q-check]', qel);
    btn.addEventListener('click', () => {
      const r = gradeQuestion(qel, qs[i]);
      if (!r) { $('[data-q-fb]', qel).innerHTML = `<p class="small muted mt-2">Select an answer first.</p>`; return; }
      results[i] = r.ok; btn.remove();
      $('[data-q-fb]', qel).innerHTML = r.html;
      const seg = $$('.check__progress span', box)[i]; seg.classList.add(r.ok ? 'is-correct' : 'is-wrong');
      if (results.filter((v) => v !== undefined).length === qs.length) {
        const score = results.filter(Boolean).length;
        state.checks[x.key] = { score, total: qs.length }; save();
        $('[data-check-sum]', box).textContent = `Score: ${score}/${qs.length}${score === qs.length ? ' — perfect' : ''}`;
        if (score === qs.length) toast({ kind: 'success', title: 'Knowledge check passed', text: `${score}/${qs.length} correct.` });
        checkAchievements();
      }
    });
  });
}

/* ---------- Exercise engine ---------- */
const EX_META = { classify: ['list-check', 'Classify'], order: ['list-check', 'Put in order'], extract: ['clipboard', 'Extract the information'], choose: ['target', 'Choose the best option'], multi: ['list-check', 'Select all that apply'] };
function exerciseHTML(ex, opts = {}, fixedId) {
  const id = fixedId || nextId('ex');
  EX_REG.set(id, { ex, opts });
  const [ic, defTitle] = EX_META[ex.type];
  let body = '';
  if (ex.type === 'classify') {
    body = `<div class="classify">${ex.items.map((it, i) => `<div class="classify-row" data-i="${i}"><div class="classify-row__text" id="${id}-l${i}">${inline(it.text)}</div>
      <select class="select" aria-labelledby="${id}-l${i}"><option value="">Choose…</option>${ex.categories.map((c) => `<option>${esc(c)}</option>`).join('')}</select></div>`).join('')}</div>`;
  } else if (ex.type === 'order') {
    let perm = shuffle(ex.items.map((_, i) => i)); let tries = 0;
    while (perm.every((v, i) => v === i) && tries++ < 10) perm = shuffle(perm);
    body = `<ol class="order-list" aria-label="Items to order">${perm.map((oi, k) => `<li class="order-item" data-orig="${oi}"><span class="order-item__n">${k + 1}</span><span class="order-item__text">${inline(ex.items[oi])}</span>
      <span class="order-item__ctl"><button type="button" class="btn-icon" data-mv="-1" aria-label="Move up: ${esc(stripTags(ex.items[oi]))}">${icon('chev-u')}</button><button type="button" class="btn-icon" data-mv="1" aria-label="Move down: ${esc(stripTags(ex.items[oi]))}">${icon('chev-d')}</button></span></li>`).join('')}</ol>`;
  } else if (ex.type === 'extract') {
    body = `<div class="source-doc"><span class="source-doc__label">${esc(ex.sourceLabel || 'Source')}</span>${esc(ex.source)}</div>
      <div class="fields">${ex.fields.map((f, i) => `<div class="field ${f.full ? 'field--full' : ''}"><label for="${id}-f${i}">${esc(f.label)}</label><input class="input" id="${id}-f${i}" autocomplete="off" placeholder="${esc(f.placeholder || '')}"><span class="field__result" data-fr aria-live="polite"></span></div>`).join('')}</div>`;
  } else if (ex.type === 'choose' || ex.type === 'multi') {
    const type = ex.type === 'choose' ? 'radio' : 'checkbox';
    body = `<fieldset><legend class="sr-only">${esc(stripTags(ex.prompt))}</legend><div class="opts">${ex.options.map((o, i) => `<label class="opt" data-oi="${i}"><input type="${type}" name="${id}-o" value="${i}"><span class="opt__box"><span class="opt__key" aria-hidden="true">${String.fromCharCode(65 + i)}</span><span>${inline(o.text)}<span class="opt__why" hidden></span></span></span></label>`).join('')}</div></fieldset>`;
  }
  return `<div class="exercise" data-ex="${id}">
    <div class="exercise__head"><h3>${icon(ic)} ${esc(opts.title || defTitle)}</h3>${ex.prompt ? `<p class="small mt-2">${inline(ex.prompt)}</p>` : ''}</div>
    <div class="exercise__body">${body}
      <div class="q__actions"><button type="button" class="btn btn--primary btn--sm" data-ex-check>${icon('check')} Check</button><button type="button" class="btn btn--ghost btn--sm" data-ex-reset hidden>${icon('rotate')} Try again</button><span class="small muted" data-ex-status role="status"></span></div>
      <div data-ex-fb aria-live="polite"></div></div></div>`;
}
const normTxt = (s) => String(s).toLowerCase().replace(/[\s,$%]/g, '').replace(/[’']/g, "'");
const isNumTok = (t) => /^[\d.:]+$/.test(normTxt(t).replace(/h$/, ''));
function fieldMatch(value, accept) {
  const v = normTxt(value); if (!v) return false;
  return accept.some((tok) => {
    if (isNumTok(tok)) {
      const vn = v.replace(/[^\d.:]/g, ''); const tn = normTxt(tok).replace(/[^\d.:]/g, '');
      return vn === tn || parseFloat(vn) === parseFloat(tn) && !tn.includes(':');
    }
    return v.includes(normTxt(tok));
  });
}
function mountExercises(root) { $$('[data-ex]', root).forEach((el) => { if (!el.dataset.mounted) mountExercise(el); }); }
function mountExercise(el) {
  el.dataset.mounted = '1';
  const id = el.dataset.ex; const reg = EX_REG.get(id); if (!reg) return;
  const { ex, opts } = reg;
  const status = $('[data-ex-status]', el); const fb = $('[data-ex-fb]', el);
  const btnCheck = $('[data-ex-check]', el); const btnReset = $('[data-ex-reset]', el);
  if (ex.type === 'order') {
    const list = $('.order-list', el);
    list.addEventListener('click', (e) => {
      const b = e.target.closest('[data-mv]'); if (!b || b.disabled) return;
      const li = b.closest('.order-item'); const dir = +b.dataset.mv;
      const sib = dir < 0 ? li.previousElementSibling : li.nextElementSibling; if (!sib) return;
      if (dir < 0) list.insertBefore(li, sib); else list.insertBefore(sib, li);
      $$('.order-item', list).forEach((x, k) => { $('.order-item__n', x).textContent = k + 1; });
      li.classList.remove('is-moved'); void li.offsetWidth; li.classList.add('is-moved');
      b.focus();
    });
  }
  btnCheck.addEventListener('click', () => {
    const r = gradeExercise(el, ex);
    if (r === null) { status.textContent = ex.type === 'extract' ? 'Fill in every field first.' : 'Complete the exercise first.'; el.classList.remove('anim-shake'); void el.offsetWidth; el.classList.add('anim-shake'); return; }
    status.textContent = '';
    btnCheck.hidden = true;
    if (!opts.noRetry) btnReset.hidden = false;
    const kind = r.score >= 0.999 ? 'correct' : r.score >= 0.5 ? 'partial' : 'wrong';
    const head = kind === 'correct' ? 'Excellent — all correct' : kind === 'partial' ? `Partially correct — ${pct(r.score)}%` : `Needs work — ${pct(r.score)}%`;
    fb.innerHTML = `<div class="feedback feedback--${kind}">${icon(kind === 'correct' ? 'check-circle' : kind === 'partial' ? 'info' : 'x-circle')}<div><strong>${head}</strong>${r.note ? `<p>${r.note}</p>` : ''}</div></div>`;
    if (opts.key) { state.exercises[opts.key] = Math.max(state.exercises[opts.key] || 0, r.score); save(); }
    if (opts.onDone) opts.onDone(r.score);
  });
  btnReset.addEventListener('click', () => {
    const wrap = document.createElement('div');
    wrap.innerHTML = exerciseHTML(ex, opts, id);
    const fresh = wrap.firstElementChild; el.replaceWith(fresh); mountExercise(fresh);
    $('input, select, button', fresh).focus();
  });
}
function gradeExercise(el, ex) {
  if (ex.type === 'classify') {
    const sels = $$('select', el); if (sels.some((s) => !s.value)) return null;
    let ok = 0;
    sels.forEach((s, i) => {
      const it = ex.items[i]; const good = s.value === it.answer; if (good) ok++;
      s.classList.add(good ? 'is-valid' : 'is-invalid'); s.disabled = true;
      const row = s.closest('.classify-row');
      row.insertAdjacentHTML('beforeend', `<div class="classify-row__fb">${good ? '<strong style="color:var(--success)">Correct.</strong>' : `<strong style="color:var(--critical)">Answer: ${esc(it.answer)}.</strong>`} ${inline(it.why || '')}</div>`);
    });
    return { score: ok / sels.length };
  }
  if (ex.type === 'order') {
    const items = $$('.order-item', el); let ok = 0;
    items.forEach((li, k) => { const good = +li.dataset.orig === k; if (good) ok++; li.classList.add(good ? 'is-correct' : 'is-wrong'); $$('button', li).forEach((b) => { b.disabled = true; }); });
    const note = ok === items.length ? 'Every item is in the right position.' : `Correct order: ${ex.items.map((t, i) => `<br><span class="mono">${i + 1}.</span> ${inline(t)}`).join('')}`;
    return { score: ok / items.length, note };
  }
  if (ex.type === 'extract') {
    const inputs = $$('input', el); if (inputs.some((i) => !i.value.trim())) return null;
    let ok = 0;
    inputs.forEach((inp, i) => {
      const f = ex.fields[i]; const good = fieldMatch(inp.value, f.accept); if (good) ok++;
      inp.classList.add(good ? 'is-valid' : 'is-invalid'); inp.readOnly = true;
      const r = inp.parentElement.querySelector('[data-fr]');
      r.className = `field__result ${good ? 'ok' : 'no'}`;
      r.innerHTML = good ? `${icon('check')} Correct` : `${icon('x')} Expected: ${esc(f.accept[0])}`;
    });
    return { score: ok / inputs.length };
  }
  if (ex.type === 'choose') {
    const sel = $('input:checked', el); if (!sel) return null;
    const chosen = +sel.value; const correctIdx = ex.options.findIndex((o) => o.correct);
    $$('.opt', el).forEach((o) => {
      const i = +o.dataset.oi; $('input', o).disabled = true;
      if (i === correctIdx) o.classList.add('is-correct'); else if (i === chosen) o.classList.add('is-wrong');
      if (i === chosen || i === correctIdx) { const w = $('.opt__why', o); w.hidden = false; w.innerHTML = inline(ex.options[i].why); }
    });
    $('.opts', el).classList.add('is-locked');
    return { score: chosen === correctIdx ? 1 : 0 };
  }
  if (ex.type === 'multi') {
    const boxes = $$('input', el); if (!boxes.some((b) => b.checked)) return null;
    let tp = 0, fp = 0; const nCorrect = ex.options.filter((o) => o.correct).length;
    $$('.opt', el).forEach((o) => {
      const i = +o.dataset.oi; const inp = $('input', o); const opt = ex.options[i]; inp.disabled = true;
      if (inp.checked && opt.correct) { tp++; o.classList.add('is-correct'); }
      else if (inp.checked && !opt.correct) { fp++; o.classList.add('is-wrong'); }
      else if (!inp.checked && opt.correct) o.classList.add('is-missed');
      const w = $('.opt__why', o); w.hidden = false; w.innerHTML = inline(opt.why);
    });
    $('.opts', el).classList.add('is-locked');
    return { score: Math.max(0, (tp - fp) / nCorrect), note: fp ? 'Selecting incorrect options reduces your score.' : '' };
  }
  return { score: 0 };
}

/* ---------- Router ---------- */
let viewCleanup = null;
const ROUTES = [
  [/^\/(?:dashboard)?$/, viewDashboard],
  [/^\/curriculum$/, viewCurriculum],
  [/^\/track\/(\w+)$/, viewTrack],
  [/^\/lesson\/(\w+)\/(\w+)\/(\w+)$/, viewLesson],
  [/^\/quiz\/(\w+)\/(\w+)$/, viewQuiz],
  [/^\/final\/(\w+)$/, viewFinal],
  [/^\/practice$/, viewPractice],
  [/^\/scenarios(?:\/([\w-]+))?$/, viewScenarios],
  [/^\/trees(?:\/(\w+))?$/, viewTrees],
  [/^\/exercises$/, viewExercises],
  [/^\/flashcards$/, viewFlashcards],
  [/^\/calculators(?:\/(\w+))?$/, viewCalculators],
  [/^\/fleet$/, viewFleetPage],
  [/^\/glossary(?:\/(.+))?$/, viewGlossary],
  [/^\/bookmarks$/, viewBookmarks],
  [/^\/reference$/, viewReference],
  [/^\/achievements$/, viewAchievements]
];
function router() {
  // In-page anchors (#sec-…, #main) are not routes — let the browser handle them.
  if (location.hash && !location.hash.startsWith('#/')) return;
  if (viewCleanup) { try { viewCleanup(); } catch (e) {} viewCleanup = null; }
  const path = decodeURIComponent((location.hash || '#/dashboard').slice(1).split('?')[0]);
  let out = null;
  for (const [re, fn] of ROUTES) { const m = path.match(re); if (m) { out = fn(...m.slice(1)); break; } }
  if (!out) out = viewNotFound();
  const view = $('#view');
  view.innerHTML = out.html;
  view.classList.remove('is-entering'); void view.offsetWidth; view.classList.add('is-entering');
  $$('.stagger', view).forEach(staggerChildren);
  setCrumbs(out.crumbs || []);
  setNav(out.nav, out.bottom);
  document.title = `${out.title ? out.title + ' · ' : ''}MC Academy`;
  $('#announcer').textContent = out.title || 'Dashboard';
  mountWidgets(view);
  mountExercises(view);
  if (out.after) out.after(view);
  closeSidebar();
  if (!out.keepScroll) window.scrollTo({ top: 0, behavior: 'auto' });
  $('#main').focus({ preventScroll: true });
  refreshChrome();
}
function go(hash) { if (location.hash === hash) router(); else location.hash = hash; }

function setCrumbs(list) {
  const el = $('#crumbs');
  const items = [['Academy', '#/dashboard'], ...list];
  el.innerHTML = items.map(([label, href], i) => i === items.length - 1
    ? `<span aria-current="page">${esc(label)}</span>`
    : `<a href="${href}">${esc(label)}</a>${icon('chev-r')}`).join('');
}
function setNav(navId, bottomId) {
  document.body.dataset.nav = navId || '';
  $$('#sideNav [data-nav]').forEach((a) => { if (a.dataset.nav === navId) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  $$('.bottom-nav [data-nav]').forEach((a) => { if (a.dataset.nav === (bottomId || navId)) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
}
function refreshChrome() {
  $('#navTracks').innerHTML = TRACKS.map((t) => {
    const s = trackStats(t);
    return `<a class="nav-item nav-track" href="#/track/${t.id}" data-nav="track-${t.id}"><span class="nav-dot" style="--c:${t.color}" aria-hidden="true"></span><span>${t.level}</span><span class="nav-track__meta">${s.done}/${s.lessons}</span><span class="nav-track__bar" aria-hidden="true"><span style="--p:${s.p};--c:${t.color}"></span></span></a>`;
  }).join('');
  const navId = document.body.dataset.nav;
  if (navId) $$('#navTracks [data-nav]').forEach((a) => { if (a.dataset.nav === navId) a.setAttribute('aria-current', 'page'); });
  const p = overallProgress();
  $('#topProgress').innerHTML = `${ring(p, { size: 30, stroke: 4, label: ' ', fs: 1 })}<span>${pct(p)}%</span>`;
  $('#topProgress').setAttribute('aria-label', `Overall progress ${pct(p)}% — open dashboard`);
  const name = state.name || 'Coordinator';
  const initials = name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  const ctx = currentContext();
  $('#sidebarFoot').innerHTML = `<button type="button" class="side-profile" id="profileBtn" style="width:100%;text-align:left" aria-label="Edit your name"><span class="side-avatar">${esc(initials)}</span><span class="grow"><strong>${esc(name)}</strong><small>${ctx.t.level} track · ${pct(p)}% overall</small></span>${icon('chev-r', 'icon--sm')}</button>`;
  $('#profileBtn').addEventListener('click', editName);
}

/* ---------- Sidebar (mobile drawer) ---------- */
function openSidebar() {
  const sb = $('#sidebar'); sb.classList.add('is-open'); $('#scrim').hidden = false;
  $('#menuBtn').setAttribute('aria-expanded', 'true');
  setTimeout(() => { const a = $('#sidebarClose'); a && a.focus(); }, 50);
}
function closeSidebar() {
  const sb = $('#sidebar'); if (!sb.classList.contains('is-open')) return;
  sb.classList.remove('is-open'); $('#scrim').hidden = true; $('#menuBtn').setAttribute('aria-expanded', 'false');
}

/* ---------- Theme ---------- */
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  $('#themeBtn').innerHTML = icon(t === 'dark' ? 'sun' : 'moon');
  $('#themeBtn').setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  const meta = $('meta[name="theme-color"]'); if (meta) meta.setAttribute('content', t === 'dark' ? '#060e19' : '#0b1a2e');
}

/* ---------- Name editor ---------- */
function editName() {
  openModal({
    title: 'Your profile',
    body: `<div class="field"><label for="nameInput">Name shown on your dashboard and certificates</label><input class="input" id="nameInput" maxlength="60" value="${esc(state.name)}" placeholder="e.g., Jordan Taylor" autofocus><span class="hint">Stored only in this browser.</span></div>`,
    foot: `<button class="btn btn--ghost" data-close>Cancel</button><button class="btn btn--primary" id="nameSave">Save</button>`,
    onOpen: (m, close) => {
      const saveName = () => { state.name = $('#nameInput', m).value.trim().slice(0, 60); save(); refreshChrome(); close(); toast({ kind: 'success', title: 'Profile updated' }); if ((location.hash || '').match(/dashboard|^$|^#\/?$/)) router(); };
      $('#nameSave', m).addEventListener('click', saveName);
      $('#nameInput', m).addEventListener('keydown', (e) => { if (e.key === 'Enter') saveName(); });
    }
  });
}

/* ===========================================================================
   VIEWS
   =========================================================================== */

/* ---------- Dashboard ---------- */
function viewDashboard() {
  const p = overallProgress();
  const ctx = currentContext();
  const rec = recommended();
  const done = completedCount();
  const avg = avgQuiz();
  const certs = TRACKS.filter(finalPassed).length;
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const lastX = state.last && LESSON_MAP.get(state.last);
  const quizRows = [];
  TRACKS.forEach((t) => t.modules.forEach((m) => { const q = state.quizzes[quizKey(t, m)]; if (q) quizRows.push({ label: `${t.level} · M${m.id.slice(1)} ${m.title}`, s: q.best, href: `#/quiz/${t.id}/${m.id}`, at: q.at || 0 }); }));
  TRACKS.forEach((t) => { const f = state.finals[t.id]; if (f) quizRows.push({ label: t.final.title, s: f.score, href: `#/final/${t.id}`, at: f.at || 0, final: true }); });
  quizRows.sort((a, b) => b.at - a.at);
  const earned = ACHIEVEMENTS.filter((a) => state.achievements[a.id]);
  const nextAch = ACHIEVEMENTS.filter((a) => !state.achievements[a.id]).slice(0, 4 - Math.min(earned.length, 2));
  const achShow = [...earned.slice(-2), ...nextAch].slice(0, 4);

  const html = `<div class="page">
    <section class="hero" aria-labelledby="dashTitle">
      <div class="dash-hero">
        <div>
          <span class="eyebrow">${icon('grad', 'icon--sm')} ${greet}${state.name ? ', ' + esc(state.name.split(' ')[0]) : ''}</span>
          <h1 id="dashTitle">${done ? 'Keep your fleet — and your skills — moving.' : 'Welcome to the Maintenance Coordinator Academy.'}</h1>
          <p>${done ? `You've completed ${done} of ${LESSONS.length} lessons. Every lesson brings you closer to operating like a professional coordinator.` : 'A structured path from zero knowledge to expert fleet maintenance coordination — built around real calls, real decisions and real consequences.'}</p>
          ${rec ? `<div class="dash-hero__now"><small>${lastX && !isDone(lastX.key) ? 'Continue where you left off' : 'Up next'}</small><strong>${esc(lastX && !isDone(lastX.key) ? lastX.l.title : rec.title)}</strong><span>${esc(lastX && !isDone(lastX.key) ? `${lastX.t.level} · Module ${lastX.m.id.slice(1)}: ${lastX.m.title}` : rec.sub)}</span></div>` : ''}
          <div class="dash-hero__mbar"><div class="row row--between small"><span>Overall progress</span><strong class="num" style="color:#fff">${pct(p)}%</strong></div>${progressBar(p, { label: 'Overall progress' })}</div>
          <div class="dash-hero__cta">
            ${rec ? `<a class="btn btn--primary btn--lg" href="${lastX && !isDone(lastX.key) ? lessonHref(lastX) : rec.href}">${icon('play')} ${done ? 'Continue learning' : 'Start the Beginner track'}</a>` : `<a class="btn btn--primary btn--lg" href="#/achievements">${icon('award')} View certificates</a>`}
            <a class="btn btn--ghost btn--lg" href="#/curriculum">Browse curriculum ${icon('arrow-r', 'icon--nudge')}</a>
          </div>
        </div>
        <div class="dash-hero__ring">${ring(p, { size: 168, stroke: 12, cls: 'ring--dark', label: pct(p) + '%', sub: 'Overall', color: '#4f8cc9', fs: 34 })}</div>
      </div>
    </section>

    <div class="grid grid--4 mt-6 stagger">
      ${statCard('book', done, `/ ${LESSONS.length}`, 'Lessons completed')}
      ${statCard('target', avg == null ? '—' : pct(avg), avg == null ? '' : '%', 'Average quiz score')}
      ${statCard('award', certs, '/ 3', 'Certificates earned')}
      ${statCard('activity', streak(), streak() === 1 ? 'day' : 'days', 'Study streak')}
    </div>

    <div class="dash-cols mt-6">
      <div class="stack">
        <section class="card" aria-labelledby="tpTitle">
          <div class="card__head"><h3 id="tpTitle">Curriculum progress</h3><a class="btn btn--ghost btn--sm" href="#/curriculum">All tracks ${icon('chev-r', 'icon--sm')}</a></div>
          <div class="card__body track-progress">
            ${TRACKS.map((t) => { const s = trackStats(t); return `<a class="tp-row" href="#/track/${t.id}" style="color:inherit;text-decoration:none">
              <span class="track-icon" style="--c:${t.color}">${icon(t.icon)}</span>
              <span><span class="tp-row__name"><strong>${t.level}</strong><span class="muted">${s.done}/${s.lessons} lessons${s.final ? ' · Certified' : ''}</span></span>${progressBar(s.p, { color: t.color, label: `${t.level} progress` })}</span>
              <span class="tp-row__pct">${pct(s.p)}%</span></a>`; }).join('')}
          </div>
        </section>
        ${rec ? `<a class="card card--hover rec-card" href="${rec.href}">
          <span class="rec-card__icon">${icon(rec.icon, 'icon--lg')}</span>
          <span class="grow"><span class="eyebrow">Recommended next</span><strong style="display:block;font-size:var(--fs-md);margin-top:2px">${esc(rec.title)}</strong><span class="small muted">${esc(rec.sub)}</span></span>
          ${icon('arrow-r', 'icon--go')}</a>` : ''}
        <section class="card" aria-labelledby="nowTitle">
          <div class="card__head"><h3 id="nowTitle">Where you are</h3></div>
          <div class="card__body">
            <dl class="grid grid--3" style="gap:var(--sp-4)">
              <div><dt class="eyebrow">Curriculum</dt><dd class="mt-2"><strong>${esc(ctx.t.title)}</strong></dd></div>
              <div><dt class="eyebrow">Module</dt><dd class="mt-2"><strong>${ctx.m.id.slice(1)}. ${esc(ctx.m.title)}</strong></dd></div>
              <div><dt class="eyebrow">Lesson</dt><dd class="mt-2"><a href="${lessonHref(ctx)}"><strong>${esc(ctx.l.title)}</strong></a></dd></div>
            </dl>
          </div>
        </section>
      </div>
      <div class="stack">
        <section class="card" aria-labelledby="qsTitle">
          <div class="card__head"><h3 id="qsTitle">Quiz &amp; assessment scores</h3></div>
          <div class="card__body">${quizRows.length ? `<div class="score-list">${quizRows.slice(0, 6).map((r) => `<a class="score-list__row" href="${r.href}" style="text-decoration:none">${icon(r.final ? 'award' : 'target', 'icon--sm')}<span class="grow">${esc(r.label)}</span>${scorePill(r.s)}</a>`).join('')}</div>`
            : `<div class="center" style="padding:var(--sp-4) 0"><p class="small muted">No quiz scores yet. Complete a module and take its quiz to see results here.</p></div>`}</div>
        </section>
        <section class="card" aria-labelledby="achTitle">
          <div class="card__head"><h3 id="achTitle">Achievements</h3><a class="btn btn--ghost btn--sm" href="#/achievements">${earned.length}/${ACHIEVEMENTS.length} ${icon('chev-r', 'icon--sm')}</a></div>
          <div class="card__body" style="display:grid;gap:var(--sp-3)">${achShow.map(achHTML).join('')}</div>
        </section>
      </div>
    </div>
  </div>`;
  return { html, title: 'Dashboard', nav: 'dashboard' };
}
function statCard(ic, v, unit, label) {
  return `<div class="card stat"><div class="stat__top"><span class="stat__icon">${icon(ic)}</span></div><div class="stat__value">${v}${unit ? ` <small>${unit}</small>` : ''}</div><div class="stat__label">${label}</div></div>`;
}
function achHTML(a) {
  const got = state.achievements[a.id];
  return `<div class="ach ${got ? 'is-earned' : ''}"><span class="ach__icon">${icon(got ? a.icon : 'lock')}</span><div><h4>${esc(a.title)}</h4><p>${esc(a.desc)}${got ? ` · ${new Date(got).toLocaleDateString()}` : ''}</p></div></div>`;
}

/* ---------- Curriculum ---------- */
function viewCurriculum() {
  const html = `<div class="page">
    ${pageHead({ eyebrow: `${icon('layers', 'icon--sm')} Curriculum`, title: 'Your learning path', text: 'Three progressive tracks take you from zero knowledge to expert fleet maintenance coordination. Each track includes modules, lessons, knowledge checks, practical exercises, module quizzes and a final assessment.' })}
    <div class="grid grid--3 stagger">${TRACKS.map(trackCard).join('')}</div>
    <div class="section-head"><div><span class="eyebrow">How it works</span><h2>Built around the real job</h2></div></div>
    <div class="info-grid stagger">
      ${[['book', 'Structured lessons', 'Objectives, explanation, real-world examples, visuals, practical examples and key takeaways.'], ['target', 'Knowledge checks', 'Multiple choice, true/false, scenario and what-would-you-do questions with explanations.'], ['message', 'Scenario practice', 'Respond to realistic driver, dispatch, shop and management messages.'], ['clipboard', 'Practical exercises', 'Extract case data, prioritize, classify urgency and review estimates.'], ['award', 'Final assessments', 'A realistic call, a multi-case operations board and a full-day fleet simulation.']].map(([i, t, d]) => `<div class="info-tile"><div class="info-tile__icon">${icon(i)}</div><h4>${t}</h4><p>${d}</p></div>`).join('')}
    </div>
  </div>`;
  return { html, title: 'Curriculum', nav: 'curriculum', crumbs: [['Curriculum']] };
}
function trackCard(t) {
  const s = trackStats(t);
  const mins = t.modules.reduce((a, m) => a + m.lessons.reduce((b, l) => b + l.minutes, 0), 0) + t.final.minutes;
  const started = s.done > 0;
  return `<article class="card card--hover track-card" style="--c:${t.color}">
    <div class="track-card__top">
      <div class="track-card__level"><span class="track-icon">${icon(t.icon)}</span><span class="badge badge--track" style="--c:${t.color}">${t.level}</span></div>
      <h3>${esc(t.title)}</h3><p>${esc(t.summary)}</p>
      <div class="track-card__meta"><span>${icon('layers')} ${t.modules.length} modules</span><span>${icon('book')} ${s.lessons} lessons</span><span>${icon('clock')} ~${Math.round(mins / 60)} h</span></div>
    </div>
    <div class="track-card__bottom">
      <div class="track-card__progress"><span class="muted">${s.final ? 'Certified' : started ? 'In progress' : 'Not started'}</span><strong class="num">${pct(s.p)}%</strong></div>
      ${progressBar(s.p, { color: t.color, label: `${t.level} progress` })}
      <a class="btn ${started && !s.final ? 'btn--primary' : ''} btn--block mt-4" href="#/track/${t.id}">${s.final ? 'Review track' : started ? 'Continue track' : 'View track'} ${icon('arrow-r', 'icon--nudge')}</a>
    </div>
  </article>`;
}

/* ---------- Track ---------- */
function viewTrack(tid) {
  const t = TRACK_BY_ID[tid]; if (!t) return viewNotFound();
  const s = trackStats(t);
  const rec = recommended();
  const openMod = (rec && rec.t === t && rec.m) ? rec.m.id : t.modules[0].id;
  const fin = state.finals[t.id];
  const html = `<div class="page page--narrow">
    <header class="page-head">
      <div>
        <span class="badge badge--track" style="--c:${t.color}">${icon(t.icon)} ${t.level} track</span>
        <h1>${esc(t.title)}</h1>
        <p>${esc(t.summary)}</p>
      </div>
      ${ring(s.p, { size: 112, stroke: 9, color: t.color, sub: 'Complete', fs: 24 })}
    </header>
    <section class="card card--pad mb-6"><span class="eyebrow">What you'll be able to do</span>
      <ul class="grid grid--2 mt-3" style="list-style:none;padding:0;gap:10px">${t.outcomes.map((o) => `<li class="row" style="align-items:flex-start;gap:10px">${icon('check-circle', 'icon--sm')}<span class="small" style="color:var(--text-2)">${esc(o)}</span></li>`).join('')}</ul>
    </section>
    <div class="module-list stagger">${t.modules.map((m, i) => moduleHTML(t, m, i, m.id === openMod)).join('')}</div>
    <div class="final-card mt-6 ${fin && fin.passed ? 'is-passed' : ''}">
      <span class="final-card__icon">${icon('award')}</span>
      <div class="grow"><span class="eyebrow">Final ${t.final.kind === 'sim' ? 'simulation' : 'assessment'} · ~${t.final.minutes} min</span><h3 style="margin-top:4px">${esc(t.final.title)}</h3>
        <p class="small mt-2">${fin ? `Best score ${pct(fin.score)}% — ${fin.passed ? 'passed. Certificate earned.' : 'not yet passed (75% required).'}` : `Complete the modules, then prove it. ${s.done < s.lessons ? `${s.lessons - s.done} lessons remaining — you can attempt it anytime.` : 'You are ready.'}`}</p></div>
      <a class="btn ${fin && fin.passed ? '' : 'btn--primary'}" href="#/final/${t.id}">${fin ? (fin.passed ? 'Retake' : 'Try again') : 'Start'} ${icon('arrow-r', 'icon--nudge')}</a>
    </div>
  </div>`;
  return {
    html, title: `${t.level} track`, nav: `track-${t.id}`, bottom: 'curriculum', crumbs: [['Curriculum', '#/curriculum'], [t.level]],
    after: (v) => {
      $$('.module__head', v).forEach((b) => b.addEventListener('click', () => {
        const mod = b.closest('.module'); const open = !mod.classList.contains('is-open');
        mod.classList.toggle('is-open', open); b.setAttribute('aria-expanded', open);
      }));
    }
  };
}
function moduleHTML(t, m, i, open) {
  const s = moduleStats(t, m);
  const q = state.quizzes[quizKey(t, m)];
  const cur = state.last;
  const pid = nextId('mod');
  return `<div class="module ${open ? 'is-open' : ''} ${s.complete ? 'is-done' : ''}">
    <button type="button" class="module__head" aria-expanded="${open}" aria-controls="${pid}">
      <span class="module__num">${s.complete ? icon('check') : String(i + 1).padStart(2, '0')}</span>
      <span class="grow"><span class="module__title">${esc(m.title)}</span><br><span class="module__sub">${esc(m.summary)}</span></span>
      <span class="module__right"><span class="module__mini">${progressBar(s.done / s.total, { cls: 'progress--sm', color: t.color, label: `${m.title} progress` })}</span><span class="small muted num">${s.done}/${s.total}</span>${icon('chev-d')}</span>
    </button>
    <div class="module__body" id="${pid}"><div><div class="module__lessons">
      ${m.lessons.map((l) => { const key = `${t.id}.${m.id}.${l.id}`; const x = LESSON_MAP.get(key); return `<a class="lesson-row ${isDone(key) ? 'is-done' : ''} ${cur === key && !isDone(key) ? 'is-current' : ''}" href="${lessonHref(x)}">
        <span class="lesson-row__state">${icon('check')}</span><span class="lesson-row__title">${esc(l.title)}</span>
        <span class="lesson-row__meta">${state.bookmarks.includes(key) ? icon('bookmark', 'icon--sm') : ''}<span class="hide-sm">${icon('clock', 'icon--sm')}</span> ${l.minutes} min</span></a>`; }).join('')}
      <a class="lesson-row lesson-row--quiz ${q && q.best >= 0.8 ? 'is-done' : ''}" href="#/quiz/${t.id}/${m.id}"><span class="lesson-row__state">${icon(q && q.best >= 0.8 ? 'check' : 'target')}</span><span class="lesson-row__title">Module quiz</span><span class="lesson-row__meta">${q ? scorePill(q.best) : `${m.lessons.reduce((a, l) => a + (l.check || []).length, 0)} questions`}</span></a>
    </div></div></div>
  </div>`;
}

/* ---------- Lesson ---------- */
function viewLesson(tid, mid, lid) {
  const key = `${tid}.${mid}.${lid}`;
  const x = LESSON_MAP.get(key); if (!x) return viewNotFound();
  const { t, m, l } = x;
  const idx = LESSONS.indexOf(x);
  const prev = LESSONS[idx - 1]; const next = LESSONS[idx + 1];
  const nextIsQuiz = !next || next.m !== m;
  const done = isDone(key);
  const bm = state.bookmarks.includes(key);
  state.last = key; markActiveDay(); save();
  const pr = l.practical || {};
  const exBlock = pr.exercise ? exerciseHTML(pr.exercise, { key: 'ex:' + key, title: pr.title }) : '';
  const hasNotes = !!(l.tips || l.mistakes);
  const deepHTML = l.deep ? `<section class="lesson-section" id="sec-deep"><h2><span class="sec-ico">${icon('layers')}</span>Deep dive</h2><p class="muted mb-4">Go further — optional in-depth material for this lesson.</p>${renderBlock({ tabs: l.deep.map((d) => ({ label: d.title, body: d.blocks })) })}</section>` : '';
  const sections = [
    ['objectives', 'Objectives'], ['explanation', 'Explanation'], ...(l.deep ? [['deep', 'Deep dive']] : []), ['example', 'Real-world example'], ['practical', 'Practical example'], ...(hasNotes ? [['notes', 'Field notes']] : []), ['check', 'Knowledge check'], ['takeaways', 'Key takeaways']
  ];
  const notesHTML = hasNotes ? `<section class="lesson-section" id="sec-notes"><h2><span class="sec-ico">${icon('bulb')}</span>Field notes</h2><div class="compare">${l.tips ? `<div class="compare__col compare__col--yes"><h4>${icon('bulb')} Pro tips</h4><ul>${l.tips.map((i) => `<li>${icon('check')}<span>${inline(i)}</span></li>`).join('')}</ul></div>` : ''}${l.mistakes ? `<div class="compare__col compare__col--no"><h4>${icon('alert')} Common mistakes</h4><ul>${l.mistakes.map((i) => `<li>${icon('x')}<span>${inline(i)}</span></li>`).join('')}</ul></div>` : ''}</div></section>` : '';
  const nextHref = nextIsQuiz ? `#/quiz/${t.id}/${m.id}` : lessonHref(next);
  const nextLabel = nextIsQuiz ? 'Module quiz' : 'Next lesson';
  const html = `<div class="lesson-layout">
    <article class="lesson-main" aria-labelledby="lessonTitle">
      <header class="lesson-head">
        <div class="lesson-head__top">
          <span class="badge badge--track" style="--c:${t.color}">${t.level}</span>
          <span class="badge badge--outline">Module ${m.id.slice(1)} · ${esc(m.title)}</span>
          ${done ? `<span class="badge badge--success">${icon('check')} Completed</span>` : ''}
        </div>
        <h1 id="lessonTitle">${esc(l.title)}</h1>
        <div class="lesson-head__meta">
          <span>${icon('clock')} ${l.minutes} min</span><span>${icon('book')} Lesson ${x.li + 1} of ${m.lessons.length}</span>
          <div class="lesson-head__actions">
            <button type="button" class="btn-icon" data-bookmark aria-pressed="${bm}" aria-label="${bm ? 'Remove bookmark' : 'Bookmark this lesson'}" data-tip="${bm ? 'Bookmarked' : 'Bookmark'}" data-tip-pos="bottom">${icon('bookmark')}</button>
            <button type="button" class="btn btn--sm ${done ? 'is-active' : ''}" data-complete>${icon(done ? 'check-circle' : 'check')} ${done ? 'Completed' : 'Mark complete'}</button>
          </div>
        </div>
      </header>

      <section class="lesson-section" id="sec-objectives" style="margin-top:0"><div class="objectives"><span class="eyebrow">${icon('target', 'icon--sm')} Learning objectives</span>
        <ul>${l.objectives.map((o) => `<li>${icon('check-circle')}<span>${esc(o)}</span></li>`).join('')}</ul></div></section>

      <section class="lesson-section" id="sec-explanation"><h2><span class="sec-ico">${icon('book')}</span>Explanation</h2><div class="prose">${renderBlocks(l.body)}</div></section>

      ${deepHTML}
      <section class="lesson-section" id="sec-example"><h2><span class="sec-ico">${icon('truck')}</span>Real-world example</h2>
        <div class="example-card"><span class="example-card__tag">${icon('pin')} In the field</span><h3>${esc(l.example.title)}</h3><p>${inline(l.example.text)}</p></div></section>

      <section class="lesson-section" id="sec-practical"><h2><span class="sec-ico">${icon('clipboard')}</span>Practical example${pr.title && !pr.exercise ? `: ${esc(pr.title)}` : ''}</h2>
        <div class="prose">${pr.blocks ? renderBlocks(pr.blocks) : ''}</div>${exBlock}</section>

      ${notesHTML}
      <section class="lesson-section" id="sec-check"><h2><span class="sec-ico">${icon('target')}</span>Knowledge check</h2>${lessonCheckHTML(x)}</section>

      <section class="lesson-section" id="sec-takeaways"><div class="takeaways"><h2>Key takeaways</h2><ul>${l.takeaways.map((k, i) => `<li><span class="num-badge">${i + 1}</span><span>${inline(k)}</span></li>`).join('')}</ul></div></section>

      <div id="completeSlot" class="mt-6"></div>
      <nav class="lesson-foot" aria-label="Lesson navigation">
        ${prev ? `<a class="btn" href="${lessonHref(prev)}">${icon('arrow-l', 'icon--nudge-l')} Previous</a>` : ''}
        <a class="btn btn--ghost" href="#/track/${t.id}">${icon('layers')} Curriculum</a>
        <span class="spacer"></span>
        <button type="button" class="btn btn--primary btn--lg" data-continue>${done ? nextLabel : 'Complete & continue'} ${icon('arrow-r', 'icon--nudge')}</button>
      </nav>
    </article>

    <aside class="lesson-rail" aria-label="Lesson navigation">
      <div class="rail-card"><h4>On this page</h4><nav class="toc">${sections.map(([id, label]) => `<a href="#sec-${id}" data-toc="${id}">${label}</a>`).join('')}</nav></div>
      <div class="rail-card"><h4>Module ${m.id.slice(1)} · ${esc(m.title)}</h4><div class="rail-lessons">
        ${m.lessons.map((ll) => { const k = `${t.id}.${m.id}.${ll.id}`; const xx = LESSON_MAP.get(k); return `<a href="${lessonHref(xx)}" class="${isDone(k) ? 'is-done' : ''}" ${k === key ? 'aria-current="page"' : ''}><span class="dot">${isDone(k) ? icon('check') : ''}</span><span>${esc(ll.title)}</span></a>`; }).join('')}
        <a href="#/quiz/${t.id}/${m.id}" class="${quizPassed(t, m) ? 'is-done' : ''}"><span class="dot">${quizPassed(t, m) ? icon('check') : ''}</span><span>Module quiz</span></a>
      </div></div>
      <div class="rail-card">${progressBar(trackStats(t).p, { color: t.color, label: 'Track progress' })}<p class="small muted mt-2">${t.level} track · ${pct(trackStats(t).p)}% complete</p></div>
    </aside>

    <div class="mobile-lesson-bar" role="toolbar" aria-label="Lesson actions">
      ${prev ? `<a class="btn" href="${lessonHref(prev)}" aria-label="Previous lesson">${icon('arrow-l')}</a>` : `<a class="btn" href="#/track/${t.id}" aria-label="Back to curriculum">${icon('layers')}</a>`}
      <button type="button" class="btn-icon" data-bookmark aria-pressed="${bm}" aria-label="Bookmark">${icon('bookmark')}</button>
      <button type="button" class="btn btn--primary" data-continue>${done ? nextLabel : 'Complete & continue'} ${icon('arrow-r')}</button>
    </div>
  </div>`;

  return {
    html, title: l.title, nav: `track-${t.id}`, bottom: 'curriculum',
    crumbs: [['Curriculum', '#/curriculum'], [t.level, `#/track/${t.id}`], [`M${m.id.slice(1)}`, `#/track/${t.id}`], [l.title]],
    after: (v) => {
      mountLessonCheck(v, x);
      $$('[data-toc]', v).forEach((a) => a.addEventListener('click', (e) => {
        e.preventDefault();
        const sec = document.getElementById('sec-' + a.dataset.toc);
        sec.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
      }));
      $$('[data-bookmark]', v).forEach((b) => b.addEventListener('click', () => {
        const on = !state.bookmarks.includes(key);
        state.bookmarks = on ? [...state.bookmarks, key] : state.bookmarks.filter((k) => k !== key); save();
        $$('[data-bookmark]', v).forEach((bb) => { bb.setAttribute('aria-pressed', on); bb.setAttribute('aria-label', on ? 'Remove bookmark' : 'Bookmark this lesson'); if (bb.dataset.tip) bb.dataset.tip = on ? 'Bookmarked' : 'Bookmark'; });
        toast({ kind: on ? 'success' : 'info', title: on ? 'Lesson bookmarked' : 'Bookmark removed', icon: 'bookmark', timeout: 2500 });
      }));
      const setComplete = (on) => {
        if (on) state.completed[key] = Date.now(); else delete state.completed[key];
        save();
        const b = $('[data-complete]', v); b.classList.toggle('is-active', on); b.innerHTML = `${icon(on ? 'check-circle' : 'check')} ${on ? 'Completed' : 'Mark complete'}`;
        $$('[data-continue]', v).forEach((c) => { c.innerHTML = `${on ? nextLabel : 'Complete & continue'} ${icon('arrow-r', 'icon--nudge')}`; });
        if (on) {
          $('#completeSlot', v).innerHTML = `<div class="complete-banner" role="status">${icon('check-circle')} Lesson complete${moduleStats(t, m).complete ? ` — Module ${m.id.slice(1)} finished! Take the module quiz to lock it in.` : '.'}</div>`;
          if (moduleStats(t, m).complete) toast({ kind: 'success', title: `Module ${m.id.slice(1)} complete`, text: m.title });
        } else $('#completeSlot', v).innerHTML = '';
        checkAchievements(); refreshChrome();
      };
      $('[data-complete]', v).addEventListener('click', () => setComplete(!isDone(key)));
      $$('[data-continue]', v).forEach((c) => c.addEventListener('click', () => {
        if (!isDone(key)) { state.completed[key] = Date.now(); save(); checkAchievements(); toast({ kind: 'success', title: 'Lesson complete', text: l.title, timeout: 2500 }); }
        go(nextHref);
      }));
      // Scroll spy for "On this page"
      if ('IntersectionObserver' in window) {
        const links = $$('[data-toc]', v);
        const io = new IntersectionObserver((entries) => {
          entries.forEach((en) => { if (en.isIntersecting) { const id = en.target.id.replace('sec-', ''); links.forEach((a) => a.classList.toggle('is-active', a.dataset.toc === id)); } });
        }, { rootMargin: '-30% 0px -60% 0px' });
        $$('.lesson-section', v).forEach((s) => io.observe(s));
        viewCleanup = () => io.disconnect();
      }
    }
  };
}

/* ---------- Module quiz ---------- */
function viewQuiz(tid, mid) {
  const t = TRACK_BY_ID[tid]; const m = t && t.modules.find((mm) => mm.id === mid);
  if (!m) return viewNotFound();
  const pool = [];
  m.lessons.forEach((l) => (l.check || []).forEach((q) => pool.push(q)));
  const html = `<div class="page page--narrow">
    ${pageHead({ eyebrow: `<span class="badge badge--track" style="--c:${t.color}">${t.level}</span> Module ${m.id.slice(1)} quiz`, title: esc(m.title), text: `${pool.length} questions drawn from this module's lessons, in random order. Score 80% or higher to pass the module.` })}
    <div id="quizRoot"></div>
  </div>`;
  return {
    html, title: `Quiz · ${m.title}`, nav: `track-${t.id}`, bottom: 'curriculum', crumbs: [['Curriculum', '#/curriculum'], [t.level, `#/track/${t.id}`], ['Module quiz']],
    after: (v) => runQuiz($('#quizRoot', v), t, m, pool)
  };
}
function runQuiz(root, t, m, pool) {
  const qs = shuffle(pool).map((q) => ({ q, order: shuffle(qOptions(q).map((_, i) => i)) }));
  let i = 0; const res = [];
  const draw = () => {
    if (i >= qs.length) return result();
    const { q, order } = qs[i];
    root.innerHTML = `<div class="check anim-slide-up">
      <div class="check__head"><div><strong>Question ${i + 1} of ${qs.length}</strong><div class="small muted">${Q_LABEL[q.t]}</div></div>
      <div class="check__progress" aria-hidden="true">${qs.map((_, k) => `<span class="${k < i ? (res[k] ? 'is-correct' : 'is-wrong') : k === i ? 'is-current' : ''}"></span>`).join('')}</div></div>
      <div class="q">${questionHTML(q, `quiz-${i}`, order)}
        <div class="q__actions"><button class="btn btn--primary" data-q-check>Check answer</button></div><div data-q-fb aria-live="polite"></div></div></div>`;
    const qel = $('.q', root); const btn = $('[data-q-check]', qel);
    $('input', qel).focus({ preventScroll: true });
    btn.addEventListener('click', () => {
      const r = gradeQuestion(qel, q);
      if (!r) { $('[data-q-fb]', qel).innerHTML = '<p class="small muted mt-2">Select an answer first.</p>'; return; }
      res[i] = r.ok; $('[data-q-fb]', qel).innerHTML = r.html;
      btn.outerHTML = `<button class="btn btn--primary" data-q-next>${i + 1 < qs.length ? 'Next question' : 'See results'} ${icon('arrow-r', 'icon--nudge')}</button>`;
      const nb = $('[data-q-next]', qel); nb.focus(); nb.addEventListener('click', () => { i++; draw(); });
    });
  };
  const result = () => {
    const score = res.filter(Boolean).length / qs.length;
    const k = quizKey(t, m); const prev = state.quizzes[k] || { best: 0, attempts: 0 };
    state.quizzes[k] = { best: Math.max(prev.best, score), last: score, attempts: prev.attempts + 1, at: Date.now() };
    markActiveDay(); save(); checkAchievements(); refreshChrome();
    const passed = score >= 0.8;
    const nextMod = t.modules[t.modules.indexOf(m) + 1];
    root.innerHTML = `<div class="card result anim-scale-in">
      ${ring(score, { size: 150, stroke: 12, color: passed ? 'var(--success)' : 'var(--warning-strong)', sub: `${res.filter(Boolean).length}/${qs.length}`, fs: 30 })}
      <h2>${passed ? (score === 1 ? 'Perfect score' : 'Module passed') : 'Not quite there'}</h2>
      <p>${passed ? 'You\'ve demonstrated a solid grasp of this module.' : 'Review the lessons and try again — you need 80% to pass.'} Best score: ${pct(state.quizzes[k].best)}%.</p>
      <div class="result__actions">
        <button class="btn" data-retake>${icon('rotate')} Retake quiz</button>
        <a class="btn" href="#/track/${t.id}">${icon('layers')} Back to track</a>
        ${passed ? (nextMod ? `<a class="btn btn--primary" href="${lessonHref(LESSON_MAP.get(`${t.id}.${nextMod.id}.${nextMod.lessons[0].id}`))}">Next module ${icon('arrow-r', 'icon--nudge')}</a>` : `<a class="btn btn--primary" href="#/final/${t.id}">Final assessment ${icon('arrow-r', 'icon--nudge')}</a>`) : `<a class="btn btn--primary" href="${lessonHref(LESSON_MAP.get(`${t.id}.${m.id}.${m.lessons[0].id}`))}">Review lessons</a>`}
      </div></div>`;
    $('[data-retake]', root).addEventListener('click', () => runQuiz(root, t, m, pool));
    if (passed) toast({ kind: 'success', title: 'Module quiz passed', text: `${m.title} — ${pct(score)}%` });
  };
  draw();
}

/* ---------- Final assessments ---------- */
function viewFinal(tid) {
  const t = TRACK_BY_ID[tid]; if (!t) return viewNotFound();
  const html = `<div class="page"><div id="finalRoot"></div></div>`;
  return {
    html, title: t.final.title, nav: `track-${t.id}`, bottom: 'curriculum', crumbs: [['Curriculum', '#/curriculum'], [t.level, `#/track/${t.id}`], ['Final']],
    after: (v) => (t.final.kind === 'sim' ? runSim : runExam)($('#finalRoot', v), t)
  };
}
function finalIntro(root, t, intro, steps, onStart) {
  const prev = state.finals[t.id];
  root.innerHTML = `<div class="page--narrow" style="margin:0 auto">
    ${pageHead({ eyebrow: `<span class="badge badge--track" style="--c:${t.color}">${t.level}</span> Final ${t.final.kind === 'sim' ? 'simulation' : 'assessment'}`, title: esc(t.final.title), text: esc(intro) })}
    <div class="card card--pad">
      <div class="row row--between row--wrap"><h3>What you'll do</h3><span class="badge badge--outline">${icon('clock')} ~${t.final.minutes} min · Pass 75%</span></div>
      <ol class="timeline mt-4">${steps.map((s, i) => `<li class="tl-step is-seen" style="padding-bottom:6px"><span class="tl-step__num">${i + 1}</span><div style="padding:14px 0 0"><span class="tl-step__title">${esc(s)}</span></div></li>`).join('')}</ol>
      ${prev ? `<div class="feedback feedback--${prev.passed ? 'correct' : 'partial'}">${icon(prev.passed ? 'award' : 'info')}<div><strong>Previous best: ${pct(prev.score)}%</strong><p>${prev.passed ? 'Passed — your certificate is available.' : 'Not yet passed. Try again!'}</p></div></div>` : ''}
      <div class="row row--wrap mt-6"><button class="btn btn--primary btn--lg" data-start>${icon('play')} ${prev ? 'Start again' : 'Begin'}</button>${prev && prev.passed ? `<button class="btn btn--lg" data-cert>${icon('award')} View certificate</button>` : ''}</div>
    </div></div>`;
  $('[data-start]', root).addEventListener('click', onStart);
  const c = $('[data-cert]', root); if (c) c.addEventListener('click', () => showCertificate(t));
}
function saveFinal(t, score, passed, extra = {}) {
  const prev = state.finals[t.id];
  const best = prev && prev.score > score ? prev : { score, passed, at: Date.now(), ...extra };
  if (prev && prev.passed && !passed) best.passed = true;
  state.finals[t.id] = best; markActiveDay(); save(); checkAchievements(); refreshChrome();
}

/* Beginner + Advanced step exams */
function runExam(root, t) {
  const E = EXAMS[t.id];
  finalIntro(root, t, E.intro, E.steps.map((s) => s.title), () => {
    const st = { i: 0, scores: [], file: E.caseFile.map((r) => r.slice()), fresh: [] };
    const fileHTML = () => st.file.map(([k, v]) => `<dt>${esc(k)}</dt><dd class="${st.fresh.includes(k) ? 'is-new' : ''}">${esc(v)}</dd>`).join('');
    const drawStep = () => {
      const s = E.steps[st.i];
      root.innerHTML = `<div class="exam-shell">
        <div>
          <div class="stepper" aria-label="Assessment progress">${E.steps.map((x, k) => `<div class="stepper__item ${k < st.i ? 'is-done' : k === st.i ? 'is-current' : ''}"><div class="stepper__bar"><span></span></div><div class="stepper__label">${k + 1}. ${esc(x.label)}</div></div>`).join('')}</div>
          <div class="card card--pad anim-slide-up">
            <span class="eyebrow">Step ${st.i + 1} of ${E.steps.length}</span>
            <h2 style="margin:6px 0 var(--sp-4)">${esc(s.title)}</h2>
            <div class="prose mb-4">${renderBlocks(s.blocks || [])}</div>
            <div id="stepEx"></div>
            <div class="row mt-4" id="stepNext"></div>
          </div>
        </div>
        <aside class="exam-side" aria-label="Case file"><div class="case-file"><div class="case-file__head">${icon('file')} Case file</div>
          <dl aria-live="polite">${fileHTML()}</dl></div>
          <p class="small muted mt-3">${icon('info', 'icon--sm')} Each step can be answered once. Read carefully.</p></aside>
      </div>`;
      const exWrap = $('#stepEx', root);
      exWrap.innerHTML = exerciseHTML(s.exercise, { noRetry: true, onDone: (score) => {
        st.scores[st.i] = score;
        (s.reveal || []).forEach(([k, v]) => { const f = st.file.find((r) => r[0] === k); if (f) f[1] = v; else st.file.push([k, v]); st.fresh.push(k); });
        $('.case-file dl', root).innerHTML = fileHTML();
        st.fresh = [];
        const last = st.i === E.steps.length - 1;
        $('#stepNext', root).innerHTML = `<button class="btn btn--primary" data-next>${last ? 'Finish assessment' : 'Continue'} ${icon('arrow-r', 'icon--nudge')}</button>`;
        const nb = $('[data-next]', root); nb.focus();
        nb.addEventListener('click', () => { st.i++; if (st.i < E.steps.length) { drawStep(); window.scrollTo({ top: 0 }); } else finish(); });
      } });
      mountExercises(exWrap);
    };
    const finish = () => {
      const score = st.scores.reduce((a, b) => a + b, 0) / E.steps.length;
      const passed = score >= E.passing;
      saveFinal(t, score, passed);
      root.innerHTML = `<div class="page--narrow" style="margin:0 auto"><div class="card result anim-scale-in">
        ${ring(score, { size: 160, stroke: 12, color: passed ? 'var(--success)' : 'var(--warning-strong)', sub: passed ? 'Passed' : 'Not passed', fs: 32 })}
        <h2>${passed ? 'Assessment passed' : 'Keep practicing'}</h2>
        <p>${passed ? `You've demonstrated the skills of the ${t.level} track. Your certificate is ready.` : `You need ${pct(E.passing)}% to pass. Review the weaker steps below and try again.`}</p>
        <div class="score-bars">${E.steps.map((s, k) => `<div class="score-bars__row"><span>${k + 1}. ${esc(s.label)}</span>${progressBar(st.scores[k], { color: st.scores[k] >= 0.8 ? 'var(--success)' : st.scores[k] >= 0.5 ? 'var(--warning-strong)' : 'var(--critical)', label: s.label })}<span class="num">${pct(st.scores[k])}%</span></div>`).join('')}</div>
        <div class="result__actions"><button class="btn" data-again>${icon('rotate')} Retake</button><a class="btn" href="#/track/${t.id}">Back to track</a>${passed ? `<button class="btn btn--primary" data-cert>${icon('award')} View certificate</button>` : ''}</div>
      </div></div>`;
      window.scrollTo({ top: 0 });
      $('[data-again]', root).addEventListener('click', () => runExam(root, t));
      const c = $('[data-cert]', root); if (c) c.addEventListener('click', () => showCertificate(t));
      if (passed) toast({ kind: 'award', title: 'Certificate earned', text: t.title });
    };
    drawStep();
  });
}

/* Expert simulation with metrics + consequences */
function runSim(root, t) {
  finalIntro(root, t, SIM.intro, SIM.stages.map((s) => `${s.clock} — ${s.title}`), () => {
    const st = { i: 0, m: { ...SIM.start }, pts: 0, log: [] };
    const avail = (m) => ((SIM.fleetHours - SIM.baseDown - m.downtime) / SIM.fleetHours) * 100;
    // fx = the effects of the last decision, shown as deltas (green = better, red = worse)
    const metricsHTML = (m, fx = {}) => {
      const score = (n) => (n ? [(n > 0 ? '+' : '') + n, n > 0] : null);
      const cards = [
        { label: 'Safety', val: m.safety, unit: '/100', d: score(fx.safety), bar: m.safety / 100, col: m.safety >= 85 ? 'var(--success)' : m.safety >= 70 ? 'var(--warning-strong)' : 'var(--critical)' },
        { label: 'Customer service', val: m.service, unit: '/100', d: score(fx.service), bar: m.service / 100, col: 'var(--primary)' },
        { label: 'Stakeholder trust', val: m.trust, unit: '/100', d: score(fx.trust), bar: m.trust / 100, col: 'var(--primary)' },
        { label: 'Fleet availability', val: avail(m).toFixed(1), unit: '%', d: fx.downtime ? ['−' + (fx.downtime / SIM.fleetHours * 100).toFixed(1), false] : null, bar: avail(m) / 100, col: 'var(--primary)' },
        { label: 'Cost today', val: fmtMoney(m.cost), unit: '', d: fx.cost ? ['+' + fmtMoney(fx.cost), false] : null },
        { label: 'Downtime added', val: m.downtime, unit: 'h', d: fx.downtime ? ['+' + fx.downtime + 'h', false] : null }
      ];
      return `<div class="sim-metrics">${cards.map((c) => `<div class="sim-metric"><div class="sim-metric__label">${c.label}</div><div class="sim-metric__value">${c.val}<small class="muted" style="font-size:12px"> ${c.unit}</small>${c.d ? `<span class="sim-metric__delta ${c.d[1] ? 'pos' : 'neg'}">${c.d[0]}</span>` : ''}</div>${c.bar != null ? progressBar(c.bar, { color: c.col, label: c.label }) : ''}</div>`).join('')}</div>`;
    };
    const draw = (picked) => {
      const s = SIM.stages[st.i];
      root.innerHTML = `<div class="row row--between row--wrap mb-4"><div><span class="eyebrow">Stage ${st.i + 1} of ${SIM.stages.length}</span><h2 style="margin-top:4px">${esc(s.title)}</h2></div><span class="sim-clock">${icon('clock')} ${s.clock}</span></div>
        <div id="metrics">${metricsHTML(st.m)}</div>
        <div class="grid grid--2" style="align-items:start;gap:var(--sp-6)">
          <section aria-labelledby="evTitle"><h3 id="evTitle" class="mb-4">Incoming</h3><ul class="event-feed">${s.events.map(([k, txt], n) => `<li class="event event--${k}" style="animation-delay:${n * 90}ms"><span class="event__icon">${icon(k === 'critical' ? 'alert' : k === 'warning' ? 'zap' : 'info')}</span><div><time>${s.clock}</time><p>${esc(txt)}</p></div></li>`).join('')}</ul></section>
          <section aria-labelledby="decTitle"><h3 id="decTitle" class="mb-4">${esc(s.prompt)}</h3><div class="resp" id="simResp">${s.options.map((o, k) => `<button type="button" data-k="${k}"><span class="opt__key" aria-hidden="true">${String.fromCharCode(65 + k)}</span><span>${esc(o.text)}</span></button>`).join('')}</div><div id="simOut" aria-live="polite"></div></section>
        </div>`;
      $$('#simResp button', root).forEach((b) => b.addEventListener('click', () => choose(+b.dataset.k)));
    };
    const choose = (k) => {
      const s = SIM.stages[st.i]; const o = s.options[k];
      Object.entries(o.fx || {}).forEach(([key, val]) => { st.m[key] = key === 'cost' || key === 'downtime' ? st.m[key] + val : clamp(st.m[key] + val, 0, 100); });
      st.pts += o.pts; st.log.push({ stage: s, o });
      $('#metrics', root).innerHTML = metricsHTML(st.m, o.fx || {});
      const grade = o.pts === 3 ? 'best' : o.pts >= 1 ? 'ok' : 'poor';
      $$('#simResp button', root).forEach((b) => { b.disabled = true; if (+b.dataset.k === k) b.classList.add('is-picked', grade); });
      $('#simResp', root).classList.add('is-answered');
      const last = st.i === SIM.stages.length - 1;
      $('#simOut', root).innerHTML = `<div class="consequence mt-4"><h4>${icon(grade === 'best' ? 'check-circle' : grade === 'ok' ? 'info' : 'alert')} Consequence</h4><p>${esc(o.result)}</p>
        <button class="btn btn--primary mt-4" data-next>${last ? 'See debrief' : 'Next stage'} ${icon('arrow-r', 'icon--nudge')}</button></div>`;
      const nb = $('[data-next]', root); nb.focus();
      nb.addEventListener('click', () => { st.i++; window.scrollTo({ top: 0 }); if (st.i < SIM.stages.length) draw(); else debrief(); });
    };
    const debrief = () => {
      const score = st.pts / (SIM.stages.length * 3);
      const safe = st.m.safety >= 70;
      const passed = score >= SIM.passing && safe;
      saveFinal(t, score, passed, { safety: st.m.safety });
      root.innerHTML = `<div class="page--narrow" style="margin:0 auto">
        <div class="card result anim-scale-in">
          ${ring(score, { size: 160, stroke: 12, color: passed ? 'var(--success)' : 'var(--warning-strong)', sub: passed ? 'Passed' : 'Not passed', fs: 32 })}
          <h2>${passed ? 'Expert-level coordination' : !safe ? 'Safety standard not met' : 'Not yet at expert level'}</h2>
          <p>${passed ? 'You protected safety, customers and cost while keeping stakeholders informed. Your certificate is ready.' : !safe ? 'Your safety score fell below 70. At the expert level, safety failures are disqualifying regardless of other results.' : 'Review the decisions below — look for where parallel planning, evidence-based approvals or clear communication would have changed the outcome.'}</p>
        </div>
        <h3 class="mt-8 mb-4">End-of-day metrics</h3>${metricsHTML(st.m)}
        <h3 class="mt-8 mb-4">Decision log</h3>
        <div class="table-wrap"><table class="table"><thead><tr><th>Time</th><th>Stage</th><th>Your decision</th><th>Quality</th></tr></thead><tbody>
          ${st.log.map(({ stage, o }) => `<tr><td class="mono">${stage.clock}</td><td><strong>${esc(stage.title)}</strong></td><td>${esc(o.text)}</td><td>${o.pts === 3 ? '<span class="badge badge--success">Strong</span>' : o.pts >= 1 ? '<span class="badge badge--warning">Partial</span>' : '<span class="badge badge--critical">Poor</span>'}</td></tr>`).join('')}
        </tbody></table></div>
        <div class="result__actions"><button class="btn" data-again>${icon('rotate')} Run the day again</button><a class="btn" href="#/track/${t.id}">Back to track</a>${passed ? `<button class="btn btn--primary" data-cert>${icon('award')} View certificate</button>` : ''}</div>
      </div>`;
      $('[data-again]', root).addEventListener('click', () => runSim(root, t));
      const c = $('[data-cert]', root); if (c) c.addEventListener('click', () => showCertificate(t));
      if (passed) toast({ kind: 'award', title: 'Certificate earned', text: t.title });
    };
    draw();
  });
}

/* ---------- Certificate ---------- */
function certificateHTML(t) {
  const f = state.finals[t.id];
  const date = f && f.at ? new Date(f.at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
  return `<div class="certificate">
    <div class="cert-seal">${icon('award', 'icon--lg')}</div>
    <p class="cert-eyebrow mt-4">Maintenance Coordinator Academy · Certificate of Completion</p>
    <h2>${esc(t.title)}</h2>
    <p>This certifies that</p>
    <div class="cert-name">${esc(state.name || 'Your Name')}</div>
    <p>has completed the ${t.level} curriculum and passed the final ${t.final.kind === 'sim' ? 'simulation' : 'assessment'}<br>with a score of <strong style="color:#0b1a2e">${f ? pct(f.score) : 0}%</strong>.</p>
    <div class="cert-meta"><div><strong>${date}</strong>Date awarded</div><div><strong>${t.modules.length} modules · ${t.modules.reduce((a, m) => a + m.lessons.length, 0)} lessons</strong>Curriculum</div><div><strong>MCA-${t.id.slice(0, 3).toUpperCase()}-${(f && f.at ? f.at : 0).toString(36).toUpperCase().slice(-6)}</strong>Credential ID</div></div>
  </div>`;
}
function showCertificate(t) {
  openModal({
    title: `${t.level} certificate`, size: 'modal--lg',
    body: `${!state.name ? `<div class="callout callout--info mb-4">${icon('info')}<div><p>Add your name so it appears on the certificate.</p></div></div>` : ''}<div id="certWrap">${certificateHTML(t)}</div>`,
    foot: `<button class="btn" id="certName">${icon('users')} ${state.name ? 'Edit name' : 'Add name'}</button><button class="btn btn--primary" id="certPrint">${icon('print')} Print / Save PDF</button>`,
    onOpen: (m, close) => {
      $('#certPrint', m).addEventListener('click', () => { $('#printRoot').innerHTML = certificateHTML(t); window.print(); });
      $('#certName', m).addEventListener('click', () => { close(); setTimeout(editName, 250); });
    }
  });
}

/* ---------- Practice hub ---------- */
function viewPractice() {
  const tools = [
    ['scenarios', 'message', 'Scenario Simulator', 'Respond to realistic messages from drivers, dispatch, shops and management — and see the reasoning.', `${Object.keys(state.scen).length}/${SCENARIOS.length} attempted`],
    ['trees', 'branch', 'Decision Trees', 'Work step by step through maintenance situations where each choice changes the outcome.', `${Object.keys(state.trees).length}/${Object.keys(TREES).length} explored`],
    ['exercises', 'clipboard', 'Practical Exercises', 'Extract case data, classify urgency, order workflows and review estimates.', `${Object.keys(state.exercises).length} completed`],
    ['flashcards', 'cards', 'Flashcards', 'Components, terminology, abbreviations, processes and diagnostics.', `${Object.keys(state.flash.known).length}/${FLASHCARDS.length} known`],
    ['calculators', 'calc', 'Calculators', 'Cost per mile, downtime cost, repair comparison, PM compliance, availability, MTBF/MTTR.', `${Object.keys(state.calcUsed).length}/6 used`],
    ['fleet', 'truck', 'Fleet Board', 'An interactive fleet status dashboard with PM status, open repairs, downtime and repeat failures.', `${FLEET.length} units`]
  ];
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('flask', 'icon--sm')} Practice Lab`, title: 'Practice like it\'s a real shift', text: 'Hands-on tools to build judgment and speed. Everything here also appears inside the relevant lessons.' })}
    <div class="grid grid--3 stagger">${tools.map(([id, ic, t, d, meta]) => `<a class="card card--hover" href="#/${id}"><div class="lab-card"><span class="lab-card__icon">${icon(ic)}</span><h3>${t}</h3><p>${d}</p><div class="row row--between"><span class="lab-card__go">Open ${icon('arrow-r')}</span><span class="small muted">${meta}</span></div></div></a>`).join('')}</div></div>`;
  return { html, title: 'Practice Lab', nav: '', bottom: 'practice', crumbs: [['Practice Lab']] };
}

/* ---------- Scenario simulator ---------- */
const GRADE_ORDER = { poor: 0, ok: 1, best: 2 };
function scenarioHTML(s) {
  return `<div class="scenario" data-scen="${s.id}">
    <div class="scenario__head"><span class="badge badge--outline">${esc(s.cat)}</span><span class="badge badge--info">${esc(s.level)}</span>${state.scen[s.id] ? `<span class="badge badge--${state.scen[s.id] === 'best' ? 'success' : state.scen[s.id] === 'ok' ? 'warning' : 'critical'}">Last: ${state.scen[s.id] === 'best' ? 'Best response' : state.scen[s.id] === 'ok' ? 'Acceptable' : 'Poor'}</span>` : ''}<h2>${esc(s.title)}</h2></div>
    <div class="scenario__call"><div class="incoming"><span class="incoming__avatar">${icon(s.from.startsWith('Driver') ? 'phone' : 'message')}</span><div><div class="incoming__who">${esc(s.from)}</div><p class="incoming__msg">“${esc(s.message)}”</p></div></div>
      <div class="scenario__ctx">${s.ctx.map((c) => `<span class="badge badge--outline">${esc(c)}</span>`).join('')}</div></div>
    <div class="scenario__body"><h3 class="mb-4" style="font-size:var(--fs-md)">How do you respond?</h3>
      <div class="resp">${s.options.map((o, k) => `<button type="button" data-k="${k}"><span class="opt__key" aria-hidden="true">${String.fromCharCode(65 + k)}</span><span class="grow">${esc(o.text)}</span></button>`).join('')}</div>
      <div data-scen-out aria-live="polite"></div></div></div>`;
}
function mountScenario(el, s, onAnswer) {
  $$('.resp button', el).forEach((b) => b.addEventListener('click', () => {
    const k = +b.dataset.k; const o = s.options[k];
    const bestIdx = s.options.findIndex((x) => x.grade === 'best');
    $$('.resp button', el).forEach((x) => { x.disabled = true; });
    b.classList.add('is-picked', o.grade);
    b.insertAdjacentHTML('beforeend', `<span class="resp__grade badge badge--${o.grade === 'best' ? 'success' : o.grade === 'ok' ? 'warning' : 'critical'}">${o.grade === 'best' ? 'Best' : o.grade === 'ok' ? 'Acceptable' : 'Poor'}</span>`);
    if (k !== bestIdx) $$('.resp button', el)[bestIdx].classList.add('is-best-reveal');
    $('.resp', el).classList.add('is-answered');
    const kind = o.grade === 'best' ? 'correct' : o.grade === 'ok' ? 'partial' : 'wrong';
    $('[data-scen-out]', el).innerHTML = `<div class="feedback feedback--${kind}">${icon(kind === 'correct' ? 'check-circle' : kind === 'partial' ? 'info' : 'x-circle')}<div><strong>${o.grade === 'best' ? 'Best response' : o.grade === 'ok' ? 'Acceptable — but there\'s a better option' : 'Poor response'}</strong><p>${esc(o.fb)}</p>${k !== bestIdx ? `<p class="mt-2"><strong style="color:var(--success);display:inline">Best:</strong> ${esc(s.options[bestIdx].fb)}</p>` : ''}</div></div>
      <div class="row mt-4"><button type="button" class="btn btn--sm" data-scen-retry>${icon('rotate')} Try again</button></div>`;
    const prev = state.scen[s.id];
    if (!prev || GRADE_ORDER[o.grade] > GRADE_ORDER[prev]) { state.scen[s.id] = o.grade; save(); checkAchievements(); }
    $('[data-scen-retry]', el).addEventListener('click', () => { const w = document.createElement('div'); w.innerHTML = scenarioHTML(s); const f = w.firstElementChild; el.replaceWith(f); mountScenario(f, s, onAnswer); $('.resp button', f).focus(); });
    if (onAnswer) onAnswer(o.grade);
  }));
}
function viewScenarios(sid) {
  const filter = sessionStorageGet('scenFilter') || 'All';
  const list = SCENARIOS.filter((s) => filter === 'All' || s.level === filter);
  const cur = SCENARIOS.find((s) => s.id === sid) || list[0] || SCENARIOS[0];
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('message', 'icon--sm')} Practice Lab`, title: 'Scenario Simulator', text: 'Real messages, real pressure. Choose your response and read the reasoning. There\'s often more than one reasonable answer — but one is best.' })}
    <div class="row row--wrap mb-6" role="group" aria-label="Filter by level">${['All', 'Beginner', 'Advanced', 'Expert'].map((f) => `<button type="button" class="chip" data-filter="${f}" aria-pressed="${f === filter}">${f}<span class="count">${f === 'All' ? SCENARIOS.length : SCENARIOS.filter((s) => s.level === f).length}</span></button>`).join('')}</div>
    <div class="scen-layout">
      <nav class="scen-list" aria-label="Scenarios">${list.map((s) => `<button type="button" data-sid="${s.id}" aria-current="${s.id === cur.id}"><span class="scen-list__state ${state.scen[s.id] || ''}">${state.scen[s.id] ? icon(state.scen[s.id] === 'poor' ? 'x' : 'check') : ''}</span><span><span class="scen-list__title">${esc(s.title)}</span><span class="scen-list__meta"><span class="badge badge--outline">${esc(s.cat)}</span></span></span></button>`).join('')}</nav>
      <div id="scenStage">${scenarioHTML(cur)}</div>
    </div></div>`;
  return {
    html, title: 'Scenario Simulator', nav: 'scenarios', bottom: 'practice', keepScroll: !!sid, crumbs: [['Practice Lab', '#/practice'], ['Scenarios']],
    after: (v) => {
      mountScenario($('[data-scen]', v), cur, () => refreshScenList(v));
      $$('[data-sid]', v).forEach((b) => b.addEventListener('click', () => {
        const s = SCENARIOS.find((x) => x.id === b.dataset.sid);
        $$('[data-sid]', v).forEach((x) => x.setAttribute('aria-current', x === b));
        const stage = $('#scenStage', v); stage.innerHTML = scenarioHTML(s); stage.firstElementChild.classList.add('anim-slide-up');
        mountScenario($('[data-scen]', stage), s, () => refreshScenList(v));
        history.replaceState(null, '', `#/scenarios/${s.id}`);
        if (window.innerWidth < 1024) stage.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
      }));
      $$('[data-filter]', v).forEach((b) => b.addEventListener('click', () => { sessionStorageSet('scenFilter', b.dataset.filter); router(); }));
    }
  };
}
function refreshScenList(v) {
  $$('[data-sid]', v).forEach((b) => { const g = state.scen[b.dataset.sid]; const st = $('.scen-list__state', b); st.className = `scen-list__state ${g || ''}`; st.innerHTML = g ? icon(g === 'poor' ? 'x' : 'check') : ''; });
}
function sessionStorageGet(k) { try { return sessionStorage.getItem('mca.' + k); } catch (e) { return null; } }
function sessionStorageSet(k, v) { try { sessionStorage.setItem('mca.' + k, v); } catch (e) {} }

/* ---------- Decision trees ---------- */
function treeHTML(tree) {
  return `<div class="tree" data-tree="${tree.id}"><div data-tree-stage></div>
    <aside class="card card--pad-sm" aria-label="Your path"><div class="row row--between"><h4>Your path</h4><button type="button" class="btn btn--ghost btn--sm" data-tree-restart>${icon('rotate')} Restart</button></div><ol class="tree-path mt-4" data-tree-path><li><strong>Start</strong><small>${esc(tree.intro)}</small></li></ol></aside></div>`;
}
function mountTree(el, tree) {
  let path = [];
  const stage = $('[data-tree-stage]', el); const pathEl = $('[data-tree-path]', el);
  const show = (id) => {
    const n = tree.nodes[id];
    if (n.end) {
      stage.innerHTML = `<div class="tree-outcome tree-outcome--${n.outcome}" role="status"><span class="badge badge--${n.outcome === 'good' ? 'success' : n.outcome === 'warn' ? 'warning' : 'critical'}">${n.outcome === 'good' ? 'Strong outcome' : n.outcome === 'warn' ? 'Mixed outcome' : 'Poor outcome'}</span><h3>${esc(n.title)}</h3><p>${esc(n.text)}</p><div class="row mt-4 row--wrap"><button type="button" class="btn btn--primary btn--sm" data-tree-restart2>${icon('rotate')} Try another path</button></div></div>`;
      $('[data-tree-restart2]', stage).addEventListener('click', restart);
      const prev = state.trees[tree.id]; const rank = { bad: 0, warn: 1, good: 2 };
      if (!prev || rank[n.outcome] > rank[prev]) { state.trees[tree.id] = n.outcome; save(); checkAchievements(); }
      return;
    }
    stage.innerHTML = `<div class="tree-node"><span class="eyebrow">Decision ${path.length + 1}</span><p class="tree-node__q">${esc(n.text)}</p><div class="tree-node__choices">${n.choices.map((c, k) => `<button type="button" data-c="${k}"><span>${esc(c.label)}</span>${icon('arrow-r')}</button>`).join('')}</div></div>`;
    $$('[data-c]', stage).forEach((b) => b.addEventListener('click', () => {
      const c = n.choices[+b.dataset.c]; path.push(c.label);
      pathEl.insertAdjacentHTML('beforeend', `<li>${esc(c.label)}</li>`);
      show(c.next);
      const first = $('button', stage); if (first) first.focus({ preventScroll: true });
    }));
  };
  const restart = () => { path = []; pathEl.innerHTML = `<li><strong>Start</strong><small>${esc(tree.intro)}</small></li>`; show(tree.start); };
  $('[data-tree-restart]', el).addEventListener('click', restart);
  show(tree.start);
}
function viewTrees(tid) {
  const list = Object.values(TREES);
  const cur = TREES[tid] || list[0];
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('branch', 'icon--sm')} Practice Lab`, title: 'Decision Trees', text: 'Work through a situation one decision at a time. Each path leads to a different outcome — explore them all.' })}
    <div class="tablist mb-6" role="tablist" aria-label="Decision trees">${list.map((tr) => `<a class="tab" role="tab" href="#/trees/${tr.id}" aria-selected="${tr.id === cur.id}">${esc(tr.title)} ${state.trees[tr.id] === 'good' ? icon('check', 'icon--sm') : ''}</a>`).join('')}</div>
    <p class="mb-4"><span class="badge badge--info">${esc(cur.level)}</span> <span class="muted small">${esc(cur.intro)}</span></p>
    ${treeHTML(cur)}</div>`;
  return { html, title: 'Decision Trees', nav: 'trees', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Decision Trees']], after: (v) => mountTree($('[data-tree]', v), cur) };
}

/* ---------- Practical exercises (collected from lessons) ---------- */
function viewExercises() {
  const filter = sessionStorageGet('exFilter') || 'all';
  const items = LESSONS.filter((x) => x.l.practical && x.l.practical.exercise && (filter === 'all' || x.t.id === filter));
  const html = `<div class="page page--narrow">${pageHead({ eyebrow: `${icon('clipboard', 'icon--sm')} Practice Lab`, title: 'Practical Exercises', text: 'Realistic maintenance information — you perform the coordinator task. These are the same exercises embedded in each lesson, collected in one place.' })}
    <div class="row row--wrap mb-6" role="group" aria-label="Filter by track">${[['all', 'All tracks'], ...TRACKS.map((t) => [t.id, t.level])].map(([id, l]) => `<button type="button" class="chip" data-f="${id}" aria-pressed="${id === filter}">${l}</button>`).join('')}</div>
    <div class="accordion">${items.map((x) => { const pid = nextId('exacc'); const sc = state.exercises['ex:' + x.key]; return `<div class="acc-item" data-exkey="${x.key}"><h3><button type="button" class="acc-trigger" aria-expanded="false" aria-controls="${pid}"><span class="badge badge--track" style="--c:${x.t.color}">${x.t.level.slice(0, 3)}</span><span class="grow">${esc(x.l.practical.title || EX_META[x.l.practical.exercise.type][1])}<br><span class="small muted" style="font-weight:400">M${x.m.id.slice(1)} · ${esc(x.l.title)}</span></span>${sc != null ? scorePill(sc) : ''}${icon('chev-d')}</button></h3><div class="acc-panel" id="${pid}" role="region"><div><div class="acc-panel__inner" data-exslot></div></div></div></div>`; }).join('')}</div></div>`;
  return {
    html, title: 'Practical Exercises', nav: 'exercises', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Exercises']],
    after: (v) => {
      $$('[data-f]', v).forEach((b) => b.addEventListener('click', () => { sessionStorageSet('exFilter', b.dataset.f); router(); }));
      $$('[data-exkey]', v).forEach((item) => {
        $('.acc-trigger', item).addEventListener('click', () => {
          const slot = $('[data-exslot]', item);
          if (!slot.dataset.filled) {
            const x = LESSON_MAP.get(item.dataset.exkey);
            slot.innerHTML = exerciseHTML(x.l.practical.exercise, { key: 'ex:' + x.key, title: x.l.practical.title }) + `<p class="small mt-3"><a href="${lessonHref(x)}">Open the lesson ${icon('arrow-r', 'icon--sm')}</a></p>`;
            slot.dataset.filled = '1'; mountExercises(slot);
          }
        }, { capture: true });
      });
    }
  };
}

/* ---------- Flashcards ---------- */
function viewFlashcards() {
  const decks = ['All', ...new Set(FLASHCARDS.map((c) => c.deck))];
  const deck = sessionStorageGet('fcDeck') || 'All';
  let cards = FLASHCARDS.filter((c) => deck === 'All' || c.deck === deck);
  let i = 0; let flipped = false;
  const cid = (c) => `${c.deck}:${c.front}`;
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('cards', 'icon--sm')} Practice Lab`, title: 'Flashcards', text: 'Flip to reveal. Mark cards you know — they\'ll be tracked. Keyboard: Space/Enter to flip, ← → to navigate.' })}
    <div class="row row--wrap mb-6 row--between"><div class="row row--wrap" role="group" aria-label="Choose deck">${decks.map((d) => `<button type="button" class="chip" data-deck="${d}" aria-pressed="${d === deck}">${d}<span class="count">${d === 'All' ? FLASHCARDS.length : FLASHCARDS.filter((c) => c.deck === d).length}</span></button>`).join('')}</div>
    <div class="row"><button type="button" class="btn btn--sm" data-shuffle>${icon('rotate')} Shuffle</button><button type="button" class="btn btn--sm btn--ghost" data-unknown>Review unknown only</button></div></div>
    <div class="fc-stage"><div class="flashcard" tabindex="0" role="button" aria-label="Flashcard — press to flip" id="fc"><div class="flashcard__inner"><div class="flashcard__face flashcard__front" aria-hidden="false"></div><div class="flashcard__face flashcard__back" aria-hidden="true"></div></div></div>
    <div class="fc-controls"><button type="button" class="btn-icon" data-prev aria-label="Previous card">${icon('chev-l')}</button><span class="fc-counter" aria-live="polite"></span><button type="button" class="btn-icon" data-next aria-label="Next card">${icon('chev-r')}</button></div>
    <div class="fc-controls" style="margin-top:var(--sp-3)"><button type="button" class="btn" data-review>${icon('rotate')} Review again</button><button type="button" class="btn btn--success" data-know>${icon('check')} I know this</button></div>
    <div class="fc-stats"><span>Known: <strong data-known></strong> / ${FLASHCARDS.length}</span><span>This deck: <strong data-deckknown></strong></span></div>
    ${progressBar(0, { cls: 'mt-4', label: 'Flashcards known' }).replace('class="progress mt-4"', 'class="progress mt-4" id="fcBar"')}</div></div>`;
  return {
    html, title: 'Flashcards', nav: 'flashcards', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Flashcards']],
    after: (v) => {
      const fc = $('#fc', v);
      const draw = () => {
        if (!cards.length) { $('.fc-stage', v).innerHTML = stateBlock({ ic: 'check-circle', title: 'Nothing left to review', text: 'You know every card in this deck. Choose another deck or reset the filter.', action: `<button class="btn btn--primary" onclick="location.reload()">Show all cards</button>` }); return; }
        const c = cards[i];
        fc.classList.remove('is-flipped'); flipped = false;
        $('.flashcard__front', fc).innerHTML = `<span class="badge badge--outline flashcard__deck">${esc(c.deck)}</span><div class="flashcard__term">${esc(c.front)}</div><div class="flashcard__hint">${icon('rotate', 'icon--sm')} Tap or press Space to flip</div>`;
        $('.flashcard__back', fc).innerHTML = `<span class="badge flashcard__deck" style="background:rgba(255,255,255,.08);color:#8fb6de">${esc(c.front)}</span><p class="flashcard__def">${esc(c.back)}</p><div class="flashcard__hint">${state.flash.known[cid(c)] ? icon('check-circle', 'icon--sm') + ' Marked as known' : 'Do you know it?'}</div>`;
        $('.fc-counter', v).textContent = `${i + 1} / ${cards.length}`;
        const known = Object.keys(state.flash.known).length;
        $('[data-known]', v).textContent = known;
        $('[data-deckknown]', v).textContent = `${cards.filter((x) => state.flash.known[cid(x)]).length} / ${cards.length}`;
        const bar = $('#fcBar .progress__bar', v); if (bar) bar.style.setProperty('--p', known / FLASHCARDS.length);
        $('.flashcard__front', fc).setAttribute('aria-hidden', 'false'); $('.flashcard__back', fc).setAttribute('aria-hidden', 'true');
      };
      const flip = () => { flipped = !flipped; fc.classList.toggle('is-flipped', flipped); $('.flashcard__front', fc).setAttribute('aria-hidden', flipped); $('.flashcard__back', fc).setAttribute('aria-hidden', !flipped); };
      const move = (d) => { i = (i + d + cards.length) % cards.length; draw(); };
      fc.addEventListener('click', flip);
      $('[data-prev]', v).addEventListener('click', () => move(-1));
      $('[data-next]', v).addEventListener('click', () => move(1));
      $('[data-know]', v).addEventListener('click', () => { state.flash.known[cid(cards[i])] = 1; save(); checkAchievements(); move(1); });
      $('[data-review]', v).addEventListener('click', () => { delete state.flash.known[cid(cards[i])]; save(); move(1); });
      $('[data-shuffle]', v).addEventListener('click', () => { cards = shuffle(cards); i = 0; draw(); toast({ title: 'Deck shuffled', timeout: 1800 }); });
      $('[data-unknown]', v).addEventListener('click', () => { cards = cards.filter((c) => !state.flash.known[cid(c)]); i = 0; draw(); });
      $$('[data-deck]', v).forEach((b) => b.addEventListener('click', () => { sessionStorageSet('fcDeck', b.dataset.deck); router(); }));
      const onKey = (e) => {
        if (e.target.matches('input, textarea, select') || modalStack.length) return;
        if (e.key === 'ArrowRight') move(1);
        else if (e.key === 'ArrowLeft') move(-1);
        else if ((e.key === ' ' || e.key === 'Enter') && (document.activeElement === fc || document.activeElement === document.body || document.activeElement === $('#main'))) { e.preventDefault(); flip(); }
      };
      document.addEventListener('keydown', onKey);
      viewCleanup = () => document.removeEventListener('keydown', onKey);
      draw();
    }
  };
}

/* ---------- Calculators ---------- */
const CALCS = {
  cpm: { title: 'Cost per mile', icon: 'dollar', desc: 'Maintenance cost divided by miles driven for the same period.', formula: 'CPM = (parts + labor + tires + other) ÷ miles',
    inputs: [['parts', 'Parts', 6200, '$'], ['labor', 'Labor', 4900, '$'], ['tires', 'Tires', 2400, '$'], ['other', 'Other (tows, fees)', 500, '$'], ['miles', 'Miles driven', 125000, '', 'mi'], ['target', 'Your CPM target', 0.12, '$', '/mi', 0.01]],
    calc: (v) => {
      const total = v.parts + v.labor + v.tires + v.other; const cpm = v.miles > 0 ? total / v.miles : 0;
      const segs = [['Parts', v.parts, 'var(--ig-1)'], ['Labor', v.labor, 'var(--ig-2)'], ['Tires', v.tires, 'var(--ig-3)'], ['Other', v.other, 'var(--slate-400)']];
      const good = cpm <= v.target;
      return { big: `$${cpm.toFixed(3)}<small>/mile</small>`, rows: [...segs.map(([l, n]) => [l, v.miles ? `$${(n / v.miles).toFixed(3)}/mi` : '—']), ['Total cost', fmtMoney(total), true]], bar: segs.map(([l, n, c]) => [l, n / (total || 1), c]),
        verdict: v.miles ? [good ? 'good' : 'warn', good ? `At or below your $${v.target.toFixed(2)} target.` : `$${(cpm - v.target).toFixed(3)}/mi above target — review the largest cost category and units with outlier CPM.`] : null };
    } },
  downtime: { title: 'Downtime cost', icon: 'clock', desc: 'Estimate what a unit being down really costs — beyond the repair invoice.', formula: 'Cost = hours ÷ 24 × (revenue + driver + rental per day) + other',
    inputs: [['hours', 'Hours down', 30, '', 'h'], ['revenue', 'Revenue per truck per day', 1200, '$', '/day'], ['driver', 'Driver pay / layover per day', 150, '$', '/day'], ['rental', 'Rental / replacement per day', 0, '$', '/day'], ['other', 'Other (tow, late fees, recovery)', 450, '$']],
    calc: (v) => {
      const days = v.hours / 24; const rev = days * v.revenue; const drv = days * v.driver; const ren = days * v.rental; const total = rev + drv + ren + v.other;
      return { big: `${fmtMoney(total)}`, rows: [['Lost revenue', fmtMoney(rev)], ['Driver pay / layover', fmtMoney(drv)], ['Rental / replacement', fmtMoney(ren)], ['Other costs', fmtMoney(v.other)], ['Cost per hour down', fmtMoney(v.hours ? total / v.hours : 0, 2), true]],
        bar: [['Revenue', rev / (total || 1), 'var(--ig-1)'], ['Driver', drv / (total || 1), 'var(--ig-2)'], ['Rental', ren / (total || 1), 'var(--ig-3)'], ['Other', v.other / (total || 1), 'var(--warning-strong)']],
        verdict: ['warn', `Every hour you remove from this event saves about ${fmtMoney(v.hours ? total / v.hours : 0)}. Approval waits and pickup delays are often the easiest hours to cut.`] };
    } },
  compare: { title: 'Repair comparison', icon: 'bar', desc: 'Compare two vendors on total cost — including tow and downtime.', formula: 'Total = rate × hours + parts + fees + tow + days down × downtime cost/day',
    inputs: [['aRate', 'A · Labor rate', 185, '$', '/h'], ['aHours', 'A · Labor hours', 4, '', 'h', 0.5], ['aParts', 'A · Parts', 900, '$'], ['aTow', 'A · Tow + fees', 60, '$'], ['aDays', 'A · Days down', 1, '', 'days', 0.5],
      ['bRate', 'B · Labor rate', 150, '$', '/h'], ['bHours', 'B · Labor hours', 5, '', 'h', 0.5], ['bParts', 'B · Parts', 850, '$'], ['bTow', 'B · Tow + fees', 690, '$'], ['bDays', 'B · Days down', 3, '', 'days', 0.5], ['dt', 'Downtime cost per day', 900, '$', '/day']],
    calc: (v) => {
      const a = { inv: v.aRate * v.aHours + v.aParts + v.aTow, dt: v.aDays * v.dt }; a.total = a.inv + a.dt;
      const b = { inv: v.bRate * v.bHours + v.bParts + v.bTow, dt: v.bDays * v.dt }; b.total = b.inv + b.dt;
      const win = a.total <= b.total ? 'A' : 'B'; const diff = Math.abs(a.total - b.total);
      const col = (n, x) => `<div class="vcol ${win === n ? 'is-winner' : ''}"><h5>Vendor ${n} ${win === n ? '<span class="badge badge--success">Lower total</span>' : ''}</h5><div class="calc__rows"><div><span>Invoice</span><strong>${fmtMoney(x.inv)}</strong></div><div><span>Downtime</span><strong>${fmtMoney(x.dt)}</strong></div><div class="total"><span>Total</span><strong>${fmtMoney(x.total)}</strong></div></div></div>`;
      return { big: `${fmtMoney(diff)}<small>saved with ${win}</small>`, custom: `<div class="compare-cols">${col('A', a)}${col('B', b)}</div>`,
        verdict: [a.inv < b.inv !== (win === 'A') ? 'warn' : 'good', a.inv < b.inv !== (win === 'A') ? `The lower invoice is not the lower total — Vendor ${win} wins once downtime is included.` : `Vendor ${win} is cheaper on both invoice and total cost.`] };
    } },
  pm: { title: 'PM compliance', icon: 'list-check', desc: 'Share of preventive maintenance completed on time.', formula: 'Compliance = PMs completed on time ÷ PMs due × 100',
    inputs: [['due', 'PMs due in period', 36, ''], ['ontime', 'Completed on time', 33, ''], ['late', 'Completed late', 2, ''], ['target', 'Target', 95, '', '%']],
    calc: (v) => {
      const c = v.due ? (v.ontime / v.due) * 100 : 0; const missed = Math.max(0, v.due - v.ontime - v.late);
      const inconsistent = v.ontime + v.late > v.due;
      return { big: `${c.toFixed(1)}<small>%</small>`, rows: [['On time', `${v.ontime}`], ['Late', `${v.late}`], ['Not completed', `${missed}`], ['Gap to target', `${Math.max(0, v.target - c).toFixed(1)} pts`, true]],
        bar: [['On time', v.ontime / (v.due || 1), 'var(--success)'], ['Late', v.late / (v.due || 1), 'var(--warning-strong)'], ['Missed', missed / (v.due || 1), 'var(--critical)']],
        verdict: inconsistent ? ['bad', 'On-time + late exceeds PMs due — check your inputs.'] : [c >= v.target ? 'good' : 'warn', c >= v.target ? 'Meeting target. Keep scheduling PMs around home time and planned stops.' : `Below target. Find why PMs slip: dispatch release, shop capacity, or scheduling.`] };
    } },
  avail: { title: 'Fleet availability', icon: 'activity', desc: 'Share of available time units were ready to work.', formula: 'Availability = (units × days × 24 − downtime h) ÷ (units × days × 24) × 100',
    inputs: [['units', 'Units in fleet', 50, ''], ['days', 'Days in period', 30, '', 'days'], ['down', 'Total downtime hours', 1440, '', 'h']],
    calc: (v) => {
      const avail = v.units * v.days * 24; const a = avail ? ((avail - v.down) / avail) * 100 : 0; const eq = v.days ? v.down / (v.days * 24) : 0;
      return { big: `${a.toFixed(1)}<small>%</small>`, rows: [['Available hours', fmtNum(avail)], ['Downtime %', `${(100 - a).toFixed(1)}%`], ['Avg. units down at any time', eq.toFixed(1), true]],
        bar: [['Available', a / 100, 'var(--success)'], ['Down', (100 - a) / 100, 'var(--critical)']],
        verdict: [a >= 95 ? 'good' : 'warn', `On average, about ${eq.toFixed(1)} unit(s) were unavailable at any moment.`] };
    } },
  mtbf: { title: 'MTBF & MTTR', icon: 'shield', desc: 'Reliability (time between failures) and repair speed (time to repair).', formula: 'MTBF = operating h ÷ failures · MTTR = repair h ÷ repairs',
    inputs: [['op', 'Operating hours', 60000, '', 'h'], ['fail', 'Number of failures', 20, ''], ['rep', 'Total repair / downtime hours', 400, '', 'h'], ['n', 'Number of repairs', 20, '']],
    calc: (v) => {
      const mtbf = v.fail ? v.op / v.fail : 0; const mttr = v.n ? v.rep / v.n : 0; const ai = mtbf + mttr ? (mtbf / (mtbf + mttr)) * 100 : 0;
      return { big: `${fmtNum(mtbf)}<small>h MTBF</small>`, rows: [['MTTR', `${mttr.toFixed(1)} h`], ['Inherent availability', `${ai.toFixed(2)}%`, true]],
        verdict: ['good', 'Raise MTBF by eliminating root causes and improving PM; lower MTTR through faster approvals, parts sourcing and vendor choice.'] };
    } }
};
function calcHTML(id) {
  const c = CALCS[id];
  return `<div class="calc" data-calc="${id}"><div class="calc__head"><h2 style="font-size:var(--fs-xl)">${esc(c.title)}</h2><p>${esc(c.desc)}</p></div>
    <div class="calc__grid"><form class="calc__inputs" onsubmit="return false" aria-label="${esc(c.title)} inputs">${c.inputs.map(([k, label, val, pre, suf, step]) => `<div class="field"><label for="c-${id}-${k}">${esc(label)}</label><div class="input-affix">${pre ? `<span class="pre">${pre}</span>` : ''}<input class="input ${pre ? 'has-pre' : ''} ${suf ? 'has-suf' : ''} num" type="number" inputmode="decimal" min="0" step="${step || 'any'}" id="c-${id}-${k}" data-k="${k}" value="${val}">${suf ? `<span class="suf">${suf}</span>` : ''}</div></div>`).join('')}</form>
    <div class="calc__out" aria-live="polite"></div></div></div>`;
}
function mountCalc(el) {
  const id = el.dataset.calc; const c = CALCS[id]; const out = $('.calc__out', el);
  const run = (user) => {
    const v = {}; $$('input', el).forEach((i) => { v[i.dataset.k] = Math.max(0, parseFloat(i.value) || 0); });
    const r = c.calc(v);
    out.innerHTML = `<span class="eyebrow">Result</span><div class="calc__big ${user ? 'is-updated' : ''}">${r.big}</div>
      ${r.bar ? `<div class="stackbar" aria-hidden="true">${r.bar.map(([l, f, col]) => `<span style="flex-grow:${Math.max(f, 0)};background:${col}"></span>`).join('')}</div><div class="legend">${r.bar.map(([l, f, col]) => `<span><i style="background:${col}"></i>${l} ${pct(f)}%</span>`).join('')}</div>` : ''}
      ${r.custom || ''}${r.rows ? `<div class="calc__rows">${r.rows.map(([l, val, tot]) => `<div class="${tot ? 'total' : ''}"><span>${l}</span><strong>${val}</strong></div>`).join('')}</div>` : ''}
      ${r.verdict ? `<div class="verdict verdict--${r.verdict[0]}">${icon(r.verdict[0] === 'good' ? 'check-circle' : r.verdict[0] === 'warn' ? 'info' : 'alert')}<span>${r.verdict[1]}</span></div>` : ''}
      <div class="calc__formula">${esc(c.formula)}</div>`;
    if (user && !state.calcUsed[id]) { state.calcUsed[id] = 1; save(); checkAchievements(); }
  };
  el.addEventListener('input', () => run(true));
  run(false);
}
function viewCalculators(cid) {
  const cur = CALCS[cid] ? cid : 'cpm';
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('calc', 'icon--sm')} Practice Lab`, title: 'Calculators', text: 'Numbers drive fleet decisions. Change any input — results update instantly.' })}
    <div class="calc-layout"><nav class="calc-nav" aria-label="Calculators">${Object.entries(CALCS).map(([k, c]) => `<button type="button" data-cid="${k}" aria-current="${k === cur}">${icon(c.icon)} ${esc(c.title)}</button>`).join('')}</nav><div id="calcStage">${calcHTML(cur)}</div></div></div>`;
  return {
    html, title: 'Calculators', nav: 'calculators', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Calculators']],
    after: (v) => {
      mountCalc($('[data-calc]', v));
      $$('[data-cid]', v).forEach((b) => b.addEventListener('click', () => {
        $$('[data-cid]', v).forEach((x) => x.setAttribute('aria-current', x === b));
        const st = $('#calcStage', v); st.innerHTML = calcHTML(b.dataset.cid); st.firstElementChild.classList.add('anim-fade-in'); mountCalc($('[data-calc]', st));
        history.replaceState(null, '', `#/calculators/${b.dataset.cid}`);
      }));
    }
  };
}

/* ---------- Fleet board ---------- */
const STATUS_COLOR = { 'Active': 'var(--success)', 'In Shop': 'var(--primary)', 'Waiting Parts': 'var(--warning-strong)', 'Roadside': 'var(--critical)', 'Out of Service': 'var(--critical)' };
function pmStatus(u) {
  if (u.pmLeft < 0) return ['Overdue', 'critical'];
  if (u.pmLeft <= u.pmInt * 0.05) return ['Due', 'warning'];
  if (u.pmLeft <= u.pmInt * 0.15) return ['Due soon', 'info'];
  return ['OK', 'success'];
}
const pmText = (u) => (u.pmLeft < 0 ? `${fmtNum(-u.pmLeft)} ${u.pmUnit} over` : `${fmtNum(u.pmLeft)} ${u.pmUnit} left`);
function fleetBoardHTML() {
  const down = FLEET.filter((u) => u.status !== 'Active');
  const overdue = FLEET.filter((u) => pmStatus(u)[0] === 'Overdue').length;
  const dueSoon = FLEET.filter((u) => ['Due', 'Due soon'].includes(pmStatus(u)[0])).length;
  const dt = FLEET.reduce((a, u) => a + u.down, 0);
  const rep = FLEET.filter((u) => u.repeats >= 2).length;
  const avail = ((FLEET.length - down.length) / FLEET.length) * 100;
  return `<div class="fleet-board">
    <div class="kpis stagger">
      <div class="kpi"><div class="kpi__label">${icon('truck')} Units available</div><div class="kpi__value">${FLEET.length - down.length}<small> / ${FLEET.length}</small></div><div class="kpi__delta">${avail.toFixed(0)}% of board</div></div>
      <div class="kpi kpi--critical"><div class="kpi__label">${icon('alert')} Down now</div><div class="kpi__value">${down.length}</div><div class="kpi__delta down">${down.filter((u) => u.status === 'Roadside').length} roadside</div></div>
      <div class="kpi"><div class="kpi__label">${icon('list-check')} PM overdue / due</div><div class="kpi__value">${overdue}<small> / ${dueSoon}</small></div><div class="kpi__delta ${overdue ? 'down' : ''}">${overdue ? 'Action needed' : 'On track'}</div></div>
      <div class="kpi"><div class="kpi__label">${icon('clock')} Downtime MTD</div><div class="kpi__value">${dt}<small> h</small></div><div class="kpi__delta">across ${FLEET.filter((u) => u.down).length} units</div></div>
      <div class="kpi"><div class="kpi__label">${icon('rotate')} Repeat flags</div><div class="kpi__value">${rep}</div><div class="kpi__delta ${rep ? 'down' : ''}">≥2 repeats in 90 days</div></div>
    </div>
    <div class="toolbar" role="search">
      <div class="input-group"><label class="sr-only" for="fleetQ">Search units</label>${icon('search')}<input class="input" id="fleetQ" type="search" placeholder="Search unit, location, issue…" autocomplete="off"></div>
      <label class="sr-only" for="fleetStatus">Status</label><select class="select" id="fleetStatus"><option value="all">All statuses</option>${Object.keys(STATUS_COLOR).map((s) => `<option>${s}</option>`).join('')}<option value="down">Not active</option></select>
      <label class="sr-only" for="fleetType">Type</label><select class="select" id="fleetType"><option value="all">Tractors &amp; trailers</option><option>Tractor</option><option>Trailer</option></select>
      <label class="sr-only" for="fleetPm">PM status</label><select class="select" id="fleetPm"><option value="all">Any PM status</option><option>Overdue</option><option>Due</option><option>Due soon</option><option>OK</option></select>
      <button type="button" class="btn" data-refresh>${icon('rotate')} Refresh</button>
    </div>
    <p class="small muted mb-2" data-count aria-live="polite"></p>
    <div class="table-wrap fleet-table-wrap"><table class="table fleet-table"><caption class="sr-only">Fleet units — select a row for details</caption><thead><tr>
      ${[['unit', 'Unit'], ['status', 'Status'], ['loc', 'Location'], ['issue', 'Open issue'], ['pmLeft', 'PM'], ['down', 'Downtime'], ['repeats', 'Repeats'], ['etr', 'ETR']].map(([k, l]) => `<th class="sortable" data-sort="${k}" aria-sort="none"><button type="button">${l}${icon('chev-d')}</button></th>`).join('')}
    </tr></thead><tbody></tbody></table></div>
    <div class="fleet-cards"></div>
  </div>`;
}
function mountFleet(el) {
  const fs = { q: '', status: 'all', type: 'all', pm: 'all', sort: 'unit', dir: 1 };
  const tbody = $('tbody', el); const cards = $('.fleet-cards', el);
  const rowHTML = (u) => {
    const [pmS, pmK] = pmStatus(u); const used = clamp(1 - u.pmLeft / u.pmInt, 0, 1);
    return `<tr tabindex="0" data-unit="${u.unit}">
      <td><span class="unit">${u.unit}</span><br><span class="xs muted">${u.spec}</span></td>
      <td><span class="status ${u.status === 'Roadside' ? 'status--live' : ''}" style="--c:${STATUS_COLOR[u.status]}"><span class="status__dot"></span>${u.status}</span></td>
      <td>${esc(u.loc)}</td><td style="min-width:200px">${esc(u.issue)}</td>
      <td><div class="pm-meter">${progressBar(used, { cls: 'progress--sm', color: `var(--${pmK === 'success' ? 'success' : pmK === 'info' ? 'primary' : pmK === 'warning' ? 'warning-strong' : 'critical'})`, label: 'PM interval used' })}<span class="badge badge--${pmK}">${pmS}</span></div><span class="xs muted">${pmText(u)}</span></td>
      <td class="num">${u.down} h</td><td class="num">${u.repeats >= 2 ? `<span class="badge badge--critical">${u.repeats}</span>` : u.repeats}</td><td class="mono xs">${esc(u.etr)}</td></tr>`;
  };
  const cardHTML = (u) => {
    const [pmS, pmK] = pmStatus(u);
    return `<button type="button" class="unit-card card--hover" data-unit="${u.unit}"><div class="unit-card__top"><span class="mono" style="font-weight:600;color:var(--text)">${u.unit}</span><span class="status ${u.status === 'Roadside' ? 'status--live' : ''}" style="--c:${STATUS_COLOR[u.status]}"><span class="status__dot"></span>${u.status}</span></div>
      <p class="small mt-2" style="color:var(--text-2)">${esc(u.issue)}</p>
      <dl><div><dt>Location</dt><dd>${esc(u.loc)}</dd></div><div><dt>PM</dt><dd><span class="badge badge--${pmK}">${pmS}</span></dd></div><div><dt>Downtime</dt><dd>${u.down} h</dd></div><div><dt>Repeats</dt><dd>${u.repeats}</dd></div></dl></button>`;
  };
  const filtered = () => {
    const q = fs.q.toLowerCase();
    return FLEET.filter((u) => (!q || `${u.unit} ${u.loc} ${u.issue} ${u.spec} ${u.vendor}`.toLowerCase().includes(q))
      && (fs.status === 'all' || (fs.status === 'down' ? u.status !== 'Active' : u.status === fs.status))
      && (fs.type === 'all' || u.type === fs.type)
      && (fs.pm === 'all' || pmStatus(u)[0] === fs.pm))
      .sort((a, b) => { const x = a[fs.sort], y = b[fs.sort]; return (typeof x === 'number' ? x - y : String(x).localeCompare(String(y))) * fs.dir; });
  };
  const draw = () => {
    const list = filtered();
    $('[data-count]', el).textContent = `Showing ${list.length} of ${FLEET.length} units`;
    if (!list.length) {
      tbody.innerHTML = `<tr><td colspan="8">${stateBlock({ ic: 'filter', title: 'No units match', text: 'Try clearing a filter or searching for a different unit.', action: '<button type="button" class="btn btn--sm" data-clear>Clear filters</button>' })}</td></tr>`;
      cards.innerHTML = stateBlock({ ic: 'filter', title: 'No units match', text: 'Try clearing a filter.', action: '<button type="button" class="btn btn--sm" data-clear>Clear filters</button>' });
      $$('[data-clear]', el).forEach((b) => b.addEventListener('click', clear));
      return;
    }
    tbody.innerHTML = list.map(rowHTML).join('');
    cards.innerHTML = list.map(cardHTML).join('');
    $$('th[data-sort]', el).forEach((th) => th.setAttribute('aria-sort', th.dataset.sort === fs.sort ? (fs.dir > 0 ? 'ascending' : 'descending') : 'none'));
  };
  const clear = () => { fs.q = ''; fs.status = fs.type = fs.pm = 'all'; $('#fleetQ', el).value = ''; $('#fleetStatus', el).value = 'all'; $('#fleetType', el).value = 'all'; $('#fleetPm', el).value = 'all'; draw(); };
  $('#fleetQ', el).addEventListener('input', (e) => { fs.q = e.target.value; draw(); });
  $('#fleetStatus', el).addEventListener('change', (e) => { fs.status = e.target.value; draw(); });
  $('#fleetType', el).addEventListener('change', (e) => { fs.type = e.target.value; draw(); });
  $('#fleetPm', el).addEventListener('change', (e) => { fs.pm = e.target.value; draw(); });
  $$('th[data-sort] button', el).forEach((b) => b.addEventListener('click', () => { const k = b.parentElement.dataset.sort; fs.dir = fs.sort === k ? -fs.dir : (typeof FLEET[0][k] === 'number' ? -1 : 1); fs.sort = k; draw(); }));
  const openUnit = (id) => {
    const u = FLEET.find((x) => x.unit === id); if (!u) return;
    const [pmS, pmK] = pmStatus(u);
    const actions = [];
    if (u.status === 'Roadside') actions.push(['critical', 'Confirm driver safety and vendor ETA; update dispatch.']);
    if (u.status === 'In Shop' || u.status === 'Waiting Parts') actions.push(['info', `Follow up with ${u.vendor} on ETR ${u.etr}.`]);
    if (u.status === 'Out of Service') actions.push(['critical', 'Do not dispatch. Complete required inspection/repair first.']);
    if (pmS === 'Overdue') actions.push(['critical', 'PM overdue — schedule with dispatch this week; escalate if blocked.']);
    else if (pmS === 'Due' || pmS === 'Due soon') actions.push(['warning', 'Plan PM around upcoming loads or home time.']);
    if (u.repeats >= 2) actions.push(['critical', 'Repeat failures — open a root-cause review and check warranty on recent repairs.']);
    if (!actions.length) actions.push(['success', 'No action needed. Keep monitoring.']);
    openModal({
      title: `<span class="mono">${u.unit}</span> <span class="muted" style="font-weight:400;font-size:var(--fs-md)">${u.spec}</span>`, size: 'modal--lg',
      body: `<div class="grid grid--2" style="gap:var(--sp-6)"><div>
        <dl class="case-file" style="border:0"><div class="case-file__head">${icon('truck')} Unit details</div><dl>
        <dt>Status</dt><dd><span class="status" style="--c:${STATUS_COLOR[u.status]}"><span class="status__dot"></span>${u.status}</span></dd>
        <dt>Location</dt><dd>${esc(u.loc)}</dd>
        ${u.type === 'Tractor' ? `<dt>Odometer</dt><dd class="mono">${fmtNum(u.miles)} mi</dd>` : ''}${u.hours ? `<dt>${u.type === 'Trailer' ? 'Reefer hours' : 'Engine hours'}</dt><dd class="mono">${fmtNum(u.hours)}</dd>` : ''}
        <dt>PM status</dt><dd><span class="badge badge--${pmK}">${pmS}</span> <span class="xs muted">${pmText(u)}</span></dd>
        <dt>Open issue</dt><dd>${esc(u.issue)}</dd><dt>Vendor</dt><dd>${esc(u.vendor)}</dd><dt>ETR</dt><dd class="mono">${esc(u.etr)}</dd>
        <dt>Downtime MTD</dt><dd class="mono">${u.down} h</dd><dt>Maint. cost MTD</dt><dd class="mono">${fmtMoney(u.cost)}</dd><dt>Repeats (90 d)</dt><dd>${u.repeats}</dd></dl></dl></div>
        <div><h3 class="mb-4" style="font-size:var(--fs-md)">Recommended actions</h3><div class="stack-sm">${actions.map(([k, t]) => `<div class="verdict verdict--${k === 'critical' ? 'bad' : k === 'success' ? 'good' : 'warn'}">${icon(k === 'critical' ? 'alert' : k === 'success' ? 'check-circle' : 'info')}<span>${esc(t)}</span></div>`).join('')}</div>
        <h3 class="mt-6 mb-4" style="font-size:var(--fs-md)">Repair history</h3><ul class="history">${u.history.map(([d, t]) => `<li><time>${d}</time><p>${esc(t)}</p></li>`).join('')}</ul></div></div>`,
      foot: `<button class="btn btn--primary" data-close>Done</button>`
    });
  };
  el.addEventListener('click', (e) => { const r = e.target.closest('[data-unit]'); if (r) openUnit(r.dataset.unit); });
  el.addEventListener('keydown', (e) => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('tr[data-unit]')) { e.preventDefault(); openUnit(e.target.dataset.unit); } });
  $('[data-refresh]', el).addEventListener('click', (e) => {
    const btn = e.currentTarget; btn.disabled = true; btn.setAttribute('aria-busy', 'true');
    tbody.innerHTML = Array.from({ length: 6 }, () => `<tr><td colspan="8"><div class="skeleton skeleton--row" style="margin:0"></div></td></tr>`).join('');
    cards.innerHTML = Array.from({ length: 3 }, () => '<div class="skeleton skeleton--card"></div>').join('');
    $('[data-count]', el).textContent = 'Syncing telematics…';
    setTimeout(() => { draw(); btn.disabled = false; btn.removeAttribute('aria-busy'); toast({ kind: 'success', title: 'Fleet data synced', text: `${FLEET.length} units updated.`, timeout: 2200 }); }, 650);
  });
  draw();
}
function viewFleetPage() {
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('truck', 'icon--sm')} Practice Lab`, title: 'Fleet Board', text: 'A live-style view of a fictional fleet. Filter, sort and open units to decide what needs attention first.', right: `<span class="badge badge--success badge--dot badge--live">Live demo data</span>` })}<div data-widget="fleet"></div></div>`;
  return { html, title: 'Fleet Board', nav: 'fleet', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Fleet Board']] };
}

/* ---------- Widgets (embeddable in lessons) ---------- */
const TRUCK_PARTS = [
  { n: 1, x: 70, y: 168, name: 'Engine', sys: 'Powertrain', text: 'The diesel engine produces power. Watch for warning lamps, power loss, smoke, abnormal noise, leaks and oil pressure warnings.', ask: 'Any lamps or messages? Loss of power? Smoke or noise?' },
  { n: 2, x: 34, y: 150, name: 'Cooling system', sys: 'Powertrain', text: 'Radiator, coolant, water pump, thermostat, fan and hoses. Overheating can destroy an engine quickly.', ask: 'Temperature gauge? Steam? Sweet smell? Coolant leaks?' },
  { n: 3, x: 128, y: 206, name: 'Transmission', sys: 'Powertrain', text: 'Transfers engine power through gears. Many trucks use automated manual transmissions (AMTs).', ask: 'Won\'t shift? Grinding? Stuck in gear? Messages on display?' },
  { n: 4, x: 176, y: 200, name: 'Fuel tank & system', sys: 'Powertrain', text: 'Tanks, lines, filters, pumps and injectors deliver diesel to the engine.', ask: 'Fuel leak? Hard starting? Loss of power after fueling?' },
  { n: 5, x: 214, y: 176, name: 'Aftertreatment (DOC/DPF/SCR)', sys: 'Emissions', text: 'Cleans the exhaust. The DPF traps soot; SCR uses DEF to reduce NOx. Faults often cause derates.', ask: 'DPF or DEF lamp? Speed limited? Regen messages?' },
  { n: 6, x: 252, y: 34, name: 'Exhaust stack', sys: 'Emissions', text: 'Carries treated exhaust away from the cab.', ask: 'Unusual smoke color? Exhaust leak smell in the cab?' },
  { n: 7, x: 282, y: 218, name: 'Driveshaft & differential', sys: 'Powertrain', text: 'Carry power to the drive axles and allow wheels to turn at different speeds in turns.', ask: 'Vibration? Clunk when accelerating? Whining? Leaks?' },
  { n: 8, x: 94, y: 262, name: 'Steering & steer tires', sys: 'Chassis', text: 'Steering gear, linkage and front (steer) tires. Always safety-critical.', ask: 'Pulling? Loose or hard steering? Vibration in steering wheel?' },
  { n: 9, x: 238, y: 262, name: 'Air brakes', sys: 'Chassis', text: 'Compressed air applies brakes at every wheel through brake chambers. Spring brakes apply if air pressure is lost.', ask: 'Low-air warning? Hissing? Brakes dragging or smoking? Pulling when braking?' },
  { n: 10, x: 196, y: 128, name: 'Electrical & batteries', sys: 'Electrical', text: 'Batteries, alternator, starter and wiring. Powers lighting, electronics and the trailer via the 7-way cord.', ask: 'No-start? Dim lights? Battery or charging warnings?' },
  { n: 11, x: 300, y: 196, name: 'Fifth wheel', sys: 'Coupling', text: 'Couples the tractor to the trailer\'s kingpin. Coupling problems are safety-critical.', ask: 'Won\'t lock? Unusual movement between tractor and trailer?' },
  { n: 12, x: 346, y: 176, name: 'Glad hands & kingpin', sys: 'Trailer', text: 'Air couplers connect trailer brakes; the kingpin locks into the fifth wheel.', ask: 'Air leak at connections? Coupling concerns?' },
  { n: 13, x: 420, y: 248, name: 'Landing gear', sys: 'Trailer', text: 'Legs that support the trailer\'s front when uncoupled.', ask: 'Won\'t crank? Bent legs?' },
  { n: 14, x: 792, y: 200, name: 'Trailer suspension & tires', sys: 'Trailer', text: 'Air-ride or spring suspension and trailer tandem tires.', ask: 'Leaning? Air leak? Flat, bulge or exposed cords?' },
  { n: 15, x: 874, y: 150, name: 'Trailer lights', sys: 'Trailer', text: 'Brake, turn, marker and clearance lights powered from the tractor.', ask: 'Which lights are out? Both sides? Connector damage?' }
];
function truckWidgetHTML() {
  return `<div class="diagram"><div class="diagram__stage">
    <svg class="truck" viewBox="0 0 900 300" role="group" aria-label="Interactive tractor-trailer diagram. Select a numbered hotspot to learn about each system.">
      <line class="ground" x1="0" y1="288" x2="900" y2="288"/>
      <rect class="body" x="330" y="40" width="552" height="170" rx="4"/>
      <line class="line" x1="330" y1="80" x2="882" y2="80" opacity=".25"/>
      <rect class="body-dark" x="330" y="210" width="552" height="10"/>
      <rect class="body-dark" x="416" y="220" width="8" height="52"/><rect class="body-dark" x="406" y="270" width="28" height="6" rx="2"/>
      <rect class="body-dark" x="738" y="214" width="100" height="16" rx="3"/>
      <rect x="872" y="140" width="10" height="20" rx="2" fill="var(--critical)"/>
      <rect class="body" x="20" y="130" width="112" height="92" rx="14"/>
      <path class="body" d="M118 222 V84 Q118 50 150 50 H238 Q248 50 248 60 V222 Z"/>
      <path class="glass" d="M126 118 L138 66 Q140 60 148 60 H178 V118 Z"/>
      <rect class="glass" x="192" y="66" width="40" height="36" rx="4"/>
      <rect class="body-dark" x="246" y="22" width="12" height="130" rx="4"/>
      <rect class="body-dark" x="18" y="218" width="320" height="14" rx="3"/>
      <rect class="body-dark" x="146" y="186" width="58" height="30" rx="12"/>
      <rect class="body-dark" x="206" y="160" width="36" height="52" rx="6"/>
      <rect class="body-dark" x="276" y="202" width="58" height="10" rx="3"/>
      <rect class="body-dark" x="20" y="146" width="10" height="60" rx="3"/>
      ${[[94, 262], [238, 262], [300, 262], [764, 262], [822, 262]].map(([cx, cy]) => `<circle class="tire" cx="${cx}" cy="${cy}" r="25"/><circle class="hub" cx="${cx}" cy="${cy}" r="9"/>`).join('')}
      ${TRUCK_PARTS.map((p) => `<g class="hotspot" tabindex="0" role="button" data-part="${p.n}" aria-label="${p.n}. ${esc(p.name)}"><circle class="hs-pulse" cx="${p.x}" cy="${p.y}" r="13"/><circle class="hs-core" cx="${p.x}" cy="${p.y}" r="13"/><text x="${p.x}" y="${p.y + 4}" text-anchor="middle">${p.n}</text></g>`).join('')}
    </svg></div>
    <div class="diagram__panel" aria-live="polite"><div class="row" style="gap:12px"><span class="state-block__icon" style="width:40px;height:40px;margin:0">${icon('truck')}</span><div><strong>Select a numbered point</strong><p class="small">Explore the ${TRUCK_PARTS.length} major systems. <span data-seen>0</span> of ${TRUCK_PARTS.length} explored.</p></div></div></div>
    <div class="diagram__chips" role="group" aria-label="Systems list">${TRUCK_PARTS.map((p) => `<button type="button" class="chip" data-part="${p.n}" aria-pressed="false">${p.n}. ${esc(p.name)}</button>`).join('')}</div></div>`;
}
function mountTruck(el) {
  const seen = new Set(); const panel = $('.diagram__panel', el);
  const pick = (n) => {
    const p = TRUCK_PARTS.find((x) => x.n === n); seen.add(n);
    $$('.hotspot', el).forEach((h) => { const k = +h.dataset.part; h.classList.toggle('is-active', k === n); h.classList.toggle('is-seen', seen.has(k)); });
    $$('.chip[data-part]', el).forEach((c) => c.setAttribute('aria-pressed', +c.dataset.part === n));
    panel.innerHTML = `<div><div class="row row--between row--wrap"><h4 style="font-size:var(--fs-lg)">${p.n}. ${esc(p.name)}</h4><span class="badge badge--info">${esc(p.sys)}</span></div>
      <p class="mt-2">${esc(p.text)}</p><div class="callout callout--tip mt-4"><span class="callout__icon">${icon('message')}</span><div><h4>What to ask the driver</h4><p>${esc(p.ask)}</p></div></div>
      <p class="xs muted mt-3">${seen.size} of ${TRUCK_PARTS.length} explored${seen.size === TRUCK_PARTS.length ? ' — all systems covered.' : ''}</p></div>`;
  };
  el.addEventListener('click', (e) => { const t = e.target.closest('[data-part]'); if (t) pick(+t.dataset.part); });
  el.addEventListener('keydown', (e) => { const t = e.target.closest('.hotspot'); if (t && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); pick(+t.dataset.part); } });
}

const WORKFLOW = [
  ['Driver reports issue', 'The issue arrives by phone, message, DVIR, telematics alert or from dispatch. Open a case immediately and note the time received.', 'Driver → Coordinator', 'Waiting to "see if it goes away" before opening a case.'],
  ['Gather information', 'Use the seven questions: what, when, where, trend, safety, lights, performance. Capture unit, location, mileage and load status.', 'Coordinator', 'Recording guesses as facts.'],
  ['Determine urgency', 'Is it safety-critical? Can the unit move safely? What is the load and deadline impact?', 'Coordinator', 'Treating a brake complaint like a routine repair.'],
  ['Find appropriate vendor', 'Match the problem to capability: mobile service, tire service, shop, dealer or tow. Consider availability, parts and distance.', 'Coordinator', 'Choosing the closest shop without checking availability.'],
  ['Coordinate arrival', 'Confirm vendor ETA, exact location, driver contact and payment/PO details.', 'Coordinator · Vendor · Driver', 'Vendor arrives at the wrong exit.'],
  ['Obtain diagnosis', 'Send complete complaint details and relevant history. Ask for cause, plan, estimate and ETR.', 'Technician → Coordinator', 'Shop starts from scratch because history wasn\'t shared.'],
  ['Coordinate repair per procedure', 'Approve within your limits, route larger estimates, check warranty, issue PO.', 'Coordinator · Fleet manager', 'Approval sits overnight.'],
  ['Track progress', 'Scheduled follow-ups at every stage. No case sits without a next step.', 'Coordinator', 'Silent cases that nobody chases.'],
  ['Communicate ETA', 'Update dispatch and driver with ETR, confidence and impact — before being asked.', 'Coordinator → Dispatch · Driver', 'Optimistic ETRs that slip without warning.'],
  ['Confirm repair', 'Technician and driver confirm the complaint is resolved (road test where appropriate).', 'Technician · Driver', 'Truck leaves, problem returns 50 miles later.'],
  ['Document', 'Times, complaint/cause/correction, parts, labor, costs, RO/invoice/PO, approvals, downtime.', 'Coordinator', '"Truck fixed" as the only note.'],
  ['Close case', 'Close only after confirmation and documentation. Flag repeats for review.', 'Coordinator', 'Closing before the driver has the unit.']
];
function workflowHTML() {
  return `<div class="wf card"><div class="card__head"><h3>${icon('route')} The maintenance workflow</h3><span class="small muted" data-wf-count>1 of 12 explored</span></div>
    <div class="card__body"><div class="wf__steps" role="tablist" aria-label="Workflow steps">${WORKFLOW.map((w, i) => `<button type="button" class="wf__step ${i === 0 ? 'is-seen' : ''}" role="tab" aria-selected="${i === 0}" data-wf="${i}" aria-label="Step ${i + 1}: ${esc(w[0])}"><span>${i + 1}</span></button>`).join('')}</div>
    <div class="progress progress--sm mt-4"><div class="progress__bar" data-wf-bar style="--p:${1 / 12}"></div></div>
    <div class="wf__detail" data-wf-detail role="tabpanel"></div>
    <div class="row row--between mt-4"><button type="button" class="btn btn--sm" data-wf-prev>${icon('arrow-l')} Previous</button><button type="button" class="btn btn--sm btn--primary" data-wf-next>Next ${icon('arrow-r')}</button></div></div></div>`;
}
function mountWorkflow(el) {
  let cur = 0; const seen = new Set([0]);
  const draw = () => {
    const [title, text, who, pit] = WORKFLOW[cur];
    $$('[data-wf]', el).forEach((b) => { const k = +b.dataset.wf; b.setAttribute('aria-selected', k === cur); b.classList.toggle('is-seen', seen.has(k)); });
    $('[data-wf-detail]', el).innerHTML = `<div class="anim-fade-in"><span class="eyebrow">Step ${cur + 1} of 12</span><h4 style="font-size:var(--fs-lg);margin:4px 0 8px">${esc(title)}</h4><p>${esc(text)}</p>
      <div class="row row--wrap mt-3"><span class="badge badge--info">${icon('users')} ${esc(who)}</span></div>
      <div class="callout callout--warning mt-4"><span class="callout__icon">${icon('alert')}</span><div><h4>Common pitfall</h4><p>${esc(pit)}</p></div></div></div>`;
    $('[data-wf-bar]', el).style.setProperty('--p', seen.size / 12);
    $('[data-wf-count]', el).textContent = `${seen.size} of 12 explored`;
    $('[data-wf-prev]', el).disabled = cur === 0; $('[data-wf-next]', el).disabled = cur === 11;
  };
  el.addEventListener('click', (e) => {
    const s = e.target.closest('[data-wf]'); if (s) { cur = +s.dataset.wf; seen.add(cur); draw(); }
    if (e.target.closest('[data-wf-prev]') && cur > 0) { cur--; seen.add(cur); draw(); }
    if (e.target.closest('[data-wf-next]') && cur < 11) { cur++; seen.add(cur); draw(); }
  });
  draw();
}

function downtimeStackHTML() {
  return `<div class="card card--pad" data-dts><div class="row row--between row--wrap"><div><span class="eyebrow">Case study · T-108</span><h4 style="font-size:var(--fs-lg);margin-top:4px">Where did <span data-dt-total class="num">31</span> hours go?</h4></div>
    <label class="row small" style="cursor:pointer"><input type="checkbox" data-dt-fix style="width:18px;height:18px;accent-color:var(--primary)"> Apply coordinator fixes</label></div>
    <div class="stackbar mt-4" style="height:28px;border-radius:8px" data-dt-bar></div><div class="legend mt-3" data-dt-legend></div>
    <p class="small mt-4" data-dt-note></p></div>`;
}
function mountDowntimeStack(el) {
  const segs = [['Tow / vendor arrival', 2, 2, 'var(--ig-1)'], ['Waiting for shop', 9, 2, 'var(--warning-strong)'], ['Diagnosis', 2, 2, 'var(--steel-500)'], ['Approval wait', 11, 1, 'var(--critical)'], ['Parts', 1, 1, 'var(--ig-3)'], ['Repair', 4, 4, 'var(--success)'], ['Waiting for driver', 2, 0, 'var(--slate-400)']];
  const box = $('[data-dts]', el) || el;
  const draw = (fix) => {
    const vals = segs.map((s) => (fix ? s[2] : s[1])); const total = vals.reduce((a, b) => a + b, 0);
    const bar = $('[data-dt-bar]', box);
    if (!bar.children.length) bar.innerHTML = segs.map((s) => `<span style="background:${s[3]}" title="${s[0]}"></span>`).join('');
    Array.from(bar.children).forEach((c, i) => { c.style.flexGrow = vals[i]; });
    $('[data-dt-legend]', box).innerHTML = segs.map((s, i) => `<span><i style="background:${s[3]}"></i>${s[0]} · <strong class="num">${vals[i]}h</strong></span>`).join('');
    $('[data-dt-total]', box).textContent = total;
    $('[data-dt-note]', box).innerHTML = fix ? `<strong style="color:var(--success)">${31 - total} hours saved</strong> by choosing a shop with capacity, routing approval immediately (with after-hours coverage), and scheduling driver pickup before release.` : 'Only 7 of 31 hours were actual diagnosis and repair work. Toggle the fixes to see what the coordinator can control.';
  };
  $('[data-dt-fix]', box).addEventListener('change', (e) => draw(e.target.checked));
  draw(false);
}

function lifecycleHTML() {
  return `<div class="card card--pad" data-life><div class="row row--between row--wrap"><div><span class="eyebrow">Illustrative lifecycle</span><h4 style="font-size:var(--fs-lg);margin-top:4px">Annual maintenance cost vs. vehicle value</h4></div>
    <div class="legend"><span><i style="background:var(--critical)"></i>Maintenance cost / yr</span><span><i style="background:var(--primary)"></i>Estimated value</span></div></div>
    <svg viewBox="0 0 600 240" style="width:100%;height:auto;margin-top:12px" role="img" aria-label="Line chart: maintenance cost rises each year while vehicle value falls." data-life-svg></svg>
    <div class="field mt-4"><label for="lifeYear">Vehicle age: <strong data-life-year class="num">5</strong> years</label><input type="range" id="lifeYear" min="1" max="10" value="5" style="accent-color:var(--primary)"></div>
    <div class="grid grid--3 mt-4" data-life-out></div><p class="xs muted mt-3">Figures are illustrative only — actual costs depend on equipment, duty cycle and maintenance history.</p></div>`;
}
function mountLifecycle(el) {
  const cost = [4, 5, 6.5, 8, 10, 12.5, 15.5, 19, 23, 28]; const value = [120, 98, 82, 68, 56, 46, 38, 31, 25, 20];
  const W = 600, H = 240, pl = 44, pr = 16, pt = 12, pb = 28; const maxV = 130;
  const xs = (i) => pl + (i * (W - pl - pr)) / 9; const ys = (v) => pt + (1 - v / maxV) * (H - pt - pb);
  const line = (arr) => arr.map((v, i) => `${xs(i).toFixed(1)},${ys(v).toFixed(1)}`).join(' ');
  const svg = $('[data-life-svg]', el);
  svg.innerHTML = `${[0, 30, 60, 90, 120].map((v) => `<line x1="${pl}" x2="${W - pr}" y1="${ys(v)}" y2="${ys(v)}" stroke="var(--border)" stroke-width="1"/><text x="${pl - 8}" y="${ys(v) + 4}" text-anchor="end" font-size="11" fill="var(--muted)" font-family="var(--font-mono)">$${v}k</text>`).join('')}
    ${cost.map((_, i) => `<text x="${xs(i)}" y="${H - 8}" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="var(--font-mono)">${i + 1}</text>`).join('')}
    <polyline points="${line(value)}" fill="none" stroke="var(--primary)" stroke-width="2.5" pathLength="100" stroke-dasharray="100" style="--dash:100;animation:draw 1s var(--ease-out) both"/>
    <polyline points="${line(cost)}" fill="none" stroke="var(--critical)" stroke-width="2.5" pathLength="100" stroke-dasharray="100" style="--dash:100;animation:draw 1s .15s var(--ease-out) both"/>
    <g data-life-marker style="transition:transform var(--dur-4) var(--ease-out)"><line x1="0" x2="0" y1="${pt}" y2="${H - pb}" stroke="var(--text)" stroke-dasharray="3 4" opacity=".5"/><circle data-mc r="5" fill="var(--critical)" stroke="var(--surface)" stroke-width="2"/><circle data-mv r="5" fill="var(--primary)" stroke="var(--surface)" stroke-width="2"/></g>`;
  const draw = (yr) => {
    const i = yr - 1; const m = $('[data-life-marker]', el);
    m.style.transform = `translateX(${xs(i)}px)`;
    $('[data-mc]', el).setAttribute('cy', ys(cost[i])); $('[data-mv]', el).setAttribute('cy', ys(value[i]));
    $('[data-life-year]', el).textContent = yr;
    const ratio = cost[i] / value[i];
    $('[data-life-out]', el).innerHTML = `<div class="kpi"><div class="kpi__label">Maint. cost / yr</div><div class="kpi__value" style="font-size:1.35rem">$${cost[i]}k</div></div><div class="kpi"><div class="kpi__label">Est. value</div><div class="kpi__value" style="font-size:1.35rem">$${value[i]}k</div></div><div class="kpi ${ratio > 0.4 ? 'kpi--critical' : ''}"><div class="kpi__label">Cost ÷ value</div><div class="kpi__value" style="font-size:1.35rem">${pct(ratio)}%</div><div class="kpi__delta ${ratio > 0.4 ? 'down' : ''}">${ratio > 0.4 ? 'Replacement review zone' : 'Keep & maintain'}</div></div>`;
  };
  $('#lifeYear', el).addEventListener('input', (e) => draw(+e.target.value));
  draw(5);
}

const KPI_DATA = {
  May: { avail: 95.1, cpm: 0.118, pm: 93, repeat: 6.2, mtbf: 3420, mttr: 19.5, causes: { Aftertreatment: 120, Engine: 88, Brakes: 64, Tires: 48, Electrical: 40, Other: 30 } },
  June: { avail: 93.4, cpm: 0.131, pm: 86, repeat: 9.8, mtbf: 3050, mttr: 24.1, causes: { Aftertreatment: 190, Engine: 70, Brakes: 52, Tires: 44, Electrical: 38, Other: 36 } }
};
const KPI_VENDORS = [['Dealer C', 14, 22.5, 4, '+3%'], ['Shop B (Independent)', 21, 18.0, 14, '+11%'], ['Mobile A', 32, 3.1, 9, '+2%'], ['Fleet Center East', 11, 16.4, 5, '0%']];
function kpiHTML() {
  return `<div class="card" data-kpi><div class="card__head"><h3>${icon('bar')} Fleet KPI dashboard</h3><div class="tablist" role="tablist" aria-label="Period">${Object.keys(KPI_DATA).map((p, i) => `<button type="button" class="tab" role="tab" data-period="${p}" aria-selected="${i === 1}">${p}</button>`).join('')}</div></div><div class="card__body" data-kpi-body></div></div>`;
}
function mountKpi(el) {
  const body = $('[data-kpi-body]', el);
  const draw = (p) => {
    const d = KPI_DATA[p]; const prev = p === 'June' ? KPI_DATA.May : null;
    const delta = (k, better) => { if (!prev) return ''; const diff = d[k] - prev[k]; const good = better === 'up' ? diff >= 0 : diff <= 0; return `<div class="kpi__delta ${good ? 'up' : 'down'}">${diff > 0 ? '▲' : '▼'} ${Math.abs(diff).toFixed(k === 'cpm' ? 3 : 1)} vs May</div>`; };
    const maxC = Math.max(...Object.values(d.causes));
    $$('[data-period]', el).forEach((b) => b.setAttribute('aria-selected', b.dataset.period === p));
    body.innerHTML = `<div class="kpis">
      <div class="kpi"><div class="kpi__label">Availability</div><div class="kpi__value">${d.avail}<small>%</small></div>${delta('avail', 'up')}</div>
      <div class="kpi"><div class="kpi__label">Cost / mile</div><div class="kpi__value">$${d.cpm.toFixed(3)}</div>${delta('cpm', 'down')}</div>
      <div class="kpi"><div class="kpi__label">PM compliance</div><div class="kpi__value">${d.pm}<small>%</small></div>${delta('pm', 'up')}</div>
      <div class="kpi"><div class="kpi__label">Repeat rate</div><div class="kpi__value">${d.repeat}<small>%</small></div>${delta('repeat', 'down')}</div>
      <div class="kpi"><div class="kpi__label">MTBF</div><div class="kpi__value">${fmtNum(d.mtbf)}<small> h</small></div>${delta('mtbf', 'up')}</div>
      <div class="kpi"><div class="kpi__label">MTTR</div><div class="kpi__value">${d.mttr}<small> h</small></div>${delta('mttr', 'down')}</div></div>
      <div class="grid grid--2 mt-6" style="gap:var(--sp-6)">
        <div><h4 class="mb-4">Downtime hours by system</h4><div class="stack-sm">${Object.entries(d.causes).sort((a, b) => b[1] - a[1]).map(([k, v], i) => `<div class="score-bars__row" style="grid-template-columns:110px 1fr 48px"><span class="small">${k}</span>${progressBar(v / maxC, { color: i === 0 ? 'var(--critical)' : 'var(--steel-500)', label: k })}<span class="num small">${v}h</span></div>`).join('')}</div></div>
        <div><h4 class="mb-4">Vendor performance (${p})</h4><div class="table-wrap"><table class="table"><thead><tr><th>Vendor</th><th class="num">Jobs</th><th class="num">Avg TAT</th><th class="num">Comeback</th><th class="num">vs Est.</th></tr></thead><tbody>${KPI_VENDORS.map(([n, j, tat, cb, ve]) => `<tr><td><strong>${n}</strong></td><td class="num">${j}</td><td class="num">${tat}h</td><td class="num">${cb >= 10 ? `<span class="badge badge--critical">${cb}%</span>` : cb + '%'}</td><td class="num">${ve}</td></tr>`).join('')}</tbody></table></div></div>
      </div>
      ${prev ? `<div class="callout callout--warning mt-6"><span class="callout__icon">${icon('bulb')}</span><div><h4>Insights</h4><p>Aftertreatment downtime rose 58% (120 → 190 h) — T-120 alone logged 64 h. PM compliance fell 7 points and MTTR rose 4.6 h, consistent with approval delays. Shop B's 14% comeback rate is the highest on the board. Priorities: RCA on T-120, approval backup, vendor review with Shop B.</p></div></div>` : `<p class="small muted mt-6">Select June to compare against this baseline.</p>`}`;
  };
  $$('[data-period]', el).forEach((b) => b.addEventListener('click', () => draw(b.dataset.period)));
  draw('June');
}

const VENDORS = [['Dealer C', { time: 6, cost: 4, quality: 9, comm: 8, coverage: 7 }], ['Shop B (Independent)', { time: 8, cost: 8, quality: 5, comm: 5, coverage: 4 }], ['Mobile A', { time: 9, cost: 6, quality: 6, comm: 7, coverage: 9 }], ['Fleet Center East', { time: 7, cost: 7, quality: 8, comm: 8, coverage: 5 }]];
const CRIT = [['time', 'Repair time'], ['cost', 'Cost'], ['quality', 'Quality (comebacks)'], ['comm', 'Communication'], ['coverage', 'Coverage']];
function vendorScoreHTML() {
  return `<div class="card" data-vs><div class="card__head"><h3>${icon('star')} Vendor scorecard</h3><span class="small muted">Scores 0–10 · weights 0–5</span></div>
    <div class="card__body grid grid--2" style="gap:var(--sp-6)"><div class="stack">${CRIT.map(([k, l]) => `<div class="field"><label for="w-${k}" class="row row--between"><span>${l}</span><strong class="num" data-wv="${k}"></strong></label><input type="range" id="w-${k}" data-w="${k}" min="0" max="5" value="${{ time: 3, cost: 3, quality: 4, comm: 2, coverage: 2 }[k]}" style="accent-color:var(--primary)"></div>`).join('')}</div>
    <div><h4 class="mb-4">Weighted ranking</h4><ol class="stack-sm" style="list-style:none;padding:0" data-vs-out></ol></div></div>
    <div class="table-wrap" style="border-radius:0 0 var(--r-lg) var(--r-lg);border-width:1px 0 0"><table class="table"><thead><tr><th>Vendor</th>${CRIT.map(([, l]) => `<th class="num">${l}</th>`).join('')}</tr></thead><tbody>${VENDORS.map(([n, s]) => `<tr><td><strong>${n}</strong></td>${CRIT.map(([k]) => `<td class="num">${s[k]}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
}
function mountVendorScore(el) {
  const draw = () => {
    const w = {}; $$('[data-w]', el).forEach((i) => { w[i.dataset.w] = +i.value; $(`[data-wv="${i.dataset.w}"]`, el).textContent = i.value; });
    const sw = Object.values(w).reduce((a, b) => a + b, 0) || 1;
    const ranked = VENDORS.map(([n, s]) => [n, CRIT.reduce((a, [k]) => a + s[k] * w[k], 0) / sw]).sort((a, b) => b[1] - a[1]);
    $('[data-vs-out]', el).innerHTML = ranked.map(([n, sc], i) => `<li class="card card--pad-sm" style="${i === 0 ? 'border-color:var(--success)' : ''}"><div class="row row--between"><span><span class="mono muted">#${i + 1}</span> <strong>${n}</strong></span><span class="num" style="font-weight:600">${sc.toFixed(1)}</span></div>${progressBar(sc / 10, { cls: 'progress--sm mt-2', color: i === 0 ? 'var(--success)' : 'var(--steel-500)', label: n })}</li>`).join('');
  };
  el.addEventListener('input', draw); draw();
}

function mountWidgets(root) {
  $$('[data-widget]', root).forEach((el) => {
    if (el.dataset.mounted) return; el.dataset.mounted = '1';
    const w = el.dataset.widget;
    try {
      if (w === 'truck') { el.innerHTML = truckWidgetHTML(); mountTruck(el); }
      else if (w === 'workflow') { el.innerHTML = workflowHTML(); mountWorkflow(el); }
      else if (w === 'fleet') { el.innerHTML = fleetBoardHTML(); staggerChildren($('.stagger', el)); mountFleet(el); }
      else if (w === 'downtimeStack') { el.innerHTML = downtimeStackHTML(); mountDowntimeStack(el); }
      else if (w === 'lifecycle') { el.innerHTML = lifecycleHTML(); mountLifecycle(el); }
      else if (w === 'kpi') { el.innerHTML = kpiHTML(); mountKpi(el); }
      else if (w === 'invoice') { el.innerHTML = invoiceWidgetHTML(); mountInvoiceWidget(el); }
      else if (w === 'gauges') { el.innerHTML = gaugesHTML(); mountGauges(el); }
      else if (w === 'tires') { el.innerHTML = tiresHTML(); mountTires(el); }
      else if (w === 'exhaust') { el.innerHTML = exhaustHTML(); mountExhaust(el); }
      else if (w === 'vendorScore') { el.innerHTML = vendorScoreHTML(); mountVendorScore(el); }
      else if (w.startsWith('calc:')) { const id = w.slice(5); el.innerHTML = calcHTML(id); mountCalc($('[data-calc]', el)); }
      else if (w.startsWith('tree:')) { const tr = TREES[w.slice(5)]; el.innerHTML = treeHTML(tr); mountTree($('[data-tree]', el), tr); }
      else if (w.startsWith('scenario:')) { const s = SCENARIOS.find((x) => x.id === w.slice(9)); el.innerHTML = scenarioHTML(s); mountScenario($('[data-scen]', el), s); }
    } catch (err) {
      console.error('Widget failed:', w, err);
      el.innerHTML = stateBlock({ ic: 'alert', title: 'This interactive element could not load', text: 'Try reloading the page. The rest of the lesson is still available.', error: true });
    }
  });
}

/* ---------- Glossary ---------- */
const GL_CAT_ICON = { Components: 'wrench', Emissions: 'activity', Maintenance: 'list-check', Diagnostics: 'zap', Regulatory: 'shield', Operations: 'route', Finance: 'dollar', Documentation: 'file' };
function viewGlossary(termParam) {
  const cats = ['All', ...new Set(GLOSSARY.map((g) => g.cat))].sort((a, b) => (a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b)));
  const sorted = GLOSSARY.slice().sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }));
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const has = new Set(sorted.map((g) => g.term[0].toUpperCase()));
  const html = `<div class="page page--narrow">${pageHead({ eyebrow: `${icon('book', 'icon--sm')} Reference`, title: 'Maintenance Glossary', text: `${GLOSSARY.length} essential terms with definitions, plain-language explanations, real-world examples and related terms.` })}
    <div class="gl-toolbar">
      <div class="input-group gl-search"><label class="sr-only" for="glQ">Search glossary</label>${icon('search')}<input class="input" id="glQ" type="search" placeholder="Search terms, abbreviations or definitions…" autocomplete="off"></div>
      <div class="row row--wrap" role="group" aria-label="Filter by category">${cats.map((c) => `<button type="button" class="chip" data-cat="${c}" aria-pressed="${c === 'All'}">${c}</button>`).join('')}</div>
      <div class="gl-letters" role="group" aria-label="Jump to letter">${letters.map((l) => `<button type="button" data-letter="${l}" ${has.has(l) ? '' : 'disabled'} aria-pressed="false">${l}</button>`).join('')}</div>
    </div>
    <p class="small muted mb-4" data-gl-count aria-live="polite"></p>
    <div class="gl-list" data-gl-list></div></div>`;
  return {
    html, title: 'Glossary', nav: 'glossary', crumbs: [['Glossary']],
    after: (v) => {
      const gs = { q: '', cat: 'All', letter: '' };
      const list = $('[data-gl-list]', v);
      const hl = (s) => { const q = gs.q.trim(); if (!q) return esc(s); const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig'); return esc(s).replace(re, '<mark>$1</mark>'); };
      const itemHTML = (g) => {
        const pid = 'gl-' + g.term.replace(/[^a-z0-9]/gi, '');
        const acronym = /^[A-Z][A-Z /]+$/.test(g.term);
        return `<div class="gl-item" id="${pid}-item" data-term="${esc(g.term)}"><h3><button type="button" class="gl-item__head" aria-expanded="false" aria-controls="${pid}"><span class="gl-item__abbr" aria-hidden="true">${acronym ? esc(g.term) : icon(GL_CAT_ICON[g.cat] || 'book', 'icon--sm')}</span><span class="grow"><span class="gl-item__term">${hl(g.term)}</span><br><span class="gl-item__full">${hl(g.full)}</span></span><span class="badge badge--outline">${g.cat}</span>${icon('chev-d')}</button></h3>
          <div class="acc-panel" id="${pid}" role="region"><div><div class="acc-panel__inner">
            <div class="gl-detail"><div><h5>${icon('book')} Definition</h5><p>${hl(g.def)}</p></div><div><h5>${icon('bulb')} In plain terms</h5><p>${hl(g.simple)}</p></div><div><h5>${icon('truck')} Real-world example</h5><p>${hl(g.example)}</p></div></div>
            <div class="gl-related"><span class="xs muted" style="font-weight:600;text-transform:uppercase;letter-spacing:.08em">Related</span>${g.related.map((r) => { const rg = findTerm(r); return rg ? `<button type="button" class="chip" data-goto="${esc(rg.term)}">${esc(rg.term)}</button>` : `<span class="chip" style="opacity:.6">${esc(r)}</span>`; }).join('')}</div>
          </div></div></div></div>`;
      };
      const draw = () => {
        const q = gs.q.trim().toLowerCase();
        const res = sorted.filter((g) => (gs.cat === 'All' || g.cat === gs.cat) && (!gs.letter || g.term[0].toUpperCase() === gs.letter) && (!q || `${g.term} ${g.full} ${g.def} ${g.simple}`.toLowerCase().includes(q)));
        $('[data-gl-count]', v).textContent = `${res.length} term${res.length === 1 ? '' : 's'}`;
        list.innerHTML = res.length ? res.map(itemHTML).join('') : stateBlock({ ic: 'search', title: 'No matching terms', text: `Nothing matches "${gs.q}". Try an abbreviation like DPF or a word like "brake".`, action: '<button type="button" class="btn btn--sm" data-gl-clear>Clear search</button>' });
        const c = $('[data-gl-clear]', list); if (c) c.addEventListener('click', () => { gs.q = ''; gs.letter = ''; gs.cat = 'All'; $('#glQ', v).value = ''; syncChips(); draw(); });
      };
      const syncChips = () => { $$('[data-cat]', v).forEach((b) => b.setAttribute('aria-pressed', b.dataset.cat === gs.cat)); $$('[data-letter]', v).forEach((b) => b.setAttribute('aria-pressed', b.dataset.letter === gs.letter)); };
      const openTerm = (term, scroll) => {
        let item = $$('.gl-item', list).find((x) => x.dataset.term === term);
        if (!item) { gs.q = ''; gs.cat = 'All'; gs.letter = ''; $('#glQ', v).value = ''; syncChips(); draw(); item = $$('.gl-item', list).find((x) => x.dataset.term === term); }
        if (!item) return;
        setOpen(item, true);
        if (scroll) { item.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' }); item.classList.remove('is-flash'); void item.offsetWidth; item.classList.add('is-flash'); }
      };
      const setOpen = (item, open) => {
        item.classList.toggle('is-open', open); $('.gl-item__head', item).setAttribute('aria-expanded', open);
        if (open && !state.glossaryViewed[item.dataset.term]) { state.glossaryViewed[item.dataset.term] = 1; save(); checkAchievements(); }
      };
      $('#glQ', v).addEventListener('input', (e) => { gs.q = e.target.value; gs.letter = ''; syncChips(); draw(); });
      $$('[data-cat]', v).forEach((b) => b.addEventListener('click', () => { gs.cat = b.dataset.cat; syncChips(); draw(); }));
      $$('[data-letter]', v).forEach((b) => b.addEventListener('click', () => { gs.letter = gs.letter === b.dataset.letter ? '' : b.dataset.letter; syncChips(); draw(); }));
      list.addEventListener('click', (e) => {
        const g = e.target.closest('[data-goto]'); if (g) { openTerm(g.dataset.goto, true); history.replaceState(null, '', `#/glossary/${encodeURIComponent(g.dataset.goto)}`); return; }
        const h = e.target.closest('.gl-item__head'); if (h) { const it = h.closest('.gl-item'); setOpen(it, !it.classList.contains('is-open')); }
      });
      draw();
      if (termParam) { const t = findTerm(termParam); if (t) setTimeout(() => openTerm(t.term, true), 60); }
    }
  };
}

/* ---------- Bookmarks ---------- */
function viewBookmarks() {
  const items = state.bookmarks.map((k) => LESSON_MAP.get(k)).filter(Boolean);
  const html = `<div class="page page--narrow">${pageHead({ eyebrow: `${icon('bookmark', 'icon--sm')} Reference`, title: 'Bookmarks', text: 'Lessons you saved for quick reference.' })}
    ${items.length ? `<div class="stack-sm stagger">${items.map((x) => `<div class="card card--hover rec-card" style="padding:var(--sp-4) var(--sp-5)"><span class="rec-card__icon" style="width:40px;height:40px">${icon('book')}</span><a class="grow" href="${lessonHref(x)}" style="color:inherit;text-decoration:none"><strong>${esc(x.l.title)}</strong><br><span class="small muted">${x.t.level} · Module ${x.m.id.slice(1)}: ${esc(x.m.title)}</span></a><button type="button" class="btn-icon" data-unbm="${x.key}" aria-label="Remove bookmark: ${esc(x.l.title)}">${icon('x')}</button></div>`).join('')}</div>`
      : stateBlock({ ic: 'bookmark', title: 'No bookmarks yet', text: 'Use the bookmark button on any lesson to save it here for quick reference.', action: `<a class="btn btn--primary" href="#/curriculum">Browse curriculum</a>` })}</div>`;
  return {
    html, title: 'Bookmarks', nav: 'bookmarks', crumbs: [['Bookmarks']],
    after: (v) => $$('[data-unbm]', v).forEach((b) => b.addEventListener('click', () => { state.bookmarks = state.bookmarks.filter((k) => k !== b.dataset.unbm); save(); toast({ title: 'Bookmark removed', icon: 'bookmark', timeout: 2000 }); router(); }))
  };
}

/* ---------- Achievements ---------- */
function viewAchievements() {
  const earned = ACHIEVEMENTS.filter((a) => state.achievements[a.id]).length;
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('award', 'icon--sm')} Progress`, title: 'Certificates & achievements', text: 'Certificates are awarded for passing each track\'s final assessment (75%+). Achievements mark milestones along the way.', right: ring(earned / ACHIEVEMENTS.length, { size: 96, stroke: 8, label: `${earned}/${ACHIEVEMENTS.length}`, fs: 18 }) })}
    <div class="grid grid--3 stagger">${TRACKS.map((t) => { const f = state.finals[t.id]; const ok = f && f.passed; return `<div class="card cert-card ${ok ? 'is-earned' : ''}"><span class="cert-card__seal">${icon(ok ? 'award' : 'lock', 'icon--lg')}</span><div class="grow"><span class="eyebrow">${t.level} certificate</span><h3 style="font-size:var(--fs-md);margin:2px 0 4px">${esc(t.title)}</h3><p class="small">${ok ? `Earned · ${pct(f.score)}%` : f ? `Best ${pct(f.score)}% — 75% needed` : 'Not yet attempted'}</p></div>${ok ? `<button type="button" class="btn btn--sm" data-cert="${t.id}">View</button>` : `<a class="btn btn--sm" href="#/final/${t.id}">${f ? 'Retry' : 'Start'}</a>`}</div>`; }).join('')}</div>
    <div class="section-head"><h2>Achievements</h2><span class="small muted">${earned} of ${ACHIEVEMENTS.length} earned</span></div>
    <div class="ach-grid stagger">${ACHIEVEMENTS.map(achHTML).join('')}</div>
    <div class="section-head"><h2>Data</h2></div>
    <div class="card card--pad row row--between row--wrap"><div><strong>Your progress is stored in this browser.</strong><p class="small">Clearing browser data or switching devices will reset it.${storageOk ? '' : ' Storage is currently unavailable — progress will not persist.'}</p></div><button type="button" class="btn btn--danger" data-reset>${icon('rotate')} Reset all progress</button></div>
  </div>`;
  return {
    html, title: 'Achievements', nav: 'achievements', crumbs: [['Achievements']],
    after: (v) => {
      $$('[data-cert]', v).forEach((b) => b.addEventListener('click', () => showCertificate(TRACK_BY_ID[b.dataset.cert])));
      $('[data-reset]', v).addEventListener('click', () => openModal({
        title: 'Reset all progress?', body: '<p>This permanently clears completed lessons, quiz scores, certificates, bookmarks and achievements stored in this browser. This cannot be undone.</p>',
        foot: '<button class="btn btn--ghost" data-close>Cancel</button><button class="btn btn--danger" id="doReset">Reset everything</button>',
        onOpen: (m, close) => $('#doReset', m).addEventListener('click', () => { const theme = state.theme; state = JSON.parse(JSON.stringify(DEFAULT_STATE)); state.theme = theme; save(); close(); toast({ title: 'Progress reset', text: 'Starting fresh.' }); go('#/dashboard'); })
      }));
    }
  };
}

/* ---------- 404 ---------- */
function viewNotFound() {
  return { html: `<div class="page">${stateBlock({ ic: 'alert', title: 'Page not found', text: 'That page doesn\'t exist or may have moved. Let\'s get you back on route.', action: '<a class="btn btn--primary" href="#/dashboard">Go to dashboard</a>', error: true })}</div>`, title: 'Not found', nav: '', crumbs: [['Not found']] };
}

/* ---------- Command palette search ---------- */
const SEARCH_PAGES = [['Dashboard', '#/dashboard', 'grid'], ['Curriculum', '#/curriculum', 'layers'], ['Scenario Simulator', '#/scenarios', 'message'], ['Decision Trees', '#/trees', 'branch'], ['Practical Exercises', '#/exercises', 'clipboard'], ['Flashcards', '#/flashcards', 'cards'], ['Calculators', '#/calculators', 'calc'], ['Fleet Board', '#/fleet', 'truck'], ['Glossary', '#/glossary', 'book'], ['Quick Reference', '#/reference', 'file'], ['Bookmarks', '#/bookmarks', 'bookmark'], ['Achievements', '#/achievements', 'award']];
function openSearch() {
  if (modalStack.length) return;
  openModal({
    bare: true, size: 'modal--palette', label: 'Search the academy',
    body: `<div class="palette-input">${icon('search')}<label class="sr-only" for="palQ">Search lessons, glossary and tools</label><input id="palQ" type="text" role="combobox" aria-expanded="true" aria-controls="palRes" aria-autocomplete="list" placeholder="Search lessons, terms, tools…" autocomplete="off" autofocus><kbd>Esc</kbd></div>
      <div class="palette-results" id="palRes" role="listbox" aria-label="Results"></div>
      <div class="palette-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> navigate</span><span><kbd>Enter</kbd> open</span><span><kbd>Esc</kbd> close</span></div>`,
    onOpen: (m, close) => {
      const inp = $('#palQ', m); const res = $('#palRes', m); let active = 0; let flat = [];
      const draw = () => {
        const q = inp.value.trim().toLowerCase();
        const lessons = LESSONS.map((x) => ({ x, s: !q ? 0 : x.l.title.toLowerCase().includes(q) ? 3 : x.m.title.toLowerCase().includes(q) ? 2 : (x.l.objectives.join(' ') + ' ' + x.l.takeaways.join(' ')).toLowerCase().includes(q) ? 1 : -1 })).filter((r) => r.s >= 0);
        const L = (q ? lessons.sort((a, b) => b.s - a.s) : lessons.filter((r) => !isDone(r.x.key))).slice(0, q ? 7 : 4).map((r) => ({ href: lessonHref(r.x), ic: 'book', t: r.x.l.title, s: `${r.x.t.level} · M${r.x.m.id.slice(1)} ${r.x.m.title}`, b: isDone(r.x.key) ? 'Done' : '' }));
        const G = GLOSSARY.filter((g) => q && (`${g.term} ${g.full}`.toLowerCase().includes(q) || g.def.toLowerCase().includes(q))).sort((a, b) => (b.term.toLowerCase().startsWith(q) ? 1 : 0) - (a.term.toLowerCase().startsWith(q) ? 1 : 0)).slice(0, 6).map((g) => ({ href: `#/glossary/${encodeURIComponent(g.term)}`, ic: 'book', t: g.term, s: g.full, b: 'Term' }));
        const P = SEARCH_PAGES.filter(([t]) => !q || t.toLowerCase().includes(q)).slice(0, q ? 5 : 6).map(([t, href, ic]) => ({ href, ic, t, s: 'Go to page' }));
        const groups = [['Lessons', L], ['Glossary', G], ['Pages & tools', P]].filter(([, a]) => a.length);
        flat = groups.flatMap(([, a]) => a); active = clamp(active, 0, Math.max(0, flat.length - 1));
        let n = -1;
        res.innerHTML = flat.length ? groups.map(([label, a]) => `<div class="palette-group" role="presentation">${label}</div>${a.map((r) => { n++; return `<a class="palette-item ${n === active ? 'is-active' : ''}" role="option" id="pal-${n}" aria-selected="${n === active}" href="${r.href}" data-n="${n}">${icon(r.ic)}<span class="grow"><span class="palette-item__title">${esc(r.t)}</span><br><span class="palette-item__sub">${esc(r.s)}</span></span>${r.b ? `<span class="badge badge--outline">${r.b}</span>` : ''}</a>`; }).join('')}`).join('')
          : `<div class="center" style="padding:var(--sp-8)"><p class="muted">No results for "${esc(inp.value)}"</p></div>`;
        inp.setAttribute('aria-activedescendant', flat.length ? `pal-${active}` : '');
      };
      inp.addEventListener('input', () => { active = 0; draw(); });
      inp.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(flat.length - 1, active + 1); draw(); $('.palette-item.is-active', res)?.scrollIntoView({ block: 'nearest' }); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(0, active - 1); draw(); $('.palette-item.is-active', res)?.scrollIntoView({ block: 'nearest' }); }
        else if (e.key === 'Enter' && flat[active]) { e.preventDefault(); close(); go(flat[active].href); }
      });
      res.addEventListener('mousemove', (e) => { const it = e.target.closest('[data-n]'); if (it && +it.dataset.n !== active) { active = +it.dataset.n; $$('.palette-item', res).forEach((x) => { const on = +x.dataset.n === active; x.classList.toggle('is-active', on); x.setAttribute('aria-selected', on); }); } });
      res.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
      draw();
    }
  });
}

/* ---------- Global delegated interactions ---------- */
function onDocClick(e) {
  const acc = e.target.closest('.acc-trigger');
  if (acc) {
    const item = acc.closest('.acc-item'); const open = !item.classList.contains('is-open');
    item.classList.toggle('is-open', open); acc.setAttribute('aria-expanded', open);
  }
  const tl = e.target.closest('.tl-step__btn');
  if (tl) { const st = tl.closest('.tl-step'); const open = !st.classList.contains('is-open'); st.classList.toggle('is-open', open); st.classList.add('is-seen'); tl.setAttribute('aria-expanded', open); }
  const tab = e.target.closest('.tabs .tab');
  if (tab) selectTab(tab);
  const term = e.target.closest('.term[data-term]');
  if (term) go(`#/glossary/${encodeURIComponent(term.dataset.term)}`);
  const cp = e.target.closest('[data-copy]');
  if (cp) {
    const text = cp.closest('.msg').querySelector('.msg__body').textContent;
    const ok = () => toast({ kind: 'success', title: 'Copied to clipboard', timeout: 1800, icon: 'copy' });
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(ok, () => toast({ kind: 'warning', title: 'Copy not available' })); else toast({ kind: 'warning', title: 'Copy not available' });
  }
}
function selectTab(tab) {
  const list = tab.closest('[role="tablist"]'); const tabs = $$('[role="tab"]', list);
  tabs.forEach((t) => { const on = t === tab; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; const p = document.getElementById(t.getAttribute('aria-controls')); if (p) p.hidden = !on; });
}
function onDocKey(e) {
  const typing = e.target.matches('input, textarea, select, [contenteditable]');
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); return; }
  if (e.key === '/' && !typing && !modalStack.length) { e.preventDefault(); openSearch(); return; }
  if (e.key === 'Escape' && $('#sidebar').classList.contains('is-open')) { closeSidebar(); $('#menuBtn').focus(); }
  const tab = e.target.closest && e.target.closest('.tabs [role="tab"]');
  if (tab && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
    const tabs = $$('[role="tab"]', tab.closest('[role="tablist"]')); const i = tabs.indexOf(tab);
    const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length]; selectTab(n); n.focus(); e.preventDefault();
  }
}

/* ---------- Boot ---------- */
function boot() {
  applyTheme(document.documentElement.getAttribute('data-theme') || 'light');
  $('#themeBtn').addEventListener('click', () => {
    const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    state.theme = t; save(); applyTheme(t);
  });
  $('#menuBtn').addEventListener('click', openSidebar);
  $('#bottomMenu').addEventListener('click', openSidebar);
  $('#sidebarClose').addEventListener('click', closeSidebar);
  $('#scrim').addEventListener('click', closeSidebar);
  $('#searchBtn').addEventListener('click', openSearch);
  $('.skip-link').addEventListener('click', (e) => { e.preventDefault(); $('#main').focus(); });
  $('#sideNav').addEventListener('click', (e) => { if (e.target.closest('a')) closeSidebar(); });
  document.addEventListener('click', onDocClick);
  document.addEventListener('keydown', onDocKey);
  window.addEventListener('hashchange', router);
  markActiveDay();
  if (!storageOk) setTimeout(() => toast({ kind: 'warning', title: 'Progress won\'t be saved', text: 'Local storage is unavailable in this browser session.' }), 600);
  router();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();

})();
