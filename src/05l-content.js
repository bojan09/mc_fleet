/* ===========================================================================
   LESSON CONTENT ON DEMAND
   script.js carries only the track outline (ids, titles, minutes); each
   track's lesson text lives in content/<track>.json, and platform page
   sections in content/software.json (CONTENT_FILES, stamped
   by tools/build.mjs). The router loads what a page needs before rendering
   it (contentFor); the service worker precaches every file for offline use.
   =========================================================================== */
const CONTENT_LOADED = new Set();
const CONTENT_PENDING = new Map();

/* Merges a track's lesson text into its outline (same objects, so LESSONS,
   LESSON_MAP and every reference see it). */
function applyContent(tid, data) {
  if (tid === 'software') { SOFTWARE.forEach((p) => Object.assign(p, data[p.id] || {})); CONTENT_LOADED.add(tid); return; }
  const t = TRACK_BY_ID[tid]; if (!t) return;
  t.modules.forEach((m) => m.lessons.forEach((l) => Object.assign(l, data[`${m.id}.${l.id}`] || {})));
  CONTENT_LOADED.add(tid);
  Q_BANK = null; Q_BY_ID = null; // the review question bank includes lesson checks
}
const hasContent = (ids = TRACKS.map((t) => t.id)) => ids.every((id) => CONTENT_LOADED.has(id) || !CONTENT_FILES[id]);

/* Loads the lesson text for the given tracks (all by default). */
function loadContent(ids = TRACKS.map((t) => t.id)) {
  return Promise.all(ids.filter((id) => CONTENT_FILES[id] && !CONTENT_LOADED.has(id)).map((id) => {
    if (!CONTENT_PENDING.has(id)) {
      CONTENT_PENDING.set(id, fetch(CONTENT_FILES[id])
        .then((r) => { if (!r.ok) throw new Error(`content ${id}: ${r.status}`); return r.json(); })
        .then((d) => applyContent(id, d))
        .finally(() => CONTENT_PENDING.delete(id)));
    }
    return CONTENT_PENDING.get(id);
  }));
}

/* Which tracks' lesson text a route needs: a list, 'all', or null. */
function contentFor(path) {
  const m = path.match(/^\/(?:lesson|quiz|cheatsheet)\/(\w+)/);
  if (m) return [m[1]];
  if (/^\/(?:academy\/)?software\/[\w-]+/.test(path)) return ['software'];
  if (/^\/(?:review|exercises)$/.test(path)) return 'all';
  return null;
}
