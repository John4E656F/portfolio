export function formatContentfulImageUrl(src: string, protocol: 'http' | 'https' = 'https'): string {
  if (src.startsWith('http:') || src.startsWith('https:')) {
    return src;
  }

  return `${protocol}:${src}`;
}
