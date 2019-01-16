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
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ryan Wiemer',
        short_name: 'Ryan Wiemer',
        start_url: '/',
        background_color: '#121212',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'static/logos/logo-512.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.ryanwiemer.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        anonymize: false,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#FFFFFF',
        showSpinner: false,
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
