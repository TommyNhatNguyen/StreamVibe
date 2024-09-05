import { useParams } from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import { movieService } from "../../services/movieService";
import { useEffect } from "react";
import { externalService } from "../../services/externalService";
import { useDispatch, useSelector } from "react-redux";
import { addFavoritesMovies } from "../../store/reducer/favoritesReducer";
import { addWatchList } from "../../store/reducer/watchlistReducer";

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
    data: movieRecommendationData,
    loading: movieRecommendationLoading,
    execute: getMovieRecommendation,
  } = useMutation((movieId) => movieService.getMovieRecommnedations(movieId));
  const {
    data: movieSimilarData,
    loading: movieSimilarLoading,
    execute: getMovieSimilar,
  } = useMutation((movieId) => movieService.getMovieSimilar(movieId));

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
  const movieRecommendations = movieRecommendationData?.results || [];
  const movieSimilar = movieSimilarData?.results || [];

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
      getMovieRecommendation(movieId);
      getMovieSimilar(movieId);
    }
  }, [movieId]);
  useEffect(() => {
    if (imbdbId) getImdbDetail(imbdbId);
  }, [movieDetail]);
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);
  const { watchlist } = useSelector((state) => state.watchlist);
  const handleAddtoFavorite = (movieId) => {
    dispatch(addFavoritesMovies({ movieId: movieId }));
  };
  const handleAddtoWatchlist = (movieId) => {
    dispatch(addWatchList({ movieId: movieId }));
  };

  const movieHeroProps = {
    movieVideos,
    loading: movieVideoLoading,
    favorites,
    watchlist,
    handleAddtoFavorite,
    handleAddtoWatchlist,
  };
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
  const movieRecommendationProps = {
    movies: movieRecommendations,
    loading: movieRecommendationLoading,
  };
  const movieSimilarProps = {
    movies: movieSimilar,
    loading: movieSimilarLoading,
  };
  return {
    movieContentProps,
    movieHeroProps,
    movieRecommendationProps,
    movieSimilarProps,
  };
}
export default useMovieDetail;
