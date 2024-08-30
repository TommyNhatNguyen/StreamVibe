import axios from "axios";
import queryString from "query-string";
import React from "react";
import { useMainContext } from "../../context/MainContext";
import { MODAL_TYPES } from "../../constants/modal";
import { Link, NavLink } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { useAuthContext } from "../../context/AuthContext";
import HeaderTop from "./components/HeaderTop";
import HeaderMiddle from "./components/HeaderMiddle";

const Header = () => {
  return (
    <header className="header active">
      <HeaderTop />
      <HeaderMiddle />
    </header>
  );
};

export default Header;
