<script setup lang="ts">
/**
 * @component FlyoutDropdown
 * @description The flyout panel (reka-ui PopoverContent). Use it inside `Flyout.Root`,
 * usually through the root's `dropdown` slot.
 */
import { computed, inject } from 'vue'
import { PopoverContent } from 'reka-ui'
import { flyoutStyles } from './styles'
import { withCss } from '../../internal/css'
import { FlyoutContextKey, type FlyoutDropdownCss } from './types'

const props = defineProps<{
  /** Side the panel aligns to. Defaults to the root's `direction`. */
  direction?: 'left' | 'right'
  css?: FlyoutDropdownCss
}>()

const flyout = inject(FlyoutContextKey, null)

const align = computed(() => (props.direction ?? flyout?.direction.value ?? 'left') === 'left' ? 'start' : 'end')

// A hover opens the panel without moving focus; a click moves focus in, as usual.
const onOpenAutoFocus = (event: Event) => {
  if (flyout?.openedBy.value === 'hover') event.preventDefault()
}

const styles = flyoutStyles.raw()
</script>

<template>
  <PopoverContent
    side="bottom"
    :align="align"
    :side-offset="0"
    :avoid-collisions="false"
    :class="withCss(styles.content, props.css?.root)"
    @open-auto-focus="onOpenAutoFocus"
  >
    <slot />
  </PopoverContent>
</template>
