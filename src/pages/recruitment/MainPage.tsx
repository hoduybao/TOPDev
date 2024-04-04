import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Pagination } from 'antd';

import SubHeader from '../../components/global/Recruitment/Header/SubHeader';
import ApplicationCard from '../../components/global/Recruitment/Content/ApplicationCard';

import { JobType } from '@/+core/utilities/types/recruitment.type';

import { gql, useLazyQuery } from '@apollo/client';

type JobsQueryResult = {
  jobs: JobType[];
};

type JobQueryResult = {
  job: JobType;
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

const GET_JOB_BY_ID = gql`
  query Job($id: ID!) {
    job(id: $id) {
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

  const [jobDetail, setJobDetail] = useState<JobType>();
  const [inputValue, setInputValue] = useState('');

  const [notFound, setNotFound] = useState<boolean>(false);

  const [fetchAllJobs, { loading: fetchAllLoading, error: fetchAllError, data: fetchAllData }] =
    useLazyQuery<JobsQueryResult>(GET_JOBS);
  const [fetchOneJob, { loading: fetchOneLoading, error: fetchOneError, data: fetchOneData }] =
    useLazyQuery<JobQueryResult>(GET_JOB_BY_ID);

  // Use for mock jobs data from graphql API
  useEffect(() => {
    if (fetchAllData) {
      setJobs(fetchAllData?.jobs);
    }
  }, [fetchAllData]);

  // Use for mock job data from graphql API
  useEffect(() => {
    setJobDetail(undefined);
    setNotFound(false);
    if (fetchOneData) {
      if (fetchOneData.job) {
        setJobDetail(fetchOneData.job);
      } else {
        setNotFound(true);
      }
    }
  }, [fetchOneData]);

  // Pagination handle
  const handleGetJobsPerPage = (n: number) => {
    const begin = (n - 1) * ITEMS_PER_PAGE;
    const end = (n - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE;

    if (jobs?.slice) {
      const items = jobs?.slice(begin, end);
      setJobsPerPage(items);
    }
  };

  const handleClickFetchAll = () => {
    fetchAllJobs();
  };

  const handleClickFetchOne = () => {
    fetchOneJob({
      variables: {
        id: inputValue, // Thay thế "YOUR_JOB_ID_HERE" bằng ID thực tế của công việc bạn muốn lấy thông tin
      },
    });
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    handleGetJobsPerPage(activePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobs, activePage]);

  return (
    <div className='flex flex-col'>
      <SubHeader jobs={jobs} setJobs={setJobs} />

      <div className='flex gap-8'>
        <div>
          <Button onClick={handleClickFetchAll}>Fetch All</Button>
        </div>

        <div>
          <input type='text' value={inputValue} onChange={handleInputChange}></input>
          <Button onClick={handleClickFetchOne}>Fetch One</Button>
        </div>
      </div>

      {fetchAllLoading && <p>Loading...</p>}
      {fetchAllError && <p>Error : {fetchAllError.message}</p>}
      <div className='px-4 py-2.5 flex gap-5 flex-wrap'>
        {jobsPerPage?.map((job: JobType) => {
          return <ApplicationCard key={uuidv4()} job={job} newestAmount={3} recentAmount={150} />;
        })}
      </div>

      {jobDetail && (
        <div>
          <h1>{jobDetail.title}</h1>
          <p>
            <strong>Company:</strong> {jobDetail.companyId}
          </p>
          <p>
            <strong>Salary:</strong> {jobDetail.salary}
          </p>
          <p>
            <strong>Responsibilities:</strong> {jobDetail.responsibilities?.join(', ')}
          </p>
          <p>
            <strong>Skills:</strong> {jobDetail.skills?.join(', ')}
          </p>
          <p>
            <strong>Extends:</strong> {jobDetail.extends?.join(', ')}
          </p>
          <p>
            <strong>Welfare:</strong> {jobDetail.welfare?.join(', ')}
          </p>
          <p>
            <strong>Min Experience Years:</strong> {jobDetail.experienceYearsMin}
          </p>
          <p>
            <strong>Max Experience Years:</strong> {jobDetail.experienceYearsMax}
          </p>
          <p>
            <strong>Level:</strong> {jobDetail.level}
          </p>
          <p>
            <strong>Type:</strong> {jobDetail.type}
          </p>
          <p>
            <strong>Type Contract:</strong> {jobDetail.typeContract}
          </p>
          <p>
            <strong>Techs:</strong> {jobDetail.techs?.join(', ')}
          </p>
          <p>
            <strong>Interview Process:</strong> {jobDetail.interviewProcess?.join(', ')}
          </p>
          <p>
            <strong>Description:</strong> {jobDetail.description}
          </p>
        </div>
      )}

      {fetchOneLoading && <p>Loading...</p>}
      {fetchOneError && <p>Error : {fetchOneError.message}</p>}
      {notFound && <p>404: Not Found</p>}

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
