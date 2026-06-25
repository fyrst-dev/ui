import { sva } from 'styled-system/css'

export const tabStyles = sva({
  slots: ['root', 'item'],
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2xs',
      backgroundColor: 'grey.black',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'grey.700',
      borderRadius: 'pill',
      padding: '2xs',
    },
    item: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'xs',
      paddingBlock: 'xs',
      paddingInline: 'lg',
      borderRadius: 'pill',
      fontSize: 'md',
      fontWeight: 'semibold',
      lineHeight: 'normal',
      color: 'neutral.DEFAULT',
      cursor: 'pointer',
      transitionProperty: 'background-color, color',
      transitionDuration: '200ms',
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },
  },
  variants: {
    state: {
      inactive: {
        item: {
          backgroundColor: 'transparent',
          _hover: {
            bgColor: 'grey.700'
          },
        },
      },
      active: {
        item: {
          backgroundColor: 'primary',
          color: 'neutral.inverse',
          cursor: 'default'
        },
      },
    },
  },
  defaultVariants: {
    state: 'inactive',
  },
})
