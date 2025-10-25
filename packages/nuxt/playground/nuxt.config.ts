import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: ['../src/module'],
  fyrstUi: {},
  devtools: { enabled: true },
  alias: {
    'styled-system': resolve('./styled-system')
  },
 
  css: ['@/assets/css/global.css'],
 
  postcss: {
    plugins: {
      '@pandacss/dev/postcss': {}
    }
  }
})
