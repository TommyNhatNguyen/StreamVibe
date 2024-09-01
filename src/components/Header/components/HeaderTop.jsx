import React, { useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { MODAL_TYPES } from "../../../constants/modal";
import styled from "styled-components";

const StyledHeaderTopWrapper = styled.div`
  height: 30%;
  border-bottom: 1px solid var(--black-cl-3);
  .container {
    height: 100%;
  }
  .header__top-wrapper {
    height: 100%;
    .header__cta {
      height: 100%;

      &-auth {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
`;

const StyledDropdownWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  .header__dropdown-img {
    display: flex;
    align-items: center;
    width: 25px;
    aspect-ratio: 1 /1;
    margin-left: auto;
    border-radius: 100%;
    overflow: hidden;
    cursor: pointer;
    img {
      object-fit: cover;
    }
    &:hover + .header__dropdown-list {
      visibility: 1;
      opacity: 1;
      pointer-events: all;
    }
  }
  .header__dropdown-list {
    position: absolute;
    top: 30px;
    right: 0;
    max-width: 300px;
    visibility: 0;
    opacity: 0;
    z-index: 1000;
    transition: var(--transition-duration);
    background-color: var(--white-cl);
    padding: 20px;
    border-radius: 12px;
    pointer-events: none;
    &:hover,
    &.active {
      visibility: 1;
      opacity: 1;
      pointer-events: all;
    }
    .avatar {
      display: flex;
      align-items: center;
      gap: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid var(--black-cl-3);
      cursor: pointer;
      &__img {
        width: 60px;
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        overflow: hidden;
        flex-shrink: 0;
      }
      &__info {
        .--h5 {
          color: var(--black-cl);
          overflow-wrap: anywhere;
        }
      }
    }
    .dropdown-menu {
      margin-top: 15px;
      li {
        width: 100%;
        padding: 5px;
        cursor: pointer;
        &:hover > a {
          color: var(--red-cl);
        }
        &:not(:last-child) {
          padding-bottom: 10px;
        }
        a {
          display: flex;
          align-items: center;
          height: 100%;
          width: 100%;
          gap: 5px;
          color: var(--black-cl);
          transition: var(--transition-duration);
        }
      }
    }
  }
`;

const HeaderTop = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  const _onShowDropDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDropDown((prev) => !prev);
    document.body.addEventListener("click", () => setShowDropDown(false));
  };
  const { handleShowModal, isLogin, currentUser, handleLogout } =
    useAuthContext();
  const _onShowModal = (e, modalType) => {
    e.preventDefault();
    handleShowModal(modalType);
  };
  return (
    <StyledHeaderTopWrapper className="header__top">
      <div className="container">
        <div className="header__top-wrapper">
          {/* CTA Group */}
          {!isLogin && (
            <div className="header__cta">
              <div className="header__cta-auth">
                <a
                  href="#"
                  id="login"
                  onClick={(e) => {
                    _onShowModal(e, MODAL_TYPES.login);
                  }}
                >
                  Login
                </a>{" "}
                /{" "}
                <a
                  href="#"
                  id="register"
                  onClick={(e) => {
                    _onShowModal(e, MODAL_TYPES.register);
                  }}
                >
                  Register
                </a>
              </div>
            </div>
          )}
          {/* Login */}
          {isLogin && (
            <StyledDropdownWrapper className="header__dropdown">
              <div
                className="header__dropdown-img"
                onClick={(e) => _onShowDropDown(e)}
              >
                <img src="/assets/images/default-avatar.jpg" alt="avatar" />
              </div>
              <div
                className={`header__dropdown-list ${
                  showDropdown ? "active" : ""
                }`}
              >
                <a className="avatar">
                  <div className="avatar__img">
                    <img src="/assets/images/default-avatar.jpg" alt="avatar" />
                  </div>
                  <div className="avatar__info">
                    <h5 className="--h5">{currentUser}</h5>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="item">
                      <i className="bi bi-bookmark-star"></i>
                      <span>My favorites</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="item">
                      <i className="bi bi-list"></i>
                      <span>My watchlist</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="item">
                      <i className="bi bi-star"></i>
                      <span>My ratings</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="item logout" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right"></i>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </StyledDropdownWrapper>
          )}
        </div>
      </div>
    </StyledHeaderTopWrapper>
  );
};

export default HeaderTop;
