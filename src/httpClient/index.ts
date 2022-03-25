import axios from 'axios';
import { APPLICATION_JSON, CONTENT_TYPE } from './constants';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON
  }
});

export default client;
