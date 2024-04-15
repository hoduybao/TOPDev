export const MY_ROUTE = {
  HOME: '',
  RECRUITMENT: '/recruitment',
  RECRUITMENT_PROCESS: '/recruitment/:jobId',
  RECRUITMENT_DETAIL: '/recruitment/:jobId/:applicationId',
  ADMIN: '/admin',
  ADMIN_ACCOUNT_MANAGEMENT: '/admin/manage-account',
  ADMIN_LOGIN: '/admin/login',
  JOB: 'jobs/:companyId/:jobId',
  LOGIN: '/login',
  RESET_PASSWORD: '/reset-password',
};

export const DEFAULT_ROUTE = MY_ROUTE.HOME;
export const RECRUITMENT_ROUTE = MY_ROUTE.RECRUITMENT;
export const RECRUITMENT_PROCESS_ROUTE = MY_ROUTE.RECRUITMENT_PROCESS;
export const RECRUITMENT_DETAIL_ROUTE = MY_ROUTE.RECRUITMENT_DETAIL;
export const ADMIN_ROUTE = MY_ROUTE.ADMIN;
