export type UrlProtocol = 'http' | 'https'

const SCHEME = /^(https?):\/\/(.*)$/i

/**
 * Split a leading `http://`, `https://`, or `//` off `value`.
 * `protocol` is only set when the value named one.
 */
function splitScheme(value: string): { protocol?: UrlProtocol, hostPath: string } | null {
  const match = SCHEME.exec(value)
  if (match) {
    return {
      protocol: match[1]!.toLowerCase() as UrlProtocol,
      hostPath: match[2] ?? '',
    }
  }
  if (value.startsWith('//')) {
    return { hostPath: value.slice(2) }
  }
  return null
}

export function parseUrlValue(
  value: string | null | undefined,
  defaultProtocol: UrlProtocol = 'https',
): { protocol: UrlProtocol, hostPath: string } {
  const raw = (value ?? '').trim()
  const split = splitScheme(raw)
  return {
    protocol: split?.protocol ?? defaultProtocol,
    hostPath: split ? split.hostPath : raw,
  }
}

/**
 * Strip a leading http(s):// (or //) from user input/paste and capture the protocol.
 * Input without a scheme is returned unchanged, so typing is not disturbed.
 */
export function sanitizeHostPathInput(input: string): {
  protocol?: UrlProtocol
  hostPath: string
} {
  return splitScheme(input.trimStart()) ?? { hostPath: input }
}

export function joinUrl(protocol: UrlProtocol, hostPath: string): string {
  const path = hostPath.trim()
  if (!path) return ''
  return `${protocol}://${path}`
}
