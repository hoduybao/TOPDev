import { TAG_TYPES } from '../../../../../+core/constants/api.tagTypes';
import { commonApi } from '../../common.api';

const companyApi = commonApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.COMPANY] })
  .injectEndpoints({
    endpoints: (build) => ({
      getCompanyById: build.query<any, any>({
        query: (id: string) => ({
          url: `/company/${id}`,
          method: 'GET',
        }),
      }),
    }),
  });

export const { useGetCompanyByIdQuery } = companyApi;
