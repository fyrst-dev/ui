<template>
  <!-- eslint-disable vue/no-v-html -- author-controlled rich text -->
  <div :class="cssClasses.root">
    <slot name="prepend" />
    <slot name="headline">
      <component
        :is="headlineTag"
        v-if="headline"
        :class="cssClasses.headline"
      >
        <span v-html="headline" />
      </component>
    </slot>
    <slot name="description">
      <div
        v-if="description"
        :class="cssClasses.description"
        v-html="description"
      />
    </slot>
    <slot name="actions" />
    <slot name="append" />
  </div>
</template>

<script setup lang="ts">
import { heroLead } from './styles'
import { computed } from 'vue'

export interface Props {
  headline?: string
  headlineTag?: string
  description?: string
  alignItems?: 'start' | 'center' | 'end'
  alignSelf?: 'start' | 'center' | 'end'
  size?: 'sm' | 'md' | 'lg'
  gap?: 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  headlineTag: 'h1',
  alignItems: 'start',
  alignSelf: 'start',
  size: 'md',
  gap: 'md',
})

const cssClasses = computed(() => {
  return heroLead({
    alignItems: props.alignItems || 'start',
    alignSelf: props.alignSelf || 'start',
    size: props.size || 'md',
    gap: props.gap || 'md',
  })
})
</script>
