import { Button, Card, Dropdown, Rate } from 'antd';
import { Link } from 'react-router-dom';

import type { MenuProps } from 'antd';
import { MoreOutlined, MailOutlined } from '@ant-design/icons';

import { JobType } from '@/+core/utilities/types/recruitment.type';

interface PropType {
  job: JobType;
  newestAmount: number;
  recentAmount: number;
}

const ApplicationCard = (props: PropType) => {
  const { job, newestAmount, recentAmount } = props;

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
    <Card className='w-[100%] sm:w-[500px]'>
      <div className='w-[100%] flex items-start'>
        <Rate count={1} defaultValue={1} />
        <div className='w-[100%] px-2'>
          <p className='font-semibold'>{job?.title}</p>
          <div className='flex items-center gap-2'>
            <MailOutlined />
            <p>{job?.companyId}</p>
          </div>
        </div>
        <Dropdown menu={{ items }} trigger={['click']} placement='bottomRight'>
          <div>
            <MoreOutlined className='text-[18px] font-bold hover:cursor-pointer' />
          </div>
        </Dropdown>
      </div>
      <div className='pt-5 pb-10 flex justify-between items-center'>
        <Link to={`/recruitment/process/${job.id}`}>
          <Button type='primary' danger>
            {newestAmount} Ứng viên mới
          </Button>
        </Link>
        <div>
          <Link to={`/recruitment/process/${job.id}`}>
            <p className='text-red-500 font-bold hover:text-red-400 hover:cursor-pointer'>
              {recentAmount} Để tuyển dụng
            </p>
          </Link>
          <p>{recentAmount} Ứng viên</p>
        </div>
      </div>
    </Card>
  );
};

export default ApplicationCard;
