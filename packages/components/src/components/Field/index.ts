import FieldText from './FieldText.vue'
import FieldBase from './FieldBase.vue'

// Named exports for direct imports
export { FieldText, FieldBase }

// Default export for namespaced usage: <Field.Text />
export default {
    Text: FieldText,
    Base: FieldBase
}