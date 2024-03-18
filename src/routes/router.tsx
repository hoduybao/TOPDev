import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/global/layout/Layout';
import { HomePage } from '../pages/home/HomePage';
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage';
import { MY_ROUTE } from './route.constant';
import JobPage from '../pages/job/JobPage';
import UserLayout from '../components/global/layout/UserLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: MY_ROUTE.HOME, element: <HomePage /> }],
  },
  {
    path: '/',
    element: <UserLayout />,
    children: [{ path: MY_ROUTE.JOB, element: <JobPage /> }],
  },
  { path: '/*', element: <NotFoundPage /> },
]);
