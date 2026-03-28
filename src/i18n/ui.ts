export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

export const ui = {
  de: {
    // Navigation
    'nav.day1': 'Tag 1',
    'nav.day2': 'Tag 2',
    'nav.day3': 'Tag 3',
    'nav.booths': 'Workshops',

    // Hero CTAs
    'hero.cta.sponsor': 'Als Sponsor registrieren',
    'hero.cta.visitor': 'Als Besucher registrieren',
    'hero.cta.comingSoon': 'Demnächst',

    // Day sections
    'day.label': 'Tag',

    // Booths
    'booths.colocated': 'Parallel zu Tag 2 & 3',

    // Footer
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.contact': 'Kontakt',
    'footer.copyright': '© 2026 Sovereign Cloud Days Saar-Lor-Lux. Alle Rechte vorbehalten.',
  },
  en: {
    // Navigation
    'nav.day1': 'Day 1',
    'nav.day2': 'Day 2',
    'nav.day3': 'Day 3',
    'nav.booths': 'Workshops',

    // Hero CTAs
    'hero.cta.sponsor': 'Register as Sponsor',
    'hero.cta.visitor': 'Register as Visitor',
    'hero.cta.comingSoon': 'Coming Soon',

    // Day sections
    'day.label': 'Day',

    // Booths
    'booths.colocated': 'Colocated with Day 2 & 3',

    // Footer
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2026 Sovereign Cloud Days Saar-Lor-Lux. All rights reserved.',
  },
} as const;
