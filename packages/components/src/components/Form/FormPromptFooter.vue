<script setup lang="ts">
import { fyFormPrompt } from 'styled-system/recipes'
import { withCss, type CssMap } from '../../internal/css'

export type FormPromptFooterCss = CssMap<'root' | 'inputs' | 'action'>

const props = defineProps<{
  css?: FormPromptFooterCss
}>()

const classes = fyFormPrompt()
</script>

<template>
  <div :class="withCss(classes.footer, props.css?.root)">
    <div :class="withCss(classes.inputs, props.css?.inputs)">
      <slot name="inputs" />
    </div>

    <div :class="withCss(classes.action, props.css?.action)">
      <slot name="action" />
    </div>
  </div>
</template>
