/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadow1: "1px 1px 2px 1px rgba(0, 0, 0, 0.25)",
        shadow2: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        hero2: "url('../public/assets/images/hero2.svg')",
        hero3: "url('../public/assets/images/hero3.svg')",
        loginbg: "url('../public/assets/images/loginbg.svg')"
      },
    },
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
      LoginHeaderTextColor:'#313131',
      textInputborderColor:'#C8C8C8',
      tc:'#777777'
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
