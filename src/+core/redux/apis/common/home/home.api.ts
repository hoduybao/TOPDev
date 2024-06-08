import { TAG_TYPES } from '@/+core/constants/api.tagTypes';
import { BaseResponse } from '../../../response.type';
import { commonApi } from '../../common.api';
import { HomeRES } from './home.response';

const homeApi = commonApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.HOME] }).injectEndpoints({
  endpoints: (build) => ({
    getCompaniesHomePage: build.query<BaseResponse<HomeRES>, any>({
      query: () => ({
        url: '/jobs/companies/homepage',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCompaniesHomePageQuery } = homeApi;
