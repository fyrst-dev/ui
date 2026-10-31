import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/components/Button/Button.vue'
import { fyButton } from '../../preset/src/recipes/button'

describe('Button', () => {
  it('renders the label', () => {
    const wrapper = mount(Button, {
      props: { label: 'Publish' },
    })

    expect(wrapper.get('.btn-label').text()).toBe('Publish')
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('renders an anchor when to is set', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Docs',
        to: 'https://fyrst.dev',
      },
    })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('https://fyrst.dev')
  })

  it('inherits the parent font and stays shrink-wrapped by default', () => {
    expect(fyButton.base).toMatchObject({ fontFamily: 'inherit' })
    expect(fyButton.variants?.fullWidth?.false).toEqual({})
    expect(fyButton.defaultVariants).toMatchObject({ fullWidth: false })

    const wrapper = mount(Button, { props: { label: 'Publish' } })
    expect(wrapper.classes()).toContain('fy-button')
    expect(wrapper.classes()).not.toContain('fy-button--fullWidth_true')
  })

  it('stretches when fullWidth is set', () => {
    expect(fyButton.variants?.fullWidth?.true).toMatchObject({
      width: '100%',
      boxSizing: 'border-box',
    })

    const stretched = mount(Button, { props: { label: 'Publish', fullWidth: true } })
    expect(stretched.classes()).toContain('fy-button--fullWidth_true')
  })

  it('renders the label as text unless html is set', () => {
    const text = mount(Button, { props: { label: 'Save <b>now</b>' } })
    expect(text.find('b').exists()).toBe(false)
    expect(text.get('.btn-label').text()).toBe('Save <b>now</b>')
    expect(text.attributes('title')).toBe('Save <b>now</b>')

    const html = mount(Button, { props: { label: 'Save <b>now</b>', html: true } })
    expect(html.get('.btn-label b').text()).toBe('now')
    expect(html.attributes('title')).toBe('Save now')
  })

  it('defaults to type="button" and honors type', () => {
    expect(mount(Button, { props: { label: 'A' } }).attributes('type')).toBe('button')
    expect(mount(Button, { props: { label: 'A', type: 'submit' } }).attributes('type')).toBe('submit')
  })

  it('opens external links in a new tab safely', () => {
    const wrapper = mount(Button, { props: { label: 'Docs', to: 'https://fyrst.dev', external: true } })
    expect(wrapper.attributes('target')).toBe('_blank')
    expect(wrapper.attributes('rel')).toBe('noopener noreferrer')
  })

  it('disables a link by dropping href and exposing aria-disabled', () => {
    const wrapper = mount(Button, { props: { label: 'Docs', to: 'https://fyrst.dev', disabled: true } })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBeUndefined()
    expect(wrapper.attributes('aria-disabled')).toBe('true')
    expect(wrapper.attributes('role')).toBe('link')
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('appends css overrides after the recipe class', () => {
    const wrapper = mount(Button, { props: { label: 'A', css: { root: { marginTop: '4px' } } } })
    const classes = wrapper.classes()
    expect(classes).toContain('fy-button')
    expect(classes.some(name => name.startsWith('mt_'))).toBe(true)
  })
})
