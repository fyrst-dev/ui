import { cva } from 'styled-system/css'

export const loaderStyles = cva({
  base: {
    width: 'var(--loader-size)',
    height: 'var(--loader-size)',
    borderWidth: 'calc((min(var(--loader-size), var(--loader-size)) / 10))',
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
})
