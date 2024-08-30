import styled from "styled-components";
import { breakpoints } from "../../constants/media";

export const MovieContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2.03fr 1fr;
  gap: 20px;
  .moviecontent__content {
    overflow: hidden;
    &-row {
      border-radius: 12px;
      background-color: var(--black-cl-2);
      border: 1px solid var(--black-cl-3);
      padding: 50px;
      &:not(:last-child) {
        margin-bottom: 30px;
      }
      .title-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .btnsecond {
          height: 58px;
          display: flex;
          align-items: center;
          gap: 4px;
          .icon {
            width: 30px;
            height: 30px;
          }
        }
        .title {
          font-family: var(--ff-medium);
        }
      }
      .reviews-wrapper {
        margin-top: 40px;
        display: flex;
        align-items: center;
        overflow-x: scroll;
        list-style-type: none;
        &::-webkit-scrollbar {
          display: none;
        }
        gap: 20px;
        .review {
          flex-shrink: 0;
          height: 265px;
          aspect-ratio: 468 / 265;
          padding: 40px;
          border-radius: 12px;
          overflow: hidden;
          background-color: var(--black-cl-4);
          border: 1px solid var(--black-cl-3);
          overflow-y: scroll;
          &::-webkit-scrollbar {
            width: 3px;
          }
          &::-webkit-scrollbar-track {
            background: var(--black-cl);
          }
          &::-webkit-scrollbar-thumb {
            background: var(--black-cl-3);
          }
          &__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title-wrapper {
              flex-direction: column;
              align-items: flex-start;
              .paragraph {
                margin-top: initial;
                color: var(--gray-cl);
              }
            }
            .rating {
              height: 39px;
            }
          }
          .paragaph {
            margin-top: 20px;
          }
        }
      }
      .textbox__btngroup {
        background-color: initial;
        border: initial;
        height: 52px;
        margin-top: 40px;
        justify-content: initial;
        margin-right: auto;
        margin-left: auto;
        max-width: fit-content;
        &-btncontrol {
          height: 52px;
          padding: 14px;
          border: 1px solid var(--black-cl-3);
          border-radius: 100%;
          background-color: var(--black-cl);
          transition: var(--transition-duration);
          &:hover {
            opacity: var(--opacity-hover);
          }
          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
      }
      .castlist {
        margin-top: 30px;
        /* display: flex;
        align-items: center;
        flex-wrap: nowrap;
        overflow-x: scroll; */
        &__img {
          aspect-ratio: 102 / 109;
          max-height: 109px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          list-style-type: none;
          a {
            height: 100%;
            width: 100%;
            img {
              object-fit: cover;
            }
          }
          /* &:not(:last-child) {
            margin-right: 20px;
          } */
        }
      }
      .paragraph {
        font-family: var(--ff-medium);
        color: var(--white-cl);
        margin-top: 14px;
      }
    }
  }
  .moviecontent__info {
    flex-shrink: 0;
    padding: 50px;
    border-radius: 12px;
    background-color: var(--black-cl-2);
    border: 1px solid var(--black-cl-3);
    &-row {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
      .title-wrapper {
        display: flex;
        align-items: center;
        gap: 4px;
        .icon {
          height: 18px;
          aspect-ratio: 18 / 18;
          img {
            object-fit: cover;
          }
        }
        .title {
          font-family: var(--ff-medium);
          color: var(--gray-cl);
        }
      }
      .content-wrapper {
        margin-top: 14px;
        .taglist {
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 10px;
          max-height: 250px;
          overflow-y: scroll;
          &::-webkit-scrollbar {
            width: 3px;
          }
          &::-webkit-scrollbar-track {
            background: var(--black-cl);
          }
          &::-webkit-scrollbar-thumb {
            background: var(--black-cl-3);
          }
          &__tag {
            height: 43px;
            padding: 8px 14px;
            font-family: var(--ff-medium);
            color: var(--white-cl);
            border-radius: 8px;
            background-color: var(--black-cl);
            border: 1px solid var(--black-cl-3);
          }
        }
        .paragraph {
          font-family: var(--ff-medium);
          color: var(--white-cl);
        }
        .rating-wrapper {
          display: flex;
          align-items: center;
          gap: 20px;
          max-height: 96px;
          &__item {
            aspect-ratio: 199.5 / 96;
            height: 100%;
            border-radius: 8px;
            padding: 16px;
            border: 1px solid var(--black-cl-3);
            background-color: var(--black-cl);
          }
        }
        .avatar-wrapper {
          height: 88px;
          padding: 14px;
          background-color: var(--black-cl);
          border: 1px solid var(--black-cl-3);
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
          &__img {
            aspect-ratio: 56.56 / 60;
            height: 60px;
            border-radius: 8px;
            overflow: hidden;
            img {
              object-fit: cover;
            }
          }
          &__content {
            .title {
              font-family: var(--ff-medium);
              color: var(--white-cl);
            }
            .paragraph {
              color: var(--gray-cl);
            }
          }
        }
      }
    }
  }
  @media (max-width: ${breakpoints.desktop}px) {
    .moviecontent__content {
      &-row {
        padding: 40px;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
        .title-wrapper {
          .btnsecond {
            height: 48px;
            .icon {
              width: 24px;
              height: 24px;
            }
          }
        }
        .reviews-wrapper {
          margin-top: 30px;
          gap: 16px;
          .review {
            height: 223px;
            aspect-ratio: 377 / 223;
            padding: 30px;
            &__title {
              .rating {
                height: 29px;
              }
            }
            .paragaph {
              margin-top: 16px;
            }
          }
        }
        .textbox__btngroup {
          height: 44px;
          margin-top: 30px;
          &-btncontrol {
            height: 44px;
            padding: 12px;
          }
        }
        .castlist {
          margin-top: 20px;
          &__img {
            aspect-ratio: 87.5 / 89;
            max-height: 89px;
            /* &:not(:last-child) {
              margin-right: 10px;
            } */
          }
        }
        .paragraph {
          margin-top: 10px;
        }
      }
    }
    .content-wrapper {
      margin-top: 10px;
      .taglist {
        &__tag {
          height: 33px;
          padding: 12px 6px;
        }
      }
      .rating-wrapper {
        gap: 16px;
        max-height: 77px;
        &__item {
          aspect-ratio: 160 / 77;
          padding: 14px;
        }
      }
      .avatar-wrapper {
        height: 74px;
        padding: 12px;
        gap: 8px;
        &__img {
          aspect-ratio: 47 / 50;
          height: 50px;
        }
      }
    }
  }
  @media (max-width: ${breakpoints.mobile}px) {
    grid-template-columns: initial;
    .moviecontent__content {
      order: 1;
      &-row {
        padding: 24px;
        .reviews-wrapper {
          margin-top: 24px;
          .review {
            min-height: fit-content;
            height: 214px;
            aspect-ratio: 310 / 214;
            padding: 24px;
          }
        }
        .textbox__btngroup {
          display: flex;
        }
        .castlist {
          margin-top: 16px;
          &__img {
            aspect-ratio: 70 / 75;
            max-height: 75px;
          }
        }
        .paragraph {
          margin-top: 8px;
        }
      }
    }
    .content-wrapper {
      .rating-wrapper {
        max-height: 68px;
        &__item {
          aspect-ratio: 147 / 68;
          padding: 12px;
        }
      }
      .avatar-wrapper {
        height: 70px;
        padding: 10px;
      }
    }
  }
`;
