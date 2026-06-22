import PricingCardRoot from './PricingCardRoot.vue'
import PricingCardHeader from './PricingCardHeader.vue'
import PricingCardPricing from './PricingCardPricing.vue'
import PricingCardBody from './PricingCardBody.vue'
import PricingCardBadge from './PricingCardBadge.vue'

// Named exports for direct imports
export {
  PricingCardRoot,
  PricingCardHeader,
  PricingCardPricing,
  PricingCardBody,
  PricingCardBadge,
}

// Export types
export type { PricingCardData } from './types'
export type {
  PricingCardRootCss,
  PricingCardHeaderCss,
  PricingCardPricingCss,
  PricingCardBodyCss,
  PricingCardBadgeCss,
} from './types'
export type { PricingCardStyles } from './styles'

// Default export for namespaced usage:
// <PricingCard.Root />, <PricingCard.Header />, etc.
export default {
  Root: PricingCardRoot,
  Header: PricingCardHeader,
  Pricing: PricingCardPricing,
  Body: PricingCardBody,
  Badge: PricingCardBadge,
}
