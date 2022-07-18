/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1400px",
      xll: "1840px",
    },
    extend: {
      colors: {
        appbackground: "#ECBF91",
        searchbg: "#FAF5EE",
        mainbackground: "#F9EEE2",
        mainblack: "#4C453C",
        maingray: "#CAC2BA ",
      },
    },
  },
  plugins: [],
};
