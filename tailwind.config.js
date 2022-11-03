/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors : {
        'myBlack' : "#000000",
        'myGray' : '#D9D9D9',
        'myBlue' : '#0094FF'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
