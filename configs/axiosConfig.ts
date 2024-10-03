import axios from "axios";
import { config } from "process";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your base URL
  });

axiosInstance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }

);

axiosInstance.interceptors.response.use(
    response => response,
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;