import { defineConfig } from "@pandacss/dev";
import { preset } from "@fyrst/design-preset";

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  outdir: "styled-system",
  jsxFramework: "vue"
});
