import styled from "styled-components";
import { breakpoints } from "../../constants/media";

export const StyledCategoryGroupWrapper = styled.ul`
  .categroup__item {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
  &::-webkit-scrollbar {
    height: 2px;
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: var(--black-cl-3);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--black-cl);
  }
  @media (max-width: ${breakpoints.desktop}) {
    .categroup__item {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
`;
