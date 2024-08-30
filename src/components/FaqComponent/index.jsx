import React, { useState } from "react";
import { FAQ } from "../../constants/general";
import Accordion from "../Accordion";

const FaqComponent = () => {
  const [isShow, setIsShow] = useState([]);
  const _onSetShow = (accorId) => {
    if (!isShow?.includes(accorId)) {
      setIsShow((prev) => [...prev, accorId]);
    } else {
      setIsShow((prev) => prev.filter((item) => item !== accorId));
    }
  };
  return (
    <section className="faq --pd-b" id="faq">
      <div className="container">
        {/* Textbox group */}
        <div className="faq__textboxgroup textbox --left">
          <div className="textbox__content">
            <h2 className="textbox__content-heading --h2 --heading">
              Frequently Asked Questions
            </h2>
            <p className="textbox__content-paragraph">
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.{" "}
            </p>
          </div>
          <a href="#" className="textbox__btn btnmain">
            Ask a Question
          </a>
        </div>
        {/* Accordion */}
        <div className="accordion-group">
          <Accordion>
            {FAQ.slice(0, 4).map((content, index) => {
              const number = index + 1;
              return (
                <Accordion.Item
                  key={content?.title || index}
                  content={content}
                  number={number}
                  handleShow={() => _onSetShow(number)}
                  isActive={isShow?.includes(number)}
                />
              );
            })}
          </Accordion>
          <Accordion>
            {FAQ.slice(4, 8).map((content, index) => {
              const number = index + 5;
              return (
                <Accordion.Item
                  key={content?.title || index}
                  content={content}
                  number={number}
                  handleShow={() => _onSetShow(number)}
                  isActive={isShow?.includes(number)}
                />
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqComponent;
