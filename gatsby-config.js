module.exports = {
  siteMetadata: {
    title: `Alvaro Enrique`,
    description: `Alvaro Enrique Portfolio`,
    author: `@alvaroenrique`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    /* {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    }, */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alvaro Enrique`,
        short_name: `alvaroenrique`,
        start_url: `/`,
        background_color: `#131415`,
        theme_color: `#131415`,
        display: `minimal-ui`,
        icon: `src/assets/AE2.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
