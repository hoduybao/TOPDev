// export type APIApplicationResponse<T> = {
//   data: T;
//   message: string;
// };

// export type CustomApplicationResponse<T> = {
//   data: T;
// };

// export const transformResponse = <T>(
//   res: APIApplicationResponse<T>,
// ): CustomApplicationResponse<T> => {
//   return {
//     data: res.data || ({} as T),
//   };
// };
