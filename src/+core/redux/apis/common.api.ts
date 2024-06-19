import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from '../baseQueryWithAuth';

export const commonApi = createApi({
  reducerPath: 'CommonApi',
  keepUnusedDataFor: 1,
  baseQuery: baseQueryWithAuth({
    baseUrl: `http://orichalcos.me`,
    // baseUrl: `http://20.191.157.139`,
    async prepareHeaders(headers) {
      // if have token, set Authorization header
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
