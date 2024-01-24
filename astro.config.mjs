import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import robotsConfig from './robots-txt.config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    site: 'https://tempo-run-astro4.netlify.app/',
    output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
    integrations: [alpine(), partytown(), sitemap(), robotsTxt(robotsConfig)],
    prefetch: {
        prefetchAll: true
    },
    experimental: {
        contentCollectionCache: true
    },
    image: {
        remotePatterns: [{ protocol: "https" }],
    }
});
