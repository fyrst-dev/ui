import { computed, onMounted, onUnmounted, readonly, type Ref, ref } from 'vue'

export function useFormData(form: HTMLFormElement | null) {
    const formData = computed(() => {
        if (form) {
            return new FormData(form)
        }
        return null
    })

    const jsonData = computed(() => {
        if (formData.value) {
            return Object.fromEntries(formData.value.entries())
        }
        return null
    })

    return {
        formData: readonly(formData),
        jsonData: readonly(jsonData)
    }
}