/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue : '#82B5D1',
        lightYellow: '#FFDF8D',
        darkBlue: '#4E6D7D',
        beige: '#FBF6EF',
        lightBlueHover: '#6891A7',
        lightYellowHover: '#E0BF69',
        darkBlueHover: '#344854',
        beigeHover: '#6891A7'
      },
      fontFamily: {
        mainFont: 'Montserrat',
        primaryFont: 'Poiret One'
      }
    },
  },
  plugins: [],
}