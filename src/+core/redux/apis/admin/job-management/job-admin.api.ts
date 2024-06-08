import { TAG_TYPES } from '@/+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { FilterJobsTypeREQ } from './job-admin.request';
import { JobActionResponse, JobDetailResponse, ListJobsRES } from './job-admin.response';
import { BaseResponse, ListResponseData, transformResponse } from '../response.type';

const jobServiceApi = commonApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.JOB, TAG_TYPES.COMPANY] })
  .injectEndpoints({
    endpoints: (build) => ({
      getListJobs: build.query<ListResponseData<ListJobsRES>, FilterJobsTypeREQ>({
        query: (params) => ({
          url: '/jobs',
          method: 'GET',
          params: { ...params, status: params.status || 'PUBLIC' },
        }),
        transformResponse: transformResponse,
        providesTags: [TAG_TYPES.JOB],
      }),
      getJobDetail: build.query<BaseResponse<JobDetailResponse>, string>({
        query: (id) => ({
          url: `/jobs/${id}`,
          method: 'GET',
        }),
      }),
      approveJobs: build.mutation<JobActionResponse, { ids: string[] }>({
        query: ({ ids }) => ({
          url: '/jobs/update-status',
          method: 'PATCH',
          body: ids.map((id) => {
            return {
              id: id,
              status: 'APPROVED',
            };
          }),
        }),
        invalidatesTags: [TAG_TYPES.JOB],
      }),

      refuseJobs: build.mutation<JobActionResponse, { ids: string[]; reason: string }>({
        query: ({ ids, reason }) => ({
          url: '/jobs/update-status',
          method: 'PATCH',
          body: ids.map((id) => {
            return {
              id: id,
              status: 'REJECTED',
              reason: reason,
            };
          }),
        }),
        invalidatesTags: [TAG_TYPES.JOB],
      }),
    }),
  });

export const {
  useGetListJobsQuery,
  useGetJobDetailQuery,
  useApproveJobsMutation,
  useRefuseJobsMutation,
} = jobServiceApi;
