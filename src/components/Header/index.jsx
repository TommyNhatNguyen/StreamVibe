import React from "react";
import HeaderTop from "./components/HeaderTop";
import HeaderMiddle from "./components/HeaderMiddle";
import styled from "styled-components";
import useHeader from "./useHeader";

const StyledHeaderWrapper = styled.header`
  height: var(--header-height);
  border-bottom: 1px solid var(--black-cl-3);
`;

const Header = () => {
  const { headerMiddleProps, headerTopProps } = useHeader();
  return (
    <StyledHeaderWrapper className="header active">
      <HeaderTop {...headerTopProps} />
      <HeaderMiddle {...headerMiddleProps} />
    </StyledHeaderWrapper>
  );
};

export default Header;
