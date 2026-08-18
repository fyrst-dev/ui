import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const libExternals = ['vue', '@pandacss/dev', 'reka-ui']
const libOutput = {
  exports: 'named' as const,
  globals: {
    vue: 'Vue',
  },
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.test.*', 'src/**/*.spec.*'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'fyrst-ui',
      cssFileName: 'ui-components',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format === 'es' ? 'js' : 'cjs'}`,
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
      '@': resolve(import.meta.dirname, 'src'),
      'styled-system': resolve(import.meta.dirname, 'styled-system'),
    },
  },
})
