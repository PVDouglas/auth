// Rota.Website design tokens applied to Kinde's widget CSS variables.
// Matches the app's own sign-in screen: white/pearl background, frosted card,
// graphite-ink primary buttons, Sora display + Manrope body.
const kindeVariables = {
  baseFontFamily:
    "Manrope, -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
  controlSelectTextBorderRadius: "16px",
  buttonPrimaryBackgroundColor: "#1c1c1c",
  buttonPrimaryColor: "#ffffff",
  buttonBorderRadius: "16px",
  buttonSecondaryBackgroundColor: "rgba(255, 255, 255, 0.7)",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "rgba(28, 28, 28, 0.1)",
  buttonSecondaryBorderStyle: "solid",
  buttonSecondaryBorderRadius: "16px",
} as const;

export const getStyles = (): string => `
  :root {
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-control-select-text-border-radius: ${kindeVariables.controlSelectTextBorderRadius};
    --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
    --kinde-button-secondary-background-color: ${kindeVariables.buttonSecondaryBackgroundColor};
    --kinde-button-secondary-border-width: ${kindeVariables.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-color: ${kindeVariables.buttonSecondaryBorderColor};
    --kinde-button-secondary-border-style: ${kindeVariables.buttonSecondaryBorderStyle};
    --kinde-button-secondary-border-radius: ${kindeVariables.buttonSecondaryBorderRadius};
  }

  * { box-sizing: border-box; }
  body { margin: 0; background: #f9faff; }

  [data-kinde-root] { min-height: 100vh; }

  /* Inputs — readable text, refined borders */
  [data-kinde-control-text],
  [data-kinde-control-select-text] {
    border: 1px solid rgba(28, 28, 28, 0.1) !important;
    border-radius: 16px !important;
    background: #f9fafb !important;
    color: #1c1c1c !important;
    font-size: 0.95rem !important;
    min-height: 3.25rem !important;
    padding: 0.85rem 1rem !important;
  }
  [data-kinde-control-text]::placeholder {
    color: rgba(28, 28, 28, 0.35) !important;
  }
  [data-kinde-control-text]:focus,
  [data-kinde-control-select-text]:focus {
    border-color: rgba(28, 28, 28, 0.35) !important;
    background: #ffffff !important;
    box-shadow: 0 0 0 4px rgba(28, 28, 28, 0.08) !important;
    outline: none !important;
  }

  /* Labels */
  [data-kinde-control-label] {
    color: #6b6b6b !important;
    font-weight: 600 !important;
    font-size: 0.72rem !important;
    letter-spacing: 0.13em !important;
    text-transform: uppercase !important;
  }

  /* Primary button */
  [data-kinde-button-variant-primary] {
    background: #1c1c1c !important;
    color: #ffffff !important;
    font-weight: 500 !important;
    font-size: 0.95rem !important;
    min-height: 3.25rem !important;
    padding: 0.85rem 1.4rem !important;
    box-shadow: 0 10px 22px -12px rgba(20, 20, 25, 0.7) !important;
    transition: background 0.15s ease, transform 0.15s ease !important;
  }
  [data-kinde-button-variant-primary]:hover {
    background: #000000 !important;
    transform: translateY(-1px);
  }

  /* Password visibility toggle — keep visible and clickable */
  [data-kinde-control-show-hide-button] {
    color: #6b6b6b !important;
    display: inline-flex !important;
    align-items: center !important;
  }

  /* OTP code boxes — rounded, evenly sized */
  [data-kinde-control-code] {
    display: flex !important;
    gap: 0.5rem !important;
    justify-content: center !important;
  }
  [data-kinde-control-code-character] {
    width: 3rem !important;
    height: 3.25rem !important;
    border: 1px solid rgba(28, 28, 28, 0.1) !important;
    border-radius: 12px !important;
    font-family: Sora, sans-serif !important;
    font-size: 1.35rem !important;
    text-align: center !important;
    color: #1c1c1c !important;
    background: rgba(255, 255, 255, 0.75) !important;
  }

  /* Links */
  [data-kinde-root] main a {
    color: #1c1c1c !important;
    font-weight: 500 !important;
  }


  /* Choice separator */
  [data-kinde-choice-separator] {
    text-transform: uppercase;
    color: #6b6b6b;
    font-size: 0.7rem;
    letter-spacing: 0.14em;
  }


  /* Social auth buttons */
  [data-kinde-layout-auth-buttons] {
    display: flex;
    justify-content: center;
    gap: 1rem !important;
  }
  [data-kinde-layout-auth-buttons-item] {
    width: 3.25rem;
    height: 3.25rem;
  }

  [data-kinde-button-variant-secondary] {
    border-radius: 16px !important;
    box-shadow: 0 5px 14px -12px rgba(20, 20, 25, 0.45) !important;
  }

  /* Errors */
  [data-kinde-control-error-message] {
    color: #b3362b !important;
  }

  @media (max-width: 980px) {
    [data-rota-nav] { display: none !important; }
  }

  @media (max-width: 560px) {
    [data-rota-header] { min-height: 3.5rem !important; }
    [data-rota-sign-in] { display: none !important; }
    [data-rota-footer] {
      align-items: flex-start !important;
      flex-direction: column !important;
      gap: 1.5rem !important;
    }
    [data-rota-footer-links] { justify-content: flex-start !important; }
  }
`;
