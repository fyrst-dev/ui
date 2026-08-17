import { createRequire } from 'node:module'
import { defineConfig } from '@pandacss/dev'
import { preset } from '@fyrst/design-preset'

const require = createRequire(import.meta.url)

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [
    preset,
  ],
  // Where to look for your css declarations
  include: [
    require.resolve('@fyrst/ui-components/panda.buildinfo.json'),
    './app.vue',
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
  ],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system',
})
