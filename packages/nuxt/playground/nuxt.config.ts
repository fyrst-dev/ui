import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: ['../src/module'],
  fyrstUi: {},
  devtools: { enabled: true },
  alias: {
    'styled-system': resolve('./styled-system')
  },
  build: {
    transpile: ['reka-ui']
  },
  css: ['@/assets/css/global.css'],
  vite: {
    optimizeDeps: {
      include: ['reka-ui']
    }
  },
  postcss: {
    plugins: {
      '@pandacss/dev/postcss': {}
    }
  }
})
