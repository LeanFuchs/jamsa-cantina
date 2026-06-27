import es from '../locales/es.js';

const website = import.meta.env.PUBLIC_SITE_URL || 'https://jamsa-cantina.pages.dev';

export const siteInfo = {
  website,
  phoneDisplay: '11-5943-6117',
  phoneE164: '+541159436117',
  instagramUrl: 'https://www.instagram.com/jamsacantina',
  mapUrl: 'https://www.google.com/maps/place/Jamsa+Cantina/@-34.5899625,-58.4228687,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccbd4bb108a5d:0xf8d17a830018798f!8m2!3d-34.5899669!4d-58.4202938!16s%2Fg%2F11z7tc7rkp?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D',
  mapEmbedUrl: 'https://www.google.com/maps?q=Soler%204201%2C%20Ciudad%20Autónoma%20de%20Buenos%20Aires%2C%20AR&output=embed',
  menuUrl: 'https://menu.fu.do/jamsa/qr-menu',
  images: {
    hero: '/images/hero.jpg',
    gallery: ["albondigas", "berenjenas", "osobuco", "pollo", "latkes", "tabule", "lehmeyun", "hummusVeggie", "pimientos", "fatush", "malabi", "peras", "lehmeyunEspejo", "platitos1", "platitos2", "platitos3", "platitos4"]
  },
  address: {
    street: 'Soler 4201',
    city: 'Ciudad de Buenos Aires',
    locality: 'Palermo',
    region: 'CABA',
    country: 'AR'
  },
  geo: {
    latitude: -34.5899669,
    longitude: -58.4202938
  },
  hours: [
    { dayKey: "monday", closed: true, display: "Cerrado" },
    { dayKey: "tuesday", closed: false, display: "7:00 PM - 12:00 AM", intervals: [{ opens: "19:00", closes: "23:59" }] },
    { dayKey: "wednesday", closed: false, display: "7:00 PM - 12:00 AM", intervals: [{ opens: "19:00", closes: "23:59" }] },
    { dayKey: "thursday", closed: false, display: "7:00 PM - 12:00 AM", intervals: [{ opens: "19:00", closes: "23:59" }] },
    { dayKey: "friday", closed: false, display: "7:00 PM - 12:00 AM", intervals: [{ opens: "19:00", closes: "23:59" }] },
    { dayKey: "saturday", closed: false, display: "12:00 PM - 4:00 PM y 8:00 PM - 12:00 AM", intervals: [{ opens: "12:00", closes: "16:00" }, { opens: "20:00", closes: "23:59" }] },
    { dayKey: "sunday", closed: false, display: "12:00 PM - 4:00 PM y 8:00 PM - 12:00 AM", intervals: [{ opens: "12:00", closes: "16:00" }, { opens: "20:00", closes: "23:59" }] }
  ]
};
export function interpolate(templateStr, dict = es) {
  if (!templateStr) return '';
  return templateStr.replace(/{([^}]+)}/g, (match, key) => {
    const value = key.split('.').reduce((obj, index) => (obj && obj[index] !== undefined ? obj[index] : null), dict);
    
    if (value === null && dict.business && dict.business[key] !== undefined) {
      return dict.business[key];
    }
    
    return value !== null ? value : match;
  });
}

export function formatAddress(dict = es) {
  const street = dict.business?.addressStreet || "Soler 4201"; 
  const city = dict.business?.addressCity || "Ciudad de Buenos Aires";
  return `${street}, ${city}`;
}

export function formatSpecialties(dict = es) {
  if (!dict || !dict.business || !Array.isArray(dict.business.specialties)) {
    console.warn("⚠️ formatSpecialties: Specialties data missing in dictionary.");
    return '';
  }
  return dict.business.specialties.join(', ');
}
