import { hRAccountStatus as AccountStatus } from '@/+core/enums/hRAccountStatus.enum';
import { HRAccount } from '@/+core/utilities/types/admin.type';
import ApprovedAccountTable from '@/pages/admin/components/accounts-management/ApprovedAccountTable';
import BannedAccountTable from '@/pages/admin/components/accounts-management/BannedAccountTable';
import PendingAccountTable from '@/pages/admin/components/accounts-management/PendingAccountTable';
import RejectedAccountTable from '@/pages/admin/components/accounts-management/RejectedAccountTable';
import { CheckOutlined, ClockCircleOutlined, CloseOutlined, StopOutlined } from '@ant-design/icons';
import { Pagination, Tabs, TabsProps } from 'antd';
import { useEffect, useState } from 'react';
import { mockHRAccountData } from './mockdata';
import '../../styles/admin/management-page.module.scss';

const AccountManagementPage = () => {
  const [allAccounts, setAllAccounts] = useState<HRAccount[]>(mockHRAccountData);
  const [displayedData, setDisplayedData] = useState<HRAccount[]>(
    allAccounts.filter((data) => data.status == AccountStatus.Pending),
  );
  const [tabKey, setTabKey] = useState<string>('1');

  const handleApprove = (accounts: HRAccount[]) => {
    const updatedData = [...allAccounts];
    accounts.forEach((account) => {
      const index = updatedData.findIndex((item) => item.id === account.id);
      if (index !== -1) {
        updatedData[index].status = AccountStatus.Approved;
      }
    });

    setAllAccounts(updatedData);
  };

  const handleReject = (accounts: HRAccount[]) => {
    const updatedData = [...allAccounts];
    accounts.forEach((account) => {
      const index = updatedData.findIndex((item) => item.id === account.id);
      if (index !== -1) {
        updatedData[index].status = AccountStatus.Rejected;
      }
    });

    setAllAccounts(updatedData);
  };

  const handleReview = (accounts: HRAccount[]) => {
    const updatedData = [...allAccounts];
    accounts.forEach((account) => {
      const index = updatedData.findIndex((item) => item.id === account.id);
      if (index !== -1) {
        updatedData[index].status = AccountStatus.Pending;
      }
    });

    setAllAccounts(updatedData);
  };

  const handleBan = (accounts: HRAccount[]) => {
    const updatedData = [...allAccounts];
    accounts.forEach((account) => {
      const index = updatedData.findIndex((item) => item.id === account.id);
      if (index !== -1) {
        updatedData[index].status = AccountStatus.Banned;
      }
    });

    setAllAccounts(updatedData);
  };
  const handleUnban = (accounts: HRAccount[]) => {
    const updatedData = [...allAccounts];
    accounts.forEach((account) => {
      const index = updatedData.findIndex((item) => item.id === account.id);
      if (index !== -1) {
        updatedData[index].status = AccountStatus.Approved;
      }
    });

    setAllAccounts(updatedData);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <div className='flex items-center'>
          <ClockCircleOutlined />
          <p>Pending</p>
        </div>
      ),
      children: (
        <PendingAccountTable
          data={displayedData}
          approveAccounts={handleApprove}
          rejectAccounts={handleReject}
        />
      ),
    },
    {
      key: '2',
      label: (
        <div className='flex items-center'>
          <CheckOutlined />
          <p>Approved</p>
        </div>
      ),
      children: <ApprovedAccountTable data={displayedData} banAccounts={handleBan} />,
    },
    {
      key: '3',
      label: (
        <div className='flex items-center'>
          <CloseOutlined />
          <p>Rejected</p>
        </div>
      ),
      children: <RejectedAccountTable data={displayedData} reviewAccounts={handleReview} />,
    },
    {
      key: '4',
      label: (
        <div className='flex items-center'>
          <StopOutlined />
          <p>Banned</p>
        </div>
      ),
      children: <BannedAccountTable data={displayedData} unbanAccounts={handleUnban} />,
    },
  ];

  useEffect(() => {
    if (tabKey === '1') {
      setDisplayedData(allAccounts.filter((data) => data.status == AccountStatus.Pending));
    } else if (tabKey === '2') {
      setDisplayedData(allAccounts.filter((data) => data.status == AccountStatus.Approved));
    } else if (tabKey === '3') {
      setDisplayedData(allAccounts.filter((data) => data.status == AccountStatus.Rejected));
    } else if (tabKey === '4') {
      setDisplayedData(allAccounts.filter((data) => data.status == AccountStatus.Banned));
    } else {
      setDisplayedData(allAccounts);
    }
  }, [allAccounts, tabKey]);

  const handleChangePage = (page: number, pageSize: number) => {
    console.log(page, ' ', pageSize);
  };

  return (
    <>
      <div className='w-full h-screen font-roboto px-4 bg-white-700'>
        {/* <div className='py-2'>
          <span className='font-bold text-xl text-black-400'>Account Manager</span>
        </div>

        <Divider
          className='font-bold bg-orange-500 my-2'
          style={{ borderBlockStart: '3px solid rgba(5, 5, 5, 0.06)' }}
        /> */}
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
              {' '}
              {/* Thêm class "justify-end" để căn phải */}
              <Pagination
                className='mt-5'
                defaultCurrent={1}
                total={allAccounts.length}
                pageSize={5}
                onChange={handleChangePage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountManagementPage;
