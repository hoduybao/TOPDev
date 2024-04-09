import ContentSession from './ContentSession';
import companyData from '../../../draft/company-new.json';
import { useTranslation } from 'react-i18next';

const ProfileSession = () => {
  const { t } = useTranslation();
  return (
    <div className='p-4'>
      <ContentSession header={t('company.aboutus')} content={companyData.about} />
      <ContentSession header={t('company.introduction')} content={companyData.introduction} />
      <ContentSession header={t('company.benefit')} content={companyData.benefit} />
      <div className='flex gap-2 mb-2'>
        {companyData.imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt='company logo'
            className='w-[33.33%] rounded aspect-square h-full object-cover'
          />
        ))}
      </div>
      <ContentSession header={t('company.benefit')} content={companyData.benefit} />
    </div>
  );
};

export default ProfileSession;
