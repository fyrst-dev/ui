import { computed, inject } from 'vue'
import { fieldContextKey } from './context'
import type { ControlValid } from './types'

/**
 * Wiring every control shares with `FieldBase`: the element id, ARIA links to
 * the message and error, and the validity state.
 *
 * `valid` on the control wins. Otherwise an error on the surrounding field
 * marks the control invalid.
 */
export function useFieldControl(props: { id?: string, valid?: ControlValid }) {
  const field = inject(fieldContextKey, null)

  const id = computed(() => props.id || field?.fieldId.value || undefined)

  const describedBy = computed(() => {
    const ids = [field?.errorId.value, field?.messageId.value].filter(Boolean)
    return ids.length > 0 ? ids.join(' ') : undefined
  })

  const valid = computed<ControlValid>(() => {
    if (props.valid === true || props.valid === false) {
      return props.valid
    }
    return field?.hasError.value ? false : 'none'
  })

  const invalid = computed(() => valid.value === false)

  return {
    id,
    describedBy,
    valid,
    invalid,
  }
}
