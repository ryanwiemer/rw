require('dotenv').config();

module.exports = {
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-fastclick',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '######',
        anonymize: false,
      },
    },
    {
    resolve: 'gatsby-plugin-nprogress',
    options: {
      color: '#3e3e3e',
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
