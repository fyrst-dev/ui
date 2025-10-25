import { onMounted, onUnmounted, readonly, type Ref, ref } from 'vue'

export interface FlyoutOptions {
    el: Ref<HTMLElement | undefined>
}

export function useFlyout(options: FlyoutOptions) {
    const open = ref(false)

    const onFlyoutEnter = (event: MouseEvent) => {
        event.preventDefault()
        open.value = true
    } 
    const onFlyoutLeave = (event: MouseEvent) => {
        event.preventDefault()
        open.value = false
    }

    const toggle = () => {
        if (open.value) {
            open.value = false
        } else {
            open.value = true
        }
    }

    onMounted(() => {
        if (options.el.value) {
            options.el.value.addEventListener('mouseenter', onFlyoutEnter)
            options.el.value.addEventListener('mouseleave', onFlyoutLeave)
        }
    })
  
    onUnmounted(() => {
        if (options.el.value) {
            options.el.value.removeEventListener('mouseenter', onFlyoutEnter)
            options.el.value.removeEventListener('mouseleave', onFlyoutLeave)
        }
    })

    return {
        open: readonly(open),
        toggle,  
    }
}