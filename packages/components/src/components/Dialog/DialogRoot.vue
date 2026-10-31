<script setup lang="ts">
/**
 * @component DialogRoot
 * @description Modal dialog built on reka-ui Dialog primitives.
 *
 * @prop {boolean} [open=false] - Controlled open state (`v-model:open`).
 * @prop {string} [title] - Dialog title text.
 * @prop {string} [description] - Dialog description text.
 * @prop {string} [closeLabel='Close'] - Accessible label for the close button.
 * @prop {DialogCss} [css] - Style overrides per slot. Wrap values in `css.raw()`.
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
import { dialogStyles } from './styles'
import { withCss, type CssMap } from '../../internal/css'

export type DialogCss = CssMap<'overlay' | 'content' | 'header' | 'titleWrap' | 'title' | 'description' | 'close' | 'body'>

const open = defineModel<boolean>('open', { default: false })

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  closeLabel?: string
  css?: DialogCss
}>(), {
  closeLabel: 'Close',
})

const styles = dialogStyles.raw()
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogPortal>
      <DialogOverlay :class="withCss(styles.overlay, props.css?.overlay)" />
      <DialogContent :class="withCss(styles.content, props.css?.content)">
        <slot name="header">
          <div :class="withCss(styles.header, props.css?.header)">
            <div :class="withCss(styles.titleWrap, props.css?.titleWrap)">
              <slot name="title">
                <DialogTitle
                  v-if="props.title"
                  :class="withCss(styles.title, props.css?.title)"
                >
                  {{ props.title }}
                </DialogTitle>
              </slot>
              <slot name="description">
                <DialogDescription
                  v-if="props.description"
                  :class="withCss(styles.description, props.css?.description)"
                >
                  {{ props.description }}
                </DialogDescription>
              </slot>
            </div>
            <DialogClose
              type="button"
              :aria-label="props.closeLabel"
              :class="withCss(styles.close, props.css?.close)"
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
        <div :class="withCss(styles.body, props.css?.body)">
          <slot />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
