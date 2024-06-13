export type PagingREQ = { page: number; limit: number };
export const initialPagingState: PagingREQ = {
  page: 1,
  limit: 4,
};
