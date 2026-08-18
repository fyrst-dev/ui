import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { nuxtComponents, nuxtComposables, vueLibEntries } from './vue-entries.ts'

const root = import.meta.dirname
const libExternals = ['vue', '@pandacss/dev', 'reka-ui']
const libOutput = {
  exports: 'named' as const,
  globals: {
    vue: 'Vue',
  },
}

const entry = {
  index: resolve(root, 'src/index.ts'),
  ...Object.fromEntries(
    Object.entries(vueLibEntries).map(([name, file]) => [name, resolve(root, file)]),
  ),
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.test.*', 'src/**/*.spec.*'],
    }),
    {
      name: 'fyrst-nuxt-entries',
      closeBundle() {
        writeFileSync(
          resolve(root, 'dist/nuxt-entries.json'),
          `${JSON.stringify({ components: nuxtComponents, composables: nuxtComposables }, null, 2)}\n`,
        )
      },
    },
  ],
  build: {
    lib: {
      entry,
      name: 'fyrst-ui',
      cssFileName: 'ui-components',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const ext = format === 'es' ? 'js' : 'cjs'
        if (entryName === 'index') {
          return `index.${ext}`
        }
        return `vue/${entryName}.${ext}`
      },
    },
    rollupOptions: {
      external: libExternals,
      output: libOutput,
    },
    rolldownOptions: {
      external: libExternals,
      output: libOutput,
    },
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': resolve(root, 'src'),
      'styled-system': resolve(root, 'styled-system'),
    },
  },
})
