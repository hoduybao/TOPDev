import { ApplicationType, JobType } from '@/+core/utilities/types/recruitment.type';
import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { ApplicationDetailTypeRES } from './recruitment.response';
import { BaseResponse } from './response.type';

const jobApi = commonApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.JOB, 'updateApplicationProcess'] })
  .injectEndpoints({
    endpoints: (build) => ({
      // Get all jobs by company ID
      getJobsByCompanyId: build.query<any, any>({
        query: (id: string) => ({
          url: `/jobs/companies/${id}/jobs`,
          method: 'GET',
        }),
      }),
      // Get detail job by ID
      getDetailJobById: build.query<any, any>({
        query: (id: string) => ({
          url: `/jobs/${id}`,
          method: 'GET',
        }),
      }),
      // Create new job
      createJob: build.mutation<any, any>({
        query: (newJob: JobType) => ({
          url: `/jobs`,
          method: 'POST',
          body: newJob,
        }),
      }),
      // Get all aplications by job ID
      getApplicationsByJobId: build.query<any, any>({
        query: (id: string) => ({
          url: `/applications/list-apply/${id}`,
          method: 'GET',
        }),
        providesTags: ['updateApplicationProcess'],
      }),
      // Update application process
      updateApplicationProcess: build.mutation<any, any>({
        query: (id: string) => ({
          url: `/applications/${id}`,
          method: 'PATCH',
        }),
        invalidatesTags: ['updateApplicationProcess'],
      }),
      // Update application process
      createApplicationRecruitment: build.mutation<any, any>({
        query: (newApp: ApplicationType) => ({
          url: `/applications`,
          method: 'POST',
          body: newApp,
        }),
      }),
      // Update job by job Id
      updateJob: build.mutation<any, any>({
        query: (data) => ({
          url: `/jobs/${data?.id}`,
          method: 'PATCH',
          body: data.job,
        }),
      }),
      getApplicationDetails: build.query<BaseResponse<ApplicationDetailTypeRES>, string>({
        query: (id) => ({
          url: `/applications/${id}`,
          method: 'GET',
        }),
        providesTags: ['updateApplicationProcess'],
      }),
    }),
  });

export const {
  useGetJobsByCompanyIdQuery,
  useGetDetailJobByIdQuery,
  useCreateJobMutation,
  useGetApplicationsByJobIdQuery,
  useUpdateApplicationProcessMutation,
  useCreateApplicationRecruitmentMutation,
  useUpdateJobMutation,
  useGetApplicationDetailsQuery,
} = jobApi;
