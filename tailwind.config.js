/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx, css}"],
  theme: {
    extend: {
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "40px",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "cursive"],
      },
      colors: {
        "dark-blue": "#182743",
        "light-blue": "#21779b",
      },
    },
  },
  safelist: [
    {
      pattern: /./,
    },
  ],
  plugins: [],
};
