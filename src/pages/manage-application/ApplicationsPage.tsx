import Container from '@/components/global/Container/Container';
import Filter from './components/Filter';
import SubFilter from './components/SubFilter';
import CVList from './components/CVList';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetApplicationsByCompanyIdQuery } from '@/+core/redux/apis/common/application/application.api';
import React from 'react';

const ApplicationsPage = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [pagination, setPagination] = React.useState({ page: '1', limit: '2' });
  const { data, isFetching } = useGetApplicationsByCompanyIdQuery({
    id: jobId,
    page: pagination.page,
    limit: pagination.limit,
  });
  const [showState, setShowState] = React.useState(true); // true for all cv, false for unseen cv

  const changePage = (page: string) => {
    setPagination({ ...pagination, page });
  };

  return (
    <Spin spinning={isFetching}>
      <div>
        <Filter />
        <div className='mt-8'>
          <SubFilter
            setShowState={setShowState}
            showState={showState}
            total={data?.paging?.total}
          />
        </div>
      </div>
      <Container>
        <CVList
          showState={showState}
          data={data?.data}
          total={data?.paging?.total}
          limit={pagination.limit}
          currentPage={pagination.page}
          changePage={changePage}
        />
      </Container>
      ;
    </Spin>
  );
};

export default ApplicationsPage;
