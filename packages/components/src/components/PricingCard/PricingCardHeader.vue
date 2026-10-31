<script setup lang="ts">
import { inject, computed } from 'vue'
import { fyPricingCard } from 'styled-system/recipes'
import { withCss } from '../../internal/css'
import { PricingCardClassesKey, PricingCardDataKey, type PricingCardData, type PricingCardHeaderCss } from './types'

export interface PricingCardHeaderProps {
  title?: string
  titleTag?: string
  subtitle?: string
  css?: PricingCardHeaderCss
}

const props = defineProps<PricingCardHeaderProps>()

const classes = inject(
  PricingCardClassesKey,
  computed(() => fyPricingCard()),
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
  <header :class="withCss(classes.header, props.css?.root)">
    <slot name="prepend" />
    <slot>
      <div :class="withCss(classes.headerPackage, props.css?.headerPackage)">
        <slot name="title">
          <component
            :is="titleTag"
            v-if="title"
            :class="withCss(classes.title, props.css?.title)"
          >
            {{ title }}
          </component>
        </slot>
        <slot name="subtitle">
          <p
            v-if="subtitle"
            :class="withCss(classes.subtitle, props.css?.subtitle)"
          >
            {{ subtitle }}
          </p>
        </slot>
      </div>
    </slot>
    <slot name="append" />
  </header>
</template>
