import React, { useState } from "react";
import { PRICE_PLANS_TABLE } from "../../../constants/general";

const PlanTableSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const _onSelectedPlan = (plan) => {
    setSelectedPlan(plan);
  };
  const selectedPricePlanIndex = PRICE_PLANS_TABLE.types.indexOf(selectedPlan);
  return (
    <section className="plantable --pd-b">
      <div className="container">
        <div className="plantable__textbox textbox --left">
          <div className="textbox__content">
            <h2 className="--h2">
              Compare our plans and find the right one for you
            </h2>
            <p className="textbox__content-paragraph">
              StreamVibe offers three different plans to fit your needs: Basic,
              Standard, and Premium. Compare the features of each plan and
              choose the one that's right for you.
            </p>
          </div>
        </div>
        <table className="plantable__table">
          <thead className="plantable__table-thead">
            <tr>
              <th>Featuers</th>
              <th>Basic</th>
              <th>
                Standard <span className="tag">Popular</span>
              </th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody className="plantable__table-tbody">
            {Object.keys(PRICE_PLANS_TABLE).map((feature, index) => {
              return (
                <tr key={feature || index}>
                  <td>{feature}</td>
                  {PRICE_PLANS_TABLE[feature].map((item, index) => {
                    if (feature === "price") {
                      return <td key={item + index}>${item}/Month</td>;
                    }
                    return <td key={item + index}>{item}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="plantable__mobile">
          <ul className="plantable__mobile-tab">
            {PRICE_PLANS_TABLE.types.map((item, index) => {
              return (
                <li key={index} onClick={() => _onSelectedPlan(item)}>
                  <a className={`${selectedPlan === item ? "active" : ""}`}>
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="plantable__mobile-content">
            <div className="row">
              <div className="col">
                <div className="col__title">Price</div>
                <div className="col__data">
                  ${PRICE_PLANS_TABLE.price[selectedPricePlanIndex]}/Month
                </div>
              </div>
              <div className="col">
                <div className="col__title">Free trial</div>
                <div className="col__data">
                  {PRICE_PLANS_TABLE.trial[selectedPricePlanIndex]}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="col__title">Content</div>
                <div className="col__data">
                  {PRICE_PLANS_TABLE.content[selectedPricePlanIndex]}{" "}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="col__title">Devices</div>
                <div className="col__data">
                  {PRICE_PLANS_TABLE.devices[selectedPricePlanIndex]}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="col__title">Cancel Anytime</div>
                <div className="col__data">
                  {PRICE_PLANS_TABLE.cancel[selectedPricePlanIndex]}
                </div>
              </div>
              <div className="col">
                <div className="col__title">HDR</div>
                <div className="col__data">
                  {PRICE_PLANS_TABLE.hdr[selectedPricePlanIndex]}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="col__title">Dolby Atmos</div>
                <div className="col__data">
                  {PRICE_PLANS_TABLE.dolby[selectedPricePlanIndex]}
                </div>
              </div>
              <div className="col">
                <div className="col__title">Ad - Free</div>
                <div className="col__data">
                  {PRICE_PLANS_TABLE.ad[selectedPricePlanIndex]}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="col__title">Offline Viewing</div>
                <div className="col__data">
                  {PRICE_PLANS_TABLE.offline[selectedPricePlanIndex]}
                </div>
              </div>
              <div className="col">
                <div className="col__title">Family Sharing</div>
                <div className="col__data">
                  {PRICE_PLANS_TABLE.family[selectedPricePlanIndex]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTableSection;
