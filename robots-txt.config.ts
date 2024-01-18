import type { RobotsTxtOptions } from 'astro-robots-txt';

const robotsConfig: RobotsTxtOptions = {
    policy: [
        {
            userAgent: '*',
            disallow: ''
        }
    ],
    sitemapBaseFileName: 'sitemap-index' // default 'sitemap-index'
};

export default robotsConfig;
