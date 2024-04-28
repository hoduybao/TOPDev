export type ListResponseJobs<T> = {
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
export type ListResponseCompany<T> = {
  data: {
    companies: T[];
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

export const transformJobsResponse = <T>(res: ListResponseJobs<T>): ListResponseData<T> => {
  return {
    data: res.data.jobs || [],
    total: res.data.paging?.total || 0,
  };
};

export const transformCompaniesResponse = <T>(res: ListResponseCompany<T>): ListResponseData<T> => {
  return {
    data: res.data.companies || [],
    total: res.data.paging?.total || 0,
  };
};
