
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
            { t: 'mc', q: 'What does "whichever comes first" mean in a PM schedule?', o: ['The PM is done at the mileage limit only; time and hours are ignored', 'The PM is due at the first of the mileage, time or hours limits reached', 'The PM is due only when all three limits have been reached', 'The driver chooses which limit to use for each service'], a: 1, e: 'Multiple triggers protect units that run few miles but still age or idle.' },
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
            { t: 'mc', q: 'Why is an expired annual inspection more serious than a late oil change?', o: ['It costs more to fix, because inspections take longer than oil changes', 'It is a compliance issue that may prevent the unit from operating', 'It voids the engine warranty, while a late oil change does not', 'It only matters if the unit is pulled in for a roadside inspection'], a: 1, e: 'Periodic inspection is a regulatory requirement. Consult the safety department.' },
            { t: 'wwyd', q: 'A tractor is 4,000 miles overdue for PM because dispatch keeps assigning it loads. You:', o: ['Let it keep running; the PM can wait until the truck has a free week', 'Ground it at once without telling dispatch, so it can\'t be assigned', 'Work with dispatch on a load near a shop or around home time, and escalate if needed', 'Let the driver decide when to bring it in for service'], a: 2, e: 'Coordinate first; escalate per procedure if it keeps slipping.' }
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
            { t: 'mc', q: 'In a J1939 code, what does the FMI describe?', o: ['The part number of the component that failed', 'How the parameter is failing (e.g., too high, too low, erratic)', 'Which part of the truck is affected, such as the engine or brakes', 'How many times the fault has occurred since it was last cleared'], a: 1, e: 'SPN identifies what; FMI identifies the failure mode.' },
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
            { t: 'mc', q: 'Which question is appropriate for a coordinator to ask a technician?', o: ['"Why don\'t you just replace the turbo and see if that fixes it?"', '"What\'s confirmed versus still being tested, and what\'s plan B?"', '"Can you skip the diagnosis and start with the usual repair?"', '"Can you give me a rough cost before you look at the truck?"'], a: 1, e: 'Understanding the plan and contingencies is the coordinator\'s job.' }
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
            { t: 'mc', q: 'What is a core charge?', o: ['A non-refundable fee for disposing of the old part', 'A deposit refunded when the old rebuildable part is returned', 'A charge added to engine work for the shop\'s special tools', 'A surcharge for parts delivered after business hours'], a: 1, e: 'Core charges encourage return of rebuildable parts; return the core to get the refund.' },
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
            { t: 'mc', q: 'An estimate exceeds your approval limit. You should:', o: ['Approve it anyway, since waiting adds downtime', 'Route to the fleet manager per procedure with a clear summary', 'Ask the shop to split it into two invoices under your limit', 'Hold it until the shop agrees to lower the price'], a: 1, e: 'Follow approval procedure. Never split invoices to avoid limits.' },
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
            { t: 'mc', q: 'Diagnosis isn\'t complete. What\'s the best way to communicate the ETR?', o: ['Give your best guess so dispatch has a time to plan with', 'Say there is no ETR yet, when diagnosis is expected, and a planning assumption', 'Say "soon" and update them once the shop calls back', 'Say nothing until the repair is done, to avoid giving a wrong time'], a: 1, e: 'Honest, with a time for the next update and a planning assumption.' },
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
            { t: 'mc', q: 'What is deadhead?', o: ['Miles driven with no revenue load', 'A tractor with a dead battery', 'A driver who is out of hours', 'A load cancelled after pickup'], a: 0, e: 'Deadhead miles are empty, non-revenue miles.' },
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
            { t: 'mc', q: 'A trailer is damaged and cannot move, but the cargo is intact. Best option is usually:', o: ['Power swap (send another tractor)', 'Trailer swap or transload', 'Reschedule the delivery only', 'Wait for a mobile repair'], a: 1, e: 'The cargo must move to a working trailer.' },
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
            { t: 'mc', q: 'Downtime is rising while the number of repairs is flat. This most likely indicates:', o: ['More breakdowns happening across the fleet', 'A process problem such as slow approvals, parts or shop backlog', 'Better maintenance, so repairs take longer but last longer', 'Fewer trucks in the fleet, each doing more miles'], a: 1, e: 'Same work, more time = a process bottleneck.' },
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
            { t: 'mc', q: 'Cost per mile is calculated as:', o: ['Miles driven ÷ maintenance cost', 'Maintenance cost ÷ miles driven', 'Maintenance cost × miles driven', 'Revenue ÷ miles driven'], a: 1, e: 'CPM = cost ÷ miles.' },
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
            { t: 'mc', q: 'Which is part of the true cost of a repeat repair?', o: ['Only the second invoice, since the first repair was already paid', 'Second invoice, additional downtime, possible tow and lost confidence', 'Nothing extra, because warranty covers every repeat repair', 'Only the driver\'s extra pay while the truck is down'], a: 1, e: 'Repeats multiply cost beyond the invoice.' },
            { t: 'tf', q: 'The vendor with the lowest labor rate always produces the lowest total cost.', a: false, e: 'Hours, speed, comebacks, tow distance and downtime matter.' }
          ],
          takeaways: ['Downtime has a real daily cost — use it in decisions.', 'Compare vendors on total cost, not rate alone.', 'Repeat repairs multiply costs.', 'Ask for and track repair warranties and comebacks.']
        }
      ]
    }
  ],
  final: { id: 'advanced-final', kind: 'exam', title: 'Advanced Final Project: Operations Board', minutes: 35 }
};
