export type APIJobResponse<T> = {
  data: T;
  message: string;
};

export type CustomJobResponse<T> = {
  data: T;
};

export const transformResponse = <T>(res: APIJobResponse<T>): CustomJobResponse<T> => {
  return {
    data: res.data || ({} as T),
  };
};
