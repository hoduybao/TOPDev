import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { notification } from 'antd';

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action) && (action?.payload as any)?.data?.statusCode !== 401) {
    notification.error({
      message: 'Error!',
      description: 'An error occurred.', // An error occurred.
    });
  }

  return next(action);
};
