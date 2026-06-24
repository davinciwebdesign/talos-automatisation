import type { FAQ } from '../data/services';
import { site } from '../config/site';

/** Build FAQPage JSON-LD from a list of Q/A. */
export function faqSchema(items: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

/** Build Service JSON-LD. */
export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: new URL(url, site.url).href,
    areaServed: site.area,
    provider: { '@type': 'Organization', name: site.name, url: site.url },
  };
}
