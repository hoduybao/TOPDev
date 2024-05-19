import { Job } from '@/+core/utilities/types/admin.type';

export type JobListResponse = {
  data: {
    jobs: Job[];
    paging: {
      limit: number;
      page: number;
      total: number;
    };
  };
  message: string;
};

// Get by id, approve, reject
export type JobActionResponse = {
  statusCode: number;
  data: Job;
  message: string;
};

// export type ListResponseData<T> = {
//   data: T[];
//   total: number;
// };

// export const transformResponse = <T>(res: ListResponse<T>): ListResponseData<T> => {
//   return {
//     data: res.data.jobs || [],
//     total: res.data.paging?.total || 0,
//   };
// };
