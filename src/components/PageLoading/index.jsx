import { Spin } from "antd";
import React from "react";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

const StyledPageLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--black-cl);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageLoading = () => {
  return (
    <StyledPageLoading>
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </StyledPageLoading>
  );
};

export default PageLoading;
