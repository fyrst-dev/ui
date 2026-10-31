<script setup lang="ts">
import { computed, provide } from 'vue'
import { pricingCardStyles } from './styles'
import { withCss } from '../../internal/css'
import { PricingCardStylesKey, PricingCardDataKey, type PricingCardData, type PricingCardRootCss } from './types'

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

const styles = computed(() => pricingCardStyles.raw({ highlight: props.highlight }))

provide(PricingCardStylesKey, styles)
provide(PricingCardDataKey, computed(() => ({
  title: props.title,
  titleTag: props.titleTag,
  subtitle: props.subtitle,
  price: props.price,
  features: props.features,
  featuresState: props.featuresState,
  featuresSize: props.featuresSize,
})))
</script>

<template>
  <article :class="withCss(styles.root, props.css?.root)">
    <slot name="before" />
    <slot />
    <slot name="after" />
  </article>
</template>
