import type { ComputedRef } from 'vue'
import { createInjectionKey } from '../../composables/injection-key'
import type { CssMap } from '../../internal/css'
import type { cardStyles } from './styles'

export type CardStyles = ReturnType<typeof cardStyles.raw>

export const CardStylesKey = createInjectionKey<ComputedRef<CardStyles>>('CardStyles')

export type CardRootCss = CssMap<'root'>
export type CardHeaderCss = CssMap<'root' | 'body' | 'title' | 'subtitle'>
export type CardBodyCss = CssMap<'root'>
