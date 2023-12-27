/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
        
        'custom-pink': '#EDC1FF',
        'custom-purple': '#C2CBFF',
        'custom-blue': '#1d4ed8',
        'custom-redlight': '#FEDCDB',
        'custom-red': '#ec4899',
        'custom-greenlight': '#E0F2C8',
        'custom-cyan': '#3FD8CF',
        'custome-sky': '#67e8f9',
        'custom-blue': '#5647FF',
      },
    },

  },
  plugins: [],
}

