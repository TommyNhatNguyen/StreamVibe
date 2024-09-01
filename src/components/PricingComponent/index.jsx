import React, { useState } from "react";
import classNames from "classnames";
import { PRICE_PLANS } from "../../constants/general";
import Textbox from "../Textbox";
import Button from "../Button";
import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const PRICING_OPTIONS = Object.keys(PRICE_PLANS);

const StyledButtonGroup = styled(Textbox.ButtonControlGroup)`
  height: 75px;
  padding: 10px;
  border-radius: 10px;
  gap: 0;
  .textbox__btngroup-tag {
    background-color: transparent;
    border: initial;
    text-transform: capitalize;
    height: 55px;
    padding: 14px 24px;
    border-radius: 10px;
    transition: var(--transition-duration);
    &.active,
    &:hover {
      background-color: var(--black-cl-5);
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    height: 61px;
    padding: 8px;
    border-radius: 8px;
    .textbox__btngroup-tag {
      height: 45px;
      padding: 12px 20px;
      border-radius: 6px;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
  }
`;

const StyledPricingPlan = styled.div`
  height: 425px;
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  @media (max-width: ${breakpoints.desktop}) {
    height: 345px;
    margin-top: 60px;
    gap: 20px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: initial;
    margin-top: 40px;
    gap: 20px;
    grid-template-columns: 1fr;
  }
`;

const StyledPricingCard = styled.div`
  aspect-ratio: 512 / 425;
  width: 100%;
  padding: 50px;
  background-color: var(--black-cl-2);
  border: 1px solid var(--black-cl-3);
  border-radius: 12px;
  .plancard__content-title {
    font-family: var(--ff-bold);
  }
  .plancard__price {
    margin: 50px 0;
    &-tag {
      font-family: var(--ff-semibold);
      font-size: var(--fs-pt);
      color: var(--white-cl);
    }
  }
  .plancard__btngroup {
    display: flex;
    align-items: center;
    gap: 20px;
    .btn {
      text-align: center;
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    aspect-ratio: 413.3/345;
    padding: 40px;
    border-radius: 10px;
    .plancard__price {
      margin: 40px 0;
    }
    .plancard__btngroup {
      gap: 12px;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    max-height: 275px;
    aspect-ratio: 358 / 275;
    padding: 24px;
    .plancard__price {
      margin: 30px 0;
    }
  }
`;

const PricingComponent = () => {
  const [selectedOption, setSelectedOption] = useState(PRICING_OPTIONS[0]);
  const _onSelectOption = (e, option) => {
    e.preventDefault();
    setSelectedOption(option);
  };
  return (
    <section className="pricing --pd-b" id="pricing">
      <div className="container">
        <Textbox className="textbox">
          <Textbox.Content className="textbox__content">
            <h2 className="textbox__content-heading --h2 --heading">
              Choose the plan that's right for you
            </h2>
            <p className="textbox__content-paragraph">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </Textbox.Content>
          <StyledButtonGroup className="textbox__btngroup">
            {PRICING_OPTIONS.map((option, index) => {
              return (
                <Button
                  key={option || index}
                  href="#"
                  className={classNames("textbox__btngroup-tag", {
                    active: selectedOption === option,
                  })}
                  onClick={(e) => _onSelectOption(e, option)}
                  variant="control"
                >
                  {option || ""}
                </Button>
              );
            })}
          </StyledButtonGroup>
        </Textbox>
        {/* Plans */}
        <StyledPricingPlan className="pricing__plans">
          {selectedOption === "monthly" &&
            PRICE_PLANS.monthly.map((item, index) => {
              const { title, content, price, type } = item;
              return (
                <StyledPricingCard
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
                    <Button variant="second" href="#" className="btn btnsecond">
                      Start Free Trial
                    </Button>
                    <Button href="#" className="btn btnmain">
                      Choose Plan
                    </Button>
                  </div>
                </StyledPricingCard>
              );
            })}
          {selectedOption === "yearly" &&
            PRICE_PLANS.yearly.map((item, index) => {
              const { title, content, price, type } = item;
              return (
                <StyledPricingCard
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
                    <Button variant="second" href="#" className="btn btnsecond">
                      Start Free Trial
                    </Button>
                    <Button href="#" className="btn btnmain">
                      Choose Plan
                    </Button>
                  </div>
                </StyledPricingCard>
              );
            })}
        </StyledPricingPlan>
      </div>
    </section>
  );
};

export default PricingComponent;
