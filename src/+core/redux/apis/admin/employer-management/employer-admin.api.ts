import { TAG_TYPES } from '@/+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { BaseResponse, ListResponseData, transformResponse } from '../response.type';
import {
  EmployerDetailResponse,
  EmployerActionResponse,
  ListEmployersRES,
} from './employer-admin.response';
import { FilterEmployersTypeREQ } from './employer-admin.request';

const jobServiceApi = commonApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.EMPLOYER_ACCOUNT, TAG_TYPES.COMPANY] })
  .injectEndpoints({
    endpoints: (build) => ({
      getListEmployers: build.query<ListResponseData<ListEmployersRES>, FilterEmployersTypeREQ>({
        query: (params) => ({
          url: '/users/admin/employers/condition/',
          method: 'GET',
          params: { ...params, status: params.status },
        }),
        transformResponse: transformResponse,
        providesTags: [TAG_TYPES.EMPLOYER_ACCOUNT],
      }),
      getEmployerDetail: build.query<BaseResponse<EmployerDetailResponse>, string>({
        query: (id) => ({
          url: `/jobs/${id}`,
          method: 'GET',
        }),
      }),
      approveEmployers: build.mutation<EmployerActionResponse, { ids: string[] }>({
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
        invalidatesTags: [TAG_TYPES.EMPLOYER_ACCOUNT],
      }),

      refuseEmployers: build.mutation<EmployerActionResponse, { ids: string[]; reason: string }>({
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
        invalidatesTags: [TAG_TYPES.EMPLOYER_ACCOUNT],
      }),
    }),
  });

export const {
  useGetListEmployersQuery,
  useGetEmployerDetailQuery,
  useApproveEmployersMutation,
  useRefuseEmployersMutation,
} = jobServiceApi;
