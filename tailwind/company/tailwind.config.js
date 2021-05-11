module.exports = {
  purge: [
    './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'nav-texture': "url('./images/nav_tile.png')",
        'title-texture': "url('./images/title_bg.png')"
      }),
      fontFamily: {
        nav: ['BD_Cartoon_Shout']
      },
      textColor: {
        'nav': '#ee9722'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
