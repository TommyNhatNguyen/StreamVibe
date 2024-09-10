import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PATHS } from "../../constants/paths";
import { breakpoints } from "../../constants/media";

const StyledCategoryItem = styled(Link)`
  height: 342px;
  aspect-ratio: 295.4 / 342;
  padding: 30px;
  border-radius: 12px;
  background-color: var(--black-cl-2);
  border: 1px solid var(--black-cl-3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition-duration);
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: 282px;
    aspect-ratio: 239.8 / 282;
    padding: 24px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 201px;
    aspect-ratio: 178.4 / 201;
    padding: 20px;
  }
`;

const StyledCategoryItemImageWrapper = styled.div`
  display: block;
  height: 252px;
  aspect-ratio: 235.4 / 252;
  overflow: hidden;
  position: relative;
  min-height: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(26, 26, 26);
    background: linear-gradient(
      to top,
      rgba(26, 26, 26, 1) 0%,
      rgba(26, 26, 26, 0) 100%
    );
  }
  > * {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
  }
  div {
    height: 100%;
  }
  @media (max-width: ${breakpoints.desktop}) {
    height: 210px;
    aspect-ratio: 191.8 / 210;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 140px;
    aspect-ratio: 138.4 / 140;
  }
`;

const StyledCategoryItemContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  .title {
    font-family: var(--ff-semibold);
    color: var(--white-cl);
  }
`;

const CategoryItem = ({ image, name, id, classes, ...props }) => {
  const moviePath = PATHS.SHOW.INDEX + "/" + id;
  return (
    <StyledCategoryItem
      to={moviePath}
      className={classNames("categroup__item", { classes })}
      {...props}
    >
      <StyledCategoryItemImageWrapper className="categroup__item-img">
        <div>
          <img src={image} className="--midimg" alt="movie image" />
        </div>
      </StyledCategoryItemImageWrapper>
      <StyledCategoryItemContentWrapper className="categroup__item-content">
        <span className="title">{name || ""}</span>
        <span className="btn --btncontrol --arrow-right">
          <img srcSet="./assets/images/arrow-left-icon.png 2x" alt="icon" />
        </span>
      </StyledCategoryItemContentWrapper>
    </StyledCategoryItem>
  );
};

export default CategoryItem;
