import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { MODAL_TYPES } from "../../constants/modal";
import { PATHS } from "../../constants/paths";
import { message } from "antd";

const PrivacyRoute = () => {
  const { isLogin, handleShowModal } = useAuthContext();
  const navigate = useNavigate();
  const _onShowModal = () => {
    handleShowModal(MODAL_TYPES.login);
  };
  useEffect(() => {
    if (!isLogin) {
      navigate(PATHS.HOME);
      _onShowModal();
      message.warning("Please login to proceed");
    }
  }, []);
  return <Outlet />;
};

export default PrivacyRoute;
