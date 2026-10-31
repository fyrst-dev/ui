<script setup lang="ts">
import { ref } from 'vue'
import { formPromptStyles } from './styles'
import { withCss, type CssMap } from '../../internal/css'

export type FormPromptCss = CssMap<'root' | 'form' | 'textarea'>

export interface FormPromptProps {
  /** Action URL for the form submission */
  action: string
  /** HTTP method for the form submission */
  method?: 'get' | 'post'
  /** ID attribute for the form */
  id: string
  /** Name attribute for the form */
  name: string
  /** Accessible label for screen readers */
  ariaLabel?: string
  /** Placeholder text for the textarea */
  placeholder?: string
  /** Style overrides per slot. Wrap values in `css.raw()`. */
  css?: FormPromptCss
}

const props = withDefaults(defineProps<FormPromptProps>(), {
  method: 'post',
})

const emit = defineEmits<{
  /** Emitted when form is submitted with the form element for full control */
  submit: [form: HTMLFormElement | null]
}>()

const promptForm = ref<HTMLFormElement | null>(null)

const styles = formPromptStyles.raw()

const handleSubmit = (event: Event) => {
  event.preventDefault()
  emit('submit', promptForm.value)
}
</script>

<template>
  <div :class="withCss(styles.root, props.css?.root)">
    <slot name="alert" />
    <form
      :id="id"
      ref="promptForm"
      :action="action"
      :method="method"
      :name="name"
      :aria-label="ariaLabel"
      :class="withCss(styles.form, props.css?.form)"
      @submit="handleSubmit"
    >
      <slot name="parameter" />
      <slot name="textarea">
        <textarea
          name="message"
          :class="withCss(styles.textarea, props.css?.textarea)"
          :placeholder="placeholder"
        />
      </slot>
      <slot name="footer" />
    </form>
  </div>
</template>
