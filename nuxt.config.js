import textTranslation from './lang/text-translation';
import urlTranslation from './lang/url-translation';

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
      '~/plugins/register-components.js',
      { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
      { src: '~/plugins/vue-portal', mode: 'client' },
      { src: '~/plugins/vue-click-outside' },
      { src: '~/plugins/focus-input' },
      { src: '~/plugins/vue2-google-maps' },
  ],
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
      ['vue-scrollto/nuxt', { duration: 300 }]
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

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

