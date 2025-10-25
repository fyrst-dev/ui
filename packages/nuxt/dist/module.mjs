import { defineNuxtModule, createResolver, addPlugin, addComponentsDir, addImportsDir } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "fyrst-ui",
    configKey: "fyrstUi"
  },
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve("./runtime/plugin"));
    addComponentsDir({
      path: resolver.resolve("./../../components/src/components"),
      // Path relative to this file
      prefix: "fyrst"
      // Optional: Components will be <FyrstButton>, <FyrstCard>, etc.      
    });
    addImportsDir(resolver.resolve("./../../components/src/composables"));
  }
});

export { module as default };
