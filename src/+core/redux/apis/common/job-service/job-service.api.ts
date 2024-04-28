import { TAG_TYPES } from '@/+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { FilterCompanyTypeREQ, FilterJobsTypeREQ } from './job-service.request';
import { ListCompanyRES, ListJobsRES } from './job-service.response';
import {
  ListResponseData,
  transformCompaniesResponse,
  transformJobsResponse,
} from './response.type';

const jobServiceApi = commonApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.JOB, TAG_TYPES.COMPANY] })
  .injectEndpoints({
    endpoints: (build) => ({
      getListJobs: build.query<ListResponseData<ListJobsRES>, FilterJobsTypeREQ>({
        query: (params) => ({
          url: '/jobs',
          method: 'GET',
          params: params,
        }),
        transformResponse: transformJobsResponse,
        providesTags: [TAG_TYPES.JOB],
      }),
      getListCompanies: build.query<ListResponseData<ListCompanyRES>, FilterCompanyTypeREQ>({
        query: (params) => ({
          url: '/jobs/companies/filter',
          method: 'GET',
          params: params,
        }),
        transformResponse: transformCompaniesResponse,
        providesTags: [TAG_TYPES.COMPANY],
      }),
    }),
  });

export const { useGetListJobsQuery, useGetListCompaniesQuery } = jobServiceApi;
