import type { ComputedRef } from 'vue'
import type { Styles } from 'styled-system/css'
import { createInjectionKey } from '../../composables/injection-key'
import type { PricingCardStyles } from './styles'
import type { ListItemProps } from '../List/ListItem.vue'

export const PricingCardStylesKey = createInjectionKey<ComputedRef<PricingCardStyles>>('PricingCardStyles')

export interface PricingCardData {
  title?: string
  titleTag?: string
  subtitle?: string
  price?: string
  features?: string[]
  featuresState?: ListItemProps['state']
  featuresSize?: ListItemProps['size']
}

export const PricingCardDataKey = createInjectionKey<ComputedRef<PricingCardData>>('PricingCardData')

/**
 * Per-component `css` prop map. Keys are the component's public slot names,
 * where `root` always refers to the component's outermost element (regardless
 * of the underlying SVA slot name). Inner slots keep their SVA names.
 *
 * Each component exposes its own narrow type so only the slots it actually
 * renders are accepted as keys.
 */
export type PricingCardCss<K extends string> = Partial<Record<K, Styles>>

export type PricingCardRootCss = PricingCardCss<'root'>
export type PricingCardHeaderCss = PricingCardCss<'root' | 'headerPackage' | 'title' | 'subtitle'>
export type PricingCardPricingCss = PricingCardCss<'root' | 'price'>
export type PricingCardBodyCss = PricingCardCss<'root' | 'feature' | 'featureIcon'>
export type PricingCardBadgeCss = PricingCardCss<'root'>
