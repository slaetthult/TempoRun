import textTranslation from './lang/text-translation';
import urlTranslation from './lang/url-translation';

const PAGE_DOMAIN = "https://www.nuxt-run.com";

export default {
  //target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

      { hid:'og:title', property: 'og:title', content: 'Nuxt Run' },
      { property: 'og:type', content: 'website' },
      { hid:'og:image', property: 'og:image', content: 'https://via.placeholder.com/500x261' },
      { hid:'og:description', property: 'og:description', content: 'Starter kit for nuxt projects with usefull features for fast development. IE11 is supported!' },
      { hid:'og:url', property: 'og:url', content: PAGE_DOMAIN },

      { name: 'twitter:card', content: 'website' },
      { hid:'twitter:site', name: 'twitter:site', content: PAGE_DOMAIN },
      { hid:'twitter:title', name: 'twitter:title', content: 'Nuxt Run' },
      { hid:'twitter:description', name: 'twitter:description', content: 'Starter kit for nuxt projects with usefull features for fast development. IE11 is supported!' },
      { hid:'twitter:image', name: 'twitter:image', content: 'https://via.placeholder.com/504x252' }
    ],
    htmlAttrs: {
      lang: 'en-US',
      dir: 'ltr'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        href: '/fonts/fonts.css',
        as: 'style'
      },
      {
        rel: 'stylesheet',
        href: '/fonts/fonts.css'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Nuxt Run"
        }
      }
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
      { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
      { src: '~/plugins/vue-portal', mode: 'client' },
      { src: '~/plugins/vue-click-outside' },
      { src: '~/plugins/focus-input' },
      { src: '~/plugins/vue2-google-maps', mode: 'client' },
      { src: '~/plugins/vue-open-street-maps', mode: 'client' }
  ],
  components: [
    '~/components/base',
    '~/components/modules',
    '~/components/partials'
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
      ['vue-scrollto/nuxt', { duration: 300 }],
      '@nuxtjs/toast',
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

    toast: {
        position: 'bottom-right',
        duration: 4000,
        className: 'notification-message'
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
    },
    /* Slider/Swiper Fix for IE11 */
    transpile: [
      'swiper',
      'dom7'
    ]
  }
}

