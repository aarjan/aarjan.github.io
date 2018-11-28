module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    
    {
      resolve: `gatsby-plugin-typography`,
      options:{
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
