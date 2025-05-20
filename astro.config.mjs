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
    integrations: [alpine(), partytown(), purgecss({
        content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],  // Ensure all your source files are scanned
        safelist: [  // Specify classes that you want to keep
            // Add any classes that you want to explicitly keep
        ],
        defaultExtractor: content => {
            const matches = content.match(/(?:class=|className=)["'`]([^"'`]+)["'`]/g) || [];
            return matches
            .flatMap(match => match.match(/(?:lw|mw)[a-zA-Z0-9-_:/]+/g) || []);
        }
    }), sitemap(), robotsTxt(robotsConfig)],
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport'
    },
    image: {
        remotePatterns: [{ protocol: "https" }],
    }
});