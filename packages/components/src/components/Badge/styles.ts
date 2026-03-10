import { cva } from 'styled-system/css'

export const badgeStyles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    lineHeight: '1',
    borderRadius: 'full',
    userSelect: 'none',
    transition: 'all 300ms',
  },
  variants: {
    color: {
      default: {
        backgroundColor: 'grey.night',
        color: 'neutral',
      },
      primary: {
        backgroundColor: 'primary',
        color: 'grey.night',
      },
      success: {
        backgroundColor: 'success',
        color: 'grey.night',
      },
      info: {
        backgroundColor: 'info',
        color: 'grey.night',
      },
    },
    size: {
      sm: {
        fontSize: 'xs',
        paddingBlock: '2xs',
        paddingInline: 'sm',
      },
      md: {
        fontSize: 'sm',
        paddingBlock: 'xs',
        paddingInline: 'md',
      },
      lg: {
        fontSize: 'md',
        paddingBlock: 'sm',
        paddingInline: 'lg',
      },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
})
