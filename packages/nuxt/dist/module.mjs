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
    const cssPath = resolver.resolve("./../../components/dist/ui-components.css");
    _nuxt.options.css.push(cssPath);
    _nuxt.options.vite.server?.fs?.allow?.push(
      resolver.resolve("./../../components")
    );
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
