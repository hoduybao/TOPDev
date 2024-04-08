import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/global/layout/Layout';
import RecruitmentLayout from '../components/global/layout/RecruitmentLayout';
import RecruitmentProcessLayout from '../components/global/layout/RecruitmentProcessLayout';
import AdminLayout from '../components/global/layout/AdminLayout';
import { HomePage } from '../pages/home/HomePage';
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage';
import MainPage from '../pages/recruitment/MainPage';
import AdminMainPage from '../pages/admin/MainPage';
import ProcessPage from '../pages/recruitment/ProcessPage';
import DetailPage from '../pages/recruitment/DetailPage';
import { MY_ROUTE } from './route.constant';
import JobPage from '../pages/job/JobPage';
import UserLayout from '../components/global/layout/UserLayout';
import LoginPage from '../pages/login/LoginPage';
import LoginLayout from '../components/global/layout/LoginLayout';
import ResetPasswordPage from '../pages/login/ResetPasswordPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: MY_ROUTE.HOME, element: <HomePage /> }],
  },
  {
    path: '/recruitment',
    element: <RecruitmentLayout />,
    children: [{ path: MY_ROUTE.RECRUITMENT, element: <MainPage /> }],
  },
  {
    path: '/recruitment/:jobId',
    element: <RecruitmentProcessLayout />,
    children: [{ path: MY_ROUTE.RECRUITMENT_PROCESS, element: <ProcessPage /> }],
  },
  {
    path: '/recruitment/:jobId/:applicationId',
    element: <RecruitmentProcessLayout />,
    children: [{ path: MY_ROUTE.RECRUITMENT_DETAIL, element: <DetailPage /> }],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [{ path: MY_ROUTE.ADMIN, element: <AdminMainPage /> }],
  },
  {
    path: '/login',
    element: <LoginLayout />,
    children: [{ path: MY_ROUTE.LOGIN, element: <LoginPage /> }],
  },
  {
    path: '/reset-password',
    element: <LoginLayout />,
    children: [{ path: MY_ROUTE.RESET_PASSWORD, element: <ResetPasswordPage /> }],
  },
  {
    path: '/',
    element: <UserLayout />,
    children: [{ path: MY_ROUTE.JOB, element: <JobPage /> }],
  },
  { path: '/*', element: <NotFoundPage /> },
]);
