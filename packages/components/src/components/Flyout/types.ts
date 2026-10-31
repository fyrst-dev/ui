import type { DeepReadonly, Ref } from 'vue'
import { createInjectionKey } from '../../composables/injection-key'
import type { FlyoutOpenReason } from '../../composables/flyout'
import type { CssMap } from '../../internal/css'

export interface FlyoutContext {
  openedBy: DeepReadonly<Ref<FlyoutOpenReason | null>>
  direction: Ref<'left' | 'right'>
}

export const FlyoutContextKey = createInjectionKey<FlyoutContext>('Flyout')

export type FlyoutRootCss = CssMap<'root' | 'trigger' | 'content'>
export type FlyoutDropdownCss = CssMap<'root'>
