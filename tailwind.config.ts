import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brandYellow: "#FFC327",
        brandBlue: "#0A1A6F",
        brandDark: "#0A1A6F",
        brandBlueDeep: "#06124F",
        brandAccent: "#FFC327",
        brandAccentSoft: "#FFF1BF",
        brandAccentHover: "#FFD65C",
        brandLight: "#F8FAFC",
        brandText: "#1E293B"
      }
    }
  },
  plugins: []
};

export default config;
