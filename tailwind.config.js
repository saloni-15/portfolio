/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        // transparent: 'transparent',
        // current: 'currentColor',
        // 'white': '#ffffff',
        // 'purple': '#3f3cbb',
        // 'midnight': '#121063',
        // 'metal': '#565584',
        // 'tahiti': '#3ab7bf',
        // 'silver': '#ecebff',
        // 'bubble-gum': '#ff77e9',
        // 'bermuda': '#78dcca',
        'dark-blue': '#182743',
        'light-blue': '#21779b'
      },
    },
  },
  plugins: [],
};
