import CardRoot from './CardRoot.vue'
import CardBody from './CardBody.vue'
import CardHeader from './CardHeader.vue'

export { CardRoot, CardBody, CardHeader }

export type { CardHeaderProps } from './CardHeader.vue'
export type { CardRootCss, CardHeaderCss, CardBodyCss } from './types'

export default {
  Root: CardRoot,
  Body: CardBody,
  Header: CardHeader,
}
