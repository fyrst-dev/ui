import { defineSemanticTokens } from '@pandacss/dev'

export const colors = defineSemanticTokens.colors({
    brand: {
        pale: { value: '{colors.brand.100}'},
        day: { value: '{colors.brand.300}'},
        brand: { value: '{colors.brand.400}'},
        dawn: { value: '{colors.brand.600}'},
    },
    grey: {
        dawn: { value: '{colors.grey.300}'},
        dusk: { value: '{colors.grey.600}'},
        night: { value: '{colors.grey.800}'},
        black: { value: '{colors.grey.900}'}
    },
    primary: {
        value: { base: '{colors.brand.pale}', _light: '{colors.brand.day}' }
    },
    danger: {
        value: { base: '{colors.red.400}', _light: '{colors.red.600}' }
    },
    success: {
        value: { base: '{colors.green.400}', _light: '{colors.green.600}' }
    },
    warning: {
        value: { base: '{colors.yellow.400}', _light: '{colors.yellow.600}' }
    },
    info: {
        value: { base: '{colors.blue.400}', _light: '{colors.blue.600}' }
    },
    neutral: {
        DEFAULT: { value: { base: '{colors.white}', _light: '{colors.grey.night}' } },
        light: { value: { base: '{colors.grey.300}', _light: '{colors.grey.400}' } }
    },
    lucid: {
        50: { value: { base: 'rgba(255, 255, 255, 0.1)', _light: 'rgba(0, 0, 0, 0.1)' } },
        100: { value: { base: 'rgba(255, 255, 255, 0.175)', _light: 'rgba(0, 0, 0, 0.175)' } },
        200: { value: { base: 'rgba(255, 255, 255, 0.25)', _light: 'rgba(0, 0, 0, 0.25)' } },
        400: { value: { base: 'rgba(255, 255, 255, 0.5)', _light: 'rgba(0, 0, 0, 0.5)' } },
        600: { value: { base: 'rgba(255, 255, 255, 0.75)', _light: 'rgba(0, 0, 0, 0.75)' } },
    }
})