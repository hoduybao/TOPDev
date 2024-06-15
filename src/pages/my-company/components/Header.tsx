import { logOut } from '@/+core/redux/auth/authSlice';
import { LanguageSelector } from '@/components/global/Header/UserHeader';
import { EditOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onCollapseNavigation: (collapsed: boolean) => void;
  textHeader: string;
}

const Header = ({ onCollapseNavigation, textHeader }: HeaderProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleCollapseNavigation = () => {
    onCollapseNavigation(!collapsed);
    setCollapsed(!collapsed);
  };
  const items: MenuProps['items'] = [
    {
      key: 'logout',
      label: (
        <div
          className='text-base font-medium cursor-pointer'
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Đăng xuất
        </div>
      ),
    },
  ];
  return (
    <header>
      <nav className='z-10 w-full h-[60px] bg-white-900 flex gap-5 items-center fixed'>
        <div className='w-[330px] px-6 flex items-center justify-between'>
          <Button
            type='text'
            icon={
              collapsed ? (
                <svg
                  fill='none'
                  viewBox='0 0 24 16'
                  height='16'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    xmlns='http://www.w3.org/2000/svg'
                    d='M0.75 15.5H23.25V13H0.75V15.5ZM0.75 9.25H23.25V6.75H0.75V9.25ZM0.75 0.5V3H23.25V0.5H0.75Z'
                    fill='#393E46'
                  ></path>
                </svg>
              ) : (
                <svg
                  fill='none'
                  viewBox='0 0 24 16'
                  height='16'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    xmlns='http://www.w3.org/2000/svg'
                    d='M23.25 15.5H7V13H23.25V15.5ZM23.25 9.25H10.75V6.75H23.25V9.25ZM23.25 0.5V3H7V0.5H23.25ZM0.75 12.4875L5.225 8L0.75 3.5125L2.5125 1.75L8.7625 8L2.5125 14.25L0.75 12.4875Z'
                    fill='#393E46'
                  ></path>
                </svg>
              )
            }
            onClick={handleCollapseNavigation}
            style={{
              fontSize: '16px',
              width: 50,
              height: 50,
              marginRight: 5,
            }}
          />

          <div className='w-[131px] hover:cursor-pointer'>
            <img className='w-[100%]' src='../../../assets/logo/td-logo.png' alt='td-logo' />
          </div>
        </div>

        {/* <ul className='hidden md:flex list-none'>
            {menuItems.map((menu) => {
              return <HeaderDropdown key={uuidv4()} menu={menu} />;
            })}
          </ul> */}
        <div className='flex w-full pr-4 justify-between items-center'>
          <h1 className='text-[25px] font-semibold text-black-400'>{textHeader} </h1>
          <div className='flex justify-end items-center gap-4'>
            <Button
              onClick={() => navigate('/company/manage-jobs/create')}
              type='primary'
              className='bg-primary-red text-base !h-10 !rounded-[20px]'
              icon={
                <EditOutlined
                  style={{
                    fontSize: '17px',
                  }}
                />
              }
            >
              {t('POST_JOB')}
            </Button>
            <LanguageSelector />
            <Dropdown
              trigger={['click']}
              menu={{ items }}
              dropdownRender={(menu) => (
                <div
                  className='w-[138px] rounded-md flex flex-col items-center py-3 px-2.5 bg-white-900 mt-2'
                  style={{ border: '1px solid #D2D5E0' }}
                >
                  {React.cloneElement(menu as React.ReactElement, {
                    style: {
                      boxShadow: 'none',
                      padding: 0,
                      width: '100%',
                      textAlign: 'center',
                    },
                  })}
                </div>
              )}
              placement='bottomRight'
            >
              <svg
                fill='none'
                viewBox='0 0 26 26'
                height='26'
                width='26'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  xmlns='http://www.w3.org/2000/svg'
                  d='M13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.9 6.1 25.5 13 25.5C19.9 25.5 25.5 19.9 25.5 13C25.5 6.1 19.9 0.5 13 0.5ZM6.8375 20.85C7.375 19.725 10.65 18.625 13 18.625C15.35 18.625 18.6375 19.725 19.1625 20.85C17.4625 22.2 15.325 23 13 23C10.675 23 8.5375 22.2 6.8375 20.85ZM20.95 19.0375C19.1625 16.8625 14.825 16.125 13 16.125C11.175 16.125 6.8375 16.8625 5.05 19.0375C3.775 17.3625 3 15.275 3 13C3 7.4875 7.4875 3 13 3C18.5125 3 23 7.4875 23 13C23 15.275 22.225 17.3625 20.95 19.0375ZM13 5.5C10.575 5.5 8.625 7.45 8.625 9.875C8.625 12.3 10.575 14.25 13 14.25C15.425 14.25 17.375 12.3 17.375 9.875C17.375 7.45 15.425 5.5 13 5.5ZM13 11.75C11.9625 11.75 11.125 10.9125 11.125 9.875C11.125 8.8375 11.9625 8 13 8C14.0375 8 14.875 8.8375 14.875 9.875C14.875 10.9125 14.0375 11.75 13 11.75Z'
                  fill='#393E46'
                ></path>
              </svg>
            </Dropdown>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
