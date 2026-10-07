
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
