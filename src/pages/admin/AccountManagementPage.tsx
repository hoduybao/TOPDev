import { hRAccountStatus as AccountStatus } from '@/+core/enums/accountStatus.enum';
import { HRAccount } from '@/+core/utilities/types/admin.type';
import ApprovedAccountTable from '@/components/global/Admin/AccountManagement/ApprovedAccountTable';
import BannedAccountTable from '@/components/global/Admin/AccountManagement/BannedAccountTable';
import PendingAccountTable from '@/components/global/Admin/AccountManagement/PendingAccountTable';
import RejectedAccountTable from '@/components/global/Admin/AccountManagement/RejectedAccountTable';
import { Divider, Tabs, TabsProps } from 'antd';
import { useEffect, useState } from 'react';

const mockData: HRAccount[] = [
  {
    id: '1',
    companyName: 'Apple Inc.',
    taxCode: 123456789,
    displayName: 'Apple',
    fields: ['Product Development', 'Marketing', 'Sales'],
    address: '1 Apple Park Way, Cupertino, CA',
    status: AccountStatus.Pending,
  },
  {
    id: '2',
    companyName: 'Microsoft Corporation',
    taxCode: 987654321,
    displayName: 'Microsoft',
    fields: ['Software Development', 'Cloud Computing', 'Gaming'],
    address: 'One Microsoft Way, Redmond, WA',
    status: AccountStatus.Approved,
  },
  {
    id: '3',
    companyName: 'Amazon.com, Inc.',
    taxCode: 2468101214,
    displayName: 'Amazon',
    fields: ['E-commerce', 'Cloud Services', 'Digital Streaming'],
    address: '410 Terry Ave N, Seattle, WA',
    status: AccountStatus.Rejected,
  },
  {
    id: '4',
    companyName: 'Tesla, Inc.',
    taxCode: 1357924680,
    displayName: 'Tesla',
    fields: ['Electric Vehicles', 'Energy Storage', 'Solar Energy'],
    address: '3500 Deer Creek Road, Palo Alto, CA',
    status: AccountStatus.Rejected,
  },
  {
    id: '5',
    companyName: 'Google LLC',
    taxCode: 246813579,
    displayName: 'Google',
    fields: ['Search Engine', 'Online Advertising', 'Cloud Computing'],
    address: '1600 Amphitheatre Parkway, Mountain View, CA',
    status: AccountStatus.Approved,
  },
  {
    id: '6',
    companyName: 'Facebook, Inc.',
    taxCode: 135792468,
    displayName: 'Facebook',
    fields: ['Social Networking', 'Digital Advertising', 'Virtual Reality'],
    address: '1 Hacker Way, Menlo Park, CA',
    status: AccountStatus.Approved,
  },
  {
    id: '7',
    companyName: 'Walmart Inc.',
    taxCode: 975318642,
    displayName: 'Walmart',
    fields: ['Retail', 'E-commerce', 'Grocery'],
    address: '702 SW 8th St, Bentonville, AR',
    status: AccountStatus.Approved,
  },
  {
    id: '8',
    companyName: 'Toyota Motor Corporation',
    taxCode: 864209753,
    displayName: 'Toyota',
    fields: ['Automobile Manufacturing', 'Hybrid Vehicles', 'Autonomous Driving'],
    address: '1 Toyota-cho, Toyota City, Aichi Prefecture, Japan',
    status: AccountStatus.Rejected,
  },
  {
    id: '9',
    companyName: 'Samsung Electronics Co., Ltd.',
    taxCode: 579318642,
    displayName: 'Samsung',
    fields: ['Consumer Electronics', 'Semiconductors', 'Telecommunications'],
    address: '129 Samsung-ro, Maetan-dong, Yeongtong-gu, Suwon-si, Gyeonggi-do, South Korea',
    status: AccountStatus.Pending,
  },
  {
    id: '10',
    companyName: 'Intel Corporation',
    taxCode: 426093871,
    displayName: 'Intel',
    fields: ['Semiconductors', 'Processors', 'Data Centers'],
    address: '2200 Mission College Blvd, Santa Clara, CA',
    status: AccountStatus.Approved,
  },
  {
    id: '11',
    companyName: 'Sony Corporation',
    taxCode: 793642018,
    displayName: 'Sony',
    fields: ['Consumer Electronics', 'Entertainment', 'Gaming'],
    address: '1-7-1 Konan, Minato-ku, Tokyo, Japan',
    status: AccountStatus.Pending,
  },
  {
    id: '12',
    companyName: 'Nike, Inc.',
    taxCode: 103857294,
    displayName: 'Nike',
    fields: ['Athletic Footwear', 'Apparel', 'Sports Equipment'],
    address: '1 Bowerman Dr, Beaverton, OR',
    status: AccountStatus.Approved,
  },
];

const AccountManagementPage = () => {
  const [allAccounts, setAllAccounts] = useState<HRAccount[]>(mockData);
  const [displayedData, setDisplayedData] = useState<HRAccount[]>(
    mockData.filter((data) => data.status == AccountStatus.Pending),
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
      label: 'Pending',
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
      label: 'Approved',
      children: <ApprovedAccountTable data={displayedData} banAccounts={handleBan} />,
    },
    {
      key: '3',
      label: 'Rejected',
      children: <RejectedAccountTable data={displayedData} reviewAccounts={handleReview} />,
    },
    {
      key: '4',
      label: 'Banned',
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
  }, [allAccounts]);

  const onChangeTab = (key: string) => {
    if (key === '1') {
      setDisplayedData(allAccounts.filter((data) => data.status == AccountStatus.Pending));
    } else if (key === '2') {
      setDisplayedData(allAccounts.filter((data) => data.status == AccountStatus.Approved));
    } else if (key === '3') {
      setDisplayedData(allAccounts.filter((data) => data.status == AccountStatus.Rejected));
    } else if (key === '4') {
      setDisplayedData(allAccounts.filter((data) => data.status == AccountStatus.Banned));
    } else {
      setDisplayedData(allAccounts);
    }
    setTabKey(key);
  };

  return (
    <>
      <div className='w-full font-roboto px-4 bg-white-700'>
        <div className='py-2'>
          <span className='font-bold text-xl text-black-400'>Account Manager</span>
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
            <Tabs size='large' defaultActiveKey='1' items={items} onChange={onChangeTab} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountManagementPage;
