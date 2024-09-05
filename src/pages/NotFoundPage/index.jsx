import React from "react";
import Button from "../../components/Button";
import { PATHS } from "../../constants/paths";
import styled from "styled-components";

const StyledNotFoundWrapper = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .notfound__wrapper-title {
    font-size: 10rem;
  }
  .notfound__wrapper-btn {
    margin-top: 20px;
  }
`;

const NotFoundPage = () => {
  return (
    <main className="notfound">
      <div className="container">
        <StyledNotFoundWrapper className="notfound__wrapper">
          <h1 className="notfound__wrapper-title --h1">404</h1>
          <p className="notfound__wrapper-para">Page not found</p>
          <Button to={PATHS.HOME} className="btn btnmain notfound__wrapper-btn">
            Back to HomePage
          </Button>
        </StyledNotFoundWrapper>
      </div>
    </main>
  );
};

export default NotFoundPage;
