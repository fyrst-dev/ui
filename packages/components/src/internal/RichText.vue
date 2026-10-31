<script setup lang="ts">
/**
 * Renders copy as text, or as HTML when the parent opted in with `html`.
 * Every public `html` prop goes through here, so this is the only `v-html`.
 */
withDefaults(defineProps<{
  text?: string | null
  html?: boolean
  /** Plain element to render. Never a component. */
  as?: 'span' | 'div' | 'p'
}>(), {
  text: null,
  html: false,
  as: 'span',
})
</script>

<template>
  <!-- eslint-disable vue/no-v-html, vue/no-v-text-v-html-on-component -- opt-in only; `as` is always a plain element, and callers document that `html` takes trusted strings -->
  <component
    :is="as"
    v-if="html"
    v-html="text"
  />
  <!-- eslint-enable vue/no-v-html, vue/no-v-text-v-html-on-component -->
  <component
    :is="as"
    v-else
  >
    {{ text }}
  </component>
</template>
