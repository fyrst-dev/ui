import type { ComputedRef } from 'vue'
import type { fyCard } from 'styled-system/recipes'
import { createInjectionKey } from '../../composables/injection-key'
import type { CssMap } from '../../internal/css'

export type CardClasses = ReturnType<typeof fyCard>

export const CardClassesKey = createInjectionKey<ComputedRef<CardClasses>>('CardClasses')

export type CardRootCss = CssMap<'root'>
export type CardHeaderCss = CssMap<'root' | 'body' | 'title' | 'subtitle'>
export type CardBodyCss = CssMap<'root'>
