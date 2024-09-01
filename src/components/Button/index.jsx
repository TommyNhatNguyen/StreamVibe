import styled from "styled-components";
import React from "react";
import { breakpoints } from "../../constants/media";

export const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: fit-content;
  height: 64px;
  padding: 18px 24px;
  color: var(--white-cl);
  border: 1px solid var(--red-cl);
  border-radius: 8px;
  background-color: var(--red-cl);
  transition: var(--transition-duration);
  cursor: pointer;
  &:hover {
    color: var(--black-cl);
    background-color: var(--white-cl);
  }
  @media (max-width: ${breakpoints.desktop}) {
    height: 52px;
    padding: 14px 20px;
  }
`;

export const StyledButtonControl = styled(StyledButton)`
  height: 56px;
  padding: 13px;
  color: var(--white-cl);
  background-color: var(--black-cl-2);
  border: 1px solid var(--black-cl-5);
  border-radius: 6px;
  &.--arrow-left,
  &.--arrow-right {
    aspect-ratio: 1/ 1;
  }
  &:hover {
    background-color: var(--black-cl-3);
    color: var(--white-cl);
  }
  @media (max-width: ${breakpoints.desktop}) {
    height: 44px;
    padding: 9px;
  }
`;

export const StyledButtonSecond = styled(StyledButton)`
  height: 63px;
  border: 1px solid var(--black-cl-3);
  background-color: var(--black-cl);
  &:hover {
    background-color: var(--black-cl-3);
    color: var(--white-cl);
  }
  @media (max-width: ${breakpoints.desktop}) {
    height: 49px;
  }
`;

const Button = ({ variant = "primary", children, ...props }) => {
  let renderButton;
  switch (variant) {
    case "primary":
      renderButton = <StyledButton {...props}>{children}</StyledButton>;
      break;
    case "control":
      renderButton = (
        <StyledButtonControl {...props}>{children}</StyledButtonControl>
      );
      break;
    case "second":
      renderButton = (
        <StyledButtonSecond {...props}>{children}</StyledButtonSecond>
      );
      break;
    default:
      break;
  }
  return renderButton;
};

export default Button;
