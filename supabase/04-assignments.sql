-- MC Academy — modules a trainer assigns to a group, with an optional due
-- date. Run after 03. Owners manage them; members can read them.
create table public.assignments (
  id         uuid primary key default gen_random_uuid(),
  group_id   uuid not null references public.groups (id) on delete cascade,
  module     text not null check (module ~ '^[a-z]{2,20}\.m[0-9]{1,2}$'), -- "<track>.<module>", e.g. beginner.m3
  due        date,
  created_at timestamptz not null default now(),
  unique (group_id, module)
);
alter table public.assignments enable row level security;

create policy "Owners and members read assignments" on public.assignments for select to authenticated
  using (private.owns_group(group_id) or private.is_member(group_id));
create policy "Owners add assignments" on public.assignments for insert to authenticated
  with check (private.owns_group(group_id));
create policy "Owners change assignments" on public.assignments for update to authenticated
  using (private.owns_group(group_id)) with check (private.owns_group(group_id));
create policy "Owners remove assignments" on public.assignments for delete to authenticated
  using (private.owns_group(group_id));
