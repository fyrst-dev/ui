<script setup lang="ts">
import { inject, computed } from 'vue'
import { css as pandaCss } from 'styled-system/css'
import { ListRoot } from '../List'
import type { ListItemProps } from '../List/ListItem.vue'
import { PricingCardDataKey, type PricingCardData, type PricingCardBodyCss } from './types'

export interface PricingCardBodyProps {
  features?: string[]
  /** Render features as HTML. Pass trusted strings only. */
  html?: boolean
  css?: PricingCardBodyCss
}

const props = withDefaults(defineProps<PricingCardBodyProps>(), {
  features: undefined,
  html: undefined,
})

const data = inject(
  PricingCardDataKey,
  computed<PricingCardData>(() => ({})),
)

const features = computed(() => props.features ?? data.value.features ?? [])
const html = computed(() => props.html ?? data.value.html ?? false)

const items = computed<ListItemProps[]>(() =>
  features.value.map(feature => ({
    content: feature,
    css: {
      root: props.css?.feature,
      marker: props.css?.featureIcon,
    },
  })),
)

const rootCss = computed(() => pandaCss.raw(
  { paddingBlock: 'lg', paddingInline: 'lg' },
  props.css?.root,
))
</script>

<template>
  <slot>
    <ListRoot
      v-if="items.length > 0"
      :state="data.featuresState ?? 'success'"
      :size="data.featuresSize ?? 'md'"
      :items="items"
      :html="html"
      :css="{ root: rootCss }"
    />
  </slot>
</template>
