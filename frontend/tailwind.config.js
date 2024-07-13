/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#010101",
        mediumGrey: "#B4B0B5",
        lightGrey: "#E4E7F3",
        darkGrey: "#575A5E",
        greyDesign: "#D9D9D9",
        primary: "#242054",
        


      },
      // fontFamily: {
      //   roboto: ['Roboto', 'sans-serif'],
      // },
    },
  },
  plugins: [],
}
