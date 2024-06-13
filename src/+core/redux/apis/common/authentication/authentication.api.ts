import { TAG_TYPES } from '@/+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';

export type AuthenticationFields = {
  username: string;
  password: string;
};

export type CandidateAuthen = {
  type: string;
  token: string;
};

export type EmployerRegister = {
  username?: string;
  password?: string;
  retypedPassword?: string;
  companyName?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
};

type ReponseLogin = {
  data: {
    access_token: string;
    refresh_token: string;
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
};

type ParseResponseLogin = {
  accessToken: string;
  refreshToken: string;
  userid: string;
  email: string;
  name: string;
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
        transformResponse: (response: ReponseLogin): ParseResponseLogin => {
          return {
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
            userid: response.data.id,
            email: response.data.email,
            name: response?.data?.lastName + ' ' + response?.data?.firstName || '',
          };
        },
      }),
      adminLogin: build.mutation<any, any>({
        query: (values: AuthenticationFields) => ({
          url: `/auth/admin/login`,
          method: 'POST',
          body: values,
        }),
        transformResponse: (response: ReponseLogin): ParseResponseLogin => {
          return {
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
            userid: '', // no need store userid, all needed data is store in token
            email: '', // no need store email
            name: '', // no need store name
          };
        },
      }),
      candidateLogin: build.mutation<any, any>({
        query: (values: CandidateAuthen) => ({
          url: `/auth/candidate/login`,
          method: 'POST',
          body: values,
        }),
        transformResponse: (response: ReponseLogin): ParseResponseLogin => {
          return {
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
            userid: response.data.id,
            email: response.data.email,
            name: response?.data?.lastName + ' ' + response?.data?.firstName || '',
          };
        },
      }),
      employerRegister: build.mutation<any, any>({
        query: (values: EmployerRegister) => ({
          url: `/auth/employer/register`,
          method: 'POST',
          body: values,
        }),
        invalidatesTags: [{ type: TAG_TYPES.AUTHENTICATION }],
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

export const {
  useEmployerLoginMutation,
  useTestAuthorizationQuery,
  useEmployerRegisterMutation,
  useCandidateLoginMutation,
  useAdminLoginMutation,
} = authenticationApi;
