import { defineSlotRecipe } from '@pandacss/dev'

const boxSizes = { sm: '1rem', md: '1.125rem', lg: '1.375rem' } as const

/** Checkbox and radio share the box, label, and size scale. */
export const choiceSizeVariants = Object.fromEntries(
  Object.entries(boxSizes).map(([size, box]) => [size, {
    control: { width: box, height: box },
    label: { fontSize: size },
  }]),
)

const choiceBase = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'sm',
    cursor: 'pointer',
    userSelect: 'none',
    _disabled: {
      cursor: 'not-allowed',
      opacity: '0.5',
    },
  },
  control: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'border',
    backgroundColor: 'surface',
    transition: 'all 200ms',
    flexShrink: '0',
    _enabled: {
      _hover: {
        borderColor: 'border.hover',
      },
    },
    _invalid: {
      borderColor: 'danger.subtle',
    },
  },
  label: {
    fontWeight: '500',
    color: 'neutral',
    lineHeight: '1.4',
  },
} as const

export const fyCheckbox = defineSlotRecipe({
  className: 'fy-checkbox',
  slots: ['root', 'control', 'indicator', 'label'],
  base: {
    root: choiceBase.root,
    control: {
      ...choiceBase.control,
      'borderRadius': 'sm',
      'color': 'neutral',
      '&[data-state="checked"]': {
        backgroundColor: 'primary',
        borderColor: 'primary',
        color: 'grey.night',
      },
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    label: choiceBase.label,
  },
  variants: {
    size: choiceSizeVariants,
  },
  defaultVariants: {
    size: 'md',
  },
})

export const fyRadioGroup = defineSlotRecipe({
  className: 'fy-radio-group',
  slots: ['root', 'item', 'control', 'indicator', 'label'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
      border: 'none',
      p: 0,
      m: 0,
      minWidth: '0',
    },
    item: {
      ...choiceBase.root,
      display: 'flex',
    },
    control: {
      ...choiceBase.control,
      '&[data-state="checked"]': {
        borderColor: 'primary',
      },
      'borderRadius': 'full',
    },
    indicator: {
      display: 'block',
      width: '55%',
      height: '55%',
      borderRadius: 'full',
      backgroundColor: 'primary',
    },
    label: choiceBase.label,
  },
  variants: {
    size: choiceSizeVariants,
  },
  defaultVariants: {
    size: 'md',
  },
})
