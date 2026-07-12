import { cva } from 'styled-system/css'

export const controlStyles = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minWidth: '200px',
    backgroundColor: 'grey.black',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'grey.dusk',
    borderRadius: 'lg',
    outlineWidth: '3px',
    outlineColor: 'transparent',
    outlineOffset: '0px',
    outlineStyle: 'solid',
    fontWeight: '450',
    lineHeight: '1.5',
    color: 'neutral',
    transition: 'all 300ms',
    _placeholder: {
      color: 'lucid.600',
    },
    _hover: {
      borderColor: 'grey.400',
    },
    _focus: {
      outlineColor: 'primary/50',
      borderColor: 'primary !important',
    },
    _disabled: {
      opacity: '0.5',
      cursor: 'not-allowed',
    },
    _light: {
      backgroundColor: 'white',
      borderColor: 'grey.200',
      color: 'grey.night',
      _hover: {
        borderColor: 'grey.300',
      },
    },
  },
  variants: {
    size: {
      sm: {
        paddingX: 'md',
        paddingY: 'xs',
        fontSize: 'sm',
      },
      md: {
        paddingX: 'lg',
        paddingY: 'sm',
        fontSize: 'md',
      },
      lg: {
        paddingX: 'xl',
        paddingY: 'md',
        fontSize: 'lg',
      },
    },
    valid: {
      true: {
        borderColor: 'success !important',
        _focus: {
          borderColor: 'success !important',
          outlineColor: 'success/50 !important',
        },
      },
      false: {
        borderColor: 'danger !important',
        _focus: {
          borderColor: 'danger !important',
          outlineColor: 'danger/50 !important',
        },
      },
      none: {},
    },
  },
  defaultVariants: {
    size: 'md',
    valid: 'none',
  },
})

export type ControlSize = 'sm' | 'md' | 'lg'
export type ControlValid = true | false | 'none'

export type FormFieldOption = {
  label: string
  value: string
  disabled?: boolean
}
