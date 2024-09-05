import { ACCOUNT_ID } from "../constants/keys";
import { axiosInstance } from "../utils/axiosInstance";

export const watchlistService = {
  getWatchList(params = {}) {
    return axiosInstance.get(
      `https://api.themoviedb.org/3/account/${ACCOUNT_ID}/watchlist/movies`,
      {
        params: params,
      }
    );
  },
  addWatchList(params = {}, payload = {}) {
    return axiosInstance.post(
      `https://api.themoviedb.org/3/account/${ACCOUNT_ID}/watchlist
`,
      payload,
      { params: params }
    );
  },
};
