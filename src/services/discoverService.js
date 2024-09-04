import { axiosInstance } from "../utils/axiosInstance";

export const discoverService = {
  discoverMovie(query = "", params) {
    return axiosInstance.get(`discover/movie${query}`, {
      params: params,
    });
  },
  discoverTv(query = "") {
    return axiosInstance.get(`discover/tv${query}`);
  },
};
