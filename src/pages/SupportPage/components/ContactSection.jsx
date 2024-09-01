import React from "react";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import { Controller, useForm } from "react-hook-form";
import { MESSAGE } from "../../../utils/message";
import { REGEX } from "../../../utils/validate";
import { message } from "antd";
import styled from "styled-components";
import Textbox from "../../../components/Textbox";
import { breakpoints } from "../../../constants/media";
import Button from "../../../components/Button";

const StyledContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.83fr;
  justify-content: space-between;
  gap: 80px;
  padding-top: 110px;
  @media (max-width: ${breakpoints.desktop}) {
    gap: 50px;
    padding-top: 100px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding-top: 40px;
  }
`;

const StyledContactContent = styled.div`
  flex-shrink: 0;
  .textbox {
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    &__content {
      max-width: initial;
    }
    &__img {
      height: 100%;
      width: 100%;
      aspect-ratio: 533 / 477;
      max-height: 477px;
      overflow: hidden;
      border: 6px solid var(--black-cl-3);
      border-radius: 6px;
      background-image: url("/assets/images/support/thumnail-1.jpg");
      background-repeat: no-repeat;
      background-attachment: local;
      background-size: cover;
      background-position: center;
    }
  }
`;

const StyledContactForm = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--black-cl-4);
  border: 1px solid var(--black-cl-3);
  border-radius: 12px;
  padding: 50px;
  .form {
    height: 100%;
    width: 100%;
    .form__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 50px;
      &:not(:first-child) {
        margin-top: 50px;
      }
      .btnmain {
        text-wrap: nowrap;
      }
      .formgroup.--checkbox {
        cursor: pointer;
        .checkbox__group {
          height: 24px;
          width: 24px;
          &::after {
            border: 1px solid var(--black-cl-3);
          }
        }
      }
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    padding: 40px;
    .form {
      .form__row {
        &:not(:first-child) {
          margin-top: 40px;
        }
      }
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 24px;
    .form {
      .form__row {
        flex-direction: column;
        gap: 20px;
        &:not(:first-child) {
          margin-top: 20px;
        }
        .btnmain {
          max-width: initial;
          width: 100%;
        }
      }
    }
  }
`;

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
        <StyledContactWrapper className="contact-wrapper">
          <StyledContactContent className="contact__content">
            <Textbox className="contact__content-textbox"></Textbox>
            <Textbox className="textbox">
              <Textbox.Content className="textbox__content">
                <h2 className="textbox__content-heading --h2 --heading">
                  Welcome to our support page!
                </h2>
                <p className="textbox__content-paragraph">
                  We're here to help you with any problems you may be having
                  with our product.
                </p>
              </Textbox.Content>
              <div className="textbox__img"></div>
            </Textbox>
          </StyledContactContent>
          <StyledContactForm className="contact__form">
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

                  <Button as="button" type="submit" className="btn btnmain">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </StyledContactForm>
        </StyledContactWrapper>
      </div>
    </section>
  );
};

export default ContactSection;
