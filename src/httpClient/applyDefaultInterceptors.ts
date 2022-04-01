import { EnhancedStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import humps from 'humps';
import { updateSession, logout } from 'state/actions/userActions';

import { AppDispatch } from '../state/store';
import { ACCESS_TOKEN, UNAUTHORIZED } from './constants';

const applyDefaultInterceptors =  (store: EnhancedStore, client: AxiosInstance) => {
  const dispatch: AppDispatch = store.dispatch;

  client.interceptors.request.use((config) => {
    const { accessToken } = store.getState().session;
    const { data, headers } = config;
    if (accessToken) {
      config.headers = {
        ...headers,
        [ACCESS_TOKEN]: accessToken,
      };
    }
    config.data = data ? humps.decamelizeKeys(data) : {};
    return config;
  });

  client.interceptors.response.use(
    async (response) => {
      const { headers, data } = response;
      const accessToken = headers[ACCESS_TOKEN];
      if (accessToken) {
        const session = {
          accessToken
        };
        dispatch(updateSession(session));
      }
      response.data = humps.camelizeKeys(data);
      return response;
    },
    (error) => {
      if (error.response && error.response.status === UNAUTHORIZED) {
        console.log(`Error: ${error.response}`);
        dispatch(logout());
      }

      return Promise.reject(error);
    }
  );
};

export default applyDefaultInterceptors;
