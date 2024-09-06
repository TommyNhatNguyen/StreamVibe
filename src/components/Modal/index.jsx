import React from "react";
import classNames from "classnames";
import { MODAL_TYPES } from "../../constants/modal";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useAuthContext } from "../../context/AuthContext";
import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const StyledModalWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  padding: var(--pd-container);
  background-color: initial;
  transition: var(--transition-duration);
  z-index: 10000;
  &.active {
    background-color: rgba(38, 38, 38, 0.8);
    pointer-events: initial;
    .modal__wrapper {
      pointer-events: initial;
      opacity: 1;
      visibility: 1;
    }
  }
  .modal__wrapper {
    position: relative;
    height: fit-content;
    min-height: 500px;
    max-height: 800px;
    max-width: 473px;
    width: 100%;
    background-color: rgba(41, 41, 41, 0.3);
    backdrop-filter: blur(12px);
    padding: 32px;
    border-radius: 12px;
    opacity: 0;
    visibility: 0;
    pointer-events: none;
    transition: var(--transition-duration);
    .modal__wrapper-tabs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      margin-top: 32px;
      padding: 8px 10px;
      border-radius: 10px;
      border: 1px solid var(--black-cl-3);
      background-color: var(--black-cl-4);
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        padding: 12px 24px;
        border-radius: 10px;
        color: var(--white-cl);
        font-family: var(--ff-medium);
        transition: var(--transition-duration);
        text-transform: capitalize;
        &:hover,
        &.active {
          background-color: var(--black-cl-5);
        }
      }
    }
    .modal-contentwrapper {
      margin-top: 24px;
      .modal__wrapper-form {
        form {
          .formgroup {
            margin-bottom: 24px;
            &__label {
              color: var(--white-cl);
              font-family: var(--ff-medium);
            }
            &__input {
              &::placeholder {
                color: var(--gray-cl);
              }
            }
            &.--checkbox {
              .checkbox__group {
                height: 21px;
                width: 21px;
                &-icon {
                  z-index: 10;
                  i {
                    color: var(--black-cl);
                  }
                }
                &::after {
                  z-index: 0;
                  background-color: var(--white-cl);
                }
              }
            }
          }
          .btnsubmit {
            max-width: initial;
            width: 100%;
            font-family: var(--ff-semibold);
            &:hover {
              background-color: var(--red-light-cl);
              border: 0;
            }
          }
        }
      }
      .modal__wrapper-break {
        margin-top: 32px;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        &::after {
          content: "";
          background-color: var(--black-cl-3);
          width: 100%;
          height: 1px;
          background: var(--dark-gray-cl);
          background: linear-gradient(
            to right,
            rgba(128, 128, 128, 1) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        &::before {
          content: "";
          background-color: var(--black-cl-3);
          width: 100%;
          height: 1px;
          background: var(--dark-gray-cl);
          background: linear-gradient(
            to left,
            rgba(128, 128, 128, 1) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        span {
          text-wrap: nowrap;
        }
      }
      .modal__wrapper-socials {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        gap: 10px;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 20px;
          background-color: var(--black-cl);
          border: 1px solid var(--black-cl-3);
          border-radius: 8px;
          gap: 12px;
          color: var(--white-cl);
          transition: var(--transition-duration);
          .icon {
            height: 24px;
          }
          &:hover {
            background-color: var(--black-cl-5);
          }
        }
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .modal__wrapper {
      padding .modal__wrapper-tabs {
        a {
          &:hover,
          &.active {
            background-color: var(--black-cl-5);
          }
        }
      }
      .modal-contentwrapper {
        margin-top: 14px;
        .modal__wrapper-form {
          form {
            .formgroup {
              margin-bottom: 14px;
            }
          }
        }
        .modal__wrapper-break {
          margin-top: 22px;
          margin-bottom: 22px;
        }
        .modal__wrapper-socials {
          a {
            padding: 10px 18px;
          }
        }
      }
    }
  }
`;

const StyledCloseButton = styled.a`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  cursor: pointer;
  i {
    font-size: var(--fs-h1);
  }
`;

const Modal = () => {
  const { showModal, handleShowModal } = useAuthContext();
  const _onCloseModal = (e) => {
    e.preventDefault();
    handleShowModal("");
  };
  const _onShowModal = (e, modalType) => {
    e.preventDefault();
    handleShowModal(modalType);
  };
  return (
    <StyledModalWrapper
      className={classNames("modal", {
        active: !!showModal,
      })}
    >
      <div className="modal__wrapper">
        <div className="modal__wrapper-title">
          <h2 className="--h2">Explore your movie life</h2>
          <p className="paragraph">Choose one of the option to go</p>
        </div>
        <div className="modal__wrapper-tabs">
          <a
            href="#"
            id="login"
            className={classNames({ active: showModal === MODAL_TYPES.login })}
            onClick={(e) => _onShowModal(e, MODAL_TYPES.login)}
          >
            Login
          </a>
          <a
            href="#"
            id="register"
            className={classNames({
              active: showModal === MODAL_TYPES.register,
            })}
            onClick={(e) => _onShowModal(e, MODAL_TYPES.register)}
          >
            Register
          </a>
        </div>
        {showModal === MODAL_TYPES.login && <LoginForm />}
        {showModal === MODAL_TYPES.register && <RegisterForm />}
        <StyledCloseButton
          type="button"
          className="close"
          aria-label="Close"
          onClick={(e) => _onCloseModal(e)}
        >
          <i className="bi bi-x"></i>
        </StyledCloseButton>
      </div>
    </StyledModalWrapper>
  );
};

export default Modal;
