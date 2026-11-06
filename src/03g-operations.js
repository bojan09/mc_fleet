
/* ---------------------------------------------------------------------------
   CONTENT — Freight market, dispatch, route planning, fuel and HOS basics
   Context a maintenance coordinator needs to talk the language of operations.
   U.S. federal rules are cited; company procedures and state rules can differ.
   --------------------------------------------------------------------------- */
Object.assign(REF, {
  carrierTypes: { ig: 'versus', icon: 'truck', title: 'Types of carriers and freight companies', items: [
    { t: 'For-hire carrier', sub: 'Hauls other companies\' freight for pay.', facts: [['Registration', 'USDOT number; interstate for-hire carriers also need FMCSA operating authority (currently identified by an MC number)'], ['Example', 'A truckload carrier moving retail freight for many shippers']], watch: 'Uptime is revenue: every down unit is a load that isn\'t moving or a customer at risk.' },
    { t: 'Private fleet', sub: 'A company hauling its own goods.', facts: [['Registration', 'USDOT number for interstate commercial vehicles'], ['Example', 'A grocery chain delivering to its own stores']], watch: 'Service to the company\'s own stores or plants drives priorities more than load revenue.' },
    { t: 'Owner-operator', sub: 'A driver who owns (or leases) their truck.', facts: [['How they work', 'Often leased onto a carrier\'s authority; some run under their own authority'], ['Who pays repairs', 'Set by the lease agreement — usually the owner-operator for their own truck']], watch: 'Confirm who owns the unit before arranging or approving any repair.' },
    { t: 'Freight broker', sub: 'Arranges transportation between shippers and carriers — doesn\'t haul the freight.', facts: [['Registration', 'FMCSA broker authority and a $75,000 financial security (surety bond or trust)'], ['Documents', 'Sends the carrier a rate confirmation for each load']], watch: 'On brokered loads, the broker needs delay updates — through your dispatch team, following company procedure.' }
  ], key: 'The same breakdown call can involve different decision-makers: your own fleet, an owner-operator, a chassis provider, or a broker waiting for an update. Ask who owns the unit and whose load it is.' },
  loadLifecycle: { ig: 'process', icon: 'route', title: 'The life of a load', items: [
    { icon: 'search', t: 'Load found', d: 'Customer contract, broker or load board' }, { icon: 'file', t: 'Rate confirmed', d: 'Rate con: pickup, delivery, rate, rules' },
    { icon: 'truck', t: 'Dispatched', d: 'Driver, tractor, trailer assigned' }, { icon: 'clipboard', t: 'Picked up', d: 'BOL signed, seal number noted' },
    { icon: 'pin', t: 'In transit', d: 'Tracking and check calls' }, { icon: 'check-circle', t: 'Delivered', d: 'Signed BOL = proof of delivery' },
    { icon: 'dollar', t: 'Invoiced & paid', d: 'Invoice + documents, then payment' }
  ], note: 'A breakdown can interrupt any step. The earlier it happens, the more options dispatch has — which is why fast, accurate ETRs matter.' },
  loadBoard: { ig: 'card', icon: 'search', title: 'Reading a load board posting (example)', form: 'Load board posting · example', rows: [
    ['Origin → destination', 'Dallas, TX → Atlanta, GA (≈ 780 mi)'], ['Pickup / delivery', '06/12 14:00–16:00 · 06/13 08:00 appointment'], ['Equipment', 'Van, 53 ft'],
    ['Weight / length', '38,000 lb · full load'], ['Commodity', 'Packaged consumer goods'], ['Rate', 'Posted all-in rate, or "call for rate"'],
    ['Posted by', 'Broker name, MC number, contact'], ['Extras', 'Drop trailer at pickup; driver assist: no']
  ], note: 'Illustrative example — every load board and broker formats postings differently. Dispatch books loads; the coordinator needs to know the equipment and appointment details because they decide how urgent a repair is.' },
  hosBasics: { ig: 'stats', icon: 'clock', title: 'Hours of Service basics — property-carrying drivers (U.S.)', items: [
    { v: '11', u: 'h', l: 'maximum driving after 10 consecutive hours off duty', tone: 'info' },
    { v: '14', u: 'h', l: 'on-duty window — no driving after the 14th hour, even with breaks', tone: 'warning' },
    { v: '30', u: 'min', l: 'break after 8 cumulative hours of driving; any 30 straight minutes not driving counts, including shop time', tone: 'info' },
    { v: '60/70', u: 'h', l: 'on-duty limit in 7/8 consecutive days', tone: 'info' }
  ], note: 'Summary of FMCSA rules (49 CFR Part 395). Exceptions exist (short-haul, adverse driving conditions, sleeper-berth split and others). Dispatch and the safety department apply HOS — the coordinator uses it to judge whether a repair time still works for the load.' },
  routeFactors: { ig: 'hub', icon: 'route', title: 'What goes into a truck route', center: { icon: 'route', t: 'Route plan' }, items: [
    { icon: 'clock', t: 'Appointments', d: 'Pickup and delivery windows' }, { icon: 'users', t: 'Driver hours', d: 'HOS and planned breaks' },
    { icon: 'alert', t: 'Restrictions', d: 'Low clearances, weight limits, hazmat routes' }, { icon: 'gauge', t: 'Fuel stops', d: 'Network, price, DEF' },
    { icon: 'wrench', t: 'Service points', d: 'PM due, known vendors on the lane' }, { icon: 'sun', t: 'Weather & traffic', d: 'Closures, chain laws, delays' }
  ] },
  fuelSignals: { ig: 'table', icon: 'gauge', title: 'Fuel data as a maintenance signal', head: ['What the data shows', 'Possible maintenance causes', 'Coordinator action'], rows: [
    ['MPG drops on one unit, same lanes and loads', 'Underinflated tires, dragging brakes, aftertreatment or injector problems', 'Check recent faults; schedule an inspection'],
    ['High idle time', 'Driver comfort needs (HVAC, APU not working), or habit', 'Ask the driver; check APU/HVAC repair history'],
    ['DEF use far from normal', 'SCR/DEF system issue, or DEF purchases not captured', 'Check DEF-related fault codes'],
    ['Fuel purchased with no miles driven', 'Unit in the shop, reefer fueling, or a data issue', 'Confirm with fuel records before assuming misuse']
  ], note: 'Patterns point to questions, not diagnoses. A technician confirms any mechanical cause.' },
  ifta: { ig: 'table', icon: 'file', title: 'Fuel tax and trip records: IFTA in brief', head: ['Question', 'Answer'], rows: [
    ['What is IFTA?', 'The International Fuel Tax Agreement among the 48 contiguous U.S. states and 10 Canadian provinces. Carriers report fuel and miles by jurisdiction on one quarterly return.'],
    ['Which vehicles?', 'Generally, qualified motor vehicles used in interstate operation: two axles and over 26,000 lb, three or more axles, or a combination over 26,000 lb.'],
    ['Why it touches maintenance', 'Miles driven to and from shops, and fuel bought during repairs, still belong in trip records. Accurate odometer readings on work orders help.'],
    ['Who handles it', 'Usually accounting, fuel tax or safety/compliance staff — not the maintenance coordinator.']
  ], note: 'Overview only. Your base jurisdiction and your company\'s tax staff are the authority on IFTA reporting.' }
});

addLesson('beginner', 'm1', {
  id: 'l4', title: 'The Freight Market: Carriers, Brokers, Load Boards and Dispatch', minutes: 16,
  objectives: ['Tell for-hire carriers, private fleets, owner-operators and brokers apart', 'Follow a load from booking to payment', 'Read the basic fields of a load posting', 'Explain what a dispatcher does and what they need from maintenance'],
  body: [
    `Maintenance doesn\'t happen in a vacuum. Every repair decision lands on a load, a customer and a driver. This lesson gives you the vocabulary of the freight side of the business, so conversations with dispatch make sense from day one.`,
    REF.carrierTypes,
    { h: 'From booking to payment' },
    REF.loadLifecycle,
    `Loads come from a carrier\'s own customer contracts, from freight brokers, or from <strong>load boards</strong> — online marketplaces where brokers and shippers post available loads and carriers post available trucks. The load details are then confirmed on a [[Rate confirmation|rate confirmation]].`,
    REF.loadBoard,
    { h: 'What a dispatcher does' },
    { tiles: [
      { icon: 'search', title: 'Plans loads', text: 'Matches loads to drivers, tractors and trailers — right equipment, right location, enough driver hours.' },
      { icon: 'phone', title: 'Tracks the trip', text: 'Watches location and ETA; handles check calls, delays and appointment changes.' },
      { icon: 'message', title: 'Updates customers', text: 'Keeps shippers, receivers or brokers informed when something changes.' },
      { icon: 'route', title: 'Recovers from problems', text: 'Reassigns loads, arranges power swaps or relays when equipment goes down.' }
    ] },
    { callout: { kind: 'tip', title: 'What dispatch needs from you', text: 'Unit status, a realistic ETR with a confidence level, and early warning when it changes. Dispatch can only protect a load they know is at risk.' } }
  ],
  example: { title: 'Whose truck is it?', text: `A driver calls about a flat tire on a tractor that isn\'t in your fleet list. Before sending a vendor, the coordinator checks and learns it\'s an owner-operator leased onto the company. The lease says the owner-operator pays for their own repairs, so the coordinator connects the driver with a tire vendor, notes it on the load record, and tells dispatch the ETA — without approving charges on the company account.` },
  practical: { title: 'Who is who?', exercise: {
    type: 'classify', prompt: 'Match each description to the type of company or person.', categories: ['For-hire carrier', 'Private fleet', 'Owner-operator', 'Freight broker'],
    items: [
      { text: 'Arranges the move and sends the carrier a rate confirmation, but owns no trucks', answer: 'Freight broker', why: 'Brokers connect shippers and carriers.' },
      { text: 'A beverage company delivering its own products to its own warehouses', answer: 'Private fleet', why: 'It hauls its own goods.' },
      { text: 'Driver who owns the tractor and is leased onto a larger carrier', answer: 'Owner-operator', why: 'Owns the equipment; works under a lease.' },
      { text: 'Hauls freight for many different shippers under its own operating authority', answer: 'For-hire carrier', why: 'Paid to move other companies\' freight.' }
    ]
  } },
  check: [
    { t: 'mc', q: 'What is a load board?', o: ['A whiteboard in the terminal where dispatch tracks every truck', 'An online marketplace where loads and available trucks are posted', 'A government registry that lists every licensed carrier', 'The floor panel inside a dry van trailer'], a: 1, e: 'Brokers and shippers post loads; carriers post trucks and book loads.' },
    { t: 'tf', q: 'A freight broker usually owns the trucks that haul its loads.', a: false, e: 'Brokers arrange transportation; carriers haul the freight.' },
    { t: 'mc', q: 'Before arranging a repair on an unfamiliar tractor, what should you confirm first?', o: ['The driver\'s favorite shop in the area', 'Who owns the unit and who pays for repairs', 'The commodity code of the load on board', 'The tractor\'s model year and paint color'], a: 1, e: 'Ownership decides who authorizes and pays for the repair.' }
  ],
  takeaways: ['Carriers haul; brokers arrange; private fleets haul their own goods; owner-operators own their trucks.', 'A load runs: booked → rate confirmed → dispatched → picked up → delivered → invoiced → paid.', 'Dispatch needs status, ETR and early warnings from maintenance.'],
  tips: ['Learn your dispatch board\'s layout — it tells you which loads each repair affects.', 'Keep a list of owner-operator units and their repair arrangements.'],
  mistakes: ['Approving a repair on a unit your company doesn\'t own.', 'Updating a broker directly when company procedure routes it through dispatch.']
});

addLesson('advanced', 'm6', {
  id: 'l3', title: 'Hours of Service, Route Planning and Fuel', minutes: 17,
  objectives: ['Apply HOS basics to repair timing', 'List the factors in a truck route and where maintenance fits', 'Use fuel data as an early maintenance signal', 'Know what IFTA is and who handles it'],
  body: [
    `A repair that finishes "on time" can still fail the load if the driver is out of hours or the route to the delivery doesn\'t work. This lesson connects repair timing to the operational limits dispatch works with every day.`,
    REF.hosBasics,
    { callout: { kind: 'info', title: 'Why the 14-hour window matters to you', text: 'Waiting at a shop usually counts as on-duty time, and the 14-hour window keeps running. A 3-hour repair that starts late in a driver\'s day can mean the truck is fixed but the driver can\'t drive. Give dispatch ETRs early so they can plan a relay or a reset.' } },
    { h: 'Route planning' },
    REF.routeFactors,
    `Truck routes are planned around restrictions cars never see: low bridges, weight-limited roads, hazmat restrictions and truck-prohibited routes. When you route a unit to a shop, the shop has to be reachable on a truck-legal route — and able to take the vehicle size.`,
    { h: 'Fuel and trip expenses' },
    `Fuel is usually the largest variable cost in trucking. Fleets control it with fuel cards, preferred fuel networks and fuel surcharges billed to customers. For maintenance, fuel data is useful as an early-warning signal.`,
    REF.fuelSignals,
    REF.ifta
  ],
  example: { title: 'Fixed at 17:00 — delivered tomorrow', text: `<span class="mono">T-122</span> went into a shop at 12:30 with a starter failure; the driver had started duty at 06:00. The shop quoted three hours. The coordinator told dispatch right away: repair done around 15:30, leaving the driver about 4.5 hours in the 14-hour window, against a 5-hour run to delivery. Dispatch arranged a relay driver at the shop, and the load delivered on time. Had the ETR arrived at 17:00, the relay would have been too late to set up.` },
  practical: { title: 'Can the driver still make it?', exercise: {
    type: 'choose', prompt: 'Driver started duty at 05:00 and has driven 6 hours. The truck is at a shop; repair ETR is 14:30. Delivery is 4 hours of driving away. What should you tell dispatch?',
    options: [
      { text: 'Nothing — the truck will be fixed today.', correct: false, why: 'Fixed isn\'t the same as able to deliver. The window matters.' },
      { text: 'At 14:30 the driver has 4.5 hours left in the 14-hour window (ends 19:00) and 5 hours of driving time. The shop wait already counts as the 30-minute break, so the 4-hour run fits with about 30 minutes to spare. Any delay at delivery uses up that margin, so flag the risk now.', correct: true, why: 'Give dispatch the numbers early so they can decide on a relay or a new appointment. Since 2020, any 30 straight minutes off the wheel, including on-duty time at a shop, satisfies the break (49 CFR 395.3(a)(3)(ii)).' },
      { text: 'Tell the driver to log the shop wait as off duty so the clock stops.', correct: false, why: 'Time waiting with the truck at a shop is usually on-duty time, and the 14-hour window keeps running either way. Never suggest how a driver should log. Dispatch and safety own HOS decisions.' }
    ]
  } },
  check: [
    { t: 'mc', q: 'A property-carrying driver starts duty at 06:00. When does the 14-hour driving window end?', o: ['14:00', '17:00', '20:00', 'It pauses during repairs'], a: 2, e: '06:00 + 14 hours = 20:00. The window keeps running during breaks and shop time.' },
    { t: 'tf', q: 'A sudden MPG drop on one unit can be a maintenance signal.', a: true, e: 'Tire pressure, brakes and engine or aftertreatment issues can all raise fuel use.' },
    { t: 'mc', q: 'Who usually prepares a carrier\'s IFTA return?', o: ['The maintenance coordinator', 'Accounting, fuel tax or compliance staff', 'The driver', 'The repair shop'], a: 1, e: 'The coordinator\'s part is accurate mileage on work orders and trip records.' }
  ],
  takeaways: ['A repair ETR only helps if it fits the driver\'s remaining hours.', 'Shops must be reachable on truck-legal routes.', 'Fuel data can flag tire, brake and engine problems early.', 'IFTA is a quarterly fuel-tax report — handled by tax or compliance staff.'],
  tips: ['Ask the driver\'s duty start time on every mid-day breakdown.', 'Keep fuel-economy outliers on your weekly review list.'],
  mistakes: ['Giving a late ETR that leaves dispatch no time to arrange a relay.', 'Sending a unit to a shop it can\'t legally reach.']
});

