import { MY_ROUTE } from '@/routes/route.constant';
import { Layout as LayoutAntDesign } from 'antd';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Admin/Header/Header';
import NavBar from '../Admin/NavBar/NavBar';

const { Content } = LayoutAntDesign;
const items = [
  {
    key: MY_ROUTE.ADMIN_ACCOUNT_MANAGEMENT,
    icon: (
      <svg
        fill='none'
        viewBox='0 0 20 26'
        height='26'
        width='20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          xmlns='http://www.w3.org/2000/svg'
          d='M17.5 0.0742188C18.163 0.0742188 18.7989 0.341785 19.2678 0.818056C19.7366 1.29433 20 1.94029 20 2.61384V22.9308C20 23.6044 19.7366 24.2503 19.2678 24.7266C18.7989 25.2029 18.163 25.4704 17.5 25.4704H2.5C1.83696 25.4704 1.20107 25.2029 0.732233 24.7266C0.263392 24.2503 0 23.6044 0 22.9308V2.61384C0 1.94029 0.263392 1.29433 0.732233 0.818056C1.20107 0.341785 1.83696 0.0742188 2.5 0.0742188H17.5ZM17.5 2.61384H11.25V8.96289L8.125 6.04233L5 8.96289V2.61384H2.5V22.9308H17.5M11.25 11.5025C11.7445 11.5025 12.2278 11.6515 12.6389 11.9305C13.05 12.2096 13.3705 12.6062 13.5597 13.0703C13.7489 13.5343 13.7984 14.045 13.702 14.5376C13.6055 15.0302 13.3674 15.4827 13.0178 15.8379C12.6681 16.1931 12.2227 16.435 11.7377 16.533C11.2528 16.6309 10.7501 16.5807 10.2933 16.3884C9.83648 16.1962 9.44603 15.8707 9.17133 15.4531C8.89662 15.0354 8.75 14.5444 8.75 14.0421C8.75 13.3686 9.01339 12.7226 9.48223 12.2464C9.95107 11.7701 10.587 11.5025 11.25 11.5025ZM16.25 21.661H6.25V20.3912C6.25 18.7023 9.5875 17.8516 11.25 17.8516C12.9125 17.8516 16.25 18.7023 16.25 20.3912V21.661Z'
          fill='#393E46'
        ></path>
      </svg>
    ),
    label: 'Manage Accounts',
  },
  {
    key: MY_ROUTE.ADMIN_JOB_MANAGEMENT,
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
export default function AdminLayout() {
  const [isCollapsedNav, setIsCollapsedNav] = useState(false);
  const route = useLocation().pathname;
  const [textHeader, setTextHeader] = useState(
    items.find((item) => item.key === route)?.label || 'Manage Accounts',
  );

  const handleCollapseNav = (isCollapsed: boolean) => {
    setIsCollapsedNav(isCollapsed);
  };
  return (
    <LayoutAntDesign className='bg-white'>
      <Header textHeader={textHeader} onCollapseNavigation={handleCollapseNav} />
      <LayoutAntDesign className='bg-[#e8edf2] duration-500 ease-in-out flex flex-row mt-[74px]'>
        <div className='h-screen'>
          <NavBar
            setTextHeader={setTextHeader}
            route={route}
            items={items}
            isCollapsed={isCollapsedNav}
          />
        </div>

        <Content
          className={`w-full transition-all duration-300 ease-in-out  bg-[#E0ECFD] ${
            isCollapsedNav ? 'ml-[104px]' : 'ml-[265px]'
          }`}
        >
          <Outlet />
        </Content>
      </LayoutAntDesign>
    </LayoutAntDesign>
  );
}
