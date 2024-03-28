import { Layout as LayoutAntDesign } from 'antd';
import { Outlet } from 'react-router-dom';
import { lazy } from 'react';

const Footer = lazy(() => import('../Footer/UserFooter'));
const Header = lazy(() => import('../Header/UserHeader'));
const SearchPage = lazy(() => import('../Search/Search'));

const { Content } = LayoutAntDesign;

export default function Layout() {
  return (
    <LayoutAntDesign className='bg-white'>
      <Header />
      <LayoutAntDesign className={`bg-white duration-500 ease-in-out ' `}>
        <Content className='m-auto transition w-full'>
          <Outlet />
          <SearchPage />
        </Content>
      </LayoutAntDesign>
      <Footer />
    </LayoutAntDesign>
  );
}
