
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
    ['VI', 'Enhanced (radioactive shipments)', 'Select radiological shipments'],
    ['VII', 'Jurisdictional Mandated', 'A state or provincial program that does not meet any other level; no CVSA decal'],
    ['VIII', 'Electronic', 'Data checked wirelessly while the vehicle is moving, with no officer contact']
  ], note: 'A vehicle that passes a Level I, V or VI inspection with no critical violations may receive a CVSA decal, valid for up to three months.' },
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
        { t: 'mc', q: 'What must the next driver do with the previous DVIR?', o: ['Nothing, as long as the truck passes their own pre-trip inspection', 'Review it and confirm defects were repaired or not needing repair', 'Sign it only if they found new defects during their own pre-trip', 'Send it to the customer along with the delivery paperwork'], a: 1, e: 'Drivers review the last report before driving (49 CFR 396.13).' },
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
        { ig: 'bars', real: true, icon: 'shield', title: 'Most common vehicle out-of-service violations, U.S., fiscal year 2025', fmt: '', items: [['Tire flat, leaking or under 50% pressure', 93806, 'critical'], ['Defective brakes, 20% or more', 59133, 'critical'], ['Turn signal out, rearmost vehicle', 36619, 'warning'], ['Stop lamp out', 24516, 'warning']], note: 'Out-of-service orders from FMCSA roadside inspection data, as published in public FY2025 summaries; counts are approximate. Tires, brakes and lights are also the items a good DVIR and pre-trip catch first.' }
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
      takeaways: ['Maintenance records must show inspections, repairs and schedules.', 'CVSA levels range from full inspections to driver-only.', 'Violations affect the company\'s CSA record.', 'Tires, brakes and lights cause most vehicle out-of-service orders, and most are preventable.', 'A roadside report with violations is certified within 15 days and kept for 12 months.'],
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
        { t: 'mc', q: 'Reorder point is:', o: ['Maximum shelf quantity minus what is on hand', 'Daily usage × lead time + safety stock', 'Unit price × quantity ordered last month', 'Lead time ÷ daily usage, plus one spare'], a: 1, e: 'Order when stock falls to the expected lead-time usage plus a buffer.' },
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
        { t: 'mc', q: 'What is "alert fatigue"?', o: ['Drivers getting tired from too many hours behind the wheel', 'So many low-value alerts that important ones get missed', 'A battery that drains because the telematics device stays on', 'A telematics outage that stops alerts from arriving at all'], a: 1, e: 'Tiering prevents critical alerts from drowning in noise.' },
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
        { t: 'mc', q: 'Why require standard system codes on work orders?', o: ['To slow technicians down so they write more carefully', 'To make trend analysis by system possible', 'Because tax rules require codes on every repair', 'Because drivers ask to see them on their records'], a: 1, e: 'Consistent codes turn records into usable data.' },
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
    { callout: { kind: 'warning', title: 'Why adjustment matters', text: 'Brake problems, including brakes out of adjustment, are among the most frequent vehicle out-of-service findings at CVSA roadside inspections. Automatic slack adjusters shouldn\'t need routine manual adjustment — if one keeps drifting, the brake needs diagnosis, not just re-adjusting.' } },
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
