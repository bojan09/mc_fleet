-- MC Academy — per-question attempts, for item analysis. Run after 05.
-- One row per answered question: who, which question, which option, right or
-- wrong, how long, when and where (lesson check, quiz, review, pre/post test).
--
-- Row-level security:
--   * learners add and read only their own attempts (no edits, no deletes);
--   * trainers read the attempts of members of groups they own (private.trains),
--     the same rule that lets them read members' progress;
--   * nobody else, anon included, sees anything.
-- Rows go when the account is deleted (on delete cascade).
--
-- Free-tier sizing: a row is about 100 bytes with its index entries. The app
-- sends at most one attempt per question per screen visit and keeps item_id,
-- context and chosen tiny, so 1,000 learners answering every question about
-- three times is roughly 650,000 rows, about 65 MB of the 500 MB free database.
-- prune_attempts() below removes rows older than 18 months; call it from the
-- SQL editor (or a scheduled job, if you add one) when space matters.

create table if not exists public.attempts (
  id          bigint generated always as identity primary key,
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  item_id     text not null check (char_length(item_id) between 3 and 80 and item_id ~ '^[a-z0-9.#_-]+$'),
  chosen      smallint not null check (chosen between 0 and 9),
  correct     boolean not null,
  ms          integer check (ms between 0 and 3600000),
  context     text not null check (context in ('lesson', 'quiz', 'review', 'platform', 'pre', 'post', 'other')),
  answered_at timestamptz not null default now() check (answered_at <= now() + interval '5 minutes')
);
create index if not exists attempts_user_idx on public.attempts (user_id, answered_at);
create index if not exists attempts_item_idx on public.attempts (item_id);

alter table public.attempts enable row level security;

drop policy if exists "Add own attempts" on public.attempts;
create policy "Add own attempts" on public.attempts for insert to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "Read own attempts" on public.attempts;
create policy "Read own attempts" on public.attempts for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Trainers read their members' attempts" on public.attempts;
create policy "Trainers read their members' attempts" on public.attempts for select to authenticated
  using (private.trains(user_id));

-- No update or delete policy: attempts are an append-only record.
revoke all on public.attempts from anon;
grant select, insert on public.attempts to authenticated;

-- Housekeeping for the free tier (run by the project owner, not the app).
create or replace function public.prune_attempts(keep interval default interval '18 months')
returns bigint language sql security definer set search_path = '' as $$
  with gone as (delete from public.attempts where answered_at < now() - keep returning 1)
  select count(*) from gone;
$$;
revoke all on function public.prune_attempts(interval) from public, anon, authenticated;
