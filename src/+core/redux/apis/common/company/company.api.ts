import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';

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
      getCompanyProfile: build.query<any, any>({
        query: () => ({
          url: `/jobs/companies/info`,
          method: 'GET',
        }),
      }),
      updateCompanyProfile: build.mutation<any, any>({
        query: (profile: any) => ({
          url: `/jobs/companies/update`,
          method: 'PATCH',
          body: profile,
        }),
      }),
    }),
  });

export const {
  useGetCompanyByIdQuery,
  useGetCompanyProfileQuery,
  useUpdateCompanyProfileMutation,
} = companyApi;
