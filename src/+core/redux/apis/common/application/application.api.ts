import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';

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
    }),
  });

export const { useCreateApplicationMutation } = applicationApi;
