import { setLocalAccessToken, setLocalRefreshToken } from '@/+core/services/local.service';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  userid: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

// Define the initial state using the AuthState type
const initialState: AuthState = { userid: null, accessToken: null, refreshToken: null };

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      const { userid, accessToken, refreshToken } = action.payload;

      state.userid = userid;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;

      setLocalAccessToken(accessToken || '');
      setLocalRefreshToken(refreshToken || '');
    },
    logOut: (state) => {
      state.userid = null;
      state.accessToken = null;
      state.refreshToken = null;
      setLocalAccessToken('');
      setLocalRefreshToken('');
    },
  },
});

// Export the actions
export const { setCredentials, logOut } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;

// Define the state type for the selectors
interface RootState {
  auth: AuthState;
}

// Define and export the selectors
export const selectCurrentUser = (state: RootState) => state.auth.userid;
export const selectIsLogin = (state: RootState) => {
  if (state.auth.userid && state.auth.userid != '') {
    return true;
  }
  return false;
};
// export const selectCurrentAccessToken = (state: RootState) => state.auth.accessToken;
// export const selectCurrentRefreshToken = (state: RootState) => state.auth.refreshToken;
