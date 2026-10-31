<script setup lang="ts">
/**
 * @component FieldUrl
 * @description URL field with a clickable protocol prefix, label, helper text, and error.
 */
import FieldBase from './FieldBase.vue'
import FieldLabel from './FieldLabel.vue'
import FieldFooter from './FieldFooter.vue'
import ControlUrl from '../../internal/controls/ControlUrl.vue'
import type { FieldSharedProps } from './types'
import type { UrlCss } from '../../internal/controls/types'
import type { UrlProtocol } from '../../internal/controls/urlUtils'

const props = withDefaults(defineProps<FieldSharedProps & {
  placeholder?: string | null
  autocomplete?: string | null
  defaultProtocol?: UrlProtocol
  css?: UrlCss
}>(), {
  size: 'md',
  autocomplete: 'url',
  defaultProtocol: 'https',
})

const model = defineModel<string | null>()
</script>

<template>
  <FieldBase
    :id="id || undefined"
    :error="error"
    :message="message"
  >
    <FieldLabel
      v-if="label"
      :label="label"
      :required="required"
      size="sm"
    />

    <ControlUrl
      v-model="model"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :default-protocol="defaultProtocol"
      :css="props.css"
      :name="name"
      :disabled="disabled"
      :required="required"
      :size="size"
      :class="props.class"
    />

    <FieldFooter />
  </FieldBase>
</template>
