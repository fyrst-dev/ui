import { createRequire } from 'node:module'
import { defineConfig } from '@pandacss/dev'
import { preset } from '@fyrst/ui/design-preset'

const require = createRequire(import.meta.url)

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
