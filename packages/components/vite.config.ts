import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { nuxtComponents, nuxtComposables, vueLibEntries } from './vue-entries.ts'
import { writeVueEntryModules } from './write-vue-entry-modules.ts'

const root = import.meta.dirname
const libExternals = [
  'vue',
  '@pandacss/dev',
  'reka-ui',
  /^styled-system(?:\/|$)/,
  /^@fyrst\/ui\/(?:css|helpers|tokens|patterns|types)(?:\/|$)/,
]
const libOutput = {
  exports: 'named' as const,
  globals: {
    vue: 'Vue',
  },
}

writeVueEntryModules()

const entry = {
  index: resolve(root, 'src/index.ts'),
  ...Object.fromEntries(
    Object.keys(vueLibEntries).map(name => [name, resolve(root, `src/vue/${name}.ts`)]),
  ),
}

function fyrstStyledSystemPackageImports(): Plugin {
  const specifier = /(?:from|require\()\s*(['"])styled-system\/([^'"]+)\1/g

  return {
    name: 'fyrst-styled-system-package-imports',
    renderChunk(code) {
      if (!code.includes('styled-system/')) {
        return null
      }

      const next = code.replace(
        specifier,
        (full, _quote: string, subpath: string) => full.replace(`styled-system/${subpath}`, `@fyrst/ui/${subpath}`),
      )

      return next === code ? null : { code: next, map: null }
    },
  }
}

export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    fyrstStyledSystemPackageImports(),
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
    // Lib ESM must keep identifiers. Vite 8 Oxc minify emits `var h = defineComponent(...)`,
    // which collides with Nuxt unimport's `import { h } from 'vue'` on linked installs.
    minify: false,
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
      ...(command === 'serve'
        ? { 'styled-system': resolve(root, 'styled-system') }
        : {}),
    },
  },
}))
