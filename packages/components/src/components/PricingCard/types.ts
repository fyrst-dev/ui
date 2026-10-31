import type { ComputedRef } from 'vue'
import type { fyPricingCard } from 'styled-system/recipes'
import { createInjectionKey } from '../../composables/injection-key'
import type { CssMap } from '../../internal/css'
import type { ListSize, ListState } from '../List/types'

export type PricingCardClasses = ReturnType<typeof fyPricingCard>

export const PricingCardClassesKey = createInjectionKey<ComputedRef<PricingCardClasses>>('PricingCardClasses')

export interface PricingCardData {
  title?: string
  titleTag?: string
  subtitle?: string
  price?: string
  features?: string[]
  featuresState?: ListState
  featuresSize?: ListSize
  /** Render `features` as HTML. Pass trusted strings only. */
  html?: boolean
}

export const PricingCardDataKey = createInjectionKey<ComputedRef<PricingCardData>>('PricingCardData')

export type PricingCardRootCss = CssMap<'root'>
export type PricingCardHeaderCss = CssMap<'root' | 'headerPackage' | 'title' | 'subtitle'>
export type PricingCardPricingCss = CssMap<'root' | 'price'>
export type PricingCardBodyCss = CssMap<'root' | 'feature' | 'featureIcon'>
export type PricingCardBadgeCss = CssMap<'root'>
