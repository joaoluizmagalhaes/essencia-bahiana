// tailwind.config.js
const textShadowPlugin = require('tailwindcss-textshadow')

module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },
    },
    textShadow: {
      // defina suas sombras personalizadas aqui
      'outline': '0 0 5px #000', // Exemplo de contorno preto
    },
  },
  variants: {
    extend: {}
  },
  plugins: [
    function ({ addUtilities, theme, variants }) {
      const newUtilities = {
        '.max-h-screen-180': {
          maxHeight: 'calc(100vh - 180px)'
        },
        '.max-h-screen-120': {
          maxHeight: 'calc(100vh - 120px)'
        },
        '.max-h-screen-70': {
          maxHeight: 'calc(100vh - 70px)'
        }
      }

      addUtilities(newUtilities, variants('maxHeight'))
    },
    textShadowPlugin
  ]
}
