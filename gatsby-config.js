module.exports = {
  siteMetadata: {
    title: `Fast Typer`,
    description: `Test how fast you can type!`,
    author: `@wirtzdan`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FastTyper`,
        short_name: `FastTyper`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#48BB78`,
        display: `standalone`,
        icon: `./src/assets/favicon.svg`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    }
  ]
};
