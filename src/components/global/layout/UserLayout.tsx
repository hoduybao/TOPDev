import { Layout as LayoutAntDesign } from 'antd';
import { Outlet } from 'react-router-dom';
import UserFooter from '../Footer/UserFooter';
import UserHeader from '../Header/UserHeader';

const { Content } = LayoutAntDesign;

export default function UserLayout() {
  return (
    <LayoutAntDesign className='bg-white'>
      <UserHeader />
      <LayoutAntDesign className={`bg-white duration-500 ease-in-out ' `}>
        <Content className='m-auto transition w-full'>
          <Outlet />
        </Content>
      </LayoutAntDesign>
      <UserFooter />
    </LayoutAntDesign>
  );
}
