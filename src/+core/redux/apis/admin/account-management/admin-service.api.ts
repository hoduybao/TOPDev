import { TAG_TYPES } from '@/+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { HRAccount } from '@/+core/utilities/types/admin.type';

type ReponseHRAccounts = {
  data: {
    paging: {
      limit: string;
      page: string;
      total: string;
    };
    data: HRAccount[] | [];
  };
};

type FormatedHRAccounts = {
  accounts: HRAccount[];
  total: number;
  page: number;
  limit: number;
};

const adminApi = commonApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.HR_ACCOUNTS] })
  .injectEndpoints({
    endpoints: (build) => ({
      getHRAccounts: build.query<any, any>({
        query: ({ page = 1, limit = 10 }: { page: number; limit: number }) => ({
          url: `/auth/admin/accounts/hr?page=${page}&limit=${limit}`,
          method: 'GET',
        }),
        transformResponse: (response: ReponseHRAccounts): FormatedHRAccounts => {
          console.log('response>>', response);
          return {
            accounts: response.data.data,
            total: Number(response.data.paging.total),
            page: Number(response.data.paging.page),
            limit: Number(response.data.paging.limit),
          };
        },
        providesTags: [TAG_TYPES.HR_ACCOUNTS],
      }),
      updateHRAccounts: build.mutation<any, any>({
        query: ({ hrIds, status }: { hrIds: string[]; status: number }) => ({
          url: '/auth/admin/accounts/hr/status',
          method: 'POST',
          body: { hrIds, status },
        }),
        transformResponse: (response: any): any => {
          return response.data;
        },
        invalidatesTags: [TAG_TYPES.HR_ACCOUNTS],
      }),
    }),
  });

export const { useGetHRAccountsQuery, useUpdateHRAccountsMutation } = adminApi;
