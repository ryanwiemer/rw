require('dotenv').config();

// If the contentfulConfig can't be found assume the site is being built via Netlify with production environment variables
try { var contentfulConfig = require('./.contentful');}
catch (e) {
  var contentfulConfig = {
    "production": {
      "spaceId": process.env.SPACE_ID,
      "accessToken": process.env.DELIVERY_API_TOKEN
    }
  }
}

module.exports = {
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
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
      options: process.env.NODE_ENV === 'development' ?
        contentfulConfig.development :
        contentfulConfig.production
    },
    'gatsby-plugin-netlify'
  ],
}
