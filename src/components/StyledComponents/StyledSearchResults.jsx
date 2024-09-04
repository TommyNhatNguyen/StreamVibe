import styled from "styled-components";

export const StyledSearchResults = styled.ul`
  display: block;
  position: relative;
  min-height: 300px;
  max-height: 1000px;
  overflow-y: scroll;
  background-color: var(--white-cl);
  border-radius: 12px;
  margin-top: 12px;
  padding: 12px;
  z-index: 1000;
  &.--hidden {
    display: none;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: var(--white-cl);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--black-cl);
  }
  a {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;
