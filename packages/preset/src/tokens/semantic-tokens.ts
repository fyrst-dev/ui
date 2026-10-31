import { defineSemanticTokens } from '@pandacss/dev'

const subtleMix = (
  dark: string,
  light: string,
  status = '{opacity.color.status}',
  neutral = '{opacity.color.neutral}',
) => ({
  value: {
    base: `color-mix(in srgb, {colors.${dark}} ${status}, {colors.grey.800} ${neutral})`,
    _light: `color-mix(in srgb, {colors.${light}} ${status}, {colors.grey.400} ${neutral})`,
  },
})

export const opacity = defineSemanticTokens.opacity({
  color: {
    status: { 
      DEFAULT: { value: { base: '20%', _light: '80%' } },
      lighter: { value: { base: '25%', _light: '25%' } },
    },
    neutral: { 
      DEFAULT: { value: { base: '80%', _light: '5%' } },
      lighter: { value: { base: '20%', _light: '25%' } },
    },
  },
})

export const fonts = defineSemanticTokens.fonts({
  body: {
    value: '{fonts.sans}',
    description: 'Document face. Alias of the Figtree sans stack.',
  },
})

export const colors = defineSemanticTokens.colors({
  brand: {
    pale: {
      DEFAULT: { value: '{colors.brand.100}' },
      lucid: { value: '{colors.brand.100/25}' },
    },
    day: { value: '{colors.brand.300}' },
    brand: { value: '{colors.brand.400}' },
    dawn: { value: '{colors.brand.600}' },
  },
  grey: {
    dawn: { value: '{colors.grey.300}' },
    dusk: { value: '{colors.grey.600}' },
    night: { value: '{colors.grey.800}' },
    deep: { value: '{colors.grey.900}' },
    black: { value: '{colors.grey.950}' },
  },
  primary: {
    DEFAULT: { value: { base: '{colors.brand.pale}', _light: '{colors.brand.day}' } },
    subtle: {
      DEFAULT: subtleMix('brand.100', 'brand.300'),
      light: subtleMix('brand.100', 'brand.100', '{opacity.color.status.lighter}', '{opacity.color.neutral.lighter}'),
    },
    text: { value: { base: '{colors.brand.600}' } },
    lucid: {
      700: { value: { base: '{colors.brand.pale/25}', _light: '{colors.brand.pale/40}' } },
      900: { value: { base: '{colors.brand.pale/10}', _light: '{colors.brand.pale/25}' } },
    },
  },
  danger: {
    DEFAULT: { value: { base: '{colors.red.400}', _light: '{colors.red.600}' } },
    subtle: {
      DEFAULT: subtleMix('red.400', 'red.200'),
      light: subtleMix('red.200', 'red.400', '{opacity.color.status.lighter}', '{opacity.color.neutral.lighter}'),
    },
    text: { value: { base: '{colors.red.900}' } },
    lucid: {
      700: { value: { base: '{colors.red.400/25}', _light: '{colors.red.600/40}' } },
      900: { value: { base: '{colors.red.400/10}', _light: '{colors.red.600/25}' } },
    },
  },
  success: {
    DEFAULT: { value: { base: '{colors.green.400}', _light: '{colors.green.600}' } },
    subtle: { 
      DEFAULT: subtleMix('green.400', 'green.200'),
      light: subtleMix('green.200', 'green.400', '{opacity.color.status.lighter}', '{opacity.color.neutral.lighter}'),
    },
    text: { value: { base: '{colors.green.900}' } },
    lucid: {
      700: { value: { base: '{colors.green.400/25}', _light: '{colors.green.600/40}' } },
      900: { value: { base: '{colors.green.400/10}', _light: '{colors.green.600/25}' } },
    },
  },
  warning: {
    DEFAULT: { value: { base: '{colors.yellow.400}', _light: '{colors.yellow.600}' } },
    subtle: { 
      DEFAULT: subtleMix('yellow.400', 'yellow.200'),
      light: subtleMix('yellow.200', 'yellow.400', '{opacity.color.status.lighter}', '{opacity.color.neutral.lighter}'),
    },
    text: { value: { base: '{colors.yellow.900}' } },
    lucid: {
      700: { value: { base: '{colors.yellow.400/25}', _light: '{colors.yellow.600/40}' } },
      900: { value: { base: '{colors.yellow.400/10}', _light: '{colors.yellow.600/25}' } },
    },
  },
  info: {
    DEFAULT: { value: { base: '{colors.blue.400}', _light: '{colors.blue.600}' } },
    subtle: { 
      DEFAULT: subtleMix('blue.400', 'blue.200'),
      light: subtleMix('blue.200', 'blue.400', '{opacity.color.status.lighter}', '{opacity.color.neutral.lighter}'),
    },
    text: { value: { base: '{colors.blue.900}' } },
    lucid: {
      700: { value: { base: '{colors.blue.400/25}', _light: '{colors.blue.600/40}' } },
      900: { value: { base: '{colors.blue.400/10}', _light: '{colors.blue.600/25}' } },
    },
  },
  neutral: {
    DEFAULT: { value: { base: '{colors.white}', _light: '{colors.grey.night}' } },
    inverse: { value: { base: '{colors.grey.night}', _light: '{colors.white}' } },
    light: { value: { base: '{colors.grey.300}', _light: '{colors.grey.400}' } },
  },
  lucid: {
    50: { value: { base: 'rgba(255, 255, 255, 0.1)', _light: 'rgba(0, 0, 0, 0.1)' } },
    100: { value: { base: 'rgba(255, 255, 255, 0.175)', _light: 'rgba(0, 0, 0, 0.175)' } },
    200: { value: { base: 'rgba(255, 255, 255, 0.25)', _light: 'rgba(0, 0, 0, 0.25)' } },
    400: { value: { base: 'rgba(255, 255, 255, 0.5)', _light: 'rgba(0, 0, 0, 0.5)' } },
    600: { value: { base: 'rgba(255, 255, 255, 0.75)', _light: 'rgba(0, 0, 0, 0.75)' } },
  },
})
