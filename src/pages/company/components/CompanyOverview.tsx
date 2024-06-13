import InformationSession from './InformationSession';
import ContentSession from './ContentSession';
import { useTranslation } from 'react-i18next';
import { CompanyDetail } from '@/+core/redux/apis/common/company/company.api';

const CompanyOverview = ({ data }: { data: CompanyDetail }) => {
  const { t } = useTranslation();
  return (
    <InformationSession header={t('company.contact')}>
      <div className='p-4'>
        <ContentSession header={t('company.industry')}>
          <div>{data?.industry?.join(',')}</div>
        </ContentSession>
        <ContentSession header={t('company.size')}>
          <div>{data?.companySize}</div>
        </ContentSession>
        <ContentSession header={t('company.nations')}>
          <div>
            {data?.nationality?.map((nation: string) => (
              <span className='block' key={nation}>
                {nation}
              </span>
            ))}
          </div>
        </ContentSession>
        <ContentSession header={t('company.skills')}>
          <div className='flex gap-2'>
            {data?.techStack?.map((techSkill) => (
              <span className='bg-blue-100 text-blue-400 px-2 py-1 rounded' key={techSkill}>
                {techSkill}
              </span>
            ))}
          </div>
        </ContentSession>
      </div>
    </InformationSession>
  );
};

export default CompanyOverview;
