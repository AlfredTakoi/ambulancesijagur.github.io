/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#6176A3',
        'secondary': '#010205',
        'tertiary': '#18243A',
        'fourtiary': '#B81A1D',
        'fivary': '#C4C6D8'
      }
    },
  },
  plugins: [],
}