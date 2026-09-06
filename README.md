# Rota.Website — Kinde custom UI

Branded sign-in, sign-up, password and verification pages served by Kinde, so
people never see a generic `.kinde.com` screen.

```
kinde-custom-ui/
├── pages/
│   ├── sign_in.html          Email step
│   ├── sign_up.html          Registration
│   ├── enter_password.html   Password step
│   ├── enter_code.html       Email OTP
│   ├── mfa.html              2FA challenge
│   └── reset_password.html   New password
├── styles/main.css           Rota design system (Sora + Manrope, glass card)
├── assets/rota-website-logo.png
└── kinde.json                Page → file map Kinde reads
```

Every page renders your layout and leaves `<div id="kinde-widget"></div>` for
Kinde to inject the real form into. All widget internals (inputs, OTP boxes,
buttons, errors) are styled through `[data-kinde-*]` hooks in `main.css`.

## 1. Put this folder in its own GitHub repo

Kinde connects to a repository, not a subfolder of one, so publish the
**contents** of `kinde-custom-ui/` as the root of a new repo:

```bash
cp -r kinde-custom-ui /tmp/rota-kinde-ui
cd /tmp/rota-kinde-ui
git init && git add -A && git commit -m "Rota.Website custom auth UI"
git branch -M main
git remote add origin git@github.com:<you>/rota-kinde-ui.git
git push -u origin main
```

## 2. Connect it in Kinde

Requires Custom UI on your Kinde plan.

1. Kinde → **Design → Customize with code**
2. **Connect repository** → authorise GitHub
3. Pick `rota-kinde-ui`, branch `main`
4. Save. Kinde builds and serves the pages on your auth domain.

Pushes to `main` redeploy automatically.

## 3. Custom domain (no `.kinde.com` in the address bar)

1. Kinde → **Settings → Domain management**
2. Add `auth.rota.website`
3. Add the CNAME records Kinde shows at your DNS provider
4. Wait for verification and SSL (usually minutes, up to 24h)

Then update the app so it talks to the custom domain:

```
VITE_KINDE_DOMAIN=https://auth.rota.website
```

in the front-end `.env`, and on the API side:

```
KINDE_DOMAIN=https://auth.rota.website
```

Both must match, or token issuer validation fails. Also re-add the callback
URL `https://rota.website/callback` under the Kinde application settings if it
isn't already there.

## 4. What already works on the app side

`src/lib/kinde.ts` already sends people to the hosted pages with PKCE and the
right intent, so nothing in the app changes when you switch on custom UI:

- `prompt=create` / `start_page=registration` → lands on `sign_up.html`
- `login_hint=<email>` → pre-fills the email on `sign_in.html`
- `prompt=login` → forces a fresh credential entry when "Keep me signed in" is off
- Password reset is triggered from Kinde's own link on `enter_password.html`
  and finishes on `reset_password.html`

## Local preview

The widget script only renders inside Kinde, but you can check layout and CSS:

```bash
cd kinde-custom-ui && python3 -m http.server 4321
# then open http://localhost:4321/pages/sign_in.html
```

## Notes

- Keep the `id="kinde-widget"` div — Kinde will not render without it.
- Fonts are loaded from Google Fonts; self-host them in `assets/` if you'd
  rather not have that third-party request on the auth domain.
- Colours are set once at the top of `main.css` as `--rota-*` variables.
