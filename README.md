# Moirion Site

Static product site for `moirion.com`.

## Local development

```bash
npm install
npm run build
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173`.

## Notes

- `assets/og-image.png` now uses the branded logo social card, while `assets/hero-preview.png` keeps the product screenshot for the homepage hero
- Download buttons are intentionally placeholders until installer links are ready
- Auxtho main site should link here, but remain enterprise-first in tone

## Production hosting

Cloudflare Pages project `moirion` is the only production target. It owns:

- `https://moirion.com`
- `https://www.moirion.com`
- `https://moirion.pages.dev`

Firebase Hosting and GitHub Pages are not deployment targets. Do not restore
`.firebaserc`, `firebase.json`, or `CNAME`; those files can revive an older
site through a second hosting path.

Deploy only a clean committed `main` revision, then bind that exact commit to
the production Pages deployment:

```bash
npm ci
npm run build
npx --yes wrangler@4.133.0 pages deploy ./dist \
  --project-name moirion \
  --branch main \
  --commit-hash "$(git rev-parse HEAD)" \
  --commit-message "$(git log -1 --format=%s)" \
  --commit-dirty=false
```

After deployment, verify that the apex, `www`, `pages.dev`, and versioned
deployment all report the same `X-Moirion-Site-Release` response header and do
not contain `Preview 0315` or the retired direct macOS download.
