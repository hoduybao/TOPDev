import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';

export type AuthenticationFields = {
  username: string;
  password: string;
};

const authenticationApi = commonApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.AUTHENTICATION] })
  .injectEndpoints({
    endpoints: (build) => ({
      employerLogin: build.mutation<any, any>({
        query: (values: AuthenticationFields) => ({
          url: `/auth/employer/login`,
          method: 'POST',
          body: values,
        }),
      }),
      testAuthorization: build.query<any, void>({
        // Change type here
        query: () => ({
          // Allow params to be optional
          url: `/auth/employer`,
          method: 'GET',
        }),
      }),
    }),
  });

export const { useEmployerLoginMutation, useTestAuthorizationQuery } = authenticationApi;
