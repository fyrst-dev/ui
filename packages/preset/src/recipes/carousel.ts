import { defineSlotRecipe } from '@pandacss/dev'

export const fyCarousel = defineSlotRecipe({
  className: 'fy-carousel',
  slots: ['root', 'viewport', 'item', 'navigation', 'button'],
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100%',
    },
    viewport: {
      'display': 'flex',
      'flexDirection': 'row',
      'width': '100%',
      'overflowX': 'scroll',
      'scrollSnapType': 'x mandatory',
      'scrollBehavior': 'smooth',
      'scrollbarWidth': 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      'gap': '16px',
      'padding': '16px 0px',
    },
    item: {
      scrollSnapAlign: 'start',
      display: 'flex',
    },
    navigation: {},
    button: {
      fontFamily: 'inherit',
    },
  },
})
