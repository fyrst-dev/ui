<script setup lang="ts">
/**
 * @component DialogRoot
 * @description Modal dialog built on reka-ui Dialog primitives.
 *
 * @prop {boolean} [open=false] - Controlled open state (`v-model:open`).
 * @prop {string} [title] - Dialog title text.
 * @prop {string} [description] - Dialog description text.
 * @prop {string} [closeLabel='Close'] - Accessible label for the close button.
 *
 * @slot default - Dialog body content.
 * @slot title - Override the title region.
 * @slot description - Override the description region.
 * @slot close-icon - Override the close button icon.
 * @slot header - Override the entire header.
 */
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from 'reka-ui'
import { computed } from 'vue'
import { dialogStyles } from './styles'

const open = defineModel<boolean>('open', { default: false })

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  closeLabel?: string
}>(), {
  title: undefined,
  description: undefined,
  closeLabel: 'Close',
})

const classes = computed(() => dialogStyles())
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogPortal>
      <DialogOverlay :class="classes.overlay" />
      <DialogContent :class="classes.content">
        <slot name="header">
          <div :class="classes.header">
            <div :class="classes.titleWrap">
              <slot name="title">
                <DialogTitle
                  v-if="props.title"
                  :class="classes.title"
                >
                  {{ props.title }}
                </DialogTitle>
              </slot>
              <slot name="description">
                <DialogDescription
                  v-if="props.description"
                  :class="classes.description"
                >
                  {{ props.description }}
                </DialogDescription>
              </slot>
            </div>
            <DialogClose
              type="button"
              :aria-label="props.closeLabel"
              :class="classes.close"
            >
              <slot name="close-icon">
                <span
                  class="icon icon-x-bold"
                  aria-hidden="true"
                />
              </slot>
            </DialogClose>
          </div>
        </slot>
        <div :class="classes.body">
          <slot />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
