/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      color : {
        black : "#FFFFFF",
        gray : '#D9D9D9',
        blue : '#0094FF'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
