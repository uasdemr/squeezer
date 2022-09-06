import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';
const BACKEND_URL = 'http://79.143.31.216'
const REQUEST_TIMEOUT = 10000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token) {
        if (config.headers !== undefined) {
          config.headers['Authorization'] = `bearer ${token}`
        }
      }
      return config;
    },
  );




  return api;
};
