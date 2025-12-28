import { defineSemanticTokens } from '@pandacss/dev'

export const colors = defineSemanticTokens.colors({
    brand: {
        pale: {
            DEFAULT: { value: '{colors.brand.100}' },
            lucid: { value: '{colors.brand.100/25}' }
        },
        day: { value: '{colors.brand.300}'},
        brand: { value: '{colors.brand.400}'},
        dawn: { value: '{colors.brand.600}'},
    },
    grey: {
        dawn: { value: '{colors.grey.300}'},
        dusk: { value: '{colors.grey.600}'},
        night: { value: '{colors.grey.800}'},
        deep: { value: '{colors.grey.900}'},
        black: { value: '{colors.grey.950}'}
    },
    primary: {
        DEFAULT: { value: { base:'{colors.brand.pale}', _light: '{colors.brand.day}'} },
        lucid: { 
            700: { value: { base: '{colors.brand.pale/25}', _light: '{colors.brand.pale/40}' } },
            900: { value: { base: '{colors.brand.pale/10}', _light: '{colors.brand.pale/25}' } }
        },
    },
    danger: {
        DEFAULT: { value: { base: '{colors.red.400}', _light: '{colors.red.600}' } },
        lucid: { 
            700: { value: { base: '{colors.red.400/25}', _light: '{colors.red.600/40}' } },
            900: { value: { base: '{colors.red.400/10}', _light: '{colors.red.600/25}' } }
        },
    },
    success: {
        DEFAULT: { value: { base: '{colors.green.400}', _light: '{colors.green.600}' } },
        lucid: { 
            700: { value: { base: '{colors.green.400/25}', _light: '{colors.green.600/40}' } },
            900: { value: { base: '{colors.green.400/10}', _light: '{colors.green.600/25}' } }
        },
    },
    warning: {
        DEFAULT: { value: { base: '{colors.yellow.400}', _light: '{colors.yellow.600}' } },
        lucid: { 
            700: { value: { base: '{colors.yellow.400/25}', _light: '{colors.yellow.600/40}' } },
            900: { value: { base: '{colors.yellow.400/10}', _light: '{colors.yellow.600/25}' } }
        },
    },
    info: {
        DEFAULT: { value: { base: '{colors.blue.400}', _light: '{colors.blue.600}' } },
        lucid: { 
            700: { value: { base: '{colors.blue.400/25}', _light: '{colors.blue.600/40}' } },
            900: { value: { base: '{colors.blue.400/10}', _light: '{colors.blue.600/25}' } }
        },
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