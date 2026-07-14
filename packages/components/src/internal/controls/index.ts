import ControlInput from './ControlInput.vue'
import ControlTextarea from './ControlTextarea.vue'
import ControlSelect from './ControlSelect.vue'
import ControlCheckbox from './ControlCheckbox.vue'
import ControlRadioGroup from './ControlRadioGroup.vue'

export type { ControlSize, ControlValid, FieldOption } from './types'
export { fieldContextKey } from './context'
export type { FieldContext } from './context'
export { controlStyles } from './controlStyles'

export {
  ControlInput,
  ControlTextarea,
  ControlSelect,
  ControlCheckbox,
  ControlRadioGroup,
}

export default {
  Input: ControlInput,
  Textarea: ControlTextarea,
  Select: ControlSelect,
  Checkbox: ControlCheckbox,
  RadioGroup: ControlRadioGroup,
}
