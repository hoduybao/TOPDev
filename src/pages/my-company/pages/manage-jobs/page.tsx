import { useGetJobsByCompanyIdQuery } from '@/+core/redux/apis/common/job-service/job-service.api';
import { FilterPostCompanyTypeREQ } from '@/+core/redux/apis/common/job-service/job-service.request';
import { useFilter } from '@/hooks/useFilter';
import { Spin, Table } from 'antd';
import { useEffect, useState } from 'react';
import { Columns } from './components/Columns';
import { FilterPost } from './components/FilterPost';

export const ManageJobs = () => {
  const [status, setStatus] = useState<string>('ALL');
  const { filter, handleFilterChange } = useFilter<FilterPostCompanyTypeREQ>({
    initialFilter: {
      page: 1,
      limit: 10,
    },
  });

  const { data, isFetching } = useGetJobsByCompanyIdQuery(filter);

  useEffect(() => {
    if (filter) {
      setStatus(filter.status || 'ALL');
    }
  }, [filter]);

  return (
    <div className='w-full flex justify-center mt-4'>
      <div className='w-[90%]'>
        <Spin spinning={isFetching}>
          <div className='flex flex-col gap-4'>
            <FilterPost
              setStatus={setStatus}
              status={status}
              handleFilterChange={handleFilterChange}
              filter={filter}
            />
            <Table
              className='post-company-table !w-full'
              columns={Columns()}
              dataSource={data?.data}
              bordered
            />
          </div>
        </Spin>
      </div>
    </div>
  );
};
