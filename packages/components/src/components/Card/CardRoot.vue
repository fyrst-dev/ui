<script setup lang="ts">
import { css, type Styles } from 'styled-system/css'
import { cardStyles, CardStylesKey } from './styles'
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
  borderColor?: string
  classRoot?: Styles
  header?: CardHeaderProps
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  colorStrategy: 'default',
  color: 'default',
  borderRadius: 'md',
  borderSize: 1,
  header: undefined,
})

const styles = computed(() =>
  cardStyles.raw({
    borderRadius: props.borderRadius,
    colorStrategy: props.colorStrategy,
    color: props.color,
  }),
)

const inlineStyles = computed(() => {
  const styles: Record<string, string> = {
    '--card-border-size': `${props.borderSize}px`,
  }

  if (typeof props.borderColor === 'string') {
    styles['--card-border-color'] = props.borderColor
  }

  return styles
})

provide(CardStylesKey, styles)
</script>

<template>
  <component
    :is="props.as"
    :class="css(styles.root, props.classRoot)"
    :style="inlineStyles"
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
