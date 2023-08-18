/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '648px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      background: '#0A192F',
      box: '#1E2329',
      titleText: '#CCD6F6',
      emphasize: '#48B9A5'
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        sidebar: "300px auto"
      }, 
      gridTemplateRows: {
        header: "64px auto"
      }
    }
  },
  plugins: [],
})