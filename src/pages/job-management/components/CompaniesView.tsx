import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFoundViewed = () => {
  const { t } = useTranslation();

  return (
    <div className='flex justify-center flex-col items-center'>
      <img className='w-40' src='/assets/icons/not-found.viewed.webp' alt='not found' />
      <p className='text-xl mt-4 font-bold text-gray-400'>{t('companies.viewed.empty')}</p>
      <p className='text-base mt-4'>
        <span>{t('attract.step1')}</span>
        <span className='text-orange-500 underline font-bold'>
          <Link to={'/'}>{t('cv.complete')}</Link>
        </span>
        <span>{t('attract.step2')}</span>
        <span className='text-orange-500 underline font-bold'>
          <Link to={'/'}>{t('cv.create')}</Link>
        </span>
        <span>{t('attract.step3')}</span>
        <span className='text-orange-500 underline font-bold'>
          <Link to={'/'}>{t('cv.open')}</Link>
        </span>
      </p>
    </div>
  );
};

const CompaniesView = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-white-900 rounded p-4 mt-4'>
      <div>
        <div className='font-bold text-2xl'>{t('companies.viewed')}</div>
        <NotFoundViewed />
      </div>
    </div>
  );
};

export default CompaniesView;
