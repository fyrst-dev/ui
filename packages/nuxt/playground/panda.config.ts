import { defineConfig } from "@pandacss/dev";
import { preset } from "@fyrst/design-preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [
    preset
  ],
  // Where to look for your css declarations
  include: [
    // Published equivalent: ./node_modules/@fyrst/ui-components/dist/panda.buildinfo.json
    '../../components/dist/panda.buildinfo.json',
    './app.vue',
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}'
  ],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system'
})
