<script setup lang="ts">
import { computed, inject } from 'vue'
import { listStyles } from './styles'
import { withCss } from '../../internal/css'
import { ListContextKey, type ListItemCss, type ListSize, type ListState } from './types'

export interface ListItemProps {
  content?: string
  size?: ListSize
  state?: ListState
  /** Icon name, `false` for no icon, `true`/unset for the state's default icon. */
  icon?: string | boolean
  css?: ListItemCss
}

const props = defineProps<ListItemProps>()

const list = inject(ListContextKey, null)

const size = computed(() => props.size ?? list?.value.size ?? 'md')
const state = computed(() => props.state ?? list?.value.state ?? 'default')

const styles = computed(() => listStyles.raw({ size: size.value, state: state.value }))

const stateIcons: Record<ListState, string> = {
  default: 'caret-right-bold',
  primary: 'caret-right-bold',
  success: 'check-bold',
  danger: 'x-bold',
  info: 'info-bold',
}

const icon = computed(() => {
  if (props.icon === false) return null
  if (typeof props.icon === 'string') return props.icon
  return stateIcons[state.value]
})
</script>

<template>
  <li :class="withCss(styles.item, props.css?.root)">
    <slot name="marker">
      <span :class="withCss(styles.marker, props.css?.marker)">
        <span
          v-if="icon"
          :class="`icon icon-${icon}`"
          aria-hidden="true"
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
