
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
            { t: 'mc', q: 'PM compliance is calculated as:', o: ['PMs due ÷ PMs completed × 100', 'PMs completed on time ÷ PMs due × 100', 'PM cost ÷ total maintenance cost × 100', 'Units in the fleet ÷ PMs completed'], a: 1, e: 'On-time PMs as a share of PMs due.' },
            { t: 'mc', q: 'Why must a "repeat repair" be clearly defined?', o: ['It doesn\'t matter, as long as the shop agrees it was a repeat', 'Without a consistent definition, the KPI can\'t be compared over time', 'A wider definition makes the number bigger, which helps budgets', 'Shops require it before they will accept a warranty claim'], a: 1, e: 'Consistent definitions make KPIs trustworthy.' }
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
            { t: 'mc', q: 'Which statement is a root cause rather than a failure?', o: ['Alternator failed and the battery ran down', 'Belt tensioner broke and the belt came off', 'Belt tensioner not included in PM inspection checklist', 'Battery light came on while driving at night'], a: 2, e: 'A missing inspection step explains why failures occur — fixing it prevents recurrence.' },
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
            { t: 'mc', q: 'Why did T-120\'s repairs keep failing?', o: ['Bad luck: that engine\'s DPF system fails at random', 'Each repair treated the immediate failure, not the underlying causes', 'The driver kept damaging it with too much idling', 'DPFs can\'t be repaired, so each fix was only temporary'], a: 1, e: 'Without addressing why the DPF loaded, it kept loading.' },
            { t: 'wwyd', q: 'A shop wants to clear codes and release the truck for a third derate in 60 days. You:', o: ['Approve it, since clearing codes is the fastest way to get it moving', 'Ask for root-cause diagnosis, share the full history, and check warranty on recent repairs', 'Send it to a different shop without the history, so they start fresh', 'Take the truck out of service for good and request a replacement'], a: 1, e: 'Break the cycle with diagnosis and history.' }
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
            { t: 'wwyd', q: 'The only nearby shop can\'t start for 2 days; the part is also 2 days out. The load is due tomorrow. What first?', o: ['Wait for the shop, since nothing can happen until the part arrives', 'Start the recovery plan with dispatch now while sourcing faster repair options', 'Tell the driver to keep driving carefully to make tomorrow\'s delivery', 'Cancel the load so the customer can find another carrier'], a: 1, e: 'Parallel workstreams: protect the load while pursuing the repair.' },
            { t: 'mc', q: 'Dispatch pushes to run a truck with a brake defect "just 40 miles." Correct response?', o: ['Allow it, since 40 miles at low speed is a short, controlled risk', 'Decline, explain it\'s a safety-critical defect, and offer the fastest safe alternatives', 'Let the driver decide, since they can judge how the brakes feel', 'Ignore the call and wait for dispatch to find another truck'], a: 1, e: 'Short distance doesn\'t change a safety-critical defect.' }
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
            { t: 'mc', q: 'The most effective performance feedback is:', o: ['General and emotional, so the vendor feels the impact', 'Specific, factual and with a requested action', 'Saved for the annual review, so it covers the whole year', 'Given only to the technician, not the shop\'s manager'], a: 1, e: 'Specifics and actions lead to change.' },
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
            { t: 'mc', q: 'A warranty request to a shop should reference:', o: ['Only the current complaint, since the shop keeps its own records', 'The original RO, dates, mileage and current complaint', 'The driver\'s personal details and the load being hauled', 'Nothing extra; shops track their own warranty work'], a: 1, e: 'Specific references make claims easy to verify.' },
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
            { t: 'mc', q: 'What does the "R" in SBAR ask for?', o: ['The repair history of the unit', 'Your recommendation and what you need', 'Road and weather conditions at the scene', 'The rates the vendor charges for the work'], a: 1, e: 'End with a clear recommendation and request.' },
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
            { t: 'mc', q: 'Where does a coordinator\'s influence mainly come from?', o: ['Job title and place in the org chart', 'Reliability, accuracy and follow-through', 'Being the loudest voice on the call', 'Avoiding escalation so nobody gets upset'], a: 1, e: 'Trust is built by consistent, accurate communication.' },
            { t: 'mc', q: 'When bringing a problem to management, you should also bring:', o: ['Who is to blame for it', 'Options and a recommendation', 'Only the problem, clearly stated', 'A request for more staff'], a: 1, e: 'Options and recommendations make decisions faster.' }
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
            { t: 'mc', q: 'With limited shop capacity, which unit should get the first bay?', o: ['The newest unit, since it earns the most per mile', 'The unit with the highest combined safety and operational impact', 'The unit whose driver called in first this morning', 'The cheapest repair, so more units get done today'], a: 1, e: 'Allocate scarce capacity by impact.' },
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
            { t: 'mc', q: 'A leadership update during a disruption should include:', o: ['Only the good news, so leadership stays calm and confident', 'Units down, safety issues, loads at risk, actions, asks, next update', 'Every driver\'s full call log and message history from today', 'Vendor names and phone numbers for every unit that is down'], a: 1, e: 'Decision-ready summaries.' },
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
