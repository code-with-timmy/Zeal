/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#242424",
        gray: "#EEEEEE",
        icon: "#6B6B6B",
        dim: "#d8d8da",
        borderColor: "#F2F2F2",
      },
      fontFamily: {
        sogeo: ['"SoGeo UI"', "sans-serif"],
        sohna: ["Sohna", "sans-serif"],
        euclid: ["Euclid Circular", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
