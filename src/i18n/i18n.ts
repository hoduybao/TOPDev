import i18n from 'i18next';
import LanguageDectector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import vi from './locales/vi.json';

i18n
  .use(LanguageDectector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'vi',
    resources: {
      en: {
        translation: en,
      },
      vi: {
        translation: vi,
      },
    },
  });
