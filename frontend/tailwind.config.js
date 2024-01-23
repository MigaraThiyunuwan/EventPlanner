/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',],
  
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      pink: "#fae4e7",
      primary: "#435334",
      secondary: "#cedebd",
    },
  },
  plugins: [require("flowbite/plugin")],
};
