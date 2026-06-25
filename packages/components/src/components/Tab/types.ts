import type { ComputedRef, InjectionKey } from 'vue'

export interface TabItemData {
  value: string
  label: string
  disabled?: boolean
  icon?: string
}

export interface TabContext {
  modelValue: ComputedRef<string | undefined>
}

export const TabContextKey: InjectionKey<TabContext> = Symbol('TabContext')
