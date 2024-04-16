import { HomePage } from '@/pages/home/HomePage';
import { ITJobs } from '@/pages/it-jobs/IT-Jobs';
import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../components/global/layout/AdminLayout';
import LoginLayout from '../components/global/layout/LoginLayout';
import RecruitmentLayout from '../components/global/layout/RecruitmentLayout';
import RecruitmentProcessLayout from '../components/global/layout/RecruitmentProcessLayout';
import UserLayout from '../components/global/layout/UserLayout';
import AdminMainPage from '../pages/admin/MainPage';
import LoginPage from '../pages/login/LoginPage';
import ResetPasswordPage from '../pages/login/ResetPasswordPage';
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage';
import DetailPage from '../pages/recruitment/DetailPage';
import MainPage from '../pages/recruitment/MainPage';
import DetailJobPage from '@/pages/recruitment/DetailJobPage';
import ProcessPage from '../pages/recruitment/ProcessPage';
import { MY_ROUTE } from './route.constant';
import JobPage from '../pages/job/JobPageNew';
import CompaniesPage from '../pages/company/Companies';
import CompanyPage from '../pages/company/Company';
import AccountManagementPage from '@/pages/admin/AccountManagementPage';
import AdminLoginPage from '@/pages/admin/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/it-jobs',
    element: <UserLayout />,
    children: [{ path: MY_ROUTE.IT_JOBS, element: <ITJobs /> }],
  },
  {
    path: '/recruitment',
    element: <RecruitmentLayout />,
    children: [{ path: MY_ROUTE.RECRUITMENT, element: <MainPage /> }],
  },
  {
    path: '/recruitment/:jobId',
    element: <RecruitmentLayout />,
    children: [{ path: MY_ROUTE.RECRUITMENT_DETAIL_JOB, element: <DetailJobPage /> }],
  },
  {
    path: '/recruitment/:jobId/applications',
    element: <RecruitmentProcessLayout />,
    children: [{ path: MY_ROUTE.RECRUITMENT_PROCESS, element: <ProcessPage /> }],
  },
  {
    path: '/recruitment/:jobId/application/:applicationId',
    element: <RecruitmentProcessLayout />,
    children: [{ path: MY_ROUTE.RECRUITMENT_DETAIL, element: <DetailPage /> }],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [{ path: MY_ROUTE.ADMIN, element: <AdminMainPage /> }],
  },
  {
    path: MY_ROUTE.ADMIN_LOGIN,
    element: <AdminLayout />,
    children: [{ path: MY_ROUTE.ADMIN_LOGIN, element: <AdminLoginPage /> }],
  },
  {
    path: MY_ROUTE.ADMIN_ACCOUNT_MANAGEMENT,
    element: <AdminLayout />,
    children: [{ path: MY_ROUTE.ADMIN_ACCOUNT_MANAGEMENT, element: <AccountManagementPage /> }],
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
    children: [
      { path: MY_ROUTE.HOME, element: <HomePage /> },
      { path: MY_ROUTE.JOB, element: <JobPage /> },
      { path: MY_ROUTE.COMPANIES, element: <CompaniesPage /> },
      { path: MY_ROUTE.COMPANY, element: <CompanyPage /> },
    ],
  },

  { path: '/*', element: <NotFoundPage /> },
]);
