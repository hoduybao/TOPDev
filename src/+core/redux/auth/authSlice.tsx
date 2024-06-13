import {
  setEmail,
  setIsLogin,
  setLocalAccessToken,
  setLocalRefreshToken,
  setName,
} from '@/+core/services/local.service';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isLoggin: boolean;
  email: string | null;
  name: string | null;
}

// Define the initial state using the AuthState type
const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  isLoggin: false,
  email: null,
  name: null,
};

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      const { accessToken, refreshToken, isLoggin, email, name } = action.payload;

      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.isLoggin = isLoggin;
      state.email = email;
      state.name = name;

      setLocalAccessToken(accessToken || '');
      setLocalRefreshToken(refreshToken || '');
      setEmail(email || '');
      setName(name || '');
      setIsLogin('true');
    },

    logOut: (state) => {
      state.isLoggin = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.email = null;
      state.name = null;
      setLocalAccessToken('');
      setLocalRefreshToken('');
      setIsLogin('false');
      setEmail('');
      setName('');
    },
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLoggin = action.payload;
      setIsLogin(action.payload ? 'true' : 'false');
    },
  },
});

// Export the actions
export const { setCredentials, logOut, setLogin } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;

// Define the state type for the selectors
export interface RootState {
  auth: AuthState;
}

// Define and export the selectors
export const selectIsLogin = (state: RootState) => {
  return state.auth.isLoggin;
};

// export const selectCurrentAccessToken = (state: RootState) => state.auth.accessToken;
// export const selectCurrentRefreshToken = (state: RootState) => state.auth.refreshToken;
