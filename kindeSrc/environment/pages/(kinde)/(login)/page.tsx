"use server";

import React from "react";
import { renderToString } from "react-dom/server.browser";
import {
  type KindePageEvent,
  getKindeCSRF,
  getKindeNonce,
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeWidget,
} from "@kinde/infrastructure";

/**
 * Rota.Website — Kinde custom UI (login).
 * Self-contained on purpose: Kinde's page compiler resolves each page file on
 * its own, so there are no cross-folder imports, no CSS imports and no binary
 * asset imports here. Everything the page needs lives in this file.
 */

const styles = `/* ---------------------------------------------------------------------------
   Rota.Website — Kinde custom UI stylesheet.
   Mirrors the app's design system: pearl background, frosted glass card,
   graphite-ink primary, Sora display + Manrope body.
   --------------------------------------------------------------------------- */

:root {
  --rota-bg: #fafafa;
  --rota-ink: #1c1c1c;
  --rota-ink-soft: #6b6b6b;
  --rota-line: rgba(28, 28, 28, 0.1);
  --rota-card: rgba(255, 255, 255, 0.72);
  --rota-primary: #1c1c1c;
  --rota-primary-ink: #ffffff;
  --rota-danger: #d1435b;
  --rota-radius: 14px;
  --rota-radius-lg: 32px;
  --rota-font-display: "Sora", ui-sans-serif, system-ui, sans-serif;
  --rota-font-body: "Manrope", ui-sans-serif, system-ui, sans-serif;
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
}

body.rota-auth-bg {
  font-family: var(--rota-font-body);
  color: var(--rota-ink);
  background:
    radial-gradient(42rem 42rem at 88% -12%, rgba(190, 205, 230, 0.45), transparent 60%),
    radial-gradient(38rem 38rem at -10% 110%, rgba(214, 205, 230, 0.4), transparent 60%),
    var(--rota-bg);
  display: grid;
  place-items: center;
  padding: 40px 20px;
  -webkit-font-smoothing: antialiased;
}

/* --- Card ---------------------------------------------------------------- */

.auth-shell { width: 100%; max-width: 27rem; }

.auth-brand {
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
}

.auth-brand img { height: 56px; width: auto; object-fit: contain; }

.auth-card {
  border-radius: var(--rota-radius-lg);
  background: var(--rota-card);
  backdrop-filter: blur(22px) saturate(160%);
  -webkit-backdrop-filter: blur(22px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 24px 60px -24px rgba(20, 20, 25, 0.28);
  padding: 30px 26px 26px;
}

.auth-eyebrow {
  margin: 0;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--rota-ink-soft);
}

.auth-card h1,
.auth-card h2 {
  font-family: var(--rota-font-display);
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 6px 0 0;
}

.auth-sub {
  margin: 8px 0 22px;
  text-align: center;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--rota-ink-soft);
}

.auth-foot {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid var(--rota-line);
  text-align: center;
  font-size: 11.5px;
  color: var(--rota-ink-soft);
}

.auth-foot a { color: var(--rota-ink); font-weight: 500; text-decoration: none; }
.auth-foot a:hover { text-decoration: underline; }

.auth-trust {
  margin-top: 18px;
  text-align: center;
  font-size: 11px;
  color: var(--rota-ink-soft);
}

/* --- Kinde widget hooks --------------------------------------------------- */

[data-kinde-widget] {
  font-family: var(--rota-font-body);
  color: var(--rota-ink);
}

[data-kinde-text],
[data-kinde-label] {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--rota-ink-soft);
}

[data-kinde-input],
[data-kinde-input-text],
[data-kinde-input-email],
[data-kinde-input-password] {
  width: 100%;
  border: 1px solid var(--rota-line);
  border-radius: var(--rota-radius);
  background: rgba(255, 255, 255, 0.7);
  padding: 11px 14px;
  font-family: inherit;
  font-size: 13.5px;
  color: var(--rota-ink);
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
}

[data-kinde-input]:focus,
[data-kinde-input-text]:focus,
[data-kinde-input-email]:focus,
[data-kinde-input-password]:focus {
  outline: none;
  background: #fff;
  border-color: rgba(28, 28, 28, 0.35);
  box-shadow: 0 0 0 4px rgba(28, 28, 28, 0.08);
}

[data-kinde-input-otp] {
  border: 1px solid var(--rota-line);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.75);
  font-family: var(--rota-font-display);
  font-size: 1.35rem;
  font-weight: 600;
  text-align: center;
  width: 3rem;
  height: 3.25rem;
}

[data-kinde-input-otp]:focus {
  outline: none;
  border-color: rgba(28, 28, 28, 0.4);
  box-shadow: 0 0 0 4px rgba(28, 28, 28, 0.08);
}

[data-kinde-button-primary],
[data-kinde-button][data-kinde-variant="primary"] {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--rota-primary);
  color: var(--rota-primary-ink);
  border: 0;
  border-radius: var(--rota-radius);
  padding: 12px 22px;
  font-family: inherit;
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 10px 22px -12px rgba(20, 20, 25, 0.7);
  transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
}

[data-kinde-button-primary]:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 34px -16px rgba(20, 20, 25, 0.7);
}

[data-kinde-button-primary]:disabled { opacity: 0.6; transform: none; cursor: default; }

[data-kinde-button-secondary],
[data-kinde-button][data-kinde-variant="secondary"] {
  width: 100%;
  border: 1px solid var(--rota-line);
  background: rgba(255, 255, 255, 0.6);
  color: var(--rota-ink);
  border-radius: var(--rota-radius);
  padding: 11px 22px;
  font-family: inherit;
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
}

[data-kinde-button-secondary]:hover { background: #fff; }

[data-kinde-link],
[data-kinde-widget] a {
  color: var(--rota-ink);
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
}

[data-kinde-link]:hover { text-decoration: underline; }

[data-kinde-error],
[data-kinde-error-message] {
  border: 1px solid rgba(209, 67, 91, 0.22);
  background: rgba(209, 67, 91, 0.07);
  color: var(--rota-danger);
  border-radius: var(--rota-radius);
  padding: 10px 13px;
  font-size: 12.5px;
}

[data-kinde-divider] {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--rota-ink-soft);
}

[data-kinde-divider]::before,
[data-kinde-divider]::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--rota-line);
}

[data-kinde-social-button] {
  width: 100%;
  border: 1px solid var(--rota-line);
  background: rgba(255, 255, 255, 0.7);
  border-radius: var(--rota-radius);
  padding: 11px 18px;
  font-family: inherit;
  font-size: 13.5px;
  cursor: pointer;
}

[data-kinde-social-button]:hover { background: #fff; }

/* Kinde stacks fields in the widget root — give them consistent rhythm. */
[data-kinde-widget] > * + * { margin-top: 14px; }

@media (max-width: 420px) {
  .auth-card { padding: 24px 18px 20px; border-radius: 24px; }
  .auth-card h1, .auth-card h2 { font-size: 23px; }
}

.auth-wordmark {
  font-family: var(--rota-font-display);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--rota-ink);
}

/* --- Rota polish: style the real widget markup, not just data-hooks -------- */

#kinde-widget label,
#kinde-widget [data-kinde-label] {
  display: block;
  margin-bottom: 6px;
  font-family: var(--rota-font-body);
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--rota-ink-soft);
}

#kinde-widget input:not([type="checkbox"]):not([type="radio"]),
#kinde-widget select {
  width: 100%;
  border: 1px solid var(--rota-line);
  border-radius: var(--rota-radius);
  background: rgba(255, 255, 255, 0.78);
  padding: 13px 15px;
  font-family: var(--rota-font-body);
  font-size: 14px;
  color: var(--rota-ink);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
}

#kinde-widget input:focus {
  outline: none;
  background: #fff;
  border-color: rgba(28, 28, 28, .35);
  box-shadow: 0 0 0 4px rgba(28, 28, 28, .08);
}

#kinde-widget button,
#kinde-widget [type="submit"] {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  border-radius: 999px;               /* pill, like the app */
  background: var(--rota-primary);
  color: var(--rota-primary-ink);
  padding: 14px 22px;
  font-family: var(--rota-font-body);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 12px 26px -14px rgba(20, 20, 25, .75);
  transition: transform .15s ease, box-shadow .15s ease;
}

#kinde-widget button:hover { transform: translateY(-1px); box-shadow: 0 20px 36px -18px rgba(20,20,25,.75); }
#kinde-widget button:disabled { opacity: .55; transform: none; cursor: default; }

/* secondary / social buttons keep the light treatment */
#kinde-widget button[type="button"],
#kinde-widget a[role="button"] {
  background: rgba(255, 255, 255, .7);
  color: var(--rota-ink);
  border: 1px solid var(--rota-line);
  box-shadow: none;
  font-weight: 500;
}

#kinde-widget fieldset { border: 0; margin: 0; padding: 0; }
#kinde-widget > form > * + * { margin-top: 16px; }
`;

const Page = async ({ context, request }: KindePageEvent): Promise<string> =>
  renderToString(
    <html lang={request.locale.lang} dir={request.locale.isRtl ? "rtl" : "ltr"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta name="csrf-token" content={getKindeCSRF()} />
        <title>{context.widget.content.pageTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600&family=Manrope:wght@400;500;600&display=swap"
        />
        {getKindeRequiredCSS()}
        <style nonce={getKindeNonce()} dangerouslySetInnerHTML={{ __html: styles }} />
      </head>
      <body className="rota-auth-bg">
        <main className="auth-shell">
          <div className="auth-brand">
            <span className="auth-wordmark">Rota.Website</span>
          </div>

          <div className="auth-card">
            <p className="auth-eyebrow">Sign in</p>
            <h1>Welcome back</h1>
            <p className="auth-sub">Enter your email address to continue to your rota.</p>

            <div id="kinde-widget">{getKindeWidget()}</div>

            <div className="auth-foot">New to Rota.Website? <a href="https://rota.website/signup">Create an account</a></div>
          </div>

          <p className="auth-trust">Biometric &amp; 2FA ready · UK data · Secured by Kinde</p>
        </main>
        {getKindeRequiredJS()}
      </body>
    </html>,
  );

export default Page;
