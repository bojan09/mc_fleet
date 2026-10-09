
/* ===========================================================================
   PROFILE — the learner's picture, name and details; signing in with Google
   or email + password; changing email and password; preferences; and their
   data (export, reset, sign out everywhere, delete account).
   Name, details, picture and daily goal live in state and sync with the
   progress row; theme and reduced motion stay on each device.
   Pictures: resized to 256×256 in the browser, stored in the public
   Supabase Storage bucket "avatars" under <user id>/ (supabase/05-avatars.sql).
   =========================================================================== */
const GOAL_OPTIONS = [1, 2, 3, 5];
const AVATAR_COLORS = ['#2f6db0', '#1f7a62', '#a8503a', '#6f4aa8', '#8a6d12', '#3d4f66'];
const ROLE_SUGGESTIONS = ['Maintenance Coordinator', 'Fleet Manager', 'Dispatcher', 'Shop Manager', 'Trainee', 'Student'];
const MK_CITIES = ['Skopje', 'Bitola', 'Kumanovo', 'Prilep', 'Tetovo', 'Veles', 'Ohrid', 'Gostivar', 'Štip', 'Strumica', 'Kavadarci', 'Kočani', 'Kičevo', 'Struga', 'Radoviš', 'Gevgelija', 'Kriva Palanka', 'Negotino', 'Sveti Nikole', 'Debar', 'Delčevo', 'Vinica', 'Resen', 'Berovo', 'Kratovo', 'Probištip', 'Valandovo', 'Demir Hisar', 'Makedonski Brod'];
const PASSWORD_MIN = 8;

/* ---------- Picture ---------- */
const googlePhoto = () => { const m = (CLOUD.user && CLOUD.user.user_metadata) || {}; return m.avatar_url || m.picture || ''; };
/* First letters of the first and last name, skipping quotes and symbols
   ("Ana Petrovska" → AP, 'Benjamin "Ben" Ortiz' → BO). */
const initialsOf = (name) => {
  const w = (String(name || '').trim() || 'Coordinator').split(/\s+/).map((p) => (p.match(/\p{L}/u) || [''])[0]).filter(Boolean);
  return ((w[0] || '') + (w.length > 1 ? w[w.length - 1] : '')).toUpperCase() || '?';
};
/* An uploaded picture, else the Google photo (unless the learner chose
   initials), else initials. st is a learner's progress state: this learner's
   own, or a group member's when a trainer views the group (their Google photo
   link travels in st.avatar.google). Pictures from other accounts are only
   shown from the two hosts the CSP allows, and colours only as #rrggbb. */
const AVATAR_HOSTS = /^https:\/\/(lqlewiyuhifvnodkpiul\.supabase\.co|[\w-]+\.googleusercontent\.com)\//;
const safeAvatarUrl = (u) => (typeof u === 'string' && AVATAR_HOSTS.test(u) ? u : '');
function avatarImage(st = state) {
  const a = (st && st.avatar) || {};
  const google = st === state ? googlePhoto() || a.google : a.google;
  const ok = (u) => (st === state ? typeof u === 'string' && u : safeAvatarUrl(u));
  if (a.src === 'upload' && ok(a.url)) return a.url;
  if (a.src !== 'initials' && ok(google)) return google;
  return '';
}
function avatarHTML(size = 40, cls = '', st = state, name = state.name) {
  const a = (st && st.avatar) || {};
  const color = /^#[0-9a-f]{6}$/i.test(a.color || '') ? a.color : '';
  const ini = esc(initialsOf(name));
  const img = avatarImage(st);
  return `<span class="avatar ${cls}" style="--av:${size}px;${color ? `--av-bg:${color}` : ''}" data-initials="${ini}" aria-hidden="true">${img ? `<img class="avatar__img" src="${esc(img)}" alt="" width="${size}" height="${size}" referrerpolicy="no-referrer" decoding="async" loading="lazy">` : ini}</span>`;
}
/* Keep the Google photo link in the synced profile so trainers can show it. */
function rememberGooglePhoto() {
  const g = safeAvatarUrl(googlePhoto());
  if (!g || (state.avatar || {}).google === g) return;
  state.avatar = Object.assign({ src: '', url: '', color: '' }, state.avatar, { google: g });
  save(); // no edit time: a picture chosen on another device still wins (mergeProgress keeps the link)
}
// A picture that fails to load (offline, removed) falls back to initials.
document.addEventListener('error', (e) => {
  const img = e.target;
  if (img && img.classList && img.classList.contains('avatar__img')) { const box = img.parentNode; if (box) box.textContent = box.getAttribute('data-initials') || ''; }
}, true);

async function loadBitmap(file) {
  if (window.createImageBitmap) { try { return await createImageBitmap(file, { imageOrientation: 'from-image' }); } catch (e) {} }
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = () => rej(new Error('unreadable')); img.src = url; });
    return img;
  } finally { setTimeout(() => URL.revokeObjectURL(url), 1000); }
}
/* Centre-crop to a square, resize to 256 px, WebP (JPEG where unsupported). */
async function avatarBlob(file) {
  const bmp = await loadBitmap(file);
  const w = bmp.width, h = bmp.height, side = Math.min(w, h), S = 256;
  const c = document.createElement('canvas'); c.width = S; c.height = S;
  const ctx = c.getContext('2d'); ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(bmp, (w - side) / 2, (h - side) / 2, side, side, 0, 0, S, S);
  const toBlob = (type, q) => new Promise((res) => c.toBlob(res, type, q));
  let blob = await toBlob('image/webp', 0.86);
  if (!blob || blob.type !== 'image/webp') blob = await toBlob('image/jpeg', 0.88);
  if (!blob) throw new Error('unreadable');
  return blob;
}
async function avatarUpload(file) {
  if (!CLOUD.user || !CLOUD.client) throw new Error('Sign in to upload a picture.');
  if (!/^image\/(png|jpe?g|webp|gif|heic|heif|avif|bmp)$/i.test(file.type)) throw new Error('Choose a PNG, JPG or WebP image.');
  if (file.size > 15 * 1024 * 1024) throw new Error('That image is over 15 MB. Choose a smaller one.');
  let blob;
  try { blob = await avatarBlob(file); } catch (e) { throw new Error('That image couldn\'t be read. Try a PNG or JPG.'); }
  const ext = blob.type === 'image/webp' ? 'webp' : 'jpg';
  const bucket = CLOUD.client.storage.from('avatars');
  await avatarRemoveFile().catch(() => {}); // one picture per account
  const path = `${CLOUD.user.id}/avatar.${ext}`;
  const { error } = await bucket.upload(path, blob, { upsert: true, contentType: blob.type, cacheControl: '3600' });
  if (error) { console.warn('Picture upload failed:', error.message); throw new Error(navigator.onLine ? 'The picture couldn\'t be uploaded. Please try again.' : 'Connect to the internet to upload a picture.'); }
  const { data } = bucket.getPublicUrl(path);
  setAvatar({ src: 'upload', url: `${data.publicUrl}?v=${Date.now()}` });
}
/* Deletes every file in the signed-in user's avatar folder. */
async function avatarRemoveFile() {
  if (!CLOUD.user || !CLOUD.client) return;
  const bucket = CLOUD.client.storage.from('avatars');
  const { data, error } = await bucket.list(CLOUD.user.id);
  if (error || !data || !data.length) return;
  await bucket.remove(data.map((f) => `${CLOUD.user.id}/${f.name}`));
}
function setAvatar(patch) {
  state.avatar = Object.assign({ src: '', url: '', color: '' }, state.avatar, patch);
  touch('avatar'); save(); refreshChrome();
}

function avatarOptionsHTML() {
  const a = state.avatar || {};
  const g = googlePhoto();
  const uploaded = a.src === 'upload' && a.url;
  return `${CLOUD.user ? `<label class="btn btn--primary avp__upload">${icon('image')} ${uploaded ? 'Upload a new photo' : 'Upload a photo'}<input type="file" id="avpFile" accept="image/png,image/jpeg,image/webp,image/heic,image/avif" class="sr-only"></label>
      <p class="hint">Square-cropped and resized to 256 × 256 before upload.</p>`
    : `<p class="small"><button type="button" class="link-btn" data-cloud="in">Sign in</button> to upload a photo. You can still pick a colour below.</p>`}
    ${g ? `<button type="button" class="btn ${avatarImage() === g ? 'is-active' : ''}" data-avp="google">Use my Google photo</button>` : ''}
    ${uploaded ? `<button type="button" class="btn btn--ghost" data-avp="remove">${icon('x')} Remove uploaded photo</button>` : ''}
    <fieldset class="avp__colors"><legend>Initials colour</legend>
      ${AVATAR_COLORS.map((c, i) => `<label class="avp__swatch" style="--sw:${c}"><input type="radio" name="avpColor" value="${c}" ${(a.color || AVATAR_COLORS[0]) === c ? 'checked' : ''}><span class="sr-only">Colour ${i + 1}</span></label>`).join('')}
    </fieldset>
    ${g || uploaded ? `<button type="button" class="btn ${!avatarImage() ? 'is-active' : ''}" data-avp="initials">Use initials</button>` : ''}`;
}
function openAvatarPicker() {
  const body = `<div class="avp">
    <div class="avp__preview" id="avpPreview">${avatarHTML(112)}</div>
    <div class="avp__opts"><div class="avp__opts" id="avpOpts">${avatarOptionsHTML()}</div><p class="auth-msg" id="avpMsg" role="status"></p></div>
  </div>`;
  openModal({
    title: 'Profile picture', body, foot: '<button class="btn btn--primary" data-close>Done</button>',
    onOpen: (m) => {
      const msg = $('#avpMsg', m);
      // Redraw the preview and options (keeping focus on the same control), and the page behind.
      const redraw = () => {
        const key = document.activeElement && (document.activeElement.dataset.avp || (document.activeElement.name === 'avpColor' && document.activeElement.value));
        $('#avpPreview', m).innerHTML = avatarHTML(112);
        $('#avpOpts', m).innerHTML = avatarOptionsHTML();
        const back = key && ($(`[data-avp="${key}"]`, m) || $(`input[name="avpColor"][value="${key}"]`, m));
        (back || $('#avpFile', m) || $('[data-close]', m)).focus();
        if (/^#\/profile/.test(location.hash)) router();
      };
      m.addEventListener('change', async (e) => {
        if (e.target.name === 'avpColor') { setAvatar({ color: e.target.value }); redraw(); return; }
        if (e.target.id !== 'avpFile') return;
        const f = e.target.files && e.target.files[0]; if (!f) return;
        setMsg(msg, 'Uploading…', 'ok');
        try { await avatarUpload(f); setMsg(msg, 'Picture updated.', 'ok'); redraw(); }
        catch (err) { setMsg(msg, err.message); }
      });
      m.addEventListener('click', async (e) => {
        const b = e.target.closest('[data-avp]'); if (!b) return;
        if (b.dataset.avp === 'google') setAvatar({ src: 'google' });
        if (b.dataset.avp === 'initials') setAvatar({ src: 'initials' });
        if (b.dataset.avp === 'remove') {
          b.disabled = true;
          try { await avatarRemoveFile(); } catch (err) { console.warn('Picture removal failed:', err); }
          setAvatar({ src: '', url: '' }); setMsg(msg, 'Uploaded photo removed.', 'ok');
        }
        redraw();
      });
    }
  });
}

/* ---------- Sign in / create account / forgot password ---------- */
function authError(error) {
  const t = `${error && (error.code || '')} ${error && (error.message || '')}`.toLowerCase();
  if (/invalid.*credentials|invalid_credentials/.test(t)) return 'Wrong email or password.';
  if (/not.?confirmed/.test(t)) return 'Confirm your email first: open the link we sent you.';
  if (/already.*(registered|exists)|user_already_exists/.test(t)) return 'An account with this email already exists. Sign in instead.';
  if (/weak|password.*(short|characters)|weak_password/.test(t)) return `Choose a stronger password: at least ${PASSWORD_MIN} characters.`;
  if (/rate|too many|over_email_send_rate_limit/.test(t)) return 'Too many attempts. Wait a few minutes and try again.';
  if (/same.*password|same_password/.test(t)) return 'The new password must be different from the current one.';
  if (/email.*(invalid|format)|email_address_invalid/.test(t)) return 'Enter a valid email address.';
  if (/signup.*disabled|signups not allowed|email_provider_disabled/.test(t)) return 'Email sign-up is turned off right now. Use Google instead.';
  if (!navigator.onLine) return 'You\'re offline. Connect to the internet and try again.';
  return (error && error.message) || 'Something went wrong. Please try again.';
}
const pwField = (id, label, autocomplete, extra = '') => `<div class="field"><label for="${id}">${label}</label><div class="pw"><input class="input" id="${id}" type="password" autocomplete="${autocomplete}" minlength="${PASSWORD_MIN}" required ${extra}><button type="button" class="pw__toggle" data-pw="${id}" aria-label="Show password" aria-pressed="false">Show</button></div></div>`;
function wirePwToggles(root) {
  $$('[data-pw]', root).forEach((b) => b.addEventListener('click', () => {
    const inp = $('#' + b.dataset.pw, root); const show = inp.type === 'password';
    inp.type = show ? 'text' : 'password'; b.textContent = show ? 'Hide' : 'Show';
    b.setAttribute('aria-pressed', String(show)); b.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
  }));
}
function setMsg(el, text, kind = 'error') { el.textContent = text; el.className = `auth-msg ${text ? 'is-' + kind : ''}`; }
async function authClient() {
  await cloudInit();
  if (!CLOUD.client) throw new Error('Sign-in is unavailable here.');
  return CLOUD.client;
}

function openAuth(mode = 'in') {
  openModal({
    title: 'Sign in to MC Academy', size: 'modal--auth',
    body: '<div class="auth" id="authBox"></div>',
    onOpen: (m, close) => {
      const box = $('#authBox', m);
      const render = (md, email = '') => {
        const tabs = md === 'reset' ? '' : `<div class="auth-tabs" role="tablist" aria-label="Sign in or create an account">
          <button type="button" role="tab" aria-selected="${md === 'in'}" data-mode="in">Sign in</button>
          <button type="button" role="tab" aria-selected="${md === 'up'}" data-mode="up">Create account</button></div>`;
        box.innerHTML = `${md === 'reset' ? '' : `<button type="button" class="btn btn--block auth-google" data-cloud="google">${googleMark()} Continue with Google</button><div class="auth-or"><span>or with email</span></div>`}
          ${tabs}
          <form class="auth-form" id="authForm" novalidate>
            ${md === 'reset' ? '<p class="small">Enter your account email. We\'ll send a link to choose a new password.</p>' : ''}
            ${md === 'up' ? '<div class="field"><label for="authName">Your name</label><input class="input" id="authName" autocomplete="name" maxlength="60" placeholder="e.g., Ana Petrovska"></div>' : ''}
            <div class="field"><label for="authEmail">Email</label><input class="input" id="authEmail" type="email" autocomplete="email" inputmode="email" required value="${esc(email)}"></div>
            ${md === 'reset' ? '' : pwField('authPw', 'Password', md === 'up' ? 'new-password' : 'current-password', md === 'up' ? `aria-describedby="authPwHint"` : '')}
            ${md === 'up' ? `<p class="hint" id="authPwHint">At least ${PASSWORD_MIN} characters.</p>` : ''}
            <p class="auth-msg" id="authMsg" role="alert"></p>
            <button type="submit" class="btn btn--primary btn--block">${md === 'in' ? 'Sign in' : md === 'up' ? 'Create account' : 'Send reset link'}</button>
          </form>
          ${md === 'in' ? '<button type="button" class="link-btn auth-forgot" data-mode="reset">Forgot password?</button>' : ''}
          ${md === 'reset' ? '<button type="button" class="link-btn auth-forgot" data-mode="in">Back to sign in</button>' : ''}`;
        wirePwToggles(box);
        $$('[data-mode]', box).forEach((b) => b.addEventListener('click', () => render(b.dataset.mode, $('#authEmail', box).value.trim())));
        const form = $('#authForm', box); const msg = $('#authMsg', box);
        requestAnimationFrame(() => { const f = $('#authName', box) || (email ? $('#authPw', box) : $('#authEmail', box)) || $('#authEmail', box); f && f.focus(); });
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const em = $('#authEmail', box).value.trim(); const pw = $('#authPw', box) ? $('#authPw', box).value : '';
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { setMsg(msg, 'Enter a valid email address.'); $('#authEmail', box).focus(); return; }
          if (md !== 'reset' && pw.length < (md === 'up' ? PASSWORD_MIN : 1)) { setMsg(msg, md === 'up' ? `Use at least ${PASSWORD_MIN} characters for your password.` : 'Enter your password.'); $('#authPw', box).focus(); return; }
          const btn = $('[type="submit"]', form); btn.disabled = true; setMsg(msg, '');
          try {
            const sb = await authClient();
            if (md === 'in') {
              const { error } = await sb.auth.signInWithPassword({ email: em, password: pw });
              if (error) throw error;
              close(); toast({ kind: 'success', title: 'Signed in', text: 'Your progress will sync across devices.' });
            } else if (md === 'up') {
              const name = ($('#authName', box).value || '').trim().slice(0, 60);
              rememberReturn();
              const { data, error } = await sb.auth.signUp({ email: em, password: pw, options: { emailRedirectTo: authReturn(), data: name ? { full_name: name } : {} } });
              if (error) throw error;
              if (name && !state.name) { state.name = name; touch('name'); save(); }
              if (data && data.session) { close(); toast({ kind: 'success', title: 'Account created', text: 'You\'re signed in.' }); return; }
              box.innerHTML = `<div class="auth-done">${icon('check-circle', 'icon--lg')}<h3>Check your inbox</h3><p>We sent a confirmation link to <strong>${esc(em)}</strong>. Open it on this device to finish creating your account.</p><p class="small muted">No email after a few minutes? Check spam, or <button type="button" class="link-btn" id="authResend">send it again</button>.</p></div>`;
              $('#authResend', box).addEventListener('click', async (ev) => {
                ev.currentTarget.disabled = true;
                const { error: er } = await sb.auth.resend({ type: 'signup', email: em, options: { emailRedirectTo: authReturn() } });
                toast(er ? { kind: 'warning', title: 'Couldn\'t resend', text: authError(er) } : { kind: 'success', title: 'Email sent again' });
              });
            } else {
              rememberReturn();
              const { error } = await sb.auth.resetPasswordForEmail(em, { redirectTo: authReturn() });
              if (error) throw error;
              box.innerHTML = `<div class="auth-done">${icon('check-circle', 'icon--lg')}<h3>Check your inbox</h3><p>If an account exists for <strong>${esc(em)}</strong>, we sent a link to choose a new password. Open it on this device.</p></div>`;
            }
          } catch (err) {
            setMsg(msg, authError(err)); btn.disabled = false;
            if (/not.?confirmed/i.test(String(err && err.message))) msg.insertAdjacentHTML('beforeend', ' <button type="button" class="link-btn" id="authResend2">Resend the link</button>');
            const r2 = $('#authResend2', box);
            if (r2) r2.addEventListener('click', async () => { r2.disabled = true; const sb = await authClient(); const { error: er } = await sb.auth.resend({ type: 'signup', email: em, options: { emailRedirectTo: authReturn() } }); setMsg(msg, er ? authError(er) : 'Confirmation link sent again.', er ? 'error' : 'ok'); });
          }
        });
      };
      render(mode);
    }
  });
}

/* Change the password, asking for the emailed code when Supabase wants the
   learner to confirm it's them ("secure password change"). */
async function changePassword(pw, nonce) {
  const sb = await authClient();
  const { error } = await sb.auth.updateUser(Object.assign({ password: pw, data: { has_password: true } }, nonce ? { nonce } : {}));
  if (error && /reauth/i.test(`${error.code} ${error.message}`) && !nonce) {
    const { error: e2 } = await sb.auth.reauthenticate();
    if (e2) return { error: e2 };
    return { needsCode: true };
  }
  return { error };
}
/* After opening a "reset password" email link. */
function openSetPassword() {
  if (!CLOUD.user) return;
  openModal({
    title: 'Choose a new password',
    body: `<form id="spForm" novalidate><p class="small">For <strong>${esc(CLOUD.user.email || '')}</strong>.</p>${pwField('spPw', 'New password', 'new-password', 'autofocus')}${pwField('spPw2', 'Repeat new password', 'new-password')}<p class="auth-msg" id="spMsg" role="alert"></p></form>`,
    foot: '<button class="btn btn--ghost" data-close>Later</button><button class="btn btn--primary" type="submit" form="spForm">Save password</button>',
    onOpen: (m, close) => {
      wirePwToggles(m);
      $('#spForm', m).addEventListener('submit', async (e) => {
        e.preventDefault();
        const a = $('#spPw', m).value, b = $('#spPw2', m).value, msg = $('#spMsg', m);
        if (a.length < PASSWORD_MIN) return setMsg(msg, `Use at least ${PASSWORD_MIN} characters.`);
        if (a !== b) return setMsg(msg, 'The two passwords don\'t match.');
        const r = await changePassword(a);
        if (r.error) return setMsg(msg, authError(r.error));
        if (r.needsCode) return setMsg(msg, 'Open your profile to finish: we emailed you a confirmation code.');
        close(); toast({ kind: 'success', title: 'Password updated', text: 'Use it next time you sign in with email.' });
      });
    }
  });
}

/* ---------- Profile page ---------- */
function viewProfile() {
  const u = CLOUD.user;
  const prof = state.profile || {};
  const meta = (u && u.user_metadata) || {};
  const providers = u ? [...new Set((u.identities || []).map((i) => i.provider).concat((u.app_metadata && u.app_metadata.providers) || []))] : [];
  const hasGoogle = providers.includes('google');
  const hasPassword = providers.includes('email') || !!meta.has_password;
  const since = u && u.created_at ? new Date(u.created_at) : state.days.length ? new Date(state.days.slice().sort()[0]) : null;
  const certs = TRACKS.filter(finalPassed).length;
  const theme = state.theme || 'system';
  const roleLine = [prof.role, prof.company, prof.city].filter(Boolean).map(esc).join(' · ');
  const opt = (v, l, cur) => `<option value="${v}" ${String(cur) === String(v) ? 'selected' : ''}>${l}</option>`;

  const html = `<div class="page page--narrow profile">
    <section class="card prof-head" aria-labelledby="profTitle">
      <button type="button" class="prof-head__avatar" id="profAvatar" aria-label="Change profile picture">${avatarHTML(96)}<span class="prof-head__cam">${icon('image', 'icon--sm')}</span></button>
      <div class="grow">
        <span class="eyebrow">${icon('user', 'icon--sm')} Profile</span>
        <h1 id="profTitle">${esc(state.name || 'Your profile')}</h1>
        <p class="muted">${roleLine || 'Add your role, company and city below.'}</p>
        ${u ? `<p class="small prof-head__email">${icon('mail', 'icon--sm')} ${esc(u.email || '')}</p>` : ''}
      </div>
      <dl class="prof-stats">
        <div><dt>Lessons</dt><dd class="num">${completedCount()}</dd></div>
        <div><dt>Certificates</dt><dd class="num">${certs}/${TRACKS.length}</dd></div>
        <div><dt>Streak</dt><dd class="num">${streak()}d</dd></div>
        <div><dt>${u ? 'Member since' : 'Studying since'}</dt><dd>${since ? since.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }) : '—'}</dd></div>
      </dl>
    </section>

    <section class="card prof-sec" aria-labelledby="pdTitle">
      <div class="card__head"><h2 id="pdTitle">Personal details</h2></div>
      <form class="card__body prof-form" id="pdForm" novalidate>
        <div class="field prof-form__full"><label for="pdName">Full name</label><input class="input" id="pdName" autocomplete="name" maxlength="60" value="${esc(state.name)}" placeholder="e.g., Ana Petrovska"><span class="hint">Shown on your dashboard and certificates${u ? ', and to trainers of groups you join' : ''}.</span></div>
        <div class="field"><label for="pdRole">Role</label><input class="input" id="pdRole" list="pdRoles" maxlength="60" autocomplete="organization-title" value="${esc(prof.role || '')}" placeholder="e.g., Maintenance Coordinator"><datalist id="pdRoles">${ROLE_SUGGESTIONS.map((r) => `<option value="${r}">`).join('')}</datalist></div>
        <div class="field"><label for="pdCompany">Company</label><input class="input" id="pdCompany" maxlength="80" autocomplete="organization" value="${esc(prof.company || '')}"></div>
        <div class="field"><label for="pdCity">City</label><input class="input" id="pdCity" list="pdCities" maxlength="60" autocomplete="address-level2" value="${esc(prof.city || '')}" placeholder="e.g., Skopje"><datalist id="pdCities">${MK_CITIES.map((c) => `<option value="${c}">`).join('')}</datalist></div>
        <div class="prof-form__actions"><span class="auth-msg" id="pdMsg" role="status"></span><button type="submit" class="btn btn--primary">Save details</button></div>
      </form>
    </section>

    <section class="card prof-sec" aria-labelledby="acTitle">
      <div class="card__head"><h2 id="acTitle">Account &amp; sign-in</h2>${u ? `<span class="badge badge--outline">${icon('check-circle', 'icon--sm')} Synced</span>` : ''}</div>
      <div class="card__body">${u ? `
        <div class="prof-row">
          <div><h3>Email</h3><p class="small">${esc(u.email || '')}${u.new_email ? ` · <span class="text-warning">change to ${esc(u.new_email)} waiting for confirmation</span>` : ''}</p></div>
          <button type="button" class="btn btn--sm" data-toggle="emForm" aria-expanded="false" aria-controls="emForm">Change email</button>
        </div>
        <form class="prof-sub" id="emForm" hidden novalidate>
          <div class="field"><label for="emNew">New email</label><input class="input" id="emNew" type="email" autocomplete="email" inputmode="email" required></div>
          <p class="hint">We'll email a confirmation link${hasGoogle ? '. Google sign-in keeps working' : ''}. The change happens after you confirm it.</p>
          <div class="prof-form__actions"><span class="auth-msg" id="emMsg" role="alert"></span><button type="submit" class="btn btn--primary btn--sm">Send confirmation</button></div>
        </form>
        <div class="prof-row">
          <div><h3>Password</h3><p class="small">${hasPassword ? 'You can sign in with your email and password.' : 'No password yet. Set one to also sign in with your email.'}</p></div>
          <button type="button" class="btn btn--sm" data-toggle="pwForm" aria-expanded="false" aria-controls="pwForm">${hasPassword ? 'Change password' : 'Set a password'}</button>
        </div>
        <form class="prof-sub" id="pwForm" hidden novalidate>
          ${pwField('pwNew', 'New password', 'new-password')}${pwField('pwNew2', 'Repeat new password', 'new-password')}
          <div class="field" id="pwCodeField" hidden><label for="pwCode">Confirmation code from your email</label><input class="input" id="pwCode" inputmode="numeric" autocomplete="one-time-code" maxlength="10"></div>
          <input type="email" autocomplete="username" value="${esc(u.email || '')}" hidden>
          <div class="prof-form__actions"><span class="auth-msg" id="pwMsg" role="alert"></span><button type="submit" class="btn btn--primary btn--sm">Save password</button></div>
        </form>
        <div class="prof-row">
          <div><h3>Sign-in methods</h3><p class="small prof-methods"><span class="${hasGoogle ? 'is-on' : ''}">${googleMark()} Google${hasGoogle ? '' : ' (not linked)'}</span><span class="${hasPassword ? 'is-on' : ''}">${icon('mail', 'icon--sm')} Email &amp; password${hasPassword ? '' : ' (not set)'}</span></p></div>
        </div>`
      : `<div class="prof-signin">${icon('users', 'icon--lg')}<div class="grow"><h3>Keep your progress safe</h3><p class="small">Sign in with Google or email to sync progress across devices, upload a profile picture and join trainer groups. Everything keeps working without an account.</p></div><button type="button" class="btn btn--primary" data-cloud="in">Sign in or create account</button></div>`}
      </div>
    </section>

    <section class="card prof-sec" aria-labelledby="prTitle">
      <div class="card__head"><h2 id="prTitle">Preferences</h2></div>
      <div class="card__body">
        <div class="prof-row">
          <div><h3 id="thLabel">Theme</h3><p class="small">Saved on this device.</p></div>
          <div class="seg" role="radiogroup" aria-labelledby="thLabel">${[['light', 'Light', 'sun'], ['dark', 'Dark', 'moon'], ['system', 'System', 'monitor']].map(([v, l, ic]) => `<label class="seg__opt"><input type="radio" name="prTheme" value="${v}" ${theme === v ? 'checked' : ''}><span>${icon(ic, 'icon--sm')} ${l}</span></label>`).join('')}</div>
        </div>
        <div class="prof-row">
          <div><h3><label for="prGoal">Daily goal</label></h3><p class="small">Lessons to finish each day, shown on your dashboard.</p></div>
          <select class="select" id="prGoal">${GOAL_OPTIONS.map((n) => opt(n, `${n} lesson${n === 1 ? '' : 's'} a day`, state.goal || 1)).join('')}</select>
        </div>
        <div class="prof-row">
          <div><h3><label for="prMotion">Reduce animations</label></h3><p class="small">Turns off movement and transitions on this device.</p></div>
          <label class="switch"><input type="checkbox" role="switch" id="prMotion" ${state.motion === 'reduce' ? 'checked' : ''}><span aria-hidden="true"></span></label>
        </div>
      </div>
    </section>

    <section class="card prof-sec" aria-labelledby="dtTitle">
      <div class="card__head"><h2 id="dtTitle">Your data</h2><a class="btn btn--ghost btn--sm" href="#/privacy">Privacy ${icon('chev-r', 'icon--sm')}</a></div>
      <div class="card__body">
        <div class="prof-row"><div><h3>Export progress</h3><p class="small">Download everything the academy stores about your learning as a JSON file.</p></div><button type="button" class="btn btn--sm" id="dtExport">${icon('download', 'icon--sm')} Export</button></div>
        ${u ? `<div class="prof-row"><div><h3>Sign out everywhere</h3><p class="small">Ends your session on every device, including this one.</p></div><button type="button" class="btn btn--sm" id="dtGlobal">Sign out everywhere</button></div>` : ''}
        <div class="prof-row"><div><h3>Reset progress</h3><p class="small">Clears lessons, scores, certificates and achievements${u ? ' on all devices' : ''}. Your profile stays.</p></div><button type="button" class="btn btn--sm btn--danger" data-reset>${icon('rotate', 'icon--sm')} Reset</button></div>
        ${u ? `<div class="prof-row"><div><h3>Delete account</h3><p class="small">Permanently deletes your account, synced progress, picture, group memberships and certificates.</p></div><button type="button" class="btn btn--sm btn--danger" data-delete-account>${icon('x-circle', 'icon--sm')} Delete</button></div>` : ''}
      </div>
    </section>
  </div>`;

  return {
    html, title: 'Profile', nav: 'profile', crumbs: [['Profile']],
    after: (v) => {
      $('#profAvatar', v).addEventListener('click', openAvatarPicker);
      wirePwToggles(v);
      $$('[data-toggle]', v).forEach((b) => b.addEventListener('click', () => {
        const f = $('#' + b.dataset.toggle, v); f.hidden = !f.hidden; b.setAttribute('aria-expanded', String(!f.hidden));
        if (!f.hidden) { const i = $('input:not([hidden])', f); i && i.focus(); }
      }));

      $('#pdForm', v).addEventListener('submit', (e) => {
        e.preventDefault();
        const name = $('#pdName', v).value.trim().slice(0, 60);
        const next = { role: $('#pdRole', v).value.trim().slice(0, 60), company: $('#pdCompany', v).value.trim().slice(0, 80), city: $('#pdCity', v).value.trim().slice(0, 60) };
        if (name !== state.name) { state.name = name; touch('name'); }
        state.profile = next; touch('profile'); save(); refreshChrome();
        $('#profTitle', v).textContent = name || 'Your profile';
        $('.prof-head p.muted', v).textContent = [next.role, next.company, next.city].filter(Boolean).join(' · ') || 'Add your role, company and city below.';
        $('#profAvatar', v).innerHTML = `${avatarHTML(96)}<span class="prof-head__cam">${icon('image', 'icon--sm')}</span>`;
        setMsg($('#pdMsg', v), 'Saved.', 'ok');
        toast({ kind: 'success', title: 'Profile updated', timeout: 2500 });
      });

      const em = $('#emForm', v);
      if (em) em.addEventListener('submit', async (e) => {
        e.preventDefault();
        const msg = $('#emMsg', v); const val = $('#emNew', v).value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return setMsg(msg, 'Enter a valid email address.');
        if (val.toLowerCase() === String(CLOUD.user.email || '').toLowerCase()) return setMsg(msg, 'That\'s already your email.');
        const btn = $('[type="submit"]', em); btn.disabled = true;
        try {
          const sb = await authClient(); rememberReturn();
          const { error } = await sb.auth.updateUser({ email: val }, { emailRedirectTo: authReturn() });
          if (error) throw error;
          setMsg(msg, `Check ${val} (and your current inbox) for a confirmation link.`, 'ok');
        } catch (err) { setMsg(msg, authError(err)); }
        btn.disabled = false;
      });

      const pw = $('#pwForm', v);
      if (pw) pw.addEventListener('submit', async (e) => {
        e.preventDefault();
        const msg = $('#pwMsg', v); const a = $('#pwNew', v).value, b = $('#pwNew2', v).value;
        const codeField = $('#pwCodeField', v); const code = $('#pwCode', v).value.trim();
        if (a.length < PASSWORD_MIN) return setMsg(msg, `Use at least ${PASSWORD_MIN} characters.`);
        if (a !== b) return setMsg(msg, 'The two passwords don\'t match.');
        if (!codeField.hidden && !code) return setMsg(msg, 'Enter the code we emailed you.');
        const btn = $('[type="submit"]', pw); btn.disabled = true;
        try {
          const r = await changePassword(a, codeField.hidden ? '' : code);
          if (r.needsCode) { codeField.hidden = false; $('#pwCode', v).focus(); setMsg(msg, 'To confirm it\'s you, we emailed you a code. Enter it and save again.', 'ok'); }
          else if (r.error) setMsg(msg, authError(r.error));
          else { pw.reset(); codeField.hidden = true; toast({ kind: 'success', title: 'Password saved', text: 'You can now sign in with your email and password.' }); setTimeout(router, 300); }
        } catch (err) { setMsg(msg, authError(err)); }
        btn.disabled = false;
      });

      $$('input[name="prTheme"]', v).forEach((r) => r.addEventListener('change', () => {
        state.theme = r.value === 'system' ? null : r.value; save();
        applyTheme(state.theme || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
      }));
      $('#prGoal', v).addEventListener('change', (e) => { state.goal = Number(e.target.value) || 1; touch('goal'); save(); toast({ kind: 'success', title: `Daily goal: ${state.goal} lesson${state.goal === 1 ? '' : 's'}`, timeout: 2000 }); });
      $('#prMotion', v).addEventListener('change', (e) => { state.motion = e.target.checked ? 'reduce' : null; applyMotion(); save(); });

      $('#dtExport', v).addEventListener('click', exportProgress);
      const g = $('#dtGlobal', v);
      if (g) g.addEventListener('click', async () => {
        g.disabled = true;
        try { clearTimeout(CLOUD.timer); await cloudPush(); const { error } = await CLOUD.client.auth.signOut({ scope: 'global' }); if (error) throw error; toast({ kind: 'success', title: 'Signed out on all devices', text: 'Your progress stays on this device.' }); }
        catch (err) { g.disabled = false; toast({ kind: 'warning', title: 'Couldn\'t sign out everywhere', text: authError(err) }); }
      });
      $('[data-reset]', v).addEventListener('click', confirmResetProgress);
      $$('[data-delete-account]', v).forEach((b) => b.addEventListener('click', confirmDeleteAccount));
    }
  };
}

function applyMotion() {
  if (state.motion === 'reduce') document.documentElement.setAttribute('data-motion', 'reduce');
  else document.documentElement.removeAttribute('data-motion');
}
function exportProgress() {
  const data = { app: 'MC Academy', exported: new Date().toISOString(), account: CLOUD.user ? { email: CLOUD.user.email, id: CLOUD.user.id } : null, progress: cloudSnapshot() };
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
  const a = document.createElement('a'); a.href = url; a.download = `mc-academy-progress-${todayStr()}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast({ kind: 'success', title: 'Progress exported', icon: 'download', timeout: 2500 });
}
