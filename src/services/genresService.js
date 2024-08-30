import { axiosInstance } from "../utils/axiosInstance";

export const genresService = {
  getMovieGenresList(query = "") {
    return axiosInstance.get(`genre/movie/list${query}`);
  },
  getTvGenresList(query = "") {
    return axiosInstance.get(`genre/tv/list${query}`);
  },
};
