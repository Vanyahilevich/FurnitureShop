/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#82B5D1",
        lightBlueHover: "#6891A7",
        lightBlueClick:"#9BC4DA",
        
        darkBlue: "#4E6D7D",
        darkBlueHover: "#344854",
        darkBlueClick: "#6891A7",

        beige: "#FBF6EF",
        beigeHover: "#6891A7",
        
        peach: "#F4DAB9",
        peachClick: "#faeede",

        lightYellow: "#FFDF8D",
        lightYellowHover: "#E0BF69",
        lightYellowClick: "#FFE8AC",

        footerInput: "#E6F0F6"
      },
      fontFamily: {
        mainFont: ["Montserrat", 'sans-serif'],
        primaryFont: ["Poiret One", 'sans-serif']
      }
    },
  },
  plugins: [],
};
