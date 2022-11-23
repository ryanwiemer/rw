require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
}
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
}

module.exports = {
  siteMetadata: {
    title: 'Ryan Wiemer',
    description: 'Digital marketer based in Oakland, California',
    image: '/og-image.jpg',
    siteUrl: 'https://www.ryanwiemer.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ryan Wiemer',
        short_name: 'Ryan Wiemer',
        background_color: '#e7e6e1',
        theme_color: '#292929',
        start_url: '/',
        display: 'standalone',
        icon: require.resolve('./static/favicon.png'),
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images-contentful',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              withWebp: true,
              wrapperStyle: 'max-width:100%!important',
            },
          },
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-netlify',
  ],
}
