import InformationSession from './InformationSession';
import ContentSession from './ContentSession';
import companyData from '../../../draft/company-new.json';
import { useTranslation } from 'react-i18next';

const CompanyContact = () => {
  const { t } = useTranslation();

  return (
    <InformationSession header={t('company.contact')}>
      <div className='p-4'>
        <ContentSession header='website'>
          <a className='text-blue-400' href={companyData.websiteUrl}>
            {companyData.websiteUrl}
          </a>
        </ContentSession>
        <ContentSession header={t('company.address')}>
          <div className='text-base'>{companyData.address}</div>
        </ContentSession>
      </div>
    </InformationSession>
  );
};

export default CompanyContact;
