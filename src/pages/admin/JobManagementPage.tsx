import { Job } from '@/+core/utilities/types/admin.type';
import PendingJobsTab from '@/components/global/Admin/JobManagement/PendingJobsTab';
import { Divider, Tabs, TabsProps } from 'antd';
import { useEffect, useState } from 'react';
import { jobStatus } from '@/+core/enums/jobStatus.enum';
import moment from 'moment';
import ActiveJobsTab from '@/components/global/Admin/JobManagement/ActiveJobsTab';
import RejectedJobsTab from '@/components/global/Admin/JobManagement/RejectedJobsTab';
import {
  useApproveJobsMutation,
  useGetJobsQuery,
  useRefuseJobsMutation,
} from '@/+core/redux/apis/admin/job-management/job-service.request';

const JobManagementPage = () => {
  const { data, isLoading, isFetching, isError } = useGetJobsQuery({});
  const [approveJobs, approveResult] = useApproveJobsMutation();
  const [rejectJobs, rejectResult] = useRefuseJobsMutation();
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [tabKey, setTabKey] = useState<string>('pending');
  const [displayedData, setDisplayedData] = useState<Job[]>(
    allJobs.filter((data) => data.status == jobStatus.Pending),
  );

  useEffect(() => {
    if (data?.data.jobs) setAllJobs(data?.data.jobs);
  }, [data]);

  const today = moment();

  const handleApprove = (jobs: Job[]) => {
    const jobIds = jobs.map((job) => job.id);

    approveJobs(jobIds);
  };

  const handleReject = (jobs: Job[]) => {
    const jobIds = jobs.map((job) => job.id);

    rejectJobs(jobIds);
  };

  const items: TabsProps['items'] = [
    {
      key: 'pending',
      label: (
        <div className='flex items-center'>
          {/* <ClockCircleOutlined /> */}
          <p>Pending</p>
        </div>
      ),
      children: (
        <PendingJobsTab
          data={displayedData}
          approveJobs={handleApprove}
          rejectJobs={handleReject}
        />
      ),
    },
    {
      key: 'active',
      label: (
        <div className='flex items-center'>
          {/* <EyeOutlined /> */}
          <p>Approved</p>
        </div>
      ),
      children: <ActiveJobsTab data={displayedData} />,
    },
    // {
    //   key: 'coming',
    //   label: (
    //     <div className='flex items-center'>
    //       {/* <FireOutlined /> */}
    //       <p>Coming Up</p>
    //     </div>
    //   ),
    //   children: <ComingJobsTab data={displayedData} />,
    // },
    // {
    //   key: 'expired',
    //   label: (
    //     <div className='flex items-center'>
    //       {/* <ContainerOutlined /> */}
    //       <p>Expired</p>
    //     </div>
    //   ),
    //   children: <ExpiredJobsTab data={displayedData} />,
    // },
    {
      key: 'rejected',
      label: (
        <div className='flex items-center'>
          {/* <CloseOutlined /> */}
          <p>Rejected</p>
        </div>
      ),
      children: <RejectedJobsTab data={displayedData} />,
    },
  ];

  useEffect(() => {
    if (tabKey === 'pending') {
      setDisplayedData(allJobs.filter((data) => data.status == jobStatus.Pending));
    } else if (tabKey === 'active') {
      setDisplayedData(
        allJobs.filter(
          (data) => data.status == jobStatus.Approved,
          // && today.isBetween(data.startDate, data.endDate, 'day', '[]'),
        ),
      );
    } else if (tabKey === 'expired') {
      setDisplayedData(
        allJobs.filter(
          (data) => data.status == jobStatus.Approved,
          // && moment(data.endDate).isBefore(today, 'day'),
        ),
      );
    } else if (tabKey === 'coming') {
      setDisplayedData(
        allJobs.filter(
          (data) => data.status == jobStatus.Approved,
          // && today.isBefore(moment(data.startDate), 'day'),
        ),
      );
    } else if (tabKey === 'rejected') {
      setDisplayedData(allJobs.filter((data) => data.status == jobStatus.Rejected));
    } else {
      setDisplayedData(allJobs);
    }
  }, [allJobs, tabKey]);

  return (
    <>
      <div className='w-full font-roboto px-4 bg-white-700'>
        <div className='py-2'>
          <span className='font-bold text-xl text-black-400'>Job Manager</span>
        </div>

        <Divider
          className='font-bold bg-orange-500 my-2'
          style={{ borderBlockStart: '3px solid rgba(5, 5, 5, 0.06)' }}
        />
        <div className='mt-2 mb-4 w-full flex gap-2'>
          {/* <div className='w-[250px] flex items-center justify-center border-solid border-[1.5px] border-gray-500 rounded '>
            <h1>Filter</h1>
          </div> */}
          {/* Content */}
          <div className='w-full p-2 border-solid border-[1.5px] border-gray-500 rounded'>
            <Tabs
              size='large'
              defaultActiveKey='1'
              items={items}
              onChange={(key) => setTabKey(key)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobManagementPage;
