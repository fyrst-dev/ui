import { onMounted, onUnmounted, readonly, ref, toValue, type MaybeRefOrGetter, type Ref } from 'vue'

export type FlyoutOpenReason = 'hover' | 'click'

export interface FlyoutOptions {
  /** Open while a mouse hovers the flyout. @default true */
  openOnHover?: MaybeRefOrGetter<boolean>
  /** Delay before a hover-opened flyout closes after the pointer leaves, in ms. @default 150 */
  closeDelay?: number
  /**
   * Element to bind the hover listeners to. `FlyoutRoot` binds them itself;
   * pass `el` only when you build your own flyout markup.
   */
  el?: Ref<HTMLElement | null | undefined>
}

/**
 * Open state for a hover-and-click flyout.
 *
 * - A mouse hover opens it; leaving closes it after `closeDelay`.
 * - A click while it is hover-open pins it open instead of closing it.
 * - A click while it is closed or pinned toggles it.
 * Touch and pen input ignore hover and only use clicks.
 */
export function useFlyout(options: FlyoutOptions = {}) {
  const open = ref(false)
  const openedBy = ref<FlyoutOpenReason | null>(null)
  const closeDelay = options.closeDelay ?? 150
  let closeTimer: ReturnType<typeof setTimeout> | undefined

  const clearCloseTimer = () => {
    if (closeTimer !== undefined) {
      clearTimeout(closeTimer)
      closeTimer = undefined
    }
  }

  const setOpen = (value: boolean, reason: FlyoutOpenReason = 'click') => {
    clearCloseTimer()
    open.value = value
    openedBy.value = value ? reason : null
  }

  const toggle = () => setOpen(!open.value, 'click')

  /** Keep a hover-opened flyout open after the pointer leaves. */
  const pin = () => {
    if (open.value && openedBy.value === 'hover') {
      openedBy.value = 'click'
    }
  }

  const hoverEnabled = (event: PointerEvent | MouseEvent) =>
    (toValue(options.openOnHover) ?? true) && (!('pointerType' in event) || event.pointerType === 'mouse')

  const onPointerEnter = (event: PointerEvent | MouseEvent) => {
    if (!hoverEnabled(event)) return
    clearCloseTimer()
    if (!open.value) {
      setOpen(true, 'hover')
    }
  }

  const onPointerLeave = (event: PointerEvent | MouseEvent) => {
    if (!hoverEnabled(event) || openedBy.value !== 'hover') return
    clearCloseTimer()
    closeTimer = setTimeout(() => setOpen(false), closeDelay)
  }

  onMounted(() => {
    options.el?.value?.addEventListener('pointerenter', onPointerEnter)
    options.el?.value?.addEventListener('pointerleave', onPointerLeave)
  })

  onUnmounted(() => {
    clearCloseTimer()
    options.el?.value?.removeEventListener('pointerenter', onPointerEnter)
    options.el?.value?.removeEventListener('pointerleave', onPointerLeave)
  })

  return {
    open: readonly(open),
    openedBy: readonly(openedBy),
    setOpen,
    toggle,
    pin,
    onPointerEnter,
    onPointerLeave,
  }
}
