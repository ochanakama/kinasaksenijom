export function destinationHref(id: string) {
  const slug = id === 'hainan' ? 'sanya-hainan' : id;
  return `/destinacije/${slug}/`;
}
