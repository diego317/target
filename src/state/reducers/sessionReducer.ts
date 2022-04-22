import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { updateSession, logoutFulfilled, loginFulfilled } from 'state/actions/userActions';
import { loginResponse } from 'types/services';

interface UserState {
  uid: string;
  email: string;
  username: string;
}

export interface SessionState {
  accessToken?: string;
  authenticated: boolean;
  user: UserState
}

const initialState: SessionState = {
  accessToken: undefined,
  authenticated: false,
  user: {
    uid: "",
    email: "",
    username: "",
  }
}

const handleLoginFulfilled = (state: SessionState, { payload: { data } }: PayloadAction<loginResponse>) => {
  state.user.uid = data.uid;
  state.user.email = data.email;
  state.user.username = data.username;
  state.authenticated = true;
};

const handleLogoutFulfilled = () => {
  return initialState;
};

const handleUpdateSession = (state: SessionState, { payload }: PayloadAction<{ accessToken: 'string' }>) => {
  state.accessToken = payload.accessToken;
};

export default createReducer(initialState, {
  [loginFulfilled.type]: handleLoginFulfilled,
  [logoutFulfilled.type]: handleLogoutFulfilled,
  [updateSession.type]: handleUpdateSession,
});
