export const MY_ROUTE = {
  HOME: '',
  RECRUITMENT: '/recruitment',
  RECRUITMENT_PROCESS: '/recruitment/process/:jobId',
  RECRUITMENT_DETAIL: '/recruitment/process/:jobId/:id',
  ADMIN: '/admin',
  JOB: 'jobs/:companyId/:jobId',
};

export const DEFAULT_ROUTE = MY_ROUTE.HOME;
export const RECRUITMENT_ROUTE = MY_ROUTE.RECRUITMENT;
export const RECRUITMENT_PROCESS_ROUTE = MY_ROUTE.RECRUITMENT_PROCESS;
export const RECRUITMENT_DETAIL_ROUTE = MY_ROUTE.RECRUITMENT_DETAIL;
export const ADMIN_ROUTE = MY_ROUTE.ADMIN;
