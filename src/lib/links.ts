const remappedLinks: Record<string, string> = {
  '/vodic/': '/#kontakt',
  '/ture/privatne/': '/#kontakt',
};

export function safeHref(href: string): string {
  return remappedLinks[href] ?? href;
}

export function slugFromHref(href: string): string {
  return href.split('/').filter(Boolean).at(-1) ?? '';
}
