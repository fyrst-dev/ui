import ControlInput from './ControlInput.vue'
import ControlTextarea from './ControlTextarea.vue'
import ControlSelect from './ControlSelect.vue'
import ControlCheckbox from './ControlCheckbox.vue'
import ControlRadioGroup from './ControlRadioGroup.vue'
import ControlSwitch from './ControlSwitch.vue'

export type { ControlSize, ControlValid, FieldOption } from './types'
export { fieldContextKey } from './context'
export type { FieldContext } from './context'
export { controlStyles } from './controlStyles'
export { switchStyles } from './switchStyles'
export type { SwitchStyles } from './switchStyles'

export {
  ControlInput,
  ControlTextarea,
  ControlSelect,
  ControlCheckbox,
  ControlRadioGroup,
  ControlSwitch,
}

export default {
  Input: ControlInput,
  Textarea: ControlTextarea,
  Select: ControlSelect,
  Checkbox: ControlCheckbox,
  RadioGroup: ControlRadioGroup,
  Switch: ControlSwitch,
}
