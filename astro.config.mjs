import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                // path to your styles variables
            }
        }
    }
});
