import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Dropdown, Input, Button } from 'antd';
import type { MenuProps } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

import { UploadOutlined, SettingOutlined, CaretDownOutlined } from '@ant-design/icons';

import AddApplicantBtn from '../Content/AddApplicantBtn';

const { Search } = Input;

interface PropType {
  createNewDetailApplication: (
    name: string,
    phone: string,
    email: string,
    cvUrl: string,
    description: string,
  ) => void;
}

const ProcessSubHeader = (props: PropType) => {
  const { createNewDetailApplication } = props;

  const { t } = useTranslation();
  const navigate = useNavigate();

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
    <div className='bg-[#fff] px-4 pt-2.5 pb-4 border-b border-gray-300 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <AddApplicantBtn createNewDetailApplication={createNewDetailApplication} />
        <p className='text-[16px]'>{t('recruitmentApplicant')}</p>
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
          placeholder={`${t('recruitmentSearch')}...`}
          allowClear
          onSearch={onSearch}
        />
      </div>
      <div>
        <Button
          type='primary'
          danger
          onClick={() => {
            navigate(-1);
          }}
        >
          {t('back')}
        </Button>
      </div>
    </div>
  );
};

export default ProcessSubHeader;
