// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    loginWithToken(state, action: PayloadAction<string>) {
      // You can perform additional token validation here if needed
      if (action.payload) {
        state.isLoggedIn = true;
      }
    },
  },
});

export const { login, logout, loginWithToken } = authSlice.actions;
export default authSlice.reducer;
