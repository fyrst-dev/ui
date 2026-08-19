<script setup lang="ts">
/**
 * @component ControlSwitch
 * @description Switch control built on reka-ui Switch primitives.
 */
import { computed, inject } from 'vue'
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { css as pandaCss } from 'styled-system/css'
import { fieldContextKey } from './context'
import { switchStyles } from './switchStyles'
import type { SwitchCss } from '../../components/Switch/types'
import type { ControlSize } from './types'

export interface Props {
  modelValue?: boolean | null
  id?: string
  name?: string
  label?: string | null
  disabled?: boolean
  required?: boolean
  size?: ControlSize
  css?: SwitchCss
  class?: unknown
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  id: '',
  name: '',
  label: null,
  disabled: false,
  required: false,
  size: 'md',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const fieldContext = inject(fieldContextKey, null)

const inputId = computed(() => props.id || fieldContext?.fieldId.value || undefined)

const ariaDescribedBy = computed(() => {
  if (!fieldContext) return undefined

  const ids: string[] = []
  if (fieldContext.errorId.value) ids.push(fieldContext.errorId.value)
  if (fieldContext.messageId.value) ids.push(fieldContext.messageId.value)

  return ids.length > 0 ? ids.join(' ') : undefined
})

const checked = computed(() => Boolean(props.modelValue))
const hasError = computed(() => fieldContext?.hasError.value ?? false)

const styles = computed(() => switchStyles.raw({ size: props.size }))

const handleUpdate = (value: boolean) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <component
    :is="label ? 'label' : 'div'"
    :class="[pandaCss(styles.root, props.css?.root), props.class]"
    :data-disabled="disabled ? '' : undefined"
  >
    <SwitchRoot
      :id="inputId"
      :name="name"
      :required="required"
      :disabled="disabled"
      :model-value="checked"
      :aria-invalid="hasError"
      :aria-describedby="ariaDescribedBy"
      :data-invalid="hasError ? '' : undefined"
      :class="pandaCss(styles.track, props.css?.track)"
      @update:model-value="handleUpdate"
    >
      <SwitchThumb :class="pandaCss(styles.thumb, props.css?.thumb)" />
    </SwitchRoot>
    <span
      v-if="label"
      :class="pandaCss(styles.label, props.css?.label)"
    >{{ label }}</span>
  </component>
</template>
