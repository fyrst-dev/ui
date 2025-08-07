# `@fyrst/ui` monorepo for the companies design tokens and components

This includes following sub-packages

## `@fyrst/ui/preset`

Design token preset to use with **pandacss**. Install or `bun link` the `@fyrst/ui` package and `import { preset } from '@fyrst/ui/preset'` in a `panda.config ts`. 
An example:

``` ts
import { defineConfig } from "@pandacss/dev";
import { preset } from "@fyrst/ui/preset"; // import the fyrst ui preset

export default defineConfig({
  preflight: true,
  presets: [
    preset // link the fyrst ui preset
  ],
  include: [
    "./app/app.vue", 
    "./app/components/**/*.{js,jsx,ts,tsx,vue}", 
    "./app/pages/**/*.{js,jsx,ts,tsx,vue}"
  ],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: "styled-system",
});
```