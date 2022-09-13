import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetching: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.getUserInfo.pending]: (state, _) => {
      state.isFetching = true;
    },
    [authOperations.getUserInfo.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [authOperations.getUserInfo.rejected]: (state, _) => {
      state.isFetching = false;
    },
  },
});

export default authSlice.reducer;
