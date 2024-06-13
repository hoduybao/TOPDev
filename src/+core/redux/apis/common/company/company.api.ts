import { ListResponseData, transformResponseNoPaging } from '@/+core/redux/response.type';
import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { GetCompanyREQ } from './company.request';
import { CompanyRES } from './company.response';
import { CreateCompanyREQ } from '../../admin/company-profile/company-profile.request';

export interface CompanyDetail extends CreateCompanyREQ {}

const companyApi = commonApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.COMPANY] })
  .injectEndpoints({
    endpoints: (build) => ({
      getCompanyById: build.query<any, any>({
        query: (id: string) => ({
          url: `/jobs/companies/${id}`,
          method: 'GET',
        }),
        transformResponse: (response: { data: CompanyDetail }) => response?.data,
      }),
      getCompanyProfile: build.query<any, void>({
        query: () => ({
          url: `/jobs/companies/info`,
          method: 'GET',
        }),
        providesTags: [TAG_TYPES.COMPANY],
      }),
      updateCompanyProfile: build.mutation<any, any>({
        query: (profile: any) => ({
          url: `/jobs/companies/update`,
          method: 'PATCH',
          body: profile,
        }),
        invalidatesTags: [TAG_TYPES.COMPANY],
      }),
      getCompanies: build.query<ListResponseData<CompanyRES>, GetCompanyREQ>({
        query: (params) => ({
          url: `/jobs/companies/listByType`,
          method: 'GET',
          params: params,
        }),
        transformResponse: transformResponseNoPaging,
      }),
    }),
  });

export const {
  useGetCompanyByIdQuery,
  useGetCompaniesQuery,
  useGetCompanyProfileQuery,
  useUpdateCompanyProfileMutation,
} = companyApi;
