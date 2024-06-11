import { ListResponseData, transformResponseNoPaging } from '@/+core/redux/response.type';
import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { GetCompanyREQ } from './company.request';
import { CompanyRES } from './company.response';

const companyApi = commonApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.COMPANY] })
  .injectEndpoints({
    endpoints: (build) => ({
      getCompanyById: build.query<any, any>({
        query: (id: string) => ({
          url: `/jobs/companies/${id}`,
          method: 'GET',
        }),
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

export const { useGetCompanyByIdQuery, useGetCompaniesQuery } = companyApi;
