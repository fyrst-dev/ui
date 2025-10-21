import { createJiti } from "/home/robjke/Projects/fyrst/ui/node_modules/jiti/lib/jiti.mjs";

const jiti = createJiti(import.meta.url, {
  "interopDefault": true,
  "alias": {
    "@fyrst/ui-nuxt": "/home/robjke/Projects/fyrst/ui/packages/nuxt"
  },
  "transformOptions": {
    "babel": {
      "plugins": []
    }
  }
})

/** @type {import("/home/robjke/Projects/fyrst/ui/packages/nuxt/src/module.js")} */
const _module = await jiti.import("/home/robjke/Projects/fyrst/ui/packages/nuxt/src/module.ts");

export default _module?.default ?? _module;