import { Link } from 'react-router-dom';
import { Dropdown, Input } from 'antd';
import type { MenuProps } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

import { UploadOutlined, SettingOutlined, CaretDownOutlined } from '@ant-design/icons';

import AddApplicantBtn from '../Content/AddApplicantBtn';

const { Search } = Input;

interface PropType {
  createNewDetailApplication: (title: string, name: string, phone: string, email: string) => void;
}

const ProcessSubHeader = (props: PropType) => {
  const { createNewDetailApplication } = props;

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

  const searchItems: MenuProps['items'] = [
    {
      key: 'collection',
      label: (
        <div className='p-1 flex items-center gap-3'>
          <p>Mục yêu thích của tôi</p>
        </div>
      ),
    },
    {
      key: 'my-position',
      label: (
        <div className='p-1 flex items-center gap-3'>
          <p>Vị trí công việc yêu thích của tôi</p>
        </div>
      ),
    },
  ];

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(info?.source, value);
  };

  return (
    <div className='bg-white px-4 pt-2.5 pb-4 border-b border-gray-300 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <AddApplicantBtn createNewDetailApplication={createNewDetailApplication} />
        <p className='text-[16px]'>Ứng viên</p>
        <Dropdown menu={{ items: actionsItems }} trigger={['click']}>
          <div>
            <SettingOutlined />
          </div>
        </Dropdown>
      </div>
      <div>
        <Search
          className='hidden md:block w-[300px] lg:w-[500px]'
          prefix={
            <Dropdown menu={{ items: searchItems }} trigger={['click']}>
              <div className='px-1 hover:cursor-pointer'>
                <CaretDownOutlined />
              </div>
            </Dropdown>
          }
          placeholder='Tìm kiếm...'
          allowClear
          onSearch={onSearch}
        />
      </div>
      <div></div>
    </div>
  );
};

export default ProcessSubHeader;
