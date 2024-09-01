import React, { useEffect } from "react";
import useFlickity from "../../../utils/useFlickity";
import CategoryGroup from "../../../components/CategoryGroup";
import { AntdWrapper } from "../../../components/StyledComponents/AntdWrapper";
import ComponentLoading from "../../../components/ComponentLoading";
import { Empty } from "antd";
import { StyledCategoryGroupWrapper } from "../../../components/StyledComponents/StyledCategoryGroupWrapper";
import { MovieItemSmall } from "../../../components/MovieItem";
import { StyledMovieGroupWrapper } from "../../../components/StyledComponents/StyledMovieGroupWrapper";
import Textbox from "../../../components/Textbox";
import Button from "../../../components/Button";

const TrendingTab = ({ moviesTrending, loading }) => {
  useEffect(() => {
    let item = document?.querySelector(".moviesgroup__item");
    const explore = document?.querySelector(".explore.--trending");
    if (item && moviesTrending?.length > 0 && explore && !loading) {
      useFlickity(explore);
    }
  }, [moviesTrending, loading]);
  return (
    <div className="explore --trending" style={{ position: "relative" }}>
      {/* Textbox group */}
      <Textbox className="textbox">
        <Textbox.Content className="textbox__content">
          <h2 className="textbox__content-heading --h2 --heading">
            Trending Now ⭐️
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
      {moviesTrending?.length > 0 && !loading ? (
        <StyledMovieGroupWrapper className="explore__moviesgroup moviesgroup">
          {moviesTrending?.map((movie, index) => {
            const { id, poster_path: image, popularity } = movie || {};
            return (
              <MovieItemSmall
                key={id + index}
                image={image}
                popularity={popularity}
                id={id}
                duration={true}
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
      {moviesTrending?.length > 0 && !loading && (
        <div className="explore__progressbar progressbar">
          <span></span>
        </div>
      )}
    </div>
  );
};

export default TrendingTab;
