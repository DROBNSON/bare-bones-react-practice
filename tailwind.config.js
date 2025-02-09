/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0654f4",
      },
      fontSize: {
        xxxl: '12rem'
      }

    },
  },
  plugins: [],
};

