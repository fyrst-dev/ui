<script setup lang="ts">
import { inject, computed } from 'vue'
import { css } from 'styled-system/css'
import { pricingCardStyles } from './styles'
import { PricingCardStylesKey, PricingCardDataKey, type PricingCardData, type PricingCardHeaderCss } from './types'

export interface PricingCardHeaderProps {
  title?: string
  titleTag?: string
  subtitle?: string
  css?: PricingCardHeaderCss
}

const props = defineProps<PricingCardHeaderProps>()

const styles = inject(
  PricingCardStylesKey,
  computed(() => pricingCardStyles.raw({})),
)

const data = inject(
  PricingCardDataKey,
  computed<PricingCardData>(() => ({})),
)

const titleTag = computed(() => props.titleTag ?? data.value.titleTag ?? 'div')
const title = computed(() => props.title ?? data.value.title)
const subtitle = computed(() => props.subtitle ?? data.value.subtitle)
</script>

<template>
  <header :class="css(styles.header, props.css?.root)">
    <slot name="prepend" />
    <slot>
      <div :class="css(styles.headerPackage, props.css?.headerPackage)">
        <slot name="title">
          <component
            :is="titleTag"
            v-if="title"
            :class="css(styles.title, props.css?.title)"
          >
            {{ title }}
          </component>
        </slot>
        <slot name="subtitle">
          <p
            v-if="subtitle"
            :class="css(styles.subtitle, props.css?.subtitle)"
          >
            {{ subtitle }}
          </p>
        </slot>
      </div>
    </slot>
    <slot name="append" />
  </header>
</template>
