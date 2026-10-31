import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/components/Button/Button.vue'
import { buttonStyles } from '../src/components/Button/styles'

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
    const styles = buttonStyles.raw({ fullWidth: false })
    expect(styles).toMatchObject({ fontFamily: 'inherit' })
    expect(styles).not.toMatchObject({ width: '100%' })

    const wrapper = mount(Button, { props: { label: 'Publish' } })
    expect(wrapper.classes()).not.toContain('w_100%')
  })

  it('stretches when fullWidth is set', () => {
    expect(buttonStyles.raw({ fullWidth: true })).toMatchObject({
      width: '100%',
      boxSizing: 'border-box',
    })

    const stretched = mount(Button, { props: { label: 'Publish', fullWidth: true } })
    expect(stretched.classes()).toContain('w_100%')
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

  it('merges css overrides into the component styles', () => {
    const plain = mount(Button, { props: { label: 'A', color: 'primary' } })
    expect(plain.classes()).toContain('bg-c_primary')

    // Same property: the override replaces the class instead of adding a
    // second one whose win would depend on stylesheet order.
    const wrapper = mount(Button, { props: { label: 'A', color: 'primary', css: { root: { backgroundColor: 'danger', marginTop: '4px' } } } })
    expect(wrapper.classes()).toContain('bg-c_danger')
    expect(wrapper.classes()).not.toContain('bg-c_primary')
    expect(wrapper.classes()).toContain('mt_4px')
    expect(wrapper.classes()).toContain('btn')
  })
})
