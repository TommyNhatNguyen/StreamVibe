import { createContext, useContext, useEffect, useState } from "react";
import useQuery from "../hooks/useQuery";
import { genresService } from "../services/genresService";
import { axiosInstance } from "../utils/axiosInstance";
import { movieListService } from "../services/movieListService";
import { trendingService } from "../services/trendingService";
import useMutation from "../hooks/useMutation";
import { searchService } from "../services/searchService";

const MovieContext = createContext({});
export const MovieContextWrapper = ({ children }) => {
  const [moviesByGenres, setMoviesByGenres] = useState([]);
  const [movieByGenresLoading, setMovieByGenresLoading] = useState(false);
  const [videosByMovie, setVideosByMovie] = useState([]);
  const [videosByMovieLoading, setVideosByMovieLoading] = useState(false);
  const { data: movieGenresData, loading: movieGenresLoading } = useQuery(
    genresService.getMovieGenresList
  );
  const { data: movieTrendingData, loading: movieTrendingLoading } = useQuery(
    () => trendingService.getTrendingMovies("/day")
  );
  const { data: movieNowPlayingData, loading: movieNowPlayingLoading } =
    useQuery(movieListService.getNowPlayingMovies);
  const { data: movieTopRatedData, loading: movieTopRatedLoading } = useQuery(
    movieListService.getTopRatedMovies
  );
  const {
    data: searchMoviesData,
    execute: getMovieBySearch,
    loading: searchMoviesLoading,
  } = useMutation((query) =>
    searchService.searchMovie({ query: query, include_adult: true })
  );
  const searchMovies = searchMoviesData?.results || [];
  const moviesTrending = movieTrendingData?.results || [];
  const moviesNowPlaying = movieNowPlayingData?.results || [];
  const moviesTopRated = movieTopRatedData?.results || [];
  const movieGenres = movieGenresData?.genres || [];

  const getVideosByMovie = async () => {
    setVideosByMovieLoading(true);
    try {
      const requests = moviesTrending?.map((item) => {
        const { id: movieId } = item || {};
        return axiosInstance.get(`movie/${movieId}/videos`);
      });
      const res = await Promise.all(requests);
      if (res) {
        res.forEach((response, index) => {
          const movie = moviesTrending?.[index] || [];
          const {
            original_title: movieTitle,
            overview: movieOverview,
            backdrop_path: movieBackdrop,
          } = movie || {};
          const videos = response?.data?.results || [];
          setVideosByMovie((prev) => [
            ...prev,
            {
              videos: videos,
              movieTitle,
              movieOverview,
              movieBackdrop,
            },
          ]);
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setVideosByMovieLoading(false);
    }
  };
  const getMovieByGenres = async () => {
    setMovieByGenresLoading(true);
    try {
      const requests = movieGenres?.map((item) => {
        return axiosInstance.get("discover/movie", {
          params: {
            sort_by: "popularity.desc",
            with_genres: item?.id,
          },
        });
      });
      const res = await Promise.all(requests);
      if (res) {
        res.forEach((response, index) => {
          const genresId = response?.config?.params?.with_genres;
          const genresName = movieGenres.filter(
            (item) => item?.id === genresId
          )?.[0]?.name;
          const movies = response?.data?.results || [];
          setMoviesByGenres((prev) => {
            return [
              ...prev,
              {
                id: genresId,
                name: genresName,
                movies: movies,
              },
            ];
          });
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setMovieByGenresLoading(false);
    }
  };
  useEffect(() => {
    if (movieGenres) {
      getMovieByGenres();
    }
  }, [movieGenres]);
  useEffect(() => {
    if (moviesTrending) {
      getVideosByMovie();
    }
  }, [moviesTrending]);

  const apiLoading =
    movieByGenresLoading ||
    videosByMovieLoading ||
    movieGenresLoading ||
    movieTrendingLoading ||
    movieNowPlayingLoading ||
    movieTopRatedLoading;
  return (
    <MovieContext.Provider
      value={{
        moviesByGenres,
        moviesTrending,
        moviesNowPlaying,
        moviesTopRated,
        videosByMovie,
        apiLoading,
        searchMovies,
        searchMoviesLoading,
        getMovieBySearch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
