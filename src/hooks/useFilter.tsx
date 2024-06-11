import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export const removeEmptyParams = (data: any) => {
  const newData = { ...data };
  for (const key in newData) {
    if (
      newData[key] === '' ||
      newData[key] === 'null' ||
      newData[key] === null ||
      newData[key] === undefined ||
      newData[key] === 'ALL'
    ) {
      delete newData[key];
    }
  }
  return newData;
};

type PagingFiletrType<T> = {
  initialFilter?: T;
};
export function useFilter<T>({ initialFilter }: PagingFiletrType<T>) {
  const [filter, setFilter] = useState<T>({
    ...initialFilter,
  } as T);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pathname = useLocation();

  // when paging change, update url by new paging
  const handlePageChange = (paging: { page: number; limit: number }) => {
    const newParams = { ...filter, ...paging };
    navigate(`${pathname.pathname}?${queryString.stringify(removeEmptyParams(newParams))}`);
  };

  // when filter change, update url by new filter
  const handleFilterChange = (filter: T & Record<string, string>) => {
    const newParams = { ...filter };
    navigate(`${pathname.pathname}?${queryString.stringify(removeEmptyParams(newParams))}`);
  };
  // when url change, update filter by new url
  useEffect(() => {
    let params: any = queryString.parse(window.location.search);
    if (!params.page || !params.limit) {
      params = { ...params, ...initialFilter };
    }

    setFilter(params as T);
  }, [searchParams]);

  return {
    filter,
    handleFilterChange,
    handlePageChange,
  };
}
