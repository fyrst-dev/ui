<script setup lang="ts">
import { inject, computed } from 'vue'
import { pricingCardStyles } from './styles'
import { withCss } from '../../internal/css'
import { PricingCardStylesKey, PricingCardDataKey, type PricingCardData, type PricingCardPricingCss } from './types'

export interface PricingCardPricingProps {
  price?: string
  css?: PricingCardPricingCss
}

const props = defineProps<PricingCardPricingProps>()

const styles = inject(
  PricingCardStylesKey,
  computed(() => pricingCardStyles.raw()),
)

const data = inject(
  PricingCardDataKey,
  computed<PricingCardData>(() => ({})),
)

const price = computed(() => props.price ?? data.value.price)
</script>

<template>
  <div :class="withCss(styles.pricing, props.css?.root)">
    <slot>
      <slot name="price">
        <span
          v-if="price"
          :class="withCss(styles.price, props.css?.price)"
        >
          {{ price }}
        </span>
      </slot>
      <slot name="pricing-addon" />
    </slot>
  </div>
</template>
