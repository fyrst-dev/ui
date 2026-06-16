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
import List from './components/List'
import PricingCard, { PricingCardRoot } from './components/PricingCard'
import Accordion from './components/Accordion'

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
  List,
  PricingCard,
  PricingCardRoot,
  Accordion,
}

// Export types
export type { AccordionItem } from './components/Accordion'
export type { AlertMessage } from './components/Alert'

// Export composables
export * from './composables/carousel'
export * from './composables/flyout'
export * from './composables/form'
