import { axiosInstance } from "../utils/axiosInstance";

export const searchService = {
  searchMovie(params = "") {
    return axiosInstance.get("search/movie", { params: params });
  },
};
