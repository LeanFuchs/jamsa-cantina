import { formatAddress, formatSpecialties, interpolate, siteInfo as info } from '../lib/content';
import es from '../locales/es.js';
import en from '../locales/en.js';

export function GET() {
  const site = info.website.replace(/\/$/, '');

  const lines = [
    interpolate(en.llms.title),
    '',
    `> ${interpolate(en.llms.summary)}`,
    '',
    '## Quick facts',
    '',
    `- ${en.llms.addressLabel}: ${formatAddress()}`,
    `- ${en.llms.phoneLabel}: ${info.phoneDisplay}`,
    `- ${en.llms.hoursLabel}: ${en.llms.hoursSummary}`,
    `- ${en.llms.cuisineLabel}: ${en.business.servesCuisine}`,
    `- ${en.llms.atmosphereLabel}: ${en.business.atmosphere}`,
    `- ${en.llms.specialtiesLabel}: ${formatSpecialties(en)}`,
    '',
    '## Important pages',
    '',
    `- [Homepage](${site}/)`,
    `- [Menu](${info.menuUrl})`,
    `- [About](${site}/about)`,
    `- [Gallery](${site}/gallery)`,
    `- [Contact](${site}/contact)`,
    `- [Instagram](${info.instagramUrl})`,
    `- [Google Maps](${info.mapUrl})`,
    '',
    '---',
    '',
    interpolate(es.llms.title),
    '',
    `> ${interpolate(es.llms.summary)}`,
    '',
    '## Información',
    '',
    `- ${es.llms.addressLabel}: ${formatAddress(es)}`,
    `- ${es.llms.phoneLabel}: ${info.phoneDisplay}`,
    `- ${es.llms.hoursLabel}: ${es.llms.hoursSummary}`,
    `- ${es.llms.cuisineLabel}: ${es.business.servesCuisine}`,
    `- ${es.llms.atmosphereLabel}: ${es.business.atmosphere}`,
    `- ${es.llms.specialtiesLabel}: ${formatSpecialties(es)}`,
    '',
    '## Páginas importantes',
    '',
    `- [Inicio](${site}/)`,
    `- [Menú](${info.menuUrl})`,
    `- [Nosotros](${site}/about)`,
    `- [Galería](${site}/gallery)`,
    `- [Contacto](${site}/contact)`,
    `- [Instagram](${info.instagramUrl})`,
    `- [Google Maps](${info.mapUrl})`
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8'
    }
  });
}
