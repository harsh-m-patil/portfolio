/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3238f2",
        dark: "#0E131F",
        darkOrange: "#3E2200",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        slideInTop: {
          "0%": { transform: "translateY(20%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        in: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        slideInTop: "slideInTop 600ms ease-in",
        in: "in 600ms ease-in",
        hover: "in 300ms ease-in",
      },
    },
  },
  plugins: [],
};
