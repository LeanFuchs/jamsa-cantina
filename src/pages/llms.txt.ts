import { formatAddress, formatSpecialties, interpolate, siteInfo as info } from '../lib/content';
// Importamos ambos diccionarios directamente
import es from '../locales/es.js';
import en from '../locales/en.js';

export function GET() {
  const lines = [
    // === SECCIÓN EN ESPAÑOL ===
    interpolate(es.llms.title),
    '',
    `> ${interpolate(es.llms.summary)}`,
    '',
    `${es.llms.addressLabel}: ${formatAddress(es)}`, // Nota: Si formatAddress usa el t estático interno, podés pasarle es si tu función lo permite, o dejarlo así si es agnóstico.
    `${es.llms.phoneLabel}: ${info.phoneDisplay}`,
    `${es.llms.hoursLabel}: ${es.llms.hoursSummary}`,
    `${es.llms.cuisineLabel}: ${es.business.servesCuisine}`,
    `${es.llms.atmosphereLabel}: ${es.business.atmosphere}`,
    `${es.llms.specialtiesLabel}: ${formatSpecialties(es)}`, // Lo mismo aquí con las especialidades
    '',
    `${es.llms.websiteLabel}: ${info.website}`,
    `${es.llms.menuLabel}: ${info.menuUrl}`,
    `Instagram: ${info.instagramUrl}`,
    `Maps: ${info.mapUrl}`,
    '',
    '---',
    '',
    // === SECCIÓN EN INGLÉS (ENGLISH SECTION) ===
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
