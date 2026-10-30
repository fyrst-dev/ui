import { defineConfig } from '@pandacss/dev'
import { preset } from './packages/preset/src/index.ts'

export default defineConfig({
  preflight: true,
  // preset-base is nested on `preset` as a module, not a string, so the
  // published design-system preset does not ask the app to resolve it.
  presets: [preset],
  include: ['./packages/components/src/**/*.{js,jsx,ts,tsx,vue}'],
  outdir: 'dist/styled-system',
})
