
/* ---------------------------------------------------------------------------
   CONTENT — Industry examples
   Real companies referenced in context. Descriptions only restate what each
   company's official website says; they are examples, not endorsements.
   Rendered by the { industry: {...} } block.
   --------------------------------------------------------------------------- */
const COMPANIES = {
  fleetio: { name: 'Fleetio', cat: 'Fleet maintenance software', url: 'https://www.fleetio.com/',
    text: 'Fleetio is fleet management software. Its website describes it as "one place to run fleet maintenance," aimed at reducing downtime and controlling costs, for fleets in industries including trucking and freight.' },
  samsara: { name: 'Samsara', cat: 'Telematics & fleet technology', url: 'https://www.samsara.com/',
    text: 'Samsara offers a connected operations platform. Its website lists fleet capabilities including live GPS tracking, vehicle diagnostics, fuel analytics and compliance reporting, plus AI-powered dash cams and in-cab alerts for driver safety.' },
  protransport: { name: 'Pro Transport USA', cat: 'Trucking & transportation carrier', url: 'https://protransportusa.com/',
    text: 'Pro Transport, Inc. describes itself as a trucking and transportation provider founded in 1998, with its corporate office in Medley, Florida and terminals in Florida, Georgia and South Carolina. It serves local, regional and national customers with employees and owner-operators.' },
  thermoking: { name: 'Thermo King', cat: 'Transport refrigeration', url: 'https://www.thermoking.com/',
    text: 'Thermo King makes transport temperature-control systems, including refrigeration units for trailers and trucks. Its website also describes telematics temperature monitoring for reefers and a dealer network providing service across North America.' }
};
function industry(key, relevance) { return { industry: Object.assign({}, COMPANIES[key], { relevance }) }; }
function addToDeepTab(lessonKey, tabTitle, block) {
  const tab = (lessonAt(lessonKey).deep || []).find((t) => t.title === tabTitle);
  if (tab) tab.blocks.push(block);
}

// Pro Transport USA — what a trucking company looks like in practice
enrich('beginner.m1.l1', { add: [industry('protransport', 'A carrier like this is the structure this lesson describes: terminals, tractors, trailers and drivers moving freight for customers. Every unit in a fleet like this needs the maintenance coordination you\'re learning here.')] });

// Fleetio — fleet maintenance software
addToDeepTab('beginner.m2.l1', 'Tools of the trade', industry('fleetio', 'Much of a coordinator\'s day happens inside fleet maintenance software: opening cases, logging work orders, tracking PM schedules and reviewing unit history.'));
enrich('advanced.m7.l2', { add: [industry('fleetio', 'Fleet maintenance software is where a fleet board like the one above usually lives in real operations — unit status, PM due dates and repair history in one place.')] });
enrich('expert.m9.l2', { add: [industry('fleetio', 'This is the category of system this lesson calls a CMMS. The data-quality rules above apply no matter which product a fleet uses.')] });

// Samsara — telematics, tracking, driver safety
enrich('advanced.m7.l1', { add: [industry('samsara', 'Telematics platforms supply several data points on this list — location, diagnostics and fault codes — so coordinators can track units without waiting for a phone call.')] });
enrich('expert.m9.l1', { add: [industry('samsara', 'Fault alerts, location and diagnostic data from a telematics platform are the inputs to the alert-tiering process in this lesson. Dash cams and in-cab alerts are part of the driver-safety side of the same technology.')] });

// Thermo King — refrigerated transport
enrich('beginner.m3.l2', { add: [industry('thermoking', 'The "reefer unit" in the trailer components table is a transport refrigeration unit like these. It has its own maintenance needs, separate from the trailer it\'s mounted on.')] });
addToDeepTab('beginner.m5.l2', 'Reefer basics', industry('thermoking', 'When a reefer alarms, the unit\'s manufacturer dealer network is often the fastest route to a qualified technician — and the alarm code tells them where to start.'));
