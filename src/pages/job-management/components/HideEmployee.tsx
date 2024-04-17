import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const HideEmployee = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full rounded-lg bg-white-900 p-4'>
      <div className='flex justify-between items-center'>
        <span className='font-bold text-lg'>{t('hiring')}</span>
        <Button className='rounded bg-gray-200 font-bold text-gray-900'>{t('do.now')}</Button>
      </div>
    </div>
  );
};

export default HideEmployee;
