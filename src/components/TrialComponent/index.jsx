import React from "react";

const TrialComponent = () => {
  return (
    <section className="trial --pd-b" id="trial">
      <div className="container">
        <div className="trialwrapper">
          {/* Backdrop */}
          <div className="backdrop">
            <img src="/assets/images/home/hero-banner.jpg" />
          </div>
          {/* Textbox group */}
          <div className="trial__textboxgroup textbox --left">
            <div className="textbox__content">
              <h2 className="textbox__content-heading --h2 --heading">
                Start your free trial today!
              </h2>
              <p className="textbox__content-paragraph">
                This is a clear and concise call to action that encourages users
                to sign up for a free trial of StreamVibe.
              </p>
            </div>
            <a href="#" className="textbox__btn btnmain">
              Start a Free Trail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialComponent;
