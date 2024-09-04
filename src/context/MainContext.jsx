import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DEMO_ACCOUNT } from "../constants/keys";
import { credentialsMethod } from "../utils/credentialsMethod";
import { sessionMethod } from "../utils/sessionMethod";
import scrollTop from "../utils/scrollTop";

const MainContext = createContext({});

export const MainContextWrapper = ({ children }) => {
  const { pathname } = useLocation();
  const [showNavMenu, setShowNavMenu] = useState(false);
  const handleShowNavMenu = () => {
    setShowNavMenu((prev) => !prev);
  };
  useEffect(() => {
    scrollTop();
    setShowNavMenu(false);
  }, [pathname]);

  return (
    <MainContext.Provider value={{ handleShowNavMenu, showNavMenu }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
