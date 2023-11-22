import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    integrations: [alpine(), partytown()]
});
