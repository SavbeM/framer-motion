/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors:{
      "mainRed": "#FF595E",
      "red": "#FF4046",
      "green": "#8AC926",
      "yellow": "#FFCA3A",
      "white": "#F1F9F5"
    },
    screens: {
      'tablet': '600px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      "primary-title": "Climate Crisis",
      "primary": "Figtree"
    }
  },
  plugins: [],
}

