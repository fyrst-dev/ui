<script setup lang="ts">
/**
 * @component ControlUrl
 * @description URL input group with clickable http(s) protocol prefix and paste sanitization.
 */
import { computed, inject, ref, watch } from 'vue'
import { css as pandaCss } from 'styled-system/css'
import { fieldContextKey } from './context'
import { urlStyles } from './urlStyles'
import type { UrlCss } from './urlStyles'
import type { ControlSize, ControlValid } from './types'
import {
  type UrlProtocol,
  joinUrl,
  parseUrlValue,
  sanitizeHostPathInput,
} from './urlUtils'

const props = withDefaults(defineProps<{
  modelValue?: string | null
  id?: string
  name?: string
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  autocomplete?: string | null
  size?: ControlSize
  valid?: ControlValid
  defaultProtocol?: UrlProtocol
  css?: UrlCss
  class?: unknown
}>(), {
  modelValue: null,
  id: '',
  name: '',
  placeholder: null,
  disabled: false,
  required: false,
  autocomplete: 'url',
  size: 'md',
  valid: 'none',
  defaultProtocol: 'https',
  css: undefined,
  class: undefined,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const fieldContext = inject(fieldContextKey, null)

const protocol = ref<UrlProtocol>(props.defaultProtocol)
const hostPath = ref('')

watch(
  () => props.modelValue,
  (value) => {
    const raw = (value ?? '').trim()
    if (!raw) {
      hostPath.value = ''
      return
    }
    const parsed = parseUrlValue(value, props.defaultProtocol)
    protocol.value = parsed.protocol
    hostPath.value = parsed.hostPath
  },
  { immediate: true },
)

const fullUrl = computed(() => joinUrl(protocol.value, hostPath.value))

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

const protocolLabel = computed(() => `${protocol.value}://`)
const isSecure = computed(() => protocol.value === 'https')

const styles = computed(() => urlStyles.raw({
  size: props.size,
  valid: props.valid,
  secure: isSecure.value,
}))

const emitJoined = () => {
  emit('update:modelValue', joinUrl(protocol.value, hostPath.value))
}

const toggleProtocol = () => {
  if (props.disabled) return
  protocol.value = protocol.value === 'https' ? 'http' : 'https'
  emitJoined()
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const sanitized = sanitizeHostPathInput(target.value)
  if (sanitized.protocol) {
    protocol.value = sanitized.protocol
  }
  hostPath.value = sanitized.hostPath
  emitJoined()
}
</script>

<template>
  <div :class="[pandaCss(styles.root, props.css?.root), props.class]">
    <input
      v-if="name"
      type="hidden"
      :name="name"
      :value="fullUrl"
    >

    <button
      type="button"
      :class="pandaCss(styles.protocol, props.css?.protocol)"
      :disabled="disabled"
      :aria-label="`Toggle protocol, currently ${protocolLabel}`"
      @click="toggleProtocol"
    >
      <span
        class="icon"
        :class="isSecure ? 'icon-lock-simple-bold' : 'icon-lock-simple-open-bold'"
        aria-hidden="true"
      />
      <span>{{ protocolLabel }}</span>
    </button>

    <input
      :id="inputId"
      type="text"
      inputmode="url"
      :class="pandaCss(styles.input, props.css?.input)"
      :placeholder="placeholder || undefined"
      :value="hostPath"
      :disabled="disabled"
      :required="required"
      :autocomplete="autocomplete || undefined"
      :aria-invalid="isInvalid"
      :aria-describedby="ariaDescribedBy"
      @input="handleInput"
    >
  </div>
</template>
