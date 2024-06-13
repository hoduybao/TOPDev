export type ListResponse<T> = {
  data: {
    data: T[];
    paging: {
      limit: number;
      page: number;
      total: number;
    };
  };
  message: string;
};

export type ListResponseNoPaging<T> = {
  data: T[];
  message: string;
};

export type BaseResponse<T> = {
  data: T;
  message: string;
};

export type ListResponseData<T> = {
  data: T[];
  total: number;
};

export const transformResponse = <T>(res: ListResponse<T>): ListResponseData<T> => {
  return {
    data: res.data.data || [],
    total: res.data.paging?.total || 0,
  };
};

export const transformResponseNoPaging = <T>(res: ListResponseNoPaging<T>): ListResponseData<T> => {
  return {
    data: res.data || [],
    total: res?.data.length || 0,
  };
};
