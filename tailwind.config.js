/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Poppins":['Poppins','sans-serif'],
        "Inter":['Inter','sans-serif'],
      },
      textColor:{
        "subheading": "#49706B",
        "heading": "#063848"
      }
    },
  },
  plugins: [],
}