import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';

const jobApi = commonApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.JOB] }).injectEndpoints({
  endpoints: (build) => ({
    getJobs: build.query<any, any>({
      query: (params: { allType?: boolean }) => ({
        url: '/jobservice/jobs',
        method: 'GET',
        params: params,
      }),
      providesTags: [TAG_TYPES.JOB],
    }),
    getJobById: build.query<any, any>({
      query: (id: string) => ({
        url: `/jobservice/job/${id}`,
        method: 'GET',
      }),
    }),
    createJob: build.mutation<any, any>({
      query: (data) => ({
        url: '/jobservice/create',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [TAG_TYPES.JOB],
    }),
  }),
});

export const { useGetJobsQuery, useGetJobByIdQuery, useCreateJobMutation } = jobApi;
