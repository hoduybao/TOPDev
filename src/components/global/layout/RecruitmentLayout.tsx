import { Layout as LayoutAntDesign } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../Recruitment/Header/Header';

import { useState } from 'react';
import NavBar from '../Recruitment/Navbar/NavBar';

const { Content } = LayoutAntDesign;

export default function RecruitmentLayout() {
  const [isCollapsedNav, setIsCollapsedNav] = useState(false);

  const handleCollapseNav = (isCollapsed: boolean) => {
    setIsCollapsedNav(isCollapsed);
    console.log(isCollapsedNav);
  };

  return (
    <LayoutAntDesign className='bg-white'>
      <Header onCollapseNavigation={handleCollapseNav} />
      <LayoutAntDesign
        className={`bg-primary-white mt-[46px] h-[calc(100vh-46px)] duration-500 ease-in-out`}
      >
        <NavBar isCollapsed={isCollapsedNav} />
        {/* <Sider
          trigger={null}
          collapsible
          collapsed={isCollapsedNav}
          style={{ background: 'white' }}
        >
          <Menu
            theme='light'
            mode='inline'
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <ProfileOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider> */}
        <Content className='transition w-full'>
          <Outlet />
        </Content>
      </LayoutAntDesign>
    </LayoutAntDesign>
  );
}
