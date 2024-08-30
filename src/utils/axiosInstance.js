import axios from "axios";
import { ENV } from "../constants/environments";
import { API_KEY } from "../constants/keys";

export const axiosInstance = axios.create({
  baseURL: ENV.BASE_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${API_KEY}`;
    return config;
  },
  function (error) {
    console.log("Request error", error);
    return Promise.reject(error);
  }
);
