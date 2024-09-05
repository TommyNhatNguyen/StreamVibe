import classNames from "classnames";
import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const StyledAccordionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
  width: 100%;
  position: relative;
  transition: var(--transition-duration);
  cursor: pointer;
  &:not(:last-child) {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: rgb(229, 0, 0);
      background: linear-gradient(
        90deg,
        rgba(229, 0, 0, 0) 0%,
        rgba(229, 0, 0, 1) 17%,
        rgba(229, 0, 0, 0) 100%
      );
    }
  }
  .accordion__item-number {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 67px;
    aspect-ratio: 65 / 67;
    padding: 20px;
    border-radius: 10px;
    background-color: var(--black-cl-5);
    border: 1px solid var(--black-cl-3);
    font-size: var(--fs-tag-big);
    font-family: var(--ff-semibold);
    color: var(--white-cl);
  }
  .accordion__item-content {
    .paragraph {
      max-height: 0;
      overflow: hidden;
      margin-top: 0;
      transition: var(--transition-duration);
    }
  }
  .accordion__item-toggle {
    height: 20px;
    aspect-ratio: 1 /1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span {
      display: block;
      height: 100%;
      width: 1px;
      background-color: var(--white-cl);
      border-radius: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      transition: var(--transition-duration);
    }
    &::after {
      content: "";
      display: block;
      height: 1px;
      width: 100%;
      background-color: var(--white-cl);
      border-radius: 100%;
    }
  }
  &.active {
    align-items: flex-start;
    .accordion__item-content {
      .paragraph {
        max-height: initial;
        margin-top: 20px;
      }
    }
    .accordion__item-toggle {
      span {
        transform: rotate(90deg);
      }
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    .accordion__item-number {
      height: 54px;
      aspect-ratio: 50 / 54;
      padding: 16px;
    }
    .accordion__item-toggle {
      height: 16px;
    }
    &.active {
      .accordion__item-content {
        .paragraph {
          margin-top: 14px;
        }
      }
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    .accordion__item-number {
      height: 46px;
      aspect-ratio: 42 / 46;
      padding: 12px;
    }
    &.active {
      .accordion__item-content {
        .paragraph {
          margin-top: 12px;
        }
      }
    }
  }
`;

export const Accordion = ({ children }) => {
  return <div className="accordion">{children}</div>;
};

Accordion.Item = ({
  number = "",
  content = { title: "", info: "" },
  isActive,
  handleShow,
}) => {
  const { title, info } = content;
  return (
    <StyledAccordionItem
      className={classNames("accordion__item", {
        active: isActive,
      })}
      onClick={handleShow}
    >
      <div className="accordion__item-number --tag-big">{number}</div>
      <div className="accordion__item-content">
        <h4 className="title --h4">{title}</h4>
        <p className="paragraph">{info}</p>
      </div>
      <div
        className={classNames("accordion__item-toggle btnexpand", {
          active: isActive,
        })}
      >
        <span></span>
      </div>
    </StyledAccordionItem>
  );
};

export default Accordion;
