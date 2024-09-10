import React, { useEffect } from "react";
import useFlickity from "../../../utils/useFlickity";
import { Empty } from "antd";
import ComponentLoading from "../../../components/ComponentLoading";
import { AntdWrapper } from "../../../components/StyledComponents/AntdWrapper";
import Textbox from "../../../components/Textbox";
import Button from "../../../components/Button";
import { StyledCategoryGroupWrapper } from "../../../components/StyledComponents/StyledCategoryGroupWrapper";
import CategoryItem from "../../../components/CategoryItem";
import { IMAGES_CATEGORIES } from "../../../constants/general";

const GenresTab = ({ movieGenres, loading, ...props }) => {
  useEffect(() => {
    if (movieGenres?.length > 0 && !loading) {
      const explores = document.querySelector(".explore.--genres");
      useFlickity(explores);
    }
  }, [movieGenres, loading]);
  return (
    <div
      className="explore --genres"
      style={{ position: "relative" }}
      {...props}
    >
      {/* Textbox group */}
      <Textbox className="textbox">
        <Textbox.Content className="textbox__content">
          <h2 className="textbox__content-heading --h2 --heading">
            Our Genres 🎨
          </h2>
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
      {loading && <ComponentLoading />}
      {movieGenres?.length > 0 && !loading ? (
        <StyledCategoryGroupWrapper className="explore__categroup categroup">
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
        </StyledCategoryGroupWrapper>
      ) : (
        <AntdWrapper>
          <Empty description="Genres not found" />
        </AntdWrapper>
      )}
      {/* Progress bar */}
      {movieGenres?.length > 0 && !loading && (
        <div className="explore__progressbar progressbar">
          <span></span>
        </div>
      )}
    </div>
  );
};

export default GenresTab;
