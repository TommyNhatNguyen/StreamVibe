import classNames from "classnames";
import React, { useState } from "react";

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
    <div className="accordion__item-wrapper" onClick={handleShow}>
      <div
        className={classNames("accordion__item", {
          active: isActive,
        })}
      >
        <div className="accordion__item-number --tag-big">{number}</div>
        <div className="accordion__item-content">
          <h4 className="title --h4">{title}</h4>
          <p>{info}</p>
        </div>
        <div
          className={classNames("accordion__item-toggle btnexpand", {
            active: isActive,
          })}
        >
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
