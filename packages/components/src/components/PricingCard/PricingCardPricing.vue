<script setup lang="ts">
import { inject, computed } from 'vue'
import { css as pandaCss } from 'styled-system/css'
import { pricingCardStyles } from './styles'
import { PricingCardStylesKey, PricingCardDataKey, type PricingCardData, type PricingCardPricingCss } from './types'

export interface PricingCardPricingProps {
  price?: string
  css?: PricingCardPricingCss
}

const props = defineProps<PricingCardPricingProps>()

const styles = inject(
  PricingCardStylesKey,
  computed(() => pricingCardStyles.raw({})),
)

const data = inject(
  PricingCardDataKey,
  computed<PricingCardData>(() => ({})),
)

const price = computed(() => props.price ?? data.value.price)
</script>

<template>
  <div :class="pandaCss(styles.pricing, props.css?.root)">
    <slot>
      <slot name="price">
        <span
          v-if="price"
          :class="pandaCss(styles.price, props.css?.price)"
        >
          {{ price }}
        </span>
      </slot>
      <slot name="pricing-addon" />
    </slot>
  </div>
</template>
