-- MC Academy — trainer groups and verifiable certificates. Run after 02.
-- Helpers live in a schema the REST API does not expose.
create schema if not exists private;
grant usage on schema private to authenticated;

create or replace function private.gen_code(len int)
returns text language sql volatile set search_path = '' as $$
  select string_agg(substr('ABCDEFGHJKLMNPQRSTUVWXYZ23456789', (floor(random() * 32) + 1)::int, 1), '')
  from generate_series(1, len);
$$;

/* ---------- Trainer groups ---------- */
create table public.groups (
  id         uuid primary key default gen_random_uuid(),
  owner      uuid not null default auth.uid() references auth.users (id) on delete cascade,
  name       text not null check (char_length(name) between 1 and 80),
  join_code  text not null unique default private.gen_code(8),
  created_at timestamptz not null default now()
);
create table public.group_members (
  group_id     uuid not null references public.groups (id) on delete cascade,
  user_id      uuid not null references auth.users (id) on delete cascade,
  display_name text check (char_length(display_name) <= 80),
  joined_at    timestamptz not null default now(),
  primary key (group_id, user_id)
);
create index group_members_user_idx on public.group_members (user_id);
create index groups_owner_idx on public.groups (owner);

create or replace function private.owns_group(gid uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.groups where id = gid and owner = (select auth.uid()));
$$;
create or replace function private.is_member(gid uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.group_members where group_id = gid and user_id = (select auth.uid()));
$$;
create or replace function private.trains(uid uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.group_members gm join public.groups g on g.id = gm.group_id
                 where gm.user_id = uid and g.owner = (select auth.uid()));
$$;
revoke all on function private.owns_group(uuid), private.is_member(uuid), private.trains(uuid), private.gen_code(int) from public, anon;
grant execute on function private.owns_group(uuid), private.is_member(uuid), private.trains(uuid), private.gen_code(int) to authenticated;

alter table public.groups enable row level security;
alter table public.group_members enable row level security;

create policy "Owners and members read groups" on public.groups for select to authenticated
  using (owner = (select auth.uid()) or private.is_member(id));
create policy "Create own groups" on public.groups for insert to authenticated
  with check (owner = (select auth.uid()));
create policy "Owners rename groups" on public.groups for update to authenticated
  using (owner = (select auth.uid())) with check (owner = (select auth.uid()));
create policy "Owners delete groups" on public.groups for delete to authenticated
  using (owner = (select auth.uid()));

create policy "Members and owners read memberships" on public.group_members for select to authenticated
  using (user_id = (select auth.uid()) or private.owns_group(group_id));
create policy "Leave or remove members" on public.group_members for delete to authenticated
  using (user_id = (select auth.uid()) or private.owns_group(group_id));
-- Joining happens only through join_group(code).

create policy "Trainers read their members' progress" on public.progress for select to authenticated
  using (private.trains(user_id));

create or replace function public.join_group(p_code text)
returns table (group_id uuid, group_name text)
language plpgsql security definer set search_path = '' as $$
declare g record; nm text;
begin
  if auth.uid() is null then raise exception 'Not signed in'; end if;
  select id, name into g from public.groups where join_code = upper(trim(p_code));
  if not found then raise exception 'No group with that code'; end if;
  select coalesce(nullif(p.state->>'name', ''), u.raw_user_meta_data->>'full_name', u.email)
    into nm from auth.users u left join public.progress p on p.user_id = u.id where u.id = auth.uid();
  -- Name the constraint: the output column group_id would make (group_id, ...) ambiguous.
  insert into public.group_members as gm (group_id, user_id, display_name)
    values (g.id, auth.uid(), left(nm, 80))
    on conflict on constraint group_members_pkey do update set display_name = excluded.display_name;
  return query select g.id, g.name;
end;
$$;
revoke all on function public.join_group(text) from public, anon;
grant execute on function public.join_group(text) to authenticated;

/* ---------- Certificates ---------- */
create table public.certificates (
  id         text primary key default private.gen_code(10),
  user_id    uuid not null references auth.users (id) on delete cascade,
  track      text not null check (track ~ '^[a-z]{2,20}$'),
  name       text not null check (char_length(name) between 1 and 80),
  score      numeric not null check (score between 0 and 1),
  issued_at  timestamptz not null default now(),
  unique (user_id, track)
);
alter table public.certificates enable row level security;
create policy "Read own certificates" on public.certificates for select to authenticated
  using (user_id = (select auth.uid()));

-- Issues (or refreshes) the caller's certificate for a track, but only if the
-- caller's synced progress records the final as passed.
create or replace function public.issue_certificate(p_track text)
returns text language plpgsql security definer set search_path = '' as $$
declare f jsonb; nm text; cid text;
begin
  if auth.uid() is null then raise exception 'Not signed in'; end if;
  select p.state #> array['finals', p_track], coalesce(nullif(p.state->>'name', ''), u.raw_user_meta_data->>'full_name')
    into f, nm from public.progress p join auth.users u on u.id = p.user_id where p.user_id = auth.uid();
  if f is null or coalesce((f->>'passed')::boolean, false) = false then raise exception 'Final assessment not passed in synced progress'; end if;
  if nm is null then raise exception 'Add your name first'; end if;
  insert into public.certificates (user_id, track, name, score)
    values (auth.uid(), p_track, left(nm, 80), least(greatest((f->>'score')::numeric, 0), 1))
    on conflict (user_id, track) do update set name = excluded.name, score = greatest(public.certificates.score, excluded.score)
    returning id into cid;
  return cid;
end;
$$;
revoke all on function public.issue_certificate(text) from public, anon;
grant execute on function public.issue_certificate(text) to authenticated;

-- Public check of one certificate by its code (returns nothing for unknown codes).
create or replace function public.verify_certificate(p_code text)
returns table (name text, track text, score numeric, issued_at timestamptz)
language sql stable security definer set search_path = '' as $$
  select c.name, c.track, c.score, c.issued_at from public.certificates c where c.id = upper(trim(p_code));
$$;
revoke all on function public.verify_certificate(text) from public;
grant execute on function public.verify_certificate(text) to anon, authenticated;
