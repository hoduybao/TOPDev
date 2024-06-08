import { TAG_TYPES } from '@/+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';

const homeApi = commonApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.HOME] }).injectEndpoints({
  endpoints: (build) => ({
    getListCompany: build.query<any, any>({
      query: (params) => ({
        url: 'link-api',
        method: 'GET',
        params: params,
      }),
    }),
  }),
});

export const { useGetListCompanyQuery } = homeApi;
