import React from "react";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import { Controller, useForm } from "react-hook-form";
import { MESSAGE } from "../../../utils/message";
import { REGEX } from "../../../utils/validate";
import { message } from "antd";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const _onSubmit = (data) => {
    if (!data?.isAgree) {
      message.warning("Please agree with our policy to continue");
      return;
    }
    message.success("We will contact you soon!");
    reset();
  };
  return (
    <section className="contact --pd-b">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact__content">
            <div className="contact__content-textbox textbox">
              <div className="textbox__content">
                <h2 className="textbox__content-heading --h2">
                  Welcome to our support page!
                </h2>
                <p className="textbox__content-paragraph">
                  We're here to help you with any problems you may be having
                  with our product.
                </p>
              </div>
              <div className="textbox__img">
                <img
                  src="/assets/images/support/thumnail-1.jpg"
                  alt="thumbnail"
                />
              </div>
            </div>
          </div>
          <div className="contact__form">
            <div className="contact__form-wrapper">
              <form className="form" onSubmit={handleSubmit(_onSubmit)}>
                <div className="form__row">
                  <Input
                    label="FirstName"
                    type="text"
                    id="firstName"
                    placeholder="Enter First Name"
                    {...register("firstName", { required: MESSAGE.required })}
                    error={errors?.firstName?.message}
                  />
                  <Input
                    label="LastName"
                    type="text"
                    id="lastName"
                    placeholder="Enter Last Name"
                    {...register("lastName", { required: MESSAGE.required })}
                    error={errors?.lastName?.message}
                  />
                </div>
                <div className="form__row">
                  <Input
                    label="Email"
                    id="email"
                    type="text"
                    placeholder="Enter your Email"
                    {...register("email", {
                      required: MESSAGE.required,
                      pattern: {
                        message: MESSAGE.email,
                        value: REGEX.email,
                      },
                    })}
                    error={errors?.email?.message}
                  />
                  <Input
                    label="Phone Number"
                    id="phone"
                    type="phone"
                    placeholder="Enter Phone Number"
                    {...register("phone", {
                      required: MESSAGE.required,
                      pattern: {
                        message: MESSAGE.phone,
                        value: REGEX.phone,
                      },
                    })}
                    error={errors?.phone?.message}
                  />
                </div>
                <div className="form__row">
                  <Input
                    label="Message"
                    placeholder="Enter your Message"
                    id="message"
                    classes="--textarea"
                    {...register("message", { required: MESSAGE.required })}
                    error={errors?.message?.message}
                    renderInput={(inputProps, ref) => {
                      return (
                        <textarea
                          className={`formgroup__input --textarea ${
                            errors?.message?.message ? "--error" : ""
                          }`}
                          {...inputProps}
                        />
                      );
                    }}
                  />
                </div>
                <div className="form__row">
                  <Controller
                    control={control}
                    name="isAgree"
                    render={({ field }) => {
                      return (
                        <Checkbox
                          classes="--checkbox"
                          name="policy"
                          id="policy"
                          label="I agree with Terms of Use and Privacy Policy"
                          {...field}
                        />
                      );
                    }}
                  />

                  <button type="submit" className="btnmain">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
