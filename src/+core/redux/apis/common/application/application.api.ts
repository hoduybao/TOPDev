import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';
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
        transformResponse: (response: any) => {
          return response.data;
        },
      }),
      getApplicationsByCompanyId: build.query<any, any>({
        query: (id: string) => ({
          url: `/applications/list-apply/${id}`,
          method: 'GET',
        }),
      }),
    }),
  });

export const {
  useCreateApplicationMutation,
  useGetApplicationQuery,
  useGetApplicationsByCompanyIdQuery,
} = applicationApi;
