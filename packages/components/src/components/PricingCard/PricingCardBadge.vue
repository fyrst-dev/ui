<script setup lang="ts">
import { inject, computed } from 'vue'
import { fyPricingCard } from 'styled-system/recipes'
import { withCss } from '../../internal/css'
import { PricingCardClassesKey, type PricingCardBadgeCss } from './types'

export interface PricingCardBadgeProps {
  label?: string
  css?: PricingCardBadgeCss
}

const props = withDefaults(defineProps<PricingCardBadgeProps>(), {
  label: 'Featured',
})

const classes = inject(
  PricingCardClassesKey,
  computed(() => fyPricingCard()),
)
</script>

<template>
  <div :class="withCss(classes.badge, props.css?.root)">
    <slot>
      <template v-if="props.label">
        {{ props.label }}
      </template>
    </slot>
  </div>
</template>
