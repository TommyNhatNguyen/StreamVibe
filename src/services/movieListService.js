import { axiosInstance } from "../utils/axiosInstance";

export const movieListService = {
  getNowPlayingMovies(query = "") {
    return axiosInstance.get(`movie/now_playing${query}`);
  },
  getPopularMovies(query = "") {
    return axiosInstance.get(`movie/popular${query}`);
  },
  getTopRatedMovies(query = "") {
    return axiosInstance.get(`movie/top_rated${query}`);
  },
  getUpcomingMovies(query = "") {
    return axiosInstance.get(`movie/upcoming${query}`);
  },
};
