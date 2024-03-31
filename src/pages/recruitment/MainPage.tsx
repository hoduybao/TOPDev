import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Pagination, Spin } from 'antd';

import { useGetAllJobsByCompanyIdQuery } from '../../+core/redux/apis/common/company/company.api';

import SubHeader from '../../components/global/Recruitment/Header/SubHeader';
import ApplicationCard from '../../components/global/Recruitment/Content/ApplicationCard';

import { JobType } from '@/+core/utilities/types/recruitment.type';

const MainPage = () => {
  const ITEMS_PER_PAGE: number = 6;

  const { data: jobsRes, isLoading: isLoadingJobs } = useGetAllJobsByCompanyIdQuery('company-1'); // 155 is mock company id

  const [jobs, setJobs] = useState<JobType[]>([]);
  const [jobsPerPage, setJobsPerPage] = useState<JobType[]>([]);
  const [activePage, setActivePage] = useState<number>(1);

  const handleGetJobs = () => {
    setJobs(jobsRes?.data?.jobs);
  };

  // Pagination handle
  const handleGetJobsPerPage = (n: number) => {
    const begin = (n - 1) * ITEMS_PER_PAGE;
    const end = (n - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE;

    if (jobs?.slice) {
      const items = jobs?.slice(begin, end);
      setJobsPerPage(items);
    }
  };

  useEffect(() => {
    handleGetJobs();
  }, [jobsRes, isLoadingJobs]);

  useEffect(() => {
    handleGetJobsPerPage(activePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobs, activePage]);

  return (
    <div className='flex flex-col'>
      <SubHeader jobs={jobs} setJobs={setJobs} />
      {isLoadingJobs ? (
        <div className='flex items-center justify-center my-[80px]'>
          <Spin size='large' />
        </div>
      ) : (
        <>
          <div className='px-4 py-2.5 flex gap-5 flex-wrap'>
            {jobsPerPage?.map((job: JobType) => {
              return (
                <ApplicationCard key={uuidv4()} job={job} newestAmount={3} recentAmount={150} />
              );
            })}
          </div>
          <div className='my-5 flex items-center justify-center'>
            <Pagination
              current={activePage}
              total={jobs?.length}
              pageSize={ITEMS_PER_PAGE} // items per page
              onChange={(page: number) => {
                setActivePage(page);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MainPage;
