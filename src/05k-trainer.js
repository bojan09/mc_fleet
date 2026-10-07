
/* ===========================================================================
   TRAINER GROUPS + VERIFIABLE CERTIFICATES (Supabase)
   - #/trainer: create a group (join code), see members' progress; or join a
     group with a code. Row-level security lets an owner read only their own
     members' progress; joining goes through join_group(code).
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

function viewTrainer() {
  const html = `<div class="page tr">
    ${pageHead({ eyebrow: `${icon('users', 'icon--sm')} Academy`, title: 'Trainer groups', text: 'Training a team? Create a group and share its join code. You\'ll see each member\'s progress, quiz average and certificates. Joining a group? Enter the code your trainer gave you.' })}
    <div id="trRoot">${CLOUD.user ? '<div class="skeleton" style="height:180px;border-radius:12px"></div>' : stateBlock({ ic: 'users', title: 'Sign in to use groups', text: 'Groups need an account so progress can be shared with your trainer. Signing in also keeps your progress in sync across devices.', action: '<button type="button" class="btn btn--primary" data-cloud="in">Sign in with Google</button>' })}</div>
  </div>`;
  return { html, title: 'Trainer groups', nav: 'trainer', crumbs: [['Trainer groups']], after: (v) => { if (CLOUD.user) trainerLoad($('#trRoot', v)); } };
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
    root.innerHTML = `
      <section class="tr-sec"><div class="section-head"><div><span class="eyebrow">Your groups</span><h2>Groups you run</h2></div></div>
        <form class="tr-create card card--pad" novalidate><label class="field grow"><span>New group name</span><input class="input" name="name" maxlength="80" placeholder="e.g. Night shift coordinators" required></label><button type="submit" class="btn btn--primary">${icon('plus')} Create group</button></form>
        ${groups.length ? groups.map((g) => trainerGroupHTML(g, members.filter((m) => m.group_id === g.id), prog, me)).join('') : '<p class="muted small mt-3">You don\'t run any groups yet.</p>'}
      </section>
      <section class="tr-sec"><div class="section-head"><div><span class="eyebrow">As a learner</span><h2>Join a group</h2></div></div>
        <form class="tr-join card card--pad" novalidate>
          <label class="field grow"><span>Join code from your trainer</span><input class="input mono" name="code" maxlength="8" placeholder="e.g. K7MPQ2XA" autocomplete="off" required></label>
          <button type="submit" class="btn btn--primary">${icon('users')} Join</button>
          <p class="small muted tr-consent">${icon('info', 'icon--sm')} When you join, the group's trainer can see your name, your academy progress, quiz scores and certificates. You can leave at any time.</p>
        </form>
        ${memberships.length ? `<ul class="tr-memberships">${memberships.map((m) => `<li>${icon('users', 'icon--sm')}<span class="grow"><strong>${esc((m.groups || {}).name || 'Group')}</strong><small class="muted"> · joined ${new Date(m.joined_at).toLocaleDateString()}</small></span><button type="button" class="btn btn--sm btn--ghost" data-leave="${m.group_id}">Leave</button></li>`).join('')}</ul>` : ''}
      </section>`;
    trainerWire(root);
  } catch (e) {
    console.warn('Trainer groups failed:', e && e.message);
    root.innerHTML = stateBlock({ ic: 'alert', title: 'Groups aren\'t available right now', text: navigator.onLine ? 'Please try again in a moment.' : 'Connect to the internet to use groups.', error: true, action: '<button type="button" class="btn" onclick="location.reload()">Try again</button>' });
  }
}

function trainerGroupHTML(g, members, prog, me) {
  const rows = members.filter((m) => m.user_id !== me).map((m) => {
    const p = prog.get(m.user_id); const s = progressSummary(p && p.state);
    return `<tr><td><strong>${esc(m.display_name || 'Learner')}</strong><div class="small muted">joined ${new Date(m.joined_at).toLocaleDateString()}</div></td>
      <td><div class="tr-bar">${progressBar(s.total ? s.lessons / s.total : 0, { cls: 'progress--sm', label: 'Lessons completed' })}<span class="num small">${s.lessons}/${s.total}</span></div></td>
      <td>${s.tracks.map((x) => `<span class="tr-track ${x.passed ? 'is-passed' : ''}" title="${esc(x.t.level)}: ${x.done}/${x.total} lessons${x.passed ? ` · final ${pct(x.score)}%` : ''}" style="--c:${x.t.color}">${x.passed ? icon('award', 'icon--sm') : ''}${esc(x.t.level.slice(0, 3))} ${pct(x.total ? x.done / x.total : 0)}%</span>`).join('')}</td>
      <td class="num">${s.quiz == null ? '—' : pct(s.quiz) + '%'}</td>
      <td class="num">${s.missed}</td>
      <td class="small">${s.last ? new Date(s.last).toLocaleDateString() : '—'}</td>
      <td><button type="button" class="btn btn--sm btn--ghost" data-remove="${g.id}|${m.user_id}" aria-label="Remove ${esc(m.display_name || 'learner')}">${icon('x')}</button></td></tr>`;
  });
  return `<article class="card tr-group">
    <header class="tr-group__head"><div><h3>${esc(g.name)}</h3><span class="small muted">${rows.length} member${rows.length === 1 ? '' : 's'}</span></div>
      <div class="tr-code"><span class="small muted">Join code</span><strong class="mono">${esc(g.join_code)}</strong><button type="button" class="btn-icon" data-copy-code="${esc(g.join_code)}" aria-label="Copy join code">${icon('copy', 'icon--sm')}</button></div></header>
    ${rows.length ? `<div class="table-wrap"><table class="table tr-table"><thead><tr><th scope="col">Learner</th><th scope="col">Lessons</th><th scope="col">Tracks</th><th scope="col">Quiz avg</th><th scope="col">To review</th><th scope="col">Last active</th><th scope="col"><span class="sr-only">Remove</span></th></tr></thead><tbody>${rows.join('')}</tbody></table></div>`
      : `<p class="small muted tr-empty">No members yet. Share the join code: learners open <strong>Trainer groups</strong>, sign in and enter it.</p>`}
    <footer class="tr-group__foot"><button type="button" class="btn btn--sm btn--ghost" data-delete-group="${g.id}">${icon('x-circle', 'icon--sm')} Delete group</button></footer>
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
  $$('[data-copy-code]', root).forEach((b) => b.addEventListener('click', () => {
    try { navigator.clipboard.writeText(b.dataset.copyCode); toast({ kind: 'success', title: 'Join code copied', timeout: 2000 }); } catch (e) {}
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
    <p class="scope-note">${icon('info', 'icon--sm')}<span>MC Academy certificates are self-paced training records. Assessments are completed online in the academy. A certificate is not a CDL, government license or third-party industry certification.</span></p>
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
          out.innerHTML = x ? `<div class="vf-result is-ok anim-scale-in">${icon('check-circle')}<div><span class="eyebrow">Valid certificate · ${esc(c)}</span><h2>${esc(x.name)}</h2>
              <p>passed the <strong>${esc(t ? t.level : x.track)}</strong> final${t ? ` — ${esc(t.title)}` : ''} with <strong>${pct(+x.score)}%</strong>.</p><p class="small muted">Issued ${new Date(x.issued_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p></div></div>`
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
