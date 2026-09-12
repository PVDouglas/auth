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
    padding: "1rem 1rem 0",
    boxSizing: "border-box",
  },
  header: {
    width: "100%",
    maxWidth: "72rem",
    minHeight: "3.75rem",
    margin: "0 auto",
    padding: "0.625rem 0.75rem",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    border: "1px solid rgba(28, 28, 28, 0.09)",
    borderRadius: "999px",
    background: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(24px)",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    flexShrink: 0,
    textDecoration: "none",
    color: "#1c1c1c",
  },
  logo: {
    height: "2.5rem",
    width: "2.5rem",
    objectFit: "contain",
  },
  brandName: {
    color: "#1c1c1c",
    fontFamily: "Manrope, sans-serif",
    fontSize: "1.0625rem",
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: "-0.025em",
    whiteSpace: "nowrap",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
  },
  navLink: {
    padding: "0.375rem 0.75rem",
    color: "rgba(28, 28, 28, 0.68)",
    fontSize: "0.8125rem",
    fontWeight: 400,
    letterSpacing: "-0.01em",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "0.375rem",
    flexShrink: 0,
  },
  signIn: {
    padding: "0.375rem 0.875rem",
    color: "#1c1c1c",
    fontSize: "0.8125rem",
    fontWeight: 500,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  getStarted: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    padding: "0.375rem 0.875rem",
    borderRadius: "999px",
    background: "#1c1c1c",
    color: "#ffffff",
    fontSize: "0.8125rem",
    fontWeight: 500,
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
  ["About", "https://rota.website/about"],
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
              src="https://rota.website/rota-mark.png"
              alt=""
              aria-hidden="true"
              style={styles.logo}
            />
            <span style={styles.brandName}>Rota.Website</span>
          </a>
          <nav style={styles.nav} data-rota-nav aria-label="Main navigation">
            {navLinks.map(([label, href]) => (
              <a href={href} style={styles.navLink} key={label}>{label}</a>
            ))}
          </nav>
          <div style={styles.actions}>
            <a href="https://rota.website/login" style={styles.signIn} data-rota-sign-in>Sign in</a>
            <a href="https://rota.website/signup" style={styles.getStarted}>
              Get started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
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
        <span>© {new Date().getFullYear()} Rota.Website</span>
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

