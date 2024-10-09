/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3193FE", // Custom primary color
        secondary: "#F2F4F7", // Background color for inputs
        textGray: "#A0A9B4", // Text color
        darkGray: "#161619", // Dark text color
      },
    },
  },
  plugins: [],
};
