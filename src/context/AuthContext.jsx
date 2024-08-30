import { createContext, useContext, useEffect, useState } from "react";
import { message } from "antd";
import { sessionMethod } from "../utils/sessionMethod";
import { credentialsMethod } from "../utils/credentialsMethod";
import { DEMO_ACCOUNT } from "../constants/keys";
import axios from "axios";
import { authService } from "../services/authService";
import queryString from "query-string";
import { tempCredentialsMethod } from "../utils/tempCredentialMethod";

export const AuthContext = createContext({});

export const AuthContextWrapper = ({ children }) => {
  const requestToken = queryString.parse(window.location.search).request_token;
  const [showModal, setShowModal] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const getCurrentUser = () => {
    const credentialsList = credentialsMethod?.get();
    const currentSessionId = sessionMethod?.get()?.session_id;
    const userCredential = credentialsList?.find(
      (item) => item?.session_id === currentSessionId
    );
    return userCredential?.username;
  };
  const handleShowModal = (modalType) => {
    setShowModal(modalType);
    if (modalType) {
      document.body.classList.add("--disable-scroll");
    } else {
      document.body.classList.remove("--disable-scroll");
    }
  };
  const handleLogin = () => {
    try {
      if (sessionMethod?.get()) {
        setIsLogin(true);
        handleShowModal("");
        message.success("Login success");
        return;
      }
      setIsLogin(false);
    } catch (error) {
      console.log(error);
      sessionMethod.delete();
    }
  };
  const _onHandleRequestToken = async () => {
    try {
      const res = await authService.createRequestToken();
      if (res?.data) {
        const requestToken = res?.data?.request_token;
        window.location.replace(
          `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${window.location.href}`
        );
      }
    } catch (error) {
      console.log(error);
      handleLogout();
    }
  };
  const _onHandleCreateSession = async (setCredentials) => {
    try {
      const res = await authService.createSession(requestToken);
      if (res?.data) {
        console.log(res?.data);
        setCredentials?.(res?.data?.session_id);
        message.success("Register success");
        tempCredentialsMethod.delete();
      }
    } catch (error) {
      console.log(error);
      sessionMethod.delete();
      handleLogout();
    }
  };
  const handleRegister = ({ username, password }) => {
    try {
      tempCredentialsMethod.set({ username: username, password: password });
      _onHandleRequestToken();
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = () => {
    try {
      sessionMethod.delete();
      setIsLogin(false);
      message.success("Logout success");
    } catch (error) {
      console.log(error);
      setIsLogin(false);
    }
  };
  useEffect(() => {
    if (
      !credentialsMethod
        ?.get()
        ?.find(
          (item) =>
            item.username === DEMO_ACCOUNT.email &&
            item.password === DEMO_ACCOUNT.password
        )
    ) {
      credentialsMethod.set({
        username: DEMO_ACCOUNT.email,
        password: DEMO_ACCOUNT.password,
        session_id: DEMO_ACCOUNT.session_id,
      });
    }
    if (requestToken) {
      console.log("Session create");
      _onHandleCreateSession((sessionId) => {
        const { username, password } = tempCredentialsMethod.get();
        credentialsMethod.set({
          username: username,
          password: password,
          session_id: sessionId,
        });
      });
    }
    if (sessionMethod?.get()) {
      handleLogin();
    }
  }, []);
  const currentUser = getCurrentUser();
  return (
    <AuthContext.Provider
      value={{
        handleShowModal,
        showModal,
        isLogin,
        handleLogin,
        handleLogout,
        handleRegister,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
