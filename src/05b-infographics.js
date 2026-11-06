
/* ===========================================================================
   INFOGRAPHICS — { ig: '<type>', title, ... } blocks.
   Types: stats, bars, donut, process, hub, matrix, scale, gantt, pipeline,
   card, annotated, stackcompare, fishbone, pyramid, ladder, formulas, cycle,
   waterfall, heatmap, ratings, table, versus, anatomy, decode, axles, tread.
   versus / anatomy / axles use the line-art library in ART (05a-art.js).
   Motion is CSS-only (staggered entrance via --i, bar/segment fills).
   =========================================================================== */
const toneCls = (t) => `tone-${t || 'info'}`;
function igFmt(v, fmt, unit) {
  if (fmt === '$') return fmtMoney(v, v % 1 ? 2 : 0);
  if (fmt === 'h') return `${fmtNum(v, v % 1 ? 1 : 0)} h`;
  return fmtNum(v, v % 1 ? 1 : 0) + (unit || '');
}
function igTime(v) {
  if (typeof v === 'number') return v;
  const [h, m] = String(v).split(':').map(Number);
  return h * 60 + (m || 0);
}
function infographicHTML(b) {
  let inner = '';
  const cls = `ig--${b.ig}`;
  switch (b.ig) {
    case 'stats':
      inner = `<div class="ig-stats">${b.items.map((s, i) => `<div class="ig-stat ${toneCls(s.tone)}" style="--i:${i}"><div class="ig-stat__v">${esc(s.v)}${s.u ? `<small>${esc(s.u)}</small>` : ''}</div><div class="ig-stat__l">${inline(s.l)}</div></div>`).join('')}</div>`;
      break;
    case 'bars': {
      const max = b.max || Math.max(...b.items.map((r) => r[1]));
      inner = `<div class="ig-bars">${b.items.map((r, i) => `<div class="ig-bar"><span class="ig-bar__l">${esc(r[0])}</span><span class="ig-bar__track"><span class="ig-bar__fill ${toneCls(r[2] || b.tone || 'neutral-strong')}" style="--p:${(r[1] / max).toFixed(4)};--i:${i}"></span></span><span class="ig-bar__v num">${igFmt(r[1], b.fmt, b.unit)}</span></div>`).join('')}</div>`;
      break;
    }
    case 'donut': {
      const total = b.items.reduce((a, r) => a + r[1], 0); const R = 60; const C = 2 * Math.PI * R; let acc = 0;
      const segs = b.items.map((r, i) => { const len = (r[1] / total) * C; const s = `<circle class="ig-donut__seg" cx="80" cy="80" r="${R}" style="--len:${len.toFixed(2)};--c:${C.toFixed(2)};--i:${i};stroke:var(--ig-${(i % 6) + 1});stroke-dashoffset:${(-acc).toFixed(2)}"/>`; acc += len; return s; }).join('');
      inner = `<div class="ig-donut"><div class="ig-donut__chart"><svg viewBox="0 0 160 160" aria-hidden="true"><circle cx="80" cy="80" r="${R}" class="ig-donut__track"/>${segs}</svg><div class="ig-donut__center"><strong class="num">${esc(b.center || igFmt(total, b.fmt))}</strong><span>${esc(b.centerSub || 'total')}</span></div></div>
        <ul class="ig-legend">${b.items.map((r, i) => `<li><i style="background:var(--ig-${(i % 6) + 1})"></i><span class="grow">${esc(r[0])}</span>${b.pctOnly ? '' : `<strong class="num">${igFmt(r[1], b.fmt, b.unit)}</strong>`}<span class="muted num">${Math.round((r[1] / total) * 100)}%</span></li>`).join('')}</ul></div>`;
      break;
    }
    case 'process':
      inner = `<ol class="ig-process" style="--n:${b.items.length}">${b.items.map((s, i) => `<li class="ig-step" style="--i:${i}"><span class="ig-step__icon">${icon(s.icon || 'check')}</span><span class="ig-step__n">${String(i + 1).padStart(2, '0')}</span><strong>${esc(s.t)}</strong>${s.d ? `<span>${inline(s.d)}</span>` : ''}</li>`).join('')}</ol>`;
      break;
    case 'hub': {
      const n = b.items.length;
      const pos = b.items.map((_, i) => { const a = (-90 + (i * 360) / n) * (Math.PI / 180); return [50 + 38 * Math.cos(a), 50 + 38 * Math.sin(a)]; });
      inner = `<div class="ig-hub"><svg class="ig-hub__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${pos.map(([x, y]) => `<line x1="50" y1="50" x2="${x.toFixed(2)}" y2="${y.toFixed(2)}"/>`).join('')}<circle cx="50" cy="50" r="38"/></svg>
        <div class="ig-hub__center"><span class="ig-hub__icon">${icon(b.center.icon)}</span><strong>${esc(b.center.t)}</strong></div>
        ${b.items.map((s, i) => `<div class="ig-hub__node" style="left:${pos[i][0].toFixed(2)}%;top:${pos[i][1].toFixed(2)}%;--i:${i}"><span class="ig-hub__icon">${icon(s.icon)}</span><strong>${esc(s.t)}</strong><span>${esc(s.d)}</span></div>`).join('')}</div>`;
      break;
    }
    case 'matrix':
      inner = `<div class="ig-matrix"><div class="ig-matrix__y"><span>Low</span><strong>${esc(b.y)} →</strong><span>High</span></div>
        ${b.q.map((q, i) => `<div class="ig-quad ${toneCls(q.tone)}" style="--i:${i}"><strong>${esc(q.t)}</strong><ul>${q.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}
        <div class="ig-matrix__x"><span>Low</span><strong>${esc(b.x)} →</strong><span>High</span></div></div>`;
      break;
    case 'scale':
      inner = `<div class="ig-scale"><div class="ig-scale__bar" aria-hidden="true"></div><div class="ig-scale__stops" style="--n:${b.stops.length}">${b.stops.map((s, i) => `<div class="ig-scale__stop ${toneCls(s.tone)}" style="--i:${i}"><span class="ig-scale__dot"></span><strong>${esc(s.t)}</strong><span>${inline(s.d)}</span></div>`).join('')}</div></div>`;
      break;
    case 'gantt': {
      const a = igTime(b.from), z = igTime(b.to); const pct2 = (v) => ((igTime(v) - a) / (z - a)) * 100;
      const ticks = (b.ticks || []).map((t) => (Array.isArray(t) ? t : [t, t]));
      const grid = ticks.map(([v]) => `<i class="ig-gantt__grid" style="left:${pct2(v).toFixed(2)}%"></i>`).join('');
      inner = `<div class="ig-gantt"><div class="ig-gantt__row ig-gantt__axis"><span></span><div class="ig-gantt__ticks">${ticks.map(([v, l]) => `<span style="left:${pct2(v).toFixed(2)}%">${esc(l)}</span>`).join('')}</div></div>
        ${b.rows.map((r, i) => { const s = pct2(r.s); const w = Math.max(0, pct2(r.e) - s); const point = w === 0; const noteOut = r.note && (point || w < 24); const left = s + w > 72;
          return `<div class="ig-gantt__row"><span class="ig-gantt__l">${esc(r.l)}</span><div class="ig-gantt__track">${grid}<span class="ig-gantt__bar ${toneCls(r.tone)} ${point ? 'is-point' : ''}" style="left:${s.toFixed(2)}%;width:${point ? 0 : w.toFixed(2)}%;--i:${i}">${r.note && !noteOut ? `<em>${esc(r.note)}</em>` : ''}</span>${noteOut ? `<em class="ig-gantt__note ${left ? 'is-left' : ''}" style="${left ? `right:${(100 - s).toFixed(2)}%` : `left:${(s + w).toFixed(2)}%`}">${esc(r.note)}</em>` : ''}</div></div>`; }).join('')}</div>`;
      break;
    }
    case 'pipeline':
      inner = `<ol class="ig-pipe">${b.items.map((s, i) => `<li class="ig-pipe__item ${toneCls(s.tone)}" style="--i:${i}">${s.n != null ? `<span class="ig-pipe__n num">${s.n}</span>` : `<span class="ig-pipe__n num">${i + 1}</span>`}<strong>${esc(s.t)}</strong></li>`).join('')}</ol>`;
      break;
    case 'card':
      inner = `<div class="ig-card"><div class="ig-card__head">${icon('clipboard')}<span class="grow">${esc(b.form || 'Form')}</span><span class="badge badge--outline">Example</span></div><dl>${b.rows.map(([k, v], i) => `<div class="ig-card__row" style="--i:${i}"><dt>${icon('check', 'icon--sm')}${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div>`;
      break;
    case 'annotated':
      inner = `<div class="ig-anno"><div class="ig-anno__doc">${b.lines.map(([t, n]) => `<div class="ig-anno__line">${n ? `<span class="ig-anno__mk">${n}</span>` : '<span class="ig-anno__mk is-empty"></span>'}<span>${esc(t)}</span></div>`).join('')}</div>
        <ol class="ig-anno__notes">${b.notes.map((x, i) => `<li style="--i:${i}"><span class="ig-anno__mk">${x.n}</span><div><strong>${esc(x.t)}</strong><p>${inline(x.d)}</p></div></li>`).join('')}</ol></div>`;
      break;
    case 'stackcompare': {
      const labels = [...new Set(b.cols.flatMap((c) => c.items.map((r) => r[0])))];
      const col = (l) => `var(--ig-${(labels.indexOf(l) % 6) + 1})`;
      const totals = b.cols.map((c) => c.items.reduce((s, r) => s + r[1], 0)); const max = Math.max(...totals);
      inner = `<div class="ig-stack" style="--n:${b.cols.length}">${b.cols.map((c, ci) => `<div class="ig-stack__col"><div class="ig-stack__total num">${igFmt(totals[ci], b.fmt)}</div><div class="ig-stack__area"><div class="ig-stack__bar" style="--h:${(totals[ci] / max).toFixed(4)};--i:${ci}">${c.items.map((r) => `<span style="flex-grow:${r[1]};background:${col(r[0])}" title="${esc(r[0])}: ${igFmt(r[1], b.fmt)}"></span>`).join('')}</div></div><strong class="ig-stack__label">${esc(c.t)}</strong></div>`).join('')}</div>
        <ul class="legend ig-stack__legend">${labels.map((l) => `<li><i style="background:${col(l)}"></i>${esc(l)}</li>`).join('')}</ul>`;
      break;
    }
    case 'fishbone': {
      const bone = (x, i) => `<div class="ig-fish__bone" style="--i:${i}"><strong>${esc(x.t)}</strong><ul>${x.causes.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div>`;
      inner = `<div class="ig-fish"><div class="ig-fish__row">${b.bones.slice(0, 3).map(bone).join('')}</div><div class="ig-fish__spine"><span class="ig-fish__line"></span><span class="ig-fish__head">${icon('alert', 'icon--sm')} ${esc(b.effect)}</span></div><div class="ig-fish__row ig-fish__row--bot">${b.bones.slice(3).map((x, i) => bone(x, i + 3)).join('')}</div></div>`;
      break;
    }
    case 'pyramid': {
      const n = b.levels.length;
      inner = `<div class="ig-pyr">${b.levels.map((l, i) => `<div class="ig-pyr__row" style="--i:${i}"><div class="ig-pyr__cell"><div class="ig-pyr__band ${toneCls(l.tone)}" style="--w:${(34 + (i * 66) / Math.max(1, n - 1)).toFixed(1)}%"><span class="num">${i + 1}</span>${esc(l.t)}</div></div><p>${inline(l.d)}</p></div>`).join('')}</div>`;
      break;
    }
    case 'ladder': {
      const n = b.levels.length;
      inner = `<ol class="ig-ladder" style="--n:${n}">${b.levels.map((l, i) => `<li class="ig-ladder__step" style="--h:${((i + 1) / n).toFixed(3)};--i:${i}"><span class="ig-ladder__n num">L${i + 1}</span><strong>${esc(l.t)}</strong><span>${inline(l.d)}</span></li>`).join('')}</ol>`;
      break;
    }
    case 'formulas':
      inner = `<div class="ig-formulas">${b.items.map((f, i) => `<div class="ig-formula" style="--i:${i}"><span class="ig-formula__t">${esc(f.t)}</span><code class="ig-formula__f">${esc(f.f)}</code><span class="ig-formula__d">${esc(f.d)}</span></div>`).join('')}</div>`;
      break;
    case 'cycle': {
      const n = b.items.length; const R = 36; const step = 360 / n; const gap = step * 0.3; const mid = nextId('arr');
      const pt = (deg) => { const a = (deg * Math.PI) / 180; return [50 + R * Math.cos(a), 50 + R * Math.sin(a)]; };
      const arcs = b.items.map((_, i) => { const [x1, y1] = pt(-90 + i * step + gap); const [x2, y2] = pt(-90 + (i + 1) * step - gap); return `<path d="M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${R} ${R} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)}" marker-end="url(#${mid})"/>`; }).join('');
      inner = `<div class="ig-hub ig-cycle"><svg class="ig-cycle__ring" viewBox="0 0 100 100" aria-hidden="true"><defs><marker id="${mid}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z"/></marker></defs>${arcs}</svg>
        <div class="ig-hub__center"><span class="ig-hub__icon">${icon('rotate')}</span><strong>${esc(b.center || '')}</strong></div>
        ${b.items.map((s, i) => { const [x, y] = pt(-90 + i * step); return `<div class="ig-hub__node" style="left:${x.toFixed(2)}%;top:${y.toFixed(2)}%;--i:${i}"><span class="ig-hub__icon">${icon(s.icon || 'check')}</span><strong>${esc(s.t)}</strong>${s.d ? `<span>${esc(s.d)}</span>` : ''}</div>`; }).join('')}</div>`;
      break;
    }
    case 'waterfall': {
      let run = 0;
      const bars = b.items.map((it) => {
        let lo, hi, tone, label;
        if (it.type === 'start' || it.type === 'total') { lo = 0; hi = it.v; run = it.v; tone = it.tone || 'neutral-strong'; label = igFmt(it.v, b.fmt, b.unit); }
        else { lo = Math.min(run, run + it.v); hi = Math.max(run, run + it.v); run += it.v; tone = it.tone || (it.v >= 0 ? 'critical' : 'success'); label = (it.v >= 0 ? '+' : '−') + igFmt(Math.abs(it.v), b.fmt, b.unit); }
        return { lo, hi, tone, label, l: it.l, total: it.type === 'total' };
      });
      const max = Math.max(...bars.map((x) => x.hi)) * 1.12;
      inner = `<div class="ig-wf" style="--n:${bars.length}">${bars.map((x, i) => `<div class="ig-wf__col ${x.total ? 'is-total' : ''}"><div class="ig-wf__area"><span class="ig-wf__bar ${toneCls(x.tone)}" style="bottom:${((x.lo / max) * 100).toFixed(2)}%;height:${Math.max(0.8, ((x.hi - x.lo) / max) * 100).toFixed(2)}%;--i:${i}"><em class="num">${esc(x.label)}</em></span></div><span class="ig-wf__l">${esc(x.l)}</span></div>`).join('')}</div>`;
      break;
    }
    case 'heatmap': {
      const vals = b.rows.flatMap((r) => r.v); const lo = b.min != null ? b.min : 0; const hi = b.max != null ? b.max : Math.max(...vals);
      const cell = (v) => { const t = clamp((v - lo) / (hi - lo || 1), 0, 1); return `<td class="${t > 0.55 ? 'is-hot' : ''}" style="--t:${(t * 88).toFixed(0)}%">${esc(v)}</td>`; };
      const lg = b.legend || ['Low', 'High'];
      inner = `<div class="ig-heat-wrap"><table class="ig-heat ${toneCls(b.tone || 'info')}"><thead><tr><th></th>${b.cols.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r, i) => `<tr style="--i:${i}"><th scope="row">${esc(r.l)}</th>${r.v.map(cell).join('')}</tr>`).join('')}</tbody></table></div>
        <div class="ig-heat__legend ${toneCls(b.tone || 'info')}"><span>${esc(lg[0])}</span><i></i><span>${esc(lg[1])}</span></div>`;
      break;
    }
    case 'ratings': {
      const scale = b.scale || 5;
      inner = `<div class="table-wrap ig-ratings"><table class="table"><thead><tr><th scope="col"><span class="sr-only">Criterion</span></th>${b.cols.map((c) => `<th scope="col" class="center">${esc(c)}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r) => `<tr><th scope="row">${esc(r.l)}</th>${r.v.map((v) => `<td class="center"><span class="ig-dots" role="img" aria-label="${v} of ${scale}">${Array.from({ length: scale }, (_, k) => `<i class="${k < v ? 'on' : ''}"></i>`).join('')}</span></td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      if (!b.note && b.hint) b = Object.assign({}, b, { note: b.hint });
      break;
    }
    case 'table':
      inner = `<div class="table-wrap ig-table"><table class="table"><thead><tr>${b.head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<td><strong>${inline(c)}</strong></td>` : `<td>${inline(c)}</td>`)).join('')}</tr>`).join('')}</tbody></table></div>`;
      break;

    case 'versus':
      inner = `<div class="ig-vs" style="--min:${b.items.length === 3 ? 170 : 230}px">${b.items.map((it, i) => `<article class="ig-vs__item ${toneCls(it.tone)}" style="--i:${i}">
        ${it.art ? `<div class="ig-vs__art">${artSVG(it.art, it.t)}</div>` : ''}
        <div class="ig-vs__body"><${hx()} class="ig-vs__t">${esc(it.t)}</${hx()}>${it.sub ? `<p class="ig-vs__sub">${inline(it.sub)}</p>` : ''}
        ${it.facts ? `<dl class="ig-vs__facts">${it.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${inline(v)}</dd></div>`).join('')}</dl>` : ''}
        ${it.use ? `<p class="ig-vs__use">${icon('check', 'icon--sm')}<span><strong>Used for:</strong> ${inline(it.use)}</span></p>` : ''}
        ${it.watch ? `<p class="ig-vs__watch">${icon('wrench', 'icon--sm')}<span><strong>Maintenance focus:</strong> ${inline(it.watch)}</span></p>` : ''}</div></article>`).join('')}</div>
        ${b.key ? `<div class="ig-vs__key">${icon('target', 'icon--sm')}<span><strong>Key difference:</strong> ${inline(b.key)}</span></div>` : ''}`;
      break;
    case 'anatomy':
      inner = `<div class="ig-anat"><div class="ig-anat__fig"><div class="ig-anat__canvas" style="max-width:${b.w || 560}px">${artSVG(b.art, b.title)}${b.pins.map((p, i) => `<span class="ig-anat__pin" style="left:${p.x}%;top:${p.y}%;--i:${i}" aria-hidden="true">${i + 1}</span>`).join('')}</div></div>
        <ol class="ig-anno__notes ig-anat__notes">${b.pins.map((p, i) => `<li style="--i:${i}"><span class="ig-anno__mk">${i + 1}</span><div><strong>${esc(p.t)}</strong><p>${inline(p.d)}</p></div></li>`).join('')}</ol></div>`;
      break;
    case 'decode':
      inner = `<div class="ig-decode"><div class="ig-decode__code">${b.parts.map((p, i) => (p[1] ? `<span class="ig-decode__seg" style="--c:var(--ig-${(i % 6) + 1});--i:${i}"><b>${esc(p[0])}</b><i>${b.parts.slice(0, i + 1).filter((x) => x[1]).length}</i></span>` : `<span class="ig-decode__sep">${esc(p[0])}</span>`)).join('')}</div>
        <ol class="ig-decode__legend">${b.parts.filter((p) => p[1]).map((p, i) => `<li style="--i:${i}"><span class="ig-decode__n" style="--c:var(--ig-${(b.parts.indexOf(p) % 6) + 1})">${i + 1}</span><div><strong><code>${esc(p[0])}</code> — ${esc(p[1])}</strong><p>${inline(p[2] || '')}</p></div></li>`).join('')}</ol></div>`;
      break;
    case 'axles': {
      const lim = b.limits;
      inner = `<div class="ig-axles"><div class="ig-axles__art"><div class="ig-anat__canvas">${artSVG(b.art || 'rig', 'Five-axle tractor-trailer')}${b.groups.map((g) => `<span class="ig-axles__tag" style="left:${g.x}%">${esc(g.t)}</span>`).join('')}</div></div>
        <div class="table-wrap"><table class="table ig-axles__table"><thead><tr><th scope="col">Scenario</th>${b.groups.map((g, gi) => `<th scope="col">${esc(g.t)}<small>limit ${fmtNum(lim[gi])} lb</small></th>`).join('')}<th scope="col">Gross<small>limit ${fmtNum(b.gross)} lb</small></th></tr></thead>
        <tbody>${b.rows.map((r) => { const tot = r.v.reduce((a2, x) => a2 + x, 0); const cellv = (v, max) => { const over = v > max; return `<td><span class="ig-axles__v num ${over ? 'is-over' : ''}">${fmtNum(v)}</span><span class="ig-axles__track"><span class="ig-axles__fill ${over ? 'tone-critical' : 'tone-success'}" style="--p:${Math.min(1, v / max).toFixed(3)}"></span></span>${over ? `<span class="badge badge--critical">+${fmtNum(v - max)} over</span>` : ''}</td>`; };
          return `<tr><th scope="row">${esc(r.l)}${r.d ? `<small>${esc(r.d)}</small>` : ''}</th>${r.v.map((v, vi) => cellv(v, lim[vi])).join('')}${cellv(tot, b.gross)}</tr>`; }).join('')}</tbody></table></div></div>`;
      break;
    }
    case 'tread': {
      const max = b.max || 20;
      inner = `<div class="ig-tread" style="--n:${b.items.length}">${b.items.map((t, i) => { const ok = t.v >= t.min; return `<div class="ig-tread__item ${ok ? 'tone-success' : 'tone-critical'}" style="--i:${i}">
        <div class="ig-tread__groove" role="img" aria-label="${esc(t.l)}: ${t.v}/32 inch, minimum ${t.min}/32"><span class="ig-tread__rubber" style="--p:${(t.v / max).toFixed(3)}"></span><span class="ig-tread__min" style="--p:${(t.min / max).toFixed(3)}"><em>min ${t.min}/32</em></span></div>
        <strong>${esc(t.l)}</strong><span class="num">${t.v}/32&Prime;</span><span class="badge ${ok ? 'badge--success' : 'badge--critical'}">${ok ? 'Meets minimum' : 'Below minimum'}</span></div>`; }).join('')}</div>`;
      break;
    }

    default: return '';
  }
  /* Charts built on made-up numbers say so; real-data charts set real: true. */
  const exTag = b.real ? '' : ['bars', 'donut', 'waterfall', 'heatmap', 'stackcompare'].includes(b.ig) ? 'Example data · fictional fleet' : b.ig === 'ratings' ? 'General tendencies, not measurements' : '';
  return `<figure class="ig ${cls}"><figcaption class="ig__head"><span class="ig__tag">${icon(b.icon || 'bar', 'icon--sm')} Infographic</span><span class="ig__title">${esc(b.title)}</span>${exTag ? `<span class="ig__ex">${exTag}</span>` : ''}</figcaption>${inner}${b.note ? `<p class="ig__note">${icon('info', 'icon--sm')}<span>${inline(b.note)}</span></p>` : ''}</figure>`;
}

/* ---------- Widget: gauge cluster ---------- */
const GAUGES = [
  { name: 'Oil pressure', normal: -5, bad: -72, badLabel: 'Low', zone: 'low', why: 'Oil pressure keeps the engine lubricated. A low reading — especially with a warning — can destroy an engine in minutes.', act: 'Low reading or warning: stop safely and shut down per training, then arrange service. Never "run it to the next exit".' },
  { name: 'Coolant temp', normal: -8, bad: 70, badLabel: 'Hot', zone: 'high', why: 'Shows engine operating temperature. Climbing above normal signals a cooling problem or excessive load.', act: 'Above normal: reduce load if safe and find a place to stop. With steam or a warning: stop now and don\'t open the cap.' },
  { name: 'Air (primary)', normal: 20, bad: -68, badLabel: 'Low', zone: 'low', why: 'Tractors show the primary and secondary brake air circuits on separate gauges. A low-air warning activates before pressure falls far enough for spring brakes to apply.', act: 'Falling pressure, a warning or hissing = brake-system defect. Stop safely, do not continue, send a qualified technician.' },
  { name: 'Fuel', normal: 30, bad: -76, badLabel: 'Empty', zone: 'low', why: 'Running a diesel out of fuel may require the fuel system to be primed before it restarts.', act: 'Low fuel is a planning item with dispatch. If it ran out: roadside fuel delivery and possibly a mobile tech.' },
  { name: 'DEF level', normal: 18, bad: -70, badLabel: 'Low', zone: 'low', why: 'DEF is consumed by the SCR system. Emissions rules require engines to progressively limit power when DEF runs low or out.', act: 'Low DEF warning: refill at the next stop. A DEF-related derate usually clears after refilling — confirm with the driver.' },
  { name: 'Voltmeter', normal: 8, bad: -62, badLabel: 'Low', zone: 'low', why: 'Shows charging-system voltage. A low reading while running suggests the alternator isn\'t charging.', act: 'Low voltage while running: the truck may not restart. Get it tested before the driver shuts down, if possible.' }
];
const LAMPS = [
  ['critical', 'STOP ENGINE', 'Stop safely as soon as possible.'], ['warning', 'CHECK ENGINE', 'Diagnose soon; watch for changes.'], ['warning', 'DPF / regen', 'Soot load high — follow regen procedure; derate may follow.'],
  ['warning', 'DEF low', 'Refill DEF; power limits follow if ignored.'], ['warning', 'HEST', 'Hot exhaust during regen — keep clear of flammables. Not a fault by itself.'],
  ['warning', 'ABS', 'Anti-lock fault — normal braking usually remains; schedule inspection promptly per procedure.'], ['critical', 'Low air', 'Brake air pressure low — stop safely, do not continue.'], ['warning', 'Battery / charging', 'Charging fault — the truck may not restart.']
];
function gaugeSVG(g, deg) {
  const p = (a) => { const r = (a * Math.PI) / 180; return `${(60 + 44 * Math.sin(r)).toFixed(1)} ${(64 - 44 * Math.cos(r)).toFixed(1)}`; };
  const arc = (a1, a2) => `M ${p(a1)} A 44 44 0 0 1 ${p(a2)}`;
  const bad = g.zone === 'low' ? arc(-90, -50) : arc(50, 90);
  return `<svg viewBox="0 0 120 74" aria-hidden="true"><path d="${arc(-90, 90)}" class="gauge__track"/><path d="${arc(-45, 45)}" class="gauge__ok"/><path d="${bad}" class="gauge__bad"/>
    <line x1="60" y1="64" x2="60" y2="28" class="gauge__needle" style="transform:rotate(${deg}deg)"/><circle cx="60" cy="64" r="5" class="gauge__hub"/></svg>`;
}
function gaugesHTML() {
  return `<div class="card gauges"><div class="card__head"><h3>${icon('gauge')} Instrument cluster</h3><span class="small muted">Select a gauge</span></div>
    <div class="card__body"><div class="gauges__grid" role="group" aria-label="Gauges">${GAUGES.map((g, i) => `<button type="button" class="gauge" data-g="${i}" aria-pressed="${i === 0}">${gaugeSVG(g, g.normal)}<span class="gauge__name">${esc(g.name)}</span></button>`).join('')}</div>
    <div class="gauges__detail" aria-live="polite"></div>
    <h4 class="mt-6 mb-4" style="font-size:var(--fs-sm);text-transform:uppercase;letter-spacing:.08em;color:var(--muted)">Common warning lamps</h4>
    <div class="lamps">${LAMPS.map(([tone, n, d]) => `<div class="lamp ${toneCls(tone)}"><span class="lamp__light" aria-hidden="true"></span><div><strong>${esc(n)}</strong><p>${esc(d)}</p></div></div>`).join('')}</div></div></div>`;
}
function mountGauges(el) {
  let cur = 0; const state2 = GAUGES.map(() => false);
  const draw = () => {
    $$('.gauge', el).forEach((b, i) => { b.setAttribute('aria-pressed', i === cur); $('.gauge__needle', b).style.transform = `rotate(${state2[i] ? GAUGES[i].bad : GAUGES[i].normal}deg)`; b.classList.toggle('is-bad', state2[i]); });
    const g = GAUGES[cur]; const bad = state2[cur];
    $('.gauges__detail', el).innerHTML = `<div class="anim-fade-in"><div class="row row--between row--wrap"><h4 style="font-size:var(--fs-lg)">${esc(g.name)}</h4><span class="badge badge--${bad ? 'critical' : 'success'}">${bad ? `Abnormal · ${g.badLabel}` : 'Normal range'}</span></div>
      <p class="mt-2">${esc(g.why)}</p>${bad ? `<div class="callout callout--safety mt-4"><span class="callout__icon">${icon('shield')}</span><div><h4>Coordinator action</h4><p>${esc(g.act)}</p></div></div>` : ''}
      <button type="button" class="btn btn--sm mt-4" data-toggle>${icon('activity')} ${bad ? 'Show normal reading' : 'Show abnormal reading'}</button></div>`;
    $('[data-toggle]', el).addEventListener('click', () => { state2[cur] = !state2[cur]; draw(); });
  };
  $$('.gauge', el).forEach((b) => b.addEventListener('click', () => { cur = +b.dataset.g; draw(); }));
  draw();
}

/* ---------- Widget: tire positions (top view) ---------- */
const AXLES = [['Steer', 95, false], ['Drive axle 1', 245, true], ['Drive axle 2', 300, true], ['Trailer axle 1', 735, true], ['Trailer axle 2', 790, true]];
function tireInfo(axle, side, pos) {
  const steer = axle === 'Steer'; const trailer = axle.startsWith('Trailer');
  return {
    name: `${axle} — ${side}${pos ? ' ' + pos : ''}`,
    rule: steer ? 'Minimum tread 4/32″ (U.S.). Directly affects steering — a damaged steer tire means the truck should not continue.' : 'Minimum tread 2/32″ (U.S.).',
    tip: steer ? 'Steer tires are single. Ask about vibration in the steering wheel and any recent impact.' : pos === 'inside'
      ? 'Inner duals are hard to see. A flat inner tire overloads its outer partner — ask the vendor to inspect both.'
      : `Duals share the load. When one fails, have the partner inspected too.${trailer ? ' Trailer tires are the trailer\'s unit, not the tractor\'s.' : ''}`
  };
}
function tiresHTML() {
  const tire = (x, y, axle, side, pos, i) => `<rect class="tire-pos" tabindex="0" role="button" data-t="${i}" data-axle="${axle}" data-side="${side}" data-pos="${pos}" aria-label="${esc(axle)}, ${side}${pos ? ', ' + pos : ''}" x="${x - 17}" y="${y}" width="34" height="18" rx="4"/>`;
  let i = 0; const tires = [];
  AXLES.forEach(([axle, x, dual]) => {
    if (dual) { tires.push(tire(x, 22, axle, 'left', 'outside', i++), tire(x, 44, axle, 'left', 'inside', i++), tire(x, 158, axle, 'right', 'inside', i++), tire(x, 180, axle, 'right', 'outside', i++)); }
    else { tires.push(tire(x, 36, axle, 'left', '', i++), tire(x, 166, axle, 'right', '', i++)); }
  });
  return `<div class="diagram tires"><div class="diagram__stage">
    <svg class="truck" viewBox="0 0 900 220" role="group" aria-label="Top view of a tractor-trailer. Select a tire position.">
      <text x="30" y="16" class="tires__lbl">LEFT (driver side)</text><text x="30" y="214" class="tires__lbl">RIGHT</text>
      <path class="line" d="M860 110 h28 m-10 -8 l10 8 l-10 8" /><text x="780" y="105" class="tires__lbl">direction</text>
      <rect class="body" x="50" y="66" width="120" height="88" rx="16"/><rect class="body-dark" x="60" y="98" width="290" height="24" rx="4"/>
      <rect class="body" x="330" y="60" width="520" height="100" rx="4" style="opacity:.75"/><circle cx="330" cy="110" r="7" class="hub"/>
      ${AXLES.map(([, x]) => `<line class="line" x1="${x}" y1="40" x2="${x}" y2="180" opacity=".5"/>`).join('')}
      ${tires.join('')}
    </svg></div>
    <div class="diagram__panel" aria-live="polite"><div class="row" style="gap:12px"><span class="state-block__icon" style="width:40px;height:40px;margin:0">${icon('target')}</span><div><strong>Select any of the 18 tire positions</strong><p class="small">2 steer · 8 drive · 8 trailer. Use Tab and Enter to navigate by keyboard.</p></div></div></div></div>`;
}
function mountTires(el) {
  const pick = (r) => {
    $$('.tire-pos', el).forEach((x) => x.classList.toggle('is-active', x === r)); r.classList.add('is-seen');
    const info = tireInfo(r.dataset.axle, r.dataset.side, r.dataset.pos);
    $('.diagram__panel', el).innerHTML = `<div class="anim-fade-in"><h4 style="font-size:var(--fs-lg)">${esc(info.name)}</h4><p class="mt-2">${esc(info.rule)}</p><div class="callout callout--tip mt-4"><span class="callout__icon">${icon('bulb')}</span><div><h4>On the call</h4><p>${esc(info.tip)}</p></div></div><p class="xs muted mt-3">Tell the vendor: <strong>${esc(info.name)}</strong>, plus tire size and exact location.</p></div>`;
  };
  el.addEventListener('click', (e) => { const r = e.target.closest('.tire-pos'); if (r) pick(r); });
  el.addEventListener('keydown', (e) => { const r = e.target.closest('.tire-pos'); if (r && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); pick(r); } });
}

/* ---------- Widget: exhaust aftertreatment flow ---------- */
const EXHAUST = [
  { id: 'eng', x: 20, w: 110, t: 'Engine', d: 'Produces exhaust containing soot (particulate matter) and nitrogen oxides (NOx). Engine problems such as injector faults can overload the aftertreatment downstream.' },
  { id: 'doc', x: 170, w: 90, t: 'DOC', d: 'Diesel Oxidation Catalyst: oxidizes carbon monoxide and hydrocarbons and generates heat that helps the DPF regenerate.' },
  { id: 'dpf', x: 290, w: 110, t: 'DPF', d: 'Diesel Particulate Filter: traps soot. A differential pressure sensor tracks how loaded it is. Regeneration burns soot; ash is removed by periodic cleaning.' },
  { id: 'dos', x: 430, w: 80, t: 'DEF doser', d: 'Injects DEF (32.5% urea) into the exhaust. The DEF tank and lines are heated because DEF freezes around 12 °F (−11 °C).' },
  { id: 'scr', x: 540, w: 110, t: 'SCR', d: 'Selective Catalytic Reduction: ammonia from DEF converts NOx into nitrogen and water over the catalyst. NOx sensors check how well it works.' },
  { id: 'asc', x: 680, w: 80, t: 'ASC', d: 'Ammonia Slip Catalyst: cleans up leftover ammonia. On many systems it is packaged together with the SCR.' },
  { id: 'out', x: 790, w: 90, t: 'Stack', d: 'Treated exhaust exits. Visible black smoke from a modern truck usually means something upstream needs attention.' }
];
function exhaustHTML() {
  return `<div class="diagram exhaust"><div class="diagram__stage">
    <svg viewBox="0 0 900 190" role="group" aria-label="Exhaust aftertreatment flow. Select a component.">
      <path class="exhaust__pipe" d="M130 80 H790"/><path class="exhaust__flow" d="M130 80 H790"/>
      <rect class="body-dark" x="438" y="140" width="64" height="36" rx="6"/><text x="470" y="163" text-anchor="middle" class="tires__lbl">DEF tank</text>
      <path class="exhaust__def" d="M470 140 V100"/>
      ${EXHAUST.map((c) => `<g class="ex-part" tabindex="0" role="button" data-ex-part="${c.id}" aria-label="${esc(c.t)}"><rect x="${c.x}" y="52" width="${c.w}" height="56" rx="10"/><text x="${c.x + c.w / 2}" y="85" text-anchor="middle">${esc(c.t)}</text></g>`).join('')}
    </svg></div>
    <div class="diagram__panel" aria-live="polite"><div class="row" style="gap:12px"><span class="state-block__icon" style="width:40px;height:40px;margin:0">${icon('activity')}</span><div><strong>Follow the exhaust from left to right</strong><p class="small">Select each component to see what it does and why it matters on a call.</p></div></div></div></div>`;
}
function mountExhaust(el) {
  const pick = (g) => {
    $$('.ex-part', el).forEach((x) => x.classList.toggle('is-active', x === g));
    const c = EXHAUST.find((x) => x.id === g.dataset.exPart);
    $('.diagram__panel', el).innerHTML = `<div class="anim-fade-in"><h4 style="font-size:var(--fs-lg)">${esc(c.t)}</h4><p class="mt-2">${esc(c.d)}</p></div>`;
  };
  el.addEventListener('click', (e) => { const g = e.target.closest('.ex-part'); if (g) pick(g); });
  el.addEventListener('keydown', (e) => { const g = e.target.closest('.ex-part'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); pick(g); } });
}

/* ---------- Quick Reference page ---------- */
function viewReference() {
  const sections = [
    ['Triage & urgency', [REF.urgency, REF.lamps, REF.triage]],
    ['Calls & communication', [REF.intake, REF.update, REF.roadside, REF.ladder]],
    ['Documentation & numbers', [REF.workorder, REF.kpis, REF.tireRules]],
    ['Equipment, tires & loads', [REF.enclosedTrailers, REF.openDeck, REF.treadMin, REF.tireCode, REF.weights, REF.securement]],
    ['Compliance, parts & diagnostics', [REF.dvir, REF.cvsa, REF.fmi, REF.pinout, REF.reorder]],
    ['Sources & scope', [REF.scope, REF.sources]]
  ];
  const html = `<div class="page page--narrow ref-page">${pageHead({ eyebrow: `${icon('file', 'icon--sm')} Reference`, title: 'Quick Reference', text: 'The academy\'s most-used frameworks on one page — keep it open on your second screen or print it for your desk.', right: `<button type="button" class="btn" data-print>${icon('print')} Print cheat sheet</button>` })}
    <nav class="row row--wrap mb-6" aria-label="Jump to section">${sections.map(([t], i) => `<a class="chip" href="#ref-${i}" data-jump="ref-${i}">${esc(t)}</a>`).join('')}</nav>
    ${sections.map(([t, blocks], i) => `<section class="ref-section" id="ref-${i}"><div class="section-head"><h2>${esc(t)}</h2></div><div class="stack">${blocks.map(renderBlock).join('')}</div></section>`).join('')}</div>`;
  return {
    html, title: 'Quick Reference', nav: 'reference', crumbs: [['Quick Reference']],
    after: (v) => {
      $$('[data-jump]', v).forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); document.getElementById(a.dataset.jump).scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' }); }));
      $('[data-print]', v).addEventListener('click', () => { $('#printRoot').innerHTML = `<div class="print-sheet"><h1>Maintenance Coordinator — Quick Reference</h1>${sections.map(([t, b]) => `<h2>${esc(t)}</h2>${b.map(renderBlock).join('')}`).join('')}</div>`; window.print(); });
    }
  };
}

/* ---------- Widget: trucking invoice builder ---------- */
const INV_DOCS = [['ratecon', 'Rate confirmation', true], ['pod', 'Signed POD (BOL signed by receiver)', true], ['lumper', 'Lumper receipt #L-7731', true], ['times', 'Detention in/out times (on BOL)', true], ['fuel', 'Driver fuel receipts', false]];
const INV_FIELDS = [['num', 'Invoice number', 'e.g., CFL-1047', 'text'], ['billto', 'Bill to (customer)', 'Who pays this invoice?', 'text'], ['load', 'Load / reference #', 'As shown on the rate con', 'text'],
  ['linehaul', 'Linehaul ($)', '', 'number'], ['fsc', 'Fuel surcharge ($)', '', 'number'], ['detention', 'Detention ($)', 'Billable hours × rate', 'number'], ['lumper', 'Lumper ($)', '', 'number']];
function invoiceWidgetHTML() {
  return `<div class="card invb"><div class="card__head"><h3>${icon('file')} Invoice builder</h3><span class="small muted">Load NFB-448213</span></div>
    <div class="card__body">
      <div class="grid grid--2" style="gap:var(--sp-4)">
        <div class="source-doc"><span class="source-doc__label">Rate confirmation</span>${esc(RATECON.source)}</div>
        <div class="source-doc"><span class="source-doc__label">Delivery details</span>${esc(RATECON.delivery)}</div>
      </div>
      <div class="invb__grid mt-6">
        <form class="invb__form" onsubmit="return false" aria-label="Invoice fields">
          <div class="fields" style="margin-top:0">${INV_FIELDS.map(([k, l, ph, t]) => `<div class="field ${k === 'billto' ? 'field--full' : ''}"><label for="invb-${k}">${esc(l)}</label><div class="input-affix">${t === 'number' ? '<span class="pre">$</span>' : ''}<input class="input ${t === 'number' ? 'has-pre num' : ''}" id="invb-${k}" data-f="${k}" type="${t === 'number' ? 'number' : 'text'}" ${t === 'number' ? 'min="0" step="0.01" inputmode="decimal"' : ''} placeholder="${esc(ph)}" autocomplete="off"></div><span class="field__result" data-r="${k}" aria-live="polite"></span></div>`).join('')}</div>
          <fieldset class="mt-4"><legend class="label mb-2">Attach supporting documents</legend><div class="opts">${INV_DOCS.map(([k, l]) => `<label class="opt" data-doc="${k}"><input type="checkbox" value="${k}"><span class="opt__box"><span class="opt__key" aria-hidden="true">${icon('check', 'icon--sm')}</span><span>${esc(l)}<span class="opt__why" hidden></span></span></span></label>`).join('')}</div></fieldset>
          <div class="q__actions"><button type="button" class="btn btn--primary" data-invb-check>${icon('check')} Check invoice</button><button type="button" class="btn btn--ghost" data-invb-reset>${icon('rotate')} Start over</button></div>
          <div data-invb-fb aria-live="polite"></div>
        </form>
        <div class="invb__preview" aria-label="Invoice preview" data-invb-preview></div>
      </div>
    </div></div>`;
}
function mountInvoiceWidget(el) {
  const val = (k) => ($(`[data-f="${k}"]`, el).value || '').trim();
  const num = (k) => Math.max(0, parseFloat(val(k)) || 0);
  const preview = () => {
    const lines = [['Linehaul', num('linehaul')], ['Fuel surcharge', num('fsc')], ['Detention', num('detention')], ['Lumper', num('lumper')]];
    const total = lines.reduce((a, r) => a + r[1], 0);
    const docs = $$('[data-doc] input:checked', el).map((i) => INV_DOCS.find((d) => d[0] === i.value)[1]);
    $('[data-invb-preview]', el).innerHTML = `<div class="invb__doc">
      <div class="invb__top"><div><strong>Crestline Freight Lines LLC</strong><span>100 Main St · Dallas, TX</span></div><div class="invb__title">INVOICE</div></div>
      <dl class="invb__meta"><div><dt>Invoice #</dt><dd>${esc(val('num') || '—')}</dd></div><div><dt>Date</dt><dd>06/14</dd></div><div><dt>Terms</dt><dd>Net 30</dd></div><div><dt>Load #</dt><dd>${esc(val('load') || '—')}</dd></div></dl>
      <p class="invb__bill"><span>Bill to</span>${esc(val('billto') || '—')}</p>
      <p class="invb__route">Dallas, TX 06/12 → Atlanta, GA 06/13 · 781 mi</p>
      <table class="invb__lines"><tbody>${lines.map(([l, v]) => `<tr><td>${l}</td><td class="num">${fmtMoney(v, 2)}</td></tr>`).join('')}</tbody><tfoot><tr><td>Total due</td><td class="num">${fmtMoney(total, 2)}</td></tr></tfoot></table>
      <p class="invb__att"><span>Attachments</span>${docs.length ? docs.map(esc).join(' · ') : 'None yet'}</p></div>`;
    return total;
  };
  el.addEventListener('input', preview);
  el.addEventListener('change', preview);
  $('[data-invb-check]', el).addEventListener('click', () => {
    const a = RATECON.answer; const total = preview(); const issues = [];
    const checks = {
      num: [!!val('num'), 'Give the invoice a unique number.'],
      billto: [val('billto').toLowerCase().includes(a.broker), 'Bill the broker (Northgate Freight Brokerage) — it\'s the customer on this load.'],
      load: [val('load').toUpperCase().replace(/\s/g, '') === a.load, `Load # must match the rate con exactly: ${a.load}.`],
      linehaul: [num('linehaul') === a.linehaul, 'Linehaul must match the rate con: $1,900.00.'],
      fsc: [num('fsc') === a.fsc, 'Fuel surcharge per rate con: $250.00 flat.'],
      detention: [num('detention') === a.detention, 'Detention: 06:40–11:10 = 4.5 h on site − 2 h free = 2.5 h × $50 = $125.00.'],
      lumper: [num('lumper') === a.lumper, 'Lumper: $185.00 per the receipt.']
    };
    let ok = 0;
    Object.entries(checks).forEach(([k, [pass, msg]]) => {
      const inp = $(`[data-f="${k}"]`, el); const r = $(`[data-r="${k}"]`, el);
      inp.classList.toggle('is-valid', pass); inp.classList.toggle('is-invalid', !pass);
      r.className = `field__result ${pass ? 'ok' : 'no'}`; r.innerHTML = pass ? `${icon('check')} Correct` : `${icon('x')} ${esc(msg)}`;
      if (pass) ok++; else issues.push(msg);
    });
    let docOk = 0;
    $$('[data-doc]', el).forEach((lab) => {
      const [, , need] = INV_DOCS.find((d) => d[0] === lab.dataset.doc); const on = $('input', lab).checked; const good = on === need;
      lab.classList.remove('is-correct', 'is-wrong', 'is-missed');
      if (on && need) lab.classList.add('is-correct'); else if (on && !need) lab.classList.add('is-wrong'); else if (!on && need) lab.classList.add('is-missed');
      const w = $('.opt__why', lab); w.hidden = good; w.textContent = need ? 'Required to support this invoice.' : 'Not needed — fuel surcharge comes from the rate con.';
      if (good) docOk++; else issues.push(need ? `Attach: ${lab.textContent.trim()}` : 'Remove the fuel receipts — not needed.');
    });
    const score = (ok + docOk) / (Object.keys(checks).length + INV_DOCS.length);
    const ready = issues.length === 0 && Math.abs(total - a.total) < 0.005;
    if (ready) { state.exercises['inv-builder'] = 1; save(); }
    $('[data-invb-fb]', el).innerHTML = ready
      ? `<div class="feedback feedback--correct">${icon('check-circle')}<div><strong>Ready to submit — $2,460.00</strong><p>Every line traces to the rate con or a supporting document, the reference numbers match, and the packet is complete.</p></div></div>`
      : `<div class="feedback feedback--${score >= 0.5 ? 'partial' : 'wrong'}">${icon('info')}<div><strong>Not ready yet — ${issues.length} issue${issues.length === 1 ? '' : 's'} to fix</strong><p>Correct the highlighted items and check again. Expected total: $2,460.00; yours: ${fmtMoney(total, 2)}.</p></div></div>`;
  });
  $('[data-invb-reset]', el).addEventListener('click', () => { el.innerHTML = invoiceWidgetHTML(); mountInvoiceWidget(el); });
  preview();
}
