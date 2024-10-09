// next-sitemap.config.js
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://peaksummit.org', // Your website URL
    generateRobotsTxt: true, // (optional) Create `robots.txt`
    sitemapSize: 7000, // (optional) Maximum number of entries per sitemap file
  };