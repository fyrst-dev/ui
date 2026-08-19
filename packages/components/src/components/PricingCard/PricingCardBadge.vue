<script setup lang="ts">
import { inject, computed } from 'vue'
import { css as pandaCss } from 'styled-system/css'
import { pricingCardStyles } from './styles'
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
  computed(() => pricingCardStyles.raw({})),
)
</script>

<template>
  <div :class="pandaCss(styles.badge, props.css?.root)">
    <slot>
      <template v-if="props.label">
        {{ props.label }}
      </template>
    </slot>
  </div>
</template>
