import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FieldInput from '../src/components/Field/FieldInput.vue'
import ControlInput from '../src/internal/controls/ControlInput.vue'
import FieldError from '../src/components/Field/FieldError.vue'
import FieldSelect from '../src/components/Field/FieldSelect.vue'
import FieldTextarea from '../src/components/Field/FieldTextarea.vue'
import { fieldStyles } from '../src/components/Field/styles'
import { formPromptStyles } from '../src/components/Form/styles'
import { controlStyles } from '../src/internal/controls/controlStyles'

const textLikeTypes = ['text', 'email', 'url', 'tel', 'search', 'password', 'number'] as const

describe('form control font', () => {
  it('inherits the app font on input, textarea, and select triggers', () => {
    expect(controlStyles.raw()).toMatchObject({ fontFamily: 'inherit' })
  })

  it('inherits the app font on the prompt textarea', () => {
    expect(formPromptStyles.raw().textarea).toMatchObject({ fontFamily: 'inherit' })
  })
})

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

  it('renders the required mark in the solid danger color', () => {
    const wrapper = mount(FieldInput, {
      props: {
        name: 'email',
        label: 'Email',
        required: true,
      },
    })

    expect(wrapper.get('label').text()).toContain('*')
    expect(wrapper.get('label [aria-hidden="true"]').text()).toBe('*')
    expect(fieldStyles.raw().required).toMatchObject({ color: 'danger' })
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
        'autofocus': true,
        'autocapitalize': 'off',
        'spellcheck': 'false',
        'inputmode': 'text',
        'maxlength': '64',
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

describe('Field errors and messages', () => {
  it('links the control to the message and error and marks it invalid', () => {
    const wrapper = mount(FieldInput, {
      props: { name: 'email', label: 'Email', message: 'We never share it', error: 'Required' },
    })

    const input = wrapper.get('input')
    const describedBy = input.attributes('aria-describedby')?.split(' ') ?? []
    const error = wrapper.get('[role="alert"]')

    expect(input.attributes('aria-invalid')).toBe('true')
    expect(input.attributes('class')).toBe(controlStyles({ size: 'md', valid: false }))
    expect(describedBy).toContain(error.attributes('id'))
    expect(error.attributes('aria-live')).toBeUndefined()
    expect(wrapper.text()).toContain('We never share it')
  })

  it('renders error text as text unless html is set', () => {
    const payload = '<img src=x onerror="alert(1)">Bad'
    const text = mount(FieldInput, { props: { name: 'a', error: payload } })
    expect(text.find('img').exists()).toBe(false)
    expect(text.get('[role="alert"]').text()).toBe(payload)

    const html = mount(FieldInput, { props: { name: 'a', error: '<strong>Bad</strong>', html: true } })
    expect(html.get('[role="alert"] strong').text()).toBe('Bad')
  })

  it('lets a standalone FieldError opt into html', () => {
    const wrapper = mount(FieldError, { props: { message: '<em>x</em>', html: true } })
    expect(wrapper.find('em').exists()).toBe(true)
  })

  it('updates v-model on textarea input', async () => {
    const wrapper = mount(FieldTextarea, { props: { name: 'bio', modelValue: '' } })
    await wrapper.get('textarea').setValue('Hello')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['Hello'])
  })

  it('renders the select trigger with the select control variant', () => {
    const wrapper = mount(FieldSelect, { props: { name: 'team', options: [{ label: 'A', value: 'a' }] } })
    expect(wrapper.get('button').attributes('class')).toBe(controlStyles({ element: 'select', size: 'md', valid: 'none' }))
  })
})
