import type { Ref } from 'vue'
import { createInjectionKey } from '../../composables/injection-key'
import type { useCarousel } from '../../composables/carousel'
import type { CssMap } from '../../internal/css'

/** What `CarouselRoot` provides to its children (navigation, custom controls). */
export type CarouselContext = ReturnType<typeof useCarousel> & {
  carousel: Ref<HTMLElement | null>
}

export const CarouselContextKey = createInjectionKey<CarouselContext>('Carousel')

export type CarouselRootCss = CssMap<'root' | 'viewport'>
export type CarouselItemCss = CssMap<'root'>
export type CarouselNavigationCss = CssMap<'root' | 'button'>
