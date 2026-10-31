import type { ControlSize } from '../../internal/controls/types'

/** Props every composed field (`Field.Input`, `Field.Select`, …) accepts. */
export interface FieldSharedProps {
  /** Base id. Auto-generated when omitted. */
  id?: string
  name?: string
  label?: string | null
  disabled?: boolean
  required?: boolean
  size?: ControlSize
  /** Helper text below the control, rendered as HTML. */
  message?: string | null
  /** Error text below the control, rendered as HTML. Also marks the control invalid. */
  error?: string | null
  /** Extra classes for the control element. */
  class?: unknown
}
