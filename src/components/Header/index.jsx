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
import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const StyledHeaderWrapper = styled.header`
  height: var(--header-height);
  border-bottom: 1px solid var(--black-cl-3);
`;

const Header = () => {
  return (
    <StyledHeaderWrapper className="header active">
      <HeaderTop />
      <HeaderMiddle />
    </StyledHeaderWrapper>
  );
};

export default Header;
