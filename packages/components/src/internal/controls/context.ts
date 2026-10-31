import type { ComputedRef, InjectionKey } from 'vue'
import { createInjectionKey } from '../../composables/injection-key'

export type FieldContext = {
  fieldId: ComputedRef<string>
  errorId: ComputedRef<string | null>
  messageId: ComputedRef<string | null>
  hasError: ComputedRef<boolean>
  errorMessage: ComputedRef<string | null>
  message: ComputedRef<string | null>
  /** Render the message and error as HTML (trusted strings only). */
  html: ComputedRef<boolean>
}

export const fieldContextKey: InjectionKey<FieldContext> = createInjectionKey<FieldContext>('fieldContext')
