import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Pagination } from 'antd';

import SubHeader from '../../components/global/Recruitment/Header/SubHeader';
import ApplicationCard from '../../components/global/Recruitment/Content/ApplicationCard';

import { JobType } from '@/+core/utilities/types/recruitment.type';

import JobMockData from '../../draft/job.json';

const MainPage = () => {
  const JOBS_MOCK_AMOUNT: number = 23; // use for mock jobs data without API
  const ITEMS_PER_PAGE: number = 6;

  const [jobs, setJobs] = useState<JobType[]>([]);
  const [jobsPerPage, setJobsPerPage] = useState<JobType[]>([]);
  const [activePage, setActivePage] = useState<number>(1);

  // Use for mock jobs data only without API
  const handleMockJobData = (amount: number) => {
    const data = [];

    for (let i = 0; i < amount; ++i) {
      const job: JobType = {
        ...JobMockData,
        id: `job${i + 1}`,
        title: `Job title ${i + 1}`,
      };

      data.push(job);
    }

    setJobs(data);
  };

  // Pagination handle
  const handleGetJobsPerPage = (n: number) => {
    const begin = (n - 1) * ITEMS_PER_PAGE;
    const end = (n - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE;

    const items = jobs?.slice(begin, end);
    setJobsPerPage(items);
  };

  useEffect(() => {
    handleMockJobData(JOBS_MOCK_AMOUNT);
  }, []);

  useEffect(() => {
    handleGetJobsPerPage(activePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobs, activePage]);

  return (
    <div className='flex flex-col'>
      <SubHeader />
      <div className='px-4 py-2.5 flex gap-5 flex-wrap'>
        {jobsPerPage?.map((job: JobType) => {
          return <ApplicationCard key={uuidv4()} job={job} newestAmount={3} recentAmount={150} />;
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
    </div>
  );
};

export default MainPage;
