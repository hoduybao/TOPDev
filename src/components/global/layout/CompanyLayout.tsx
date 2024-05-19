import Header from '@/pages/my-company/components/Header';
import { MY_ROUTE } from '@/routes/route.constant';
import { ProfileOutlined } from '@ant-design/icons';
import { Layout as LayoutAntDesign } from 'antd';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Admin/NavBar/NavBar';

const { Content } = LayoutAntDesign;
const items = [
  {
    key: MY_ROUTE.COMPANY,
    icon: <ProfileOutlined />,
    label: 'Company Profile',
  },
  {
    key: MY_ROUTE.COMPANY_JOB_MANAGEMENT,
    icon: (
      <svg
        fill='none'
        viewBox='0 0 26 24'
        height='24'
        width='26'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          xmlns='http://www.w3.org/2000/svg'
          d='M23 5.46987H18V2.93025L15.5 0.390625H10.5L8 2.93025V5.46987H3C1.625 5.46987 0.5 6.6127 0.5 8.00949V14.3585C0.5 15.3109 1 16.1109 1.75 16.5553V20.7076C1.75 22.1171 2.8625 23.2472 4.25 23.2472H21.75C23.1375 23.2472 24.25 22.1171 24.25 20.7076V16.5426C24.9875 16.0982 25.5 15.2855 25.5 14.3585V8.00949C25.5 6.6127 24.375 5.46987 23 5.46987ZM10.5 2.93025H15.5V5.46987H10.5V2.93025ZM3 8.00949H23V14.3585H16.75V10.5491H9.25V14.3585H3V8.00949ZM14.25 15.6284H11.75V13.0887H14.25V15.6284ZM21.75 20.7076H4.25V16.8982H9.25V18.168H16.75V16.8982H21.75V20.7076Z'
          fill='#393E46'
        ></path>
      </svg>
    ),
    label: 'Manage Jobs',
  },
];
export default function CompanyLayout() {
  const [isCollapsedNav, setIsCollapsedNav] = useState(false);
  const route = useLocation().pathname;
  const [textHeader, setTextHeader] = useState(
    items.find((item) => route.includes(item.key))?.label || '',
  );

  const handleCollapseNav = (isCollapsed: boolean) => {
    setIsCollapsedNav(isCollapsed);
  };
  return (
    <LayoutAntDesign className='bg-white min-h-screen'>
      <Header textHeader={textHeader} onCollapseNavigation={handleCollapseNav} />
      <LayoutAntDesign className='bg-[#e8edf2] duration-500 ease-in-out flex flex-row !h-full mt-[60px]'>
        <div className='min-h-screen'>
          <NavBar
            setTextHeader={setTextHeader}
            route={route}
            items={items}
            isCollapsed={isCollapsedNav}
          />{' '}
        </div>
        <Content
          className={`flex justify-center !w-full min-h-screen transition-all duration-300 ease-in-out my-2 mr-2 rounded-sm ${
            isCollapsedNav ? 'ml-[112px]' : 'ml-[273px]'
          }`}
        >
          <Outlet />
        </Content>
      </LayoutAntDesign>
    </LayoutAntDesign>
  );
}
