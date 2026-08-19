import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/components/Button/Button.vue'

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
})
