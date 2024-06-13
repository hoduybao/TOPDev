import { ListResponseData, transformResponse } from '@/+core/redux/response.type';
import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
import { MyApplicationRES } from './application.response';
// import { CustomApplicationResponse } from './response.type';

export type ApplicationFields = {
  // jobId: string;
  fullName: string;
  email: string;
  phone: string;
  cvUrl: string;
  description: string;
};

const applicationApi = commonApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.APPLICATION] })
  .injectEndpoints({
    endpoints: (build) => ({
      createApplication: build.mutation<any, any>({
        query: (values: ApplicationFields) => ({
          url: `/applications`,
          method: 'POST',
          body: values,
        }),
      }),
      updateStatus: build.mutation<any, any>({
        query: ({ id, status }: { id: string; status: string }) => ({
          url: `/applications/${id}`,
          method: 'PATCH',
          body: { status },
        }),
        invalidatesTags: [{ type: TAG_TYPES.APPLICATION }],
      }),
      getApplication: build.query<any, any>({
        query: (id: string) => ({
          url: `/applications/${id}`,
          method: 'GET',
        }),
        transformResponse: (response: any) => {
          return response.data;
        },
      }),
      getApplicationsByCompanyId: build.query<any, any>({
        query: ({
          id,
          page = '1',
          limit = '10',
          status,
        }: {
          id: string;
          page: string;
          limit: string;
          status: string;
        }) => ({
          url: `/applications/list-apply/${id}?page=${page}&limit=${limit}&status=${
            status !== 'ALL' ? status : ''
          }`,
          method: 'GET',
        }),
        transformResponse: (response: any) => {
          return response.data;
        },
      }),
      getMyApplications: build.query<
        ListResponseData<MyApplicationRES>,
        { page?: number; limit?: number }
      >({
        query: (params) => ({
          url: `applications/user/list`,
          method: 'GET',
          params: {
            page: params.page,
            limit: params.limit,
          },
        }),
        transformResponse: transformResponse,
      }),
    }),
  });

export const {
  useCreateApplicationMutation,
  useGetApplicationQuery,
  useGetApplicationsByCompanyIdQuery,
  useUpdateStatusMutation,
  useGetMyApplicationsQuery,
} = applicationApi;
