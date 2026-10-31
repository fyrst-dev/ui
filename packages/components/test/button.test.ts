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
    expect(wrapper.attributes('class')).not.toContain('w_100%')
  })

  it('stretches when fullWidth is set', () => {
    expect(buttonStyles.raw({ fullWidth: true })).toMatchObject({
      fontFamily: 'inherit',
      width: '100%',
      boxSizing: 'border-box',
    })

    const wrapped = mount(Button, { props: { label: 'Publish' } })
    const stretched = mount(Button, { props: { label: 'Publish', fullWidth: true } })

    expect(stretched.attributes('class')).not.toBe(wrapped.attributes('class'))
  })
})
