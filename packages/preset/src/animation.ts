import { defineAnimationStyles, defineKeyframes } from '@pandacss/dev'

export const animationStyles: ReturnType<typeof defineAnimationStyles> = defineAnimationStyles({
  slideDown: {
    value: {
      animationName: 'slideDown',
      animationDuration: '300ms',
    },
  },
  slideUp: {
    value: {
      animationName: 'slideUp',
      animationDuration: '300ms',
    },
  },
})

export const keyframes = defineKeyframes({
  slideDown: {
    '0%': {
      height: '0',
      visibility: 'hidden',
    },
    '100%': {
      height: 'auto',
      visibility: 'visible',
    },
  },
  slideUp: {
    '0%': {
      height: 'auto',
      visibility: 'visible',
    },
    '100%': {
      height: '0',
      visibility: 'hidden',
    },
  },
})
