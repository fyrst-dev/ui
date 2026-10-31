<script setup lang="ts">
import { computed, provide } from 'vue'
import { listStyles } from './styles'
import { withCss } from '../../internal/css'
import ListItem, { type ListItemProps } from './ListItem.vue'
import { ListContextKey, type ListRootCss, type ListSize, type ListState } from './types'

const props = withDefaults(defineProps<{
  items?: ListItemProps[]
  size?: ListSize
  state?: ListState
  icon?: ListItemProps['icon']
  css?: ListRootCss
}>(), {
  icon: true,
  size: 'md',
  state: 'default',
})

provide(ListContextKey, computed(() => ({
  size: props.size,
  state: props.state,
})))

const styles = computed(() => listStyles.raw({ size: props.size, state: props.state }))
</script>

<template>
  <ul :class="withCss(styles.list, props.css?.root)">
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
