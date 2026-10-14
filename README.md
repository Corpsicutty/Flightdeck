# Flight Deck

Single-page disc golf bag tracker (`Flight_Deck_Fixed.html` is the source file).

## Run locally

```bash
python -m http.server 8765
```

Open [http://127.0.0.1:8765/Flight_Deck_Fixed.html](http://127.0.0.1:8765/Flight_Deck_Fixed.html)

Or: `npm run build` then open `/index.html` on the same server.

## Deploy on Vercel

1. Import the GitHub repo in [Vercel](https://vercel.com/new).
2. **Framework Preset:** Other (not Next.js).
3. **Root Directory:** leave blank (repository root).
4. **Build Command:** `npm run build` (default from `vercel.json`).
5. **Output Directory:** `.` (repository root).
6. Deploy. The app is served at `/` (`index.html` is generated from `Flight_Deck_Fixed.html` on each build).

Map control icons live in `/icons/` and must stay in the repo next to the HTML.

If the site looks wrong after a deploy, hard-refresh or open an incognito window — the HTML is set to revalidate on each visit.
