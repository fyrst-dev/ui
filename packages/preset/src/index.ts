import { definePreset } from '@pandacss/dev'
import { colors, spacing, radii, fontSizes, breakpoints } from './tokens/tokens'
import { colors as semanticColors } from './tokens/semantic-tokens'
import { keyframes, animationStyles } from './animation'

const preset = definePreset({
    name: 'fyrst-design-preset',
    theme: {
        tokens: {
            colors: colors,
            spacing: spacing,
            radii: radii,
            fontSizes: fontSizes,
            fontWeights: {
                normal: { value: '400' },
                medium: { value: '500' },
                semibold: { value: '600' },
                bold: { value: '700' }
            },
            lineHeights: {
                normal: { value: '1.5' }
            }
        },
        semanticTokens: {
            colors: semanticColors
        },
        extend: {
            breakpoints: breakpoints,
            containerSizes: {
                xs: '320px',
                sm: '384px',
                md: '448px',
                lg: '512px',
                xl: '576px',
                '2xl': '672px',
                '3xl': '768px',
                '4xl': '896px',
                '5xl': '1024px',
                '6xl': '1152px',
                '7xl': '1280px',
                '8xl': '1440px'
            },
            keyframes,
            animationStyles
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
    preset,
    breakpoints
} 
