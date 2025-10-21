import FieldText from './FieldText.vue'
import FieldBase from './FieldBase.vue'
import FieldLabel from './FieldLabel.vue'

// Named exports for direct imports
export { FieldText, FieldBase, FieldLabel }

// Default export for namespaced usage: <Field.Text />
export default {
    Text: FieldText,
    Base: FieldBase,
    Label: FieldLabel
}