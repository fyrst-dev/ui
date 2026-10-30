import { describe, it, expect } from 'vitest'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import SsrAll from './ssr-all.vue'
import CardBody from '../src/components/Card/CardBody.vue'
import CardHeader from '../src/components/Card/CardHeader.vue'
import CardRoot from '../src/components/Card/CardRoot.vue'
import FieldInput from '../src/components/Field/FieldInput.vue'
import FormPrompt from '../src/components/Form/FormPrompt.vue'
import Loader from '../src/components/Loader/Loader.vue'
import ProgressRoot from '../src/components/Progress/ProgressRoot.vue'

function styleAttributeValues(html: string): string[] {
  return [...html.matchAll(/\sstyle=(["'])(.*?)\1/g)].map(match => match[2] ?? '')
}

function isThirdPartyPrimitiveStyle(style: string): boolean {
  const normalized = style.replace(/\s+/g, '')
  return (
    style.includes('--reka-')
    || style.includes('clip:rect(0, 0, 0, 0)')
    || style.includes('clip-path:inset(50%)')
    || normalized === 'outline:none;'
    || normalized === 'pointer-events:none;'
  )
}

describe('SSR', () => {
  it('renders public components without library-owned inline styles', async () => {
    const html = await renderToString(createSSRApp(SsrAll))

    expect(html).toContain('Publish')
    expect(html).toContain('Title')
    expect(html).toContain('Body')
    expect(html).toContain('type="password"')
    expect(html).toContain('maxlength="64"')
    expect(html).not.toContain('--card-border-size')
    expect(html).not.toContain('--loader-size')
    expect(html).not.toContain('--progress-value')

    for (const style of styleAttributeValues(html)) {
      expect(style, `unexpected inline style="${style}"`).toSatisfy(isThirdPartyPrimitiveStyle)
    }
  })

  it('renders CardRoot, CardHeader, and CardBody without style attributes', async () => {
    const html = await renderToString(createSSRApp({
      components: { CardRoot, CardHeader, CardBody },
      template: `
        <CardRoot color="primary" :border-size="2">
          <CardHeader title="Card title" subtitle="Card subtitle" />
          <CardBody>Card body</CardBody>
        </CardRoot>
      `,
    }))

    expect(html).toContain('Card title')
    expect(html).toContain('Card body')
    expect(styleAttributeValues(html)).toEqual([])
    expect(html).not.toContain('--card-border-size')
  })

  it('renders Loader, Progress, FormPrompt, and FieldInput without style attributes', async () => {
    const html = await renderToString(createSSRApp({
      components: { Loader, ProgressRoot, FormPrompt, FieldInput },
      template: `
        <Loader :size="48" />
        <ProgressRoot :model-value="50" />
        <FormPrompt id="prompt" name="prompt" action="https://example.com/submit" />
        <FieldInput name="secret" label="Password" type="password" autocomplete="current-password" />
      `,
    }))

    expect(html).toContain('type="password"')
    expect(html).toContain('autocomplete="current-password"')
    expect(styleAttributeValues(html)).toEqual([])
  })
})
