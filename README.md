# Rota.Website — Kinde custom UI

Structure Kinde expects (push these as the **repo root**):

```
kinde.json
package.json
tsconfig.json
kindeSrc/environment/pages/(kinde)/(default)/page.tsx
kindeSrc/environment/pages/(kinde)/(login)/page.tsx
kindeSrc/environment/pages/(kinde)/(register)/page.tsx
```

## Why the previous syncs failed

The first package used file imports that Kinde could not resolve:

- `import { AuthLayout } from "../../../components/AuthLayout"` (cross-folder import)
- `import styles from "../styles/main.css?inline"` (CSS import)
- `import logo from "../assets/rota-website-logo.png"` (binary asset import)

The second package then used the Node renderer entry point:

```tsx
import { renderToString } from "react-dom/server";
```

Kinde's runtime only supports the browser-safe server renderer. All three pages
now use the exact import shown in Kinde's official documentation and starters:

```tsx
import { renderToString } from "react-dom/server.browser";
```

They also include the required `"use server"` directive, accept a typed
`KindePageEvent`, use its locale and page title, and remain self-contained.

## Adding a logo image

If you want the PNG back, host it (e.g. `https://rota.website/logo.png`) and
replace the `<span className="auth-wordmark">` in each page with:

```tsx
<img src="https://rota.website/logo.png" alt="Rota.Website" />
```

## Import

1. Push the contents of this folder to a GitHub repo root (branch `main`).
2. Kinde → Design → Customize with code → connect the repo → Sync.

## Validation performed

- Compared against Kinde's official `custom-ui-splitscape` starter.
- Installed the declared dependency tree from the included lockfile.
- Compiled every `.tsx` file with TypeScript in strict mode with zero errors.
