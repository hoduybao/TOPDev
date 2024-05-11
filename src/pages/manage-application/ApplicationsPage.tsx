import Container from '@/components/global/Container/Container';
import Filter from './components/Filter';
import SubFilter from './components/SubFilter';
import CVList from './components/CVList';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetApplicationsByCompanyIdQuery } from '@/+core/redux/apis/common/application/application.api';

const ApplicationsPage = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const { data, isLoading } = useGetApplicationsByCompanyIdQuery(jobId);

  return (
    <Spin spinning={isLoading}>
      <div>
        <Filter />
        <div className='mt-8'>
          <SubFilter total={data?.data?.data?.length} />
        </div>
      </div>
      <Container>
        <CVList data={data?.data?.data} />
      </Container>
      ;
    </Spin>
  );
};

export default ApplicationsPage;
