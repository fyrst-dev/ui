import FieldInput from './FieldInput.vue'
import FieldBase from './FieldBase.vue'
import FieldLabel from './FieldLabel.vue'
import FieldError from './FieldError.vue'
import FieldMessage from './FieldMessage.vue'

// Named exports for direct imports
export { FieldInput, FieldBase, FieldLabel, FieldError, FieldMessage }

// Default export for namespaced usage: <Field.Base />, <Field.Label />, etc.
export default {
  Input: FieldInput,
  Base: FieldBase,
  Label: FieldLabel,
  Error: FieldError,
  Message: FieldMessage,
}
