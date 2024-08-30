import React, { useEffect } from "react";
import MovieSection from "./components/MovieSection";
import { useMovieContext } from "../../context/MovieContext";
import HeroMovieComponent from "../../components/HeroMovieComponent";

const MoviePage = () => {
  const { videosByMovie, apiLoading } = useMovieContext();
  return (
    <main className="moviepage">
      <HeroMovieComponent videosByMovie={videosByMovie} loading={apiLoading} />
      <MovieSection />
    </main>
  );
};

export default MoviePage;
