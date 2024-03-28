import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const HeaderMenu = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, []);
  return [
    {
      title: t('candidate.title'),
      menu: [
        { name: t('candidate.sortByPos'), url: '/recruitment' },
        { name: t('candidate.allApplication'), url: '/recruitment' },
      ],
    },
    {
      title: t('report.title'),
      menu: [
        { name: t('report.ra'), url: '/recruitment' },
        { name: t('report.sa'), url: '/recruitment' },
        { name: t('report.tisa'), url: '/recruitment' },
        { name: t('report.tp'), url: '/recruitment' },
      ],
    },
    {
      title: t('configuration.title'),
      menu: [
        { name: t('configuration.st'), url: '/recruitment' },
        { name: t('configuration.type'), url: '/recruitment' },
        { name: t('configuration.rfr'), url: '/recruitment' },
        { name: t('configuration.room'), url: '/recruitment' },
        { name: t('configuration.skills'), url: '/recruitment' },
        { name: t('configuration.acts'), url: '/recruitment' },
      ],
    },
  ];
};

export const HeaderUserMenu = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, []);

  return [
    { name: t('headerUserMenu.document'), url: '/recruitment' },
    { name: t('headerUserMenu.support'), url: '/recruitment' },
    { name: t('headerUserMenu.Keyword'), url: '/recruitment', description: 'CTRL + K' },
    { name: t('headerUserMenu.dm') },
    { name: t('headerUserMenu.info'), url: '/recruitment' },
    { name: t('headerUserMenu.db'), url: '/recruitment' },
  ];
};
