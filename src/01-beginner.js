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
