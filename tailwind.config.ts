import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    fontFamily: { sans: ["var(--font-archivo)", "sans-serif"], mono: ["var(--font-ibm-plex-mono)", "monospace"] },
    colors: {
      ink: "#16211D", ink2: "#1C2A24", paper: "#F3F5F2", app: "#F1EFEA",
      "plan-green": "#0F4C3A", "plan-green-deep": "#0A362A", "green-soft": "#E1EAE4",
      "plan-orange": "#E4572E", "orange-soft": "#FBEAE2", border: "#DCE2DD",
      muted: "#5C6B63", "plan-red": "#A9442F", "red-soft": "#F6E7E3"
    },
    boxShadow: {
      card: "0 1px 2px rgba(15,23,19,0.05), 0 8px 24px -8px rgba(15,23,19,0.12)",
      "card-lg": "0 2px 4px rgba(15,23,19,0.06), 0 16px 40px -12px rgba(15,23,19,0.20)",
      pop: "0 4px 12px -2px rgba(15,23,19,0.14), 0 1px 2px rgba(15,23,19,0.07)",
      fab: "0 10px 24px -4px rgba(10,54,42,0.5), 0 2px 6px rgba(10,54,35,0.35)",
      neu: "8px 8px 20px rgba(15,23,19,0.08), -8px -8px 20px rgba(255,255,255,0.7)",
      "neu-inset": "inset 4px 4px 10px rgba(15,23,19,0.07), inset -4px -4px 10px rgba(255,255,255,0.6)",
      glass: "0 8px 32px rgba(15,23,19,0.10), inset 0 1px 0 rgba(255,255,255,0.4)"
    }
  }},
  plugins: []
};
export default config;
