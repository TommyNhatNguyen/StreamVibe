import React, { useEffect } from "react";
import MovieSection from "./components/MovieSection";
import { useMovieContext } from "../../context/MovieContext";
import HeroMovieComponent from "../../components/HeroMovieComponent";
import { useDispatch, useSelector } from "react-redux";
import { addFavoritesMovies } from "../../store/reducer/favoritesReducer";

const MoviePage = () => {
  const { videosByMovie, apiLoading } = useMovieContext();
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);
  const handleAddtoFavorite = (movieId) => {
    dispatch(addFavoritesMovies({ movieId: movieId }));
  };
  return (
    <main className="moviepage">
      <HeroMovieComponent
        handleAddtoFavorite={handleAddtoFavorite}
        favorites={favorites}
        videosByMovie={videosByMovie}
        loading={apiLoading}
      />
      <MovieSection />
    </main>
  );
};

export default MoviePage;
