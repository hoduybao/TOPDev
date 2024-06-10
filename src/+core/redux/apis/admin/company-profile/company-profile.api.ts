import { TAG_TYPES } from '@/+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { BaseResponse, ListResponseData, transformResponse } from './response.type';
import {
  CompanyActionResponse,
  CompanyDetailResponse,
  ListCompanyRES,
} from './company-profile.response';
import { FilterCompanyTypeREQ } from './company-profile.request';
const companyServiceApi = commonApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.HR_ACCOUNTS, TAG_TYPES.COMPANY] })
  .injectEndpoints({
    endpoints: (build) => ({
      getListCompany: build.query<ListResponseData<ListCompanyRES>, FilterCompanyTypeREQ>({
        query: (params) => ({
          url: '/jobs/companies/filter',
          method: 'GET',
          params: { ...params },
        }),
        transformResponse: transformResponse,
        providesTags: [TAG_TYPES.HR_ACCOUNTS],
      }),
      getCompanyDetail: build.query<BaseResponse<CompanyDetailResponse>, string>({
        query: (id) => ({
          url: `/jobs/companies/${id}`,
          method: 'GET',
        }),
        providesTags: [TAG_TYPES.HR_ACCOUNTS],
      }),
      approveCompanies: build.mutation<CompanyActionResponse, { ids: string[] }>({
        query: ({ ids }) => ({
          url: '/jobs/companies/update-status',
          method: 'PATCH',
          body: ids.map((id) => {
            return {
              id: id,
              status: 1,
            };
          }),
        }),
        invalidatesTags: [TAG_TYPES.HR_ACCOUNTS],
      }),

      refuseCompanies: build.mutation<CompanyActionResponse, { ids: string[]; reason: string }>({
        query: ({ ids, reason }) => ({
          url: '/jobs/companies/update-status',
          method: 'PATCH',
          body: ids.map((id) => {
            return {
              id: id,
              status: -1,
              reason: reason,
            };
          }),
        }),
        invalidatesTags: [TAG_TYPES.HR_ACCOUNTS],
      }),
    }),
  });

export const {
  useGetListCompanyQuery,
  useGetCompanyDetailQuery,
  useApproveCompaniesMutation,
  useRefuseCompaniesMutation,
} = companyServiceApi;
