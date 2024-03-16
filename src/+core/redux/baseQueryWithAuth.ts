import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { FetchBaseQueryArgs } from 'node_modules/@reduxjs/toolkit/dist/query/fetchBaseQuery';

export const baseQueryWithAuth: (
  option: FetchBaseQueryArgs,
) => BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
  (option) => async (args, api, extraOptions) => {
    const result = await fetchBaseQuery(option)(args, api, extraOptions);
    if (result.error && result.error.status === 401) {     
      // localStorage.removeItem('isLoggedIn');
    }
    return result;
  };
