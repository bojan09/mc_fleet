
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
