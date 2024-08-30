import Cookies from "js-cookie";
import { STORAGE } from "../constants/storage";

export const sessionMethod = {
  get() {
    if (!!Cookies.get(STORAGE.sessionId)) {
      return JSON.parse(Cookies.get(STORAGE.sessionId));
    }
  },
  set(sessionId) {
    Cookies.set(STORAGE.sessionId, JSON.stringify(sessionId));
  },
  delete() {
    Cookies.remove(STORAGE.sessionId);
  },
};
