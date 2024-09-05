import { ACCOUNT_ID } from "../constants/keys";
import { axiosInstance } from "../utils/axiosInstance";

export const favoritesService = {
  getFavoritesMovies(params = {}) {
    return axiosInstance.get(
      `https://api.themoviedb.org/3/account/${ACCOUNT_ID}/favorite/movies`,
      {
        params: params,
      }
    );
  },
  addFavoritesMovies(params = {}, payload = {}) {
    return axiosInstance.post(
      `https://api.themoviedb.org/3/account/${ACCOUNT_ID}/favorite
`,
      payload,
      { params: params }
    );
  },
};
