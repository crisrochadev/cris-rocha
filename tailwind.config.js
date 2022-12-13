/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'poppins': ['"Poppins"', ''] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwind-scrollbar') ( {  incompatível : true  } ),
  ],
}