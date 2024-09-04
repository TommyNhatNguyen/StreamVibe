import React from "react";
import MustWatchTab from "../../MoviePage/components/MustWatchTab";
import styled from "styled-components";
import { breakpoints } from "../../../constants/media";

const StyledMovieWrapper = styled.div`
  .explore__categroup {
    margin-top: 50px;
  }
  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 40px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 20px;
  }
`;

const MovieRecommendation = ({ movieRecommendations, loading }) => {
  return (
    <section className="recommendation --pd-b">
      <div className="container">
        <StyledMovieWrapper className="movie__wrapper">
          <MustWatchTab
            title="You might love these 🤯"
            moviesTopRated={movieRecommendations}
            loading={loading}
          />
        </StyledMovieWrapper>
      </div>
    </section>
  );
};

export default MovieRecommendation;
