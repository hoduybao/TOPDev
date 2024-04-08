import { HomePage } from '@/pages/home/HomePage';
import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../components/global/layout/AdminLayout';
import RecruitmentLayout from '../components/global/layout/RecruitmentLayout';
import RecruitmentProcessLayout from '../components/global/layout/RecruitmentProcessLayout';
import UserLayout from '../components/global/layout/UserLayout';
import AdminMainPage from '../pages/admin/MainPage';
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage';
import DetailPage from '../pages/recruitment/DetailPage';
import MainPage from '../pages/recruitment/MainPage';
import ProcessPage from '../pages/recruitment/ProcessPage';
import { MY_ROUTE } from './route.constant';

export const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Layout />,
  //   children: [{ path: MY_ROUTE.HOME, element: <HomePage /> }],
  // },
  {
    path: '/recruitment',
    element: <RecruitmentLayout />,
    children: [{ path: MY_ROUTE.RECRUITMENT, element: <MainPage /> }],
  },
  {
    path: '/recruitment/process',
    element: <RecruitmentProcessLayout />,
    children: [{ path: MY_ROUTE.RECRUITMENT_PROCESS, element: <ProcessPage /> }],
  },
  {
    path: '/recruitment/process/detail-application/:id',
    element: <RecruitmentProcessLayout />,
    children: [{ path: MY_ROUTE.RECRUITMENT_DETAIL, element: <DetailPage /> }],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [{ path: MY_ROUTE.ADMIN, element: <AdminMainPage /> }],
  },
  {
    path: '/',
    element: <UserLayout />,
    children: [{ path: MY_ROUTE.HOME, element: <HomePage /> }],
  },
  { path: '/*', element: <NotFoundPage /> },
]);
