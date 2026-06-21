export default {
  business: {
    name: 'Trattoria Roma',
    tagline: 'Southern Italian cooking in downtown Austin',
    description:
      'Trattoria Roma is a family-owned Italian restaurant in downtown Austin serving homemade pasta, wood-fired pizza, and classic Southern Italian dishes in a relaxed neighborhood dining room.',
    servesCuisine: 'Italian',
    neighborhood: 'Downtown Austin',
    cityState: 'Austin, TX',
    atmosphere: 'Casual, family-friendly, neighborhood trattoria',
    specialties: ['Cacio e Pepe', 'Osso Buco', 'Wood-fired Margherita Pizza', 'Tiramisu']
  },
  nav: {
    home: 'Home',
    about: 'About',
    gallery: 'Gallery',
    contact: 'Contact'
  },
  cta: {
    directions: 'Get Directions',
    menu: 'View Menu',
    instagram: 'Instagram',
    followInstagram: 'Follow on Instagram'
  },
  labels: {
    address: 'Address',
    phone: 'Phone',
    hours: 'Hours',
    visit: 'Visit',
    links: 'Links',
    cuisine: 'Cuisine',
    neighborhood: 'Neighborhood',
    atmosphere: 'Atmosphere',
    quickFacts: 'Quick Facts'
  },
  days: {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday'
  },
  images: {
    heroAlt: 'Warm restaurant dining room with tables set for dinner',
    galleryAlt: [
      'Fresh pasta with tomato sauce and herbs',
      'Wood-fired pizza with basil',
      'Chef finishing a pasta dish in the kitchen',
      'Guests dining inside a neighborhood restaurant',
      'Margherita pizza served hot',
      'Tiramisu dessert dusted with cocoa'
    ]
  },
  meta: {
    defaultTitle: '{name} - {cuisine} Restaurant in {cityState}',
    aboutTitle: 'About {name} - {cuisine} Restaurant in {cityState}',
    aboutDescription:
      '{name} is a family-owned {cuisine} restaurant in {neighborhood} known for homemade pasta, wood-fired pizza, and a casual dining room.',
    galleryTitle: '{name} Gallery - Food and Dining Room Photos',
    galleryDescription:
      'See food and dining room photos from {name}, a family-owned {cuisine} restaurant in {neighborhood}.',
    contactTitle: 'Contact {name} - Address, Phone, and Hours',
    contactDescription:
      'Find {name} at {street} in {cityState}. See hours, phone number, directions, and the current menu link.'
  },
  home: {
    aboutEyebrow: 'About',
    aboutHeading: 'Family-owned Italian food in {neighborhood}',
    aboutParagraphs: [
      '{name} is a family-owned sit-down restaurant in {neighborhood}, serving Southern Italian cooking with a focus on homemade pasta, wood-fired pizza, seasonal vegetables, and classic desserts.',
      'The dining room is casual and family-friendly, with a neighborhood pace that works for weeknight meals, downtown dinners, and relaxed gatherings before or after events.',
      'Guest favorites include {specialties}. The restaurant keeps the menu on its dedicated external page so guests always see the current dishes.'
    ]
  },
  about: {
    eyebrow: 'About',
    heading: 'A neighborhood trattoria built around simple Southern Italian cooking',
    paragraphs: [
      '{name} is a family-owned Italian restaurant in {neighborhood}, {cityState}. The kitchen focuses on Southern Italian dishes, handmade pastas, wood-fired pizzas, slow-cooked meats, and desserts prepared for a sit-down dining room.',
      'The restaurant is built for guests who want a casual, comfortable meal rather than a formal tasting-menu experience. Families, downtown workers, travelers, and neighborhood regulars come in for pasta, pizza, wine, and dependable service.',
      "Signature dishes include {specialties}. The atmosphere is {atmosphereLower}, and the current menu is maintained on the restaurant's external menu page."
    ]
  },
  gallery: {
    eyebrow: 'Gallery',
    heading: 'Food, room, and regulars',
    pageHeading: 'Photos from the kitchen and dining room',
    intro:
      'Replace these sample photos with real Instagram images from the restaurant before launch. Keep the gallery focused: 6 to 12 strong food and ambiance photos is enough.'
  },
  location: {
    eyebrow: 'Location and Hours',
    heading: 'Come by for dinner'
  },
  reviews: {
    eyebrow: 'Reviews',
    heading: 'What guests mention most',
    items: [
      {
        quote:
          'The pasta tastes homemade, the staff remembers regulars, and the dining room feels comfortable without being loud.',
        source: 'Google review'
      },
      {
        quote: 'A dependable downtown spot for pizza, wine, and a relaxed family dinner.',
        source: 'Google review'
      },
      {
        quote: 'Simple Italian food done well, especially the cacio e pepe and tiramisu.',
        source: 'Google review'
      }
    ]
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Address, phone, and hours'
  },
  llms: {
    title: '# {name}',
    summary: '{cuisine} sit-down restaurant in {cityState}.',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    hoursLabel: 'Hours',
    cuisineLabel: 'Cuisine',
    atmosphereLabel: 'Atmosphere',
    specialtiesLabel: 'Signature dishes',
    websiteLabel: 'Website',
    menuLabel: 'Menu',
    hoursSummary: 'Mon-Thu 12pm-10pm, Fri-Sat 12pm-11pm, Sun 1pm-9pm'
  }
};
