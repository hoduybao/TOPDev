import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';

const jobApi = commonApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.JOB] }).injectEndpoints({
  endpoints: (build) => ({
    getJobs: build.query<any, any>({
      query: () => ({
        url: '/service/jobs',
        method: 'GET',
      }),
    }),
    getJobById: build.query<any, any>({
      query: (id: string) => ({
        url: `/service/job/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetJobsQuery, useGetJobByIdQuery } = jobApi;
