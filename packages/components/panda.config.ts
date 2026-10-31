import { defineConfig } from '@pandacss/dev'
// Source import (not the workspace package) so codegen and tests do not need a
// prior preset build. The preset already nests @pandacss/preset-base.
import { preset } from '../preset/src/index.ts'

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  outdir: 'styled-system',
  jsxFramework: 'vue',
})
