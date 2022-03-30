import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './locales/es';
import en from './locales/en';

export const defaultNS = 'common'
export const resources = {
  es,
  en
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['common'],
  defaultNS,
  resources,
});

export default i18n;