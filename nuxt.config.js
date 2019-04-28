module.exports = {
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-sass-resources-loader', [
      '~/assets/scss/style.scss'
    ]]
  ],
  axios: {},
  manifest: {
    name: 'nuxt-start',
    lang: 'ja',
    short_name: 'nuxt',
    title: 'nuxt-startです',
    'og:title': 'nuxt-startです',
    description: 'nuxt-startです',
    'og:description': 'nuxt-startです',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  workbox: {
    dev: true, //開発環境でもPWA
  },
  head: {
    titleTemplate: '%s | 天気サービス',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WEB制作依頼時の必須項目用テンプレートです' },
      { name: 'msapplication-config', content: '/img/favicons/browserconfig.xml' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/img/favicons/mstile-144x144.png' },
      { name: 'theme-color', content: '#f5deb3' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/favicons/apple-touch-icon-180x180.png' },
      { rel: 'mask-icon', color: '#555', href: '/img/favicons/safari-icon.svg' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/favicons/android-chrome-192x192.png' },
      { rel: 'manifest', href: '/img/favicons/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Asap:400,500,600,700"' },
      { rel: 'stylesheet', href: 'https://cdn.rawgit.com/filipelinhares/ress/master/dist/ress.min.css' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
}
