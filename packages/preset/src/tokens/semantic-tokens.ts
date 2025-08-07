import { defineSemanticTokens } from '@pandacss/dev'

export const colors = defineSemanticTokens.colors({
    green: {
        pale: { value: '{colors.green.100}'},
        day: { value: '{colors.green.300}'},
        brand: { value: '{colors.green.400}'},
        dawn: { value: '{colors.green.600}'},
    },
    grey: {
        dawn: { value: '{colors.grey.300}'},
        dusk: { value: '{colors.grey.600}'},
        night: { value: '{colors.grey.800}'},
        black: { value: '{colors.grey.900}'}
    },
    primary: {
        value: { base: '{colors.green.pale}', _light: '{colors.green.day}' }
    },
    neutral: {
        value: { base: '{colors.white}', _light: '{colors.grey.night}' }
    },
    lucid: {
        50: { value: { base: 'rgba(255, 255, 255, 0.1)', _light: 'rgba(0, 0, 0, 0.1)' } },
        100: { value: { base: 'rgba(255, 255, 255, 0.175)', _light: 'rgba(0, 0, 0, 0.175)' } },
        200: { value: { base: 'rgba(255, 255, 255, 0.25)', _light: 'rgba(0, 0, 0, 0.25)' } },
        400: { value: { base: 'rgba(255, 255, 255, 0.5)', _light: 'rgba(0, 0, 0, 0.5)' } },
        600: { value: { base: 'rgba(255, 255, 255, 0.75)', _light: 'rgba(0, 0, 0, 0.75)' } },
    }
})