import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from '../baseQueryWithAuth';

export const commonApi = createApi({
  reducerPath: 'CommonApi',
  keepUnusedDataFor: 10,
  baseQuery: baseQueryWithAuth({
    baseUrl: import.meta.env.VITE_API_URL as string,
    async prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints: () => ({}),
});
