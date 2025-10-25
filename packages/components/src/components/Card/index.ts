import CardRoot from './CardRoot.vue'
import CardBody from './CardBody.vue'

// Named exports for direct imports
export { CardRoot, CardBody }

// Default export for namespaced usage: <Card.Root />, <Card.Body />
export default {
    Root: CardRoot,
    Body: CardBody,
}
