<script setup lang="ts">
import { formPromptStyles } from './styles'
import { withCss, type CssMap } from '../../internal/css'

export type FormPromptFooterCss = CssMap<'root' | 'inputs' | 'action'>

const props = defineProps<{
  css?: FormPromptFooterCss
}>()

const styles = formPromptStyles.raw()
</script>

<template>
  <div :class="withCss(styles.footer, props.css?.root)">
    <div :class="withCss(styles.inputs, props.css?.inputs)">
      <slot name="inputs" />
    </div>

    <div :class="withCss(styles.action, props.css?.action)">
      <slot name="action" />
    </div>
  </div>
</template>
