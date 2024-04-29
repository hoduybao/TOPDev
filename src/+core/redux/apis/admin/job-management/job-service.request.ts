import { ADMIN_TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { JobActionResponse, JobListResponse } from './job.response';

const jobApi = commonApi
  .enhanceEndpoints({ addTagTypes: [ADMIN_TAG_TYPES.GET_LIST] })
  .injectEndpoints({
    endpoints: (build) => ({
      getJobs: build.query<JobListResponse, any>({
        query: () => ({
          url: '/jobs',
          method: 'GET',
        }),
        providesTags: [ADMIN_TAG_TYPES.GET_LIST],
      }),
      getJobById: build.query<JobActionResponse, string>({
        query: (id: string) => ({
          url: `/jobs/${id}`,
          method: 'GET',
        }),
      }),

      approveJobs: build.mutation<JobActionResponse, string[]>({
        query: (jobIds: string[]) => ({
          url: '/jobs/approveMany',
          method: 'PATCH',
          body: jobIds,
        }),
        invalidatesTags: [ADMIN_TAG_TYPES.GET_LIST],
      }),

      refuseJobs: build.mutation<JobActionResponse, string[]>({
        query: (jobIds: string[]) => ({
          url: `/jobs/refuseMany`,
          method: 'DELETE',
          body: jobIds,
        }),
        invalidatesTags: [ADMIN_TAG_TYPES.GET_LIST],
      }),
    }),
  });

export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
  useApproveJobsMutation,
  useRefuseJobsMutation,
} = jobApi;
