import { TAG_TYPES } from '@/+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { GetListJobsTypeREQ } from './job-service.request';
import { ListJobsResponse } from './job-service.response';
import { ListResponseData, transformResponse } from './response.type';

const jobServiceApi = commonApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.JOB] }).injectEndpoints({
  endpoints: (build) => ({
    getListJobs: build.query<ListResponseData<ListJobsResponse>, GetListJobsTypeREQ>({
      query: (params) => ({
        url: '/jobs',
        method: 'GET',
        params: params,
      }),
      transformResponse: transformResponse,
      providesTags: [TAG_TYPES.JOB],
    }),
  }),
});

export const { useGetListJobsQuery } = jobServiceApi;
