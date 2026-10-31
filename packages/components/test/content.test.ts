import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AccordionRoot from '../src/components/Accordion/AccordionRoot.vue'
import AlertRoot from '../src/components/Alert/AlertRoot.vue'
import CardHeader from '../src/components/Card/CardHeader.vue'
import HeroLead from '../src/components/Hero/HeroLead.vue'
import ListRoot from '../src/components/List/ListRoot.vue'
import TabRoot from '../src/components/Tab/TabRoot.vue'

const markup = 'Hello <em>world</em>'

/**
 * Every content prop renders text by default. `html` opts into HTML.
 */
describe('html opt-in', () => {
  it('Accordion items', () => {
    const items = [{ id: 'a', title: markup, content: markup }]
    expect(mount(AccordionRoot, { props: { items } }).find('em').exists()).toBe(false)
    expect(mount(AccordionRoot, { props: { items, html: true } }).findAll('em').length).toBeGreaterThan(0)
  })

  it('CardHeader title and subtitle', () => {
    expect(mount(CardHeader, { props: { title: markup, subtitle: markup } }).find('em').exists()).toBe(false)
    expect(mount(CardHeader, { props: { title: markup, subtitle: markup, html: true } }).findAll('em')).toHaveLength(2)
  })

  it('HeroLead headline and description', () => {
    expect(mount(HeroLead, { props: { headline: markup, description: markup } }).find('em').exists()).toBe(false)
    expect(mount(HeroLead, { props: { headline: markup, description: markup, html: true } }).findAll('em')).toHaveLength(2)
  })

  it('List items, with a per-item override', () => {
    const items = [{ content: markup }, { content: markup, html: false }]
    expect(mount(ListRoot, { props: { items } }).find('em').exists()).toBe(false)
    expect(mount(ListRoot, { props: { items, html: true } }).findAll('em')).toHaveLength(1)
  })

  it('Tab labels, with a per-item override', () => {
    const items = [{ value: 'a', label: markup }, { value: 'b', label: markup, html: true }]
    expect(mount(TabRoot, { props: { items } }).findAll('em')).toHaveLength(1)
    expect(mount(TabRoot, { props: { items, html: true } }).findAll('em')).toHaveLength(2)
  })
})

describe('css overrides', () => {
  it('AlertRoot applies slot overrides from the css map', () => {
    const wrapper = mount(AlertRoot, {
      props: {
        messages: [{ title: 'T', description: 'D' }],
        css: { root: { marginTop: '4px' }, title: { letterSpacing: '1px' } },
      },
    })
    expect(wrapper.classes()).toContain('d_flex')
    expect(wrapper.classes()).toContain('mt_4px')
    expect(wrapper.find('.ls_1px').exists()).toBe(true)
  })
})
