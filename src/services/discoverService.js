import { axiosInstance } from "../utils/axiosInstance";

export const discoverService = {
  discoverMovie(query = "") {
    return axiosInstance.get(`discover/movie${query}`);
  },
  discoverTv(query = "") {
    return axiosInstance.get(`discover/tv${query}`);
  },
};
