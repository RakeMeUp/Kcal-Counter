const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif'],
      },
      screens: { 
        'keyboardClosed': { 'raw': '(min-height: 700px)' }
       }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      paletteGray: "#6A6A6A", 
      paletteLightGray: "#C6C6C6",
      paletteBG: "#E9E9E9",
      paletteGreen: "#00AE07",
      paletteYellow: "#DAC50E",
      paletteOrange: "#F18200",
      paletteRed: "#DE0B0B",
    },
  },
  plugins: [],
}