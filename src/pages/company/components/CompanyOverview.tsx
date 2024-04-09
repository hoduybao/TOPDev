import InformationSession from './InformationSession';
import ContentSession from './ContentSession';
import companyData from '../../../draft/company-new.json';
import { useTranslation } from 'react-i18next';

const CompanyOverview = () => {
  const { t } = useTranslation();
  return (
    <InformationSession header={t('company.contact')}>
      <div className='p-4'>
        <ContentSession header={t('company.industry')}>
          <div>{companyData.fields.join(',')}</div>
        </ContentSession>
        <ContentSession header={t('company.size')}>
          <div>{companyData.size}</div>
        </ContentSession>
        <ContentSession header={t('company.nations')}>
          <div>
            {companyData.nations.map((nation) => (
              <span className='block' key={nation}>
                {nation}
              </span>
            ))}
          </div>
        </ContentSession>
        <ContentSession header={t('company.skills')}>
          <div className='flex gap-2'>
            {companyData.skills.map((techSkill) => (
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
