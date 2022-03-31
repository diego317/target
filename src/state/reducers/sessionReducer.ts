import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { updateSession, logoutFulfilled, loginFulfilled } from 'state/actions/userActions';
import { loginResponse } from 'types/services';

export interface SessionState {
  accessToken?: string;
  authenticated: boolean;
  user: {
    uid: string;
    email: string;
    username: string;
  }
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
  console.log(data)
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
