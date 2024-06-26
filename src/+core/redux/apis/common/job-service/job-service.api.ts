import { TAG_TYPES } from '@/+core/constants/api.tagTypes';
import { BaseResponse, ListResponseData, transformResponse } from '../../../response.type';
import { commonApi } from '../../common.api';
import {
  CreateJobREQ,
  FilterCompanyTypeREQ,
  FilterJobsTypeREQ,
  FilterPostCompanyTypeREQ,
} from './job-service.request';
import { JobDetailResponse, ListCompanyRES, ListJobsRES } from './job-service.response';

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
      getListCompanies: build.query<ListResponseData<ListCompanyRES>, FilterCompanyTypeREQ>({
        query: (params) => ({
          url: '/jobs/companies/filter',
          method: 'GET',
          params: params,
        }),
        transformResponse: transformResponse,
        providesTags: [TAG_TYPES.COMPANY],
      }),
      createJob: build.mutation<any, CreateJobREQ>({
        query: (data) => ({
          url: '/jobs',
          method: 'POST',
          body: data,
        }),
        invalidatesTags: [TAG_TYPES.JOB],
      }),
      updateJob: build.mutation<any, { id: string; body: CreateJobREQ }>({
        query: (data) => ({
          url: `/jobs/${data.id}`,
          method: 'PATCH',
          body: data.body,
        }),
        invalidatesTags: [TAG_TYPES.JOB],
      }),
      getJobsByCompanyId: build.query<ListResponseData<ListJobsRES>, FilterPostCompanyTypeREQ>({
        query: (params) => ({
          url: `/jobs/companies/jobs`,
          method: 'GET',
          params: {
            ...params,
            status: !params.status || params.status === 'ALL' ? undefined : params.status,
          },
        }),
        transformResponse: transformResponse,
        providesTags: [TAG_TYPES.JOB],
      }),
      getJobsByCompanyIdPublic: build.query<ListResponseData<ListJobsRES>, any>({
        query: ({ page = '1', id, limit = '10' }: { page: string; limit: string; id: string }) => ({
          url: `/jobs/companies/${id}/jobs?page=${page}&limit=${limit}&status=PUBLIC`,
          method: 'GET',
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
      updateJobStatus: build.mutation<
        BaseResponse<JobDetailResponse>,
        {
          id: string;
          status: string;
        }
      >({
        query: (body) => ({
          url: `/jobs/update-status`,
          method: 'PATCH',
          body: {
            id: body.id,
            status: body.status,
          },
        }),
      }),
    }),
  });

export const {
  useGetListJobsQuery,
  useGetJobsByCompanyIdQuery,
  useGetListCompaniesQuery,
  useCreateJobMutation,
  useGetJobDetailQuery,
  useUpdateJobMutation,
  useGetJobsByCompanyIdPublicQuery,
  useUpdateJobStatusMutation,
} = jobServiceApi;
