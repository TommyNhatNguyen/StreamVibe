import Cookies from "js-cookie";
import { STORAGE, USERS } from "../constants/storage";

export const tempCredentialsMethod = {
  get() {
    return JSON.parse(Cookies.get(STORAGE.tempCredential));
  },
  set(newCredential) {
    Cookies.set(STORAGE.tempCredential, JSON.stringify(newCredential));
  },
  delete() {
    Cookies.remove(STORAGE.tempCredential);
  },
};
