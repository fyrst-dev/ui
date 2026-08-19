import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FieldInput from '../src/components/Field/FieldInput.vue'

describe('Field', () => {
  it('associates the label with the named input', () => {
    const wrapper = mount(FieldInput, {
      props: {
        name: 'email',
        label: 'Email',
      },
    })

    const input = wrapper.get('input')
    const label = wrapper.get('label')
    const inputId = input.attributes('id')

    expect(input.attributes('name')).toBe('email')
    expect(inputId).toBeTruthy()
    expect(label.attributes('for')).toBe(inputId)
    expect(label.text()).toContain('Email')
  })
})
