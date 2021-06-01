module.exports = {
  siteMetadata: {
    title: "Big Bad Robots",
    description: 
      "Big Bad Robots is a complete software development company for Full-Stack and Game development.",
    url: "https://www.bigbadrobots.com"
  },
  plugins: [
      'gatsby-plugin-postcss',
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "GatsbyJS",
          short_name: "GatsbyJS",
          start_url: "/",
          background_color: "#ffffff",
          theme_color: "#ffffff",
          icon: "src/images/icon.png",
          icon_options: {
            purpose: `any maskable`,
          },
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: "standalone",
          // An optional attribute which provides support for CORS check.
          // If you do not provide a crossOrigin option, it will skip CORS for manifest.
          // Any invalid keyword or empty string defaults to `anonymous`
          crossOrigin: `use-credentials`,
        },
      },
      
  ],
};
