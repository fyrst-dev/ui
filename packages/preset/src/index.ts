import { definePreset } from '@pandacss/dev'
import { colors, spacing, radii, fontSizes, breakpoints } from './tokens/tokens'
import { colors as semanticColors } from './tokens/semantic-tokens'

const preset = definePreset({
    name: 'fyrst-design-preset',
    theme: {
        tokens: {
            colors: colors,
            spacing: spacing,
            radii: radii,
            fontSizes: fontSizes
        },
        semanticTokens: {
            colors: semanticColors
        },
        extend: {
            breakpoints: breakpoints,
        }
    },
    conditions: {
        extend: {
            light: '.light &, .light&',
        },
    },
    patterns: {
        extend: {
            container: {
                transform({maxWidth, px}) {
                    return {
                        position: 'relative',
                        maxWidth: { 
                            base: '360px', 
                            '3xs': '360px', 
                            '2xs': '400px', 
                            'xs': '500px', 
                            'sm': '620px', 
                            'md': '740px', 
                            'lg': '1000px', 
                            'xl': '1200px', 
                            '2xl': '1400px', 
                            '3xl': '1600px', 
                            ...maxWidth 
                        },
                        mx: "auto",
                        px: { base: "lg", ...px },
                        transition: 'max-width 200ms',
                    }
                }
            }
        }
    }
})

export {
    preset
} 
