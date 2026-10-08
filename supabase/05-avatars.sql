-- MC Academy — profile pictures. Run after 04-assignments.sql.
-- A public "avatars" bucket: anyone with the link can view a picture (it is
-- shown in the app), but each signed-in user can only add, replace or delete
-- files inside their own folder: avatars/<user id>/...
-- The app resizes pictures to 256×256 in the browser before uploading.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('avatars', 'avatars', true, 524288, array['image/webp', 'image/jpeg', 'image/png'])
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Upload own avatar" on storage.objects;
create policy "Upload own avatar" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);

drop policy if exists "Update own avatar" on storage.objects;
create policy "Update own avatar" on storage.objects
  for update to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text)
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);

drop policy if exists "Delete own avatar" on storage.objects;
create policy "Delete own avatar" on storage.objects
  for delete to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);

-- Upsert (replace) needs to read the existing row, so owners can select their own files.
-- Public URLs of a public bucket are served without this policy.
drop policy if exists "Read own avatar" on storage.objects;
create policy "Read own avatar" on storage.objects
  for select to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);
