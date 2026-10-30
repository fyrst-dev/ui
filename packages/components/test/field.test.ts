import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FieldInput from '../src/components/Field/FieldInput.vue'
import ControlInput from '../src/internal/controls/ControlInput.vue'

const textLikeTypes = ['text', 'email', 'url', 'tel', 'search', 'password', 'number'] as const

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

  it.each(textLikeTypes)('renders type="%s" on the native input', (type) => {
    const wrapper = mount(FieldInput, {
      props: {
        name: 'value',
        label: 'Value',
        type,
      },
    })

    expect(wrapper.get('input').attributes('type')).toBe(type)
  })

  it('forwards native input attributes through FieldInput to the input', () => {
    const wrapper = mount(FieldInput, {
      props: {
        name: 'password',
        label: 'Password',
        type: 'password',
        id: 'login-password',
        autocomplete: 'current-password',
        required: true,
      },
      attrs: {
        autofocus: true,
        autocapitalize: 'off',
        spellcheck: 'false',
        inputmode: 'text',
        maxlength: '64',
        'data-testid': 'password-input',
      },
    })

    const input = wrapper.get('input')
    expect(input.attributes('type')).toBe('password')
    expect(input.attributes('name')).toBe('password')
    expect(input.attributes('id')).toBe('login-password')
    expect(input.attributes('autocomplete')).toBe('current-password')
    expect(input.attributes('required')).toBeDefined()
    expect(input.attributes('autofocus')).toBeDefined()
    expect(input.attributes('autocapitalize')).toBe('off')
    expect(input.attributes('spellcheck')).toBe('false')
    expect(input.attributes('inputmode')).toBe('text')
    expect(input.attributes('maxlength')).toBe('64')
    expect(input.attributes('data-testid')).toBe('password-input')
  })
})

describe('ControlInput', () => {
  it.each(textLikeTypes)('renders type="%s"', (type) => {
    const wrapper = mount(ControlInput, {
      props: {
        name: 'value',
        type,
      },
    })

    expect(wrapper.get('input').attributes('type')).toBe(type)
  })

  it('falls through native input attributes to the input element', () => {
    const wrapper = mount(ControlInput, {
      props: {
        name: 'website',
        type: 'url',
        autocomplete: 'url',
        required: true,
        placeholder: 'https://example.com',
      },
      attrs: {
        autofocus: true,
        autocapitalize: 'none',
        spellcheck: 'false',
        inputmode: 'url',
      },
    })

    const input = wrapper.get('input')
    expect(input.element.tagName).toBe('INPUT')
    expect(input.attributes('type')).toBe('url')
    expect(input.attributes('name')).toBe('website')
    expect(input.attributes('autocomplete')).toBe('url')
    expect(input.attributes('required')).toBeDefined()
    expect(input.attributes('autofocus')).toBeDefined()
    expect(input.attributes('autocapitalize')).toBe('none')
    expect(input.attributes('spellcheck')).toBe('false')
    expect(input.attributes('inputmode')).toBe('url')
    expect(input.attributes('placeholder')).toBe('https://example.com')
  })
})
