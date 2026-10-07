
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
      blocks: [{ msg: { kind: 'note', title: 'Situation', text: 'The driver started duty at 05:00 and has driven 5 hours. A charging-system fault stopped the tractor; the shop\'s ETR is 13:00. From the shop, the delivery is 6 hours of driving.' } }],
      exercise: { type: 'choose', prompt: 'What do you tell dispatch?', options: [
        { text: '"Truck will be fixed at 13:00, all good."', correct: false, why: 'Fixed isn\'t the same as able to deliver. Check the driver\'s hours.' },
        { text: '"ETR 13:00. At that point the driver has 6 hours left in the 14-hour window (ends 19:00) and a 30-minute break due after 3 more hours of driving — 6 hours of driving plus the break doesn\'t fit. Today\'s run to Charlotte isn\'t possible with this driver; the broker needs an update on the 07:30 appointment."', correct: true, why: 'Numbers early let dispatch update the broker, protect the appointment or plan a relay.' },
        { text: '"Tell the driver to skip the break so he makes it."', correct: false, why: 'Never suggest breaking Hours of Service rules.' }
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
