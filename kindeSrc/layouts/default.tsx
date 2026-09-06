import React from "react";

const styles: {
  page: React.CSSProperties;
  card: React.CSSProperties;
  brand: React.CSSProperties;
  logo: React.CSSProperties;
  wordmark: React.CSSProperties;
  tagline: React.CSSProperties;
} = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
    background: "#ffffff",
    fontFamily:
      "Manrope, -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    color: "#221c33",
  },
  card: {
    width: "100%",
    maxWidth: "460px",
    background: "rgba(255, 255, 255, 0.72)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.65)",
    borderRadius: "24px",
    boxShadow:
      "0 24px 60px -20px rgba(46, 34, 84, 0.25), 0 4px 12px rgba(46, 34, 84, 0.06)",
    padding: "2.5rem 2.25rem",
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "1.75rem",
  },
  logo: {
    height: "56px",
    width: "auto",
    marginBottom: "0.5rem",
  },
  wordmark: {
    fontFamily: "Sora, sans-serif",
    fontWeight: 700,
    fontSize: "1.35rem",
    letterSpacing: "-0.02em",
    color: "#221c33",
    margin: 0,
  },
  tagline: {
    margin: "0.25rem 0 0",
    fontSize: "0.85rem",
    color: "#6b6480",
  },
};

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.brand}>
          <img
            src="https://rota.website/rota-mark.png"
            alt="Rota.Website logo"
            style={styles.logo}
          />
          <p style={styles.wordmark}>Rota.Website</p>
          <p style={styles.tagline}>Simple, fair staff rotas</p>
        </div>
        {props.children}
      </div>
    </div>
  );
};
