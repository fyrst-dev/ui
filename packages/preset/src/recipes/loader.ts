import { defineRecipe } from '@pandacss/dev'

/** Loader diameter (px) → ring width (px). `Loader` snaps other sizes to the closest key. */
export const loaderSizes = {
  16: 2,
  20: 2,
  24: 2,
  32: 3,
  40: 4,
  48: 5,
  56: 6,
  64: 6,
  80: 8,
  96: 10,
  120: 12,
} as const

export const fyLoader = defineRecipe({
  className: 'fy-loader',
  base: {
    boxSizing: 'border-box',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor: 'lucid.100',
    borderTopColor: 'primary',
    animationDuration: '1000ms',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationName: 'spin',
  },
  variants: {
    size: Object.fromEntries(
      Object.entries(loaderSizes).map(([size, ring]) => [size, {
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${ring}px`,
      }]),
    ),
  },
  defaultVariants: {
    size: '40',
  },
})
