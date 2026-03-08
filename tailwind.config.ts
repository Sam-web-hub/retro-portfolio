import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Courier Prime'", "Courier New", "monospace"],
        display: ["'Special Elite'", "serif"],
        body: ["'Spectral'", "Georgia", "serif"],
      },
      colors: {
        paper: "#f5f0e8",
        ink: "#1a1209",
        sepia: "#8b6914",
        rust: "#b84c1a",
        sage: "#5a7a5a",
        faded: "#c4b89a",
        stamp: "#d4451a",
      },
      animation: {
        "flicker": "flicker 4s infinite",
        "typewriter": "typewriter 3s steps(40) forwards",
        "cursor-blink": "cursor-blink 1s step-end infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.8" },
          "94%": { opacity: "1" },
          "96%": { opacity: "0.9" },
          "97%": { opacity: "1" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "cursor-blink": {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#1a1209" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
