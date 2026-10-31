import { nextTick } from 'vue'
import { describe, it, expect, afterEach, vi } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import FlyoutRoot from '../src/components/Flyout/FlyoutRoot.vue'

let wrapper: VueWrapper | undefined

function mountFlyout(props: Record<string, unknown> = {}) {
  wrapper = mount(FlyoutRoot, {
    props: { label: 'Menu', ...props },
    slots: { default: '<a href="#one" class="panel-link">One</a>' },
    attachTo: document.body,
  })
  return wrapper
}

const panel = () => document.querySelector('.panel-link')
const pointer = (type: string, pointerType = 'mouse') => new PointerEvent(type, { pointerType, bubbles: false })

afterEach(() => {
  wrapper?.unmount()
  wrapper = undefined
  vi.useRealTimers()
})

describe('Flyout', () => {
  it('toggles on click and exposes the state on the trigger', async () => {
    const flyout = mountFlyout()
    const trigger = flyout.get('button')

    expect(trigger.attributes('aria-expanded')).toBe('false')
    expect(panel()).toBeNull()

    await trigger.trigger('click')
    expect(trigger.attributes('aria-expanded')).toBe('true')
    expect(panel()).not.toBeNull()

    await trigger.trigger('click')
    expect(trigger.attributes('aria-expanded')).toBe('false')
  })

  it('opens on mouse hover and closes after the pointer leaves', async () => {
    vi.useFakeTimers()
    const flyout = mountFlyout()
    const root = flyout.get('div').element

    root.dispatchEvent(pointer('pointerenter'))
    await nextTick()
    expect(flyout.get('button').attributes('aria-expanded')).toBe('true')

    root.dispatchEvent(pointer('pointerleave'))
    vi.advanceTimersByTime(200)
    await nextTick()
    expect(flyout.get('button').attributes('aria-expanded')).toBe('false')
  })

  it('pins a hover-opened flyout on click instead of closing it', async () => {
    vi.useFakeTimers()
    const flyout = mountFlyout()
    const root = flyout.get('div').element

    root.dispatchEvent(pointer('pointerenter'))
    await nextTick()
    await flyout.get('button').trigger('click')
    root.dispatchEvent(pointer('pointerleave'))
    vi.advanceTimersByTime(500)
    await nextTick()

    expect(flyout.get('button').attributes('aria-expanded')).toBe('true')
  })

  it('ignores touch hover and respects openOnHover=false', async () => {
    const flyout = mountFlyout({ openOnHover: false })
    const root = flyout.get('div').element

    root.dispatchEvent(pointer('pointerenter'))
    await nextTick()
    expect(flyout.get('button').attributes('aria-expanded')).toBe('false')

    const touch = mountFlyout()
    touch.get('div').element.dispatchEvent(pointer('pointerenter', 'touch'))
    await nextTick()
    expect(touch.get('button').attributes('aria-expanded')).toBe('false')
    flyout.unmount()
  })

  it('closes on Escape', async () => {
    const flyout = mountFlyout()
    await flyout.get('button').trigger('click')
    expect(panel()).not.toBeNull()

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await nextTick()
    await nextTick()
    expect(flyout.get('button').attributes('aria-expanded')).toBe('false')
  })

  it('renders the label as HTML', () => {
    expect(mountFlyout({ label: 'A <b>B</b>' }).find('b').exists()).toBe(true)
  })
})
