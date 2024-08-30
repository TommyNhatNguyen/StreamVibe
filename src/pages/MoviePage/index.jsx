import React, { useEffect } from "react";
import useFlickity from "../../utils/useFlickity";
import MovieSection from "./components/MovieSection";
import HeroSection from "./components/HeroSection";
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
