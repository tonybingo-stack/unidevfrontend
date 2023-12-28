/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      transitionDuration: {
        'slow': '0.8s',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',

        'custompink': '#EDC1FF',
        'custompurple': '#C2CBFF',
        'customblue': '#1D4ED8',
        'customredlight': '#FEDCDB',
        'customgreenlight': '#E0F2C8',
        'customred': '#EC4899',
        'customcyan': '#3FD8CF',
        'customesky': '#67E8F9',
        'customblue': '#5647FF',
      },
    },

  },
  plugins: [],
}

