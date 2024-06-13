import { useGetApplicationsByCompanyIdQuery } from '@/+core/redux/apis/common/application/application.api';
import { Spin } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import CVList from './components/CVList';
import Filter from './components/Filter';
import SubFilter from './components/SubFilter';

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

  const changePage = (page: string) => {
    setPagination({ ...pagination, page });
  };

  return (
    <div className='w-full flex justify-center mt-4'>
      <div className='w-[90%]'>
        <Spin spinning={isFetching}>
          <Filter isFetching={isFetching} setCvState={setCvState} cvState={cvState} />
          <div className='mt-8'>
            <SubFilter
              total={data?.paging?.total}
              title={data?.data.length && data?.data[0].jobDetail?.title}
            />
          </div>
          <CVList
            showState={true}
            data={data?.data}
            total={data?.paging?.total}
            limit={pagination.limit}
            currentPage={pagination.page}
            changePage={changePage}
          />
        </Spin>
      </div>
    </div>
  );
};

export default ApplicationsPage;
