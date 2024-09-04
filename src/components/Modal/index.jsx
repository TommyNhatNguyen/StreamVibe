import React from "react";
import classNames from "classnames";
import { MODAL_TYPES } from "../../constants/modal";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useAuthContext } from "../../context/AuthContext";
import styled from "styled-components";

const StyledModalWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  padding: var(--pd-container);
  background-color: initial;
  transition: var(--transition-duration);
  &.active {
    background-color: rgba(38, 38, 38, 0.8);
    .modal__wrapper {
      opacity: 1;
      visibility: 1;
      pointer-events: initial;
    }
  }
  .modal__wrapper {
    position: relative;
    min-height: 500px;
    max-width: 565px;
    width: 100%;
    background-color: var(--white-cl);
    padding: 50px;
    border-radius: 8px;
    opacity: 0;
    visibility: 0;
    pointer-events: none;
    transition: var(--transition-duration);
    .modal__wrapper-tabs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      height: 50px;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        border-bottom: 1px solid var(--white-cl);
        color: var(--black-cl);
        font-family: var(--ff-semibold);
        transition: var(--transition-duration);
        text-transform: uppercase;
        &:hover,
        &.active {
          border-bottom: 1px solid var(--black-cl-3);
        }
      }
    }
    .modal-contentwrapper {
      .modal__wrapper-form {
        margin-top: 20px;
        form {
          .formgroup {
            margin-bottom: 20px;
            &__label {
              color: var(--black-cl);
            }
          }
          .btnsubmit {
            background-color: transparent;
            color: var(--black-cl);
          }
        }
      }
      .modal__wrapper-break {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        &::after {
          content: "";
          background-color: var(--black-cl-3);
          width: 100%;
          height: 1px;
          background: rgb(38, 38, 38);
          background: linear-gradient(
            to right,
            rgba(38, 38, 38, 1) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        &::before {
          content: "";
          background-color: var(--black-cl-3);
          width: 100%;
          height: 1px;
          background: rgb(38, 38, 38);
          background: linear-gradient(
            to left,
            rgba(38, 38, 38, 1) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        span {
          text-wrap: nowrap;
        }
      }
      .modal__wrapper-socials {
        height: 50px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        gap: 10px;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          background-color: var(--black-cl-3);
          border-radius: 8px;
          gap: 10px;
          font-family: var(--ff-medium);
          color: var(--white-cl);
          .icon {
            height: 24px;
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
