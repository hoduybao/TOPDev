import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/global/layout/Layout';
import RecruitmentLayout from '../components/global/layout/RecruitmentLayout';
import { HomePage } from '../pages/home/HomePage';
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage';
import MainPage from '../pages/recruitment/MainPage';
import { MY_ROUTE } from './route.constant';

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
  { path: '/*', element: <NotFoundPage /> },
]);
