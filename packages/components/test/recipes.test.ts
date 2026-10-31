import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { recipes, slotRecipes } from '../../preset/src/recipes'
import ProgressRoot from '../src/components/Progress/ProgressRoot.vue'

type Style = Record<string, unknown>

/**
 * Panda emits recipe `base` styles in a lower sub-layer than variants. So:
 * - a variant beats any `base` state selector, whatever its specificity;
 * - `!important` in `base` beats a variant's `!important`.
 * Both bit us in the 0.5.0 migration from `cva`/`sva`. These checks keep new
 * recipes from repeating it.
 */
const isCondition = (key: string) => key.startsWith('_') || key.includes('&') || key.startsWith('@')

function walk(style: Style | undefined, visit: (prop: string, value: unknown, path: string[]) => void, path: string[] = []) {
  for (const [key, value] of Object.entries(style ?? {})) {
    if (value && typeof value === 'object' && isCondition(key)) {
      walk(value as Style, visit, [...path, key])
    }
    else {
      visit(key, value, path)
    }
  }
}

const all = [
  ...Object.entries(recipes).map(([name, recipe]) => ({ name, slots: [''], recipe: recipe as Style })),
  ...Object.entries(slotRecipes).map(([name, recipe]) => ({ name, slots: (recipe as { slots: string[] }).slots, recipe: recipe as Style })),
]

const pick = (style: unknown, slot: string) => (slot ? (style as Style)?.[slot] : style) as Style | undefined

/** Reviewed overlaps: the variant is meant to win over the base state. */
const reviewedOverlaps = new Set([
  'fyControl borderColor',
  'fyControl outlineColor',
  'fyControl cursor',
  'fyUrl.root borderColor',
  'fyUrl.root outlineColor',
  'fyPricingCard.root borderColor',
  'fyProgress.indicator width',
])

describe('recipe layering', () => {
  it('keeps !important out of base styles', () => {
    const offenders: string[] = []
    for (const { name, slots, recipe } of all) {
      for (const slot of slots) {
        walk(pick(recipe.base, slot), (prop, value, path) => {
          // `display: block !important` overrides Reka's inline `display: none`, not a variant.
          if (name === 'fyAccordion' && prop === 'display') return
          if (typeof value === 'string' && value.includes('!important')) {
            offenders.push(`${name}${slot ? `.${slot}` : ''} ${[...path, prop].join(' > ')}`)
          }
        })
      }
    }
    expect(offenders).toEqual([])
  })

  it('only overlaps base state styles with variants where reviewed', () => {
    const overlaps = new Set<string>()
    for (const { name, slots, recipe } of all) {
      for (const slot of slots) {
        const conditional = new Set<string>()
        walk(pick(recipe.base, slot), (prop, _value, path) => {
          if (path.length > 0) conditional.add(prop)
        })
        for (const values of Object.values((recipe.variants ?? {}) as Record<string, Style>)) {
          for (const variantStyle of Object.values(values)) {
            walk(pick(variantStyle, slot), (prop) => {
              if (conditional.has(prop)) overlaps.add(`${name}${slot ? `.${slot}` : ''} ${prop}`)
            })
          }
        }
      }
    }
    expect([...overlaps].filter(key => !reviewedOverlaps.has(key))).toEqual([])
  })
})

describe('ProgressRoot', () => {
  it('sets a percent class for determinate values only', () => {
    const determinate = mount(ProgressRoot, { props: { modelValue: 37 } })
    expect(determinate.html()).toContain('fy-progress__indicator--percent_37')

    const indeterminate = mount(ProgressRoot, { props: { modelValue: null } })
    expect(indeterminate.html()).not.toMatch(/fy-progress__indicator--percent_/)
    expect(indeterminate.find('[data-state="indeterminate"]').exists()).toBe(true)
  })

  it('clamps and rounds the percent', () => {
    expect(mount(ProgressRoot, { props: { modelValue: 150 } }).html()).toContain('--percent_100')
    expect(mount(ProgressRoot, { props: { modelValue: 2.6, max: 10 } }).html()).toContain('--percent_26')
  })
})
