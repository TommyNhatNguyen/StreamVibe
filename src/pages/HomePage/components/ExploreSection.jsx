import React, { useEffect } from "react";
import useFlickity from "../../../utils/useFlickity";
import { useMovieContext } from "../../../context/MovieContext";
import Textbox from "../../../components/Textbox";
import CategoryItem from "../../../components/CategoryItem";
import Button from "../../../components/Button";
import { StyledCategoryGroupWrapper } from "../../../components/StyledComponents/StyledCategoryGroupWrapper";
import { IMAGES_CATEGORIES } from "../../../constants/general";
import ComponentLoading from "../../../components/ComponentLoading";

const ExploreSection = () => {
  const { movieGenres, movieGenresLoading } = useMovieContext();
  useEffect(() => {
    const explore = document.querySelector(".explore");
    if (movieGenres?.length > 0) {
      useFlickity(explore);
    }
  }, [movieGenres]);

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
              <img
                srcSet="./assets/images/arrow-left-icon.png 2x"
                alt="arrow icon"
              />
            </Button>
            <Button
              variant="control"
              className="textbox__btngroup-btncontrol btn --btncontrol  --arrow-right"
            >
              <img
                srcSet="./assets/images/arrow-left-icon.png 2x"
                alt="arrow icon"
              />
            </Button>
          </Textbox.ButtonControlGroup>
        </Textbox>
        <StyledCategoryGroupWrapper className="explore__categroup categroup">
          {movieGenresLoading && <ComponentLoading />}
          {movieGenres?.length > 0 && !movieGenresLoading && (
            <>
              <CategoryItem
                name="All"
                image={["/assets/images/home/hero-banner.jpg"]}
                id={movieGenres?.[0]?.id}
              />
              {movieGenres?.map((item, index) => {
                const { id, name } = item || {};
                const image = IMAGES_CATEGORIES.find(
                  (item) => item.genre === name.toLowerCase()
                ).imgPath;
                return (
                  <CategoryItem
                    key={id + index + name}
                    name={name}
                    image={image}
                    id={id}
                  />
                );
              })}
            </>
          )}
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
