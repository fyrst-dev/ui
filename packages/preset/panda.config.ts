import { defineConfig } from "@pandacss/dev";
import { preset } from "./src/index";

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: [],
  exclude: [],
  outdir: ".",
  jsxFramework: "vue"
});
