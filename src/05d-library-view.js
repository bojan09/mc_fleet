
/* ===========================================================================
   VISUAL LIBRARY — #/library (browse) and #/library/:id (detail view)
   Photos are Wikimedia Commons thumbnails with attribution; diagrams come
   from the academy's own illustration set (ART).
   =========================================================================== */
function libPhotoImg(x, w, cls = '') {
  const p = LIB_PHOTOS[x.photo]; if (!p) return '';
  // Local copies (resized WebP) ship with the app so the library works offline.
  const src = w <= 500 ? p.localSm : p.local;
  return `<img class="${cls}" src="${esc(src)}" alt="${esc(x.alt || x.name)}" width="${p.w}" height="${p.h}" loading="lazy" decoding="async">`;
}
function libArt(x) {
  if (!x.art) return '';
  return `<div class="lib-art">${artSVG(x.art, x.alt || x.name)}${x.pin ? `<span class="lib-pin" style="left:${x.pin.x}%;top:${x.pin.y}%" aria-hidden="true"></span>` : ''}</div>`;
}
function libCredit(x) {
  const p = LIB_PHOTOS[x.photo]; if (!p) return '';
  const author = p.author && p.author !== 'Unknown author' ? esc(p.author) : 'see file page';
  return `<p class="lib-credit">Photo: ${author} · ${p.licenseUrl ? `<a href="${esc(p.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(p.license)}</a>` : esc(p.license)} · <a href="${esc(p.page)}" target="_blank" rel="noopener noreferrer">Wikimedia Commons<span class="sr-only"> (opens in a new tab)</span></a> · resized</p>`;
}
/* Thumbnail used on cards: photo if there is one, otherwise the illustration. */
function libThumb(x) {
  return x.photo ? libPhotoImg(x, 500, 'lib-thumb__img') : `<div class="lib-thumb__art">${libArt(x)}</div>`;
}
function libCard(x) {
  return `<a class="lib-card" href="#/library/${x.id}"><div class="lib-thumb">${libThumb(x)}${x.photo ? '' : '<span class="lib-badge">Illustration</span>'}</div>
    <div class="lib-card__body"><strong>${esc(x.name)}</strong><span>${esc(x.short)}</span></div></a>`;
}
function libItemsForLesson(key) { return LIBRARY.filter((x) => x.lessons.includes(key)); }
/* Strip shown in lessons: "See it in the Visual Library". */
function libLessonStrip(key) {
  const items = libItemsForLesson(key); if (!items.length) return '';
  return `<aside class="lib-strip" aria-label="Visual Library items for this lesson"><div class="lib-strip__head">${icon('search', 'icon--sm')}<span><strong>Study these visually</strong> — see what they look like in the Visual Library</span></div>
    <div class="lib-strip__row">${items.map((x) => `<a class="lib-chip" href="#/library/${x.id}"><span class="lib-chip__img">${libThumb(x)}</span><span>${esc(x.name)}</span></a>`).join('')}</div></aside>`;
}

function viewLibrary(id) {
  if (id) return viewLibraryItem(id);
  const counts = Object.fromEntries(LIB_CATS.map(([k]) => [k, LIBRARY.filter((x) => x.cat === k).length]));
  const html = `<div class="page lib-page">${pageHead({ eyebrow: `${icon('search', 'icon--sm')} Reference`, title: 'Vehicles & Parts Visual Library', text: `${LIBRARY.length} vehicles, trailers, equipment and parts from the academy — with real photos or labeled illustrations, what each one does, and the lessons where it comes up.` })}
    <div class="lib-tools">
      <div class="input-group lib-search"><label class="sr-only" for="libQ">Search the Visual Library</label>${icon('search')}<input class="input" id="libQ" type="search" placeholder="Search vehicles, trailers or parts…" autocomplete="off"></div>
      <div class="row row--wrap" role="group" aria-label="Filter by category"><button type="button" class="chip" data-libcat="all" aria-pressed="true">All <span class="muted">${LIBRARY.length}</span></button>${LIB_CATS.map(([k, t]) => `<button type="button" class="chip" data-libcat="${k}" aria-pressed="false">${esc(t)} <span class="muted">${counts[k]}</span></button>`).join('')}</div>
    </div>
    <p class="small muted mb-4" id="libCount" aria-live="polite"></p>
    <div id="libResults"></div>
    <p class="scope-note">${icon('info', 'icon--sm')}<span>Photos come from Wikimedia Commons under free licenses; each item credits its photographer. Makes and models differ — the photos show typical examples. Where no accurate free photo was available, the academy's labeled illustration is shown instead.</span></p></div>`;
  return {
    html, title: 'Visual Library', nav: 'library', crumbs: [['Visual Library']],
    after: (v) => {
      let cat = 'all';
      const q = $('#libQ', v); const out = $('#libResults', v);
      const section = (title, list) => (list.length ? `<section class="lib-section"><h2>${esc(title)}</h2><div class="lib-grid">${list.map(libCard).join('')}</div></section>` : '');
      const draw = () => {
        const s = q.value.trim().toLowerCase();
        const hit = (x) => !s || `${x.name} ${x.short} ${x.what} ${(x.terms || []).join(' ')} ${x.group || ''}`.toLowerCase().includes(s);
        const list = LIBRARY.filter((x) => (cat === 'all' || x.cat === cat) && hit(x));
        let html2 = '';
        LIB_CATS.forEach(([k, t]) => {
          if (k !== 'parts') { html2 += section(t, list.filter((x) => x.cat === k)); return; }
          LIB_GROUPS.forEach((g) => { html2 += section(`Parts · ${g}`, list.filter((x) => x.cat === 'parts' && x.group === g)); });
        });
        out.innerHTML = html2 || stateBlock({ ic: 'search', title: 'No matches', text: 'Try another word, such as "brake", "trailer" or "tire".' });
        $('#libCount', v).textContent = `${list.length} item${list.length === 1 ? '' : 's'}`;
      };
      q.addEventListener('input', draw);
      $$('[data-libcat]', v).forEach((b) => b.addEventListener('click', () => { cat = b.dataset.libcat; $$('[data-libcat]', v).forEach((c) => c.setAttribute('aria-pressed', c === b)); draw(); }));
      draw();
    }
  };
}

function viewLibraryItem(id) {
  const x = LIB_MAP.get(id);
  if (!x) return viewNotFound();
  const catName = (LIB_CATS.find(([k]) => k === x.cat) || [])[1];
  const lessons = x.lessons.map((k) => LESSON_MAP.get(k)).filter(Boolean);
  const related = (x.related || []).map((r) => LIB_MAP.get(r)).filter(Boolean);
  const visual = x.photo
    ? `<figure class="lib-figure">${libPhotoImg(x, 960, 'lib-photo')}<figcaption>${libCredit(x)}</figcaption></figure>${x.art ? `<figure class="lib-figure lib-figure--art"><span class="lib-label">${icon('layers', 'icon--sm')} Diagram</span>${libArt(x)}<figcaption class="lib-credit">Schematic illustration — simplified, not to scale.</figcaption></figure>` : ''}`
    : `<figure class="lib-figure lib-figure--art"><span class="lib-label">${icon('layers', 'icon--sm')} Illustration</span>${libArt(x)}<figcaption class="lib-credit">Schematic illustration — simplified, not to scale.${x.pin ? ' The orange marker shows where the part is.' : ''}</figcaption></figure>`;
  const html = `<div class="page lib-item">
    ${pageHead({ eyebrow: `${icon('search', 'icon--sm')} Visual Library · ${esc(catName)}${x.group ? ` · ${esc(x.group)}` : ''}`, title: esc(x.name), text: esc(x.short) })}
    <div class="lib-item__grid">
      <div class="lib-item__visual">${visual}</div>
      <div class="lib-item__text prose">
        <h2>What is it?</h2><p>${inline(x.what)}</p>
        <h2>What does it do?</h2><p>${inline(x.does)}</p>
        <h2>Where is it used?</h2><p>${inline(x.where)}</p>
        <div class="card lib-keys"><div class="card__head"><h2>${icon('check-circle')} Key things to know</h2></div><div class="card__body"><ul>${x.keys.map((k) => `<li>${inline(k)}</li>`).join('')}</ul></div></div>
      </div>
    </div>
    ${lessons.length ? `<section class="lib-section"><h2>Where the academy covers it</h2><div class="lib-lessons">${lessons.map((L) => `<a class="lib-lesson" href="${lessonHref(L)}">${icon('book')}<span><strong>${esc(L.l.title)}</strong><span class="small muted">${esc(L.t.level)} · Module ${L.m.id.slice(1)}: ${esc(L.m.title)}</span></span>${icon('chev-r', 'icon--sm')}</a>`).join('')}</div></section>` : ''}
    ${related.length ? `<section class="lib-section"><h2>Related items</h2><div class="lib-grid lib-grid--sm">${related.map(libCard).join('')}</div></section>` : ''}
    <div class="row row--between mt-8"><a class="btn" href="#/library">${icon('arrow-l')} All items</a></div>
  </div>`;
  return { html, title: x.name, nav: 'library', crumbs: [['Visual Library', '#/library'], [x.name]] };
}

/* Tapping a term that has a picture opens a quick visual card instead of jumping away. */
function openTermVisual(g, x) {
  openModal({
    title: esc(x.name), size: 'modal--lib',
    body: `<div class="lib-pop">${x.photo ? `<figure class="lib-figure">${libPhotoImg(x, 960, 'lib-photo')}<figcaption>${libCredit(x)}</figcaption></figure>` : `<figure class="lib-figure lib-figure--art">${libArt(x)}<figcaption class="lib-credit">Schematic illustration.${x.pin ? ' The orange marker shows where the part is.' : ''}</figcaption></figure>`}
      <p><strong>${esc(g ? g.full : x.name)}</strong> — ${esc(g ? g.simple : x.short)}</p><p class="small">${esc(x.does)}</p></div>`,
    foot: `${g ? `<a class="btn btn--ghost" href="#/glossary/${encodeURIComponent(g.term)}" data-close>${icon('book')} Glossary entry</a>` : ''}<a class="btn btn--primary" href="#/library/${x.id}" data-close>Study it in the Visual Library ${icon('arrow-r')}</a>`
  });
}
