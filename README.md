# MC Academy

Maintenance Coordinator training academy: a static, framework-free web app
(HTML, CSS and vanilla JavaScript) with optional Google sign-in through
Supabase to sync progress. Hosted on Vercel: https://mcfleet-three.vercel.app

## Project layout

| Path | What it is |
| --- | --- |
| `index.html`, `styles.css`, `sw.js`, `manifest.webmanifest` | The app shell, styles, offline service worker and PWA manifest |
| `script.js` | **Built file — do not edit.** Generated from `src/`: engine, views and the track outline |
| `content/` | **Built files — do not edit.** Lesson text per track, loaded when a page needs it |
| `src/` | Source modules in file-name order. `01`–`03k` build the lessons (run at build time and split into `content/`); the rest are data, views and the engine |
| `img/library/` | Locally stored Visual Library photos (Wikimedia Commons, credited in the app) |
| `fonts/` | IBM Plex (SIL Open Font License, `fonts/OFL.txt`), Latin subset, self-hosted |
| `supabase/` | SQL migrations for the cloud-sync database, run in number order; `supabase/tests/access.sql` tests the access rules |
| `tools/` | Build and check scripts (no dependencies, Node 22+) |

## Commands

```bash
node tools/build.mjs    # build script.js from src/ and syntax-check it
node tools/check.mjs    # content checks: answers, exercises, links, images, references
node tools/sweep.mjs    # every route at 375/768/1366 px: layout, headings, accessibility, contrast (needs Edge or Chrome)
node tools/perf.mjs     # first-visit timing on a throttled phone (slow 4G, 4x CPU); optional: runs, start route
node tools/update-test.mjs  # new release: open page offers a reload, new cache used
node tools/trainer-test.mjs # signed-in screens (groups, assignments, CSV) with a fake Supabase
node tools/review-test.mjs  # spaced review schedule (1, 3, 7 days) with a simulated clock
node tools/sims-test.mjs    # DVIR, core charge and warranty simulations grade right and wrong answers
node tools/merge-test.mjs   # two-device sync: newest change wins, removals and resets stick
node tools/split-test.mjs   # on-demand lesson text: every page renders as with one bundle; offline works
```

Run the build, check and sweep before pushing. The build stamps content hashes
into `index.html` (`script.js?v=…`, `styles.css?v=…`) and `sw.js` (`VERSION`, a
hash of every file it precaches), so each release gets its own offline cache and
open pages offer a reload. No manual version bump is needed.

Software & Platforms facts (`src/03l-software.js`) are re-checked against the
official sources every quarter; `tools/check.mjs` warns when a platform's
`checked` month is 3 or more months old.

After changing the database (`supabase/`), run `supabase/tests/access.sql` in the
Supabase SQL editor. It acts as a pretend trainer, trainee and outsider, then
rolls everything back; the error message it ends with is the result
(`ACCESS TEST PASSED: <n> checks` or `ACCESS TEST FAILED: …`).
