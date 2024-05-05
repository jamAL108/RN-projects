/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        base: "0px",
        "2xl": "1400px",
        tab: "788px",
        bl: "1016px",
      },
      colors: {
        border: "#E6E6E6",
        input: "#E6E6E6",
        ring: "#1A1A1A",
        background: "#09090B",
        foreground: "#F2F2F2",
        primary: {
          DEFAULT: "#1A1A1A",
          foreground: "#F2F2F2",
        },
        secondary: {
          DEFAULT: "#F2F2F2",
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "#993D4C",
          foreground: "#F2F2F2",
        },
        muted: {
          DEFAULT: "#F2F2F2",
          foreground: "#787878",
        },
        accent: {
          DEFAULT: "#F2F2F2",
          foreground: "#1A1A1A",
        },
        popover: {
          DEFAULT: "#F2F2F2",
          foreground: "#1A1A1A",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#F2F2F2",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [],
};
