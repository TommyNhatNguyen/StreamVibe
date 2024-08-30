import { STORAGE, USERS } from "../constants/storage";

export const credentialsMethod = {
  get() {
    if (!!localStorage.getItem(STORAGE.credentials)) {
      return JSON.parse(localStorage.getItem(STORAGE.credentials));
    }
  },
  set(newCredential) {
    let currentCredential = this.get();
    if (currentCredential) {
      localStorage.setItem(
        STORAGE.credentials,
        JSON.stringify([...currentCredential, newCredential])
      );
    } else {
      localStorage.setItem(
        STORAGE.credentials,
        JSON.stringify([newCredential])
      );
    }
  },
  delete() {
    localStorage.clear(STORAGE.credentials);
  },
};
