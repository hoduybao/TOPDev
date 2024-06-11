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
      getApplication: build.query<any, any>({
        query: (id: string) => ({
          url: `/applications/${id}`,
          method: 'GET',
        }),
      }),
      getApplicationsByCompanyId: build.query<any, any>({
        query: (id: string) => ({
          url: `/applications/list-apply/${id}`,
          method: 'GET',
        }),
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
  useGetMyApplicationsQuery,
} = applicationApi;
