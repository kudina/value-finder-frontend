/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      GeorgiaRegular: ["GeorgiaRegular"],
      GeorgiaSemiBold: ["GeorgiaSemiBold"],
      GeorgiaBold: ["GeorgiaBold"],
      RubikRegular: ["RubikRegular"],
      RubikSemiBold: ["RubikSemiBold"],
      RubikBold: ["RubikBold"],
    },
    colors: {
      green: "#9CCF32",
      white: "#ffffff",
      orange: "#FF9D01",
      grey: "#D9D9D9",
      blue: "#3399FE",
      black: "#042001",
    },
    fill: {
      current: "#86888C",
      hover: "#ffffff",
    },
  },
  plugins: [
    // ...
  ],
};
