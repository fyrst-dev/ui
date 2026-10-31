<script setup lang="ts">
import { computed, provide } from 'vue'
import { fyPricingCard } from 'styled-system/recipes'
import { withCss } from '../../internal/css'
import { PricingCardClassesKey, PricingCardDataKey, type PricingCardData, type PricingCardRootCss } from './types'

export interface Props extends PricingCardData {
  highlight?: boolean
  css?: PricingCardRootCss
}

const props = withDefaults(defineProps<Props>(), {
  titleTag: 'div',
  features: () => [],
  featuresState: 'success',
  featuresSize: 'md',
})

const classes = computed(() => fyPricingCard({ highlight: props.highlight }))

provide(PricingCardClassesKey, classes)
provide(PricingCardDataKey, computed(() => ({
  title: props.title,
  titleTag: props.titleTag,
  subtitle: props.subtitle,
  price: props.price,
  features: props.features,
  featuresState: props.featuresState,
  featuresSize: props.featuresSize,
  html: props.html,
})))
</script>

<template>
  <article :class="withCss(classes.root, props.css?.root)">
    <slot name="before" />
    <slot />
    <slot name="after" />
  </article>
</template>
