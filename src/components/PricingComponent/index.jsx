import React, { useState } from "react";
import classNames from "classnames";
import { PRICE_PLANS } from "../../constants/general";

const PRICING_OPTIONS = Object.keys(PRICE_PLANS);

const PricingComponent = () => {
  const [selectedOption, setSelectedOption] = useState(PRICING_OPTIONS[0]);
  const _onSelectOption = (e, option) => {
    e.preventDefault();
    setSelectedOption(option);
  };
  return (
    <section className="pricing --pd-b" id="pricing">
      <div className="container">
        {/* Textbox group */}
        <div className="pricing__textboxgroup textbox --left">
          <div className="textbox__content">
            <h2 className="textbox__content-heading --h2 --heading">
              Choose the plan that's right for you
            </h2>
            <p className="textbox__content-paragraph">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>
          <div className="textbox__btngroup-two">
            {PRICING_OPTIONS.map((option, index) => {
              return (
                <a
                  key={option || index}
                  href="#"
                  className={classNames("textbox__btngroup-tag", {
                    active: selectedOption === option,
                  })}
                  onClick={(e) => _onSelectOption(e, option)}
                >
                  {option || ""}
                </a>
              );
            })}
          </div>
        </div>
        {/* Plans */}
        <div className="pricing__plans">
          {selectedOption === "monthly" &&
            PRICE_PLANS.monthly.map((item, index) => {
              const { title, content, price, type } = item;
              return (
                <div
                  key={title || index}
                  className="pricing__plans-item plancard"
                >
                  <div className="plancard__content">
                    <h3 className="plancard__content-title --h3">{title}</h3>
                    <p className="plancard__content-para">{content}</p>
                  </div>
                  <div className="plancard__price">
                    <span className="plancard__price-tag">${price}</span>{" "}
                    <span>/{type}</span>
                  </div>
                  <div className="plancard__btngroup">
                    <a href="#" className="btnsecond">
                      Start Free Trial
                    </a>
                    <a href="#" className="btnmain">
                      Choose Plan
                    </a>
                  </div>
                </div>
              );
            })}
          {selectedOption === "yearly" &&
            PRICE_PLANS.yearly.map((item, index) => {
              const { title, content, price, type } = item;
              return (
                <div
                  key={title || index}
                  className="pricing__plans-item plancard"
                >
                  <div className="plancard__content">
                    <h3 className="plancard__content-title --h3">{title}</h3>
                    <p className="plancard__content-para">{content}</p>
                  </div>
                  <div className="plancard__price">
                    <span className="plancard__price-tag">${price}</span>{" "}
                    <span>/{type}</span>
                  </div>
                  <div className="plancard__btngroup">
                    <a href="#" className="btnsecond">
                      Start Free Trial
                    </a>
                    <a href="#" className="btnmain">
                      Choose Plan
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
