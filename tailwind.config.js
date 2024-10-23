/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      fontFamily:{
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },

      }
    },
  },
  plugins: [],
}