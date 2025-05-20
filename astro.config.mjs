import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import partytown from '@astrojs/partytown';
import mkcert from 'vite-plugin-mkcert'
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import robotsConfig from './robots-txt.config';
import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
    site: 'https://tempo-run-astro5.netlify.app/',
    vite: {
        plugins: [mkcert()],
        server: {
            https: true
        },
        build: {
            target: 'es2019'
        }
    },
    integrations: [alpine(), partytown(), purgecss(), sitemap(), robotsTxt(robotsConfig)],
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport'
    },
    image: {
        remotePatterns: [{ protocol: "https" }],
    }
});