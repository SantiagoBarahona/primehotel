/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundAside: "#141414",
        backgroundMain: "#282828",
        almostWhite: {
          100:"#efefef",
          200:"#dfdfdf",
          300:"#bfbfbf"
        }
      }
    },
  },
  plugins: [],
}

