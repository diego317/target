import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import userService from 'services/userService';
import { SignUpFields, LoginFields } from 'types/forms';
import parseError from 'utils/parseError';

export const login = createAsyncThunk('user/login', async (user: LoginFields) => {
  try {
    const { data } = await userService.login(user);
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    await userService.logout();
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const signUp = createAsyncThunk('user/signUp', async (user: SignUpFields) => {
  try {
    const { data } = await userService.signUp(user);
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const updateSession = createAction<{ accessToken: string }>('session/update');

export const { fulfilled: loginFulfilled } = login;
export const { fulfilled: logoutFulfilled } = logout;
