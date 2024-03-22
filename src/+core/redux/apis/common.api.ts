import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from '../baseQueryWithAuth';

export const commonApi = createApi({
  reducerPath: 'CommonApi',
  keepUnusedDataFor: 10,
  baseQuery: baseQueryWithAuth({
    baseUrl: `http://localhost:5000`,
    async prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints: () => ({}),
});
