import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBreadCrumb = styled.div`
  .breadcrumb__item {
    transition: var(--transition-duration);
    &:hover {
      color: var(--red-cl);
    }
  }
`;

const BreadCrumb = ({ children, classes, ...props }) => {
  return (
    <StyledBreadCrumb className={classNames("breadcrumb", classes)} {...props}>
      {children}
    </StyledBreadCrumb>
  );
};

BreadCrumb.Item = ({ link, children, classes, ...props }) => {
  if (link) {
    return (
      <Link
        to={link}
        {...props}
        className={classNames("breadcrumb__item", classes)}
      >
        {children}
      </Link>
    );
  }
  return (
    <span {...props} className={classNames("breadcrumb__item", classes)}>
      {children}
    </span>
  );
};

export default BreadCrumb;
