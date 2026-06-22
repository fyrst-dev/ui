<script setup lang="ts">
import { inject, computed } from 'vue'
import { ListRoot } from '../List'
import type { ListItemProps } from '../List/ListItem.vue'
import { PricingCardDataKey, type PricingCardData, type PricingCardBodyCss } from './types'

export interface PricingCardBodyProps {
  features?: string[]
  css?: PricingCardBodyCss
}

const props = defineProps<PricingCardBodyProps>()

const data = inject(
  PricingCardDataKey,
  computed<PricingCardData>(() => ({})),
)

const features = computed(() => props.features ?? data.value.features ?? [])

const listState = computed(() => data.value.featuresState ?? 'success')
const listSize = computed(() => data.value.featuresSize ?? 'md')

const items = computed<ListItemProps[]>(() =>
  features.value.map(feature => ({
    content: feature,
    css: {
      root: props.css?.feature,
      marker: props.css?.featureIcon,
    },
  })),
)

const rootStyles = computed(() => ({
  paddingBlock: 'lg',
  paddingInline: 'lg',
  ...props.css?.root,
}))
</script>

<template>
  <slot>
    <ListRoot
      v-if="items.length > 0"
      :state="listState"
      :size="listSize"
      :items="items"
      :css="{ root: rootStyles }"
    />
  </slot>
</template>
