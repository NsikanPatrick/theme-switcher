/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class', //For the dark theme to work, this has to be set
  theme: {
    extend: {
      colors:{
        dark:{
          50: 'hsl(230, 17%, 14%)', //Background
          100: 'hsl(232, 19%, 15%)', //Top bg pattern
          200: 'hsl(228, 28%, 20%)', //Card bg
          300: 'hsl(228, 34%, 66%)', // Text
          400: 'hsl(0, 0%, 100%)',  // Text
        },
        light:{
          50: 'hsl(225, 100%, 98%)',  //Top bg pattern
          100: 'hsl(227, 47%, 96%)', //Card bg
          200: 'hsl(228, 12%, 44%)', //Text
          300: 'hsl(230, 17%, 14%)', //Text
          400: 'hsl(0, 0%, 100%)', //Background
        }, 
        // Primary colors
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        // Switch colors
        'dark-toggle': "hsl(210, 78%, 56%)",
        'light-toggle': "hsl(230, 22%, 74%)",
        // Social Icons
        'facebook': "hsl(208, 92%, 53%)",
        'twitter': "hsl(203, 89%, 53%)",
        'instagram': "hsl(329, 70%, 58%)",
        'youtube': "hsl(348, 97%, 39%)",
      }
    },
  },
  plugins: [],
}

