import ApprovedAccountTable from '@/pages/admin/components/accounts-management/ApprovedAccountTable';
import PendingAccountTable from '@/pages/admin/components/accounts-management/PendingAccountTable';
import RejectedAccountTable from '@/pages/admin/components/accounts-management/RejectedAccountTable';
import { CheckOutlined, ClockCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { Input, Modal, Pagination, Spin, Tabs, TabsProps } from 'antd';
import { useEffect, useState } from 'react';
import '../../styles/admin/management-page.module.scss';
import {
  useApproveCompaniesMutation,
  useGetListCompanyQuery,
  useRefuseCompaniesMutation,
} from '@/+core/redux/apis/admin/employer-management/employer-admin.api';
import { ListCompanyRES } from '@/+core/redux/apis/admin/employer-management/employer-admin.response';
import { FilterCompanyTypeREQ } from '@/+core/redux/apis/admin/employer-management/employer-admin.request';
import ConfirmModal from '@/components/global/ConfirmModal';
import { STATUS_MAPPING } from './components/accounts-management/StatusMapping';
import CompanyInfo from './components/accounts-management/CompanyInfo';

const AccountManagementPage = () => {
  const [filter, setFilter] = useState<FilterCompanyTypeREQ>({
    page: 1,
    limit: 5,
    status: 0,
  });

  const {
    data: companies,
    isFetching: isFetchingCompanies,
    refetch,
  } = useGetListCompanyQuery(filter, {
    refetchOnMountOrArgChange: true,
  });

  const [approveCompanies, { isLoading: isLoadingApprove }] = useApproveCompaniesMutation();
  const [rejectCompanies, { isLoading: isLoadingReject }] = useRefuseCompaniesMutation();
  const [companyList, setCompanyList] = useState<ListCompanyRES[]>([]);
  const [tabKey, setTabKey] = useState<string>('PENDING');

  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [employersToProcess, setEmployersToProcess] = useState<ListCompanyRES[]>([]);
  const [error, setError] = useState('');

  const [isCompanyDetailOpen, setIsCompanyDetailOpen] = useState<boolean>(false);
  const [viewedCompany, setViewedCompany] = useState<ListCompanyRES>();

  useEffect(() => {
    if (companies?.data) setCompanyList(companies?.data);
    console.log(companies?.data);
  }, [companies]);

  useEffect(() => {
    console.log(filter);
    refetch();
  }, [filter]);

  const handleApprove = (employers: ListCompanyRES[]) => {
    setAction('approve');
    setEmployersToProcess(employers);
    setShowModal(true);
  };

  const handleReject = (employers: ListCompanyRES[]) => {
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
      approveCompanies({ ids: jobIds });
    } else if (action === 'reject') {
      rejectCompanies({ ids: jobIds, reason: reason });
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
    let status: number;

    if (tabKey === STATUS_MAPPING.PENDING.string) {
      status = STATUS_MAPPING.PENDING.number;
    } else if (STATUS_MAPPING.REJECTED.string) {
      status = STATUS_MAPPING.REJECTED.number;
    } else if (tabKey === STATUS_MAPPING.APPROVED.string) {
      status = STATUS_MAPPING.APPROVED.number;
    }

    setFilter((prevFilter) => ({
      ...prevFilter,
      status: status,
      keywords: '',
      page: 1,
    }));
  }, [tabKey]);

  const handleCancelDetailModal = () => {
    setIsCompanyDetailOpen(false);
    setViewedCompany(undefined);
  };

  const handleApproveFromDetail = () => {
    console.log('approve');
    handleCancelDetailModal();
    if (viewedCompany) {
      handleApprove([viewedCompany]);
    }
  };

  const handleRejectFromDetail = () => {
    console.log('reject');
    handleCancelDetailModal();
    if (viewedCompany) {
      handleReject([viewedCompany]);
    }
  };

  const handleViewCompanyDetail = (company: ListCompanyRES) => {
    setViewedCompany(company);
    setIsCompanyDetailOpen(true);
  };

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
      key: STATUS_MAPPING.PENDING.string,
      label: (
        <div className='flex items-center'>
          <ClockCircleOutlined />
          <p>Pending</p>
        </div>
      ),
      children: (
        <PendingAccountTable
          data={companyList}
          approveEmployers={handleApprove}
          rejectEmployers={handleReject}
          onSearch={handleSearch}
          viewEmployer={handleViewCompanyDetail}
        />
      ),
    },
    {
      key: STATUS_MAPPING.APPROVED.string,
      label: (
        <div className='flex items-center'>
          <CheckOutlined />
          <p>Approved</p>
        </div>
      ),
      children: (
        <ApprovedAccountTable
          data={companyList}
          onSearch={handleSearch}
          viewCompany={handleViewCompanyDetail}
        />
      ),
    },

    {
      key: STATUS_MAPPING.REJECTED.string,
      label: (
        <div className='flex items-center'>
          <CloseOutlined />
          <p>Rejected</p>
        </div>
      ),
      children: (
        <RejectedAccountTable
          data={companyList}
          onSearch={handleSearch}
          viewCompany={handleViewCompanyDetail}
        />
      ),
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
      <Spin spinning={isFetchingCompanies || isLoadingApprove || isLoadingReject}>
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
                  total={companies?.total}
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

              <Modal
                title='Employer Details'
                open={isCompanyDetailOpen}
                onCancel={handleCancelDetailModal}
                width={1200}
                centered
                bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}
                footer={null}
              >
                <div className='bg-[#E8EDF2]'>
                  {/* <Spin spinning={isFetchingEmployerDetail}>Employer Details</Spin> */}
                  {viewedCompany && (
                    <CompanyInfo
                      companyInfo={viewedCompany}
                      approveCompany={handleApproveFromDetail}
                      rejectCompany={handleRejectFromDetail}
                    />
                  )}
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </Spin>
    </>
  );
};

export default AccountManagementPage;
