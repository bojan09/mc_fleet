
/* ---------------------------------------------------------------------------
   CONTENT — Equipment, trailers, tires and loads (illustrated)
   Uses the versus / anatomy / decode / axles / tread infographics.
   Figures are U.S. federal rules or common industry practice and are labeled
   as such; state rules and company procedures can differ.
   --------------------------------------------------------------------------- */
Object.assign(REF, {
  powerUnits: { ig: 'versus', icon: 'truck', title: 'Power units: what pulls or carries the freight', items: [
    { art: 'daycab', t: 'Day cab tractor', sub: 'No sleeping compartment.', facts: [['Typical work', 'Local and regional — driver home daily'], ['Duty', 'Many stops, frequent coupling and uncoupling']], watch: 'Brakes and clutch/transmission wear from stop-start work; fifth wheel and glad hands from frequent coupling.' },
    { art: 'sleeper', t: 'Sleeper tractor', sub: 'Sleeper berth behind the seats.', facts: [['Typical work', 'Long-haul, multi-day trips'], ['Duty', 'Long highway miles']], watch: 'Mileage-based PMs, aftertreatment, and cab comfort systems the driver lives with (HVAC, APU — auxiliary power unit — if equipped).' },
    { art: 'straight', t: 'Straight truck (box truck)', sub: 'Cab and cargo body on one chassis — no separate trailer.', facts: [['Typical work', 'Local delivery'], ['License', 'Class B CDL when GVWR is 26,001 lb or more']], watch: 'Cargo body, doors and liftgate (if equipped) — plus the same brakes and tires as any truck.' },
    { art: 'yard', t: 'Yard tractor', sub: 'Also called a terminal tractor, spotter or yard dog.', facts: [['Typical work', 'Moving trailers around yards, ports and warehouses'], ['Coupling', 'Hydraulic fifth wheel lifts the trailer']], watch: 'Hydraulics and fifth wheel; very high engine hours compared with miles, so PMs are usually hour-based.' }
  ], key: 'A tractor pulls a separate trailer; a straight truck carries the cargo on its own chassis. Knowing which one broke tells you whether the freight can be moved by swapping power.' },
  axleConfigs: { ig: 'versus', icon: 'gauge', title: 'Tractor axle configurations (driven wheels highlighted)', items: [
    { art: 'axle-4x2', t: '4x2', sub: 'Two axles — one driven rear axle.', facts: [['Weight', 'Lightest of the three'], ['Common use', 'Local and regional work, lighter loads']] },
    { art: 'axle-6x4', t: '6x4', sub: 'Three axles — both rear axles driven.', facts: [['Traction', 'Best of the three'], ['Common use', 'The usual setup for heavy over-the-road tractors']] },
    { art: 'axle-6x2', t: '6x2', sub: 'Three axles — only one rear axle driven.', facts: [['Trade-off', 'Lighter, can save fuel, but less traction on slippery roads'], ['Common use', 'Highway fleets focused on fuel economy']] }
  ], key: 'The first number counts wheel positions (duals count as one); the second counts how many of them are driven. A 6x2 stuck on ice is a traction limit, not necessarily a defect — ask before you send a technician.' },
  enclosedTrailers: { ig: 'versus', icon: 'layers', title: 'Enclosed trailers: dry van vs reefer', items: [
    { art: 'dryvan', t: 'Dry van', sub: 'Enclosed box, no temperature control. The most common trailer in truckload freight.', facts: [['Common lengths', '53 ft; also 48 ft and 28 ft "pups"'], ['Width', '102 in (8.5 ft) — U.S. federal width limit'], ['Freight', 'Palletized and boxed general freight']], use: 'Retail, packaged goods, paper, parts — anything that doesn\'t need temperature control.', watch: 'Doors, hinges and seals; floor and roof damage; lights; tires; brakes; tandem slider pins.' },
    { art: 'reefer', tone: 'info', t: 'Reefer (refrigerated van)', sub: 'Insulated box plus a front-mounted refrigeration unit, commonly with its own diesel engine and fuel tank.', facts: [['Tracked by', 'Trailer miles + reefer unit engine hours'], ['Setpoint', 'From the shipper\'s instructions on the load paperwork'], ['Inside space', 'Slightly less than a dry van (insulated walls)']], use: 'Food, pharmaceuticals, flowers, chemicals — anything temperature-sensitive, hot or cold.', watch: 'Unit PMs by hours, alarms, unit fuel, door seals, and temperature records. A reefer failure with cargo aboard is time-critical.' }
  ], key: 'Same box, different risk: a dry-van breakdown delays freight; a reefer failure can destroy it. Reefer units often need a refrigeration technician, not a trailer shop.' },
  openDeck: { ig: 'versus', icon: 'layers', title: 'Open-deck trailers: how deck height changes what fits', items: [
    { art: 'flatbed', t: 'Flatbed', sub: 'One flat deck (roughly 5 ft off the ground), loaded from the sides or top.', facts: [['Common lengths', '48 ft and 53 ft'], ['Securement', 'Straps, chains and tarps — 49 CFR 393 Subpart I']], use: 'Lumber, steel, building materials, pipe.', watch: 'Deck boards, winches, stake pockets, worn straps/chains, lights, tires.' },
    { art: 'stepdeck', t: 'Step deck (drop deck)', sub: 'Short upper deck over the kingpin, then a lower main deck.', facts: [['Why', 'Lower deck carries taller cargo than a flatbed within the same height limit'], ['Wheels', 'Often smaller, low-profile tires']], use: 'Machinery and tall loads that would be over height on a flatbed.', watch: 'Low-profile tires (check stock before a roadside call), deck, ramps if equipped.' },
    { art: 'rgn', t: 'RGN / lowboy', sub: 'Removable gooseneck (RGN) detaches so equipment can drive on from the front; very low well deck.', facts: [['Why', 'Tallest and heaviest equipment'], ['Permits', 'Loads are often oversize/overweight and need state permits']], use: 'Excavators, dozers, cranes, transformers.', watch: 'Gooseneck hydraulics or mechanism, extra axles, deck — and the permit conditions if a breakdown delays the move.' }
  ], key: 'The lower the deck, the taller the cargo that fits under the height limit (dashed red line). The limit itself varies by state — commonly 13 ft 6 in — so drivers and dispatch check routes for tall loads.' },
  specialtyTrailers: { ig: 'versus', icon: 'layers', title: 'Specialty equipment: tanker, intermodal chassis, doubles', items: [
    { art: 'tanker', t: 'Tanker', sub: 'Carries liquids, gases or dry bulk.', facts: [['Driver', 'CDL tank vehicle (N) endorsement; hazmat (H) too if the load is placarded hazmat'], ['Handling', 'Liquid surge; many tanks have baffles or compartments']], watch: 'Valves, hoses, vapor recovery, wash records. Hazmat cargo tanks have periodic test and inspection requirements (49 CFR Part 180).' },
    { art: 'intermodal', t: 'Intermodal chassis', sub: 'A frame that carries a shipping container between ports, rail ramps and customers.', facts: [['Containers', 'Commonly 20, 40, 45 and 53 ft'], ['Ownership', 'Often a chassis pool or provider — not the carrier']], watch: 'Lights, tires, brakes and twist locks. Confirm who provides the chassis before arranging a repair — that decides who authorizes and pays.' },
    { art: 'doubles', t: 'Doubles', sub: 'Two short (about 28 ft) trailers joined by a converter dolly.', facts: [['Driver', 'CDL doubles/triples (T) endorsement'], ['Common in', 'LTL networks']], watch: 'The dolly is its own unit: tires, brakes, lights, drawbar eye and safety chains.' }
  ], key: 'Each of these adds a party or a requirement: tank qualifications, a chassis owner, or a third unit (the dolly) that needs its own inspection and records.' },
  dryVanAnatomy: { ig: 'anatomy', icon: 'search', title: 'Parts of a dry van trailer', art: 'dryvan', w: 680, pins: [
    { x: 8, y: 38.5, t: 'Rear swing doors', d: 'Hinges, seals, lock rods. A door that won\'t latch can stop a load.' },
    { x: 8.5, y: 73, t: 'Rear impact guard', d: 'The "ICC bar." Damage or missing parts are inspection violations.' },
    { x: 20, y: 85, t: 'Sliding tandem', d: 'Axles slide on a rail to adjust weight distribution; locking pins must engage.' },
    { x: 46, y: 38.5, t: 'Sidewalls & logistic posts', d: 'Holes or bent posts let in water and weaken the box.' },
    { x: 78.5, y: 79, t: 'Landing gear', d: 'Supports the parked trailer. "Won\'t crank" is a common yard call.' },
    { x: 89.5, y: 66, t: 'Kingpin', d: 'Locks into the tractor\'s fifth wheel. Wear or damage is a coupling safety issue.' },
    { x: 93, y: 35, t: 'Nose: glad hands & 7-way', d: 'Air and electrical connections to the tractor.' }
  ], note: 'Whether a part belongs to the tractor or the trailer decides which unit the case is opened on.' },
  loadTypes: { ig: 'versus', icon: 'layers', title: 'How freight fills a trailer: FTL vs LTL vs partial', items: [
    { art: 'ftl', t: 'Full truckload (FTL)', sub: 'One shipper\'s freight uses the trailer.', facts: [['Route', 'Pickup → delivery, usually direct'], ['Handling', 'Loaded once, unloaded once']], watch: 'A breakdown delays one customer, but the whole trailer — recovery often means a tractor swap.' },
    { art: 'ltl', t: 'Less-than-truckload (LTL)', sub: 'Many shippers\' freight shares one trailer.', facts: [['Route', 'Through terminals (hub-and-spoke)'], ['Pricing', 'Freight class (NMFC classes 50–500), weight and distance']], watch: 'Linehaul schedules between terminals: a late trailer can miss its departure and delay every shipment on it.' },
    { art: 'partial', t: 'Partial / volume', sub: 'More than typical LTL, less than a full trailer.', facts: [['Route', 'Often shares a trailer with another partial; few stops'], ['Handling', 'Usually not rehandled at terminals']], watch: 'Multiple appointments on one trip — a delay affects every stop.' }
  ], key: 'The load type tells you how many customers a breakdown affects and whether the freight can wait.' },
  dockTypes: { ig: 'versus', icon: 'clock', title: 'Live load vs drop and hook', items: [
    { art: 'live', tone: 'warning', t: 'Live load / live unload', sub: 'The driver and tractor wait at the dock while freight is loaded or unloaded.', facts: [['Time', 'Free time, then detention per the rate agreement'], ['Equipment', 'Tractor and trailer tied up together']], watch: 'A no-start at the dock blocks the customer\'s door — these calls are urgent even when the fix is simple.' },
    { art: 'drop', tone: 'success', t: 'Drop and hook', sub: 'The driver drops one trailer and hooks a preloaded one.', facts: [['Time', 'Usually much faster for the driver'], ['Equipment', 'Needs more trailers than tractors (a trailer pool)']], watch: 'Trailers sit in customer yards for days. Defects surface at pickup — plan trailer PMs and inspections so pooled trailers don\'t fall behind.' }
  ], key: 'Live loads tie up the tractor; drop-and-hook ties up trailers. Both change where and when you can schedule maintenance.' },
  cargoTypes: { ig: 'versus', icon: 'shield', title: 'Cargo types and what changes for maintenance', items: [
    { art: 'dryvan', t: 'Dry freight', sub: 'No temperature control.', watch: 'Standard urgency — the freight can usually wait for a repair.' },
    { art: 'reefer', tone: 'info', t: 'Temperature-controlled', sub: 'Setpoint from the shipper\'s instructions.', watch: 'Reefer faults are time-critical. Keep the unit running and cargo in range while you arrange service.' },
    { art: 'hazmat', tone: 'critical', t: 'Hazardous materials', sub: 'Regulated under 49 CFR Parts 171–180 (U.S. DOT / PHMSA).', facts: [['Placards', 'Table 1 materials: any amount. Table 2: 1,001 lb or more aggregate'], ['Driver', 'Hazmat (H) endorsement when placards are required']], watch: 'Leaks, fire risk and vendor qualifications. Follow your safety department\'s procedure before arranging any repair.' },
    { art: 'oversize', tone: 'warning', t: 'Oversize / overweight', sub: 'Beyond legal size or weight limits.', facts: [['Permits', 'State permits set routes, travel times, signs/flags and escorts — rules vary by state']], watch: 'A breakdown can push the move outside its permitted route or hours. Involve dispatch or the permit team immediately.' }
  ] },
  weights: { ig: 'axles', icon: 'bar', title: 'Weight per axle group: gross weight isn\'t the only limit', art: 'rig',
    groups: [{ t: 'Trailer tandem', x: 13.2 }, { t: 'Drive tandem', x: 77.2 }, { t: 'Steer axle', x: 91.3 }], limits: [34000, 34000, 12000], gross: 80000,
    rows: [
      { l: 'Balanced', d: 'Legal on every axle group', v: [33900, 33600, 11800] },
      { l: 'Heavy on the drives', d: 'Legal gross, illegal drive tandem', v: [32400, 35200, 11900] },
      { l: 'Over gross', d: 'The load itself must change', v: [35800, 34000, 12000] }
    ],
    note: 'U.S. federal Interstate limits: 34,000 lb per tandem axle group and 80,000 lb gross (23 CFR 658.17), subject to the bridge formula; states set rules for other roads and permits. The 12,000 lb steer figure is a common axle/tire rating used here for illustration, not a federal limit. Sliding the trailer tandem generally shifts weight between the drives and trailer axles; sliding the fifth wheel shifts it between the steer and drives — the driver confirms at a scale.' },
  securement: { ig: 'table', icon: 'shield', title: 'Cargo securement basics (U.S. — 49 CFR 393 Subpart I)', head: ['Rule', 'Requirement', 'Source'], rows: [
    ['Aggregate working load limit', 'Tiedowns together must be rated for at least 50% of the cargo weight', '393.106(d)'],
    ['Article 5 ft or shorter, 1,100 lb or less', 'At least 1 tiedown', '393.110(b)'],
    ['Article 5 ft or shorter over 1,100 lb, or 5–10 ft long', 'At least 2 tiedowns', '393.110(b)'],
    ['Article longer than 10 ft', '2 tiedowns for the first 10 ft, plus 1 for each additional 10 ft or part of 10 ft', '393.110(b)'],
    ['Driver re-inspection', 'Within the first 50 miles, then at every change of duty status, or every 3 hours or 150 miles, whichever comes first', '392.9']
  ], note: 'Tiedown counts apply when an article is not blocked against forward movement; commodity-specific rules (logs, metal coils, heavy equipment and others) add requirements. Summary for orientation only — the regulation and your safety department are the authority.' },
  treadPositions: { ig: 'versus', icon: 'target', title: 'Steer, drive and trailer tires look different for a reason', items: [
    { art: 'tread-steer', t: 'Steer tire', sub: 'Front axle — steering and handling.', facts: [['Tread', 'Rib: grooves run around the tire'], ['U.S. minimum', '4/32 in tread depth'], ['Rule', 'Regrooved tires aren\'t allowed on the front wheels of heavy trucks and tractors (49 CFR 393.75)']] },
    { art: 'tread-drive', t: 'Drive tire', sub: 'Powered axles — traction.', facts: [['Tread', 'Lug/block pattern with deep side slots'], ['U.S. minimum', '2/32 in tread depth'], ['Retreads', 'Commonly used here']] },
    { art: 'tread-trailer', t: 'Trailer tire', sub: 'Free-rolling — carries load, no steering or power.', facts: [['Tread', 'Rib pattern, often shallower'], ['U.S. minimum', '2/32 in tread depth'], ['Retreads', 'Commonly used here']] }
  ], key: 'A tire that is legal on a drive or trailer axle can be illegal on the steer axle. Always record the exact position: steer, drive or trailer — axle, side, inside or outside dual.' },
  tireSection: { ig: 'anatomy', icon: 'target', title: 'Inside a truck tire (cross-section)', art: 'tire-section', w: 420, pins: [
    { x: 50, y: 14, t: 'Tread', d: 'The rubber that touches the road. Depth is measured in the grooves in 32nds of an inch.' },
    { x: 50, y: 30, t: 'Steel belts', d: 'Stiffen the tread area. Belt separation shows up as bulges and vibration — remove from service.' },
    { x: 15, y: 57, t: 'Sidewall', d: 'Carries the size, load and DOT codes. Cuts, bulges or exposed cords are serious — the sidewall isn\'t repairable like the tread area.' },
    { x: 78, y: 62, t: 'Inner liner', d: 'Holds the air in a tubeless tire.' },
    { x: 25.5, y: 85, t: 'Bead', d: 'Steel wire bundle that seals the tire against the wheel.' },
    { x: 50, y: 94, t: 'Wheel (rim)', d: 'Must match the tire\'s rim size exactly. Cracked wheels and loose lug nuts are separate, serious defects.' }
  ] },
  tireCode: { ig: 'decode', icon: 'search', title: 'Reading a tire sidewall: 295/75R22.5 144/141L', parts: [
    ['295', 'Section width', 'Tire width in millimeters, sidewall to sidewall.'], ['/', null],
    ['75', 'Aspect ratio', 'Sidewall height as a percentage of width — 75% of 295 mm.'],
    ['R', 'Construction', 'R = radial.'],
    ['22.5', 'Rim diameter', 'Wheel diameter in inches. Tire and wheel must match.'], [' ', null],
    ['144/141', 'Load index (single/dual)', '144 = 2,800 kg (about 6,170 lb) per tire used single; 141 = 2,575 kg (about 5,680 lb) per tire used in duals.'],
    ['L', 'Speed symbol', 'L = 120 km/h (75 mph) maximum.']
  ], note: 'Other common sizes use an older format, like 11R22.5 (11 = nominal width in inches). The DOT code\'s last four digits show when the tire was made: "2324" = week 23 of 2024. Give the vendor the full size from the sidewall, not from memory.' },
  treadMin: { ig: 'tread', icon: 'target', title: 'Same depth, different verdict: tread depth by position', max: 12, items: [
    { l: 'Steer', v: 6, min: 4 }, { l: 'Steer', v: 3, min: 4 }, { l: 'Drive', v: 3, min: 2 }, { l: 'Trailer', v: 1, min: 2 }
  ], note: 'U.S. minimums under 49 CFR 393.75: 4/32 in for steer tires, 2/32 in for all other positions. 3/32 in is legal on a drive tire but not on a steer tire. Many fleets replace tires well before the legal minimum by policy.' },
  plyTypes: { ig: 'versus', icon: 'layers', title: 'Radial vs bias-ply construction', items: [
    { art: 'radial', t: 'Radial', sub: 'Cords run straight across from bead to bead, with steel belts under the tread.', facts: [['Where', 'The standard for modern highway truck tires'], ['Why', 'Flexible sidewall, stable tread: longer wear, lower rolling resistance']] },
    { art: 'bias', t: 'Bias-ply', sub: 'Cords cross each other at alternating angles.', facts: [['Where', 'Older design; still found on some specialty and off-road equipment'], ['Why', 'Stiff, tough sidewall; more heat and wear at highway speed']] }
  ], key: 'The "R" in the size tells you it\'s radial. Radial and bias tires shouldn\'t be mixed on the same axle.' },
  dualsWide: { ig: 'versus', icon: 'target', title: 'Duals vs wide-base singles', items: [
    { art: 'duals', t: 'Dual tires', sub: 'Two tires on each end of a drive or trailer axle.', facts: [['Plus', 'If one fails, the wheel end isn\'t left bare — but the partner is suddenly overloaded'], ['Watch', 'Both tires must be matched in size and wear to share the load']], watch: 'An underinflated inner dual overloads the outer one. After a flat, have the partner inspected too.' },
    { art: 'widebase', t: 'Wide-base single', sub: 'One wide tire replaces each pair of duals (for example, 445/50R22.5).', facts: [['Plus', 'Lighter; can improve fuel economy'], ['Watch', 'No partner tire — a failure leaves that wheel end with nothing']], watch: 'Roadside stock is thinner in some areas. Keep your fleet\'s wide-base sizes in the tire vendor list.' }
  ], key: 'With duals, the partner tire takes the whole load when one fails and must be inspected too; with a wide-base single there is no partner at all. Either way, the driver stops safely and a tire technician decides whether the unit can move.' },
  brakeTypes: { ig: 'versus', icon: 'zap', title: 'Drum vs air disc brakes', items: [
    { art: 'drum', t: 'S-cam drum brake', sub: 'An S-shaped cam pushes brake shoes against the inside of a drum.', facts: [['Where', 'Long the most common type on North American trucks and trailers'], ['Adjustment', 'Slack adjusters keep the brake in adjustment as linings wear']], watch: 'Out-of-adjustment brakes are a common inspection violation — ask why a brake keeps drifting.' },
    { art: 'disc', t: 'Air disc brake', sub: 'A caliper squeezes pads against a rotor.', facts: [['Where', 'Increasingly common, especially on steer axles'], ['Differences', 'Generally resists fade better; faster pad changes; higher purchase cost']], watch: 'Pads and rotors are different parts from drum shoes — confirm the brake type before ordering or sending a vendor.' }
  ], key: 'Both are air-operated and both are safety-critical. The brake type changes the parts, the labor, and which vendor can do the job.' }
});

/* Beginner M1 — freight and load types */
addLesson('beginner', 'm1', {
  id: 'l3', title: 'Freight, Loads and Weight Basics', minutes: 18,
  objectives: ['Tell FTL, LTL and partial loads apart', 'Explain live loading vs drop and hook', 'Recognize how cargo type changes the urgency of a repair', 'Read axle-group weights against U.S. limits'],
  body: [
    `Every unit you coordinate is either carrying freight, going to get freight, or waiting for it. <strong>What kind of load is on the truck</strong> changes who is affected by a breakdown, how fast you need to move, and which vendor can help.`,
    REF.loadTypes,
    REF.dockTypes,
    { h: 'Cargo type changes the urgency' },
    REF.cargoTypes,
    { h: 'Weight: gross and per axle' },
    `Trucks are limited in total (gross) weight <em>and</em> in weight per axle group. A load can be under 80,000 lb and still be overweight on one axle group — usually fixed by adjusting the trailer tandem slide or re-working the load.`,
    REF.weights,
    { h: 'Securing the load' },
    REF.securement,
    { callout: { kind: 'info', title: 'Who decides?', text: 'Load legality, weight and securement are the driver\'s, dispatch\'s and the safety department\'s responsibility. The coordinator\'s part is knowing that these conditions change the urgency of a repair and the vendor you call — for example, a flatbed breakdown with a strap failure, or a reefer alarm with a temperature-sensitive load.' } }
  ],
  example: { title: 'Same breakdown, three different urgencies', text: `Three tractors lose an alternator on the same morning. <span class="mono">T-201</span> is hauling a dry van of paper towels due tomorrow — you schedule a repair on the route. <span class="mono">T-214</span> is live-unloading at a grocery DC and won\'t restart — the customer\'s dock is blocked, so you call a mobile tech now and tell dispatch. <span class="mono">T-230</span> pulls a reefer with ice cream — the reefer runs on its own engine, so the cargo is safe for now, but you confirm the unit\'s fuel level and temperature before choosing between a mobile repair and a power swap.` },
  practical: { title: 'Name the load type', exercise: {
    type: 'classify', prompt: 'Which kind of load is each description?', categories: ['Full truckload', 'LTL', 'Partial'],
    items: [
      { text: 'Freight from nine shippers moving through a terminal', answer: 'LTL', why: 'Many shippers sharing a trailer through terminals is LTL.' },
      { text: 'One shipper\'s 26 pallets, picked up and delivered direct', answer: 'Full truckload', why: 'One shipper using the whole trailer.' },
      { text: '10 pallets sharing a trailer with another 10-pallet shipment, two delivery stops', answer: 'Partial', why: 'Larger than typical LTL, less than a full trailer, few stops.' },
      { text: 'Priced by freight class, weight and distance', answer: 'LTL', why: 'Freight class (NMFC) pricing is an LTL feature.' },
      { text: 'Trailer sealed at the shipper, opened only at the consignee', answer: 'Full truckload', why: 'No stops or rehandling in between.' }
    ]
  } },
  check: [
    { t: 'mc', q: 'What is the U.S. federal Interstate limit for a tandem axle group?', o: ['20,000 lb', '34,000 lb', '40,000 lb', '80,000 lb'], a: 1, e: '34,000 lb per tandem group; 20,000 lb per single axle; 80,000 lb gross — subject to the bridge formula (23 CFR 658.17).' },
    { t: 'mc', q: 'What does drop and hook require that live loading doesn\'t?', o: ['A hazmat endorsement', 'More trailers than tractors', 'A reefer unit', 'A step deck'], a: 1, e: 'Preloaded trailers wait for drivers, so the fleet needs a pool of extra trailers.' },
    { t: 'tf', q: 'A truck under 80,000 lb gross can still be overweight.', a: true, e: 'Axle-group limits apply separately. Too much weight on the drives is illegal even when the gross is fine.' }
  ],
  takeaways: ['FTL = one shipper; LTL = many shippers through terminals; partial = in between.', 'Live loads tie up the tractor; drop and hook ties up trailers.', 'Reefer, hazmat and oversize loads raise the urgency and narrow the vendor list.', 'Weight limits apply per axle group as well as in total.'],
  tips: ['On every breakdown call, ask "loaded or empty — and with what?" before choosing a plan.', 'For pooled trailers, schedule inspections when a trailer is empty in your own yard.'],
  mistakes: ['Treating a reefer load like dry freight because the tractor issue "isn\'t urgent."', 'Assuming that under 80,000 lb gross means the truck is legal.']
});

/* Beginner M3 — equipment types */
addLesson('beginner', 'm3', {
  id: 'l4', title: 'Equipment Types: Tractors, Trucks and Trailers', minutes: 18,
  objectives: ['Identify common power units and axle configurations', 'Tell the main trailer types apart by sight', 'Explain how equipment type changes the vendor and urgency'],
  body: [
    `Drivers and shops will describe equipment by type — "the 6x2 day cab," "the step deck," "the chassis." Knowing what each looks like and why it exists helps you ask the right questions and send the right vendor.`,
    REF.powerUnits,
    REF.axleConfigs,
    { h: 'Trailer types' },
    REF.enclosedTrailers,
    REF.openDeck,
    REF.specialtyTrailers,
    { h: 'Know the parts of a trailer' },
    REF.dryVanAnatomy,
    { h: 'What equipment type changes for you' },
    { ig: 'table', icon: 'wrench', title: 'Equipment type → coordinator impact', head: ['Equipment', 'Who can usually fix it', 'Extra question to ask'], rows: [
      ['Reefer unit', 'Refrigeration technician or dealer — many trailer shops don\'t service units', 'Box temperature, setpoint and unit fuel level?'],
      ['Tanker', 'Shops qualified for tank equipment (and hazmat work, if applicable)', 'Loaded or empty — and with what? Any leak?'],
      ['Intermodal chassis', 'The chassis provider\'s repair process, or a vendor they authorize', 'Whose chassis is it? (Number is on the chassis.)'],
      ['Step deck / RGN', 'Tire vendors with low-profile sizes; heavy-haul capable shops', 'Is the load permitted? Any route or time conditions?'],
      ['Doubles', 'Any trailer shop — but the dolly is a separate unit', 'Which unit: lead trailer, dolly or rear trailer?']
    ], note: 'Typical patterns, not rules — your vendor list and company procedures decide.' }
  ],
  example: { title: '"The trailer won\'t hold air"', text: `A driver on a step deck reports an air leak at the rear axles. Because you know step decks often run low-profile tires, you ask for the tire size along with the leak details — the driver also mentions a tire is low. You tell the mobile vendor the exact size up front, so they bring a low-profile tire instead of making a second trip.` },
  practical: { title: 'Match the description to the trailer', exercise: {
    type: 'classify', prompt: 'Which trailer type is described?', categories: ['Dry van', 'Reefer', 'Flatbed', 'Step deck', 'Tanker'],
    items: [
      { text: 'Enclosed trailer with a diesel-powered unit on the front wall', answer: 'Reefer', why: 'The refrigeration unit is the giveaway.' },
      { text: 'Open deck; cargo held with straps and covered by tarps', answer: 'Flatbed', why: 'One flat open deck, secured and tarped.' },
      { text: 'Two deck heights so taller machinery fits under the height limit', answer: 'Step deck', why: 'The lower main deck gains cargo height.' },
      { text: 'Carries liquid; the driver needs an N endorsement', answer: 'Tanker', why: 'The tank vehicle endorsement is N.' },
      { text: 'Enclosed box for palletized general freight, no temperature control', answer: 'Dry van', why: 'The most common trailer in truckload freight.' }
    ]
  } },
  check: [
    { t: 'mc', q: 'In a 6x4 tractor, how many axles are driven?', o: ['One', 'Two', 'Four', 'Six'], a: 1, e: 'Six wheel positions, four of them driven — both rear axles.' },
    { t: 'mc', q: 'Main advantage of a step deck over a flatbed?', o: ['It\'s enclosed', 'It carries taller cargo under the same height limit', 'It needs no securement', 'It has a refrigeration unit'], a: 1, e: 'The lower main deck leaves more room under the height limit.' },
    { t: 'tf', q: 'Reefer unit engine hours are tracked separately from trailer miles.', a: true, e: 'The refrigeration unit has its own engine and PM schedule, usually by hours.' }
  ],
  takeaways: ['Day cabs work local; sleepers work long-haul; straight trucks carry cargo on their own chassis.', 'Axle configuration = wheel positions × driven positions.', 'Deck height decides how tall a load fits on open-deck trailers.', 'Reefers, tankers, chassis and dollies each bring their own vendor and questions.'],
  tips: ['Keep a photo sheet of each trailer type your fleet runs, with the unit-number format.', 'Add the equipment type to every case title — "TR-532 reefer" beats "TR-532."'],
  mistakes: ['Sending a trailer shop to a reefer unit fault.', 'Arranging a repair on an intermodal chassis before confirming who owns it.']
});

/* Beginner M3 — tire basics */
addLesson('beginner', 'm3', {
  id: 'l5', title: 'Tire Basics: Positions, Construction and Sidewall Codes', minutes: 16,
  objectives: ['Explain why steer, drive and trailer tires differ', 'Name the main parts of a tire', 'Read a tire size and load index', 'Apply U.S. tread-depth minimums by position'],
  body: [
    `Tire calls are among the most common roadside events. You don\'t change tires — but a precise description of the position, size and damage gets the right tire to the right place on the first trip.`,
    REF.treadPositions,
    REF.tireSection,
    REF.tireCode,
    REF.treadMin,
    REF.plyTypes,
    REF.dualsWide,
    { callout: { kind: 'safety', title: 'Steer tires are never "limp it in"', text: 'A damaged, bulging or low steer tire affects steering control. The driver stops in a safe place and a qualified tire technician decides — never suggest driving on it to reach a cheaper vendor.' } },
    { h: 'The tire-call checklist' },
    { ul: ['Unit number — tractor or trailer?', 'Position: steer, drive or trailer; which axle; left or right; inside or outside dual', 'Full tire size from the sidewall (and wide-base or dual?)', 'What happened: flat, blowout, cut, bulge, low pressure', 'Is the wheel or anything else damaged?', 'Loaded or empty, and exact location'] }
  ],
  example: { title: 'The second trip', text: `A driver reported "a flat on the trailer." The vendor arrived with a standard 11R22.5 — but the trailer ran wide-base singles. The vendor had to leave and come back, adding three hours of downtime. A coordinator who asks for the sidewall size and "dual or single?" avoids the second trip.` },
  practical: { title: 'Which position?', exercise: {
    type: 'classify', prompt: 'Which tire position does each description fit best?', categories: ['Steer', 'Drive', 'Trailer'],
    items: [
      { text: 'Rib tread on the front axle, handles steering', answer: 'Steer', why: 'Steer tires use rib patterns for handling.' },
      { text: 'Deep lug tread under the tractor\'s rear axles', answer: 'Drive', why: 'Lugs give traction on powered axles.' },
      { text: 'Free-rolling, often shallower rib tread', answer: 'Trailer', why: 'Trailer tires carry load but don\'t steer or drive.' },
      { text: 'Must have at least 4/32 in of tread in the U.S.', answer: 'Steer', why: 'Other positions have a 2/32 in minimum.' }
    ]
  } },
  check: [
    { t: 'mc', q: 'In 295/75R22.5, what does 22.5 mean?', o: ['Tread depth', 'Rim diameter in inches', 'Load index', 'Width in inches'], a: 1, e: 'The last number of the size is the wheel (rim) diameter in inches.' },
    { t: 'tf', q: 'A tire at 3/32 in meets the U.S. minimum on a steer axle.', a: false, e: 'Steer tires need at least 4/32 in. 3/32 in is legal only on other positions.' },
    { t: 'mc', q: 'What is different about a flat on a wide-base single compared with a flat on one dual?', o: ['Wide-base tires cost less', 'There is no partner tire at that wheel end', 'Wide-base tires are only used on steers', 'Duals can\'t go flat'], a: 1, e: 'A wide-base single replaces the pair — when it fails, that wheel end has nothing.' }
  ],
  takeaways: ['Tread pattern matches the job: rib to steer, lug to drive, free-rolling on trailers.', 'Read the size from the sidewall and give it to the vendor exactly.', 'Tread minimums differ by position: 4/32 in steer, 2/32 in others (U.S.).', 'Duals share the load; wide-base singles have no backup.'],
  tips: ['Ask the driver for a photo of the sidewall size and the damage when it\'s safe.', 'Keep your fleet\'s tire sizes per unit type in your vendor notes.'],
  mistakes: ['Ordering by "the usual size" without checking the unit.', 'Recording "rear tire" instead of axle, side and inside/outside.']
});

/* Existing lessons: brakes and advanced tires */
enrich('beginner.m3.l2', { at: 3, add: [REF.brakeTypes] });
enrich('advanced.m4.l3', { add: [REF.treadMin, REF.dualsWide] });

/* Official sources for the regulatory facts used across the academy */
Object.assign(REF, {
  scope: { callout: { kind: 'info', title: 'Scope of this academy', text: 'MC Academy is educational training. Regulations cited are U.S. federal rules (FMCSA, PHMSA, FHWA) and the CVSA inspection standards used in North America; states can add their own rules, and every carrier has its own procedures and approval limits. Nothing here is legal, regulatory or professional advice — when a rule matters for a real decision, check the current official source and your safety department.' } },
  sources: { ig: 'table', icon: 'shield', title: 'Official sources for the academy regulatory facts', head: ['Topic', 'Official source', 'Used in'], rows: [
    ['Federal Motor Carrier Safety Regulations (49 CFR Parts 390-399)', '<a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B" target="_blank" rel="noopener noreferrer">eCFR - Title 49, Subchapter B</a>', 'Vehicle parts, inspection, repair and maintenance, driving rules'],
    ['Tires, including tread depth (49 CFR 393.75)', '<a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-G/section-393.75" target="_blank" rel="noopener noreferrer">eCFR - 393.75</a>', 'Tire lessons, Quick Reference'],
    ['Cargo securement (49 CFR 393 Subpart I)', '<a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-I" target="_blank" rel="noopener noreferrer">eCFR - Part 393, Subpart I</a>', 'Freight and loads lesson'],
    ['Inspection, repair and maintenance; DVIRs (49 CFR Part 396)', '<a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-396" target="_blank" rel="noopener noreferrer">eCFR - Part 396</a>', 'Inspections and DVIR lessons'],
    ['Warning devices after a stop (49 CFR 392.22)', '<a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-392/subpart-C/section-392.22" target="_blank" rel="noopener noreferrer">eCFR - 392.22</a>', 'Roadside lessons'],
    ['Hours of Service', '<a href="https://www.fmcsa.dot.gov/regulations/hours-of-service" target="_blank" rel="noopener noreferrer">FMCSA - Hours of Service</a>', 'Dispatch and downtime lessons'],
    ['CDL endorsements (49 CFR 383.93)', '<a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-383/subpart-E/section-383.93" target="_blank" rel="noopener noreferrer">eCFR - 383.93</a>', 'Equipment types lesson'],
    ['Vehicle weight limits (23 CFR 658.17)', '<a href="https://www.ecfr.gov/current/title-23/chapter-I/subchapter-G/part-658/section-658.17" target="_blank" rel="noopener noreferrer">eCFR - 658.17</a>', 'Freight and loads lesson'],
    ['Bridge formula', '<a href="https://ops.fhwa.dot.gov/freight/publications/brdg_frm_wghts/" target="_blank" rel="noopener noreferrer">FHWA - Bridge Formula Weights</a>', 'Freight and loads lesson'],
    ['Hazmat placarding (49 CFR 172.504)', '<a href="https://www.ecfr.gov/current/title-49/subtitle-B/chapter-I/subchapter-C/part-172/subpart-F/section-172.504" target="_blank" rel="noopener noreferrer">eCFR - 172.504</a>', 'Cargo types'],
    ['Hazardous materials program', '<a href="https://www.phmsa.dot.gov/about-phmsa/offices/office-hazardous-materials-safety" target="_blank" rel="noopener noreferrer">PHMSA - Office of Hazardous Materials Safety</a>', 'Cargo types'],
    ['Out-of-service criteria', '<a href="https://cvsa.org/inspections/out-of-service-criteria/" target="_blank" rel="noopener noreferrer">CVSA - Out-of-Service Criteria</a>', 'Safety and inspection lessons'],
    ['Roadside inspection levels', '<a href="https://cvsa.org/inspections/all-inspection-levels/" target="_blank" rel="noopener noreferrer">CVSA - All Inspection Levels</a>', 'Inspection lessons, Quick Reference']
  ], note: 'Regulations change. The links go to the current official text; the academy summarizes it for orientation only.' }
});
