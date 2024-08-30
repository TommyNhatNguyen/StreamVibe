import React from "react";
import classNames from "classnames";
import { MODAL_TYPES } from "../../constants/modal";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useAuthContext } from "../../context/AuthContext";

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
    <div
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
        <span className="btnclose" onClick={(e) => _onCloseModal(e)}>
          <span></span>
        </span>
      </div>
    </div>
  );
};

export default Modal;
