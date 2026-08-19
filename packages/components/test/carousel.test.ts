import { defineComponent, nextTick, type PropType } from 'vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CarouselRoot from '../src/components/Carousel/CarouselRoot.vue'
import CarouselItem from '../src/components/Carousel/CarouselItem.vue'
import CarouselNavigation from '../src/components/Carousel/CarouselNavigation.vue'

const Harness = defineComponent({
  components: { CarouselRoot, CarouselItem, CarouselNavigation },
  props: {
    scrollMode: {
      type: String as PropType<'item' | 'viewport'>,
      default: 'item',
    },
  },
  template: `
    <CarouselRoot :scroll-mode="scrollMode">
      <CarouselItem v-for="n in 4" :key="n">
        <div>{{ n }}</div>
      </CarouselItem>
      <template #carousel-after>
        <CarouselNavigation />
      </template>
    </CarouselRoot>
  `,
})

function layoutCarousel(scroller: HTMLElement, itemWidth = 180, viewWidth = 200) {
  Object.defineProperty(scroller, 'clientWidth', { configurable: true, get: () => viewWidth })
  Object.defineProperty(scroller, 'offsetLeft', { configurable: true, get: () => 0 })

  let scrollLeft = 0
  Object.defineProperty(scroller, 'scrollLeft', {
    configurable: true,
    get: () => scrollLeft,
    set: (value: number) => {
      scrollLeft = value
    },
  })
  scroller.scrollTo = ((options?: ScrollToOptions | number) => {
    if (typeof options === 'object' && options && typeof options.left === 'number') {
      scrollLeft = options.left
    }
  }) as typeof scroller.scrollTo

  Array.from(scroller.children).forEach((child, index) => {
    Object.defineProperty(child, 'offsetLeft', { configurable: true, get: () => index * itemWidth })
    Object.defineProperty(child, 'offsetWidth', { configurable: true, get: () => itemWidth })
  })
}

describe('Carousel', () => {
  it('renders items and navigation', () => {
    const wrapper = mount(Harness, { attachTo: document.body })

    expect(wrapper.findAll('li')).toHaveLength(4)
    expect(wrapper.get('button').text()).toBe('Prev')
    expect(wrapper.findAll('button')[1]?.text()).toBe('Next')

    wrapper.unmount()
  })

  it('advances the active item in item mode', async () => {
    const wrapper = mount(Harness, {
      props: { scrollMode: 'item' },
      attachTo: document.body,
    })
    const scroller = wrapper.get('ul').element
    layoutCarousel(scroller)
    await nextTick()

    const items = wrapper.findAll('li')
    expect(items[0]?.classes()).toContain('active')

    await wrapper.findAll('button')[1]?.trigger('click')
    await nextTick()

    expect(items[1]?.classes()).toContain('active')
    expect(items[0]?.classes()).not.toContain('active')
    expect(scroller.scrollLeft).toBeGreaterThan(0)

    wrapper.unmount()
  })

  it('advances past the first overflowing item in viewport mode', async () => {
    const wrapper = mount(Harness, {
      props: { scrollMode: 'viewport' },
      attachTo: document.body,
    })
    const scroller = wrapper.get('ul').element
    layoutCarousel(scroller)
    await nextTick()

    await wrapper.findAll('button')[1]?.trigger('click')
    await nextTick()

    expect(wrapper.findAll('li')[1]?.classes()).toContain('active')
    expect(scroller.scrollLeft).toBeGreaterThan(0)

    wrapper.unmount()
  })
})
