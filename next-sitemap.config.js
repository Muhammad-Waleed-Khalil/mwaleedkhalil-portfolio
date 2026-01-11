/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://mwaleedkhalil.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const priorities = {
      '/': 1.0,
      '/about': 0.8,
      '/works': 0.9,
      '/contact': 0.7,
    };

    const changefreqs = {
      '/': 'daily',
      '/about': 'monthly',
      '/works': 'weekly',
      '/contact': 'monthly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || 'weekly',
      priority: priorities[path] || 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};
