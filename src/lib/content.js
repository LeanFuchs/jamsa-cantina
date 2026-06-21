import locale from '../locales/es.js';
import info from '../data/info.json';

export const t = locale;
export const siteInfo = info;

export function formatAddress() {
  const { street, city, region, postalCode } = info.address;
  return `${street}, ${city}, ${region} ${postalCode}`;
}

export function formatSpecialties() {
  return new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(t.business.specialties);
}

export function interpolate(template, values = {}) {
  const baseValues = {
    name: t.business.name,
    cuisine: t.business.servesCuisine,
    cityState: t.business.cityState,
    neighborhood: t.business.neighborhood,
    street: info.address.street,
    specialties: formatSpecialties(),
    atmosphereLower: t.business.atmosphere.toLowerCase()
  };

  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? baseValues[key] ?? '');
}
