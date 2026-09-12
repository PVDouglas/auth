"use server";

import React from "react";
import { getKindeWidget } from "@kinde/infrastructure";

const styles: Record<string, React.CSSProperties> = {
  loginForm: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "Sora, sans-serif",
    fontWeight: 600,
    fontSize: "2rem",
    letterSpacing: "0",
    textAlign: "center",
    color: "#1c1c1c",
    margin: "0 0 0.6rem",
  },
  description: {
    margin: "0 auto 2.25rem",
    maxWidth: "19rem",
    textAlign: "center",
    fontSize: "0.92rem",
    lineHeight: 1.5,
    color: "#6b6b6b",
  },
};

export const Widget = (props: { heading: string; description: string }) => {
  return (
    <main style={styles.loginForm}>
      <h2 style={styles.heading}>{props.heading}</h2>
      <p style={styles.description}>{props.description}</p>
      {getKindeWidget()}
    </main>
  );
};

