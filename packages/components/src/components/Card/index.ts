import CardRoot from './CardRoot.vue'
import CardBody from './CardBody.vue'
import CardHeader from './CardHeader.vue'

// Named exports for direct imports
export { CardRoot, CardBody, CardHeader }

// Default export for namespaced usage: <Card.Root />, <Card.Body />
export default {
    Root: CardRoot,
    Body: CardBody,
    Header: CardHeader,
}
