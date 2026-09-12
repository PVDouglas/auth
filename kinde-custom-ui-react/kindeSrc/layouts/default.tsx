import React from "react";

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#f9faff",
    fontFamily:
      "Manrope, -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    color: "#1c1c1c",
  },
  headerWrap: {
    width: "100%",
    padding: "1.5rem",
    boxSizing: "border-box",
  },
  header: {
    width: "100%",
    maxWidth: "80rem",
    minHeight: "4.25rem",
    margin: "0 auto",
    padding: "0.55rem 0.7rem 0.55rem 1rem",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1.25rem",
    border: "1px solid rgba(28, 28, 28, 0.09)",
    borderRadius: "999px",
    background: "rgba(255, 255, 255, 0.72)",
    boxShadow: "0 8px 28px -24px rgba(18, 18, 24, 0.32)",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    textDecoration: "none",
  },
  logo: {
    height: "3.15rem",
    width: "auto",
    maxWidth: "13.5rem",
    objectFit: "contain",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
  },
  navLink: {
    padding: "0.55rem 0.7rem",
    color: "rgba(28, 28, 28, 0.68)",
    fontSize: "0.81rem",
    fontWeight: 500,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    flexShrink: 0,
  },
  signIn: {
    padding: "0.65rem 0.85rem",
    color: "#1c1c1c",
    fontSize: "0.81rem",
    fontWeight: 600,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  getStarted: {
    padding: "0.72rem 1.1rem",
    borderRadius: "999px",
    background: "#1c1c1c",
    color: "#ffffff",
    fontSize: "0.81rem",
    fontWeight: 600,
    textDecoration: "none",
    whiteSpace: "nowrap",
    boxShadow: "0 8px 18px -12px rgba(20, 20, 25, 0.8)",
  },
  main: {
    width: "100%",
    flex: "1 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3.75rem 1.5rem 5rem",
    boxSizing: "border-box",
  },
  shell: {
    width: "100%",
    maxWidth: "28.75rem",
  },
  card: {
    borderRadius: "32px",
    background: "rgba(255, 255, 255, 0.94)",
    border: "1px solid rgba(28, 28, 28, 0.07)",
    boxShadow: "0 20px 60px -20px rgba(20, 20, 25, 0.16), 0 8px 30px -18px rgba(20, 20, 25, 0.12)",
    padding: "3rem 3.5rem 3.25rem",
  },
  trust: {
    margin: "2rem 0 0",
    textAlign: "center",
    fontSize: "0.8rem",
    color: "#6b6b6b",
  },
  footer: {
    width: "100%",
    maxWidth: "80rem",
    margin: "0 auto",
    padding: "2.5rem 1.5rem",
    boxSizing: "border-box",
    borderTop: "1px solid rgba(28, 28, 28, 0.09)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    color: "#6b6b6b",
    fontSize: "0.8rem",
  },
  footerLinks: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "2rem",
  },
  footerLink: {
    color: "#6b6b6b",
    textDecoration: "none",
  },
};

const navLinks = [
  ["Features", "https://rota.website/#features"],
  ["Product", "https://rota.website/#showcase"],
  ["Pricing", "https://rota.website/#pricing"],
  ["FAQ", "https://rota.website/#faq"],
  ["Demo", "https://rota.website/login?mode=demo"],
  ["Corporate", "https://rota.website/corporate"],
  ["Support", "https://rota.website/support"],
  ["Contact", "https://rota.website/contact"],
] as const;

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <div style={styles.page}>
      <div style={styles.headerWrap}>
        <header style={styles.header} data-rota-header>
          <a href="https://rota.website/" style={styles.brand} aria-label="Rota.Website home">
          <img
            src="https://rota.website/rota-website-logo.png"
            alt="Rota.Website"
            style={styles.logo}
          />
          </a>
          <nav style={styles.nav} data-rota-nav aria-label="Main navigation">
            {navLinks.map(([label, href]) => (
              <a href={href} style={styles.navLink} key={label}>{label}</a>
            ))}
          </nav>
          <div style={styles.actions}>
            <a href="https://rota.website/login" style={styles.signIn} data-rota-sign-in>Sign in</a>
            <a href="https://rota.website/signup" style={styles.getStarted}>Get started&nbsp; →</a>
          </div>
        </header>
      </div>

      <main style={styles.main}>
        <div style={styles.shell}>
          <div style={styles.card}>{props.children}</div>
          <p style={styles.trust}>Biometric &middot; 2FA ready &middot; Secured by Kinde</p>
        </div>
      </main>

      <footer style={styles.footer} data-rota-footer>
        <span>© {new Date().getFullYear()} Rota.Website — Operated as a UK sole trader.</span>
        <div style={styles.footerLinks}>
          <a href="https://rota.website/security" style={styles.footerLink}>Security</a>
          <a href="https://rota.website/privacy" style={styles.footerLink}>Privacy</a>
          <a href="https://rota.website/terms" style={styles.footerLink}>Terms</a>
          <a href="https://rota.website/cookies" style={styles.footerLink}>Cookies</a>
        </div>
      </footer>
    </div>
  );
};

