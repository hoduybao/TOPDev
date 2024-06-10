import { JobType } from '@/+core/utilities/types/recruitment.type';
import { Pagination, Spin } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import FollowJobCard from './components/FollowJobCard';
import {
  Paging,
  useGetJobsQuery,
  useUnfollowJobMutation,
} from '@/+core/redux/apis/common/job/job.api';

const ManageFollowPage = () => {
  const [filter, setFilter] = useState<Paging>({
    page: 1,
    limit: 6,
  });
  const { data: jobsData, isFetching } = useGetJobsQuery(filter);
  const [unfollowJob, { isLoading }] = useUnfollowJobMutation();

  const { t } = useTranslation();

  const handleUnfollowJob = async (jobId: string) => {
    console.log('Unfollow job', jobId);
    unfollowJob(jobId)
      .unwrap()
      .then((rs) => {
        console.log(rs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Spin spinning={isFetching}>
      <div className='w-full flex flex-col items-center mb-8'>
        <div className='w-full'>
          <div className='flex flex-col gap-8'>
            <h3 className='text-xl font-bold text-primary-red'>{t('followJob')}</h3>
            <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-5'>
              {jobsData?.data?.data.map((job: any) => {
                return (
                  <FollowJobCard
                    key={job?.id}
                    job={job}
                    isLoading={isLoading}
                    handleUnfollowJob={handleUnfollowJob}
                  />
                );
              })}
            </div>
            <Pagination
              className='self-end'
              current={filter.page}
              total={jobsData?.data?.paging?.total}
              pageSize={filter.limit}
              onChange={(page: number) => {
                setFilter({ ...filter, page });
              }}
            />
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default ManageFollowPage;
