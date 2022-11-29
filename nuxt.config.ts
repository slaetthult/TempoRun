// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        ['@pinia/nuxt',
            {
                autoImports: [
                    'defineStore',
                    ['defineStore', 'definePiniaStore']
                ],
            }
        ],
        ['nuxt-jsonld']
    ],
    css: ["@/assets/scss/styles.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        `
                    @import "@/assets/scss/config.scss";
                    @import "@/assets/scss/mixins.scss";
                    `
                }
            }
        }
    },
    components: {
        global: true,
        dirs: ['~/components/base', '~/components/modules', '~/components/partials']
    },
    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },

                { hid: 'description', name: 'description', content: '*static* Centro Derm Description' },

                { hid:'og:title', property: 'og:title', content: 'Page title' },
                { hid:'og:type', property: 'og:type', content: 'website' },
                { hid:'og:image', property: 'og:image', content: 'nuxt-run.de' + '/share-image_1200x628.jpg' },
                { hid:'og:description', property: 'og:description', content: '*static* Centro Derm Description' },
                { hid:'og:url', property: 'og:url', content: 'nuxt-run.de' },

                { hid:'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
                { hid:'twitter:site', name: 'twitter:site', content: 'google.de' },
                { hid:'twitter:title', name: 'twitter:title', content: 'title' },
                { hid:'twitter:description', name: 'twitter:description', content: '*static* Centro Derm Description' },
                { hid:'twitter:image', name: 'twitter:image', content: 'nuxt-run.de' + '/share-image_1200x628.jpg' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'icon', sizes: '196x196', href: '/touch-icons_192x192.png' },
                { rel: 'icon', sizes: '512x512', href: '/touch-icons_512x512.png' },
                {
                    rel: 'preload',
                    href: '/fonts/fonts.css',
                    as: 'style'
                },
                {
                    rel: 'stylesheet',
                    href: '/fonts/fonts.css'
                }
            ]
        }
    }

})
