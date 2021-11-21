import { resolve } from 'path'

export default {
  /* 
    * Defaults
    * ssr: true
    * target: 'server', 
  */
  head: {
    title: 'digilearn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  srcDir: 'src/',
  prefix: false,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module'
  ],
  alias: {
    'components': resolve(__dirname, './src/components'),
    'interfaces': resolve(__dirname, './src/interfaces')
  },
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/overflow', mode: 'client' }
  ],
  modules: [
    '@nuxt/image',
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.API_ENDPOINT
  },
  router: {
    linkActiveClass: 'text-customred'
  }
}