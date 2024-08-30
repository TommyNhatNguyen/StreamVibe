import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top */}
        <ul className="footer__top">
          <li className="footer__top-item">
            <h5 className="--h5">Home</h5>
            <div className="navgroup">
              <a href="#explore" className="navgroup__item">
                Categories
              </a>
              <a href="#experience" className="navgroup__item">
                Devices
              </a>
              <a href="#pricing" className="navgroup__item">
                Pricing
              </a>
              <a href="#faq" className="navgroup__item">
                Faq
              </a>
            </div>
          </li>
          <li className="footer__top-item">
            <h5 className="--h5">Movies</h5>
            <div className="navgroup">
              <a href="#" className="navgroup__item">
                Gernes
              </a>
              <a href="#" className="navgroup__item">
                Trending
              </a>
              <a href="#" className="navgroup__item">
                New Release
              </a>
              <a href="#" className="navgroup__item">
                Popular
              </a>
            </div>
          </li>
          <li className="footer__top-item">
            <h5 className="--h5">Shows</h5>
            <div className="navgroup">
              <a href="#" className="navgroup__item">
                Gernes
              </a>
              <a href="#" className="navgroup__item">
                Trending
              </a>
              <a href="#" className="navgroup__item">
                New Release
              </a>
              <a href="#" className="navgroup__item">
                Popular
              </a>
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
              <a href="#" className="navgroup__item">
                Features
              </a>
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
            @2023 streamvib, All Rights Reserved
          </p>
          <div className="footer__bottom-policy">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
