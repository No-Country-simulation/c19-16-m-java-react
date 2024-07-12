/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greyDesign: "#D9D9D9",
        primary: "#242054",
        lightGrey: "#E4E7F3"

      },
      // fontFamily: {
      //   roboto: ['Roboto', 'sans-serif'],
      // },
    },
  },
  plugins: [],
}
