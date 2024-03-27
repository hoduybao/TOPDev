import { Layout as LayoutAntDesign } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../Recruitment/Header/Header';

const { Content } = LayoutAntDesign;

export default function RecruitmentProcessLayout() {
  return (
    <LayoutAntDesign className='bg-white'>
      {/* <Header /> */}
      <LayoutAntDesign
        className={`bg-primary-white mt-[46px] h-[calc(100vh-46px)] duration-500 ease-in-out overflow-x-auto`}
      >
        <Content className='m-auto transition w-full'>
          <Outlet />
        </Content>
      </LayoutAntDesign>
    </LayoutAntDesign>
  );
}
