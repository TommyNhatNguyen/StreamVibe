import React, { useEffect } from "react";
import useFlickity from "../../../utils/useFlickity";
import { AntdWrapper } from "../../../components/StyledComponents/AntdWrapper";
import ComponentLoading from "../../../components/ComponentLoading";
import { Empty } from "antd";
import Textbox from "../../../components/Textbox";
import Button from "../../../components/Button";
import { MovieItemSmall } from "../../../components/MovieItem";
import { StyledMovieGroupWrapper } from "../../../components/StyledComponents/StyledMovieGroupWrapper";

const NewTab = ({ moviesNowPlaying, loading, ...props }) => {
  useEffect(() => {
    let item = document?.querySelector(".moviesgroup__item");
    const explore = document?.querySelector(".explore.--new");
    if (item && moviesNowPlaying?.length > 0 && explore && !loading) {
      useFlickity(explore);
    }
  }, [moviesNowPlaying, loading]);
  return (
    <div className="explore --new" {...props}>
      {/* Textbox group */}
      {/* Textbox group */}
      <Textbox className="textbox">
        <Textbox.Content className="textbox__content">
          <h2 className="textbox__content-heading --h2 --heading">
            New Releases 📣
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
      {moviesNowPlaying?.length > 0 && !loading ? (
        <StyledMovieGroupWrapper className="explore__moviesgroup moviesgroup">
          {moviesNowPlaying?.map((movie, index) => {
            const { id, poster_path: image, release_date } = movie || {};
            return (
              <MovieItemSmall
                key={id + index}
                image={image}
                id={id}
                releaseDate={release_date}
              />
            );
          })}
        </StyledMovieGroupWrapper>
      ) : (
        <AntdWrapper>
          <Empty description="Movies not found" />
        </AntdWrapper>
      )}
      {/* Progress bar */}
      {moviesNowPlaying?.length > 0 && !loading && (
        <div className="explore__progressbar progressbar">
          <span></span>
        </div>
      )}
    </div>
  );
};

export default NewTab;
