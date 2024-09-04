import React, { useEffect } from "react";
import CategoryGroup from "../../../components/CategoryGroup";
import useFlickity from "../../../utils/useFlickity";
import ComponentLoading from "../../../components/ComponentLoading";
import { Empty } from "antd";
import { AntdWrapper } from "../../../components/StyledComponents/AntdWrapper";
import Textbox from "../../../components/Textbox";
import Button from "../../../components/Button";
import { StyledMovieGroupWrapper } from "../../../components/StyledComponents/StyledMovieGroupWrapper";
import MovieItem from "../../../components/MovieItem";

const MustWatchTab = ({ moviesTopRated, loading, title = "", ...props }) => {
  useEffect(() => {
    if (moviesTopRated?.length > 0 && !loading) {
      const explores = document.querySelectorAll(".explore.--mustwatch");
      explores.forEach((item) => {
        useFlickity(item);
      });
    }
  }, [moviesTopRated, loading]);
  useEffect(() => {
    let item = document?.querySelector(".moviesgroup__item");
    const explore = document?.querySelector(".explore.--mustwatch");
    if (item && moviesTopRated?.length > 0 && explore && !loading) {
      useFlickity(explore);
    }
  }, [moviesTopRated, loading]);
  return (
    <div className="explore --mustwatch" {...props}>
      {/* Textbox group */}
      <Textbox className="textbox">
        <Textbox.Content className="textbox__content">
          <h2 className="textbox__content-heading --h2 --heading">
            {title || "Must - Watch Movies 🤌"}
          </h2>
        </Textbox.Content>
        <Textbox.ButtonControlGroup className="textbox__btngroup">
          <Button
            variant="control"
            className="textbox__btngroup-btncontrol btn --btncontrol --arrow-left"
          >
            <img srcSet="/assets/images/arrow-left-icon.png 2x" />
          </Button>
          <Button
            variant="control"
            className="textbox__btngroup-btncontrol btn --btncontrol  --arrow-right"
          >
            <img srcSet="/assets/images/arrow-left-icon.png 2x" />
          </Button>
        </Textbox.ButtonControlGroup>
      </Textbox>
      {/* Category group*/}
      {loading && <ComponentLoading />}
      {moviesTopRated?.length > 0 && !loading && (
        <StyledMovieGroupWrapper className="explore__moviesgroup moviesgroup">
          {moviesTopRated?.map((movie, index) => {
            const {
              id,
              vote_average: voteAverage,
              vote_count: voteCount,
              poster_path: image,
            } = movie || {};
            return (
              <MovieItem
                key={id + index + image}
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
      {moviesTopRated?.length > 0 && !loading && (
        <div className="explore__progressbar progressbar">
          <span></span>
        </div>
      )}
    </div>
  );
};

export default MustWatchTab;
