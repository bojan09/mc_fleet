
/* ===========================================================================
   PRIVACY — what the academy stores, where, and how to delete it; account
   deletion for signed-in users; contact.
   =========================================================================== */
const PRIVACY_UPDATED = 'October 2026';

function viewPrivacy() {
  const row = (ic, t, d) => `<div class="pv-row"><span class="pv-row__ic">${icon(ic)}</span><div><h3>${t}</h3><p>${d}</p></div></div>`;
  const html = `<div class="page page--narrow pv">
    ${pageHead({ eyebrow: `${icon('shield', 'icon--sm')} Privacy`, title: 'Your data and privacy', text: `What MC Academy stores, where it is kept, and how to delete it. Last updated ${PRIVACY_UPDATED}.` })}
    <div class="callout callout--info" role="note"><span class="callout__icon">${icon('info')}</span><div><h2 class="pv-short">The short version</h2><p>You can use the whole academy without an account. Your progress stays in your own browser. If you sign in with Google, a copy of your progress is kept in your account so it syncs across devices. There are no ads, no tracking cookies, and your data is never sold.</p></div></div>

    <section class="pv-sec"><h2>Without an account</h2>
      ${row('grid', 'Stored in your browser only', 'Completed lessons, quiz and exam scores, bookmarks, achievements, the name you type in, the days you studied, and your theme. It is kept in your browser\'s local storage and never leaves your device.')}
      ${row('rotate', 'How to delete it', 'Use <strong>Reset all progress</strong> on the <a href="#/achievements">Achievements</a> page, or clear this site\'s data in your browser settings.')}
    </section>

    <section class="pv-sec"><h2>If you sign in with Google</h2>
      ${row('users', 'Your account', 'Google shares your name, email address, profile picture link and a Google account ID with our sign-in provider, Supabase. We use them only to identify your account and show your name.')}
      ${row('activity', 'Your synced progress', 'The same progress listed above (except your theme) is stored with your account so it can follow you to other devices. Each account can only read and change its own progress.')}
      ${row('pin', 'Where it is kept', 'In a Supabase database in the European Union (Ireland, region eu-west-1).')}
      ${row('users', 'Trainer groups (optional)', 'If you join a group with a code, that group\'s trainer can see your name, academy progress, quiz scores and certificates. You can leave a group at any time; trainers can also remove members.')}
      ${row('award', 'Certificate verification (optional)', 'If you ask for a verification code, your name, the track, your final score and the date are stored with that code. Anyone who has the code can check those details on the certificate check page.')}
      ${row('lock', 'Sign-in session', 'While you are signed in, your browser keeps a sign-in token in local storage. Signing out removes it.')}
      ${row('x-circle', 'How to delete it', CLOUD.user ? 'Use <button type="button" class="link-btn" data-delete-account>Delete my account</button> on this page or on the Achievements page. Your account, its synced progress, group memberships and certificates are deleted permanently; the copy in this browser stays until you reset it.' : 'Sign in, then use <strong>Delete my account</strong> on the Achievements page or here. Your account, its synced progress, group memberships and certificates are deleted permanently.')}
    </section>

    <section class="pv-sec"><h2>Services the site uses</h2>
      ${infographicHTML({ ig: 'table', icon: 'layers', title: 'Who handles what', head: ['Service', 'What for', 'What it receives'], rows: [
        ['Vercel', 'Hosts the website', 'Standard technical request data, such as your IP address and browser type, in its server logs.'],
        ['Google', 'Sign-in (optional)', 'Only if you choose to sign in with Google.'],
        ['Supabase', 'Accounts and progress sync (optional)', 'Your account details and synced progress, as described above.'],
        ['jsDelivr', 'Delivers the sign-in library', 'Only when you sign in. Your IP address and browser type.']
      ] })}
      <p class="small muted">Fonts and the photos in the Visual Library are stored on this site (photos are credited to their authors). Links to official company websites open those sites, which have their own privacy policies.</p>
    </section>

    <section class="pv-sec"><h2>What we don't do</h2>
      <ul class="pv-list">${['No advertising and no advertising trackers', 'No tracking cookies and no usage analytics', 'No selling or sharing of your data for marketing', 'No access to your Google contacts, files or email beyond your address'].map((t) => `<li>${icon('check-circle', 'icon--sm')}<span>${t}</span></li>`).join('')}</ul>
    </section>

    <section class="pv-sec"><h2>Contact</h2>
      ${row('message', 'Questions or requests', 'For questions about your data, or if you can\'t delete it yourself, email <a href="mailto:stanbdev@gmail.com">stanbdev@gmail.com</a>.')}
    </section>
  </div>`;
  return {
    html, title: 'Privacy', nav: 'privacy', crumbs: [['Privacy']],
    after: (v) => $$('[data-delete-account]', v).forEach((b) => b.addEventListener('click', confirmDeleteAccount))
  };
}

function confirmDeleteAccount() {
  if (!CLOUD.user) return;
  openModal({
    title: 'Delete your account?',
    body: `<p>This permanently deletes the account <strong>${esc(CLOUD.user.email || '')}</strong> and the progress synced to it. It cannot be undone.</p><p class="small muted">The copy of your progress in this browser is not deleted. Use <strong>Reset all progress</strong> afterwards if you want to clear it too.</p>`,
    foot: '<button class="btn btn--ghost" data-close>Cancel</button><button class="btn btn--danger" id="doDeleteAccount">Delete my account</button>',
    onOpen: (m, close) => $('#doDeleteAccount', m).addEventListener('click', async (e) => {
      e.currentTarget.disabled = true;
      const ok = await cloudDeleteAccount();
      close();
      if (ok) { toast({ kind: 'success', title: 'Account deleted', text: 'Your account and synced progress were removed.' }); router(); }
      else toast({ kind: 'warning', title: 'Couldn\'t delete the account', text: navigator.onLine ? 'Please try again in a moment.' : 'Connect to the internet and try again.' });
    })
  });
}
