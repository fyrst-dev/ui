<script setup lang="ts">
import { inject, computed } from 'vue'
import { pricingCardStyles } from './styles'
import { withCss } from '../../internal/css'
import { PricingCardStylesKey, type PricingCardBadgeCss } from './types'

export interface PricingCardBadgeProps {
  label?: string
  css?: PricingCardBadgeCss
}

const props = withDefaults(defineProps<PricingCardBadgeProps>(), {
  label: 'Featured',
})

const styles = inject(
  PricingCardStylesKey,
  computed(() => pricingCardStyles.raw()),
)
</script>

<template>
  <div :class="withCss(styles.badge, props.css?.root)">
    <slot>
      <template v-if="props.label">
        {{ props.label }}
      </template>
    </slot>
  </div>
</template>
