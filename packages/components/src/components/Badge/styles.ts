import { cva } from 'styled-system/css'

export const badgeStyles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    lineHeight: '1.2',
    borderRadius: 'pill',
    userSelect: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    transition: 'all 300ms',
  },
  variants: {
    color: {
      default: {
        backgroundColor: 'grey.night',
        color: 'neutral',
        borderColor: 'grey.dusk',
      },
      primary: {
        backgroundColor: 'primary',
        color: 'grey.night',
        borderColor: 'primary',
      },
      success: {
        backgroundColor: 'success',
        color: 'grey.night',
        borderColor: 'success',
      },
      info: {
        backgroundColor: 'info',
        color: 'grey.night',
        borderColor: 'info',
      },
    },
    size: {
      sm: {
        fontSize: 'sm',
        gap: 'xs',
        paddingBlock: 'xs',
        paddingInline: 'md',
      },
      md: {
        fontSize: {
          base: 'sm',
          lg: 'md',
        },
        gap: {
          base: 'xs',
          lg: 'sm',
        },
        paddingBlock: {
          base: 'xs',
          lg: 'sm',
        },
        paddingInline: {
          base: 'md',
          lg: 'lg',
        },
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
