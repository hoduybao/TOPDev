import { Job } from '@/+core/utilities/types/admin.type';
import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';

const jobApi = commonApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.JOB] }).injectEndpoints({
  endpoints: (build) => ({
    getJobs: build.query<any, any>({
      query: () => ({
        url: '/jobs',
        method: 'GET',
      }),
      providesTags: [TAG_TYPES.JOB],
    }),
    getJobById: build.query<any, any>({
      query: (id: string) => ({
        url: `/jobservice/job/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetJobsQuery, useGetJobByIdQuery } = jobApi;
