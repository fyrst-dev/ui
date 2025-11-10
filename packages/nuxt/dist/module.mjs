import { defineNuxtModule, createResolver, addPlugin, addComponentsDir, addImportsDir } from '@nuxt/kit';

const module$1 = defineNuxtModule({
  meta: {
    name: "fyrst-ui",
    configKey: "fyrstUi"
  },
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve("./runtime/plugin"));
    _nuxt.options.css.push("@fyrst/ui-components/style.css");
    addComponentsDir({
      path: resolver.resolve("./../../components/src/components"),
      // Path relative to this file
      prefix: "fyrst"
      // Optional: Components will be <FyrstButton>, <FyrstCard>, etc.      
    });
    addImportsDir(resolver.resolve("./../../components/src/composables"));
  }
});

export { module$1 as default };
