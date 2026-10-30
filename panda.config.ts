import { defineConfig } from '@pandacss/dev'
import { preset } from './packages/preset/src/index.ts'

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/preset-base', preset],
  include: ['./packages/components/src/**/*.{js,jsx,ts,tsx,vue}'],
  outdir: 'dist/styled-system',
})
