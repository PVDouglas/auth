# Rota.Website — Kinde Custom UI (React)

Branded sign-in, sign-up, password and verification pages served by Kinde's
"Customize with code" feature.

```
kindeSrc/
├── environment/pages/(kinde)/(default)/page.tsx   Auth page (all screens)
├── layouts/default.tsx                            Branded glass card shell
├── components/widget.tsx                          Heading + Kinde widget
├── styles/styles.ts                               Rota design tokens
└── root.tsx                                       HTML document root
kinde.json                                         Points Kinde at kindeSrc
package.json                                       @kinde/infrastructure + React 19
```

Branding: pearl background with a soft lavender wash, glass card,
Sora headings + Manrope body, midnight-aubergine (#3b2d5c) buttons,
logo loaded from https://rota.website/rota-mark.png.

## Deploy

1. Publish the **contents of this folder** as the root of a GitHub repo:

   ```bash
   git init && git add -A
   git commit -m "Rota.Website custom auth UI"
   git branch -M main
   git remote add origin git@github.com:<you>/rota-kinde-ui.git
   git push -u origin main
   ```

2. Kinde → **Design → Custom code → Connect repo** → pick the repo, branch `main`.
3. Pushes to `main` redeploy automatically.

Requires Kinde's Custom UI feature on your plan and your custom auth domain
(auth.rota.website) to be active.
