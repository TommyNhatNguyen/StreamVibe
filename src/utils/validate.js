import { credentialsMethod } from "./credentialsMethod";

export const REGEX = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
};

export const loginValidate = ({ username, password }) => {
  const credentialsList = credentialsMethod?.get();
  const userCredential = credentialsList?.find(
    (item) => item.username === username && item.password === password
  );
  return userCredential;
};

export const registerValidate = ({ username, password }) => {
  const credentialsList = credentialsMethod?.get();
  const userCredential = credentialsList?.find(
    (item) => item.username === username
  );
  return userCredential;
};
