import { Layout as LayoutAntDesign } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import UserFooter from '../Footer/UserFooter';

const { Content } = LayoutAntDesign;

export default function UserLayout() {
  return (
    <LayoutAntDesign className='bg-white'>
      {/* <Header /> */}
      <LayoutAntDesign className={`bg-white duration-500 ease-in-out ' `}>
        <Content className='m-auto transition w-full'>
          <Outlet />
        </Content>
      </LayoutAntDesign>
      <UserFooter />
    </LayoutAntDesign>
  );
}
