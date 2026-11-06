-- MC Academy — access-rule test for groups, progress, certificates,
-- assignments and question attempts. Creates a pretend trainer (T), trainee (M) and outsider (O),
-- acts as each through row-level security, then ALWAYS rolls back: the last
-- line raises an error on purpose, so nothing it created is kept.
--
-- Run it in the Supabase SQL editor (or any client connected as postgres).
-- The error message is the result:
--   ACCESS TEST PASSED: <n> checks        everything behaved as expected
--   ACCESS TEST FAILED: <list>            something to fix before release
do $$
declare
  t uuid := gen_random_uuid(); m uuid := gen_random_uuid(); o uuid := gen_random_uuid();
  gid uuid; code text; cid text; n int;
  checks int := 0; fails text := '';
begin
  insert into auth.users (id, aud, role, email, raw_user_meta_data) values
    (t, 'authenticated', 'authenticated', 'accesstest-t@example.invalid', '{"full_name":"Test Trainer"}'),
    (m, 'authenticated', 'authenticated', 'accesstest-m@example.invalid', '{"full_name":"Test Trainee"}'),
    (o, 'authenticated', 'authenticated', 'accesstest-o@example.invalid', '{"full_name":"Test Outsider"}');
  insert into public.progress (user_id, state) values
    (t, '{"name":"Trainer"}'),
    (m, '{"name":"Trainee","finals":{"beginner":{"passed":true,"score":0.9}}}'),
    (o, '{"name":"Outsider"}');

  -- T: create a group and an assignment
  perform set_config('request.jwt.claims', json_build_object('sub', t, 'role', 'authenticated')::text, true);
  execute 'set local role authenticated';
  insert into public.groups (name) values ('Access test') returning id, join_code into gid, code;
  insert into public.assignments (group_id, module, due) values (gid, 'beginner.m1', current_date + 7);
  begin insert into public.assignments (group_id, module) values (gid, 'not a module'); fails := fails || ' | invalid module accepted';
  exception when check_violation then null; end; checks := checks + 1;
  execute 'reset role';

  -- M: join, read, try to change things
  perform set_config('request.jwt.claims', json_build_object('sub', m, 'role', 'authenticated')::text, true);
  execute 'set local role authenticated';
  perform public.join_group(lower(code)); checks := checks + 1;           -- lower-case code works
  perform public.join_group(code); checks := checks + 1;                  -- joining twice is fine
  select count(*) into n from public.groups;       checks := checks + 1; if n <> 1 then fails := fails || ' | M sees ' || n || ' groups'; end if;
  select count(*) into n from public.progress;     checks := checks + 1; if n <> 1 then fails := fails || ' | M sees ' || n || ' progress rows'; end if;
  select count(*) into n from public.group_members; checks := checks + 1; if n <> 1 then fails := fails || ' | M sees ' || n || ' memberships'; end if;
  select count(*) into n from public.assignments;  checks := checks + 1; if n <> 1 then fails := fails || ' | M sees ' || n || ' assignments'; end if;
  update public.groups set name = 'x' where id = gid; get diagnostics n = row_count; checks := checks + 1; if n <> 0 then fails := fails || ' | M renamed the group'; end if;
  delete from public.assignments; get diagnostics n = row_count; checks := checks + 1; if n <> 0 then fails := fails || ' | M deleted assignments'; end if;
  begin insert into public.assignments (group_id, module) values (gid, 'beginner.m2'); fails := fails || ' | M added an assignment';
  exception when insufficient_privilege then null; end; checks := checks + 1;
  cid := public.issue_certificate('beginner'); checks := checks + 1; if cid is null then fails := fails || ' | M got no certificate'; end if;
  insert into public.attempts (item_id, chosen, correct, ms, context) values ('beginner.m1.l1#0', 1, true, 5200, 'lesson'), ('beginner.m1.l1#1', 0, false, 8100, 'lesson');
  select count(*) into n from public.attempts; checks := checks + 1; if n <> 2 then fails := fails || ' | M sees ' || n || ' attempts'; end if;
  update public.attempts set correct = true; get diagnostics n = row_count; checks := checks + 1; if n <> 0 then fails := fails || ' | M edited attempts'; end if;
  delete from public.attempts; get diagnostics n = row_count; checks := checks + 1; if n <> 0 then fails := fails || ' | M deleted attempts'; end if;
  begin insert into public.attempts (user_id, item_id, chosen, correct, context) values (o, 'beginner.m1.l1#0', 0, true, 'lesson'); fails := fails || ' | M added an attempt as O';
  exception when insufficient_privilege then null; end; checks := checks + 1;
  begin insert into public.attempts (item_id, chosen, correct, context) values ('bad id with spaces', 0, true, 'lesson'); fails := fails || ' | invalid item_id accepted';
  exception when check_violation then null; end; checks := checks + 1;
  execute 'reset role';

  -- T: sees the member's progress, cannot change it or see certificates
  perform set_config('request.jwt.claims', json_build_object('sub', t, 'role', 'authenticated')::text, true);
  execute 'set local role authenticated';
  select count(*) into n from public.progress;      checks := checks + 1; if n <> 2 then fails := fails || ' | T sees ' || n || ' progress rows'; end if;
  select count(*) into n from public.group_members; checks := checks + 1; if n <> 1 then fails := fails || ' | T sees ' || n || ' memberships'; end if;
  select count(*) into n from public.certificates;  checks := checks + 1; if n <> 0 then fails := fails || ' | T sees certificates'; end if;
  update public.progress set state = '{}' where user_id = m; get diagnostics n = row_count; checks := checks + 1; if n <> 0 then fails := fails || ' | T changed member progress'; end if;
  select count(*) into n from public.attempts;      checks := checks + 1; if n <> 2 then fails := fails || ' | T sees ' || n || ' member attempts'; end if;
  delete from public.attempts where user_id = m; get diagnostics n = row_count; checks := checks + 1; if n <> 0 then fails := fails || ' | T deleted member attempts'; end if;
  execute 'reset role';

  -- O: sees nothing of the group, cannot join, forge or spoof
  perform set_config('request.jwt.claims', json_build_object('sub', o, 'role', 'authenticated')::text, true);
  execute 'set local role authenticated';
  select count(*) into n from public.groups;        checks := checks + 1; if n <> 0 then fails := fails || ' | O sees groups'; end if;
  select count(*) into n from public.group_members; checks := checks + 1; if n <> 0 then fails := fails || ' | O sees memberships'; end if;
  select count(*) into n from public.progress;      checks := checks + 1; if n <> 1 then fails := fails || ' | O sees ' || n || ' progress rows'; end if;
  select count(*) into n from public.certificates;  checks := checks + 1; if n <> 0 then fails := fails || ' | O sees certificates'; end if;
  select count(*) into n from public.assignments;   checks := checks + 1; if n <> 0 then fails := fails || ' | O sees assignments'; end if;
  select count(*) into n from public.attempts;      checks := checks + 1; if n <> 0 then fails := fails || ' | O sees attempts'; end if;
  update public.groups set name = 'x' where id = gid; get diagnostics n = row_count; checks := checks + 1; if n <> 0 then fails := fails || ' | O renamed the group'; end if;
  delete from public.group_members where group_id = gid; get diagnostics n = row_count; checks := checks + 1; if n <> 0 then fails := fails || ' | O removed members'; end if;
  delete from public.groups where id = gid; get diagnostics n = row_count; checks := checks + 1; if n <> 0 then fails := fails || ' | O deleted the group'; end if;
  begin insert into public.group_members (group_id, user_id) values (gid, o); fails := fails || ' | O joined without a code';
  exception when insufficient_privilege then null; end; checks := checks + 1;
  begin insert into public.certificates (user_id, track, name, score) values (o, 'beginner', 'Fake', 1); fails := fails || ' | O forged a certificate';
  exception when insufficient_privilege then null; end; checks := checks + 1;
  begin perform public.issue_certificate('beginner'); fails := fails || ' | O got a certificate without passing';
  exception when raise_exception then null; end; checks := checks + 1;
  begin perform public.join_group('WRONGCODE'); fails := fails || ' | wrong join code accepted';
  exception when raise_exception then null; end; checks := checks + 1;
  begin insert into public.groups (owner, name) values (t, 'spoof'); fails := fails || ' | O created a group as T';
  exception when insufficient_privilege then null; end; checks := checks + 1;
  begin insert into public.assignments (group_id, module) values (gid, 'beginner.m3'); fails := fails || ' | O added an assignment';
  exception when insufficient_privilege then null; end; checks := checks + 1;
  execute 'reset role';

  -- anon: can verify a certificate code, nothing else
  execute 'set local role anon';
  select count(*) into n from public.verify_certificate(lower(cid)); checks := checks + 1; if n <> 1 then fails := fails || ' | anon could not verify'; end if;
  select count(*) into n from public.certificates; checks := checks + 1; if n <> 0 then fails := fails || ' | anon sees certificates'; end if;
  select count(*) into n from public.groups;       checks := checks + 1; if n <> 0 then fails := fails || ' | anon sees groups'; end if;
  select count(*) into n from public.assignments;  checks := checks + 1; if n <> 0 then fails := fails || ' | anon sees assignments'; end if;
  begin select count(*) into n from public.attempts; if n <> 0 then fails := fails || ' | anon sees attempts'; end if;
  exception when insufficient_privilege then null; end; checks := checks + 1;
  execute 'reset role';

  -- M leaves: T loses access to M's progress
  perform set_config('request.jwt.claims', json_build_object('sub', m, 'role', 'authenticated')::text, true);
  execute 'set local role authenticated';
  delete from public.group_members where group_id = gid and user_id = m; get diagnostics n = row_count; checks := checks + 1; if n <> 1 then fails := fails || ' | M could not leave'; end if;
  execute 'reset role';
  perform set_config('request.jwt.claims', json_build_object('sub', t, 'role', 'authenticated')::text, true);
  execute 'set local role authenticated';
  select count(*) into n from public.progress; checks := checks + 1; if n <> 1 then fails := fails || ' | T still sees ' || n || ' progress rows after M left'; end if;
  select count(*) into n from public.attempts; checks := checks + 1; if n <> 0 then fails := fails || ' | T still sees attempts after M left'; end if;
  delete from public.assignments where group_id = gid; get diagnostics n = row_count; checks := checks + 1; if n <> 1 then fails := fails || ' | T could not remove the assignment'; end if;
  execute 'reset role';

  if fails = '' then raise exception 'ACCESS TEST PASSED: % checks (rolled back)', checks;
  else raise exception 'ACCESS TEST FAILED:%  (rolled back)', fails; end if;
end $$;
