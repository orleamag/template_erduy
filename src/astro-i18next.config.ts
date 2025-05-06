const config = {
  defaultLocale: 'es',
  locales: ['es', 'en'],
  i18next: {
    debug: true,
    supportedLngs: ['es', 'en'],
    fallbackLng: 'es'
  }
} as const;

export default config;