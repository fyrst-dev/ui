<script setup lang="ts">
/**
 * @component ControlSelect
 * @description Select control built on reka-ui Select primitives.
 */
import { computed, inject } from 'vue'
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'
import { css } from 'styled-system/css'
import { controlStyles } from './controlStyles'
import { fieldContextKey } from './context'
import type { ControlSize, ControlValid, FieldOption } from './types'

const props = withDefaults(defineProps<{
  modelValue?: string | null
  id?: string
  name?: string
  options?: FieldOption[]
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  size?: ControlSize
  valid?: ControlValid
  class?: unknown
}>(), {
  modelValue: null,
  id: '',
  name: '',
  options: () => [],
  placeholder: null,
  disabled: false,
  required: false,
  size: 'md',
  valid: 'none',
  class: undefined,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
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

const isInvalid = computed(() => {
  if (props.valid === true) return false
  if (props.valid === false) return true
  return fieldContext?.hasError.value ?? false
})

const triggerClass = computed(() => [
  controlStyles({ size: props.size, valid: props.valid }),
  css({
    justifyContent: 'space-between',
    gap: 'md',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    textAlign: 'left',
  }),
  props.class,
])

const contentClass = css({
  zIndex: '50',
  overflow: 'hidden',
  backgroundColor: 'grey.black',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'grey.dusk',
  borderRadius: 'lg',
  boxShadow: 'lg',
  minWidth: 'var(--reka-select-trigger-width)',
  maxHeight: '18rem',
  _light: {
    backgroundColor: 'white',
    borderColor: 'grey.200',
  },
})

const viewportClass = css({
  p: 'xs',
})

const itemClass = css({
  'display': 'flex',
  'alignItems': 'center',
  'gap': 'sm',
  'borderRadius': 'md',
  'paddingX': 'md',
  'paddingY': 'sm',
  'paddingLeft': '2rem',
  'fontSize': 'md',
  'fontWeight': '450',
  'color': 'neutral',
  'cursor': 'pointer',
  'outline': 'none',
  'userSelect': 'none',
  'position': 'relative',
  '&[data-highlighted]': {
    backgroundColor: 'grey.night',
  },
  '&[data-disabled]': {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
  '_light': {
    'color': 'grey.night',
    '&[data-highlighted]': {
      backgroundColor: 'grey.100',
    },
  },
})

const handleUpdate = (value: unknown) => {
  if (value == null) return
  emit('update:modelValue', String(value))
}
</script>

<template>
  <SelectRoot
    :model-value="modelValue || undefined"
    :name="name"
    :required="required"
    :disabled="disabled"
    @update:model-value="handleUpdate"
  >
    <SelectTrigger
      :id="inputId"
      :class="triggerClass"
      :aria-invalid="isInvalid"
      :aria-describedby="ariaDescribedBy"
    >
      <SelectValue :placeholder="placeholder || undefined" />
      <SelectIcon as-child>
        <span class="icon icon-caret-down-bold" />
      </SelectIcon>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        position="popper"
        :side-offset="4"
        :class="contentClass"
      >
        <SelectViewport :class="viewportClass">
          <SelectItem
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
            :class="itemClass"
          >
            <span
              :class="css({
                position: 'absolute',
                left: 'md',
                display: 'inline-flex',
                width: '1em',
                color: 'primary',
              })"
            >
              <SelectItemIndicator>
                <span class="icon icon-check-bold" />
              </SelectItemIndicator>
            </span>
            <SelectItemText>{{ option.label }}</SelectItemText>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
