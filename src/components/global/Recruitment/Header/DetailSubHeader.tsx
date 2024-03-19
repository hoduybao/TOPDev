import { Link, useParams } from 'react-router-dom';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';

import { UploadOutlined, SettingOutlined } from '@ant-design/icons';

const DetailSubHeader = () => {
  const params = useParams();

  const actionsItems: MenuProps['items'] = [
    {
      key: 'import-data',
      label: (
        <Link to='/recruitment'>
          <div className='flex items-center gap-3'>
            <UploadOutlined />
            <p>Import dữ liệu</p>
          </div>
        </Link>
      ),
    },
  ];

  return (
    <div className='bg-white px-4 pt-2.5 pb-4 border-b border-gray-300 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-3'>
          <p className='text-[16px] font-semibold text-primary-red'>Ứng viên</p>
          <p className='text-[16px] '>{params?.id}</p>
        </div>
        <Dropdown menu={{ items: actionsItems }} trigger={['click']}>
          <div>
            <SettingOutlined />
          </div>
        </Dropdown>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DetailSubHeader;
