/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/scripts/menu.js'],
  theme: {
    extend: {
      colors: {
        'softOrange': 'hsl(35, 77%, 62%)',
        'softRed': 'hsl(5, 85%, 63%)',
        'offWhite': 'hsl(36, 100%, 99%)',
        'grayishBlue': 'hsl(233, 8%, 79%)',
        'darkGrayishBlue': 'hsl(236, 13%, 42%)',
        'veryDarkBlue': 'hsl(240, 100%, 5%)'
      },

      backgroundImage: {
        'mobile': "url('../images/image-web-3-mobile.jpg')",
        'desktop': "url('../images/image-web-3-desktop.jpg')"
      },

      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

