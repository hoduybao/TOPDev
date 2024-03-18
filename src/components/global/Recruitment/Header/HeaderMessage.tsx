import { Badge, Dropdown, Tabs } from 'antd';
import type { MenuProps, TabsProps } from 'antd';

import { WechatOutlined } from '@ant-design/icons';

const HeaderMessage = () => {
  const tabItems: TabsProps['items'] = [
    {
      key: 'all',
      label: 'Tất cả',
      children: <div>All data</div>,
    },
    {
      key: 'chat',
      label: 'Chat',
      children: <div>Chat data</div>,
    },
    {
      key: 'channel',
      label: 'Kênh',
      children: <div>Channel data</div>,
    },
  ];

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='relative min-w-[400px]'>
          <p className='z-10 absolute top-2 right-0 font-semibold text-primary-red hover:cursor-pointer'>
            Thông điệp mới
          </p>
          <div onClick={(e) => e?.stopPropagation()}>
            <Tabs defaultActiveKey='1' items={tabItems} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <div className='p-2 flex items-center justify-center hover:bg-gray-200 hover:cursor-pointer'>
        <Badge count={2} overflowCount={10}>
          <WechatOutlined className='text-[23px] pr-1' />
        </Badge>
      </div>
    </Dropdown>
  );
};

export default HeaderMessage;
