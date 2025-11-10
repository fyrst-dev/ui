import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, addImportsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: 'fyrst-ui',
		configKey: 'fyrstUi',
	},
	defaults: {},
	setup(_options, _nuxt) {
		const resolver = createResolver(import.meta.url)
		addPlugin(resolver.resolve('./runtime/plugin'))
		
		// Auto-inject component styles
		_nuxt.options.css.push('@fyrst/ui-components/style.css')
		
		// Register components
		addComponentsDir({
			path: resolver.resolve('./../../components/src/components'), // Path relative to this file
			prefix: 'fyrst' // Optional: Components will be <FyrstButton>, <FyrstCard>, etc.      
		})

		// Auto-import all composables from the composables directory
		addImportsDir(resolver.resolve('./../../components/src/composables'))
	},
})
