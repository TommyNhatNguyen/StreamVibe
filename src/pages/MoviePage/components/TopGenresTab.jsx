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

const StyledTabs = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 25px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-wrap: nowrap;
  height: 60px;
  padding-bottom: 10px;
  &.tabs {
    &::-webkit-scrollbar {
      height: 5px;
    }
    &::-webkit-scrollbar-track {
      background: var(--black-cl);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--white-cl);
    }
  }
  .tabs__item {
    height: 100%;
    &:not(:last-child) {
      margin-right: 12px;
    }
    a {
      height: 100%;
      width: 100%;
      padding: 0 12px;
      border: 1px solid var(--black-cl-3);
      text-wrap: nowrap;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--black-cl-3);
      border-radius: 8px;
      transition: var(--transition-duration);
    }
    &.active,
    &:hover {
      a {
        background-color: var(--red-cl);
        color: var(--white-cl);
      }
    }
  }
`;

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
      <StyledTabs className="tabs" style={{ position: "relative" }}>
        {loading || (genreLoading && <ComponentLoading />)}
        {genres?.length > 0 && !loading && !genreLoading ? (
          genres?.map((item, index) => {
            const { id, name } = item || {};
            return (
              <li
                key={id + index + name}
                className={classNames("tabs__item", {
                  active: selectedGenre === id,
                })}
                onClick={(e) => _onSelectGenres(e, id)}
              >
                <a href="#">{name || ""}</a>
              </li>
            );
          })
        ) : (
          <AntdWrapper>
            <Empty description="Genres not found" />
          </AntdWrapper>
        )}
      </StyledTabs>
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
