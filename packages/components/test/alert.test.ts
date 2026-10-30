import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AlertRoot from '../src/components/Alert/AlertRoot.vue'

const messages = [{ title: 'Saved', description: 'The draft is stored.' }]

describe('AlertRoot', () => {
  it('renders the default variant icon', () => {
    const wrapper = mount(AlertRoot, {
      props: { messages },
    })

    expect(wrapper.get('.icon-info-bold').exists()).toBe(true)
    expect(wrapper.text()).toContain('The draft is stored.')
  })

  it('replaces the default icon when the icon slot is provided', () => {
    const wrapper = mount(AlertRoot, {
      props: { variant: 'success', messages },
      slots: {
        icon: '<span class="custom-icon">ok</span>',
      },
    })

    expect(wrapper.find('.custom-icon').exists()).toBe(true)
    expect(wrapper.find('.icon-check-circle-bold').exists()).toBe(false)
  })

  it('omits the icon and its slot when hideIcon is set', () => {
    const wrapper = mount(AlertRoot, {
      props: { hideIcon: true, messages },
      slots: {
        icon: '<span class="custom-icon">ok</span>',
      },
    })

    expect(wrapper.find('.icon').exists()).toBe(false)
    expect(wrapper.find('.custom-icon').exists()).toBe(false)
    expect(wrapper.text()).toContain('Saved')
    expect(wrapper.text()).toContain('The draft is stored.')
  })
})
