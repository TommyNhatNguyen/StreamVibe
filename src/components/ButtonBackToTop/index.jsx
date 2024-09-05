import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import scrollTop from "../../utils/scrollTop";

const StyledButtonBackToTop = styled.button`
  background-color: var(--white-cl);
  border-radius: 12px;
  border: 3px solid var(--black-cl-3);
  height: 52px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: calc((100vw - var(--max-width-page)) / 2 + var(--pd-container));
  cursor: pointer;
  transform: translateY(60px);
  transition: var(--transition-duration);
  i {
    font-size: 2rem;
  }
  &:hover {
    opacity: var(--opacity-hover);
  }
  &.active {
    transform: translateY(-30px);
  }
  @media (max-width: 1920px) {
    right: var(--pd-container);
  }
`;

const ButtonBackToTop = () => {
  const [isShow, setIsShow] = useState();
  const _onScrollTop = () => {
    scrollTop();
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      let windowHeight = document.body.clientHeight;
      if (scrollY > windowHeight / 2) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    });
  }, []);
  return (
    <StyledButtonBackToTop
      className={classNames("btn btnbacktotop", {
        active: isShow,
      })}
      onClick={_onScrollTop}
    >
      <i className="bi bi-arrow-up"></i>
    </StyledButtonBackToTop>
  );
};

export default ButtonBackToTop;
