<script setup lang="ts">
/**
 * @component ControlSwitch
 * @description Switch built on reka-ui Switch primitives.
 */
import { computed } from 'vue'
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { fySwitch } from 'styled-system/recipes'
import { withCss } from '../css'
import { useFieldControl } from './useFieldControl'
import type { SwitchCss } from '../../components/Switch/types'
import type { ControlSize } from './types'

const props = withDefaults(defineProps<{
  id?: string
  name?: string
  label?: string | null
  disabled?: boolean
  required?: boolean
  size?: ControlSize
  css?: SwitchCss
  class?: unknown
}>(), {
  size: 'md',
})

const model = defineModel<boolean | null>({ default: false })

const { id, describedBy, invalid } = useFieldControl(props)

const classes = computed(() => fySwitch({ size: props.size }))

const handleUpdate = (value: boolean) => {
  model.value = value
}
</script>

<template>
  <component
    :is="label ? 'label' : 'div'"
    :class="[withCss(classes.root, props.css?.root), props.class]"
    :data-disabled="disabled ? '' : undefined"
  >
    <SwitchRoot
      :id="id"
      :name="name || undefined"
      :required="required"
      :disabled="disabled"
      :model-value="Boolean(model)"
      :aria-invalid="invalid"
      :aria-describedby="describedBy"
      :data-invalid="invalid ? '' : undefined"
      :class="withCss(classes.track, props.css?.track)"
      @update:model-value="handleUpdate"
    >
      <SwitchThumb :class="withCss(classes.thumb, props.css?.thumb)" />
    </SwitchRoot>
    <span
      v-if="label"
      :class="withCss(classes.label, props.css?.label)"
    >{{ label }}</span>
  </component>
</template>
