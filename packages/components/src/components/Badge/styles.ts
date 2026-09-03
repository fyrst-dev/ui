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
        backgroundColor: 'success.subtle',
        color: 'white',
        borderColor: 'success.subtle',
      },
      info: {
        backgroundColor: 'info.subtle',
        color: 'white',
        borderColor: 'info.subtle',
      },
      danger: {
        backgroundColor: 'danger.subtle',
        color: 'white',
        borderColor: 'danger.subtle',
      },
    },
    size: {
      sm: {
        fontSize: {
          base: 'xs',
          lg: 'sm',
        },
        gap: {
          base: 'xs',
        },
        paddingBlock: {
          base: 'xs',
        },
        paddingInline: {
          base: 'sm',
          lg: 'md',
        },
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
        fontSize: {
          base: 'md',
          lg: 'lg',
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
          base: 'lg',
          lg: 'xl',
        },
      },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
})
