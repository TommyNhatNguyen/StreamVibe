import { axiosInstance } from "../utils/axiosInstance";

export const trendingService = {
  getTrendingMovies(query = "") {
    return axiosInstance.get(`trending/movie${query}`);
  },
  getTrendingPeople(query = "") {
    return axiosInstance.get(`trending/person${query}`);
  },
  getTrendingTv(query = "") {
    return axiosInstance.get(`trending/tv${query}`);
  },
};
