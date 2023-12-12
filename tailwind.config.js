module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          200: "#eeeeee",
          800: "#393e46",
          900: "#191825",
          "900_bf": "#191825bf",
          "900_19": "#19182519",
          "900_0c": "#1918250c",
          "900_7f": "#1918257f",
        },
        blue_gray: { 50: "#f1f2f2", 900: "#222831" },
        amber: { 300: "#facd49", "300_14": "#facd4914" },
        black: {
          900: "#000000",
          "900_0c": "#0000000c",
          "900_11": "#00000011",
          "900_19": "#00000019",
          "900_16": "#00000016",
        },
        indigo: { 400: "#5d50c6" },
        deep_orange: { 500: "#ff5722" },
        pink: { 300: "#f85e9f" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs4: "0px 0px  1px 0px #0000000c",
        bs1: "0px 0px  1px 0px #00000011",
        bs2: "0px 0px  1px 0px #00000019",
        bs3: "0px 43px  26px 0px #0000000c",
        bs: "0px 19px  19px 0px #00000016",
      },
      fontFamily: { inter: "Inter", circularstd: "Circular Std" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
