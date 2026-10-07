
/* ---------------------------------------------------------------------------
   CONTENT — OPERATIONS track (optional)
   Freight-side knowledge that surrounds maintenance work: the freight market,
   dispatch, Hours of Service, route planning, fuel and trucking invoicing.
   Lessons are moved here from the maintenance tracks; LESSON_MOVES lets saved
   progress follow them (see migrateState in the engine).
   --------------------------------------------------------------------------- */
function takeLesson(trackId, moduleId, lessonId) {
  const m = TRACKS.find((t) => t.id === trackId).modules.find((x) => x.id === moduleId);
  const i = m.lessons.findIndex((l) => l.id === lessonId);
  return m.lessons.splice(i, 1)[0];
}
function takeModule(trackId, moduleId) {
  const t = TRACKS.find((x) => x.id === trackId);
  return t.modules.splice(t.modules.findIndex((m) => m.id === moduleId), 1)[0];
}

const OPS_MARKET = [takeLesson('beginner', 'm1', 'l4'), takeLesson('advanced', 'm6', 'l3')];
const OPS_INVOICING = takeModule('beginner', 'm10');
OPS_MARKET.forEach((l, i) => { l.id = `l${i + 1}`; });

const OPERATIONS = {
  id: 'operations',
  level: 'Operations',
  title: 'Transportation Operations',
  short: 'Operations',
  icon: 'route',
  color: 'var(--track-operations)',
  summary: 'An optional track on the freight side of trucking: carriers and brokers, load boards and dispatch, Hours of Service, route planning and fuel, and how carriers invoice and get paid. Take it any time — it doesn\'t depend on the maintenance tracks.',
  outcomes: ['Explain who is who on a load: shipper, broker, carrier, driver and receiver', 'Follow a load from booking to payment', 'Judge whether a delay still fits a driver\'s hours and the delivery appointment', 'Prepare an accurate invoice with the right supporting documents'],
  modules: [
    { id: 'm1', title: 'Freight Market, Dispatch and Driver Hours', summary: 'Carriers, brokers, load boards and dispatch — plus the Hours of Service, route and fuel limits dispatch plans around.', lessons: OPS_MARKET },
    Object.assign(OPS_INVOICING, { id: 'm2' })
  ],
  final: { id: 'operations-final', kind: 'exam', title: 'Operations Final: From Load to Payment', minutes: 25 }
};
TRACKS.push(OPERATIONS);

/* Old lesson/module keys → new keys, so saved progress follows moved lessons. */
const LESSON_MOVES = {
  'beginner.m1.l4': 'operations.m1.l1',
  'advanced.m6.l3': 'operations.m1.l2',
  'beginner.m10': 'operations.m2'
};
