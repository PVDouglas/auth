import React from "react";

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2.5rem 1.25rem",
    background: "#ffffff",
    fontFamily:
      "Manrope, -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    color: "#1c1c1c",
  },
  shell: {
    width: "100%",
    maxWidth: "27rem",
  },
  card: {
    borderRadius: "32px",
    background: "rgba(255, 255, 255, 0.72)",
    backdropFilter: "blur(22px) saturate(160%)",
    WebkitBackdropFilter: "blur(22px) saturate(160%)",
    border: "1px solid rgba(255, 255, 255, 0.6)",
    boxShadow: "0 24px 60px -24px rgba(20, 20, 25, 0.28)",
    padding: "1.9rem 1.6rem 1.6rem",
  },
  brand: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.75rem",
  },
  logo: {
    height: "56px",
    width: "auto",
    objectFit: "contain",
  },
  trust: {
    margin: "1.15rem 0 0",
    textAlign: "center",
    fontSize: "0.69rem",
    color: "#6b6b6b",
  },
};

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <div style={styles.page}>
      <div style={styles.shell}>
        <div style={styles.brand}>
          <img
            src="https://rota.website/rota-website-logo.png"
            alt="Rota.Website"
            style={styles.logo}
          />
        </div>
        <div style={styles.card}>{props.children}</div>
        <p style={styles.trust}>Biometric &middot; 2FA ready</p>
      </div>
    </div>
  );
};

