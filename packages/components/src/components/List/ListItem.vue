<template>
  <!-- eslint-disable vue/no-v-html -- author-controlled rich text -->
  <li :class="pandaCss(styles.item, props.css?.root)">
    <slot name="marker">
      <span :class="pandaCss(styles.marker, props.css?.marker)">
        <span
          v-if="typeof icon === 'string'"
          :class="`icon icon-${icon}`"
        />
      </span>
    </slot>
    <slot>
      <div
        v-if="props.content"
        v-html="props.content"
      />
    </slot>
  </li>
</template>

<script setup lang="ts">
import { css as pandaCss } from 'styled-system/css'
import { inject, computed } from 'vue'
import { listStyles } from './styles'
import { ListStylesKey, type ListItemCss } from './types'

export interface ListItemProps {
  content?: string
  size?: 'sm' | 'md' | 'lg'
  state?: 'default' | 'primary' | 'success' | 'danger' | 'info'
  icon?: string | boolean
  css?: ListItemCss
}

const props = defineProps<ListItemProps>()

const styles = inject(
  ListStylesKey,
  computed(() => listStyles.raw({})),
)

const iconMaps = {
  default: 'caret-right-bold',
  primary: 'caret-right-bold',
  success: 'check-bold',
  danger: 'x-bold',
  info: 'info-bold',
}

const icon = computed(() => {
  if (props.icon === false) {
    return null
  }

  if (typeof props.icon === 'string') {
    return props.icon
  }

  if (props.state) {
    return iconMaps[props.state] ?? iconMaps.default
  }

  return iconMaps.default
})
</script>
