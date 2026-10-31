import { defineSlotRecipe } from '@pandacss/dev'

export const fyFormPrompt = defineSlotRecipe({
  className: 'fy-form-prompt',
  slots: ['root', 'form', 'textarea', 'footer', 'inputs', 'action'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'lg',
    },
    form: {
      flexGrow: '1',
      containerType: 'inline-size',
      display: 'flex',
      flexDirection: 'column',
      gap: 'xl',
      width: '100%',
      bgColor: 'surface.raised',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border',
      borderRadius: '2xl',
      padding: 'xl',
      outlineWidth: '3px',
      outlineStyle: 'solid',
      outlineOffset: '0px',
      outlineColor: 'transparent',
      transition: 'all 200ms',
    },
    textarea: {
      flexGrow: '1',
      fontFamily: 'inherit',
      color: 'neutral',
      padding: 'xs',
      resize: 'none',
      fieldSizing: 'content',
      minHeight: 'var(--textarea-min-h, 120px)',
      maxHeight: 'var(--textarea-max-h, 300px)',
      _focus: {
        outline: 'none',
      },
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 'xl',
      alignItems: 'end',
    },
    inputs: {
      'flex': '1',
      'flexBasis': '100%',
      'display': 'flex',
      'flexDirection': 'row',
      'flexWrap': 'wrap',
      'gap': 'md',
      '@container (min-width: 600px)': {
        flexBasis: '0%',
      },
    },
    action: {
      'flex': '0',
      'flexBasis': '100%',
      '@container (min-width: 600px)': {
        flexBasis: 'auto',
      },
    },
  },
})
