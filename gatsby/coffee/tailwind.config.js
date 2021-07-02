module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '216' : '54rem'
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}