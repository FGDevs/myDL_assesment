import { resolve } from 'path'

export default {
  target: 'server',
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build'
  ],
  srcDir: 'src/',
  alias: {
    'components': resolve(__dirname, './src/components')
  }
}