import React, { useEffect } from "react";
import useFlickity from "../../../utils/useFlickity";
import { useMovieContext } from "../../../context/MovieContext";
import styled from "styled-components";
import { breakpoints } from "../../../constants/media";
import Textbox from "../../../components/Textbox";
import CategoryItem from "../../../components/CategoryItem";
import Button from "../../../components/Button";
import { StyledCategoryGroupWrapper } from "../../../components/StyledComponents/StyledCategoryGroupWrapper";

const ExploreSection = () => {
  const { moviesByGenres } = useMovieContext();
  useEffect(() => {
    const explore = document.querySelector(".explore");
    if (moviesByGenres?.length > 0) {
      useFlickity(explore);
    }
  }, [moviesByGenres]);

  return (
    <section className="explore --pd-tb" id="explore">
      <div className="container">
        {/* Textbox group */}
        <Textbox className="textbox">
          <Textbox.Content className="textbox__content">
            <h2 className="textbox__content-heading --h2 --heading">
              Explore our wide variety of categories
            </h2>
            <p className="textbox__content-paragraph">
              Whether you're looking for a comedy to make you laugh, a dramta to
              make you think, or a documentary to learn something new
            </p>
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
        <StyledCategoryGroupWrapper className="explore__categroup categroup">
          {moviesByGenres?.map((item, index) => {
            const { id, name, movies } = item || {};
            const images = movies
              ?.slice(0, 4)
              ?.map((item) => item?.poster_path || "");
            return (
              <CategoryItem
                key={id + index + name}
                name={name}
                images={images}
                id={id}
              />
            );
          })}
        </StyledCategoryGroupWrapper>
        {/* Progress bar */}
        <div className="explore__progressbar progressbar">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
