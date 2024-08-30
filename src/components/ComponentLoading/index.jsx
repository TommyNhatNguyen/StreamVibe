import { Spin } from "antd";
import React from "react";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

const StyledComponentLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.$bgTransparent ? "transparent" : "var(--black-cl)"};
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ComponentLoading = ({ ...props }) => {
  return (
    <StyledComponentLoading {...props}>
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </StyledComponentLoading>
  );
};

export default ComponentLoading;
