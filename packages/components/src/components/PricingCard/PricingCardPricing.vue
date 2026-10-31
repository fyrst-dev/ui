<script setup lang="ts">
import { inject, computed } from 'vue'
import { fyPricingCard } from 'styled-system/recipes'
import { withCss } from '../../internal/css'
import { PricingCardClassesKey, PricingCardDataKey, type PricingCardData, type PricingCardPricingCss } from './types'

export interface PricingCardPricingProps {
  price?: string
  css?: PricingCardPricingCss
}

const props = defineProps<PricingCardPricingProps>()

const classes = inject(
  PricingCardClassesKey,
  computed(() => fyPricingCard()),
)

const data = inject(
  PricingCardDataKey,
  computed<PricingCardData>(() => ({})),
)

const price = computed(() => props.price ?? data.value.price)
</script>

<template>
  <div :class="withCss(classes.pricing, props.css?.root)">
    <slot>
      <slot name="price">
        <span
          v-if="price"
          :class="withCss(classes.price, props.css?.price)"
        >
          {{ price }}
        </span>
      </slot>
      <slot name="pricing-addon" />
    </slot>
  </div>
</template>
