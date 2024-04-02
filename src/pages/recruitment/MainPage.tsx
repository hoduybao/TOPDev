import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Pagination } from 'antd';

import SubHeader from '../../components/global/Recruitment/Header/SubHeader';
import ApplicationCard from '../../components/global/Recruitment/Content/ApplicationCard';

import { JobType } from '@/+core/utilities/types/recruitment.type';

import JobMockData from '../../draft/job.json';
import { gql, useLazyQuery } from '@apollo/client';

type JobsQueryResult = {
  jobs: JobType[];
};

const GET_JOBS = gql`
  query Jobs {
    jobs {
      id
      companyId
      title
      salary
      responsibilities
      skills
      extends
      welfare
      experienceYearsMin
      experienceYearsMax
      level
      type
      typeContract
      techs
      interviewProcess
    }
  }
`;

const MainPage = () => {
  const ITEMS_PER_PAGE: number = 4;

  const [jobs, setJobs] = useState<JobType[]>([]);
  const [jobsPerPage, setJobsPerPage] = useState<JobType[]>([]);
  const [activePage, setActivePage] = useState<number>(1);

  const [fetchData, { loading, error, data }] = useLazyQuery<JobsQueryResult>(GET_JOBS);

  // Use for mock jobs data from graphql API
  useEffect(() => {
    if (data) {
      setJobs(data?.jobs);
    }
  }, [data]);

  // Pagination handle
  const handleGetJobsPerPage = (n: number) => {
    const begin = (n - 1) * ITEMS_PER_PAGE;
    const end = (n - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE;

    if (jobs?.slice) {
      const items = jobs?.slice(begin, end);
      setJobsPerPage(items);
    }
  };

  const handleClick = () => {
    fetchData();
  };

  useEffect(() => {
    handleGetJobsPerPage(activePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobs, activePage]);

  return (
    <div className='flex flex-col'>
      <SubHeader jobs={jobs} setJobs={setJobs} />
      <div>
        <Button onClick={handleClick}>Fetch data</Button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error : {error.message}</p>}
      {data && (
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
