import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import { defineConfig } from '@pandacss/dev'
import { preset } from '@fyrst/ui/design-preset'

// Resolve package exports from cwd so this works if Panda loads the config as ESM or CJS.
const require = createRequire(resolve(process.cwd(), 'panda.config.ts'))

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
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
