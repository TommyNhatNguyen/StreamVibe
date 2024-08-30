import React from "react";
import Input from "../../Input";
import { useForm } from "react-hook-form";
import { MESSAGE } from "../../../utils/message";
import { REGEX, loginValidate } from "../../../utils/validate";
import { useAuthContext } from "../../../context/AuthContext";
import { message } from "antd";
import { sessionMethod } from "../../../utils/sessionMethod";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const { handleLogin } = useAuthContext();
  const _onSubmit = async (data) => {
    const modifiedData = { username: data?.email, password: data?.password };
    const userValidation = loginValidate(modifiedData);
    if (userValidation) {
      const userSessionId = userValidation?.session_id;
      sessionMethod.set({ session_id: userSessionId });
      handleLogin();
    } else {
      message.error("Wrong email or password");
    }
  };
  return (
    <div className="modal-contentwrapper">
      <div className="modal__wrapper-form">
        <form action="#" className="form" onSubmit={handleSubmit(_onSubmit)}>
          <Input
            label="Email"
            placeholder="Email"
            defaultValue="demo@gmail.com"
            type="text"
            {...register("email", {
              required: MESSAGE.required,
              pattern: { value: REGEX.email, message: MESSAGE.email },
            })}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            placeholder="Password"
            defaultValue="demo123"
            type="password"
            {...register("password", {
              required: MESSAGE.required,
            })}
            error={errors.password?.message}
          />
          <button type="submit" className="btnsubmit">
            Login
          </button>
        </form>
      </div>
      <div className="modal__wrapper-break">
        <span>Login with socials</span>
      </div>
      <div className="modal__wrapper-socials">
        <a href="#" target="_blank" className="google" id="google">
          <div className="icon">
            <img srcSet="/assets/images/google-icon.png 2x" alt="google" />
          </div>
          Google
        </a>
        <a href="#" target="_blank" className="facebook" id="facebook">
          <div className="icon">
            <img srcSet="/assets/images/facebook-icon.png 2x" alt="facebook" />
          </div>
          Facebook
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
