module.exports = {
  pathPrefix: "/new-portfolio",
  siteMetadata: {
    siteUrl: "https://www.boatzir.com",
    title: "Bo-at Setobele",
    description: 
    "Bo-at, full stack software, web developer, Javascript developer, proficient in React, Next.js, Node.js, PostgreSQL"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Simplefolio`,
        short_name: `Simplefolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/portfolioicon.png',
      },
    },
  ],
};
