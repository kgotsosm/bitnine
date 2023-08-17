/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: '#0A192F',
      box: '#1E2329',
      titleText: '#CCD6F6'
    },
    extend: {},
  },
  plugins: [],
})