
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
