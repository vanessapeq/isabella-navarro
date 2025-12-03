import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        "navy-azulejo": "#1F3C88",
        terracotta: "#C96A4A",
        "navy-soft": "#E4E9F7",
        "terracotta-soft": "#F6E3DB"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-dm-serif)", "serif"],
        grotesk: ["var(--font-space-grotesk)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};

export default config;


