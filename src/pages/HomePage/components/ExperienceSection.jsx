import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../constants/media";
import Textbox from "../../../components/Textbox";

const StyledCardsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  grid-gap: 30px;
  @media (max-width: ${breakpoints.desktop}) {
    grid-gap: 20px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: initial;
  }
`;

const StyledCard = styled.li`
  width: 100%;
  aspect-ratio: 512.33 / 283;
  padding: 50px;
  border: 1px solid var(--black-cl-3);
  background-color: var(--black-cl);
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  &::after {
    content: "";
    top: -450px;
    left: 200px;
    height: 200%;
    width: 200%;
    position: absolute;
    background: linear-gradient(-135deg, var(--red-cl), transparent);
    filter: blur(150px);
  }
  .titlegroup {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
    &__icon {
      height: 72px;
      aspect-ratio: 1 / 1;
      padding: 16px;
      border-radius: 12px;
      border: 1px solid var(--black-cl-5);
      background-color: var(--black-cl);
      img {
        object-fit: contain;
      }
    }
  }
  .content {
    display: -webkit-inline-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  @media (max-width: ${breakpoints.desktop}) {
    aspect-ratio: 413 / 230;
    padding: 40px;
    .titlegroup {
      margin-bottom: 14px;
      &__icon {
        height: 54px;
        padding: 12px;
      }
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    max-height: 175px;
    aspect-ratio: 361 / 175;
    padding: 24px;
    .titlegroup {
      margin-bottom: 10px;
      &__icon {
        height: 44px;
        padding: 10px;
      }
    }
  }
`;

const ExperienceSection = () => {
  return (
    <section className="experience --pd-b" id="experience">
      <div className="container">
        <Textbox className="textbox">
          <Textbox.Content className="textbox__content">
            <h2 className="textbox__content-heading --h2 --heading">
              We Provide you streaming experience across various devices.
            </h2>
            <p className="textbox__content-paragraph">
              With StreamVibe, you can enjoy your favorite movies and TV shows
              anytime, anywhere. Our platform is designed to be compatible with
              a wide range of devices, ensuring that you never miss a moment of
              entertainment.
            </p>
          </Textbox.Content>
        </Textbox>
        {/* Cardgroup */}
        <StyledCardsWrapper className="experience__cards">
          <StyledCard className="experience__cards-item active">
            <div className="titlegroup">
              <div className="titlegroup__icon">
                <img srcSet="./assets/images/smartphone-icon.png 2x" />
              </div>
              <h3 className="titlegroup__title --h3">Smartphones</h3>
            </div>
            <p className="content">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </StyledCard>
          <StyledCard className="experience__cards-item">
            <div className="titlegroup">
              <div className="titlegroup__icon">
                <img srcSet="./assets/images/tablet-icon.png 2x" />
              </div>
              <h3 className="titlegroup__title --h3">Tablet</h3>
            </div>
            <p className="content">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </StyledCard>
          <StyledCard className="experience__cards-item">
            <div className="titlegroup">
              <div className="titlegroup__icon">
                <img srcSet="./assets/images/smarttv-icon.png 2x" />
              </div>
              <h3 className="titlegroup__title --h3">Smart TV</h3>
            </div>
            <p className="content">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </StyledCard>
          <StyledCard className="experience__cards-item">
            <div className="titlegroup">
              <div className="titlegroup__icon">
                <img srcSet="./assets/images/laptop-icon.png 2x" />
              </div>
              <h3 className="titlegroup__title --h3">Laptops</h3>
            </div>
            <p className="content">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </StyledCard>
          <StyledCard className="experience__cards-item">
            <div className="titlegroup">
              <div className="titlegroup__icon">
                <img srcSet="./assets/images/gaming-icon.png 2x" />
              </div>
              <h3 className="titlegroup__title --h3">Gaming Consoles</h3>
            </div>
            <p className="content">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </StyledCard>
          <StyledCard className="experience__cards-item">
            <div className="titlegroup">
              <div className="titlegroup__icon">
                <img srcSet="./assets/images/headset-icon.png 2x" />
              </div>
              <h3 className="titlegroup__title --h3">VR Headsets </h3>
            </div>
            <p className="content">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </StyledCard>
        </StyledCardsWrapper>
      </div>
    </section>
  );
};

export default ExperienceSection;
