import { sva } from 'styled-system/css'

export const pricingCardStyles = sva({
  slots: [
    'root',
    'header',
    'title',
    'subtitle',
    'price',
    'amount',
    'hosting',
    'hostingAmount',
    'divider',
    'features',
    'feature',
    'featureIcon',
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '100%',
      color: 'neutral',
      backgroundColor: 'grey.black',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'grey.700',
      borderRadius: 'md',
      overflow: 'hidden',
      position: 'relative',
      outlineWidth: '3px',
      outlineStyle: 'solid',
      outlineColor: 'transparent',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
      padding: 'lg',
      _hasNext: {
        borderBottom: '1px solid {colors.grey.700}',
      },
    },
    title: {
      fontSize: 'lg',
      fontWeight: '700',
    },
    subtitle: {
      fontSize: 'md',
      color: 'grey.dawn',
    },
    price: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'sm',
    },
    amount: {
      fontSize: '2xl',
      fontWeight: '600',
    },
    hosting: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 'xs',
      fontSize: 'sm',
      color: 'grey.dawn',
    },
    hostingAmount: {
      fontWeight: '700',
      color: 'neutral',
    },
    features: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'md',
      listStyle: 'none',
      margin: 0,
      paddingBlock: '2xl',
      paddingInline: 'lg',
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      gap: 'md',
      fontSize: 'md',
    },
    featureIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: '1.5em',
      height: '1.5em',
      fontSize: 'lg',
      color: 'primary',
    },
  },
  variants: {
    featured: {
      true: {
        root: {
          borderColor: 'primary',
          outlineColor: 'primary'
        },
      },
    },
  },
  defaultVariants: {
    featured: false,
  },
})
