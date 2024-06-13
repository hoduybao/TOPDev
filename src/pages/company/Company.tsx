import Container from '@/components/global/Container/Container';
import CompanyDescription from './components/CompanyDescription';
import CompanyOverview from './components/CompanyOverview';
import CompanyContact from './components/CompanyContact';
import { useGetCompanyByIdQuery } from '@/+core/redux/apis/common/company/company.api';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';

const CompanyPage = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const { data, isFetching } = useGetCompanyByIdQuery(companyId);

  return (
    <Container>
      <Spin spinning={isFetching}>
        <div className='grid grid-cols-12 gap-4 mt-4'>
          <div className='col-span-12 lg:col-span-8'>
            <CompanyDescription data={data} />
          </div>
          <div className='col-span-12 lg:col-span-4 '>
            <CompanyOverview data={data} />
            <CompanyContact />
          </div>
        </div>
      </Spin>
    </Container>
  );
};

export default CompanyPage;
