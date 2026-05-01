import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          dark: "#0a4a2e",
          mid: "#1a6b42",
          light: "#2e8b5a",
        },
        gold: {
          DEFAULT: "#c8a84b",
          light: "#e8c96a",
        },
        cream: "#faf7f2",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
