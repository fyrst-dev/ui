import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the index page', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    expect(html).toContain('<div>basic</div>')
  })

  it('auto-imports FyrstButton from the module', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Publish')
    expect(html).toContain('btn')
  })

  it('does not inject compiled Panda CSS from the library', async () => {
    const html = await $fetch('/')
    expect(html).not.toContain('@layer reset')
    expect(html).not.toContain('@layer tokens')
    expect(html).not.toContain('@layer recipes')
  })
})
