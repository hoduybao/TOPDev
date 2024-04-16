import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Empty, Pagination } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { JobType } from '@/+core/utilities/types/recruitment.type';

import FollowJobCard from './components/FollowJobCard';
import SeenJobCard from './components/SeenJobCard';

const ManageFollowPage = () => {
  const JOBS_MOCK_AMOUNT: number = 17; // use for mock jobs data without API
  const SEEN_JOBS_MOCK_AMOUNT: number = 23; // use for mock jobs data without API

  const ITEMS_PER_PAGE: number = 6;

  const { t } = useTranslation();

  const [followJobs, setFollowJobs] = useState<JobType[]>([]);
  const [followJobsPerPage, setFollowJobsPerPage] = useState<JobType[]>([]);
  const [activeFollowPage, setActiveFollowPage] = useState<number>(1);

  const [seenJobs, setSeenJobs] = useState<JobType[]>([]);
  const [seenJobsPerPage, setSeenJobsPerPage] = useState<JobType[]>([]);
  const [activeSeenPage, setActiveSeenPage] = useState<number>(1);

  // Use for mock jobs data only without API
  const handleMockFollowJobData = (amount: number) => {
    const data = [];

    for (let i = 0; i < amount; ++i) {
      const job: JobType = {
        id: uuidv4(),
        title: `Lập trình viên FullStack upto 10000$ ${i + 1}`,
        location: 'Thành phố Hồ Chí Minh',
        companyLogo:
          'https://salt.topdev.vn/t3ej4-XWOO58pSN9pI8rkQPCIrNT4ZDO47McGJbkvH4/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDI0LzA0LzAzL1RvcERldi13QUh2cElIdFRBa1VaZ0VELTE3MTIxMTIwNzEuanBn',
        salary: 'From 1.400 USD',
      };

      data.push(job);
    }

    setFollowJobs(data);
  };

  const handleMockSeenJobData = (amount: number) => {
    const data = [];

    for (let i = 0; i < amount; ++i) {
      const job: JobType = {
        id: uuidv4(),
        title: `Nhân viên IT HelpDesk Fulltime Remote ${i + 1}`,
        location: 'Thành phố Hà Nội',
        companyLogo:
          'https://salt.topdev.vn/MUayHB5YkT7w9AtbW_K8tQg12GqIxdcvFVhTxv8VnCg/fit/256/1000/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDI0LzAzLzA2L1RvcERldi04b3NmZnRtR3Awa2oxNFd5LTE3MDk2OTQ1NjAucG5n',
        salary: 'Negotiable',
      };

      data.push(job);
    }

    setSeenJobs(data);
  };

  // Pagination handle
  const handleGetFollowJobsPerPage = (n: number) => {
    const begin = (n - 1) * ITEMS_PER_PAGE;
    const end = (n - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE;

    if (followJobs?.slice) {
      const items = followJobs?.slice(begin, end);
      setFollowJobsPerPage(items);
    }
  };

  const handleGetSeenJobsPerPage = (n: number) => {
    const begin = (n - 1) * ITEMS_PER_PAGE;
    const end = (n - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE;

    if (seenJobs?.slice) {
      const items = seenJobs?.slice(begin, end);
      setSeenJobsPerPage(items);
    }
  };

  const handleUnfollowJob = (job: JobType) => {
    console.log('Unfollow job', job);
    const newFollowJobs = followJobs.filter((j) => {
      return j.id !== job.id;
    });

    setFollowJobs(newFollowJobs);
  };

  const handleApplyJob = (job: JobType) => {
    console.log('Apply job', job);
    window.open(`jobs/companyId/${job?.id}`, '_blank', 'noreferrer');
  };

  const handleSaveJob = (job: JobType) => {
    console.log('Save job', job);
    setFollowJobs([...followJobs, job]);
  };

  const checkSaveJob = (job: JobType) => {
    for (let i = 0; i < followJobs?.length; ++i) {
      if (followJobs[i]?.id === job?.id) return true;
    }

    return false;
  };

  useEffect(() => {
    handleMockFollowJobData(JOBS_MOCK_AMOUNT);
    handleMockSeenJobData(SEEN_JOBS_MOCK_AMOUNT);
  }, []);

  useEffect(() => {
    handleGetFollowJobsPerPage(activeFollowPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followJobs, activeFollowPage]);

  useEffect(() => {
    handleGetSeenJobsPerPage(activeSeenPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seenJobs, activeSeenPage]);

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-4/5 py-5'>
        <div className='flex flex-col gap-8'>
          <h3 className='text-xl font-bold text-primary-red'>{t('followJob')}</h3>
          {followJobsPerPage?.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
          <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-5'>
            {followJobsPerPage?.length !== 0 &&
              followJobsPerPage?.map((job) => {
                return (
                  <FollowJobCard
                    key={job?.id}
                    job={job}
                    handleUnfollowJob={handleUnfollowJob}
                    handleApplyJob={handleApplyJob}
                  />
                );
              })}
          </div>
          <Pagination
            className='self-end'
            current={activeFollowPage}
            total={followJobs?.length}
            pageSize={ITEMS_PER_PAGE} // items per page
            onChange={(page: number) => {
              setActiveFollowPage(page);
            }}
          />
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='text-xl font-bold text-primary-red'>{t('seenJob')}</h3>
          {seenJobsPerPage?.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
          <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-5'>
            {seenJobsPerPage?.length !== 0 &&
              seenJobsPerPage?.map((job) => {
                return (
                  <SeenJobCard
                    key={job?.id}
                    job={job}
                    handleApplyJob={handleApplyJob}
                    checkSaveJob={checkSaveJob}
                    handleSaveJob={handleSaveJob}
                  />
                );
              })}
          </div>
          <Pagination
            className='self-end'
            current={activeSeenPage}
            total={seenJobs?.length}
            pageSize={ITEMS_PER_PAGE} // items per page
            onChange={(page: number) => {
              setActiveSeenPage(page);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageFollowPage;
