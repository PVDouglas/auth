"use server";

import React from "react";
import { getKindeWidget } from "@kinde/infrastructure";

const styles: {
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
} = {
  loginForm: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "Sora, sans-serif",
    fontWeight: 600,
    fontSize: "1.5rem",
    letterSpacing: "-0.02em",
    color: "#221c33",
    margin: "0 0 0.35rem",
  },
  description: {
    margin: "0 0 1.5rem",
    fontSize: "0.95rem",
    lineHeight: 1.55,
    color: "#6b6480",
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
