import React from "react";

const ExperienceSection = () => {
  return (
    <section className="experience --pd-b" id="experience">
      <div className="container">
        {/* Textbox group */}
        <div className="experience__textboxgroup textbox --left">
          <div className="textbox__content">
            <h2 className="textbox__content-heading --h2 --heading">
              We Provide you streaming experience across various devices.
            </h2>
            <p className="textbox__content-paragraph">
              With StreamVibe, you can enjoy your favorite movies and TV shows
              anytime, anywhere. Our platform is designed to be compatible with
              a wide range of devices, ensuring that you never miss a moment of
              entertainment.
            </p>
          </div>
        </div>
        {/* Cardgroup */}
        <ul className="experience__cards">
          <li className="experience__cards-item active">
            <div className="titlegroup">
              <div className="titlegroup__icon">
                <div>
                  <img srcSet="./assets/images/smartphone-icon.png 2x" />
                </div>
              </div>
              <h3 className="titlegroup__title --h3">Smartphones</h3>
            </div>
            <p className="content">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </li>
          <li className="experience__cards-item">
            <div className="titlegroup">
              <div className="titlegroup__icon">
                <div>
                  <img srcSet="./assets/images/tablet-icon.png 2x" />
                </div>
              </div>
              <h3 className="titlegroup__title --h3">Tablet</h3>
            </div>
            <p className="content">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </li>
          <li className="experience__cards-item">
            <div className="titlegroup">
              <div className="titlegroup__icon">
                <div>
                  <img srcSet="./assets/images/smarttv-icon.png 2x" />
                </div>
              </div>
              <h3 className="titlegroup__title --h3">Smart TV</h3>
            </div>
            <p className="content">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </li>
          <li className="experience__cards-item">
            <div className="titlegroup">
              <div className="titlegroup__icon">
                <div>
                  <img srcSet="./assets/images/laptop-icon.png 2x" />
                </div>
              </div>
              <h3 className="titlegroup__title --h3">Laptops</h3>
            </div>
            <p className="content">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </li>
          <li className="experience__cards-item">
            <div className="titlegroup">
              <div className="titlegroup__icon">
                <div>
                  <img srcSet="./assets/images/gaming-icon.png 2x" />
                </div>
              </div>
              <h3 className="titlegroup__title --h3">Gaming Consoles</h3>
            </div>
            <p className="content">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </li>
          <li className="experience__cards-item">
            <div className="titlegroup">
              <div className="titlegroup__icon">
                <div>
                  <img srcSet="./assets/images/headset-icon.png 2x" />
                </div>
              </div>
              <h3 className="titlegroup__title --h3">VR Headsets </h3>
            </div>
            <p className="content">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;
