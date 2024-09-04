import React from "react";
import Input from "../../Input";
import { Controller, useForm } from "react-hook-form";
import Checkbox from "../../Checkbox";
import { MESSAGE, notAvaiableMessage } from "../../../utils/message";
import {
  REGEX,
  loginValidate,
  registerValidate,
} from "../../../utils/validate";
import { message } from "antd";
import { useAuthContext } from "../../../context/AuthContext";
import Button from "../../Button";

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { handleRegister } = useAuthContext();
  const _onSubmit = (data) => {
    if (!data?.isAgree) {
      message.warning("Agree with our policy to register");
      return;
    }
    const modifiedData = { username: data?.email, password: data?.password };
    const userValidation = registerValidate(modifiedData);
    if (userValidation) {
      message.error("Account already registered! Try login instead");
    } else {
      handleRegister(modifiedData);
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
            defaultValue="123456"
            type="password"
            {...register("password", {
              required: MESSAGE.required,
            })}
            error={errors.password?.message}
          />
          <Controller
            control={control}
            name="isAgree"
            render={({ field }) => {
              return (
                <Checkbox
                  classes="--checkbox"
                  name="policy"
                  id="policy"
                  label="Agree to our policies"
                  {...field}
                />
              );
            }}
          />
          <Button
            as="button"
            variant="second"
            type="submit"
            className="btnsubmit"
          >
            Register
          </Button>
        </form>
      </div>
      <div className="modal__wrapper-break">
        <span>Login with socials</span>
      </div>
      <div className="modal__wrapper-socials">
        <a
          href="#"
          target="_blank"
          className="google"
          id="google"
          onClick={(e) => {
            e.preventDefault();
            notAvaiableMessage();
          }}
        >
          <div className="icon">
            <img srcSet="/assets/images/google-icon.png 2x" alt="google" />
          </div>
          Google
        </a>
        <a
          href="#"
          target="_blank"
          className="facebook"
          id="facebook"
          onClick={(e) => {
            e.preventDefault();
            notAvaiableMessage();
          }}
        >
          <div className="icon">
            <img srcSet="/assets/images/facebook-icon.png 2x" alt="facebook" />
          </div>
          Facebook
        </a>
      </div>
    </div>
  );
};

export default RegisterForm;
