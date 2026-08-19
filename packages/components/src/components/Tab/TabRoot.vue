<script setup lang="ts">
import { TabsList, TabsRoot } from 'reka-ui'
import { computed, provide, ref, watch } from 'vue'
import { css } from 'styled-system/css'
import TabItem from './TabItem.vue'
import { tabStyles } from './styles'
import { TabContextKey, type TabChangePayload, type TabItemData } from './types'

const props = withDefaults(defineProps<{
  modelValue?: string
  defaultValue?: string
  orientation?: 'horizontal' | 'vertical'
  loop?: boolean
  items?: TabItemData[]
}>(), {
  orientation: 'horizontal',
  loop: true,
  items: () => [],
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'change': [payload: TabChangePayload]
}>()

const internalValue = ref<string | undefined>(props.modelValue ?? props.defaultValue ?? undefined)

watch(() => props.modelValue, (value) => {
  internalValue.value = value
})

const styles = computed(() => tabStyles.raw({ state: 'inactive' }))

provide(TabContextKey, {
  modelValue: computed(() => internalValue.value),
})

const handleUpdate = (value: string | number) => {
  const stringValue = String(value)
  const oldValue = internalValue.value
  const oldIndex = props.items.findIndex(i => i.value === oldValue)
  const newIndex = props.items.findIndex(i => i.value === stringValue)
  const direction: 'prev' | 'next'
    = oldIndex !== -1 && newIndex !== -1 && newIndex < oldIndex ? 'prev' : 'next'
  internalValue.value = stringValue
  emit('update:modelValue', stringValue)
  emit('change', { value: stringValue, direction })
}
</script>

<template>
  <TabsRoot
    :model-value="internalValue"
    :orientation="orientation"
    @update:model-value="handleUpdate"
  >
    <TabsList
      :class="css(styles.root)"
      :loop="loop"
    >
      <TabItem
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :label="item.label"
        :icon="item.icon"
        :disabled="item.disabled"
      />
      <slot />
    </TabsList>
  </TabsRoot>
</template>
