<script setup lang="ts">
import { computed, inject } from 'vue'
import { listStyles } from './styles'
import RichText from '../../internal/RichText.vue'
import { withCss } from '../../internal/css'
import { ListContextKey, type ListItemCss, type ListSize, type ListState } from './types'

export interface ListItemProps {
  content?: string
  size?: ListSize
  state?: ListState
  /** Icon name, `false` for no icon, `true`/unset for the state's default icon. */
  icon?: string | boolean
  /** Render `content` as HTML. Pass trusted strings only. */
  html?: boolean
  css?: ListItemCss
}

const props = withDefaults(defineProps<ListItemProps>(), {
  html: undefined,
})

const list = inject(ListContextKey, null)

const size = computed(() => props.size ?? list?.value.size ?? 'md')
const state = computed(() => props.state ?? list?.value.state ?? 'default')
const html = computed(() => props.html ?? list?.value.html ?? false)

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
      <RichText
        v-if="props.content"
        as="div"
        :text="props.content"
        :html="html"
      />
    </slot>
  </li>
</template>
