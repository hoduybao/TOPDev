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
  };
  return (
    <LayoutAntDesign className='bg-white h-screen'>
      <Header onCollapseNavigation={handleCollapseNav} />
      <LayoutAntDesign className='bg-primary-white duration-500 ease-in-out flex flex-row h-screen'>
        <div className='h-screen'>
          <NavBar isCollapsed={isCollapsedNav} />
        </div>

        <Content className='transition w-full h-screen'>
          <Outlet />
        </Content>
      </LayoutAntDesign>
    </LayoutAntDesign>
  );
}
