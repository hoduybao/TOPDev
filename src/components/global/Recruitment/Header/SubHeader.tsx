import { Link } from 'react-router-dom';
import { Dropdown, Input } from 'antd';
import type { MenuProps } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

import { UploadOutlined, SettingOutlined, CaretDownOutlined } from '@ant-design/icons';
import AddRecruitmentBtn from '../Content/AddRecruitmentBtn';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const SubHeader = () => {
  const { Search } = Input;
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, []);

  const actionsItems: MenuProps['items'] = [
    {
      key: 'import-data',
      label: (
        <Link to='/recruitment'>
          <div className='flex items-center gap-3'>
            <UploadOutlined />
            <p>{t('importData')}</p>
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
          <p>{t('search.hobby')}</p>
        </div>
      ),
    },
    {
      key: 'my-position',
      label: (
        <div className='p-1 flex items-center gap-3'>
          <p>{t('search.jobHobby')}</p>
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
        <AddRecruitmentBtn />
        <p className='text-[16px]'>{t('jobPosition')}</p>
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
          placeholder={t('search.title')}
          allowClear
          onSearch={onSearch}
        />
      </div>
      <div></div>
    </div>
  );
};

export default SubHeader;
