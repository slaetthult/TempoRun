import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import partytown from '@astrojs/partytown';
import mkcert from 'vite-plugin-mkcert'
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import robotsConfig from './robots-txt.config';

// https://astro.build/config
export default defineConfig({
    site: 'https://tempo-run-astro4.netlify.app/',
    vite: {
        plugins: [mkcert()],
        server: {
            https: true,
        },
    },
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
