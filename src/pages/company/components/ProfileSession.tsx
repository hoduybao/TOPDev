import ContentSession from './ContentSession';
import { useTranslation } from 'react-i18next';
import { CompanyDetail } from '@/+core/redux/apis/common/company/company.api';

const ProfileSession = ({ data }: { data: CompanyDetail }) => {
  const { t } = useTranslation();
  return (
    <div className='p-4'>
      {/* <ContentSession header={t('company.aboutus')} content={companyData.about} /> */}
      {data?.introduction && (
        <ContentSession header={t('company.introduction')} content={data?.introduction} />
      )}
      {data?.benefits && (
        <ContentSession header={t('company.benefit')} content={data?.benefits?.join(' ')} />
      )}

      <div className='flex gap-2 mb-2'>
        {data?.galleries?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt='company logo'
            className='w-[33.33%] rounded aspect-square h-full object-cover'
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileSession;
