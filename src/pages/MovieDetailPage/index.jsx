import React, { useEffect } from "react";
import { TrailerVideoWrapper } from "../../components/StyledComponents/TrailerVideoWrapper";
import LazyLoad from "react-lazy-load";
import { youtubePath } from "../../constants/general";
import MovieContent from "./components/MovieContent";
import TrialComponent from "../../components/TrialComponent";
import useMovieDetail from "./useMovieDetail";
import HeroMovieComponent from "../../components/HeroMovieComponent";
import MustWatchTab from "../MoviePage/components/MustWatchTab";
import MovieRecommendation from "./components/MovieRecommendation";
import MovieSimilar from "./components/MovieSimilar";
import useMutation from "../../hooks/useMutation";
import { movieService } from "../../services/movieService";

const MovieDetailPage = () => {
  const { movieContentProps, movieHeroProps } = useMovieDetail();
  const { movieVideos, loading } = movieHeroProps || {};
  const { movieDetail } = movieContentProps || {};
  const { id: movieId } = movieDetail || {};
  const {
    data: movieRecommendationData,
    loading: movieRecommendationLoading,
    execute: getMovieRecommendation,
  } = useMutation((movieId) => movieService.getMovieRecommnedations(movieId));
  const {
    data: movieSimilarData,
    loading: movieSimilarLoading,
    execute: getMovieSimilar,
  } = useMutation((movieId) => movieService.getMovieSimilar(movieId));
  const modifiedMovieHeroProps = [
    {
      movieBackdrop: movieDetail?.backdrop_path || "",
      movieOverview: movieDetail?.overview || "",
      movieTitle: movieDetail?.original_title || "",
      videos: movieVideos || [],
    },
  ];
  const movieRecommendations = movieRecommendationData?.results || [];
  const movieSimilar = movieSimilarData?.results || [];
  useEffect(() => {
    getMovieRecommendation(movieId);
    getMovieSimilar(movieId);
  }, [movieId]);
  return (
    <main className="moviedetail">
      <HeroMovieComponent
        sectionClassname="--pd-t"
        videosByMovie={modifiedMovieHeroProps}
        loading={loading}
      />
      <MovieContent {...movieContentProps} />
      <MovieRecommendation
        movies={movieRecommendations}
        loading={movieRecommendationLoading}
      />
      <MovieSimilar movies={movieSimilar} loading={movieSimilarLoading} />
      <TrialComponent />
    </main>
  );
};

export default MovieDetailPage;
