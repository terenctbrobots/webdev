module.exports = {
  siteMetadata: {
    title: "Big Bad Robots",
    description: 
      "Big Bad Robots is a complete software development company for Full-Stack and Game development.",
    url: "https://www.bigbadrobots.com"
  },
  plugins: [
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
