import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import { defineConfig } from '@pandacss/dev'
import { preset } from '@fyrst/ui/design-preset'

// Panda 1.x bundles this file as CJS, so import.meta is empty.
const require = createRequire(resolve(process.cwd(), 'panda.config.ts'))

export default defineConfig({
  preflight: true,
  presets: [
    preset,
  ],
  include: [
    require.resolve('@fyrst/ui/panda.buildinfo.json'),
    './app.vue',
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
  ],
  exclude: [],
  outdir: 'styled-system',
})
