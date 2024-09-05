import React from "react";
import MovieContent from "./components/MovieContent";
import TrialComponent from "../../components/TrialComponent";
import useMovieDetail from "./useMovieDetail";
import HeroMovieComponent from "../../components/HeroMovieComponent";
import MovieSimilar from "../../components/MovieSimilar";
import MovieRecommendation from "../../components/MovieRecommendation";

const MovieDetailPage = () => {
  const {
    movieContentProps,
    movieHeroProps,
    movieRecommendationProps,
    movieSimilarProps,
  } = useMovieDetail();
  const { movieVideos } = movieHeroProps || {};
  const { movieDetail } = movieContentProps || {};
  const modifiedMovieHeroProps = [
    {
      movieBackdrop: movieDetail?.backdrop_path || "",
      movieOverview: movieDetail?.overview || "",
      movieTitle: movieDetail?.title || "",
      movieId: movieDetail?.id || "",
      videos: movieVideos || [],
    },
  ];
  return (
    <main className="moviedetail">
      <HeroMovieComponent
        videosByMovie={modifiedMovieHeroProps}
        scrolling={false}
        {...movieHeroProps}
      />
      <MovieContent {...movieContentProps} />
      <MovieRecommendation {...movieRecommendationProps} />
      <MovieSimilar {...movieSimilarProps} />
      <TrialComponent />
    </main>
  );
};

export default MovieDetailPage;
