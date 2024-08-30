import React from "react";
import SearchComponent from "../SearchComponent";
import { useMainContext } from "../../context/MainContext";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../constants/paths";

const MobileMenu = () => {
  const { showNavMenu, handleShowNavMenu } = useMainContext();
  const _onCloseNavMenu = (e) => {
    handleShowNavMenu(false);
  };
  return (
    <div
      className={classNames("mobile-menu", {
        active: showNavMenu,
      })}
    >
      <div className="mobile-menu-container">
        <div className="mobile-menu-wrapper">
          <span
            className="mobile-menu-close"
            onClick={(e) => _onCloseNavMenu(e)}
          >
            <span></span>
          </span>
          <SearchComponent />
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="mobile-menu-tab"
              role="tabpanel"
              aria-labelledby="mobile-menu-link"
            >
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li>
                    <NavLink to={PATHS.HOME}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.MOVIE.INDEX}>Movies & Shows</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.SUPPORT}>Support</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.SUBSCRIPTION}>Subscriptions</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
