import Cookies from "js-cookie";
import { STORAGE } from "../constants/storage";

export const tokenMethod = {
  get() {
    if (!!Cookies.get(STORAGE.requestToken)) {
      return JSON.parse(Cookies.get(STORAGE.requestToken));
    }
  },
  set(requestToken) {
    Cookies.set(STORAGE.requestToken, JSON.stringify(requestToken));
  },
  delete() {
    Cookies.remove(STORAGE.requestToken);
  },
};
