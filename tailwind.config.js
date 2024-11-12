/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{vue,js,jsx}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // https://github.com/epicmaxco/vuestic-admin/blob/master/tailwind.config.js
      screens: {
        xs: '0px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
