/* =========================================================================
   MAINTENANCE COORDINATOR ACADEMY — script.js (built by tools/build.mjs)
   GENERATED: the track outline below comes from src/01-beginner.js…03k2-job-realism.js.
   Lesson text is in content/<track>.json and loaded on demand (05l-content).
   Edit the src/ modules, not this file.
   ========================================================================= */
(function () {
'use strict';
const TRACKS = [{"id":"beginner","level":"Beginner","title":"Maintenance Coordinator Fundamentals","short":"Fundamentals","icon":"grad","color":"var(--track-beginner)","summary":"Start from zero. Learn how a trucking company runs, what the Maintenance Coordinator does, the basic parts of a truck, and how to handle a maintenance call from first report to closed case.","outcomes":["Understand fleet structure and every department you work with","Turn vague driver complaints into actionable maintenance information","Recognize safety-critical situations","Run the complete maintenance workflow and document it properly"],"modules":[{"id":"m1","title":"Introduction to Trucking","summary":"How a trucking company makes money, how a fleet is organized, and who does what.","lessons":[{"id":"l1","title":"How a Trucking Company Works","minutes":12},{"id":"l2","title":"Who's Who: Roles and Departments","minutes":14},{"id":"l3","title":"Freight, Loads and Weight Basics","minutes":18}]},{"id":"m2","title":"What Does a Maintenance Coordinator Do?","summary":"The core responsibilities — and the boundaries — of the role.","lessons":[{"id":"l1","title":"Core Responsibilities","minutes":13},{"id":"l2","title":"Tracking, Follow-Up and Closing the Loop","minutes":12}]},{"id":"m3","title":"Basic Truck Knowledge","summary":"The major systems of a tractor and trailer — enough to understand, not to repair.","lessons":[{"id":"l1","title":"Powertrain and Engine Systems","minutes":16},{"id":"l2","title":"Chassis, Brakes, Tires and Trailer","minutes":16},{"id":"l3","title":"Reading the Dashboard: Gauges and Warning Lamps","minutes":15},{"id":"l4","title":"Equipment Types: Tractors, Trucks and Trailers","minutes":18},{"id":"l5","title":"Tire Basics: Positions, Construction and Sidewall Codes","minutes":16}]},{"id":"m4","title":"Understanding Driver Complaints","summary":"Turn vague reports into clear, useful maintenance information.","lessons":[{"id":"l1","title":"From \"Weird Noise\" to Useful Information","minutes":14},{"id":"l2","title":"Complaint Interviews in Practice","minutes":14}]},{"id":"m5","title":"Safety and Roadside Situations","summary":"Recognize safety-critical problems and when a vehicle should not continue.","lessons":[{"id":"l1","title":"Breakdowns, Safety-Critical Issues and Stop Decisions","minutes":14},{"id":"l2","title":"Common Roadside Situations","minutes":15},{"id":"l3","title":"The First 10 Minutes of a Roadside Event","minutes":13}]},{"id":"m6","title":"Maintenance Workflow","summary":"The complete maintenance process from driver report to closed case.","lessons":[{"id":"l1","title":"The Maintenance Workflow, Step by Step","minutes":15},{"id":"l2","title":"Workflow in Action: One Case, Start to Finish","minutes":14}]},{"id":"m7","title":"Communication","summary":"Clear, professional communication with every party you work with.","lessons":[{"id":"l1","title":"Communicating with Drivers and Dispatch","minutes":14},{"id":"l2","title":"Shops, Technicians, Vendors and Management","minutes":14}]},{"id":"m8","title":"Documentation","summary":"What to record, how to record it, and why it matters.","lessons":[{"id":"l1","title":"What to Document","minutes":13},{"id":"l2","title":"Parts, Labor, Downtime and Invoices","minutes":14}]},{"id":"m9","title":"Inspections, DVIRs and Compliance Records","summary":"How inspections and maintenance records keep equipment legal — and what the coordinator's part is.","lessons":[{"id":"l1","title":"Driver Inspections and the DVIR Loop","minutes":15},{"id":"l2","title":"Maintenance Records and Roadside Inspections","minutes":16}]}],"final":{"id":"beginner-final","kind":"exam","title":"Beginner Final Exam: The Maintenance Call","minutes":25}},{"id":"advanced","level":"Advanced","title":"Fleet Maintenance Operations","short":"Operations","icon":"wrench","color":"var(--track-advanced)","summary":"Run day-to-day fleet maintenance operations: preventive maintenance, diagnostics, estimates, vendors, downtime, dispatch coordination, fleet tracking and cost control.","outcomes":["Plan and manage preventive maintenance","Read diagnostic information and coordinate intelligently","Review estimates and control repair costs","Coordinate maintenance with dispatch to protect loads"],"modules":[{"id":"m1","title":"Preventive Maintenance","summary":"PM schedules, intervals, service history and overdue maintenance.","lessons":[{"id":"l1","title":"PM Schedules and Intervals","minutes":15},{"id":"l2","title":"Service History and Overdue Maintenance","minutes":13}]},{"id":"m2","title":"Diagnostics","summary":"Warning lights, DTCs and diagnostic reports — enough to coordinate intelligently.","lessons":[{"id":"l1","title":"Warning Lights, Messages and DTCs","minutes":15},{"id":"l2","title":"Symptoms, Root Causes and Diagnostic Reports","minutes":14},{"id":"l3","title":"Aftertreatment Deep Dive: DPF, DEF and Regeneration","minutes":17}]},{"id":"m3","title":"Repairs and Estimates","summary":"Labor, parts, shop rates, fees, approvals, warranty and core charges.","lessons":[{"id":"l1","title":"Anatomy of an Estimate","minutes":15},{"id":"l2","title":"Additional Repairs, Approvals and Warranty","minutes":15}]},{"id":"m4","title":"Vendor and Shop Management","summary":"Finding, choosing and working with repair facilities, mobile service and towing.","lessons":[{"id":"l1","title":"Finding and Choosing Repair Facilities","minutes":14},{"id":"l2","title":"Mobile Service, Towing and Geographic Coverage","minutes":13},{"id":"l3","title":"Tires: Positions, Wear Patterns and Tire Calls","minutes":16}]},{"id":"m5","title":"Downtime Management","summary":"Break downtime into its parts and shorten each one.","lessons":[{"id":"l1","title":"The Components of Downtime","minutes":14},{"id":"l2","title":"Return-to-Service ETAs","minutes":13}]},{"id":"m6","title":"Dispatch and Operations Coordination","summary":"How maintenance affects loads, appointments, drivers and equipment plans.","lessons":[{"id":"l1","title":"How Maintenance Affects Loads and Drivers","minutes":14},{"id":"l2","title":"Replacement Equipment and Recovery Plans","minutes":13}]},{"id":"m7","title":"Fleet Tracking","summary":"Track units, PM status, open repairs, downtime, repeat failures and vendor activity.","lessons":[{"id":"l1","title":"What to Track and Why","minutes":12},{"id":"l2","title":"Using the Fleet Dashboard","minutes":18}]},{"id":"m8","title":"Cost Control","summary":"Repair costs, preventive vs reactive, cost per mile, vendor pricing and downtime cost.","lessons":[{"id":"l1","title":"Repair Costs and Cost per Mile","minutes":15},{"id":"l2","title":"Repeat Repairs, Vendor Pricing and Downtime Cost","minutes":15}]},{"id":"m9","title":"Parts and Inventory Management","summary":"Sourcing the right parts fast — and stocking the right ones before you need them.","lessons":[{"id":"l1","title":"Parts Sourcing: OEM, Aftermarket and Remanufactured","minutes":16},{"id":"l2","title":"Inventory Basics: Stocking, Reorder Points and Cores","minutes":16}]}],"final":{"id":"advanced-final","kind":"exam","title":"Advanced Final Project: Operations Board","minutes":35}},{"id":"expert","level":"Expert","title":"Maintenance Coordination & Fleet Management","short":"Management","icon":"award","color":"var(--track-expert)","summary":"Think like a fleet maintenance leader: strategy, analytics, root cause analysis, complex coordination, vendor performance, warranty, leadership and emergency operations.","outcomes":["Measure fleet performance with the right KPIs","Find and eliminate root causes of repeat failures","Coordinate complex, multi-party breakdowns under pressure","Lead communication and escalation across the organization"],"modules":[{"id":"m1","title":"Fleet Maintenance Strategy","summary":"Planning, reliability, PM strategy, lifecycle and replacement.","lessons":[{"id":"l1","title":"Maintenance Planning and Fleet Reliability","minutes":15},{"id":"l2","title":"Failure Trends, Lifecycle and Replacement Planning","minutes":14},{"id":"l3","title":"Maintenance Budgeting and Forecasting","minutes":16}]},{"id":"m2","title":"Advanced Fleet Analytics","summary":"The KPIs that measure a maintenance operation — with interactive calculators.","lessons":[{"id":"l1","title":"Cost, Downtime and Compliance KPIs","minutes":18},{"id":"l2","title":"Reliability Metrics, Vendor Performance and Availability","minutes":18}]},{"id":"m3","title":"Root Cause Analysis","summary":"From symptom to failure to root cause — and stopping repeat failures.","lessons":[{"id":"l1","title":"Symptom → Failure → Root Cause","minutes":15},{"id":"l2","title":"RCA in Practice: The Repeat Failure","minutes":16}]},{"id":"m4","title":"Complex Breakdown Coordination","summary":"Coordinate multi-party breakdowns under time pressure.","lessons":[{"id":"l1","title":"Running Parallel Workstreams","minutes":15},{"id":"l2","title":"Simulation: Breakdown Under Pressure","minutes":20}]},{"id":"m5","title":"Vendor Performance","summary":"Evaluate and manage vendors with data.","lessons":[{"id":"l1","title":"Building a Vendor Scorecard","minutes":15},{"id":"l2","title":"Managing Vendor Relationships","minutes":13}]},{"id":"m6","title":"Warranty and Maintenance History","summary":"Identify warranty, use history, and communicate claims.","lessons":[{"id":"l1","title":"Identifying Warranty Opportunities","minutes":14},{"id":"l2","title":"Warranty Communication and Documentation","minutes":13}]},{"id":"m7","title":"Leadership and Communication","summary":"Escalation, difficult conversations, and communicating up and out.","lessons":[{"id":"l1","title":"Escalation and Difficult Conversations","minutes":15},{"id":"l2","title":"Leadership Scenarios","minutes":16}]},{"id":"m8","title":"Emergency Fleet Operations","summary":"Operate through major disruptions with multiple units down.","lessons":[{"id":"l1","title":"Operating Under Disruption","minutes":15},{"id":"l2","title":"Disruption Drill","minutes":18},{"id":"l3","title":"After-Action Reviews: Learning From Disruptions","minutes":14}]},{"id":"m9","title":"Telematics and Data-Driven Maintenance","summary":"Use connected-vehicle data and maintenance systems to prevent failures, not just record them.","lessons":[{"id":"l1","title":"Telematics and Remote Diagnostics","minutes":17},{"id":"l2","title":"Building a Data-Driven Maintenance Program","minutes":17}]}],"final":{"id":"expert-final","kind":"sim","title":"Expert Final Simulation: Fleet Operations Day","minutes":40}},{"id":"operations","level":"Operations","title":"Transportation Operations","short":"Operations","icon":"route","color":"var(--track-operations)","summary":"An optional track on the freight side of trucking: carriers and brokers, load boards and dispatch, Hours of Service, route planning and fuel, and how carriers invoice and get paid. Take it any time — it doesn't depend on the maintenance tracks.","outcomes":["Explain who is who on a load: shipper, broker, carrier, driver and receiver","Follow a load from booking to payment","Judge whether a delay still fits a driver's hours and the delivery appointment","Prepare an accurate invoice with the right supporting documents"],"modules":[{"id":"m1","title":"Freight Market, Dispatch and Driver Hours","summary":"Carriers, brokers, load boards and dispatch — plus the Hours of Service, route and fuel limits dispatch plans around.","lessons":[{"id":"l1","title":"The Freight Market: Carriers, Brokers, Load Boards and Dispatch","minutes":16},{"id":"l2","title":"Hours of Service, Route Planning and Fuel","minutes":17}]},{"id":"m2","title":"Trucking Invoicing: From Load to Payment","summary":"What goes on a trucking invoice, the documents behind it, and how carriers get paid.","lessons":[{"id":"l1","title":"What Is a Trucking Invoice?","minutes":16},{"id":"l2","title":"The Documents Behind Every Invoice","minutes":16},{"id":"l3","title":"The Invoicing Workflow and How to Submit","minutes":17},{"id":"l4","title":"Accessorials, Payment Terms and Factoring","minutes":18},{"id":"l5","title":"Invoice Errors, Rejections and Building an Invoice","minutes":20}]}],"final":{"id":"operations-final","kind":"exam","title":"Operations Final: From Load to Payment","minutes":25}}];
const [BEGINNER, ADVANCED, EXPERT, OPERATIONS] = ['beginner', 'advanced', 'expert', 'operations'].map((id) => TRACKS.find((t) => t.id === id));
const REF = {"urgency":{"ig":"matrix","icon":"target","title":"The urgency matrix","y":"Safety risk","x":"Operational impact","q":[{"t":"Hold — repair before it moves","tone":"critical","items":["Trailer lights out at the yard","Brake defect found on an empty unit","Expired annual inspection"]},{"t":"Stop & fix now","tone":"critical","items":["Brake air leak, loaded, deadline today","Damaged steer tire","Red STOP ENGINE lamp"]},{"t":"Schedule","tone":"success","items":["Amber lamp, running normally, empty","Cab comfort items","PM due in 2,000 miles"]},{"t":"Fast-track the repair","tone":"warning","items":["Derate on a loaded truck (safe location)","Reefer alarm with cargo","Parts delay on a loaded unit"]}],"note":"Safety risk always overrides operational impact: anything in the top row does not move until a qualified technician clears it."},"lamps":{"ig":"scale","icon":"alert","title":"Warning lamp color guide","stops":[{"t":"Green / blue","d":"Information — a system is on or active.","tone":"success"},{"t":"Amber","d":"Attention — diagnose soon; watch for any change.","tone":"warning"},{"t":"Amber + power loss","d":"Likely derate — get to a safe place; arrange prompt diagnosis.","tone":"warning"},{"t":"Red","d":"Serious — stop safely as soon as possible.","tone":"critical"}],"note":"Symbols vary by manufacturer; color is the most reliable first clue. Always ask the driver to read the exact message."},"update":{"ig":"process","icon":"message","title":"The dispatch update formula","items":[{"icon":"truck","t":"Unit","d":"Tractor + trailer"},{"icon":"activity","t":"Status","d":"Down, at shop, rolling"},{"icon":"wrench","t":"Cause","d":"Short and factual"},{"icon":"clock","t":"ETR","d":"With confidence level"},{"icon":"route","t":"Impact","d":"Load and appointment"},{"icon":"phone","t":"Next update","d":"A specific time"}]},"intake":{"ig":"card","icon":"clipboard","title":"The complaint intake card","form":"Case intake · T-127","rows":[["Safe location?","Yes — truck stop, off the roadway"],["Unit / trailer","T-127 / TR-532"],["Location","Love's, I-40 exit 76, Amarillo TX"],["Odometer / hours","412,880 mi"],["What happened","Hissing, low-air warning cycling on/off"],["When / trend","~20 min ago · getting worse"],["Where on vehicle","Rear of tractor, drive-axle area"],["Lamps / codes","Low-air warning"],["Performance","Air gauge drops fast when braking"],["Load / deadline","Loaded · delivery 13:00"]],"note":"Ten fields, about two minutes on the phone. Every field answers a question the vendor, dispatch or the case log will ask later."},"ladder":{"ig":"ladder","icon":"trend","title":"The escalation ladder","levels":[{"t":"Coordinator","d":"Within your approval limit and written procedure."},{"t":"Lead / supervisor","d":"Capacity conflicts, unclear procedure, disputes with dispatch."},{"t":"Fleet manager","d":"Costs above your limit, repeat failures, vendor disputes."},{"t":"Leadership","d":"Major customer impact, policy or budget decisions."}],"note":"Safety or compliance concerns go to the safety department immediately — at any level, without climbing the ladder first."},"triage":{"ig":"pyramid","icon":"layers","title":"Disruption triage pyramid","levels":[{"t":"Life safety","d":"People in danger, vehicles in unsafe locations.","tone":"critical"},{"t":"Safety-critical defects","d":"Brakes, steering, tires, lighting, fire risk.","tone":"critical"},{"t":"Time-critical cargo","d":"Reefer loads, hard deadlines, high-value freight.","tone":"warning"},{"t":"Revenue impact","d":"Loaded units first, then empty units.","tone":"info"},{"t":"Routine","d":"Defer and schedule.","tone":"success"}]},"kpis":{"ig":"formulas","icon":"bar","title":"Core KPI formulas","items":[{"t":"Cost per mile","f":"maintenance cost ÷ miles","d":"Lower is better"},{"t":"Downtime %","f":"downtime h ÷ available h × 100","d":"Lower is better"},{"t":"Fleet availability","f":"(available h − downtime h) ÷ available h","d":"Higher is better"},{"t":"PM compliance","f":"PMs on time ÷ PMs due × 100","d":"Higher is better"},{"t":"Repeat repair rate","f":"repeat repairs ÷ total repairs","d":"Lower is better"},{"t":"Breakdown frequency","f":"road calls ÷ miles × 100,000","d":"Lower is better"},{"t":"MTBF","f":"operating h ÷ failures","d":"Higher is better"},{"t":"MTTR","f":"repair h ÷ repairs","d":"Lower is better"}]},"tireRules":{"ig":"stats","icon":"target","title":"Tire and roadside numbers to know (U.S.)","items":[{"v":"18","l":"tires on a standard five-axle tractor-trailer","tone":"info"},{"v":"4/32","u":"in","l":"minimum steer-tire tread depth","tone":"critical"},{"v":"2/32","u":"in","l":"minimum tread depth on other positions","tone":"warning"},{"v":"10","u":"min","l":"to place warning devices after a stop on the road","tone":"info"}],"note":"Based on FMCSA rules (49 CFR 393.75 and 392.22). Your safety department is the authority on how they apply."},"workorder":{"ig":"annotated","icon":"file","title":"Anatomy of a repair order","lines":[["RO# 88213 · Lone Star Truck Center — Dallas, TX",1],["Unit T-114 · VIN …48213 · Odo 512,340 · Eng hrs 18,902",2],["Complaint: Coolant leak, front of engine",3],["Cause: Water pump seal failure",4],["Correction: Replaced water pump, pressure tested system",5],["Parts $620 · Labor 4.5 h @ $190 · Supplies $45",6],["In 06/12 08:40 · Out 06/12 15:55 · PO 22019",7]],"notes":[{"n":1,"t":"Reference numbers","d":"Tie the invoice to your case and PO."},{"n":2,"t":"Identity & meters","d":"Needed for warranty and PM intervals."},{"n":3,"t":"Complaint","d":"What the driver reported."},{"n":4,"t":"Cause","d":"What the technician found."},{"n":5,"t":"Correction","d":"What was actually done."},{"n":6,"t":"Cost detail","d":"Compare line by line to the approved estimate."},{"n":7,"t":"Times & approval","d":"Downtime math and the approval trail."}]},"roadside":{"ig":"process","icon":"route","title":"The roadside pattern","items":[{"icon":"shield","t":"Make it safe","d":"Off the road, hazards, warning devices"},{"icon":"clipboard","t":"Gather facts","d":"Unit, location, symptom, lamps"},{"icon":"wrench","t":"Right help","d":"Tire, mobile tech or tow"},{"icon":"message","t":"Communicate","d":"Driver, dispatch, safety"},{"icon":"clock","t":"Track to release","d":"Follow-ups until rolling"}]},"pinout":{"ig":"table","icon":"zap","title":"The 7-way trailer connector (SAE J560 color code)","head":["Wire color","Typical circuit","If it fails"],"rows":[["<span class=\"swatch\" style=\"background:#f4f4f4\"></span> White","Ground","Several or all trailer lights act up at once"],["<span class=\"swatch\" style=\"background:#222\"></span> Black","Clearance, marker & ID lamps","Marker lights out"],["<span class=\"swatch\" style=\"background:#e0b400\"></span> Yellow","Left turn signal","Left turn signal out"],["<span class=\"swatch\" style=\"background:#c62828\"></span> Red","Stop (brake) lamps","No brake lights — safety-critical"],["<span class=\"swatch\" style=\"background:#2e7d32\"></span> Green","Right turn signal","Right turn signal out"],["<span class=\"swatch\" style=\"background:#6d4c41\"></span> Brown","Tail, license & clearance lamps","Tail lights out — safety-critical at night"],["<span class=\"swatch\" style=\"background:#1565c0\"></span> Blue","Auxiliary — commonly trailer ABS power","Trailer ABS lamp may come on"]],"note":"Common industry convention. Individual trailers can differ — technicians confirm with a tester."},"fmi":{"ig":"table","icon":"zap","title":"Common J1939 FMI codes","head":["FMI","Meaning","What it often points to"],"rows":[["0","Data valid but above normal range — most severe","A real condition: pressure/temperature too high"],["1","Data valid but below normal range — most severe","A real condition: pressure/level too low"],["2","Data erratic, intermittent or incorrect","Intermittent sensor, wiring or connector"],["3","Voltage above normal, or shorted to high source","Wiring/sensor circuit problem"],["4","Voltage below normal, or shorted to low source","Wiring/sensor circuit problem"],["5","Current below normal, or open circuit","Broken wire, unplugged connector"],["7","Mechanical system not responding or out of adjustment","A component isn't doing what it's told"],["31","Condition exists","A reported state — read the SPN description"]],"note":"SAE J1939 failure mode identifiers. FMIs 3–6 usually suggest an electrical circuit issue; 0 and 1 usually suggest the measured condition itself is out of range. A technician confirms either way."},"cvsa":{"ig":"table","icon":"shield","title":"CVSA roadside inspection levels","head":["Level","Name","What's checked"],"rows":[["I","North American Standard Inspection","Driver documents and a full vehicle inspection, including under the vehicle"],["II","Walk-Around","Driver documents and vehicle items checkable without going under it"],["III","Driver-Only","Driver credentials, hours of service, documents"],["IV","Special Inspection","A one-time examination of a particular item"],["V","Vehicle-Only","Full vehicle inspection without the driver present"],["VI","Enhanced (radioactive shipments)","Select radiological shipments"],["VII","Jurisdictional Mandated","A state or provincial program that does not meet any other level; no CVSA decal"],["VIII","Electronic","Data checked wirelessly while the vehicle is moving, with no officer contact"]],"note":"A vehicle that passes a Level I, V or VI inspection with no critical violations may receive a CVSA decal, valid for up to three months."},"dvir":{"ig":"process","icon":"clipboard","title":"The DVIR repair loop","items":[{"icon":"clipboard","t":"Driver inspects","d":"Pre-trip / post-trip"},{"icon":"file","t":"Defect reported","d":"On the DVIR"},{"icon":"wrench","t":"Repair","d":"Before operating, if safety-related"},{"icon":"check-circle","t":"Certify","d":"Repair (or no repair needed) certified"},{"icon":"users","t":"Next driver reviews","d":"Signs off before driving"}],"note":"Based on FMCSA 49 CFR 396.11 and 396.13. Your safety department defines exactly how your company completes each step."},"reorder":{"ig":"formulas","icon":"layers","title":"Parts stocking formulas","items":[{"t":"Reorder point","f":"daily usage × lead time days + safety stock","d":"Order when stock hits this"},{"t":"Safety stock","f":"extra units for demand/lead-time swings","d":"Buffer against stockouts"},{"t":"Inventory turns","f":"annual parts cost used ÷ avg inventory value","d":"Higher = leaner"},{"t":"Fill rate","f":"requests filled from stock ÷ total requests","d":"Higher = fewer delays"}]},"powerUnits":{"ig":"versus","icon":"truck","title":"Power units: what pulls or carries the freight","items":[{"art":"daycab","t":"Day cab tractor","sub":"No sleeping compartment.","facts":[["Typical work","Local and regional — driver home daily"],["Duty","Many stops, frequent coupling and uncoupling"]],"watch":"Brakes and clutch/transmission wear from stop-start work; fifth wheel and glad hands from frequent coupling."},{"art":"sleeper","t":"Sleeper tractor","sub":"Sleeper berth behind the seats.","facts":[["Typical work","Long-haul, multi-day trips"],["Duty","Long highway miles"]],"watch":"Mileage-based PMs, aftertreatment, and cab comfort systems the driver lives with (HVAC, APU — auxiliary power unit — if equipped)."},{"art":"straight","t":"Straight truck (box truck)","sub":"Cab and cargo body on one chassis — no separate trailer.","facts":[["Typical work","Local delivery"],["License","Class B CDL when GVWR is 26,001 lb or more"]],"watch":"Cargo body, doors and liftgate (if equipped) — plus the same brakes and tires as any truck."},{"art":"yard","t":"Yard tractor","sub":"Also called a terminal tractor, spotter or yard dog.","facts":[["Typical work","Moving trailers around yards, ports and warehouses"],["Coupling","Hydraulic fifth wheel lifts the trailer"]],"watch":"Hydraulics and fifth wheel; very high engine hours compared with miles, so PMs are usually hour-based."}],"key":"A tractor pulls a separate trailer; a straight truck carries the cargo on its own chassis. Knowing which one broke tells you whether the freight can be moved by swapping power."},"axleConfigs":{"ig":"versus","icon":"gauge","title":"Tractor axle configurations (driven wheels highlighted)","items":[{"art":"axle-4x2","t":"4x2","sub":"Two axles — one driven rear axle.","facts":[["Weight","Lightest of the three"],["Common use","Local and regional work, lighter loads"]]},{"art":"axle-6x4","t":"6x4","sub":"Three axles — both rear axles driven.","facts":[["Traction","Best of the three"],["Common use","The usual setup for heavy over-the-road tractors"]]},{"art":"axle-6x2","t":"6x2","sub":"Three axles — only one rear axle driven.","facts":[["Trade-off","Lighter, can save fuel, but less traction on slippery roads"],["Common use","Highway fleets focused on fuel economy"]]}],"key":"The first number counts wheel positions (duals count as one); the second counts how many of them are driven. A 6x2 stuck on ice is a traction limit, not necessarily a defect — ask before you send a technician."},"enclosedTrailers":{"ig":"versus","icon":"layers","title":"Enclosed trailers: dry van vs reefer","items":[{"art":"dryvan","t":"Dry van","sub":"Enclosed box, no temperature control. The most common trailer in truckload freight.","facts":[["Common lengths","53 ft; also 48 ft and 28 ft \"pups\""],["Width","102 in (8.5 ft) — U.S. federal width limit"],["Freight","Palletized and boxed general freight"]],"use":"Retail, packaged goods, paper, parts — anything that doesn't need temperature control.","watch":"Doors, hinges and seals; floor and roof damage; lights; tires; brakes; tandem slider pins."},{"art":"reefer","tone":"info","t":"Reefer (refrigerated van)","sub":"Insulated box plus a front-mounted refrigeration unit, commonly with its own diesel engine and fuel tank.","facts":[["Tracked by","Trailer miles + reefer unit engine hours"],["Setpoint","From the shipper's instructions on the load paperwork"],["Inside space","Slightly less than a dry van (insulated walls)"]],"use":"Food, pharmaceuticals, flowers, chemicals — anything temperature-sensitive, hot or cold.","watch":"Unit PMs by hours, alarms, unit fuel, door seals, and temperature records. A reefer failure with cargo aboard is time-critical."}],"key":"Same box, different risk: a dry-van breakdown delays freight; a reefer failure can destroy it. Reefer units often need a refrigeration technician, not a trailer shop."},"openDeck":{"ig":"versus","icon":"layers","title":"Open-deck trailers: how deck height changes what fits","items":[{"art":"flatbed","t":"Flatbed","sub":"One flat deck (roughly 5 ft off the ground), loaded from the sides or top.","facts":[["Common lengths","48 ft and 53 ft"],["Securement","Straps, chains and tarps — 49 CFR 393 Subpart I"]],"use":"Lumber, steel, building materials, pipe.","watch":"Deck boards, winches, stake pockets, worn straps/chains, lights, tires."},{"art":"stepdeck","t":"Step deck (drop deck)","sub":"Short upper deck over the kingpin, then a lower main deck.","facts":[["Why","Lower deck carries taller cargo than a flatbed within the same height limit"],["Wheels","Often smaller, low-profile tires"]],"use":"Machinery and tall loads that would be over height on a flatbed.","watch":"Low-profile tires (check stock before a roadside call), deck, ramps if equipped."},{"art":"rgn","t":"RGN / lowboy","sub":"Removable gooseneck (RGN) detaches so equipment can drive on from the front; very low well deck.","facts":[["Why","Tallest and heaviest equipment"],["Permits","Loads are often oversize/overweight and need state permits"]],"use":"Excavators, dozers, cranes, transformers.","watch":"Gooseneck hydraulics or mechanism, extra axles, deck — and the permit conditions if a breakdown delays the move."}],"key":"The lower the deck, the taller the cargo that fits under the height limit (dashed red line). The limit itself varies by state — commonly 13 ft 6 in — so drivers and dispatch check routes for tall loads."},"specialtyTrailers":{"ig":"versus","icon":"layers","title":"Specialty equipment: tanker, intermodal chassis, doubles","items":[{"art":"tanker","t":"Tanker","sub":"Carries liquids, gases or dry bulk.","facts":[["Driver","CDL tank vehicle (N) endorsement; hazmat (H) too if the load is placarded hazmat"],["Handling","Liquid surge; many tanks have baffles or compartments"]],"watch":"Valves, hoses, vapor recovery, wash records. Hazmat cargo tanks have periodic test and inspection requirements (49 CFR Part 180)."},{"art":"intermodal","t":"Intermodal chassis","sub":"A frame that carries a shipping container between ports, rail ramps and customers.","facts":[["Containers","Commonly 20, 40, 45 and 53 ft"],["Ownership","Often a chassis pool or provider — not the carrier"]],"watch":"Lights, tires, brakes and twist locks. Confirm who provides the chassis before arranging a repair — that decides who authorizes and pays."},{"art":"doubles","t":"Doubles","sub":"Two short (about 28 ft) trailers joined by a converter dolly.","facts":[["Driver","CDL doubles/triples (T) endorsement"],["Common in","LTL networks"]],"watch":"The dolly is its own unit: tires, brakes, lights, drawbar eye and safety chains."}],"key":"Each of these adds a party or a requirement: tank qualifications, a chassis owner, or a third unit (the dolly) that needs its own inspection and records."},"dryVanAnatomy":{"ig":"anatomy","icon":"search","title":"Parts of a dry van trailer","art":"dryvan","w":680,"pins":[{"x":8,"y":38.5,"t":"Rear swing doors","d":"Hinges, seals, lock rods. A door that won't latch can stop a load."},{"x":8.5,"y":73,"t":"Rear impact guard","d":"The \"ICC bar.\" Damage or missing parts are inspection violations."},{"x":20,"y":85,"t":"Sliding tandem","d":"Axles slide on a rail to adjust weight distribution; locking pins must engage."},{"x":46,"y":38.5,"t":"Sidewalls & logistic posts","d":"Holes or bent posts let in water and weaken the box."},{"x":78.5,"y":79,"t":"Landing gear","d":"Supports the parked trailer. \"Won't crank\" is a common yard call."},{"x":89.5,"y":66,"t":"Kingpin","d":"Locks into the tractor's fifth wheel. Wear or damage is a coupling safety issue."},{"x":93,"y":35,"t":"Nose: glad hands & 7-way","d":"Air and electrical connections to the tractor."}],"note":"Whether a part belongs to the tractor or the trailer decides which unit the case is opened on."},"loadTypes":{"ig":"versus","icon":"layers","title":"How freight fills a trailer: FTL vs LTL vs partial","items":[{"art":"ftl","t":"Full truckload (FTL)","sub":"One shipper's freight uses the trailer.","facts":[["Route","Pickup → delivery, usually direct"],["Handling","Loaded once, unloaded once"]],"watch":"A breakdown delays one customer, but the whole trailer — recovery often means a tractor swap."},{"art":"ltl","t":"Less-than-truckload (LTL)","sub":"Many shippers' freight shares one trailer.","facts":[["Route","Through terminals (hub-and-spoke)"],["Pricing","Freight class (NMFC classes 50–500), weight and distance"]],"watch":"Linehaul schedules between terminals: a late trailer can miss its departure and delay every shipment on it."},{"art":"partial","t":"Partial / volume","sub":"More than typical LTL, less than a full trailer.","facts":[["Route","Often shares a trailer with another partial; few stops"],["Handling","Usually not rehandled at terminals"]],"watch":"Multiple appointments on one trip — a delay affects every stop."}],"key":"The load type tells you how many customers a breakdown affects and whether the freight can wait."},"dockTypes":{"ig":"versus","icon":"clock","title":"Live load vs drop and hook","items":[{"art":"live","tone":"warning","t":"Live load / live unload","sub":"The driver and tractor wait at the dock while freight is loaded or unloaded.","facts":[["Time","Free time, then detention per the rate agreement"],["Equipment","Tractor and trailer tied up together"]],"watch":"A no-start at the dock blocks the customer's door — these calls are urgent even when the fix is simple."},{"art":"drop","tone":"success","t":"Drop and hook","sub":"The driver drops one trailer and hooks a preloaded one.","facts":[["Time","Usually much faster for the driver"],["Equipment","Needs more trailers than tractors (a trailer pool)"]],"watch":"Trailers sit in customer yards for days. Defects surface at pickup — plan trailer PMs and inspections so pooled trailers don't fall behind."}],"key":"Live loads tie up the tractor; drop-and-hook ties up trailers. Both change where and when you can schedule maintenance."},"cargoTypes":{"ig":"versus","icon":"shield","title":"Cargo types and what changes for maintenance","items":[{"art":"dryvan","t":"Dry freight","sub":"No temperature control.","watch":"Standard urgency — the freight can usually wait for a repair."},{"art":"reefer","tone":"info","t":"Temperature-controlled","sub":"Setpoint from the shipper's instructions.","watch":"Reefer faults are time-critical. Keep the unit running and cargo in range while you arrange service."},{"art":"hazmat","tone":"critical","t":"Hazardous materials","sub":"Regulated under 49 CFR Parts 171–180 (U.S. DOT / PHMSA).","facts":[["Placards","Table 1 materials: any amount. Table 2: 1,001 lb or more aggregate"],["Driver","Hazmat (H) endorsement when placards are required"]],"watch":"Leaks, fire risk and vendor qualifications. Follow your safety department's procedure before arranging any repair."},{"art":"oversize","tone":"warning","t":"Oversize / overweight","sub":"Beyond legal size or weight limits.","facts":[["Permits","State permits set routes, travel times, signs/flags and escorts — rules vary by state"]],"watch":"A breakdown can push the move outside its permitted route or hours. Involve dispatch or the permit team immediately."}]},"weights":{"ig":"axles","icon":"bar","title":"Weight per axle group: gross weight isn't the only limit","art":"rig","groups":[{"t":"Trailer tandem","x":13.2},{"t":"Drive tandem","x":77.2},{"t":"Steer axle","x":91.3}],"limits":[34000,34000,12000],"gross":80000,"rows":[{"l":"Balanced","d":"Legal on every axle group","v":[33900,33600,11800]},{"l":"Heavy on the drives","d":"Legal gross, illegal drive tandem","v":[32400,35200,11900]},{"l":"Over gross","d":"The load itself must change","v":[35800,34000,12000]}],"note":"U.S. federal Interstate limits: 34,000 lb per tandem axle group and 80,000 lb gross (23 CFR 658.17), subject to the bridge formula; states set rules for other roads and permits. The 12,000 lb steer figure is a common axle/tire rating used here for illustration, not a federal limit. Sliding the trailer tandem generally shifts weight between the drives and trailer axles; sliding the fifth wheel shifts it between the steer and drives — the driver confirms at a scale."},"securement":{"ig":"table","icon":"shield","title":"Cargo securement basics (U.S. — 49 CFR 393 Subpart I)","head":["Rule","Requirement","Source"],"rows":[["Aggregate working load limit","Tiedowns together must be rated for at least 50% of the cargo weight","393.106(d)"],["Article 5 ft or shorter, 1,100 lb or less","At least 1 tiedown","393.110(b)"],["Article 5 ft or shorter over 1,100 lb, or 5–10 ft long","At least 2 tiedowns","393.110(b)"],["Article longer than 10 ft","2 tiedowns for the first 10 ft, plus 1 for each additional 10 ft or part of 10 ft","393.110(b)"],["Driver re-inspection","Within the first 50 miles, then at every change of duty status, or every 3 hours or 150 miles, whichever comes first","392.9"]],"note":"Tiedown counts apply when an article is not blocked against forward movement; commodity-specific rules (logs, metal coils, heavy equipment and others) add requirements. Summary for orientation only — the regulation and your safety department are the authority."},"treadPositions":{"ig":"versus","icon":"target","title":"Steer, drive and trailer tires look different for a reason","items":[{"art":"tread-steer","t":"Steer tire","sub":"Front axle — steering and handling.","facts":[["Tread","Rib: grooves run around the tire"],["U.S. minimum","4/32 in tread depth"],["Rule","Regrooved tires aren't allowed on the front wheels of heavy trucks and tractors (49 CFR 393.75)"]]},{"art":"tread-drive","t":"Drive tire","sub":"Powered axles — traction.","facts":[["Tread","Lug/block pattern with deep side slots"],["U.S. minimum","2/32 in tread depth"],["Retreads","Commonly used here"]]},{"art":"tread-trailer","t":"Trailer tire","sub":"Free-rolling — carries load, no steering or power.","facts":[["Tread","Rib pattern, often shallower"],["U.S. minimum","2/32 in tread depth"],["Retreads","Commonly used here"]]}],"key":"A tire that is legal on a drive or trailer axle can be illegal on the steer axle. Always record the exact position: steer, drive or trailer — axle, side, inside or outside dual."},"tireSection":{"ig":"anatomy","icon":"target","title":"Inside a truck tire (cross-section)","art":"tire-section","w":420,"pins":[{"x":50,"y":14,"t":"Tread","d":"The rubber that touches the road. Depth is measured in the grooves in 32nds of an inch."},{"x":50,"y":30,"t":"Steel belts","d":"Stiffen the tread area. Belt separation shows up as bulges and vibration — remove from service."},{"x":15,"y":57,"t":"Sidewall","d":"Carries the size, load and DOT codes. Cuts, bulges or exposed cords are serious — the sidewall isn't repairable like the tread area."},{"x":78,"y":62,"t":"Inner liner","d":"Holds the air in a tubeless tire."},{"x":25.5,"y":85,"t":"Bead","d":"Steel wire bundle that seals the tire against the wheel."},{"x":50,"y":94,"t":"Wheel (rim)","d":"Must match the tire's rim size exactly. Cracked wheels and loose lug nuts are separate, serious defects."}]},"tireCode":{"ig":"decode","icon":"search","title":"Reading a tire sidewall: 295/75R22.5 144/141L","parts":[["295","Section width","Tire width in millimeters, sidewall to sidewall."],["/",null],["75","Aspect ratio","Sidewall height as a percentage of width — 75% of 295 mm."],["R","Construction","R = radial."],["22.5","Rim diameter","Wheel diameter in inches. Tire and wheel must match."],[" ",null],["144/141","Load index (single/dual)","144 = 2,800 kg (about 6,170 lb) per tire used single; 141 = 2,575 kg (about 5,680 lb) per tire used in duals."],["L","Speed symbol","L = 120 km/h (75 mph) maximum."]],"note":"Other common sizes use an older format, like 11R22.5 (11 = nominal width in inches). The DOT code's last four digits show when the tire was made: \"2324\" = week 23 of 2024. Give the vendor the full size from the sidewall, not from memory."},"treadMin":{"ig":"tread","icon":"target","title":"Same depth, different verdict: tread depth by position","max":12,"items":[{"l":"Steer","v":6,"min":4},{"l":"Steer","v":3,"min":4},{"l":"Drive","v":3,"min":2},{"l":"Trailer","v":1,"min":2}],"note":"U.S. minimums under 49 CFR 393.75: 4/32 in for steer tires, 2/32 in for all other positions. 3/32 in is legal on a drive tire but not on a steer tire. Many fleets replace tires well before the legal minimum by policy."},"plyTypes":{"ig":"versus","icon":"layers","title":"Radial vs bias-ply construction","items":[{"art":"radial","t":"Radial","sub":"Cords run straight across from bead to bead, with steel belts under the tread.","facts":[["Where","The standard for modern highway truck tires"],["Why","Flexible sidewall, stable tread: longer wear, lower rolling resistance"]]},{"art":"bias","t":"Bias-ply","sub":"Cords cross each other at alternating angles.","facts":[["Where","Older design; still found on some specialty and off-road equipment"],["Why","Stiff, tough sidewall; more heat and wear at highway speed"]]}],"key":"The \"R\" in the size tells you it's radial. Radial and bias tires shouldn't be mixed on the same axle."},"dualsWide":{"ig":"versus","icon":"target","title":"Duals vs wide-base singles","items":[{"art":"duals","t":"Dual tires","sub":"Two tires on each end of a drive or trailer axle.","facts":[["Plus","If one fails, the wheel end isn't left bare — but the partner is suddenly overloaded"],["Watch","Both tires must be matched in size and wear to share the load"]],"watch":"An underinflated inner dual overloads the outer one. After a flat, have the partner inspected too."},{"art":"widebase","t":"Wide-base single","sub":"One wide tire replaces each pair of duals (for example, 445/50R22.5).","facts":[["Plus","Lighter; can improve fuel economy"],["Watch","No partner tire — a failure leaves that wheel end with nothing"]],"watch":"Roadside stock is thinner in some areas. Keep your fleet's wide-base sizes in the tire vendor list."}],"key":"With duals, the partner tire takes the whole load when one fails and must be inspected too; with a wide-base single there is no partner at all. Either way, the driver stops safely and a tire technician decides whether the unit can move."},"brakeTypes":{"ig":"versus","icon":"zap","title":"Drum vs air disc brakes","items":[{"art":"drum","t":"S-cam drum brake","sub":"An S-shaped cam pushes brake shoes against the inside of a drum.","facts":[["Where","Long the most common type on North American trucks and trailers"],["Adjustment","Slack adjusters keep the brake in adjustment as linings wear"]],"watch":"Out-of-adjustment brakes are a common inspection violation — ask why a brake keeps drifting."},{"art":"disc","t":"Air disc brake","sub":"A caliper squeezes pads against a rotor.","facts":[["Where","Increasingly common, especially on steer axles"],["Differences","Generally resists fade better; faster pad changes; higher purchase cost"]],"watch":"Pads and rotors are different parts from drum shoes — confirm the brake type before ordering or sending a vendor."}],"key":"Both are air-operated and both are safety-critical. The brake type changes the parts, the labor, and which vendor can do the job."},"scope":{"callout":{"kind":"info","title":"Scope of this academy","text":"MC Academy is educational training. Regulations cited are U.S. federal rules (FMCSA, PHMSA, FHWA) and the CVSA inspection standards used in North America; states can add their own rules, and every carrier has its own procedures and approval limits. Nothing here is legal, regulatory or professional advice — when a rule matters for a real decision, check the current official source and your safety department."}},"sources":{"ig":"table","icon":"shield","title":"Official sources for the academy regulatory facts","head":["Topic","Official source","Used in"],"rows":[["Federal Motor Carrier Safety Regulations (49 CFR Parts 390-399)","<a href=\"https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B\" target=\"_blank\" rel=\"noopener noreferrer\">eCFR - Title 49, Subchapter B</a>","Vehicle parts, inspection, repair and maintenance, driving rules"],["Tires, including tread depth (49 CFR 393.75)","<a href=\"https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-G/section-393.75\" target=\"_blank\" rel=\"noopener noreferrer\">eCFR - 393.75</a>","Tire lessons, Quick Reference"],["Cargo securement (49 CFR 393 Subpart I)","<a href=\"https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-393/subpart-I\" target=\"_blank\" rel=\"noopener noreferrer\">eCFR - Part 393, Subpart I</a>","Freight and loads lesson"],["Inspection, repair and maintenance; DVIRs (49 CFR Part 396)","<a href=\"https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-396\" target=\"_blank\" rel=\"noopener noreferrer\">eCFR - Part 396</a>","Inspections and DVIR lessons"],["Warning devices after a stop (49 CFR 392.22)","<a href=\"https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-392/subpart-C/section-392.22\" target=\"_blank\" rel=\"noopener noreferrer\">eCFR - 392.22</a>","Roadside lessons"],["Hours of Service","<a href=\"https://www.fmcsa.dot.gov/regulations/hours-of-service\" target=\"_blank\" rel=\"noopener noreferrer\">FMCSA - Hours of Service</a>","Dispatch and downtime lessons"],["CDL endorsements (49 CFR 383.93)","<a href=\"https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-383/subpart-E/section-383.93\" target=\"_blank\" rel=\"noopener noreferrer\">eCFR - 383.93</a>","Equipment types lesson"],["Vehicle weight limits (23 CFR 658.17)","<a href=\"https://www.ecfr.gov/current/title-23/chapter-I/subchapter-G/part-658/section-658.17\" target=\"_blank\" rel=\"noopener noreferrer\">eCFR - 658.17</a>","Freight and loads lesson"],["Bridge formula","<a href=\"https://ops.fhwa.dot.gov/freight/publications/brdg_frm_wghts/\" target=\"_blank\" rel=\"noopener noreferrer\">FHWA - Bridge Formula Weights</a>","Freight and loads lesson"],["Hazmat placarding (49 CFR 172.504)","<a href=\"https://www.ecfr.gov/current/title-49/subtitle-B/chapter-I/subchapter-C/part-172/subpart-F/section-172.504\" target=\"_blank\" rel=\"noopener noreferrer\">eCFR - 172.504</a>","Cargo types"],["Hazardous materials program","<a href=\"https://www.phmsa.dot.gov/about-phmsa/offices/office-hazardous-materials-safety\" target=\"_blank\" rel=\"noopener noreferrer\">PHMSA - Office of Hazardous Materials Safety</a>","Cargo types"],["Out-of-service criteria","<a href=\"https://cvsa.org/inspections/out-of-service-criteria/\" target=\"_blank\" rel=\"noopener noreferrer\">CVSA - Out-of-Service Criteria</a>","Safety and inspection lessons"],["Roadside inspection levels","<a href=\"https://cvsa.org/inspections/all-inspection-levels/\" target=\"_blank\" rel=\"noopener noreferrer\">CVSA - All Inspection Levels</a>","Inspection lessons, Quick Reference"]],"note":"Regulations change. The links go to the current official text; the academy summarizes it for orientation only."},"carrierTypes":{"ig":"versus","icon":"truck","title":"Types of carriers and freight companies","items":[{"t":"For-hire carrier","sub":"Hauls other companies' freight for pay.","facts":[["Registration","USDOT number; interstate for-hire carriers also need FMCSA operating authority (currently identified by an MC number)"],["Example","A truckload carrier moving retail freight for many shippers"]],"watch":"Uptime is revenue: every down unit is a load that isn't moving or a customer at risk."},{"t":"Private fleet","sub":"A company hauling its own goods.","facts":[["Registration","USDOT number for interstate commercial vehicles"],["Example","A grocery chain delivering to its own stores"]],"watch":"Service to the company's own stores or plants drives priorities more than load revenue."},{"t":"Owner-operator","sub":"A driver who owns (or leases) their truck.","facts":[["How they work","Often leased onto a carrier's authority; some run under their own authority"],["Who pays repairs","Set by the lease agreement — usually the owner-operator for their own truck"]],"watch":"Confirm who owns the unit before arranging or approving any repair."},{"t":"Freight broker","sub":"Arranges transportation between shippers and carriers — doesn't haul the freight.","facts":[["Registration","FMCSA broker authority and a $75,000 financial security (surety bond or trust)"],["Documents","Sends the carrier a rate confirmation for each load"]],"watch":"On brokered loads, the broker needs delay updates — through your dispatch team, following company procedure."}],"key":"The same breakdown call can involve different decision-makers: your own fleet, an owner-operator, a chassis provider, or a broker waiting for an update. Ask who owns the unit and whose load it is."},"loadLifecycle":{"ig":"process","icon":"route","title":"The life of a load","items":[{"icon":"search","t":"Load found","d":"Customer contract, broker or load board"},{"icon":"file","t":"Rate confirmed","d":"Rate con: pickup, delivery, rate, rules"},{"icon":"truck","t":"Dispatched","d":"Driver, tractor, trailer assigned"},{"icon":"clipboard","t":"Picked up","d":"BOL signed, seal number noted"},{"icon":"pin","t":"In transit","d":"Tracking and check calls"},{"icon":"check-circle","t":"Delivered","d":"Signed BOL = proof of delivery"},{"icon":"dollar","t":"Invoiced & paid","d":"Invoice + documents, then payment"}],"note":"A breakdown can interrupt any step. The earlier it happens, the more options dispatch has — which is why fast, accurate ETRs matter."},"loadBoard":{"ig":"card","icon":"search","title":"Reading a load board posting (example)","form":"Load board posting · example","rows":[["Origin → destination","Dallas, TX → Atlanta, GA (≈ 780 mi)"],["Pickup / delivery","06/12 14:00–16:00 · 06/13 08:00 appointment"],["Equipment","Van, 53 ft"],["Weight / length","38,000 lb · full load"],["Commodity","Packaged consumer goods"],["Rate","Posted all-in rate, or \"call for rate\""],["Posted by","Broker name, MC number, contact"],["Extras","Drop trailer at pickup; driver assist: no"]],"note":"Illustrative example — every load board and broker formats postings differently. Dispatch books loads; the coordinator needs to know the equipment and appointment details because they decide how urgent a repair is."},"hosBasics":{"ig":"stats","icon":"clock","title":"Hours of Service basics — property-carrying drivers (U.S.)","items":[{"v":"11","u":"h","l":"maximum driving after 10 consecutive hours off duty","tone":"info"},{"v":"14","u":"h","l":"on-duty window — no driving after the 14th hour, even with breaks","tone":"warning"},{"v":"30","u":"min","l":"break after 8 cumulative hours of driving; any 30 straight minutes not driving counts, including shop time","tone":"info"},{"v":"60/70","u":"h","l":"on-duty limit in 7/8 consecutive days","tone":"info"}],"note":"Summary of FMCSA rules (49 CFR Part 395). Exceptions exist (short-haul, adverse driving conditions, sleeper-berth split and others). Dispatch and the safety department apply HOS — the coordinator uses it to judge whether a repair time still works for the load."},"routeFactors":{"ig":"hub","icon":"route","title":"What goes into a truck route","center":{"icon":"route","t":"Route plan"},"items":[{"icon":"clock","t":"Appointments","d":"Pickup and delivery windows"},{"icon":"users","t":"Driver hours","d":"HOS and planned breaks"},{"icon":"alert","t":"Restrictions","d":"Low clearances, weight limits, hazmat routes"},{"icon":"gauge","t":"Fuel stops","d":"Network, price, DEF"},{"icon":"wrench","t":"Service points","d":"PM due, known vendors on the lane"},{"icon":"sun","t":"Weather & traffic","d":"Closures, chain laws, delays"}]},"fuelSignals":{"ig":"table","icon":"gauge","title":"Fuel data as a maintenance signal","head":["What the data shows","Possible maintenance causes","Coordinator action"],"rows":[["MPG drops on one unit, same lanes and loads","Underinflated tires, dragging brakes, aftertreatment or injector problems","Check recent faults; schedule an inspection"],["High idle time","Driver comfort needs (HVAC, APU not working), or habit","Ask the driver; check APU/HVAC repair history"],["DEF use far from normal","SCR/DEF system issue, or DEF purchases not captured","Check DEF-related fault codes"],["Fuel purchased with no miles driven","Unit in the shop, reefer fueling, or a data issue","Confirm with fuel records before assuming misuse"]],"note":"Patterns point to questions, not diagnoses. A technician confirms any mechanical cause."},"ifta":{"ig":"table","icon":"file","title":"Fuel tax and trip records: IFTA in brief","head":["Question","Answer"],"rows":[["What is IFTA?","The International Fuel Tax Agreement among the 48 contiguous U.S. states and 10 Canadian provinces. Carriers report fuel and miles by jurisdiction on one quarterly return."],["Which vehicles?","Generally, qualified motor vehicles used in interstate operation: two axles and over 26,000 lb, three or more axles, or a combination over 26,000 lb."],["Why it touches maintenance","Miles driven to and from shops, and fuel bought during repairs, still belong in trip records. Accurate odometer readings on work orders help."],["Who handles it","Usually accounting, fuel tax or safety/compliance staff — not the maintenance coordinator."]],"note":"Overview only. Your base jurisdiction and your company's tax staff are the authority on IFTA reporting."}};
const RATECON = {"source":"RATE CONFIRMATION — Northgate Freight Brokerage (fictional)\nCarrier: Crestline Freight Lines LLC · MC# 000000 (fictional)\nLoad #: NFB-448213\nPickup: Dallas, TX · 06/12 08:00  |  Delivery: Atlanta, GA · 06/13 07:00\nEquipment: 53' dry van · Miles: 781\nLinehaul rate: $1,900.00   Fuel surcharge: $250.00 flat\nDetention: $50/hr after 2 hours free · in/out times required on BOL\nLumper: reimbursed with receipt   Layover: $250/day   TONU: $150\nPayment terms: Net 30 from receipt of invoice with signed POD","delivery":"DELIVERY — Atlanta, GA · 06/13\nArrived 06:40 · Departed 11:10 (in/out times written and signed on BOL)\nLumper service paid by driver: $185.00 (receipt #L-7731)\nPOD: BOL signed by receiver, no exceptions noted","answer":{"broker":"northgate","load":"NFB-448213","linehaul":1900,"fsc":250,"detention":125,"lumper":185,"total":2460}};
const LESSON_MOVES = {"beginner.m1.l4":"operations.m1.l1","advanced.m6.l3":"operations.m1.l2","beginner.m10":"operations.m2"};
const CONTENT_FILES = {"beginner":"content/beginner.json?v=dd67c599fa","advanced":"content/advanced.json?v=049bc18f32","expert":"content/expert.json?v=26ca0f8bac","operations":"content/operations.json?v=b08c70453b"};
// Questions per module quiz, so pages without lesson text loaded can show it.
const QUIZ_SIZE = {"beginner.m1":7,"beginner.m2":4,"beginner.m3":12,"beginner.m4":4,"beginner.m5":6,"beginner.m6":4,"beginner.m7":4,"beginner.m8":5,"beginner.m9":6,"advanced.m1":5,"advanced.m2":6,"advanced.m3":4,"advanced.m4":9,"advanced.m5":4,"advanced.m6":4,"advanced.m7":4,"advanced.m8":4,"advanced.m9":4,"expert.m1":6,"expert.m2":4,"expert.m3":4,"expert.m4":4,"expert.m5":4,"expert.m6":5,"expert.m7":4,"expert.m8":6,"expert.m9":4,"operations.m1":6,"operations.m2":12};
/* Photo sources for the Visual Library — all from Wikimedia Commons under free licenses.
   Each entry keeps the author, license and file page for attribution. */
const LIB_PHOTOS = {
 "dryvan": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/2008-08-02_UPS_long_trailer_1.jpg/960px-2008-08-02_UPS_long_trailer_1.jpg",
  "w": 900,
  "h": 600,
  "page": "https://commons.wikimedia.org/wiki/File:2008-08-02_UPS_long_trailer_1.jpg",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "author": "Ildar Sagdejev (Specious)",
  "local": "img/library/dryvan.webp",
  "localSm": "img/library/dryvan-sm.webp"
 },
 "daycab": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/2024_Mack_Anthem_6x4_tractor_%28Day_Cab%29_in_Light_Blue%2C_front_right.jpg/960px-2024_Mack_Anthem_6x4_tractor_%28Day_Cab%29_in_Light_Blue%2C_front_right.jpg",
  "w": 900,
  "h": 717,
  "page": "https://commons.wikimedia.org/wiki/File:2024_Mack_Anthem_6x4_tractor_(Day_Cab)_in_Light_Blue,_front_right.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "author": "Mr.choppers",
  "local": "img/library/daycab.webp",
  "localSm": "img/library/daycab-sm.webp"
 },
 "yard": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Capacity_Yard_Truck.jpg",
  "w": 640,
  "h": 427,
  "page": "https://commons.wikimedia.org/wiki/File:Capacity_Yard_Truck.jpg",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "author": "REV Group",
  "local": "img/library/yard.webp",
  "localSm": "img/library/yard-sm.webp"
 },
 "clutch": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Clutchdisc.jpg",
  "w": 450,
  "h": 500,
  "page": "https://commons.wikimedia.org/wiki/File:Clutchdisc.jpg",
  "license": "Public domain",
  "licenseUrl": "",
  "author": "Sonett72",
  "local": "img/library/clutch.webp",
  "localSm": "img/library/clutch-sm.webp"
 },
 "container": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/d/df/Container_01_KMJ.jpg",
  "w": 854,
  "h": 654,
  "page": "https://commons.wikimedia.org/wiki/File:Container_01_KMJ.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
  "author": "KMJ at German Wikipedia",
  "local": "img/library/container.webp",
  "localSm": "img/library/container-sm.webp"
 },
 "chassis": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Container_chassis_8.webp/960px-Container_chassis_8.webp",
  "w": 900,
  "h": 650,
  "page": "https://commons.wikimedia.org/wiki/File:Container_chassis_8.webp",
  "license": "CC0",
  "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
  "author": "Wikideas1",
  "local": "img/library/chassis.webp",
  "localSm": "img/library/chassis-sm.webp"
 },
 "engine": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Cummins_ISX_600_engine.jpg/960px-Cummins_ISX_600_engine.jpg",
  "w": 900,
  "h": 675,
  "page": "https://commons.wikimedia.org/wiki/File:Cummins_ISX_600_engine.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "author": "Panoha",
  "local": "img/library/engine.webp",
  "localSm": "img/library/engine-sm.webp"
 },
 "dolly": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Dolly_trailer.jpg/960px-Dolly_trailer.jpg",
  "w": 900,
  "h": 436,
  "page": "https://commons.wikimedia.org/wiki/File:Dolly_trailer.jpg",
  "license": "CC BY-SA 2.5",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5",
  "author": "Teppo Lainio",
  "local": "img/library/dolly.webp",
  "localSm": "img/library/dolly-sm.webp"
 },
 "transmission": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Eaton_Autoshift.jpg/960px-Eaton_Autoshift.jpg",
  "w": 900,
  "h": 675,
  "page": "https://commons.wikimedia.org/wiki/File:Eaton_Autoshift.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "author": "Panoha",
  "local": "img/library/transmission.webp",
  "localSm": "img/library/transmission-sm.webp"
 },
 "tow": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Exercise-_Aw-R-Go%2C_Heavy_Wrecker_%288411431%29.jpg/960px-Exercise-_Aw-R-Go%2C_Heavy_Wrecker_%288411431%29.jpg",
  "w": 900,
  "h": 600,
  "page": "https://commons.wikimedia.org/wiki/File:Exercise-_Aw-R-Go,_Heavy_Wrecker_(8411431).jpg",
  "license": "Public domain",
  "licenseUrl": "",
  "author": "U.S. Air Force",
  "local": "img/library/tow.webp",
  "localSm": "img/library/tow-sm.webp"
 },
 "reefer": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/G-3_Resources_LLC_Truck.jpg/960px-G-3_Resources_LLC_Truck.jpg",
  "w": 900,
  "h": 506,
  "page": "https://commons.wikimedia.org/wiki/File:G-3_Resources_LLC_Truck.jpg",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "author": "JardonB",
  "local": "img/library/reefer.webp",
  "localSm": "img/library/reefer-sm.webp"
 },
 "rgn": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Globe_Trailers_detachable_gooseneck_trailer.jpg/960px-Globe_Trailers_detachable_gooseneck_trailer.jpg",
  "w": 900,
  "h": 415,
  "page": "https://commons.wikimedia.org/wiki/File:Globe_Trailers_detachable_gooseneck_trailer.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "author": "Leighketchum",
  "local": "img/library/rgn.webp",
  "localSm": "img/library/rgn-sm.webp"
 },
 "straight": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/ISUZU_ELF%2C_6th_Gen%2C_Hi-cab_White_Box_truck.jpg/960px-ISUZU_ELF%2C_6th_Gen%2C_Hi-cab_White_Box_truck.jpg",
  "w": 900,
  "h": 675,
  "page": "https://commons.wikimedia.org/wiki/File:ISUZU_ELF,_6th_Gen,_Hi-cab_White_Box_truck.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "author": "Mj-bird",
  "local": "img/library/straight.webp",
  "localSm": "img/library/straight-sm.webp"
 },
 "liftgate": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Lastbil_med_lift.JPG/960px-Lastbil_med_lift.JPG",
  "w": 900,
  "h": 675,
  "page": "https://commons.wikimedia.org/wiki/File:Lastbil_med_lift.JPG",
  "license": "Public domain",
  "licenseUrl": "",
  "author": "Unknown author",
  "local": "img/library/liftgate.webp",
  "localSm": "img/library/liftgate-sm.webp"
 },
 "tanker": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Loves_Freightliner_tanker_truck%2C_southern_Oklahoma.jpg/960px-Loves_Freightliner_tanker_truck%2C_southern_Oklahoma.jpg",
  "w": 900,
  "h": 527,
  "page": "https://commons.wikimedia.org/wiki/File:Loves_Freightliner_tanker_truck,_southern_Oklahoma.jpg",
  "license": "CC BY-SA 2.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
  "author": "Greg Goebel from Loveland CO, USA",
  "local": "img/library/tanker.webp",
  "localSm": "img/library/tanker-sm.webp"
 },
 "sleeper": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Mack_Vision_427_sleeper_cab_truck.jpg/960px-Mack_Vision_427_sleeper_cab_truck.jpg",
  "w": 900,
  "h": 571,
  "page": "https://commons.wikimedia.org/wiki/File:Mack_Vision_427_sleeper_cab_truck.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "author": "Mr.choppers",
  "local": "img/library/sleeper.webp",
  "localSm": "img/library/sleeper-sm.webp"
 },
 "dock": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Modern_loading_dock.jpg/960px-Modern_loading_dock.jpg",
  "w": 900,
  "h": 728,
  "page": "https://commons.wikimedia.org/wiki/File:Modern_loading_dock.jpg",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "author": "Mark LS",
  "local": "img/library/dock.webp",
  "localSm": "img/library/dock-sm.webp"
 },
 "tractor": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Peterbilt_truck_6.jpg/960px-Peterbilt_truck_6.jpg",
  "w": 900,
  "h": 675,
  "page": "https://commons.wikimedia.org/wiki/File:Peterbilt_truck_6.jpg",
  "license": "CC BY 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
  "author": "Mahanga",
  "local": "img/library/tractor.webp",
  "localSm": "img/library/tractor-sm.webp"
 },
 "eld": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Qualcomm_EOBR_model_MCP110_September_2011.png/960px-Qualcomm_EOBR_model_MCP110_September_2011.png",
  "w": 900,
  "h": 507,
  "page": "https://commons.wikimedia.org/wiki/File:Qualcomm_EOBR_model_MCP110_September_2011.png",
  "license": "Public domain",
  "licenseUrl": "",
  "author": "Semi Sam",
  "local": "img/library/eld.webp",
  "localSm": "img/library/eld-sm.webp"
 },
 "reeferunit": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Thermo_King_semi-trailer_refrigeration_unit.jpg/960px-Thermo_King_semi-trailer_refrigeration_unit.jpg",
  "w": 900,
  "h": 1454,
  "page": "https://commons.wikimedia.org/wiki/File:Thermo_King_semi-trailer_refrigeration_unit.jpg",
  "license": "CC BY-SA 2.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
  "author": "Greg Goebel from Loveland CO, USA",
  "local": "img/library/reeferunit.webp",
  "localSm": "img/library/reeferunit-sm.webp"
 },
 "flatbed": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Tire_Transport_Truck_%2846038169192%29.jpg/960px-Tire_Transport_Truck_%2846038169192%29.jpg",
  "w": 900,
  "h": 599,
  "page": "https://commons.wikimedia.org/wiki/File:Tire_Transport_Truck_(46038169192).jpg",
  "license": "CC BY-SA 2.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
  "author": "Chris Hunkeler from Carlsbad, California, USA",
  "local": "img/library/flatbed.webp",
  "localSm": "img/library/flatbed-sm.webp"
 },
 "apu": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/0/05/TriPacAPU.jpg",
  "w": 800,
  "h": 800,
  "page": "https://commons.wikimedia.org/wiki/File:TriPacAPU.jpg",
  "license": "GFDL",
  "licenseUrl": "http://www.gnu.org/copyleft/fdl.html",
  "author": "Lpimlott at English Wikipedia",
  "local": "img/library/apu.webp",
  "localSm": "img/library/apu-sm.webp"
 },
 "triangle": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Triangle_de_pr%C3%A9signalisation.JPG/960px-Triangle_de_pr%C3%A9signalisation.JPG",
  "w": 900,
  "h": 599,
  "page": "https://commons.wikimedia.org/wiki/File:Triangle_de_pr%C3%A9signalisation.JPG",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "author": "Roulex 45",
  "local": "img/library/triangle.webp",
  "localSm": "img/library/triangle-sm.webp"
 },
 "turbo": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Turbocharger_Animation_by_Tyroola.gif/500px-Turbocharger_Animation_by_Tyroola.gif",
  "w": 500,
  "h": 471,
  "page": "https://commons.wikimedia.org/wiki/File:Turbocharger_Animation_by_Tyroola.gif",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "author": "PatriciaWrites",
  "local": "img/library/turbo.webp",
  "localSm": "img/library/turbo-sm.webp"
 },
 "dpf": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/412_DSP_Transportation_233_-_DPLA_-_f9cee0a0b307aa1e63acc0e67b6a339c.jpg/960px-412_DSP_Transportation_233_-_DPLA_-_f9cee0a0b307aa1e63acc0e67b6a339c.jpg",
  "w": 900,
  "h": 598,
  "page": "https://commons.wikimedia.org/wiki/File:412_DSP_Transportation_233_-_DPLA_-_f9cee0a0b307aa1e63acc0e67b6a339c.jpg",
  "license": "Public domain",
  "licenseUrl": "",
  "author": "U.S. Environmental Protection Agency",
  "local": "img/library/dpf.webp",
  "localSm": "img/library/dpf-sm.webp"
 },
 "airtanks": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/A_truck_chassis_section.jpg/960px-A_truck_chassis_section.jpg",
  "w": 900,
  "h": 675,
  "page": "https://commons.wikimedia.org/wiki/File:A_truck_chassis_section.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "author": "Panoha",
  "local": "img/library/airtanks.webp",
  "localSm": "img/library/airtanks-sm.webp"
 },
 "airdisc": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Air_disc_brake.jpg/960px-Air_disc_brake.jpg",
  "w": 900,
  "h": 675,
  "page": "https://commons.wikimedia.org/wiki/File:Air_disc_brake.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
  "author": "Panoha",
  "local": "img/library/airdisc.webp",
  "localSm": "img/library/airdisc-sm.webp"
 },
 "ecm": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/An_ECM_from_a_1996_Chevrolet_Beretta-_2013-10-24_23-13.jpg/960px-An_ECM_from_a_1996_Chevrolet_Beretta-_2013-10-24_23-13.jpg",
  "w": 900,
  "h": 506,
  "page": "https://commons.wikimedia.org/wiki/File:An_ECM_from_a_1996_Chevrolet_Beretta-_2013-10-24_23-13.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "author": "Mgiardina09",
  "local": "img/library/ecm.webp",
  "localSm": "img/library/ecm-sm.webp"
 },
 "radiator": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Automobile_radiator.jpg",
  "w": 529,
  "h": 600,
  "page": "https://commons.wikimedia.org/wiki/File:Automobile_radiator.jpg",
  "license": "Public domain",
  "licenseUrl": "",
  "author": "Unknown author",
  "local": "img/library/radiator.webp",
  "localSm": "img/library/radiator-sm.webp"
 },
 "starter": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Automobile_starter.JPG/960px-Automobile_starter.JPG",
  "w": 900,
  "h": 675,
  "page": "https://commons.wikimedia.org/wiki/File:Automobile_starter.JPG",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
  "author": "Willdre",
  "local": "img/library/starter.webp",
  "localSm": "img/library/starter-sm.webp"
 },
 "alternator": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Automotive_alternator.jpg/960px-Automotive_alternator.jpg",
  "w": 900,
  "h": 681,
  "page": "https://commons.wikimedia.org/wiki/File:Automotive_alternator.jpg",
  "license": "Public domain",
  "licenseUrl": "",
  "author": "Pentti Immonen",
  "local": "img/library/alternator.webp",
  "localSm": "img/library/alternator-sm.webp"
 },
 "differential": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/BAUMA_2004_ZF_Differentialgetriebe.jpg/960px-BAUMA_2004_ZF_Differentialgetriebe.jpg",
  "w": 900,
  "h": 675,
  "page": "https://commons.wikimedia.org/wiki/File:BAUMA_2004_ZF_Differentialgetriebe.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "author": "Aconcagua (talk)",
  "local": "img/library/differential.webp",
  "localSm": "img/library/differential-sm.webp"
 },
 "gladhands": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Back_of_FMV2Mk2_cabin.JPG/960px-Back_of_FMV2Mk2_cabin.JPG",
  "w": 900,
  "h": 1200,
  "page": "https://commons.wikimedia.org/wiki/File:Back_of_FMV2Mk2_cabin.JPG",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "author": "Panoha",
  "local": "img/library/gladhands.webp",
  "localSm": "img/library/gladhands-sm.webp"
 },
 "belt": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Belt_drive_systen_01.JPG/960px-Belt_drive_systen_01.JPG",
  "w": 900,
  "h": 675,
  "page": "https://commons.wikimedia.org/wiki/File:Belt_drive_systen_01.JPG",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "author": "Miya.m",
  "local": "img/library/belt.webp",
  "localSm": "img/library/belt-sm.webp"
 },
 "driveshaft": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Cardan_Shaft.jpg/960px-Cardan_Shaft.jpg",
  "w": 900,
  "h": 748,
  "page": "https://commons.wikimedia.org/wiki/File:Cardan_Shaft.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
  "author": "IP83",
  "local": "img/library/driveshaft.webp",
  "localSm": "img/library/driveshaft-sm.webp"
 },
 "airdryer": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Electronic_air_dryer.jpg/960px-Electronic_air_dryer.jpg",
  "w": 900,
  "h": 1200,
  "page": "https://commons.wikimedia.org/wiki/File:Electronic_air_dryer.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
  "author": "Panoha",
  "local": "img/library/airdryer.webp",
  "localSm": "img/library/airdryer-sm.webp"
 },
 "wheel": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Estados_Unidos%2C_camiones_1989_17.jpg",
  "w": 702,
  "h": 1062,
  "page": "https://commons.wikimedia.org/wiki/File:Estados_Unidos,_camiones_1989_17.jpg",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "author": "LBM1948",
  "local": "img/library/wheel.webp",
  "localSm": "img/library/wheel-sm.webp"
 },
 "leafspring": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/6/63/Leafs1.jpg",
  "w": 600,
  "h": 424,
  "page": "https://commons.wikimedia.org/wiki/File:Leafs1.jpg",
  "license": "Public domain",
  "licenseUrl": "",
  "author": "Jim Gill",
  "local": "img/library/leafspring.webp",
  "localSm": "img/library/leafspring-sm.webp"
 },
 "tire": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Lkw_Reifenprofil_nachschneiden.jpg/960px-Lkw_Reifenprofil_nachschneiden.jpg",
  "w": 900,
  "h": 687,
  "page": "https://commons.wikimedia.org/wiki/File:Lkw_Reifenprofil_nachschneiden.jpg",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "author": "TireWorld",
  "local": "img/library/tire.webp",
  "localSm": "img/library/tire-sm.webp"
 },
 "battery": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Photo-CarBattery.jpg/960px-Photo-CarBattery.jpg",
  "w": 900,
  "h": 861,
  "page": "https://commons.wikimedia.org/wiki/File:Photo-CarBattery.jpg",
  "license": "Public domain",
  "licenseUrl": "",
  "author": "Unknown author",
  "local": "img/library/battery.webp",
  "localSm": "img/library/battery-sm.webp"
 },
 "airspring": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Pneumatic_spring.JPG/960px-Pneumatic_spring.JPG",
  "w": 900,
  "h": 675,
  "page": "https://commons.wikimedia.org/wiki/File:Pneumatic_spring.JPG",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "author": "Bongoman",
  "local": "img/library/airspring.webp",
  "localSm": "img/library/airspring-sm.webp"
 },
 "steering": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/0/0c/RecirculatingBall.png",
  "w": 426,
  "h": 513,
  "page": "https://commons.wikimedia.org/wiki/File:RecirculatingBall.png",
  "license": "Public domain",
  "licenseUrl": "",
  "author": "Kivaan",
  "local": "img/library/steering.webp",
  "localSm": "img/library/steering-sm.webp"
 },
 "fifthwheel": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/6/65/Sattelkupplung.JPG",
  "w": 480,
  "h": 360,
  "page": "https://commons.wikimedia.org/wiki/File:Sattelkupplung.JPG",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
  "author": "Unknown author",
  "local": "img/library/fifthwheel.webp",
  "localSm": "img/library/fifthwheel-sm.webp"
 },
 "chamber": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Spring_brake_air_cylinder.jpg/960px-Spring_brake_air_cylinder.jpg",
  "w": 900,
  "h": 1200,
  "page": "https://commons.wikimedia.org/wiki/File:Spring_brake_air_cylinder.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
  "author": "Panoha",
  "local": "img/library/chamber.webp",
  "localSm": "img/library/chamber-sm.webp"
 },
 "def": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Truck_AdBlue_tank.jpg/960px-Truck_AdBlue_tank.jpg",
  "w": 900,
  "h": 1350,
  "page": "https://commons.wikimedia.org/wiki/File:Truck_AdBlue_tank.jpg",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "author": "KaiBorgeest",
  "local": "img/library/def.webp",
  "localSm": "img/library/def-sm.webp"
 },
 "compressor": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Truck_air_compressor.jpg/960px-Truck_air_compressor.jpg",
  "w": 900,
  "h": 675,
  "page": "https://commons.wikimedia.org/wiki/File:Truck_air_compressor.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
  "author": "Panoha",
  "local": "img/library/compressor.webp",
  "localSm": "img/library/compressor-sm.webp"
 },
 "injector": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Unit_injector_early.jpg/960px-Unit_injector_early.jpg",
  "w": 900,
  "h": 1200,
  "page": "https://commons.wikimedia.org/wiki/File:Unit_injector_early.jpg",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
  "author": "Panoha",
  "local": "img/library/injector.webp",
  "localSm": "img/library/injector-sm.webp"
 },
 "doubles": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/UPS_Freight_truck%2C_Motor_Cargo_%26_Overnite_trailers.jpg/960px-UPS_Freight_truck%2C_Motor_Cargo_%26_Overnite_trailers.jpg",
  "w": 900,
  "h": 356,
  "page": "https://commons.wikimedia.org/wiki/File:UPS_Freight_truck,_Motor_Cargo_%26_Overnite_trailers.jpg",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "author": "Xnatedawgx",
  "local": "img/library/doubles.webp",
  "localSm": "img/library/doubles-sm.webp"
 },
 "tandem": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Semi-trailer_Groenewegen%2C_twin_tires%2C_suspension_IMG_20211110_153847.jpg/960px-Semi-trailer_Groenewegen%2C_twin_tires%2C_suspension_IMG_20211110_153847.jpg",
  "w": 900,
  "h": 450,
  "page": "https://commons.wikimedia.org/wiki/File:Semi-trailer_Groenewegen,_twin_tires,_suspension_IMG_20211110_153847.jpg",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "author": "Bertux",
  "local": "img/library/tandem.webp",
  "localSm": "img/library/tandem-sm.webp"
 }
};

/* ---------------------------------------------------------------------------
   CONTENT — Vehicles & Parts Visual Library
   One entry per vehicle, trailer, piece of equipment or part the curriculum
   discusses. `photo` keys LIB_PHOTOS (real photographs, Wikimedia Commons);
   `art` keys the academy's own schematic illustrations (ART), with an
   optional `pin` marking the part. `terms` are glossary terms that open this
   entry's picture when tapped in a lesson. `lessons` are lesson keys.
   Specs are kept general on purpose — makes and models differ.
   --------------------------------------------------------------------------- */
const LIB_CATS = [
  ['vehicles', 'Vehicles', 'truck'],
  ['trailers', 'Trailers', 'layers'],
  ['equipment', 'Equipment', 'clipboard'],
  ['parts', 'Parts & components', 'wrench']
];
const LIB_GROUPS = ['Engine & drivetrain', 'Brakes & air system', 'Tires, wheels & suspension', 'Fuel, exhaust & aftertreatment', 'Electrical & cooling', 'Coupling & trailer parts'];

const LIBRARY = [
  /* ---------------- Vehicles ---------------- */
  { id: 'tractor', name: 'Tractor (semi truck)', cat: 'vehicles', photo: 'tractor', art: 'sleeper', alt: 'A conventional semi tractor with a sleeper cab',
    short: 'The power unit that pulls a separate trailer.',
    what: 'A tractor — often called a semi truck or power unit — has the engine, cab, steering and drive axles, but no cargo space of its own. It pulls a semi-trailer that rests on its fifth wheel.',
    does: 'Provides the power, steering and braking control for the whole combination. Its air system also feeds the trailer\'s brakes, and its electrical system powers the trailer\'s lights.',
    where: 'Tractors are the center of most fleets. Because the tractor and trailer are separate units, a broken tractor can sometimes be replaced by another tractor (a power swap) so the loaded trailer keeps moving.',
    keys: ['A tractor and its trailer have separate unit numbers and separate repair histories.', 'Configurations are written like 6x4: wheel positions × driven positions.', 'Comes as a day cab (no bed) or a sleeper (with a bed).'],
    lessons: ['beginner.m1.l1', 'beginner.m3.l4', 'beginner.m3.l1'], related: ['daycab', 'sleeper', 'fifthwheel', 'dryvan'], terms: [] },
  { id: 'daycab', name: 'Day cab tractor', cat: 'vehicles', photo: 'daycab', art: 'daycab', alt: 'A day cab tractor with no sleeper compartment behind the cab',
    short: 'A tractor with no sleeping compartment.',
    what: 'A day cab is a tractor whose cab ends right behind the seats — there\'s no sleeper berth.',
    does: 'Pulls trailers on work where the driver gets home at the end of the shift. The shorter cab is lighter and easier to maneuver.',
    where: 'Local and regional delivery, LTL pickup and delivery, port and rail drayage.',
    keys: ['Lots of stops means more wear on brakes, clutch or transmission and starters.', 'Frequent coupling and uncoupling wears the fifth wheel and glad hands.'],
    lessons: ['beginner.m3.l4', 'beginner.m1.l1'], related: ['tractor', 'sleeper', 'yard'], terms: ['Day cab'] },
  { id: 'sleeper', name: 'Sleeper tractor', cat: 'vehicles', photo: 'sleeper', art: 'sleeper', alt: 'A tractor with a sleeper compartment behind the cab',
    short: 'A tractor with a bed behind the seats.',
    what: 'A sleeper tractor has a sleeper berth — a compartment with a bed — built behind the driver\'s seats.',
    does: 'Lets drivers take their required rest on the truck during multi-day trips.',
    where: 'Long-haul, over-the-road (OTR) freight.',
    keys: ['The cab is the driver\'s living space, so heating, A/C and sleeper comfort items matter for the trip.', 'Many sleepers carry an APU or other idle-reduction system.', 'Long highway miles mean mileage-based PM schedules.'],
    lessons: ['beginner.m3.l4', 'beginner.m1.l1'], related: ['tractor', 'daycab', 'apu'], terms: ['Sleeper cab'] },
  { id: 'straight', name: 'Straight truck (box truck)', cat: 'vehicles', photo: 'straight', art: 'straight', alt: 'A box truck with the cargo body mounted on the same chassis as the cab',
    short: 'Cab and cargo body on one chassis.',
    what: 'A straight truck has the cab and the cargo body mounted on the same frame. There is no separate trailer to unhook.',
    does: 'Carries freight on its own chassis — often with a liftgate for deliveries where there is no loading dock.',
    where: 'Local delivery, moving, rental fleets and last-mile work.',
    keys: ['A Class B CDL is required when the GVWR is 26,001 lb or more.', 'If it breaks down, the cargo can\'t be moved by swapping tractors — it has to be transloaded or wait for the repair.'],
    lessons: ['beginner.m3.l4'], related: ['liftgate', 'tractor', 'dock'], terms: ['Straight truck'] },
  { id: 'yard', name: 'Yard tractor (spotter)', cat: 'vehicles', photo: 'yard', art: 'yard', alt: 'A yard tractor with a single-person cab and a lifting fifth wheel',
    short: 'A short tractor that moves trailers around a yard.',
    what: 'A yard tractor — also called a terminal tractor, spotter or yard dog — is a small tractor built only for moving trailers short distances.',
    does: 'Its hydraulic fifth wheel lifts the trailer\'s front, so the driver can move a trailer without cranking up the landing gear.',
    where: 'Distribution centers, ports, rail yards and carrier terminals.',
    keys: ['Often used only on private property.', 'Runs many engine hours but few miles — PMs are usually based on hours.'],
    lessons: ['beginner.m3.l4'], related: ['tractor', 'fifthwheel', 'landinggear'], terms: [] },
  { id: 'tow', name: 'Heavy-duty tow truck (wrecker)', cat: 'vehicles', photo: 'tow', alt: 'A heavy wrecker towing a tractor',
    short: 'Recovers and tows disabled heavy trucks.',
    what: 'A heavy-duty wrecker is a tow truck built to lift and tow tractors, trailers and other heavy vehicles. Light-duty tow trucks can\'t do this safely.',
    does: 'Moves a disabled truck to a shop, or recovers a vehicle that has left the road.',
    where: 'Used when a repair can\'t be done roadside or the vehicle isn\'t safe to drive.',
    keys: ['Tow cost depends on distance, equipment size and recovery work.', 'Towing a loaded trailer is very different from towing a bobtail tractor — tell the tow company exactly what\'s being moved.'],
    lessons: ['advanced.m4.l2', 'beginner.m5.l2'], related: ['tractor', 'dryvan'], terms: ['Towing'] },

  /* ---------------- Trailers ---------------- */
  { id: 'dryvan', name: 'Dry van trailer', cat: 'trailers', photo: 'dryvan', art: 'dryvan', alt: 'A 53-foot dry van semi-trailer parked at a facility',
    short: 'An enclosed box trailer with no temperature control.',
    what: 'The most common trailer in U.S. truckload freight: an enclosed box, commonly 53 ft long and 102 in wide.',
    does: 'Protects palletized and boxed freight from weather and theft.',
    where: 'Retail, packaged goods, paper and general freight — truckload and LTL.',
    keys: ['Common lengths: 53 ft, 48 ft and 28 ft "pups".', 'Watch doors and seals, floor and roof damage, lights, tires, brakes and tandem slider pins.'],
    lessons: ['beginner.m3.l4', 'beginner.m3.l2', 'beginner.m1.l3'], related: ['reefer', 'tractor', 'landinggear', 'kingpin', 'tandem'], terms: ['Dry van'] },
  { id: 'reefer', name: 'Reefer trailer', cat: 'trailers', photo: 'reefer', art: 'reefer', alt: 'A tractor pulling a refrigerated trailer with a refrigeration unit on the front wall',
    short: 'An insulated trailer with its own refrigeration unit.',
    what: 'A refrigerated ("reefer") trailer is an insulated box with a refrigeration unit mounted on the front wall.',
    does: 'Keeps cargo at the temperature the shipper sets — cold, frozen or heated.',
    where: 'Food, pharmaceuticals, flowers and other temperature-sensitive freight.',
    keys: ['Tracked by trailer miles and by the reefer unit\'s own engine hours.', 'A reefer failure with cargo aboard is time-critical.', 'Unit repairs often need a refrigeration technician, not a trailer shop.'],
    lessons: ['beginner.m3.l4', 'beginner.m1.l3', 'beginner.m5.l2'], related: ['reeferunit', 'dryvan', 'tractor'], terms: ['Reefer'] },
  { id: 'flatbed', name: 'Flatbed trailer', cat: 'trailers', photo: 'flatbed', art: 'flatbed', alt: 'A tractor pulling a flatbed trailer loaded with large tires',
    short: 'An open deck loaded from the sides or top.',
    what: 'A flatbed is an open trailer deck with no walls or roof, commonly 48 or 53 ft long.',
    does: 'Carries cargo that is loaded by forklift or crane from the sides or top, secured with straps, chains and tarps.',
    where: 'Lumber, steel, pipe, building materials and machinery.',
    keys: ['Cargo securement rules are in 49 CFR 393 Subpart I.', 'Watch deck boards, winches, stake pockets and worn straps.'],
    lessons: ['beginner.m3.l4', 'beginner.m1.l3'], related: ['stepdeck', 'rgn', 'tractor'], terms: ['Flatbed'] },
  { id: 'stepdeck', name: 'Step deck trailer', cat: 'trailers', art: 'stepdeck', alt: 'Illustration of a step deck trailer with a short upper deck and a lower main deck',
    short: 'A flatbed with a lower main deck for taller cargo.',
    what: 'A step deck (drop deck) has a short upper deck over the kingpin and a lower main deck behind it.',
    does: 'The lower deck lets taller cargo fit under the height limit than a standard flatbed allows.',
    where: 'Machinery and tall loads that would be over height on a flatbed.',
    keys: ['Often runs smaller low-profile tires — get the exact tire size on every tire call.'],
    lessons: ['beginner.m3.l4'], related: ['flatbed', 'rgn', 'tire'], terms: ['Step deck'] },
  { id: 'rgn', name: 'RGN / lowboy trailer', cat: 'trailers', photo: 'rgn', art: 'rgn', alt: 'A detachable gooseneck lowboy trailer carrying an excavator',
    short: 'A very low trailer for heavy equipment.',
    what: 'A lowboy has a deck that sits very low between the gooseneck and the rear axles. On a removable gooseneck (RGN) trailer the front detaches so equipment can drive on.',
    does: 'Carries the tallest and heaviest equipment while staying as low as possible.',
    where: 'Construction and mining equipment, cranes and large industrial loads.',
    keys: ['Loads are often oversize or overweight and move under state permits with route and time conditions.'],
    lessons: ['beginner.m3.l4', 'beginner.m1.l3'], related: ['stepdeck', 'flatbed'], terms: ['RGN', 'Oversize load'] },
  { id: 'tanker', name: 'Tanker trailer', cat: 'trailers', photo: 'tanker', art: 'tanker', alt: 'A tractor pulling a tank trailer',
    short: 'A tank that carries liquids, gases or dry bulk.',
    what: 'A tank trailer is a cylindrical tank on a trailer chassis.',
    does: 'Carries liquids (fuel, chemicals, food products), gases or dry bulk.',
    where: 'Fuel delivery, chemical and food-grade bulk transport.',
    keys: ['Drivers need the CDL tank vehicle (N) endorsement; hazmat (H) too when the load is placarded.', 'Liquid surge affects handling; many tanks have baffles or compartments.', 'Hazmat cargo tanks have periodic tests and inspections (49 CFR Part 180).'],
    lessons: ['beginner.m3.l4', 'beginner.m1.l3'], related: ['tractor', 'dryvan'], terms: [] },
  { id: 'chassis', name: 'Intermodal chassis', cat: 'trailers', photo: 'chassis', art: 'intermodal', alt: 'Empty intermodal container chassis frames parked in a row',
    short: 'A trailer frame that carries a shipping container.',
    what: 'An intermodal chassis is a skeleton trailer frame with locking points for a shipping container.',
    does: 'Carries a container between ports, rail ramps and customers. The container locks on at its corners with twist locks.',
    where: 'Port and rail drayage.',
    keys: ['Chassis are often supplied by a pool or provider rather than owned by the carrier — confirm who owns it before arranging a repair.'],
    lessons: ['beginner.m3.l4'], related: ['container', 'tractor'], terms: ['Intermodal chassis'] },
  { id: 'container', name: 'Shipping container', cat: 'trailers', photo: 'container', alt: 'A standard steel shipping container',
    short: 'A standard steel box moved by ship, rail and truck.',
    what: 'An intermodal container is a standardized steel box that moves between ships, trains and trucks without unloading the cargo.',
    does: 'Protects the freight through the whole trip; the truck carries it on an intermodal chassis.',
    where: 'International and domestic intermodal freight.',
    keys: ['Common lengths are 20, 40, 45 and 53 ft.', 'The container and the chassis are separate units, often owned by different companies.'],
    lessons: ['beginner.m3.l4'], related: ['chassis'], terms: [] },
  { id: 'doubles', name: 'Doubles (pup trailers)', cat: 'trailers', photo: 'doubles', art: 'doubles', alt: 'A tractor pulling two short trailers connected by a dolly',
    short: 'Two short trailers pulled by one tractor.',
    what: 'A doubles combination is one tractor pulling two short trailers (about 28 ft, called pups), joined by a converter dolly.',
    does: 'Moves more freight per driver and lets terminals split trailers for different destinations.',
    where: 'Common in LTL networks.',
    keys: ['Drivers need the CDL doubles/triples (T) endorsement.', 'Three units to track: lead trailer, dolly and rear trailer.'],
    lessons: ['beginner.m3.l4'], related: ['dolly', 'dryvan', 'tractor'], terms: [] },
  { id: 'dolly', name: 'Converter dolly', cat: 'trailers', photo: 'dolly', alt: 'A converter dolly with an axle, a fifth wheel and a drawbar',
    short: 'The axle unit that links two trailers.',
    what: 'A converter dolly is a short axle assembly with its own fifth wheel and a drawbar.',
    does: 'Supports the front of the second trailer in a doubles combination and connects it to the first trailer.',
    where: 'Doubles and triples operations.',
    keys: ['It has its own tires, brakes, lights and safety chains — track and inspect it as its own unit.'],
    lessons: ['beginner.m3.l4'], related: ['doubles', 'fifthwheel'], terms: ['Converter dolly'] },

  /* ---------------- Equipment ---------------- */
  { id: 'reeferunit', name: 'Reefer unit (transport refrigeration unit)', cat: 'equipment', photo: 'reeferunit', alt: 'A refrigeration unit mounted on the front wall of a semi-trailer',
    short: 'The refrigeration machine on a reefer trailer.',
    what: 'The reefer unit is the refrigeration system mounted on the front of a refrigerated trailer, commonly powered by its own small diesel engine with its own fuel tank.',
    does: 'Cools (or heats) the trailer to the setpoint and records temperatures.',
    where: 'Every reefer trailer. Repairs usually go to refrigeration dealers or technicians.',
    keys: ['Has its own engine hours and PM schedule, separate from the trailer.', 'Alarm codes tell the technician where to start — ask the driver to read them exactly.'],
    lessons: ['beginner.m3.l2', 'beginner.m5.l2', 'beginner.m3.l4'], related: ['reefer'], terms: [] },
  { id: 'liftgate', name: 'Liftgate', cat: 'equipment', photo: 'liftgate', alt: 'A truck with a liftgate platform at the rear',
    short: 'A powered platform at the back of a truck.',
    what: 'A liftgate (tail lift) is a powered platform mounted at the rear of a truck or trailer.',
    does: 'Raises and lowers freight between the ground and the cargo floor where there is no loading dock.',
    where: 'Mostly on straight trucks doing local and residential delivery.',
    keys: ['A broken liftgate can stop deliveries even when the truck runs fine.'],
    lessons: ['beginner.m3.l4'], related: ['straight', 'dock'], terms: [] },
  { id: 'dock', name: 'Loading dock', cat: 'equipment', photo: 'dock', art: 'live', alt: 'A building with several loading dock doors',
    short: 'Where trailers are loaded and unloaded.',
    what: 'A loading dock is a raised door at a warehouse or distribution center where a trailer backs in so freight can be moved straight into the building.',
    does: 'Lets forklifts move freight between the building floor and the trailer floor.',
    where: 'Shippers, receivers and carrier terminals — the site of live loads and drop-and-hook moves.',
    keys: ['A tractor that won\'t start at a live-unload dock blocks the customer\'s door.', 'Time at the dock beyond the free time can become detention.'],
    lessons: ['beginner.m1.l3', 'operations.m2.l4'], related: ['dryvan', 'liftgate'], terms: ['Drop and hook'] },
  { id: 'apu', name: 'APU (auxiliary power unit)', cat: 'equipment', photo: 'apu', alt: 'An auxiliary power unit mounted on the side of a truck frame',
    short: 'Powers cab heat, A/C and electrics while the engine is off.',
    what: 'A truck APU is a small separate power unit — often a small diesel engine or a battery system — mounted on the frame.',
    does: 'Heats, cools and powers the cab during rest breaks so the main engine doesn\'t have to idle.',
    where: 'Sleeper tractors on long-haul work.',
    keys: ['An APU failure can make a rest break unbearable in extreme heat or cold — it affects driver care, not just fuel use.', 'High idle time on a unit with an APU is a reason to check whether the APU works.'],
    lessons: ['operations.m1.l2', 'beginner.m3.l4'], related: ['sleeper'], terms: [] },
  { id: 'eld', name: 'ELD / onboard recorder', cat: 'equipment', photo: 'eld', alt: 'An in-cab screen showing a driver\'s hours of service graph',
    short: 'Records driving time for Hours of Service.',
    what: 'An electronic logging device (ELD) connects to the truck\'s engine and records driving time for Hours of Service. The photo shows an earlier electronic onboard recorder screen with an HOS graph.',
    does: 'Automatically records driving status, location and engine data so drivers and carriers can follow HOS rules.',
    where: 'Required in most U.S. commercial trucks that need records of duty status.',
    keys: ['Many ELDs are part of a telematics system that also reports fault codes.', 'ELD malfunctions have their own procedures — involve the safety department.'],
    lessons: ['operations.m1.l2', 'expert.m9.l1'], related: ['ecm'], terms: ['ELD'] },
  { id: 'triangle', name: 'Warning triangles', cat: 'equipment', photo: 'triangle', alt: 'A red reflective warning triangle on a road',
    short: 'Reflective triangles placed behind a stopped truck.',
    what: 'Bidirectional reflective warning triangles are the warning devices trucks carry for roadside stops.',
    does: 'Warn approaching traffic that a truck is stopped on or near the road.',
    where: 'Every commercial truck. U.S. rules require hazard flashers immediately and warning devices within 10 minutes (49 CFR 392.22).',
    keys: ['Confirm the driver has placed them during the first minutes of any roadside event.'],
    lessons: ['beginner.m5.l3', 'beginner.m5.l2'], related: ['tow'], terms: ['Warning devices'] },

  /* ---------------- Parts: engine & drivetrain ---------------- */
  { id: 'engine', name: 'Diesel engine', cat: 'parts', group: 'Engine & drivetrain', photo: 'engine', alt: 'A heavy-duty diesel truck engine on display',
    short: 'The engine that powers a heavy truck.',
    what: 'Heavy trucks use large diesel engines that ignite fuel with the heat of compressed air — no spark plugs.',
    does: 'Turns fuel into the power that drives the truck, and runs the air compressor, alternator and other accessories.',
    where: 'In every tractor and straight truck; engine faults commonly show up as warning lamps, power loss, smoke, noise or leaks.',
    keys: ['Engine work is usually tracked by miles and engine hours.', 'Oil pressure and coolant temperature warnings mean "stop safely."'],
    lessons: ['beginner.m3.l1', 'beginner.m3.l3', 'advanced.m2.l1'], related: ['turbo', 'injector', 'radiator', 'ecm', 'transmission'], terms: [] },
  { id: 'turbo', name: 'Turbocharger', cat: 'parts', group: 'Engine & drivetrain', photo: 'turbo', alt: 'Animated cutaway of a turbocharger showing exhaust and intake air flow',
    short: 'Uses exhaust flow to pack more air into the engine.',
    what: 'A turbocharger has a turbine spun by exhaust gas, connected to a compressor that pushes more air into the engine.',
    does: 'More air lets the engine burn more fuel efficiently and make more power.',
    where: 'Nearly every modern truck diesel.',
    keys: ['Symptoms drivers report: loss of power, whistling or whining under acceleration, black smoke, oil leaks.'],
    lessons: ['beginner.m3.l1', 'beginner.m4.l1'], related: ['engine'], terms: [] },
  { id: 'transmission', name: 'Transmission', cat: 'parts', group: 'Engine & drivetrain', photo: 'transmission', alt: 'A heavy truck automated manual transmission',
    short: 'Transfers engine power through gears.',
    what: 'The transmission is the gearbox behind the engine. Many newer trucks use automated manual transmissions (AMTs), which shift by themselves.',
    does: 'Selects gears so the engine can move heavy loads from a stop and cruise efficiently on the highway.',
    where: 'Every truck; issues include failure to shift, grinding, stuck in gear or warning messages.',
    keys: ['Transmission repairs are often among the longest and most expensive — check warranty before approving.'],
    lessons: ['beginner.m3.l1', 'expert.m6.l1'], related: ['clutch', 'driveshaft', 'engine'], terms: [] },
  { id: 'clutch', name: 'Clutch', cat: 'parts', group: 'Engine & drivetrain', photo: 'clutch', alt: 'A clutch disc',
    short: 'Connects and disconnects the engine from the transmission.',
    what: 'The clutch sits between the engine and the transmission. The photo shows a clutch disc, the part that wears.',
    does: 'Lets the engine turn without moving the truck, and engages smoothly to start moving.',
    where: 'Manual and automated manual transmissions.',
    keys: ['Slipping, chattering or hard engagement are common complaints; stop-start work wears clutches faster.'],
    lessons: ['beginner.m3.l1', 'advanced.m3.l1'], related: ['transmission', 'engine'], terms: [] },
  { id: 'driveshaft', name: 'Driveshaft', cat: 'parts', group: 'Engine & drivetrain', photo: 'driveshaft', alt: 'A driveshaft with universal joints',
    short: 'Carries power from the transmission to the rear axles.',
    what: 'A driveshaft is a rotating shaft with universal joints at its ends.',
    does: 'Delivers power from the transmission back to the drive axles while the suspension moves.',
    where: 'Between the transmission and the differential(s).',
    keys: ['Vibration that changes with speed or a clunk when taking off can point to driveline problems.'],
    lessons: ['beginner.m3.l1'], related: ['transmission', 'differential'], terms: [] },
  { id: 'differential', name: 'Differential', cat: 'parts', group: 'Engine & drivetrain', photo: 'differential', alt: 'A cutaway differential gearbox showing its gears',
    short: 'Lets wheels on the same axle turn at different speeds.',
    what: 'The differential is the gear set inside each drive axle housing.',
    does: 'Sends power to both wheels while letting the outside wheel turn faster than the inside wheel in a turn.',
    where: 'In each drive axle; tandem drive tractors have two.',
    keys: ['Whining that gets louder, clunking or leaks from the axle housing are typical complaints.'],
    lessons: ['beginner.m3.l1', 'beginner.m4.l1'], related: ['driveshaft', 'tandem'], terms: [] },

  /* ---------------- Parts: brakes & air system ---------------- */
  { id: 'drumbrake', name: 'S-cam drum brake', cat: 'parts', group: 'Brakes & air system', art: 'drum', alt: 'Illustration of an S-cam drum brake with chamber and slack adjuster',
    short: 'Brake shoes pressed against the inside of a drum.',
    what: 'The S-cam drum brake has been the most common brake on North American heavy trucks and trailers. An S-shaped cam pushes the brake shoes outward against a drum.',
    does: 'Air pressure in the brake chamber pushes a rod, which turns the slack adjuster and the S-cam, which applies the shoes.',
    where: 'At the wheels of most trailers and many tractors.',
    keys: ['Brakes out of adjustment are among the most common roadside inspection findings.', 'A grinding noise when braking can mean linings worn to metal — a safety-critical defect.'],
    lessons: ['beginner.m3.l2', 'beginner.m9.l2'], related: ['slack', 'chamber', 'airdisc'], terms: ['Air brakes'] },
  { id: 'airdisc', name: 'Air disc brake', cat: 'parts', group: 'Brakes & air system', photo: 'airdisc', art: 'disc', alt: 'An air-actuated disc brake on a truck axle',
    short: 'A caliper squeezes pads against a rotor.',
    what: 'An air disc brake uses an air-operated caliper to clamp brake pads onto a rotor.',
    does: 'Stops the wheel like a drum brake, but with a different design and different parts.',
    where: 'Increasingly common on trucks, especially on steer axles.',
    keys: ['Pads and rotors are different parts from drum shoes — confirm brake type before ordering parts or sending a vendor.'],
    lessons: ['beginner.m3.l2'], related: ['drumbrake', 'chamber'], terms: ['Air disc brake'] },
  { id: 'chamber', name: 'Brake chamber (spring brake)', cat: 'parts', group: 'Brakes & air system', photo: 'chamber', alt: 'A dual brake chamber with a spring brake section',
    short: 'Turns air pressure into braking force.',
    what: 'A brake chamber is the round canister at each wheel. A dual "spring brake" chamber has a service section and a powerful spring section for parking and emergency braking.',
    does: 'Air pushes a diaphragm and pushrod to apply the brake. The spring section applies the brake when air is released — or lost.',
    where: 'At each braked wheel position.',
    keys: ['Air leaks at chambers are brake-system defects.', 'Spring brakes are held off by air pressure; if pressure falls too low, they apply.'],
    lessons: ['beginner.m3.l2', 'beginner.m3.l3'], related: ['slack', 'drumbrake', 'airtanks'], terms: [] },
  { id: 'slack', name: 'Slack adjuster', cat: 'parts', group: 'Brakes & air system', art: 'drum', pin: { x: 56, y: 17.5 }, alt: 'Illustration of a drum brake with the slack adjuster arm marked',
    short: 'The lever that turns the S-cam and keeps brakes adjusted.',
    what: 'The slack adjuster is the arm that connects the brake chamber pushrod to the S-cam shaft. (Marked on the illustration.)',
    does: 'Turns the cam when the brakes apply. Automatic slack adjusters take up slack as the linings wear.',
    where: 'On drum brakes at each wheel.',
    keys: ['Automatic slack adjusters shouldn\'t need routine manual adjustment — repeated adjustment on the same wheel needs diagnosis.'],
    lessons: ['beginner.m3.l2'], related: ['drumbrake', 'chamber'], terms: ['Slack adjuster'] },
  { id: 'compressor', name: 'Air compressor', cat: 'parts', group: 'Brakes & air system', photo: 'compressor', alt: 'A truck air brake compressor',
    short: 'Builds the air pressure for the brakes.',
    what: 'The air compressor is driven by the engine.',
    does: 'Pumps air into the reservoirs that supply the brakes, suspension and other air systems.',
    where: 'Mounted on the engine of every air-braked truck.',
    keys: ['Slow air build-up or a compressor that can\'t keep up are signs to report.'],
    lessons: ['beginner.m3.l2'], related: ['airdryer', 'airtanks', 'chamber'], terms: [] },
  { id: 'airdryer', name: 'Air dryer', cat: 'parts', group: 'Brakes & air system', photo: 'airdryer', alt: 'A truck air dryer with a spin-on cartridge',
    short: 'Removes moisture from the brake air.',
    what: 'The air dryer is a canister with a replaceable desiccant cartridge between the compressor and the reservoirs.',
    does: 'Removes water and oil from the compressed air so valves don\'t corrode or freeze.',
    where: 'In the air system of air-braked trucks.',
    keys: ['Cartridges are commonly replaced on a PM schedule.'],
    lessons: ['beginner.m3.l2'], related: ['compressor', 'airtanks'], terms: [] },
  { id: 'airtanks', name: 'Air tanks (reservoirs)', cat: 'parts', group: 'Brakes & air system', photo: 'airtanks', alt: 'A truck chassis section showing a compressed-air reservoir',
    short: 'Store compressed air for the brakes.',
    what: 'Air reservoirs are steel or aluminum tanks mounted on the frame.',
    does: 'Store compressed air so it\'s ready for braking. The primary and secondary circuits have their own tanks and gauges.',
    where: 'On the frame of the tractor (and on air-braked trailers).',
    keys: ['Drain valves let water out; a low-air warning means stop safely.'],
    lessons: ['beginner.m3.l2', 'beginner.m3.l3'], related: ['compressor', 'airdryer', 'gladhands'], terms: [] },
  { id: 'gladhands', name: 'Glad hands & air lines', cat: 'parts', group: 'Coupling & trailer parts', photo: 'gladhands', art: 'dryvan', pin: { x: 93, y: 35 }, alt: 'Red and blue coiled air lines mounted behind a tractor cab, ready to connect to a trailer',
    short: 'Couplers that connect the tractor\'s air to the trailer.',
    what: 'Glad hands are the couplers at the ends of the tractor\'s air lines. They lock onto matching couplers on the trailer nose. The photo shows the red and blue air lines coiled behind a tractor cab; the marker on the diagram shows where they connect on the trailer.',
    does: 'Carry air to the trailer\'s brakes: the red line is emergency/supply, the blue line is service (brake application).',
    where: 'Between the back of the tractor cab and the front of the trailer.',
    keys: ['Leaking glad-hand seals are a common, cheap fix — but an air leak is still a brake-system defect.', 'The 7-way electrical cord runs alongside them.'],
    lessons: ['beginner.m3.l2', 'beginner.m1.l1'], related: ['fifthwheel', 'kingpin', 'sevenway', 'airtanks'], terms: ['Glad hands'] },

  /* ---------------- Parts: tires, wheels & suspension ---------------- */
  { id: 'tire', name: 'Truck tire', cat: 'parts', group: 'Tires, wheels & suspension', photo: 'tire', art: 'tire-section', alt: 'A truck tire showing its tread grooves',
    short: 'Steer, drive and trailer tires — each built for its job.',
    what: 'Heavy truck tires are radial tires built for high loads. Steer tires use rib treads, drive tires use lug treads for traction, and trailer tires are free-rolling.',
    does: 'Carry the load, provide grip for steering, driving and braking, and absorb road shock.',
    where: 'A typical five-axle tractor-trailer runs 18 tires.',
    keys: ['U.S. minimum tread depth: 4/32 in on steer tires, 2/32 in on other positions (49 CFR 393.75).', 'Always record the exact position and the full size from the sidewall.'],
    lessons: ['beginner.m3.l5', 'advanced.m4.l3', 'beginner.m3.l2'], related: ['wheel', 'tandem', 'steering'], terms: ['Tread depth', 'Duals', 'Wide-base single', 'Retread'] },
  { id: 'wheel', name: 'Wheel & lug nuts', cat: 'parts', group: 'Tires, wheels & suspension', photo: 'wheel', alt: 'A polished aluminum truck wheel with lug nuts',
    short: 'The rim the tire mounts on, bolted to the hub.',
    what: 'Truck wheels are steel or aluminum rims bolted to the hub with lug nuts. Common diameters include 22.5 and 24.5 in.',
    does: 'Holds the tire and transfers the load to the axle.',
    where: 'Every wheel position; duals mount two wheels per wheel end.',
    keys: ['Loose or missing lug nuts and cracked wheels are serious safety defects.', 'Tire and wheel sizes must match exactly.'],
    lessons: ['beginner.m3.l5', 'advanced.m4.l3'], related: ['tire', 'tandem'], terms: [] },
  { id: 'tandem', name: 'Axles & trailer tandem', cat: 'parts', group: 'Tires, wheels & suspension', photo: 'tandem', alt: 'The tandem axles of a semi-trailer with dual tires and suspension',
    short: 'The axle groups that carry the trailer\'s weight.',
    what: 'Most semi-trailers ride on a tandem — two axles close together — often on a slider that can move along the trailer frame.',
    does: 'Carries the load. Sliding the tandem shifts weight between the trailer axles and the tractor\'s drive axles.',
    where: 'Under the rear of the trailer; tractors have their own steer and drive axles.',
    keys: ['U.S. federal Interstate limit: 34,000 lb per tandem group and 80,000 lb gross (23 CFR 658.17).', 'Slider locking pins must engage before the trailer moves.'],
    lessons: ['beginner.m1.l3', 'beginner.m3.l4'], related: ['tire', 'airspring', 'leafspring', 'dryvan'], terms: ['Axle configuration'] },
  { id: 'airspring', name: 'Air spring (air bag)', cat: 'parts', group: 'Tires, wheels & suspension', photo: 'airspring', alt: 'A rubber air spring in a vehicle suspension',
    short: 'A rubber bellows that supports the load on air.',
    what: 'An air spring — often called an air bag — is a rubber bellows filled with compressed air in an air-ride suspension.',
    does: 'Supports the vehicle and load and smooths the ride; the system keeps ride height level.',
    where: 'Air-ride suspensions on tractors and trailers.',
    keys: ['A leaning trailer or audible air leak can mean a failed air spring — arrange an inspection rather than guessing.'],
    lessons: ['beginner.m3.l2'], related: ['leafspring', 'tandem'], terms: [] },
  { id: 'leafspring', name: 'Leaf spring', cat: 'parts', group: 'Tires, wheels & suspension', photo: 'leafspring', alt: 'A leaf spring suspension on a vehicle axle',
    short: 'Stacked steel strips that act as a spring.',
    what: 'A leaf spring is a stack of curved steel strips ("leaves") clamped to the axle.',
    does: 'Supports the load and absorbs road shock.',
    where: 'Steer axles and many spring-ride trailers and trucks.',
    keys: ['Broken leaves or a shifted axle are safety issues — they can affect handling and alignment.'],
    lessons: ['beginner.m3.l2'], related: ['airspring', 'tandem'], terms: [] },
  { id: 'steering', name: 'Steering gear', cat: 'parts', group: 'Tires, wheels & suspension', photo: 'steering', alt: 'Diagram of a recirculating-ball steering gear',
    short: 'Turns the steering wheel into wheel movement.',
    what: 'Most heavy trucks use a recirculating-ball steering gear (shown in the diagram), connected to the wheels through linkage and tie rods.',
    does: 'Multiplies the driver\'s steering effort — usually with power assist.',
    where: 'At the front of the frame, linked to the steer axle.',
    keys: ['Loose steering, pulling, hard steering or vibration are always safety-critical complaints.'],
    lessons: ['beginner.m3.l2', 'beginner.m5.l1'], related: ['tire'], terms: [] },

  /* ---------------- Parts: fuel, exhaust & aftertreatment ---------------- */
  { id: 'injector', name: 'Fuel injector', cat: 'parts', group: 'Fuel, exhaust & aftertreatment', photo: 'injector', alt: 'A diesel unit injector',
    short: 'Sprays fuel into each cylinder.',
    what: 'Fuel injectors deliver precisely timed, high-pressure fuel into each cylinder. The photo shows a unit injector used in some heavy diesels.',
    does: 'Controls how much fuel burns, which affects power, fuel economy and emissions.',
    where: 'In the cylinder head, one per cylinder.',
    keys: ['Misfire, rough running, smoke or poor fuel economy can involve injectors — a technician confirms.'],
    lessons: ['beginner.m3.l1'], related: ['engine', 'ecm'], terms: [] },
  { id: 'dpf', name: 'Diesel particulate filter (DPF)', cat: 'parts', group: 'Fuel, exhaust & aftertreatment', photo: 'dpf', alt: 'A diesel particulate filter installed in a vehicle exhaust system',
    short: 'Traps soot from the exhaust.',
    what: 'The DPF is a filter in the exhaust system that captures soot (particulate matter).',
    does: 'Holds soot and periodically burns it off in a process called regeneration.',
    where: 'In the aftertreatment system of modern diesel trucks, along with the DOC and SCR.',
    keys: ['DPF and regen warnings, then a derate, are among the most common aftertreatment calls.', 'EGR, DOC and SCR work alongside the DPF to meet emissions rules.'],
    lessons: ['advanced.m2.l3', 'beginner.m3.l1'], related: ['def', 'engine'], terms: ['DPF', 'Aftertreatment', 'Regeneration', 'DOC', 'EGR'] },
  { id: 'def', name: 'DEF tank & SCR system', cat: 'parts', group: 'Fuel, exhaust & aftertreatment', photo: 'def', alt: 'The diesel exhaust fluid tank filler on a truck',
    short: 'Holds the fluid the SCR system uses.',
    what: 'Diesel exhaust fluid (DEF) is a urea solution stored in its own tank — usually with a blue cap. The selective catalytic reduction (SCR) system injects it into the exhaust.',
    does: 'Converts nitrogen oxides (NOx) in the exhaust into nitrogen and water.',
    where: 'On modern diesel trucks; the DEF tank is filled separately from the fuel tanks.',
    keys: ['Engines progressively limit power if DEF runs low or out.', 'DEF freezes around 12 °F (−11 °C); systems have heaters.'],
    lessons: ['advanced.m2.l3', 'beginner.m3.l1', 'beginner.m3.l3'], related: ['dpf'], terms: ['DEF', 'SCR'] },

  /* ---------------- Parts: electrical & cooling ---------------- */
  { id: 'battery', name: 'Batteries', cat: 'parts', group: 'Electrical & cooling', photo: 'battery', alt: 'A lead-acid vehicle battery',
    short: 'Store electrical energy to start the engine.',
    what: 'Heavy trucks usually carry a bank of several 12-volt lead-acid batteries. The photo shows a single battery.',
    does: 'Crank the starter and power electrical loads when the engine is off.',
    where: 'In a battery box on the frame or under a step.',
    keys: ['Cold weather and long idle-off periods are hard on batteries.', 'No-start calls: ask if the lights come on and if the engine cranks.'],
    lessons: ['beginner.m3.l2', 'beginner.m3.l3'], related: ['alternator', 'starter'], terms: [] },
  { id: 'alternator', name: 'Alternator', cat: 'parts', group: 'Electrical & cooling', photo: 'alternator', alt: 'Cutaway illustration of an automotive alternator',
    short: 'Charges the batteries while the engine runs.',
    what: 'The alternator is a belt-driven generator on the engine. The cutaway shows its internal parts (labels in Finnish).',
    does: 'Produces electricity to charge the batteries and power the truck while running.',
    where: 'On the front of the engine, driven by the accessory belt.',
    keys: ['Low voltmeter reading or a battery/charging lamp while running: the truck may not restart — plan before the driver shuts down.'],
    lessons: ['beginner.m3.l3', 'beginner.m3.l2'], related: ['battery', 'belt', 'starter'], terms: [] },
  { id: 'starter', name: 'Starter motor', cat: 'parts', group: 'Electrical & cooling', photo: 'starter', alt: 'A starter motor',
    short: 'Cranks the engine to start it.',
    what: 'The starter is an electric motor that engages the engine flywheel.',
    does: 'Turns the engine over until it starts on its own.',
    where: 'Mounted at the flywheel housing.',
    keys: ['A click but no crank can be the starter, the batteries or the connections — a technician tests which.'],
    lessons: ['beginner.m3.l2', 'operations.m1.l2'], related: ['battery', 'alternator'], terms: [] },
  { id: 'belt', name: 'Accessory drive belt', cat: 'parts', group: 'Electrical & cooling', photo: 'belt', alt: 'An engine accessory belt drive with pulleys',
    short: 'Drives the alternator, fan and other accessories.',
    what: 'A drive belt runs around pulleys at the front of the engine.',
    does: 'Turns accessories such as the alternator, water pump and A/C compressor.',
    where: 'Front of the engine.',
    keys: ['A broken belt can stop charging and cooling at the same time.'],
    lessons: ['beginner.m3.l1'], related: ['alternator', 'radiator'], terms: [] },
  { id: 'radiator', name: 'Radiator & cooling system', cat: 'parts', group: 'Electrical & cooling', photo: 'radiator', alt: 'A vehicle radiator',
    short: 'Keeps the engine at operating temperature.',
    what: 'The cooling system — radiator, coolant, water pump, thermostat, fan and hoses — removes heat from the engine. The photo shows a radiator.',
    does: 'Coolant carries heat from the engine to the radiator, where airflow removes it.',
    where: 'At the front of the truck behind the grille.',
    keys: ['A climbing temperature gauge or steam means stop safely — and never open a hot radiator cap.', 'Sweet smell or white smoke can mean coolant entering the engine.'],
    lessons: ['beginner.m3.l1', 'beginner.m3.l3'], related: ['engine', 'belt'], terms: [] },
  { id: 'ecm', name: 'ECM (engine control module)', cat: 'parts', group: 'Electrical & cooling', photo: 'ecm', alt: 'An engine control module unit',
    short: 'The engine\'s computer.',
    what: 'The ECM is the electronic control unit that runs the engine. The photo shows an ECM from a passenger car; truck ECMs look similar and are usually mounted on the engine.',
    does: 'Controls fueling and emissions systems and stores fault codes (DTCs) that technicians and telematics read.',
    where: 'On or near the engine.',
    keys: ['Fault codes are reported as SPN/FMI — the coordinator records them, a technician diagnoses.'],
    lessons: ['advanced.m2.l1', 'expert.m9.l1'], related: ['engine', 'eld'], terms: ['ECM', 'DTC'] },

  /* ---------------- Parts: coupling & trailer parts ---------------- */
  { id: 'fifthwheel', name: 'Fifth wheel', cat: 'parts', group: 'Coupling & trailer parts', photo: 'fifthwheel', art: 'rig', pin: { x: 76.7, y: 63 }, alt: 'A fifth-wheel coupling plate on the back of a tractor',
    short: 'The coupling plate on the tractor.',
    what: 'The fifth wheel is the horseshoe-shaped coupling plate mounted over the tractor\'s drive axles.',
    does: 'Locks onto the trailer\'s kingpin and carries the front of the trailer while letting it pivot in turns.',
    where: 'On the back of every tractor; many slide to adjust weight between the steer and drive axles.',
    keys: ['A coupling that isn\'t fully locked is a serious safety risk — drivers check it on every hook-up.', 'Needs regular lubrication and inspection.'],
    lessons: ['beginner.m1.l1', 'beginner.m3.l2', 'beginner.m3.l4'], related: ['kingpin', 'gladhands', 'tractor'], terms: ['Fifth wheel'] },
  { id: 'kingpin', name: 'Kingpin (trailer)', cat: 'parts', group: 'Coupling & trailer parts', art: 'dryvan', pin: { x: 89.5, y: 66 }, alt: 'Illustration of a dry van trailer with the kingpin marked under the front',
    short: 'The steel pin under the trailer\'s front.',
    what: 'The trailer kingpin is a steel pin that hangs down from the plate under the front of the trailer. (Marked on the illustration.) Not to be confused with the steering kingpin on a truck\'s front axle.',
    does: 'Slides into the fifth wheel, where the locking jaws close around it.',
    where: 'Under the nose of every semi-trailer.',
    keys: ['Wear or damage is a coupling safety issue — report it on the trailer, not the tractor.'],
    lessons: ['beginner.m1.l1', 'beginner.m3.l2', 'beginner.m3.l4'], related: ['fifthwheel', 'landinggear', 'dryvan'], terms: ['Kingpin'] },
  { id: 'landinggear', name: 'Landing gear', cat: 'parts', group: 'Coupling & trailer parts', art: 'dryvan', pin: { x: 78.5, y: 79 }, alt: 'Illustration of a dry van trailer with the landing gear marked',
    short: 'The legs that hold up a parked trailer.',
    what: 'Landing gear is the pair of crank-operated legs near the front of a semi-trailer. (Marked on the illustration.)',
    does: 'Supports the front of the trailer when it isn\'t coupled to a tractor.',
    where: 'Every semi-trailer; cranked down before uncoupling and up before driving.',
    keys: ['"Won\'t crank" and bent legs are common yard calls.', 'Yard tractors lift the trailer with a hydraulic fifth wheel instead of cranking.'],
    lessons: ['beginner.m3.l2', 'beginner.m3.l4'], related: ['kingpin', 'dryvan', 'yard'], terms: [] },
  { id: 'sevenway', name: '7-way trailer connector', cat: 'parts', group: 'Coupling & trailer parts', art: 'sevenway', alt: 'Illustration of the face of a 7-way trailer electrical socket',
    short: 'The electrical plug between tractor and trailer.',
    what: 'The 7-way connector (SAE J560) is the round electrical plug and socket that links the tractor to the trailer.',
    does: 'Carries power for the trailer\'s stop, turn, tail and marker lights, plus an auxiliary circuit commonly used for trailer ABS.',
    where: 'At the back of the cab and on the trailer nose, next to the glad hands.',
    keys: ['Corroded connectors are a common cause of trailer lighting and ABS faults.', 'See the wire color chart in Quick Reference.'],
    lessons: ['beginner.m3.l2'], related: ['gladhands', 'fifthwheel'], terms: [] }
];
const LIB_MAP = new Map(LIBRARY.map((x) => [x.id, x]));
const LIB_TERM = new Map(LIBRARY.flatMap((x) => (x.terms || []).map((t) => [t.toLowerCase(), x])));

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
      { t: 'mc', q: 'What happens when a work order is completed?', o: ['It is deleted', 'Fleetio creates a service entry, and the vehicle\'s service history and reminders update', 'The driver gets paid', 'Nothing until the invoice is mailed'], a: 1, e: 'A completed work order generates a service entry. That adds to the service history and updates service reminders.' },
      { t: 'wwyd', q: 'T-118 comes in for a broken mirror. Its PM A reminder shows "due soon". What would you do?', o: ['Fix the mirror only; PMs are someone else\'s problem', 'Add the PM to the same work order so the unit stops once', 'Delete the reminder', 'Wait until the PM is overdue'], a: 1, e: 'Combining due-soon preventive work with a repair avoids a second trip to the shop and extra downtime.' },
      { t: 'mc', q: 'Which piece of information most affects whether PM reminders are accurate?', o: ['The truck\'s color', 'The meter reading (odometer or engine hours)', 'The driver\'s phone number', 'The vendor\'s address'], a: 1, e: 'Mileage- and hour-based reminders count from the meter. A wrong reading moves every due date.' },
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
      { t: 'mc', q: 'Which system would most likely tell you where a broken-down truck is right now?', o: ['A parts catalog', 'The telematics platform (Samsara)', 'The truck\'s title', 'The invoice'], a: 1, e: 'GPS location from telematics helps you send roadside service to the right place.' },
      { t: 'wwyd', q: 'You get an engine fault alert. What would you check first?', o: ['The truck\'s paint color', 'The driver\'s symptoms and warning lamps, then the fault details', 'The fuel price', 'Last month\'s invoices'], a: 1, e: 'Safety and urgency come first. Symptoms and lamp color tell you whether the truck must stop.' },
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
      { t: 'mc', q: 'What kind of system is ProTransport?', o: ['A transport refrigeration unit', 'A trucking management system (TMS) made by RTS', 'A tire brand', 'An engine diagnostic tool'], a: 1, e: 'ProTransport is RTS\'s trucking software for loads, dispatch, accounting and more.' },
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
      { t: 'mc', q: 'What does Thermo King primarily make?', o: ['Dispatch software', 'Transport refrigeration and temperature-control units', 'Truck tires', 'Fuel cards'], a: 1, e: 'Thermo King is a transport temperature-control brand of Trane Technologies.' },
      { t: 'mc', q: 'Which reading shows the air coming back from the cargo area into the unit?', o: ['Discharge air', 'Return air', 'Setpoint', 'Hourmeter'], a: 1, e: 'Return air is the air returning from the load. Discharge (supply) air is what leaves the unit.' },
      { t: 'mc', q: 'Why does a reefer unit go into defrost?', o: ['To save fuel', 'To melt ice from the evaporator coil so air and heat can move through it', 'To heat the driver\'s cab', 'To charge the battery'], a: 1, e: 'Ice on the evaporator coil blocks airflow and cooling. Defrost removes it.' },
      { t: 'wwyd', q: 'A driver reports a reefer alarm. Which information is most important to collect first?', o: ['The tractor\'s odometer', 'The alarm code plus setpoint, return and discharge air temperatures', 'The driver\'s home address', 'The trailer\'s paint color'], a: 1, e: 'The alarm code and temperatures tell you how urgent it is and whether the cargo is at risk.' },
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
      { t: 'scenario', q: 'MyGeotab shows the same code three times this week, all now inactive. What do you do?', o: ['Nothing, they cleared', 'Plan an inspection, for example with the next PM, and note the history', 'Replace the engine', 'Delete the history'], a: 1, e: 'Repeats point to a real problem. Plan a diagnosis before it becomes a road call.' }
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
      { t: 'mc', q: 'Who mainly uses Decisiv together?', o: ['Fleets and their service providers', 'Drivers and brokers', 'Shippers and receivers', 'Fuel stations'], a: 0, e: 'It connects fleets with dealers and service providers around repairs.' },
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
      { t: 'mc', q: 'What is VMRS?', o: ['A standard coding system for vehicle maintenance', 'A tire brand', 'A truck stop chain', 'A fuel card'], a: 0, e: 'Vehicle Maintenance Reporting Standards, from ATA\'s Technology & Maintenance Council.' },
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
      { t: 'mc', q: 'What is Lynx Fleet?', o: ['Carrier Transicold\'s telematics platform for refrigerated fleets', 'A tire brand', 'A fuel card', 'A roadside network'], a: 0, e: 'Lynx Fleet monitors refrigeration units remotely.' },
      { t: 'tf', q: 'A coordinator may tell the driver to lower the setpoint to protect a load.', a: false, e: 'The setpoint comes from the shipper. Changing it can ruin the freight.' },
      { t: 'mc', q: 'Where should you look up what a Carrier reefer alarm code means?', o: ['The unit\'s operator or service manual, or a Carrier Transicold dealer', 'Another brand\'s alarm chart', 'The fuel receipt', 'The truck\'s VIN'], a: 0, e: 'Codes differ by maker and model. Use the official manual or dealer.' }
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
      { t: 'mc', q: 'How is the service usually activated?', o: ['Through a telematics reseller, a Cummins representative or Cummins Care', 'At a truck wash', 'By the shipper', 'Through the fuel card'], a: 0, e: 'Cummins documents activation through these channels.' }
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
      { t: 'mc', q: 'Who reviews severe Detroit Connect fault events, according to Detroit?', o: ['Experts at the Detroit Customer Support Center', 'The driver', 'The broker', 'The fuel desk'], a: 0, e: 'Detroit describes CSC experts analyzing severe events and following up.' },
      { t: 'tf', q: 'For severe events, the follow-up can include nearby service locations with the needed parts in stock.', a: true, e: 'That helps you pick the shop that can fix it today.' },
      { t: 'mc', q: 'Which trucks commonly use Detroit engines?', o: ['Freightliner and Western Star', 'Only trailers', 'Reefer units', 'Forklifts'], a: 0, e: 'Detroit is part of Daimler Truck North America, maker of Freightliner and Western Star.' }
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
      { t: 'mc', q: 'What does FleetNet America mainly provide?', o: ['A 24/7 roadside and repair network', 'Engine fault codes', 'Fuel cards', 'Reefer units'], a: 0, e: 'It triages breakdowns and dispatches providers from its network.' },
      { t: 'tf', q: 'Once FleetNet takes an event, the coordinator has nothing more to do.', a: false, e: 'You still authorize, follow up, inform dispatch and record it.' },
      { t: 'mc', q: 'Which company owns FleetNet America?', o: ['Cox Automotive', 'Cummins', 'Trimble', 'Carrier'], a: 0, e: 'FleetNet is a Cox Automotive brand.' }
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
      { t: 'mc', q: "What is Speedco?", o: ["Love's quick lube and preventive maintenance brand", 'A fuel card', 'A telematics device', 'A reefer maker'], a: 0, e: "Love's bought Speedco from Bridgestone in 2017." },
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
      { t: 'mc', q: 'What is FleetPride?', o: ['A heavy-duty truck and trailer parts distributor', 'A telematics platform', 'A fuel card', 'An engine maker'], a: 0, e: 'It sells parts through branches and online.' },
      { t: 'mc', q: 'What should you have before searching for a part?', o: ['The exact part number or the unit\'s VIN', 'The driver\'s phone number', 'The load number', 'The fuel price'], a: 0, e: 'Part number or VIN fit avoids ordering the wrong part.' },
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
      { t: 'mc', q: 'What kind of software is McLeod LoadMaster?', o: ['A transportation management system (TMS)', 'An engine diagnostic tool', 'A reefer controller', 'A parts catalog'], a: 0, e: 'It manages loads, dispatch and billing.' },
      { t: 'tf', q: 'A unit with an open repair order can be flagged unavailable for dispatch when maintenance and LoadMaster are linked.', a: true, e: 'Maintenance vendors describe this integration.' },
      { t: 'mc', q: 'What is the coordinator\'s main job in the TMS?', o: ['Keep unit status and ETR accurate', 'Book loads', 'Price freight', 'Pay drivers'], a: 0, e: 'Dispatch plans from your status and ETR.' }
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
      { t: 'mc', q: 'What can a Comdata Express Code be used for, according to Comdata?', o: ['Moving funds electronically to registered payees such as repair shops', 'Reading engine faults', 'Booking loads', 'Setting reefer temperature'], a: 0, e: 'It transfers funds to registered cardholders, including repair shops.' },
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
  { term: 'Deadhead', full: 'Deadhead miles', cat: 'Operations', def: 'Miles driven without a revenue-producing load, such as driving empty to a pickup or to recover equipment.', simple: 'Driving empty — miles that don\'t earn money.', example: 'Sending an empty tractor 50 miles to pick up a stranded trailer adds 50 deadhead miles.', related: ['Power swap', 'Downtime'] },
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
  { id: 'roadside-oos', title: 'Put out of service at a roadside inspection', cat: 'Compliance', level: 'Beginner', from: 'Driver · T-133 / TR-532', message: 'Got pulled into the scale for a Level I. Trooper put the trailer out of service: right rear brake out of adjustment. Sending you a photo of the report. He says I can\'t move it. Can I limp it to the truck stop down the road?', ctx: ['Loaded', 'I-20 WB scale', '10:15'],
    options: [
      { text: 'No, it stays parked until the brake is fixed. I\'m sending a brake-qualified mobile tech to the scale now and telling dispatch the load is delayed. Please send the full report photo and stay with the unit. I\'ll call you with the ETA.', grade: 'best', fb: 'An out-of-service vehicle may not move until the listed repair is done (49 CFR 396.9(c)). Bring the repair to the unit, keep dispatch informed, and get the report: the carrier must certify the repair within 15 days.' },
      { text: 'It\'s only one brake. Go slow to the truck stop and we\'ll fix it there.', grade: 'poor', fb: 'Driving an out-of-service vehicle is a serious violation for the driver and the carrier, and the brake is still defective. Never move it.' },
      { text: 'Okay, I\'ll find a shop near you for tomorrow.', grade: 'ok', fb: 'Right that it needs repair, but a mobile brake tech can usually fix an adjustment at the scale today. Waiting strands the driver and the load, and you still need the report.' }
    ] },
  { id: 'annual-lapse', title: 'Expired annual inspection at dispatch', cat: 'Compliance', level: 'Advanced', from: 'Dispatcher', message: 'TR-540 is loaded and leaving at 15:00. Yard says the annual sticker expired last week. It\'s a 200-mile run, nobody checks trailers. Can we just send it?', ctx: ['Loaded', 'Yard', '11:40'],
    options: [
      { text: 'Not on an expired annual. Our yard inspector can do it at 13:00, which still makes 15:00 if it passes. I\'m also holding TR-552 as a spare in case it needs repairs. I\'ll confirm by 14:00.', grade: 'best', fb: 'Every trailer needs a periodic inspection at least every 12 months (49 CFR 396.17). Missing proof is one of the most-cited violations. You fixed the gap before dispatch and protected the load in parallel.' },
      { text: 'Fine, it\'s only 200 miles.', grade: 'poor', fb: 'An expired periodic inspection is a violation the moment the trailer is on the road, whatever the distance, and it goes on the company record.' },
      { text: 'No, it can\'t go. Find another trailer.', grade: 'ok', fb: 'Correct on compliance, but you left dispatch to solve it alone. An inspection today might keep the original plan.' }
    ] },
  { id: 'tpms-alert', title: 'Tire pressure alert on a loaded trailer', cat: 'Roadside', level: 'Advanced', from: 'Telematics · TR-518', message: 'TPMS alert: axle 2 left outer, 61 psi and falling (other tires 100–105 psi). Unit is moving on I-35, loaded, 70 miles from delivery.', ctx: ['Loaded', 'I-35 NB', '09:05'],
    options: [
      { text: 'Call the driver now: take the next safe exit and stop. Get a gauge reading on that tire and its dual partner. If it\'s still falling or hissing, it stays parked and I send mobile tire service with axle 2, left, outer.', grade: 'best', fb: 'A fast-falling tire at about 60% pressure can fail at speed and take its dual with it. Stop safely, confirm with a gauge, and treat a hiss or a reading under half the sidewall pressure as out of service (49 CFR 393.75).' },
      { text: 'It\'s only 70 miles. Let it finish and we\'ll check it after delivery.', grade: 'poor', fb: 'A tire losing pressure on a loaded trailer can blow out and overheat its dual. Waiting turns a tire repair into a road call, or worse.' },
      { text: 'Send a note to check tire pressure at the next PM.', grade: 'poor', fb: 'A falling reading is an active leak, not a PM item.' }
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

/* Glossary — equipment, tire and load terms used by the illustrated lessons */
GLOSSARY.push(
  { term: 'Day cab', full: 'Day cab tractor', cat: 'Equipment', def: 'A tractor with no sleeping compartment, used where the driver returns home daily.', simple: 'A tractor without a bed.', example: 'Local LTL pickup-and-delivery fleets usually run day cabs.', related: ['Sleeper cab', 'Straight truck'] },
  { term: 'Sleeper cab', full: 'Sleeper tractor', cat: 'Equipment', def: 'A tractor with a sleeper berth behind the seats, used for long-haul work where drivers rest on the truck.', simple: 'A tractor with a bed.', example: 'A sleeper\'s HVAC failure in summer can end a driver\'s trip even though the truck still runs.', related: ['Day cab', 'HOS'] },
  { term: 'Straight truck', full: 'Straight truck (box truck)', cat: 'Equipment', def: 'A truck whose cab and cargo body are mounted on the same chassis, with no separate trailer. A Class B CDL is required when the GVWR is 26,001 lb or more.', simple: 'A truck with the box built on.', example: 'If a straight truck breaks down, the cargo can\'t be moved by swapping tractors — it has to be transloaded or wait.', related: ['Day cab'] },
  { term: 'Axle configuration', full: 'Axle configuration (4x2, 6x4, 6x2)', cat: 'Equipment', def: 'Notation for a vehicle\'s wheel positions and how many are driven. The first number counts wheel positions (duals count as one); the second counts the driven positions.', simple: 'How many wheels, and how many are powered.', example: 'A 6x4 tractor has three axles, with both rear axles driven.', related: ['Duals'] },
  { term: 'Dry van', full: 'Dry van trailer', cat: 'Equipment', def: 'An enclosed trailer without temperature control; commonly 53 ft long and 102 in wide in U.S. truckload service.', simple: 'A plain enclosed box trailer.', example: 'A dry van with a door that won\'t latch can\'t be sealed, so the load can\'t leave.', related: ['Reefer', 'Kingpin'] },
  { term: 'Flatbed', full: 'Flatbed trailer', cat: 'Equipment', def: 'An open-deck trailer loaded from the sides or top; cargo is secured with straps or chains under 49 CFR 393 Subpart I.', simple: 'An open trailer with no walls.', example: 'A torn tarp or broken winch on a flatbed is a securement issue, not just damage.', related: ['Step deck', 'RGN'] },
  { term: 'Step deck', full: 'Step deck (drop deck) trailer', cat: 'Equipment', def: 'An open-deck trailer with a short upper deck over the kingpin and a lower main deck, allowing taller cargo within height limits.', simple: 'A flatbed with a step down.', example: 'Step decks often use low-profile tires, so the size matters on every tire call.', related: ['Flatbed', 'RGN'] },
  { term: 'RGN', full: 'Removable gooseneck trailer', cat: 'Equipment', def: 'A lowboy trailer whose front (gooseneck) detaches so equipment can drive onto a very low deck from the front.', simple: 'A low trailer for heavy machines.', example: 'RGN loads are often oversize and permitted, so breakdowns can affect permit route and time conditions.', related: ['Step deck', 'Oversize load'] },
  { term: 'Intermodal chassis', full: 'Intermodal container chassis', cat: 'Equipment', def: 'A trailer frame that carries a shipping container, secured at its corner castings with twist locks. Chassis are often supplied by pools or providers rather than owned by the carrier.', simple: 'A frame that carries a shipping container.', example: 'Before arranging a tire repair on a chassis, the coordinator confirms which provider owns it.', related: ['Dry van'] },
  { term: 'Converter dolly', full: 'Converter dolly', cat: 'Equipment', def: 'An axle assembly with a fifth wheel that converts a semitrailer into a full trailer, connecting the second trailer in a doubles combination.', simple: 'The short axle that links two trailers.', example: 'A dolly has its own tires, brakes and lights — and should be tracked as its own unit.', related: ['Fifth wheel', 'Kingpin'] },
  { term: 'FTL', full: 'Full truckload', cat: 'Cargo', def: 'A shipment from one shipper that uses a whole trailer, usually moving directly from pickup to delivery.', simple: 'One customer, one trailer.', example: 'An FTL breakdown affects one customer but the whole trailer\'s freight.', related: ['LTL', 'Shipper'] },
  { term: 'LTL', full: 'Less-than-truckload', cat: 'Cargo', def: 'Freight from multiple shippers sharing a trailer, moved through a terminal network and priced largely by NMFC freight class, weight and distance.', simple: 'Many customers\' freight in one trailer.', example: 'A late LTL linehaul trailer can miss its terminal departure and delay dozens of shipments.', related: ['FTL'] },
  { term: 'Drop and hook', full: 'Drop and hook', cat: 'Cargo', def: 'An operation where the driver drops one trailer and hooks another, preloaded trailer instead of waiting to be loaded.', simple: 'Swap trailers instead of waiting.', example: 'Drop-and-hook trailers can sit in customer yards for days, so defects often show up at pickup.', related: ['Detention'] },
  { term: 'Wide-base single', full: 'Wide-base single tire', cat: 'Components', def: 'One wide tire that replaces a pair of duals on a wheel end (for example, 445/50R22.5).', simple: 'One big tire instead of two.', example: 'A flat on a wide-base single usually stops the unit — there\'s no partner tire.', related: ['Duals', 'Tread depth'] },
  { term: 'Retread', full: 'Retreaded tire', cat: 'Components', def: 'A used tire casing that has passed inspection and had new tread bonded to it; commonly used on drive and trailer positions.', simple: 'An old tire with new tread.', example: 'A fleet\'s tire policy may allow retreads on trailers but not on steer axles.', related: ['Tread depth', 'Duals'] },
  { term: 'Load index', full: 'Tire load index', cat: 'Components', def: 'A number on the sidewall that corresponds to the maximum load a tire can carry; truck tires show two values, for single and dual use.', simple: 'How much weight a tire can carry.', example: 'In 144/141, 144 is the single-use rating and 141 is the dual-use rating.', related: ['Duals'] },
  { term: 'Air disc brake', full: 'Air disc brake', cat: 'Components', def: 'An air-operated brake in which a caliper squeezes pads against a rotor, instead of shoes pressing inside a drum.', simple: 'A disc brake operated by air.', example: 'The coordinator confirms disc vs drum before ordering brake parts.', related: ['Air brakes', 'Slack adjuster'] },
  { term: 'Bridge formula', full: 'Federal Bridge Gross Weight Formula', cat: 'Regulatory', def: 'A federal formula that limits the weight on groups of axles based on the number of axles and the distance between them, protecting bridges.', simple: 'Weight allowed depends on how spread out the axles are.', example: 'Sliding a trailer\'s tandem changes axle spacing, which can matter for bridge-formula compliance.', related: ['DOT'] },
  { term: 'Oversize load', full: 'Oversize / overweight load', cat: 'Cargo', def: 'A load that exceeds legal size or weight limits and needs state permits, which can set routes, travel times, signs, flags and escort requirements.', simple: 'A load too big for normal rules.', example: 'A breakdown that delays a permitted load past its allowed travel hours needs dispatch involved immediately.', related: ['RGN'] }
);

/* Glossary terms the platform pages lean on. */
GLOSSARY.push(
  { term: 'TRU', full: 'Transport refrigeration unit', cat: 'Equipment', def: 'A self-contained refrigeration and heating unit mounted on a trailer (usually the front wall) or a truck body, often powered by its own diesel engine, sometimes also by shore power.', simple: 'The "reefer unit" that keeps the box cold or warm.', example: 'Reefer unit PMs are scheduled by the TRU\'s engine hours, not trailer miles.', related: ['Reefer', 'Setpoint'] },
  { term: 'Setpoint', full: 'Setpoint (reefer)', cat: 'Equipment', def: 'The temperature a refrigeration unit is set to hold, taken from the shipper\'s load instructions.', simple: 'The target temperature.', example: 'A produce load at setpoint 34°F should not be changed to "cool faster".', related: ['TRU', 'Return air', 'Discharge air'] },
  { term: 'Return air', full: 'Return air temperature', cat: 'Equipment', def: 'The temperature of the air coming back from the cargo area into the refrigeration unit.', simple: 'Air coming back from the load.', example: 'Return air close to setpoint means the box is holding temperature.', related: ['Discharge air', 'Setpoint'] },
  { term: 'Discharge air', full: 'Discharge (supply) air temperature', cat: 'Equipment', def: 'The temperature of the air leaving the refrigeration unit after passing over the evaporator coil.', simple: 'Air the unit is blowing out.', example: 'Discharge air colder than return air while cooling is normal.', related: ['Return air', 'Defrost'] },
  { term: 'Defrost', full: 'Defrost cycle (reefer)', cat: 'Equipment', def: 'A cycle that warms the evaporator coil to melt ice that blocks airflow. Started on a timer, on demand by the controller, or manually.', simple: 'Melting ice off the cooling coil.', example: 'A unit that can\'t finish defrost may show a "defrost terminated by time" alarm.', related: ['TRU', 'Discharge air'] }
);

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
   ILLUSTRATIONS — line-art SVGs for equipment, tires, brakes and loads.
   ART[key]() returns { vb, svg }. All colors come from CSS classes (.art-*),
   so every drawing follows the light/dark theme. Vehicles face right and sit
   on a ground line at y = AG. Drawings are schematic, not to exact scale.
   =========================================================================== */
const AG = 100;
const aWheel = (cx, r = 9, cls = '') => `<g class="art-wheel ${cls}"><circle cx="${cx}" cy="${AG - r}" r="${r}"/><circle class="art-hub" cx="${cx}" cy="${AG - r}" r="${(r * 0.36).toFixed(1)}"/></g>`;
const aGround = (w) => `<line class="art-ground" x1="2" y1="${AG + 0.5}" x2="${w - 2}" y2="${AG + 0.5}"/>`;
const aLabel = (x, y, t, anchor = 'middle', cls = '') => `<text class="art-label ${cls}" x="${x}" y="${y}" text-anchor="${anchor}">${t}</text>`;

/* Tractor facing right; x0 = rear of frame. Returns svg + where a trailer's front sits. */
function artTractor(x0, o = {}) {
  const sl = !!o.sleeper; const cb = x0 + (sl ? 28 : 44); const roof = sl ? AG - 72 : AG - 62;
  const top = sl
    ? `M${cb} ${AG - 24} V${roof + 4} Q${cb} ${roof} ${cb + 4} ${roof} H${x0 + 54} L${x0 + 60} ${AG - 62} L${x0 + 65} ${AG - 46}`
    : `M${cb} ${AG - 24} V${roof + 3} Q${cb} ${roof} ${cb + 3} ${roof} H${x0 + 60} L${x0 + 65} ${AG - 46}`;
  const axles = o.axles || '6x4';
  const rear = axles === '4x2' ? [x0 + 21] : [x0 + 12, x0 + 31];
  const driven = (i) => (o.showDrive && (axles !== '6x2' || i === 1) ? 'is-driven' : '');
  let s = `<rect class="art-frame" x="${x0 - (o.frameBack || 0)}" y="${AG - 26}" width="${74 + (o.frameBack || 0)}" height="4" rx="1"/>`;
  if (o.fifth !== false) s += `<rect class="art-dark" x="${x0 + 10}" y="${AG - 30}" width="20" height="4" rx="1.5"/>`;
  s += `<path class="art-body" d="${top} L${x0 + 73} ${AG - 44} Q${x0 + 77} ${AG - 43} ${x0 + 77} ${AG - 38} V${AG - 24} Z"/>`;
  s += `<path class="art-glass" d="M${x0 + 53} ${AG - 59} H${x0 + 60} L${x0 + 63} ${AG - 48} H${x0 + 53} Z"/>`;
  s += `<path class="art-seam" d="M${x0 + 51} ${AG - 60} V${AG - 26} M${x0 + 67} ${AG - 40} H${x0 + 76}"/>`;
  if (sl) s += `<rect class="art-glass" x="${x0 + 33}" y="${AG - 54}" width="9" height="5" rx="1"/>`;
  s += `<rect class="art-steel" x="${x0 + 40}" y="${AG - 23}" width="13" height="10" rx="4"/>`;
  s += `<rect class="art-dark" x="${x0 + 75}" y="${AG - 31}" width="4" height="9" rx="1"/><rect class="art-hi" x="${x0 + 73.5}" y="${AG - 41}" width="3" height="3" rx="1"/>`;
  if (!o.noRear) s += rear.map((x, i) => aWheel(x, 9, driven(i))).join('');
  s += aWheel(x0 + 64, 9, o.showDrive ? 'is-steer' : '');
  return { svg: s, hitch: sl ? x0 + 26 : x0 + 42 };
}

/* Trailer undercarriage: tandem, landing gear, rear guard, kingpin. */
function artTrailerUnder(left, front, deckY, o = {}) {
  const r = o.r || 9; const t = o.tandem || [left + 14, left + 33];
  let s = `<rect class="art-dark" x="${t[0] - 8}" y="${deckY}" width="${t[t.length - 1] - t[0] + 16}" height="${Math.max(3, AG - 2 * r - deckY - 1)}" rx="1"/>`;
  s += t.map((x) => aWheel(x, r)).join('');
  if (o.guard !== false) s += `<path class="art-line" d="M${left + 4} ${deckY} V${AG - 20}"/><rect class="art-dark" x="${left + 1}" y="${AG - 21}" width="9" height="3" rx="1"/>`;
  const lg = front - 34; const fy = o.frontY || deckY;
  if (o.gear !== false) s += o.coupled
    ? `<path class="art-line" d="M${lg} ${fy} V${fy + 12}"/><rect class="art-dark" x="${lg - 3}" y="${fy + 12}" width="6" height="2" rx="1"/>`
    : `<path class="art-line" d="M${lg} ${fy} V${AG - 3}"/><rect class="art-dark" x="${lg - 4}" y="${AG - 3}" width="8" height="3" rx="1"/>`;
  if (!o.coupled && o.kingpin !== false) s += `<rect class="art-dark" x="${front - 9}" y="${fy}" width="3" height="4"/>`;
  return s;
}

function artVanBox(left, front, o = {}) {
  const topY = AG - 74; const h = 43;
  let s = `<rect class="art-frame" x="${left}" y="${AG - 31}" width="${front - left}" height="3"/>`;
  s += `<rect class="art-body ${o.cls || ''}" x="${left}" y="${topY}" width="${front - left}" height="${h}" rx="2"/>`;
  if (!o.cut) { let posts = ''; for (let x = left + 16; x < front - 6; x += 16) posts += `M${x} ${topY + 2} V${topY + h - 2}`; s += `<path class="art-seam" d="${posts}"/>`; }
  s += `<path class="art-seam art-seam--strong" d="M${left + 3} ${topY + 1} V${topY + h - 1}"/>`;
  return s;
}

function trailerVan(left, front, o = {}) {
  let s = artVanBox(left, front, o);
  if (o.reefer) {
    s += `<rect class="art-steel" x="${front}" y="${AG - 72}" width="11" height="26" rx="2"/><path class="art-seam" d="M${front + 3} ${AG - 67} H${front + 9} M${front + 3} ${AG - 63} H${front + 9} M${front + 3} ${AG - 59} H${front + 9} M${front + 3} ${AG - 55} H${front + 9}"/>`;
    s += `<rect class="art-steel" x="${front - 72}" y="${AG - 28}" width="18" height="8" rx="3"/>`;
    const cx = left + 26, cy = AG - 52; s += `<path class="art-snow" d="M${cx} ${cy - 7} V${cy + 7} M${cx - 6} ${cy - 3.5} L${cx + 6} ${cy + 3.5} M${cx - 6} ${cy + 3.5} L${cx + 6} ${cy - 3.5}"/>`;
  }
  return s + artTrailerUnder(left, front, AG - 28, o);
}

function cargoBlocks(list) {
  return list.map(([x, y, w, h, c]) => `<rect class="art-cargo ${c || 'c4'}" x="${x}" y="${y}" width="${w}" height="${h}" rx="1.5"/>`).join('');
}
function straps(xs, y1, y2) { return `<path class="art-strap" d="${xs.map((x) => `M${x} ${y1} V${y2}`).join(' ')}"/>`; }
const heightLine = (w) => `<line class="art-limit" x1="6" y1="${AG - 76}" x2="${w - 6}" y2="${AG - 76}"/>${aLabel(w - 8, AG - 79, 'height limit', 'end', 'art-label--limit')}`;

const ART = {
  /* ---- Power units ---- */
  daycab: () => ({ vb: '24 22 98 82', svg: aGround(150) + artTractor(34).svg }),
  sleeper: () => ({ vb: '24 22 98 82', svg: aGround(150) + artTractor(34, { sleeper: true }).svg }),
  'axle-4x2': () => ({ vb: '24 22 98 82', svg: aGround(150) + artTractor(34, { axles: '4x2', showDrive: true }).svg }),
  'axle-6x4': () => ({ vb: '24 22 98 82', svg: aGround(150) + artTractor(34, { axles: '6x4', showDrive: true }).svg }),
  'axle-6x2': () => ({ vb: '24 22 98 82', svg: aGround(150) + artTractor(34, { axles: '6x2', showDrive: true }).svg }),
  straight: () => {
    const t = artTractor(110, { fifth: false, noRear: true, frameBack: 96 });
    return { vb: '8 24 184 80', svg: aGround(200) + t.svg + `<rect class="art-body" x="16" y="${AG - 70}" width="134" height="42" rx="2"/><path class="art-seam" d="M34 ${AG - 68} V${AG - 30} M52 ${AG - 68} V${AG - 30} M70 ${AG - 68} V${AG - 30} M88 ${AG - 68} V${AG - 30} M106 ${AG - 68} V${AG - 30} M124 ${AG - 68} V${AG - 30}"/><path class="art-seam art-seam--strong" d="M19 ${AG - 69} V${AG - 29}"/>` + aWheel(52) + `<rect class="art-dark" x="16" y="${AG - 22}" width="8" height="3" rx="1"/>` };
  },
  yard: () => ({ vb: '26 26 94 78', svg: aGround(150) +
    `<rect class="art-frame" x="36" y="${AG - 24}" width="72" height="5" rx="1"/><path class="art-dark" d="M40 ${AG - 28} L62 ${AG - 34} L66 ${AG - 28} Z"/><rect class="art-dark" x="44" y="${AG - 34}" width="18" height="4" rx="1.5"/>` +
    `<path class="art-body" d="M72 ${AG - 22} V${AG - 66} Q72 ${AG - 68} 74 ${AG - 68} H92 Q94 ${AG - 68} 94 ${AG - 66} V${AG - 22} Z"/><rect class="art-glass" x="76" y="${AG - 64}" width="15" height="18" rx="1.5"/>` +
    `<path class="art-body" d="M94 ${AG - 40} H106 Q109 ${AG - 40} 109 ${AG - 37} V${AG - 22} H94 Z"/>` + aWheel(52, 10) + aWheel(100, 8) }),

  /* ---- Trailers (parked, landing gear down) ---- */
  dryvan: () => ({ vb: '0 12 240 94', svg: aGround(240) + trailerVan(16, 222) }),
  reefer: () => ({ vb: '0 12 240 94', svg: aGround(240) + trailerVan(14, 212, { reefer: true, cls: 'art-body--insul' }) + aLabel(228, AG - 76, 'reefer unit', 'end') }),
  flatbed: () => ({ vb: '0 12 240 94', svg: aGround(240) + heightLine(240) +
    `<rect class="art-steel" x="16" y="${AG - 36}" width="206" height="6" rx="1"/>` + cargoBlocks([[22, AG - 58, 56, 22], [84, AG - 58, 56, 22], [146, AG - 58, 64, 22]]) +
    straps([34, 66, 96, 128, 160, 196], AG - 58, AG - 36) + artTrailerUnder(16, 222, AG - 30) }),
  stepdeck: () => ({ vb: '0 12 240 94', svg: aGround(240) + heightLine(240) +
    `<path class="art-steel" d="M16 ${AG - 28} H176 V${AG - 40} H222 V${AG - 34} H182 V${AG - 22} H16 Z"/>` +
    cargoBlocks([[34, AG - 70, 70, 42, 'c2'], [112, AG - 58, 54, 30, 'c4']]) + straps([46, 92], AG - 70, AG - 28) + straps([124, 154], AG - 58, AG - 28) +
    artTrailerUnder(16, 222, AG - 22, { r: 7, tandem: [30, 46], frontY: AG - 34 }) + aLabel(200, AG - 44, 'upper deck') + aLabel(100, AG - 14, 'lower deck') }),
  rgn: () => ({ vb: '0 12 240 94', svg: aGround(240) + heightLine(240) +
    `<path class="art-steel" d="M16 ${AG - 30} H60 L70 ${AG - 16} H176 L184 ${AG - 36} H222 V${AG - 30} H188 L180 ${AG - 12} H68 L58 ${AG - 24} H16 Z"/>` +
    `<line class="art-break" x1="186" y1="${AG - 44}" x2="186" y2="${AG - 6}"/>` +
    `<rect class="art-dark" x="78" y="${AG - 26}" width="84" height="10" rx="5"/><rect class="art-cargo c4" x="96" y="${AG - 54}" width="40" height="28" rx="2"/><rect class="art-glass" x="118" y="${AG - 51}" width="14" height="12" rx="1"/>` +
    `<path class="art-cargo-line" d="M100 ${AG - 46} L78 ${AG - 66} L66 ${AG - 40}"/><path class="art-cargo c4" d="M62 ${AG - 42} h10 l-3 12 h-9 Z"/>` +
    aWheel(24, 7) + aWheel(40, 7) + aWheel(54, 7) + `<rect class="art-dark" x="16" y="${AG - 24}" width="46" height="4" rx="1"/>` +
    aLabel(204, AG - 42, 'gooseneck') + aLabel(206, AG - 10, 'detaches ↔') + aLabel(128, AG - 4, 'low well') }),
  tanker: (o = {}) => ({ vb: '0 12 240 94', svg: aGround(240) +
    `<rect class="art-steel" x="40" y="${AG - 34}" width="170" height="4" rx="1"/><rect class="art-body art-body--tank" x="14" y="${AG - 70}" width="204" height="38" rx="19"/>` +
    `<path class="art-seam" d="M62 ${AG - 69} V${AG - 33} M112 ${AG - 69} V${AG - 33} M162 ${AG - 69} V${AG - 33}"/><rect class="art-dark" x="36" y="${AG - 73}" width="164" height="2" rx="1"/>` +
    `<rect class="art-dark" x="80" y="${AG - 76}" width="10" height="4" rx="1"/><rect class="art-dark" x="132" y="${AG - 76}" width="10" height="4" rx="1"/>` +
    `<path class="art-line" d="M88 ${AG - 32} V${AG - 24} M136 ${AG - 32} V${AG - 24}"/><rect class="art-dark" x="84" y="${AG - 24}" width="8" height="3"/><rect class="art-dark" x="132" y="${AG - 24}" width="8" height="3"/>` +
    (o.hazmat ? `<g class="art-placard"><rect x="-7" y="-7" width="14" height="14" transform="translate(40 ${AG - 51}) rotate(45)"/><text x="40" y="${AG - 48}" text-anchor="middle">3</text></g>` : '') +
    artTrailerUnder(14, 218, AG - 30, { guard: true }) }),
  hazmat: () => ART.tanker({ hazmat: true }),
  intermodal: () => ({ vb: '0 12 240 94', svg: aGround(240) +
    `<path class="art-steel" d="M16 ${AG - 30} H214 V${AG - 34} H222 V${AG - 26} H16 Z"/>` +
    `<rect class="art-cargo c2" x="18" y="${AG - 74}" width="200" height="40" rx="1"/><path class="art-rib" d="${Array.from({ length: 24 }, (_, i) => `M${26 + i * 8} ${AG - 72} V${AG - 36}`).join(' ')}"/>` +
    `<path class="art-dark" d="M18 ${AG - 74} h6 v5 h-6 Z M212 ${AG - 74} h6 v5 h-6 Z M18 ${AG - 39} h6 v5 h-6 Z M212 ${AG - 39} h6 v5 h-6 Z"/>` +
    artTrailerUnder(16, 222, AG - 26) + aLabel(118, AG - 78, 'container locks onto the chassis at the corners') }),
  doubles: () => {
    const t = artTractor(214, { fifth: true });
    const pup = (l, f) => artVanBox(l, f) + artTrailerUnder(l, f, AG - 28, { tandem: [l + 16], coupled: true, gear: true });
    return { vb: '0 14 300 92', svg: aGround(300) + `<path class="art-line" d="M117 ${AG - 12} H136"/><rect class="art-dark" x="108" y="${AG - 26}" width="18" height="4" rx="1.5"/>` + aWheel(117) + pup(10, 126) + pup(136, 254) + t.svg + aLabel(117, AG - 78, 'converter dolly') };
  },
  rig: () => {
    const t = artTractor(210, { sleeper: true });
    return { vb: '0 14 300 92', svg: aGround(300) + artVanBox(16, 236) + artTrailerUnder(16, 236, AG - 28, { coupled: true }) + t.svg };
  },

  /* ---- Loads (van cutaways and docks) ---- */
  ftl: () => loadArt(Array.from({ length: 13 }, () => [34, 'c2'])),
  ltl: () => loadArt([[30, 'c1'], [22, 'c4'], [34, 'c4'], [18, 'c6'], [26, 'c2'], [26, 'c2'], [14, 'c5'], [30, 'c1'], [20, 'c6'], null, null, null, null]),
  partial: () => loadArt([[32, 'c1'], [32, 'c1'], [32, 'c1'], [32, 'c1'], [32, 'c1'], [32, 'c1'], null, null, null, null, null, null, null], true),
  live: () => dockArt(true),
  drop: () => dockArt(false),
  oversize: () => ({ vb: '0 8 240 98', svg: aGround(240) +
    `<rect class="art-steel" x="16" y="${AG - 36}" width="206" height="6" rx="1"/>` +
    `<path class="art-cargo c5" d="M36 ${AG - 36} V${AG - 82} Q36 ${AG - 86} 40 ${AG - 86} H156 Q160 ${AG - 86} 160 ${AG - 82} V${AG - 36} Z"/><path class="art-seam" d="M66 ${AG - 84} V${AG - 38} M98 ${AG - 84} V${AG - 38} M130 ${AG - 84} V${AG - 38}"/>` +
    straps([52, 114, 146], AG - 86, AG - 36) + `<path class="art-flag" d="M36 ${AG - 86} l-8 -2 v6 Z M160 ${AG - 86} l8 -2 v6 Z"/>` + heightLine(240) +
    `<rect class="art-banner" x="10" y="${AG - 26}" width="46" height="8" rx="1"/>` + aLabel(33, AG - 20, 'OVERSIZE LOAD', 'middle', 'art-label--banner') + artTrailerUnder(16, 222, AG - 30, { guard: false }) }),

  /* ---- Tires ---- */
  'tread-steer': () => treadArt('rib'),
  'tread-drive': () => treadArt('lug'),
  'tread-trailer': () => treadArt('trailer'),
  duals: () => ({ vb: '0 0 150 112', svg: `<rect class="art-dark" x="4" y="44" width="142" height="6" rx="2"/>` + tireFront(33, 30) + tireFront(67, 30) + aLabel(64, 104, 'two tires per wheel end') }),
  widebase: () => ({ vb: '0 0 150 112', svg: `<rect class="art-dark" x="4" y="44" width="142" height="6" rx="2"/>` + tireFront(36, 58) + aLabel(64, 104, 'one wide tire per wheel end') }),
  radial: () => plyArt(true),
  bias: () => plyArt(false),
  'tire-section': () => ({ vb: '0 0 200 140', svg:
    `<path class="art-rim" d="M36 118 H58 V124 H142 V118 H164 V132 Q164 134 162 134 H38 Q36 134 36 132 Z"/>` +
    `<path class="art-rubber" d="M46 120 C30 96 26 58 46 36 Q100 18 154 36 C174 58 170 96 154 120 L144 120 C158 96 158 64 144 48 Q100 34 56 48 C42 64 42 96 56 120 Z"/>` +
    `<path class="art-liner" d="M56 118 C42 96 42 64 56 48 Q100 34 144 48 C158 64 158 96 144 118"/>` +
    `<path class="art-belt" d="M58 42 Q100 29 142 42 M60 46 Q100 33 140 46"/>` +
    `<path class="art-groove" d="M72 30 v5 M90 27.5 v5 M110 27.5 v5 M128 30 v5"/>` +
    `<circle class="art-bead" cx="51" cy="116" r="4"/><circle class="art-bead" cx="149" cy="116" r="4"/>` }),

  /* ---- Brakes ---- */
  drum: () => ({ vb: '0 0 170 120', svg:
    `<circle class="art-steel" cx="70" cy="60" r="46"/><circle class="art-inner" cx="70" cy="60" r="39"/>` +
    `<path class="art-lining" d="M42 36 A35 35 0 0 0 42 84 M98 36 A35 35 0 0 1 98 84"/><path class="art-shoe" d="M46 38 A31 31 0 0 0 46 82 M94 38 A31 31 0 0 1 94 82"/>` +
    `<circle class="art-dark" cx="70" cy="93" r="4"/><circle class="art-accent" cx="70" cy="28" r="6"/><path class="art-s" d="M73 25 Q67 22 67 27 Q67 30 70 30 Q73 30 73 33 Q73 36 67 32"/>` +
    `<path class="art-arm" d="M70 28 L120 14"/><rect class="art-steel" x="126" y="4" width="36" height="22" rx="8"/><path class="art-line" d="M120 14 H126"/>` +
    aLabel(144, 38, 'chamber') + aLabel(70, 116, 'S-cam pushes shoes into drum') }),
  disc: () => ({ vb: '0 0 170 120', svg:
    `<circle class="art-steel" cx="70" cy="60" r="46"/><circle class="art-inner" cx="70" cy="60" r="18"/>` +
    `<path class="art-seam art-seam--strong" d="${Array.from({ length: 16 }, (_, i) => { const a = (i * Math.PI) / 8; return `M${(70 + 24 * Math.cos(a)).toFixed(1)} ${(60 + 24 * Math.sin(a)).toFixed(1)} L${(70 + 42 * Math.cos(a)).toFixed(1)} ${(60 + 42 * Math.sin(a)).toFixed(1)}`; }).join(' ')}"/>` +
    `<circle class="art-dark" cx="70" cy="60" r="5"/>` +
    `<path class="art-caliper" d="M96 20 Q118 24 124 44 V76 Q118 96 96 100 L92 88 Q108 80 110 60 Q108 40 92 32 Z"/>` +
    `<rect class="art-steel" x="128" y="46" width="34" height="28" rx="8"/><path class="art-line" d="M124 60 H128"/>` +
    aLabel(145, 86, 'chamber') + aLabel(70, 116, 'caliper squeezes pads on rotor') }),
  /* ---- Connectors ---- */
  sevenway: () => ({ vb: '0 0 160 120', svg:
    `<circle class="art-steel" cx="80" cy="60" r="50"/><circle class="art-inner" cx="80" cy="60" r="40"/><rect class="art-dark" x="76" y="8" width="8" height="10" rx="2"/>` +
    Array.from({ length: 6 }, (_, i) => { const a = ((-60 + i * 60) * Math.PI) / 180; return `<circle class="art-pin" cx="${(80 + 25 * Math.cos(a)).toFixed(1)}" cy="${(60 + 25 * Math.sin(a)).toFixed(1)}" r="6"/>`; }).join('') +
    `<circle class="art-pin" cx="80" cy="60" r="6"/>` + aLabel(80, 117, 'socket face: 6 outer contacts + center contact') })
};

function loadArt(slots, partial) {
  const left = 16, front = 222; const w = (front - left - 8) / 13; let s = aGround(240) + artVanBox(left, front, { cut: true, cls: 'art-body--cut' });
  slots.forEach((p, i) => {
    const x = left + 4 + i * w;
    if (!p) { if (partial) s += `<rect class="art-empty" x="${(x + 0.6).toFixed(1)}" y="${AG - 66}" width="${(w - 1.2).toFixed(1)}" height="34" rx="1"/>`; return; }
    s += `<rect class="art-pallet" x="${(x + 0.6).toFixed(1)}" y="${AG - 34}" width="${(w - 1.2).toFixed(1)}" height="2.5"/><rect class="art-cargo ${p[1]}" x="${(x + 0.6).toFixed(1)}" y="${AG - 34 - p[0]}" width="${(w - 1.2).toFixed(1)}" height="${p[0]}" rx="1"/>`;
  });
  return { vb: '0 12 240 94', svg: s + artTrailerUnder(left, front, AG - 28) };
}
function dockArt(live) {
  let s = aGround(240) + `<rect class="art-dock" x="0" y="${AG - 92}" width="22" height="92"/><rect class="art-dark" x="18" y="${AG - 32}" width="6" height="32"/><rect class="art-door" x="4" y="${AG - 76}" width="12" height="42"/>`;
  s += artVanBox(26, 160) + artTrailerUnder(26, 160, AG - 28, { coupled: live });
  if (live) {
    s += artTractor(118).svg;
    s += `<g class="art-clock"><circle cx="92" cy="12" r="9"/><path d="M92 6 V12 L97 15"/></g>` + aLabel(92, 32, 'driver waits');
  } else {
    s += `<g class="art-ghost">${artTractor(158).svg}</g>` + `<path class="art-arrow" d="M200 14 H228 M222 9 L228 14 L222 19"/>` + aLabel(214, 32, 'tractor leaves');
  }
  return { vb: '0 4 240 102', svg: s };
}
function tireFront(x, w) {
  let g = ''; const n = Math.max(2, Math.round(w / 12)); for (let i = 1; i < n; i++) { const gx = x + (i * w) / n; g += `M${gx.toFixed(1)} 9 V85`; }
  return `<rect class="art-tire" x="${x}" y="4" width="${w}" height="86" rx="${Math.min(12, w / 3)}"/><path class="art-groove-line" d="${g}"/>`;
}
function treadArt(kind) {
  const x = 38, w = 44; let s = `<rect class="art-tire" x="${x}" y="6" width="${w}" height="98" rx="12"/>`;
  if (kind === 'rib') {
    [49, 60, 71].forEach((gx) => { let d = `M${gx} 10`; for (let y = 16; y <= 100; y += 6) d += ` L${gx + ((y / 6) % 2 ? 1.6 : -1.6)} ${y}`; s += `<path class="art-groove-line" d="${d}"/>`; });
  } else if (kind === 'lug') {
    let d = ''; for (let y = 12; y < 100; y += 11) { d += `M${x} ${y} L${x + 17} ${y + 3} M${x + w} ${y + 5.5} L${x + w - 17} ${y + 8.5} `; }
    s += `<path class="art-lug" d="${d}"/><path class="art-groove-line" d="M60 10 V100"/>`;
  } else {
    s += `<path class="art-groove-line art-groove-line--thin" d="M49 10 V100 M60 10 V100 M71 10 V100"/>`;
  }
  return { vb: '0 0 120 112', svg: s + `<path class="art-arrow" d="M100 80 V30 M95 36 L100 30 L105 36"/>` + aLabel(100, 92, 'travel') };
}
function plyArt(radial) {
  let s = `<rect class="art-casing" x="14" y="16" width="132" height="70" rx="6"/>`;
  if (radial) {
    let d = ''; for (let x = 20; x <= 140; x += 6) d += `M${x} 18 V84 `; s += `<path class="art-ply" d="${d}"/>`;
    let b = ''; for (let x = 16; x <= 136; x += 6) b += `M${x} 24 L${x + 8} 38 `; s += `<rect class="art-beltband" x="14" y="22" width="132" height="18"/><path class="art-belt-thin" d="${b}"/>`;
  } else {
    const cid = nextId('ply'); let d = ''; for (let x = -60; x <= 150; x += 8) d += `M${x} 86 L${x + 48} 18 M${x + 48} 86 L${x} 18 `; s += `<clipPath id="${cid}"><rect x="14" y="16" width="132" height="70" rx="6"/></clipPath><path class="art-ply" clip-path="url(#${cid})" d="${d}"/>`;
  }
  return { vb: '0 0 160 112', svg: s + `<path class="art-arrow" d="M30 100 H130 M124 95 L130 100 L124 105"/>` + aLabel(80, 96, 'direction of travel') };
}
function artSVG(key, label) {
  const f = ART[key]; if (!f) return '';
  const a = f();
  return `<svg class="art" viewBox="${a.vb}" role="img" aria-label="${esc(label || key)}" focusable="false">${a.svg}</svg>`;
}

/* Reefer illustrations for the Thermo King page: a generic refrigeration
   cycle, a simplified trailer-unit cutaway and the airflow in a loaded box.
   Generic teaching drawings — not any specific manufacturer's model. */
function artFlowDefs() {
  const c = nextId('flc'); const h = nextId('flh');
  return { c, h, defs: `<defs><marker id="${c}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path class="art-flowhead--cold" d="M0 0 L10 5 L0 10 z"/></marker><marker id="${h}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path class="art-flowhead--hot" d="M0 0 L10 5 L0 10 z"/></marker></defs>` };
}
const artFins = (x, y, w, h, step = 4) => { let d = ''; for (let i = x + step; i < x + w - 1; i += step) d += `M${i} ${y + 1.5} V${y + h - 1.5}`; return `<path class="art-seam" d="${d}"/>`; };
const artFan = (cx, cy, r) => `<circle class="art-line" cx="${cx}" cy="${cy}" r="${r}"/><path class="art-line" d="M${cx} ${cy - r + 2} Q${cx + r * 0.5} ${cy} ${cx} ${cy} Q${cx - r * 0.5} ${cy} ${cx} ${cy + r - 2} M${cx - r + 2} ${cy} Q${cx} ${cy - r * 0.5} ${cx} ${cy} Q${cx} ${cy + r * 0.5} ${cx + r - 2} ${cy}"/>`;

Object.assign(ART, {
  refcycle: () => {
    const f = artFlowDefs();
    let s = f.defs;
    s += `<line class="art-ground" x1="120" y1="4" x2="120" y2="126"/>`;
    s += aLabel(91, 66, 'INSIDE THE BOX', 'middle', 'art-label--sm') + aLabel(150, 66, 'OUTSIDE AIR', 'middle', 'art-label--sm');
    // pipes: hot high-pressure (compressor → condenser → expansion), cold low-pressure (expansion → evaporator → compressor)
    s += `<path class="art-flow art-flow--hot" d="M180 90 L180 65 L180 41" marker-mid="url(#${f.h})"/>`;
    s += `<path class="art-flow art-flow--hot" d="M150 27 L112 27 L76 27" marker-mid="url(#${f.h})"/>`;
    s += `<path class="art-flow art-flow--cold" d="M60 38 L60 64 L60 89" marker-mid="url(#${f.c})"/>`;
    s += `<path class="art-flow art-flow--cold" d="M91 103 L129 103 L166 103" marker-mid="url(#${f.c})"/>`;
    // components
    s += `<rect class="art-steel" x="150" y="14" width="60" height="26" rx="2"/>${artFins(150, 14, 60, 26)}`;
    s += `<rect class="art-steel" x="46" y="17" width="28" height="20" rx="2"/><path class="art-line" d="M52 21 L68 33 V21 L52 33 Z"/>`;
    s += `<rect class="art-steel" x="30" y="90" width="60" height="26" rx="2"/>${artFins(30, 90, 60, 26)}`;
    s += `<circle class="art-steel" cx="180" cy="103" r="13"/><circle class="art-line" cx="180" cy="103" r="6"/>`;
    // heat exchange with the air
    s += `<path class="art-flow art-flow--hot" d="M213 27 L224 27 L235 27" marker-mid="url(#${f.h})"/>` + aLabel(224, 50, 'heat out', 'middle', 'art-label--sm');
    s += `<path class="art-flow art-flow--hot" d="M4 103 L15 103 L26 103" marker-mid="url(#${f.h})"/>` + aLabel(16, 86, 'heat in', 'middle', 'art-label--sm');
    s += aLabel(180, 10, 'Condenser') + aLabel(60, 12, 'Expansion device') + aLabel(60, 126, 'Evaporator') + aLabel(180, 126, 'Compressor');
    s += aLabel(186, 70, 'hot, high pressure', 'start', 'art-label--sm art-label--hot') + aLabel(54, 70, 'cold, low pressure', 'end', 'art-label--sm art-label--cold');
    return { vb: '0 0 240 130', svg: s };
  },
  tru: () => {
    const f = artFlowDefs();
    let s = f.defs;
    s += `<path class="art-body art-body--insul" d="M8 14 H130 V118 H8"/><rect class="art-frame" x="8" y="118" width="122" height="3"/>`;
    s += `<rect class="art-steel" x="62" y="120" width="26" height="10" rx="3"/>`;
    s += `<rect class="art-steel" x="130" y="16" width="58" height="76" rx="4"/>`;
    s += `<rect class="art-body" x="140" y="21" width="40" height="24" rx="1"/>${artFins(140, 21, 40, 24)}${artFan(160, 33, 9)}`;
    s += `<rect class="art-dark" x="135" y="58" width="28" height="22" rx="2"/><path class="art-rib" d="M139 63 H159 M139 68 H159 M139 73 H159"/>`;
    s += `<rect class="art-body" x="167" y="60" width="15" height="20" rx="6"/>`;
    s += `<circle class="art-line" cx="149" cy="51" r="3.2"/><circle class="art-line" cx="174" cy="51" r="3.2"/><path class="art-line art-line--thin" d="M149 47.8 H174 M149 54.2 H174"/>`;
    s += `<rect class="art-steel" x="138" y="83" width="5" height="7" rx="1"/><rect class="art-steel" x="145" y="83" width="5" height="7" rx="1"/>`;
    s += `<rect class="art-glass" x="166" y="83" width="19" height="7" rx="1"/>`;
    s += `<rect class="art-steel" x="96" y="18" width="34" height="42" rx="2"/><rect class="art-body" x="100" y="22" width="26" height="16" rx="1"/>${artFins(100, 22, 26, 16, 3.5)}${artFan(113, 50, 7)}`;
    s += `<path class="art-flow art-flow--cold" d="M95 24 L68 24 L30 24" marker-mid="url(#${f.c})"/>` + aLabel(62, 36, 'discharge air', 'middle', 'art-label--sm art-label--cold');
    s += `<path class="art-flow art-flow--hot" d="M22 108 L60 108 L88 108 Q99 108 99 66" marker-mid="url(#${f.h})"/>` + aLabel(52, 102, 'return air', 'middle', 'art-label--sm art-label--hot');
    s += `<circle class="art-hi" cx="99" cy="21" r="2.4"/><circle class="art-hi" cx="99" cy="57" r="2.4"/>`;
    s += aLabel(40, 70, 'trailer box', 'middle', 'art-label--sm') + aLabel(159, 102, 'refrigeration unit', 'middle', 'art-label--sm');
    return { vb: '0 8 200 126', svg: s };
  },
  reeferflow: () => {
    const f = artFlowDefs();
    let s = aGround(240) + trailerVan(14, 212, { reefer: true, cls: 'art-body--insul' }) + f.defs;
    s += cargoBlocks([[30, 38, 27, 24, 'c1'], [60, 38, 27, 24, 'c2'], [90, 38, 27, 24, 'c1'], [120, 38, 27, 24, 'c2'], [150, 38, 27, 24, 'c1'], [180, 38, 18, 24, 'c2']]);
    s += `<path class="art-flow art-flow--cold" d="M210 31 L150 31 L90 31 L24 31" marker-mid="url(#${f.c})"/>`;
    s += `<path class="art-flow art-flow--cold" d="M21 33 L21 48 L21 63" marker-mid="url(#${f.c})"/>`;
    s += `<path class="art-flow art-flow--hot" d="M24 65.5 L80 65.5 L140 65.5 L196 65.5 Q206 65.5 206 50" marker-mid="url(#${f.h})"/>`;
    return { vb: '0 12 240 94', svg: s };
  }
});

/* ===========================================================================
   INFOGRAPHICS — { ig: '<type>', title, ... } blocks.
   Types: stats, bars, donut, process, hub, matrix, scale, gantt, pipeline,
   card, annotated, stackcompare, fishbone, pyramid, ladder, formulas, cycle,
   waterfall, heatmap, ratings, table, versus, anatomy, decode, axles, tread.
   versus / anatomy / axles use the line-art library in ART (05a-art.js).
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

    case 'versus':
      inner = `<div class="ig-vs" style="--min:${b.items.length === 3 ? 170 : 230}px">${b.items.map((it, i) => `<article class="ig-vs__item ${toneCls(it.tone)}" style="--i:${i}">
        ${it.art ? `<div class="ig-vs__art">${artSVG(it.art, it.t)}</div>` : ''}
        <div class="ig-vs__body"><${hx()} class="ig-vs__t">${esc(it.t)}</${hx()}>${it.sub ? `<p class="ig-vs__sub">${inline(it.sub)}</p>` : ''}
        ${it.facts ? `<dl class="ig-vs__facts">${it.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${inline(v)}</dd></div>`).join('')}</dl>` : ''}
        ${it.use ? `<p class="ig-vs__use">${icon('check', 'icon--sm')}<span><strong>Used for:</strong> ${inline(it.use)}</span></p>` : ''}
        ${it.watch ? `<p class="ig-vs__watch">${icon('wrench', 'icon--sm')}<span><strong>Maintenance focus:</strong> ${inline(it.watch)}</span></p>` : ''}</div></article>`).join('')}</div>
        ${b.key ? `<div class="ig-vs__key">${icon('target', 'icon--sm')}<span><strong>Key difference:</strong> ${inline(b.key)}</span></div>` : ''}`;
      break;
    case 'anatomy':
      inner = `<div class="ig-anat"><div class="ig-anat__fig"><div class="ig-anat__canvas" style="max-width:${b.w || 560}px">${artSVG(b.art, b.title)}${b.pins.map((p, i) => `<span class="ig-anat__pin" style="left:${p.x}%;top:${p.y}%;--i:${i}" aria-hidden="true">${i + 1}</span>`).join('')}</div></div>
        <ol class="ig-anno__notes ig-anat__notes">${b.pins.map((p, i) => `<li style="--i:${i}"><span class="ig-anno__mk">${i + 1}</span><div><strong>${esc(p.t)}</strong><p>${inline(p.d)}</p></div></li>`).join('')}</ol></div>`;
      break;
    case 'decode':
      inner = `<div class="ig-decode"><div class="ig-decode__code">${b.parts.map((p, i) => (p[1] ? `<span class="ig-decode__seg" style="--c:var(--ig-${(i % 6) + 1});--i:${i}"><b>${esc(p[0])}</b><i>${b.parts.slice(0, i + 1).filter((x) => x[1]).length}</i></span>` : `<span class="ig-decode__sep">${esc(p[0])}</span>`)).join('')}</div>
        <ol class="ig-decode__legend">${b.parts.filter((p) => p[1]).map((p, i) => `<li style="--i:${i}"><span class="ig-decode__n" style="--c:var(--ig-${(b.parts.indexOf(p) % 6) + 1})">${i + 1}</span><div><strong><code>${esc(p[0])}</code> — ${esc(p[1])}</strong><p>${inline(p[2] || '')}</p></div></li>`).join('')}</ol></div>`;
      break;
    case 'axles': {
      const lim = b.limits;
      inner = `<div class="ig-axles"><div class="ig-axles__art"><div class="ig-anat__canvas">${artSVG(b.art || 'rig', 'Five-axle tractor-trailer')}${b.groups.map((g) => `<span class="ig-axles__tag" style="left:${g.x}%">${esc(g.t)}</span>`).join('')}</div></div>
        <div class="table-wrap"><table class="table ig-axles__table"><thead><tr><th scope="col">Scenario</th>${b.groups.map((g, gi) => `<th scope="col">${esc(g.t)}<small>limit ${fmtNum(lim[gi])} lb</small></th>`).join('')}<th scope="col">Gross<small>limit ${fmtNum(b.gross)} lb</small></th></tr></thead>
        <tbody>${b.rows.map((r) => { const tot = r.v.reduce((a2, x) => a2 + x, 0); const cellv = (v, max) => { const over = v > max; return `<td><span class="ig-axles__v num ${over ? 'is-over' : ''}">${fmtNum(v)}</span><span class="ig-axles__track"><span class="ig-axles__fill ${over ? 'tone-critical' : 'tone-success'}" style="--p:${Math.min(1, v / max).toFixed(3)}"></span></span>${over ? `<span class="badge badge--critical">+${fmtNum(v - max)} over</span>` : ''}</td>`; };
          return `<tr><th scope="row">${esc(r.l)}${r.d ? `<small>${esc(r.d)}</small>` : ''}</th>${r.v.map((v, vi) => cellv(v, lim[vi])).join('')}${cellv(tot, b.gross)}</tr>`; }).join('')}</tbody></table></div></div>`;
      break;
    }
    case 'tread': {
      const max = b.max || 20;
      inner = `<div class="ig-tread" style="--n:${b.items.length}">${b.items.map((t, i) => { const ok = t.v >= t.min; return `<div class="ig-tread__item ${ok ? 'tone-success' : 'tone-critical'}" style="--i:${i}">
        <div class="ig-tread__groove" role="img" aria-label="${esc(t.l)}: ${t.v}/32 inch, minimum ${t.min}/32"><span class="ig-tread__rubber" style="--p:${(t.v / max).toFixed(3)}"></span><span class="ig-tread__min" style="--p:${(t.min / max).toFixed(3)}"><em>min ${t.min}/32</em></span></div>
        <strong>${esc(t.l)}</strong><span class="num">${t.v}/32&Prime;</span><span class="badge ${ok ? 'badge--success' : 'badge--critical'}">${ok ? 'Meets minimum' : 'Below minimum'}</span></div>`; }).join('')}</div>`;
      break;
    }

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
    ['Equipment, tires & loads', [REF.enclosedTrailers, REF.openDeck, REF.treadMin, REF.tireCode, REF.weights, REF.securement]],
    ['Compliance, parts & diagnostics', [REF.dvir, REF.cvsa, REF.fmi, REF.pinout, REF.reorder]],
    ['Sources & scope', [REF.scope, REF.sources]]
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

/* Operations final — one brokered load from booking to payment (fictional companies). */
EXAMS.operations = {
  passing: 0.75,
  intro: 'Monday, 07:10. A brokered load is on your board. Follow it from the rate confirmation to a paid invoice: identify the parties, read the rate con, handle a mid-trip delay, gather the documents, build the invoice and fix a rejection. Each step is scored; 75% is required to pass.',
  caseFile: [['Load', 'NFB-452907'], ['Broker', 'Northgate Freight Brokerage (fictional)'], ['Lane', 'Memphis, TN → Charlotte, NC']],
  steps: [
    { label: 'Parties', title: 'Identify who is who',
      exercise: { type: 'classify', prompt: 'Match each company to its role on this load.', categories: ['Shipper', 'Broker', 'Carrier', 'Receiver'],
        items: [
          { text: 'Harbor Foods Co. — owns the freight and needs it moved', answer: 'Shipper', why: 'The shipper owns and tenders the freight.' },
          { text: 'Northgate Freight Brokerage — sent the rate confirmation', answer: 'Broker', why: 'Brokers arrange the move and confirm the rate with the carrier.' },
          { text: 'Crestline Freight Lines — hauls the load and sends the invoice', answer: 'Carrier', why: 'The carrier moves the freight and bills for it.' },
          { text: 'Peach State DC — signs the bill of lading at delivery', answer: 'Receiver', why: 'The receiver (consignee) signs the BOL, creating the proof of delivery.' }
        ] },
      reveal: [['Carrier', 'Crestline Freight Lines (fictional)'], ['Receiver', 'Peach State DC, Charlotte']] },
    { label: 'Rate con', title: 'Read the rate confirmation',
      exercise: { type: 'extract', sourceLabel: 'Rate confirmation',
        source: 'RATE CONFIRMATION — Northgate Freight Brokerage (fictional)\nLoad #: NFB-452907\nPickup: Memphis, TN · 06/16 06:00  |  Delivery: Charlotte, NC · 06/17 07:30 appointment\nEquipment: 53\' dry van · Miles: 623\nLinehaul: $2,150.00   Fuel surcharge: $310.00 flat\nDetention: $50/hr after 2 hours free, billed in 15-minute increments · in/out times required on BOL\nLumper: reimbursed with receipt\nPayment terms: Net 30 from receipt of invoice with signed POD',
        fields: [
          { label: 'Load number', accept: ['nfb-452907', 'nfb452907', '452907'] },
          { label: 'Linehaul ($)', accept: ['2150', '2,150', '2150.00', '2,150.00'] },
          { label: 'Detention rate ($/hr)', accept: ['50'] },
          { label: 'Free time before detention (hours)', accept: ['2'] }
        ] },
      reveal: [['Linehaul', '$2,150.00'], ['FSC', '$310.00'], ['Detention', '$50/hr after 2 h']] },
    { label: 'Delay', title: 'Handle a mid-trip delay',
      blocks: [{ msg: { kind: 'note', title: 'Situation', text: 'The driver started duty at 05:00 and has driven 5 hours. A charging-system fault stopped the tractor; the shop\'s ETR is 13:00. From the shop, the delivery is 7 hours of driving.' } }],
      exercise: { type: 'choose', prompt: 'What do you tell dispatch?', options: [
        { text: '"Truck will be fixed at 13:00, all good."', correct: false, why: 'Fixed isn\'t the same as able to deliver. Check the driver\'s hours.' },
        { text: '"ETR 13:00. At that point the driver has 6 hours of driving left and 6 hours in the 14-hour window (ends 19:00). The run is 7 hours, so today\'s run to Charlotte isn\'t possible with this driver; the broker needs an update on the 07:30 appointment."', correct: true, why: 'Numbers early let dispatch update the broker, protect the appointment or plan a relay.' },
        { text: '"Tell the driver to push the last hour so he makes it."', correct: false, why: 'Driving past the 11-hour limit or the 14-hour window is illegal. Never suggest breaking Hours of Service rules.' }
      ] },
      reveal: [['Delay', 'Tractor repair, ETR 13:00'], ['Broker update', 'Via dispatch, 11:20']] },
    { label: 'Documents', title: 'Gather the invoice documents',
      blocks: [{ msg: { kind: 'note', title: 'Delivery', text: 'Delivered 06/17. Arrived 07:30 on time · departed 12:15 (in/out times signed on the BOL). Lumper paid by driver: $210.00, receipt #L-9024. BOL signed by receiver, no exceptions.' } }],
      exercise: { type: 'multi', prompt: 'Which documents go with the invoice? Select all that apply.', options: [
        { text: 'Rate confirmation', correct: true, why: 'Shows the agreed rate and accessorial terms.' },
        { text: 'Signed BOL (proof of delivery)', correct: true, why: 'Payment terms start from receipt of the invoice with signed POD.' },
        { text: 'Lumper receipt #L-9024', correct: true, why: 'Lumper is reimbursed only with a receipt.' },
        { text: 'In/out times signed on the BOL', correct: true, why: 'The rate con requires them for detention.' },
        { text: 'The shop invoice for the tractor repair', correct: false, why: 'The carrier\'s own repair cost isn\'t billed to the broker.' },
        { text: 'The driver\'s fuel receipts', correct: false, why: 'Fuel is covered by linehaul and the fuel surcharge, not billed with receipts.' }
      ] },
      reveal: [['Documents', 'Rate con, signed BOL, lumper receipt']] },
    { label: 'Invoice', title: 'Build the invoice total',
      exercise: { type: 'choose', prompt: 'Arrived 07:30, departed 12:15; 2 hours free; $50/hr in 15-minute increments. What is the correct invoice total?', options: [
        { text: '$2,807.50 — linehaul $2,150 + FSC $310 + detention $137.50 (2.75 h) + lumper $210', correct: true, why: '4 h 45 min at the dock minus 2 h free = 2.75 billable hours × $50 = $137.50.' },
        { text: '$2,907.50 — detention for all 4.75 hours', correct: false, why: 'The first 2 hours are free time.' },
        { text: '$2,597.50 — lumper left off', correct: false, why: 'The lumper is reimbursable with the receipt.' },
        { text: '$2,460.00 — linehaul and FSC only', correct: false, why: 'Leaves out earned accessorials.' }
      ] },
      reveal: [['Invoice total', '$2,807.50'], ['Status', 'Submitted 06/17']] },
    { label: 'Rejection', title: 'Fix a rejected invoice',
      blocks: [{ msg: { kind: 'note', title: 'Broker AP reply', text: 'Invoice CFL-2207 rejected: detention not approved — in/out times not received.' } }],
      exercise: { type: 'choose', prompt: 'What is the best response?', options: [
        { text: 'Resubmit the same invoice without changes.', correct: false, why: 'The same packet will be rejected again.' },
        { text: 'Send the BOL page with the signed in/out times, reference invoice CFL-2207 and load NFB-452907, and ask AP to confirm the corrected packet is complete.', correct: true, why: 'Supplies the missing support and makes the resubmission easy to match.' },
        { text: 'Remove detention and never mention it again.', correct: false, why: 'The detention was earned and documented — supply the support instead of dropping it.' },
        { text: 'Tell the broker you\'ll stop hauling their loads.', correct: false, why: 'Unprofessional, and it doesn\'t fix the missing document.' }
      ] },
      reveal: [['Resubmitted', 'With signed in/out times'], ['Status', 'Approved for payment']] }
  ]
};

/* ===========================================================================
   VISUAL LIBRARY — #/library (browse) and #/library/:id (detail view)
   Photos are Wikimedia Commons thumbnails with attribution; diagrams come
   from the academy's own illustration set (ART).
   =========================================================================== */
function libPhotoImg(x, w, cls = '') {
  const p = LIB_PHOTOS[x.photo]; if (!p) return '';
  // Local copies (resized WebP) ship with the app so the library works offline.
  const src = w <= 500 ? p.localSm : p.local;
  return `<img class="${cls}" src="${esc(src)}" alt="${esc(x.alt || x.name)}" width="${p.w}" height="${p.h}" loading="lazy" decoding="async">`;
}
function libArt(x) {
  if (!x.art) return '';
  return `<div class="lib-art">${artSVG(x.art, x.alt || x.name)}${x.pin ? `<span class="lib-pin" style="left:${x.pin.x}%;top:${x.pin.y}%" aria-hidden="true"></span>` : ''}</div>`;
}
function libCredit(x) {
  const p = LIB_PHOTOS[x.photo]; if (!p) return '';
  const author = p.author && p.author !== 'Unknown author' ? esc(p.author) : 'see file page';
  return `<p class="lib-credit">Photo: ${author} · ${p.licenseUrl ? `<a href="${esc(p.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(p.license)}</a>` : esc(p.license)} · <a href="${esc(p.page)}" target="_blank" rel="noopener noreferrer">Wikimedia Commons<span class="sr-only"> (opens in a new tab)</span></a> · resized</p>`;
}
/* Thumbnail used on cards: photo if there is one, otherwise the illustration. */
function libThumb(x) {
  return x.photo ? libPhotoImg(x, 500, 'lib-thumb__img') : `<div class="lib-thumb__art">${libArt(x)}</div>`;
}
function libCard(x) {
  return `<a class="lib-card" href="#/library/${x.id}"><div class="lib-thumb">${libThumb(x)}${x.photo ? '' : '<span class="lib-badge">Illustration</span>'}</div>
    <div class="lib-card__body"><strong>${esc(x.name)}</strong><span>${esc(x.short)}</span></div></a>`;
}
function libItemsForLesson(key) { return LIBRARY.filter((x) => x.lessons.includes(key)); }
/* Strip shown in lessons: "See it in the Visual Library". */
function libLessonStrip(key) {
  const items = libItemsForLesson(key); if (!items.length) return '';
  return `<aside class="lib-strip" aria-label="Visual Library items for this lesson"><div class="lib-strip__head">${icon('search', 'icon--sm')}<span><strong>Study these visually</strong> — see what they look like in the Visual Library</span></div>
    <div class="lib-strip__row">${items.map((x) => `<a class="lib-chip" href="#/library/${x.id}"><span class="lib-chip__img">${libThumb(x)}</span><span>${esc(x.name)}</span></a>`).join('')}</div></aside>`;
}

function viewLibrary(id) {
  if (id) return viewLibraryItem(id);
  const counts = Object.fromEntries(LIB_CATS.map(([k]) => [k, LIBRARY.filter((x) => x.cat === k).length]));
  const html = `<div class="page lib-page">${pageHead({ eyebrow: `${icon('search', 'icon--sm')} Reference`, title: 'Vehicles & Parts Visual Library', text: `${LIBRARY.length} vehicles, trailers, equipment and parts from the academy — with real photos or labeled illustrations, what each one does, and the lessons where it comes up.` })}
    <div class="lib-tools">
      <div class="input-group lib-search"><label class="sr-only" for="libQ">Search the Visual Library</label>${icon('search')}<input class="input" id="libQ" type="search" placeholder="Search vehicles, trailers or parts…" autocomplete="off"></div>
      <div class="row row--wrap" role="group" aria-label="Filter by category"><button type="button" class="chip" data-libcat="all" aria-pressed="true">All <span class="muted">${LIBRARY.length}</span></button>${LIB_CATS.map(([k, t]) => `<button type="button" class="chip" data-libcat="${k}" aria-pressed="false">${esc(t)} <span class="muted">${counts[k]}</span></button>`).join('')}</div>
    </div>
    <p class="small muted mb-4" id="libCount" aria-live="polite"></p>
    <div id="libResults"></div>
    <p class="scope-note">${icon('info', 'icon--sm')}<span>Photos come from Wikimedia Commons under free licenses; each item credits its photographer. Makes and models differ — the photos show typical examples. Where no accurate free photo was available, the academy's labeled illustration is shown instead.</span></p></div>`;
  return {
    html, title: 'Visual Library', nav: 'library', crumbs: [['Visual Library']],
    after: (v) => {
      let cat = 'all';
      const q = $('#libQ', v); const out = $('#libResults', v);
      const section = (title, list) => (list.length ? `<section class="lib-section"><h2>${esc(title)}</h2><div class="lib-grid">${list.map(libCard).join('')}</div></section>` : '');
      const draw = () => {
        const s = q.value.trim().toLowerCase();
        const hit = (x) => !s || `${x.name} ${x.short} ${x.what} ${(x.terms || []).join(' ')} ${x.group || ''}`.toLowerCase().includes(s);
        const list = LIBRARY.filter((x) => (cat === 'all' || x.cat === cat) && hit(x));
        let html2 = '';
        LIB_CATS.forEach(([k, t]) => {
          if (k !== 'parts') { html2 += section(t, list.filter((x) => x.cat === k)); return; }
          LIB_GROUPS.forEach((g) => { html2 += section(`Parts · ${g}`, list.filter((x) => x.cat === 'parts' && x.group === g)); });
        });
        out.innerHTML = html2 || stateBlock({ ic: 'search', title: 'No matches', text: 'Try another word, such as "brake", "trailer" or "tire".' });
        $('#libCount', v).textContent = `${list.length} item${list.length === 1 ? '' : 's'}`;
      };
      q.addEventListener('input', draw);
      $$('[data-libcat]', v).forEach((b) => b.addEventListener('click', () => { cat = b.dataset.libcat; $$('[data-libcat]', v).forEach((c) => c.setAttribute('aria-pressed', c === b)); draw(); }));
      draw();
    }
  };
}

function viewLibraryItem(id) {
  const x = LIB_MAP.get(id);
  if (!x) return viewNotFound();
  const catName = (LIB_CATS.find(([k]) => k === x.cat) || [])[1];
  const lessons = x.lessons.map((k) => LESSON_MAP.get(k)).filter(Boolean);
  const related = (x.related || []).map((r) => LIB_MAP.get(r)).filter(Boolean);
  const visual = x.photo
    ? `<figure class="lib-figure">${libPhotoImg(x, 960, 'lib-photo')}<figcaption>${libCredit(x)}</figcaption></figure>${x.art ? `<figure class="lib-figure lib-figure--art"><span class="lib-label">${icon('layers', 'icon--sm')} Diagram</span>${libArt(x)}<figcaption class="lib-credit">Schematic illustration — simplified, not to scale.</figcaption></figure>` : ''}`
    : `<figure class="lib-figure lib-figure--art"><span class="lib-label">${icon('layers', 'icon--sm')} Illustration</span>${libArt(x)}<figcaption class="lib-credit">Schematic illustration — simplified, not to scale.${x.pin ? ' The orange marker shows where the part is.' : ''}</figcaption></figure>`;
  const html = `<div class="page lib-item">
    ${pageHead({ eyebrow: `${icon('search', 'icon--sm')} Visual Library · ${esc(catName)}${x.group ? ` · ${esc(x.group)}` : ''}`, title: esc(x.name), text: esc(x.short) })}
    <div class="lib-item__grid">
      <div class="lib-item__visual">${visual}</div>
      <div class="lib-item__text prose">
        <h2>What is it?</h2><p>${inline(x.what)}</p>
        <h2>What does it do?</h2><p>${inline(x.does)}</p>
        <h2>Where is it used?</h2><p>${inline(x.where)}</p>
        <div class="card lib-keys"><div class="card__head"><h2>${icon('check-circle')} Key things to know</h2></div><div class="card__body"><ul>${x.keys.map((k) => `<li>${inline(k)}</li>`).join('')}</ul></div></div>
      </div>
    </div>
    ${lessons.length ? `<section class="lib-section"><h2>Where the academy covers it</h2><div class="lib-lessons">${lessons.map((L) => `<a class="lib-lesson" href="${lessonHref(L)}">${icon('book')}<span><strong>${esc(L.l.title)}</strong><span class="small muted">${esc(L.t.level)} · Module ${L.m.id.slice(1)}: ${esc(L.m.title)}</span></span>${icon('chev-r', 'icon--sm')}</a>`).join('')}</div></section>` : ''}
    ${related.length ? `<section class="lib-section"><h2>Related items</h2><div class="lib-grid lib-grid--sm">${related.map(libCard).join('')}</div></section>` : ''}
    <div class="row row--between mt-8"><a class="btn" href="#/library">${icon('arrow-l')} All items</a></div>
  </div>`;
  return { html, title: x.name, nav: 'library', crumbs: [['Visual Library', '#/library'], [x.name]] };
}

/* Tapping a term that has a picture opens a quick visual card instead of jumping away. */
function openTermVisual(g, x) {
  openModal({
    title: esc(x.name), size: 'modal--lib',
    body: `<div class="lib-pop">${x.photo ? `<figure class="lib-figure">${libPhotoImg(x, 960, 'lib-photo')}<figcaption>${libCredit(x)}</figcaption></figure>` : `<figure class="lib-figure lib-figure--art">${libArt(x)}<figcaption class="lib-credit">Schematic illustration.${x.pin ? ' The orange marker shows where the part is.' : ''}</figcaption></figure>`}
      <p><strong>${esc(g ? g.full : x.name)}</strong> — ${esc(g ? g.simple : x.short)}</p><p class="small">${esc(x.does)}</p></div>`,
    foot: `${g ? `<a class="btn btn--ghost" href="#/glossary/${encodeURIComponent(g.term)}" data-close>${icon('book')} Glossary entry</a>` : ''}<a class="btn btn--primary" href="#/library/${x.id}" data-close>Study it in the Visual Library ${icon('arrow-r')}</a>`
  });
}

/* ===========================================================================
   CLOUD SYNC — optional Google sign-in (Supabase) that keeps progress in sync
   across devices. The academy stays fully usable signed out and offline:
   localStorage remains the working copy, and the cloud row is a mirror.
   Table: public.progress (user_id, state jsonb, updated_at) with row-level
   security so each user can only read and write their own row.
   =========================================================================== */
const CLOUD = {
  url: 'https://lqlewiyuhifvnodkpiul.supabase.co',
  key: 'sb_publishable_HOxayhHD0PfFFvm0nC45JQ_8JgHf56_', // publishable key — safe in the browser; RLS protects the data
  sdk: 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.2/dist/umd/supabase.js',
  // Subresource Integrity: the browser refuses the file if the CDN ever serves different bytes.
  // Changing the SDK version means updating this hash (openssl dgst -sha384 -binary file | openssl base64 -A).
  sdkIntegrity: 'sha384-Rj26LVGvoeRVR6+mwQmFfcR3QOBEwT+ZmuCWpuiqeTzJpCs0ER4ITAWGb4Hiy3Ok',
  client: null, user: null, status: 'off', timer: null, ready: false
};
const CLOUD_LOCAL_ONLY = ['theme', 'motion']; // per-device preferences that never sync

function cloudLoadSdk() {
  if (window.supabase) return Promise.resolve();
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = CLOUD.sdk; s.integrity = CLOUD.sdkIntegrity; s.async = true; s.crossOrigin = 'anonymous';
    s.onload = res; s.onerror = () => rej(new Error('Could not load the sign-in library'));
    document.head.appendChild(s);
  });
}

/* Merge two progress snapshots (a = this device, b = the cloud copy).
   - Scores keep the best result; things that are only ever added are unions.
   - Things that can also be removed or changed (bookmarks, completions,
     known flashcards, missed questions, the name) follow state.edits: when
     one copy has it and the other doesn't, the side that changed it last
     wins, so a removal on one device isn't undone by another.
   - A reset on one device wins over older copies that haven't seen it. */
function mergeProgress(a, b) {
  const fresh = () => JSON.parse(JSON.stringify(DEFAULT_STATE));
  const ra = a.resetAt || 0, rb = b.resetAt || 0;
  if (ra !== rb) return Object.assign(fresh(), JSON.parse(JSON.stringify(rb > ra ? b : a)), { theme: a.theme, motion: a.motion });
  const out = fresh();
  const union = (x, y) => Object.assign({}, y || {}, x || {});
  const ea = a.edits || {}, eb = b.edits || {};
  const keyed = (x, y, prefix, time = () => 0) => {
    x = x || {}; y = y || {};
    const r = union(x, y);
    new Set([...Object.keys(x), ...Object.keys(y)]).forEach((k) => {
      const tx = Math.max(ea[prefix + k] || 0, k in x ? time(x[k]) : 0);
      const ty = Math.max(eb[prefix + k] || 0, k in y ? time(y[k]) : 0);
      if (tx === ty) return; // no newer change on either side: keep the union
      const win = tx > ty ? x : y;
      if (k in win) r[k] = win[k]; else delete r[k];
    });
    return r;
  };
  const asSet = (arr) => Object.fromEntries((arr || []).map((k) => [k, 1]));
  const best = (x = {}, y = {}, field) => { const r = Object.assign({}, y, x); Object.keys(y).forEach((k) => { if (x[k] && y[k]) r[k] = (y[k][field] || 0) > (x[k][field] || 0) ? y[k] : x[k]; }); return r; };
  out.completed = keyed(a.completed, b.completed, 'done:', (v) => (typeof v === 'number' ? v : 0));
  out.checks = best(a.checks, b.checks, 'score');
  out.quizzes = best(a.quizzes, b.quizzes, 'best');
  out.finals = best(a.finals, b.finals, 'score');
  Object.keys(out.finals).forEach((k) => { if ((a.finals[k] || {}).passed || (b.finals[k] || {}).passed) out.finals[k] = Object.assign({}, out.finals[k], { passed: true }); });
  out.exercises = Object.assign({}, b.exercises, a.exercises); Object.keys(b.exercises || {}).forEach((k) => { out.exercises[k] = Math.max(a.exercises[k] || 0, b.exercises[k] || 0); });
  ['scen', 'trees', 'glossaryViewed', 'calcUsed', 'achievements', 'certIds'].forEach((k) => { out[k] = union(a[k], b[k]); });
  out.missed = keyed(a.missed, b.missed, 'mq:');
  out.flash = { known: keyed((a.flash || {}).known, (b.flash || {}).known, 'fk:') };
  const bm = keyed(asSet(a.bookmarks), asSet(b.bookmarks), 'bm:');
  out.bookmarks = [...new Set([...(a.bookmarks || []), ...(b.bookmarks || [])])].filter((k) => bm[k]);
  out.edits = union(a.edits, b.edits); Object.keys(eb).forEach((k) => { out.edits[k] = Math.max(ea[k] || 0, eb[k]); });
  out.days = [...new Set([...(a.days || []), ...(b.days || [])])].sort().slice(-120);
  out.last = a.last || b.last;
  out.name = (eb.name || 0) > (ea.name || 0) ? b.name || '' : (ea.name || 0) > (eb.name || 0) ? a.name || '' : a.name || b.name || '';
  // Profile details, picture and daily goal: the side that changed them last wins.
  ['profile', 'avatar', 'goal'].forEach((k) => {
    const pick = (eb[k] || 0) > (ea[k] || 0) ? b[k] : (ea[k] || 0) > (eb[k] || 0) ? a[k] : (a[k] !== undefined ? a[k] : b[k]);
    if (pick !== undefined) out[k] = JSON.parse(JSON.stringify(pick));
    // The Google photo link is filled in by whichever device saw it last.
    if (k === 'avatar' && out.avatar && !out.avatar.google) { const g = (a.avatar || {}).google || (b.avatar || {}).google; if (g) out.avatar.google = g; }
  });
  out.theme = a.theme;
  out.motion = a.motion;
  return out;
}
function cloudSnapshot() {
  const s = JSON.parse(JSON.stringify(state));
  CLOUD_LOCAL_ONLY.forEach((k) => delete s[k]);
  return s;
}
function cloudSetStatus(s) { CLOUD.status = s; const el = $('#cloudStatus'); if (el) el.innerHTML = cloudStatusHTML(); }
function cloudStatusHTML() {
  const map = { syncing: ['rotate', 'Syncing…'], synced: ['check-circle', 'Progress synced'], error: ['alert', 'Sync paused'], offline: ['info', 'Offline — will sync later'], off: ['info', 'Saved on this device'] };
  const [ic, t] = map[CLOUD.status] || map.off;
  return `${icon(ic, 'icon--sm')}<span>${t}</span>`;
}

async function cloudPush() {
  if (!CLOUD.user || !CLOUD.client) return;
  if (!navigator.onLine) { cloudSetStatus('offline'); return; }
  cloudSetStatus('syncing');
  const { error } = await CLOUD.client.from('progress').upsert({ user_id: CLOUD.user.id, state: cloudSnapshot(), updated_at: new Date().toISOString() });
  cloudSetStatus(error ? 'error' : 'synced');
  if (error) console.warn('Progress sync failed:', error.message);
}
/* Called by save(): batch rapid changes into one upload. */
function cloudQueue() {
  if (!CLOUD.user) return;
  clearTimeout(CLOUD.timer);
  CLOUD.timer = setTimeout(cloudPush, 1500);
}
async function cloudPull() {
  cloudSetStatus('syncing');
  const { data, error } = await CLOUD.client.from('progress').select('state').eq('user_id', CLOUD.user.id).maybeSingle();
  if (error) {
    cloudSetStatus('error');
    toast({ kind: 'warning', title: 'Cloud sync isn\'t available', text: 'You\'re signed in, but progress couldn\'t sync. It\'s still saved on this device.' });
    console.warn('Progress sync failed:', error.message);
    return;
  }
  if (data && data.state) {
    state = mergeProgress(state, Object.assign(JSON.parse(JSON.stringify(DEFAULT_STATE)), data.state));
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
    router();
  }
  await cloudPush();
}

/* Where emailed links (confirm sign-up, reset password, confirm new email) return to. */
const authReturn = () => location.origin + location.pathname;
function rememberReturn() { try { sessionStorage.setItem('mca.return', location.hash || '#/dashboard'); } catch (e) {} }

async function cloudSignIn() {
  try {
    await cloudInit();
    rememberReturn();
    const { error } = await CLOUD.client.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.origin + location.pathname } });
    if (error) throw error;
  } catch (e) {
    toast({ kind: 'warning', title: 'Sign-in unavailable', text: navigator.onLine ? 'Please try again in a moment.' : 'Connect to the internet to sign in.' });
  }
}
async function cloudSignOut() {
  if (!CLOUD.client) return;
  clearTimeout(CLOUD.timer);
  await cloudPush();
  await CLOUD.client.auth.signOut();
  toast({ kind: 'success', title: 'Signed out', text: 'Your progress stays on this device.' });
}

/* Deletes the signed-in user's account (and, by cascade, their synced
   progress) through the delete_my_account() database function. */
async function cloudDeleteAccount() {
  if (!CLOUD.user || !CLOUD.client) return false;
  clearTimeout(CLOUD.timer);
  await avatarRemoveFile().catch(() => {});
  const { error } = await CLOUD.client.rpc('delete_my_account');
  if (error) { console.warn('Account deletion failed:', error.message); return false; }
  await CLOUD.client.auth.signOut({ scope: 'local' }).catch(() => {});
  CLOUD.user = null; cloudSetStatus('off'); refreshChrome();
  return true;
}

async function cloudInit() {
  if (CLOUD.ready || !/^https?:$/.test(location.protocol)) return;
  await cloudLoadSdk();
  if (CLOUD.ready) return;
  CLOUD.client = window.supabase.createClient(CLOUD.url, CLOUD.key, { auth: { flowType: 'pkce', persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
  CLOUD.ready = true;
  CLOUD.client.auth.onAuthStateChange((event, session) => {
    const was = CLOUD.user && CLOUD.user.id;
    CLOUD.user = session ? session.user : null;
    // Opened the "reset password" email link: ask for the new password.
    if (event === 'PASSWORD_RECOVERY') setTimeout(openSetPassword, 0);
    if (event === 'USER_UPDATED' && /^#\/profile/.test(location.hash)) setTimeout(router, 0);
    if (CLOUD.user && CLOUD.user.id !== was) {
      if (!state.name && CLOUD.user.user_metadata && CLOUD.user.user_metadata.full_name) { state.name = CLOUD.user.user_metadata.full_name; setTimeout(router, 0); }
      rememberGooglePhoto();
      setTimeout(cloudPull, 0);
    }
    if (!CLOUD.user) cloudSetStatus('off');
    refreshChrome();
  });
  // Returning from Google: the SDK exchanges ?code=…; tidy the address bar afterwards.
  await CLOUD.client.auth.getSession();
  if (/[?&]code=/.test(location.search)) {
    let back = '#/dashboard'; try { back = sessionStorage.getItem('mca.return') || back; sessionStorage.removeItem('mca.return'); } catch (e) {}
    history.replaceState(null, '', location.pathname + back);
    router();
  }
}

/* Start quietly after the first paint; only a returning signed-in user (or
   someone coming back from Google) needs the SDK right away. */
function cloudHasSession() {
  try { return Object.keys(localStorage).some((k) => k.startsWith('sb-') && k.endsWith('-auth-token')); } catch (e) { return false; }
}
/* An emailed link that failed (expired, already used) comes back as
   ?error=…&error_description=… or #error=…: explain it and open the dashboard. */
function cloudLinkError() {
  const params = new URLSearchParams(location.search.slice(1) + '&' + (location.hash.startsWith('#/') ? '' : location.hash.slice(1)));
  if (!params.get('error') && !params.get('error_code')) return;
  const expired = /expired|otp/i.test(params.get('error_code') + ' ' + params.get('error_description'));
  history.replaceState(null, '', location.pathname + '#/dashboard');
  setTimeout(() => toast({ kind: 'warning', title: expired ? 'That link has expired' : 'That link didn\'t work', text: expired ? 'Email links work once and expire after a while. Ask for a new one.' : (params.get('error_description') || 'Please try again.').slice(0, 160), timeout: 8000 }), 400);
}
function setupCloud() {
  cloudLinkError();
  if (cloudHasSession() || /[?&]code=/.test(location.search)) cloudInit().catch(() => cloudSetStatus('off'));
  window.addEventListener('online', () => { if (CLOUD.user) cloudPush(); });
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-cloud="in"]')) openAuth('in');
    if (e.target.closest('[data-cloud="google"]')) cloudSignIn();
    if (e.target.closest('[data-cloud="out"]')) cloudSignOut();
  });
}
function cloudAccountHTML() {
  if (CLOUD.user) {
    return `<div class="side-account"><span class="side-account__status" id="cloudStatus" aria-live="polite">${cloudStatusHTML()}</span><a class="side-account__link" href="#/privacy">Privacy</a><button type="button" class="side-account__link" data-cloud="out">Sign out</button></div>`;
  }
  return `<div class="side-account"><button type="button" class="btn btn--soft btn--sm side-account__in" data-cloud="in">${icon('user', 'icon--sm')} Sign in</button><a class="side-account__link" href="#/privacy">Privacy</a></div>`;
}
function googleMark() {
  return '<svg class="g-mark" viewBox="0 0 18 18" aria-hidden="true" focusable="false"><path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.61z"/><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.97 10.72a5.4 5.4 0 0 1 0-3.44V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.33z"/><path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"/></svg>';
}

/* ===========================================================================
   SOFTWARE & PLATFORMS — hub (#/software) and one page per platform
   (#/software/<id>; #/academy/software/<id> also works). Platform pages share
   one 14-part structure, an "on this page" progress rail, a knowledge check
   saved like a lesson check (state.checks['sw.<id>']) and Previous/Next links.
   =========================================================================== */
const swCheckKey = (s) => `sw.${s.id}`;
const swHref = (s) => `#/software/${s.id}`;
function swBrand(s, cls = '') {
  return `<span class="sw-brand tone-${s.tone} ${cls}" aria-hidden="true"><span class="sw-brand__icon">${icon(s.icon)}</span><span class="sw-brand__name">${esc(s.brand || s.name)}</span></span>`;
}
function swStatus(s) {
  const c = state.checks[swCheckKey(s)];
  return c ? { done: true, text: `Check ${c.score}/${c.total}`, ok: c.score === c.total } : { done: false, text: `${s.quiz.length}-question check` };
}

/* Educational record/alert mockup — always labeled, never styled as the vendor's UI. */
function swMockHTML(m) {
  return `<figure class="sw-mock ${m.tone ? `tone-${m.tone}` : ''}"><figcaption class="sw-mock__label">${icon('info', 'icon--sm')}<span>${esc(m.label)}</span></figcaption>
    <div class="sw-mock__card"><div class="sw-mock__head"><strong>${esc(m.title)}</strong>${m.status ? `<span class="badge badge--outline">${esc(m.status)}</span>` : ''}</div>
    <dl>${m.rows.map(([k, v], i) => `<div class="sw-mock__row" style="--i:${i}"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div></figure>`;
}
function swPhotoHTML(id, caption) {
  const x = LIB_MAP.get(id); if (!x || !x.photo) return '';
  return `<figure class="lib-figure sw-photo">${libPhotoImg(x, 960, 'lib-photo')}<figcaption><span class="sw-photo__cap">${esc(caption || x.name)}</span> ${libCredit(x)}</figcaption></figure>`;
}

/* "See the real thing": the vendor's own public pages show its real screens
   and documents. We link to them rather than copying them. */
function swRealHTML(s) {
  const links = [...(s.real || []), [`${s.maker} official website`, s.url]];
  return `<aside class="sw-real"><div class="sw-real__h">${icon('external', 'icon--sm')}<strong>See the real thing</strong></div>
    <p>The mockup above is simplified on purpose. ${esc(s.brand || s.name)}'s real screens and documents are shown on its own public pages:</p>
    <ul>${links.map(([t, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(t)}<span class="sr-only"> (opens in a new tab)</span></a></li>`).join('')}</ul></aside>`;
}

/* ---------- Hub ---------- */
function viewSoftware(id) {
  if (id) return viewSoftwarePage(id);
  const card = (s, i) => {
    const st = swStatus(s);
    return `<article class="card card--hover sw-card tone-${s.tone}">
      <div class="sw-card__top">${swBrand(s)}<span class="badge badge--outline">${esc(s.kind)}</span></div>
      <div class="sw-card__body">
        <h2>${esc(s.name)} <span class="sw-card__maker">by ${esc(s.maker)}</span></h2>
        <dl class="sw-card__facts">
          <div><dt>${icon('info', 'icon--sm')} What it is</dt><dd>${esc(s.card.what)}</dd></div>
          <div><dt>${icon('target', 'icon--sm')} Used for</dt><dd>${esc(s.card.use)}</dd></div>
          <div><dt>${icon('users', 'icon--sm')} Who uses it</dt><dd>${esc(s.card.who)}</dd></div>
        </dl>
      </div>
      <div class="sw-card__foot"><span class="small ${st.done ? '' : 'muted'}">${st.done ? icon('check-circle', 'icon--sm') : ''} ${esc(st.text)}</span><a class="btn btn--primary" href="${swHref(s)}">Learn More <span class="sr-only">about ${esc(s.name)}</span>${icon('arrow-r', 'icon--nudge')}</a></div>
    </article>`;
  };
  const html = `<div class="page sw-hub">
    ${pageHead({ eyebrow: `${icon('monitor', 'icon--sm')} Software & Platforms`, title: 'Software & Platforms', text: 'Real-world tools that trucking companies use for fleet records, maintenance, telematics, engine diagnostics, temperature-controlled freight, roadside help, parts, dispatch and payments. Learn what each one does, who uses it and how a Maintenance Coordinator works with it.' })}
    ${SW_GROUPS.map((g) => { const list = SOFTWARE.filter((s) => (s.group || SW_GROUPS[0]) === g); return list.length ? `<section class="sw-group" aria-labelledby="swg-${list[0].id}"><h2 class="sw-group__h" id="swg-${list[0].id}">${esc(g)} <span class="sw-group__n">${list.length}</span></h2><div class="sw-grid stagger">${list.map((x, i) => card(x, i).replace('<h2>', '<h3>').replace('</h2>', '</h3>')).join('')}</div></section>` : ''; }).join('')}

    <section class="sw-hub__sec"><div class="section-head"><div><span class="eyebrow">How they fit together</span><h2>One truck, four core systems</h2></div></div>
      <div class="sw-map" role="list">
        <div class="sw-map__truck" role="listitem">${artSVG('rig', 'Tractor-trailer')}<strong>The truck, trailer and driver</strong></div>
        ${[['samsara', 'Reports what the truck is doing', 'Location, engine faults, safety events, HOS, DVIRs'], ['fleetio', 'Holds what the truck needs and has had', 'Records, PM reminders, issues, work orders, costs'], ['pro-transport', 'Knows which load it\'s on', 'Loads, dispatch, driver app, documents, billing'], ['thermo-king', 'Keeps the reefer cargo at temperature', 'Refrigeration unit, controller, alarms, TracKing']].map(([sid, a, b]) => { const s = SOFTWARE_MAP.get(sid); return `<a class="sw-map__node tone-${s.tone}" role="listitem" href="${swHref(s)}">${swBrand(s, 'sw-brand--sm')}<strong>${esc(a)}</strong><span>${esc(b)}</span></a>`; }).join('')}
      </div>
      <p class="small muted mt-3">${icon('info', 'icon--sm')} Some of these systems can share data. Fleetio, for example, documents an integration that imports Samsara odometer readings, engine faults and DVIR defects. What is connected differs at every company.</p>
    </section>

    <section class="sw-hub__sec"><div class="section-head"><div><span class="eyebrow">Quick reference</span><h2>Which system answers the question?</h2></div></div>
      ${infographicHTML({ ig: 'table', icon: 'search', title: 'Where a coordinator looks first', head: ['Question', 'Look in', 'Why'], rows: [
        ['Where is T-311 right now?', 'Samsara (telematics)', 'GPS location from the Vehicle Gateway.'],
        ['What fault code just came on?', 'Samsara, or Fleetio if faults are imported', 'Engine fault codes read from the truck.'],
        ['When is T-214\'s next PM due?', 'Fleetio', 'Service reminders based on meters and time.'],
        ['What did we spend on T-214 this year?', 'Fleetio', 'Work orders and service entries with parts and labor.'],
        ['Which load is T-122 on, and when does it deliver?', 'ProTransport (TMS)', 'Dispatch board and load details.'],
        ['Is the signed BOL in?', 'ProTransport (TMS)', 'Documents uploaded from the driver app attach to the load.'],
        ['What does reefer alarm 03 mean?', 'Thermo King unit and alarm code chart', 'The controller shows the code; the official chart explains it.']
      ] })}
    </section>

    <section class="sw-hub__sec"><div class="section-head"><div><span class="eyebrow">Try it</span><h2>Sort the signals</h2></div></div>
      ${exerciseHTML({ type: 'classify', prompt: 'Which platform would you open first for each situation?', categories: ['Fleetio', 'Samsara', 'ProTransport', 'Thermo King'], items: [
        { text: 'A PM reminder shows "overdue" on T-118', answer: 'Fleetio', why: 'Service reminders live in the maintenance system.' },
        { text: 'Dispatch asks where a stopped truck is', answer: 'Samsara', why: 'Live GPS location comes from telematics.' },
        { text: 'You need the delivery appointment for the load on T-122', answer: 'ProTransport', why: 'Load and appointment details live in the TMS.' },
        { text: 'A driver reads you an alarm code from the reefer display', answer: 'Thermo King', why: 'Reefer alarms come from the unit\'s controller. Use the official alarm chart.' },
        { text: 'You need T-214\'s repair history for a warranty claim', answer: 'Fleetio', why: 'Service history and work orders hold the repair record.' }
      ] }, { title: 'Which system?' })}
    </section>
    <p class="scope-note">${icon('info', 'icon--sm')}<span>All product and company names on these pages are trademarks of their owners. MC Academy is not affiliated with or endorsed by them. Descriptions are based on each company's official website, help center or literature, linked on every page. Features and plans change, so always check your company's own setup. Examples use fictional fleets.</span></p>
  </div>`;
  return { html, title: 'Software & Platforms', nav: 'software', crumbs: [['Software & Platforms']] };
}

/* ---------- Platform page ---------- */
function viewSoftwarePage(id) {
  const s = SOFTWARE_MAP.get(id); if (!s) return viewNotFound();
  const i = SOFTWARE.indexOf(s);
  const prev = SOFTWARE[i - 1]; const next = SOFTWARE[i + 1];
  const x = { key: swCheckKey(s), l: { check: s.quiz } };
  const body = (k) => {
    if (k === 'check') return lessonCheckHTML(x);
    if (k === 'visual') return renderBlocks(s.sections[k] || []) + swRealHTML(s);
    return renderBlocks(s.sections[k] || []);
  };
  const toc = SW_SECTIONS.map(([k, t, ic], n) => `<li><button type="button" class="sw-toc__link" data-sec="${k}"><span class="sw-toc__n">${n + 1}</span><span>${esc(t)}</span></button></li>`).join('');
  const html = `<div class="page sw-page tone-${s.tone}">
    <header class="page-head sw-head">
      <div><span class="eyebrow">${icon('monitor', 'icon--sm')} Software & Platforms · ${i + 1} of ${SOFTWARE.length}</span>
        <h1>${esc(s.name)}</h1><p>${esc(s.tagline)}</p>
        <div class="sw-head__meta"><span class="badge badge--outline">${esc(s.kind)}</span><span class="small muted">Made by ${esc(s.maker)}</span><span class="small muted">${icon('check-circle', 'icon--sm')} Facts checked ${esc(s.checked)}</span>
          <a class="industry__link" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">Official website ${icon('external', 'icon--sm')}<span class="sr-only"> (opens in a new tab)</span></a></div>
      </div>
      ${swBrand(s, 'sw-brand--lg')}
    </header>
    <div class="sw-steps" aria-label="Platforms">${SOFTWARE.map((p, k) => `<a class="sw-steps__item ${k === i ? 'is-current' : ''} ${swStatus(p).done ? 'is-done' : ''}" href="${swHref(p)}" ${k === i ? 'aria-current="page"' : ''}><span class="sw-steps__n">${swStatus(p).done ? icon('check', 'icon--sm') : k + 1}</span><span>${esc(p.name)}</span></a>`).join('')}</div>
    <div class="sw-layout">
      <nav class="sw-toc" aria-label="On this page">
        <div class="sw-toc__head"><strong>On this page</strong><span class="small muted num" id="swPct">0%</span></div>
        <div class="progress progress--sm" aria-hidden="true"><span class="progress__bar" id="swBar" style="--p:0"></span></div>
        <ol>${toc}</ol>
      </nav>
      <article class="sw-body">
        ${SW_SECTIONS.map(([k, t, ic], n) => `<section class="sw-sec prose" id="sw-${k}" data-sec="${k}" aria-labelledby="sw-h-${k}"><h2 id="sw-h-${k}"><span class="sw-sec__n" aria-hidden="true">${n + 1}</span>${icon(ic)} ${esc(t)}</h2>${body(k)}</section>`).join('')}
        <section class="sw-sources"><h2>${icon('file')} Sources</h2><p class="small muted">Facts on this page come from these official pages and were last checked in ${esc(s.checked)}. Features and plans change, so check your company's setup.</p>
          <ul>${s.sources.map(([t, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(t)} ${icon('external', 'icon--sm')}<span class="sr-only"> (opens in a new tab)</span></a></li>`).join('')}</ul>
          <p class="small muted">${esc(s.name)} is a trademark of its owner. MC Academy is not affiliated with or endorsed by ${esc(s.maker)}. Fleets, units and people in the examples are fictional.</p>
          ${reportHTML(`Software & Platforms · ${s.name}`)}</section>
      </article>
    </div>
    <nav class="sw-nav" aria-label="Platform pages">
      ${prev ? `<a class="sw-nav__link" href="${swHref(prev)}"><span class="small muted">${icon('arrow-l', 'icon--sm')} Previous</span><strong>${esc(prev.name)}</strong></a>` : `<a class="sw-nav__link" href="#/software"><span class="small muted">${icon('arrow-l', 'icon--sm')} Back to</span><strong>All platforms</strong></a>`}
      ${next ? `<a class="sw-nav__link sw-nav__link--next" href="${swHref(next)}"><span class="small muted">Next ${icon('arrow-r', 'icon--sm')}</span><strong>${esc(next.name)}</strong></a>` : `<a class="sw-nav__link sw-nav__link--next" href="#/curriculum"><span class="small muted">Next ${icon('arrow-r', 'icon--sm')}</span><strong>Back to your learning path</strong></a>`}
    </nav>
  </div>`;
  return {
    html, title: s.name, nav: 'software', crumbs: [['Software & Platforms', '#/software'], [s.name]],
    after: (v) => {
      mountLessonCheck(v, x);
      const secs = $$('.sw-sec', v); const links = $$('.sw-toc__link', v);
      const seen = new Set();
      $$('.sw-toc__link', v).forEach((b) => b.addEventListener('click', () => {
        const t = $(`#sw-${b.dataset.sec}`, v); if (!t) return;
        t.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
        const h = $('h2', t); h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true });
      }));
      const mark = () => {
        const p = seen.size / secs.length;
        $('#swPct', v).textContent = `${pct(p)}%`; $('#swBar', v).style.setProperty('--p', p);
        links.forEach((l) => l.classList.toggle('is-seen', seen.has(l.dataset.sec)));
      };
      if (!('IntersectionObserver' in window)) return;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          seen.add(e.target.dataset.sec);
          links.forEach((l) => l.classList.toggle('is-active', l.dataset.sec === e.target.dataset.sec));
        });
        mark();
      }, { rootMargin: '0px 0px -55% 0px', threshold: 0 });
      secs.forEach((el) => io.observe(el));
      viewCleanup = () => io.disconnect();
    }
  };
}

/* ===========================================================================
   LEARNING PATH — guidance layered on top of the existing curriculum. It does
   not move or rename any track, module or lesson: it tells a beginner what to
   learn first, what to learn together, what comes next and what can wait.
   Items: { m: 'track.module' } | { sw: 'platform-id' } | { page: [title, href, icon] }
   =========================================================================== */
const PATH_TAGS = {
  start: ['Start Here', 'flag'], together: ['Learn Together', 'layers'], next: ['Learn Next', 'arrow-r'],
  adv: ['Advanced', 'trend'], exp: ['Expert', 'award'], opt: ['Optional', 'route']
};
const LEARN_PATH = [
  { id: 'fund', tag: 'start', title: 'Trucking Fundamentals', items: [{ m: 'beginner.m1' }, { m: 'beginner.m2' }],
    why: 'How a trucking company works, who does what, and what a Maintenance Coordinator is responsible for. Everything else assumes you know who you\'re talking to and what your job is.' },
  { id: 'vehicles', tag: 'start', title: 'Vehicles & Parts', items: [{ m: 'beginner.m3' }, { page: ['Visual Library', '#/library', 'image'] }],
    needs: 'Trucking Fundamentals',
    why: 'You can\'t coordinate a repair on a part you can\'t picture. Learn the tractor, trailer and their systems, and use the Visual Library alongside the lessons.' },
  { id: 'maint', tag: 'next', title: 'Maintenance, Inspections & Safety', items: [{ m: 'beginner.m9' }, { m: 'beginner.m5' }],
    needs: 'Vehicles & Parts — inspections and roadside calls name the parts you just learned',
    why: 'How defects are found (inspections and DVIRs), and which problems mean a truck must stop. Safety decisions come before any paperwork.' },
  { id: 'docs', tag: 'next', title: 'Work Orders & Documentation', items: [{ m: 'beginner.m6' }, { m: 'beginner.m8' }],
    needs: 'Maintenance, Inspections & Safety — a work order starts from a defect',
    why: 'The repair workflow from first call to closed case, and the records that prove what was done, when, and what it cost.' },
  { id: 'software', tag: 'next', title: 'Fleet & Transportation Software', items: [{ sw: 'fleetio' }, { sw: 'samsara' }, { sw: 'thermo-king' }, { sw: 'pro-transport' }, { sw: 'decisiv' }, { sw: 'fleetnet' }],
    needs: 'Work Orders & Documentation — software records a process you should already understand',
    why: 'The real tools where that work is recorded and monitored: maintenance records, telematics, reefer units and dispatch.' },
  { id: 'real', tag: 'next', title: 'Real-World Maintenance Coordination', items: [{ m: 'beginner.m4' }, { m: 'beginner.m7' }, { page: ['Scenario Simulator', '#/scenarios', 'message', 'Practice Lab'] }, { page: ['Beginner final assessment', '#/final/beginner', 'award', 'Final assessment'] }],
    needs: 'All of the stages above',
    why: 'Turning a vague driver complaint into useful facts, talking to drivers, dispatch and shops, and then proving it all in a realistic maintenance call.' },
  { id: 'adv', tag: 'adv', title: 'Advanced — Fleet Maintenance Operations', track: 'advanced',
    needs: 'The Beginner track, ideally with the Beginner final passed',
    why: 'Preventive maintenance programs, diagnostics, estimates, vendors, downtime, cost control and parts. This is the day-to-day operations level.' },
  { id: 'exp', tag: 'exp', title: 'Expert — Maintenance Coordination & Fleet Management', track: 'expert',
    needs: 'The Advanced track',
    why: 'Strategy, analytics, root cause analysis, warranty, leadership and emergency operations, for when you run or improve the maintenance program itself.' }
];
const LEARN_TOGETHER = [
  { t: 'Truck & Trailer Basics + Parts', d: 'Read a systems lesson, then open the same parts in the Visual Library.', items: [{ m: 'beginner.m3' }, { page: ['Visual Library', '#/library', 'image'] }] },
  { t: 'Preventive Maintenance + Inspections', d: 'Inspections find defects; PM prevents them. Start with inspections, and add PM schedules once you reach Advanced.', items: [{ m: 'beginner.m9' }, { m: 'advanced.m1', later: true }] },
  { t: 'Work Orders + Service Records', d: 'The workflow creates the work order, and documentation turns it into a service record.', items: [{ m: 'beginner.m6' }, { m: 'beginner.m8' }] },
  { t: 'Drivers + Vehicles + Compliance', d: 'Driver complaints, DVIRs and stop-or-go safety decisions all meet in the same phone call.', items: [{ m: 'beginner.m4' }, { m: 'beginner.m9' }, { m: 'beginner.m5' }] },
  { t: 'Fleetio + Maintenance Workflows', d: 'See how inspections, issues and work orders map to the workflow you learned.', items: [{ sw: 'fleetio' }, { m: 'beginner.m6' }] },
  { t: 'Samsara + Telematics + Fleet Monitoring', d: 'Fault codes, location and DVIRs, then how fleets track them across every unit.', items: [{ sw: 'samsara' }, { m: 'advanced.m7', later: true }, { m: 'expert.m9', later: true }] },
  { t: 'Thermo King + Refrigeration + Reefer Maintenance', d: 'Know the reefer trailer first, then the unit, its alarms and its maintenance.', items: [{ m: 'beginner.m3' }, { sw: 'thermo-king' }, { page: ['Reefer unit in the Visual Library', '#/library/reeferunit', 'image'] }] },
  { t: 'Engine-maker alerts + Fault codes', d: 'Read a fault list first, then see how Cummins and Detroit add priority and next steps.', items: [{ m: 'advanced.m2', later: true }, { sw: 'cummins-connected' }, { sw: 'detroit-connect' }] },
  { t: 'Roadside networks + Breakdowns', d: 'Run the first ten minutes of a breakdown, then hand it to a network, a truck stop shop or a parts branch.', items: [{ m: 'beginner.m5' }, { sw: 'fleetnet' }, { sw: 'loves-truck-care' }, { sw: 'ta-truck-service' }, { sw: 'fleetpride' }] },
  { t: 'Dispatch + Loads + Transportation Operations', d: 'How loads, drivers and dispatch work, and how a breakdown affects them.', items: [{ sw: 'pro-transport' }, { m: 'operations.m1' }, { m: 'advanced.m6', later: true }] }
];
const NOT_YET = [
  ['adv', 'Cost per mile, repair-cost control and vendor pricing', 'advanced.m8'],
  ['adv', 'Parts sourcing and inventory (reorder points, cores)', 'advanced.m9'],
  ['adv', 'Aftertreatment deep dive (DPF, DEF, regeneration)', 'advanced.m2'],
  ['exp', 'Fleet analytics: MTBF, MTTR, availability and PM compliance KPIs', 'expert.m2'],
  ['exp', 'Root cause analysis and repeat-failure investigations', 'expert.m3'],
  ['exp', 'Maintenance budgeting, lifecycle and replacement planning', 'expert.m1'],
  ['exp', 'Warranty recovery and vendor scorecards', 'expert.m6'],
  ['opt', 'Invoicing, accessorials and factoring (unless your role includes billing)', 'operations.m2']
];
/* Module → guidance tag shown on the track pages. */
const MODULE_TAGS = (() => {
  const map = {};
  LEARN_PATH.forEach((st, n) => (st.items || []).forEach((it) => { if (it.m) map[it.m] = { tag: st.tag, stage: st.title, step: n + 1 }; }));
  return map;
})();
const MODULE_WITH = (() => {
  const map = {};
  LEARN_TOGETHER.forEach((g) => g.items.forEach((it) => { if (it.m) (map[it.m] = map[it.m] || []).push(g.t); }));
  return map;
})();

function pathModule(key) {
  const [tid, mid] = key.split('.');
  const t = TRACK_BY_ID[tid]; const m = t && t.modules.find((x) => x.id === mid);
  return m ? { t, m } : null;
}
function pathItemDone(it) {
  if (it.m) { const r = pathModule(it.m); return r ? moduleStats(r.t, r.m).complete : false; }
  if (it.sw) return !!state.checks[`sw.${it.sw}`];
  if (it.page && it.page[1] === '#/final/beginner') return finalPassed(TRACK_BY_ID.beginner);
  return null; // reference pages have no completion state
}
function pathItemHTML(it) {
  const done = pathItemDone(it);
  let href; let label; let sub; let ic;
  if (it.m) {
    const r = pathModule(it.m); if (!r) return '';
    const s = moduleStats(r.t, r.m);
    href = `#/track/${r.t.id}`; label = r.m.title; sub = `${r.t.level} · Module ${r.m.id.slice(1)} · ${s.done}/${s.total}`; ic = 'book';
  } else if (it.sw) {
    const s = SOFTWARE_MAP.get(it.sw); href = swHref(s); label = s.name; sub = `Software & Platforms · ${s.kind}`; ic = s.icon;
  } else { [label, href, ic, sub = 'Reference'] = it.page; }
  return `<a class="path-item ${done ? 'is-done' : ''}" href="${href}"><span class="path-item__ic">${icon(done ? 'check' : ic, 'icon--sm')}</span><span class="grow"><strong>${esc(label)}</strong><small>${esc(sub)}</small>${it.later ? '<span class="path-later-tag">Later</span>' : ''}</span>${icon('chev-r', 'icon--sm')}</a>`;
}
function pathTag(tag, extra = '') {
  const [t, ic] = PATH_TAGS[tag];
  return `<span class="path-tag path-tag--${tag} ${extra}">${icon(ic, 'icon--sm')}${t}</span>`;
}
function pathStageProgress(st) {
  if (st.track) return trackStats(TRACK_BY_ID[st.track]).p;
  const vals = st.items.map(pathItemDone).filter((v) => v !== null);
  return vals.length ? vals.filter(Boolean).length / vals.length : 0;
}

function learningGuideHTML() {
  const cur = LEARN_PATH.findIndex((st) => pathStageProgress(st) < 1);
  const first = LEARN_PATH[0];
  const startHref = (() => { const r = recommended(); return r && r.t.id === 'beginner' ? r.href : '#/track/beginner'; })();
  // On phones only the current stage starts open, so the page isn't a dozen
  // screens long; wider screens open everything.
  const wide = matchMedia('(min-width: 761px)').matches;
  const openAttr = (on) => (on || wide ? ' open' : '');
  const chev = icon('chev-r', 'icon--sm fold__chev');
  const stage = (st, n) => {
    const p = pathStageProgress(st); const here = n === cur;
    const t = st.track && TRACK_BY_ID[st.track];
    return `<li class="path-stage path-stage--${st.tag} ${p >= 1 ? 'is-done' : ''} ${here ? 'is-current' : ''}" style="--i:${n}">
      <span class="path-stage__dot" aria-hidden="true">${p >= 1 ? icon('check', 'icon--sm') : n + 1}</span>
      <details class="path-stage__card"${openAttr(here)}>
        <summary class="path-stage__sum"><span class="path-stage__top">${pathTag(st.tag)}${here ? '<span class="path-here">You are here</span>' : ''}<span class="small muted num path-stage__pct">${pct(p)}%</span>${chev}</span>
        <h3>${esc(st.title)}</h3></summary>
        <p class="small">${esc(st.why)}</p>
        ${st.needs ? `<p class="path-needs">${icon('branch', 'icon--sm')}<span><strong>Builds on:</strong> ${esc(st.needs)}</span></p>` : ''}
        ${t ? `<a class="path-item" href="#/track/${t.id}"><span class="path-item__ic">${icon(t.icon, 'icon--sm')}</span><span class="grow"><strong>${esc(t.title)}</strong><small>${t.modules.length} modules · ${trackStats(t).done}/${trackStats(t).lessons} lessons</small></span>${icon('chev-r', 'icon--sm')}</a>` : `<div class="path-items">${st.items.map(pathItemHTML).join('')}</div>`}
      </details></li>`;
  };
  return `<section class="path" aria-labelledby="pathTitle">
    <div class="path-start card">
      <div class="path-start__text">${pathTag('start')}<h2 id="pathTitle">New here? Start with the fundamentals</h2>
        <p>Begin with <strong>Trucking Fundamentals</strong> and <strong>Vehicles & Parts</strong>, the first three Beginner modules. They give you the vocabulary every later lesson uses: who does what in a trucking company, what your job is, and what the parts of a truck and trailer are called.</p>
        <div class="row row--wrap mt-4"><a class="btn btn--primary" href="${startHref}">${state.last ? 'Continue learning' : 'Start lesson 1'} ${icon('arrow-r', 'icon--nudge')}</a><a class="btn btn--ghost" href="#sec-path">See the full path</a></div></div>
      <ol class="path-mini" aria-label="Path overview">${['Beginner', ...LEARN_PATH.slice(0, 6).map((s) => s.title), 'Advanced', 'Expert'].map((t, n) => `<li class="${n === 0 || n > 6 ? 'is-level' : ''} ${n - 1 === cur ? 'is-current' : ''}">${esc(t)}</li>`).join('')}</ol>
    </div>

    <div class="section-head" id="sec-path"><div><span class="eyebrow">Recommended learning path</span><h2>What to learn, in order</h2></div></div>
    <p class="muted mb-4">The curriculum lists modules by track. This path suggests the best <em>order</em> for a beginner. Some modules are best studied side by side, so the path doesn't always follow module numbers. Your progress carries over either way.</p>
    <ol class="path-stages">${LEARN_PATH.map(stage).join('')}</ol>

    <details class="fold"${openAttr(false)}><summary class="section-head fold__sum"><div><span class="eyebrow">${pathTag('together', 'path-tag--inline')}</span><h2>Topics that make more sense side by side</h2></div>${chev}</summary>
    <div class="path-together stagger">${LEARN_TOGETHER.map((g) => `<article class="card path-group"><h3>${icon('layers', 'icon--sm')} ${esc(g.t)}</h3><p class="small muted">${esc(g.d)}</p><div class="path-items">${g.items.map(pathItemHTML).join('')}</div></article>`).join('')}</div>
    </details>

    <details class="fold"${openAttr(false)}><summary class="section-head fold__sum"><div><span class="eyebrow">Not yet</span><h2>What you don't need to learn yet</h2></div>${chev}</summary>
    <div class="card card--pad path-later">
      <p class="small mb-4">These topics build on the fundamentals. A beginner will get much more out of them after finishing the Beginner track. Feel free to look, but don't let them slow you down.</p>
      <ul>${NOT_YET.map(([tag, t, key]) => { const r = pathModule(key); return `<li>${pathTag(tag)}<span class="grow">${esc(t)}</span>${r ? `<a class="small" href="#/track/${r.t.id}">${esc(r.t.level)} · Module ${r.m.id.slice(1)}</a>` : ''}</li>`; }).join('')}</ul>
      <p class="block-note mt-4">${icon('route', 'icon--sm')}<span>The <strong>Operations</strong> track is optional. Take it alongside or after Beginner if your role touches dispatch, loads or billing.</span></p>
    </div>
    </details>
  </section>`;
}

/* Small guidance line shown in each module on the track page. */
function moduleGuideHTML(t, m) {
  const key = `${t.id}.${m.id}`;
  const g = MODULE_TAGS[key];
  const tag = g ? g.tag : t.id === 'advanced' ? 'adv' : t.id === 'expert' ? 'exp' : t.id === 'operations' ? 'opt' : null;
  if (!tag) return '';
  const text = g ? `Path step ${g.step}: ${g.stage}` : tag === 'adv' ? 'After the Beginner track' : tag === 'exp' ? 'After the Advanced track' : 'Optional · alongside or after Beginner';
  return `<span class="module__guide">${pathTag(tag)}<span>${esc(text)}</span>${MODULE_WITH[key] ? `<span class="module__with">${icon('layers', 'icon--sm')} Learn together: ${esc(MODULE_WITH[key].join(' · '))}</span>` : ''}</span>`;
}

/* ===========================================================================
   PRIVACY — what the academy stores, where, and how to delete it; account
   deletion for signed-in users; contact.
   =========================================================================== */
const PRIVACY_UPDATED = 'October 2026';
const CONTACT_EMAIL = 'stanbdev@gmail.com';

/* "Report a problem": an email with the page name and link filled in. */
function reportHref(what) {
  const link = location.origin + location.pathname + location.hash;
  const body = `Page: ${what}\nLink: ${link}\n\nWhat's wrong or unclear:\n\n`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`MC Academy: problem on "${what}"`)}&body=${encodeURIComponent(body)}`;
}
const reportHTML = (what) => `<p class="report-line">${icon('flag', 'icon--sm')}<span>Spot a mistake or something out of date? <a href="${esc(reportHref(what))}">Report a problem</a></span></p>`;

function viewPrivacy() {
  const row = (ic, t, d) => `<div class="pv-row"><span class="pv-row__ic">${icon(ic)}</span><div><h3>${t}</h3><p>${d}</p></div></div>`;
  const html = `<div class="page page--narrow pv">
    ${pageHead({ eyebrow: `${icon('shield', 'icon--sm')} Privacy`, title: 'Your data and privacy', text: `What MC Academy stores, where it is kept, and how to delete it. Last updated ${PRIVACY_UPDATED}.` })}
    <div class="callout callout--info" role="note"><span class="callout__icon">${icon('info')}</span><div><h2 class="pv-short">The short version</h2><p>You can use the whole academy without an account. Your progress stays in your own browser. If you sign in (with Google or with email), a copy of your progress is kept in your account so it syncs across devices. There are no ads, no tracking cookies, and your data is never sold.</p></div></div>

    <section class="pv-sec"><h2>Without an account</h2>
      ${row('grid', 'Stored in your browser only', 'Completed lessons, quiz and exam scores, bookmarks, achievements, the name and profile details you type in (role, company, city), your daily goal, the days you studied, and your theme and animation preferences. It is kept in your browser\'s local storage and never leaves your device.')}
      ${row('rotate', 'How to delete it', 'Use <strong>Reset progress</strong> on your <a href="#/profile">Profile</a> page, or clear this site\'s data in your browser settings.')}
    </section>

    <section class="pv-sec"><h2>If you create an account</h2>
      ${row('users', 'Your account', 'You can sign in with Google or with your email and a password. With Google, Google shares your name, email address, profile picture link and a Google account ID with our sign-in provider, Supabase. With email, Supabase stores your email address and a securely hashed password (we never see the password itself) and sends the confirmation and password-reset emails. We use these details only to identify your account and show your name.')}
      ${row('image', 'Profile picture (optional)', 'If you upload a picture, it is resized to 256 × 256 pixels in your browser and stored with Supabase. Anyone who has the picture\'s link can view it. Removing the picture or deleting your account deletes it.')}
      ${row('activity', 'Your synced progress', 'The same progress and profile details listed above (except your theme and animation preferences) are stored with your account so they can follow you to other devices. Each account can only read and change its own progress.')}
      ${row('pin', 'Where it is kept', 'In a Supabase database in the European Union (Ireland, region eu-west-1).')}
      ${row('users', 'Trainer groups (optional)', 'If you join a group with a code, that group\'s trainer can see your name, profile picture, academy progress, quiz scores and certificates, and can download them as a spreadsheet (CSV) for training records. Modules a trainer assigns, with their due dates, are stored with the group. You can leave a group at any time; trainers can also remove members.')}
      ${row('award', 'Certificate verification (optional)', 'If you ask for a verification code, your name, the track, your final score and the date are stored with that code. Anyone who has the code can check those details on the certificate check page.')}
      ${row('lock', 'Sign-in session', 'While you are signed in, your browser keeps a sign-in token in local storage. Signing out removes it.')}
      ${row('x-circle', 'How to delete it', CLOUD.user ? 'Use <button type="button" class="link-btn" data-delete-account>Delete my account</button> on this page or on your <a href="#/profile">Profile</a> page. Your account, its synced progress, profile picture, group memberships and certificates are deleted permanently; the copy in this browser stays until you reset it.' : 'Sign in, then use <strong>Delete account</strong> on your Profile page or here. Your account, its synced progress, profile picture, group memberships and certificates are deleted permanently.')}
    </section>

    <section class="pv-sec"><h2>Services the site uses</h2>
      ${infographicHTML({ ig: 'table', icon: 'layers', title: 'Who handles what', head: ['Service', 'What for', 'What it receives'], rows: [
        ['Vercel', 'Hosts the website', 'Standard technical request data, such as your IP address and browser type, in its server logs.'],
        ['Google', 'Sign-in (optional)', 'Only if you choose to sign in with Google. Your Google profile photo is loaded from Google if you use it as your picture.'],
        ['Supabase', 'Accounts, progress sync, sign-in emails and profile pictures (optional)', 'Your account details, synced progress and any picture you upload, as described above.'],
        ['jsDelivr', 'Delivers the sign-in library', 'Only when you sign in. Your IP address and browser type.']
      ] })}
      <p class="small muted">Fonts and the photos in the Visual Library are stored on this site (photos are credited to their authors). Links to official company websites open those sites, which have their own privacy policies.</p>
    </section>

    <section class="pv-sec"><h2>What we don't do</h2>
      <ul class="pv-list">${['No advertising and no advertising trackers', 'No tracking cookies and no usage analytics', 'No selling or sharing of your data for marketing', 'No access to your Google contacts, files or email beyond your address'].map((t) => `<li>${icon('check-circle', 'icon--sm')}<span>${t}</span></li>`).join('')}</ul>
    </section>

    <section class="pv-sec"><h2>Contact</h2>
      ${row('message', 'Questions or requests', `For questions about your data, or if you can't delete it yourself, email <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.`)}
    </section>
  </div>`;
  return {
    html, title: 'Privacy', nav: 'privacy', crumbs: [['Privacy']],
    after: (v) => $$('[data-delete-account]', v).forEach((b) => b.addEventListener('click', confirmDeleteAccount))
  };
}

function confirmDeleteAccount() {
  if (!CLOUD.user) return;
  openModal({
    title: 'Delete your account?',
    body: `<p>This permanently deletes the account <strong>${esc(CLOUD.user.email || '')}</strong> and the progress synced to it. It cannot be undone.</p><p class="small muted">The copy of your progress in this browser is not deleted. Use <strong>Reset all progress</strong> afterwards if you want to clear it too.</p>`,
    foot: '<button class="btn btn--ghost" data-close>Cancel</button><button class="btn btn--danger" id="doDeleteAccount">Delete my account</button>',
    onOpen: (m, close) => $('#doDeleteAccount', m).addEventListener('click', async (e) => {
      e.currentTarget.disabled = true;
      const ok = await cloudDeleteAccount();
      close();
      if (ok) { toast({ kind: 'success', title: 'Account deleted', text: 'Your account and synced progress were removed.' }); router(); }
      else toast({ kind: 'warning', title: 'Couldn\'t delete the account', text: navigator.onLine ? 'Please try again in a moment.' : 'Connect to the internet and try again.' });
    })
  });
}

/* ===========================================================================
   REVIEW MY MISTAKES + MODULE CHEAT SHEETS
   Every graded question (lesson checks, module quizzes, platform checks) is
   recorded. A wrong answer puts it in state.missed, due now. Each right
   answer while it is due schedules it again after 1, 3 and then 7 days;
   right on the 7-day review, it leaves the list (spaced repetition). A wrong
   answer starts it over. #/review retries due questions; #/cheatsheet/<track>/<module> is a
   printable one-page summary built from each lesson's takeaways and terms.
   =========================================================================== */
let Q_BANK = null; // question object → { id, label, href, t, m }
function qBank() {
  if (Q_BANK) return Q_BANK;
  Q_BANK = new Map();
  LESSONS.forEach((x) => (x.l.check || []).forEach((q, i) => Q_BANK.set(q, { id: `${x.key}#${i}`, q, label: x.l.title, sub: `${x.t.level} · Module ${x.m.id.slice(1)}: ${x.m.title}`, href: lessonHref(x), t: x.t, m: x.m })));
  SOFTWARE.forEach((s) => s.quiz.forEach((q, i) => Q_BANK.set(q, { id: `sw.${s.id}#${i}`, q, label: s.name, sub: 'Software & Platforms', href: swHref(s) })));
  return Q_BANK;
}
let Q_BY_ID = null;
function qById(id) {
  if (!Q_BY_ID) { Q_BY_ID = new Map(); qBank().forEach((v) => Q_BY_ID.set(v.id, v)); }
  return Q_BY_ID.get(id);
}
const REVIEW_DAYS = [1, 3, 7]; // wait after each right answer; then the question is cleared
const DAY_MS = 864e5;
const dayStart = (t) => { const d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); };
/* Called by gradeQuestion() for every answered question. Entries saved
   before spaced review existed have no box/due: they count as due now. */
function noteAnswer(q, ok) {
  const b = qBank().get(q); if (!b) return;
  const cur = state.missed[b.id];
  if (ok) {
    if (!cur || (cur.due || 0) > Date.now()) return; // not on the list, or not due yet
    const box = (cur.box || 0) + 1;
    if (box > REVIEW_DAYS.length) delete state.missed[b.id];
    else state.missed[b.id] = Object.assign({}, cur, { box, due: dayStart(Date.now()) + REVIEW_DAYS[box - 1] * DAY_MS });
  } else state.missed[b.id] = { n: ((cur || {}).n || 0) + 1, at: Date.now(), box: 0, due: 0 };
  touch('mq:' + b.id);
  save();
  updateMissedBadge();
}
function updateMissedBadge() { const n = missedCount(); const el = $('#navMissed'); if (el) { el.textContent = n || ''; el.hidden = !n; } }
const missedList = () => Object.keys(state.missed).map((id) => ({ id, ...state.missed[id], b: qById(id) })).filter((x) => x.b);
const isDue = (x) => (x.due || 0) <= Date.now();
// Due now (badge, practice card). Before the lesson text has loaded, lesson
// questions are recognised by their lesson key so the count is still right.
const missedCount = () => (hasContent() ? missedList() : Object.keys(state.missed).filter((id) => LESSON_MAP.has(id.split('#')[0]) || qById(id)).map((id) => state.missed[id])).filter(isDue).length;
function whenText(due) {
  const days = Math.round((dayStart(due) - dayStart(Date.now())) / DAY_MS);
  return days <= 0 ? 'today' : days === 1 ? 'tomorrow' : `in ${days} days`;
}
const stepsHTML = (x) => `<span class="rv-steps" title="Review ${Math.min((x.box || 0) + 1, REVIEW_DAYS.length + 1)} of ${REVIEW_DAYS.length + 1}">${[0, ...REVIEW_DAYS].map((_, k) => `<span class="${k < (x.box || 0) ? 'is-done' : ''}"></span>`).join('')}<span class="sr-only">${x.box || 0} of ${REVIEW_DAYS.length + 1} reviews passed</span></span>`;

function viewReview() {
  const all = missedList();
  const list = all.filter(isDue).sort((a, b) => b.n - a.n || b.at - a.at);
  const later = all.filter((x) => !isDue(x)).sort((a, b) => a.due - b.due);
  const soon = new Map(); later.forEach((x) => { const w = whenText(x.due); soon.set(w, (soon.get(w) || 0) + 1); });
  const byModule = new Map();
  all.forEach((x) => { const k = x.b.m ? `${x.b.t.id}.${x.b.m.id}` : x.b.href; const g = byModule.get(k) || { label: x.b.m ? `${x.b.t.level} · ${x.b.m.title}` : x.b.label, href: x.b.m ? `#/track/${x.b.t.id}` : x.b.href, n: 0, sheet: x.b.m ? `#/cheatsheet/${x.b.t.id}/${x.b.m.id}` : '' }; g.n++; byModule.set(k, g); });
  const weak = [...byModule.values()].sort((a, b) => b.n - a.n).slice(0, 6);
  const html = `<div class="page page--narrow rv">
    ${pageHead({ eyebrow: `${icon('rotate', 'icon--sm')} Practice Lab`, title: 'Review my mistakes', text: 'Every question you answer wrong in a knowledge check, module quiz or platform check lands here. Get it right and it comes back after 1 day, then 3 days, then 7 days. Right every time, and it leaves the list. Spacing reviews out like this helps answers stick.' })}
    ${all.length ? `
      <div class="card card--pad rv-start">
        <div><strong class="rv-start__n num">${list.length}</strong><span>question${list.length === 1 ? '' : 's'} due now</span>${soon.size ? `<div class="small muted rv-start__later">Coming up: ${[...soon].map(([w, n]) => `${n} ${w}`).join(' · ')}</div>` : ''}</div>
        ${list.length ? `<button type="button" class="btn btn--primary btn--lg" data-review-start>${icon('play')} Start review</button>` : `<span class="small muted">Nothing due today. Come back ${whenText(later[0].due)}.</span>`}
      </div>
      <div id="reviewRoot"></div>
      <div class="section-head"><div><span class="eyebrow">Where to focus</span><h2>Your weakest areas</h2></div></div>
      <div class="rv-weak">${weak.map((g) => `<div class="rv-weak__row"><span class="rv-weak__n num">${g.n}</span><a href="${g.href}" class="grow"><strong>${esc(g.label)}</strong></a>${g.sheet ? `<a class="btn btn--sm btn--ghost" href="${g.sheet}">${icon('file', 'icon--sm')} Cheat sheet</a>` : ''}</div>`).join('')}</div>
      <div class="section-head"><div><span class="eyebrow">All questions</span><h2>What you missed</h2></div></div>
      <ul class="rv-list">${[...list, ...later].map((x) => `<li><span class="rv-list__q">${inline(x.b.q.q)}</span><span class="small muted">${esc(x.b.label)} · ${esc(x.b.sub)}${x.n > 1 ? ` · missed ${x.n}×` : ''}</span><span class="rv-list__when small">${stepsHTML(x)}${isDue(x) ? '<strong>Due now</strong>' : `Next review ${whenText(x.due)}`}</span><a class="small" href="${x.b.href}">Open the lesson</a></li>`).join('')}</ul>`
      : stateBlock({ ic: 'check-circle', title: 'Nothing to review', text: 'Questions you answer incorrectly in knowledge checks and quizzes will collect here so you can retry them.', action: '<a class="btn btn--primary" href="#/curriculum">Go to the curriculum</a>' })}
  </div>`;
  return {
    html, title: 'Review my mistakes', nav: 'review', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Review my mistakes']],
    after: (v) => { const b = $('[data-review-start]', v); if (b) b.addEventListener('click', () => { b.closest('.rv-start').hidden = true; runReview($('#reviewRoot', v), shuffle(list).slice(0, 15)); }); }
  };
}
function runReview(root, items) {
  let i = 0; const res = [];
  const draw = () => {
    if (i >= items.length) {
      const ok = res.filter(Boolean).length; const left = missedCount(); const total = missedList().length;
      root.innerHTML = `<div class="card result anim-scale-in">${ring(ok / items.length, { size: 140, stroke: 12, color: 'var(--success)', sub: `${ok}/${items.length}`, fs: 28 })}
        <h2>${ok === items.length ? 'All correct' : 'Review complete'}</h2><p>${ok} right: ${ok === 1 ? 'it moves' : 'they move'} to a later review. ${left ? `${left} still due now.` : total ? `Nothing else is due today. ${total} question${total === 1 ? '' : 's'} scheduled for later.` : 'Your list is empty.'}</p>
        <div class="result__actions">${left ? `<button class="btn btn--primary" data-again>${icon('rotate')} Review again</button>` : ''}<a class="btn" href="#/curriculum">${icon('layers')} Curriculum</a></div></div>`;
      const a = $('[data-again]', root); if (a) a.addEventListener('click', () => router());
      return;
    }
    const x = items[i]; const q = x.b.q;
    root.innerHTML = `<div class="check anim-slide-up">
      <div class="check__head"><div><strong>Question ${i + 1} of ${items.length}</strong><div class="small muted">From: ${esc(x.b.label)}</div></div>
      <div class="check__progress" aria-hidden="true">${items.map((_, k) => `<span class="${k < i ? (res[k] ? 'is-correct' : 'is-wrong') : k === i ? 'is-current' : ''}"></span>`).join('')}</div></div>
      <div class="q">${questionHTML(q, `rv-${i}`, shuffle(qOptions(q).map((_, n) => n)))}
        <div class="q__actions"><button class="btn btn--primary" data-q-check>Check answer</button></div><div data-q-fb aria-live="polite"></div></div></div>`;
    const qel = $('.q', root); const btn = $('[data-q-check]', qel);
    btn.addEventListener('click', () => {
      const r = gradeQuestion(qel, q);
      if (!r) { $('[data-q-fb]', qel).innerHTML = '<p class="small muted mt-2">Select an answer first.</p>'; return; }
      res[i] = r.ok;
      const st = state.missed[x.id];
      $('[data-q-fb]', qel).innerHTML = r.html + (r.ok ? `<p class="small mt-2">${st ? `Next review ${whenText(st.due)}.` : 'Cleared from your list.'}</p>` : `<p class="small mt-2"><a href="${x.b.href}">Re-read the lesson</a>. It's due again now and starts over.</p>`);
      btn.outerHTML = `<button class="btn btn--primary" data-q-next>${i + 1 < items.length ? 'Next question' : 'See results'} ${icon('arrow-r', 'icon--nudge')}</button>`;
      const nb = $('[data-q-next]', qel); nb.focus(); nb.addEventListener('click', () => { i++; draw(); });
    });
  };
  draw();
}

/* ---------- Cheat sheets ---------- */
function moduleTerms(m) {
  const found = new Map();
  const scan = (v) => {
    if (typeof v === 'string') { for (const r of v.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) { const g = findTerm(r[1]); if (g) found.set(g.term, g); } return; }
    if (v && typeof v === 'object') Object.values(v).forEach(scan);
  };
  m.lessons.forEach(scan);
  return [...found.values()].sort((a, b) => a.term.localeCompare(b.term));
}
function cheatSheetHTML(t, m) {
  const terms = moduleTerms(m);
  return `<article class="cs">
    <header class="cs__head"><span class="cs__brand">MC Academy · ${esc(t.level)} · Module ${m.id.slice(1)}</span><h1>${esc(m.title)}</h1><p>${esc(m.summary)}</p></header>
    <div class="cs__lessons">${m.lessons.map((l) => `<section class="cs__lesson"><h2>${esc(l.title)}</h2>
      <ul class="cs__keys">${(l.takeaways || []).map((k) => `<li>${inline(k)}</li>`).join('')}</ul>
      ${(l.mistakes || []).length ? `<p class="cs__watch"><strong>Avoid:</strong> ${l.mistakes.slice(0, 2).map((x) => inline(x)).join(' ')}</p>` : ''}</section>`).join('')}</div>
    ${terms.length ? `<section class="cs__terms"><h2>Key terms</h2><dl>${terms.map((g) => `<div><dt>${esc(g.term)}</dt><dd>${esc(g.simple)}</dd></div>`).join('')}</dl></section>` : ''}
    <footer class="cs__foot">Summary for study. Always follow your company's procedures and the manufacturer's instructions.</footer>
  </article>`;
}
function viewCheatSheet(tid, mid) {
  const t = TRACK_BY_ID[tid]; const m = t && t.modules.find((x) => x.id === mid);
  if (!m) return viewNotFound();
  const i = t.modules.indexOf(m); const prev = t.modules[i - 1]; const next = t.modules[i + 1];
  const html = `<div class="page page--narrow">
    <div class="row row--between row--wrap mb-4"><span class="eyebrow">${icon('file', 'icon--sm')} Cheat sheet</span><button type="button" class="btn btn--primary" data-cs-print>${icon('print')} Print / Save PDF</button></div>
    <div class="cs-wrap">${cheatSheetHTML(t, m)}</div>
    <nav class="sw-nav" aria-label="Cheat sheets">
      ${prev ? `<a class="sw-nav__link" href="#/cheatsheet/${t.id}/${prev.id}"><span class="small muted">${icon('arrow-l', 'icon--sm')} Previous module</span><strong>${esc(prev.title)}</strong></a>` : `<a class="sw-nav__link" href="#/track/${t.id}"><span class="small muted">${icon('arrow-l', 'icon--sm')} Back to</span><strong>${esc(t.level)} track</strong></a>`}
      ${next ? `<a class="sw-nav__link sw-nav__link--next" href="#/cheatsheet/${t.id}/${next.id}"><span class="small muted">Next module ${icon('arrow-r', 'icon--sm')}</span><strong>${esc(next.title)}</strong></a>` : ''}
    </nav>
  </div>`;
  return {
    html, title: `Cheat sheet · ${m.title}`, nav: `track-${t.id}`, bottom: 'curriculum', crumbs: [['Curriculum', '#/curriculum'], [t.level, `#/track/${t.id}`], ['Cheat sheet']],
    after: (v) => $('[data-cs-print]', v).addEventListener('click', () => { $('#printRoot').innerHTML = cheatSheetHTML(t, m); window.print(); })
  };
}

/* ===========================================================================
   SIMULATIONS (software) — hands-on practice with simplified, clearly labeled
   mock screens (never presented as the vendors' real interfaces). Each is a
   widget: { widget: 'sim:<id>' } in content, mounted by mountWidgets().
   Units, people and numbers are fictional.
   =========================================================================== */
const simLabel = (t) => `<p class="sim__label">${icon('info', 'icon--sm')}<span>Educational simulation — simplified. ${t}</span></p>`;
const simFb = (ok, title, text) => `<li class="sim-fb ${ok ? 'is-ok' : 'is-bad'}">${icon(ok ? 'check-circle' : 'x-circle', 'icon--sm')}<div><strong>${title}</strong>${text ? `<p>${text}</p>` : ''}</div></li>`;

const SIMS = {
  /* ---- Work order (Fleetio concepts) ---- */
  'sim:workorder': (el) => {
    const LAST = 411430; const READ = 412880; const PM_EVERY = 25000;
    const lines = [
      ['head', 'Replace left low-beam headlamp — resolves issue #1182', true],
      ['pm', 'PM A service — due in 1,400 mi', true],
      ['tires', 'Replace all steer tires', false],
      ['paint', 'Repaint front bumper', false]
    ];
    el.innerHTML = `<div class="sim">
      <div class="sim__head"><span class="sim__tag">${icon('wrench', 'icon--sm')} Practice</span><h3>Build the work order</h3></div>
      <div class="sim__brief"><p><strong>Monday 06:10.</strong> Luis's pre-trip inspection on <strong>T-214</strong> failed one item: <em>"Lights — left low beam out"</em>. Issue <strong>#1182</strong> was opened. He reads <strong>412,880</strong> on the odometer.</p>
        <p>T-214's record shows a last meter reading of <strong>411,430 mi</strong> (Friday) and <strong>PM A</strong> due at 414,280 mi. The in-house shop can take it at 07:00.</p></div>
      ${simLabel('Not Fleetio\'s actual screen.')}
      <form class="sim-form" novalidate>
        <div class="sim-form__bar"><strong>New work order</strong><span class="badge badge--outline">Draft</span></div>
        <div class="sim-form__grid">
          <label class="field"><span>Vehicle</span><select class="select" name="unit"><option value="">Choose…</option><option value="T-214">T-214 · tractor</option><option value="V-5502">V-5502 · dry van trailer</option><option value="T-218">T-218 · tractor</option></select></label>
          <label class="field"><span>Meter reading (mi)</span><input class="input" name="meter" inputmode="numeric" autocomplete="off" placeholder="e.g. 400,000"></label>
          <label class="field"><span>Assigned to</span><select class="select" name="who"><option value="">Choose…</option><option value="shop">In-house shop</option><option value="road">Roadside vendor</option><option value="driver">Driver</option></select></label>
        </div>
        <fieldset class="sim-form__lines"><legend>Line items</legend>${lines.map(([k, t]) => `<label class="sim-check"><input type="checkbox" name="line" value="${k}"><span>${esc(t)}</span></label>`).join('')}</fieldset>
        <label class="sim-check"><input type="checkbox" name="resolve"><span>When completed, resolve issue #1182 on this work order</span></label>
        <label class="field field--full"><span>Notes</span><textarea class="input" name="notes" rows="2" placeholder="Complaint, what will be done, who approved…"></textarea></label>
        <div class="q__actions"><button type="submit" class="btn btn--primary">${icon('check')} Complete work order</button><button type="button" class="btn btn--ghost" data-sim-reset hidden>${icon('rotate')} Try again</button></div>
      </form>
      <div class="sim__out" aria-live="polite"></div></div>`;
    const form = $('form', el); const out = $('.sim__out', el);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const f = new FormData(form);
      const meter = Number(String(f.get('meter') || '').replace(/[^\d]/g, ''));
      const chosen = new Set(f.getAll('line'));
      const notes = String(f.get('notes') || '').toLowerCase();
      const checks = [
        [f.get('unit') === 'T-214', 'Vehicle', f.get('unit') === 'T-214' ? 'The defect is on the tractor, so the work goes on T-214.' : 'The failed item is on T-214, so the work order belongs on that tractor.'],
        [meter === READ, 'Meter reading', meter === READ ? 'Matches the odometer and is higher than Friday\'s reading.' : !meter ? 'Enter the odometer reading the driver gave you.' : meter < LAST ? `${fmtNum(meter)} is lower than the last reading (${fmtNum(LAST)}). Meters only go up, so check for a typo.` : meter - LAST > 5000 ? `${fmtNum(meter)} is ${fmtNum(meter - LAST)} mi more than Friday. That's not realistic over a weekend, so check for an extra digit.` : `Use the exact reading the driver gave: ${fmtNum(READ)}.`],
        [chosen.has('head') && chosen.has('pm') && !chosen.has('tires') && !chosen.has('paint'), 'Line items', chosen.has('head') && chosen.has('pm') && chosen.size === 2 ? 'The defect plus the PM that is due soon, so the truck stops once.' : !chosen.has('head') ? 'The headlamp is the reason for the work order. Include it.' : !chosen.has('pm') ? 'PM A is due in 1,400 mi. Adding it now saves a second shop visit.' : 'Only add work that\'s needed. Nothing reported points to the tires or the bumper.'],
        [f.get('who') === 'shop', 'Assigned to', f.get('who') === 'shop' ? 'The in-house shop can take it at 07:00.' : 'The shop has a slot at 07:00, and the truck is at the terminal, so there\'s no need for roadside service.'],
        [f.get('resolve') === 'on', 'Issue #1182', f.get('resolve') === 'on' ? 'Resolving it on the work order links the repair to the defect.' : 'Resolve the issue on the work order that fixes it, or it stays open forever.'],
        [/(low.?beam|headlamp|headlight|light)/.test(notes), 'Notes', /(low.?beam|headlamp|headlight|light)/.test(notes) ? 'The complaint is recorded.' : 'Write down the complaint, for example "Pre-trip: left low beam out", so the record makes sense later.']
      ];
      const ok = checks.filter((c) => c[0]).length;
      const all = ok === checks.length;
      out.innerHTML = `<div class="sim-result ${all ? 'is-ok' : ''}"><strong>${ok}/${checks.length} correct</strong><ul class="sim-fbs">${checks.map(([g, t, d]) => simFb(g, t, d)).join('')}</ul>
        ${all ? `<div class="sw-mock"><p class="sw-mock__label">${icon('file', 'icon--sm')}<span>Result — service history entry (educational mockup)</span></p><div class="sw-mock__card"><div class="sw-mock__head"><strong>T-214 · Service history</strong><span class="badge badge--success">Completed</span></div><dl>
          <div class="sw-mock__row"><dt>Work done</dt><dd>PM A service; left low-beam headlamp replaced</dd></div>
          <div class="sw-mock__row"><dt>Meter</dt><dd>${fmtNum(READ)} mi</dd></div>
          <div class="sw-mock__row"><dt>Issue</dt><dd>#1182 resolved</dd></div>
          <div class="sw-mock__row"><dt>Next PM A</dt><dd>${fmtNum(READ + PM_EVERY)} mi (example interval: every ${fmtNum(PM_EVERY)} mi)</dd></div></dl></div></div>` : ''}</div>`;
      if (all) { state.exercises['sim:workorder'] = 1; save(); }
      $('[data-sim-reset]', el).hidden = false;
    });
    $('[data-sim-reset]', el).addEventListener('click', () => { form.reset(); out.innerHTML = ''; $('[data-sim-reset]', el).hidden = true; });
  },

  /* ---- Alert queue (telematics concepts) ---- */
  'sim:alerts': (el) => {
    const ACTIONS = ['Maintenance: handle now', 'Maintenance: plan a repair', 'Safety team', 'Dispatch', 'No action needed'];
    const ROWS = [
      ['06:12', 'T-402', 'Engine fault', 'critical', 'Driver reports a red STOP ENGINE lamp and power dropping.', 0, 'A red stop lamp with power loss means the truck has to stop safely now. Arrange roadside help.'],
      ['06:40', 'T-311', 'Engine fault', 'warning', 'Check-engine lamp. Driver says power is normal; first time this code has appeared.', 1, 'Call the driver first, as you did. With no stop symptoms, plan a diagnosis that fits the load.'],
      ['06:55', 'T-208', 'Harsh braking', 'info', 'Car cut in front; driver says the brakes felt normal.', 2, 'A driving event with no mechanical symptom is for safety and coaching.'],
      ['07:05', 'T-119', 'DVIR defect', 'critical', 'Post-trip: "air leak at trailer glad hand". Unit parked at the terminal.', 0, 'An air leak is a brake-system defect. Repair it before the unit is dispatched again.'],
      ['07:20', 'T-122', 'Late arrival', 'warning', 'Running 45 min behind its delivery appointment.', 3, 'Appointments and customer updates belong to dispatch.'],
      ['07:31', 'T-230', 'Idling', 'info', 'Idled 25 minutes at a customer dock.', 4, 'Idle time is reviewed in fleet reports. There\'s nothing for maintenance to do.'],
      ['07:45', 'T-311', 'Odometer sync', 'info', 'Meter updated to 412,880 mi automatically.', 4, 'An automatic meter update needs no action. It keeps PM reminders accurate.']
    ];
    el.innerHTML = `<div class="sim">
      <div class="sim__head"><span class="sim__tag">${icon('alert', 'icon--sm')} Practice</span><h3>Work the morning alert queue</h3></div>
      <div class="sim__brief"><p>Seven alerts arrived between 06:00 and 08:00. Decide who should act on each one.</p></div>
      ${simLabel('Not Samsara\'s actual screen.')}
      <form class="sim-queue" novalidate>
        ${ROWS.map(([time, unit, type, tone, detail], i) => `<div class="sim-queue__row tone-${tone}"><div class="sim-queue__meta"><span class="num">${time}</span><strong>${unit}</strong><span class="badge badge--outline">${esc(type)}</span></div><p>${esc(detail)}</p>
          <label class="sr-only" for="sq-${i}">Action for ${unit} ${esc(type)}</label><select class="select" id="sq-${i}" name="a${i}"><option value="">Choose who acts…</option>${ACTIONS.map((a, k) => `<option value="${k}">${esc(a)}</option>`).join('')}</select><div class="sim-queue__fb" aria-live="polite"></div></div>`).join('')}
        <div class="q__actions"><button type="submit" class="btn btn--primary">${icon('check')} Check my decisions</button><span class="small muted" data-sim-status role="status"></span></div>
      </form></div>`;
    const form = $('form', el);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const rows = $$('.sim-queue__row', form);
      if (rows.some((r) => !$('select', r).value)) { $('[data-sim-status]', el).textContent = 'Choose an action for every alert first.'; return; }
      let ok = 0;
      rows.forEach((r, i) => {
        const v = +$('select', r).value; const good = v === ROWS[i][5]; if (good) ok++;
        r.classList.toggle('is-ok', good); r.classList.toggle('is-bad', !good);
        $('.sim-queue__fb', r).innerHTML = `${icon(good ? 'check-circle' : 'x-circle', 'icon--sm')}<span>${good ? '' : `<strong>${esc(ACTIONS[ROWS[i][5]])}.</strong> `}${esc(ROWS[i][6])}</span>`;
      });
      $('[data-sim-status]', el).textContent = `${ok}/${ROWS.length} correct${ok === ROWS.length ? ' — clean queue.' : ''}`;
      if (ok === ROWS.length) { state.exercises['sim:alerts'] = 1; save(); }
    });
  },

  /* ---- Dispatch board (TMS concepts) ---- */
  'sim:board': (el) => {
    const ROWS = [
      ['T-122', 'Ana P.', '77120', 'In transit', 'Delivery Tue 07:00 · Columbus', false, 'It\'s on a load delivering tomorrow morning. Pulling it now would blow the appointment.'],
      ['T-118', 'Marcus L.', '—', 'Available', 'Next load Wed 05:00', true, 'No load until Wednesday morning, so a 4-hour PM today won\'t affect any freight.'],
      ['T-305', 'Dee R.', '77131', 'Loading', 'Pickup window ends 14:00', false, 'It\'s loading right now. Taking it would strand the freight at the shipper.'],
      ['T-221', 'Sam K.', '77126', 'Dispatched', 'Pickup today 16:00 · 3 h away', false, 'It must leave within the hour to make its 16:00 pickup.']
    ];
    el.innerHTML = `<div class="sim">
      <div class="sim__head"><span class="sim__tag">${icon('route', 'icon--sm')} Practice</span><h3>Find a window for the PM</h3></div>
      <div class="sim__brief"><p>It's <strong>Monday 11:00</strong>. One tractor needs a <strong>4-hour PM</strong> in the shop today, and it isn't safety-critical. Which unit can go without hurting a load?</p></div>
      ${simLabel('Not ProTransport\'s actual screen.')}
      <div class="table-wrap"><table class="table sim-board"><thead><tr><th scope="col">Unit</th><th scope="col">Driver</th><th scope="col">Load</th><th scope="col">Status</th><th scope="col">Next commitment</th><th scope="col"><span class="sr-only">Choose</span></th></tr></thead>
        <tbody>${ROWS.map(([u, d, l, s, n], i) => `<tr><td><strong>${u}</strong></td><td>${esc(d)}</td><td class="num">${l}</td><td><span class="badge badge--outline">${s}</span></td><td>${esc(n)}</td><td><button type="button" class="btn btn--sm" data-pick="${i}">Send to shop</button></td></tr>`).join('')}</tbody></table></div>
      <div class="sim__out" aria-live="polite"></div></div>`;
    $$('[data-pick]', el).forEach((b) => b.addEventListener('click', () => {
      const r = ROWS[+b.dataset.pick];
      $('.sim__out', el).innerHTML = `<ul class="sim-fbs">${simFb(r[5], r[5] ? `${r[0]} is the right call` : `Not ${r[0]}`, r[6] + (r[5] ? ' Agree the time with dispatch and record the planned work.' : ''))}</ul>`;
      if (r[5]) { state.exercises['sim:board'] = 1; save(); }
    }));
  },

  /* ---- Reefer display (transport refrigeration concepts) ---- */
  'sim:reefer': (el) => {
    const QS = [
      { t: 'mc', q: 'What temperature is the unit told to hold?', o: ['30°F', '34°F', '35°F', 'It depends on the driver'], a: 1, e: 'SP is the setpoint, 34°F, which comes from the shipper\'s instructions.' },
      { t: 'mc', q: 'Is the cargo area holding temperature right now?', o: ['Yes. Return air (35°F) is close to the 34°F setpoint', 'No. Discharge air should equal the setpoint', 'No. The alarm means the unit has stopped', 'Can\'t tell without opening the doors'], a: 0, e: 'Return air is the air coming back from the load. Close to setpoint means the box is holding. Discharge air colder than setpoint is normal while cooling.' },
      { t: 'mc', q: 'Alarm 03 on Thermo King\'s alarm code chart is…', o: ['Low fuel', 'Check return air sensor', 'Door open', 'Defrost terminated by time'], a: 1, e: 'Code 03 is "Check (Control) Return Air Sensor", a check alarm. The chart\'s guidance is to monitor the temperature manually and report it.' },
      { t: 'wwyd', q: 'What should the coordinator do?', o: ['Tell the driver to lower the setpoint to 30°F to be safe', 'Ask for regular temperature readings and book a refrigeration-qualified service after delivery; tell dispatch', 'Ignore it; the unit is still running', 'Send the trailer to the nearest tire shop'], a: 1, e: 'Watch the cargo, plan qualified service, keep dispatch informed, and never change the setpoint against the shipper\'s instructions.' }
    ];
    el.innerHTML = `<div class="sim">
      <div class="sim__head"><span class="sim__tag">${icon('thermo', 'icon--sm')} Practice</span><h3>Read the reefer display</h3></div>
      <div class="sim__brief"><p>A driver sends you this photo of the reefer display at 02:15. The load is produce.</p></div>
      ${simLabel('Generic display for learning. Not a Thermo King controller screen.')}
      <div class="reefer-lcd" role="img" aria-label="Reefer display: setpoint 34 degrees, return air 35, discharge air 30, mode cycle-sentry cooling, alarm 03">
        <div class="reefer-lcd__main"><span class="reefer-lcd__k">SP</span><span class="reefer-lcd__v">34<small>°F</small></span></div>
        <div class="reefer-lcd__row"><span><b>RA</b> 35°F</span><span><b>DA</b> 30°F</span></div>
        <div class="reefer-lcd__row"><span>CYCLE-SENTRY</span><span>COOL</span><span class="reefer-lcd__alarm">${icon('alert', 'icon--sm')} 03</span></div>
      </div>
      <div class="sim-qs">${QS.map((q, i) => `<div class="q" data-qi="${i}">${questionHTML(q, nextId('rq'))}<div class="q__actions"><button type="button" class="btn btn--primary btn--sm" data-q-check>Check answer</button></div><div data-q-fb aria-live="polite"></div></div>`).join('')}</div>
      <p class="small muted mt-3">SP = setpoint · RA = return air · DA = discharge air.</p></div>`;
    let right = 0;
    $$('.q', el).forEach((qel) => $('[data-q-check]', qel).addEventListener('click', (e) => {
      const r = gradeQuestion(qel, QS[+qel.dataset.qi]);
      if (!r) { $('[data-q-fb]', qel).innerHTML = '<p class="small muted mt-2">Select an answer first.</p>'; return; }
      e.currentTarget.remove(); $('[data-q-fb]', qel).innerHTML = r.html;
      if (r.ok && ++right === QS.length) { state.exercises['sim:reefer'] = 1; save(); }
    }));
  }
};
const SIM_LIST = [
  ['sim:workorder', 'Build the work order', 'Maintenance software', 'fleetio'],
  ['sim:alerts', 'Work the alert queue', 'Telematics', 'samsara'],
  ['sim:board', 'Find a window for the PM', 'Dispatch board (TMS)', 'pro-transport'],
  ['sim:reefer', 'Read the reefer display', 'Transport refrigeration', 'thermo-king']
];

function viewSimulations() {
  const html = `<div class="page page--narrow">
    ${pageHead({ eyebrow: `${icon('flask', 'icon--sm')} Practice Lab`, title: 'Simulations', text: 'Practice the tasks a Maintenance Coordinator does every day: build a work order, triage alerts, read a dispatch board and a reefer display, close out driver inspection reports, order parts and start a warranty claim. These are simplified training screens with fictional units and numbers, not the vendors\' real interfaces.' })}
    <div class="sim-index">${SIM_LIST.map(([id, t, k], i) => `<a class="sim-index__item" href="#sim-${i}"><span class="num">${i + 1}</span><span><strong>${esc(t)}</strong><small>${esc(k)}</small></span>${state.exercises[id] ? icon('check-circle', 'icon--sm') : ''}</a>`).join('')}</div>
    ${SIM_LIST.map(([id, t, k, learn], i) => {
      // learn: a Software & Platforms page id, or { href, name } of a lesson
      const l = typeof learn === 'string' ? { href: swHref(SOFTWARE_MAP.get(learn)), name: SOFTWARE_MAP.get(learn).name } : learn;
      return `<section class="sim-sec" id="sim-${i}"><div class="widget" data-widget="${id}"></div><p class="small muted">Learn the concepts first: <a href="${l.href}">${esc(l.name)}</a>.</p></section>`;
    }).join('')}
  </div>`;
  return {
    html, title: 'Simulations', nav: 'simulations', bottom: 'practice', crumbs: [['Practice Lab', '#/practice'], ['Simulations']],
    // Standalone, each simulation is a top-level section: promote its title to h2.
    after: (v) => $$('.sim__head h3', v).forEach((h) => { const h2 = document.createElement('h2'); h2.innerHTML = h.innerHTML; h.replaceWith(h2); })
  };
}
/* ===========================================================================
   OPERATIONS SIMULATIONS — DVIR defects, a reman part with a core charge and
   a warranty claim. Same rules as the software simulations: simplified,
   clearly labeled, fictional units, prices and terms. Facts follow the
   lessons they practice (Beginner M9 L1, Advanced M9 L1, Expert M6).
   =========================================================================== */
const simNum = (v) => Number(String(v || '').replace(/[^\d.]/g, ''));
const simRadios = (name, legend, opts) => `<fieldset class="sim-form__lines"><legend>${legend}</legend>${opts.map((o, i) => `<label class="sim-check"><input type="radio" name="${name}" value="${i}"><span>${o}</span></label>`).join('')}</fieldset>`;
const simChecks = (name, legend, opts) => `<fieldset class="sim-form__lines"><legend>${legend}</legend>${opts.map((o, i) => `<label class="sim-check"><input type="checkbox" name="${name}" value="${i}"><span>${o}</span></label>`).join('')}</fieldset>`;

/* Shared shell: brief, label, form; grade(FormData) returns [ok, title, text]
   rows; done() is extra HTML shown when everything is right. */
function opsSim(el, { id, ic, title, brief, label, bar, form, grade, done = () => '' }) {
  el.innerHTML = `<div class="sim">
    <div class="sim__head"><span class="sim__tag">${icon(ic, 'icon--sm')} Practice</span><h3>${title}</h3></div>
    <div class="sim__brief">${brief}</div>
    ${simLabel(label)}
    <form class="sim-form" novalidate>
      <div class="sim-form__bar"><strong>${bar}</strong><span class="badge badge--outline">Practice</span></div>
      ${form}
      <div class="q__actions"><button type="submit" class="btn btn--primary">${icon('check')} Check my answers</button><button type="button" class="btn btn--ghost" data-sim-reset hidden>${icon('rotate')} Try again</button></div>
    </form>
    <div class="sim__out" aria-live="polite"></div></div>`;
  const f = $('form', el); const out = $('.sim__out', el); const again = $('[data-sim-reset]', el);
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    const checks = grade(new FormData(f));
    const ok = checks.filter((c) => c[0]).length; const all = ok === checks.length;
    out.innerHTML = `<div class="sim-result ${all ? 'is-ok' : ''}"><strong>${ok}/${checks.length} correct</strong><ul class="sim-fbs">${checks.map(([g, t, d]) => simFb(g, t, d)).join('')}</ul>${all ? done() : ''}</div>`;
    if (all) { state.exercises[id] = 1; save(); }
    again.hidden = false;
  });
  again.addEventListener('click', () => { f.reset(); out.innerHTML = ''; again.hidden = true; });
}

Object.assign(SIMS, {
  /* ---- DVIR defects (49 CFR 396.11 / 396.13) ---- */
  'sim:dvir': (el) => {
    const DEFECTS = [
      ['T-305', 'Left front turn signal out', 0, 'Lighting is on the post-trip report list and affects safe operation.'],
      ['T-305', 'Driver seat armrest loose', 1, 'A comfort item. It doesn\'t affect safe operation.'],
      ['TR-760', 'Bulge on the outer sidewall of a tire', 0, 'Tires are on the list, and a sidewall bulge can fail on the road.'],
      ['T-311', 'Horn does not sound', 0, 'The horn is on the post-trip report list and has to work.'],
      ['T-311', 'Dash clock shows the wrong time', 1, 'Nothing to do with safe operation. Schedule it.']
    ];
    opsSim(el, {
      id: 'sim:dvir', ic: 'clipboard', title: 'Close the DVIR loop', bar: 'Overnight DVIR review',
      label: 'Fictional units. Your safety department decides how defects are classified.',
      brief: `<p><strong>Tuesday 05:30.</strong> Three post-trip DVIRs came in overnight. All three units are booked for loads leaving at 07:00. Sort the defects, then close the loop for <strong>T-305</strong>.</p>`,
      form: `<div class="sim-dvir">${DEFECTS.map(([u, d], i) => `<label class="field sim-dvir__row"><span><strong>${u}</strong> · ${esc(d)}</span><select class="select" name="d${i}"><option value="">Choose…</option><option value="0">Repair before dispatch</option><option value="1">Schedule repair</option></select></label>`).join('')}</div>
        ${simRadios('cert', 'The yard technician replaced T-305\'s turn-signal bulb at 05:50. What has to happen before T-305 leaves?', ['Nothing more: the bulb works now', 'The repair is certified on the DVIR, and the 07:00 driver reviews the report and signs it', 'Dispatch signs the DVIR for the driver', 'The driver deletes the defect from the report'])}
        ${simRadios('keep', 'How long does the carrier keep the original DVIR and its certification?', ['24 hours', '3 months', 'Until the next PM', 'It can be thrown away once signed'])}`,
      grade: (f) => [
        ...DEFECTS.map(([u, d, a, why], i) => { const v = f.get('d' + i); return [v === String(a), `${u}: ${d}`, v === '' || v == null ? 'Choose how to handle it.' : (v === String(a) ? '' : (a === 0 ? 'Repair before dispatch. ' : 'Schedule it. ')) + why]; }),
        [f.get('cert') === '1', 'Closing the loop', f.get('cert') === '1' ? 'The repair is certified on the report, and the next driver reviews and signs it before driving (49 CFR 396.11 and 396.13).' : 'A fixed defect still has to be certified on the DVIR, and the next driver must review the report and sign before driving (49 CFR 396.11 and 396.13).'],
        [f.get('keep') === '1', 'Record keeping', f.get('keep') === '1' ? 'The carrier keeps the original report and certification for three months (49 CFR 396.11).' : 'The carrier keeps the original DVIR and its certification for three months from the date it was prepared (49 CFR 396.11).']
      ],
      done: () => '<p class="small mt-3">T-305 and T-311 can leave once their repairs are certified and the drivers sign. TR-760 needs the tire replaced first. The armrest and the clock go on the schedule.</p>'
    });
  },

  /* ---- Reman part with a core charge ---- */
  'sim:core': (el) => {
    const PART = 285, CORE = 90;
    opsSim(el, {
      id: 'sim:core', ic: 'dollar', title: 'Order a part with a core charge', bar: 'Parts order · T-118',
      label: 'Fictional supplier, prices and return terms.',
      brief: `<p><strong>T-118</strong>'s alternator failed. The unit is out of warranty. Your parts supplier quotes:</p>
        <ul><li>New OEM alternator: <strong>$610</strong>, arrives in 2 days</li><li>Remanufactured alternator: <strong>$${PART}</strong> plus a <strong>$${CORE} core charge</strong>, in stock today. The core charge is refunded when the old alternator is returned complete and undamaged within 30 days.</li></ul>
        <p>Your manager approves the reman part.</p>`,
      form: `<div class="sim-form__grid">
          <label class="field"><span>Paid at pickup ($)</span><input class="input" name="paid" inputmode="decimal" autocomplete="off"></label>
          <label class="field"><span>Credit when the core is accepted ($)</span><input class="input" name="credit" inputmode="decimal" autocomplete="off"></label>
          <label class="field"><span>Final parts cost ($)</span><input class="input" name="net" inputmode="decimal" autocomplete="off"></label>
        </div>
        ${simRadios('old', 'The shop removed the failed alternator. What happens to it?', ['Scrap it: it\'s broken', 'Keep it on the shelf as a spare', 'Return it to the supplier within 30 days, complete, in the reman part\'s box, tagged with the invoice number', 'Send it home with the driver'])}
        ${simRadios('track', 'What goes on the work order?', ['Only the $' + PART + ' part price', 'The part and the core charge, marked "core return pending", until the credit shows up', 'Nothing until the supplier invoice arrives'])}`,
      grade: (f) => {
        const paid = simNum(f.get('paid')), credit = simNum(f.get('credit')), net = simNum(f.get('net'));
        return [
          [paid === PART + CORE, 'Paid at pickup', paid === PART + CORE ? `$${PART} part + $${CORE} core charge = $${PART + CORE}.` : `You pay the part and the core charge up front: $${PART} + $${CORE} = $${PART + CORE}.`],
          [credit === CORE, 'Core credit', credit === CORE ? 'The full core charge comes back when the core is accepted.' : `The credit is the core charge: $${CORE}, if the core is accepted.`],
          [net === PART, 'Final cost', net === PART ? `$${PART + CORE} − $${CORE} = $${PART}, but only if the core goes back.` : `After the credit: $${PART + CORE} − $${CORE} = $${PART}. Without the return, the alternator really cost $${PART + CORE}.`],
          [f.get('old') === '2', 'The old alternator', f.get('old') === '2' ? 'Returned on time and complete, it earns the credit. Damaged or incomplete cores can lose some or all of it.' : 'The failed alternator is the core: it is worth $' + CORE + ' back. Return it complete, on time and labeled so the supplier can match it to your invoice.'],
          [f.get('track') === '1', 'Work order', f.get('track') === '1' ? 'Marking the return as pending keeps the credit from being forgotten.' : 'Record the core charge and mark the return as pending. Forgotten cores are money the fleet never gets back.']
        ];
      },
      done: () => `<p class="small mt-3">Done right, the reman part saved $${610 - PART} against the new one and got the truck back today.</p>`
    });
  },

  /* ---- Warranty claim ---- */
  'sim:warranty': (el) => {
    const RO_MI = 402300, NOW_MI = 431900;
    opsSim(el, {
      id: 'sim:warranty', ic: 'shield', title: 'Start a warranty claim', bar: 'Repair request · T-126',
      label: 'Fictional shop, repair order and warranty terms.',
      brief: `<p><strong>Monday, September 28.</strong> The driver of <strong>T-126</strong> reports coolant dripping from the front of the engine. The odometer reads <strong>${fmtNum(NOW_MI)} mi</strong>.</p>
        <p>History: on <strong>March 2</strong>, Delta Diesel replaced the water pump on <strong>RO 5120</strong> at <strong>${fmtNum(RO_MI)} mi</strong>. Their invoice states a <strong>12-month, unlimited-mile parts and labor warranty</strong>.</p>`,
      form: `<div class="sim-form__grid">
          <label class="field"><span>Miles since the earlier repair</span><input class="input" name="miles" inputmode="numeric" autocomplete="off"></label>
          <label class="field"><span>Inside the shop's warranty?</span><select class="select" name="inside"><option value="">Choose…</option><option value="yes">Yes</option><option value="no">No</option></select></label>
        </div>
        ${simRadios('first', 'What do you do first?', ['Send T-126 to the closest shop and approve a new pump', 'Call Delta Diesel, give them RO 5120, and ask them to diagnose under their warranty and confirm coverage before any repair', 'Have the driver top up coolant and keep running until the next PM', 'Wait for the invoice, then ask for a refund'])}
        ${simChecks('pack', 'What goes in the claim? Pick everything that belongs.', ['Unit number and full VIN', 'Odometer reading at the failure', 'Original repair order RO 5120 and its date', 'A factual description: coolant leak at the water pump, when it started', 'Ask the shop to keep the failed pump', 'The driver\'s home address', 'Last month\'s fuel receipts'])}`,
      grade: (f) => {
        const miles = simNum(f.get('miles')); const pack = new Set(f.getAll('pack'));
        const want = ['0', '1', '2', '3', '4']; const extra = ['5', '6'].filter((x) => pack.has(x));
        const missing = want.filter((x) => !pack.has(x));
        return [
          [miles === NOW_MI - RO_MI, 'Miles since the repair', miles === NOW_MI - RO_MI ? `${fmtNum(NOW_MI)} − ${fmtNum(RO_MI)} = ${fmtNum(NOW_MI - RO_MI)} mi.` : `${fmtNum(NOW_MI)} − ${fmtNum(RO_MI)} = ${fmtNum(NOW_MI - RO_MI)} mi.`],
          [f.get('inside') === 'yes', 'Coverage', f.get('inside') === 'yes' ? 'About 7 months after the repair, and the warranty has no mileage limit.' : 'March 2 to September 28 is about 7 months, inside 12 months, and the miles are unlimited. It is worth claiming.'],
          [f.get('first') === '1', 'First step', f.get('first') === '1' ? 'Checking coverage before work starts keeps the claim possible. Another shop\'s repair usually can\'t be claimed afterwards.' : 'Contact the shop that did the repair first, with the RO number, and confirm coverage before anyone replaces the pump. Claims are hard to recover once someone else does the work.'],
          [!missing.length && !extra.length, 'Claim packet', !missing.length && !extra.length ? 'Unit, meter, the original RO, a factual failure description and the failed part.' : [missing.length ? 'Missing: ' + missing.map((x) => ['the unit and VIN', 'the odometer at failure', 'the original RO', 'the failure description', 'keeping the failed part'][+x]).join(', ') + '.' : '', extra.length ? 'Leave out personal details and unrelated records.' : ''].filter(Boolean).join(' ')]
        ];
      },
      done: () => '<p class="small mt-3">Log the claim and its outcome. Warranty recovered is a number worth tracking.</p>'
    });
  }
});

SIM_LIST.push(
  ['sim:dvir', 'Close the DVIR loop', 'Driver inspections', { href: '#/lesson/beginner/m9/l1', name: 'Driver Inspections and the DVIR Loop' }],
  ['sim:core', 'Order a part with a core charge', 'Parts', { href: '#/lesson/advanced/m9/l1', name: 'Parts Sourcing: OEM, Aftermarket and Remanufactured' }],
  ['sim:warranty', 'Start a warranty claim', 'Warranty', { href: '#/lesson/expert/m6/l2', name: 'Warranty Communication and Documentation' }]
);

/* ===========================================================================
   TRAINER GROUPS + VERIFIABLE CERTIFICATES (Supabase)
   - #/trainer: create a group (join code), see members' progress; or join a
     group with a code. Row-level security lets an owner read only their own
     members' progress; joining goes through join_group(code).
   - Assignments: an owner assigns modules (optional due date) to a group;
     members see them on the dashboard. The owner can download the group's
     progress as CSV.
   - Certificates: issue_certificate(track) records a certificate when the
     account's synced progress shows the final as passed; #/verify/<code>
     lets anyone confirm it through verify_certificate(code).
   =========================================================================== */
const VERIFY_BASE = 'https://mcfleet-three.vercel.app/#/verify/';

/* Summarize someone's synced progress state for the trainer table. */
function progressSummary(st) {
  st = st || {};
  const done = st.completed || {}; const finals = st.finals || {};
  const tracks = TRACKS.map((t) => {
    const keys = t.modules.flatMap((m) => m.lessons.map((l) => `${t.id}.${m.id}.${l.id}`));
    return { t, done: keys.filter((k) => done[k]).length, total: keys.length, passed: !!(finals[t.id] || {}).passed, score: (finals[t.id] || {}).score };
  });
  const qs = Object.values(st.quizzes || {}).map((q) => q.best).filter((x) => typeof x === 'number');
  const days = (st.days || []).slice().sort();
  return { tracks, lessons: tracks.reduce((a, x) => a + x.done, 0), total: tracks.reduce((a, x) => a + x.total, 0), quiz: qs.length ? qs.reduce((a, b) => a + b, 0) / qs.length : null, last: days[days.length - 1] || null, missed: Object.keys(st.missed || {}).length };
}

/* ---------- Assignments ---------- */
function moduleByKey(k) {
  const [tid, mid] = String(k).split('.'); const t = TRACK_BY_ID[tid];
  const m = t && t.modules.find((x) => x.id === mid);
  return m ? { t, m } : null;
}
const moduleLabel = (x) => `${x.t.level} · M${x.m.id.slice(1)} ${x.m.title}`;
function moduleDoneIn(st, x) {
  const c = (st || {}).completed || {};
  return x.m.lessons.every((l) => c[`${x.t.id}.${x.m.id}.${l.id}`]);
}
const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
const dueDate = (d) => new Date(`${d}T00:00`).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' });
function dueHTML(a, done) {
  if (!a.due) return '<span class="small muted">no due date</span>';
  const late = !done && a.due < todayISO();
  return `<span class="small ${late ? 'tr-late' : 'muted'}">${late ? 'overdue · ' : 'due '}${dueDate(a.due)}</span>`;
}
/* Assigned modules first unfinished, then by due date (no date last). */
const byDue = (a, b) => (a.done - b.done) || (a.due || '9999').localeCompare(b.due || '9999');

/* Dashboard card: modules a learner's trainers assigned. Quiet when signed
   out, offline, or nothing is assigned. */
async function dashAssigned(el) {
  if (!cloudHasSession()) return;
  try {
    await cloudInit(); if (!CLOUD.user) return;
    const { data, error } = await CLOUD.client.from('assignments').select('module,due,groups(name,owner)');
    if (error) throw error;
    const rows = (data || []).filter((a) => a.groups && a.groups.owner !== CLOUD.user.id)
      .map((a) => { const x = moduleByKey(a.module); return x && Object.assign({}, a, { x, done: moduleDoneIn(state, x) }); }).filter(Boolean).sort(byDue);
    if (!rows.length || !el.isConnected) return;
    const left = rows.filter((a) => !a.done).length;
    el.innerHTML = `<section class="card dash-assigned" aria-labelledby="asgTitle">
      <div class="card__head"><h2 id="asgTitle">Assigned to you</h2><span class="small muted">${left ? `${left} to do` : 'All done'}</span></div>
      <ul class="dash-assigned__list">${rows.map((a) => {
        const next = a.x.m.lessons.find((l) => !isDone(`${a.x.t.id}.${a.x.m.id}.${l.id}`)) || a.x.m.lessons[0];
        return `<li class="${a.done ? 'is-done' : ''}">${icon(a.done ? 'check-circle' : 'book', 'icon--sm')}<a class="grow" href="${lessonHref({ t: a.x.t, m: a.x.m, l: next })}"><strong>${esc(moduleLabel(a.x))}</strong><span class="small muted"> · ${esc(a.groups.name)}</span></a>${dueHTML(a, a.done)}</li>`;
      }).join('')}</ul></section>`;
  } catch (e) { /* the dashboard works without it */ }
}

/* The name the learner set in the academy (synced with their progress), so a
   rename shows up for the trainer; the name saved when they joined is the
   fallback for learners whose progress hasn't synced. */
function learnerName(m, prog) {
  const st = (prog.get(m.user_id) || {}).state;
  return String((st && st.name) || '').trim() || m.display_name || 'Learner';
}

/* ---------- Group weak spots ---------- */
const WEAK_QUIZ = 0.7; // module quiz average below this counts as a weak spot
/* Modules where the group struggles: learners with questions still on their
   review list in the module, and the group's quiz average there. */
function groupWeakSpots(learners, prog) {
  const by = new Map();
  const get = (k) => { if (!by.has(k)) { const x = moduleByKey(k); if (!x) return null; by.set(k, { k, x, who: new Set(), n: 0, scores: [] }); } return by.get(k); };
  learners.forEach((m) => {
    const st = (prog.get(m.user_id) || {}).state || {};
    Object.keys(st.missed || {}).forEach((id) => {
      const mm = id.match(/^(\w+)\.(m\d+)\.\w+#/); const g = mm && get(`${mm[1]}.${mm[2]}`);
      if (g) { g.who.add(m.user_id); g.n++; }
    });
    Object.entries(st.quizzes || {}).forEach(([k, q]) => { if (q && typeof q.best === 'number' && moduleByKey(k)) get(k).scores.push(q.best); });
  });
  return [...by.values()]
    .map((g) => Object.assign(g, { avg: g.scores.length ? g.scores.reduce((a, b) => a + b, 0) / g.scores.length : null }))
    .filter((g) => g.who.size || (g.avg != null && g.avg < WEAK_QUIZ))
    .sort((a, b) => b.who.size - a.who.size || b.n - a.n || (a.avg ?? 1) - (b.avg ?? 1))
    .slice(0, 5);
}
function groupWeakHTML(learners, prog, assigned) {
  const spots = groupWeakSpots(learners, prog);
  if (!spots.length) return '';
  return `<div class="tr-weak">
    <h4>Where the group struggles</h4>
    <ul class="tr-assigned">${spots.map((g) => `<li>${icon('target', 'icon--sm')}<span class="grow"><strong>${esc(moduleLabel(g.x))}</strong><span class="small muted tr-weak__why">${[
      g.who.size ? `${g.who.size} of ${learners.length} learner${learners.length === 1 ? '' : 's'} with questions to review (${g.n})` : '',
      g.avg != null ? `quiz average ${pct(g.avg)}%` : ''
    ].filter(Boolean).join(' · ')}</span></span>
      <a class="btn btn--sm btn--ghost" href="#/cheatsheet/${g.x.t.id}/${g.x.m.id}">${icon('file', 'icon--sm')} Cheat sheet</a>
      ${assigned.includes(g.k) ? '<span class="small muted">Assigned</span>' : `<button type="button" class="btn btn--sm btn--ghost" data-assign-pick="${g.k}">${icon('plus', 'icon--sm')} Assign</button>`}</li>`).join('')}</ul>
    <p class="small muted">From questions still on learners' review lists and their module quiz scores.</p>
  </div>`;
}

/* ---------- CSV export ---------- */
function csvCell(v) {
  let s = v == null ? '' : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`; // keep spreadsheets from running it as a formula
  return `"${s.replace(/"/g, '""')}"`;
}
function groupCSV(g, members, prog, assigns) {
  const mods = assigns.map((a) => ({ a, x: moduleByKey(a.module) })).filter((y) => y.x);
  const head = ['Learner', 'Joined', 'Last active', 'Lessons completed', 'Lessons total', ...TRACKS.flatMap((t) => [`${t.level} lessons %`, `${t.level} final`]), 'Quiz average %', 'Questions to review', 'Assigned modules done', ...mods.map((y) => `Assigned: ${moduleLabel(y.x)}${y.a.due ? ` (due ${y.a.due})` : ''}`)];
  const rows = members.map((m) => {
    const st = (prog.get(m.user_id) || {}).state; const s = progressSummary(st);
    return [learnerName(m, prog), m.joined_at.slice(0, 10), s.last || '', s.lessons, s.total,
      ...s.tracks.flatMap((x) => [pct(x.total ? x.done / x.total : 0), x.passed ? `passed ${pct(x.score)}%` : '']),
      s.quiz == null ? '' : pct(s.quiz), s.missed, `${mods.filter((y) => moduleDoneIn(st, y.x)).length}/${mods.length}`,
      ...mods.map((y) => (moduleDoneIn(st, y.x) ? 'done' : 'not done'))];
  });
  return '\ufeff' + [head, ...rows].map((r) => r.map(csvCell).join(',')).join('\r\n') + '\r\n';
}
function downloadText(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a'); a.href = url; a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function viewTrainer() {
  const signIn = stateBlock({ ic: 'users', title: 'Sign in to use groups', text: 'Groups need an account so progress can be shared with your trainer. Signing in also keeps your progress in sync across devices.', action: '<button type="button" class="btn btn--primary" data-cloud="in">Sign in</button>' });
  // A saved session may still be restoring when the page opens: wait for it.
  const pending = !!CLOUD.user || cloudHasSession();
  const html = `<div class="page tr">
    ${pageHead({ eyebrow: `${icon('users', 'icon--sm')} Academy`, title: 'Trainer groups', text: 'Training a team? Create a group and share its join code. You\'ll see each member\'s progress, quiz average and certificates. Joining a group? Enter the code your trainer gave you.' })}
    <div id="trRoot">${pending ? '<div class="skeleton" style="height:180px;border-radius:12px"></div>' : signIn}</div>
  </div>`;
  return {
    html, title: 'Trainer groups', nav: 'trainer', crumbs: [['Trainer groups']],
    after: (v) => {
      if (!pending) return;
      const root = $('#trRoot', v);
      cloudInit().catch(() => {}).then(() => { if (!root.isConnected) return; if (CLOUD.user) trainerLoad(root); else root.innerHTML = signIn; });
    }
  };
}

async function trainerLoad(root) {
  try {
    await cloudInit();
    const db = CLOUD.client; const me = CLOUD.user.id;
    const [owned, joined] = await Promise.all([
      db.from('groups').select('id,name,join_code,created_at').eq('owner', me).order('created_at'),
      db.from('group_members').select('group_id, joined_at, groups(name)').eq('user_id', me)
    ]);
    if (owned.error || joined.error) throw owned.error || joined.error;
    const groups = owned.data || [];
    const memberships = (joined.data || []).filter((m) => !groups.some((g) => g.id === m.group_id));
    let members = []; let progress = [];
    if (groups.length) {
      const r = await db.from('group_members').select('group_id,user_id,display_name,joined_at').in('group_id', groups.map((g) => g.id)).order('joined_at');
      if (r.error) throw r.error; members = r.data || [];
      const ids = [...new Set(members.map((m) => m.user_id))];
      if (ids.length) { const p = await db.from('progress').select('user_id,state,updated_at').in('user_id', ids); if (p.error) throw p.error; progress = p.data || []; }
    }
    const prog = new Map(progress.map((p) => [p.user_id, p]));
    const gids = [...groups.map((g) => g.id), ...memberships.map((m) => m.group_id)];
    let assigns = [];
    if (gids.length) { const a = await db.from('assignments').select('id,group_id,module,due').in('group_id', gids); if (a.error) throw a.error; assigns = a.data || []; }
    const forGroup = (id) => assigns.filter((a) => a.group_id === id);
    root._tr = { groups, members, prog, forGroup };
    root.innerHTML = `
      <section class="tr-sec"><div class="section-head"><div><span class="eyebrow">Your groups</span><h2>Groups you run</h2></div></div>
        <form class="tr-create card card--pad" novalidate><label class="field grow"><span>New group name</span><input class="input" name="name" maxlength="80" placeholder="e.g. Night shift coordinators" required></label><button type="submit" class="btn btn--primary">${icon('plus')} Create group</button></form>
        ${groups.length ? groups.map((g) => trainerGroupHTML(g, members.filter((m) => m.group_id === g.id), prog, me, forGroup(g.id))).join('') : '<p class="muted small mt-3">You don\'t run any groups yet.</p>'}
      </section>
      <section class="tr-sec"><div class="section-head"><div><span class="eyebrow">As a learner</span><h2>Join a group</h2></div></div>
        <form class="tr-join card card--pad" novalidate>
          <label class="field grow"><span>Join code from your trainer</span><input class="input mono" name="code" maxlength="8" placeholder="e.g. K7MPQ2XA" autocomplete="off" required></label>
          <button type="submit" class="btn btn--primary">${icon('users')} Join</button>
          <p class="small muted tr-consent">${icon('info', 'icon--sm')} When you join, the group's trainer can see your name, your academy progress, quiz scores and certificates. You can leave at any time.</p>
        </form>
        ${memberships.length ? `<ul class="tr-memberships">${memberships.map((m) => {
          const mine = forGroup(m.group_id).map((a) => { const x = moduleByKey(a.module); return x && Object.assign({}, a, { x, done: moduleDoneIn(state, x) }); }).filter(Boolean).sort(byDue);
          return `<li><div class="tr-memberships__row">${icon('users', 'icon--sm')}<span class="grow"><strong>${esc((m.groups || {}).name || 'Group')}</strong><small class="muted"> · joined ${new Date(m.joined_at).toLocaleDateString()}</small></span><button type="button" class="btn btn--sm btn--ghost" data-leave="${m.group_id}">Leave</button></div>
            ${mine.length ? `<ul class="tr-assigned">${mine.map((a) => `<li class="${a.done ? 'is-done' : ''}">${icon(a.done ? 'check-circle' : 'book', 'icon--sm')}<span class="grow">${esc(moduleLabel(a.x))}</span>${dueHTML(a, a.done)}</li>`).join('')}</ul>` : ''}</li>`;
        }).join('')}</ul>` : ''}
      </section>`;
    trainerWire(root);
  } catch (e) {
    console.warn('Trainer groups failed:', e && e.message);
    root.innerHTML = stateBlock({ ic: 'alert', title: 'Groups aren\'t available right now', text: navigator.onLine ? 'Please try again in a moment.' : 'Connect to the internet to use groups.', error: true, action: '<button type="button" class="btn" data-reload>Try again</button>' });
  }
}

function trainerGroupHTML(g, members, prog, me, assigns) {
  const learners = members.filter((m) => m.user_id !== me);
  const mods = assigns.map((a) => Object.assign({}, a, { x: moduleByKey(a.module) })).filter((a) => a.x).sort((a, b) => (a.due || '9999').localeCompare(b.due || '9999'));
  const doneBy = (a) => learners.filter((m) => moduleDoneIn((prog.get(m.user_id) || {}).state, a.x)).length;
  const rows = learners.map((m) => {
    const p = prog.get(m.user_id); const s = progressSummary(p && p.state);
    const asg = mods.filter((a) => moduleDoneIn(p && p.state, a.x)).length;
    const late = mods.filter((a) => a.due && a.due < todayISO() && !moduleDoneIn(p && p.state, a.x)).length;
    return `<tr><td><div class="tr-who">${avatarHTML(36, '', p && p.state, learnerName(m, prog))}<div><strong>${esc(learnerName(m, prog))}</strong><div class="small muted">joined ${new Date(m.joined_at).toLocaleDateString()}</div></div></div></td>
      <td><div class="tr-bar">${progressBar(s.total ? s.lessons / s.total : 0, { cls: 'progress--sm', label: 'Lessons completed' })}<span class="num small">${s.lessons}/${s.total}</span></div></td>
      <td>${s.tracks.map((x) => `<span class="tr-track ${x.passed ? 'is-passed' : ''}" title="${esc(x.t.level)}: ${x.done}/${x.total} lessons${x.passed ? ` · final ${pct(x.score)}%` : ''}" style="--c:${x.t.color}">${x.passed ? icon('award', 'icon--sm') : ''}${esc(x.t.level.slice(0, 3))} ${pct(x.total ? x.done / x.total : 0)}%</span>`).join('')}</td>
      ${mods.length ? `<td class="num small">${asg}/${mods.length}${late ? `<div class="tr-late">${late} overdue</div>` : ''}</td>` : ''}
      <td class="num">${s.quiz == null ? '—' : pct(s.quiz) + '%'}</td>
      <td class="num">${s.missed}</td>
      <td class="small">${s.last ? new Date(s.last).toLocaleDateString() : '—'}</td>
      <td><button type="button" class="btn btn--sm btn--ghost" data-remove="${g.id}|${m.user_id}" aria-label="Remove ${esc(learnerName(m, prog))}">${icon('x')}</button></td></tr>`;
  });
  return `<article class="card tr-group">
    <header class="tr-group__head"><div><h3>${esc(g.name)}</h3><span class="small muted">${rows.length} member${rows.length === 1 ? '' : 's'}</span></div>
      <div class="tr-code"><span class="small muted">Join code</span><strong class="mono">${esc(g.join_code)}</strong><button type="button" class="btn-icon" data-copy-code="${esc(g.join_code)}" aria-label="Copy join code">${icon('copy', 'icon--sm')}</button></div></header>
    ${groupWeakHTML(learners, prog, mods.map((a) => a.module))}
    <div class="tr-assign">
      <h4>Assigned modules</h4>
      ${mods.length ? `<ul class="tr-assigned">${mods.map((a) => `<li>${icon('book', 'icon--sm')}<span class="grow">${esc(moduleLabel(a.x))}</span>${dueHTML(a, false)}${learners.length ? `<span class="num small muted">${doneBy(a)}/${learners.length} done</span>` : ''}<button type="button" class="btn-icon" data-unassign="${a.id}" aria-label="Remove assignment ${esc(moduleLabel(a.x))}">${icon('x', 'icon--sm')}</button></li>`).join('')}</ul>` : '<p class="small muted">Nothing assigned yet. Members see assigned modules on their dashboard.</p>'}
      <form class="tr-assign__form" data-group="${g.id}" novalidate>
        <label class="field grow"><span>Module</span><select class="select" name="module" required><option value="">Choose a module…</option>${TRACKS.map((t) => `<optgroup label="${esc(t.level)}">${t.modules.map((m) => { const k = `${t.id}.${m.id}`; return mods.some((a) => a.module === k) ? '' : `<option value="${k}">M${m.id.slice(1)} ${esc(m.title)}</option>`; }).join('')}</optgroup>`).join('')}</select></label>
        <label class="field"><span>Due date (optional)</span><input class="input" type="date" name="due" min="${todayISO()}"></label>
        <button type="submit" class="btn btn--primary">${icon('plus')} Assign</button>
      </form>
    </div>
    ${rows.length ? `<div class="table-wrap"><table class="table tr-table"><thead><tr><th scope="col">Learner</th><th scope="col">Lessons</th><th scope="col">Tracks</th>${mods.length ? '<th scope="col">Assigned</th>' : ''}<th scope="col">Quiz avg</th><th scope="col">To review</th><th scope="col">Last active</th><th scope="col"><span class="sr-only">Remove</span></th></tr></thead><tbody>${rows.join('')}</tbody></table></div>`
      : `<p class="small muted tr-empty">No members yet. Share the join code: learners open <strong>Trainer groups</strong>, sign in and enter it.</p>`}
    <footer class="tr-group__foot">${rows.length ? `<button type="button" class="btn btn--sm btn--ghost" data-csv="${g.id}">${icon('download', 'icon--sm')} Download CSV</button>` : ''}<button type="button" class="btn btn--sm btn--ghost" data-delete-group="${g.id}">${icon('x-circle', 'icon--sm')} Delete group</button></footer>
  </article>`;
}

function trainerWire(root) {
  const db = CLOUD.client;
  const reload = () => trainerLoad(root);
  const fail = (e, title) => { console.warn(e && e.message); toast({ kind: 'warning', title, text: (e && /code/i.test(e.message)) ? e.message : 'Please try again.' }); };
  $('.tr-create', root).addEventListener('submit', async (e) => {
    e.preventDefault(); const name = e.target.name.value.trim(); if (!name) return;
    const { error } = await db.from('groups').insert({ name });
    if (error) return fail(error, 'Couldn\'t create the group');
    toast({ kind: 'success', title: 'Group created', text: 'Share the join code with your learners.' }); reload();
  });
  $('.tr-join', root).addEventListener('submit', async (e) => {
    e.preventDefault(); const code = e.target.code.value.trim(); if (!code) return;
    await cloudPush(); // make sure the trainer sees current progress
    const { data, error } = await db.rpc('join_group', { p_code: code });
    if (error) return toast({ kind: 'warning', title: 'Couldn\'t join', text: /No group/.test(error.message) ? 'No group has that code. Check it with your trainer.' : 'Please try again.' });
    toast({ kind: 'success', title: 'Joined', text: `You're in "${(data && data[0] && data[0].group_name) || 'the group'}".` }); reload();
  });
  $$('[data-leave]', root).forEach((b) => b.addEventListener('click', async () => {
    const { error } = await db.from('group_members').delete().eq('group_id', b.dataset.leave).eq('user_id', CLOUD.user.id);
    if (error) return fail(error, 'Couldn\'t leave the group');
    toast({ title: 'Left the group' }); reload();
  }));
  $$('[data-remove]', root).forEach((b) => b.addEventListener('click', async () => {
    const [gid, uid] = b.dataset.remove.split('|');
    const { error } = await db.from('group_members').delete().eq('group_id', gid).eq('user_id', uid);
    if (error) return fail(error, 'Couldn\'t remove the learner');
    toast({ title: 'Learner removed' }); reload();
  }));
  $$('[data-delete-group]', root).forEach((b) => b.addEventListener('click', () => openModal({
    title: 'Delete this group?', body: '<p>Members are removed from the group and the join code stops working. Their own progress is not affected.</p>',
    foot: '<button class="btn btn--ghost" data-close>Cancel</button><button class="btn btn--danger" id="doDelGroup">Delete group</button>',
    onOpen: (m, close) => $('#doDelGroup', m).addEventListener('click', async () => {
      const { error } = await db.from('groups').delete().eq('id', b.dataset.deleteGroup); close();
      if (error) return fail(error, 'Couldn\'t delete the group');
      toast({ title: 'Group deleted' }); reload();
    })
  })));
  $$('.tr-assign__form', root).forEach((f) => f.addEventListener('submit', async (e) => {
    e.preventDefault(); const module = f.module.value; if (!module) { f.module.focus(); return; }
    const { error } = await db.from('assignments').insert({ group_id: f.dataset.group, module, due: f.due.value || null });
    if (error) return fail(error, 'Couldn\'t assign the module');
    toast({ kind: 'success', title: 'Module assigned', text: 'Members see it on their dashboard.' }); reload();
  }));
  // "Assign" on a weak spot: pick the module in this group's form so a due date can be added.
  $$('[data-assign-pick]', root).forEach((b) => b.addEventListener('click', () => {
    const f = $('.tr-assign__form', b.closest('.tr-group')); f.module.value = b.dataset.assignPick;
    f.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'center' }); f.due.focus();
  }));
  $$('[data-unassign]', root).forEach((b) => b.addEventListener('click', async () => {
    const { error } = await db.from('assignments').delete().eq('id', b.dataset.unassign);
    if (error) return fail(error, 'Couldn\'t remove the assignment');
    toast({ title: 'Assignment removed' }); reload();
  }));
  $$('[data-csv]', root).forEach((b) => b.addEventListener('click', () => {
    const d = root._tr; const g = d.groups.find((x) => x.id === b.dataset.csv); if (!g) return;
    const members = d.members.filter((m) => m.group_id === g.id && m.user_id !== CLOUD.user.id);
    const name = `${g.name.replace(/[^\w -]+/g, '').trim().replace(/\s+/g, '-') || 'group'}-progress-${todayISO()}.csv`;
    downloadText(name, groupCSV(g, members, d.prog, d.forGroup(g.id)), 'text/csv;charset=utf-8');
  }));
  $$('[data-copy-code]', root).forEach((b) => b.addEventListener('click', () => {
    // writeText rejects (not throws) when the browser blocks the clipboard, so only confirm on success.
    const failed = () => toast({ kind: 'warning', title: 'Couldn’t copy', text: `Join code: ${b.dataset.copyCode}` });
    try { navigator.clipboard.writeText(b.dataset.copyCode).then(() => toast({ kind: 'success', title: 'Join code copied', timeout: 2000 }), failed); } catch (e) { failed(); }
  }));
}

/* ---------- Certificates ---------- */
async function issueCertificate(t) {
  await cloudInit();
  clearTimeout(CLOUD.timer); await cloudPush(); // the server checks the synced copy
  const { data, error } = await CLOUD.client.rpc('issue_certificate', { p_track: t.id });
  if (error) throw error;
  state.certIds = Object.assign({}, state.certIds, { [t.id]: data }); save();
  return data;
}

function viewVerify(code) {
  const html = `<div class="page page--narrow vf">
    ${pageHead({ eyebrow: `${icon('award', 'icon--sm')} Certificates`, title: 'Check a certificate', text: 'Enter the verification code printed on an MC Academy certificate to confirm it was issued.' })}
    <form class="vf-form card card--pad" novalidate><label class="field grow"><span>Verification code</span><input class="input mono" name="code" maxlength="10" value="${esc(code || '')}" placeholder="10 characters" autocomplete="off" required></label><button type="submit" class="btn btn--primary">${icon('search')} Check</button></form>
    <div id="vfOut" aria-live="polite"></div>
    <p class="scope-note">${icon('info', 'icon--sm')}<span>MC Academy certificates are self-paced training records. Assessments are taken online without supervision, and the score is recorded by the learner’s own device — a trainer who needs proof of skill should test the learner directly. A certificate is not a CDL, government license or third-party industry certification.</span></p>
  </div>`;
  return {
    html, title: 'Check a certificate', nav: '', crumbs: [['Check a certificate']],
    after: (v) => {
      const out = $('#vfOut', v); const form = $('form', v);
      const check = async (c) => {
        c = String(c || '').trim().toUpperCase(); if (!c) return;
        out.innerHTML = '<div class="skeleton" style="height:120px;border-radius:12px;margin-top:16px"></div>';
        try {
          const r = await fetch(`${CLOUD.url}/rest/v1/rpc/verify_certificate`, { method: 'POST', headers: { apikey: CLOUD.key, 'Content-Type': 'application/json' }, body: JSON.stringify({ p_code: c }) });
          if (!r.ok) throw new Error(r.status);
          const rows = await r.json(); const x = rows[0]; const t = x && TRACK_BY_ID[x.track];
          out.innerHTML = x ? `<div class="vf-result is-ok anim-scale-in">${icon('check-circle')}<div><span class="eyebrow">Certificate on record · ${esc(c)}</span><h2>${esc(x.name)}</h2>
              <p>passed the <strong>${esc(t ? t.level : x.track)}</strong> final${t ? ` — ${esc(t.title)}` : ''} with <strong>${pct(+x.score)}%</strong>.</p><p class="small muted">Issued ${new Date(x.issued_at).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p></div></div>`
            : `<div class="vf-result is-bad anim-scale-in">${icon('x-circle')}<div><h2>No certificate found</h2><p>Check the code for typos. Codes are 10 characters and don't use the letters I or O or the digits 0 and 1.</p></div></div>`;
        } catch (e) {
          out.innerHTML = stateBlock({ ic: 'alert', title: 'Couldn\'t check right now', text: navigator.onLine ? 'Please try again in a moment.' : 'Connect to the internet to check a certificate.', error: true });
        }
      };
      form.addEventListener('submit', (e) => { e.preventDefault(); const c = form.code.value.trim().toUpperCase(); if (location.hash !== `#/verify/${c}`) history.replaceState(null, '', `#/verify/${c}`); check(c); });
      if (code) check(code);
    }
  };
}
/* ===========================================================================
   LESSON CONTENT ON DEMAND
   script.js carries only the track outline (ids, titles, minutes); each
   track's lesson text lives in content/<track>.json (CONTENT_FILES, stamped
   by tools/build.mjs). The router loads what a page needs before rendering
   it (contentFor); the service worker precaches every file for offline use.
   =========================================================================== */
const CONTENT_LOADED = new Set();
const CONTENT_PENDING = new Map();

/* Merges a track's lesson text into its outline (same objects, so LESSONS,
   LESSON_MAP and every reference see it). */
function applyContent(tid, data) {
  const t = TRACK_BY_ID[tid]; if (!t) return;
  t.modules.forEach((m) => m.lessons.forEach((l) => Object.assign(l, data[`${m.id}.${l.id}`] || {})));
  CONTENT_LOADED.add(tid);
  Q_BANK = null; Q_BY_ID = null; // the review question bank includes lesson checks
}
const hasContent = (ids = TRACKS.map((t) => t.id)) => ids.every((id) => CONTENT_LOADED.has(id) || !CONTENT_FILES[id]);

/* Loads the lesson text for the given tracks (all by default). */
function loadContent(ids = TRACKS.map((t) => t.id)) {
  return Promise.all(ids.filter((id) => CONTENT_FILES[id] && !CONTENT_LOADED.has(id)).map((id) => {
    if (!CONTENT_PENDING.has(id)) {
      CONTENT_PENDING.set(id, fetch(CONTENT_FILES[id])
        .then((r) => { if (!r.ok) throw new Error(`content ${id}: ${r.status}`); return r.json(); })
        .then((d) => applyContent(id, d))
        .finally(() => CONTENT_PENDING.delete(id)));
    }
    return CONTENT_PENDING.get(id);
  }));
}

/* Which tracks' lesson text a route needs: a list, 'all', or null. */
function contentFor(path) {
  const m = path.match(/^\/(?:lesson|quiz|cheatsheet)\/(\w+)/);
  if (m) return [m[1]];
  if (/^\/(?:review|exercises)$/.test(path)) return 'all';
  return null;
}
/* ===========================================================================
   QR CODES — a small encoder for the certificate check link (no library).
   Byte mode, error correction level M, versions 1–6 (up to 106 bytes).
   Follows ISO/IEC 18004; structure after Project Nayuki's reference
   implementation (MIT). Verified by tools/qr-test.mjs with an independent
   decoder (OpenCV).
   =========================================================================== */
// Per version: [data codewords, EC codewords per block, blocks] at level M.
const QR_M = [null, [16, 10, 1], [28, 16, 1], [44, 26, 1], [64, 18, 2], [86, 24, 2], [108, 16, 4]];
const QR_ALIGN = [null, [], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34]];

function qrMul(x, y) { // multiply in GF(2^8) mod x^8 + x^4 + x^3 + x^2 + 1
  let z = 0;
  for (let i = 7; i >= 0; i--) { z = (z << 1) ^ ((z >>> 7) * 0x11d); z ^= ((y >>> i) & 1) * x; }
  return z;
}
function qrDivisor(degree) {
  const r = new Array(degree).fill(0); r[degree - 1] = 1; let root = 1;
  for (let i = 0; i < degree; i++) {
    for (let j = 0; j < r.length; j++) { r[j] = qrMul(r[j], root); if (j + 1 < r.length) r[j] ^= r[j + 1]; }
    root = qrMul(root, 0x02);
  }
  return r;
}
function qrRemainder(data, div) {
  const r = div.map(() => 0);
  data.forEach((b) => { const f = b ^ r.shift(); r.push(0); div.forEach((c, i) => { r[i] ^= qrMul(c, f); }); });
  return r;
}

/* Returns the module grid (true = dark) for text, without the quiet zone.
   forceMask (0–7) is for tests; normally the lowest-penalty mask is used. */
function qrMatrix(text, forceMask) {
  const bytes = [...new TextEncoder().encode(text)];
  let ver = 1; while (ver <= 6 && QR_M[ver][0] * 8 < 12 + bytes.length * 8) ver++;
  if (ver > 6) throw new Error('QR: text too long');
  const [dataLen, ecLen, blocks] = QR_M[ver];
  // Data bits: byte mode (0100), 8-bit length, the bytes, terminator, padding.
  const bits = [];
  const put = (v, n) => { for (let i = n - 1; i >= 0; i--) bits.push((v >>> i) & 1); };
  put(4, 4); put(bytes.length, 8); bytes.forEach((b) => put(b, 8));
  put(0, Math.min(4, dataLen * 8 - bits.length)); while (bits.length % 8) bits.push(0);
  const data = []; for (let i = 0; i < bits.length; i += 8) data.push(parseInt(bits.slice(i, i + 8).join(''), 2));
  for (let pad = 0xec; data.length < dataLen; pad ^= 0xec ^ 0x11) data.push(pad);
  // Error correction per block, then interleave (all blocks are equal at M, v1–6).
  const per = dataLen / blocks; const div = qrDivisor(ecLen);
  const dBlocks = []; const eBlocks = [];
  for (let b = 0; b < blocks; b++) { const d = data.slice(b * per, (b + 1) * per); dBlocks.push(d); eBlocks.push(qrRemainder(d, div)); }
  const words = [];
  for (let i = 0; i < per; i++) dBlocks.forEach((d) => words.push(d[i]));
  for (let i = 0; i < ecLen; i++) eBlocks.forEach((e) => words.push(e[i]));

  const size = ver * 4 + 17;
  const grid = Array.from({ length: size }, () => new Array(size).fill(false));
  const fixed = Array.from({ length: size }, () => new Array(size).fill(false));
  const set = (x, y, dark) => { grid[y][x] = dark; fixed[y][x] = true; };
  // Timing patterns, finder patterns (with separators), alignment patterns.
  for (let i = 0; i < size; i++) { set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); }
  [[3, 3], [size - 4, 3], [3, size - 4]].forEach(([cx, cy]) => {
    for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) {
      const x = cx + dx, y = cy + dy; const d = Math.max(Math.abs(dx), Math.abs(dy));
      if (x >= 0 && x < size && y >= 0 && y < size) set(x, y, d !== 2 && d !== 4);
    }
  });
  const al = QR_ALIGN[ver];
  al.forEach((ay, i) => al.forEach((ax, j) => {
    if ((i === 0 && j === 0) || (i === 0 && j === al.length - 1) || (i === al.length - 1 && j === 0)) return;
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) set(ax + dx, ay + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
  }));
  const drawFormat = (mask) => {
    const d = (0 << 3) | mask; let rem = d; // level M = 00
    for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    const f = ((d << 10) | rem) ^ 0x5412; const bit = (i) => ((f >>> i) & 1) === 1;
    for (let i = 0; i <= 5; i++) set(8, i, bit(i));
    set(8, 7, bit(6)); set(8, 8, bit(7)); set(7, 8, bit(8));
    for (let i = 9; i < 15; i++) set(14 - i, 8, bit(i));
    for (let i = 0; i < 8; i++) set(size - 1 - i, 8, bit(i));
    for (let i = 8; i < 15; i++) set(8, size - 15 + i, bit(i));
    set(8, size - 8, true); // dark module
  };
  drawFormat(0); // reserves the format areas
  // Codewords in the zigzag, two columns at a time, skipping the timing column.
  let k = 0;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let v = 0; v < size; v++) for (let j = 0; j < 2; j++) {
      const x = right - j; const y = ((right + 1) & 2) === 0 ? size - 1 - v : v;
      if (!fixed[y][x] && k < words.length * 8) { grid[y][x] = ((words[k >>> 3] >>> (7 - (k & 7))) & 1) === 1; k++; }
    }
  }
  // Choose the mask with the lowest penalty.
  const MASKS = [(x, y) => (x + y) % 2 === 0, (x, y) => y % 2 === 0, (x) => x % 3 === 0, (x, y) => (x + y) % 3 === 0,
    (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0, (x, y) => ((x * y) % 2) + ((x * y) % 3) === 0,
    (x, y) => (((x * y) % 2) + ((x * y) % 3)) % 2 === 0, (x, y) => (((x + y) % 2) + ((x * y) % 3)) % 2 === 0];
  const applyMask = (m) => { for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (!fixed[y][x] && MASKS[m](x, y)) grid[y][x] = !grid[y][x]; };
  const penalty = () => {
    let p = 0; const line = (get) => {
      let run = 1;
      for (let i = 1; i <= size; i++) {
        if (i < size && get(i) === get(i - 1)) run++;
        else { if (run >= 5) p += run - 2; run = 1; }
      }
      const s = Array.from({ length: size }, (_, i) => (get(i) ? 1 : 0)).join('');
      p += 40 * ((s.match(/(?=(10111010000|00001011101))/g) || []).length);
    };
    for (let i = 0; i < size; i++) { line((j) => grid[i][j]); line((j) => grid[j][i]); }
    let dark = 0;
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      if (grid[y][x]) dark++;
      if (x < size - 1 && y < size - 1 && grid[y][x] === grid[y][x + 1] && grid[y][x] === grid[y + 1][x] && grid[y][x] === grid[y + 1][x + 1]) p += 3;
    }
    return p + 10 * (Math.ceil(Math.abs(dark * 20 - size * size * 10) / (size * size)) - 1);
  };
  let best = 0, bestP = Infinity;
  for (let m = 0; m < 8; m++) { applyMask(m); drawFormat(m); const p = penalty(); if (p < bestP) { bestP = p; best = m; } applyMask(m); }
  if (forceMask != null) best = forceMask;
  applyMask(best); drawFormat(best);
  return grid;
}

/* SVG of the code with a 4-module quiet zone; dark on white so it scans and prints. */
function qrSVG(text, label) {
  const g = qrMatrix(text); const n = g.length + 8; let d = '';
  g.forEach((row, y) => row.forEach((on, x) => { if (on) d += `M${x + 4} ${y + 4}h1v1h-1z`; }));
  return `<svg class="qr" viewBox="0 0 ${n} ${n}" role="img" aria-label="${esc(label)}" shape-rendering="crispEdges"><rect width="${n}" height="${n}" fill="#fff"/><path d="${d}" fill="#000"/></svg>`;
}

/* ===========================================================================
   PROFILE — the learner's picture, name and details; signing in with Google
   or email + password; changing email and password; preferences; and their
   data (export, reset, sign out everywhere, delete account).
   Name, details, picture and daily goal live in state and sync with the
   progress row; theme and reduced motion stay on each device.
   Pictures: resized to 256×256 in the browser, stored in the public
   Supabase Storage bucket "avatars" under <user id>/ (supabase/05-avatars.sql).
   =========================================================================== */
const GOAL_OPTIONS = [1, 2, 3, 5];
const AVATAR_COLORS = ['#2f6db0', '#1f7a62', '#a8503a', '#6f4aa8', '#8a6d12', '#3d4f66'];
const ROLE_SUGGESTIONS = ['Maintenance Coordinator', 'Fleet Manager', 'Dispatcher', 'Shop Manager', 'Trainee', 'Student'];
const MK_CITIES = ['Skopje', 'Bitola', 'Kumanovo', 'Prilep', 'Tetovo', 'Veles', 'Ohrid', 'Gostivar', 'Štip', 'Strumica', 'Kavadarci', 'Kočani', 'Kičevo', 'Struga', 'Radoviš', 'Gevgelija', 'Kriva Palanka', 'Negotino', 'Sveti Nikole', 'Debar', 'Delčevo', 'Vinica', 'Resen', 'Berovo', 'Kratovo', 'Probištip', 'Valandovo', 'Demir Hisar', 'Makedonski Brod'];
const PASSWORD_MIN = 8;

/* ---------- Picture ---------- */
const googlePhoto = () => { const m = (CLOUD.user && CLOUD.user.user_metadata) || {}; return m.avatar_url || m.picture || ''; };
/* First letters of the first and last name, skipping quotes and symbols
   ("Ana Petrovska" → AP, 'Benjamin "Ben" Ortiz' → BO). */
const initialsOf = (name) => {
  const w = (String(name || '').trim() || 'Coordinator').split(/\s+/).map((p) => (p.match(/\p{L}/u) || [''])[0]).filter(Boolean);
  return ((w[0] || '') + (w.length > 1 ? w[w.length - 1] : '')).toUpperCase() || '?';
};
/* An uploaded picture, else the Google photo (unless the learner chose
   initials), else initials. st is a learner's progress state: this learner's
   own, or a group member's when a trainer views the group (their Google photo
   link travels in st.avatar.google). Pictures from other accounts are only
   shown from the two hosts the CSP allows, and colours only as #rrggbb. */
const AVATAR_HOSTS = /^https:\/\/(lqlewiyuhifvnodkpiul\.supabase\.co|[\w-]+\.googleusercontent\.com)\//;
const safeAvatarUrl = (u) => (typeof u === 'string' && AVATAR_HOSTS.test(u) ? u : '');
function avatarImage(st = state) {
  const a = (st && st.avatar) || {};
  const google = st === state ? googlePhoto() || a.google : a.google;
  const ok = (u) => (st === state ? typeof u === 'string' && u : safeAvatarUrl(u));
  if (a.src === 'upload' && ok(a.url)) return a.url;
  if (a.src !== 'initials' && ok(google)) return google;
  return '';
}
function avatarHTML(size = 40, cls = '', st = state, name = state.name) {
  const a = (st && st.avatar) || {};
  const color = /^#[0-9a-f]{6}$/i.test(a.color || '') ? a.color : '';
  const ini = esc(initialsOf(name));
  const img = avatarImage(st);
  return `<span class="avatar ${cls}" style="--av:${size}px;${color ? `--av-bg:${color}` : ''}" data-initials="${ini}" aria-hidden="true">${img ? `<img class="avatar__img" src="${esc(img)}" alt="" width="${size}" height="${size}" referrerpolicy="no-referrer" decoding="async" loading="lazy">` : ini}</span>`;
}
/* Keep the Google photo link in the synced profile so trainers can show it. */
function rememberGooglePhoto() {
  const g = safeAvatarUrl(googlePhoto());
  if (!g || (state.avatar || {}).google === g) return;
  state.avatar = Object.assign({ src: '', url: '', color: '' }, state.avatar, { google: g });
  save(); // no edit time: a picture chosen on another device still wins (mergeProgress keeps the link)
}
// A picture that fails to load (offline, removed) falls back to initials.
document.addEventListener('error', (e) => {
  const img = e.target;
  if (img && img.classList && img.classList.contains('avatar__img')) { const box = img.parentNode; if (box) box.textContent = box.getAttribute('data-initials') || ''; }
}, true);

async function loadBitmap(file) {
  if (window.createImageBitmap) { try { return await createImageBitmap(file, { imageOrientation: 'from-image' }); } catch (e) {} }
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = () => rej(new Error('unreadable')); img.src = url; });
    return img;
  } finally { setTimeout(() => URL.revokeObjectURL(url), 1000); }
}
/* Centre-crop to a square, resize to 256 px, WebP (JPEG where unsupported). */
async function avatarBlob(file) {
  const bmp = await loadBitmap(file);
  const w = bmp.width, h = bmp.height, side = Math.min(w, h), S = 256;
  const c = document.createElement('canvas'); c.width = S; c.height = S;
  const ctx = c.getContext('2d'); ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(bmp, (w - side) / 2, (h - side) / 2, side, side, 0, 0, S, S);
  const toBlob = (type, q) => new Promise((res) => c.toBlob(res, type, q));
  let blob = await toBlob('image/webp', 0.86);
  if (!blob || blob.type !== 'image/webp') blob = await toBlob('image/jpeg', 0.88);
  if (!blob) throw new Error('unreadable');
  return blob;
}
async function avatarUpload(file) {
  if (!CLOUD.user || !CLOUD.client) throw new Error('Sign in to upload a picture.');
  if (!/^image\/(png|jpe?g|webp|gif|heic|heif|avif|bmp)$/i.test(file.type)) throw new Error('Choose a PNG, JPG or WebP image.');
  if (file.size > 15 * 1024 * 1024) throw new Error('That image is over 15 MB. Choose a smaller one.');
  let blob;
  try { blob = await avatarBlob(file); } catch (e) { throw new Error('That image couldn\'t be read. Try a PNG or JPG.'); }
  const ext = blob.type === 'image/webp' ? 'webp' : 'jpg';
  const bucket = CLOUD.client.storage.from('avatars');
  await avatarRemoveFile().catch(() => {}); // one picture per account
  const path = `${CLOUD.user.id}/avatar.${ext}`;
  const { error } = await bucket.upload(path, blob, { upsert: true, contentType: blob.type, cacheControl: '3600' });
  if (error) { console.warn('Picture upload failed:', error.message); throw new Error(navigator.onLine ? 'The picture couldn\'t be uploaded. Please try again.' : 'Connect to the internet to upload a picture.'); }
  const { data } = bucket.getPublicUrl(path);
  setAvatar({ src: 'upload', url: `${data.publicUrl}?v=${Date.now()}` });
}
/* Deletes every file in the signed-in user's avatar folder. */
async function avatarRemoveFile() {
  if (!CLOUD.user || !CLOUD.client) return;
  const bucket = CLOUD.client.storage.from('avatars');
  const { data, error } = await bucket.list(CLOUD.user.id);
  if (error || !data || !data.length) return;
  await bucket.remove(data.map((f) => `${CLOUD.user.id}/${f.name}`));
}
function setAvatar(patch) {
  state.avatar = Object.assign({ src: '', url: '', color: '' }, state.avatar, patch);
  touch('avatar'); save(); refreshChrome();
}

function avatarOptionsHTML() {
  const a = state.avatar || {};
  const g = googlePhoto();
  const uploaded = a.src === 'upload' && a.url;
  return `${CLOUD.user ? `<label class="btn btn--primary avp__upload">${icon('image')} ${uploaded ? 'Upload a new photo' : 'Upload a photo'}<input type="file" id="avpFile" accept="image/png,image/jpeg,image/webp,image/heic,image/avif" class="sr-only"></label>
      <p class="hint">Square-cropped and resized to 256 × 256 before upload.</p>`
    : `<p class="small"><button type="button" class="link-btn" data-cloud="in">Sign in</button> to upload a photo. You can still pick a colour below.</p>`}
    ${g ? `<button type="button" class="btn ${avatarImage() === g ? 'is-active' : ''}" data-avp="google">Use my Google photo</button>` : ''}
    ${uploaded ? `<button type="button" class="btn btn--ghost" data-avp="remove">${icon('x')} Remove uploaded photo</button>` : ''}
    <fieldset class="avp__colors"><legend>Initials colour</legend>
      ${AVATAR_COLORS.map((c, i) => `<label class="avp__swatch" style="--sw:${c}"><input type="radio" name="avpColor" value="${c}" ${(a.color || AVATAR_COLORS[0]) === c ? 'checked' : ''}><span class="sr-only">Colour ${i + 1}</span></label>`).join('')}
    </fieldset>
    ${g || uploaded ? `<button type="button" class="btn ${!avatarImage() ? 'is-active' : ''}" data-avp="initials">Use initials</button>` : ''}`;
}
function openAvatarPicker() {
  const body = `<div class="avp">
    <div class="avp__preview" id="avpPreview">${avatarHTML(112)}</div>
    <div class="avp__opts"><div class="avp__opts" id="avpOpts">${avatarOptionsHTML()}</div><p class="auth-msg" id="avpMsg" role="status"></p></div>
  </div>`;
  openModal({
    title: 'Profile picture', body, foot: '<button class="btn btn--primary" data-close>Done</button>',
    onOpen: (m) => {
      const msg = $('#avpMsg', m);
      // Redraw the preview and options (keeping focus on the same control), and the page behind.
      const redraw = () => {
        const key = document.activeElement && (document.activeElement.dataset.avp || (document.activeElement.name === 'avpColor' && document.activeElement.value));
        $('#avpPreview', m).innerHTML = avatarHTML(112);
        $('#avpOpts', m).innerHTML = avatarOptionsHTML();
        const back = key && ($(`[data-avp="${key}"]`, m) || $(`input[name="avpColor"][value="${key}"]`, m));
        (back || $('#avpFile', m) || $('[data-close]', m)).focus();
        if (/^#\/profile/.test(location.hash)) router();
      };
      m.addEventListener('change', async (e) => {
        if (e.target.name === 'avpColor') { setAvatar({ color: e.target.value }); redraw(); return; }
        if (e.target.id !== 'avpFile') return;
        const f = e.target.files && e.target.files[0]; if (!f) return;
        setMsg(msg, 'Uploading…', 'ok');
        try { await avatarUpload(f); setMsg(msg, 'Picture updated.', 'ok'); redraw(); }
        catch (err) { setMsg(msg, err.message); }
      });
      m.addEventListener('click', async (e) => {
        const b = e.target.closest('[data-avp]'); if (!b) return;
        if (b.dataset.avp === 'google') setAvatar({ src: 'google' });
        if (b.dataset.avp === 'initials') setAvatar({ src: 'initials' });
        if (b.dataset.avp === 'remove') {
          b.disabled = true;
          try { await avatarRemoveFile(); } catch (err) { console.warn('Picture removal failed:', err); }
          setAvatar({ src: '', url: '' }); setMsg(msg, 'Uploaded photo removed.', 'ok');
        }
        redraw();
      });
    }
  });
}

/* ---------- Sign in / create account / forgot password ---------- */
function authError(error) {
  const t = `${error && (error.code || '')} ${error && (error.message || '')}`.toLowerCase();
  if (/invalid.*credentials|invalid_credentials/.test(t)) return 'Wrong email or password.';
  if (/not.?confirmed/.test(t)) return 'Confirm your email first: open the link we sent you.';
  if (/already.*(registered|exists)|user_already_exists/.test(t)) return 'An account with this email already exists. Sign in instead.';
  if (/weak|password.*(short|characters)|weak_password/.test(t)) return `Choose a stronger password: at least ${PASSWORD_MIN} characters.`;
  if (/rate|too many|over_email_send_rate_limit/.test(t)) return 'Too many attempts. Wait a few minutes and try again.';
  if (/same.*password|same_password/.test(t)) return 'The new password must be different from the current one.';
  if (/email.*(invalid|format)|email_address_invalid/.test(t)) return 'Enter a valid email address.';
  if (/signup.*disabled|signups not allowed|email_provider_disabled/.test(t)) return 'Email sign-up is turned off right now. Use Google instead.';
  if (!navigator.onLine) return 'You\'re offline. Connect to the internet and try again.';
  return (error && error.message) || 'Something went wrong. Please try again.';
}
const pwField = (id, label, autocomplete, extra = '') => `<div class="field"><label for="${id}">${label}</label><div class="pw"><input class="input" id="${id}" type="password" autocomplete="${autocomplete}" minlength="${PASSWORD_MIN}" required ${extra}><button type="button" class="pw__toggle" data-pw="${id}" aria-label="Show password" aria-pressed="false">Show</button></div></div>`;
function wirePwToggles(root) {
  $$('[data-pw]', root).forEach((b) => b.addEventListener('click', () => {
    const inp = $('#' + b.dataset.pw, root); const show = inp.type === 'password';
    inp.type = show ? 'text' : 'password'; b.textContent = show ? 'Hide' : 'Show';
    b.setAttribute('aria-pressed', String(show)); b.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
  }));
}
function setMsg(el, text, kind = 'error') { el.textContent = text; el.className = `auth-msg ${text ? 'is-' + kind : ''}`; }
async function authClient() {
  await cloudInit();
  if (!CLOUD.client) throw new Error('Sign-in is unavailable here.');
  return CLOUD.client;
}

function openAuth(mode = 'in') {
  openModal({
    title: 'Sign in to MC Academy', size: 'modal--auth',
    body: '<div class="auth" id="authBox"></div>',
    onOpen: (m, close) => {
      const box = $('#authBox', m);
      const render = (md, email = '') => {
        const tabs = md === 'reset' ? '' : `<div class="auth-tabs" role="tablist" aria-label="Sign in or create an account">
          <button type="button" role="tab" aria-selected="${md === 'in'}" data-mode="in">Sign in</button>
          <button type="button" role="tab" aria-selected="${md === 'up'}" data-mode="up">Create account</button></div>`;
        box.innerHTML = `${md === 'reset' ? '' : `<button type="button" class="btn btn--block auth-google" data-cloud="google">${googleMark()} Continue with Google</button><div class="auth-or"><span>or with email</span></div>`}
          ${tabs}
          <form class="auth-form" id="authForm" novalidate>
            ${md === 'reset' ? '<p class="small">Enter your account email. We\'ll send a link to choose a new password.</p>' : ''}
            ${md === 'up' ? '<div class="field"><label for="authName">Your name</label><input class="input" id="authName" autocomplete="name" maxlength="60" placeholder="e.g., Ana Petrovska"></div>' : ''}
            <div class="field"><label for="authEmail">Email</label><input class="input" id="authEmail" type="email" autocomplete="email" inputmode="email" required value="${esc(email)}"></div>
            ${md === 'reset' ? '' : pwField('authPw', 'Password', md === 'up' ? 'new-password' : 'current-password', md === 'up' ? `aria-describedby="authPwHint"` : '')}
            ${md === 'up' ? `<p class="hint" id="authPwHint">At least ${PASSWORD_MIN} characters.</p>` : ''}
            <p class="auth-msg" id="authMsg" role="alert"></p>
            <button type="submit" class="btn btn--primary btn--block">${md === 'in' ? 'Sign in' : md === 'up' ? 'Create account' : 'Send reset link'}</button>
          </form>
          ${md === 'in' ? '<button type="button" class="link-btn auth-forgot" data-mode="reset">Forgot password?</button>' : ''}
          ${md === 'reset' ? '<button type="button" class="link-btn auth-forgot" data-mode="in">Back to sign in</button>' : ''}`;
        wirePwToggles(box);
        $$('[data-mode]', box).forEach((b) => b.addEventListener('click', () => render(b.dataset.mode, $('#authEmail', box).value.trim())));
        const form = $('#authForm', box); const msg = $('#authMsg', box);
        requestAnimationFrame(() => { const f = $('#authName', box) || (email ? $('#authPw', box) : $('#authEmail', box)) || $('#authEmail', box); f && f.focus(); });
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const em = $('#authEmail', box).value.trim(); const pw = $('#authPw', box) ? $('#authPw', box).value : '';
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { setMsg(msg, 'Enter a valid email address.'); $('#authEmail', box).focus(); return; }
          if (md !== 'reset' && pw.length < (md === 'up' ? PASSWORD_MIN : 1)) { setMsg(msg, md === 'up' ? `Use at least ${PASSWORD_MIN} characters for your password.` : 'Enter your password.'); $('#authPw', box).focus(); return; }
          const btn = $('[type="submit"]', form); btn.disabled = true; setMsg(msg, '');
          try {
            const sb = await authClient();
            if (md === 'in') {
              const { error } = await sb.auth.signInWithPassword({ email: em, password: pw });
              if (error) throw error;
              close(); toast({ kind: 'success', title: 'Signed in', text: 'Your progress will sync across devices.' });
            } else if (md === 'up') {
              const name = ($('#authName', box).value || '').trim().slice(0, 60);
              rememberReturn();
              const { data, error } = await sb.auth.signUp({ email: em, password: pw, options: { emailRedirectTo: authReturn(), data: name ? { full_name: name } : {} } });
              if (error) throw error;
              if (name && !state.name) { state.name = name; touch('name'); save(); }
              if (data && data.session) { close(); toast({ kind: 'success', title: 'Account created', text: 'You\'re signed in.' }); return; }
              box.innerHTML = `<div class="auth-done">${icon('check-circle', 'icon--lg')}<h3>Check your inbox</h3><p>We sent a confirmation link to <strong>${esc(em)}</strong>. Open it on this device to finish creating your account.</p><p class="small muted">No email after a few minutes? Check spam, or <button type="button" class="link-btn" id="authResend">send it again</button>.</p></div>`;
              $('#authResend', box).addEventListener('click', async (ev) => {
                ev.currentTarget.disabled = true;
                const { error: er } = await sb.auth.resend({ type: 'signup', email: em, options: { emailRedirectTo: authReturn() } });
                toast(er ? { kind: 'warning', title: 'Couldn\'t resend', text: authError(er) } : { kind: 'success', title: 'Email sent again' });
              });
            } else {
              rememberReturn();
              const { error } = await sb.auth.resetPasswordForEmail(em, { redirectTo: authReturn() });
              if (error) throw error;
              box.innerHTML = `<div class="auth-done">${icon('check-circle', 'icon--lg')}<h3>Check your inbox</h3><p>If an account exists for <strong>${esc(em)}</strong>, we sent a link to choose a new password. Open it on this device.</p></div>`;
            }
          } catch (err) {
            setMsg(msg, authError(err)); btn.disabled = false;
            if (/not.?confirmed/i.test(String(err && err.message))) msg.insertAdjacentHTML('beforeend', ' <button type="button" class="link-btn" id="authResend2">Resend the link</button>');
            const r2 = $('#authResend2', box);
            if (r2) r2.addEventListener('click', async () => { r2.disabled = true; const sb = await authClient(); const { error: er } = await sb.auth.resend({ type: 'signup', email: em, options: { emailRedirectTo: authReturn() } }); setMsg(msg, er ? authError(er) : 'Confirmation link sent again.', er ? 'error' : 'ok'); });
          }
        });
      };
      render(mode);
    }
  });
}

/* Change the password, asking for the emailed code when Supabase wants the
   learner to confirm it's them ("secure password change"). */
async function changePassword(pw, nonce) {
  const sb = await authClient();
  const { error } = await sb.auth.updateUser(Object.assign({ password: pw, data: { has_password: true } }, nonce ? { nonce } : {}));
  if (error && /reauth/i.test(`${error.code} ${error.message}`) && !nonce) {
    const { error: e2 } = await sb.auth.reauthenticate();
    if (e2) return { error: e2 };
    return { needsCode: true };
  }
  return { error };
}
/* After opening a "reset password" email link. */
function openSetPassword() {
  if (!CLOUD.user) return;
  openModal({
    title: 'Choose a new password',
    body: `<form id="spForm" novalidate><p class="small">For <strong>${esc(CLOUD.user.email || '')}</strong>.</p>${pwField('spPw', 'New password', 'new-password', 'autofocus')}${pwField('spPw2', 'Repeat new password', 'new-password')}<p class="auth-msg" id="spMsg" role="alert"></p></form>`,
    foot: '<button class="btn btn--ghost" data-close>Later</button><button class="btn btn--primary" type="submit" form="spForm">Save password</button>',
    onOpen: (m, close) => {
      wirePwToggles(m);
      $('#spForm', m).addEventListener('submit', async (e) => {
        e.preventDefault();
        const a = $('#spPw', m).value, b = $('#spPw2', m).value, msg = $('#spMsg', m);
        if (a.length < PASSWORD_MIN) return setMsg(msg, `Use at least ${PASSWORD_MIN} characters.`);
        if (a !== b) return setMsg(msg, 'The two passwords don\'t match.');
        const r = await changePassword(a);
        if (r.error) return setMsg(msg, authError(r.error));
        if (r.needsCode) return setMsg(msg, 'Open your profile to finish: we emailed you a confirmation code.');
        close(); toast({ kind: 'success', title: 'Password updated', text: 'Use it next time you sign in with email.' });
      });
    }
  });
}

/* ---------- Profile page ---------- */
function viewProfile() {
  const u = CLOUD.user;
  const prof = state.profile || {};
  const meta = (u && u.user_metadata) || {};
  const providers = u ? [...new Set((u.identities || []).map((i) => i.provider).concat((u.app_metadata && u.app_metadata.providers) || []))] : [];
  const hasGoogle = providers.includes('google');
  const hasPassword = providers.includes('email') || !!meta.has_password;
  const since = u && u.created_at ? new Date(u.created_at) : state.days.length ? new Date(state.days.slice().sort()[0]) : null;
  const certs = TRACKS.filter(finalPassed).length;
  const theme = state.theme || 'system';
  const roleLine = [prof.role, prof.company, prof.city].filter(Boolean).map(esc).join(' · ');
  const opt = (v, l, cur) => `<option value="${v}" ${String(cur) === String(v) ? 'selected' : ''}>${l}</option>`;

  const html = `<div class="page page--narrow profile">
    <section class="card prof-head" aria-labelledby="profTitle">
      <button type="button" class="prof-head__avatar" id="profAvatar" aria-label="Change profile picture">${avatarHTML(96)}<span class="prof-head__cam">${icon('image', 'icon--sm')}</span></button>
      <div class="grow">
        <span class="eyebrow">${icon('user', 'icon--sm')} Profile</span>
        <h1 id="profTitle">${esc(state.name || 'Your profile')}</h1>
        <p class="muted">${roleLine || 'Add your role, company and city below.'}</p>
        ${u ? `<p class="small prof-head__email">${icon('mail', 'icon--sm')} ${esc(u.email || '')}</p>` : ''}
      </div>
      <dl class="prof-stats">
        <div><dt>Lessons</dt><dd class="num">${completedCount()}</dd></div>
        <div><dt>Certificates</dt><dd class="num">${certs}/${TRACKS.length}</dd></div>
        <div><dt>Streak</dt><dd class="num">${streak()}d</dd></div>
        <div><dt>${u ? 'Member since' : 'Studying since'}</dt><dd>${since ? since.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }) : '—'}</dd></div>
      </dl>
    </section>

    <section class="card prof-sec" aria-labelledby="pdTitle">
      <div class="card__head"><h2 id="pdTitle">Personal details</h2></div>
      <form class="card__body prof-form" id="pdForm" novalidate>
        <div class="field prof-form__full"><label for="pdName">Full name</label><input class="input" id="pdName" autocomplete="name" maxlength="60" value="${esc(state.name)}" placeholder="e.g., Ana Petrovska"><span class="hint">Shown on your dashboard and certificates${u ? ', and to trainers of groups you join' : ''}.</span></div>
        <div class="field"><label for="pdRole">Role</label><input class="input" id="pdRole" list="pdRoles" maxlength="60" autocomplete="organization-title" value="${esc(prof.role || '')}" placeholder="e.g., Maintenance Coordinator"><datalist id="pdRoles">${ROLE_SUGGESTIONS.map((r) => `<option value="${r}">`).join('')}</datalist></div>
        <div class="field"><label for="pdCompany">Company</label><input class="input" id="pdCompany" maxlength="80" autocomplete="organization" value="${esc(prof.company || '')}"></div>
        <div class="field"><label for="pdCity">City</label><input class="input" id="pdCity" list="pdCities" maxlength="60" autocomplete="address-level2" value="${esc(prof.city || '')}" placeholder="e.g., Skopje"><datalist id="pdCities">${MK_CITIES.map((c) => `<option value="${c}">`).join('')}</datalist></div>
        <div class="prof-form__actions"><span class="auth-msg" id="pdMsg" role="status"></span><button type="submit" class="btn btn--primary">Save details</button></div>
      </form>
    </section>

    <section class="card prof-sec" aria-labelledby="acTitle">
      <div class="card__head"><h2 id="acTitle">Account &amp; sign-in</h2>${u ? `<span class="badge badge--outline">${icon('check-circle', 'icon--sm')} Synced</span>` : ''}</div>
      <div class="card__body">${u ? `
        <div class="prof-row">
          <div><h3>Email</h3><p class="small">${esc(u.email || '')}${u.new_email ? ` · <span class="text-warning">change to ${esc(u.new_email)} waiting for confirmation</span>` : ''}</p></div>
          <button type="button" class="btn btn--sm" data-toggle="emForm" aria-expanded="false" aria-controls="emForm">Change email</button>
        </div>
        <form class="prof-sub" id="emForm" hidden novalidate>
          <div class="field"><label for="emNew">New email</label><input class="input" id="emNew" type="email" autocomplete="email" inputmode="email" required></div>
          <p class="hint">We'll email a confirmation link${hasGoogle ? '. Google sign-in keeps working' : ''}. The change happens after you confirm it.</p>
          <div class="prof-form__actions"><span class="auth-msg" id="emMsg" role="alert"></span><button type="submit" class="btn btn--primary btn--sm">Send confirmation</button></div>
        </form>
        <div class="prof-row">
          <div><h3>Password</h3><p class="small">${hasPassword ? 'You can sign in with your email and password.' : 'No password yet. Set one to also sign in with your email.'}</p></div>
          <button type="button" class="btn btn--sm" data-toggle="pwForm" aria-expanded="false" aria-controls="pwForm">${hasPassword ? 'Change password' : 'Set a password'}</button>
        </div>
        <form class="prof-sub" id="pwForm" hidden novalidate>
          ${pwField('pwNew', 'New password', 'new-password')}${pwField('pwNew2', 'Repeat new password', 'new-password')}
          <div class="field" id="pwCodeField" hidden><label for="pwCode">Confirmation code from your email</label><input class="input" id="pwCode" inputmode="numeric" autocomplete="one-time-code" maxlength="10"></div>
          <input type="email" autocomplete="username" value="${esc(u.email || '')}" hidden>
          <div class="prof-form__actions"><span class="auth-msg" id="pwMsg" role="alert"></span><button type="submit" class="btn btn--primary btn--sm">Save password</button></div>
        </form>
        <div class="prof-row">
          <div><h3>Sign-in methods</h3><p class="small prof-methods"><span class="${hasGoogle ? 'is-on' : ''}">${googleMark()} Google${hasGoogle ? '' : ' (not linked)'}</span><span class="${hasPassword ? 'is-on' : ''}">${icon('mail', 'icon--sm')} Email &amp; password${hasPassword ? '' : ' (not set)'}</span></p></div>
        </div>`
      : `<div class="prof-signin">${icon('users', 'icon--lg')}<div class="grow"><h3>Keep your progress safe</h3><p class="small">Sign in with Google or email to sync progress across devices, upload a profile picture and join trainer groups. Everything keeps working without an account.</p></div><button type="button" class="btn btn--primary" data-cloud="in">Sign in or create account</button></div>`}
      </div>
    </section>

    <section class="card prof-sec" aria-labelledby="prTitle">
      <div class="card__head"><h2 id="prTitle">Preferences</h2></div>
      <div class="card__body">
        <div class="prof-row">
          <div><h3 id="thLabel">Theme</h3><p class="small">Saved on this device.</p></div>
          <div class="seg" role="radiogroup" aria-labelledby="thLabel">${[['light', 'Light', 'sun'], ['dark', 'Dark', 'moon'], ['system', 'System', 'monitor']].map(([v, l, ic]) => `<label class="seg__opt"><input type="radio" name="prTheme" value="${v}" ${theme === v ? 'checked' : ''}><span>${icon(ic, 'icon--sm')} ${l}</span></label>`).join('')}</div>
        </div>
        <div class="prof-row">
          <div><h3><label for="prGoal">Daily goal</label></h3><p class="small">Lessons to finish each day, shown on your dashboard.</p></div>
          <select class="select" id="prGoal">${GOAL_OPTIONS.map((n) => opt(n, `${n} lesson${n === 1 ? '' : 's'} a day`, state.goal || 1)).join('')}</select>
        </div>
        <div class="prof-row">
          <div><h3><label for="prMotion">Reduce animations</label></h3><p class="small">Turns off movement and transitions on this device.</p></div>
          <label class="switch"><input type="checkbox" role="switch" id="prMotion" ${state.motion === 'reduce' ? 'checked' : ''}><span aria-hidden="true"></span></label>
        </div>
      </div>
    </section>

    <section class="card prof-sec" aria-labelledby="dtTitle">
      <div class="card__head"><h2 id="dtTitle">Your data</h2><a class="btn btn--ghost btn--sm" href="#/privacy">Privacy ${icon('chev-r', 'icon--sm')}</a></div>
      <div class="card__body">
        <div class="prof-row"><div><h3>Export progress</h3><p class="small">Download everything the academy stores about your learning as a JSON file.</p></div><button type="button" class="btn btn--sm" id="dtExport">${icon('download', 'icon--sm')} Export</button></div>
        ${u ? `<div class="prof-row"><div><h3>Sign out everywhere</h3><p class="small">Ends your session on every device, including this one.</p></div><button type="button" class="btn btn--sm" id="dtGlobal">Sign out everywhere</button></div>` : ''}
        <div class="prof-row"><div><h3>Reset progress</h3><p class="small">Clears lessons, scores, certificates and achievements${u ? ' on all devices' : ''}. Your profile stays.</p></div><button type="button" class="btn btn--sm btn--danger" data-reset>${icon('rotate', 'icon--sm')} Reset</button></div>
        ${u ? `<div class="prof-row"><div><h3>Delete account</h3><p class="small">Permanently deletes your account, synced progress, picture, group memberships and certificates.</p></div><button type="button" class="btn btn--sm btn--danger" data-delete-account>${icon('x-circle', 'icon--sm')} Delete</button></div>` : ''}
      </div>
    </section>
  </div>`;

  return {
    html, title: 'Profile', nav: 'profile', crumbs: [['Profile']],
    after: (v) => {
      $('#profAvatar', v).addEventListener('click', openAvatarPicker);
      wirePwToggles(v);
      $$('[data-toggle]', v).forEach((b) => b.addEventListener('click', () => {
        const f = $('#' + b.dataset.toggle, v); f.hidden = !f.hidden; b.setAttribute('aria-expanded', String(!f.hidden));
        if (!f.hidden) { const i = $('input:not([hidden])', f); i && i.focus(); }
      }));

      $('#pdForm', v).addEventListener('submit', (e) => {
        e.preventDefault();
        const name = $('#pdName', v).value.trim().slice(0, 60);
        const next = { role: $('#pdRole', v).value.trim().slice(0, 60), company: $('#pdCompany', v).value.trim().slice(0, 80), city: $('#pdCity', v).value.trim().slice(0, 60) };
        if (name !== state.name) { state.name = name; touch('name'); }
        state.profile = next; touch('profile'); save(); refreshChrome();
        $('#profTitle', v).textContent = name || 'Your profile';
        $('.prof-head p.muted', v).textContent = [next.role, next.company, next.city].filter(Boolean).join(' · ') || 'Add your role, company and city below.';
        $('#profAvatar', v).innerHTML = `${avatarHTML(96)}<span class="prof-head__cam">${icon('image', 'icon--sm')}</span>`;
        setMsg($('#pdMsg', v), 'Saved.', 'ok');
        toast({ kind: 'success', title: 'Profile updated', timeout: 2500 });
      });

      const em = $('#emForm', v);
      if (em) em.addEventListener('submit', async (e) => {
        e.preventDefault();
        const msg = $('#emMsg', v); const val = $('#emNew', v).value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return setMsg(msg, 'Enter a valid email address.');
        if (val.toLowerCase() === String(CLOUD.user.email || '').toLowerCase()) return setMsg(msg, 'That\'s already your email.');
        const btn = $('[type="submit"]', em); btn.disabled = true;
        try {
          const sb = await authClient(); rememberReturn();
          const { error } = await sb.auth.updateUser({ email: val }, { emailRedirectTo: authReturn() });
          if (error) throw error;
          setMsg(msg, `Check ${val} (and your current inbox) for a confirmation link.`, 'ok');
        } catch (err) { setMsg(msg, authError(err)); }
        btn.disabled = false;
      });

      const pw = $('#pwForm', v);
      if (pw) pw.addEventListener('submit', async (e) => {
        e.preventDefault();
        const msg = $('#pwMsg', v); const a = $('#pwNew', v).value, b = $('#pwNew2', v).value;
        const codeField = $('#pwCodeField', v); const code = $('#pwCode', v).value.trim();
        if (a.length < PASSWORD_MIN) return setMsg(msg, `Use at least ${PASSWORD_MIN} characters.`);
        if (a !== b) return setMsg(msg, 'The two passwords don\'t match.');
        if (!codeField.hidden && !code) return setMsg(msg, 'Enter the code we emailed you.');
        const btn = $('[type="submit"]', pw); btn.disabled = true;
        try {
          const r = await changePassword(a, codeField.hidden ? '' : code);
          if (r.needsCode) { codeField.hidden = false; $('#pwCode', v).focus(); setMsg(msg, 'To confirm it\'s you, we emailed you a code. Enter it and save again.', 'ok'); }
          else if (r.error) setMsg(msg, authError(r.error));
          else { pw.reset(); codeField.hidden = true; toast({ kind: 'success', title: 'Password saved', text: 'You can now sign in with your email and password.' }); setTimeout(router, 300); }
        } catch (err) { setMsg(msg, authError(err)); }
        btn.disabled = false;
      });

      $$('input[name="prTheme"]', v).forEach((r) => r.addEventListener('change', () => {
        state.theme = r.value === 'system' ? null : r.value; save();
        applyTheme(state.theme || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
      }));
      $('#prGoal', v).addEventListener('change', (e) => { state.goal = Number(e.target.value) || 1; touch('goal'); save(); toast({ kind: 'success', title: `Daily goal: ${state.goal} lesson${state.goal === 1 ? '' : 's'}`, timeout: 2000 }); });
      $('#prMotion', v).addEventListener('change', (e) => { state.motion = e.target.checked ? 'reduce' : null; applyMotion(); save(); });

      $('#dtExport', v).addEventListener('click', exportProgress);
      const g = $('#dtGlobal', v);
      if (g) g.addEventListener('click', async () => {
        g.disabled = true;
        try { clearTimeout(CLOUD.timer); await cloudPush(); const { error } = await CLOUD.client.auth.signOut({ scope: 'global' }); if (error) throw error; toast({ kind: 'success', title: 'Signed out on all devices', text: 'Your progress stays on this device.' }); }
        catch (err) { g.disabled = false; toast({ kind: 'warning', title: 'Couldn\'t sign out everywhere', text: authError(err) }); }
      });
      $('[data-reset]', v).addEventListener('click', confirmResetProgress);
      $$('[data-delete-account]', v).forEach((b) => b.addEventListener('click', confirmDeleteAccount));
    }
  };
}

function applyMotion() {
  if (state.motion === 'reduce') document.documentElement.setAttribute('data-motion', 'reduce');
  else document.documentElement.removeAttribute('data-motion');
}
function exportProgress() {
  const data = { app: 'MC Academy', exported: new Date().toISOString(), account: CLOUD.user ? { email: CLOUD.user.email, id: CLOUD.user.id } : null, progress: cloudSnapshot() };
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
  const a = document.createElement('a'); a.href = url; a.download = `mc-academy-progress-${todayStr()}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast({ kind: 'success', title: 'Progress exported', icon: 'download', timeout: 2500 });
}
/* ===========================================================================
   SAMPLE DOCUMENTS — realistic invoices, work orders and service tickets
   rendered as paper-style documents with numbered hotspots.
   Block: { doc: { kind, vendor, vendorSub, no, meta, blocks, table, totals,
   foot, notes } }. Every document carries a fixed "training sample" banner:
   vendors, fleets, people and numbers are fictional, and layouts are generic
   to the industry rather than copied from any real company's forms.
   =========================================================================== */
function docPin(n) { return n ? `<span class="sdoc__pin" aria-label="Note ${n}">${n}</span>` : ''; }
function docCell(v) {
  const s = String(v == null ? '' : v);
  const num = /^[-−]?\$?[\d,.]+( ?(h|qt|gal|psi|mi|ft-lb|\/32)?)$/.test(s.trim()) || /^[-−]\$/.test(s.trim());
  return `<td${num ? ' class="num"' : ''}>${inline(s)}</td>`;
}
function docHTML(d) {
  const kv = (rows, cls) => `<dl class="${cls}">${rows.map(([k, v, n]) => `<div><dt>${docPin(n)}${esc(k)}</dt><dd>${inline(String(v))}</dd></div>`).join('')}</dl>`;
  const t = d.table;
  return `<figure class="sdoc">
    <div class="sdoc__banner">${icon('info', 'icon--sm')}<span>Training sample · fictional fleet and vendor · generic layout</span></div>
    <div class="sdoc__paper">
      <div class="sdoc__head"><div><strong class="sdoc__vendor">${esc(d.vendor)}</strong>${d.vendorSub ? `<span class="sdoc__sub">${esc(d.vendorSub)}</span>` : ''}</div>
        <div class="sdoc__kind"><span>${esc(d.kind)}</span>${d.no ? `<strong>${esc(d.no)}</strong>` : ''}</div></div>
      ${d.meta ? kv(d.meta, 'sdoc__meta') : ''}
      ${(d.blocks || []).map((b) => `<div class="sdoc__block"><div class="sdoc__label">${docPin(b.n)}${esc(b.t)}</div><p>${inline(b.text)}</p></div>`).join('')}
      ${t ? `<div class="table-wrap sdoc__table"><table><thead><tr>${t.head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${t.rows.map((r) => `<tr>${r.cells.map((c, i) => (i === 0 ? `<td>${docPin(r.n)}${inline(String(c))}</td>` : docCell(c))).join('')}</tr>`).join('')}</tbody></table></div>` : ''}
      ${d.totals ? kv(d.totals, 'sdoc__totals') : ''}
      ${d.foot ? kv(d.foot, 'sdoc__foot') : ''}
    </div>
    ${d.notes ? `<figcaption class="sdoc__notes"><ol>${d.notes.map((x) => `<li><span class="sdoc__pin">${x.n}</span><div><strong>${esc(x.t)}</strong><p>${inline(x.d)}</p></div></li>`).join('')}</ol></figcaption>` : ''}
  </figure>`;
}

/* ===========================================================================
   4. ENGINE
   =========================================================================== */

/* ---------- Utilities ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ESC_MAP[c]);
const stripTags = (s) => String(s).replace(/<[^>]*>/g, '').replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, a, b) => b || a).replace(/\*\*?/g, '');
const icon = (id, cls = '') => `<svg class="icon ${cls}" aria-hidden="true" focusable="false"><use href="#i-${id}"/></svg>`;
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const pct = (n) => Math.round(n * 100);
const fmtMoney = (n, d = 0) => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const fmtNum = (n, d = 0) => Number(n).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const reduceMotion = () => document.documentElement.getAttribute('data-motion') === 'reduce' || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
/* Calendar day in the learner's own time zone (toISOString would give the UTC day,
   so study just after midnight in Skopje landed on the previous day). */
const dayKey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const todayStr = () => dayKey(new Date());
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
const DEFAULT_STATE = { completed: {}, checks: {}, quizzes: {}, finals: {}, bookmarks: [], last: null, flash: { known: {} }, scen: {}, trees: {}, glossaryViewed: {}, exercises: {}, calcUsed: {}, achievements: {}, theme: null, name: '', days: [], missed: {}, certIds: {}, edits: {}, resetAt: 0, profile: { role: '', company: '', city: '' }, avatar: { src: '', url: '', color: '' }, goal: 1, motion: null };
/* Who the learner is and how they like the app: kept when progress is reset. */
const PROFILE_KEYS = ['name', 'profile', 'avatar', 'goal', 'theme', 'motion'];
let storageOk = true;
let state = migrateState(loadState());
/* Lessons that moved between tracks keep their saved progress (LESSON_MOVES). */
function migrateState(st) {
  const reEsc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const rules = Object.entries(LESSON_MOVES).map(([from, to]) => [new RegExp(`(^|[^\\w.])${reEsc(from)}(?=$|[^\\w])`), to]);
  const move = (k) => rules.reduce((acc, [re, to]) => acc.replace(re, `$1${to}`), k);
  let changed = false;
  const remap = (obj) => Object.fromEntries(Object.entries(obj || {}).map(([k, v]) => { const n = move(k); if (n !== k) changed = true; return [n, v]; }));
  ['completed', 'checks', 'quizzes', 'exercises'].forEach((f) => { st[f] = remap(st[f]); });
  st.bookmarks = (st.bookmarks || []).map((k) => { const n = move(k); if (n !== k) changed = true; return n; });
  if (st.last) { const n = move(st.last); if (n !== st.last) { changed = true; st.last = n; } }
  if (changed) { try { localStorage.setItem(STORE_KEY, JSON.stringify(st)); } catch (e) {} }
  return st;
}
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
/* Records when a removable item last changed (bookmark, completion,
   flashcard, missed question, name), so syncing devices keeps the newest
   change instead of bringing removed items back. See mergeProgress(). */
function touch(key) { state.edits[key] = Date.now(); }
function save() {
  cloudQueue();
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
  while (set.has(dayKey(d))) { n++; d.setDate(d.getDate() - 1); }
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
  { id: 'cert-advanced', title: 'Fleet Operations Certified', desc: 'Pass the Advanced final project.', icon: 'wrench', test: () => finalPassed(ADVANCED) },
  { id: 'cert-expert', title: 'Fleet Management Certified', desc: 'Pass the Expert final simulation.', icon: 'award', test: () => finalPassed(EXPERT) },
  { id: 'cert-operations', title: 'Transportation Operations Certified', desc: 'Pass the Operations final exam.', icon: 'route', test: () => finalPassed(OPERATIONS) },
  { id: 'master', title: 'Master Coordinator', desc: 'Earn the Beginner, Advanced and Expert certificates.', icon: 'star', test: () => [BEGINNER, ADVANCED, EXPERT].every(finalPassed) }
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
function toast({ title, text = '', kind = 'info', icon: ic, timeout = 4500, action }) {
  const region = $('#toasts');
  const ico = ic || { success: 'check-circle', warning: 'alert', award: 'award', info: 'info' }[kind] || 'info';
  const el = document.createElement('div');
  el.className = `toast toast--${kind}`;
  el.innerHTML = `<span class="toast__icon">${icon(ico)}</span><div class="grow"><strong>${esc(title)}</strong>${text ? `<p>${esc(text)}</p>` : ''}${action ? `<button type="button" class="btn btn--sm btn--primary toast__action">${esc(action.label)}</button>` : ''}</div><button class="btn-icon" aria-label="Dismiss notification">${icon('x', 'icon--sm')}</button>`;
  region.appendChild(el);
  while (region.children.length > 4) region.firstElementChild.remove();
  const close = () => {
    if (el.classList.contains('is-leaving')) return;
    el.classList.add('is-leaving');
    const done = () => el.remove();
    if (reduceMotion()) done(); else { el.addEventListener('animationend', done, { once: true }); setTimeout(done, 400); }
  };
  el.querySelector('.btn-icon').addEventListener('click', close);
  if (action) el.querySelector('.toast__action').addEventListener('click', () => { close(); action.onClick(); });
  if (timeout) setTimeout(close, timeout);
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
  return `<header class="page-head${right.includes('class="ring') ? ' page-head--ring' : ''}"><div>${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}<h1>${title}</h1>${text ? `<p>${text}</p>` : ''}</div>${right}</header>`;
}

/* ---------- Inline markup: [[Term]] → glossary tooltip button ---------- */
function inline(s) {
  return String(s).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, term, label) => {
    const g = findTerm(term);
    const text = label || term;
    if (!g) return `<strong>${text}</strong>`;
    const vis = LIB_TERM.has(g.term.toLowerCase());
    return `<button type="button" class="term${vis ? ' term--visual' : ''}" data-term="${esc(g.term)}" data-tip="${esc(g.full + ' — ' + g.simple)}${vis ? ' (tap to see it)' : ''}">${text}${vis ? icon('image', 'term__ico') : ''}</button>`;
  }).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/(^|[\s(“"])\*([^*\s][^*]*?)\*(?=[\s.,;:!?)”"]|$)/g, '$1<em>$2</em>');
}

/* ---------- Content block renderer ---------- */
const EX_REG = new Map();
/* Component headings (callouts, tiles, cards…) sit one level below the nearest
   heading: h3 directly under a section h2, h4 once a block list has its own {h}. */
let BLOCK_HL = 3;
const hx = () => `h${BLOCK_HL}`;
function renderBlocks(blocks) {
  const prev = BLOCK_HL; BLOCK_HL = 3;
  const html = (blocks || []).map((b) => { const out = renderBlock(b); if (b && b.h) BLOCK_HL = 4; return out; }).join('');
  BLOCK_HL = prev;
  return html;
}
function renderBlock(b) {
  if (typeof b === 'string') return `<p>${inline(b)}</p>`;
  if (b.h) return `<h3>${inline(b.h)}</h3>`;
  if (b.ul) return `<ul>${b.ul.map((i) => `<li>${inline(i)}</li>`).join('')}</ul>`;
  if (b.ol) return `<ol>${b.ol.map((i) => `<li>${inline(i)}</li>`).join('')}</ol>`;
  if (b.callout) {
    const c = b.callout; const ic = { info: 'info', tip: 'bulb', warning: 'alert', safety: 'shield' }[c.kind] || 'info';
    return `<div class="callout callout--${c.kind}" role="note"><span class="callout__icon">${icon(ic)}</span><div>${c.title ? `<${hx()}>${esc(c.title)}</${hx()}>` : ''}<p>${inline(c.text)}</p></div></div>`;
  }
  if (b.tiles) return `<div class="info-grid">${b.tiles.map((t) => `<div class="info-tile"><div class="info-tile__icon">${icon(t.icon)}</div><${hx()}>${esc(t.title)}</${hx()}><p>${inline(t.text)}</p></div>`).join('')}</div>`;
  if (b.compare) {
    const col = (c, k) => `<div class="compare__col compare__col--${k}"><${hx()}>${icon(k === 'yes' ? 'check-circle' : 'x-circle')} ${esc(c.title)}</${hx()}><ul>${c.items.map((i) => `<li>${icon(k === 'yes' ? 'check' : 'x')}<span>${inline(i)}</span></li>`).join('')}</ul></div>`;
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
      return `<div class="acc-item"><${hx()}><button type="button" class="acc-trigger" aria-expanded="false" aria-controls="${pid}">${esc(a.title)}${icon('chev-d')}</button></${hx()}><div class="acc-panel" id="${pid}" role="region"><div><div class="acc-panel__inner"><p>${inline(a.text)}</p></div></div></div></div>`;
    }).join('')}</div>`;
  }
  if (b.tabs) {
    const id = nextId('tabs');
    return `<div class="tabs"><div class="tablist" role="tablist">${b.tabs.map((t, i) => `<button type="button" class="tab" role="tab" id="${id}-t${i}" aria-controls="${id}-p${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(t.label)}</button>`).join('')}</div>
      ${b.tabs.map((t, i) => `<div class="tabpanel prose" role="tabpanel" id="${id}-p${i}" aria-labelledby="${id}-t${i}" ${i ? 'hidden' : ''}>${renderBlocks(t.body)}</div>`).join('')}</div>`;
  }
  if (b.ig) return infographicHTML(b);
  if (b.doc) return docHTML(b.doc);
  if (b.industry) {
    const x = b.industry;
    return `<aside class="industry" aria-label="Industry example: ${esc(x.name)}"><div class="industry__head"><span class="industry__tag">${icon('pin', 'icon--sm')} Industry example</span><span class="badge badge--outline">${esc(x.cat)}</span></div>`
      + `<${hx()} class="industry__name">${esc(x.name)}</${hx()}><p>${inline(x.text)}</p>${x.relevance ? `<p class="industry__why"><strong>Why it matters here:</strong> ${inline(x.relevance)}</p>` : ''}`
      + `<div class="industry__foot"><a class="industry__link" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">Official website ${icon('external', 'icon--sm')}<span class="sr-only"> (opens in a new tab)</span></a><span class="industry__note">Referenced as an example — not an endorsement or affiliation.</span></div></aside>`;
  }
  if (b.widget) return `<div class="widget" data-widget="${esc(b.widget)}"></div>`;
  if (b.note) return `<p class="block-note">${icon('info', 'icon--sm')}<span>${inline(b.note)}</span></p>`;
  if (b.mock) return swMockHTML(b.mock);
  if (b.libPhoto) return swPhotoHTML(b.libPhoto, b.caption);
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
  noteAnswer(q, ok);
  return { ok, html: `<div class="feedback feedback--${ok ? 'correct' : 'wrong'}" role="status">${icon(ok ? 'check-circle' : 'x-circle')}<div><strong>${ok ? 'Correct' : 'Not quite'}</strong><p>${inline(q.e)}</p></div></div>` };
}

function lessonCheckHTML(x) {
  const qs = x.l.check || [];
  const prev = state.checks[x.key];
  return `<div class="check" data-check="${x.key}">
    <div class="check__head"><div><strong>Knowledge check</strong><div class="small muted" data-check-sum>${prev ? `Last score: ${prev.score}/${prev.total}` : `${qs.length} questions · instant feedback`}</div></div>
      <div class="check__progress" aria-hidden="true">${qs.map(() => '<span></span>').join('')}</div></div>
    ${qs.map((q, i) => `<div class="q" data-qi="${i}"><div class="q__type"><span class="badge badge--outline">${Q_LABEL[q.t] || 'Question'}</span></div>${questionHTML(q, `${x.key}-q${i}`, q.t === 'tf' ? null : shuffle(qOptions(q).map((_, n) => n)))}
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
  [/^\/library(?:\/([\w-]+))?$/, viewLibrary],
  [/^\/(?:academy\/)?software(?:\/([\w-]+))?$/, viewSoftware],
  [/^\/privacy$/, viewPrivacy],
  [/^\/review$/, viewReview],
  [/^\/simulations$/, viewSimulations],
  [/^\/trainer$/, viewTrainer],
  [/^\/verify(?:\/([\w-]+))?$/, viewVerify],
  [/^\/cheatsheet\/(\w+)\/(\w+)$/, viewCheatSheet],
  [/^\/achievements$/, viewAchievements],
  [/^\/profile$/, viewProfile]
];
function router() {
  // In-page anchors (#sec-…, #main) are not routes — let the browser handle them.
  if (location.hash && !location.hash.startsWith('#/')) return;
  if (viewCleanup) { try { viewCleanup(); } catch (e) { console.warn('View cleanup failed:', e); } viewCleanup = null; }
  const path = decodeURIComponent((location.hash || '#/dashboard').slice(1).split('?')[0]);
  // Lesson text loads on demand: fetch it first, then render this route again.
  const need = contentFor(path);
  if (need && !hasContent(need === 'all' ? undefined : need)) {
    const hash = location.hash; const view = $('#view');
    view.innerHTML = '<div class="page"><div class="skeleton" style="height:28px;width:40%;border-radius:8px"></div><div class="skeleton mt-4" style="height:220px;border-radius:12px"></div><span class="sr-only">Loading…</span></div>';
    view.setAttribute('aria-busy', 'true');
    loadContent(need === 'all' ? undefined : need)
      .then(() => { view.removeAttribute('aria-busy'); if (location.hash === hash) router(); })
      .catch((e) => {
        console.warn('Lesson content failed to load:', e && e.message); view.removeAttribute('aria-busy');
        if (location.hash !== hash) return;
        view.innerHTML = `<div class="page">${stateBlock({ ic: 'alert', title: 'This lesson couldn’t load', text: navigator.onLine ? 'Please try again in a moment.' : 'You’re offline and this lesson hasn’t been saved on this device yet. Connect to the internet to open it.', error: true, action: '<button type="button" class="btn btn--primary" data-retry-content>Try again</button>' })}</div>`;
        const b = $('[data-retry-content]', view); if (b) b.addEventListener('click', () => router());
        document.title = 'Couldn’t load · MC Academy';
      });
    return;
  }
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
  // The last crumb can carry a short name for the phone top bar, where only it shows.
  el.innerHTML = items.map(([label, href, short], i) => i === items.length - 1
    ? `<span aria-current="page">${short ? `<span class="crumbs__full">${esc(label)}</span><span class="crumbs__short" aria-hidden="true">${esc(short)}</span>` : esc(label)}</span>`
    : `<a href="${href}">${esc(label)}</a>${icon('chev-r')}`).join('');
}
function setNav(navId, bottomId) {
  document.body.dataset.nav = navId || '';
  $$('#sideNav [data-nav]').forEach((a) => { if (a.dataset.nav === navId) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  // Keep the collapsed Practice tools group open while one of its pages is showing.
  const group = $('#navPractice'); if (group && $('[aria-current]', group)) group.open = true;
  $$('.bottom-nav [data-nav]').forEach((a) => { if (a.dataset.nav === (bottomId || navId)) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
}
function refreshChrome() {
  $('#navTracks').innerHTML = TRACKS.map((t) => {
    const s = trackStats(t);
    return `<a class="nav-item nav-track" href="#/track/${t.id}" data-nav="track-${t.id}"><span class="nav-dot" style="--c:${t.color}" aria-hidden="true"></span><span>${t.level}</span><span class="nav-track__meta">${s.done}/${s.lessons}</span><span class="nav-track__bar" aria-hidden="true"><span style="--p:${s.p};--c:${t.color}"></span></span></a>`;
  }).join('');
  const navId = document.body.dataset.nav;
  if (navId) $$('#navTracks [data-nav]').forEach((a) => { if (a.dataset.nav === navId) a.setAttribute('aria-current', 'page'); });
  updateMissedBadge();
  const p = overallProgress();
  $('#topProgress').innerHTML = ring(p, { size: 38, stroke: 3.5, fs: 10.5, cls: 'topbar__ring' });
  $('#topProgress').setAttribute('aria-label', `Overall progress ${pct(p)}% — open dashboard`);
  const name = state.name || 'Coordinator';
  const ctx = currentContext();
  $('#sidebarFoot').innerHTML = `<a class="side-profile" id="profileBtn" href="#/profile" data-nav="profile" aria-label="Your profile: ${esc(name)}">${avatarHTML(34, 'side-avatar')}<span class="grow"><strong>${esc(name)}</strong><small>${ctx.t.level} track · ${pct(p)}%</small></span>${icon('chev-r', 'icon--sm')}</a>`;
  if (document.body.dataset.nav === 'profile') $('#profileBtn').setAttribute('aria-current', 'page');
  $('#sidebarFoot').insertAdjacentHTML('beforeend', cloudAccountHTML());
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
    body: `<div class="field"><label for="nameInput">Name shown on your dashboard and certificates</label><input class="input" id="nameInput" maxlength="60" value="${esc(state.name)}" placeholder="e.g., Jordan Taylor" autofocus><span class="hint">${CLOUD.user ? 'Synced with your account.' : 'Stored in this browser.'}</span></div>`,
    foot: `<button class="btn btn--ghost" data-close>Cancel</button><button class="btn btn--primary" id="nameSave">Save</button>`,
    onOpen: (m, close) => {
      const saveName = () => { state.name = $('#nameInput', m).value.trim().slice(0, 60); touch('name'); save(); refreshChrome(); close(); toast({ kind: 'success', title: 'Profile updated' }); if ((location.hash || '').match(/dashboard|^$|^#\/?$/)) router(); };
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
  const rec = recommended();
  const done = completedCount();
  const avg = avgQuiz();
  const certs = TRACKS.filter(finalPassed).length;
  const days = streak();
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const first = state.name ? state.name.trim().split(/\s+/)[0] : '';
  const prof = state.profile || {};
  const roleLine = [prof.role, prof.company, prof.city].filter(Boolean).map(esc).join(' · ');
  const lastX = state.last && LESSON_MAP.get(state.last);
  const cont = lastX && !isDone(lastX.key);
  const next = cont ? { kind: 'Continue where you left off', title: lastX.l.title, sub: `${lastX.t.level} · Module ${lastX.m.id.slice(1)}: ${lastX.m.title}`, href: lessonHref(lastX), ic: 'book', cta: 'Continue' }
    : rec ? { kind: done ? 'Up next' : 'Start here', title: rec.title, sub: rec.sub, href: rec.href, ic: rec.icon, cta: done ? 'Start' : 'Start learning' } : null;

  // Today: lessons finished today against the daily goal, and this calendar week (Monday to Sunday).
  const today = todayStr();
  const goal = state.goal || 1;
  const doneToday = Object.values(state.completed).filter((v) => typeof v === 'number' && dayKey(new Date(v)) === today).length;
  const studied = new Set(state.days);
  const monday = new Date(); monday.setHours(12, 0, 0, 0); monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  const week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((label, i) => {
    const d = new Date(monday); d.setDate(monday.getDate() + i);
    const key = dayKey(d);
    const st = studied.has(key) ? 'studied' : key === today ? 'today' : key < today ? 'missed' : 'future';
    return { key, label, st, full: d.toLocaleDateString('en-GB', { weekday: 'long' }) };
  });
  const weekDays = week.filter((d) => d.st === 'studied').length;
  const dayState = { studied: 'studied', today: 'not studied yet', missed: 'not studied', future: 'still to come' };

  // Recent activity: finished lessons, quizzes and final assessments, newest first.
  const activity = [];
  Object.entries(state.completed).forEach(([k, at]) => { const x = LESSON_MAP.get(k); if (x && typeof at === 'number') activity.push({ at, ic: 'check-circle', label: x.l.title, sub: `${x.t.level} · Lesson`, href: lessonHref(x) }); });
  TRACKS.forEach((t) => t.modules.forEach((m) => { const q = state.quizzes[quizKey(t, m)]; if (q && q.at) activity.push({ at: q.at, ic: 'target', label: `Module ${m.id.slice(1)} quiz: ${m.title}`, sub: `${t.level} · Quiz`, href: `#/quiz/${t.id}/${m.id}`, s: q.best }); }));
  TRACKS.forEach((t) => { const f = state.finals[t.id]; if (f && f.at) activity.push({ at: f.at, ic: 'award', label: t.final.title, sub: `${t.level} · Final assessment`, href: `#/final/${t.id}`, s: f.score }); });
  activity.sort((a, b) => b.at - a.at);

  const earned = ACHIEVEMENTS.filter((a) => state.achievements[a.id]);
  const upcoming = ACHIEVEMENTS.filter((a) => !state.achievements[a.id]).slice(0, 3);
  const missed = Object.keys(state.missed || {}).length;

  const html = `<div class="page dash">
    <section class="hero dash-top" aria-labelledby="dashTitle">
      <div class="dash-top__who">
        <a class="dash-top__avatar" href="#/profile" aria-label="Your profile">${avatarHTML(64)}</a>
        <div class="grow">
          <span class="eyebrow">${greet}</span>
          <h1 id="dashTitle">${first ? esc(first) : 'Welcome to MC Academy'}</h1>
          <p class="dash-top__role">${roleLine || `<a href="#/profile">Add your role and company</a>`}</p>
        </div>
        <div class="dash-top__ring">${ring(p, { size: 88, stroke: 8, cls: 'ring--dark', label: pct(p) + '%', sub: 'Overall', color: '#4f8cc9', fs: 20 })}</div>
      </div>
      ${next ? `<a class="dash-next" href="${next.href}">
        <span class="dash-next__ic">${icon(next.ic)}</span>
        <span class="dash-next__text"><small>${next.kind}</small><strong>${esc(next.title)}</strong><span>${esc(next.sub)}</span></span>
        <span class="btn btn--primary dash-next__btn">${icon('play')} ${next.cta}</span>
      </a>` : `<a class="dash-next" href="#/achievements"><span class="dash-next__ic">${icon('award')}</span><span class="dash-next__text"><small>Everything complete</small><strong>You've finished every track.</strong><span>View and share your certificates.</span></span><span class="btn btn--primary dash-next__btn">${icon('award')} Certificates</span></a>`}
      <div class="dash-top__bar">${progressBar(p, { label: 'Overall progress' })}<span class="small">${done} of ${LESSONS.length} lessons · ${pct(p)}% overall</span></div>
    </section>

    <div class="dash-today mt-6">
      <section class="card dash-week" aria-labelledby="weekTitle">
        <div class="dash-week__head"><h2 id="weekTitle">This week</h2><a class="small" href="#/profile">Goal: ${goal} lesson${goal === 1 ? '' : 's'} a day</a></div>
        <div class="dash-week__stats">
          <div class="dash-week__stat"><span class="dash-week__ic${days ? ' is-on' : ''}">${icon('zap')}</span><div><strong class="num">${days}</strong><span>day streak</span></div></div>
          <div class="dash-week__stat">${ring(Math.min(doneToday / goal, 1), { size: 40, stroke: 5, label: ' ', color: doneToday >= goal ? 'var(--success)' : '' })}<div><strong class="num">${Math.min(doneToday, 99)}<small>/${goal}</small></strong><span>${doneToday >= goal ? 'goal reached today' : 'lessons today'}</span></div></div>
        </div>
        <ol class="week" aria-label="Days studied this week">${week.map((d) => `<li class="week__day is-${d.st}${d.key === today ? ' is-now' : ''}"><span class="week__mark" aria-hidden="true">${d.st === 'studied' ? icon('check', 'icon--sm') : ''}</span><span class="week__label" aria-hidden="true">${d.label}</span><span class="sr-only">${d.full}${d.key === today ? ' (today)' : ''}: ${dayState[d.st]}</span></li>`).join('')}</ol>
        <p class="dash-week__foot">${weekDays} of 7 days studied this week</p>
      </section>
      <div class="dash-stats">
        <div class="card dash-stat"><span class="stat__icon">${icon('target')}</span><div><strong class="num">${avg == null ? '—' : pct(avg) + '%'}</strong><span>Average quiz score</span>${progressBar(avg || 0, { cls: 'progress--sm dash-stat__bar', label: 'Average quiz score' })}</div></div>
        <a class="card card--hover dash-stat" href="#/achievements"><span class="stat__icon">${icon('award')}</span><div><strong class="num">${certs}<small> / ${TRACKS.length}</small></strong><span>Certificates</span>${progressBar(certs / TRACKS.length, { cls: 'progress--sm dash-stat__bar', color: 'var(--success)', label: 'Certificates earned' })}</div></a>
      </div>
    </div>

    <div class="dash-cols mt-6">
      <div class="stack">
        <div id="dashAssigned" class="dash-assigned-slot"></div>
        <section class="card" aria-labelledby="tpTitle">
          <div class="card__head"><h2 id="tpTitle">Your tracks</h2><a class="btn btn--ghost btn--sm" href="#/curriculum">Curriculum ${icon('chev-r', 'icon--sm')}</a></div>
          <div class="card__body track-progress">
            ${TRACKS.map((t) => { const s = trackStats(t); return `<a class="tp-row" href="#/track/${t.id}" style="color:inherit;text-decoration:none">
              <span class="track-icon" style="--c:${t.color}">${icon(t.icon)}</span>
              <span><span class="tp-row__name"><strong>${t.level}</strong><span class="muted">${s.done}/${s.lessons} lessons${s.final ? ' · Certified' : ''}</span></span>${progressBar(s.p, { color: t.color, label: `${t.level} progress` })}</span>
              <span class="tp-row__pct">${pct(s.p)}%</span></a>`; }).join('')}
          </div>
        </section>
        <section class="card" aria-labelledby="actTitle">
          <div class="card__head"><h2 id="actTitle">Recent activity</h2></div>
          <div class="card__body">${activity.length ? `<ul class="activity">${activity.slice(0, 6).map((r) => `<li><a href="${r.href}"><span class="activity__ic">${icon(r.ic, 'icon--sm')}</span><span class="grow"><strong>${esc(r.label)}</strong><span>${esc(r.sub)} · ${timeAgo(r.at)}</span></span>${r.s != null ? scorePill(r.s) : ''}</a></li>`).join('')}</ul>`
            : `<p class="small muted">Nothing yet. Finished lessons and quiz results will show up here.</p>`}</div>
        </section>
      </div>
      <div class="stack">
        <section class="card" aria-labelledby="practTitle">
          <div class="card__head"><h2 id="practTitle">Practice</h2><a class="btn btn--ghost btn--sm" href="#/practice">All tools ${icon('chev-r', 'icon--sm')}</a></div>
          <div class="card__body dash-links">
            ${[['#/review', 'rotate', 'Review mistakes', missed ? `${missed} question${missed === 1 ? '' : 's'} to revisit` : 'No missed questions'], ['#/scenarios', 'message', 'Scenario simulator', 'Answer real driver and shop calls'], ['#/flashcards', 'cards', 'Flashcards', `${Object.keys(state.flash.known).length} cards known`], ['#/calculators', 'calc', 'Calculators', 'Cost, downtime and rates']].map(([href, ic, t, d]) => `<a href="${href}"><span class="activity__ic">${icon(ic, 'icon--sm')}</span><span class="grow"><strong>${t}</strong><span>${d}</span></span>${icon('chev-r', 'icon--sm')}</a>`).join('')}
          </div>
        </section>
        <section class="card" aria-labelledby="achTitle">
          <div class="card__head"><h2 id="achTitle">Achievements</h2><a class="btn btn--ghost btn--sm" href="#/achievements">${earned.length}/${ACHIEVEMENTS.length} ${icon('chev-r', 'icon--sm')}</a></div>
          <div class="card__body" style="display:grid;gap:var(--sp-3)">${(upcoming.length ? upcoming : earned.slice(-3)).map(achHTML).join('')}</div>
        </section>
      </div>
    </div>
    <p class="scope-note">${icon('info', 'icon--sm')}<span>Educational training focused on U.S. trucking practice. Not legal or regulatory advice — company procedures and current official rules come first. <a href="#/reference">Sources &amp; scope</a></span></p>
  </div>`;
  return { html, title: 'Dashboard', nav: 'dashboard', after: (v) => dashAssigned($('#dashAssigned', v)) };
}
/* "Today", "Yesterday", "3 days ago", then a date. */
function timeAgo(at) {
  const days = Math.round((new Date(todayStr()) - new Date(dayKey(new Date(at)))) / 864e5);
  return days <= 0 ? 'Today' : days === 1 ? 'Yesterday' : days < 7 ? `${days} days ago` : new Date(at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}
function achHTML(a) {
  const got = state.achievements[a.id];
  return `<div class="ach ${got ? 'is-earned' : ''}"><span class="ach__icon">${icon(got ? a.icon : 'lock')}</span><div><h3>${esc(a.title)}</h3><p>${esc(a.desc)}${got ? ` · ${new Date(got).toLocaleDateString()}` : ''}</p></div></div>`;
}

/* ---------- Curriculum ---------- */
function viewCurriculum() {
  const html = `<div class="page">
    ${pageHead({ eyebrow: `${icon('layers', 'icon--sm')} Curriculum`, title: 'Your learning path', text: 'Three progressive maintenance tracks take you from zero knowledge to expert fleet maintenance coordination, and an optional Operations track covers the freight side: brokers, dispatch, Hours of Service and invoicing. Start with the guided path below. It shows what to learn first, what to learn together, and what can wait.' })}
    ${learningGuideHTML()}
    <div class="section-head"><div><span class="eyebrow">All tracks</span><h2>Beginner, Advanced, Expert and Operations</h2></div></div>
    <div class="grid grid--3 stagger">${TRACKS.map(trackCard).join('')}</div>
    <div class="section-head"><div><span class="eyebrow">How it works</span><h2>Built around the real job</h2></div></div>
    <div class="info-grid stagger">
      ${[['book', 'Structured lessons', 'Objectives, explanation, real-world examples, visuals, practical examples and key takeaways.'], ['target', 'Knowledge checks', 'Multiple choice, true/false, scenario and what-would-you-do questions with explanations.'], ['message', 'Scenario practice', 'Respond to realistic driver, dispatch, shop and management messages.'], ['clipboard', 'Practical exercises', 'Extract case data, prioritize, classify urgency and review estimates.'], ['award', 'Final assessments', 'A realistic call, a multi-case operations board and a full-day fleet simulation.']].map(([i, t, d]) => `<div class="info-tile"><div class="info-tile__icon">${icon(i)}</div><h3>${t}</h3><p>${d}</p></div>`).join('')}
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
      <h2>${esc(t.title)}</h2><p>${esc(t.summary)}</p>
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
    <header class="page-head page-head--ring">
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
      <div class="grow"><span class="eyebrow">Final ${t.final.kind === 'sim' ? 'simulation' : 'assessment'} · ~${t.final.minutes} min</span><h2 style="margin-top:4px;font-size:var(--fs-lg)">${esc(t.final.title)}</h2>
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
      <span class="grow"><span class="module__title">${esc(m.title)}</span><br><span class="module__sub">${esc(m.summary)}</span>${moduleGuideHTML(t, m)}</span>
      <span class="module__right"><span class="module__mini">${progressBar(s.done / s.total, { cls: 'progress--sm', color: t.color, label: `${m.title} progress` })}</span><span class="small muted num">${s.done}/${s.total}</span>${icon('chev-d')}</span>
    </button>
    <div class="module__body" id="${pid}"><div><div class="module__lessons">
      ${m.lessons.map((l) => { const key = `${t.id}.${m.id}.${l.id}`; const x = LESSON_MAP.get(key); return `<a class="lesson-row ${isDone(key) ? 'is-done' : ''} ${cur === key && !isDone(key) ? 'is-current' : ''}" href="${lessonHref(x)}">
        <span class="lesson-row__state">${icon('check')}</span><span class="lesson-row__title">${esc(l.title)}</span>
        <span class="lesson-row__meta">${state.bookmarks.includes(key) ? icon('bookmark', 'icon--sm') : ''}<span class="hide-sm">${icon('clock', 'icon--sm')}</span> ${l.minutes} min</span></a>`; }).join('')}
      <a class="lesson-row lesson-row--quiz ${q && q.best >= 0.8 ? 'is-done' : ''}" href="#/quiz/${t.id}/${m.id}"><span class="lesson-row__state">${icon(q && q.best >= 0.8 ? 'check' : 'target')}</span><span class="lesson-row__title">Module quiz</span><span class="lesson-row__meta">${q ? scorePill(q.best) : `${QUIZ_SIZE[quizKey(t, m)] || 0} questions`}</span></a>
      <a class="lesson-row lesson-row--sheet" href="#/cheatsheet/${t.id}/${m.id}"><span class="lesson-row__state">${icon('file')}</span><span class="lesson-row__title">Cheat sheet</span><span class="lesson-row__meta">Printable summary</span></a>
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
  const notesHTML = hasNotes ? `<section class="lesson-section" id="sec-notes"><h2><span class="sec-ico">${icon('bulb')}</span>Field notes</h2><div class="compare">${l.tips ? `<div class="compare__col compare__col--yes"><h3>${icon('bulb')} Pro tips</h3><ul>${l.tips.map((i) => `<li>${icon('check')}<span>${inline(i)}</span></li>`).join('')}</ul></div>` : ''}${l.mistakes ? `<div class="compare__col compare__col--no"><h3>${icon('alert')} Common mistakes</h3><ul>${l.mistakes.map((i) => `<li>${icon('x')}<span>${inline(i)}</span></li>`).join('')}</ul></div>` : ''}</div></section>` : '';
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

      <section class="lesson-section" id="sec-explanation"><h2><span class="sec-ico">${icon('book')}</span>Explanation</h2><div class="prose">${renderBlocks(l.body)}</div>${libLessonStrip(key)}</section>

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
      ${reportHTML(`${t.level} · M${m.id.slice(1)} · ${l.title}`)}
    </article>

    <aside class="lesson-rail" aria-label="Lesson navigation">
      <div class="rail-card"><h2>On this page</h2><nav class="toc">${sections.map(([id, label]) => `<a href="#sec-${id}" data-toc="${id}">${label}</a>`).join('')}</nav></div>
      <div class="rail-card"><h2>Module ${m.id.slice(1)} · ${esc(m.title)}</h2><div class="rail-lessons">
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
    crumbs: [['Curriculum', '#/curriculum'], [t.level, `#/track/${t.id}`], [`M${m.id.slice(1)}`, `#/track/${t.id}`], [l.title, '', `M${m.id.slice(1)} · Lesson ${m.lessons.indexOf(l) + 1}`]],
    after: (v) => {
      mountLessonCheck(v, x);
      $$('[data-toc]', v).forEach((a) => a.addEventListener('click', (e) => {
        e.preventDefault();
        const sec = document.getElementById('sec-' + a.dataset.toc);
        sec.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
      }));
      $$('[data-bookmark]', v).forEach((b) => b.addEventListener('click', () => {
        const on = !state.bookmarks.includes(key);
        state.bookmarks = on ? [...state.bookmarks, key] : state.bookmarks.filter((k) => k !== key); touch('bm:' + key); save();
        $$('[data-bookmark]', v).forEach((bb) => { bb.setAttribute('aria-pressed', on); bb.setAttribute('aria-label', on ? 'Remove bookmark' : 'Bookmark this lesson'); if (bb.dataset.tip) bb.dataset.tip = on ? 'Bookmarked' : 'Bookmark'; });
        toast({ kind: on ? 'success' : 'info', title: on ? 'Lesson bookmarked' : 'Bookmark removed', icon: 'bookmark', timeout: 2500 });
      }));
      const setComplete = (on) => {
        if (on) state.completed[key] = Date.now(); else delete state.completed[key];
        touch('done:' + key); save();
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
        if (!isDone(key)) { state.completed[key] = Date.now(); touch('done:' + key); save(); checkAchievements(); toast({ kind: 'success', title: 'Lesson complete', text: l.title, timeout: 2500 }); }
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
      <div class="row row--between row--wrap"><h2 style="font-size:var(--fs-lg)">What you'll do</h2><span class="badge badge--outline">${icon('clock')} ~${t.final.minutes} min · Pass 75%</span></div>
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
  const date = f && f.at ? new Date(f.at).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
  return `<div class="certificate">
    <div class="cert-seal">${icon('award', 'icon--lg')}</div>
    <p class="cert-eyebrow mt-4">Maintenance Coordinator Academy · Certificate of Completion</p>
    <h2>${esc(t.title)}</h2>
    <p>This certifies that</p>
    <div class="cert-name">${esc(state.name || 'Your Name')}</div>
    <p>has completed the ${t.level} curriculum and passed the final ${t.final.kind === 'sim' ? 'simulation' : 'assessment'}<br>with a score of <strong style="color:#0b1a2e">${f ? pct(f.score) : 0}%</strong>.</p>
    <div class="cert-meta"><div><strong>${date}</strong>Date awarded</div><div><strong>${t.modules.length} modules · ${t.modules.reduce((a, m) => a + m.lessons.length, 0)} lessons</strong>Curriculum</div>${(state.certIds || {})[t.id] ? `<div><strong>${esc(state.certIds[t.id])}</strong>Verification code</div>` : `<div><strong>MCA-${t.id.slice(0, 3).toUpperCase()}-${(f && f.at ? f.at : 0).toString(36).toUpperCase().slice(-6)}</strong>Record ID</div>`}</div>
    ${(state.certIds || {})[t.id] ? `<div class="cert-check">${qrSVG(VERIFY_BASE + state.certIds[t.id], 'QR code: check this certificate online')}<p class="cert-verify">Scan or visit<br>${esc(VERIFY_BASE.replace(/^https:\/\//, ''))}${esc(state.certIds[t.id])}</p></div>` : ''}
    <p class="cert-note">A self-paced training record from MC Academy; the final assessment is unsupervised. It is not a CDL, government license or third-party industry certification.</p>
  </div>`;
}
function showCertificate(t) {
  openModal({
    title: `${t.level} certificate`, size: 'modal--lg',
    body: `${!state.name ? `<div class="callout callout--info mb-4">${icon('info')}<div><p>Add your name so it appears on the certificate.</p></div></div>` : ''}${(state.certIds || {})[t.id] ? '' : `<div class="callout callout--tip mb-4">${icon('bulb')}<div><p>${CLOUD.user ? 'Get a verification code so an employer can confirm this certificate online.' : '<button type="button" class="link-btn" data-cloud="in">Sign in</button> to get a verification code an employer can check online.'}</p></div></div>`}<div id="certWrap">${certificateHTML(t)}</div>`,
    foot: `<button class="btn" id="certName">${icon('users')} ${state.name ? 'Edit name' : 'Add name'}</button>${CLOUD.user && !(state.certIds || {})[t.id] ? `<button class="btn" id="certIssue">${icon('award')} Get verification code</button>` : ''}<button class="btn btn--primary" id="certPrint">${icon('print')} Print / Save PDF</button>`,
    onOpen: (m, close) => {
      const issue = $('#certIssue', m);
      if (issue) issue.addEventListener('click', async () => {
        if (!state.name && !(CLOUD.user.user_metadata || {}).full_name) { toast({ kind: 'warning', title: 'Add your name first' }); return; }
        issue.disabled = true;
        try { const code = await issueCertificate(t); $('#certWrap', m).innerHTML = certificateHTML(t); issue.remove(); toast({ kind: 'success', title: 'Verification code issued', text: code }); }
        catch (e) { issue.disabled = false; console.warn(e && e.message); toast({ kind: 'warning', title: 'Couldn\'t issue the code', text: /not passed/.test((e && e.message) || '') ? 'Your synced progress doesn\'t show this final as passed yet.' : 'Please try again in a moment.' }); }
      });
      $('#certPrint', m).addEventListener('click', () => { $('#printRoot').innerHTML = certificateHTML(t); window.print(); });
      $('#certName', m).addEventListener('click', () => { close(); setTimeout(editName, 250); });
    }
  });
}

/* ---------- Practice hub ---------- */
function viewPractice() {
  const tools = [
    ['review', 'rotate', 'Review my mistakes', 'Retry questions you answered wrong, spaced out over 1, 3 and 7 days until they stick.', `${missedCount()} due now`],
    ['simulations', 'activity', 'Simulations', 'Build a work order, triage alerts, close out DVIRs, order a part with a core charge and start a warranty claim on simplified training screens.', `${SIM_LIST.filter(([id]) => state.exercises[id]).length}/${SIM_LIST.length} completed`],
    ['scenarios', 'message', 'Scenario Simulator', 'Respond to realistic messages from drivers, dispatch, shops and management — and see the reasoning.', `${Object.keys(state.scen).length}/${SCENARIOS.length} attempted`],
    ['trees', 'branch', 'Decision Trees', 'Work step by step through maintenance situations where each choice changes the outcome.', `${Object.keys(state.trees).length}/${Object.keys(TREES).length} explored`],
    ['exercises', 'clipboard', 'Practical Exercises', 'Extract case data, classify urgency, order workflows and review estimates.', `${Object.keys(state.exercises).length} completed`],
    ['flashcards', 'cards', 'Flashcards', 'Components, terminology, abbreviations, processes and diagnostics.', `${Object.keys(state.flash.known).length}/${FLASHCARDS.length} known`],
    ['calculators', 'calc', 'Calculators', 'Cost per mile, downtime cost, repair comparison, PM compliance, availability, MTBF/MTTR.', `${Object.keys(state.calcUsed).length}/6 used`],
    ['fleet', 'truck', 'Fleet Board', 'An interactive fleet status dashboard with PM status, open repairs, downtime and repeat failures.', `${FLEET.length} units`]
  ];
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('flask', 'icon--sm')} Practice Lab`, title: 'Practice like it\'s a real shift', text: 'Hands-on tools to build judgment and speed. Everything here also appears inside the relevant lessons.' })}
    <div class="grid grid--3 lab-grid stagger">${tools.map(([id, ic, t, d, meta]) => `<a class="card card--hover" href="#/${id}"><div class="lab-card"><span class="lab-card__icon">${icon(ic)}</span><h2>${t}</h2><p>${d}</p><div class="row row--between lab-card__foot"><span class="lab-card__go">Open ${icon('arrow-r')}</span><span class="small muted lab-card__meta">${meta}</span></div></div></a>`).join('')}</div></div>`;
  return { html, title: 'Practice Lab', nav: 'practice', bottom: 'practice', crumbs: [['Practice Lab']] };
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
    <aside class="card card--pad-sm" aria-label="Your path"><div class="row row--between"><h2 style="font-size:var(--fs-md)">Your path</h2><button type="button" class="btn btn--ghost btn--sm" data-tree-restart>${icon('rotate')} Restart</button></div><ol class="tree-path mt-4" data-tree-path><li><strong>Start</strong><small>${esc(tree.intro)}</small></li></ol></aside></div>`;
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
    <div class="accordion">${items.map((x) => { const pid = nextId('exacc'); const sc = state.exercises['ex:' + x.key]; return `<div class="acc-item" data-exkey="${x.key}"><h2 class="acc-heading"><button type="button" class="acc-trigger" aria-expanded="false" aria-controls="${pid}"><span class="badge badge--track" style="--c:${x.t.color}">${x.t.level.slice(0, 3)}</span><span class="grow">${esc(x.l.practical.title || EX_META[x.l.practical.exercise.type][1])}<br><span class="small muted" style="font-weight:400">M${x.m.id.slice(1)} · ${esc(x.l.title)}</span></span>${sc != null ? scorePill(sc) : ''}${icon('chev-d')}</button></h2><div class="acc-panel" id="${pid}" role="region"><div><div class="acc-panel__inner" data-exslot></div></div></div></div>`; }).join('')}</div></div>`;
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
        if (!cards.length) { $('.fc-stage', v).innerHTML = stateBlock({ ic: 'check-circle', title: 'Nothing left to review', text: 'You know every card in this deck. Choose another deck or reset the filter.', action: `<button class="btn btn--primary" data-reload>Show all cards</button>` }); return; }
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
      $('[data-know]', v).addEventListener('click', () => { state.flash.known[cid(cards[i])] = 1; touch('fk:' + cid(cards[i])); save(); checkAchievements(); move(1); });
      $('[data-review]', v).addEventListener('click', () => { delete state.flash.known[cid(cards[i])]; touch('fk:' + cid(cards[i])); save(); move(1); });
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
      const col = (n, x) => `<div class="vcol ${win === n ? 'is-winner' : ''}"><h3>Vendor ${n} ${win === n ? '<span class="badge badge--success">Lower total</span>' : ''}</h3><div class="calc__rows"><div><span>Invoice</span><strong>${fmtMoney(x.inv)}</strong></div><div><span>Downtime</span><strong>${fmtMoney(x.dt)}</strong></div><div class="total"><span>Total</span><strong>${fmtMoney(x.total)}</strong></div></div></div>`;
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
  return `<div class="card card--pad" data-dts><div class="row row--between row--wrap"><div><span class="eyebrow">Case study · T-108</span><h3 style="font-size:var(--fs-lg);margin-top:4px">Where did <span data-dt-total class="num">31</span> hours go?</h3></div>
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
  return `<div class="card card--pad" data-life><div class="row row--between row--wrap"><div><span class="eyebrow">Illustrative lifecycle</span><h3 style="font-size:var(--fs-lg);margin-top:4px">Annual maintenance cost vs. vehicle value</h3></div>
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
      else if (SIMS[w]) SIMS[w](el);
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
      <div class="row row--wrap gl-cats" role="group" aria-label="Filter by category">${cats.map((c) => `<button type="button" class="chip" data-cat="${c}" aria-pressed="${c === 'All'}">${c}</button>`).join('')}</div>
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
        return `<div class="gl-item" id="${pid}-item" data-term="${esc(g.term)}"><h2 class="acc-heading"><button type="button" class="gl-item__head" aria-expanded="false" aria-controls="${pid}"><span class="gl-item__abbr" aria-hidden="true">${acronym ? esc(g.term) : icon(GL_CAT_ICON[g.cat] || 'book', 'icon--sm')}</span><span class="grow"><span class="gl-item__term">${hl(g.term)}</span><br><span class="gl-item__full">${hl(g.full)}</span><span class="gl-item__cat">${g.cat}</span></span><span class="badge badge--outline gl-item__badge">${g.cat}</span>${icon('chev-d')}</button></h2>
          <div class="acc-panel" id="${pid}" role="region"><div><div class="acc-panel__inner">
            ${LIB_TERM.has(g.term.toLowerCase()) ? (() => { const vx = LIB_TERM.get(g.term.toLowerCase()); return `<a class="gl-visual" href="#/library/${vx.id}"><span class="gl-visual__img">${libThumb(vx)}</span><span><strong>See what it looks like</strong><span class="small muted">${esc(vx.name)} in the Visual Library</span></span>${icon('chev-r', 'icon--sm')}</a>`; })() : ''}
            <div class="gl-detail"><div><h3>${icon('book')} Definition</h3><p>${hl(g.def)}</p></div><div><h3>${icon('bulb')} In plain terms</h3><p>${hl(g.simple)}</p></div><div><h3>${icon('truck')} Real-world example</h3><p>${hl(g.example)}</p></div></div>
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
    after: (v) => $$('[data-unbm]', v).forEach((b) => b.addEventListener('click', () => { state.bookmarks = state.bookmarks.filter((k) => k !== b.dataset.unbm); touch('bm:' + b.dataset.unbm); save(); toast({ title: 'Bookmark removed', icon: 'bookmark', timeout: 2000 }); router(); }))
  };
}

/* ---------- Achievements ---------- */
function viewAchievements() {
  const earned = ACHIEVEMENTS.filter((a) => state.achievements[a.id]).length;
  const html = `<div class="page">${pageHead({ eyebrow: `${icon('award', 'icon--sm')} Progress`, title: 'Certificates & achievements', text: 'Certificates are awarded for passing each track\'s final assessment (75%+). Achievements mark milestones along the way.', right: ring(earned / ACHIEVEMENTS.length, { size: 96, stroke: 8, label: `${earned}/${ACHIEVEMENTS.length}`, fs: 18 }) })}
    <div class="grid grid--3 stagger">${TRACKS.map((t) => { const f = state.finals[t.id]; const ok = f && f.passed; return `<div class="card cert-card ${ok ? 'is-earned' : ''}"><span class="cert-card__seal">${icon(ok ? 'award' : 'lock', 'icon--lg')}</span><div class="grow"><span class="eyebrow">${t.level} certificate</span><h2 style="font-size:var(--fs-md);margin:2px 0 4px">${esc(t.title)}</h2><p class="small">${ok ? `Earned · ${pct(f.score)}%` : f ? `Best ${pct(f.score)}% — 75% needed` : 'Not yet attempted'}</p></div>${ok ? `<button type="button" class="btn btn--sm" data-cert="${t.id}">View</button>` : `<a class="btn btn--sm" href="#/final/${t.id}">${f ? 'Retry' : 'Start'}</a>`}</div>`; }).join('')}</div>
    <div class="section-head"><h2>Achievements</h2><span class="small muted">${earned} of ${ACHIEVEMENTS.length} earned</span></div>
    <div class="ach-grid stagger">${ACHIEVEMENTS.map(achHTML).join('')}</div>
    <div class="section-head"><h2>Data</h2></div>
    <div class="card card--pad row row--between row--wrap"><div>${CLOUD.user ? `<strong>Your progress syncs to ${esc(CLOUD.user.email || 'your account')}.</strong><p class="small">It's saved on this device and in your account, so you can continue on any device where you sign in.</p>` : `<strong>Your progress is stored in this browser.</strong><p class="small">Clearing browser data or switching devices will reset it. <button type="button" class="link-btn" data-cloud="in">Sign in</button> to keep it in sync across devices.${storageOk ? '' : ' Storage is currently unavailable — progress will not persist.'}</p>`}</div><a class="btn" href="#/profile">${icon('user')} Export, reset or delete in your profile</a></div>
  </div>`;
  return {
    html, title: 'Achievements', nav: 'achievements', crumbs: [['Achievements']],
    after: (v) => $$('[data-cert]', v).forEach((b) => b.addEventListener('click', () => showCertificate(TRACK_BY_ID[b.dataset.cert])))
  };
}
/* Clears learning progress everywhere; the profile (name, details, picture,
   goal) and per-device preferences stay. */
function confirmResetProgress() {
  openModal({
    title: 'Reset all progress?', body: `<p>This permanently clears completed lessons, quiz scores, certificates, bookmarks and achievements ${CLOUD.user ? 'on all your devices: in this browser and in your account' : 'stored in this browser'}. Your profile and preferences stay. This cannot be undone.</p>`,
    foot: '<button class="btn btn--ghost" data-close>Cancel</button><button class="btn btn--danger" id="doReset">Reset everything</button>',
    onOpen: (m, close) => $('#doReset', m).addEventListener('click', () => {
      const keep = Object.fromEntries(PROFILE_KEYS.map((k) => [k, state[k]]));
      const edits = Object.fromEntries(PROFILE_KEYS.filter((k) => state.edits[k]).map((k) => [k, state.edits[k]]));
      state = Object.assign(JSON.parse(JSON.stringify(DEFAULT_STATE)), keep, { edits, resetAt: Date.now() });
      save(); close(); toast({ title: 'Progress reset', text: 'Starting fresh.' }); go('#/dashboard');
    })
  });
}

/* ---------- 404 ---------- */
function viewNotFound() {
  return { html: `<div class="page">${stateBlock({ ic: 'alert', title: 'Page not found', text: 'That page doesn\'t exist or may have moved. Let\'s get you back on route.', action: '<a class="btn btn--primary" href="#/dashboard">Go to dashboard</a>', error: true })}</div>`, title: 'Not found', nav: '', crumbs: [['Not found']] };
}

/* ---------- Command palette search ---------- */
const SEARCH_PAGES = [['Dashboard', '#/dashboard', 'grid'], ['Software & Platforms', '#/software', 'monitor'], ...SOFTWARE.map((s) => [`${s.name} (${s.kind})`, swHref(s), s.icon]), ['Visual Library', '#/library', 'image'], ['Curriculum', '#/curriculum', 'layers'], ['Scenario Simulator', '#/scenarios', 'message'], ['Decision Trees', '#/trees', 'branch'], ['Practical Exercises', '#/exercises', 'clipboard'], ['Flashcards', '#/flashcards', 'cards'], ['Calculators', '#/calculators', 'calc'], ['Fleet Board', '#/fleet', 'truck'], ['Glossary', '#/glossary', 'book'], ['Quick Reference', '#/reference', 'file'], ['Bookmarks', '#/bookmarks', 'bookmark'], ['Achievements', '#/achievements', 'award'], ['Profile & account settings', '#/profile', 'user'], ['Privacy', '#/privacy', 'shield'], ['Review my mistakes', '#/review', 'rotate'], ['Simulations: DVIR, parts, warranty and software practice', '#/simulations', 'activity'], ['Trainer groups', '#/trainer', 'users'], ['Check a certificate', '#/verify', 'award']];
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
        const lessons = LESSONS.map((x) => ({ x, s: !q ? 0 : x.l.title.toLowerCase().includes(q) ? 3 : x.m.title.toLowerCase().includes(q) ? 2 : ((x.l.objectives || []).join(' ') + ' ' + (x.l.takeaways || []).join(' ')).toLowerCase().includes(q) ? 1 : -1 })).filter((r) => r.s >= 0);
        const L = (q ? lessons.sort((a, b) => b.s - a.s) : lessons.filter((r) => !isDone(r.x.key))).slice(0, q ? 7 : 4).map((r) => ({ href: lessonHref(r.x), ic: 'book', t: r.x.l.title, s: `${r.x.t.level} · M${r.x.m.id.slice(1)} ${r.x.m.title}`, b: isDone(r.x.key) ? 'Done' : '' }));
        const G = GLOSSARY.filter((g) => q && (`${g.term} ${g.full}`.toLowerCase().includes(q) || g.def.toLowerCase().includes(q))).sort((a, b) => (b.term.toLowerCase().startsWith(q) ? 1 : 0) - (a.term.toLowerCase().startsWith(q) ? 1 : 0)).slice(0, 6).map((g) => ({ href: `#/glossary/${encodeURIComponent(g.term)}`, ic: 'book', t: g.term, s: g.full, b: 'Term' }));
        const P = SEARCH_PAGES.filter(([t]) => !q || t.toLowerCase().includes(q)).slice(0, q ? 5 : 6).map(([t, href, ic]) => ({ href, ic, t, s: 'Go to page' }));
        const V = LIBRARY.filter((x) => q && `${x.name} ${(x.terms || []).join(' ')}`.toLowerCase().includes(q)).slice(0, 5).map((x) => ({ href: `#/library/${x.id}`, ic: 'image', t: x.name, s: x.short, b: 'Visual' }));
        const groups = [['Lessons', L], ['Visual Library', V], ['Glossary', G], ['Pages & tools', P]].filter(([, a]) => a.length);
        flat = groups.flatMap(([, a]) => a); active = clamp(active, 0, Math.max(0, flat.length - 1));
        let n = -1;
        res.innerHTML = flat.length ? groups.map(([label, a]) => `<div class="palette-group" role="presentation">${label}</div>${a.map((r) => { n++; return `<a class="palette-item ${n === active ? 'is-active' : ''}" role="option" id="pal-${n}" aria-selected="${n === active}" href="${r.href}" data-n="${n}">${icon(r.ic)}<span class="grow"><span class="palette-item__title">${esc(r.t)}</span><br><span class="palette-item__sub">${esc(r.s)}</span></span>${r.b ? `<span class="badge badge--outline">${r.b}</span>` : ''}</a>`; }).join('')}`).join('')
          : `<div class="center" style="padding:var(--sp-8)"><p class="muted">No results for "${esc(inp.value)}"</p></div>`;
        inp.setAttribute('aria-activedescendant', flat.length ? `pal-${active}` : '');
      };
      inp.addEventListener('input', () => { active = 0; draw(); });
      // Lesson objectives and takeaways are searched too: load them, then refresh.
      if (!hasContent()) loadContent().then(() => { if (inp.isConnected) draw(); }).catch((e) => console.warn('Search: lesson text failed to load:', e && e.message));
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
  // "Try again" style buttons (no inline onclick: the Content-Security-Policy blocks it).
  if (e.target.closest('[data-reload]')) { location.reload(); return; }
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
  if (term) { const vx = LIB_TERM.get(term.dataset.term.toLowerCase()); if (vx) openTermVisual(findTerm(term.dataset.term), vx); else go(`#/glossary/${encodeURIComponent(term.dataset.term)}`); }
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

/* ---------- PWA: service worker, install prompt, connectivity ---------- */
let deferredInstall = null;
function setupPWA() {
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch((err) => console.warn('Service worker registration failed:', err)); });
    // A new release took over this page (sw.js skips waiting): offer a reload
    // so the open page isn't left running the previous version.
    // (The very first install also fires controllerchange; there was no
    // previous worker then, so nothing is offered.)
    let previous = navigator.serviceWorker.controller, offered = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      const replaced = previous; previous = navigator.serviceWorker.controller;
      if (!replaced || offered) return;
      offered = true;
      toast({ kind: 'info', icon: 'rotate', title: 'A new version is ready', text: 'Reload to get the latest lessons and fixes. Your progress is kept.', timeout: 0, action: { label: 'Reload', onClick: () => location.reload() } });
    });
    // Look for a new release when the student comes back to the tab.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') navigator.serviceWorker.getRegistration().then((r) => r && r.update()).catch(() => {});
    });
  }
  const btn = $('#installBtn');
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredInstall = e; btn.hidden = false; });
  btn.addEventListener('click', async () => {
    if (!deferredInstall) return;
    deferredInstall.prompt();
    const { outcome } = await deferredInstall.userChoice;
    deferredInstall = null; btn.hidden = true;
    if (outcome === 'accepted') toast({ kind: 'success', title: 'Installing MC Academy', text: 'Open it from your home screen or app list.', icon: 'download' });
  });
  window.addEventListener('appinstalled', () => { btn.hidden = true; deferredInstall = null; });
  window.addEventListener('offline', () => toast({ kind: 'warning', title: 'You\'re offline', text: 'Lessons you\'ve opened keep working. Progress still saves on this device.' }));
  window.addEventListener('online', () => toast({ kind: 'success', title: 'Back online', timeout: 2500 }));
}

/* ---------- Boot ---------- */
function boot() {
  applyTheme(document.documentElement.getAttribute('data-theme') || 'light');
  applyMotion();
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
  setupPWA();
  setupCloud();
  markActiveDay();
  if (!storageOk) setTimeout(() => toast({ kind: 'warning', title: 'Progress won\'t be saved', text: 'Local storage is unavailable in this browser session.' }), 600);
  router();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();

})();
