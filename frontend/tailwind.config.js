/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
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
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "99% 99%",
      },
      colors: {
        appbackground: "#ECBF91",
        searchbg: "#FAF5EE",
        mainbackground: "#F9EEE2",
        mainblack: "#4C453C",
        maingray: "#CAC2BA ",
      },
    },
  },
  variants: {},
  plugins: [],
};
