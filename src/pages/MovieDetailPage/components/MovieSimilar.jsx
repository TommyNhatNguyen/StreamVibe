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
const MovieSimilar = ({ movies, loading }) => {
  return (
    <section className="similar --pd-b">
      <div className="container">
        <StyledMovieWrapper className="movie__wrapper">
          <MustWatchTab
            title="Similar movies 🍿"
            moviesTopRated={movies}
            loading={loading}
          />
        </StyledMovieWrapper>
      </div>
    </section>
  );
};

export default MovieSimilar;
