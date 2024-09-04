import React from "react";
import styled from "styled-components";
import Textbox from "../Textbox";
import Button from "../Button";
import { breakpoints } from "../../constants/media";
import { notAvaiableMessage } from "../../utils/message";

const StyledTrialWrapper = styled.div`
  height: 313px;
  width: 100%;
  background-image: url("/assets/images/home/hero-banner.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(15, 15, 15);
    background: linear-gradient(
      90deg,
      rgba(15, 15, 15, 1) 2%,
      rgba(20, 15, 15, 0.97) 16%,
      rgba(34, 14, 14, 0.9096) 28%,
      rgba(229, 0, 0, 0.3) 100%
    );
  }
  .trial__textboxgroup {
    padding: 100px 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
  }
  @media (max-width: ${breakpoints.desktop}) {
    height: 236px;
    .trial__textboxgroup {
      padding: 80px 60px;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 344px;
    .trial__textboxgroup {
      padding: 50px 30px;
      gap: 50px;
      .textbox__content {
        text-align: center;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(15, 15, 15);
      background: linear-gradient(
        180deg,
        rgba(15, 15, 15, 1) 2%,
        rgba(20, 15, 15, 0.97) 16%,
        rgba(34, 14, 14, 0.9096) 28%,
        rgba(229, 0, 0, 0.3) 100%
      );
    }
  }
`;

const TrialComponent = () => {
  return (
    <section className="trial --pd-b" id="trial">
      <div className="container">
        <StyledTrialWrapper className="trialwrapper">
          <Textbox className="trial__textboxgroup textbox">
            <Textbox.Content className="textbox__content">
              <h2 className="textbox__content-heading --h2 --heading">
                Start your free trial today!
              </h2>
              <p className="textbox__content-paragraph">
                This is a clear and concise call to action that encourages users
                to sign up for a free trial of StreamVibe.
              </p>
            </Textbox.Content>
            <Button className="btn btnmain" onClick={notAvaiableMessage}>
              Start a Free Trail
            </Button>
          </Textbox>
        </StyledTrialWrapper>
      </div>
    </section>
  );
};

export default TrialComponent;
