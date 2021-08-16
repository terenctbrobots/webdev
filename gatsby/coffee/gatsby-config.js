const path = require('path')

module.exports = {
  siteMetadata: {
    title: "Big Bad Robots",
    description: 
      "Big Bad Robots is a complete software development company for Full-Stack and Game development.",
    url: "https://www.bigbadrobots.com"
  },
  plugins: [
      {
        resolve: 'gatsby-source-google-photos',
        options: {
          albumsTitles: ["coffee"]
        }
      },
      {
        resolve: 'gatsby-source-google-spreadsheets',
        options: {
          spreadsheetId: '1lFMOi7oliVgknkH_-ClhcWnOUOmpoO_MDuB10YTV0Ws',
          credentials: require('./coffee-319105-2c7e5ca9ee6b.json')
        }
      },
      {
        resolve: 'gatsby-plugin-root-import',
        options: {
          'components': path.join(__dirname, 'src/components'),
          'images': path.join(__dirname, 'src/images')
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
        },
      },
      'gatsby-plugin-image',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-plugin-postcss',     
  ],
};
