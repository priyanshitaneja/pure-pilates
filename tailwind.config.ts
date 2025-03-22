import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        cream: {
          50: "#F1F0E9",
        },
        sage: {
          600: "#41644A",
        },
        forest: {
          700: "#0D4715",
        },
        terracotta: "#b74503",
        olive: {
          50: "#fbfbf8",
          100: "#f3f4e8",
          200: "#e5e7cc",
          300: "#d0d4a7",
          400: "#b5bc7b",
          500: "#97a154",
          600: "#768241",
          700: "#5d6634",
          800: "#4b522b",
          900: "#3e4324",
        },
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        sand: {
          400: "#B0926A",
        },
      },
    },
  },
  plugins: [],
};

export default config; 