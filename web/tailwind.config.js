/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        almostBlack: {
          100: "#0D0D0D",
          200: "#141414",
          300: "#282828",
          400: '#2f2f2f'
        },
        almostWhite: {
          100:"#efefef",
          200:"#dfdfdf",
          300:"#bfbfbf"
        },
        almostBlue: {
          100: "#2196F3"
        }
      },
    },
  },
  plugins: [],
}

