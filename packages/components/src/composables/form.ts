import { toValue, type MaybeRefOrGetter } from 'vue'

export type FormJson = Record<string, FormDataEntryValue>

/**
 * Read a form's current values on demand.
 *
 * Accepts the element, a template ref, or a getter, so it can be called in
 * `setup` before the form mounts. Each call reads the DOM at that moment;
 * nothing is cached.
 *
 * @example
 * const form = useTemplateRef<HTMLFormElement>('form')
 * const { getJson } = useFormData(form)
 * const onSubmit = () => send(getJson())
 */
export function useFormData(form: MaybeRefOrGetter<HTMLFormElement | null | undefined>) {
  const getFormData = (): FormData | null => {
    const element = toValue(form)
    return element ? new FormData(element) : null
  }

  const getJson = (): FormJson | null => {
    const data = getFormData()
    return data ? Object.fromEntries(data.entries()) : null
  }

  return {
    getFormData,
    getJson,
  }
}
