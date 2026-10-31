<script setup lang="ts">
/**
 * @component ControlUrl
 * @description URL input group with a clickable http(s) prefix and paste sanitization.
 */
import { computed, ref, watch } from 'vue'
import { fyUrl } from 'styled-system/recipes'
import { withCss } from '../css'
import { useFieldControl } from './useFieldControl'
import type { UrlCss, ControlSize, ControlValid } from './types'
import {
  type UrlProtocol,
  joinUrl,
  parseUrlValue,
  sanitizeHostPathInput,
} from './urlUtils'

const props = withDefaults(defineProps<{
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
  autocomplete: 'url',
  size: 'md',
  valid: 'none',
  defaultProtocol: 'https',
})

const model = defineModel<string | null>()

const { id, describedBy, valid, invalid } = useFieldControl(props)

const protocol = ref<UrlProtocol>(props.defaultProtocol)
const hostPath = ref('')

watch(
  model,
  (value) => {
    if (!(value ?? '').trim()) {
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
const protocolLabel = computed(() => `${protocol.value}://`)
const isSecure = computed(() => protocol.value === 'https')

const classes = computed(() => fyUrl({
  size: props.size,
  valid: valid.value,
  secure: isSecure.value,
}))

const emitJoined = () => {
  model.value = fullUrl.value
}

const toggleProtocol = () => {
  if (props.disabled) return
  protocol.value = protocol.value === 'https' ? 'http' : 'https'
  emitJoined()
}

const handleInput = (event: Event) => {
  const sanitized = sanitizeHostPathInput((event.target as HTMLInputElement).value)
  if (sanitized.protocol) {
    protocol.value = sanitized.protocol
  }
  hostPath.value = sanitized.hostPath
  emitJoined()
}
</script>

<template>
  <div :class="[withCss(classes.root, props.css?.root), props.class]">
    <input
      v-if="name"
      type="hidden"
      :name="name"
      :value="fullUrl"
    >

    <button
      type="button"
      :class="withCss(classes.protocol, props.css?.protocol)"
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
      :id="id"
      type="text"
      inputmode="url"
      :class="withCss(classes.input, props.css?.input)"
      :placeholder="placeholder || undefined"
      :value="hostPath"
      :disabled="disabled"
      :required="required"
      :autocomplete="autocomplete || undefined"
      :aria-invalid="invalid"
      :aria-describedby="describedBy"
      @input="handleInput"
    >
  </div>
</template>
