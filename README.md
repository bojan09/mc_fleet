# MC Academy

Maintenance Coordinator training academy: a static, framework-free web app
(HTML, CSS and vanilla JavaScript) with optional Google sign-in through
Supabase to sync progress. Hosted on Vercel: https://mcfleet-three.vercel.app

## Project layout

| Path | What it is |
| --- | --- |
| `index.html`, `styles.css`, `sw.js`, `manifest.webmanifest` | The app shell, styles, offline service worker and PWA manifest |
| `script.js` | **Built file — do not edit.** Generated from `src/` |
| `src/` | Source modules, concatenated in file-name order (content first, engine last) |
| `img/library/` | Locally stored Visual Library photos (Wikimedia Commons, credited in the app) |
| `fonts/` | IBM Plex (SIL Open Font License, `fonts/OFL.txt`), Latin subset, self-hosted |
| `supabase/` | SQL migrations for the cloud-sync database |
| `tools/` | Build and check scripts (no dependencies, Node 22+) |

## Commands

```bash
node tools/build.mjs    # build script.js from src/ and syntax-check it
node tools/check.mjs    # content checks: answers, exercises, links, images, references
node tools/sweep.mjs    # browser sweep of every route at 375/768/1366 px (needs Edge or Chrome)
node tools/perf.mjs     # first-visit timing on a throttled phone (slow 4G, 4x CPU)
node tools/update-test.mjs  # new release: open page offers a reload, new cache used
node tools/trainer-test.mjs # signed-in screens (groups, assignments, CSV) with a fake Supabase
```

Run the build, check and sweep before pushing. The build stamps content hashes
into `index.html` (`script.js?v=…`, `styles.css?v=…`) and `sw.js` (`VERSION`, a
hash of every file it precaches), so each release gets its own offline cache and
open pages offer a reload. No manual version bump is needed.
