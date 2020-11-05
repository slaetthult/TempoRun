import textTranslation from './lang/text-translation';
import urlTranslation from './lang/url-translation';

const PAGE_DOMAIN = "https://www.nuxt-run.com";

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
      htmlAttrs: {
          lang: 'en-US',
          dir: 'ltr'
      }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
      "~assets/scss/styles.scss"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      { src: '~/plugins/polyfill-entries' },
      { src: '~/plugins/polyfill-intersection-observer' },
      { src: '~/plugins/polyfill-object-fit' },
      { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
      { src: '~/plugins/vue-portal', mode: 'client' },
      { src: '~/plugins/vue-click-outside' },
      { src: '~/plugins/focus-input' },
      { src: '~/plugins/vue2-google-maps' },
      { src: '~/plugins/lazysizes.js', mode: 'client' },
  ],
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
      ['nuxt-i18n'],
      ['@nuxtjs/style-resources'],
      ['vue-scrollto/nuxt', { duration: 300 }],
      '@nuxtjs/robots',
      '@nuxtjs/sitemap' /* has to be at the end of this array! */
  ],

    i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en',
            messages: textTranslation
        },
        parsePages: false,
        pages: urlTranslation
    },
    styleResources: {
        scss: [
            '~assets/scss/config.scss',
            '~assets/scss/mixins.scss'
        ]
    },

    sitemap: {
        path: "/sitemap.xml",
        hostname: PAGE_DOMAIN,
        filter ({ routes }) {
            return routes.map(route => {
                route.url = `${route.url}/`;
                return route;
            })
        },
        cacheTime: 1000 * 60 * 15,
        gzip: true
    },

    robots: {
        UserAgent: '*',
        Disallow: ''
    },

  /*
  ** Build configuration
  */
  build: {
      extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

