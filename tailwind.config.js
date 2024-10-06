/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        gray: {
          700: "#2C3441",
          800: "#19212c",
          900: "#0e131f",
        },
      },
    },
  },
  plugins: [],
};
