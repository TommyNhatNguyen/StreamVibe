import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";
import useMutation from "../../hooks/useMutation";
import { useEffect } from "react";
import { formatViews } from "../../utils/format";

function useShowDetail() {
  const { movieId } = useParams();
  const {
    execute: getMovieDetail,
    data: movieDetailData,
    loading: movieDetailLoading,
  } = useMutation((query) => movieService.getMovieDetail(query));
  const {
    execute: getMovieReviews,
    data: movieReviewsData,
    loading: movieReviewsLoading,
  } = useMutation((query) => movieService.getMovieReviews(query));
  const {
    data: movieRecommendationData,
    loading: movieRecommendationLoading,
    execute: getMovieRecommendation,
  } = useMutation((movieId) => movieService.getMovieRecommnedations(movieId));
  useEffect(() => {
    if (movieId) {
      getMovieDetail(movieId);
      getMovieReviews(movieId);
      getMovieRecommendation(movieId);
    }
  }, [movieId]);
  const movieDetail = movieDetailData || {};
  const movieReviews = movieReviewsData?.results || [];
  const movieRecommendations = movieRecommendationData?.results || [];
  const { vote_average: voteAverage, vote_count: voteCount } =
    movieDetail || {};
  const NUM_BASE = 5;
  const modifiedVoteAverage = Math.floor((NUM_BASE * voteAverage + 1) / 10);
  const formatedVoteCount = formatViews(voteCount, 1);
  const videoPlayerProps = {
    movieDetail,
    loading: movieDetailLoading,
    voteAverage: modifiedVoteAverage,
    voteCount: formatedVoteCount,
  };
  const reviewProps = {
    movieReviews,
    loading: movieReviewsLoading,
    voteAverage: modifiedVoteAverage,
    voteCount: formatedVoteCount,
  };
  const movieRecommendationProps = {
    movies: movieRecommendations,
    loading: movieRecommendationLoading,
  };
  return { videoPlayerProps, reviewProps, movieRecommendationProps };
}
export default useShowDetail;
