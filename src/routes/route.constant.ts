export const MY_ROUTE = {
  //Company
  COMPANY_DASHBOARD: '/company',
  COMPANY: '/company/profile',
  COMPANY_JOB_MANAGEMENT: '/company/manage-jobs',
  COMPANY_CREATE_JOB: '/company/manage-jobs/:id',

  // // RecruitmentLayout
  // RECRUITMENT: '/recruitment',
  // RECRUITMENT_DETAIL_JOB: '/recruitment/:jobId',

  // //RecruitmentProcessLayout
  RECRUITMENT_PROCESS: '/company/manage-jobs/:jobId/applications',
  RECRUITMENT_DETAIL: '/company/manage-jobs/:jobId/application/:applicationId',
  // RECRUITMENT_PROFILE: '/recruitment/profile',

  // Admin
  ADMIN: '/admin',
  ADMIN_ACCOUNT_MANAGEMENT: '/admin',
  ADMIN_JOB_MANAGEMENT: '/admin/manage-job',
  ADMIN_LOGIN: '/admin/login',
  ADMIN_COMPANY_PROFILE: '/admin/company/:companyId',
  ADMIN_CANDIDATE_PROFILE: '/admin/candidate/:candidateId',

  // LoginLayout
  LOGIN: '/login',
  RESET_PASSWORD: '/reset-password',

  // UserLayout
  USER_PROFILE: '/user/profile',
  JOB_MANAGEMENT: '/job-management',
  HOME: '',
  JOB: 'jobs/:jobId',
  COMPANIES: 'companies',
  COMPANY_DETAILs: 'companies/:companyId',
  IT_JOBS: '/it-jobs',
  MANAGE_FOLLOW: '/manage-follow',
  MY_PAGES: '/users',
  REGITER: '/register',
};

// export const DEFAULT_ROUTE = MY_ROUTE.HOME;
// export const RECRUITMENT_ROUTE = MY_ROUTE.RECRUITMENT;
// export const RECRUITMENT_DETAIL_JOB_ROUTE = MY_ROUTE.RECRUITMENT_DETAIL_JOB;
// export const RECRUITMENT_PROCESS_ROUTE = MY_ROUTE.RECRUITMENT_PROCESS;
// export const RECRUITMENT_DETAIL_ROUTE = MY_ROUTE.RECRUITMENT_DETAIL;
// export const ADMIN_ROUTE = MY_ROUTE.ADMIN;
