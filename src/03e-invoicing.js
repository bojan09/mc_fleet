
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
        { t: 'mc', q: 'What is a POD?', o: ['Proof of Delivery — signed delivery paperwork', 'Payment on Demand — invoice due on receipt', 'Point of Dispatch — where the load started', 'Price of Diesel — the fuel surcharge base'], a: 0, e: 'Proof of Delivery, usually the BOL signed by the receiver.' },
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
        { t: 'mc', q: 'What is a TMS?', o: ['Truck Maintenance Schedule — the list of PM due dates', 'Transportation Management System — software for loads, dispatch and billing', 'Total Miles Summary — monthly miles by unit', 'Toll Management Service — billing for road tolls'], a: 1, e: 'TMS stands for transportation management system.' },
        { t: 'wwyd', q: 'The broker requires invoices through its portal. You:', o: ['Email it anyway, since email is faster than a portal', 'Submit through the portal with required fields and attachments', 'Mail a paper copy with the signed documents', 'Wait until the broker asks for the invoice'], a: 1, e: 'Use the method the customer requires.' }
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
        { t: 'mc', q: 'An invoice is rejected for a mismatched load number. Best fix?', o: ['Resubmit it unchanged; the broker will match it by amount', 'Correct the load number exactly as on the rate con and resubmit with a note', 'Create a new load with the broker\'s number and invoice that', 'Call the shipper and ask them to approve the invoice'], a: 1, e: 'Fix the reference and explain the correction.' },
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
