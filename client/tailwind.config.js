import { rgba } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "portfolio-accent": "#35b7f3",
        "portfolio-text-muted": "#9ea3ae",
        "text-portfolio":"#f3f4f6"
      },
    },
  },
  plugins: [],
};
