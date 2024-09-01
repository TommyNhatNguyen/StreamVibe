import styled from "styled-components";
import { breakpoints } from "../../constants/media";
export const InputWrapper = styled.div`
  width: 100%;
  .formgroup__label {
    /* color: var(--white-cl); */
    font-family: var(--ff-semibold);
    margin-bottom: 16px;
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
  .input-error {
    margin-top: 5px;
    color: var(--red-cl);
  }

  &.--checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    .checkbox__group {
      position: relative;
      height: 15px;
      width: 15px;
      input {
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
        border-radius: 3px;
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
