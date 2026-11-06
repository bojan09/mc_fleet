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
   MECHANISM DIAGRAMS — inline SVG, theme-aware (CSS variables), readable in
   black and white (line styles, not colours, tell circuits apart).
   Block: { diagram: 'airbrake', caption }.
   =========================================================================== */
const DIAGRAMS = {
  airbrake: () => {
    const box = (x, y, w, h, t, s, cls = '') => `<g class="dg-box ${cls}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8"/><text x="${x + w / 2}" y="${y + (s ? h / 2 - 4 : h / 2 + 5)}" text-anchor="middle" class="dg-t">${t}</text>${s ? `<text x="${x + w / 2}" y="${y + h / 2 + 13}" text-anchor="middle" class="dg-s">${s}</text>` : ''}</g>`;
    const line = (d, cls = '') => `<path d="${d}" class="dg-l ${cls}" marker-end="url(#dg-arrow)"/>`;
    const lab = (x, y, t, a = 'middle') => `<text x="${x}" y="${y}" text-anchor="${a}" class="dg-lab">${t}</text>`;
    return `<svg viewBox="0 0 640 590" class="dg" role="img" aria-labelledby="dg-ab-t dg-ab-d">
      <title id="dg-ab-t">How a tractor-trailer air brake system works</title>
      <desc id="dg-ab-d">The engine-driven compressor, controlled by the governor, pumps air through the air dryer into the supply tank. One-way check valves feed the primary and secondary tanks. The foot valve sends air to the drive-axle brakes on the primary circuit and the steer-axle brakes on the secondary circuit. The yellow parking valve holds the spring brakes released with air. The red trailer supply valve and the tractor protection valve feed the trailer through the glad hands: red for supply, blue for service. On the trailer, a relay valve and tank apply the trailer brakes.</desc>
      <defs><marker id="dg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="dg-head"/></marker></defs>
      ${box(20, 20, 180, 56, 'Compressor', 'engine-driven')}
      ${box(230, 20, 180, 56, 'Air dryer', 'removes water and oil')}
      ${box(440, 20, 180, 56, 'Supply tank', 'wet tank')}
      ${line('M200 48 H228')}${line('M410 48 H438')}
      ${box(20, 120, 180, 56, 'Governor', 'off ~125 · on ~100 psi')}
      <path d="M110 120 V76" class="dg-l dg-ctl"/>${lab(118, 103, 'controls', 'start')}
      ${box(230, 120, 180, 56, 'Primary tank', '')}
      ${box(440, 120, 180, 56, 'Secondary tank', '')}
      ${line('M530 76 V118')}${line('M470 76 V96 H320 V118')}${lab(522, 108, 'check valves', 'end')}
      ${box(230, 220, 180, 56, 'Foot valve', 'driver\'s brake pedal')}
      ${line('M320 176 V218')}${line('M470 176 V198 H370 V218')}
      ${box(440, 220, 180, 56, 'Trailer supply valve', 'red knob on dash')}
      ${line('M580 176 V218')}
      ${box(20, 320, 180, 56, 'Drive-axle brakes', 'primary · via relay valve')}
      ${box(230, 320, 180, 56, 'Steer-axle brakes', 'secondary circuit')}
      ${line('M270 276 V300 H110 V318', 'dg-pri')}${line('M320 276 V318', 'dg-sec')}
      ${box(440, 320, 180, 56, 'Tractor protection valve', 'protects tractor air')}
      ${line('M530 276 V318')}
      <path d="M410 248 H425 V348 H438" class="dg-l dg-ctl" marker-end="url(#dg-arrow)"/>${lab(430, 300, 'service', 'start')}
      ${box(20, 420, 180, 56, 'Parking valve', 'yellow knob · air from tanks')}
      ${box(230, 420, 180, 56, 'Spring brakes', 'apply at ~20–45 psi')}
      ${line('M200 448 H228')}
      ${box(440, 420, 180, 56, 'Glad hands', 'red supply · blue service')}
      ${line('M530 376 V418')}
      ${box(440, 515, 180, 56, 'Trailer brakes', 'relay valve + tank')}
      ${line('M530 476 V513')}
      <g class="dg-key"><path d="M20 512 H56" class="dg-l"/>${lab(64, 516, 'supply air', 'start')}<path d="M20 536 H56" class="dg-l dg-ctl"/>${lab(64, 540, 'control signal', 'start')}<path d="M20 560 H56" class="dg-l dg-pri"/>${lab(64, 564, 'primary circuit', 'start')}<path d="M220 560 H256" class="dg-l dg-sec"/>${lab(264, 564, 'secondary circuit', 'start')}</g>
    </svg>`;
  }
};
function diagramHTML(id, caption) {
  const f = DIAGRAMS[id]; if (!f) return '';
  return `<figure class="dgfig"><div class="dgfig__scroll">${f()}</div>${caption ? `<figcaption>${inline(caption)}</figcaption>` : ''}</figure>`;
}
