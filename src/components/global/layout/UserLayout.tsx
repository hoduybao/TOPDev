import { Layout as LayoutAntDesign } from 'antd';
import { Outlet } from 'react-router-dom';
import UserFooter from '../Footer/UserFooter';
import UserHeader from '../Header/UserHeader';

const { Content } = LayoutAntDesign;

export default function UserLayout() {
  return (
    <LayoutAntDesign className='bg-white-900'>
      <UserHeader />
      <LayoutAntDesign className={`bg-white-900 duration-500 ease-in-out' `}>
        <Content className='m-auto transition w-full'>
          <Outlet />
        </Content>
      </LayoutAntDesign>
      <UserFooter />
    </LayoutAntDesign>
  );
}
