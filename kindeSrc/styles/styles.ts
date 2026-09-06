// Rota.Website design tokens applied to Kinde's widget CSS variables.
// Palette: pearl background with a soft lavender wash, graphite-ink text,
// midnight-aubergine primary, restrained lavender accent.
const kindeVariables = {
  baseFontFamily:
    "Manrope, -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
  controlSelectTextBorderRadius: "12px",
  buttonPrimaryBackgroundColor: "#3b2d5c",
  buttonPrimaryColor: "#ffffff",
  buttonBorderRadius: "12px",
  buttonSecondaryBackgroundColor: "rgba(255, 255, 255, 0.8)",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#e2ddf0",
  buttonSecondaryBorderStyle: "solid",
  buttonSecondaryBorderRadius: "12px",
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

  body { margin: 0; }

  /* Inputs — readable text, refined borders */
  [data-kinde-control-text],
  [data-kinde-control-select-text] {
    border: 1px solid #e2ddf0 !important;
    border-radius: 12px !important;
    background: rgba(255, 255, 255, 0.9) !important;
    color: #221c33 !important;
    font-size: 0.95rem !important;
    padding: 0.75rem 0.9rem !important;
  }
  [data-kinde-control-text]::placeholder {
    color: #a49db8 !important;
  }
  [data-kinde-control-text]:focus,
  [data-kinde-control-select-text]:focus {
    border-color: #3b2d5c !important;
    box-shadow: 0 0 0 3px rgba(59, 45, 92, 0.12) !important;
    outline: none !important;
  }

  /* Labels */
  [data-kinde-control-label] {
    color: #4a4360 !important;
    font-weight: 600 !important;
    font-size: 0.85rem !important;
  }

  /* Primary button */
  [data-kinde-button-variant-primary] {
    background: #3b2d5c !important;
    color: #ffffff !important;
    font-weight: 600 !important;
    letter-spacing: 0.01em !important;
    transition: background 0.15s ease, transform 0.1s ease !important;
  }
  [data-kinde-button-variant-primary]:hover {
    background: #2f2449 !important;
  }

  /* Password visibility toggle — keep visible and clickable */
  [data-kinde-control-show-hide-button] {
    color: #6b6480 !important;
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
    border: 1px solid #e2ddf0 !important;
    border-radius: 12px !important;
    font-size: 1.35rem !important;
    text-align: center !important;
    color: #221c33 !important;
    background: rgba(255, 255, 255, 0.9) !important;
  }

  /* Links */
  [data-kinde-root] a {
    color: #3b2d5c !important;
  }

  /* Choice separator */
  [data-kinde-choice-separator] {
    text-transform: uppercase;
    color: #6b6480;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
  }

  /* Social auth buttons */
  [data-kinde-layout-auth-buttons] {
    display: flex;
    justify-content: center;
  }
  [data-kinde-layout-auth-buttons-item] {
    width: 3rem;
    height: 3rem;
  }

  /* Errors */
  [data-kinde-control-error-message] {
    color: #b3362b !important;
  }
`;
