import MyCV from '@/pages/UserProfile/MyCV';
import AccountManagementPage from '@/pages/admin/AccountManagementPage';
import AdminLoginPage from '@/pages/admin/LoginPage';
import { HomePage } from '@/pages/home/HomePage';
import { ITJobs } from '@/pages/it-jobs/IT-Jobs';
import JobManagement from '@/pages/job-management/JobManagement';
import ManageFollowPage from '@/pages/manage-follow/ManageFollowPage';
import { MyPages } from '@/pages/my-pages/MyPages';
import DetailJobPage from '@/pages/recruitment/DetailJobPage';
import ProfilePage from '@/pages/recruitment/ProfilePage';
import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../components/global/layout/AdminLayout';
import LoginLayout from '../components/global/layout/LoginLayout';
import RecruitmentLayout from '../components/global/layout/RecruitmentLayout';
import RecruitmentProcessLayout from '../components/global/layout/RecruitmentProcessLayout';
import UserLayout from '../components/global/layout/UserLayout';
import AdminMainPage from '../pages/admin/MainPage';
import CompaniesPage from '../pages/company/Companies';
import CompanyPage from '../pages/company/Company';
import JobPage from '../pages/job/JobPageNew';
import LoginPage from '../pages/login/LoginPage';
import ResetPasswordPage from '../pages/login/ResetPasswordPage';
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage';
import DetailPage from '../pages/recruitment/DetailPage';
import MainPage from '../pages/recruitment/MainPage';
import ProcessPage from '../pages/recruitment/ProcessPage';
import { MY_ROUTE } from './route.constant';
import JobManagementPage from '@/pages/admin/JobManagementPage';

export const router = createBrowserRouter([
  {
    path: '/recruitment',
    element: <RecruitmentLayout />,
    children: [
      { path: MY_ROUTE.RECRUITMENT, element: <MainPage /> },
      { path: MY_ROUTE.RECRUITMENT_DETAIL_JOB, element: <DetailJobPage /> },
    ],
  },
  {
    path: '/recruitment/profile',
    element: <RecruitmentLayout />,
    children: [{ path: MY_ROUTE.RECRUITMENT_PROFILE, element: <ProfilePage /> }],
  },
  {
    path: '/recruitment/:jobId',
    element: <RecruitmentProcessLayout />,
    children: [
      { path: MY_ROUTE.RECRUITMENT_PROCESS, element: <ProcessPage /> },
      { path: MY_ROUTE.RECRUITMENT_DETAIL, element: <DetailPage /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: MY_ROUTE.ADMIN, element: <AccountManagementPage /> },
      { path: MY_ROUTE.ADMIN_LOGIN, element: <AdminLoginPage /> },
      { path: MY_ROUTE.ADMIN_ACCOUNT_MANAGEMENT, element: <AccountManagementPage /> },
      { path: MY_ROUTE.ADMIN_JOB_MANAGEMENT, element: <JobManagementPage /> },
    ],
  },
  {
    path: '/',
    element: <UserLayout />,
    children: [
      { path: MY_ROUTE.USER_PROFILE, element: <MyCV /> },
      { path: MY_ROUTE.JOB_MANAGEMENT, element: <JobManagement /> },
      { path: MY_ROUTE.HOME, element: <HomePage /> },
      {
        path: MY_ROUTE.IT_JOBS,
        element: <ITJobs />,
      },
      { path: MY_ROUTE.JOB, element: <JobPage /> },
      { path: MY_ROUTE.COMPANIES, element: <CompaniesPage /> },
      { path: MY_ROUTE.COMPANY, element: <CompanyPage /> },
      { path: MY_ROUTE.MANAGE_FOLLOW, element: <ManageFollowPage /> },
      { path: MY_ROUTE.IT_JOBS, element: <ITJobs /> },
      { path: MY_ROUTE.MY_PAGES, element: <MyPages /> },
    ],
  },
  {
    path: '/',
    element: <LoginLayout />,
    children: [
      { path: MY_ROUTE.LOGIN, element: <LoginPage /> },
      { path: MY_ROUTE.RESET_PASSWORD, element: <ResetPasswordPage /> },
    ],
  },

  { path: '/*', element: <NotFoundPage /> },
]);
