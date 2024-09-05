import React, { useEffect, useMemo } from "react";
import GenresTab from "./GenresTab";
import TopGenresTab from "./TopGenresTab";
import TrendingTab from "./TrendingTab";
import NewTab from "./NewTab";
import MustWatchTab from "./MustWatchTab";
import { useMovieContext } from "../../../context/MovieContext";
import styled from "styled-components";

const StyledMovieWrapper = styled.div`
  padding: 40px;
  border: 1px solid var(--black-cl-3);
  border-radius: 12px;
  position: relative;
  .movie__wrapper-label {
    border-radius: 8px;
    background-color: var(--red-cl);
    padding: 0 24px;
    height: 50px;
    color: var(--white-cl);
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
    font-family: var(--ff-semibold);
    font-size: var(--fs-tag-big);
    position: absolute;
    top: -23px;
    z-index: 100;
  }
  .explore {
    padding: 100px 0;
    .explore__categroup {
      margin-top: 50px;
    }
  }
`;

const MovieSection = () => {
  const {
    moviesByGenres,
    moviesTrending,
    moviesNowPlaying,
    moviesTopRated,
    apiLoading: loading,
  } = useMovieContext();
  const genres = useMemo(
    () =>
      moviesByGenres?.map((item) => {
        return { id: item?.id, name: item?.name };
      }),
    [moviesByGenres]
  );
  return (
    <section className="movie">
      <div className="container">
        <StyledMovieWrapper className="movie__wrapper">
          {!loading && <div className="movie__wrapper-label">Movies</div>}
          <GenresTab
            moviesByGenres={moviesByGenres}
            loading={loading}
            id="genres"
          />
          <TopGenresTab
            moviesByGenres={moviesByGenres}
            genres={genres}
            loading={loading}
            id="popular"
          />
          <TrendingTab
            moviesTrending={moviesTrending}
            loading={loading}
            id="trending"
          />
          <NewTab
            moviesNowPlaying={moviesNowPlaying}
            loading={loading}
            id="new"
          />
          <MustWatchTab
            moviesTopRated={moviesTopRated}
            loading={loading}
            id="mustwatch"
          />
        </StyledMovieWrapper>
      </div>
    </section>
  );
};

export default MovieSection;
