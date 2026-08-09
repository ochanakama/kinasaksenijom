const remappedLinks: Record<string, string> = {
  '/vodic/': '/#kontakt',
  '/ture/privatne/': '/#kontakt',
  '/o-meni/': '/#o-meni',
  '/kontakt/': '/#kontakt',
};

export function safeHref(href: string): string {
  const destinationMatch = href.match(/^\/destinacije\/([^/]+)\/?$/);
  if (destinationMatch) return `/${destinationMatch[1]}/`;
  return remappedLinks[href] ?? href;
}

export function slugFromHref(href: string): string {
  return href.split('/').filter(Boolean).at(-1) ?? '';
}
