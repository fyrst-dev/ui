import { defineConfig } from "@pandacss/dev";
import { preset } from "./src/index";

export default defineConfig({
  preflight: true,
  presets: ["@pandacss/preset-base", preset],
  include: [],
  exclude: [],
  outdir: "styled-system",
  jsxFramework: "vue"
});
