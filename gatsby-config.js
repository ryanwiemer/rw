require('dotenv').config();

module.exports = {
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
       siteUrl: `https://www.ryanwiemer.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        anonymize: false,
      },
    },
    {
    resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#fdc02f',
        showSpinner: false,
        },
      },
    {
    resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN,
        },
      },
    'gatsby-plugin-netlify'
  ],
}
