import { TAG_TYPES } from '@/+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { HRAccount } from '@/+core/utilities/types/admin.type';

type ReponseHRAccounts = {
  data: HRAccount[] | [];
};

const adminApi = commonApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.HR_ACCOUNTS] })
  .injectEndpoints({
    endpoints: (build) => ({
      getHRAccounts: build.query<any, void>({
        query: () => ({
          url: '/auth/admin/accounts/hr',
          method: 'GET',
        }),
        transformResponse: (response: ReponseHRAccounts): HRAccount[] => {
          return response.data;
        },
        providesTags: [TAG_TYPES.HR_ACCOUNTS],
      }),
      activeHRAccounts: build.mutation<any, any>({
        query: (hrIds: string[]) => ({
          url: '/auth/admin/accounts/hr/status/active',
          method: 'POST',
          body: hrIds,
        }),
        transformResponse: (response: any): any => {
          return response.data;
        },
        invalidatesTags: [TAG_TYPES.HR_ACCOUNTS],
      }),
    }),
  });

export const { useGetHRAccountsQuery, useActiveHRAccountsMutation } = adminApi;
