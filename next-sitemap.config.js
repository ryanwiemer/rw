/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.ryanwiemer.com',
  generateRobotsTxt: process.env.PREVIEW_ENV ? false : true,
}
