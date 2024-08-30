import React, { useEffect, useMemo } from "react";
import GenresTab from "./GenresTab";
import TopGenresTab from "./TopGenresTab";
import TrendingTab from "./TrendingTab";
import NewTab from "./NewTab";
import MustWatchTab from "./MustWatchTab";
import { useMovieContext } from "../../../context/MovieContext";

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
        <div className="movie__wrapper">
          <div className="movie__wrapper-label">Movie</div>
          <GenresTab moviesByGenres={moviesByGenres} loading={loading} />
          <TopGenresTab
            moviesByGenres={moviesByGenres}
            genres={genres}
            loading={loading}
          />
          <TrendingTab moviesTrending={moviesTrending} loading={loading} />
          <NewTab moviesNowPlaying={moviesNowPlaying} loading={loading} />
          <MustWatchTab
            title="Must - Watch Movies 🤌"
            moviesTopRated={moviesTopRated}
            loading={loading}
          />
        </div>
      </div>
    </section>
  );
};

export default MovieSection;
