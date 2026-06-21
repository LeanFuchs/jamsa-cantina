import { formatAddress, formatSpecialties, interpolate, siteInfo as info, t } from '../lib/content';

export function GET() {
  const lines = [
    interpolate(t.llms.title),
    '',
    interpolate(t.llms.summary),
    `${t.llms.addressLabel}: ${formatAddress()}`,
    `${t.llms.phoneLabel}: ${info.phone}`,
    `${t.llms.hoursLabel}: ${t.llms.hoursSummary}`,
    `${t.llms.cuisineLabel}: ${t.business.servesCuisine}`,
    `${t.llms.atmosphereLabel}: ${t.business.atmosphere}`,
    `${t.llms.specialtiesLabel}: ${formatSpecialties()}`,
    `${t.llms.websiteLabel}: ${info.website}`,
    `${t.llms.menuLabel}: ${info.menuUrl}`
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
