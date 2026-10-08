
/* ===========================================================================
   TRAINER GROUPS + VERIFIABLE CERTIFICATES (Supabase)
   - #/trainer: create a group (join code), see members' progress; or join a
     group with a code. Row-level security lets an owner read only their own
     members' progress; joining goes through join_group(code).
   - Assignments: an owner assigns modules (optional due date) to a group;
     members see them on the dashboard. The owner can download the group's
     progress as CSV.
   - Certificates: issue_certificate(track) records a certificate when the
     account's synced progress shows the final as passed; #/verify/<code>
     lets anyone confirm it through verify_certificate(code).
   =========================================================================== */
const VERIFY_BASE = 'https://mcfleet-three.vercel.app/#/verify/';

/* Summarize someone's synced progress state for the trainer table. */
function progressSummary(st) {
  st = st || {};
  const done = st.completed || {}; const finals = st.finals || {};
  const tracks = TRACKS.map((t) => {
    const keys = t.modules.flatMap((m) => m.lessons.map((l) => `${t.id}.${m.id}.${l.id}`));
    return { t, done: keys.filter((k) => done[k]).length, total: keys.length, passed: !!(finals[t.id] || {}).passed, score: (finals[t.id] || {}).score };
  });
  const qs = Object.values(st.quizzes || {}).map((q) => q.best).filter((x) => typeof x === 'number');
  const days = (st.days || []).slice().sort();
  return { tracks, lessons: tracks.reduce((a, x) => a + x.done, 0), total: tracks.reduce((a, x) => a + x.total, 0), quiz: qs.length ? qs.reduce((a, b) => a + b, 0) / qs.length : null, last: days[days.length - 1] || null, missed: Object.keys(st.missed || {}).length };
}

/* ---------- Assignments ---------- */
function moduleByKey(k) {
  const [tid, mid] = String(k).split('.'); const t = TRACK_BY_ID[tid];
  const m = t && t.modules.find((x) => x.id === mid);
  return m ? { t, m } : null;
}
const moduleLabel = (x) => `${x.t.level} · M${x.m.id.slice(1)} ${x.m.title}`;
function moduleDoneIn(st, x) {
  const c = (st || {}).completed || {};
  return x.m.lessons.every((l) => c[`${x.t.id}.${x.m.id}.${l.id}`]);
}
const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
const dueDate = (d) => new Date(`${d}T00:00`).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' });
function dueHTML(a, done) {
  if (!a.due) return '<span class="small muted">no due date</span>';
  const late = !done && a.due < todayISO();
  return `<span class="small ${late ? 'tr-late' : 'muted'}">${late ? 'overdue · ' : 'due '}${dueDate(a.due)}</span>`;
}
/* Assigned modules first unfinished, then by due date (no date last). */
const byDue = (a, b) => (a.done - b.done) || (a.due || '9999').localeCompare(b.due || '9999');

/* Dashboard card: modules a learner's trainers assigned. Quiet when signed
   out, offline, or nothing is assigned. */
async function dashAssigned(el) {
  if (!cloudHasSession()) return;
  try {
    await cloudInit(); if (!CLOUD.user) return;
    const { data, error } = await CLOUD.client.from('assignments').select('module,due,groups(name,owner)');
    if (error) throw error;
    const rows = (data || []).filter((a) => a.groups && a.groups.owner !== CLOUD.user.id)
      .map((a) => { const x = moduleByKey(a.module); return x && Object.assign({}, a, { x, done: moduleDoneIn(state, x) }); }).filter(Boolean).sort(byDue);
    if (!rows.length || !el.isConnected) return;
    const left = rows.filter((a) => !a.done).length;
    el.innerHTML = `<section class="card dash-assigned" aria-labelledby="asgTitle">
      <div class="card__head"><h2 id="asgTitle">Assigned to you</h2><span class="small muted">${left ? `${left} to do` : 'All done'}</span></div>
      <ul class="dash-assigned__list">${rows.map((a) => {
        const next = a.x.m.lessons.find((l) => !isDone(`${a.x.t.id}.${a.x.m.id}.${l.id}`)) || a.x.m.lessons[0];
        return `<li class="${a.done ? 'is-done' : ''}">${icon(a.done ? 'check-circle' : 'book', 'icon--sm')}<a class="grow" href="${lessonHref({ t: a.x.t, m: a.x.m, l: next })}"><strong>${esc(moduleLabel(a.x))}</strong><span class="small muted"> · ${esc(a.groups.name)}</span></a>${dueHTML(a, a.done)}</li>`;
      }).join('')}</ul></section>`;
  } catch (e) { /* the dashboard works without it */ }
}

/* The name the learner set in the academy (synced with their progress), so a
   rename shows up for the trainer; the name saved when they joined is the
   fallback for learners whose progress hasn't synced. */
function learnerName(m, prog) {
  const st = (prog.get(m.user_id) || {}).state;
  return String((st && st.name) || '').trim() || m.display_name || 'Learner';
}

/* ---------- Group weak spots ---------- */
const WEAK_QUIZ = 0.7; // module quiz average below this counts as a weak spot
/* Modules where the group struggles: learners with questions still on their
   review list in the module, and the group's quiz average there. */
function groupWeakSpots(learners, prog) {
  const by = new Map();
  const get = (k) => { if (!by.has(k)) { const x = moduleByKey(k); if (!x) return null; by.set(k, { k, x, who: new Set(), n: 0, scores: [] }); } return by.get(k); };
  learners.forEach((m) => {
    const st = (prog.get(m.user_id) || {}).state || {};
    Object.keys(st.missed || {}).forEach((id) => {
      const mm = id.match(/^(\w+)\.(m\d+)\.\w+#/); const g = mm && get(`${mm[1]}.${mm[2]}`);
      if (g) { g.who.add(m.user_id); g.n++; }
    });
    Object.entries(st.quizzes || {}).forEach(([k, q]) => { if (q && typeof q.best === 'number' && moduleByKey(k)) get(k).scores.push(q.best); });
  });
  return [...by.values()]
    .map((g) => Object.assign(g, { avg: g.scores.length ? g.scores.reduce((a, b) => a + b, 0) / g.scores.length : null }))
    .filter((g) => g.who.size || (g.avg != null && g.avg < WEAK_QUIZ))
    .sort((a, b) => b.who.size - a.who.size || b.n - a.n || (a.avg ?? 1) - (b.avg ?? 1))
    .slice(0, 5);
}
function groupWeakHTML(learners, prog, assigned) {
  const spots = groupWeakSpots(learners, prog);
  if (!spots.length) return '';
  return `<div class="tr-weak">
    <h4>Where the group struggles</h4>
    <ul class="tr-assigned">${spots.map((g) => `<li>${icon('target', 'icon--sm')}<span class="grow"><strong>${esc(moduleLabel(g.x))}</strong><span class="small muted tr-weak__why">${[
      g.who.size ? `${g.who.size} of ${learners.length} learner${learners.length === 1 ? '' : 's'} with questions to review (${g.n})` : '',
      g.avg != null ? `quiz average ${pct(g.avg)}%` : ''
    ].filter(Boolean).join(' · ')}</span></span>
      <a class="btn btn--sm btn--ghost" href="#/cheatsheet/${g.x.t.id}/${g.x.m.id}">${icon('file', 'icon--sm')} Cheat sheet</a>
      ${assigned.includes(g.k) ? '<span class="small muted">Assigned</span>' : `<button type="button" class="btn btn--sm btn--ghost" data-assign-pick="${g.k}">${icon('plus', 'icon--sm')} Assign</button>`}</li>`).join('')}</ul>
    <p class="small muted">From questions still on learners' review lists and their module quiz scores.</p>
  </div>`;
}

/* ---------- CSV export ---------- */
function csvCell(v) {
  let s = v == null ? '' : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`; // keep spreadsheets from running it as a formula
  return `"${s.replace(/"/g, '""')}"`;
}
function groupCSV(g, members, prog, assigns) {
  const mods = assigns.map((a) => ({ a, x: moduleByKey(a.module) })).filter((y) => y.x);
  const head = ['Learner', 'Joined', 'Last active', 'Lessons completed', 'Lessons total', ...TRACKS.flatMap((t) => [`${t.level} lessons %`, `${t.level} final`]), 'Quiz average %', 'Questions to review', 'Assigned modules done', ...mods.map((y) => `Assigned: ${moduleLabel(y.x)}${y.a.due ? ` (due ${y.a.due})` : ''}`)];
  const rows = members.map((m) => {
    const st = (prog.get(m.user_id) || {}).state; const s = progressSummary(st);
    return [learnerName(m, prog), m.joined_at.slice(0, 10), s.last || '', s.lessons, s.total,
      ...s.tracks.flatMap((x) => [pct(x.total ? x.done / x.total : 0), x.passed ? `passed ${pct(x.score)}%` : '']),
      s.quiz == null ? '' : pct(s.quiz), s.missed, `${mods.filter((y) => moduleDoneIn(st, y.x)).length}/${mods.length}`,
      ...mods.map((y) => (moduleDoneIn(st, y.x) ? 'done' : 'not done'))];
  });
  return '\ufeff' + [head, ...rows].map((r) => r.map(csvCell).join(',')).join('\r\n') + '\r\n';
}
function downloadText(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a'); a.href = url; a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function viewTrainer() {
  const signIn = stateBlock({ ic: 'users', title: 'Sign in to use groups', text: 'Groups need an account so progress can be shared with your trainer. Signing in also keeps your progress in sync across devices.', action: '<button type="button" class="btn btn--primary" data-cloud="in">Sign in</button>' });
  // A saved session may still be restoring when the page opens: wait for it.
  const pending = !!CLOUD.user || cloudHasSession();
  const html = `<div class="page tr">
    ${pageHead({ eyebrow: `${icon('users', 'icon--sm')} Academy`, title: 'Trainer groups', text: 'Training a team? Create a group and share its join code. You\'ll see each member\'s progress, quiz average and certificates. Joining a group? Enter the code your trainer gave you.' })}
    <div id="trRoot">${pending ? '<div class="skeleton" style="height:180px;border-radius:12px"></div>' : signIn}</div>
  </div>`;
  return {
    html, title: 'Trainer groups', nav: 'trainer', crumbs: [['Trainer groups']],
    after: (v) => {
      if (!pending) return;
      const root = $('#trRoot', v);
      cloudInit().catch(() => {}).then(() => { if (!root.isConnected) return; if (CLOUD.user) trainerLoad(root); else root.innerHTML = signIn; });
    }
  };
}

async function trainerLoad(root) {
  try {
    await cloudInit();
    const db = CLOUD.client; const me = CLOUD.user.id;
    const [owned, joined] = await Promise.all([
      db.from('groups').select('id,name,join_code,created_at').eq('owner', me).order('created_at'),
      db.from('group_members').select('group_id, joined_at, groups(name)').eq('user_id', me)
    ]);
    if (owned.error || joined.error) throw owned.error || joined.error;
    const groups = owned.data || [];
    const memberships = (joined.data || []).filter((m) => !groups.some((g) => g.id === m.group_id));
    let members = []; let progress = [];
    if (groups.length) {
      const r = await db.from('group_members').select('group_id,user_id,display_name,joined_at').in('group_id', groups.map((g) => g.id)).order('joined_at');
      if (r.error) throw r.error; members = r.data || [];
      const ids = [...new Set(members.map((m) => m.user_id))];
      if (ids.length) { const p = await db.from('progress').select('user_id,state,updated_at').in('user_id', ids); if (p.error) throw p.error; progress = p.data || []; }
    }
    const prog = new Map(progress.map((p) => [p.user_id, p]));
    const gids = [...groups.map((g) => g.id), ...memberships.map((m) => m.group_id)];
    let assigns = [];
    if (gids.length) { const a = await db.from('assignments').select('id,group_id,module,due').in('group_id', gids); if (a.error) throw a.error; assigns = a.data || []; }
    const forGroup = (id) => assigns.filter((a) => a.group_id === id);
    root._tr = { groups, members, prog, forGroup };
    root.innerHTML = `
      <section class="tr-sec"><div class="section-head"><div><span class="eyebrow">Your groups</span><h2>Groups you run</h2></div></div>
        <form class="tr-create card card--pad" novalidate><label class="field grow"><span>New group name</span><input class="input" name="name" maxlength="80" placeholder="e.g. Night shift coordinators" required></label><button type="submit" class="btn btn--primary">${icon('plus')} Create group</button></form>
        ${groups.length ? groups.map((g) => trainerGroupHTML(g, members.filter((m) => m.group_id === g.id), prog, me, forGroup(g.id))).join('') : '<p class="muted small mt-3">You don\'t run any groups yet.</p>'}
      </section>
      <section class="tr-sec"><div class="section-head"><div><span class="eyebrow">As a learner</span><h2>Join a group</h2></div></div>
        <form class="tr-join card card--pad" novalidate>
          <label class="field grow"><span>Join code from your trainer</span><input class="input mono" name="code" maxlength="8" placeholder="e.g. K7MPQ2XA" autocomplete="off" required></label>
          <button type="submit" class="btn btn--primary">${icon('users')} Join</button>
          <p class="small muted tr-consent">${icon('info', 'icon--sm')} When you join, the group's trainer can see your name, your academy progress, quiz scores and certificates. You can leave at any time.</p>
        </form>
        ${memberships.length ? `<ul class="tr-memberships">${memberships.map((m) => {
          const mine = forGroup(m.group_id).map((a) => { const x = moduleByKey(a.module); return x && Object.assign({}, a, { x, done: moduleDoneIn(state, x) }); }).filter(Boolean).sort(byDue);
          return `<li><div class="tr-memberships__row">${icon('users', 'icon--sm')}<span class="grow"><strong>${esc((m.groups || {}).name || 'Group')}</strong><small class="muted"> · joined ${new Date(m.joined_at).toLocaleDateString()}</small></span><button type="button" class="btn btn--sm btn--ghost" data-leave="${m.group_id}">Leave</button></div>
            ${mine.length ? `<ul class="tr-assigned">${mine.map((a) => `<li class="${a.done ? 'is-done' : ''}">${icon(a.done ? 'check-circle' : 'book', 'icon--sm')}<span class="grow">${esc(moduleLabel(a.x))}</span>${dueHTML(a, a.done)}</li>`).join('')}</ul>` : ''}</li>`;
        }).join('')}</ul>` : ''}
      </section>`;
    trainerWire(root);
  } catch (e) {
    console.warn('Trainer groups failed:', e && e.message);
    root.innerHTML = stateBlock({ ic: 'alert', title: 'Groups aren\'t available right now', text: navigator.onLine ? 'Please try again in a moment.' : 'Connect to the internet to use groups.', error: true, action: '<button type="button" class="btn" data-reload>Try again</button>' });
  }
}

function trainerGroupHTML(g, members, prog, me, assigns) {
  const learners = members.filter((m) => m.user_id !== me);
  const mods = assigns.map((a) => Object.assign({}, a, { x: moduleByKey(a.module) })).filter((a) => a.x).sort((a, b) => (a.due || '9999').localeCompare(b.due || '9999'));
  const doneBy = (a) => learners.filter((m) => moduleDoneIn((prog.get(m.user_id) || {}).state, a.x)).length;
  const rows = learners.map((m) => {
    const p = prog.get(m.user_id); const s = progressSummary(p && p.state);
    const asg = mods.filter((a) => moduleDoneIn(p && p.state, a.x)).length;
    const late = mods.filter((a) => a.due && a.due < todayISO() && !moduleDoneIn(p && p.state, a.x)).length;
    return `<tr><td><strong>${esc(learnerName(m, prog))}</strong><div class="small muted">joined ${new Date(m.joined_at).toLocaleDateString()}</div></td>
      <td><div class="tr-bar">${progressBar(s.total ? s.lessons / s.total : 0, { cls: 'progress--sm', label: 'Lessons completed' })}<span class="num small">${s.lessons}/${s.total}</span></div></td>
      <td>${s.tracks.map((x) => `<span class="tr-track ${x.passed ? 'is-passed' : ''}" title="${esc(x.t.level)}: ${x.done}/${x.total} lessons${x.passed ? ` · final ${pct(x.score)}%` : ''}" style="--c:${x.t.color}">${x.passed ? icon('award', 'icon--sm') : ''}${esc(x.t.level.slice(0, 3))} ${pct(x.total ? x.done / x.total : 0)}%</span>`).join('')}</td>
      ${mods.length ? `<td class="num small">${asg}/${mods.length}${late ? `<div class="tr-late">${late} overdue</div>` : ''}</td>` : ''}
      <td class="num">${s.quiz == null ? '—' : pct(s.quiz) + '%'}</td>
      <td class="num">${s.missed}</td>
      <td class="small">${s.last ? new Date(s.last).toLocaleDateString() : '—'}</td>
      <td><button type="button" class="btn btn--sm btn--ghost" data-remove="${g.id}|${m.user_id}" aria-label="Remove ${esc(learnerName(m, prog))}">${icon('x')}</button></td></tr>`;
  });
  return `<article class="card tr-group">
    <header class="tr-group__head"><div><h3>${esc(g.name)}</h3><span class="small muted">${rows.length} member${rows.length === 1 ? '' : 's'}</span></div>
      <div class="tr-code"><span class="small muted">Join code</span><strong class="mono">${esc(g.join_code)}</strong><button type="button" class="btn-icon" data-copy-code="${esc(g.join_code)}" aria-label="Copy join code">${icon('copy', 'icon--sm')}</button></div></header>
    ${groupWeakHTML(learners, prog, mods.map((a) => a.module))}
    <div class="tr-assign">
      <h4>Assigned modules</h4>
      ${mods.length ? `<ul class="tr-assigned">${mods.map((a) => `<li>${icon('book', 'icon--sm')}<span class="grow">${esc(moduleLabel(a.x))}</span>${dueHTML(a, false)}${learners.length ? `<span class="num small muted">${doneBy(a)}/${learners.length} done</span>` : ''}<button type="button" class="btn-icon" data-unassign="${a.id}" aria-label="Remove assignment ${esc(moduleLabel(a.x))}">${icon('x', 'icon--sm')}</button></li>`).join('')}</ul>` : '<p class="small muted">Nothing assigned yet. Members see assigned modules on their dashboard.</p>'}
      <form class="tr-assign__form" data-group="${g.id}" novalidate>
        <label class="field grow"><span>Module</span><select class="select" name="module" required><option value="">Choose a module…</option>${TRACKS.map((t) => `<optgroup label="${esc(t.level)}">${t.modules.map((m) => { const k = `${t.id}.${m.id}`; return mods.some((a) => a.module === k) ? '' : `<option value="${k}">M${m.id.slice(1)} ${esc(m.title)}</option>`; }).join('')}</optgroup>`).join('')}</select></label>
        <label class="field"><span>Due date (optional)</span><input class="input" type="date" name="due" min="${todayISO()}"></label>
        <button type="submit" class="btn btn--primary">${icon('plus')} Assign</button>
      </form>
    </div>
    ${rows.length ? `<div class="table-wrap"><table class="table tr-table"><thead><tr><th scope="col">Learner</th><th scope="col">Lessons</th><th scope="col">Tracks</th>${mods.length ? '<th scope="col">Assigned</th>' : ''}<th scope="col">Quiz avg</th><th scope="col">To review</th><th scope="col">Last active</th><th scope="col"><span class="sr-only">Remove</span></th></tr></thead><tbody>${rows.join('')}</tbody></table></div>`
      : `<p class="small muted tr-empty">No members yet. Share the join code: learners open <strong>Trainer groups</strong>, sign in and enter it.</p>`}
    <footer class="tr-group__foot">${rows.length ? `<button type="button" class="btn btn--sm btn--ghost" data-csv="${g.id}">${icon('download', 'icon--sm')} Download CSV</button>` : ''}<button type="button" class="btn btn--sm btn--ghost" data-delete-group="${g.id}">${icon('x-circle', 'icon--sm')} Delete group</button></footer>
  </article>`;
}

function trainerWire(root) {
  const db = CLOUD.client;
  const reload = () => trainerLoad(root);
  const fail = (e, title) => { console.warn(e && e.message); toast({ kind: 'warning', title, text: (e && /code/i.test(e.message)) ? e.message : 'Please try again.' }); };
  $('.tr-create', root).addEventListener('submit', async (e) => {
    e.preventDefault(); const name = e.target.name.value.trim(); if (!name) return;
    const { error } = await db.from('groups').insert({ name });
    if (error) return fail(error, 'Couldn\'t create the group');
    toast({ kind: 'success', title: 'Group created', text: 'Share the join code with your learners.' }); reload();
  });
  $('.tr-join', root).addEventListener('submit', async (e) => {
    e.preventDefault(); const code = e.target.code.value.trim(); if (!code) return;
    await cloudPush(); // make sure the trainer sees current progress
    const { data, error } = await db.rpc('join_group', { p_code: code });
    if (error) return toast({ kind: 'warning', title: 'Couldn\'t join', text: /No group/.test(error.message) ? 'No group has that code. Check it with your trainer.' : 'Please try again.' });
    toast({ kind: 'success', title: 'Joined', text: `You're in "${(data && data[0] && data[0].group_name) || 'the group'}".` }); reload();
  });
  $$('[data-leave]', root).forEach((b) => b.addEventListener('click', async () => {
    const { error } = await db.from('group_members').delete().eq('group_id', b.dataset.leave).eq('user_id', CLOUD.user.id);
    if (error) return fail(error, 'Couldn\'t leave the group');
    toast({ title: 'Left the group' }); reload();
  }));
  $$('[data-remove]', root).forEach((b) => b.addEventListener('click', async () => {
    const [gid, uid] = b.dataset.remove.split('|');
    const { error } = await db.from('group_members').delete().eq('group_id', gid).eq('user_id', uid);
    if (error) return fail(error, 'Couldn\'t remove the learner');
    toast({ title: 'Learner removed' }); reload();
  }));
  $$('[data-delete-group]', root).forEach((b) => b.addEventListener('click', () => openModal({
    title: 'Delete this group?', body: '<p>Members are removed from the group and the join code stops working. Their own progress is not affected.</p>',
    foot: '<button class="btn btn--ghost" data-close>Cancel</button><button class="btn btn--danger" id="doDelGroup">Delete group</button>',
    onOpen: (m, close) => $('#doDelGroup', m).addEventListener('click', async () => {
      const { error } = await db.from('groups').delete().eq('id', b.dataset.deleteGroup); close();
      if (error) return fail(error, 'Couldn\'t delete the group');
      toast({ title: 'Group deleted' }); reload();
    })
  })));
  $$('.tr-assign__form', root).forEach((f) => f.addEventListener('submit', async (e) => {
    e.preventDefault(); const module = f.module.value; if (!module) { f.module.focus(); return; }
    const { error } = await db.from('assignments').insert({ group_id: f.dataset.group, module, due: f.due.value || null });
    if (error) return fail(error, 'Couldn\'t assign the module');
    toast({ kind: 'success', title: 'Module assigned', text: 'Members see it on their dashboard.' }); reload();
  }));
  // "Assign" on a weak spot: pick the module in this group's form so a due date can be added.
  $$('[data-assign-pick]', root).forEach((b) => b.addEventListener('click', () => {
    const f = $('.tr-assign__form', b.closest('.tr-group')); f.module.value = b.dataset.assignPick;
    f.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'center' }); f.due.focus();
  }));
  $$('[data-unassign]', root).forEach((b) => b.addEventListener('click', async () => {
    const { error } = await db.from('assignments').delete().eq('id', b.dataset.unassign);
    if (error) return fail(error, 'Couldn\'t remove the assignment');
    toast({ title: 'Assignment removed' }); reload();
  }));
  $$('[data-csv]', root).forEach((b) => b.addEventListener('click', () => {
    const d = root._tr; const g = d.groups.find((x) => x.id === b.dataset.csv); if (!g) return;
    const members = d.members.filter((m) => m.group_id === g.id && m.user_id !== CLOUD.user.id);
    const name = `${g.name.replace(/[^\w -]+/g, '').trim().replace(/\s+/g, '-') || 'group'}-progress-${todayISO()}.csv`;
    downloadText(name, groupCSV(g, members, d.prog, d.forGroup(g.id)), 'text/csv;charset=utf-8');
  }));
  $$('[data-copy-code]', root).forEach((b) => b.addEventListener('click', () => {
    // writeText rejects (not throws) when the browser blocks the clipboard, so only confirm on success.
    const failed = () => toast({ kind: 'warning', title: 'Couldn’t copy', text: `Join code: ${b.dataset.copyCode}` });
    try { navigator.clipboard.writeText(b.dataset.copyCode).then(() => toast({ kind: 'success', title: 'Join code copied', timeout: 2000 }), failed); } catch (e) { failed(); }
  }));
}

/* ---------- Certificates ---------- */
async function issueCertificate(t) {
  await cloudInit();
  clearTimeout(CLOUD.timer); await cloudPush(); // the server checks the synced copy
  const { data, error } = await CLOUD.client.rpc('issue_certificate', { p_track: t.id });
  if (error) throw error;
  state.certIds = Object.assign({}, state.certIds, { [t.id]: data }); save();
  return data;
}

function viewVerify(code) {
  const html = `<div class="page page--narrow vf">
    ${pageHead({ eyebrow: `${icon('award', 'icon--sm')} Certificates`, title: 'Check a certificate', text: 'Enter the verification code printed on an MC Academy certificate to confirm it was issued.' })}
    <form class="vf-form card card--pad" novalidate><label class="field grow"><span>Verification code</span><input class="input mono" name="code" maxlength="10" value="${esc(code || '')}" placeholder="10 characters" autocomplete="off" required></label><button type="submit" class="btn btn--primary">${icon('search')} Check</button></form>
    <div id="vfOut" aria-live="polite"></div>
    <p class="scope-note">${icon('info', 'icon--sm')}<span>MC Academy certificates are self-paced training records. Assessments are taken online without supervision, and the score is recorded by the learner’s own device — a trainer who needs proof of skill should test the learner directly. A certificate is not a CDL, government license or third-party industry certification.</span></p>
  </div>`;
  return {
    html, title: 'Check a certificate', nav: '', crumbs: [['Check a certificate']],
    after: (v) => {
      const out = $('#vfOut', v); const form = $('form', v);
      const check = async (c) => {
        c = String(c || '').trim().toUpperCase(); if (!c) return;
        out.innerHTML = '<div class="skeleton" style="height:120px;border-radius:12px;margin-top:16px"></div>';
        try {
          const r = await fetch(`${CLOUD.url}/rest/v1/rpc/verify_certificate`, { method: 'POST', headers: { apikey: CLOUD.key, 'Content-Type': 'application/json' }, body: JSON.stringify({ p_code: c }) });
          if (!r.ok) throw new Error(r.status);
          const rows = await r.json(); const x = rows[0]; const t = x && TRACK_BY_ID[x.track];
          out.innerHTML = x ? `<div class="vf-result is-ok anim-scale-in">${icon('check-circle')}<div><span class="eyebrow">Certificate on record · ${esc(c)}</span><h2>${esc(x.name)}</h2>
              <p>passed the <strong>${esc(t ? t.level : x.track)}</strong> final${t ? ` — ${esc(t.title)}` : ''} with <strong>${pct(+x.score)}%</strong>.</p><p class="small muted">Issued ${new Date(x.issued_at).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p></div></div>`
            : `<div class="vf-result is-bad anim-scale-in">${icon('x-circle')}<div><h2>No certificate found</h2><p>Check the code for typos. Codes are 10 characters and don't use the letters I or O or the digits 0 and 1.</p></div></div>`;
        } catch (e) {
          out.innerHTML = stateBlock({ ic: 'alert', title: 'Couldn\'t check right now', text: navigator.onLine ? 'Please try again in a moment.' : 'Connect to the internet to check a certificate.', error: true });
        }
      };
      form.addEventListener('submit', (e) => { e.preventDefault(); const c = form.code.value.trim().toUpperCase(); if (location.hash !== `#/verify/${c}`) history.replaceState(null, '', `#/verify/${c}`); check(c); });
      if (code) check(code);
    }
  };
}
