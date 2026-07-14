// Import global styles
import './styles/icons.css'

import Alert from './components/Alert'
import { BadgeRoot } from './components/Badge'
import Button from './components/Button.vue'
import Loader from './components/Loader.vue'
import Card from './components/Card'
import Carousel from './components/Carousel'
import Flyout from './components/Flyout'
import Hero from './components/Hero'
import Field from './components/Field'
import Form from './components/Form'
import Control from './internal/controls'
import List from './components/List'
import Tab from './components/Tab'
import PricingCard, {
  PricingCardRoot,
  PricingCardHeader,
  PricingCardPricing,
  PricingCardBody,
  PricingCardBadge,
} from './components/PricingCard'
import Accordion from './components/Accordion'
import Dialog, { DialogRoot } from './components/Dialog'
import Switch, { SwitchRoot } from './components/Switch'

export {
  Alert,
  BadgeRoot,
  Button,
  Loader,
  Card,
  Carousel,
  Flyout,
  Hero,
  Field,
  Form,
  Control,
  List,
  Tab,
  PricingCard,
  PricingCardRoot,
  PricingCardHeader,
  PricingCardPricing,
  PricingCardBody,
  PricingCardBadge,
  Accordion,
  Dialog,
  DialogRoot,
  Switch,
  SwitchRoot,
}

// Export types
export type { AccordionItem } from './components/Accordion'
export type { AlertMessage } from './components/Alert'
export type {
  PricingCardData,
  PricingCardRootCss,
  PricingCardHeaderCss,
  PricingCardPricingCss,
  PricingCardBodyCss,
  PricingCardBadgeCss,
} from './components/PricingCard'
export type { ListRootCss, ListItemCss } from './components/List'
export type { TabItemData, TabChangePayload } from './components/Tab'
export type { ControlSize, ControlValid, FieldOption } from './internal/controls'
export type { SwitchCss, SwitchCssMap, SwitchStyles } from './components/Switch'

// Export composables
export * from './composables/carousel'
export * from './composables/flyout'
export * from './composables/form'
export * from './composables/injection-key'
