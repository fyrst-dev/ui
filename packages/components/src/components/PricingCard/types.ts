import type { ComputedRef } from 'vue'
import { createInjectionKey } from '../../composables/injection-key'
import type { CssMap } from '../../internal/css'
import type { ListSize, ListState } from '../List/types'
import type { pricingCardStyles } from './styles'

export type PricingCardStyles = ReturnType<typeof pricingCardStyles.raw>

export const PricingCardStylesKey = createInjectionKey<ComputedRef<PricingCardStyles>>('PricingCardStyles')

export interface PricingCardData {
  title?: string
  titleTag?: string
  subtitle?: string
  price?: string
  features?: string[]
  featuresState?: ListState
  featuresSize?: ListSize
}

export const PricingCardDataKey = createInjectionKey<ComputedRef<PricingCardData>>('PricingCardData')

export type PricingCardRootCss = CssMap<'root'>
export type PricingCardHeaderCss = CssMap<'root' | 'headerPackage' | 'title' | 'subtitle'>
export type PricingCardPricingCss = CssMap<'root' | 'price'>
export type PricingCardBodyCss = CssMap<'root' | 'feature' | 'featureIcon'>
export type PricingCardBadgeCss = CssMap<'root'>
