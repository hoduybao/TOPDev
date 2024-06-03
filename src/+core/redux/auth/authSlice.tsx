import {
  setIsLogin,
  setLocalAccessToken,
  setLocalRefreshToken,
} from '@/+core/services/local.service';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isLoggin: boolean;
}

// Define the initial state using the AuthState type
const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  isLoggin: false,
};

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      const { accessToken, refreshToken, isLoggin } = action.payload;

      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.isLoggin = isLoggin;

      setLocalAccessToken(accessToken || '');
      setLocalRefreshToken(refreshToken || '');
      setIsLogin('true');
    },

    logOut: (state) => {
      state.isLoggin = false;
      state.accessToken = null;
      state.refreshToken = null;
      setLocalAccessToken('');
      setLocalRefreshToken('');
      setIsLogin('false');
    },
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLoggin = action.payload;
      setIsLogin('false');
    },
  },
});

// Export the actions
export const { setCredentials, logOut, setLogin } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;

// Define the state type for the selectors
interface RootState {
  auth: AuthState;
}

// Define and export the selectors
export const selectIsLogin = (state: RootState) => {
  return state.auth.isLoggin;
};

// export const selectCurrentAccessToken = (state: RootState) => state.auth.accessToken;
// export const selectCurrentRefreshToken = (state: RootState) => state.auth.refreshToken;
