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
