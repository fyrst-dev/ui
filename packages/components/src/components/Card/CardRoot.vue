<script setup lang="ts">
import { computed, provide } from 'vue'
import { fyCard } from 'styled-system/recipes'
import { withCss } from '../../internal/css'
import CardHeader, { type CardHeaderProps } from './CardHeader.vue'
import { CardClassesKey, type CardRootCss } from './types'

type CardBorderSize = NonNullable<NonNullable<Parameters<typeof fyCard>[0]>['borderSize']>

export interface Props {
  as?: 'div' | 'li'
  colorStrategy?: 'default' | 'image'
  color?:
    | 'default'
    | 'primary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'none'
    | 'lucid-deep'
  /** Border width in px, `0`–`8`. Other values snap to `1`. */
  borderSize?: number
  borderRadius?: 'sm' | 'md' | 'lg' | 'xl'
  header?: CardHeaderProps
  css?: CardRootCss
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  colorStrategy: 'default',
  color: 'default',
  borderRadius: 'md',
  borderSize: 1,
})

function resolveBorderSize(value: number): CardBorderSize {
  const rounded = Math.round(value)
  return (rounded >= 0 && rounded <= 8 ? String(rounded) : '1') as CardBorderSize
}

const classes = computed(() => fyCard({
  borderRadius: props.borderRadius,
  borderSize: resolveBorderSize(props.borderSize),
  colorStrategy: props.colorStrategy,
  color: props.color,
}))

provide(CardClassesKey, classes)
</script>

<template>
  <component
    :is="props.as"
    :class="withCss(classes.root, props.css?.root)"
  >
    <slot name="before" />
    <slot name="header">
      <CardHeader
        v-if="props.header"
        v-bind="props.header"
      />
    </slot>
    <slot />
    <slot name="footer" />
    <slot name="after" />
  </component>
</template>
