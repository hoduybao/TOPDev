import ActiveJobsTab from '@/pages/admin/components/jobs-management/ActiveJobsTab';
import PendingJobsTab from '@/pages/admin/components/jobs-management/PendingJobsTab';
import RejectedJobsTab from '@/pages/admin/components/jobs-management/RejectedJobsTab';
import { Input, Pagination, Spin, Tabs, TabsProps } from 'antd';
import { useEffect, useState } from 'react';
import '../../styles/admin/management-page.module.scss';
import ClosedJobsTab from '@/pages/admin/components/jobs-management/ClosedJobsTab';
import { CheckOutlined, ClockCircleOutlined, CloseOutlined } from '@ant-design/icons';
import ConfirmModal from '@/components/global/ConfirmModal';
import { FilterJobsTypeREQ } from '@/+core/redux/apis/admin/job-management/job-admin.request';
import {
  useApproveJobsMutation,
  useGetListJobsQuery,
  useRefuseJobsMutation,
} from '@/+core/redux/apis/admin/job-management/job-admin.api';
import { ListJobsRES } from '@/+core/redux/apis/admin/job-management/job-admin.response';

const JobManagementPage = () => {
  const [filter, setFilter] = useState<FilterJobsTypeREQ>({
    page: 1,
    limit: 5,
    status: 'PENDING',
  });
  // const {
  //   data: jobsData,
  //   isFetching: isFetchingJobs,
  //   refetch,
  // } = useGetJobsQuery(filter, {
  //   refetchOnMountOrArgChange: true,
  // });

  const {
    data: jobs,
    isFetching: isFetchingJobs,
    refetch,
  } = useGetListJobsQuery(filter, {
    refetchOnMountOrArgChange: true,
  });

  const [approveJobs, { isLoading: isLoadingApprove }] = useApproveJobsMutation();
  const [rejectJobs, { isLoading: isLoadingReject }] = useRefuseJobsMutation();
  const [jobList, setJobList] = useState<ListJobsRES[]>([]);
  const [tabKey, setTabKey] = useState<string>('PENDING');

  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [jobsToProcess, setJobsToProcess] = useState<ListJobsRES[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (jobs?.data) setJobList(jobs?.data);
    console.log('fetch');
  }, [jobs]);

  useEffect(() => {
    console.log('filter: ', filter);
    refetch();
  }, [filter]);

  const handleApprove = (jobs: ListJobsRES[]) => {
    setAction('approve');
    setJobsToProcess(jobs);
    setShowModal(true);
  };

  const handleReject = (jobs: ListJobsRES[]) => {
    setAction('reject');
    setJobsToProcess(jobs);
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (action === 'reject' && reason.trim() === '') {
      setError('The reason is required!');
      return;
    }

    const jobIds = jobsToProcess.map((job) => job.id);
    if (action === 'approve') {
      approveJobs({ ids: jobIds });
    } else if (action === 'reject') {
      rejectJobs({ ids: jobIds, reason: reason });
    }
    setShowModal(false);
    setReason('');
    setError('');
  };

  const handleCancel = () => {
    setShowModal(false);
    setJobsToProcess([]);
    setReason('');
    setError('');
  };

  const handleSearch = (keyword: string) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      keywords: keyword,
      page: 1,
    }));
  };

  const handleChangePage = (page: number, pageSize: number) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      page: page,
      limit: pageSize,
    }));
  };

  useEffect(() => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      status: tabKey,
      page: 1,
      keywords: '',
    }));
  }, [tabKey]);

  const items: TabsProps['items'] = [
    {
      key: 'PENDING',
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
      key: 'APPROVED',
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
      key: 'REJECTED',
      label: (
        <div className='flex items-center'>
          <CloseOutlined />
          <p>Rejected</p>
        </div>
      ),
      children: <RejectedJobsTab data={jobList} onSearch={handleSearch} />,
    },
    {
      key: 'CLOSED',
      label: (
        <div className='flex items-center'>
          {/* <ContainerOutlined /> */}
          <p>Closed</p>
        </div>
      ),
      children: <ClosedJobsTab data={jobList} onSearch={handleSearch} />,
    },
  ];

  return (
    <>
      <Spin spinning={isFetchingJobs || isLoadingApprove || isLoadingReject}>
        <div className='w-full h-screen font-roboto px-4 '>
          <div className='mt-2 mb-4 w-full flex gap-2'>
            {/* <div className='w-[250px] flex items-center justify-center border-solid border-[1.5px] border-gray-500 rounded '>
            <h1>Filter</h1>
          </div> */}

            {/* Content */}
            <div className='w-full p-2 border-solid border-[1.5px] border-transparent rounded bg-white-700'>
              <Tabs
                size='large'
                defaultActiveKey='PENDING'
                items={items}
                onChange={(key) => setTabKey(key)}
              />
              <div className='flex justify-end'>
                <Pagination
                  className='mt-5'
                  total={jobs?.total}
                  defaultCurrent={1}
                  pageSize={5}
                  onChange={handleChangePage}
                />
              </div>
              <ConfirmModal
                open={showModal}
                setOpen={setShowModal}
                handleOk={handleConfirm}
                handleCancel={handleCancel}
                isLoadingBtn={isLoadingApprove || isLoadingReject}
              >
                <h1 className='text-xl'>
                  {action === 'approve' ? 'Do you want to approve?' : 'Do you want to reject?'}
                </h1>
                {action === 'reject' && (
                  <>
                    <Input
                      className='mt-3'
                      placeholder='Input reason for refusal'
                      onChange={(e) => setReason(e.target.value)}
                      value={reason}
                    />
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                  </>
                )}
              </ConfirmModal>
            </div>
          </div>
        </div>
      </Spin>
    </>
  );
};

export default JobManagementPage;
