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
      'packages/preset/jsx/**',
      'packages/preset/css/**',
      'packages/preset/patterns/**',
      'packages/preset/tokens/**',
      'packages/preset/types/**',
    ],
  })
  .append({
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // Design-system copy props are trusted HTML (labels, titles, list content).
      'vue/no-v-html': 'off',
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
