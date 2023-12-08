/** @type {import('next-sitemap').IConfig} */

const stagePolicies = [
  {
    userAgent: '*',
    disallow: '/',
  },
]

const prodPolicies = [
  {
    userAgent: '*',
    allow: '/',
  },
]

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.ryanwiemer.com',
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies:
      process.env.CONTENTFUL_ENVIRONMENT === 'stage' ||
      process.env.CONTENTFUL_ENVIRONMENT === 'dev'
        ? stagePolicies
        : prodPolicies,
  },
}
