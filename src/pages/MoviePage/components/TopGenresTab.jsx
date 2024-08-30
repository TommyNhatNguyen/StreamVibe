import classNames from "classnames";
import React, { useEffect, useMemo, useRef, useState } from "react";
import CategoryGroup from "../../../components/CategoryGroup";
import useFlickity from "../../../utils/useFlickity";
import styled from "styled-components";
import { AntdWrapper } from "../../../components/StyledComponents/AntdWrapper";
import ComponentLoading from "../../../components/ComponentLoading";
import { Empty } from "antd";

const CategoryGroupWrapper = styled.div`
  min-height: 404px;
  overflow: hidden;
  @media (max-width: 991.98px) {
    min-height: 330px;
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
  const flik = useRef();
  useEffect(() => {
    let item = document?.querySelector(".categroup__item.--mustwatch");
    const explore = document.querySelector(".explore.--mustwatch");
    if (item && moviesByGenres?.length > 0 && explore && !loading) {
      flik.current = useFlickity(explore);
    }
    return () => {
      if (flik.current) {
        flik.current.destroy();
      }
    };
  }, [moviesByGenres, selectedGenre, loading]);
  return (
    <div className="explore --mustwatch">
      {/* Textbox group */}
      <div className="explore__textboxgroup textbox --left">
        <div className="textbox__content --tabs">
          <h2 className="textbox__content-heading --h2 --heading">
            Popular Top 20 In Genres 🔥
          </h2>
          <ul className="textbox__tabs" style={{ position: "relative" }}>
            {loading || (genreLoading && <ComponentLoading />)}
            {genres?.length > 0 && !loading && !genreLoading ? (
              genres?.map((item, index) => {
                const { id, name } = item || {};
                return (
                  <li
                    key={id + index + name}
                    className={classNames("textbox__tabs-item", {
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
          </ul>
        </div>
      </div>
      {/* Category group*/}
      <CategoryGroupWrapper style={{ position: "relative" }}>
        {loading && <ComponentLoading />}
        {renderMovies?.length > 0 && !loading && (
          <CategoryGroup classes="--mustwatch">
            {renderMovies?.map((movie, index) => {
              const {
                id,
                vote_average: voteAverage,
                vote_count: voteCount,
                poster_path: image,
              } = movie || {};

              return (
                <CategoryGroup.ItemMustWatch
                  key={id + index}
                  voteAverage={voteAverage}
                  voteCount={voteCount}
                  image={image}
                  id={id}
                />
              );
            })}
          </CategoryGroup>
        )}
      </CategoryGroupWrapper>

      {/* Progress bar */}
      {renderMovies?.length > 0 && !loading && (
        <div className="explore__progressbar">
          <span></span>
        </div>
      )}
    </div>
  );
};

export default TopGenresTab;
