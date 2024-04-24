/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary' : '#3238f2'
      },
      fontFamily:{
        'myFont' : ["Poppins", "sans-serif"]
      },
      
    },
  },
  plugins: [],
}

