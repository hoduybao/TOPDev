export const MY_ROUTE = {
  HOME: '',
  IT_JOBS: '/it-jobs',
  RECRUITMENT: '/recruitment',
  RECRUITMENT_DETAIL_JOB: '/recruitment/:jobId',
  RECRUITMENT_PROCESS: '/recruitment/:jobId/applications',
  RECRUITMENT_DETAIL: '/recruitment/:jobId/application/:applicationId',
  ADMIN: '/admin',
  ADMIN_ACCOUNT_MANAGEMENT: '/admin/manage-account',
  ADMIN_JOB_MANAGEMENT: '/admin/manage-job',
  ADMIN_LOGIN: '/admin/login',
  JOB: 'jobs/:companyId/:jobId',
  COMPANY: 'companies/:companyId',
  COMPANIES: 'companies',
  LOGIN: '/login',
  RESET_PASSWORD: '/reset-password',
};

export const DEFAULT_ROUTE = MY_ROUTE.HOME;
export const RECRUITMENT_ROUTE = MY_ROUTE.RECRUITMENT;
export const RECRUITMENT_DETAIL_JOB_ROUTE = MY_ROUTE.RECRUITMENT_DETAIL_JOB;
export const RECRUITMENT_PROCESS_ROUTE = MY_ROUTE.RECRUITMENT_PROCESS;
export const RECRUITMENT_DETAIL_ROUTE = MY_ROUTE.RECRUITMENT_DETAIL;
export const ADMIN_ROUTE = MY_ROUTE.ADMIN;
