
/* ===========================================================================
   CLOUD SYNC — optional Google sign-in (Supabase) that keeps progress in sync
   across devices. The academy stays fully usable signed out and offline:
   localStorage remains the working copy, and the cloud row is a mirror.
   Table: public.progress (user_id, state jsonb, updated_at) with row-level
   security so each user can only read and write their own row.
   =========================================================================== */
const CLOUD = {
  url: 'https://lqlewiyuhifvnodkpiul.supabase.co',
  key: 'sb_publishable_HOxayhHD0PfFFvm0nC45JQ_8JgHf56_', // publishable key — safe in the browser; RLS protects the data
  sdk: 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.2/dist/umd/supabase.js',
  // Subresource Integrity: the browser refuses the file if the CDN ever serves different bytes.
  // Changing the SDK version means updating this hash (openssl dgst -sha384 -binary file | openssl base64 -A).
  sdkIntegrity: 'sha384-Rj26LVGvoeRVR6+mwQmFfcR3QOBEwT+ZmuCWpuiqeTzJpCs0ER4ITAWGb4Hiy3Ok',
  client: null, user: null, status: 'off', timer: null, ready: false
};
const CLOUD_LOCAL_ONLY = ['theme', 'motion']; // per-device preferences that never sync

function cloudLoadSdk() {
  if (window.supabase) return Promise.resolve();
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = CLOUD.sdk; s.integrity = CLOUD.sdkIntegrity; s.async = true; s.crossOrigin = 'anonymous';
    s.onload = res; s.onerror = () => rej(new Error('Could not load the sign-in library'));
    document.head.appendChild(s);
  });
}

/* Merge two progress snapshots (a = this device, b = the cloud copy).
   - Scores keep the best result; things that are only ever added are unions.
   - Things that can also be removed or changed (bookmarks, completions,
     known flashcards, missed questions, the name) follow state.edits: when
     one copy has it and the other doesn't, the side that changed it last
     wins, so a removal on one device isn't undone by another.
   - A reset on one device wins over older copies that haven't seen it. */
function mergeProgress(a, b) {
  const fresh = () => JSON.parse(JSON.stringify(DEFAULT_STATE));
  const ra = a.resetAt || 0, rb = b.resetAt || 0;
  if (ra !== rb) return Object.assign(fresh(), JSON.parse(JSON.stringify(rb > ra ? b : a)), { theme: a.theme, motion: a.motion });
  const out = fresh();
  const union = (x, y) => Object.assign({}, y || {}, x || {});
  const ea = a.edits || {}, eb = b.edits || {};
  const keyed = (x, y, prefix, time = () => 0) => {
    x = x || {}; y = y || {};
    const r = union(x, y);
    new Set([...Object.keys(x), ...Object.keys(y)]).forEach((k) => {
      const tx = Math.max(ea[prefix + k] || 0, k in x ? time(x[k]) : 0);
      const ty = Math.max(eb[prefix + k] || 0, k in y ? time(y[k]) : 0);
      if (tx === ty) return; // no newer change on either side: keep the union
      const win = tx > ty ? x : y;
      if (k in win) r[k] = win[k]; else delete r[k];
    });
    return r;
  };
  const asSet = (arr) => Object.fromEntries((arr || []).map((k) => [k, 1]));
  const best = (x = {}, y = {}, field) => { const r = Object.assign({}, y, x); Object.keys(y).forEach((k) => { if (x[k] && y[k]) r[k] = (y[k][field] || 0) > (x[k][field] || 0) ? y[k] : x[k]; }); return r; };
  out.completed = keyed(a.completed, b.completed, 'done:', (v) => (typeof v === 'number' ? v : 0));
  out.checks = best(a.checks, b.checks, 'score');
  out.quizzes = best(a.quizzes, b.quizzes, 'best');
  out.finals = best(a.finals, b.finals, 'score');
  Object.keys(out.finals).forEach((k) => { if ((a.finals[k] || {}).passed || (b.finals[k] || {}).passed) out.finals[k] = Object.assign({}, out.finals[k], { passed: true }); });
  out.exercises = Object.assign({}, b.exercises, a.exercises); Object.keys(b.exercises || {}).forEach((k) => { out.exercises[k] = Math.max(a.exercises[k] || 0, b.exercises[k] || 0); });
  ['scen', 'trees', 'glossaryViewed', 'calcUsed', 'achievements', 'certIds'].forEach((k) => { out[k] = union(a[k], b[k]); });
  out.missed = keyed(a.missed, b.missed, 'mq:');
  out.flash = { known: keyed((a.flash || {}).known, (b.flash || {}).known, 'fk:') };
  const bm = keyed(asSet(a.bookmarks), asSet(b.bookmarks), 'bm:');
  out.bookmarks = [...new Set([...(a.bookmarks || []), ...(b.bookmarks || [])])].filter((k) => bm[k]);
  out.edits = union(a.edits, b.edits); Object.keys(eb).forEach((k) => { out.edits[k] = Math.max(ea[k] || 0, eb[k]); });
  out.days = [...new Set([...(a.days || []), ...(b.days || [])])].sort().slice(-120);
  out.last = a.last || b.last;
  out.name = (eb.name || 0) > (ea.name || 0) ? b.name || '' : (ea.name || 0) > (eb.name || 0) ? a.name || '' : a.name || b.name || '';
  // Profile details, picture and daily goal: the side that changed them last wins.
  ['profile', 'avatar', 'goal'].forEach((k) => {
    const pick = (eb[k] || 0) > (ea[k] || 0) ? b[k] : (ea[k] || 0) > (eb[k] || 0) ? a[k] : (a[k] !== undefined ? a[k] : b[k]);
    if (pick !== undefined) out[k] = JSON.parse(JSON.stringify(pick));
  });
  out.theme = a.theme;
  out.motion = a.motion;
  return out;
}
function cloudSnapshot() {
  const s = JSON.parse(JSON.stringify(state));
  CLOUD_LOCAL_ONLY.forEach((k) => delete s[k]);
  return s;
}
function cloudSetStatus(s) { CLOUD.status = s; const el = $('#cloudStatus'); if (el) el.innerHTML = cloudStatusHTML(); }
function cloudStatusHTML() {
  const map = { syncing: ['rotate', 'Syncing…'], synced: ['check-circle', 'Progress synced'], error: ['alert', 'Sync paused'], offline: ['info', 'Offline — will sync later'], off: ['info', 'Saved on this device'] };
  const [ic, t] = map[CLOUD.status] || map.off;
  return `${icon(ic, 'icon--sm')}<span>${t}</span>`;
}

async function cloudPush() {
  if (!CLOUD.user || !CLOUD.client) return;
  if (!navigator.onLine) { cloudSetStatus('offline'); return; }
  cloudSetStatus('syncing');
  const { error } = await CLOUD.client.from('progress').upsert({ user_id: CLOUD.user.id, state: cloudSnapshot(), updated_at: new Date().toISOString() });
  cloudSetStatus(error ? 'error' : 'synced');
  if (error) console.warn('Progress sync failed:', error.message);
}
/* Called by save(): batch rapid changes into one upload. */
function cloudQueue() {
  if (!CLOUD.user) return;
  clearTimeout(CLOUD.timer);
  CLOUD.timer = setTimeout(cloudPush, 1500);
}
async function cloudPull() {
  cloudSetStatus('syncing');
  const { data, error } = await CLOUD.client.from('progress').select('state').eq('user_id', CLOUD.user.id).maybeSingle();
  if (error) {
    cloudSetStatus('error');
    toast({ kind: 'warning', title: 'Cloud sync isn\'t available', text: 'You\'re signed in, but progress couldn\'t sync. It\'s still saved on this device.' });
    console.warn('Progress sync failed:', error.message);
    return;
  }
  if (data && data.state) {
    state = mergeProgress(state, Object.assign(JSON.parse(JSON.stringify(DEFAULT_STATE)), data.state));
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
    router();
  }
  await cloudPush();
}

/* Where emailed links (confirm sign-up, reset password, confirm new email) return to. */
const authReturn = () => location.origin + location.pathname;
function rememberReturn() { try { sessionStorage.setItem('mca.return', location.hash || '#/dashboard'); } catch (e) {} }

async function cloudSignIn() {
  try {
    await cloudInit();
    rememberReturn();
    const { error } = await CLOUD.client.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.origin + location.pathname } });
    if (error) throw error;
  } catch (e) {
    toast({ kind: 'warning', title: 'Sign-in unavailable', text: navigator.onLine ? 'Please try again in a moment.' : 'Connect to the internet to sign in.' });
  }
}
async function cloudSignOut() {
  if (!CLOUD.client) return;
  clearTimeout(CLOUD.timer);
  await cloudPush();
  await CLOUD.client.auth.signOut();
  toast({ kind: 'success', title: 'Signed out', text: 'Your progress stays on this device.' });
}

/* Deletes the signed-in user's account (and, by cascade, their synced
   progress) through the delete_my_account() database function. */
async function cloudDeleteAccount() {
  if (!CLOUD.user || !CLOUD.client) return false;
  clearTimeout(CLOUD.timer);
  await avatarRemoveFile().catch(() => {});
  const { error } = await CLOUD.client.rpc('delete_my_account');
  if (error) { console.warn('Account deletion failed:', error.message); return false; }
  await CLOUD.client.auth.signOut({ scope: 'local' }).catch(() => {});
  CLOUD.user = null; cloudSetStatus('off'); refreshChrome();
  return true;
}

async function cloudInit() {
  if (CLOUD.ready || !/^https?:$/.test(location.protocol)) return;
  await cloudLoadSdk();
  if (CLOUD.ready) return;
  CLOUD.client = window.supabase.createClient(CLOUD.url, CLOUD.key, { auth: { flowType: 'pkce', persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
  CLOUD.ready = true;
  CLOUD.client.auth.onAuthStateChange((event, session) => {
    const was = CLOUD.user && CLOUD.user.id;
    CLOUD.user = session ? session.user : null;
    // Opened the "reset password" email link: ask for the new password.
    if (event === 'PASSWORD_RECOVERY') setTimeout(openSetPassword, 0);
    if (event === 'USER_UPDATED' && /^#\/profile/.test(location.hash)) setTimeout(router, 0);
    if (CLOUD.user && CLOUD.user.id !== was) {
      if (!state.name && CLOUD.user.user_metadata && CLOUD.user.user_metadata.full_name) { state.name = CLOUD.user.user_metadata.full_name; setTimeout(router, 0); }
      setTimeout(cloudPull, 0);
    }
    if (!CLOUD.user) cloudSetStatus('off');
    refreshChrome();
  });
  // Returning from Google: the SDK exchanges ?code=…; tidy the address bar afterwards.
  await CLOUD.client.auth.getSession();
  if (/[?&]code=/.test(location.search)) {
    let back = '#/dashboard'; try { back = sessionStorage.getItem('mca.return') || back; sessionStorage.removeItem('mca.return'); } catch (e) {}
    history.replaceState(null, '', location.pathname + back);
    router();
  }
}

/* Start quietly after the first paint; only a returning signed-in user (or
   someone coming back from Google) needs the SDK right away. */
function cloudHasSession() {
  try { return Object.keys(localStorage).some((k) => k.startsWith('sb-') && k.endsWith('-auth-token')); } catch (e) { return false; }
}
/* An emailed link that failed (expired, already used) comes back as
   ?error=…&error_description=… or #error=…: explain it and open the dashboard. */
function cloudLinkError() {
  const params = new URLSearchParams(location.search.slice(1) + '&' + (location.hash.startsWith('#/') ? '' : location.hash.slice(1)));
  if (!params.get('error') && !params.get('error_code')) return;
  const expired = /expired|otp/i.test(params.get('error_code') + ' ' + params.get('error_description'));
  history.replaceState(null, '', location.pathname + '#/dashboard');
  setTimeout(() => toast({ kind: 'warning', title: expired ? 'That link has expired' : 'That link didn\'t work', text: expired ? 'Email links work once and expire after a while. Ask for a new one.' : (params.get('error_description') || 'Please try again.').slice(0, 160), timeout: 8000 }), 400);
}
function setupCloud() {
  cloudLinkError();
  if (cloudHasSession() || /[?&]code=/.test(location.search)) cloudInit().catch(() => cloudSetStatus('off'));
  window.addEventListener('online', () => { if (CLOUD.user) cloudPush(); });
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-cloud="in"]')) openAuth('in');
    if (e.target.closest('[data-cloud="google"]')) cloudSignIn();
    if (e.target.closest('[data-cloud="out"]')) cloudSignOut();
  });
}
function cloudAccountHTML() {
  if (CLOUD.user) {
    return `<div class="side-account"><div class="side-account__row"><span class="side-account__status" id="cloudStatus" aria-live="polite">${cloudStatusHTML()}</span><button type="button" class="btn btn--ghost btn--sm" data-cloud="out">Sign out</button></div><a class="side-account__privacy" href="#/privacy">Privacy</a></div>`;
  }
  return `<div class="side-account"><button type="button" class="btn btn--soft btn--sm side-account__in" data-cloud="in">${icon('user', 'icon--sm')} Sign in or create account</button><a class="side-account__privacy" href="#/privacy">Privacy</a></div>`;
}
function googleMark() {
  return '<svg class="g-mark" viewBox="0 0 18 18" aria-hidden="true" focusable="false"><path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.61z"/><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.97 10.72a5.4 5.4 0 0 1 0-3.44V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.33z"/><path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"/></svg>';
}
