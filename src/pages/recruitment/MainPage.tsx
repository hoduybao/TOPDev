import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Pagination, Spin } from 'antd';
import { useGetJobsByCompanyIdQuery } from '@/+core/redux/apis/common/recruitment/recruitment.api';

import SubHeader from '../../components/global/Recruitment/Header/SubHeader';
import ApplicationCard from '../../components/global/Recruitment/Content/ApplicationCard';

import { JobType } from '@/+core/utilities/types/recruitment.type';

// import JobMockData from '../../draft/job.json';

const MainPage = () => {
  // const JOBS_MOCK_AMOUNT: number = 23; // use for mock jobs data without API
  const ITEMS_PER_PAGE: number = 6;
  const COMPANY_ID: string = 'dLuxLT43mvYY';

  const { data, isLoading } = useGetJobsByCompanyIdQuery(COMPANY_ID);

  const [jobs, setJobs] = useState<JobType[]>([]);
  const [jobsPerPage, setJobsPerPage] = useState<JobType[]>([]);
  const [activePage, setActivePage] = useState<number>(1);

  // Use for mock jobs data only without API
  // const handleMockJobData = (amount: number) => {
  //   const data = [];

  //   for (let i = 0; i < amount; ++i) {
  //     const job: JobType = {
  //       ...JobMockData,
  //       id: `job${i + 1}`,
  //       title: `Job title ${i + 1}`,
  //     };

  //     data.push(job);
  //   }

  //   setJobs(data);
  // };

  // Pagination handle
  const handleGetJobsPerPage = (n: number) => {
    const begin = (n - 1) * ITEMS_PER_PAGE;
    const end = (n - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE;

    if (jobs?.slice) {
      const items = jobs?.slice(begin, end);
      setJobsPerPage(items);
    }
  };

  // useEffect(() => {
  //   handleMockJobData(JOBS_MOCK_AMOUNT);
  // }, []);

  useEffect(() => {
    handleGetJobsPerPage(activePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobs, activePage]);

  useEffect(() => {
    if (!isLoading && data?.statusCode === 200) {
      const jobsData: JobType[] = data?.data;
      console.log('GET JOBS BY COMPANY ID SUCCESSFULLY');
      console.table(jobsData);
      setJobs(jobsData);
    }
  }, [isLoading]);

  return (
    <div className='flex flex-col'>
      <SubHeader jobs={jobs} setJobs={setJobs} />
      {isLoading ? (
        <div className='flex justify-center mt-20'>
          <Spin size='large' />
        </div>
      ) : (
        <>
          <div className='mx-auto w-[90%] md:w-[95%] 2xl:w-[80%] py-2.5 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-3'>
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
