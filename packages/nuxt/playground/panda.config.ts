import { defineConfig } from "@pandacss/dev";
// Import from built dist - preset package must be built first
import { preset } from "@fyrst/design-preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [
    preset
  ],
  // hash: true,
  // Where to look for your css declarations
  include: [
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