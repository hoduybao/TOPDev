import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchBaseQueryArgs } from 'node_modules/@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { getLocalRefreshToken } from '../services/local.service';
import { logOut, setCredentials } from './auth/authSlice';

interface RefreshResponse {
  access_token: string;
  refresh_token: string;
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
}

export const baseQueryWithAuth: (
  option: FetchBaseQueryArgs,
) => BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
  (option) => async (args, api, extraOptions) => {
    const result = await fetchBaseQuery(option)(args, api, extraOptions);

    if (
      result.error &&
      (result.error.status === 401 ||
        result.error.status === 403 ||
        result.error.status === 'PARSING_ERROR')
    ) {
      console.log('Forbiden/Unauthorize, fetch another token');
      const response = await fetchBaseQuery(option)(
        {
          url: '/auth/others/refresh',
          method: 'POST',
          body: { refreshToken: getLocalRefreshToken() },
        },
        api,
        extraOptions,
      );

      if (response && response.data) {
        console.log('Fetch token success, retry the request');
        const { access_token, refresh_token, email, firstName, lastName } =
          response.data as RefreshResponse;
        api.dispatch(
          setCredentials({
            accessToken: access_token,
            refreshToken: refresh_token,
            isLoggin: true,
            email: email,
            name: firstName + ' ' + lastName,
          }),
        );
        const newResult = await fetchBaseQuery(option)(args, api, extraOptions);
        return newResult;
      } else {
        api.dispatch(logOut());
      }
    }
    return result;
  };
