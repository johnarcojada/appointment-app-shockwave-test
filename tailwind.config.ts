import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FF630B",
        orange: {
          secondary: "#FF9447",
          light: "#FFE0CE",
          dark: "#FF630B",
          hover: "#e6590a",
          background: "#fff4ec",
        },
        gray: {
          "900": "#1C1C1E",
          "800": "#282829",
          "700": "#323234",
          "600": "#49494b",
          "500": "#8d8d8e",
          "400": "#9D9C9C",
          "300": "#D8D3CC",
          "200": "#f3f2f0",
          "100": "#F2F2F1",
        },
        purple: {
          primary: "#9747FF",
          secondary: "#eadaff",
          background: "#f4ecff",
        },
      },
      fontWeight: {
        regular: "300",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      spacing: {
        "2": ".125rem",
        "4": ".25rem",
        "6": ".375rem",
        "8": ".5rem",
        "10": "0.625rem",
        "12": ".75rem",
        "14": ".875rem",
        "16": "1rem",
        "18": "1.125rem",
        "20": "1.25rem",
        "24": "1.5rem",
        "28": "1.75rem",
        "32": "2rem",
        "36": "2.25rem",
        "40": "2.5rem",
        "48": "3rem",
        "52": "3.25rem",
        "56": "3.5rem",
        "60": "3.75rem",
        "64": "4rem",
        "72": "4.5rem",
        "80": "5rem",
        "92": "5.75rem",
        "96": "6rem",
        "112": "7rem",
        "116": "7.25rem",
        "120": "7.5rem",
        "128": "8rem",
        "160": "10rem",
        "240": "15rem",
        "100vh-116": "calc(100vh - 7.25rem)",
      },
      screens: {
        "md-lg": "900px",
        "lg-xl": "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
