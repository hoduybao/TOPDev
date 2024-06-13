import InformationSession from './InformationSession';
import ContentSession from './ContentSession';
import { useTranslation } from 'react-i18next';
import { CompanyDetail } from '@/+core/redux/apis/common/company/company.api';

const CompanyContact = ({ data }: { data: CompanyDetail }) => {
  const { t } = useTranslation();

  return (
    <InformationSession header={t('company.contact')}>
      <div className='p-4'>
        <ContentSession header='website'>
          <a className='text-blue-400' href={data?.website}>
            {data?.website}
          </a>
        </ContentSession>
        <ContentSession header={t('company.address')}>
          {data?.addresses && data?.addresses?.length ? (
            <div className='text-base'>
              {data?.addresses[0].addressDetail} {data?.addresses[0].city}
            </div>
          ) : (
            ''
          )}
        </ContentSession>
      </div>
    </InformationSession>
  );
};

export default CompanyContact;
