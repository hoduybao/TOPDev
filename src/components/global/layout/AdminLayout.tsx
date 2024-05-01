import { Layout as LayoutAntDesign } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../Admin/Header/Header';
import NavBar from '../Admin/NavBar/NavBar';
import { useState } from 'react';

const { Content } = LayoutAntDesign;

export default function AdminLayout() {
  const [isCollapsedNav, setIsCollapsedNav] = useState(false);

  const handleCollapseNav = (isCollapsed: boolean) => {
    setIsCollapsedNav(isCollapsed);
    console.log(isCollapsedNav);
  };
  return (
    <LayoutAntDesign className='bg-white'>
      <Header onCollapseNavigation={handleCollapseNav} />
      <LayoutAntDesign
        className={`bg-primary-white duration-500 mt-[46px] ease-in-out`}
        style={{ height: 'calc(100vh - 46px)' }}
      >
        <NavBar isCollapsed={isCollapsedNav} />

        <Content className='transition w-full'>
          <Outlet />
        </Content>
      </LayoutAntDesign>
    </LayoutAntDesign>
  );
}
