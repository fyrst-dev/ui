import FormInput from './FormInput.vue'
import FormTextarea from './FormTextarea.vue'
import FormCheckbox from './FormCheckbox.vue'
import FormRadioGroup from './FormRadioGroup.vue'
import FormSelect from './FormSelect.vue'
import FormPrompt from './FormPrompt.vue'
import FormPromptFooter from './FormPromptFooter.vue'

export type { ControlSize, ControlValid, FormFieldOption } from './controlStyles'

export {
  FormInput,
  FormTextarea,
  FormCheckbox,
  FormRadioGroup,
  FormSelect,
  FormPrompt,
  FormPromptFooter,
}

export default {
  Input: FormInput,
  Textarea: FormTextarea,
  Checkbox: FormCheckbox,
  RadioGroup: FormRadioGroup,
  Select: FormSelect,
  Prompt: FormPrompt,
  PromptFooter: FormPromptFooter,
}
