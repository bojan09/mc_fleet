/* ===========================================================================
   QUESTION ATTEMPTS — what a learner answered, for item analysis
   Every graded question (lesson checks, module quizzes, review, platform
   checks, before/after tests) becomes one attempt: question id, option
   chosen, right or wrong, time on the question, where it was answered.
   Offline-first, like progress: attempts queue in this browser
   (localStorage "mca.attempts", newest 500 kept) and upload in batches to
   public.attempts when the learner is signed in and online. Signed out, they
   never leave the device. Attempts are not part of the synced progress.
   =========================================================================== */
const ATT_KEY = 'mca.attempts';
const ATT_MAX = 500;
const ATT = { timer: null, sending: false };
/* Answer timing: ms since the page appeared, or since the previous answer on it. */
let Q_CLOCK = Date.now();
function attLoad() { try { const v = JSON.parse(localStorage.getItem(ATT_KEY) || '[]'); return Array.isArray(v) ? v : []; } catch (e) { return []; } }
function attSave(list) { try { localStorage.setItem(ATT_KEY, JSON.stringify(list.slice(-ATT_MAX))); } catch (e) {} }
function attContext() {
  const h = location.hash;
  return /^#\/lesson\//.test(h) ? 'lesson' : /^#\/quiz\//.test(h) ? 'quiz' : /^#\/review/.test(h) ? 'review'
    : /^#\/(?:academy\/)?software\//.test(h) ? 'platform' : /^#\/pretest\//.test(h) ? 'pre' : /^#\/posttest\//.test(h) ? 'post' : 'other';
}
function recordAttempt(itemId, chosen, correct, ms, ctx) {
  if (!/^[a-z0-9.#_-]{3,80}$/.test(String(itemId)) || !Number.isInteger(chosen) || chosen < 0 || chosen > 9) return;
  const list = attLoad();
  list.push({ i: itemId, c: chosen, ok: !!correct, ms: Number.isFinite(ms) ? Math.max(0, Math.min(3600000, Math.round(ms))) : null, x: ctx || attContext(), at: new Date().toISOString() });
  attSave(list);
  attQueue();
}
function attQueue() { clearTimeout(ATT.timer); ATT.timer = setTimeout(attFlush, 3000); }
async function attFlush() {
  if (ATT.sending || !CLOUD.user || !CLOUD.client || !navigator.onLine) return;
  const batch = attLoad().slice(0, 100); if (!batch.length) return;
  ATT.sending = true;
  try {
    const { error } = await CLOUD.client.from('attempts').insert(batch.map((a) => ({ item_id: a.i, chosen: a.c, correct: a.ok, ms: a.ms, context: a.x, answered_at: a.at })));
    if (error) { console.warn('Attempt upload failed:', error.message); return; }
    const sent = new Set(batch.map((a) => `${a.at}|${a.i}`));
    const left = attLoad().filter((a) => !sent.has(`${a.at}|${a.i}`));
    attSave(left);
    if (left.length) attQueue();
  } finally { ATT.sending = false; }
}
window.addEventListener('online', () => attQueue());

/* ---------- Item analysis (pure; tested by tools/items-test.mjs) ----------
   Uses each learner's FIRST attempt at each question, outside spaced review,
   so practice on the same question doesn't inflate the numbers.
   p = share correct (difficulty: high = easy).
   d = discrimination: share correct in the top 27% of learners minus the
       bottom 27%, ranked by their overall share correct (needs 4+ learners).
   picks = how often each option (by its original index) was chosen. */
function itemStats(rows) {
  const first = new Map();
  rows.filter((r) => r.context !== 'review').slice().sort((a, b) => String(a.answered_at).localeCompare(String(b.answered_at)))
    .forEach((r) => { const k = `${r.user_id}|${r.item_id}`; if (!first.has(k)) first.set(k, r); });
  const fr = [...first.values()];
  const per = new Map();
  fr.forEach((r) => { const s = per.get(r.user_id) || { n: 0, ok: 0 }; s.n++; if (r.correct) s.ok++; per.set(r.user_id, s); });
  const score = new Map([...per].map(([u, s]) => [u, s.ok / s.n]));
  const items = new Map();
  fr.forEach((r) => {
    const it = items.get(r.item_id) || { id: r.item_id, n: 0, ok: 0, picks: {}, who: [] };
    it.n++; if (r.correct) it.ok++; it.picks[r.chosen] = (it.picks[r.chosen] || 0) + 1; it.who.push([score.get(r.user_id), r.correct]);
    items.set(r.item_id, it);
  });
  return [...items.values()].map((it) => {
    const ranked = it.who.slice().sort((a, b) => b[0] - a[0]);
    const g = Math.max(1, Math.round(ranked.length * 0.27));
    const share = (arr) => arr.filter((x) => x[1]).length / arr.length;
    return { id: it.id, n: it.n, p: it.ok / it.n, d: ranked.length >= 4 ? share(ranked.slice(0, g)) - share(ranked.slice(-g)) : null, picks: it.picks };
  });
}
/* What a trainer should look at first. */
function itemFlag(s, optionCount) {
  if (s.n < 5) return { level: 0, text: 'Too few answers yet' };
  if (s.d != null && s.d < 0) return { level: 3, text: 'Weaker learners do better: check the answer key' };
  if (s.p < 0.3) return { level: 2, text: 'Very hard, or the key or wording is wrong' };
  if (s.p > 0.95) return { level: 1, text: 'Almost everyone gets it right' };
  if (s.d != null && s.d < 0.2) return { level: 2, text: 'Doesn\'t separate strong from weak learners' };
  const unused = optionCount ? [...Array(optionCount).keys()].filter((i) => !s.picks[i]).length : 0;
  if (s.n >= 10 && unused) return { level: 1, text: `${unused} option${unused > 1 ? 's' : ''} nobody picks` };
  return { level: 0, text: 'Working' };
}
/* Before/after per track: a learner's "before" score uses their first answer
   to each before-test question; "after" uses their latest answer to each. */
function prePostSummary(rows) {
  const out = {};
  ['pre', 'post'].forEach((kind) => {
    const pick = new Map(); // track|user|item -> row
    rows.filter((r) => r.context === kind && /^pp\./.test(r.item_id)).forEach((r) => {
      const k = `${r.item_id.slice(3).split('#')[0]}|${r.user_id}|${r.item_id}`; const cur = pick.get(k);
      const later = cur && String(r.answered_at) > String(cur.answered_at);
      if (!cur || (kind === 'pre' ? !later && String(r.answered_at) < String(cur.answered_at) : later)) pick.set(k, r);
    });
    const per = new Map(); // track|user -> {n, ok}
    pick.forEach((r, k) => { const tu = k.split('|').slice(0, 2).join('|'); const s = per.get(tu) || { n: 0, ok: 0 }; s.n++; if (r.correct) s.ok++; per.set(tu, s); });
    per.forEach((s, tu) => { const tid = tu.split('|')[0]; const t = (out[tid] = out[tid] || { pre: [], post: [] }); t[kind].push(s.ok / s.n); });
  });
  return out;
}

/* ---------- Trainer view: #/trainer/items/<group id> ---------- */
function viewItemAnalysis(gid) {
  const html = `<div class="page ia">
    ${pageHead({ eyebrow: `${icon('bar', 'icon--sm')} Trainer groups`, title: 'Question analysis', text: 'How each question performs for this group: how many learners get it right, whether it separates strong from weak learners, and which wrong answers they pick. Based on each learner\'s first try, outside spaced review.' })}
    <div id="iaRoot"><div class="skeleton" style="height:220px;border-radius:12px"></div></div>
  </div>`;
  return { html, title: 'Question analysis', nav: 'trainer', crumbs: [['Trainer groups', '#/trainer'], ['Question analysis']], after: (v) => itemAnalysisLoad($('#iaRoot', v), gid) };
}
async function itemAnalysisLoad(root, gid) {
  try {
    await cloudInit();
    if (!CLOUD.user) { root.innerHTML = stateBlock({ ic: 'lock', title: 'Sign in to see your group', text: 'Question analysis is for trainers who run a group.' }); return; }
    const db = CLOUD.client; const me = CLOUD.user.id;
    const g = await db.from('groups').select('id,name,owner').eq('id', gid).maybeSingle();
    if (g.error) throw g.error;
    if (!g.data || g.data.owner !== me) { root.innerHTML = stateBlock({ ic: 'lock', title: 'Not your group', text: 'Only the trainer who runs a group can see its question analysis.' }); return; }
    const mem = await db.from('group_members').select('user_id').eq('group_id', gid);
    if (mem.error) throw mem.error;
    const ids = (mem.data || []).map((m) => m.user_id).filter((u) => u !== me);
    let rows = [];
    for (let from = 0; ids.length; from += 1000) {
      const r = await db.from('attempts').select('user_id,item_id,chosen,correct,context,answered_at').in('user_id', ids).order('answered_at').range(from, from + 999);
      if (r.error) throw r.error; rows = rows.concat(r.data || []); if (!r.data || r.data.length < 1000) break;
    }
    if (!CONTENT_LOADED.has('beginner')) await loadContent().catch(() => {});
    root.innerHTML = itemAnalysisHTML(g.data, ids.length, rows);
  } catch (e) {
    console.warn('Question analysis failed:', e && e.message);
    root.innerHTML = stateBlock({ ic: 'alert', title: 'Question analysis isn\'t available right now', text: navigator.onLine ? 'Please try again in a moment.' : 'Connect to the internet to see it.', error: true });
  }
}
function itemAnalysisHTML(g, learners, rows) {
  const stats = itemStats(rows);
  const pp = prePostSummary(rows);
  const mean = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : null);
  const ppRows = Object.entries(pp).map(([tid, v]) => { const t = TRACK_BY_ID[tid]; const a = mean(v.pre), b = mean(v.post);
    return `<tr><td>${esc(t ? t.level : tid)}</td><td class="num">${v.pre.length ? `${pct(a)}% <span class="muted small">(${v.pre.length})</span>` : '—'}</td><td class="num">${v.post.length ? `${pct(b)}% <span class="muted small">(${v.post.length})</span>` : '—'}</td><td class="num">${a != null && b != null ? `${b >= a ? '+' : ''}${pct(b - a)} pts` : '—'}</td></tr>`; }).join('');
  const rowsHTML = stats.map((s) => {
    const b = qById(s.id); const q = b && b.q; const opts = q ? (q.t === 'tf' ? ['True', 'False'] : q.o) : [];
    const correct = q ? (q.t === 'tf' ? (q.a ? 0 : 1) : q.a) : -1;
    const f = itemFlag(s, opts.length);
    const picks = opts.map((o, i) => { const c = s.picks[i] || 0; return `<li class="${i === correct ? 'is-key' : ''}"><span class="ia-pick__bar" style="--p:${(c / s.n).toFixed(3)}"></span><span class="ia-pick__t">${i === correct ? icon('check', 'icon--sm') : ''}${esc(String(o).slice(0, 70))}</span><span class="num">${c}</span></li>`; }).join('');
    return { f, html: `<tr class="ia-row ia-row--${f.level}"><td><div class="ia-q">${q ? inline(q.q) : esc(s.id)}</div><div class="small muted">${b ? `<a href="${b.href}">${esc(b.label)}</a>` : esc(s.id)}</div></td>
      <td class="num">${s.n}</td><td class="num">${pct(s.p)}%</td><td class="num">${s.d == null ? '—' : s.d.toFixed(2)}</td>
      <td><ul class="ia-picks">${picks}</ul></td><td><span class="ia-flag ia-flag--${f.level}">${esc(f.text)}</span></td></tr>` };
  }).sort((a, b) => b.f.level - a.f.level).map((x) => x.html).join('');
  return `<p class="small muted">${esc(g.name)} · ${learners} learner${learners === 1 ? '' : 's'} · ${rows.length} answers recorded</p>
    ${ppRows ? `<section class="card card--pad mt-4"><h2 class="ia-h">Before and after</h2><p class="small muted">Average score on each track's 8-question check: first try before, latest try after (number of learners in brackets).</p>
      <div class="table-wrap"><table class="table"><thead><tr><th scope="col">Track</th><th scope="col">Before</th><th scope="col">After</th><th scope="col">Change</th></tr></thead><tbody>${ppRows}</tbody></table></div></section>` : ''}
    <section class="mt-6"><h2 class="ia-h">Questions</h2>
      ${stats.length ? `<p class="small muted">Correct % is difficulty (high = easy; most good questions sit between 30% and 90%). Separation is the share correct among the strongest 27% of learners minus the weakest 27%: 0.3 or more is good, below 0.2 is weak, below 0 means check the answer key.</p>
        <div class="table-wrap"><table class="table ia-table"><thead><tr><th scope="col">Question</th><th scope="col">Answers</th><th scope="col">Correct</th><th scope="col">Separation</th><th scope="col">Options picked</th><th scope="col">Look at</th></tr></thead><tbody>${rowsHTML}</tbody></table></div>`
        : `<p class="muted">No answers yet. Questions appear here once learners in this group answer them while signed in.</p>`}
    </section>`;
}
