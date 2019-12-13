import Translation from './lang/translation';


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
    ]
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
      '~/plugins/register-components.js',
      { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
      { src: '~/plugins/vue-portal', mode: 'client' },
      { src: '~/plugins/vue-click-outside' },
      { src: '~/plugins/focus-input' }
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
      ['nuxt-i18n']
  ],

    i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en',
            messages: Translation
        }
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

