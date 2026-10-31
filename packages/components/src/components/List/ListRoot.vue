<script setup lang="ts">
import { computed, provide } from 'vue'
import { fyList } from 'styled-system/recipes'
import { withCss } from '../../internal/css'
import ListItem, { type ListItemProps } from './ListItem.vue'
import { ListContextKey, type ListRootCss, type ListSize, type ListState } from './types'

const props = withDefaults(defineProps<{
  items?: ListItemProps[]
  size?: ListSize
  state?: ListState
  icon?: ListItemProps['icon']
  /** Render item `content` as HTML. Pass trusted strings only. */
  html?: boolean
  css?: ListRootCss
}>(), {
  icon: true,
  size: 'md',
  state: 'default',
})

provide(ListContextKey, computed(() => ({
  size: props.size,
  state: props.state,
  html: props.html,
})))

const classes = computed(() => fyList({ size: props.size, state: props.state }))
</script>

<template>
  <ul :class="withCss(classes.list, props.css?.root)">
    <slot>
      <ListItem
        v-for="(item, index) in items"
        :key="index"
        :icon="props.icon"
        v-bind="item"
      />
    </slot>
  </ul>
</template>
