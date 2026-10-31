import { defineSlotRecipe } from '@pandacss/dev'

export const fyFlyout = defineSlotRecipe({
  className: 'fy-flyout',
  slots: ['root', 'trigger', 'content'],
  base: {
    root: {
      position: 'relative',
      zIndex: 20,
    },
    trigger: {
      cursor: 'pointer',
      fontFamily: 'inherit',
    },
    content: {
      'zIndex': 50,
      // Transparent gap between trigger and panel: the pointer stays inside the
      // flyout while it moves down, so hover does not close it.
      'paddingTop': 'sm',
      'outline': 'none',
      '&[data-state="open"]': {
        animationName: 'flyoutIn',
        animationDuration: '200ms',
      },
      '&[data-state="closed"]': {
        animationName: 'flyoutOut',
        animationDuration: '200ms',
      },
    },
  },
})
