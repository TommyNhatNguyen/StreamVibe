import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { notAvaiableMessage } from "../../utils/message";

const HOME_PATHS = [
  { id: "explore", value: "Categories" },
  { id: "experience", value: "Devices" },
  { id: "pricing", value: "Pricing" },
  { id: "faq", value: "FAQ" },
];

const MOVIE_PATHS = [
  { id: "genres", value: "Gernes" },
  { id: "trending", value: "Trending" },
  { id: "new", value: "New Release" },
  { id: "popular", value: "Popular" },
];

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className="footer">
      <div className="container">
        {/* Top */}
        <ul className="footer__top">
          <li className="footer__top-item">
            <h5 className="--h5">Home</h5>
            <div className="navgroup">
              {pathname === PATHS.HOME
                ? HOME_PATHS.map((item, index) => {
                    const { id, value } = item || {};
                    return (
                      <a key={id} href={`#${id}`} className="navgroup__item">
                        {value}
                      </a>
                    );
                  })
                : HOME_PATHS.map((item, index) => {
                    const { id, value } = item || {};
                    return (
                      <Link
                        key={id || index}
                        to={PATHS.HOME}
                        className="navgroup__item"
                      >
                        {value}
                      </Link>
                    );
                  })}
            </div>
          </li>
          <li className="footer__top-item">
            <h5 className="--h5">Movies</h5>
            <div className="navgroup">
              {pathname === PATHS.MOVIE.INDEX
                ? MOVIE_PATHS.map((item, index) => {
                    const { id, value } = item;
                    return (
                      <a
                        key={id || index}
                        href={`#${id}`}
                        className="navgroup__item"
                      >
                        {value}
                      </a>
                    );
                  })
                : MOVIE_PATHS.map((item, index) => {
                    const { id, value } = item;
                    return (
                      <Link key={id || index} to={PATHS.MOVIE.INDEX}>
                        {value}
                      </Link>
                    );
                  })}
            </div>
          </li>
          <li className="footer__top-item">
            <h5 className="--h5">Support</h5>
            <div className="navgroup">
              <Link to={PATHS.SUPPORT} className="navgroup__item">
                Contact Us
              </Link>
            </div>
          </li>
          <li className="footer__top-item">
            <h5 className="--h5">Subscription</h5>
            <div className="navgroup">
              <Link to={PATHS.SUBSCRIPTION} className="navgroup__item">
                Plans
              </Link>
              <Link to={PATHS.SUBSCRIPTION} className="navgroup__item">
                Features
              </Link>
            </div>
          </li>
          <li className="footer__top-item">
            <h5 className="--h5">Connect With Us</h5>
            <div className="socials">
              <a href="#" target="_blank" className="socials__item">
                <img srcSet="/assets/images/facebook-icon.png 2x" />
              </a>
              <a href="#" target="_blank" className="socials__item">
                <img srcSet="/assets/images/twitter-icon.png 2x" />
              </a>
              <a href="#" target="_blank" className="socials__item">
                <img srcSet="/assets/images/linkedin-icon.png 2x" />
              </a>
            </div>
          </li>
        </ul>
        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__bottom-copyright">
            @2024 Tommy Nguyen, All Rights Reserved
          </p>
          <div className="footer__bottom-policy">
            <a href="#" onClick={(e) => notAvaiableMessage()}>
              Terms of Use
            </a>
            <a href="#" onClick={(e) => notAvaiableMessage()}>
              Privacy Policy
            </a>
            <a href="#" onClick={(e) => notAvaiableMessage()}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
