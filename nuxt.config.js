import { resolve } from 'path'

export default {
  target: 'server',
  srcDir: 'src/',
  prefix: false,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module'
  ],
  alias: {
    'components': resolve(__dirname, './src/components')
  },
  plugins: [ '~/plugins/axios' ],
  modules: [ '@nuxtjs/axios' ],
  axios: {
    baseURL: process.env.API_ENDPOINT
  },
}