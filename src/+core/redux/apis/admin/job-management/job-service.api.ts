import { TAG_TYPES } from '@/+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { JobActionResponse, JobListResponse } from './job.response';

const jobApi = commonApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.JOB] }).injectEndpoints({
  endpoints: (build) => ({
    getJobs: build.query<JobListResponse, any>({
      query: () => ({
        url: '/jobs',
        method: 'GET',
      }),
      providesTags: [TAG_TYPES.JOB],
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
      invalidatesTags: [TAG_TYPES.JOB],
    }),

    refuseJobs: build.mutation<JobActionResponse, string[]>({
      query: (jobIds: string[]) => ({
        url: `/jobs/refuseMany`,
        method: 'DELETE',
        body: jobIds,
      }),
      invalidatesTags: [TAG_TYPES.JOB],
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
  useApproveJobsMutation,
  useRefuseJobsMutation,
} = jobApi;