import { formatAddress, formatSpecialties, interpolate, siteInfo as info } from '../lib/content';
import es from '../locales/es.js';
import en from '../locales/en.js';

export function GET() {
  const lines = [
    interpolate(es.llms.title),
    '',
    `> ${interpolate(es.llms.summary)}`,
    '',
    `${es.llms.addressLabel}: ${formatAddress(es)}`,
    `${es.llms.phoneLabel}: ${info.phoneDisplay}`,
    `${es.llms.hoursLabel}: ${es.llms.hoursSummary}`,
    `${es.llms.cuisineLabel}: ${es.business.servesCuisine}`,
    `${es.llms.atmosphereLabel}: ${es.business.atmosphere}`,
    `${es.llms.specialtiesLabel}: ${formatSpecialties(es)}`,
    '',
    `${es.llms.websiteLabel}: ${info.website}`,
    `${es.llms.menuLabel}: ${info.menuUrl}`,
    `Instagram: ${info.instagramUrl}`,
    `Maps: ${info.mapUrl}`,
    '',
    '---',
    '',
    interpolate(en.llms.title),
    '',
    `> ${interpolate(en.llms.summary)}`,
    '',
    `${en.llms.addressLabel}: ${formatAddress()}`, 
    `${en.llms.phoneLabel}: ${info.phoneDisplay}`,
    `${en.llms.hoursLabel}: ${en.llms.hoursSummary}`,
    `${en.llms.cuisineLabel}: ${en.business.servesCuisine}`,
    `${en.llms.atmosphereLabel}: ${en.business.atmosphere}`,
    `${en.llms.specialtiesLabel}: ${formatSpecialties(en)}`, 
    '',
    `${en.llms.websiteLabel}: ${info.website}`,
    `${en.llms.menuLabel}: ${info.menuUrl}`,
    `Instagram: ${info.instagramUrl}`,
    `Maps: ${info.mapUrl}`
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
