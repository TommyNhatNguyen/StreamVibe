import { useParams } from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import { movieService } from "../../services/movieService";
import { useEffect } from "react";
import { externalService } from "../../services/externalService";

function useMovieDetail() {
  const { movieId } = useParams();
  const {
    execute: getMovieTranslationData,
    data: movieTranslationData,
    loading: movieTranslationLoading,
  } = useMutation((query) => movieService.getMovieTranslation(query));
  const {
    execute: getMovieDetail,
    data: movieDetailData,
    loading: movieDetailLoading,
  } = useMutation((query) => movieService.getMovieDetail(query));
  const {
    execute: getMovieCredits,
    data: movieCreditsData,
    loading: movieCreditsLoading,
  } = useMutation((query) => movieService.getMovieCredits(query));
  const {
    execute: getMovieReviews,
    data: movieReviewsData,
    loading: movieReviewsLoading,
  } = useMutation((query) => movieService.getMovieReviews(query));
  const {
    execute: getMovieVideo,
    data: movieVideoData,
    loading: movieVideoLoading,
  } = useMutation((query) => movieService.getVideos(query));

  const {
    execute: getImdbDetail,
    data: imdbDetail,
    loading: imdbLoading,
  } = useMutation((query) => externalService.getMovieDetailByImdb(query));
  const translations = movieTranslationData?.translations || [];
  const movieDetail = movieDetailData || {};
  const { cast: movieCast, crew: movieCrew } = movieCreditsData || {};
  const movieReviews = movieReviewsData?.results || [];
  const movieVideos = movieVideoData?.results || [];
  const movieDirector = movieCrew?.find(
    (item) => item?.known_for_department === "Directing"
  );
  const movieMusician = movieCrew?.find(
    (item) =>
      item?.known_for_department === "Sound" && item?.department === "Sound"
  );
  const { imdb_id: imbdbId } = movieDetail || {};
  const movieDetailByImdb = imdbDetail?.movie_results?.[0] || [];
  const apiLoading =
    movieDetailLoading ||
    movieCreditsLoading ||
    movieReviewsLoading ||
    movieTranslationLoading ||
    imdbLoading ||
    movieVideoLoading;
  useEffect(() => {
    if (movieId) {
      getMovieTranslationData(movieId);
      getMovieDetail(movieId);
      getMovieCredits(movieId);
      getMovieReviews(movieId);
      getMovieVideo(movieId);
    }
  }, [movieId]);
  useEffect(() => {
    if (imbdbId) getImdbDetail(imbdbId);
  }, [movieDetail]);
  const movieHeroProps = { movieVideos, loading: movieVideoLoading };
  const movieContentProps = {
    translations,
    movieDetail,
    movieCast,
    movieReviews,
    movieDirector,
    movieMusician,
    movieDetailByImdb,
    apiLoading,
  };
  return { movieContentProps, movieHeroProps };
}
export default useMovieDetail;
