let contentfulConfig

try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    title: 'Ryan Wiemer',
    description: '',
    url: 'https://www.ryanwiemer.com',
    author: 'Ryan Wiemer',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryan Wiemer`,
        short_name: `Ryan Wiemer`,
        background_color: `#e7e6e1`,
        theme_color: `#292929`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./static/favicon.png'),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              withWebp: true,
              wrapperStyle: `max-width:100%!important`,
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    'gatsby-plugin-netlify',
  ],
}
