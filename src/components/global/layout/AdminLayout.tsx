import { Layout as LayoutAntDesign } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../Admin/Header/Header';

const { Content } = LayoutAntDesign;

export default function AdminLayout() {
  return (
    <LayoutAntDesign className='bg-white'>
      <Header />
      <LayoutAntDesign
        className={`bg-primary-white duration-500 mt-[46px] ease-in-out`}
        style={{ height: 'calc(100vh - 46px)' }}
      >
        <Content className='m-auto transition w-full'>
          <Outlet />
        </Content>
      </LayoutAntDesign>
    </LayoutAntDesign>
  );
}
