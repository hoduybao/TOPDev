import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { JobResponse } from './job.response';
import { CustomJobResponse, transformResponse } from './job.types';

export type Paging = {
  limit: number;
  page: number;
};

const jobApi = commonApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.JOB] }).injectEndpoints({
  endpoints: (build) => ({
    getJobs: build.query<any, Paging>({
      query: (params: Paging) => ({
        url: '/jobs',
        method: 'GET',
        params: params,
      }),
      // transformResponse: (response: any) => {
      //   return response?.data;
      // },
      providesTags: [TAG_TYPES.JOB],
    }),
    getJobById: build.query<CustomJobResponse<JobResponse>, any>({
      query: (id: string) => ({
        url: `/jobs/${id}`,
        method: 'GET',
      }),
      transformResponse: transformResponse,
    }),
    followJob: build.mutation<any, any>({
      query: (id: string) => ({
        url: `/jobs/${id}/followed`,
        method: 'PATCH',
      }),
      invalidatesTags: [TAG_TYPES.JOB],
    }),
    unfollowJob: build.mutation<any, any>({
      query: (id: string) => ({
        url: `/jobs/${id}/unfollowed`,
        method: 'PATCH',
      }),
      invalidatesTags: [TAG_TYPES.JOB],
    }),
  }),
});

export const { useGetJobsQuery, useGetJobByIdQuery, useFollowJobMutation, useUnfollowJobMutation } =
  jobApi;
