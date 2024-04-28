export type ListResponse<T> = {
  data: {
    jobs: T[];
    paging: {
      limit: number;
      page: number;
      total: number;
    };
  };
  message: string;
};

export type ListResponseData<T> = {
  data: T[];
  total: number;
};

export const transformResponse = <T>(res: ListResponse<T>): ListResponseData<T> => {
  return {
    data: res.data.jobs || [],
    total: res.data.paging?.total || 0,
  };
};
