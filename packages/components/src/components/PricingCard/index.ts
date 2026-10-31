import PricingCardRoot from './PricingCardRoot.vue'
import PricingCardHeader from './PricingCardHeader.vue'
import PricingCardPricing from './PricingCardPricing.vue'
import PricingCardBody from './PricingCardBody.vue'
import PricingCardBadge from './PricingCardBadge.vue'

export {
  PricingCardRoot,
  PricingCardHeader,
  PricingCardPricing,
  PricingCardBody,
  PricingCardBadge,
}

export type {
  PricingCardData,
  PricingCardRootCss,
  PricingCardHeaderCss,
  PricingCardPricingCss,
  PricingCardBodyCss,
  PricingCardBadgeCss,
} from './types'

export default {
  Root: PricingCardRoot,
  Header: PricingCardHeader,
  Pricing: PricingCardPricing,
  Body: PricingCardBody,
  Badge: PricingCardBadge,
}
