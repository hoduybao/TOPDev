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
    }),
  });

export const {
  useGetCompanyByIdQuery,
  useGetCompanyProfileQuery,
  useUpdateCompanyProfileMutation,
} = companyApi;
