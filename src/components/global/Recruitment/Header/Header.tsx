import { Link, useLocation } from 'react-router-dom';

import HeaderMessage from './HeaderMessage';
import HeaderUser from './HeaderUser';
import HeaderUserMobile from './HeaderUserMobile';
import HeaderLanguages from './HeaderLanguages';

import { Button } from 'antd';
import { useState } from 'react';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Text from 'antd/es/typography/Text';
import { MY_ROUTE } from '@/routes/route.constant';

interface HeaderProps {
  onCollapseNavigation: (collapsed: boolean) => void;
}

const Header = ({ onCollapseNavigation }: HeaderProps) => {
  const location = useLocation();
  console.log(location);
  // const menuItems = HeaderMenu();
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapseNavigation = () => {
    onCollapseNavigation(!collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <header>
      <nav className='z-10 fixed w-full h-[46px] bg-white px-4 py-2.5 flex gap-5 items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={handleCollapseNavigation}
            style={{
              fontSize: '16px',
              width: 50,
              height: 50,
            }}
          />

          <Link to={`/recruitment`}>
            <div className='w-[131px] hover:cursor-pointer'>
              <img className='w-[100%]' src='../../../assets/logo/td-logo.png' alt='td-logo' />
            </div>
          </Link>
          {/* <ul className='hidden md:flex list-none'>
            {menuItems.map((menu) => {
              return <HeaderDropdown key={uuidv4()} menu={menu} />;
            })}
          </ul> */}
          {location.pathname === MY_ROUTE.RECRUITMENT_PROFILE && (
            <Text style={{ fontSize: '25px', fontWeight: '600' }}> Company Profile </Text>
          )}

          {location.pathname === MY_ROUTE.RECRUITMENT_JOBS && (
            <Text style={{ fontSize: '25px', fontWeight: '600' }}> Manage Jobs </Text>
          )}

          {location.pathname === MY_ROUTE.RECRUITMENT_CANDIDATES && (
            <Text style={{ fontSize: '25px', fontWeight: '600' }}> Manage Candidates </Text>
          )}
        </div>
        <div className='flex items-center gap-5 md:gap-3'>
          <HeaderLanguages />
          <HeaderMessage />
          <HeaderUser />
          <HeaderUserMobile />
        </div>
      </nav>
    </header>
  );
};

export default Header;
