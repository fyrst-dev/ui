<script setup lang="ts">
import { css } from 'styled-system/css'
import { pricingCardStyles } from './styles'
import { PricingCardStylesKey, PricingCardDataKey, type PricingCardRootCss } from './types'
import type { ListItemProps } from '../List/ListItem.vue'
import { computed, provide } from 'vue'

export interface Props {
  title?: string
  titleTag?: string
  subtitle?: string
  price?: string
  features?: string[]
  featuresState?: ListItemProps['state']
  featuresSize?: ListItemProps['size']
  highlight?: boolean
  css?: PricingCardRootCss
}

const props = withDefaults(defineProps<Props>(), {
  titleTag: 'div',
  features: () => [],
  featuresState: 'success',
  featuresSize: 'md',
  highlight: false,
})

const styles = computed(() =>
  pricingCardStyles.raw({ highlight: props.highlight }),
)

const data = computed(() => ({
  title: props.title,
  titleTag: props.titleTag,
  subtitle: props.subtitle,
  price: props.price,
  features: props.features,
  featuresState: props.featuresState,
  featuresSize: props.featuresSize,
}))

provide(PricingCardStylesKey, styles)
provide(PricingCardDataKey, data)
</script>

<template>
  <article :class="css(styles.root, props.css?.root)">
    <slot name="before" />
    <slot />
    <slot name="after" />
  </article>
</template>
