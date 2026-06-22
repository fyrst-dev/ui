<template>
  <ul
    :class="css(styles.list, props.css?.root)"
  >
    <slot>
      <ListItem
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        :size="props.size"
        :state="props.state"
        :icon="props.icon"
      />
    </slot>
  </ul>
</template>

<script setup lang="ts">
import { listStyles } from './styles'
import { ListStylesKey, type ListRootCss } from './types'
import { computed, provide } from 'vue'
import { css } from 'styled-system/css'
import ListItem, { type ListItemProps } from './ListItem.vue'

const props = withDefaults(defineProps<{
  items?: ListItemProps[]
  size?: ListItemProps['size']
  state?: ListItemProps['state']
  icon?: ListItemProps['icon']
  css?: ListRootCss
}>(), {
  icon: true,
  size: 'md',
  state: 'default',
})

const styles = computed(() => listStyles.raw({
  size: props.size,
  state: props.state,
}))
provide(ListStylesKey, styles)
</script>
