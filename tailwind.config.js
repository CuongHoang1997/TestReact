/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f96400",
        blue: "#0565bb",
        yellow: "#fcd32a",
        greylish: "#a9a9a9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Notosans: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
