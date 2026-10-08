// In-memory stand-in for the Supabase client, injected before the app loads
// so signed-in screens can be tested without a real account. It implements
// only the calls the app makes, and no access rules (those are tested in the
// database). Seed data: window.__FAKE_DB = { user, tables: { name: rows[] } }.
(function () {
  const seed = window.__FAKE_DB || { user: { id: 'me', email: 'me@example.test', user_metadata: { full_name: 'Test Trainer' } }, tables: {} };
  const db = seed.tables;
  const user = seed.user;
  const t = (name) => (db[name] = db[name] || []);
  const uuid = () => 'id-' + Math.random().toString(36).slice(2, 10);
  window.__FAKE_LOG = [];
  try { localStorage.setItem('sb-fake-auth-token', '1'); } catch (e) {}

  // select('a,b, groups(name,owner)') -> plain columns plus one embedded group
  function shape(table, row, cols) {
    if (!cols || cols === '*') return Object.assign({}, row);
    const out = {};
    const embeds = [...cols.matchAll(/(\w+)\(([^)]*)\)/g)];
    cols.replace(/(\w+)\([^)]*\)/g, '').split(',').map((c) => c.trim()).filter(Boolean).forEach((c) => { out[c] = row[c]; });
    embeds.forEach(([, rel, sub]) => {
      const g = t(rel).find((x) => x.id === row.group_id);
      out[rel] = g ? Object.fromEntries(sub.split(',').map((c) => [c.trim(), g[c.trim()]])) : null;
    });
    return out;
  }

  function query(table) {
    const q = { op: 'select', filters: [], cols: '*', order: null, single: false, payload: null };
    const api = {
      select(cols) { if (q.op === 'select') q.cols = cols || '*'; return api; },
      eq(c, v) { q.filters.push((r) => r[c] === v); return api; },
      in(c, vs) { q.filters.push((r) => vs.includes(r[c])); return api; },
      order(c) { q.order = c; return api; },
      maybeSingle() { q.single = true; return api; },
      insert(row) { q.op = 'insert'; q.payload = row; return api; },
      upsert(row) { q.op = 'upsert'; q.payload = row; return api; },
      delete() { q.op = 'delete'; return api; },
      then(res, rej) { return Promise.resolve().then(run).then(res, rej); }
    };
    function run() {
      window.__FAKE_LOG.push({ table, op: q.op });
      const rows = t(table);
      if (q.op === 'insert') {
        const r = Object.assign({ id: uuid(), created_at: new Date().toISOString() }, table === 'groups' ? { owner: user.id, join_code: 'TESTCODE' } : {}, q.payload);
        if (table === 'assignments' && rows.some((x) => x.group_id === r.group_id && x.module === r.module)) return { data: null, error: { message: 'duplicate key' } };
        rows.push(r); return { data: null, error: null };
      }
      if (q.op === 'upsert') {
        const i = rows.findIndex((x) => x.user_id === q.payload.user_id);
        if (i >= 0) rows[i] = Object.assign({}, rows[i], q.payload); else rows.push(Object.assign({}, q.payload));
        return { data: null, error: null };
      }
      let hit = rows.filter((r) => q.filters.every((f) => f(r)));
      if (q.op === 'delete') { db[table] = rows.filter((r) => !hit.includes(r)); return { data: null, error: null }; }
      if (q.order) hit = hit.slice().sort((a, b) => String(a[q.order]).localeCompare(String(b[q.order])));
      const data = hit.map((r) => shape(table, r, q.cols));
      return { data: q.single ? data[0] || null : data, error: null };
    }
    return api;
  }

  const listeners = [];
  const session = { user };
  window.supabase = {
    createClient() {
      return {
        from: query,
        rpc(name, args) {
          window.__FAKE_LOG.push({ rpc: name, args });
          if (name === 'join_group') {
            const g = t('groups').find((x) => x.join_code === String(args.p_code).trim().toUpperCase());
            if (!g) return Promise.resolve({ data: null, error: { message: 'No group with that code' } });
            t('group_members').push({ group_id: g.id, user_id: user.id, display_name: user.user_metadata.full_name, joined_at: new Date().toISOString() });
            return Promise.resolve({ data: [{ group_id: g.id, group_name: g.name }], error: null });
          }
          return Promise.resolve({ data: null, error: null });
        },
        auth: {
          onAuthStateChange(fn) { listeners.push(fn); setTimeout(() => fn('INITIAL_SESSION', session), 0); return { data: { subscription: { unsubscribe() {} } } }; },
          async getSession() { listeners.forEach((fn) => fn('INITIAL_SESSION', session)); return { data: { session }, error: null }; },
          async signOut() { listeners.forEach((fn) => fn('SIGNED_OUT', null)); return { error: null }; },
          async signInWithOAuth() { return { error: null }; },
          async signInWithPassword() { return { data: { session }, error: null }; },
          async signUp() { return { data: { session: null }, error: null }; },
          async resetPasswordForEmail() { return { error: null }; },
          async resend() { return { error: null }; },
          async reauthenticate() { window.__FAKE_LOG.push({ auth: 'reauthenticate' }); return { error: null }; },
          // Seed user.needsNonce to test the emailed-code step of a password change.
          async updateUser(attrs) {
            window.__FAKE_LOG.push({ auth: 'updateUser', attrs });
            if (attrs.password && user.needsNonce && !attrs.nonce) return { data: null, error: { code: 'reauthentication_needed', message: 'Password update requires reauthentication.' } };
            if (attrs.email) user.new_email = attrs.email;
            if (attrs.data) user.user_metadata = Object.assign({}, user.user_metadata, attrs.data);
            listeners.forEach((fn) => fn('USER_UPDATED', session));
            return { data: { user }, error: null };
          }
        },
        storage: {
          from(bucket) {
            const files = (window.__FAKE_FILES = window.__FAKE_FILES || {});
            return {
              async upload(path, blob, opts) { files[path] = { type: blob.type, size: blob.size, opts }; window.__FAKE_LOG.push({ storage: 'upload', bucket, path }); return { data: { path }, error: null }; },
              async list(dir) { return { data: Object.keys(files).filter((p) => p.startsWith(dir + '/')).map((p) => ({ name: p.slice(dir.length + 1) })), error: null }; },
              async remove(paths) { paths.forEach((p) => delete files[p]); window.__FAKE_LOG.push({ storage: 'remove', bucket, paths }); return { data: null, error: null }; },
              getPublicUrl() { return { data: { publicUrl: location.origin + '/icons/apple-touch-icon.png' } }; }
            };
          }
        }
      };
    }
  };
})();
