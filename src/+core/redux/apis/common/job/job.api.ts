import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { JobResponse } from './job.response';
import { CustomJobResponse } from './job.types';

const jobApi = commonApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.JOB] }).injectEndpoints({
  endpoints: (build) => ({
    getJobs: build.query<any, any>({
      query: () => ({
        url: '/jobs',
        method: 'GET',
      }),
      providesTags: [TAG_TYPES.JOB],
    }),
    getJobById: build.query<CustomJobResponse<JobResponse>, any>({
      query: (id: string) => ({
        url: `/jobs/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetJobsQuery, useGetJobByIdQuery } = jobApi;
