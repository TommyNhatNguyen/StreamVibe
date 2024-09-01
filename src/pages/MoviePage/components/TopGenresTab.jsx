import classNames from "classnames";
import React, { useEffect, useMemo, useRef, useState } from "react";
import CategoryGroup from "../../../components/CategoryGroup";
import useFlickity from "../../../utils/useFlickity";
import styled from "styled-components";
import { AntdWrapper } from "../../../components/StyledComponents/AntdWrapper";
import ComponentLoading from "../../../components/ComponentLoading";
import { Empty } from "antd";
import { StyledMovieGroupWrapper } from "../../../components/StyledComponents/StyledMovieGroupWrapper";
import MovieItem from "../../../components/MovieItem";
import Textbox from "../../../components/Textbox";
import Button from "../../../components/Button";

const TopGenresTab = ({ moviesByGenres, genres, loading }) => {
  const [selectedGenre, setSelectedGenre] = useState(genres?.[0]?.id);
  const [genreLoading, setGenreLoading] = useState(false);
  const renderMovies = useMemo(() => {
    return moviesByGenres?.filter((item) => item?.id === selectedGenre)?.[0]
      ?.movies;
  }, [selectedGenre, moviesByGenres]);
  const _onSelectGenres = (e, genreId) => {
    e.preventDefault();
    e.stopPropagation();
    setGenreLoading(true);
    setSelectedGenre("");
    setTimeout(() => {
      setSelectedGenre(genreId);
      setGenreLoading(false);
    }, 300);
  };
  useEffect(() => {
    setSelectedGenre(genres?.[0]?.id);
  }, [genres]);
  useEffect(() => {
    let item = document?.querySelector(".moviesgroup__item");
    const explore = document?.querySelector(".explore.--toprated");
    if (item && moviesByGenres?.length > 0 && explore && !loading) {
      useFlickity(explore);
    }
  }, [moviesByGenres, selectedGenre, loading]);
  return (
    <div className="explore --toprated">
      {/* Textbox group */}
      <Textbox className="textbox">
        <Textbox.Content className="textbox__content">
          <h2 className="textbox__content-heading --h2 --heading">
            Popular Top 20 In Genres 🔥
          </h2>
        </Textbox.Content>
        <Textbox.ButtonControlGroup className="textbox__btngroup">
          <Button
            variant="control"
            className="textbox__btngroup-btncontrol btn --btncontrol --arrow-left"
          >
            <img srcSet="./assets/images/arrow-left-icon.png 2x" />
          </Button>
          <Button
            variant="control"
            className="textbox__btngroup-btncontrol btn --btncontrol  --arrow-right"
          >
            <img srcSet="./assets/images/arrow-left-icon.png 2x" />
          </Button>
        </Textbox.ButtonControlGroup>
      </Textbox>
      {/* Category group*/}
      {loading && <ComponentLoading />}
      {renderMovies?.length > 0 && !loading && (
        <StyledMovieGroupWrapper className="explore__moviesgroup moviesgroup">
          {renderMovies?.map((movie, index) => {
            const {
              id,
              vote_average: voteAverage,
              vote_count: voteCount,
              poster_path: image,
            } = movie || {};

            return (
              <MovieItem
                key={id + index}
                voteAverage={voteAverage}
                voteCount={voteCount}
                image={image}
                id={id}
              />
            );
          })}
        </StyledMovieGroupWrapper>
      )}
      {/* Progress bar */}
      {renderMovies?.length > 0 && !loading && (
        <div className="explore__progressbar progressbar">
          <span></span>
        </div>
      )}
    </div>
  );
};

export default TopGenresTab;
