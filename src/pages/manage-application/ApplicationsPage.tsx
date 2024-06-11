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
  const [pagination, setPagination] = React.useState({ page: '1', limit: '5' });
  const [cvState, setCvState] = React.useState('ALL');
  const { data, isFetching } = useGetApplicationsByCompanyIdQuery({
    id: jobId,
    page: pagination.page,
    limit: pagination.limit,
    status: cvState,
  });
  const [showState, setShowState] = React.useState(true); // true for all cv, false for unseen cv

  const changePage = (page: string) => {
    setPagination({ ...pagination, page });
  };

  return (
    <div className='w-full'>
      <Spin spinning={isFetching}>
        <Filter isFetching={isFetching} setCvState={setCvState} cvState={cvState} />
        <div className='mt-8'>
          <SubFilter
            setShowState={setShowState}
            showState={showState}
            total={data?.paging?.total}
            title={data?.data.length && data?.data[0].jobDetail?.title}
          />
        </div>
        <CVList
          showState={showState}
          data={data?.data}
          total={data?.paging?.total}
          limit={pagination.limit}
          currentPage={pagination.page}
          changePage={changePage}
        />
      </Spin>
    </div>
  );
};

export default ApplicationsPage;
