import { Button, Card, Dropdown } from 'antd';

import type { MenuProps } from 'antd';
import { StarOutlined, MoreOutlined, MailOutlined } from '@ant-design/icons';

const ApplicationCard = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <div>Xem ứng viên</div>,
    },
    {
      key: '2',
      label: <div>Hoạt động</div>,
    },
    {
      key: '3',
      label: <div>Người giám xác</div>,
    },
  ];

  return (
    <Card className='w-[100%] sm:w-[500px] hover:cursor-pointer'>
      <div className='w-[100%] flex items-start'>
        <StarOutlined className='text-yellow-500 text-[20px]' />
        <div className='w-[100%] px-2'>
          <p className='font-semibold'>Front-end developer</p>
          <div className='flex items-center gap-2'>
            <MailOutlined />
            <p>company.abc@gmail.com</p>
          </div>
        </div>
        <Dropdown menu={{ items }} placement='bottomRight'>
          <div>
            <MoreOutlined className='text-[18px] font-bold hover:cursor-pointer' />
          </div>
        </Dropdown>
      </div>
      <div className='pt-5 pb-10 flex justify-between items-center'>
        <Button type='primary' danger>
          3 Ứng viên mới
        </Button>
        <div>
          <p className='text-red-500 font-bold hover:text-red-400'>1 Để tuyển dụng</p>
          <p>1 Ứng viên</p>
        </div>
      </div>
    </Card>
  );
};

export default ApplicationCard;
