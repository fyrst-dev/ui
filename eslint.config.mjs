// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import unusedImports from 'eslint-plugin-unused-imports'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: true,
  },
  dirs: {
    src: [
      './packages/components/src',
      './packages/nuxt/src',
      './packages/preset/src',
    ],
  },
})
  .append({
    ignores: [
      '**/styled-system/**',
      '**/dist/**',
      '**/*.d.ts',
      'packages/components/src/vue/**',
      'packages/nuxt/test/fixtures/**',
    ],
  })
  .append({
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // Content renders as text. The one opt-in `v-html` lives in
      // `internal/RichText.vue` behind each component's `html` prop.
      'vue/no-v-html': 'error',
      '@stylistic/no-trailing-spaces': 'off',
      // Disable base rules that conflict with unused-imports plugin
      '@typescript-eslint/no-unused-vars': 'off',
      // Enable unused imports detection and auto-fix
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  })
