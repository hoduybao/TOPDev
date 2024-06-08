import MyCV from '@/pages/UserProfile/MyCV';
import AccountManagementPage from '@/pages/admin/AccountManagementPage';
import JobManagementPage from '@/pages/admin/JobManagementPage';
import AdminLoginPage from '@/pages/admin/LoginPage';
import { HomePage } from '@/pages/home/HomePage';
import { ITJobs } from '@/pages/it-jobs/IT-Jobs';
import JobManagement from '@/pages/job-management/JobManagement';
import ManageFollowPage from '@/pages/manage-follow/ManageFollowPage';
import { CompanyProfile } from '@/pages/my-company/pages/company-profile/page';
import { CreateJob } from '@/pages/my-company/pages/manage-jobs/create/page';
import { ManageJobs } from '@/pages/my-company/pages/manage-jobs/page';
import { MyPages } from '@/pages/my-pages/MyPages';
import { createBrowserRouter, redirect } from 'react-router-dom';
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
import AdminCompanyProfile from '@/pages/admin/CompanyProfile';
import ApplicationsPage from '@/pages/manage-application/ApplicationsPage';
import ApplicationDetail from '@/pages/application-detail/ApplicationDetail';
import CandidateProfile from '@/pages/admin/CandidateProfile';
import RegisterPage from '@/pages/register/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/company',
    element: <CompanyLayout />,
    children: [
      { path: MY_ROUTE.COMPANY, element: <CompanyProfile /> },
      {
        path: MY_ROUTE.COMPANY_JOB_MANAGEMENT,
        element: <ManageJobs />,
      },
      { path: MY_ROUTE.COMPANY_CREATE_JOB, element: <CreateJob /> },
    ],
  },
  // {
  //   path: '/recruitment/profile',
  //   element: <CompanyLayout />,
  //   children: [{ path: MY_ROUTE.RECRUITMENT_PROFILE, element: <ProfilePage /> }],
  // },
  // {
  //   path: '/recruitment/:jobId',
  //   element: <RecruitmentProcessLayout />,
  //   children: [
  //     { path: MY_ROUTE.RECRUITMENT_PROCESS, element: <ProcessPage /> },
  //     { path: MY_ROUTE.RECRUITMENT_DETAIL, element: <DetailPage /> },
  //   ],
  // },
  {
    path: '/recruitment',
    element: <CompanyLayout />,
    children: [
      { path: MY_ROUTE.RECRUITMENT_PROCESS, element: <ApplicationsPage /> },
      { path: MY_ROUTE.RECRUITMENT_DETAIL, element: <ApplicationDetail /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        loader: async () => redirect(MY_ROUTE.ADMIN_ACCOUNT_MANAGEMENT),
      },
      { path: MY_ROUTE.ADMIN_LOGIN, element: <AdminLoginPage /> },
      { path: MY_ROUTE.ADMIN_ACCOUNT_MANAGEMENT, element: <AccountManagementPage /> },
      { path: MY_ROUTE.ADMIN_JOB_MANAGEMENT, element: <JobManagementPage /> },
      { path: MY_ROUTE.ADMIN_COMPANY_PROFILE, element: <AdminCompanyProfile /> },
      { path: MY_ROUTE.ADMIN_CANDIDATE_PROFILE, element: <CandidateProfile /> },
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
      { path: MY_ROUTE.COMPANY_DETAILs, element: <CompanyPage /> },
      { path: MY_ROUTE.MANAGE_FOLLOW, element: <ManageFollowPage /> },
      { path: MY_ROUTE.IT_JOBS, element: <ITJobs /> },
      { path: MY_ROUTE.MY_PAGES, element: <MyPages /> },
      { path: MY_ROUTE.REGITER, element: <RegisterPage /> },
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
