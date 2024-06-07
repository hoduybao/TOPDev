import { hRAccountStatus as AccountStatus } from '@/+core/enums/hRAccountStatus.enum';
import { HRAccount } from '@/+core/utilities/types/admin.type';
import ApprovedAccountTable from '@/pages/admin/components/accounts-management/ApprovedAccountTable';
import BannedAccountTable from '@/pages/admin/components/accounts-management/BannedAccountTable';
import PendingAccountTable from '@/pages/admin/components/accounts-management/PendingAccountTable';
import RejectedAccountTable from '@/pages/admin/components/accounts-management/RejectedAccountTable';
import { CheckOutlined, ClockCircleOutlined, CloseOutlined, StopOutlined } from '@ant-design/icons';
import { Input, Pagination, Spin, Tabs, TabsProps } from 'antd';
import { useEffect, useState } from 'react';
import { mockHRAccountData } from './mockdata';
import '../../styles/admin/management-page.module.scss';
import {
  useApproveEmployersMutation,
  useGetListEmployersQuery,
  useRefuseEmployersMutation,
} from '@/+core/redux/apis/admin/employer-management/employer-admin.api';
import { ListEmployersRES } from '@/+core/redux/apis/admin/employer-management/employer-admin.response';
import { FilterEmployersTypeREQ } from '@/+core/redux/apis/admin/employer-management/employer-admin.request';
import ConfirmModal from '@/components/global/ConfirmModal';

const AccountManagementPage = () => {
  const [filter, setFilter] = useState<FilterEmployersTypeREQ>({
    page: 1,
    limit: 5,
    status: 'PENDING',
  });

  const {
    data: employers,
    isFetching: isFetchingEmployers,
    refetch,
  } = useGetListEmployersQuery(filter, {
    refetchOnMountOrArgChange: true,
  });

  const [approveEmployers, { isLoading: isLoadingApprove }] = useApproveEmployersMutation();
  const [rejectEmployers, { isLoading: isLoadingReject }] = useRefuseEmployersMutation();
  const [employerList, setEmployerList] = useState<ListEmployersRES[]>([]);
  const [tabKey, setTabKey] = useState<string>('PENDING');

  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [employersToProcess, setEmployersToProcess] = useState<ListEmployersRES[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (employers?.data) setEmployerList(employers?.data);
    console.log('fetch');
  }, [employers]);

  useEffect(() => {
    console.log(filter);
    refetch();
  }, [filter]);

  const handleApprove = (employers: ListEmployersRES[]) => {
    setAction('approve');
    setEmployersToProcess(employers);
    setShowModal(true);
  };

  const handleReject = (employers: ListEmployersRES[]) => {
    setAction('reject');
    setEmployersToProcess(employers);
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (action === 'reject' && reason.trim() === '') {
      setError('The reason is required!');
      return;
    }

    const jobIds = employersToProcess.map((employer) => employer.id);
    if (action === 'approve') {
      approveEmployers({ ids: jobIds });
    } else if (action === 'reject') {
      rejectEmployers({ ids: jobIds, reason: reason });
    }
    setShowModal(false);
    setReason('');
    setError('');
  };

  const handleCancel = () => {
    setShowModal(false);
    setEmployersToProcess([]);
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
    }));
  }, [tabKey]);

  // const handleReview = (accounts: HRAccount[]) => {
  //   const updatedData = [...allAccounts];
  //   accounts.forEach((account) => {
  //     const index = updatedData.findIndex((item) => item.id === account.id);
  //     if (index !== -1) {
  //       updatedData[index].status = AccountStatus.Pending;
  //     }
  //   });

  //   setAllAccounts(updatedData);
  // };

  // const handleBan = (accounts: HRAccount[]) => {
  //   const updatedData = [...allAccounts];
  //   accounts.forEach((account) => {
  //     const index = updatedData.findIndex((item) => item.id === account.id);
  //     if (index !== -1) {
  //       updatedData[index].status = AccountStatus.Banned;
  //     }
  //   });

  //   setAllAccounts(updatedData);
  // };

  // const handleUnban = (accounts: HRAccount[]) => {
  //   const updatedData = [...allAccounts];
  //   accounts.forEach((account) => {
  //     const index = updatedData.findIndex((item) => item.id === account.id);
  //     if (index !== -1) {
  //       updatedData[index].status = AccountStatus.Approved;
  //     }
  //   });

  //   setAllAccounts(updatedData);
  // };

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
        <PendingAccountTable
          data={employerList}
          approveEmployers={handleApprove}
          rejectEmployers={handleReject}
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
      children: <ApprovedAccountTable data={employerList} onSearch={handleSearch} />,
    },

    {
      key: 'REJECTED',
      label: (
        <div className='flex items-center'>
          <CloseOutlined />
          <p>Rejected</p>
        </div>
      ),
      children: <RejectedAccountTable data={employerList} onSearch={handleSearch} />,
    },

    // {
    //   key: 'BANNED',
    //   label: (
    //     <div className='flex items-center'>
    //       <StopOutlined />
    //       <p>Banned</p>
    //     </div>
    //   ),
    //   children: <BannedAccountTable data={displayedData} unbanAccounts={handleUnban} />,
    // },
  ];

  return (
    <>
      <Spin spinning={isFetchingEmployers || isLoadingApprove || isLoadingReject}>
        <div className='w-full h-screen font-roboto px-4 '>
          <div className='mt-2 mb-4 w-full flex gap-2'>
            <div className='w-full p-2 border-solid border-[1.5px] border-transparent rounded bg-white-700'>
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
                  total={employerList.length}
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
                {action === 'approve' ? 'Do you want to approve?' : 'Do you want to reject?'}
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

export default AccountManagementPage;
