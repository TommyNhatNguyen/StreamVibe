import { AutoComplete, Input } from "antd";
import React from "react";
import styled from "styled-components";

const StyledSearchComponentWrapper = styled.div`
  max-width: fit-content;
  padding-bottom: 30px;
  width: 100%;
  .ant-input-wrapper {
    display: flex;
    align-items: center;
    .ant-input {
      font-family: var(--ff-regular);
      font-size: var(--fs-body);
      &:focus {
        border: 1px solid var(--red-cl);
      }
    }
    .ant-btn {
      background-color: var(--red-cl);
      &:hover {
        background-color: initial;
        opacity: var(--opacitiy-hover);
      }
    }
  }
`;

const SearchComponent = ({ ...props }) => {
  return (
    <StyledSearchComponentWrapper className="search-wrapper">
      <AutoComplete
        popupMatchSelectWidth={252}
        style={{ width: 300 }}
        // options={options}
        // onSelect={onSelect}
        // onSearch={handleSearch}
        size="large"
        {...props}
      >
        <Input.Search
          size="large"
          placeholder="Search any movies, tv shows, ..."
          enterButton
        />
      </AutoComplete>
    </StyledSearchComponentWrapper>
  );
};

export default SearchComponent;
