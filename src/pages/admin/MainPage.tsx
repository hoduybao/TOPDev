import { Tabs } from 'antd';

import {
  MenuOutlined,
  QuestionOutlined,
  FieldTimeOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';

import PendingTab from '../../components/global/Admin/Content/PendingTab';
import ApproveTab from '../../components/global/Admin/Content/ApproveTab';
import RejectTab from '../../components/global/Admin/Content/RejectTab';

type PositionType = 'left' | 'right';

const MainPage = () => {
  const OperationsSlot: Record<PositionType, React.ReactNode> = {
    left: (
      <div className='mr-5'>
        <MenuOutlined className='text-xl' />
      </div>
    ),
    right: (
      <div>
        <QuestionOutlined className='text-md' />
      </div>
    ),
  };

  const items = [
    {
      key: 'pending',
      label: (
        <div className='flex items-center'>
          <FieldTimeOutlined />
          <p>Pending</p>
        </div>
      ),
      children: <PendingTab />,
    },
    {
      key: 'approve',
      label: (
        <div className='flex items-center'>
          <CheckOutlined />
          <p>Approve</p>
        </div>
      ),
      children: <ApproveTab />,
    },
    {
      key: 'reject',
      label: (
        <div className='flex items-center'>
          <CloseOutlined />
          <p>Reject</p>
        </div>
      ),
      children: <RejectTab />,
    },
  ];

  return (
    <div className='flex flex-col'>
      <div className='px-4 py-2.5 flex gap-5 flex-wrap'>
        <Tabs className='w-full' tabBarExtraContent={OperationsSlot} items={items} />
      </div>
    </div>
  );
};

export default MainPage;
