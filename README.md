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
| `supabase/` | SQL migrations for the cloud-sync database |
| `tools/` | Build and check scripts (no dependencies, Node 22+) |

## Commands

```bash
node tools/build.mjs    # build script.js from src/ and syntax-check it
node tools/check.mjs    # content checks: answers, exercises, links, images, references
node tools/sweep.mjs    # browser sweep of every route at 375/768/1366 px (needs Edge or Chrome)
```

Run all three before pushing. When you change cached files, bump `VERSION` in
`sw.js` so returning visitors get the update.
