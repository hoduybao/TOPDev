import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  intro: string;
  cv: File;
  cvUrl: string;
  jobId: string;
};

const applicationApi = commonApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.APPLICATION] })
  .injectEndpoints({
    endpoints: (build) => ({
      createApplication: build.mutation<any, any>({
        query: (values: FormValues) => ({
          url: `/applicationservice/create`,
          method: 'POST',
          body: values,
        }),
      }),
    }),
  });

export const { useCreateApplicationMutation } = applicationApi;
