import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../constants/media";

export const StyledTextbox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gutter);
  width: 100%;
  > .btn {
    flex-shrink: 0;
  }
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const StyledTextboxCenter = styled(StyledTextbox)`
  max-width: 1096px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  > .btn {
    margin-top: 50px;
  }
  @media (max-width: ${breakpoints.desktop}) {
    > .btn {
      margin-top: 40px;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    max-width: initial;
    > .btn {
      margin-top: 30px;
    }
  }
`;

export const StyledTextboxContent = styled.div`
  max-width: 1297px;
  &.--center {
    margin: 0 auto;
    text-align: center;
    max-width: 100%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    max-width: initial;
  }
`;

export const StyledButtonControlGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 88px;
  max-width: fit-content;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--black-cl-3);
  background-color: var(--black-cl-4);
  @media (max-width: ${breakpoints.desktop}) {
    height: 68px;
    padding: 12px;
    gap: 12px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const Textbox = ({ variant = "left", children, ...props }) => {
  let renderTextbox;
  switch (variant) {
    case "left":
      renderTextbox = <StyledTextbox {...props}>{children}</StyledTextbox>;
      break;
    case "center":
      renderTextbox = (
        <StyledTextboxCenter {...props}>{children}</StyledTextboxCenter>
      );
      break;
    default:
      break;
  }
  return renderTextbox;
};

Textbox.Content = ({ children, ...props }) => {
  return <StyledTextboxContent {...props}>{children}</StyledTextboxContent>;
};

Textbox.ButtonControlGroup = ({ children, ...props }) => {
  return (
    <StyledButtonControlGroup {...props}>{children}</StyledButtonControlGroup>
  );
};

export default Textbox;
