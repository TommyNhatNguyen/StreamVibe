import { axiosInstance } from "../utils/axiosInstance";

export const movieService = {
  getVideos(movieId = "") {
    return axiosInstance.get(`movie/${movieId}/videos`);
  },
  getMovieDetail(movieId = "") {
    return axiosInstance.get(`movie/${movieId}`);
  },
  getMovieTranslation(movieId = "") {
    return axiosInstance.get(`movie/${movieId}/translations`);
  },
  getMovieCredits(movieId = "") {
    return axiosInstance.get(`movie/${movieId}/credits`);
  },
  getMovieReviews(movieId = "") {
    return axiosInstance.get(`movie/${movieId}/reviews`);
  },
  getMovieRecommnedations(movieId = "") {
    return axiosInstance.get(`movie/${movieId}/recommendations`);
  },
  getMovieSimilar(movieId = "") {
    return axiosInstance.get(`movie/${movieId}/similar`);
  },
};
