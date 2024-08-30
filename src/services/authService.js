import { axiosInstance } from "../utils/axiosInstance";

export const authService = {
  createRequestToken(query = "") {
    return axiosInstance.get("authentication/token/new");
  },
  createSession(requestToken = "") {
    return axiosInstance.post("authentication/session/new", {
      request_token: requestToken,
    });
  },
  createSessionWithLogin(data = "") {
    return axiosInstance.post("authentication/token/validate_with_login", data);
  },
  deleteSession(sessionId = "") {
    return axiosInstance.delete("authentication/session", {
      data: { session_id: sessionId },
    });
  },
};
