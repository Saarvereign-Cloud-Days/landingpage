import { ui, defaultLang, type Lang } from './ui';

const base = import.meta.env.BASE_URL; // e.g. '/landingpage' or '/'

export function getLangFromUrl(url: URL): Lang {
  // Strip the base path prefix before checking for language
  const pathname = url.pathname.replace(base, '/');
  const [, lang] = pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function localePath(path: string): string {
  // Ensure base + path are joined correctly
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

export function getOtherLangUrl(url: URL): string {
  const lang = getLangFromUrl(url);
  if (lang === 'de') return localePath('/en/');
  return localePath('/');
}

export function getContentPrefix(lang: Lang): string {
  return lang;
}
