export const SITE_NAME = 'Kina sa Ksenijom';
const DEFAULT_SITE = new URL('https://kinasaksenijom.com');

export function getSchemaIds(site?: URL) {
  const base = site ?? DEFAULT_SITE;

  return {
    organization: new URL('/#organization', base).href,
    website: new URL('/#website', base).href,
    person: new URL('/o-meni/#ksenija', base).href,
    blog: new URL('/blog/#blog', base).href,
  };
}

export function getOrganizationReference(site?: URL) {
  const base = site ?? DEFAULT_SITE;
  const ids = getSchemaIds(site);

  return {
    '@type': 'Organization',
    '@id': ids.organization,
    name: SITE_NAME,
    url: new URL('/', base).href,
  };
}
