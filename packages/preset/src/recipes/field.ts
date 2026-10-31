import { defineSlotRecipe } from '@pandacss/dev'

/** Field chrome around a control: wrapper, label, required mark, footer, message, error. */
export const fyField = defineSlotRecipe({
  className: 'fy-field',
  slots: ['root', 'label', 'required', 'footer', 'message', 'error'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'xs',
    },
    label: {
      display: 'block',
      fontWeight: '500',
      paddingX: 'xs',
      color: 'neutral',
      lineHeight: '1',
      userSelect: 'none',
      cursor: 'pointer',
      transition: 'color 0.2s ease-in-out',
      _disabled: {
        color: { base: 'grey.600', _light: 'grey.400' },
        cursor: 'not-allowed',
      },
    },
    required: {
      color: 'danger',
      fontWeight: '800',
    },
    footer: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      columnGap: 'md',
    },
    message: {
      display: 'block',
      paddingX: 'xs',
      fontSize: 'sm',
      fontWeight: '400',
      color: 'text.muted',
      wordBreak: 'break-word',
    },
    error: {
      display: 'block',
      paddingX: 'xs',
      fontSize: 'sm',
      fontWeight: '500',
      color: 'danger.subtle',
      wordBreak: 'break-word',
    },
  },
  variants: {
    size: {
      sm: { label: { fontSize: 'sm' } },
      md: { label: { fontSize: 'md' } },
      lg: { label: { fontSize: 'lg' } },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
