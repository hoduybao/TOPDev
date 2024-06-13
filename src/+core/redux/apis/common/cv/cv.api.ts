import { TAG_TYPES } from '@/+core/constants/api.tagTypes';
import { BaseResponse } from '../../../response.type';
import { commonApi } from '../../common.api';
import { CandidateInfoRES } from './cv.response';

const cvApi = commonApi.enhanceEndpoints({ addTagTypes: [TAG_TYPES.CV] }).injectEndpoints({
  endpoints: (build) => ({
    getCandidateInfor: build.query<BaseResponse<CandidateInfoRES>, any>({
      query: () => ({
        url: '/auth/candidate/profile',
        method: 'GET',
      }),
      providesTags: [TAG_TYPES.CV],
    }),
    uploadCV: build.mutation<
      any,
      {
        name: string;
        link: string;
      }
    >({
      query: (body) => ({
        url: '/auth/candidate/upload-cv',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [TAG_TYPES.CV],
    }),
  }),
});

export const { useGetCandidateInforQuery, useUploadCVMutation } = cvApi;
