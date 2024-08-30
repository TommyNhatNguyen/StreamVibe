import { axiosInstance } from "../utils/axiosInstance";

export const externalService = {
  getMovieDetailByImdb(id = "") {
    return axiosInstance.get(`find/${id}`, {
      params: { external_source: "imdb_id" },
    });
  },
};
