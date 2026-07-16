export type UrlProtocol = 'http' | 'https'

export function parseUrlValue(
  value: string | null | undefined,
  defaultProtocol: UrlProtocol = 'https',
): { protocol: UrlProtocol; hostPath: string } {
  const raw = (value ?? '').trim()
  if (!raw) {
    return { protocol: defaultProtocol, hostPath: '' }
  }

  const withScheme = raw.match(/^(https?):\/\/(.*)$/i)
  if (withScheme) {
    const scheme = withScheme[1]
    if (!scheme) {
      return { protocol: defaultProtocol, hostPath: withScheme[2] ?? '' }
    }
    return {
      protocol: scheme.toLowerCase() as UrlProtocol,
      hostPath: withScheme[2] ?? '',
    }
  }

  if (raw.startsWith('//')) {
    return { protocol: defaultProtocol, hostPath: raw.slice(2) }
  }

  return { protocol: defaultProtocol, hostPath: raw }
}

/**
 * Strip a leading http(s):// (or //) from user input/paste and optionally capture the protocol.
 */
export function sanitizeHostPathInput(input: string): {
  protocol?: UrlProtocol
  hostPath: string
} {
  const leading = input.match(/^\s*/)?.[0] ?? ''
  const rest = input.slice(leading.length)

  const withScheme = rest.match(/^(https?):\/\/(.*)$/i)
  if (withScheme) {
    const scheme = withScheme[1]
    if (!scheme) {
      return { hostPath: withScheme[2] ?? '' }
    }
    return {
      protocol: scheme.toLowerCase() as UrlProtocol,
      hostPath: withScheme[2] ?? '',
    }
  }

  if (rest.startsWith('//')) {
    return { hostPath: rest.slice(2) }
  }

  return { hostPath: input }
}

export function joinUrl(protocol: UrlProtocol, hostPath: string): string {
  const path = hostPath.trim()
  if (!path) return ''
  return `${protocol}://${path}`
}
