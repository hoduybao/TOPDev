import PrivateRoute from '@/components/global/layout/PrivateRoute';
import MyCV from '@/pages/UserProfile/MyCV';
import AccountManagementPage from '@/pages/admin/AccountManagementPage';
import CandidateProfile from '@/pages/admin/CandidateProfile';
import AdminCompanyProfile from '@/pages/admin/CompanyProfile';
import JobManagementPage from '@/pages/admin/JobManagementPage';
import AdminLoginPage from '@/pages/admin/LoginPage';
import ApplicationDetail from '@/pages/application-detail/ApplicationDetail';
import { HomePage } from '@/pages/home/HomePage';
import { ITJobs } from '@/pages/it-jobs/IT-Jobs';
import JobManagement from '@/pages/job-management/JobManagement';
import ApplicationsPage from '@/pages/manage-application/ApplicationsPage';
import ManageFollowPage from '@/pages/manage-follow/ManageFollowPage';
import { CompanyProfile } from '@/pages/my-company/pages/company-profile/page';
import CompanyDashboard from '@/pages/my-company/pages/dashboard/page';
import { CreateJob } from '@/pages/my-company/pages/manage-jobs/create/page';
import { ManageJobs } from '@/pages/my-company/pages/manage-jobs/page';
import { MyPages } from '@/pages/my-pages/MyPages';
import RegisterPage from '@/pages/register/RegisterPage';
import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../components/global/layout/AdminLayout';
import CompanyLayout from '../components/global/layout/CompanyLayout';
import LoginLayout from '../components/global/layout/LoginLayout';
import UserLayout from '../components/global/layout/UserLayout';
import CompaniesPage from '../pages/company/Companies';
import CompanyPage from '../pages/company/Company';
import JobPage from '../pages/job/JobPageNew';
import LoginPage from '../pages/login/LoginPage';
import ResetPasswordPage from '../pages/login/ResetPasswordPage';
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage';
import { MY_ROUTE } from './route.constant';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      { path: MY_ROUTE.HOME, element: <HomePage /> },
      {
        path: MY_ROUTE.IT_JOBS,
        element: <ITJobs />,
      },
      { path: MY_ROUTE.JOB, element: <JobPage /> },
      { path: MY_ROUTE.COMPANIES, element: <CompaniesPage /> },
      { path: MY_ROUTE.COMPANY_DETAILs, element: <CompanyPage /> },
      { path: MY_ROUTE.REGITER, element: <RegisterPage /> },
    ],
  },
  {
    element: <PrivateRoute checkRole='employer' />,
    children: [
      {
        path: '/company',
        element: <CompanyLayout />,
        children: [
          { path: MY_ROUTE.COMPANY_DASHBOARD, element: <CompanyDashboard /> },

          { path: MY_ROUTE.COMPANY, element: <CompanyProfile /> },
          {
            path: MY_ROUTE.COMPANY_JOB_MANAGEMENT,
            element: <ManageJobs />,
          },
          {
            path: MY_ROUTE.COMPANY_CREATE_JOB,
            element: <CreateJob />,
          },
          { path: MY_ROUTE.RECRUITMENT_DETAIL, element: <ApplicationDetail /> },
          { path: MY_ROUTE.RECRUITMENT_PROCESS, element: <ApplicationsPage /> },
        ],
      },
    ],
  },
  {
    element: <PrivateRoute checkRole='candidate' />,
    children: [
      {
        path: '/',
        element: <UserLayout />,
        children: [
          { path: MY_ROUTE.USER_PROFILE, element: <MyCV /> },
          { path: MY_ROUTE.JOB_MANAGEMENT, element: <JobManagement /> },
          { path: MY_ROUTE.MANAGE_FOLLOW, element: <ManageFollowPage /> },
          { path: MY_ROUTE.MY_PAGES, element: <MyPages /> },
        ],
      },
    ],
  },
  {
    element: <PrivateRoute checkRole='admin' />,
    children: [
      {
        path: '/admin',
        element: <AdminLayout />,
        children: [
          // { path: MY_ROUTE.ADMIN, element: <AccountManagementPage /> },
          { path: MY_ROUTE.ADMIN_ACCOUNT_MANAGEMENT, element: <AccountManagementPage /> },
          { path: MY_ROUTE.ADMIN_JOB_MANAGEMENT, element: <JobManagementPage /> },
          { path: MY_ROUTE.ADMIN_COMPANY_PROFILE, element: <AdminCompanyProfile /> },
          { path: MY_ROUTE.ADMIN_CANDIDATE_PROFILE, element: <CandidateProfile /> },
        ],
      },
    ],
  },

  { path: MY_ROUTE.ADMIN_LOGIN, element: <AdminLoginPage /> },

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
