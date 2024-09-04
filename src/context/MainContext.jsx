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
    setShowNavMenu(true);
    document.body.classList.add("--disable-scroll");
  };
  const handleCloseMenu = (e) => {
    e?.preventDefault();
    setShowNavMenu(false);
    document.body.classList.remove("--disable-scroll");
  };
  useEffect(() => {
    scrollTop();
    handleCloseMenu();
    window.addEventListener("resize", () => handleCloseMenu());
    // return () => window.removeEventListener("resize");
  }, [pathname]);
  return (
    <MainContext.Provider
      value={{ handleShowNavMenu, handleCloseMenu, showNavMenu }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
