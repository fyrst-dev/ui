<script setup lang="ts">
import { css } from 'styled-system/css'
import type { SystemStyleObject } from 'styled-system/types'
import { cardBorderSizes, cardStyles, CardStylesKey, type CardBorderSize } from './styles'
import { computed, provide } from 'vue'
import CardHeader, { type CardHeaderProps } from './CardHeader.vue'

type BorderRadius = 'sm' | 'md' | 'lg' | 'xl'

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
  borderSize?: number
  borderRadius?: BorderRadius
  /**
   * @deprecated Arbitrary CSS colors cannot be applied without inline styles.
   * Use the `color` variant instead. Kept so existing call sites type-check.
   */
  borderColor?: string
  classRoot?: SystemStyleObject
  header?: CardHeaderProps
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
  if ((cardBorderSizes as readonly number[]).includes(rounded)) {
    return rounded as CardBorderSize
  }
  return 1
}

const styles = computed(() =>
  cardStyles.raw({
    borderRadius: props.borderRadius,
    borderSize: resolveBorderSize(props.borderSize),
    colorStrategy: props.colorStrategy,
    color: props.color,
  }),
)

provide(CardStylesKey, styles)
</script>

<template>
  <component
    :is="props.as"
    :class="css(styles.root, props.classRoot)"
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
