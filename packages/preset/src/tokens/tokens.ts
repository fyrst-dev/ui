import { defineTokens } from '@pandacss/dev'
 
export const colors = defineTokens.colors({
    white: {
        value: '#ffffff',
        description: 'This is the primary white color used in our design system'
    },
    black: {
        value: '#000000',
        description: 'This is the primary black color used in our design system'
    },
    green: {
        100: {
            value: '#A3EFAC',
            description: 'This is a light, pale green color and is references as pale-green'
        },
        300: {
            value: '#19bf56',
            description: 'This is the fyrst brand green color and is referenced as brand-green'
        },
        400: {
            value: '#05C260',
            description: 'This is the fyrst brand green color and is referenced as brand-green'
        },
        600: {
            value: '#0E8543',
            description: 'This is a darker, bolder green color and is referenced as dawn-green'
        }
    },
    grey: {
        50: {
            value: '#fafafa',
        },
        100: {
            value: '#e5e5e5',
        },
        200: {
            value: '#d4d4d4',
        },
        300: {
            value: '#a3a3a3',
        },
        400: {
            value: '#737373',
        },
        500: {
            value: '#525252',
        },
        600: {
            value: '#404040',
        },
        700: {
            value: '#333333',
        },
        800: {
            value: '#262626',
        },
        900: {
            value: '#171717',
            description: 'This is the darkest grey color in our design system and replaces black'
        },
    }
})

export const spacing = defineTokens.spacing({
    '3xs': { value: '2px' },
    '2xs': { value: '4px' },
    xs: { value: '8px' },
    sm: { value: '12px' },
    md: { value: '16px' },
    lg: { value: '20px' },
    xl: { value: '24px' },
    '2xl': { value: '32px' },
    '3xl': { value: '40px' },
    '4xl': { value: '48px' },
    '5xl': { value: '56px' },
    '6xl': { value: '64px' },
    '7xl': { value: '72px' },
    '8xl': { value: '80px' },
    '9xl': { value: '96px' },
    '10xl': { value: '128px' },
    '11xl': { value: '144px' },	
    '12xl': { value: '160px' },
})

export const radii = defineTokens.radii({
    sm: { value: '4px' },
    md: { value: '6px' },
    lg: { value: '10px' },
    xl: { value: '16px' },
    '2xl': { value: '20px' },
    '3xl': { value: '24px' },
    '4xl': { value: '32px' },
    '5xl': { value: '40px' },
})

export const fontSizes = defineTokens.fontSizes({
    xs: { value: '12px' },
    sm: { value: '14px' },
    md: { value: '16px' },
    lg: { value: '20px' },
    xl: { value: '24px' },
    '2xl': { value: '32px' },
    '3xl': { value: '40px' },
    '4xl': { value: '48px' },
    '5xl': { value: '64px' },
})

export const breakpoints = {
    '3xs': '360px',
    '2xs': '420px',
    'xs': '520px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
    '3xl': '1640px',
    '4xl': '1920px'  
}