import styled from "styled-components";
import { breakpoints } from "../../constants/media";
export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  &.search__input {
    height: 61px;
    .ant-input {
      height: 100%;
      border-radius: 12px;
      color: var(--black-cl);
      font-family: var(--ff-semibold);
      font-size: var(--fs-h4);
      &:focus,
      &:hover {
        border: 1px solid var(--red-cl);
      }
      &::placeholder {
        color: var(--gray-cl);
        font-family: var(--ff-semibold);
        font-size: var(--fs-h4);
      }
    }
  }
  .formgroup__label {
    color: var(--white-cl);
    font-family: var(--ff-semibold);
    margin-bottom: 16px;
    display: flex;
  }
  .formgroup__input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--black-cl-3);
    background: var(--black-cl);
    height: 67px;
    padding: 0 20px;
    color: var(--white-cl);
    caret-color: var(--white-cl);
    font-size: var(--fs-body);
    transition: var(--transition-duration);
    outline: 1px solid transparent;
    &:focus {
      outline: 1px solid var(--white-cl);
    }
    &::placeholder {
      text-transform: capitalize;
      font-size: var(--fs-body);
      font-family: var(--ff-regular);
    }
    &.--textarea {
      min-height: 163px;
      padding-top: 20px;
    }

    &.--error {
      border-color: var(--red-cl);
    }
  }
  .formgroup__icon {
    &.password {
      position: absolute;
      right: 20px;
      top: 62px;
      height: 24px;
      aspect-ratio: 1 /1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .password__show,
      .password__hide {
        position: absolute;
        left: 0;
      }
    }
  }
  .input-error {
    margin-top: 5px;
    color: var(--red-cl);
  }

  &.--checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    .checkbox__group {
      cursor: pointer;
      position: relative;
      height: 15px;
      width: 15px;
      input {
        height: 100%;
        width: 100%;
        margin: initial;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        opacity: 0;
        visibility: 0;
        &:checked {
          + .checkbox__group-icon {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      }
      &::after {
        content: "";
        height: 100%;
        width: 100%;
        border: 1px solid var(--black-cl);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 4px;
      }
      &-icon {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        pointer-events: none;
        transition: var(--transition-duration);
      }
    }
    .checkbox-label {
      border-color: var(--white-cl);
      width: 28px;
      height: 28px;
      border-radius: 4px;
    }
  }

  @media (max-width: ${breakpoints.desktop}px) {
    .formgroup__input {
      height: 53px;
      padding: 0 16px;
      &.--textarea {
        min-height: 129px;
      }
    }
  }
  @media (max-width: ${breakpoints.mobile}px) {
    .formgroup__input {
      &.--textarea {
        min-height: 109px;
      }
    }
  }
`;
