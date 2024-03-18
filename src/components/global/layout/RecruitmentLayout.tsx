import { Layout as LayoutAntDesign } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../Recruitment/Header/Header';

const { Content } = LayoutAntDesign;

export default function RecruitmentLayout() {
  return (
    <LayoutAntDesign className='bg-white'>
      <Header />
      <LayoutAntDesign
        className={`bg-secondary-white h-[calc(100vh-46px)] duration-500 ease-in-out`}
      >
        <Content className='m-auto transition w-full'>
          <Outlet />
        </Content>
      </LayoutAntDesign>
    </LayoutAntDesign>
  );
}
