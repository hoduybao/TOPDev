import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';

const jobApi = commonApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.JOB] }).injectEndpoints({
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
  }),
});

export const { useGetJobsByCompanyIdQuery, useGetDetailJobByIdQuery } = jobApi;
