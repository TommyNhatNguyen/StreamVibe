import styled from "styled-components";
import { breakpoints } from "../../../constants/media";

export const StyledMovieItemHorizontal = styled.div`
  display: flex;
  align-items: stretch;
  overflow: hidden;
  .movieitem__img {
    flex-shrink: 0;
    position: relative;
    margin-right: 10px;
    &-thumb {
      max-height: 234px;
      border-radius: 12px;
      overflow: hidden;
      aspect-ratio: 2/ 3;
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
      img {
        object-fit: cover;
        object-position: center;
        transition: var(--transition-duration);
      }
    }
    &-rating {
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 0;
      height: 35px;
      width: 35px;
      padding: 10px;
      display: flex;
      background-color: var(--white-cl);
      border-radius: 100%;
      border: 3px solid var(--black-cl-3);
      color: var(--black-cl);
      font-family: var(--ff-medium);
      font-size: var(--fs-tag-md);
    }
  }
  .movieitem__content {
    &-info {
      color: var(--black-cl);
      .title {
        color: var(--black-cl);
      }
      .paragraph {
        display: -webkit-inline-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    &-btngroup {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    .movieitem__img {
      margin-bottom: 10px;
    }
  }
`;
