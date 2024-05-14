import {
  useApproveJobsMutation,
  useGetJobsQuery,
  useRefuseJobsMutation,
} from '@/+core/redux/apis/admin/job-management/job-service.api';
import { Job } from '@/+core/utilities/types/admin.type';
import ActiveJobsTab from '@/pages/admin/components/jobs-management/ActiveJobsTab';
import PendingJobsTab from '@/pages/admin/components/jobs-management/PendingJobsTab';
import RejectedJobsTab from '@/pages/admin/components/jobs-management/RejectedJobsTab';
import { Pagination, Spin, Tabs, TabsProps } from 'antd';
import { useEffect, useState } from 'react';
import '../../styles/admin/management-page.css';
import ClosedJobsTab from '@/pages/admin/components/jobs-management/ClosedJobsTab';
import { CheckOutlined, ClockCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { FilterJobsTypeREQ } from '@/+core/redux/apis/admin/job-management/job-service.request';

const JobManagementPage = () => {
  const [filter, setFilter] = useState<FilterJobsTypeREQ>({
    page: 1,
    limit: 5,
  });
  const {
    data: jobsData,
    isFetching: isFetchingJobs,
    refetch,
  } = useGetJobsQuery(filter, {
    refetchOnMountOrArgChange: true,
  });
  const [approveJobs, { isLoading: isFetchingApprove }] = useApproveJobsMutation();
  const [rejectJobs, { isLoading: isFetchingReject }] = useRefuseJobsMutation();
  const [jobList, setJobList] = useState<Job[]>([]);
  const [tabKey, setTabKey] = useState<string>('pending');

  useEffect(() => {
    if (jobsData?.data.jobs) setJobList(jobsData?.data.jobs);
    console.log('fetch');
  }, [jobsData]);

  useEffect(() => {
    console.log(filter);
    refetch();
  }, [filter]);

  const handleApprove = (jobs: Job[]) => {
    const jobIds = jobs.map((job) => job.id);

    approveJobs(jobIds);
  };

  const handleReject = (jobs: Job[]) => {
    const jobIds = jobs.map((job) => job.id);

    rejectJobs(jobIds);
  };

  const handleSearch = (keyword: string) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      keywords: keyword,
      page: 1,
    }));
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
          data={jobList}
          approveJobs={handleApprove}
          rejectJobs={handleReject}
          onSearch={handleSearch}
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
      children: <ActiveJobsTab data={jobList} onSearch={handleSearch} />,
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
      children: <RejectedJobsTab data={jobList} onSearch={handleSearch} />,
    },
    {
      key: 'closed',
      label: (
        <div className='flex items-center'>
          {/* <ContainerOutlined /> */}
          <p>Closed</p>
        </div>
      ),
      children: <ClosedJobsTab data={jobList} onSearch={handleSearch} />,
    },
  ];

  useEffect(() => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      status: tabKey,
    }));
  }, [tabKey]);

  const handleChangePage = (page: number, pageSize: number) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      page: page,
      limit: pageSize,
    }));
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
                  total={jobList.length}
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
