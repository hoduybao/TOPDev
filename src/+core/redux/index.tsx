import { configureStore } from '@reduxjs/toolkit';
import { commonApi } from './apis/common.api';
import authReducer from './auth/authSlice';
import { rtkQueryErrorLogger } from './errorMiddleware';

export const store = configureStore({
  reducer: {
    [commonApi.reducerPath]: commonApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([rtkQueryErrorLogger, commonApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
