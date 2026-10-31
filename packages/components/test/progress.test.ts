import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProgressRoot from '../src/components/Progress/ProgressRoot.vue'

describe('ProgressRoot', () => {
  it('maps the value to a static width class', () => {
    const html = mount(ProgressRoot, { props: { modelValue: 37 } }).html()
    expect(html).toContain('w_37%')
    expect(html).not.toContain('style=')
  })

  it('leaves indeterminate bars to the data-state width', () => {
    const wrapper = mount(ProgressRoot, { props: { modelValue: null } })
    const indicator = wrapper.get('[role="progressbar"] > [data-state="indeterminate"]')
    expect(indicator.classes()).toContain('w_0%')
    expect(indicator.attributes('class')).toMatch(/w_40%/)
  })

  it('clamps and rounds the percent', () => {
    expect(mount(ProgressRoot, { props: { modelValue: 150 } }).html()).toContain('w_100%')
    expect(mount(ProgressRoot, { props: { modelValue: 2.6, max: 10 } }).html()).toContain('w_26%')
  })
})
