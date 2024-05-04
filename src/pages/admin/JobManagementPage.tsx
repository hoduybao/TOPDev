import { jobStatus } from '@/+core/enums/jobStatus.enum';
import {
  useApproveJobsMutation,
  useGetJobsQuery,
  useRefuseJobsMutation,
} from '@/+core/redux/apis/admin/job-management/job-service.api';
import { Job } from '@/+core/utilities/types/admin.type';
import ActiveJobsTab from '@/components/global/Admin/JobManagement/ActiveJobsTab';
import PendingJobsTab from '@/components/global/Admin/JobManagement/PendingJobsTab';
import RejectedJobsTab from '@/components/global/Admin/JobManagement/RejectedJobsTab';
import { Pagination, Spin, Tabs, TabsProps } from 'antd';
import { useEffect, useState } from 'react';
import '../../styles/admin/ManagementPage.css';
import ClosedJobsTab from '@/components/global/Admin/JobManagement/ClosedJobsTab';
import { CheckOutlined, ClockCircleOutlined, CloseOutlined } from '@ant-design/icons';

const JobManagementPage = () => {
  const { data: jobsData, isFetching: isFetchingJobs } = useGetJobsQuery({});
  const [approveJobs, { isLoading: isFetchingApprove }] = useApproveJobsMutation();
  const [rejectJobs, { isLoading: isFetchingReject }] = useRefuseJobsMutation();
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [tabKey, setTabKey] = useState<string>('pending');
  const [displayedData, setDisplayedData] = useState<Job[]>(
    allJobs.filter((data) => data.status == jobStatus.Pending),
  );

  useEffect(() => {
    console.log('refetch');
    if (jobsData?.data.jobs) setAllJobs(jobsData?.data.jobs);
  }, [jobsData]);

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
          <ClockCircleOutlined />
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
          <CheckOutlined />
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
    {
      key: 'rejected',
      label: (
        <div className='flex items-center'>
          <CloseOutlined />
          <p>Rejected</p>
        </div>
      ),
      children: <RejectedJobsTab data={displayedData} />,
    },
    {
      key: 'closed',
      label: (
        <div className='flex items-center'>
          {/* <ContainerOutlined /> */}
          <p>Closed</p>
        </div>
      ),
      children: <ClosedJobsTab data={displayedData} />,
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

  const handleChangePage = (page: number, pageSize: number) => {
    console.log(page, ' ', pageSize);
  };

  return (
    <>
      <Spin spinning={isFetchingJobs || isFetchingApprove || isFetchingReject}>
        <div className='w-full h-screen font-roboto px-4 bg-white-700'>
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
              <div className='flex justify-end'>
                <Pagination
                  className='mt-5'
                  defaultCurrent={1}
                  total={allJobs.length}
                  pageSize={5}
                  onChange={handleChangePage}
                />
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </>
  );
};

export default JobManagementPage;
